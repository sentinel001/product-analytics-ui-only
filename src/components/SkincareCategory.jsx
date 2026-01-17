import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Sparkles, TrendingUp, Filter, ChevronDown, User, ChevronRight } from 'lucide-react';

const SkincareCategory = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const userProfile = {
    skinType: 'Oily/Combination',
    concerns: ['Acne', 'Large Pores', 'Excess Oil'],
    previousPurchases: 12
  };

  const shopByOccasion = [
    {
      id: 'winter',
      title: 'Winter Combo',
      description: 'Deep hydration for cold weather',
      icon: '❄️',
      products: 5,
      matchScore: 97,
      color: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200',
      path: '/occasion/beauty/winter'
    },
    {
      id: 'summer',
      title: 'Summer Combo',
      description: 'Lightweight oil-control essentials',
      icon: '🌞',
      products: 6,
      matchScore: 95,
      color: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      path: '/occasion/beauty/summer'
    },
    {
      id: 'beach',
      title: 'Beach Day-Out',
      description: 'Water-resistant SPF protection',
      icon: '🏖️',
      products: 4,
      matchScore: 92,
      color: 'from-teal-50 to-cyan-50',
      borderColor: 'border-teal-200',
      path: '/occasion/beauty/beach'
    },
    {
      id: 'party',
      title: 'Party Night',
      description: 'Long-lasting glow & makeup base',
      icon: '✨',
      products: 7,
      matchScore: 90,
      color: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      path: '/occasion/beauty/party'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Neutrogena Hydro Boost Water Gel',
      brand: 'Neutrogena',
      category: 'Moisturizer',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80',
      price: 799,
      aiScore: 95,
      rating: 4.5,
      reviews: 1243,
      matchReason: 'Perfect for your oily skin - oil-free, non-comedogenic',
      matchPercentage: 95,
      inStock: true
    },
    {
      id: 2,
      name: 'La Roche-Posay Effaclar Duo+',
      brand: 'La Roche-Posay',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80',
      price: 1450,
      aiScore: 92,
      rating: 4.6,
      reviews: 1567,
      matchReason: 'Targets acne and large pores - your main concerns',
      matchPercentage: 92,
      inStock: true
    },
    {
      id: 3,
      name: 'CeraVe Foaming Facial Cleanser',
      brand: 'CeraVe',
      category: 'Cleanser',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&q=80',
      price: 649,
      aiScore: 90,
      rating: 4.7,
      reviews: 2891,
      matchReason: 'Removes excess oil without stripping moisture',
      matchPercentage: 90,
      inStock: true
    },
    {
      id: 4,
      name: 'The Ordinary Niacinamide 10% + Zinc 1%',
      brand: 'The Ordinary',
      category: 'Serum',
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=300&q=80',
      price: 590,
      aiScore: 91,
      rating: 4.4,
      reviews: 3421,
      matchReason: 'Controls oil production & minimizes pores',
      matchPercentage: 91,
      inStock: true
    },
    {
      id: 5,
      name: 'Plum Green Tea Toner',
      brand: 'Plum',
      category: 'Toner',
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&q=80',
      price: 399,
      aiScore: 88,
      rating: 4.5,
      reviews: 987,
      matchReason: 'Balances pH and controls shine - budget friendly',
      matchPercentage: 88,
      inStock: true
    },
    {
      id: 6,
      name: 'Minimalist Salicylic Acid 2% Face Serum',
      brand: 'Minimalist',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=300&q=80',
      price: 599,
      aiScore: 89,
      rating: 4.3,
      reviews: 1654,
      matchReason: 'Unclogs pores and prevents breakouts',
      matchPercentage: 89,
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
            <h1 className="text-lg font-bold text-[#363636]">Skincare</h1>
            <p className="text-xs text-gray-600">Personalized for you</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* AI Personalization Banner */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#363636] rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#363636] mb-1">AI-Personalized Selection</h3>
              <p className="text-xs text-gray-700 mb-3">
                Curated for your skin based on {userProfile.previousPurchases} purchases.
              </p>

              {/* User Profile Pills */}
              <div className="flex items-center gap-2 mb-2">
                <User className="w-3 h-3 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700">Your Profile:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700">
                  {userProfile.skinType}
                </span>
                {userProfile.concerns.map((concern, idx) => (
                  <span key={idx} className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    {concern}
                  </span>
                ))}
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
              onClick={() => setSelectedFilter('cleanser')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'cleanser' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cleansers
            </button>
            <button
              onClick={() => setSelectedFilter('moisturizer')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'moisturizer' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Moisturizers
            </button>
            <button
              onClick={() => setSelectedFilter('serum')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'serum' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Serums
            </button>
            <button
              onClick={() => setSelectedFilter('treatment')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'treatment' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Treatments
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
                onClick={() => navigate(idx === 0 ? '/product/beauty-v1' : idx === 1 ? '/product/beauty-v2' : '/product/beauty')}
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
                    <span className="text-sm font-bold text-[#363636]">₹{product.price}</span>
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

        {/* Routine Suggestion CTA */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-sm font-bold text-[#363636] mb-1">Need a Complete Routine?</h3>
          <p className="text-xs text-gray-700 mb-3">
            Get a personalized 4-step skincare routine curated for your oily skin type.
          </p>
          <button
            onClick={() => navigate('/routine/oily-skin')}
            className="w-full bg-[#363636] text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View Oily Skin Routine
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkincareCategory;
