"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-2">About ShopVibe</h3>
          <p className="text-sm mb-2">ShopVibe is a premium e-commerce platform offering high-quality products across various categories. We are committed to providing exceptional shopping experiences.</p>
          <p className="text-xs">Our mission is to connect people with products they love at prices they can afford.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/special-offers">Special Offers</Link></li>
            <li><Link href="/account">My Account</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/shipping-policy">Shipping Policy</Link></li>
            <li><Link href="/returns">Returns & Exchanges</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact Info</h3>
          <ul className="text-sm space-y-1">
            <li>123 Shopping Street, NY 10001</li>
            <li>+1 (555) 123-4567</li>
            <li>info@shopvibe.com</li>
            <li className="flex space-x-3 mt-2">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">© 2025 ShopVibe. All Rights Reserved.</div>
    </footer>
  );
} 