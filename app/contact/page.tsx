export default function Contact() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Gradient Header */}
      <section className="bg-gradient-to-r from-purple-600 to-green-400 text-white py-12 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl">We’d love to hear from you! Whether you have a question about our products, need help with an order, or just want to say hello, we’re here for you.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-12">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Send Us a Message</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Your Name</label>
              <input type="text" className="w-full rounded border px-3 py-2" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input type="email" className="w-full rounded border px-3 py-2" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input type="text" className="w-full rounded border px-3 py-2" placeholder="What is this regarding?" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Your Message</label>
              <textarea className="w-full rounded border px-3 py-2" rows={4} placeholder="How can we help you?" />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition">Send Message</button>
          </form>
        </div>
        {/* Info */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Contact Information</h2>
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-1">Our Location</div>
            <div className="text-gray-600 text-sm">123 Shopping Avenue, Fashion District<br />New York, NY 10001, USA</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-1">Phone Number</div>
            <div className="text-gray-600 text-sm">+1 (800) 123-4567<br />+1 (212) 987-6543</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-1">Email Address</div>
            <div className="text-gray-600 text-sm">support@shopvibe.com<br />info@shopvibe.com</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-1">Business Hours</div>
            <div className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 8:00 PM<br />Saturday: 10:00 AM - 6:00 PM<br />Sunday: 11:00 AM - 5:00 PM</div>
          </div>
        </div>
      </section>

      {/* Find Us Map Placeholder */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <h2 className="text-xl font-bold text-center text-blue-700 mb-4">Find Us</h2>
        <div className="bg-gray-100 rounded-2xl flex flex-col items-center justify-center py-16">
          <span className="text-4xl text-purple-500 mb-2">🗺️</span>
          <div className="text-gray-600 text-sm text-center">Interactive map would be displayed here<br />123 Shopping Avenue, Fashion District, New York</div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-pink-400 to-orange-300 rounded-2xl py-8 flex flex-col items-center">
          <h2 className="text-lg font-bold text-white mb-4">Connect With Us</h2>
          <div className="flex gap-6">
            {[
              { icon: '🌐', label: 'Facebook' },
              { icon: '📸', label: 'Instagram' },
              { icon: '✉️', label: 'Email' },
              { icon: '📌', label: 'Pinterest' },
              { icon: '🎥', label: 'YouTube' },
            ].map(social => (
              <a key={social.label} href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-2xl shadow hover:scale-110 transition" aria-label={social.label}>{social.icon}</a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 