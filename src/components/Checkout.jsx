import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, MapPin, CreditCard, Truck, Shield, AlertCircle, CheckCircle, Lock, Gift } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('address'); // address, payment, review
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const cartItems = [
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80',
      price: 799,
      quantity: 1,
      aiInsight: '95% match for your skin type'
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'Aditya Sharma',
      address: '123 MG Road, Bangalore, Karnataka 560001',
      phone: '+91 98765 43210',
      isDefault: true
    },
    {
      id: 2,
      type: 'Office',
      name: 'Aditya Sharma',
      address: '456 Koramangala, Bangalore, Karnataka 560034',
      phone: '+91 98765 43210',
      isDefault: false
    }
  ];

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      description: 'Pay using any UPI app',
      icon: '📱',
      recommended: true
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, Rupay',
      icon: '💳',
      recommended: false
    },
    {
      id: 'wallet',
      name: 'Wallets',
      description: 'Paytm, PhonePe, Google Pay',
      icon: '👛',
      recommended: false
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      description: 'Pay when you receive',
      icon: '💵',
      recommended: false
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 160; // AI-applied discount
  const delivery = 0; // Free delivery
  const total = subtotal - discount + delivery;

  const handlePlaceOrder = () => {
    navigate('/order-confirmation');
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors transform active:scale-95">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-gray-900">Checkout</h1>
            <p className="text-xs text-gray-500">Step {step === 'address' ? 1 : step === 'payment' ? 2 : 3} of 3</p>
          </div>
          <div className="flex items-center gap-1">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-600 font-medium">Secure</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 flex gap-2">
          <div className={`flex-1 h-1 rounded-full ${step === 'address' || step === 'payment' || step === 'review' ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
          <div className={`flex-1 h-1 rounded-full ${step === 'payment' || step === 'review' ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
          <div className={`flex-1 h-1 rounded-full ${step === 'review' ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
        </div>
      </div>

      {/* AI Assistant Banner */}
      <div className="mx-4 mt-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-100">
        <div className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-900 mb-1">AI Shopping Assistant Active</p>
            <p className="text-xs text-gray-600">We'll track your order & send smart updates. Plus, you've earned ₹160 discount!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Step 1: Address Selection */}
        {step === 'address' && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-gray-900">Delivery Address</h2>
              <button className="text-sm text-purple-600 font-medium hover:underline transition-all transform active:scale-95">+ Add New</button>
            </div>

            <div className="space-y-3">
              {addresses.map((addr) => (
                <button
                  key={addr.id}
                  onClick={() => setSelectedAddress(addr.id)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all transform hover:scale-[1.02] active:scale-95 ${
                    selectedAddress === addr.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-900">{addr.type}</span>
                      {addr.isDefault && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Default</span>
                      )}
                    </div>
                    {selectedAddress === addr.id && (
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                  <p className="text-sm text-gray-900 mb-1">{addr.name}</p>
                  <p className="text-xs text-gray-600 mb-1">{addr.address}</p>
                  <p className="text-xs text-gray-600">{addr.phone}</p>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep('payment')}
              disabled={!selectedAddress}
              className={`w-full mt-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                selectedAddress
                  ? 'bg-purple-600 text-white hover:bg-purple-700 transform active:scale-95'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue to Payment
            </button>
          </div>
        )}

        {/* Step 2: Payment Selection */}
        {step === 'payment' && (
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-3">Payment Method</h2>

            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all transform hover:scale-[1.02] active:scale-95 ${
                    selectedPayment === method.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{method.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-gray-900">{method.name}</span>
                        {method.recommended && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{method.description}</p>
                    </div>
                    {selectedPayment === method.id && (
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* AI Discount Applied */}
            <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-green-600" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-900">AI Discount Applied!</p>
                  <p className="text-xs text-gray-600">You saved ₹160 with our smart recommendations</p>
                </div>
                <p className="text-sm font-bold text-green-600">-₹160</p>
              </div>
            </div>

            <button
              onClick={() => setStep('review')}
              disabled={!selectedPayment}
              className={`w-full mt-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                selectedPayment
                  ? 'bg-purple-600 text-white hover:bg-purple-700 transform active:scale-95'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Review Order
            </button>
          </div>
        )}

        {/* Step 3: Order Review */}
        {step === 'review' && (
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-3">Review Your Order</h2>

            {/* Order Items */}
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.name}</p>
                    <div className="flex items-center gap-1 mb-1">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                      <p className="text-xs text-purple-600">{item.aiInsight}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900">₹{item.price} × {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-lg p-3 border border-gray-200 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-900">Delivery Information</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Estimated delivery: Tomorrow, 11 AM - 5 PM</p>
              <p className="text-xs text-green-600 font-medium">Free delivery on this order</p>
            </div>

            {/* AI Guarantee */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-100 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-semibold text-gray-900">Flash AI Guarantee</span>
              </div>
              <div className="space-y-1 text-xs text-gray-600">
                <p>✓ 95% skin compatibility confirmed</p>
                <p>✓ Easy 30-day returns if not suitable</p>
                <p>✓ Real-time delivery tracking with AI updates</p>
              </div>
            </div>
          </div>
        )}

        {/* Cart Items Summary (Always visible) */}
        {step !== 'review' && (
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Order Summary</h3>
            <div className="bg-gray-50 rounded-lg p-3">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex gap-3 mb-2">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-900 line-clamp-1">{item.name}</p>
                    <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">₹{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom: Price Summary & CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="space-y-1 mb-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">₹{subtotal}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-green-600">AI Discount</span>
              <span className="text-green-600 font-semibold">-₹{discount}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Delivery</span>
            <span className="text-green-600 font-semibold">FREE</span>
          </div>
          <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-200">
            <span className="text-gray-900">Total</span>
            <span className="text-purple-600">₹{total}</span>
          </div>
        </div>

        {step === 'review' && (
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold text-sm hover:bg-purple-700 transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Place Order ₹{total}
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
