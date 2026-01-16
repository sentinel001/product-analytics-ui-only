import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, TrendingUp, Zap, Heart, ShoppingBag, ChevronRight } from 'lucide-react';

const FlashHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'beauty',
      name: 'Beauty & Skincare',
      icon: '💄',
      gradient: 'from-pink-500 to-purple-500',
      description: 'AI-matched for your skin type',
      stats: '2,847 success stories',
      path: '/discovery/beauty'
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '📱',
      gradient: 'from-blue-500 to-indigo-500',
      description: 'Live price tracking & specs',
      stats: '₹4,901 avg savings',
      path: '/discovery/electronics'
    },
    {
      id: 'fashion',
      name: 'Fashion & Apparel',
      icon: '👕',
      gradient: 'from-orange-500 to-amber-500',
      description: 'Perfect fit guaranteed',
      stats: '26% fewer returns',
      path: '/discovery/fashion'
    }
  ];

  const trendingSearches = [
    'Moisturizer for oily skin',
    'iPhone 15 Pro best price',
    'Cotton t-shirt size guide',
    'Face serum for acne',
    'Gaming laptop under 60k'
  ];

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-purple-50 to-white min-h-screen font-['Inter_Tight']">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Flash AI</h1>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5" />
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>

        <p className="text-sm opacity-90 mb-4">Your AI Shopping Assistant</p>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Value Props */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white rounded-lg p-3 text-center border border-gray-100">
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-xs font-semibold text-gray-900">AI Matched</div>
            <div className="text-xs text-gray-500">For You</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-gray-100">
            <div className="text-2xl mb-1">💰</div>
            <div className="text-xs font-semibold text-gray-900">Best Price</div>
            <div className="text-xs text-gray-500">Guaranteed</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-gray-100">
            <div className="text-2xl mb-1">✓</div>
            <div className="text-xs font-semibold text-gray-900">Perfect Fit</div>
            <div className="text-xs text-gray-500">Every Time</div>
          </div>
        </div>

        {/* Category Cards */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Shop by Category</h2>
          <div className="space-y-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => navigate(category.path)}
                className="w-full bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-600 mb-1">{category.description}</p>
                    <p className="text-xs text-purple-600 font-medium">{category.stats}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Searches */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <h2 className="text-sm font-semibold text-gray-900">Trending Searches</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((search, idx) => (
              <button
                key={idx}
                onClick={() => setSearchQuery(search)}
                className="px-3 py-2 bg-white rounded-full text-xs text-gray-700 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Why Flash AI */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-purple-600" />
            <h2 className="text-sm font-bold text-gray-900">Why Flash AI?</h2>
          </div>
          <div className="space-y-2 text-xs text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-purple-600">✓</span>
              <span><strong>Personalized Recommendations:</strong> AI matches products to your needs</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">✓</span>
              <span><strong>Price Intelligence:</strong> Track prices & get best deals</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">✓</span>
              <span><strong>No More Returns:</strong> Perfect fit & suitability guaranteed</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">✓</span>
              <span><strong>Transparent Info:</strong> Full ingredient, material & spec details</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">2,847+</div>
            <div className="text-xs text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">26%</div>
            <div className="text-xs text-gray-600">Fewer Returns</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">₹4.9K</div>
            <div className="text-xs text-gray-600">Avg Savings</div>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">4.7★</div>
            <div className="text-xs text-gray-600">User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashHome;
