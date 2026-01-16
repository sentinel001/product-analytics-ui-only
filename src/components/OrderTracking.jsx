import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CheckCircle, MapPin, Clock, Sparkles, Bell, Calendar, ThumbsUp, Camera, MessageCircle, Star } from 'lucide-react';

const OrderTracking = () => {
  const navigate = useNavigate();
  const [showFeedbackPrompt, setShowFeedbackPrompt] = useState(false);

  const orderDetails = {
    orderId: 'FL-2024-18432',
    status: 'out-for-delivery',
    product: {
      name: 'Neutrogena Hydro Boost Water Gel',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80',
      quantity: 1,
      price: 799
    },
    delivery: {
      estimatedTime: 'Today, 2:30 PM - 3:30 PM',
      address: '123 MG Road, Bangalore, Karnataka 560001',
      driverName: 'Rajesh Kumar',
      driverPhone: '+91 98765 43210',
      driverRating: 4.8
    }
  };

  const trackingSteps = [
    {
      id: 1,
      title: 'Order Confirmed',
      description: 'Your order has been placed',
      time: 'Jan 16, 10:30 AM',
      completed: true,
      aiInsight: null
    },
    {
      id: 2,
      title: 'Packed',
      description: 'Your order has been packed',
      time: 'Jan 16, 2:45 PM',
      completed: true,
      aiInsight: 'Packed with extra care - fragile item'
    },
    {
      id: 3,
      title: 'Shipped',
      description: 'Order dispatched from warehouse',
      time: 'Jan 16, 4:20 PM',
      completed: true,
      aiInsight: null
    },
    {
      id: 4,
      title: 'Out for Delivery',
      description: 'Your order is on the way',
      time: 'Expected by 3:30 PM',
      completed: false,
      current: true,
      aiInsight: 'Driver is 15 min away. Weather is clear ☀️'
    },
    {
      id: 5,
      title: 'Delivered',
      description: 'Package delivered successfully',
      time: 'Pending',
      completed: false,
      aiInsight: null
    }
  ];

  const aiUpdates = [
    {
      time: '2 min ago',
      icon: '🚚',
      message: 'Your driver Rajesh is nearby! Estimated arrival: 15 minutes',
      type: 'info'
    },
    {
      time: '30 min ago',
      icon: '📍',
      message: 'Package crossed Brigade Road. On time for delivery!',
      type: 'success'
    },
    {
      time: '1 hour ago',
      icon: '☀️',
      message: 'Weather is perfect for delivery. No delays expected.',
      type: 'info'
    }
  ];

  const usageReminders = [
    {
      icon: '📅',
      title: 'First Use Tomorrow Morning',
      description: 'Apply after cleansing your face'
    },
    {
      icon: '⏰',
      title: 'Set Usage Schedule',
      description: 'Use twice daily - Morning & Night'
    },
    {
      icon: '📊',
      title: 'Track Results in 2 Weeks',
      description: 'Upload before/after photos for AI analysis'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight']">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold">Track Order</h1>
            <p className="text-xs opacity-90">Order ID: {orderDetails.orderId}</p>
          </div>
        </div>

        {/* Live Status Banner */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Live Tracking Active</span>
          </div>
          <p className="text-xs opacity-90">{orderDetails.delivery.estimatedTime}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Product Card */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex gap-3">
            <img
              src={orderDetails.product.image}
              alt={orderDetails.product.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">{orderDetails.product.name}</p>
              <p className="text-xs text-gray-600 mb-2">Quantity: {orderDetails.product.quantity}</p>
              <p className="text-sm font-bold text-gray-900">₹{orderDetails.product.price}</p>
            </div>
          </div>
        </div>

        {/* AI Live Updates */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-100">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <h2 className="text-sm font-bold text-gray-900">AI Live Updates</h2>
            <span className="ml-auto text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Real-time</span>
          </div>

          <div className="space-y-2">
            {aiUpdates.map((update, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-white rounded-lg p-2">
                <span className="text-lg flex-shrink-0">{update.icon}</span>
                <div className="flex-1">
                  <p className="text-xs text-gray-900 mb-0.5">{update.message}</p>
                  <p className="text-xs text-gray-500">{update.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Partner Info */}
        <div className="bg-white rounded-lg border border-gray-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-bold text-gray-900">Your Delivery Partner</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {orderDetails.delivery.driverName.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{orderDetails.delivery.driverName}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-600">{orderDetails.delivery.driverRating} rating</span>
              </div>
            </div>
            <button className="p-2 bg-green-100 rounded-lg">
              <MessageCircle className="w-4 h-4 text-green-600" />
            </button>
          </div>

          <div className="mt-3 flex items-start gap-2 text-xs text-gray-600">
            <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>{orderDetails.delivery.address}</span>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Order Journey</h2>

          <div className="space-y-4">
            {trackingSteps.map((step, idx) => (
              <div key={step.id} className="flex gap-3">
                {/* Timeline Line & Icon */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed
                      ? 'bg-green-500'
                      : step.current
                      ? 'bg-purple-600 animate-pulse'
                      : 'bg-gray-200'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : step.current ? (
                      <Truck className="w-4 h-4 text-white" />
                    ) : (
                      <Package className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  {idx < trackingSteps.length - 1 && (
                    <div className={`w-0.5 h-12 ${step.completed ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                  )}
                </div>

                {/* Step Details */}
                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between mb-1">
                    <p className={`text-sm font-semibold ${
                      step.current ? 'text-purple-600' : step.completed ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </p>
                    <span className="text-xs text-gray-500">{step.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{step.description}</p>

                  {step.aiInsight && (
                    <div className="mt-2 flex items-center gap-1 bg-purple-50 px-2 py-1 rounded text-xs">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                      <span className="text-purple-700">{step.aiInsight}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Delivery Preparation */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-bold text-gray-900">After Delivery</h2>
          </div>

          <div className="space-y-3">
            {usageReminders.map((reminder, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-2">
                <span className="text-xl flex-shrink-0">{reminder.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-gray-900 mb-0.5">{reminder.title}</p>
                  <p className="text-xs text-gray-600">{reminder.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1">
            <Calendar className="w-3 h-3" />
            Enable Smart Reminders
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white border border-gray-200 rounded-lg p-3 hover:border-purple-300 transition-colors">
            <MessageCircle className="w-5 h-5 text-purple-600 mb-2" />
            <p className="text-xs font-semibold text-gray-900">Contact Driver</p>
          </button>
          <button className="bg-white border border-gray-200 rounded-lg p-3 hover:border-purple-300 transition-colors">
            <Package className="w-5 h-5 text-orange-600 mb-2" />
            <p className="text-xs font-semibold text-gray-900">Delivery Issues</p>
          </button>
        </div>

        {/* Rate & Review Prompt (appears after delivery) */}
        {showFeedbackPrompt && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-600" />
              <h2 className="text-sm font-bold text-gray-900">How was your experience?</h2>
            </div>
            <p className="text-xs text-gray-600 mb-3">Rate this product and delivery to help others</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-yellow-600 text-white py-2 rounded-lg text-xs font-semibold hover:bg-yellow-700 transition-colors">
                Rate Product
              </button>
              <button className="flex-1 bg-white border border-yellow-600 text-yellow-600 py-2 rounded-lg text-xs font-semibold hover:bg-yellow-50 transition-colors">
                Rate Delivery
              </button>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-600 mb-2">Having issues with your delivery?</p>
          <button className="text-sm text-purple-600 font-medium">Get Help from Flash AI Support</button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
