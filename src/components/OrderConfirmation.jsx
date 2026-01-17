import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Sparkles, Calendar, MapPin, Bell, Gift, ChevronRight } from 'lucide-react';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const orderDetails = {
    orderId: 'FL-2024-18432',
    date: 'Jan 16, 2024',
    estimatedDelivery: 'Tomorrow, 11 AM - 5 PM',
    total: 639,
    item: {
      name: 'Neutrogena Hydro Boost Water Gel',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80',
      price: 799,
      quantity: 1
    }
  };

  const smartUpsells = [
    {
      id: 1,
      name: 'Neutrogena Hydro Boost Cleanser',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&q=80',
      price: 599,
      aiReason: 'Perfect pair with your moisturizer',
      discount: 20,
      badge: 'Complete Your Routine'
    },
    {
      id: 2,
      name: 'Neutrogena Hydro Boost Serum',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80',
      price: 899,
      aiReason: 'Boost hydration even more',
      discount: 15,
      badge: 'Often Bought Together'
    }
  ];

  const aiInsights = [
    {
      icon: '📅',
      title: 'Usage Reminder Set',
      description: 'Reminders for morning & night application'
    },
    {
      icon: '📊',
      title: 'Track Your Results',
      description: 'AI analysis of progress photos in 2 weeks'
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Live delivery status updates'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight']">
      {/* Success Header */}
      <div className="bg-gray-50 px-4 py-8 text-center border-b border-gray-200">
        <div className="w-16 h-16 bg-[#363636] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-[#363636] mb-2">Order Confirmed!</h1>
        <p className="text-sm text-gray-600 mb-4">Your AI-optimized order has been placed</p>
        <div className="bg-white rounded-lg px-4 py-2 inline-block border-2 border-gray-300">
          <p className="text-xs text-gray-600 mb-1">Order ID</p>
          <p className="text-base font-bold text-[#363636]">{orderDetails.orderId}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 space-y-4">
        {/* AI Assistant Active Banner */}
        <div className="bg-gray-50 rounded-lg p-3 border-2 border-gray-300">
          <div className="flex items-start gap-2">
            <Sparkles className="w-5 h-5 text-[#363636] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#363636] mb-1">AI Tracking Your Order</p>
              <p className="text-xs text-gray-600 mb-2">Get smart updates and product guidance.</p>
              <button
                onClick={() => navigate('/order-tracking')}
                className="text-xs text-[#363636] font-medium flex items-center gap-1 hover:underline transition-all transform active:scale-95"
              >
                Track Order <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Delivery Timeline */}
        <div className="bg-white rounded-lg border-2 border-gray-300 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-5 h-5 text-[#363636]" />
            <h2 className="text-base font-bold text-[#363636]">Delivery Details</h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-gray-600 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#363636]">Estimated Delivery</p>
                <p className="text-sm text-[#363636] font-medium">{orderDetails.estimatedDelivery}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gray-600 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#363636]">Delivering to</p>
                <p className="text-xs text-gray-600">123 MG Road, Bangalore, Karnataka 560001</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Bell className="w-4 h-4 text-gray-600 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#363636]">Real-time Updates</p>
                <p className="text-xs text-gray-600">Notifications at every step</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Item */}
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
          <h3 className="text-sm font-semibold text-[#363636] mb-3">Your Order</h3>
          <div className="flex gap-3">
            <img
              src={orderDetails.item.image}
              alt={orderDetails.item.name}
              className="w-20 h-20 object-cover rounded-lg border border-gray-200"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#363636] mb-1">{orderDetails.item.name}</p>
              <p className="text-xs text-gray-600 mb-2">Quantity: {orderDetails.item.quantity}</p>
              <p className="text-sm font-bold text-[#363636]">₹{orderDetails.item.price}</p>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-lg border-2 border-gray-300 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#363636]" />
            <h2 className="text-sm font-bold text-[#363636]">AI-Powered Benefits Active</h2>
          </div>
          <div className="space-y-3">
            {aiInsights.map((insight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-2xl">{insight.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-[#363636] mb-0.5">{insight.title}</p>
                  <p className="text-xs text-gray-600">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Upsells - AI Recommended */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-[#363636]" />
              <h2 className="text-base font-bold text-[#363636]">Complete Your Routine</h2>
            </div>
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">AI Picks</span>
          </div>

          <div className="space-y-3">
            {smartUpsells.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border-2 border-gray-300 p-3 hover:border-[#363636] hover:shadow-md transition-all">
                <div className="flex gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                  />
                  <div className="flex-1">
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full font-medium mb-2 inline-block">
                      {product.badge}
                    </span>
                    <p className="text-sm font-semibold text-[#363636] mb-1">{product.name}</p>
                    <div className="flex items-center gap-1 mb-2">
                      <Sparkles className="w-3 h-3 text-[#363636]" />
                      <p className="text-xs text-gray-700">{product.aiReason}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-[#363636]">₹{Math.round(product.price * (1 - product.discount/100))}</span>
                        <span className="text-xs text-gray-500 line-through">₹{product.price}</span>
                        <span className="text-xs text-gray-700 font-medium">{product.discount}% off</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-2 bg-[#363636] text-white py-2 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-all transform active:scale-95">
                  Add to Order - Extra {product.discount}% Off
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <button
            onClick={() => navigate('/order-tracking')}
            className="w-full bg-[#363636] text-white py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all transform active:scale-95"
          >
            Track My Order
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-white border-2 border-[#363636] text-[#363636] py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all transform active:scale-95"
          >
            Continue Shopping
          </button>
        </div>

        {/* Help Section */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-600 mb-2">Need help with your order?</p>
          <button className="text-sm text-[#363636] font-medium hover:underline transition-all transform active:scale-95">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
