import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, TrendingUp, Bell, User, ChevronRight, Star, Zap, Camera, Link as LinkIcon, Award, TrendingDown, CheckCircle, ShoppingCart } from 'lucide-react';

const FlashHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState('name'); // 'name', 'url', 'image'

  const beautyCategories = [
    { name: 'Skincare', icon: '✨', path: '/category/skincare' },
    { name: 'Haircare', icon: '💇', path: '/discovery/beauty?sub=haircare' },
    { name: 'Makeup', icon: '💄', path: '/discovery/beauty?sub=makeup' },
    { name: 'Fragrance', icon: '🌸', path: '/discovery/beauty?sub=fragrance' }
  ];

  const electronicsCategories = [
    { name: 'Smartphones', icon: '📱', path: '/category/electronics' },
    { name: 'Laptops', icon: '💻', path: '/category/electronics' },
    { name: 'Audio', icon: '🎧', path: '/category/electronics' },
    { name: 'Wearables', icon: '⌚', path: '/category/electronics' }
  ];

  const fashionCategories = [
    { name: 'Tops & Tees', icon: '👕', path: '/category/fashion' },
    { name: 'Bottoms', icon: '👖', path: '/category/fashion' },
    { name: 'Footwear', icon: '👟', path: '/category/fashion' },
    { name: 'Accessories', icon: '👜', path: '/category/fashion' }
  ];

  const socialTrends = [
    {
      title: 'Glass Skin Routine',
      description: 'Korean beauty trending',
      trend: '+145%',
      icon: '✨',
      color: 'bg-gray-50'
    },
    {
      title: 'Minimalist Tech',
      description: 'Less is more',
      trend: '+89%',
      icon: '📱',
      color: 'bg-gray-50'
    }
  ];

  const rankedLists = [
    {
      title: 'Top 10 Microplastic-Free Face Scrubs',
      updated: 'Jan 2026',
      productsCount: 200,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80'
    },
    {
      title: 'Best Budget Smartphones Under ₹20K',
      updated: 'Jan 2026',
      productsCount: 156,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&q=80'
    }
  ];

  const valueFinds = [
    {
      name: 'Plum Green Tea Toner',
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80',
      price: 399,
      rating: 4.5,
      aiScore: 88,
      badge: 'Value'
    },
    {
      name: 'Noise ColorFit Pro 4',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&q=80',
      price: 2999,
      rating: 4.3,
      aiScore: 86,
      badge: 'Value'
    }
  ];

  const hiddenGems = [
    {
      name: 'Re\'equil Sunscreen',
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=200&q=80',
      price: 549,
      rating: 4.7,
      aiScore: 92,
      badge: 'Hidden Gem'
    },
    {
      name: 'Boat Airdopes 131',
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&q=80',
      price: 1299,
      rating: 4.4,
      aiScore: 85,
      badge: 'Hidden Gem'
    }
  ];

  const personalizedRoutines = [
    {
      title: 'Oily Skin Complete Routine',
      description: '4-step routine for your skin',
      products: '5 products',
      icon: '💧',
      color: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      path: '/routine/oily-skin'
    },
    {
      title: 'High-End Programmer Setup',
      description: 'Workspace essentials for coding',
      products: '6 products',
      icon: '⌨️',
      color: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      path: '/bundle/programmer-setup'
    }
  ];

  const priceDropAlerts = [
    {
      id: 1,
      name: 'Sony WH-1000XM5 Headphones',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&q=80',
      category: 'electronics',
      originalPrice: 29990,
      currentPrice: 24990,
      dropPercentage: 17,
      historicalLow: true,
      alertSetDate: '2 weeks ago'
    },
    {
      id: 2,
      name: 'The Ordinary AHA 30% + BHA 2% Peeling Solution',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80',
      category: 'beauty',
      originalPrice: 1850,
      currentPrice: 1295,
      dropPercentage: 30,
      historicalLow: true,
      alertSetDate: '1 week ago'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-6">
      {/* Compact Header */}
      <div className="sticky top-0 z-50 bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#363636] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#363636]">Flash</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Search Section */}
      <div className="px-4 pt-6 pb-8 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#363636] mb-2">Find Your Perfect Product</h2>
          <p className="text-sm text-gray-600">AI-powered search across millions of products</p>
        </div>

        {/* Search Bar with Multi-mode */}
        <div className="space-y-3">
          <div className="relative">
            {searchMode === 'name' && <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />}
            {searchMode === 'url' && <LinkIcon className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />}
            {searchMode === 'image' && <Camera className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />}
            <input
              type="text"
              placeholder={
                searchMode === 'name' ? 'Search products by name...' :
                searchMode === 'url' ? 'Paste any product URL...' :
                'Upload or capture product image...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-[#363636] text-base bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-[#363636] transition-all shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchMode('name')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                searchMode === 'name' ? 'bg-[#363636] text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              <Search className="w-4 h-4 inline-block mr-1" />
              By Name
            </button>
            <button
              onClick={() => setSearchMode('url')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                searchMode === 'url' ? 'bg-[#363636] text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              <LinkIcon className="w-4 h-4 inline-block mr-1" />
              By URL
            </button>
            <button
              onClick={() => setSearchMode('image')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                searchMode === 'image' ? 'bg-[#363636] text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              <Camera className="w-4 h-4 inline-block mr-1" />
              By Image
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="px-4 py-6 space-y-8">

        {/* 1. Just For You - Personalized First Impression */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#363636] rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#363636]">Just For You</h2>
              <p className="text-sm text-gray-600">Based on your profile and shopping history</p>
            </div>
          </div>

          {/* Oily Skin Routine - Detailed Card */}
          <div
            onClick={() => navigate('/routine/oily-skin')}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer mb-4"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">
                💧
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-[#363636]">Complete Oily Skin Routine</h3>
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-bold">94% Match</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  We've noticed you struggle with shine and enlarged pores. This 4-step routine is scientifically designed to balance oil production without over-drying.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <strong>5 products</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                    <strong>4.6 avg rating</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 mb-3">
              <p className="text-sm font-semibold text-[#363636] mb-2">What's included:</p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <span>CeraVe Foaming Cleanser - Removes excess oil</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <span>Niacinamide Serum - Controls oil & minimizes pores</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <span>Hydro Boost Gel - Oil-free hydration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <span>SPF 50 Sunscreen - Matte finish protection</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Bundle Price</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-[#363636]">₹3,389</span>
                  <span className="text-sm text-gray-500 line-through">₹3,987</span>
                  <span className="text-base font-bold text-green-600">Save ₹598</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          {/* Programmer Setup - Detailed Card */}
          <div
            onClick={() => navigate('/bundle/programmer-setup')}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-5 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">
                ⌨️
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-[#363636]">High-End Programmer Setup</h3>
                  <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-sm font-bold">Detected</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Your recent searches for ultrawide monitors and mechanical keyboards reveal you're building a serious dev workspace. This ergonomic bundle prevents strain during long coding sessions.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <strong>6 products</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-gray-900" />
                    <strong>25% productivity boost</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 mb-3">
              <p className="text-sm font-semibold text-[#363636] mb-2">Premium components:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-base">🖥️</span>
                  <span>34" UltraWide Monitor</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-base">⌨️</span>
                  <span>Mechanical Keyboard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-base">🖱️</span>
                  <span>Ergonomic Mouse</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-base">🪑</span>
                  <span>Herman Miller Chair</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-base">💡</span>
                  <span>Monitor Light Bar</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-base">🔌</span>
                  <span>Thunderbolt Dock</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Bundle Price</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-[#363636]">₹74,999</span>
                  <span className="text-sm text-gray-500 line-through">₹87,499</span>
                  <span className="text-base font-bold text-green-600">Save ₹12,500</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </section>

        {/* 2. Price Drop Alerts */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#363636] rounded-full flex items-center justify-center">
              <TrendingDown className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#363636]">Price Drop Alerts</h2>
              <p className="text-sm text-gray-600">Products you're watching are now cheaper</p>
            </div>
          </div>

          <div className="space-y-3">
            {priceDropAlerts.map((alert) => (
              <div
                key={alert.id}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#363636] hover:shadow-lg transition-all"
              >
                <div
                  onClick={() => navigate(`/product/${alert.category}`)}
                  className="flex gap-4 p-4 cursor-pointer"
                >
                  <div className="relative">
                    <img src={alert.image} alt={alert.name} className="w-24 h-24 object-cover rounded-lg border border-gray-200" />
                    {alert.historicalLow && (
                      <div className="absolute -top-1 -right-1 bg-[#363636] text-white px-2 py-1 rounded-full text-sm font-bold">
                        🔥 Low
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#363636] line-clamp-2 mb-2">{alert.name}</h3>

                    <div className="mb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-500 line-through">₹{alert.originalPrice.toLocaleString()}</span>
                        <span className="text-lg font-bold text-[#363636]">₹{alert.currentPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#363636] text-white px-2 py-0.5 rounded text-sm font-bold">
                          {alert.dropPercentage}% OFF
                        </span>
                        <span className="text-sm text-gray-600">Save ₹{(alert.originalPrice - alert.currentPrice).toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">Alert set {alert.alertSetDate}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-[#363636] font-semibold">Historical low price!</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-2" />
                </div>

                {/* Buy Now Action */}
                <div className="border-t-2 border-gray-200 px-4 py-3 bg-gray-50">
                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-[#363636] text-white py-2.5 px-4 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now at ₹{alert.currentPrice.toLocaleString()}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Ranked Lists - Personalized to user interests */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#363636] rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#363636]">Expert Rankings You'll Love</h2>
              <p className="text-sm text-gray-600">Curated lists based on your beauty & tech interests</p>
            </div>
          </div>
          <div className="space-y-3">
            {rankedLists.map((list, idx) => (
              <div
                key={idx}
                onClick={() => navigate('/ranked-list/microplastic-free-scrubs')}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#363636] hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex gap-4 p-4">
                  <img src={list.image} alt={list.title} className="w-28 h-28 object-cover rounded-lg border border-gray-200" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-bold text-[#363636] line-clamp-2 flex-1">{list.title}</h3>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span className="bg-gray-100 px-2 py-0.5 rounded font-medium">Updated {list.updated}</span>
                      <span>•</span>
                      <span>{list.productsCount} analyzed</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      {idx === 0 ? 'Matched to your oily skin concerns - all products are non-comedogenic and dermatologist-tested.' : 'Perfect for your tech upgrade plans - best value options under ₹20K.'}
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-blue-600 text-blue-600" />
                      <span className="text-base font-semibold text-blue-600">Personalized for you</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Value Finds - Personalized */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#363636] rounded-full flex items-center justify-center">
              <TrendingDown className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#363636]">Value Picks For You</h2>
              <p className="text-sm text-gray-600">Budget-friendly options matching your needs</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {valueFinds.map((product, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/product/${product.category}`)}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#363636] hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-36 object-cover" />
                  <span className="absolute top-2 right-2 text-sm bg-green-600 text-white px-2 py-1 rounded-md font-bold shadow-sm">
                    {product.badge}
                  </span>
                  <div className="absolute top-2 left-2 text-sm bg-[#363636] text-white px-2 py-1 rounded-md font-bold">
                    AI {product.aiScore}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-bold text-[#363636] mb-1 line-clamp-2">{product.name}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                    <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {idx === 0 ? 'Great for oily skin' : 'Budget smartwatch pick'}
                  </p>
                  <p className="text-sm font-bold text-[#363636]">₹{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Social Trends - Personalized */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#363636] rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#363636]">Trending In Your World</h2>
              <p className="text-sm text-gray-600">Popular among people with similar interests</p>
            </div>
          </div>
          <div className="space-y-3">
            {socialTrends.map((trend, idx) => (
              <div key={idx} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 hover:border-[#363636] hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                      {trend.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#363636] mb-1">{trend.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{trend.description}</p>
                      <p className="text-sm text-gray-700">
                        {idx === 0 ? 'Trending among skincare enthusiasts like you' : 'Popular with tech professionals in your network'}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-base font-bold text-green-600 flex items-center gap-1 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      {trend.trend}
                    </span>
                    <span className="text-sm text-gray-500">this month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Browse All Categories - General Purpose */}
        <section className="border-t-2 border-gray-200 pt-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#363636] mb-1">Browse All Categories</h2>
            <p className="text-sm text-gray-600">Explore our complete product catalog</p>
          </div>

          {/* Beauty */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#363636]">Beauty & Personal Care</h3>
              <button
                onClick={() => navigate('/discovery/beauty')}
                className="text-sm text-gray-600 hover:text-[#363636] font-semibold flex items-center gap-1"
              >
                View All
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {beautyCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(cat.path)}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:border-[#363636] hover:shadow-sm transition-all text-center"
                >
                  <span className="text-2xl mb-2 block">{cat.icon}</span>
                  <span className="text-sm font-medium text-[#363636] block">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Electronics */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#363636]">Electronics & Gadgets</h3>
              <button
                onClick={() => navigate('/discovery/electronics')}
                className="text-sm text-gray-600 hover:text-[#363636] font-semibold flex items-center gap-1"
              >
                View All
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {electronicsCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(cat.path)}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:border-[#363636] hover:shadow-sm transition-all text-center"
                >
                  <span className="text-2xl mb-2 block">{cat.icon}</span>
                  <span className="text-sm font-medium text-[#363636] block">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Fashion */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#363636]">Fashion & Lifestyle</h3>
              <button
                onClick={() => navigate('/discovery/fashion')}
                className="text-sm text-gray-600 hover:text-[#363636] font-semibold flex items-center gap-1"
              >
                View All
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {fashionCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(cat.path)}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:border-[#363636] hover:shadow-sm transition-all text-center"
                >
                  <span className="text-2xl mb-2 block">{cat.icon}</span>
                  <span className="text-sm font-medium text-[#363636] block">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FlashHome;
