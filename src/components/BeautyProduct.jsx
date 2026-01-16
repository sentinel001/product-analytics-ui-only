import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Info, HelpCircle, ExternalLink, Play, Clock, Droplet, ArrowLeft, ShoppingCart } from 'lucide-react';

const BeautyProduct = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('summary');
  const [showCompatibility, setShowCompatibility] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Flash AI</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ExternalLink className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Best Match Section */}
        <section>
          <h2 className="text-sm font-medium text-gray-600 mb-3">Found the best match:</h2>
          <div className="bg-pink-50 rounded-lg p-4">
            <div className="flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=250&fit=crop"
                alt="Neutrogena Hydro Boost Water Gel"
                className="w-16 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-2">
                  Neutrogena Hydro Boost Water Gel
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <Droplet className="w-3 h-3" />
                    Oily/Combo Skin
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">₹799</span>
                  <span className="text-gray-600 text-xs ml-1">50g • In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Usage Guidance - Phase 1 Feature */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Play className="w-4 h-4 text-purple-600" />
              How to Use This Product
            </h3>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
              NEW
            </span>
          </div>

          {/* Video Tutorial */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg h-32 mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-white text-center">
              <Play className="w-12 h-12 mx-auto mb-2 opacity-90" />
              <p className="text-xs font-medium">Watch Application Tutorial (45s)</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=200&fit=crop"
              alt="Tutorial"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
          </div>

          {/* Step-by-step Instructions */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-700 mb-2">Application Steps:</h4>
            {[
              { step: 1, text: 'Cleanse face and pat dry', icon: '💧' },
              { step: 2, text: 'Take pea-sized amount', icon: '🫘' },
              { step: 3, text: 'Apply in upward circular motions', icon: '↻' },
              { step: 4, text: 'Allow 2 min to absorb', icon: '⏱️' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-2 text-xs bg-white/60 rounded p-2">
                <span className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {item.step}
                </span>
                <span className="text-xs mr-2">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Usage Frequency - Phase 1 Feature */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-white/60 rounded p-2">
              <Clock className="w-4 h-4 text-purple-600 mb-1" />
              <p className="text-xs font-semibold text-gray-700">When to Use</p>
              <p className="text-xs text-gray-600">Morning & Night</p>
            </div>
            <div className="bg-white/60 rounded p-2">
              <Droplet className="w-4 h-4 text-purple-600 mb-1" />
              <p className="text-xs font-semibold text-gray-700">Amount</p>
              <p className="text-xs text-gray-600">Pea-sized</p>
            </div>
          </div>
        </section>

        {/* NEW: Suitability Matcher - Phase 1 Feature */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Suitable For You?</h3>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
              PERSONALIZED
            </span>
          </div>

          {/* Skin Type Match */}
          <div className="space-y-2 mb-3">
            {[
              { type: 'Oily Skin', match: 95, color: 'green' },
              { type: 'Combination Skin', match: 90, color: 'green' },
              { type: 'Acne-Prone Skin', match: 85, color: 'yellow' },
              { type: 'Sensitive Skin', match: 70, color: 'yellow' },
              { type: 'Dry Skin', match: 45, color: 'red' },
            ].map((item) => (
              <div key={item.type} className="flex items-center justify-between bg-white/60 rounded p-2">
                <span className="text-xs font-medium text-gray-700">{item.type}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        item.color === 'green' ? 'bg-green-500' :
                        item.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${item.match}%` }}
                    ></div>
                  </div>
                  <span className={`text-xs font-bold ${
                    item.color === 'green' ? 'text-green-600' :
                    item.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {item.match}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Compatibility Checker */}
          <button
            onClick={() => setShowCompatibility(!showCompatibility)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {showCompatibility ? 'Hide' : 'Check'} Product Compatibility
          </button>

          {showCompatibility && (
            <div className="mt-3 space-y-2">
              <p className="text-xs font-semibold text-gray-700">Can be used with:</p>
              {[
                { product: 'Vitamin C Serum', compatible: true },
                { product: 'Retinol Treatment', compatible: false },
                { product: 'Niacinamide Serum', compatible: true },
                { product: 'AHA/BHA Exfoliant', compatible: false },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/60 rounded p-2">
                  <span className="text-xs text-gray-700">{item.product}</span>
                  {item.compatible ? (
                    <span className="text-green-600 text-xs font-medium">✓ Compatible</span>
                  ) : (
                    <span className="text-red-600 text-xs font-medium">✗ Not recommended</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Price Comparison */}
        <section>
          <h2 className="text-sm font-semibold mb-3">Compare prices</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border rounded-lg hover:border-pink-500 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <img src="https://logo.clearbit.com/nykaa.com" alt="Nykaa" className="w-8 h-8 rounded" />
                <span className="font-medium text-sm">Nykaa</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">₹799</div>
                <div className="text-xs text-gray-500">Use BEAUTY20 for ₹160 off</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg hover:border-orange-500 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <img src="https://logo.clearbit.com/amazon.in" alt="Amazon" className="w-8 h-8 rounded" />
                <span className="font-medium text-sm">Amazon</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">₹679</div>
                <div className="text-xs text-green-600">Lowest Price!</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <button className="w-full mt-3 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Compare these stores
          </button>
        </section>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex gap-6">
            {['AI Summary', 'Full Specs', 'Reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                className={`pb-2 px-1 font-medium text-sm transition-colors ${
                  activeTab === tab.toLowerCase().replace(' ', '-')
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Ingredient Transparency - Phase 1 Feature */}
        <section>
          <h3 className="text-sm font-semibold mb-3">Ingredients Breakdown</h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            {[
              { name: 'Hyaluronic Acid', purpose: 'Deep hydration', safe: true },
              { name: 'Glycerin', purpose: 'Moisture retention', safe: true },
              { name: 'Dimethicone', purpose: 'Smooth texture', safe: true },
              { name: 'Fragrance', purpose: 'Light scent', safe: false, warning: 'May cause sensitivity' },
            ].map((ingredient, idx) => (
              <div key={idx} className="bg-white rounded p-3 border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{ingredient.name}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{ingredient.purpose}</p>
                    {ingredient.warning && (
                      <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                        <Info className="w-3 h-3" /> {ingredient.warning}
                      </p>
                    )}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    ingredient.safe ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {ingredient.safe ? 'Safe' : 'Caution'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              ✓ Paraben-free
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              ✓ Non-comedogenic
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              ✓ Dermatologist tested
            </span>
          </div>
        </section>

        {/* Recommendation Score */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Recommendation</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">92</div>
                  <div className="text-xs">/100</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-green-700 font-medium mb-1">Excellent Choice!</div>
              <p className="text-sm text-gray-700">
                Perfect for oily/combination skin. Lightweight, non-greasy formula
              </p>
            </div>
          </div>
        </section>

        {/* Score Breakdown */}
        <section>
          <h3 className="text-sm font-semibold mb-4">Score Breakdown</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { score: 95, label: 'For Oily Skin', color: 'text-green-600' },
              { score: 90, label: 'Ingredients', color: 'text-blue-600' },
              { score: 88, label: 'Value', color: 'text-yellow-600' },
              { score: 92, label: 'Reviews', color: 'text-purple-600' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-12 h-12 mx-auto rounded-full border-4 ${item.color} border-opacity-30 flex items-center justify-center mb-2`}>
                  <span className={`text-lg font-bold ${item.color}`}>{item.score}</span>
                </div>
                <div className="text-xs text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Similar Products */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Similar Products</h3>
            <button className="text-xs text-blue-600 font-medium">See All</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: 'CeraVe Moisturizing Cream',
                score: 90,
                price: '₹649',
                image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop'
              },
              {
                name: 'Cetaphil Daily Hydrating Lotion',
                score: 88,
                price: '₹720',
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop'
              }
            ].map((product, idx) => (
              <div key={idx} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded mb-2" />
                <div className="text-xs font-medium mb-1 line-clamp-2">{product.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">
                    {product.score}/100
                  </span>
                </div>
                <div className="font-semibold text-sm">{product.price}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Fixed Bottom: Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-600">Best Price</p>
            <p className="text-xl font-bold text-gray-900">₹799</p>
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

export default BeautyProduct;
