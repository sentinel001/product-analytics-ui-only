import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Ruler, ChevronRight, CheckCircle, ArrowLeft, ShoppingCart, Camera, Upload, Sparkles, X, Info } from 'lucide-react';

const FashionProduct_v1 = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showBodyAnalysis, setShowBodyAnalysis] = useState(false);
  const [uploadStep, setUploadStep] = useState('initial'); // initial, uploaded, analyzing, complete

  // Sample uploaded photos (simulated)
  const sampleBodyPhotos = [
    'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=200&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=200&fit=crop'
  ];

  const bodyAnalysisResult = {
    bodyType: 'Athletic Build',
    measurements: {
      chest: '38-40"',
      waist: '32-33"',
      height: '5\'9"-5\'11"'
    },
    recommendedSize: 'M',
    confidence: 91,
    recommendations: {
      styles: ['Slim Fit', 'Regular Fit', 'Athletic Fit'],
      types: ['Crew Neck T-Shirts', 'V-Neck T-Shirts', 'Polo Shirts'],
      patterns: ['Solid Colors', 'Subtle Stripes', 'Geometric Patterns'],
      colors: ['Navy Blue', 'Charcoal Grey', 'Forest Green', 'Burgundy']
    }
  };

  const simulateBodyAnalysis = () => {
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
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80"
              alt="Product"
              className="w-24 h-24 object-cover rounded-lg border border-gray-200"
            />
            <div className="flex-1">
              <p className="text-xs text-gray-600 mb-1">Myntra</p>
              <h1 className="text-base font-bold text-[#363636] mb-2">Premium Organic Cotton T-Shirt</h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">4.7</span>
                </div>
                <span className="text-xs text-gray-500">2,123 reviews</span>
              </div>
              <div>
                <span className="font-bold text-[#363636]">₹1,299</span>
                <span className="text-gray-600 text-xs ml-1">In Stock</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Size & Fit Predictor */}
        <section className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Ruler className="w-5 h-5 text-[#363636]" />
            <h3 className="text-sm font-bold text-[#363636]">AI Size & Fit Predictor</h3>
          </div>

          {!showBodyAnalysis && uploadStep === 'initial' && (
            <div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
                <p className="text-xs text-gray-700 mb-2">
                  <span className="font-semibold text-[#363636]">Get your perfect fit!</span> Upload body photos for AI-powered size recommendations.
                </p>
                <button
                  onClick={() => setShowBodyAnalysis(true)}
                  className="w-full bg-[#363636] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#4a4a4a] transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  Upload Body Photos for Best Fit
                </button>
              </div>

              {/* Manual Size Selection */}
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-semibold text-[#363636] mb-2">Or select size manually:</p>
                <div className="grid grid-cols-5 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-[#363636] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded p-2 flex items-start gap-2">
                  <Info className="w-3 h-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-yellow-700">
                    Manual selection may not be as accurate. Upload photos for personalized fit.
                  </p>
                </div>
              </div>
            </div>
          )}

          {showBodyAnalysis && uploadStep === 'initial' && (
            <div className="text-center py-4 bg-white border border-gray-200 rounded-lg">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-[#363636] mb-1">AI Body Analysis</p>
              <p className="text-xs text-gray-600 mb-3">Upload 3 body photos (front, side, back) for accurate size prediction</p>
              <button
                onClick={simulateBodyAnalysis}
                className="bg-[#363636] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#4a4a4a] transition-all transform active:scale-95"
              >
                Upload Photos
              </button>
            </div>
          )}

          {uploadStep === 'uploaded' && (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {sampleBodyPhotos.map((photo, idx) => (
                  <div key={idx} className="relative">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={photo}
                        alt={`Body photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      {idx === 0 ? 'Front' : idx === 1 ? 'Side' : 'Back'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {uploadStep === 'analyzing' && (
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {sampleBodyPhotos.map((photo, idx) => (
                  <div key={idx} className="relative">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={photo}
                        alt={`Body photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      {idx === 0 ? 'Front' : idx === 1 ? 'Side' : 'Back'}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-4 border-gray-200 border-t-[#363636] rounded-full mx-auto mb-2"></div>
                <p className="text-xs font-semibold text-[#363636]">Analyzing your body type & style preferences...</p>
                <p className="text-xs text-gray-600 mt-1">This may take a few moments</p>
              </div>
            </div>
          )}

          {uploadStep === 'complete' && (
            <div className="space-y-3">
              {/* Uploaded Photos Preview */}
              <div className="grid grid-cols-3 gap-2">
                {sampleBodyPhotos.map((photo, idx) => (
                  <div key={idx} className="relative">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={photo}
                        alt={`Body photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      {idx === 0 ? 'Front' : idx === 1 ? 'Side' : 'Back'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Analysis Result */}
              <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-3">
                {/* Confidence & Body Type */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Detected Body Type</p>
                    <p className="text-base font-bold text-[#363636]">{bodyAnalysisResult.bodyType}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 mb-1">Confidence</p>
                    <p className="text-base font-bold text-[#363636]">{bodyAnalysisResult.confidence}%</p>
                  </div>
                </div>

                {/* Recommended Size */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Recommended Size for This Product</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-[#363636]">{bodyAnalysisResult.recommendedSize}</p>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Based on your chest: {bodyAnalysisResult.measurements.chest}, waist: {bodyAnalysisResult.measurements.waist}
                  </p>
                </div>

                {/* Recommended Styles */}
                <div>
                  <p className="text-xs font-semibold text-[#363636] mb-2 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Recommended Fits
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {bodyAnalysisResult.recommendations.styles.map((style, idx) => (
                      <span key={idx} className="text-xs bg-gray-50 border border-gray-300 px-2 py-1 rounded text-gray-900">
                        {style}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Colors */}
                <div>
                  <p className="text-xs font-semibold text-[#363636] mb-2 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Complementary Colors
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {bodyAnalysisResult.recommendations.colors.map((color, idx) => (
                      <span key={idx} className="text-xs bg-gray-50 border border-gray-300 px-2 py-1 rounded text-gray-900">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Profile Save Notice */}
                <div className="bg-gray-50 rounded-lg p-2.5 flex items-start gap-2 border border-gray-200">
                  <Sparkles className="w-4 h-4 text-[#363636] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#363636]">Saved to Your Profile</p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      We'll use this to personalize your Fashion recommendations and show you clothes that match your body type.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Size Chart Reference */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-[#363636]">View Size Chart</h3>
              <p className="text-xs text-gray-600">Standard sizing guide</p>
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
            <p className="text-xl font-bold text-[#363636]">₹1,299</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            disabled={!selectedSize && uploadStep !== 'complete'}
            className={`flex-1 py-3 px-6 rounded-lg font-bold text-sm transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
              selectedSize || uploadStep === 'complete'
                ? 'bg-[#363636] text-white hover:bg-[#4a4a4a]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FashionProduct_v1;
