"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import SearchAutocomplete from '../components/SearchAutocomplete';

export default function Search() {
  const searchParams = useSearchParams();
  const { addItem } = useCart();
  const { searchProducts, addToRecentSearches, popularSearches } = useSearch();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    if (query) {
      addToRecentSearches(query);
      const filtered = searchProducts(query);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams, searchProducts, addToRecentSearches]);

  const handleSearch = (query: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('q', query);
    window.history.pushState({}, '', url);
    setSearchQuery(query);
    const filtered = searchProducts(query);
    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 opacity-80">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="font-semibold">Search</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Search Products</h1>
          
          {/* Search Form */}
          <div className="max-w-2xl">
            <SearchAutocomplete 
              placeholder="Search for products, brands..."
              onSearch={handleSearch}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Search Results Header */}
        <div className="mb-8">
          {searchQuery ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">All Products</h2>
              <p className="text-gray-600">Browse our complete collection</p>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addItem}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No products found</h3>
            <p className="text-gray-600 mb-8">
              We couldn't find any products matching "{searchQuery}". Try different keywords or browse our categories.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setSearchQuery('')}
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Show All Products
              </button>
            </div>
          </div>
        )}

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map(term => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="bg-white hover:bg-purple-50 text-purple-600 border border-purple-200 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}