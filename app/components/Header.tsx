"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center text-2xl font-bold">
          <span className="text-purple-600">Shop</span><span className="text-pink-500">Vibe</span>
        </Link>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/account">My Account</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faqs">FAQs</Link>
        </nav>
      </div>
    </header>
  );
} 