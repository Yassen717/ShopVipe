"use client";

import { useOrders } from '../context/OrderContext';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Link from 'next/link';
import Image from 'next/image';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

const statusLabels = {
  pending: 'Pending',
  processing: 'Processing',
  shipped: 'Shipped',
  delivered: 'Delivered',
  cancelled: 'Cancelled'
};

export default function OrdersPage() {
  const { state } = useOrders();
  // const { user } = useAuth(); // Not used

  return (
    <ProtectedRoute>
      <div className="bg-[#f8f9ff] min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-4 rounded-b-3xl shadow-lg mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-sm mb-2 opacity-80">
              <Link href="/" className="hover:opacity-100">Home</Link>
              <span className="mx-2">&gt;</span>
              <Link href="/account" className="hover:opacity-100">Account</Link>
              <span className="mx-2">&gt;</span>
              <span className="font-semibold">Order History</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Order History</h1>
            <p className="mt-2 opacity-90">Track and manage your orders</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-16">
          {state.orders.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="text-8xl mb-6">📦</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No orders yet</h2>
              <p className="text-gray-600 mb-8">
                You haven&apos;t placed any orders yet. Start shopping to see your order history here.
              </p>
              <Link href="/shop">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {state.orders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl shadow-md p-6">
                  {/* Order Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-4 border-b">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        Order {order.orderNumber}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Placed on {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
                        {statusLabels[order.status]}
                      </span>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-800">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-gray-600">{order.items.length} items</p>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          {item.image ? (
                            <Image 
                              src={item.image} 
                              alt={item.name} 
                              width={48} 
                              height={48} 
                              className="object-contain" 
                            />
                          ) : (
                            <span className="text-2xl text-gray-300">🛍️</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.brand}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Subtotal</p>
                        <p className="font-semibold">${order.subtotal.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Shipping</p>
                        <p className="font-semibold">
                          {order.shipping === 0 ? 'Free' : `$${order.shipping.toFixed(2)}`}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Tax</p>
                        <p className="font-semibold">${order.tax.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Total</p>
                        <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Shipping Address</h4>
                      <div className="text-sm text-gray-600">
                        <p>{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
                        <p>{order.shippingInfo.address}</p>
                        <p>{order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.zipCode}</p>
                        <p>{order.shippingInfo.country}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Payment Method</h4>
                      <div className="text-sm text-gray-600">
                        <p>{order.paymentInfo.cardType} ending in {order.paymentInfo.cardLast4}</p>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Delivery */}
                  {order.status !== 'delivered' && order.status !== 'cancelled' && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">🚚</span>
                        <div>
                          <p className="font-medium text-blue-800">
                            Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                          </p>
                          <p className="text-sm text-blue-600">
                            We&apos;ll send you tracking information once your order ships.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
