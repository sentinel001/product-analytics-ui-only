import React, { useState } from 'react';
import { ChevronRight, Info, HelpCircle, ExternalLink, Play, Clock, Droplet, ArrowRight, Check, X, Star, TrendingUp, Award, Zap, Heart } from 'lucide-react';

const BeautyProduct_Phase3 = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [showCompatibility, setShowCompatibility] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([
    { id: 1, name: 'Neutrogena Hydro Boost Water Gel', price: 799, size: 50, unit: 'g', selected: true },
  ]);
  const [activeComparisonTab, setActiveComparisonTab] = useState('specs');
  const [selectedConcern, setSelectedConcern] = useState('oily');

  // Product comparison data
  const comparisonProducts = [
    {
      id: 1,
      name: 'Neutrogena Hydro Boost Water Gel',
      brand: 'Neutrogena',
      price: 799,
      size: 50,
      unit: 'g',
      pricePerUnit: 15.98,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=250&fit=crop',
      rating: 4.5,
      reviews: 1243,
      keyIngredients: ['Hyaluronic Acid', 'Glycerin', 'Dimethicone'],
      suitability: {
        oily: 95,
        combination: 90,
        acne: 85,
        sensitive: 70,
        dry: 45,
      },
      aiRecommendations: ['Best for oily skin', 'Best for you'],
      texture: 'Gel',
      finish: 'Matte',
      absorption: 'Fast',
      fragrance: 'Light',
    },
    {
      id: 2,
      name: 'CeraVe Moisturizing Cream',
      brand: 'CeraVe',
      price: 649,
      size: 50,
      unit: 'g',
      pricePerUnit: 12.98,
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop',
      rating: 4.7,
      reviews: 2891,
      keyIngredients: ['Ceramides', 'Hyaluronic Acid', 'Niacinamide'],
      suitability: {
        oily: 65,
        combination: 75,
        acne: 80,
        sensitive: 90,
        dry: 95,
      },
      aiRecommendations: ['Best value', 'Most natural'],
      texture: 'Cream',
      finish: 'Natural',
      absorption: 'Medium',
      fragrance: 'None',
    },
    {
      id: 3,
      name: 'Cetaphil Daily Hydrating Lotion',
      brand: 'Cetaphil',
      price: 720,
      size: 88,
      unit: 'ml',
      pricePerUnit: 8.18,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop',
      rating: 4.3,
      reviews: 876,
      keyIngredients: ['Hyaluronic Acid', 'Vitamin E', 'Glycerin'],
      suitability: {
        oily: 70,
        combination: 80,
        acne: 75,
        sensitive: 85,
        dry: 80,
      },
      aiRecommendations: ['Best value'],
      texture: 'Lotion',
      finish: 'Dewy',
      absorption: 'Fast',
      fragrance: 'None',
    },
    {
      id: 4,
      name: 'La Roche-Posay Effaclar Mat',
      brand: 'La Roche-Posay',
      price: 1450,
      size: 40,
      unit: 'ml',
      pricePerUnit: 36.25,
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=200&h=200&fit=crop',
      rating: 4.6,
      reviews: 1567,
      keyIngredients: ['Sebulyse', 'Perlite', 'Zinc'],
      suitability: {
        oily: 98,
        combination: 92,
        acne: 90,
        sensitive: 75,
        dry: 40,
      },
      aiRecommendations: ['Best for oily skin'],
      texture: 'Cream-Gel',
      finish: 'Ultra-Matte',
      absorption: 'Fast',
      fragrance: 'None',
    },
  ];

  // Concern-specific discovery data
  const skinConcerns = [
    {
      id: 'oily',
      name: 'Oily Skin Control',
      icon: '💧',
      color: 'blue',
      description: 'Mattifying products that control excess sebum without stripping moisture',
      benefits: ['Reduced shine', 'Smaller pores', 'Long-lasting freshness'],
      products: [
        {
          id: 1,
          name: 'Neutrogena Hydro Boost Water Gel',
          price: 799,
          rating: 4.5,
          image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=250&fit=crop',
        },
        {
          id: 4,
          name: 'La Roche-Posay Effaclar Mat',
          price: 1450,
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=200&h=200&fit=crop',
        },
      ],
      routine: [
        { step: 1, product: 'Oil-free cleanser', time: 'Morning & Night' },
        { step: 2, product: 'Mattifying moisturizer', time: 'Morning & Night' },
        { step: 3, product: 'Clay mask', time: '2x per week' },
      ],
    },
    {
      id: 'acne',
      name: 'Acne Solutions',
      icon: '🎯',
      color: 'red',
      description: 'Targeted treatments that clear breakouts and prevent future ones',
      benefits: ['Clearer skin', 'Reduced inflammation', 'Prevents scarring'],
      products: [
        {
          id: 2,
          name: 'CeraVe Moisturizing Cream',
          price: 649,
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop',
        },
        {
          id: 1,
          name: 'Neutrogena Hydro Boost Water Gel',
          price: 799,
          rating: 4.5,
          image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=250&fit=crop',
        },
      ],
      routine: [
        { step: 1, product: 'Salicylic acid cleanser', time: 'Morning & Night' },
        { step: 2, product: 'Spot treatment', time: 'As needed' },
        { step: 3, product: 'Non-comedogenic moisturizer', time: 'Morning & Night' },
      ],
    },
    {
      id: 'dry',
      name: 'Dry Skin Hydration',
      icon: '💦',
      color: 'cyan',
      description: 'Deep hydration products that restore and maintain moisture barrier',
      benefits: ['Intense hydration', 'Smooth texture', 'Reduced flaking'],
      products: [
        {
          id: 2,
          name: 'CeraVe Moisturizing Cream',
          price: 649,
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop',
        },
        {
          id: 3,
          name: 'Cetaphil Daily Hydrating Lotion',
          price: 720,
          rating: 4.3,
          image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop',
        },
      ],
      routine: [
        { step: 1, product: 'Gentle cream cleanser', time: 'Morning & Night' },
        { step: 2, product: 'Hyaluronic acid serum', time: 'Morning & Night' },
        { step: 3, product: 'Rich moisturizer', time: 'Morning & Night' },
      ],
    },
    {
      id: 'sensitive',
      name: 'Sensitive Skin Care',
      icon: '🌸',
      color: 'pink',
      description: 'Gentle, fragrance-free products that soothe and protect reactive skin',
      benefits: ['Reduced redness', 'Calm skin', 'Strengthened barrier'],
      products: [
        {
          id: 2,
          name: 'CeraVe Moisturizing Cream',
          price: 649,
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop',
        },
        {
          id: 3,
          name: 'Cetaphil Daily Hydrating Lotion',
          price: 720,
          rating: 4.3,
          image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop',
        },
      ],
      routine: [
        { step: 1, product: 'Fragrance-free cleanser', time: 'Morning & Night' },
        { step: 2, product: 'Soothing serum', time: 'Morning & Night' },
        { step: 3, product: 'Barrier repair moisturizer', time: 'Morning & Night' },
      ],
    },
  ];

  const toggleProductComparison = (productId) => {
    const product = comparisonProducts.find(p => p.id === productId);
    if (selectedProducts.find(p => p.id === productId)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
    } else {
      if (selectedProducts.length < 4) {
        setSelectedProducts([...selectedProducts, product]);
      }
    }
  };

  const getAIRecommendationBadge = (recommendations) => {
    if (!recommendations || recommendations.length === 0) return null;
    return recommendations.map((rec, idx) => (
      <span key={idx} className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-2 py-1 rounded-full font-medium">
        <Zap className="w-3 h-3" /> {rec}
      </span>
    ));
  };

  const selectedConcernData = skinConcerns.find(c => c.id === selectedConcern);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight']">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Flash AI</h1>
        <button className="p-2">
          <ExternalLink className="w-5 h-5" />
        </button>
      </header>

      {/* Phase Badge */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold">Phase 3: Comparison & Discovery</div>
            <div className="text-xs opacity-90">Months 5-6 • All Features Active</div>
          </div>
          <Award className="w-8 h-8 opacity-90" />
        </div>
      </div>

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

        {/* NEW PHASE 3: Intelligent Product Comparison */}
        <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              Intelligent Product Comparison
            </h3>
            <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-bold">
              PHASE 3
            </span>
          </div>

          {/* Product Selection */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-2">Select products to compare (up to 4):</p>
            <div className="grid grid-cols-2 gap-2">
              {comparisonProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => toggleProductComparison(product.id)}
                  className={`p-2 rounded-lg border-2 transition-all ${
                    selectedProducts.find(p => p.id === product.id)
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
                >
                  <img src={product.image} alt={product.name} className="w-full h-16 object-cover rounded mb-1" />
                  <p className="text-xs font-medium line-clamp-2">{product.name}</p>
                  <p className="text-xs text-gray-600">₹{product.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Comparison View */}
          {selectedProducts.length > 0 && (
            <div className="bg-white rounded-lg p-3">
              <div className="flex gap-2 mb-3 border-b">
                {['specs', 'ingredients', 'suitability', 'ai'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveComparisonTab(tab)}
                    className={`pb-2 px-2 text-xs font-medium transition-colors ${
                      activeComparisonTab === tab
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab === 'specs' && 'Specs'}
                    {tab === 'ingredients' && 'Ingredients'}
                    {tab === 'suitability' && 'Suitability'}
                    {tab === 'ai' && 'AI Picks'}
                  </button>
                ))}
              </div>

              {/* Specs Comparison */}
              {activeComparisonTab === 'specs' && (
                <div className="space-y-3">
                  <div className="grid gap-2" style={{ gridTemplateColumns: `120px repeat(${selectedProducts.length}, 1fr)` }}>
                    {/* Headers */}
                    <div></div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-center">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded mx-auto mb-1" />
                      </div>
                    ))}

                    {/* Price */}
                    <div className="text-xs font-semibold text-gray-700 py-2">Price</div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-xs font-bold text-center py-2">₹{product.price}</div>
                    ))}

                    {/* Price per unit */}
                    <div className="text-xs font-semibold text-gray-700 py-2">Price per {selectedProducts[0].unit}</div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-xs text-center py-2">
                        ₹{product.pricePerUnit}
                        {product.pricePerUnit === Math.min(...selectedProducts.map(p => p.pricePerUnit)) && (
                          <span className="block text-green-600 font-bold">Best</span>
                        )}
                      </div>
                    ))}

                    {/* Size */}
                    <div className="text-xs font-semibold text-gray-700 py-2">Size</div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-xs text-center py-2">{product.size}{product.unit}</div>
                    ))}

                    {/* Rating */}
                    <div className="text-xs font-semibold text-gray-700 py-2">Rating</div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-xs text-center py-2">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    ))}

                    {/* Texture */}
                    <div className="text-xs font-semibold text-gray-700 py-2">Texture</div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-xs text-center py-2">{product.texture}</div>
                    ))}

                    {/* Finish */}
                    <div className="text-xs font-semibold text-gray-700 py-2">Finish</div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-xs text-center py-2">{product.finish}</div>
                    ))}

                    {/* Absorption */}
                    <div className="text-xs font-semibold text-gray-700 py-2">Absorption</div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-xs text-center py-2">{product.absorption}</div>
                    ))}

                    {/* Fragrance */}
                    <div className="text-xs font-semibold text-gray-700 py-2">Fragrance</div>
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="text-xs text-center py-2">{product.fragrance}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients Comparison */}
              {activeComparisonTab === 'ingredients' && (
                <div className="space-y-3">
                  {selectedProducts.map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded p-2">
                      <p className="text-xs font-semibold text-gray-700 mb-1">{product.brand}</p>
                      <div className="flex flex-wrap gap-1">
                        {product.keyIngredients.map((ingredient, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded border">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Suitability Comparison */}
              {activeComparisonTab === 'suitability' && (
                <div className="space-y-2">
                  {['oily', 'combination', 'acne', 'sensitive', 'dry'].map((skinType) => (
                    <div key={skinType}>
                      <p className="text-xs font-semibold text-gray-700 mb-1 capitalize">
                        {skinType === 'acne' ? 'Acne-Prone' : skinType} Skin
                      </p>
                      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${selectedProducts.length}, 1fr)` }}>
                        {selectedProducts.map((product) => {
                          const score = product.suitability[skinType];
                          const isHighest = score === Math.max(...selectedProducts.map(p => p.suitability[skinType]));
                          return (
                            <div key={product.id} className="text-center">
                              <div className={`text-xs font-bold ${
                                score >= 85 ? 'text-green-600' :
                                score >= 70 ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                {score}%
                                {isHighest && <span className="block text-purple-600">Best</span>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* AI Recommendations */}
              {activeComparisonTab === 'ai' && (
                <div className="space-y-3">
                  {selectedProducts.map((product) => (
                    <div key={product.id} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-200">
                      <div className="flex gap-2 mb-2">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-gray-900 mb-1">{product.name}</p>
                          <p className="text-xs text-gray-600">₹{product.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {getAIRecommendationBadge(product.aiRecommendations)}
                      </div>
                    </div>
                  ))}

                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4" />
                      <p className="text-xs font-bold">AI Verdict</p>
                    </div>
                    <p className="text-xs">
                      For your oily skin, we recommend <span className="font-bold">{selectedProducts.find(p => p.aiRecommendations?.includes('Best for you'))?.name || selectedProducts[0].name}</span>.
                      It offers excellent oil control with a lightweight formula that won't clog pores.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* NEW PHASE 3: Concern-Specific Discovery */}
        <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 rounded-xl p-4 border-2 border-teal-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Heart className="w-4 h-4 text-teal-600" />
              Shop by Concern
            </h3>
            <span className="text-xs bg-gradient-to-r from-teal-600 to-blue-600 text-white px-3 py-1 rounded-full font-bold">
              PHASE 3
            </span>
          </div>

          {/* Concern Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {skinConcerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => setSelectedConcern(concern.id)}
                className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  selectedConcern === concern.id
                    ? `bg-${concern.color}-600 text-white shadow-lg`
                    : 'bg-white text-gray-600 border hover:border-gray-400'
                }`}
              >
                <span className="mr-1">{concern.icon}</span>
                {concern.name}
              </button>
            ))}
          </div>

          {/* Concern Content */}
          {selectedConcernData && (
            <div className="space-y-4">
              {/* Educational Content */}
              <div className="bg-white rounded-lg p-3">
                <h4 className="text-sm font-bold text-gray-900 mb-2">{selectedConcernData.name}</h4>
                <p className="text-xs text-gray-600 mb-3">{selectedConcernData.description}</p>

                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-700">Key Benefits:</p>
                  {selectedConcernData.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curated Products */}
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Recommended Products:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedConcernData.products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg p-2 border hover:border-teal-500 transition-colors cursor-pointer">
                      <img src={product.image} alt={product.name} className="w-full h-20 object-cover rounded mb-2" />
                      <p className="text-xs font-medium line-clamp-2 mb-1">{product.name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">₹{product.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Routine */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-3 border border-teal-200">
                <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Recommended Routine
                </h4>
                <div className="space-y-2">
                  {selectedConcernData.routine.map((item) => (
                    <div key={item.step} className="flex items-start gap-2 bg-white rounded p-2">
                      <span className="w-5 h-5 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {item.step}
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-900">{item.product}</p>
                        <p className="text-xs text-gray-600">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow">
                Shop {selectedConcernData.name}
                <ArrowRight className="inline w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </section>

        {/* PHASE 1: Usage Guidance */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Play className="w-4 h-4 text-purple-600" />
              How to Use This Product
            </h3>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
              PHASE 1
            </span>
          </div>

          {/* Video Tutorial */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg h-32 mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#363636]/20"></div>
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

          {/* Usage Frequency */}
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

        {/* PHASE 1: Suitability Matcher */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Suitable For You?</h3>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
              PHASE 1
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

          <button className="w-full mt-3 bg-[#363636] text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
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
                    ? 'text-[#363636] border-b-2 border-[#363636]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PHASE 1: Ingredient Transparency */}
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
    </div>
  );
};

export default BeautyProduct_Phase3;
