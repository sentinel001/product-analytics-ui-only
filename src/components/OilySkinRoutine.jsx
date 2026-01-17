import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Droplet, Sun, Moon, ShoppingCart, Info, CheckCircle } from 'lucide-react';

const OilySkinRoutine = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('morning');

  const routineInfo = {
    title: 'Complete Oily Skin Routine',
    totalProducts: 5,
    totalPrice: 3987,
    savingsWithBundle: 598
  };

  const knowledgeContent = {
    aboutOilySkin: 'Oily skin produces excess sebum, leading to shine, enlarged pores, and increased susceptibility to acne. The key is to balance oil production without stripping natural moisture.',
    commonMistakes: [
      'Over-cleansing which triggers more oil production',
      'Skipping moisturizer thinking it will make skin oilier',
      'Using harsh, alcohol-based products'
    ],
    tips: [
      'Cleanse twice daily with gentle, oil-free cleansers',
      'Use lightweight, non-comedogenic moisturizers',
      'Apply oil-control serums with niacinamide or salicylic acid',
      'Never skip sunscreen - choose oil-free formulas'
    ]
  };

  const morningRoutine = [
    {
      step: 1,
      name: 'CeraVe Foaming Facial Cleanser',
      brand: 'CeraVe',
      category: 'Cleanser',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&q=80',
      price: 649,
      aiScore: 90,
      rating: 4.7,
      whyThis: 'Removes excess oil without disrupting skin barrier',
      howToUse: 'Wet face, massage for 30 seconds, rinse with lukewarm water'
    },
    {
      step: 2,
      name: 'The Ordinary Niacinamide 10% + Zinc 1%',
      brand: 'The Ordinary',
      category: 'Serum',
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=300&q=80',
      price: 590,
      aiScore: 91,
      rating: 4.4,
      whyThis: 'Controls oil production and minimizes pores',
      howToUse: 'Apply 3-4 drops to clean face, let absorb for 2 minutes'
    },
    {
      step: 3,
      name: 'Neutrogena Hydro Boost Water Gel',
      brand: 'Neutrogena',
      category: 'Moisturizer',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80',
      price: 799,
      aiScore: 95,
      rating: 4.5,
      whyThis: 'Hydrates without adding oil or greasiness',
      howToUse: 'Apply pea-sized amount to face and neck'
    },
    {
      step: 4,
      name: 'La Roche-Posay Anthelios Oil-Free SPF 50',
      brand: 'La Roche-Posay',
      category: 'Sunscreen',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80',
      price: 1099,
      aiScore: 93,
      rating: 4.6,
      whyThis: 'Provides broad-spectrum protection with matte finish',
      howToUse: 'Apply generously 15 minutes before sun exposure'
    }
  ];

  const nightRoutine = [
    {
      step: 1,
      name: 'CeraVe Foaming Facial Cleanser',
      brand: 'CeraVe',
      category: 'Cleanser',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&q=80',
      price: 649,
      aiScore: 90,
      rating: 4.7,
      whyThis: 'Removes makeup, sunscreen, and daily buildup',
      howToUse: 'Double cleanse if wearing makeup - oil cleanser first, then this'
    },
    {
      step: 2,
      name: 'Plum Green Tea Toner',
      brand: 'Plum',
      category: 'Toner',
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&q=80',
      price: 399,
      aiScore: 88,
      rating: 4.5,
      whyThis: 'Balances pH and preps skin for treatments',
      howToUse: 'Apply with cotton pad or pat into skin with hands'
    },
    {
      step: 3,
      name: 'La Roche-Posay Effaclar Duo+',
      brand: 'La Roche-Posay',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=300&q=80',
      price: 1450,
      aiScore: 92,
      rating: 4.6,
      whyThis: 'Targets acne and prevents breakouts overnight',
      howToUse: 'Apply to problem areas or entire face, let absorb'
    },
    {
      step: 4,
      name: 'Neutrogena Hydro Boost Water Gel',
      brand: 'Neutrogena',
      category: 'Moisturizer',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80',
      price: 799,
      aiScore: 95,
      rating: 4.5,
      whyThis: 'Provides overnight hydration without clogging pores',
      howToUse: 'Apply as final step, can layer more if needed'
    }
  ];

  const currentRoutine = selectedTime === 'morning' ? morningRoutine : nightRoutine;

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-[#363636]">{routineInfo.title}</h1>
            <p className="text-sm text-gray-600">Personalized for your oily skin</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* Bundle Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3 mb-3">
            <Droplet className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#363636] mb-1">Complete Routine Bundle</h3>
              <p className="text-sm text-gray-700">
                {routineInfo.totalProducts} products carefully selected for oily skin management
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded p-2">
              <p className="text-sm text-gray-600">Bundle Price</p>
              <p className="text-lg font-bold text-[#363636]">₹{routineInfo.totalPrice - routineInfo.savingsWithBundle}</p>
            </div>
            <div className="bg-white rounded p-2">
              <p className="text-sm text-gray-600">You Save</p>
              <p className="text-lg font-bold text-green-600">₹{routineInfo.savingsWithBundle}</p>
            </div>
          </div>
        </div>

        {/* Understanding Oily Skin */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-start gap-2 mb-3">
            <Info className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[#363636] mb-2">Understanding Oily Skin</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{knowledgeContent.aboutOilySkin}</p>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-sm font-semibold text-[#363636] mb-1">Common Mistakes to Avoid:</p>
            <ul className="space-y-1">
              {knowledgeContent.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-1">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#363636] mb-1">Pro Tips:</p>
            <ul className="space-y-1">
              {knowledgeContent.tips.map((tip, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-1">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Time Selector */}
        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setSelectedTime('morning')}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              selectedTime === 'morning' ? 'bg-white text-[#363636] shadow-sm' : 'text-gray-600'
            }`}
          >
            <Sun className="w-4 h-4" />
            Morning
          </button>
          <button
            onClick={() => setSelectedTime('night')}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              selectedTime === 'night' ? 'bg-white text-[#363636] shadow-sm' : 'text-gray-600'
            }`}
          >
            <Moon className="w-4 h-4" />
            Night
          </button>
        </div>

        {/* Routine Steps */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#363636]">
            {selectedTime === 'morning' ? 'Morning' : 'Night'} Routine Steps
          </h3>

          {currentRoutine.map((product, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex gap-3 p-3">
                {/* Step Number */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-8 h-8 bg-[#363636] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {product.step}
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-20 object-cover rounded border border-gray-200"
                  />
                  <div className="absolute top-1 left-1 bg-[#363636] text-white px-1 py-0.5 rounded text-sm font-bold">
                    {product.aiScore}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-sm font-medium mb-1">
                    {product.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#363636] line-clamp-1 mb-0.5">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm font-bold text-[#363636]">₹{product.price}</span>
                  </div>
                </div>
              </div>

              {/* Why This Product */}
              <div className="border-t border-gray-200 bg-gray-50 p-3 space-y-2">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-0.5 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    Why this product:
                  </p>
                  <p className="text-sm text-gray-600 italic">"{product.whyThis}"</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-0.5">How to use:</p>
                  <p className="text-sm text-gray-600">{product.howToUse}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expected Results */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-sm font-bold text-[#363636] mb-2">Expected Results</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span><strong>Week 1-2:</strong> Reduced shine and oil production</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span><strong>Week 3-4:</strong> Smaller pores, fewer breakouts</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span><strong>Week 5-6:</strong> Balanced, healthy-looking skin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-gray-600">Bundle Price</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold text-[#363636]">₹{routineInfo.totalPrice - routineInfo.savingsWithBundle}</p>
              <span className="text-sm text-gray-500 line-through">₹{routineInfo.totalPrice}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-[#363636] text-white py-3 px-6 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add Bundle
          </button>
        </div>
      </div>
    </div>
  );
};

export default OilySkinRoutine;
