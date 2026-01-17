import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, TrendingDown, Ruler, AlertCircle, ChevronRight, CheckCircle, Info, Shirt, Wind, Droplets, Shield, Package, Users, ArrowLeft, ShoppingCart, Camera, Upload, Sparkles, X } from 'lucide-react';

const FashionProduct_v1 = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [userMeasurements, setUserMeasurements] = useState({
    height: '175',
    weight: '70',
    chest: '38',
    waist: '32'
  });
  const [showSizePredictor, setShowSizePredictor] = useState(false);
  const [uploadedBodyPhotos, setUploadedBodyPhotos] = useState([]);
  const [bodyAnalysisComplete, setBodyAnalysisComplete] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const materialBreakdown = [
    {
      material: 'Organic Cotton',
      percentage: 95,
      icon: <Wind className="w-5 h-5 text-[#363636]" />,
      sustainability: 'Excellent',
      properties: ['Breathable', 'Soft', 'Hypoallergenic'],
      certifications: ['GOTS Certified', 'Fair Trade'],
      description: 'Premium organic cotton grown without harmful pesticides. Soft, breathable, and environmentally friendly.',
      color: 'bg-white border-gray-200'
    },
    {
      material: 'Elastane (Spandex)',
      percentage: 5,
      icon: <Shirt className="w-5 h-5 text-[#363636]" />,
      sustainability: 'Good',
      properties: ['Stretch', 'Shape Retention', 'Flexibility'],
      certifications: ['OEKO-TEX Standard 100'],
      description: 'Provides comfortable stretch and helps the fabric maintain its shape after multiple wears.',
      color: 'bg-white border-gray-200'
    }
  ];

  const qualityIndicators = [
    { aspect: 'Fabric GSM', value: '220 GSM', rating: 'Premium', info: 'Higher GSM = Thicker, more durable fabric', icon: <Package className="w-4 h-4" /> },
    { aspect: 'Thread Count', value: '180 TPI', rating: 'Excellent', info: 'Tightly woven for durability and comfort', icon: <Droplets className="w-4 h-4" /> },
    { aspect: 'Stitch Quality', value: 'Double-stitched seams', rating: 'Premium', info: 'Reinforced stitching prevents tearing', icon: <Shield className="w-4 h-4" /> },
    { aspect: 'Color Fastness', value: 'Grade 4-5', rating: 'Excellent', info: 'Won\'t fade after 30+ washes', icon: <Star className="w-4 h-4" /> }
  ];

  const sizePrediction = {
    recommended: 'M',
    confidence: 92,
    fit: 'Regular Fit',
    alternatives: [
      { size: 'S', fit: 'Slim Fit', confidence: 73, note: 'May feel snug around chest' },
      { size: 'L', fit: 'Relaxed Fit', confidence: 65, note: 'May be loose around waist' }
    ]
  };

  const sizeChart = [
    { size: 'S', chest: '36', waist: '30', length: '27', fit: 'Slim' },
    { size: 'M', chest: '38', waist: '32', length: '28', fit: 'Regular' },
    { size: 'L', chest: '40', waist: '34', length: '29', fit: 'Regular' },
    { size: 'XL', chest: '42', waist: '36', length: '30', fit: 'Relaxed' }
  ];

  const customerFitData = [
    { metric: 'Fit as Expected', percentage: 87, count: 1847 },
    { metric: 'Runs Small', percentage: 8, count: 170 },
    { metric: 'Runs Large', percentage: 5, count: 106 }
  ];

  const returnReduction = {
    withPredictor: 12,
    without: 38,
    savings: 26
  };

  const bodyAnalysisResult = {
    bodyType: 'Athletic Build',
    measurements: {
      shoulders: '42 cm',
      chest: '97 cm',
      waist: '81 cm',
      hips: '95 cm'
    },
    recommendations: {
      styles: ['Slim Fit', 'Regular Fit', 'Athletic Fit'],
      types: ['Crew Neck T-Shirts', 'V-Neck T-Shirts', 'Polo Shirts', 'Henley Shirts'],
      patterns: ['Solid Colors', 'Subtle Stripes', 'Geometric Patterns'],
      colors: ['Navy Blue', 'Charcoal Grey', 'Forest Green', 'Burgundy', 'White']
    },
    confidence: 91
  };

  // Sample body photos
  const sampleBodyPhotos = [
    'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=200&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=200&fit=crop'
  ];

  const simulateBodyAnalysis = () => {
    setUploadedBodyPhotos(sampleBodyPhotos);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setBodyAnalysisComplete(true);
    }, 2000);
  };

  const removeBodyPhoto = (index) => {
    setUploadedBodyPhotos(uploadedBodyPhotos.filter((_, i) => i !== index));
    setBodyAnalysisComplete(false);
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
            <h1 className="text-lg font-bold text-gray-900">Product Analysis</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Fashion</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Full Width Product Image & Details */}
      <section className="bg-white">
        <div className="w-full aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop"
            alt="Premium Organic Cotton T-Shirt"
            className="w-full h-full object-contain p-8"
          />
        </div>
        <div className="px-4 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#363636] mb-2">Premium Organic Cotton T-Shirt</h2>
          <p className="text-sm text-gray-600 mb-3">Navy Blue • Round Neck</p>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-base font-semibold text-gray-900">4.7</span>
            </div>
            <span className="text-sm text-gray-500">2,123 reviews</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-[#363636]">₹1,299</span>
            </div>
            <div className="flex gap-2">
              <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-300 px-2 py-1 rounded">
                <CheckCircle className="w-3 h-3 text-[#363636]" />
                <span className="text-sm font-medium text-[#363636]">Sustainable</span>
              </div>
              <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-300 px-2 py-1 rounded">
                <Shield className="w-3 h-3 text-[#363636]" />
                <span className="text-sm font-medium text-[#363636]">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size & Fit Predictor with Integrated AI Body Analysis */}
      <section className="bg-gray-50 rounded-xl p-4 mx-4 my-3 border-2 border-gray-300">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#363636]" />
            Smart Size & Fit Predictor
          </h3>
          <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">
            {returnReduction.savings}% fewer returns
          </span>
        </div>

        {/* Size Predictor Toggle */}
        {!showSizePredictor ? (
          <button
            onClick={() => setShowSizePredictor(true)}
            className="w-full bg-[#363636] text-white rounded-lg p-4 font-semibold text-sm flex items-center justify-between hover:bg-gray-800 transition-all"
          >
            <span>Find Your Perfect Size</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="space-y-3">
            {/* AI Body Analysis Feature - Integrated Within Size Predictor */}
            <div className="bg-white rounded-lg p-3 border-2 border-gray-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-[#363636] flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  AI Body Analysis
                </h4>
                {bodyAnalysisComplete && (
                  <span className="text-sm bg-[#363636] text-white px-2 py-1 rounded-full">Saved to Profile</span>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Upload 3 photos for AI measurements and size recommendations.
              </p>

              {uploadedBodyPhotos.length === 0 ? (
                <button
                  onClick={simulateBodyAnalysis}
                  className="w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-[#363636] transition-all transform active:scale-95"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Camera className="w-8 h-8 text-[#363636]" />
                    <p className="text-sm font-semibold text-[#363636]">Upload Body Photos</p>
                    <p className="text-sm text-gray-600">Front, side, back</p>
                  </div>
                </button>
              ) : (
                <div className="space-y-3">
                  {/* Photo Previews Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {uploadedBodyPhotos.map((photo, idx) => (
                      <div key={idx} className="relative">
                        <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={photo}
                            alt={`Body photo ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => removeBodyPhoto(idx)}
                          className="absolute -top-1 -right-1 bg-[#363636] text-white rounded-full p-1 hover:bg-gray-800 transition-all"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <p className="text-sm text-gray-600 text-center mt-1">
                          {idx === 0 ? 'Front' : idx === 1 ? 'Side' : 'Back'}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Loading State */}
                  {isAnalyzing && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                      <div className="animate-spin w-8 h-8 border-4 border-gray-200 border-t-[#363636] rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-semibold text-[#363636]">Analyzing body type & measurements...</p>
                    </div>
                  )}

                  {/* Analysis Result */}
                  {bodyAnalysisComplete && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-3">
                      {/* Confidence & Body Type */}
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Detected Body Type</p>
                          <p className="text-base font-bold text-[#363636]">{bodyAnalysisResult.bodyType}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-1">Confidence</p>
                          <p className="text-base font-bold text-[#363636]">{bodyAnalysisResult.confidence}%</p>
                        </div>
                      </div>

                      {/* Body Measurements */}
                      <div>
                        <p className="text-sm font-semibold text-[#363636] mb-2 flex items-center gap-1">
                          <Ruler className="w-3 h-3" />
                          Your Measurements
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white border border-gray-200 rounded p-2">
                            <p className="text-sm text-gray-600">Shoulders</p>
                            <p className="text-sm font-bold text-[#363636]">{bodyAnalysisResult.measurements.shoulders}</p>
                          </div>
                          <div className="bg-white border border-gray-200 rounded p-2">
                            <p className="text-sm text-gray-600">Chest</p>
                            <p className="text-sm font-bold text-[#363636]">{bodyAnalysisResult.measurements.chest}</p>
                          </div>
                          <div className="bg-white border border-gray-200 rounded p-2">
                            <p className="text-sm text-gray-600">Waist</p>
                            <p className="text-sm font-bold text-[#363636]">{bodyAnalysisResult.measurements.waist}</p>
                          </div>
                          <div className="bg-white border border-gray-200 rounded p-2">
                            <p className="text-sm text-gray-600">Hips</p>
                            <p className="text-sm font-bold text-[#363636]">{bodyAnalysisResult.measurements.hips}</p>
                          </div>
                        </div>
                      </div>

                      {/* Profile Save Notice */}
                      <div className="bg-white rounded-lg p-2.5 flex items-start gap-2 border border-gray-200">
                        <Sparkles className="w-4 h-4 text-[#363636] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-[#363636]">Saved to Profile</p>
                          <p className="text-sm text-gray-600 mt-0.5">
                            Used for all future size recommendations.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Size Recommendation - Shows after body analysis */}
            {bodyAnalysisComplete && (
              <>
                {/* AI Recommendation */}
                <div className="bg-[#363636] text-white rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold mb-1">Recommended Size</p>
                      <p className="text-3xl font-bold">{sizePrediction.recommended}</p>
                      <p className="text-sm opacity-90 mt-1">{sizePrediction.fit}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-white/20 rounded-lg px-3 py-1">
                        <p className="text-sm opacity-90">Confidence</p>
                        <p className="text-2xl font-bold">{sizePrediction.confidence}%</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 bg-white/10 rounded p-2">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <p className="text-sm">Based on your measurements & 2,123 reviews</p>
                  </div>
                </div>

                {/* Alternative Sizes */}
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Alternative Options</p>
                  <div className="space-y-2">
                    {sizePrediction.alternatives.map((alt, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">Size {alt.size}</span>
                            <span className="text-sm bg-gray-200 text-gray-700 px-2 py-0.5 rounded">{alt.fit}</span>
                          </div>
                          <p className="text-sm text-gray-600">{alt.note}</p>
                        </div>
                        <div className="text-right ml-2">
                          <p className="text-sm font-semibold text-gray-700">{alt.confidence}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size Chart */}
                <div className="bg-white rounded-lg p-3 overflow-x-auto">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Detailed Size Chart (inches)</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-700">Size</th>
                        <th className="text-center py-2 text-gray-700">Chest</th>
                        <th className="text-center py-2 text-gray-700">Waist</th>
                        <th className="text-center py-2 text-gray-700">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((row, idx) => (
                        <tr
                          key={idx}
                          className={`border-b border-gray-100 ${row.size === sizePrediction.recommended ? 'bg-gray-100' : ''}`}
                        >
                          <td className="py-2 font-semibold text-gray-900">{row.size}</td>
                          <td className="text-center py-2 text-gray-700">{row.chest}</td>
                          <td className="text-center py-2 text-gray-700">{row.waist}</td>
                          <td className="text-center py-2 text-gray-700">{row.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Customer Fit Feedback */}
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#363636]" />
                      How Customers Rate the Fit
                    </p>
                    <span className="text-sm text-gray-500">2,123 reviews</span>
                  </div>
                  <div className="space-y-2">
                    {customerFitData.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-700">{item.metric}</span>
                          <span className="text-base font-semibold text-gray-900">{item.percentage}% ({item.count})</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#363636]"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </section>

      {/* Material & Quality Transparency Hub */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Shield className="w-5 h-5 text-gray-700" />
            Material & Quality Details
          </h3>
          <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">Certified Sustainable</span>
        </div>

        {/* Material Composition */}
        <div className="space-y-3 mb-4">
          {materialBreakdown.map((material, idx) => (
            <div key={idx} className={`${material.color} rounded-lg p-3 border-2`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {material.icon}
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{material.material}</p>
                    <p className="text-sm text-gray-600">{material.percentage}% of fabric</p>
                  </div>
                </div>
                <span className="text-sm px-2 py-1 rounded-full font-medium bg-gray-200 text-gray-700">
                  {material.sustainability}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-2">{material.description}</p>

              {/* Properties */}
              <div className="flex flex-wrap gap-1 mb-2">
                {material.properties.map((prop, pIdx) => (
                  <span key={pIdx} className="text-sm bg-gray-50 px-2 py-1 rounded text-gray-700 border border-gray-200">
                    {prop}
                  </span>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-1">
                {material.certifications.map((cert, cIdx) => (
                  <span key={cIdx} className="text-sm bg-gray-50 px-2 py-1 rounded text-[#363636] font-medium border border-gray-300 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Indicators */}
        <div className="bg-gray-50 rounded-lg p-3 border-2 border-gray-300">
          <p className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-[#363636]" />
            Premium Quality Indicators
          </p>
          <div className="space-y-2">
            {qualityIndicators.map((indicator, idx) => (
              <div key={idx} className="bg-white rounded p-2 flex items-center justify-between border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="text-[#363636]">{indicator.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{indicator.aspect}</p>
                    <p className="text-sm text-gray-600">{indicator.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">
                    {indicator.rating}
                  </span>
                  <div className="group relative inline-block ml-1">
                    <Info className="w-3 h-3 text-gray-400 cursor-help" />
                    <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-40 bg-gray-900 text-white text-sm p-2 rounded shadow-lg z-10">
                      {indicator.info}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Care Instructions */}
        <div className="mt-3 bg-gray-50 rounded-lg p-3 border-2 border-gray-300">
          <p className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
            <Droplets className="w-4 h-4 text-[#363636]" />
            Care Instructions for Longevity
          </p>
          <div className="space-y-1 text-sm text-gray-700">
            <p>• Machine wash cold (30°C) with similar colors</p>
            <p>• Use mild detergent, avoid bleach</p>
            <p>• Tumble dry low or hang to dry</p>
            <p>• Iron on low heat if needed (inside out)</p>
            <p>• Do not dry clean</p>
          </div>
          <div className="mt-2 flex items-start gap-2 bg-white rounded p-2 border border-gray-200">
            <AlertCircle className="w-4 h-4 text-[#363636] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              Following these instructions can extend your garment's life by <span className="font-semibold text-[#363636]">2-3 years</span>
            </p>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3 border border-gray-200">
        <h3 className="font-bold text-gray-900 text-base mb-3">Best Price</h3>
        <div className="space-y-2">
          {[
            { platform: 'Myntra', price: 1299, rating: 4.7, reviews: '2,123', logo: 'https://logo.clearbit.com/myntra.com', color: 'bg-white border-gray-200' },
            { platform: 'Ajio', price: 1399, rating: 4.6, reviews: '847', logo: 'https://logo.clearbit.com/ajio.com', color: 'bg-white border-gray-200' },
            { platform: 'Amazon Fashion', price: 1499, rating: 4.5, reviews: '1,534', logo: 'https://logo.clearbit.com/amazon.in', color: 'bg-white border-gray-200' }
          ].map((platform, idx) => (
            <div key={idx} className={`${platform.color} border-2 rounded-lg p-3`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={platform.logo} alt={platform.platform} className="w-8 h-8 object-contain" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{platform.platform}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-700">{platform.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({platform.reviews})</span>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-gray-900 text-lg">₹{platform.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Score Breakdown */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3 border border-gray-200">
        <h3 className="font-bold text-gray-900 text-base mb-3">Score Breakdown</h3>
        <div className="space-y-3">
          {[
            { name: 'Material Quality', score: 95, description: 'Premium organic cotton' },
            { name: 'Sustainability', score: 98, description: 'GOTS certified, eco-friendly' },
            { name: 'Comfort', score: 93, description: 'Soft, breathable fabric' },
            { name: 'Durability', score: 90, description: '220 GSM, double-stitched' },
            { name: 'Value for Money', score: 88, description: 'Premium quality, fair price' }
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">{item.name}</span>
                <span className="text-sm font-bold text-gray-900">{item.score}/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                <div
                  className="h-full bg-[#363636] rounded-full transition-all duration-500"
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Similar Products */}
      <section className="bg-white rounded-xl p-4 mx-4">
        <h3 className="font-bold text-gray-900 text-base mb-3">Similar Products You Might Like</h3>
        <div className="space-y-3">
          {[
            { name: 'Organic Crew Neck Tee', brand: 'H&M Conscious', price: 999, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&q=80', rating: 4.6, match: '92%' },
            { name: 'Bamboo Cotton Blend Tee', brand: 'Marks & Spencer', price: 1599, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=200&q=80', rating: 4.8, match: '89%' },
            { name: 'Premium Supima Cotton Tee', brand: 'Uniqlo', price: 1290, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&q=80', rating: 4.7, match: '95%' }
          ].map((product, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900 mb-0.5">{product.name}</p>
                <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-sm bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{product.match} match</span>
                </div>
                <p className="font-bold text-gray-900 text-sm">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Bottom: Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-gray-600">Best Price</p>
            <p className="text-xl font-bold text-gray-900">₹1,299</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-[#363636] text-white py-3 px-6 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all transform active:scale-95 flex items-center justify-center gap-2"
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
