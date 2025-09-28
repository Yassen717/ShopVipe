import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 opacity-80">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="font-semibold">About Us</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">About ShopVibe</h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Our Story */}
        <section className="mb-16">
          <SectionHeader 
            title="Our Story" 
            subtitle="Learn about our journey and what drives us"
          />
          <div className="bg-white rounded-2xl shadow-md p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 2020, ShopVibe began as a small startup with a big dream: to create an online shopping experience that combines quality products with exceptional customer service. What started as a passion project has grown into a trusted platform serving thousands of customers worldwide.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that shopping should be more than just a transaction—it should be an experience that brings joy, discovery, and satisfaction. That&apos;s why we carefully curate every product in our collection, ensuring that each item meets our high standards for quality, style, and value.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <SectionHeader 
            title="Our Mission" 
            subtitle="What we stand for and strive to achieve"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-black">Quality First</h3>
              <p className="text-gray-600">We source only the highest quality products from trusted suppliers and brands.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-semibold mb-3 text-black">Customer Focused</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We&apos;re here to help every step of the way.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3 text-black">Sustainable</h3>
              <p className="text-gray-600">We&apos;re committed to sustainable practices and eco-friendly packaging.</p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <SectionHeader 
            title="Meet Our Team" 
            subtitle="The passionate people behind ShopVibe"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                JS
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Jane Smith</h3>
              <p className="text-purple-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">Passionate about creating amazing shopping experiences and building lasting customer relationships.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                MD
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Mike Davis</h3>
              <p className="text-purple-600 font-medium mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">Ensures smooth operations and timely delivery of products to our valued customers.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SJ
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Sarah Johnson</h3>
              <p className="text-purple-600 font-medium mb-2">Customer Success</p>
              <p className="text-gray-600 text-sm">Dedicated to providing exceptional customer support and ensuring your satisfaction.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-xl mb-8 opacity-90">Discover our amazing collection of premium products</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Explore Our Shop
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}