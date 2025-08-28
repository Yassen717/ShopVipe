"use client";

import { useState } from 'react';
import Button from './Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Please enter a valid email address.');
      }
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-12 px-4 rounded-3xl max-w-6xl mx-auto my-12 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Subscribe to Our Newsletter</h2>
      <p className="text-center mb-6">Stay updated with our latest products, offers, and news. Get exclusive deals directly to your inbox!</p>
      
      {message && (
        <div className={`text-center mb-4 p-3 rounded-lg ${
          status === 'success' ? 'bg-green-500/20 border border-green-300' : 'bg-red-500/20 border border-red-300'
        }`}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address" 
          className="rounded-full px-4 py-2 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white"
          disabled={status === 'loading'}
          required
        />
        <Button 
          type="submit" 
          className="rounded-full min-w-[120px]"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      
      <p className="text-center text-sm opacity-80 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </section>
  );
}
