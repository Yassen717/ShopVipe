"use client";
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import SectionHeader from './components/SectionHeader';
import Button from './components/Button';
import NewsletterSection from './components/NewsletterSection';
import { useCart } from './context/CartContext';

export default function Home() {
  const { addItem } = useCart();
  const featured = products.filter(p => p.featured);
  const newArrivals = products.filter(p => p.newArrival);

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-16 px-4 rounded-b-3xl shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Discover Your Style,<br />Elevate Your Life</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Explore our curated collection of premium products designed to enhance your everyday experiences. From fashion to home decor, we’ve got you covered.</p>
          <Button size="lg" className="w-fit">
            Shop Now →
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto py-14 px-4">
        <SectionHeader 
          title="Featured Products" 
          subtitle="Discover our handpicked selection of premium products"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addItem}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <SectionHeader 
          title="New Arrivals" 
          subtitle="Check out our latest additions to the collection"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addItem}
            />
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <SectionHeader 
          title="Special Offers" 
          subtitle="Don't miss out on these amazing deals"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">Summer Sale</h3>
            <p className="mb-4">Up to 50% off on selected items</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-500">
              Shop Sale
            </Button>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
            <p className="mb-4">On orders over $75</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-500">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}
