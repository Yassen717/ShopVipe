"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useOrders } from '../../context/OrderContext';
import Link from 'next/link';
import Button from '../../components/Button';

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();
  const { getOrderById } = useOrders();
  const orderId = searchParams.get('orderId');
  const order = orderId ? getOrderById(orderId) : null;

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been confirmed and will be processed shortly.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold">{order?.orderNumber || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-semibold">
                  {order?.createdAt ? new Date(order.createdAt).toLocaleDateString() : new Date().toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-semibold">
                  {order?.estimatedDelivery ? new Date(order.estimatedDelivery).toLocaleDateString() : 
                   `${new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()} - ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}`}
                </span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="text-left mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What happens next?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Order Confirmation</p>
                  <p className="text-sm text-gray-600">You&apos;ll receive an email confirmation with your order details.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Processing</p>
                  <p className="text-sm text-gray-600">We&apos;ll prepare your order for shipment within 1-2 business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Shipping</p>
                  <p className="text-sm text-gray-600">You&apos;ll receive tracking information once your order ships.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/account">
              <Button variant="outline" className="w-full sm:w-auto">
                View Order History
              </Button>
            </Link>
            <Link href="/shop">
              <Button className="w-full sm:w-auto">
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Questions about your order? Contact us at{' '}
              <a href="mailto:support@shopvibe.com" className="text-purple-600 hover:text-purple-700">
                support@shopvibe.com
              </a>{' '}
              or call{' '}
              <a href="tel:+1-555-123-4567" className="text-purple-600 hover:text-purple-700">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
