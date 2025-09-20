"use client";

import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 opacity-80">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="font-semibold">Contact Us</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 opacity-90">We'd love to hear from you</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <SectionHeader 
              title="Send us a Message" 
              subtitle="Fill out the form below and we'll get back to you as soon as possible"
              centered={false}
            />
            
            <div className="bg-white rounded-2xl shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-900"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="product">Product Question</option>
                    <option value="shipping">Shipping & Returns</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical placeholder-gray-900"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <SectionHeader 
              title="Get in Touch" 
              subtitle="Here are other ways to reach us"
              centered={false}
            />

            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-black">Visit Our Store</h3>
                    <p className="text-gray-600">
                      123 Shopping Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-black">Call Us</h3>
                    <p className="text-gray-600">
                      Phone: +218 0929209456<br />
                      Toll Free: 1-800-SHOPVIBE<br />
                      Mon-Fri: 9AM-6PM EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-black">Email Us</h3>
                    <p className="text-gray-600">
                      General: info@shopvibe.com<br />
                      Support: support@shopvibe.com<br />
                      Sales: sales@shopvibe.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-black">Live Chat</h3>
                    <p className="text-gray-600 mb-3">
                      Get instant help from our support team
                    </p>
                    <Button size="sm" variant="outline">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}