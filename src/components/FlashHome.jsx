import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, TrendingUp, Bell, User, ChevronRight, Star, Zap, Camera, Link as LinkIcon, Award, TrendingDown, Flame, Filter, ShoppingBag } from 'lucide-react';

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
    { name: 'Smartphones', icon: '📱', path: '/discovery/electronics?sub=smartphones' },
    { name: 'Laptops', icon: '💻', path: '/discovery/electronics?sub=laptops' },
    { name: 'Audio', icon: '🎧', path: '/discovery/electronics?sub=audio' },
    { name: 'Wearables', icon: '⌚', path: '/discovery/electronics?sub=wearables' }
  ];

  const fashionCategories = [
    { name: 'Tops & Tees', icon: '👕', path: '/discovery/fashion?sub=tops' },
    { name: 'Bottoms', icon: '👖', path: '/discovery/fashion?sub=bottoms' },
    { name: 'Footwear', icon: '👟', path: '/discovery/fashion?sub=footwear' },
    { name: 'Accessories', icon: '👜', path: '/discovery/fashion?sub=accessories' }
  ];

  const socialTrends = [
    {
      title: 'Glass Skin Routine',
      description: 'Korean beauty trend taking over',
      trend: '+145%',
      icon: '✨',
      color: 'bg-gray-50'
    },
    {
      title: 'Minimalist Tech',
      description: 'Less is more in gadgets',
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
      description: 'Curated 4-step routine for your skin type',
      products: '5 products',
      icon: '💧',
      color: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      path: '/routine/oily-skin'
    },
    {
      title: 'High-End Programmer Setup',
      description: 'Ergonomic workspace essentials for coding',
      products: '6 products',
      icon: '⌨️',
      color: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      path: '/bundle/programmer-setup'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-6">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-black">Flash</h1>
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

        {/* Search Bar with Multi-mode */}
        <div className="space-y-2">
          <div className="relative">
            {searchMode === 'name' && <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
            {searchMode === 'url' && <LinkIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
            {searchMode === 'image' && <Camera className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
            <input
              type="text"
              placeholder={
                searchMode === 'name' ? 'Search products...' :
                searchMode === 'url' ? 'Paste product URL...' :
                'Upload or capture image...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg text-black text-sm bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchMode('name')}
              className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                searchMode === 'name' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              By Name
            </button>
            <button
              onClick={() => setSearchMode('url')}
              className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                searchMode === 'url' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              By URL
            </button>
            <button
              onClick={() => setSearchMode('image')}
              className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                searchMode === 'image' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              By Image
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="px-4 py-4 space-y-6">
        {/* Social Trends */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-black">Social Trends</h2>
            <button className="text-xs text-gray-600 hover:text-black font-medium">View All</button>
          </div>
          <div className="space-y-2">
            {socialTrends.map((trend, idx) => (
              <div key={idx} className={`${trend.color} border border-gray-200 rounded-lg p-3 hover:border-black transition-all cursor-pointer`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{trend.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-black mb-0.5">{trend.title}</h3>
                      <p className="text-xs text-gray-600">{trend.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {trend.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ranked Lists */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-black">Expert Ranked Lists</h2>
            <button className="text-xs text-gray-600 hover:text-black font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {rankedLists.map((list, idx) => (
              <div
                key={idx}
                onClick={() => navigate('/ranked-list/microplastic-free-scrubs')}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-black hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex gap-3">
                  <img src={list.image} alt={list.title} className="w-24 h-24 object-cover" />
                  <div className="flex-1 p-3">
                    <h3 className="text-sm font-semibold text-black mb-2 line-clamp-2">{list.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span>Updated {list.updated}</span>
                      <span>•</span>
                      <span>{list.productsCount} products</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 mr-2 mt-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Finds */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-black flex items-center gap-2">
              <TrendingDown className="w-5 h-5" />
              Value Finds
            </h2>
            <button className="text-xs text-gray-600 hover:text-black font-medium">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {valueFinds.map((product, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/product/${product.category}`)}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-black hover:shadow-md transition-all cursor-pointer"
              >
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-36 object-cover" />
                  <span className="absolute top-2 right-2 text-xs bg-green-600 text-white px-2 py-1 rounded font-semibold">
                    {product.badge}
                  </span>
                  <div className="absolute top-2 left-2 text-xs bg-black text-white px-2 py-1 rounded font-bold">
                    AI {product.aiScore}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-black mb-1 line-clamp-2">{product.name}</p>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                  <p className="text-sm font-bold text-black">₹{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden Gems */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-black flex items-center gap-2">
              <Flame className="w-5 h-5" />
              Hidden Gems
            </h2>
            <button className="text-xs text-gray-600 hover:text-black font-medium">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {hiddenGems.map((product, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/product/${product.category}`)}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-black hover:shadow-md transition-all cursor-pointer"
              >
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-36 object-cover" />
                  <span className="absolute top-2 right-2 text-xs bg-purple-600 text-white px-2 py-1 rounded font-semibold">
                    {product.badge}
                  </span>
                  <div className="absolute top-2 left-2 text-xs bg-black text-white px-2 py-1 rounded font-bold">
                    AI {product.aiScore}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-black mb-1 line-clamp-2">{product.name}</p>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                  <p className="text-sm font-bold text-black">₹{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personalized For You */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-black">Personalized For You</h2>
            <span className="text-xs bg-black text-white px-2 py-1 rounded font-medium">AI Curated</span>
          </div>
          <div className="space-y-3">
            {personalizedRoutines.map((routine, idx) => (
              <div
                key={idx}
                onClick={() => navigate(routine.path)}
                className={`bg-gradient-to-br ${routine.color} border ${routine.borderColor} rounded-lg p-4 hover:border-black hover:shadow-md transition-all cursor-pointer`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{routine.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-black mb-1">{routine.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{routine.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-700 font-medium">{routine.products}</span>
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Beauty */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-black">Explore Beauty</h2>
            <button
              onClick={() => navigate('/discovery/beauty')}
              className="text-xs text-gray-600 hover:text-black font-medium"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {beautyCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => navigate(cat.path)}
                className="bg-white border border-gray-200 rounded-lg p-3 hover:border-black hover:shadow-sm transition-all text-center"
              >
                <span className="text-2xl mb-2 block">{cat.icon}</span>
                <span className="text-xs font-medium text-black block">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Explore Electronics */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-black">Explore Electronics</h2>
            <button
              onClick={() => navigate('/discovery/electronics')}
              className="text-xs text-gray-600 hover:text-black font-medium"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {electronicsCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => navigate(cat.path)}
                className="bg-white border border-gray-200 rounded-lg p-3 hover:border-black hover:shadow-sm transition-all text-center"
              >
                <span className="text-2xl mb-2 block">{cat.icon}</span>
                <span className="text-xs font-medium text-black block">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Explore Fashion */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-black">Explore Fashion</h2>
            <button
              onClick={() => navigate('/discovery/fashion')}
              className="text-xs text-gray-600 hover:text-black font-medium"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {fashionCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => navigate(cat.path)}
                className="bg-white border border-gray-200 rounded-lg p-3 hover:border-black hover:shadow-sm transition-all text-center"
              >
                <span className="text-2xl mb-2 block">{cat.icon}</span>
                <span className="text-xs font-medium text-black block">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default FlashHome;
