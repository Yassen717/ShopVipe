"use client";
import { useState } from "react";

const categories = [
  { key: "orders", label: "Orders" },
  { key: "shipping", label: "Shipping" },
  { key: "returns", label: "Returns" },
  { key: "payment", label: "Payment" },
  { key: "account", label: "Account" },
];

type FaqItem = { q: string; a: string };
const faqs: Record<string, FaqItem[]> = {
  orders: [
    {
      q: "How do I track my order?",
      a: "You can track your order by logging into your account and visiting the 'Order History' section. Alternatively, you can use the tracking number provided in your shipping confirmation email by entering it on our tracking page or directly on the courier’s website.",
    },
    {
      q: "Can I modify or cancel my order after it’s been placed?",
      a: "Orders can only be modified or canceled within 1 hour of placing them. Please contact our support team as soon as possible.",
    },
    {
      q: "What should I do if an item in my order is missing?",
      a: "If an item is missing, please contact our support team with your order number and details. We’ll resolve the issue promptly.",
    },
  ],
  shipping: [
    {
      q: "How long will it take for my order to arrive?",
      a: "Delivery times depend on your location and shipping method. Most orders arrive within 3-7 business days.",
    },
    {
      q: "Do you offer free shipping?",
      a: "Yes, we offer free standard shipping on orders over $50.",
    },
    {
      q: "Which countries do you ship to?",
      a: "We ship to over 25 countries worldwide. See our shipping policy for the full list.",
    },
  ],
  returns: [
    {
      q: "What is your return policy?",
      a: "We accept returns within 30 days of delivery. Items must be unused and in original packaging.",
    },
    {
      q: "How do I initiate a return?",
      a: "Log in to your account, go to 'Order History', and select the order you wish to return. Follow the prompts to initiate a return.",
    },
    {
      q: "How long does it take to process a refund?",
      a: "Refunds are processed within 5-7 business days after we receive your returned item.",
    },
  ],
  payment: [
    {
      q: "What payment methods do you accept?",
      a: "We accept Visa, MasterCard, American Express, PayPal, and ShopVibe gift cards.",
    },
    {
      q: "Is it safe to use my credit card on your website?",
      a: "Yes, we use industry-standard encryption to protect your payment information.",
    },
    {
      q: "Do you offer installment payment options?",
      a: "Yes, we offer installment options at checkout through select payment providers.",
    },
  ],
  account: [
    {
      q: "How do I create an account?",
      a: "Click 'My Account' in the top navigation and follow the prompts to register.",
    },
    {
      q: "I forgot my password. How do I reset it?",
      a: "Click 'Forgot Password' on the login page and follow the instructions to reset your password.",
    },
    {
      q: "How do I update my personal information?",
      a: "Log in to your account and go to 'Account Settings' to update your information.",
    },
  ],
};

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState<string>("orders");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs[activeCategory].filter((faq: FaqItem) =>
    faq.q.toLowerCase().includes(search.toLowerCase()) ||
    faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Gradient Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl">Find answers to the most common questions about our products, services, and policies.</p>
        </div>
      </section>

      {/* Search & Categories */}
      <div className="max-w-3xl mx-auto px-4 mb-8">
        <div className="flex items-center mb-6">
          <input
            type="text"
            className="w-full rounded-full px-5 py-3 border shadow focus:outline-none"
            placeholder="Search for questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition border ${activeCategory === cat.key ? 'bg-blue-600 text-white border-blue-600 shadow' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
              onClick={() => { setActiveCategory(cat.key); setOpenIndex(0); }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordions */}
      <div className="max-w-3xl mx-auto px-4 mb-16">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{categories.find(c => c.key === activeCategory)?.label}</h2>
        <div className="space-y-3">
          {filteredFaqs.map((faq: FaqItem, idx: number) => (
            <div key={faq.q} className="bg-white rounded-xl shadow">
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className="ml-4 text-lg">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-gray-700 text-sm border-t">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl py-10 flex flex-col items-center text-white">
          <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
          <p className="mb-4 text-center max-w-xl">Can’t find the answer you’re looking for? Our customer support team is here to help you with any questions or concerns.</p>
          <a href="/contact" className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-50 transition">Contact Us</a>
        </div>
      </section>
    </div>
  );
} 