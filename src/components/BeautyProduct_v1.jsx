import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Info, ExternalLink, ArrowLeft, ShoppingCart, Star, X, Filter, CheckCircle, Camera, Upload, Sparkles } from 'lucide-react';

const BeautyProduct_v1 = () => {
  const navigate = useNavigate();
  const [showSkinAnalysis, setShowSkinAnalysis] = useState(true);
  const [uploadStep, setUploadStep] = useState('initial'); // initial, uploading, uploaded, analyzing, complete

  // Sample uploaded photos (simulated)
  const samplePhotos = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop'
  ];

  const skinAnalysisResult = {
    skinType: 'Oily/Combination',
    concerns: ['Large Pores', 'Occasional Breakouts', 'Mild Redness'],
    recommendations: [
      'Use oil-free, non-comedogenic products',
      'Focus on hydration without heavy oils',
      'Consider products with niacinamide for pore refinement'
    ],
    confidence: 94
  };

  const simulateUpload = () => {
    setUploadStep('uploaded');
    setTimeout(() => {
      setUploadStep('analyzing');
      setTimeout(() => {
        setUploadStep('complete');
      }, 2000);
    }, 500);
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
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80"
              alt="Product"
              className="w-24 h-24 object-cover rounded-lg border border-gray-200"
            />
            <div className="flex-1">
              <p className="text-xs text-gray-600 mb-1">Neutrogena</p>
              <h1 className="text-base font-bold text-[#363636] mb-2">Hydro Boost Water Gel</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">4.5</span>
                </div>
                <span className="text-xs text-gray-500">1,243 reviews</span>
              </div>
              <div>
                <span className="font-bold text-[#363636]">₹799</span>
                <span className="text-gray-600 text-xs ml-1">50g • In Stock</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI Skin Analysis Section */}
        <section className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#363636] flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              AI Skin Analysis
            </h3>
            {uploadStep === 'complete' && (
              <span className="text-xs bg-[#363636] text-white px-2 py-1 rounded-full">Saved to Profile</span>
            )}
          </div>

          {uploadStep === 'initial' && (
            <div className="text-center py-4">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-[#363636] mb-1">Get Personalized Recommendations</p>
              <p className="text-xs text-gray-600 mb-3">Upload 3 photos of your face from different angles for AI analysis</p>
              <button
                onClick={simulateUpload}
                className="bg-[#363636] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#4a4a4a] transition-all transform active:scale-95"
              >
                Upload Photos
              </button>
            </div>
          )}

          {uploadStep === 'uploaded' && (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {samplePhotos.map((photo, idx) => (
                  <div key={idx} className="relative">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={photo}
                        alt={`Upload ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      {idx === 0 ? 'Front' : idx === 1 ? 'Left Side' : 'Right Side'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {uploadStep === 'analyzing' && (
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {samplePhotos.map((photo, idx) => (
                  <div key={idx} className="relative">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={photo}
                        alt={`Upload ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      {idx === 0 ? 'Front' : idx === 1 ? 'Left Side' : 'Right Side'}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-4 border-gray-200 border-t-[#363636] rounded-full mx-auto mb-2"></div>
                <p className="text-xs font-semibold text-[#363636]">Analyzing your skin...</p>
                <p className="text-xs text-gray-600 mt-1">This may take a few moments</p>
              </div>
            </div>
          )}

          {uploadStep === 'complete' && (
            <div className="space-y-3">
              {/* Uploaded Photos Preview */}
              <div className="grid grid-cols-3 gap-2">
                {samplePhotos.map((photo, idx) => (
                  <div key={idx} className="relative">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={photo}
                        alt={`Upload ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      {idx === 0 ? 'Front' : idx === 1 ? 'Left Side' : 'Right Side'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Analysis Result */}
              <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#363636]">Analysis Complete</h4>
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">
                    {skinAnalysisResult.confidence}% confidence
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Detected Skin Type:</p>
                  <div className="bg-gray-50 border border-gray-200 rounded p-2">
                    <p className="text-sm font-bold text-[#363636]">{skinAnalysisResult.skinType}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Main Concerns:</p>
                  <div className="flex flex-wrap gap-1">
                    {skinAnalysisResult.concerns.map((concern, idx) => (
                      <span key={idx} className="text-xs bg-gray-50 border border-gray-300 text-gray-700 px-2 py-1 rounded">
                        {concern}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">AI Recommendations:</p>
                  <div className="space-y-1">
                    {skinAnalysisResult.recommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3 h-3 text-[#363636] mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded p-2">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold text-[#363636]">Saved to your profile.</span> We'll use this to personalize your beauty recommendations.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Buying Guide Reference */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-[#363636]" />
              <div>
                <h3 className="text-sm font-semibold text-[#363636]">Matches: Sunscreen Buying Guide</h3>
                <p className="text-xs text-gray-600">By Skin Type</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-600">Price</p>
            <p className="text-xl font-bold text-[#363636]">₹799</p>
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

export default BeautyProduct_v1;
