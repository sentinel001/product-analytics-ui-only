import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Ruler, ChevronRight, CheckCircle, ArrowLeft, ShoppingCart, Sparkles, RefreshCw, Info } from 'lucide-react';

const FashionProduct_v2 = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');

  const userBodyProfile = {
    bodyType: 'Athletic Build',
    measurements: {
      chest: '38-40"',
      waist: '32-33"',
      height: '5\'9"-5\'11"'
    },
    recommendedSize: 'M',
    confidence: 91
  };

  const sizeCompatibility = {
    'S': { fit: 'Too Tight', match: 45, description: 'Will be uncomfortable in chest and shoulders' },
    'M': { fit: 'Perfect Fit', match: 95, description: 'Ideal fit based on your athletic build' },
    'L': { fit: 'Loose Fit', match: 70, description: 'Extra room, more relaxed fit' },
    'XL': { fit: 'Too Loose', match: 35, description: 'Will hang loose, not recommended' }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-semibold text-[#363636]">Fashion Product</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* Product Header */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&q=80"
              alt="Product"
              className="w-24 h-24 object-cover rounded-lg border border-gray-200"
            />
            <div className="flex-1">
              <p className="text-xs text-gray-600 mb-1">Zara</p>
              <h1 className="text-base font-bold text-[#363636] mb-2">Casual Oxford Shirt</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">4.4</span>
                </div>
                <span className="text-xs text-gray-500">987 reviews</span>
              </div>
              <div>
                <span className="font-bold text-[#363636]">₹1,599</span>
                <span className="text-gray-600 text-xs ml-1">In Stock</span>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Match Banner */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#363636] rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#363636] mb-1">Perfect Match for Your Style</h3>
              <p className="text-xs text-gray-700 mb-3">
                Based on your {userBodyProfile.bodyType} physique, this product will fit you perfectly.
              </p>

              <div className="bg-white border border-orange-200 rounded-lg p-2 mb-3">
                <p className="text-xs font-semibold text-[#363636] mb-1">Why This Matches:</p>
                <div className="space-y-1">
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle className="w-3 h-3 text-[#363636] mt-0.5 flex-shrink-0" />
                    <span>Smart casual style - perfect for occasions</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle className="w-3 h-3 text-[#363636] mt-0.5 flex-shrink-0" />
                    <span>Tailored fit complements your athletic build</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle className="w-3 h-3 text-[#363636] mt-0.5 flex-shrink-0" />
                    <span>Charcoal grey is among your complementary colors</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/product/fashion-v1')}
                className="w-full bg-white border border-gray-300 text-[#363636] py-2 px-3 rounded-lg text-xs font-medium hover:border-[#363636] transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3 h-3" />
                Update Body Analysis
              </button>
            </div>
          </div>
        </section>

        {/* AI-Powered Size & Fit Predictor with Body Analysis Integrated */}
        <section className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-[#363636]" />
              <h3 className="text-sm font-bold text-[#363636]">AI Size & Fit Predictor</h3>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              {userBodyProfile.confidence}% confident
            </span>
          </div>

          {/* AI Recommended Size */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-xs text-gray-600 mb-1">AI Recommended Size</p>
                <p className="text-2xl font-bold text-[#363636]">{userBodyProfile.recommendedSize}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-xs text-gray-700">
              Based on your body analysis: {userBodyProfile.bodyType}
            </p>
            <div className="mt-2 pt-2 border-t border-green-200">
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Your measurements:</span> Chest {userBodyProfile.measurements.chest} • Waist {userBodyProfile.measurements.waist}
              </p>
            </div>
          </div>

          {/* Size Selector with AI Predictions */}
          <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
            <p className="text-xs font-semibold text-[#363636] mb-2">Select your size:</p>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {['S', 'M', 'L', 'XL'].map((size) => {
                const sizeInfo = sizeCompatibility[size];
                const isRecommended = size === userBodyProfile.recommendedSize;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`relative py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-[#363636] text-white'
                        : isRecommended
                        ? 'bg-green-100 text-green-700 border-2 border-green-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                    {isRecommended && selectedSize !== size && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Size Fit Prediction */}
            {selectedSize && sizeCompatibility[selectedSize] && (
              <div className={`rounded-lg p-3 ${
                sizeCompatibility[selectedSize].match >= 90
                  ? 'bg-green-50 border border-green-200'
                  : sizeCompatibility[selectedSize].match >= 65
                  ? 'bg-yellow-50 border border-yellow-200'
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-[#363636]">{sizeCompatibility[selectedSize].fit}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    sizeCompatibility[selectedSize].match >= 90
                      ? 'bg-green-100 text-green-700'
                      : sizeCompatibility[selectedSize].match >= 65
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {sizeCompatibility[selectedSize].match}% match
                  </span>
                </div>
                <p className="text-xs text-gray-700">{sizeCompatibility[selectedSize].description}</p>
              </div>
            )}
          </div>

          {/* Fit Guarantee */}
          <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex items-start gap-2">
            <Info className="w-4 h-4 text-[#363636] mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-700">
              <span className="font-semibold text-[#363636]">95% fit accuracy</span> - Our AI predictions match {userBodyProfile.confidence}% of the time. Easy returns if needed.
            </p>
          </div>
        </section>

        {/* Return Reduction Impact */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#363636]" />
            <h3 className="text-xs font-bold text-[#363636]">Sustainability Impact</h3>
          </div>
          <p className="text-xs text-gray-700">
            AI-powered sizing reduces returns by 26%, saving packaging waste and carbon emissions.
          </p>
        </section>

        {/* Size Chart Reference */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-[#363636]">View Size Chart</h3>
              <p className="text-xs text-gray-600">Detailed measurements</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </section>

        {/* Recommended Products */}
        <section className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-bold text-[#363636] mb-3">More Styles for Your Build</h3>
          <div className="space-y-2">
            {[
              { name: 'Slim Fit Chinos', price: 1899, match: 92, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=150&q=80' },
              { name: 'Athletic Fit Polo', price: 2199, match: 89, image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=150&q=80' }
            ].map((product, idx) => (
              <div key={idx} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-lg p-2">
                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#363636]">{product.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-bold text-[#363636]">₹{product.price}</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{product.match}% match</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-600">Price</p>
            <p className="text-xl font-bold text-[#363636]">₹1,599</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-[#363636] text-white py-3 px-6 rounded-lg font-bold text-sm hover:bg-[#4a4a4a] transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FashionProduct_v2;
