import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, TrendingDown, Clock, AlertCircle, ChevronDown, ChevronUp, Info, Zap, Cpu, Battery, Camera, Shield, ArrowLeft, ShoppingCart } from 'lucide-react';

const ElectronicsProduct = () => {
  const navigate = useNavigate();
  const [expandedSpec, setExpandedSpec] = useState(null);
  const [priceHistory, setPriceHistory] = useState('30d');

  const specifications = [
    {
      category: 'Performance',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      specs: [
        { name: 'Processor', value: 'Apple A17 Pro', tooltip: '3nm chip with 6-core CPU (2 performance + 4 efficiency cores)', highlight: true },
        { name: 'RAM', value: '8GB', tooltip: 'LPDDR5 unified memory for smooth multitasking' },
        { name: 'Storage', value: '256GB', tooltip: 'NVMe SSD - Non-expandable', visualBar: 256 },
        { name: 'GPU', value: '6-core GPU', tooltip: 'Hardware-accelerated ray tracing support' }
      ]
    },
    {
      category: 'Display',
      icon: <Zap className="w-5 h-5 text-purple-600" />,
      specs: [
        { name: 'Screen Size', value: '6.1 inches', tooltip: 'Super Retina XDR OLED display' },
        { name: 'Resolution', value: '2556 x 1179', tooltip: '460 ppi pixel density for crisp visuals', highlight: true },
        { name: 'Refresh Rate', value: '120Hz ProMotion', tooltip: 'Adaptive refresh rate 1-120Hz for smooth scrolling' },
        { name: 'Peak Brightness', value: '2000 nits', tooltip: 'HDR peak brightness for outdoor visibility' }
      ]
    },
    {
      category: 'Battery & Charging',
      icon: <Battery className="w-5 h-5 text-green-600" />,
      specs: [
        { name: 'Battery Capacity', value: '3,877 mAh', tooltip: 'Lithium-ion battery', visualBar: 3877 },
        { name: 'Video Playback', value: 'Up to 23 hours', tooltip: 'Based on Apple testing conditions', highlight: true },
        { name: 'Charging Speed', value: '20W Fast Charge', tooltip: '50% in 30 minutes with 20W adapter (sold separately)' },
        { name: 'Wireless', value: 'MagSafe 15W', tooltip: 'Qi2 wireless charging compatible' }
      ]
    },
    {
      category: 'Camera System',
      icon: <Camera className="w-5 h-5 text-pink-600" />,
      specs: [
        { name: 'Main Camera', value: '48MP f/1.6', tooltip: 'Quad-pixel sensor with sensor-shift OIS', highlight: true },
        { name: 'Ultra Wide', value: '12MP f/2.4', tooltip: '120° field of view with macro capability' },
        { name: 'Telephoto', value: '12MP f/2.8', tooltip: '3x optical zoom (77mm focal length)' },
        { name: 'Front Camera', value: '12MP TrueDepth', tooltip: 'Autofocus with Face ID support' }
      ]
    }
  ];

  const priceComparisons = [
    { platform: 'Amazon', price: 134999, rating: 4.6, reviews: '2,847', discount: 5, stock: 'In Stock', delivery: 'Tomorrow', logo: 'https://logo.clearbit.com/amazon.in', color: 'bg-orange-50 border-orange-200' },
    { platform: 'Flipkart', price: 135999, rating: 4.5, reviews: '1,932', discount: 4, stock: 'In Stock', delivery: 'Tomorrow', logo: 'https://logo.clearbit.com/flipkart.com', color: 'bg-blue-50 border-blue-200', bestSeller: true },
    { platform: 'Croma', price: 139900, rating: 4.7, reviews: '486', discount: 0, stock: 'Limited Stock', delivery: '2-3 days', logo: 'https://logo.clearbit.com/croma.com', color: 'bg-green-50 border-green-200' },
    { platform: 'Apple Store', price: 139900, rating: 4.8, reviews: '12,453', discount: 0, stock: 'In Stock', delivery: '3-5 days', logo: 'https://logo.clearbit.com/apple.com', color: 'bg-gray-50 border-gray-200' }
  ];

  const priceHistoryData = {
    '7d': [139900, 138900, 137900, 136900, 135999, 134999, 134999],
    '30d': [144900, 143900, 142900, 141900, 140900, 139900, 138900, 137900, 136900, 135999, 134999],
    '90d': [149900, 148900, 147900, 146900, 145900, 144900, 142900, 140900, 138900, 136900, 134999]
  };

  const currentHistory = priceHistoryData[priceHistory];
  const lowestPrice = Math.min(...currentHistory);
  const highestPrice = Math.max(...currentHistory);
  const priceDrop = highestPrice - lowestPrice;
  const dropPercentage = ((priceDrop / highestPrice) * 100).toFixed(1);

  const budgetRecommendations = [
    { label: 'Budget Alternative', product: 'OnePlus 11R', price: 39999, saving: 95000, match: '75%' },
    { label: 'Mid-Range Option', product: 'Samsung Galaxy S23 FE', price: 59999, saving: 75000, match: '82%' },
    { label: 'Premium Alternative', product: 'Google Pixel 8 Pro', price: 106999, saving: 28000, match: '88%' }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold text-gray-900">Product Analysis</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Electronics</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-white px-4 py-4 mb-3">
        <div className="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80"
            alt="iPhone 15 Pro"
            className="w-24 h-24 object-cover rounded-lg border border-gray-200"
          />
          <div className="flex-1">
            <h2 className="font-bold text-gray-900 text-base mb-1">iPhone 15 Pro</h2>
            <p className="text-sm text-gray-600 mb-2">256GB, Natural Titanium</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-900">4.6</span>
              </div>
              <span className="text-xs text-gray-500">16,718 reviews</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
              <TrendingDown className="w-3 h-3 text-green-600" />
              <span className="text-xs font-medium text-green-700">₹14,901 price drop</span>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 1 FEATURE: Real-Time Price Intelligence Engine */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mx-4 mb-3 border border-blue-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-blue-600" />
            Live Price Intelligence
          </h3>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Updated 2 min ago</span>
        </div>

        {/* Price History Graph */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-900">Price Trend</span>
            <div className="flex gap-1">
              {['7d', '30d', '90d'].map(period => (
                <button
                  key={period}
                  onClick={() => setPriceHistory(period)}
                  className={`text-xs px-2 py-1 rounded ${priceHistory === period ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Simple line chart visualization */}
          <div className="relative h-24 flex items-end gap-1">
            {currentHistory.map((price, idx) => {
              const height = ((price - lowestPrice) / (highestPrice - lowestPrice)) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                    style={{ height: `${Math.max(height, 10)}%` }}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-2">
            <div className="text-xs">
              <span className="text-gray-500">Lowest: </span>
              <span className="font-semibold text-green-600">₹{lowestPrice.toLocaleString()}</span>
            </div>
            <div className="text-xs">
              <span className="text-gray-500">Drop: </span>
              <span className="font-semibold text-blue-600">{dropPercentage}%</span>
            </div>
            <div className="text-xs">
              <span className="text-gray-500">Highest: </span>
              <span className="font-semibold text-gray-700">₹{highestPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Best Deal Alert */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-3 mb-3">
          <div className="flex items-start gap-2">
            <Zap className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm mb-1">Best Deal Alert!</p>
              <p className="text-xs opacity-90">Amazon offers the lowest price at ₹1,34,999 - Save ₹4,901 compared to MRP. Deal expires in 6 hours.</p>
            </div>
          </div>
        </div>

        {/* Multi-Platform Price Comparison */}
        <div className="space-y-2">
          {priceComparisons.map((platform, idx) => (
            <div key={idx} className={`${platform.color} border rounded-lg p-3 relative`}>
              {platform.bestSeller && (
                <span className="absolute -top-2 left-3 bg-yellow-400 text-yellow-900 text-xs px-2 py-0.5 rounded-full font-semibold">
                  🏆 Best Seller
                </span>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={platform.logo} alt={platform.platform} className="w-8 h-8 object-contain" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{platform.platform}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-700">{platform.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({platform.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-lg">₹{platform.price.toLocaleString()}</p>
                  {platform.discount > 0 && (
                    <span className="text-xs text-green-600 font-medium">{platform.discount}% off</span>
                  )}
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600">{platform.delivery}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Budget-Based Recommendations */}
        <div className="mt-3 bg-white rounded-lg p-3">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-600" />
            Budget-Friendly Alternatives
          </h4>
          <div className="space-y-2">
            {budgetRecommendations.map((rec, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{rec.label}</p>
                  <p className="font-semibold text-sm text-gray-900">{rec.product}</p>
                  <p className="text-xs text-green-600 font-medium mt-0.5">Save ₹{rec.saving.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-sm">₹{rec.price.toLocaleString()}</p>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{rec.match} match</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 1 FEATURE: Comprehensive Technical Specifications Hub */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Cpu className="w-5 h-5 text-gray-700" />
            Complete Technical Specs
          </h3>
          <span className="text-xs text-gray-500">Tap specs for details</span>
        </div>

        <div className="space-y-3">
          {specifications.map((category, catIdx) => (
            <div key={catIdx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedSpec(expandedSpec === catIdx ? null : catIdx)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span className="font-semibold text-gray-900 text-sm">{category.category}</span>
                </div>
                {expandedSpec === catIdx ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {expandedSpec === catIdx && (
                <div className="p-3 bg-white space-y-2">
                  {category.specs.map((spec, specIdx) => (
                    <div key={specIdx} className={`p-2 rounded ${spec.highlight ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-xs text-gray-600 font-medium">{spec.name}</span>
                        <div className="flex items-center gap-1">
                          <span className={`text-sm font-semibold ${spec.highlight ? 'text-blue-700' : 'text-gray-900'}`}>
                            {spec.value}
                          </span>
                          <div className="group relative">
                            <Info className="w-3 h-3 text-gray-400 cursor-help" />
                            <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-xs p-2 rounded shadow-lg z-10">
                              {spec.tooltip}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visual bar for storage/battery */}
                      {spec.visualBar && (
                        <div className="mt-2">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              style={{ width: `${(spec.visualBar / 5000) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{spec.tooltip}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Spec Comparison */}
        <div className="mt-3 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">How It Compares</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">vs iPhone 14 Pro</span>
              <span className="font-semibold text-green-600">15% faster • 2 hrs more battery</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">vs Samsung S24 Ultra</span>
              <span className="font-semibold text-blue-600">Similar performance • Better ecosystem</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">vs Google Pixel 8 Pro</span>
              <span className="font-semibold text-orange-600">Better processor • Pixel wins camera</span>
            </div>
          </div>
        </div>
      </section>

      {/* Score Breakdown */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <h3 className="font-bold text-gray-900 text-base mb-3">Score Breakdown</h3>
        <div className="space-y-3">
          {[
            { name: 'Performance', score: 96, color: 'bg-blue-500', description: 'Exceptional A17 Pro chip' },
            { name: 'Camera Quality', score: 94, color: 'bg-purple-500', description: '48MP with excellent low-light' },
            { name: 'Battery Life', score: 85, color: 'bg-green-500', description: '23 hrs video playback' },
            { name: 'Display', score: 98, color: 'bg-pink-500', description: 'ProMotion 120Hz OLED' },
            { name: 'Value for Money', score: 78, color: 'bg-orange-500', description: 'Premium pricing' }
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">{item.name}</span>
                <span className="text-sm font-bold text-gray-900">{item.score}/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Similar Products */}
      <section className="bg-white rounded-xl p-4 mx-4">
        <h3 className="font-bold text-gray-900 text-base mb-3">Similar Products You Might Like</h3>
        <div className="space-y-3">
          {[
            { name: 'iPhone 15 Pro Max', price: 159900, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80', rating: 4.7, match: '95%' },
            { name: 'Samsung Galaxy S24 Ultra', price: 129999, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&q=80', rating: 4.6, match: '88%' },
            { name: 'Google Pixel 8 Pro', price: 106999, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&q=80', rating: 4.5, match: '85%' }
          ].map((product, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900 mb-1">{product.name}</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{product.match} match</span>
                </div>
                <p className="font-bold text-gray-900 text-sm">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Bottom: Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-600">Best Price</p>
            <p className="text-xl font-bold text-gray-900">₹1,34,999</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-bold text-sm hover:bg-purple-700 transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsProduct;
