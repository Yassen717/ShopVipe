"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { products, Product } from '../data/products';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Product[];
  recentSearches: string[];
  popularSearches: string[];
  searchProducts: (query: string) => Product[];
  addToRecentSearches: (query: string) => void;
  clearRecentSearches: () => void;
  getSuggestions: (query: string) => string[];
}

const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  
  const popularSearches = [
    'T-Shirt', 'Jeans', 'Sneakers', 'Hoodie', 'Watch', 'Sunglasses', 'Cap', 'Handbag'
  ];

  const searchProducts = (query: string): Product[] => {
    if (!query.trim()) return products;
    
    const searchTerm = query.toLowerCase().trim();
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.colors.some(color => color.toLowerCase().includes(searchTerm)) ||
      product.sizes.some(size => size.toLowerCase().includes(searchTerm))
    );
  };

  const addToRecentSearches = (query: string) => {
    if (!query.trim()) return;
    
    const trimmedQuery = query.trim();
    setRecentSearches(prev => {
      const filtered = prev.filter(search => search !== trimmedQuery);
      return [trimmedQuery, ...filtered].slice(0, 5); // Keep only last 5 searches
    });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const getSuggestions = (query: string): string[] => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    const suggestions = new Set<string>();
    
    // Add product names that match
    products.forEach(product => {
      if (product.name.toLowerCase().includes(searchTerm)) {
        suggestions.add(product.name);
      }
      if (product.brand.toLowerCase().includes(searchTerm)) {
        suggestions.add(product.brand);
      }
    });
    
    // Add popular searches that match
    popularSearches.forEach(search => {
      if (search.toLowerCase().includes(searchTerm)) {
        suggestions.add(search);
      }
    });
    
    return Array.from(suggestions).slice(0, 5);
  };

  const searchResults = searchProducts(searchQuery);

  const value: SearchContextType = {
    searchQuery,
    setSearchQuery,
    searchResults,
    recentSearches,
    popularSearches,
    searchProducts,
    addToRecentSearches,
    clearRecentSearches,
    getSuggestions,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
