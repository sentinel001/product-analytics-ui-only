import React, { useState } from 'react';
import { ChevronRight, Info, HelpCircle, ExternalLink, Play, Clock, Droplet, Calendar, TrendingUp, CheckCircle, AlertCircle, Shield, Award, Users, Star } from 'lucide-react';

const BeautyProduct_Phase2 = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [showCompatibility, setShowCompatibility] = useState(false);
  const [selectedSkinTypeFilter, setSelectedSkinTypeFilter] = useState('all');
  const [expandedIngredient, setExpandedIngredient] = useState(null);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight']">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Flash AI</h1>
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Phase 2: Trust Building
          </div>
          <button className="p-2">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
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
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <Droplet className="w-3 h-3" />
                    Oily/Combo Skin
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">₹799</span>
                  <span className="text-gray-600 text-sm ml-1">50g • In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHASE 1: Usage Guidance */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Play className="w-4 h-4 text-purple-600" />
              How to Use This Product
            </h3>
            <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
              PHASE 1
            </span>
          </div>

          {/* Video Tutorial */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg h-32 mb-3 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#363636]/20"></div>
            <div className="relative z-10 text-white text-center">
              <Play className="w-12 h-12 mx-auto mb-2 opacity-90" />
              <p className="text-sm font-medium">Watch Application Tutorial (45s)</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=200&fit=crop"
              alt="Tutorial"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
          </div>

          {/* Step-by-step Instructions */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Application Steps:</h4>
            {[
              { step: 1, text: 'Cleanse face and pat dry', icon: '💧' },
              { step: 2, text: 'Take pea-sized amount', icon: '🫘' },
              { step: 3, text: 'Apply in upward circular motions', icon: '↻' },
              { step: 4, text: 'Allow 2 min to absorb', icon: '⏱️' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-2 text-sm bg-white/60 rounded p-2">
                <span className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </span>
                <span className="text-sm mr-2">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Usage Frequency */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="bg-white/60 rounded p-2">
              <Clock className="w-4 h-4 text-purple-600 mb-1" />
              <p className="text-sm font-semibold text-gray-700">When to Use</p>
              <p className="text-sm text-gray-600">Morning & Night</p>
            </div>
            <div className="bg-white/60 rounded p-2">
              <Droplet className="w-4 h-4 text-purple-600 mb-1" />
              <p className="text-sm font-semibold text-gray-700">Amount</p>
              <p className="text-sm text-gray-600">Pea-sized</p>
            </div>
          </div>
        </section>

        {/* PHASE 1: Suitability Matcher */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Suitable For You?</h3>
            <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
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
                <span className="text-sm font-medium text-gray-700">{item.type}</span>
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
                  <span className={`text-sm font-bold ${
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
              <p className="text-sm font-semibold text-gray-700">Can be used with:</p>
              {[
                { product: 'Vitamin C Serum', compatible: true },
                { product: 'Retinol Treatment', compatible: false },
                { product: 'Niacinamide Serum', compatible: true },
                { product: 'AHA/BHA Exfoliant', compatible: false },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white/60 rounded p-2">
                  <span className="text-sm text-gray-700">{item.product}</span>
                  {item.compatible ? (
                    <span className="text-green-600 text-sm font-medium">✓ Compatible</span>
                  ) : (
                    <span className="text-red-600 text-sm font-medium">✗ Not recommended</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* PHASE 2 NEW: Results & Effectiveness Timeline */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Results & Effectiveness Timeline
            </h3>
            <span className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
              PHASE 2
            </span>
          </div>

          {/* Timeline Visual */}
          <div className="space-y-4 mb-4">
            {[
              {
                week: 'Week 1',
                title: 'Initial Effects',
                description: 'Immediate hydration boost, skin feels plumper',
                percentage: 65,
                icon: <Droplet className="w-4 h-4" />,
                color: 'blue'
              },
              {
                week: 'Week 2-4',
                title: 'Visible Progress',
                description: 'Reduced dryness, improved skin texture, minimized fine lines',
                percentage: 82,
                icon: <TrendingUp className="w-4 h-4" />,
                color: 'purple'
              },
              {
                week: '4-8 weeks',
                title: 'Full Results',
                description: 'Optimal hydration, healthy glow, sustained improvement',
                percentage: 94,
                icon: <Award className="w-4 h-4" />,
                color: 'emerald'
              }
            ].map((milestone, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Line */}
                {idx < 2 && (
                  <div className="absolute left-5 top-10 w-0.5 h-12 bg-gradient-to-b from-emerald-300 to-emerald-200"></div>
                )}

                <div className="bg-white rounded-lg p-3 border border-emerald-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-600 flex items-center justify-center text-white flex-shrink-0`}>
                      {milestone.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-gray-700">{milestone.week}</span>
                        <span className={`text-sm font-bold text-${milestone.color}-600`}>
                          {milestone.percentage}% users see results
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">{milestone.title}</h4>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                      <div className="mt-2 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${milestone.color}-400 to-${milestone.color}-600`}
                          style={{ width: `${milestone.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filter by Skin Type */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Filter success stories by skin type:</p>
            <div className="flex flex-wrap gap-2">
              {['all', 'oily', 'combo', 'sensitive', 'acne-prone'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedSkinTypeFilter(type)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedSkinTypeFilter === type
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-emerald-400'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* User Success Stories with Before/After */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-1">
              <Users className="w-3 h-3" />
              Verified User Success Stories
            </h4>

            {[
              {
                name: 'Priya M.',
                skinType: 'Oily',
                timeframe: '6 weeks',
                rating: 5,
                beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=150&h=150&fit=crop',
                afterImage: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=150&h=150&fit=crop',
                quote: 'My skin is noticeably less oily and more balanced. The texture has improved dramatically!'
              },
              {
                name: 'Ananya R.',
                skinType: 'Combo',
                timeframe: '4 weeks',
                rating: 5,
                beforeImage: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef849?w=150&h=150&fit=crop',
                afterImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=150&h=150&fit=crop',
                quote: 'Perfect balance of hydration without greasiness. My T-zone is finally under control!'
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 border border-emerald-200">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-900">{story.name}</p>
                      <span className="flex items-center gap-0.5">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                        {story.skinType} Skin
                      </span>
                      <span className="text-sm text-gray-500">{story.timeframe}</span>
                      <span className="flex items-center gap-1 text-sm text-green-600">
                        <Shield className="w-3 h-3" /> Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Before</p>
                    <img
                      src={story.beforeImage}
                      alt="Before"
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">After ({story.timeframe})</p>
                    <img
                      src={story.afterImage}
                      alt="After"
                      className="w-full h-24 object-cover rounded border-2 border-emerald-400"
                    />
                  </div>
                </div>

                <p className="text-sm text-gray-700 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>

          {/* Timeline Summary Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="bg-white rounded p-2 text-center border border-emerald-200">
              <p className="text-lg font-bold text-emerald-600">2,847</p>
              <p className="text-sm text-gray-600">Success Stories</p>
            </div>
            <div className="bg-white rounded p-2 text-center border border-emerald-200">
              <p className="text-lg font-bold text-emerald-600">89%</p>
              <p className="text-sm text-gray-600">Repurchase Rate</p>
            </div>
            <div className="bg-white rounded p-2 text-center border border-emerald-200">
              <p className="text-lg font-bold text-emerald-600">4-6wks</p>
              <p className="text-sm text-gray-600">Avg. Full Results</p>
            </div>
          </div>
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
                <div className="text-sm text-gray-500">Use BEAUTY20 for ₹160 off</div>
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
                <div className="text-sm text-green-600">Lowest Price!</div>
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

        {/* PHASE 2 ENHANCED: Comprehensive Ingredient Transparency Hub */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Info className="w-4 h-4 text-purple-600" />
              Comprehensive Ingredients Breakdown
            </h3>
            <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
              ENHANCED
            </span>
          </div>

          {/* Ingredient Safety Overview */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 mb-3 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-green-600" />
              <h4 className="text-sm font-semibold text-green-900">Safety Score: 8.5/10</h4>
            </div>
            <p className="text-sm text-gray-700">
              This product contains mostly safe, well-researched ingredients. One ingredient may cause sensitivity in some users.
            </p>
          </div>

          {/* Detailed Ingredients */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            {[
              {
                name: 'Hyaluronic Acid',
                concentration: '1.5%',
                purpose: 'Deep hydration and moisture retention',
                safe: true,
                rating: '9.2/10',
                research: 'Clinically proven to increase skin hydration by 96%',
                concerns: [],
                benefits: ['Intense hydration', 'Reduces fine lines', 'Plumps skin']
              },
              {
                name: 'Glycerin',
                concentration: '3.0%',
                purpose: 'Humectant that attracts moisture to skin',
                safe: true,
                rating: '9.0/10',
                research: 'FDA-approved, used in skincare for over 100 years',
                concerns: [],
                benefits: ['Moisture retention', 'Skin barrier support', 'Non-irritating']
              },
              {
                name: 'Dimethicone',
                concentration: '2.5%',
                purpose: 'Silicone-based texture enhancer and skin protectant',
                safe: true,
                rating: '8.5/10',
                research: 'Dermatologically tested, creates protective barrier',
                concerns: ['May clog pores in some individuals'],
                benefits: ['Smooth application', 'Locks in moisture', 'Reduces water loss']
              },
              {
                name: 'Fragrance',
                concentration: '<0.5%',
                purpose: 'Adds light, pleasant scent',
                safe: false,
                rating: '6.0/10',
                research: 'Can trigger allergic reactions in sensitive individuals',
                concerns: ['May cause sensitivity', 'Potential allergen', 'Not essential for efficacy'],
                benefits: ['Pleasant user experience']
              },
            ].map((ingredient, idx) => (
              <div key={idx} className="bg-white rounded p-3 border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-gray-900">{ingredient.name}</p>
                      <button
                        onClick={() => setExpandedIngredient(expandedIngredient === idx ? null : idx)}
                        className="text-purple-600 text-sm font-medium flex items-center gap-1"
                      >
                        {expandedIngredient === idx ? 'Hide' : 'Details'}
                        <HelpCircle className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${
                        ingredient.safe ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {ingredient.safe ? 'Safe' : 'Caution'}
                      </span>
                      <span className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                        {ingredient.concentration}
                      </span>
                      <span className="text-sm font-bold text-purple-600">
                        {ingredient.rating}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-1">{ingredient.purpose}</p>

                    {/* Expanded Details */}
                    {expandedIngredient === idx && (
                      <div className="mt-3 space-y-2 pt-2 border-t">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Research & Evidence:</p>
                          <p className="text-sm text-gray-600 flex items-start gap-1">
                            <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                            {ingredient.research}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Benefits:</p>
                          <div className="space-y-1">
                            {ingredient.benefits.map((benefit, bIdx) => (
                              <p key={bIdx} className="text-sm text-gray-600 flex items-start gap-1">
                                <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                                {benefit}
                              </p>
                            ))}
                          </div>
                        </div>

                        {ingredient.concerns.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Potential Concerns:</p>
                            <div className="space-y-1">
                              {ingredient.concerns.map((concern, cIdx) => (
                                <p key={cIdx} className="text-sm text-orange-600 flex items-start gap-1">
                                  <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                                  {concern}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Paraben-free
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Non-comedogenic
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Shield className="w-3 h-3" /> Dermatologist tested
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-1">
              <Award className="w-3 h-3" /> Cruelty-free
            </span>
          </div>

          {/* Ingredient Education */}
          <div className="mt-3 bg-blue-50 rounded-lg p-3 border border-blue-200">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-blue-900 mb-1">What makes this formula effective?</p>
                <p className="text-sm text-gray-700">
                  The combination of Hyaluronic Acid and Glycerin creates a synergistic hydration effect,
                  while Dimethicone locks in moisture. Clinical studies show this formula increases skin
                  hydration by up to 96% within 24 hours.
                </p>
              </div>
            </div>
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
                  <div className="text-sm">/100</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm text-green-700 font-medium mb-1">Excellent Choice!</div>
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
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Similar Products */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Similar Products</h3>
            <button className="text-sm text-blue-600 font-medium">See All</button>
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
                <div className="text-sm font-medium mb-1 line-clamp-2">{product.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 text-sm font-bold px-2 py-0.5 rounded">
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

export default BeautyProduct_Phase2;
