"use client";

import { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I place an order?",
    answer: "Simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide your shipping information and payment details to complete your order.",
    category: "ordering"
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay for your convenience.",
    category: "payment"
  },
  {
    id: 3,
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-7 business days. Express shipping (1-3 business days) and overnight shipping options are also available at checkout.",
    category: "shipping"
  },
  {
    id: 4,
    question: "Do you offer free shipping?",
    answer: "Yes! We offer free standard shipping on all orders over $75. Orders under $75 have a flat shipping rate of $5.99.",
    category: "shipping"
  },
  {
    id: 5,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some restrictions apply to certain product categories.",
    category: "returns"
  },
  {
    id: 6,
    question: "How do I return an item?",
    answer: "To return an item, log into your account, go to your order history, and select 'Return Item'. You'll receive a prepaid return label and instructions.",
    category: "returns"
  },
  {
    id: 7,
    question: "Can I track my order?",
    answer: "Yes! Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account.",
    category: "shipping"
  },
  {
    id: 8,
    question: "Do you have a size guide?",
    answer: "Yes, each product page includes detailed size information. You can also find our comprehensive size guide in the footer of our website.",
    category: "products"
  },
  {
    id: 9,
    question: "Are your products authentic?",
    answer: "Absolutely! We only source products directly from authorized distributors and brand partners to ensure 100% authenticity.",
    category: "products"
  },
  {
    id: 10,
    question: "How can I contact customer service?",
    answer: "You can reach us via email at support@shopvibe.com, phone at +1 (555) 123-4567, or through our live chat feature available 24/7.",
    category: "support"
  }
];

const categories = [
  { id: 'all', name: 'All Questions', icon: '❓' },
  { id: 'ordering', name: 'Ordering', icon: '🛒' },
  { id: 'payment', name: 'Payment', icon: '💳' },
  { id: 'shipping', name: 'Shipping', icon: '📦' },
  { id: 'returns', name: 'Returns', icon: '↩️' },
  { id: 'products', name: 'Products', icon: '🛍️' },
  { id: 'support', name: 'Support', icon: '💬' }
];

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 opacity-80">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="font-semibold">FAQs</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-2 opacity-90">Find answers to common questions about shopping with us</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-purple-50 shadow-sm'
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map(faq => (
            <div key={faq.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-lg text-gray-800 pr-4">{faq.question}</h3>
                <div className={`transform transition-transform duration-200 ${
                  openFAQ === faq.id ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤔</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No FAQs found</h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </div>
        )}

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-xl mb-8 opacity-90">Our customer support team is here to help</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 rounded-lg transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}