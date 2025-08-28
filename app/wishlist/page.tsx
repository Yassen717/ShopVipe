"use client";

import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, clearWishlist } = useWishlist();
  const { addItem } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="bg-[#f8f9ff] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-8xl mb-6">💝</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">Save items you love to your wishlist and shop them later.</p>
            <Link href="/shop">
              <Button size="lg">Discover Products</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 opacity-80">
            <Link href="/" className="hover:opacity-100">Home</Link> 
            <span className="mx-2">&gt;</span> 
            <span className="font-semibold">Wishlist</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">My Wishlist</h1>
          <p className="mt-2 opacity-90">{wishlist.length} item(s) saved</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Saved Items</h2>
          {wishlist.length > 0 && (
            <Button 
              variant="outline" 
              onClick={clearWishlist}
              className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
            >
              Clear Wishlist
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addItem}
            />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => {
                wishlist.forEach(product => addItem(product));
              }}
              className="flex-1"
            >
              Add All to Cart
            </Button>
            <Link href="/shop" className="flex-1">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
