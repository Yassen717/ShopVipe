"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const inWishlist = isInWishlist(product.id);

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(product);
        }
    };

    const handleWishlistToggle = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 flex flex-col gap-3">
            <div className="relative">
                <button
                    onClick={handleWishlistToggle}
                    className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        inWishlist 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/80 text-gray-400 hover:text-red-500'
                    }`}
                    title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    {inWishlist ? '❤️' : '🤍'}
                </button>
                <Link href={`/product/${product.id}`}>
                    <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg mb-2 overflow-hidden cursor-pointer">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={80}
                            height={80}
                            className="object-contain h-20 w-20 hover:scale-105 transition-transform duration-200"
                        />
                    ) : (
                        <span className="text-4xl text-gray-300">🛍️</span>
                    )}
                    </div>
                </Link>
            </div>

            <div className="flex-1">
                <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-2 hover:text-purple-600 cursor-pointer">{product.name}</h3>
                </Link>
                <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                <div className="text-pink-500 font-bold text-xl mb-2">${product.price.toFixed(2)}</div>

                <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <span key={idx} className="text-lg">
                            {idx < product.rating ? '★' : '☆'}
                        </span>
                    ))}
                    <span className="text-gray-500 text-xs ml-1">({product.rating})</span>
                </div>

                {product.colors.length > 0 && (
                    <div className="flex gap-1 mb-3">
                        {product.colors.slice(0, 4).map((color, idx) => (
                            <div
                                key={idx}
                                className={`w-4 h-4 rounded-full border-2 border-white shadow-sm`}
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                        {product.colors.length > 4 && (
                            <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 4}</span>
                        )}
                    </div>
                )}
            </div>

            <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-pink-400 to-blue-500 hover:from-pink-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
                Add to Cart
            </button>
        </div>
    );
}