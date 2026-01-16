import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, TrendingUp, Bell, User, ChevronRight, Star, Zap } from 'lucide-react';

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

  const trendingProducts = [
    {
      name: 'Neutrogena Hydro Boost',
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80',
      price: 799,
      rating: 4.6,
      badge: 'Trending'
    },
    {
      name: 'iPhone 15 Pro',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80',
      price: 134999,
      rating: 4.6,
      badge: 'Price Drop'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight']">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h1 className="text-xl font-bold text-gray-900">Flash AI</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">Good afternoon, Ambuj</p>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg text-gray-900 text-sm bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 space-y-5">
        {/* AI Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">AI-Powered Shopping</span>
          </div>
          <p className="text-xs opacity-90 mb-3">Get personalized recommendations, live price tracking, and perfect fit predictions</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-lg font-bold">95%</div>
              <div className="text-xs opacity-90">Match Rate</div>
            </div>
            <div>
              <div className="text-lg font-bold">26%</div>
              <div className="text-xs opacity-90">Fewer Returns</div>
            </div>
            <div>
              <div className="text-lg font-bold">₹4.9K</div>
              <div className="text-xs opacity-90">Avg Savings</div>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">Shop by Category</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => navigate(category.path)}
                className="bg-white rounded-xl p-3 border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all transform hover:scale-[1.08] active:scale-95"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl mb-2`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-xs text-center">{category.name.split(' &')[0]}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Now */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Trending Now</h2>
            <button className="text-xs text-purple-600 font-medium hover:underline transition-all transform active:scale-95">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trendingProducts.map((product, idx) => (
              <button
                key={idx}
                onClick={() => navigate(`/product/${product.category}`)}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-purple-300 hover:shadow-lg transition-all transform hover:scale-[1.08] active:scale-95"
              >
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                  <span className="absolute top-2 right-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-semibold">
                    {product.badge}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</p>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3">Quick Access</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/demo')}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all transform hover:scale-[1.08] active:scale-95"
            >
              <Zap className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900 mb-1">Phase Evolution</p>
              <p className="text-xs text-gray-600">See features by phase</p>
            </button>
            <button className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all transform hover:scale-[1.08] active:scale-95">
              <Star className="w-6 h-6 text-green-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900 mb-1">Best Deals</p>
              <p className="text-xs text-gray-600">Live price drops</p>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <button className="flex flex-col items-center gap-1 text-purple-600 transform active:scale-90 transition-all">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transform active:scale-90 transition-all">
            <Search className="w-5 h-5" />
            <span className="text-xs font-medium">Search</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transform active:scale-90 transition-all">
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs font-medium">Trending</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transform active:scale-90 transition-all">
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashHome;
