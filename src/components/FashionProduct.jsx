import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, TrendingDown, Ruler, AlertCircle, ChevronRight, CheckCircle, Info, Shirt, Wind, Droplets, Shield, Package, Users, ArrowLeft, ShoppingCart, Camera, Upload, Sparkles, X } from 'lucide-react';

const FashionProduct = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [userMeasurements, setUserMeasurements] = useState({
    height: '175',
    weight: '70',
    chest: '38',
    waist: '32'
  });
  const [showSizePredictor, setShowSizePredictor] = useState(false);
  const [showBodyAnalysis, setShowBodyAnalysis] = useState(false);
  const [uploadedBodyPhotos, setUploadedBodyPhotos] = useState([]);
  const [bodyAnalysisComplete, setBodyAnalysisComplete] = useState(false);

  const materialBreakdown = [
    {
      material: 'Organic Cotton',
      percentage: 95,
      icon: <Wind className="w-5 h-5 text-black" />,
      sustainability: 'Excellent',
      properties: ['Breathable', 'Soft', 'Hypoallergenic'],
      certifications: ['GOTS Certified', 'Fair Trade'],
      description: 'Premium organic cotton grown without harmful pesticides. Soft, breathable, and environmentally friendly.',
      color: 'bg-white border-gray-200'
    },
    {
      material: 'Elastane (Spandex)',
      percentage: 5,
      icon: <Shirt className="w-5 h-5 text-black" />,
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
    recommendations: {
      styles: ['Slim Fit', 'Regular Fit', 'Athletic Fit'],
      types: ['Crew Neck T-Shirts', 'V-Neck T-Shirts', 'Polo Shirts', 'Henley Shirts'],
      patterns: ['Solid Colors', 'Subtle Stripes', 'Geometric Patterns'],
      colors: ['Navy Blue', 'Charcoal Grey', 'Forest Green', 'Burgundy', 'White']
    },
    confidence: 91
  };

  const handleBodyPhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (uploadedBodyPhotos.length + files.length <= 3) {
      setUploadedBodyPhotos([...uploadedBodyPhotos, ...files]);
      if (uploadedBodyPhotos.length + files.length === 3) {
        setTimeout(() => setBodyAnalysisComplete(true), 1500);
      }
    }
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
            <span className="text-xs text-gray-500">Fashion</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-white px-4 py-4 mb-3">
        <div className="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
            alt="Premium Cotton T-Shirt"
            className="w-24 h-24 object-cover rounded-lg border border-gray-200"
          />
          <div className="flex-1">
            <h2 className="font-bold text-gray-900 text-base mb-1">Premium Organic Cotton T-Shirt</h2>
            <p className="text-sm text-gray-600 mb-2">Navy Blue • Round Neck</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-900">4.7</span>
              </div>
              <span className="text-xs text-gray-500">2,123 reviews</span>
            </div>
            <div className="flex gap-2">
              <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-300 px-2 py-1 rounded">
                <CheckCircle className="w-3 h-3 text-black" />
                <span className="text-xs font-medium text-black">Sustainable</span>
              </div>
              <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-300 px-2 py-1 rounded">
                <Shield className="w-3 h-3 text-black" />
                <span className="text-xs font-medium text-black">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 1 FEATURE: Advanced Size & Fit Prediction Engine */}
      <section className="bg-gray-50 rounded-xl p-4 mx-4 mb-3 border-2 border-gray-300">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Ruler className="w-5 h-5 text-black" />
            Smart Size & Fit Predictor
          </h3>
          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">
            {returnReduction.savings}% fewer returns
          </span>
        </div>

        {/* Size Predictor Toggle */}
        {!showSizePredictor ? (
          <button
            onClick={() => setShowSizePredictor(true)}
            className="w-full bg-black text-white rounded-lg p-4 font-semibold text-sm flex items-center justify-between hover:bg-gray-800 transition-all"
          >
            <span>Find Your Perfect Size</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="space-y-3">
            {/* User Measurements Input */}
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm font-semibold text-gray-900 mb-2">Your Measurements</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-gray-600">Height (cm)</label>
                  <input
                    type="number"
                    value={userMeasurements.height}
                    onChange={(e) => setUserMeasurements({...userMeasurements, height: e.target.value})}
                    className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Weight (kg)</label>
                  <input
                    type="number"
                    value={userMeasurements.weight}
                    onChange={(e) => setUserMeasurements({...userMeasurements, weight: e.target.value})}
                    className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Chest (inches)</label>
                  <input
                    type="number"
                    value={userMeasurements.chest}
                    onChange={(e) => setUserMeasurements({...userMeasurements, chest: e.target.value})}
                    className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Waist (inches)</label>
                  <input
                    type="number"
                    value={userMeasurements.waist}
                    onChange={(e) => setUserMeasurements({...userMeasurements, waist: e.target.value})}
                    className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-black text-white rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-semibold mb-1">Recommended Size</p>
                  <p className="text-3xl font-bold">{sizePrediction.recommended}</p>
                  <p className="text-xs opacity-90 mt-1">{sizePrediction.fit}</p>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <p className="text-xs opacity-90">Confidence</p>
                    <p className="text-2xl font-bold">{sizePrediction.confidence}%</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 bg-white/10 rounded p-2">
                <Info className="w-4 h-4 flex-shrink-0" />
                <p className="text-xs">Based on your measurements and 2,123 verified customer reviews</p>
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
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">{alt.fit}</span>
                      </div>
                      <p className="text-xs text-gray-600">{alt.note}</p>
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
              <table className="w-full text-xs">
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
                  <Users className="w-4 h-4 text-black" />
                  How Customers Rate the Fit
                </p>
                <span className="text-xs text-gray-500">2,123 reviews</span>
              </div>
              <div className="space-y-2">
                {customerFitData.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-700">{item.metric}</span>
                      <span className="text-xs font-semibold text-gray-900">{item.percentage}% ({item.count})</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-black"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* AI Body Analysis Feature */}
      <section className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 mx-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-black flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            AI Body & Style Analysis
          </h3>
          {bodyAnalysisComplete && (
            <span className="text-xs bg-black text-white px-2 py-1 rounded-full">Saved to Profile</span>
          )}
        </div>

        <p className="text-xs text-gray-600 mb-3">
          Upload photos from different angles and our AI will recommend the best dress styles, types, patterns, and colors for your body type.
        </p>

        {!showBodyAnalysis ? (
          <button
            onClick={() => setShowBodyAnalysis(true)}
            className="w-full bg-white border-2 border-gray-300 rounded-lg p-4 hover:border-black transition-all transform active:scale-95"
          >
            <div className="flex flex-col items-center gap-2">
              <Camera className="w-8 h-8 text-black" />
              <p className="text-sm font-semibold text-black">Upload Body Photos</p>
              <p className="text-xs text-gray-600">Get personalized style recommendations</p>
            </div>
          </button>
        ) : (
          <div className="space-y-3">
            {/* Photo Upload Area */}
            {uploadedBodyPhotos.length < 3 && (
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-black transition-all">
                <label className="cursor-pointer block">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleBodyPhotoUpload}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="w-6 h-6 text-gray-400" />
                    <p className="text-xs font-semibold text-black">
                      Upload {uploadedBodyPhotos.length === 0 ? '3' : 3 - uploadedBodyPhotos.length} more photo{3 - uploadedBodyPhotos.length !== 1 ? 's' : ''}
                    </p>
                    <p className="text-xs text-gray-600 text-center">
                      Front view, side view, and back view for best results
                    </p>
                  </div>
                </label>
              </div>
            )}

            {/* Photo Previews Grid */}
            {uploadedBodyPhotos.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {uploadedBodyPhotos.map((photo, idx) => (
                  <div key={idx} className="relative">
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Body photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => removeBodyPhoto(idx)}
                      className="absolute -top-1 -right-1 bg-black text-white rounded-full p-1 hover:bg-gray-800 transition-all"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      {idx === 0 ? 'Front' : idx === 1 ? 'Side' : 'Back'}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Loading State */}
            {uploadedBodyPhotos.length === 3 && !bodyAnalysisComplete && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <div className="animate-spin w-8 h-8 border-4 border-gray-200 border-t-black rounded-full mx-auto mb-2"></div>
                <p className="text-xs font-semibold text-black">Analyzing your body type & style preferences...</p>
                <p className="text-xs text-gray-600 mt-1">This may take a few moments</p>
              </div>
            )}

            {/* Analysis Result */}
            {bodyAnalysisComplete && (
              <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-3">
                {/* Confidence & Body Type */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Detected Body Type</p>
                    <p className="text-base font-bold text-black">{bodyAnalysisResult.bodyType}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 mb-1">Confidence</p>
                    <p className="text-base font-bold text-black">{bodyAnalysisResult.confidence}%</p>
                  </div>
                </div>

                {/* Recommended Styles */}
                <div>
                  <p className="text-xs font-semibold text-black mb-2 flex items-center gap-1">
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

                {/* Recommended Types */}
                <div>
                  <p className="text-xs font-semibold text-black mb-2 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Best Dress Types
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {bodyAnalysisResult.recommendations.types.map((type, idx) => (
                      <span key={idx} className="text-xs bg-gray-50 border border-gray-300 px-2 py-1 rounded text-gray-900">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Patterns */}
                <div>
                  <p className="text-xs font-semibold text-black mb-2 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Flattering Patterns
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {bodyAnalysisResult.recommendations.patterns.map((pattern, idx) => (
                      <span key={idx} className="text-xs bg-gray-50 border border-gray-300 px-2 py-1 rounded text-gray-900">
                        {pattern}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Colors */}
                <div>
                  <p className="text-xs font-semibold text-black mb-2 flex items-center gap-1">
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
                  <Sparkles className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-black">Saved to Your Profile</p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      We'll use this to personalize your Fashion recommendations and show you clothes that match your body type.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* PHASE 1 FEATURE: Material & Quality Transparency Hub */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Shield className="w-5 h-5 text-gray-700" />
            Material & Quality Details
          </h3>
          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">Certified Sustainable</span>
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
                    <p className="text-xs text-gray-600">{material.percentage}% of fabric</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full font-medium bg-gray-200 text-gray-700">
                  {material.sustainability}
                </span>
              </div>

              <p className="text-xs text-gray-700 mb-2">{material.description}</p>

              {/* Properties */}
              <div className="flex flex-wrap gap-1 mb-2">
                {material.properties.map((prop, pIdx) => (
                  <span key={pIdx} className="text-xs bg-gray-50 px-2 py-1 rounded text-gray-700 border border-gray-200">
                    {prop}
                  </span>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-1">
                {material.certifications.map((cert, cIdx) => (
                  <span key={cIdx} className="text-xs bg-gray-50 px-2 py-1 rounded text-black font-medium border border-gray-300 flex items-center gap-1">
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
            <Star className="w-4 h-4 text-black" />
            Premium Quality Indicators
          </p>
          <div className="space-y-2">
            {qualityIndicators.map((indicator, idx) => (
              <div key={idx} className="bg-white rounded p-2 flex items-center justify-between border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="text-black">{indicator.icon}</div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{indicator.aspect}</p>
                    <p className="text-xs text-gray-600">{indicator.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">
                    {indicator.rating}
                  </span>
                  <div className="group relative inline-block ml-1">
                    <Info className="w-3 h-3 text-gray-400 cursor-help" />
                    <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-40 bg-gray-900 text-white text-xs p-2 rounded shadow-lg z-10">
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
            <Droplets className="w-4 h-4 text-black" />
            Care Instructions for Longevity
          </p>
          <div className="space-y-1 text-xs text-gray-700">
            <p>• Machine wash cold (30°C) with similar colors</p>
            <p>• Use mild detergent, avoid bleach</p>
            <p>• Tumble dry low or hang to dry</p>
            <p>• Iron on low heat if needed (inside out)</p>
            <p>• Do not dry clean</p>
          </div>
          <div className="mt-2 flex items-start gap-2 bg-white rounded p-2 border border-gray-200">
            <AlertCircle className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-700">
              Following these instructions can extend your garment's life by <span className="font-semibold text-black">2-3 years</span>
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
                        <span className="text-xs text-gray-700">{platform.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({platform.reviews})</span>
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
                  className="h-full bg-black rounded-full transition-all duration-500"
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">{item.description}</p>
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
                <p className="text-xs text-gray-600 mb-1">{product.brand}</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{product.match} match</span>
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
            <p className="text-xs text-gray-600">Best Price</p>
            <p className="text-xl font-bold text-gray-900">₹1,299</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FashionProduct;
