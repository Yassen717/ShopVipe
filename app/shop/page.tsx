"use client";
import { products } from '../data/products';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const { addItem } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleSort = (value: string) => {
    setSortBy(value);
    const sorted = [...filteredProducts];
    
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      default:
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    setFilteredProducts(sorted);
  };

  const applyFilters = () => {
    let filtered = products;
    
    // Price filter
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter(product => {
        const min = priceRange.min ? parseFloat(priceRange.min) : 0;
        const max = priceRange.max ? parseFloat(priceRange.max) : Infinity;
        return product.price >= min && product.price <= max;
      });
    }
    
    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      );
    }
    
    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        selectedBrands.includes(product.brand)
      );
    }
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Gradient Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2">
            <span className="opacity-80">Home</span> <span className="mx-2">&gt;</span> <span className="font-semibold">Shop</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Shop All Products</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 bg-white rounded-2xl shadow p-6 mb-6 md:mb-0">
          <h2 className="font-bold text-black text-lg mb-4">Filter Products</h2>
          {/* Price Range */}
          <div className="mb-6">
            <label className="block font-semibold text-black mb-2">Price Range</label>
            <div className="flex gap-2 items-center">
              <input 
                type="number" 
                placeholder="Min" 
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                className="w-16 px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-900 text-black" 
              />
              <span>-</span>
              <input 
                type="number" 
                placeholder="Max" 
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                className="w-16 px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-900" 
              />
            </div>
          </div>
          {/* Color */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-black">Color</label>
            <div className="flex gap-3 flex-wrap">
              {['red', 'blue', 'green', 'gray', 'black', 'white', 'pink'].map(color => (
                <button
                  key={color}
                  onClick={() => {
                    if (selectedColors.includes(color)) {
                      setSelectedColors(selectedColors.filter(c => c !== color));
                    } else {
                      setSelectedColors([...selectedColors, color]);
                    }
                  }}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all ${
                    selectedColors.includes(color) ? 'border-purple-500 scale-110' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
          {/* Size */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-black">Size</label>
            <div className="flex flex-wrap gap-2 text-black">
              {['XS','S','M','L','XL','XXL'].map(size => (
                <button
                  key={size}
                  onClick={() => {
                    if (selectedSizes.includes(size)) {
                      setSelectedSizes(selectedSizes.filter(s => s !== size));
                    } else {
                      setSelectedSizes([...selectedSizes, size]);
                    }
                  }}
                  className={`px-3 py-1 rounded border text-xs cursor-pointer transition-colors ${
                    selectedSizes.includes(size) 
                      ? 'bg-purple-500 text-white border-purple-500' 
                      : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Brand */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-black">Brand</label>
            <div className="flex flex-col gap-1 text-black">
              {['Brand One','Brand Two','Brand Three','Brand Four','Brand Five'].map(brand => (
                <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="accent-purple-600" 
                    checked={selectedBrands.includes(brand)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedBrands([...selectedBrands, brand]);
                      } else {
                        setSelectedBrands(selectedBrands.filter(b => b !== brand));
                      }
                    }}
                  /> 
                  {brand}
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Button onClick={applyFilters} className="w-full">
              Apply Filters
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                setFilteredProducts(products);
                setPriceRange({ min: '', max: '' });
                setSelectedColors([]);
                setSelectedSizes([]);
                setSelectedBrands([]);
              }} 
              className="w-full"
            >
              Clear All
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="text-gray-700 text-sm">Showing 1-{filteredProducts.length} of {filteredProducts.length} products</div>
            <select 
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className="rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Sort by: Price (Low to High)</option>
              <option value="price-high">Sort by: Price (High to Low)</option>
              <option value="newest">Sort by: Newest</option>
            </select>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addItem}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results.</p>
            </div>
          )}
          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {[1,2,3,4].map(page => (
              <button key={page} className={`w-9 h-9 rounded-lg font-semibold ${page === 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}`}>{page}</button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
} 