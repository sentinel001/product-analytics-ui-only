import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Info, ExternalLink, Play, Clock, Droplet, ArrowLeft, ShoppingCart, Award, TrendingUp, Star, Check, X, Filter, CheckCircle } from 'lucide-react';

const BeautyProduct = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('summary');
  const [showCompatibility, setShowCompatibility] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([1]);

  const comparisonProducts = [
    {
      id: 1,
      name: 'Neutrogena Hydro Boost Water Gel',
      brand: 'Neutrogena',
      price: 799,
      size: 50,
      unit: 'g',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=250&fit=crop',
      rating: 4.5,
      reviews: 1243,
      aiScore: 92,
      keyIngredients: ['Hyaluronic Acid', 'Glycerin', 'Dimethicone'],
      suitability: { oily: 95, combination: 90, acne: 85, sensitive: 70, dry: 45 },
      texture: 'Gel',
      finish: 'Matte',
      absorption: 'Fast'
    },
    {
      id: 2,
      name: 'CeraVe Moisturizing Cream',
      brand: 'CeraVe',
      price: 649,
      size: 50,
      unit: 'g',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop',
      rating: 4.7,
      reviews: 2891,
      aiScore: 90,
      keyIngredients: ['Ceramides', 'Hyaluronic Acid', 'Niacinamide'],
      suitability: { oily: 65, combination: 75, acne: 80, sensitive: 90, dry: 95 },
      texture: 'Cream',
      finish: 'Natural',
      absorption: 'Medium'
    },
    {
      id: 3,
      name: 'Cetaphil Daily Hydrating Lotion',
      brand: 'Cetaphil',
      price: 720,
      size: 88,
      unit: 'ml',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop',
      rating: 4.3,
      reviews: 876,
      aiScore: 88,
      keyIngredients: ['Hyaluronic Acid', 'Vitamin E', 'Glycerin'],
      suitability: { oily: 70, combination: 80, acne: 75, sensitive: 85, dry: 80 },
      texture: 'Lotion',
      finish: 'Dewy',
      absorption: 'Fast'
    }
  ];

  const toggleProductComparison = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(p => p !== productId));
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, productId]);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <h1 className="text-xl font-bold text-black">Product Details</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ExternalLink className="w-5 h-5 text-gray-700" />
        </button>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Trust Badge - From Ranked List */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-black" />
            <div>
              <p className="text-xs font-bold text-black">Ranked #2 in "Top 10 Microplastic-Free Face Scrubs"</p>
              <p className="text-xs text-gray-600">Updated Jan 2026 • 200 products analyzed</p>
            </div>
          </div>
        </div>

        {/* Best Match Section */}
        <section>
          <h2 className="text-sm font-medium text-gray-600 mb-3">AI-matched for you:</h2>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
            <div className="flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=250&fit=crop"
                alt="Neutrogena Hydro Boost Water Gel"
                className="w-16 h-20 object-cover rounded border border-gray-200"
              />
              <div className="flex-1">
                <h3 className="text-sm font-bold text-black mb-2">
                  Neutrogena Hydro Boost Water Gel
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <Droplet className="w-3 h-3" />
                    Oily/Combo Skin
                  </span>
                  <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-bold">
                    AI 92
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-black">₹799</span>
                  <span className="text-gray-600 text-xs ml-1">50g • In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Guide Reference */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-black" />
              <div>
                <h3 className="text-sm font-semibold text-black">Matches: Sunscreen Buying Guide</h3>
                <p className="text-xs text-gray-600">By Skin Type</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </section>

        {/* Usage Guidance */}
        <section className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-black flex items-center gap-2">
              <Play className="w-4 h-4" />
              How to Use
            </h3>
          </div>

          {/* Video Tutorial */}
          <div className="bg-gray-900 rounded-lg h-32 mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="relative z-10 text-white text-center">
              <Play className="w-12 h-12 mx-auto mb-2 opacity-90" />
              <p className="text-xs font-medium">Watch Tutorial (45s)</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=200&fit=crop"
              alt="Tutorial"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Application Steps */}
          <div className="space-y-2">
            {[
              { step: 1, text: 'Cleanse face and pat dry', icon: '💧' },
              { step: 2, text: 'Take pea-sized amount', icon: '🫘' },
              { step: 3, text: 'Apply in upward circular motions', icon: '↻' },
              { step: 4, text: 'Allow 2 min to absorb', icon: '⏱️' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-2 text-xs bg-white border border-gray-200 rounded p-2">
                <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {item.step}
                </span>
                <span className="text-xs mr-2">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Usage Frequency */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-white border border-gray-200 rounded p-2">
              <Clock className="w-4 h-4 text-black mb-1" />
              <p className="text-xs font-semibold text-black">When to Use</p>
              <p className="text-xs text-gray-600">Morning & Night</p>
            </div>
            <div className="bg-white border border-gray-200 rounded p-2">
              <Droplet className="w-4 h-4 text-black mb-1" />
              <p className="text-xs font-semibold text-black">Amount</p>
              <p className="text-xs text-gray-600">Pea-sized</p>
            </div>
          </div>
        </section>

        {/* Suitability Matcher */}
        <section className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-black">Skin Type Match</h3>
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
              <div key={item.type} className="flex items-center justify-between bg-white border border-gray-200 rounded p-2">
                <span className="text-xs font-medium text-black">{item.type}</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        item.color === 'green' ? 'bg-green-600' :
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
            className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
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
                <div key={idx} className="flex items-center justify-between bg-white border border-gray-200 rounded p-2">
                  <span className="text-xs text-gray-700">{item.product}</span>
                  {item.compatible ? (
                    <span className="text-green-600 text-xs font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Compatible
                    </span>
                  ) : (
                    <span className="text-red-600 text-xs font-medium flex items-center gap-1">
                      <X className="w-3 h-3" /> Not recommended
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Product Comparison - Phase 3 Feature */}
        <section className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-black">Compare Similar Products</h3>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-xs text-gray-700 hover:text-black font-medium"
            >
              {showComparison ? 'Hide' : 'Show'}
            </button>
          </div>

          {showComparison && (
            <div className="space-y-3">
              <p className="text-xs text-gray-600">Select up to 3 products to compare:</p>

              {comparisonProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white border rounded-lg p-3 transition-all ${
                    selectedProducts.includes(product.id) ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleProductComparison(product.id)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selectedProducts.includes(product.id)
                          ? 'bg-black border-black'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {selectedProducts.includes(product.id) && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded border border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-black mb-1">{product.name}</h4>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-black">₹{product.price}</span>
                        <span className="bg-black text-white px-1.5 py-0.5 rounded text-xs font-bold">
                          AI {product.aiScore}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                        <span className="text-xs text-gray-600">{product.rating} ({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {selectedProducts.length > 1 && (
                <div className="mt-3 bg-white border border-gray-300 rounded-lg p-3">
                  <h4 className="text-xs font-bold text-black mb-2">Quick Comparison:</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Best for Oily Skin:</span>
                      <span className="font-semibold text-black">Neutrogena (95%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Best Value:</span>
                      <span className="font-semibold text-black">CeraVe (₹12.98/g)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Best Rated:</span>
                      <span className="font-semibold text-black">CeraVe (4.7★)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Price Comparison */}
        <section>
          <h2 className="text-sm font-bold text-black mb-3">Best Prices</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-lg hover:border-black transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <img src="https://logo.clearbit.com/nykaa.com" alt="Nykaa" className="w-8 h-8 rounded" />
                <span className="font-medium text-sm text-black">Nykaa</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-black">₹799</div>
                <div className="text-xs text-gray-600">Use BEAUTY20</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-3 bg-white border border-black rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <img src="https://logo.clearbit.com/amazon.in" alt="Amazon" className="w-8 h-8 rounded" />
                <span className="font-medium text-sm text-black">Amazon</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-black">₹679</div>
                <div className="text-xs text-green-600 font-semibold">Lowest Price!</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </div>
          </div>

          <button className="w-full mt-3 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            View All Stores
          </button>
        </section>

        {/* Tabs */}
        <div className="border-b border-gray-300">
          <div className="flex gap-6">
            {['AI Summary', 'Ingredients', 'Reviews'].map((tab) => (
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

        {/* Ingredient Transparency */}
        <section>
          <h3 className="text-sm font-bold text-black mb-3">Key Ingredients</h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            {[
              { name: 'Hyaluronic Acid', purpose: 'Deep hydration', safe: true },
              { name: 'Glycerin', purpose: 'Moisture retention', safe: true },
              { name: 'Dimethicone', purpose: 'Smooth texture', safe: true },
              { name: 'Fragrance', purpose: 'Light scent', safe: false, warning: 'May cause sensitivity' },
            ].map((ingredient, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black">{ingredient.name}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{ingredient.purpose}</p>
                    {ingredient.warning && (
                      <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                        <Info className="w-3 h-3" /> {ingredient.warning}
                      </p>
                    )}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    ingredient.safe ? 'bg-gray-200 text-gray-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {ingredient.safe ? 'Safe' : 'Caution'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-medium">
              ✓ Paraben-free
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-medium">
              ✓ Non-comedogenic
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-medium">
              ✓ Dermatologist tested
            </span>
          </div>
        </section>

        {/* AI Recommendation Score */}
        <section className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-black">AI Recommendation</h3>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">92</div>
                  <div className="text-xs">/100</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-green-600 font-bold mb-1">Excellent Match!</div>
              <p className="text-sm text-gray-700">
                Perfect for oily/combination skin. Lightweight, non-greasy formula
              </p>
            </div>
          </div>
        </section>

        {/* Score Breakdown */}
        <section>
          <h3 className="text-sm font-bold text-black mb-4">Score Breakdown</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { score: 95, label: 'For Oily Skin', color: 'text-green-600' },
              { score: 90, label: 'Ingredients', color: 'text-black' },
              { score: 88, label: 'Value', color: 'text-gray-700' },
              { score: 92, label: 'Reviews', color: 'text-gray-700' },
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
            <h3 className="text-sm font-bold text-black">Similar Products</h3>
            <button className="text-xs text-gray-600 hover:text-black font-medium">See All</button>
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
              <div key={idx} className="border border-gray-200 rounded-lg p-3 hover:border-black hover:shadow-sm transition-all cursor-pointer">
                <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded mb-2" />
                <div className="text-xs font-medium mb-1 line-clamp-2 text-black">{product.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded">
                    AI {product.score}
                  </span>
                </div>
                <div className="font-bold text-sm text-black">{product.price}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Fixed Bottom: Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-600">Best Price</p>
            <p className="text-xl font-bold text-black">₹679</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all transform active:scale-95 flex items-center justify-center gap-2"
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
