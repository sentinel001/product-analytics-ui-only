import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles, Star, TrendingDown, Filter, SlidersHorizontal } from 'lucide-react';

const ProductDiscovery = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categoryData = {
    beauty: {
      name: 'Beauty & Skincare',
      gradient: 'from-pink-500 to-purple-500',
      filters: ['All', 'Oily Skin', 'Dry Skin', 'Acne-Prone', 'Sensitive', 'Anti-Aging'],
      products: [
        {
          id: 1,
          name: 'Neutrogena Hydro Boost Water Gel',
          image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80',
          price: 799,
          originalPrice: 999,
          rating: 4.6,
          reviews: 2847,
          aiMatch: 95,
          matchReason: 'Perfect for oily/combo skin',
          badge: 'AI Recommended',
          path: '/product/beauty'
        },
        {
          id: 2,
          name: 'CeraVe Moisturizing Cream',
          image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&q=80',
          price: 649,
          rating: 4.5,
          reviews: 1932,
          aiMatch: 90,
          matchReason: 'Great for dry skin',
          badge: 'Best Value'
        },
        {
          id: 3,
          name: 'The Ordinary Niacinamide Serum',
          image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80',
          price: 599,
          rating: 4.7,
          reviews: 3241,
          aiMatch: 88,
          matchReason: 'Targets pores & texture',
          badge: 'Trending'
        }
      ]
    },
    electronics: {
      name: 'Electronics',
      gradient: 'from-blue-500 to-indigo-500',
      filters: ['All', 'Gaming', 'Photography', 'Budget', 'Battery Life', 'Performance'],
      products: [
        {
          id: 1,
          name: 'iPhone 15 Pro',
          image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80',
          price: 134999,
          originalPrice: 139900,
          rating: 4.6,
          reviews: 16718,
          aiMatch: 92,
          matchReason: 'Best overall performance',
          badge: 'Price Drop ₹4,901',
          path: '/product/electronics'
        },
        {
          id: 2,
          name: 'Samsung Galaxy S24 Ultra',
          image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&q=80',
          price: 129999,
          rating: 4.6,
          reviews: 8932,
          aiMatch: 88,
          matchReason: 'Best for power users',
          badge: 'Best Battery'
        },
        {
          id: 3,
          name: 'Google Pixel 8 Pro',
          image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&q=80',
          price: 106999,
          rating: 4.5,
          reviews: 5421,
          aiMatch: 85,
          matchReason: 'Best camera quality',
          badge: 'Best Value'
        }
      ]
    },
    fashion: {
      name: 'Fashion & Apparel',
      gradient: 'from-orange-500 to-amber-500',
      filters: ['All', 'Casual', 'Formal', 'Sports', 'Sustainable', 'Premium'],
      products: [
        {
          id: 1,
          name: 'Premium Organic Cotton T-Shirt',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80',
          price: 1299,
          rating: 4.7,
          reviews: 2123,
          aiMatch: 92,
          matchReason: 'Perfect fit for Medium',
          badge: 'Sustainable',
          path: '/product/fashion'
        },
        {
          id: 2,
          name: 'Linen Casual Shirt',
          image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&q=80',
          price: 1599,
          rating: 4.6,
          reviews: 1547,
          aiMatch: 89,
          matchReason: 'Great for summer',
          badge: 'Breathable'
        },
        {
          id: 3,
          name: 'Cotton Chinos',
          image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=200&q=80',
          price: 1999,
          rating: 4.5,
          reviews: 987,
          aiMatch: 87,
          matchReason: 'Versatile style',
          badge: 'Trending'
        }
      ]
    }
  };

  const data = categoryData[category] || categoryData.beauty;

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight']">
      {/* Header */}
      <div className={`bg-gradient-to-r ${data.gradient} text-white px-4 py-4`}>
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => navigate('/')} className="p-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-bold">{data.name}</h1>
            <p className="text-sm opacity-90">AI-powered recommendations</p>
          </div>
        </div>

        {/* AI Personalization Banner */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <div className="flex-1">
            <p className="text-sm font-semibold">Personalized for you</p>
            <p className="text-sm opacity-90">Based on your preferences</p>
          </div>
          <button className="text-sm underline">Update</button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2 overflow-x-auto">
          <button className="p-2 border border-gray-300 rounded-lg flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-gray-600" />
          </button>
          {data.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter.toLowerCase())}
              className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 ${
                selectedFilter === filter.toLowerCase()
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-gray-600">{data.products.length} products found</p>
          <button className="flex items-center gap-1 text-sm text-purple-600 font-medium">
            <Filter className="w-3 h-3" />
            Sort
          </button>
        </div>

        <div className="space-y-3">
          {data.products.map((product) => (
            <button
              key={product.id}
              onClick={() => navigate(product.path || `/product/${category}`)}
              className="w-full bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all transform hover:scale-[1.02] active:scale-95 p-3"
            >
              <div className="flex gap-3">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />

                {/* Product Info */}
                <div className="flex-1 text-left">
                  {/* AI Match Badge */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-sm font-bold">{product.aiMatch}% Match</span>
                    </div>
                    {product.badge && (
                      <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                        product.badge.includes('Price') ? 'bg-green-100 text-green-700' :
                        product.badge.includes('Sustainable') ? 'bg-green-100 text-green-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">{product.name}</h3>

                  <p className="text-sm text-purple-600 mb-2">{product.matchReason}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingDown className="w-3 h-3" />
                          <span className="text-sm font-medium">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full mt-4 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold text-sm hover:bg-purple-50 transition-colors">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default ProductDiscovery;
