import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Sparkles, Filter, ChevronDown, User, ChevronRight } from 'lucide-react';

const FashionCategory = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const userProfile = {
    bodyType: 'Athletic Build',
    preferences: ['Casual', 'Minimalist', 'Comfortable'],
    previousPurchases: 8
  };

  const shopByOccasion = [
    {
      id: 'wedding',
      title: "Friend's Wedding",
      description: "Smart casuals to wedding outfits",
      icon: '💍',
      products: 8,
      matchScore: 96,
      color: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      path: '/occasion/fashion/wedding'
    },
    {
      id: 'summer',
      title: 'College Summer Fit',
      description: 'Breathable, stylish campus basics',
      icon: '☀️',
      products: 12,
      matchScore: 93,
      color: 'from-orange-50 to-yellow-50',
      borderColor: 'border-orange-200',
      path: '/occasion/fashion/summer'
    },
    {
      id: 'office',
      title: 'Office Formals',
      description: 'Professional work attire',
      icon: '💼',
      products: 10,
      matchScore: 91,
      color: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      path: '/occasion/fashion/office'
    },
    {
      id: 'gym',
      title: 'Gym & Sports',
      description: 'Athletic wear for workouts',
      icon: '💪',
      products: 9,
      matchScore: 88,
      color: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      path: '/occasion/fashion/gym'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Organic Cotton T-Shirt',
      brand: 'Myntra',
      category: 'T-Shirts',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80',
      price: 1299,
      aiScore: 95,
      rating: 4.7,
      reviews: 2123,
      matchReason: 'Perfect fit for athletic build - slim fit with stretch',
      matchPercentage: 95,
      inStock: true
    },
    {
      id: 2,
      name: 'Slim Fit Chinos',
      brand: 'H&M',
      category: 'Pants',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&q=80',
      price: 1899,
      aiScore: 92,
      rating: 4.5,
      reviews: 1567,
      matchReason: 'Tailored fit complements your body type',
      matchPercentage: 92,
      inStock: true
    },
    {
      id: 3,
      name: 'Classic White Sneakers',
      brand: 'Adidas',
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&q=80',
      price: 3499,
      aiScore: 90,
      rating: 4.8,
      reviews: 3421,
      matchReason: 'Versatile style matches your minimalist preference',
      matchPercentage: 90,
      inStock: true
    },
    {
      id: 4,
      name: 'Denim Jacket',
      brand: 'Levis',
      category: 'Jackets',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&q=80',
      price: 3999,
      aiScore: 91,
      rating: 4.6,
      reviews: 1876,
      matchReason: 'Classic fit for your athletic frame',
      matchPercentage: 91,
      inStock: true
    },
    {
      id: 5,
      name: 'Casual Oxford Shirt',
      brand: 'Zara',
      category: 'Shirts',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&q=80',
      price: 1599,
      aiScore: 88,
      rating: 4.4,
      reviews: 987,
      matchReason: 'Smart casual style - perfect for occasions',
      matchPercentage: 88,
      inStock: true
    },
    {
      id: 6,
      name: 'Athletic Fit Polo',
      brand: 'Nike',
      category: 'Polos',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&q=80',
      price: 2199,
      aiScore: 89,
      rating: 4.5,
      reviews: 1654,
      matchReason: 'Performance fabric with tailored athletic fit',
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
            <h1 className="text-lg font-bold text-black">Fashion</h1>
            <p className="text-xs text-gray-600">Personalized for you</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* AI Personalization Banner */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-black mb-1">AI-Personalized Selection</h3>
              <p className="text-xs text-gray-700 mb-3">
                Based on your body analysis and {userProfile.previousPurchases} previous purchases, we've curated styles that suit you best.
              </p>

              {/* User Profile Pills */}
              <div className="flex items-center gap-2 mb-2">
                <User className="w-3 h-3 text-gray-600" />
                <span className="text-xs font-semibold text-gray-700">Your Profile:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700">
                  {userProfile.bodyType}
                </span>
                {userProfile.preferences.map((pref, idx) => (
                  <span key={idx} className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    {pref}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-black">Filter by Category</h3>
            <Filter className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'all' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedFilter('tshirts')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'tshirts' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              T-Shirts
            </button>
            <button
              onClick={() => setSelectedFilter('pants')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'pants' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pants
            </button>
            <button
              onClick={() => setSelectedFilter('footwear')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'footwear' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Footwear
            </button>
            <button
              onClick={() => setSelectedFilter('jackets')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedFilter === 'jackets' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Jackets
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-black">{products.length} Products Matched</h3>
            <button className="text-xs text-gray-600 hover:text-black font-medium flex items-center gap-1">
              Sort by Match
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {products.map((product, idx) => (
            <React.Fragment key={product.id}>
              <div
                onClick={() => navigate(idx === 0 ? '/product/fashion-v1' : idx === 1 ? '/product/fashion-v2' : '/product/fashion')}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-black hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex gap-3 p-3">
                  {/* Product Image */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-24 object-cover rounded border border-gray-200"
                    />
                    <div className="absolute top-1 left-1 bg-black text-white px-1.5 py-0.5 rounded text-xs font-bold">
                      AI {product.aiScore}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-0.5">{product.brand}</p>
                        <h3 className="text-sm font-bold text-black line-clamp-2 mb-1">{product.name}</h3>
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
                      <span className="text-sm font-bold text-black">₹{product.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop by Occasion - Horizontal Carousel after 3rd product */}
              {idx === 2 && (
                <div className="my-4">
                  <h3 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
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
                            <h4 className="text-sm font-bold text-black mb-1">{occasion.title}</h4>
                            <p className="text-xs text-gray-700 mb-2 line-clamp-2">{occasion.description}</p>
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              <span className="bg-white px-2 py-0.5 rounded text-gray-900 font-medium">
                                {occasion.products} items
                              </span>
                              <span className="text-black font-semibold">
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

export default FashionCategory;
