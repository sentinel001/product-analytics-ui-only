import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Sparkles, Filter, ChevronDown, User, ChevronRight } from 'lucide-react';

const ElectronicsCategory = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const userProfile = {
    interests: ['Programming', 'Productivity', 'Audio'],
    budget: 'Mid-High Range',
    previousPurchases: 15
  };

  const shopByOccasion = [
    {
      id: 'edc',
      title: 'Everyday Carry',
      description: 'Essential tech gear for daily routine',
      icon: '🎒',
      products: 6,
      matchScore: 94,
      color: 'from-gray-50 to-slate-50',
      borderColor: 'border-gray-300',
      path: '/occasion/electronics/edc'
    },
    {
      id: 'travel',
      title: 'Travel Essentials',
      description: 'Compact gadgets for your adventure',
      icon: '✈️',
      products: 9,
      matchScore: 91,
      color: 'from-blue-50 to-sky-50',
      borderColor: 'border-blue-200',
      path: '/occasion/electronics/travel'
    },
    {
      id: 'gym',
      title: 'Gym Combos',
      description: 'Fitness tech that tracks & motivates',
      icon: '💪',
      products: 7,
      matchScore: 89,
      color: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      path: '/occasion/electronics/gym'
    },
    {
      id: 'wfh',
      title: 'Work From Home',
      description: 'Productivity essentials for remote work',
      icon: '🏠',
      products: 8,
      matchScore: 93,
      color: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      path: '/occasion/electronics/wfh'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Sony WH-1000XM5 Headphones',
      brand: 'Sony',
      category: 'Audio',
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&q=80',
      price: 29990,
      aiScore: 96,
      rating: 4.8,
      reviews: 5243,
      matchReason: 'Perfect for programmers - exceptional noise cancellation',
      matchPercentage: 96,
      inStock: true
    },
    {
      id: 2,
      name: 'Apple MacBook Air M2',
      brand: 'Apple',
      category: 'Laptops',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&q=80',
      price: 114900,
      aiScore: 95,
      rating: 4.9,
      reviews: 3567,
      matchReason: 'Ideal for your productivity and programming needs',
      matchPercentage: 95,
      inStock: true
    },
    {
      id: 3,
      name: 'Logitech MX Master 3S',
      brand: 'Logitech',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&q=80',
      price: 8995,
      aiScore: 92,
      rating: 4.7,
      reviews: 2891,
      matchReason: 'Ergonomic mouse perfect for long coding sessions',
      matchPercentage: 92,
      inStock: true
    },
    {
      id: 4,
      name: 'iPad Pro 11" M2',
      brand: 'Apple',
      category: 'Tablets',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&q=80',
      price: 81900,
      aiScore: 93,
      rating: 4.8,
      reviews: 1421,
      matchReason: 'Versatile for work and creative tasks',
      matchPercentage: 93,
      inStock: true
    },
    {
      id: 5,
      name: 'Samsung Galaxy Watch 5',
      brand: 'Samsung',
      category: 'Wearables',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&q=80',
      price: 24999,
      aiScore: 89,
      rating: 4.5,
      reviews: 987,
      matchReason: 'Tracks fitness and productivity metrics',
      matchPercentage: 89,
      inStock: true
    },
    {
      id: 6,
      name: 'Keychron K8 Pro Mechanical Keyboard',
      brand: 'Keychron',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=300&q=80',
      price: 9999,
      aiScore: 91,
      rating: 4.6,
      reviews: 1654,
      matchReason: 'Premium typing experience for programmers',
      matchPercentage: 91,
      inStock: true
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-6">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-[#363636]">Electronics</h1>
            <p className="text-xs text-gray-600">Personalized for you</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* AI Personalization Banner */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#363636] rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#363636] mb-1">AI-Personalized Selection</h3>
              <p className="text-xs text-gray-700 mb-3">
                Tech curated for you based on {userProfile.previousPurchases} purchases.
              </p>

              {/* User Profile Pills */}
              <div className="flex items-center gap-2 mb-2">
                <User className="w-3 h-3 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700">Your Profile:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {userProfile.interests.map((interest, idx) => (
                  <span key={idx} className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    {interest}
                  </span>
                ))}
                <span className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700">
                  {userProfile.budget}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-[#363636]">Filter by Category</h3>
            <Filter className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'all' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedFilter('audio')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'audio' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Audio
            </button>
            <button
              onClick={() => setSelectedFilter('laptops')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'laptops' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Laptops
            </button>
            <button
              onClick={() => setSelectedFilter('wearables')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'wearables' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Wearables
            </button>
            <button
              onClick={() => setSelectedFilter('accessories')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'accessories' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Accessories
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#363636]">{products.length} Products Matched</h3>
            <button className="text-xs text-gray-600 hover:text-[#363636] font-medium flex items-center gap-1">
              Sort by Match
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {products.map((product, idx) => (
            <React.Fragment key={product.id}>
              <div
                onClick={() => navigate('/product/electronics')}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#363636] hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex gap-3 p-3">
                  {/* Product Image */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-24 object-cover rounded border border-gray-200"
                    />
                    <div className="absolute top-1 left-1 bg-[#363636] text-white px-1.5 py-0.5 rounded text-xs font-bold">
                      AI {product.aiScore}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-0.5">{product.brand}</p>
                        <h3 className="text-sm font-bold text-[#363636] line-clamp-2 mb-1">{product.name}</h3>
                      </div>
                    </div>

                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium mb-2">
                      {product.category}
                    </span>

                    {/* Match Indicator */}
                    <div className="mb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-600"
                            style={{ width: `${product.matchPercentage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-green-600">{product.matchPercentage}%</span>
                      </div>
                      <p className="text-xs text-gray-700 italic">"{product.matchReason}"</p>
                    </div>

                    {/* Rating & Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                        <span className="text-xs font-medium text-gray-700">{product.rating}</span>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>
                      <span className="text-sm font-bold text-[#363636]">₹{product.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop by Occasion - Horizontal Carousel after 3rd product */}
              {idx === 2 && (
                <div className="my-4">
                  <h3 className="text-sm font-bold text-[#363636] mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Shop by Occasion
                  </h3>
                  <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                    {shopByOccasion.map((occasion) => (
                      <div
                        key={occasion.id}
                        onClick={() => navigate(occasion.path)}
                        className={`flex-shrink-0 w-48 bg-gradient-to-br ${occasion.color} border-2 ${occasion.borderColor} rounded-lg p-3 hover:shadow-md transition-all cursor-pointer snap-start`}
                      >
                        <div className="flex flex-col gap-2">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                            {occasion.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#363636] mb-1">{occasion.title}</h4>
                            <p className="text-xs text-gray-700 mb-2 line-clamp-2">{occasion.description}</p>
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              <span className="bg-white px-2 py-0.5 rounded text-gray-900 font-medium">
                                {occasion.products} items
                              </span>
                              <span className="text-[#363636] font-semibold">
                                {occasion.matchScore}% match
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsCategory;
