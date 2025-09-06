"use client";

import { useState, useEffect, useRef } from 'react';
import { useSearch } from '../context/SearchContext';
import { useRouter } from 'next/navigation';

interface SearchAutocompleteProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export default function SearchAutocomplete({ 
  placeholder = "Search products...", 
  className = "",
  onSearch 
}: SearchAutocompleteProps) {
  const { 
    searchQuery, 
    setSearchQuery, 
    recentSearches, 
    popularSearches, 
    getSuggestions, 
    addToRecentSearches,
    clearRecentSearches 
  } = useSearch();
  
  const [localQuery, setLocalQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (localQuery.trim()) {
      const newSuggestions = getSuggestions(localQuery);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
    setSelectedIndex(-1);
  }, [localQuery, getSuggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);
    setShowSuggestions(true);
  };

  const handleSearch = (query: string) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      addToRecentSearches(trimmedQuery);
      setSearchQuery(trimmedQuery);
      setShowSuggestions(false);
      setLocalQuery('');
      
      if (onSearch) {
        onSearch(trimmedQuery);
      } else {
        router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIndex >= 0 && suggestions[selectedIndex]) {
      handleSearch(suggestions[selectedIndex]);
    } else {
      handleSearch(localQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSearch(suggestion);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    // Delay hiding suggestions to allow clicks
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const displaySuggestions = showSuggestions && (suggestions.length > 0 || recentSearches.length > 0 || !localQuery.trim());

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="flex">
        <input
          ref={inputRef}
          type="text"
          value={localQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm placeholder-gray-900"
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-r-lg transition-colors"
        >
          🔍
        </button>
      </form>

      {displaySuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          {/* Current query suggestions */}
          {suggestions.length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b">
                Suggestions
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={`suggestion-${index}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`w-full text-left px-4 py-2 hover:bg-purple-50 transition-colors ${
                    selectedIndex === index ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-purple-400">🔍</span>
                    {suggestion}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Recent searches */}
          {!localQuery.trim() && recentSearches.length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b flex items-center justify-between">
                Recent Searches
                <button
                  onClick={clearRecentSearches}
                  className="text-purple-600 hover:text-purple-700 text-xs"
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={`recent-${index}`}
                  onClick={() => handleSuggestionClick(search)}
                  className="w-full text-left px-4 py-2 hover:bg-purple-50 transition-colors text-gray-700"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-gray-400">🕒</span>
                    {search}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Popular searches */}
          {!localQuery.trim() && recentSearches.length === 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b">
                Popular Searches
              </div>
              {popularSearches.slice(0, 6).map((search, index) => (
                <button
                  key={`popular-${index}`}
                  onClick={() => handleSuggestionClick(search)}
                  className="w-full text-left px-4 py-2 hover:bg-purple-50 transition-colors text-gray-700"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-orange-400">🔥</span>
                    {search}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
