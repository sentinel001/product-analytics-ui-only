import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Info, ArrowLeft, ShoppingCart, Star, Filter, CheckCircle, Sparkles, RefreshCw } from 'lucide-react';

const BeautyProduct_v2 = () => {
  const navigate = useNavigate();

  const userSkinProfile = {
    skinType: 'Oily/Combination',
    concerns: ['Large Pores', 'Occasional Breakouts', 'Mild Redness'],
    matchScore: 95
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <span className="text-sm font-semibold text-[#363636]">Skincare Product</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* Product Header */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80"
              alt="Product"
              className="w-24 h-24 object-cover rounded-lg border border-gray-200"
            />
            <div className="flex-1">
              <p className="text-xs text-gray-600 mb-1">La Roche-Posay</p>
              <h1 className="text-base font-bold text-[#363636] mb-2">Effaclar Duo+ Treatment</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">4.6</span>
                </div>
                <span className="text-xs text-gray-500">1,567 reviews</span>
              </div>
              <div>
                <span className="font-bold text-[#363636]">₹1,450</span>
                <span className="text-gray-600 text-xs ml-1">40ml • In Stock</span>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Match Banner */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#363636] rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#363636] mb-1 flex items-center gap-2">
                {userSkinProfile.matchScore}% Match for Your Skin
              </h3>
              <p className="text-xs text-gray-700 mb-3">
                Based on your skin analysis, this product is highly suitable for your {userSkinProfile.skinType} skin type.
              </p>

              {/* Profile Pills */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-gray-700">Your Skin:</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700">
                  {userSkinProfile.skinType}
                </span>
                {userSkinProfile.concerns.map((concern, idx) => (
                  <span key={idx} className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    {concern}
                  </span>
                ))}
              </div>

              {/* Why It Matches */}
              <div className="bg-white border border-purple-200 rounded-lg p-2">
                <p className="text-xs font-semibold text-[#363636] mb-1">Why This Matches:</p>
                <div className="space-y-1">
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle className="w-3 h-3 text-[#363636] mt-0.5 flex-shrink-0" />
                    <span>Targets acne and large pores - your main concerns</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle className="w-3 h-3 text-[#363636] mt-0.5 flex-shrink-0" />
                    <span>Oil-free, non-comedogenic formula</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle className="w-3 h-3 text-[#363636] mt-0.5 flex-shrink-0" />
                    <span>Contains niacinamide for pore refinement</span>
                  </div>
                </div>
              </div>

              {/* Retake Analysis */}
              <button
                onClick={() => navigate('/product/beauty-v1')}
                className="mt-3 w-full bg-white border border-gray-300 text-[#363636] py-2 px-3 rounded-lg text-xs font-medium hover:border-[#363636] transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3 h-3" />
                Update Skin Analysis
              </button>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-bold text-[#363636] mb-3">Perfect For Your Concerns</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#363636] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#363636]">Reduces Large Pores</p>
                <p className="text-xs text-gray-600">Niacinamide helps minimize pore appearance</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#363636] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#363636]">Prevents Breakouts</p>
                <p className="text-xs text-gray-600">Salicylic acid targets acne-causing bacteria</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#363636] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#363636]">Calms Redness</p>
                <p className="text-xs text-gray-600">Anti-inflammatory ingredients soothe skin</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Guide Reference */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-[#363636]" />
              <div>
                <h3 className="text-sm font-semibold text-[#363636]">Matches: Acne Treatment Guide</h3>
                <p className="text-xs text-gray-600">For Oily/Combination Skin</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </section>

        {/* Recommended Products */}
        <section className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-bold text-[#363636] mb-3">Other Matches for Your Skin</h3>
          <div className="space-y-2">
            {[
              { name: 'Minimalist Niacinamide Serum', price: 599, match: 93, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=150&q=80' },
              { name: 'CeraVe Foaming Cleanser', price: 649, match: 92, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=150&q=80' }
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
            <p className="text-xl font-bold text-[#363636]">₹1,450</p>
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

export default BeautyProduct_v2;
