import React, { useState } from 'react';
import { ChevronRight, Info, HelpCircle, ExternalLink } from 'lucide-react';

const ProductAnalysis = () => {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Flash AI</h1>
        <button className="p-2">
          <ExternalLink className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Best Match Section */}
        <section>
          <h2 className="text-sm font-medium text-gray-600 mb-3">Found the best match:</h2>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex gap-3">
              <img
                src="/api/placeholder/60/80"
                alt="Re'equil Ultra Matte Dry Touch Gel Sunscreen SPF 50"
                className="w-16 h-20 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium mb-2">
                  Re'equil Ultra Matte Dry Touch Gel Sunscreen SPF 50
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span>Storage: 0/2 GB</span>
                  <span>Screen: 14 inches</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="font-semibold">₹948</span>
                  <span className="text-gray-600 text-xs ml-1">1/Units Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price Comparison */}
        <section>
          <h2 className="text-sm font-semibold mb-3">Compare prices</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border rounded-lg hover:border-orange-500 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
                  F
                </div>
                <span className="font-medium">Fontale</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">₹4,500</div>
                <div className="text-xs text-gray-500">Use HDFC10 for ₹14 off</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg hover:border-blue-500 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">FK</span>
                </div>
                <span className="font-medium">Flipkart</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">₹4,350</div>
                <div className="text-xs text-gray-500">Use code for extra off</div>
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

        {/* Sources Analyzed */}
        <section>
          <h3 className="text-sm font-semibold mb-3">Sources Analyzed</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: '☀️', label: 'Top sunscreens', color: 'bg-orange-100 text-orange-700' },
              { icon: '🔬', label: 'efficientimindala', color: 'bg-blue-100 text-blue-700' },
              { icon: '🎯', label: 'Deconstruct', color: 'bg-purple-100 text-purple-700' },
              { icon: '💄', label: 'Makeup & Beauty', color: 'bg-pink-100 text-pink-700' },
              { icon: '📱', label: 'Jane Itraide', color: 'bg-green-100 text-green-700' },
            ].map((source, idx) => (
              <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${source.color}`}>
                {source.icon} {source.label}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              +2 more
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
                <div className="text-white">
                  <div className="text-2xl font-bold">87</div>
                  <div className="text-xs">/100</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-600 mb-1">Great Buy!</div>
              <p className="text-sm text-gray-700">
                This sunscreen is an excellent choice for daily skin care
              </p>
            </div>
          </div>
        </section>

        {/* AI Analysis */}
        <section className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            The Re'equil Ultra Matte Dry Touch Gel Sunscreen SPF 50
            offers a lightweight formula that effectively protects
            against harmful UV rays while keeping your skin shine-free.
          </p>
        </section>

        {/* Score Breakdown */}
        <section>
          <h3 className="text-sm font-semibold mb-4">Score Breakdown</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { score: 95, label: 'Sun Protection', color: 'text-green-600' },
              { score: 86, label: 'Compatibility', color: 'text-blue-600' },
              { score: 78, label: 'Value', color: 'text-yellow-600' },
              { score: 72, label: 'Reviews', color: 'text-purple-600' },
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

        {/* Key Strengths */}
        <section>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            Key Strengths <span className="text-gray-400">(8)</span>
          </h3>
          <div className="space-y-2">
            {[
              'Safe for sensitive, acne-prone skin',
              'Broad-spectrum protection with SPF 50+',
              'Natural ingredients, gentle on skin',
              'Sustainability: eco-friendly, recyclable packaging',
              'Quality: free, no animal testing (vended)',
              'Rich in vitamins, promotes healthy skin',
            ].map((strength, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{strength}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Key Limitations */}
        <section>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            Key Limitations <span className="text-gray-400">(4)</span>
          </h3>
          <div className="space-y-2">
            {[
              'Can cause stinging, greasy feel',
              'Can result in product wastage, messy application',
              'May lead to skin irritation or allergic reactions',
              'Can exacerbate existing skin conditions (such as acne or sensitivity)',
            ].map((limitation, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{limitation}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Ask More Section */}
        <section>
          <h3 className="text-sm font-semibold mb-3">Ask more about this product.</h3>
          <div className="space-y-2">
            {[
              'Are these sunscreen suitable for sensitive skin?',
              'Can I apply this sunscreen over makeup?',
              'Is this sunscreen water resistant for swimming?',
            ].map((question, idx) => (
              <button
                key={idx}
                className="w-full flex items-start gap-3 p-3 border rounded-lg hover:border-blue-500 transition-colors text-left"
              >
                <HelpCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{question}</span>
              </button>
            ))}
          </div>
          <button className="w-full mt-3 bg-[#363636] text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Ask Your Question
          </button>
        </section>

        {/* Score Higher Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Score Higher, Pay Less</h3>
            <button className="text-xs text-blue-600 font-medium">See All</button>
          </div>
          <p className="text-xs text-gray-500 mb-4">Better Products in this price range</p>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: 'Re\'equil Ultra Matte',
                score: 89,
                price: '₹775',
                originalPrice: '₹900',
                image: '/api/placeholder/100/100'
              },
              {
                name: 'L\'Oreal Paris UV Defend',
                score: 92,
                price: '₹700',
                originalPrice: '₹800',
                image: '/api/placeholder/100/100'
              }
            ].map((product, idx) => (
              <div key={idx} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-24 object-contain mb-2" />
                <div className="text-xs font-medium mb-1">{product.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">
                    {product.score}/100
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="text-xs text-green-600 ml-auto">-14%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fragrance-free Options */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Fragrance-free options</h3>
            <button className="text-xs text-blue-600 font-medium">See All</button>
          </div>
          <p className="text-xs text-gray-500 mb-4">Gentle formulas for sensitive skin</p>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: 'NIVEA Sun Protect',
                score: 85,
                price: '₹800',
                originalPrice: '₹950',
                image: '/api/placeholder/100/100'
              },
              {
                name: 'Neutrogena Ultra Sheer',
                score: 88,
                price: '₹750',
                originalPrice: '₹850',
                image: '/api/placeholder/100/100'
              }
            ].map((product, idx) => (
              <div key={idx} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-24 object-contain mb-2" />
                <div className="text-xs font-medium mb-1">{product.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">
                    {product.score}/100
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rankings Section */}
        <section>
          <h3 className="text-sm font-semibold mb-4">This sunscreen ranks...</h3>
          <div className="space-y-2">
            {[
              { rank: 2, category: 'in Sunscreens for Oily Skin' },
              { rank: 5, category: 'in Best Safe Sunscreens' },
              { rank: 8, category: 'in Mineral Sunscreens Under ₹500' },
            ].map((item, idx) => (
              <button
                key={idx}
                className="w-full flex items-center justify-between p-3 border rounded-lg hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    #{item.rank}
                  </div>
                  <span className="text-sm">{item.category}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </section>

        {/* Explore More */}
        <section>
          <h3 className="text-sm font-semibold mb-4">Explore all types of Sunscreens</h3>
          <p className="text-xs text-gray-500 mb-4">By skin type, finish, ingredients & more</p>
          <button className="w-full border-2 border-dashed border-gray-300 rounded-lg py-3 text-sm font-medium text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors">
            View All Categories
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProductAnalysis;
