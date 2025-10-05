"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2 font-display text-lg">About ShopVibe</h3>
          <p className="text-sm mb-2 font-body leading-relaxed">ShopVibe is a premium e-commerce platform offering high-quality products across various categories. We are committed to providing exceptional shopping experiences.</p>
          <p className="text-xs font-body opacity-80">Our mission is to connect people with products they love at prices they can afford.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2 font-display text-lg">Quick Links</h3>
          <ul className="space-y-1 text-sm font-body">
            <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-purple-400 transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            <li><Link href="/search" className="hover:text-purple-400 transition-colors">Search</Link></li>
            <li><Link href="/wishlist" className="hover:text-purple-400 transition-colors">Wishlist</Link></li>
            <li><Link href="/account" className="hover:text-purple-400 transition-colors">My Account</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 font-display text-lg">Customer Service</h3>
          <ul className="space-y-1 text-sm font-body">
            <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
            <li><Link href="/faqs" className="hover:text-purple-400 transition-colors">FAQs</Link></li>
            <li><Link href="/orders" className="hover:text-purple-400 transition-colors">Orders</Link></li>
            <li><Link href="/cart" className="hover:text-purple-400 transition-colors">Cart</Link></li>
            <li><Link href="/checkout" className="hover:text-purple-400 transition-colors">Checkout</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 font-display text-lg">Contact Info</h3>
          <ul className="text-sm space-y-1 font-body">
            <li>123 Shopping Street, NY 10001</li>
            <li className="font-mono">+1 (555) 123-4567</li>
            <li className="font-mono">info@shopvibe.com</li>
            <li className="flex space-x-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-purple-400 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-purple-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-purple-400 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8 font-body">© 2025 ShopVibe. All Rights Reserved.</div>
    </footer>
  );
}
 