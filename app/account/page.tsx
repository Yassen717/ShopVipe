"use client";

import ProtectedRoute from '../components/auth/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

export default function AccountPage() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#f8f9ff] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Profile Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                    <p className="text-gray-900 font-medium">{user?.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                    <p className="text-gray-900 font-medium">{user?.email}</p>
                  </div>
                                      <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Member Since</label>
                      <p className="text-gray-900 font-medium">
                        {user?.$createdAt ? new Date(user.$createdAt).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                </div>
              </div>

              {/* Account Actions */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Actions</h2>
                <div className="space-y-4">
                  <Button className="w-full">
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full">
                    Order History
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-red-600 border-red-300 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-gray-600">Orders</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">Wishlist Items</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}