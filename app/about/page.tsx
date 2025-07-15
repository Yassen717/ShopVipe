export default function About() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Gradient Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
          <p className="text-lg md:text-xl">We're a passionate team dedicated to bringing you the best shopping experience with curated products that enhance your lifestyle.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <div className="w-56 h-40 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center text-6xl text-white">
              <span>🏬</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-purple-700">From Passion to Excellence</h3>
            <p className="text-gray-700 mb-2">Founded in 2015, ShopVibe began as a small startup with a big vision: to create an online shopping destination that combines quality, affordability, and exceptional customer service.</p>
            <p className="text-gray-700 mb-2">What started as a team of three passionate entrepreneurs working from a garage has grown into a thriving e-commerce platform with over 50 team members and thousands of satisfied customers worldwide.</p>
            <p className="text-gray-700">Our journey hasn’t always been smooth, but our commitment to our core values and our customers has never wavered. We’ve learned, adapted, and continuously improved to become the trusted online retailer we are today.</p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Our Mission & Values</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8 rounded-full" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl text-purple-500 mb-2">💜</span>
            <h3 className="font-bold mb-2">Customer First</h3>
            <p className="text-gray-600 text-center">We believe in putting our customers at the center of everything we do. Your satisfaction is our top priority, and we strive to exceed your expectations at every touchpoint.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl text-blue-400 mb-2">🔒</span>
            <h3 className="font-bold mb-2">Quality & Trust</h3>
            <p className="text-gray-600 text-center">We carefully curate our product selection to ensure quality and value. Building trust through transparency and honesty is fundamental to our business philosophy.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl text-pink-400 mb-2">🌱</span>
            <h3 className="font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600 text-center">We’re committed to reducing our environmental footprint through eco-friendly packaging, sustainable sourcing, and supporting brands that share our values.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Meet Our Team</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8 rounded-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Sarah Johnson', role: 'CEO & Founder', desc: 'With 12+ years in retail, Sarah leads with passion and innovation.', icon: '👩‍💼', color: 'from-purple-400 to-blue-400' },
            { name: 'Michael Chen', role: 'CTO', desc: 'Tech wizard who ensures our platform runs smoothly, securely, and efficiently.', icon: '👨‍💻', color: 'from-blue-400 to-purple-400' },
            { name: 'Elena Rodriguez', role: 'Creative Director', desc: 'The artistic mind behind our brand identity and visual storytelling.', icon: '🎨', color: 'from-purple-400 to-pink-400' },
            { name: 'David Kim', role: 'Customer Experience', desc: 'Dedicated to ensuring every customer has a seamless shopping experience.', icon: '🤝', color: 'from-pink-400 to-purple-400' },
          ].map(member => (
            <div key={member.name} className={`bg-gradient-to-br ${member.color} rounded-2xl p-6 flex flex-col items-center text-white`}>
              <span className="text-4xl mb-2">{member.icon}</span>
              <div className="font-bold text-lg mb-1">{member.name}</div>
              <div className="text-sm mb-2 opacity-80">{member.role}</div>
              <div className="text-xs text-center opacity-90">{member.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Our Journey</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8 rounded-full" />
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-300 rounded-full -translate-x-1/2" />
          <div className="relative z-10 flex flex-col gap-12">
            {/* Timeline items */}
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-white rounded-xl shadow p-4 inline-block">
                  <div className="font-bold text-purple-700 mb-1">2015<br />The Beginning</div>
                  <div className="text-gray-600 text-sm">ShopVibe was founded with a vision to revolutionize online shopping.</div>
                </div>
              </div>
              <div className="w-0 flex flex-col items-center">
                <div className="w-5 h-5 bg-purple-500 rounded-full border-4 border-white" />
              </div>
              <div className="w-1/2" />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-1/2" />
              <div className="w-0 flex flex-col items-center">
                <div className="w-5 h-5 bg-purple-500 rounded-full border-4 border-white" />
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white rounded-xl shadow p-4 inline-block">
                  <div className="font-bold text-purple-700 mb-1">2017<br />Expansion</div>
                  <div className="text-gray-600 text-sm">Reached 10,000 customers and expanded our product categories.</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-white rounded-xl shadow p-4 inline-block">
                  <div className="font-bold text-purple-700 mb-1">2019<br />Going Global</div>
                  <div className="text-gray-600 text-sm">Launched international shipping to 25+ countries.</div>
                </div>
              </div>
              <div className="w-0 flex flex-col items-center">
                <div className="w-5 h-5 bg-purple-500 rounded-full border-4 border-white" />
              </div>
              <div className="w-1/2" />
            </div>
            <div className="flex items-center gap-8">
              <div className="w-1/2" />
              <div className="w-0 flex flex-col items-center">
                <div className="w-5 h-5 bg-purple-500 rounded-full border-4 border-white" />
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white rounded-xl shadow p-4 inline-block">
                  <div className="font-bold text-purple-700 mb-1">2021<br />Sustainability Initiative</div>
                  <div className="text-gray-600 text-sm">Implemented eco-friendly packaging and carbon-neutral shipping options.</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-white rounded-xl shadow p-4 inline-block">
                  <div className="font-bold text-purple-700 mb-1">2023<br />Today</div>
                  <div className="text-gray-600 text-sm">Serving over 100,000 customers with a team of 50+ passionate individuals.</div>
                </div>
              </div>
              <div className="w-0 flex flex-col items-center">
                <div className="w-5 h-5 bg-purple-500 rounded-full border-4 border-white" />
              </div>
              <div className="w-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">What Our Customers Say</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8 rounded-full" />
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <p className="text-lg italic text-gray-700 mb-4">“ShopVibe has completely transformed my online shopping experience. The quality of products, fast shipping, and exceptional customer service keep me coming back!”</p>
          <div className="font-bold text-purple-700">Jessica T.</div>
          <div className="text-xs text-gray-500">Loyal Customer Since 2018</div>
        </div>
      </section>
    </div>
  );
} 