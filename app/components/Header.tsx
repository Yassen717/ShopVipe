"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./auth/AuthModal";
import SearchAutocomplete from "./SearchAutocomplete";

export default function Header() {
  const { state } = useCart();
  const { user, logout, enabled } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {!enabled && (
        <div className="w-full bg-yellow-50 border-b border-yellow-200 text-yellow-800 text-sm text-center py-2">
          Demo mode: authentication is disabled. Configure Appwrite env vars to enable auth.
        </div>
      )}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center text-2xl font-black">
          <span className="text-purple-600 font-display">Shop</span><span className="text-pink-500 font-display">Vibe</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-purple-600 transition-colors font-body">Home</Link>
          <Link href="/shop" className="hover:text-purple-600 transition-colors font-body">Shop</Link>
          <Link href="/wishlist" className="hover:text-purple-600 transition-colors font-body">Wishlist</Link>
          <Link href="/account" className="hover:text-purple-600 transition-colors font-body">My Account</Link>
          <Link href="/about" className="hover:text-purple-600 transition-colors font-body">About Us</Link>
          <Link href="/contact" className="hover:text-purple-600 transition-colors font-body">Contact</Link>
          <Link href="/faqs" className="hover:text-purple-600 transition-colors font-body">FAQs</Link>
        </nav>

        <div className="flex items-center gap-6">
          {/* Search Autocomplete */}
          <div className="hidden lg:block">
            <SearchAutocomplete 
              placeholder="Search products..."
              className="w-52"
            />
          </div>
          {/* Authentication */}
          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/account" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                👤 {user.name}
              </Link>
              <button
                onClick={logout}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setAuthMode('login');
                  setAuthModalOpen(true);
                }}
                className="text-gray-700 hover:text-purple-600 transition-colors px-6 py-2 font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setAuthMode('register');
                  setAuthModalOpen(true);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all font-semibold"
              >
                Sign Up
              </button>
            </div>
          )}

          <Link href="/cart" className="relative">
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-blue-500 text-white px-4 py-2 rounded-full hover:from-pink-500 hover:to-blue-600 transition-all">
              <span className="text-lg">🛒</span>
              <span className="font-semibold">Cart</span>
              {state.itemCount > 0 && (
                <span className="bg-white text-pink-500 text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center">
                  {state.itemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
} 