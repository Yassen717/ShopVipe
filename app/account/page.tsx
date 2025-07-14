export default function Account() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Gradient Header */}
      <section className="bg-gradient-to-r from-purple-600 to-green-400 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Account</h1>
          <p className="text-lg">Welcome back, <span className="font-semibold">Jessica</span>! Manage your orders and account details here.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 bg-white rounded-2xl shadow p-6 mb-6 md:mb-0 flex flex-col gap-2">
          {[
            'Dashboard',
            'Orders',
            'Wishlist',
            'Personal Info',
            'Addresses',
            'Payment Methods',
            'Logout',
          ].map((item, idx) => (
            <button
              key={item}
              className={`text-left px-4 py-2 rounded-lg font-medium transition mb-1 ${idx === 0 ? 'bg-gradient-to-r from-purple-500 to-blue-400 text-white shadow' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              {item}
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-8">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">🛒</span>
              <div className="text-2xl font-bold">12</div>
              <div className="text-gray-500 text-sm">Total Orders</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">💜</span>
              <div className="text-2xl font-bold">8</div>
              <div className="text-gray-500 text-sm">Wishlist Items</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">🎟️</span>
              <div className="text-2xl font-bold">3</div>
              <div className="text-gray-500 text-sm">Available Coupons</div>
            </div>
          </div>

          {/* Recent Orders */}
          <section className="bg-white rounded-2xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Recent Orders</h2>
              <button className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">View All Orders</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="py-2 pr-4">Order #</th>
                    <th className="py-2 pr-4">Date</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Total</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#SV8765', date: 'June 15, 2023', status: 'Delivered', total: '$129.99', action: 'View Details' },
                    { id: '#SV8742', date: 'June 2, 2023', status: 'Processing', total: '$85.50', action: 'Track Order' },
                    { id: '#SV8721', date: 'May 28, 2023', status: 'Delivered', total: '$210.75', action: 'View Details' },
                    { id: '#SV8698', date: 'May 15, 2023', status: 'Cancelled', total: '$45.25', action: 'View Details' },
                  ].map(order => (
                    <tr key={order.id} className="border-t">
                      <td className="py-2 pr-4 font-medium">{order.id}</td>
                      <td className="py-2 pr-4">{order.date}</td>
                      <td className="py-2 pr-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : order.status === 'Processing' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>{order.status}</span>
                      </td>
                      <td className="py-2 pr-4">{order.total}</td>
                      <td className="py-2">
                        <a href="#" className="text-blue-600 hover:underline font-semibold text-xs">{order.action}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Wishlist */}
          <section className="bg-white rounded-2xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Your Wishlist</h2>
              <button className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">View All Items</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: 'Premium Cotton T-Shirt', price: '$29.99' },
                { name: 'Wireless Headphones', price: '$89.99' },
                { name: 'Smart Watch Pro', price: '$149.99' },
              ].map(item => (
                <div key={item.name} className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2 items-center">
                  <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-3xl text-gray-400 mb-2">🎁</div>
                  <div className="font-semibold text-center">{item.name}</div>
                  <div className="text-pink-500 font-bold">{item.price}</div>
                  <div className="flex gap-2 mt-2">
                    <button className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-3 py-1 rounded text-xs font-semibold">Add to Cart</button>
                    <button className="bg-white border border-gray-300 text-gray-500 px-2 py-1 rounded text-xs">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Account Settings */}
          <section className="bg-white rounded-2xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Account Settings</h2>
              <button className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">Save Changes</button>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input type="text" className="w-full rounded border px-3 py-2" defaultValue="Jessica" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input type="text" className="w-full rounded border px-3 py-2" defaultValue="Smith" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" className="w-full rounded border px-3 py-2" defaultValue="jessica.smith@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="text" className="w-full rounded border px-3 py-2" defaultValue="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input type="password" className="w-full rounded border px-3 py-2" defaultValue="password" />
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
} 