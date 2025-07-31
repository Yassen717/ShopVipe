"use client";

import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'orders', name: 'Orders', icon: '📦' },
    { id: 'addresses', name: 'Addresses', icon: '📍' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm mb-2 opacity-80">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="font-semibold">My Account</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">My Account</h1>
          <p className="mt-2 opacity-90">Manage your profile and orders</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-gray-600 text-sm">john.doe@example.com</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <SectionHeader 
                  title="Profile Information" 
                  subtitle="Update your personal details"
                  centered={false}
                />
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <Button size="lg">Save Changes</Button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <SectionHeader 
                  title="Order History" 
                  subtitle="View your past orders and track current ones"
                  centered={false}
                />
                
                <div className="space-y-4">
                  {/* Sample orders */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Order #12345</h4>
                        <p className="text-sm text-gray-600">Placed on January 15, 2024</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Delivered
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">3 items • $127.97</p>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Order #12344</h4>
                        <p className="text-sm text-gray-600">Placed on January 10, 2024</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Shipped
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">2 items • $89.98</p>
                    <Button variant="outline" size="sm">Track Order</Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <SectionHeader 
                  title="Saved Addresses" 
                  subtitle="Manage your shipping and billing addresses"
                  centered={false}
                />
                
                <div className="space-y-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold mb-1">Home Address</h4>
                        <p className="text-gray-600 text-sm">
                          123 Main Street<br />
                          Apartment 4B<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button>Add New Address</Button>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-md p-8">
                <SectionHeader 
                  title="Account Settings" 
                  subtitle="Manage your preferences and security"
                  centered={false}
                />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Email Preferences</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="accent-purple-600" />
                        <span>Order updates and shipping notifications</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="accent-purple-600" />
                        <span>New product announcements</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="accent-purple-600" />
                        <span>Special offers and promotions</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Security</h3>
                    <div className="space-y-3">
                      <Button variant="outline">Change Password</Button>
                      <Button variant="outline">Enable Two-Factor Authentication</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Account Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline">Download My Data</Button>
                      <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}