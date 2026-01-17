import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, TrendingUp, Award, Info, Filter, ChevronDown } from 'lucide-react';

const RankedListPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const listInfo = {
    title: 'Top 10 Microplastic-Free Face Scrubs Worth Your Money',
    updated: 'Jan 2026',
    productsAnalyzed: 200,
    methodology: 'AI-analyzed ingredients, performance data, and real-world use cases'
  };

  const products = [
    {
      rank: 1,
      name: 'Cetaphil Extra Gentle Daily Scrub',
      brand: 'Cetaphil',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80',
      price: 549,
      aiScore: 95,
      rating: 4.7,
      reviews: 1243,
      highlights: ['Broad Spectrum SPF 50+', 'Niacinamide for Skin Brightening', 'Lightweight, Non-Greasy Formula'],
      bestFor: 'Oily & Combination Skin',
      badges: ['Editor\'s Choice', 'Best Overall']
    },
    {
      rank: 2,
      name: 'Neutrogena Hydro Boost Gel Cream',
      brand: 'Neutrogena',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&q=80',
      price: 799,
      aiScore: 92,
      rating: 4.5,
      reviews: 2891,
      highlights: ['Premium Eau de Parfum Scent', 'Long-lasting Fragrance Experience', 'Jasmine and Woody Notes'],
      bestFor: 'All Skin Types',
      badges: ['Best Value']
    },
    {
      rank: 3,
      name: 'La Roche-Posay Toleriane Hydrating Gentle Cleanser',
      brand: 'La Roche-Posay',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80',
      price: 1450,
      aiScore: 90,
      rating: 4.6,
      reviews: 1567,
      highlights: ['Vegan and Cruelty-Free Formula', 'Smooth Matte Lip Finish', 'Full-Coverage Pigmentation'],
      bestFor: 'Sensitive Skin',
      badges: ['Best for Sensitive Skin']
    },
    {
      rank: 4,
      name: 'The Ordinary Niacinamide 10% + Zinc 1%',
      brand: 'The Ordinary',
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=300&q=80',
      price: 590,
      aiScore: 91,
      rating: 4.4,
      reviews: 3421,
      highlights: ['Reduces Spots Effectively', 'Contains Hyaluronic Acid, Retinol', 'Dermatologically Tested Formula'],
      bestFor: 'Acne-Prone Skin',
      badges: ['Best Budget']
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center gap-3 p-4 bg-white border-b border-gray-200">
        <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <h1 className="text-lg font-bold text-[#363636]">Ranked List</h1>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* List Header */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-lg font-bold text-[#363636] leading-tight flex-1">{listInfo.title}</h2>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Updated {listInfo.updated}
            </span>
            <span>•</span>
            <span>{listInfo.productsAnalyzed} products analyzed</span>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 flex items-start gap-2">
            <Info className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#363636] mb-0.5">Our Methodology</p>
              <p className="text-sm text-gray-600">{listInfo.methodology}</p>
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedFilter === 'all' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setSelectedFilter('oily')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedFilter === 'oily' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            For Oily Skin
          </button>
          <button
            onClick={() => setSelectedFilter('dry')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedFilter === 'dry' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            For Dry Skin
          </button>
          <button
            onClick={() => setSelectedFilter('budget')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedFilter === 'budget' ? 'bg-[#363636] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Budget Picks
          </button>
        </div>

        {/* Products List */}
        <div className="space-y-3">
          {products.map((product) => (
            <div
              key={product.rank}
              onClick={() => navigate('/product/beauty')}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#363636] hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex gap-3 p-3">
                {/* Rank Badge */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    product.rank === 1 ? 'bg-yellow-400 text-[#363636]' :
                    product.rank === 2 ? 'bg-gray-300 text-[#363636]' :
                    product.rank === 3 ? 'bg-orange-300 text-[#363636]' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {product.rank}
                  </div>
                  <div className="mt-1 bg-[#363636] text-white px-1.5 py-0.5 rounded text-sm font-bold">
                    {product.aiScore}
                  </div>
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover rounded border border-gray-200"
                />

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`text-sm px-2 py-0.5 rounded font-semibold ${
                          badge.includes('Editor') ? 'bg-[#363636] text-white' :
                          badge.includes('Value') ? 'bg-green-600 text-white' :
                          badge.includes('Budget') ? 'bg-blue-600 text-white' :
                          'bg-purple-600 text-white'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-sm font-bold text-[#363636] mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

                  {/* Rating & Price */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                      <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm font-bold text-[#363636]">₹{product.price}</span>
                  </div>

                  {/* Best For Tag */}
                  <div className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium mb-2">
                    Best for: {product.bestFor}
                  </div>
                </div>
              </div>

              {/* Highlights - Expandable */}
              <div className="border-t border-gray-200 bg-gray-50 px-3 py-2">
                <p className="text-sm font-semibold text-gray-700 mb-1">Key Highlights:</p>
                <ul className="space-y-0.5">
                  {product.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-1">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full bg-gray-100 text-[#363636] py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
          <span>View More Products</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RankedListPage;
