"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Button from '../../components/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetail() {
  const params = useParams();
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const [showNotification, setShowNotification] = useState(false);
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="bg-[#f8f9ff] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛍️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link href="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>{quantity} item(s) added to cart!</span>
          </div>
        </div>
      )}
      
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/shop" className="hover:text-purple-600">Shop</Link>
          <span className="mx-2">&gt;</span>
          <span className="font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg mb-4">
              {product.image ? (
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={400} 
                  height={400} 
                  className="object-contain max-w-full max-h-full" 
                />
              ) : (
                <span className="text-8xl text-gray-300">🛍️</span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-2">{product.brand}</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                </div>
                <span className="text-sm text-gray-600">({product.rating}/5)</span>
              </div>
              <div className="text-3xl font-bold text-pink-500 mb-6">
                ${product.price.toFixed(2)}
              </div>
            </div>

            {/* Colors */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 cursor-pointer transition-all ${
                        selectedColor === color ? 'border-purple-500 scale-110' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded border cursor-pointer transition-colors ${
                        selectedSize === size 
                          ? 'bg-purple-500 text-white border-purple-500' 
                          : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button 
                onClick={handleAddToCart} 
                size="lg" 
                className="w-full"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              <Link href="/checkout">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  Buy Now
                </Button>
              </Link>
            </div>

            {/* Product Description */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-4">Product Description</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience premium quality and style with our {product.name}. Crafted with attention to detail and designed for comfort, this product combines functionality with modern aesthetics. Perfect for everyday wear or special occasions.
              </p>
              
              <h3 className="font-semibold mb-4">Features & Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Premium quality materials and construction
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Available in multiple colors and sizes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Free shipping on orders over $75
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  30-day hassle-free return policy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Secure payment processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Customer satisfaction guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.brand === product.brand)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                  <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg mb-3">
                      {relatedProduct.image ? (
                        <Image 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name} 
                          width={200} 
                          height={200} 
                          className="object-contain max-w-full max-h-full" 
                        />
                      ) : (
                        <span className="text-4xl text-gray-300">🛍️</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{relatedProduct.name}</h3>
                    <p className="text-pink-500 font-bold">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}