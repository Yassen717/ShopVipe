import { products } from '../data/products';
import Image from 'next/image';

export default function Shop() {
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
          <h2 className="font-bold text-lg mb-4">Filter Products</h2>
          {/* Price Range */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Price Range</label>
            <div className="flex gap-2 items-center">
              <input type="number" placeholder="Min" className="w-16 px-2 py-1 rounded border" />
              <span>-</span>
              <input type="number" placeholder="Max" className="w-16 px-2 py-1 rounded border" />
            </div>
          </div>
          {/* Color */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Color</label>
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-red-500 border-2 border-white cursor-pointer" />
              <span className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white cursor-pointer" />
              <span className="w-5 h-5 rounded-full bg-green-500 border-2 border-white cursor-pointer" />
              <span className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white cursor-pointer" />
            </div>
          </div>
          {/* Size */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Size</label>
            <div className="flex flex-wrap gap-2">
              {['XS','S','M','L','XL','XXL'].map(size => (
                <span key={size} className="px-3 py-1 rounded bg-gray-100 border text-xs cursor-pointer">{size}</span>
              ))}
            </div>
          </div>
          {/* Brand */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Brand</label>
            <div className="flex flex-col gap-1">
              {['Brand One','Brand Two','Brand Three','Brand Four','Brand Five'].map(brand => (
                <label key={brand} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="accent-purple-600" /> {brand}
                </label>
              ))}
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-pink-400 to-blue-500 text-white font-semibold py-2 rounded-lg mt-2">Apply Filters</button>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="text-gray-700 text-sm">Showing 1-{products.length} of {products.length} products</div>
            <select className="rounded border px-3 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Newest</option>
            </select>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow p-5 flex flex-col gap-3">
                <div className="flex items-center justify-center h-28 bg-gray-100 rounded mb-2">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} width={64} height={64} className="object-contain h-16 w-16" />
                  ) : (
                    <span className="text-4xl text-gray-300">🛍️</span>
                  )}
                </div>
                <div className="font-semibold text-lg">{product.name}</div>
                <div className="text-pink-500 font-bold text-base">${product.price.toFixed(2)}</div>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>{idx < product.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <button className="mt-2 w-full bg-gradient-to-r from-pink-400 to-blue-500 text-white font-semibold py-2 rounded-lg">Add to Cart</button>
              </div>
            ))}
          </div>
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