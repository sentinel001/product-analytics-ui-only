import React, { useState } from 'react';
import { Star, TrendingDown, Ruler, AlertCircle, ChevronRight, CheckCircle, Info, Shirt, Wind, Droplets, Shield, Package, Users, Camera, PlayCircle, RotateCw, ZoomIn, Eye, Bell, TrendingUp, Tag, Calendar, DollarSign, ShoppingCart, Heart, Instagram } from 'lucide-react';

const FashionProduct_Phase2 = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [userMeasurements, setUserMeasurements] = useState({
    height: '175',
    weight: '70',
    chest: '38',
    waist: '32'
  });
  const [showSizePredictor, setShowSizePredictor] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedModelView, setSelectedModelView] = useState('standard');
  const [priceAlertValue, setPriceAlertValue] = useState('1200');
  const [selectedPlatform, setSelectedPlatform] = useState('myntra');

  const materialBreakdown = [
    {
      material: 'Organic Cotton',
      percentage: 95,
      icon: <Wind className="w-5 h-5 text-green-600" />,
      sustainability: 'Excellent',
      properties: ['Breathable', 'Soft', 'Hypoallergenic'],
      certifications: ['GOTS Certified', 'Fair Trade'],
      description: 'Premium organic cotton grown without harmful pesticides. Soft, breathable, and environmentally friendly.',
      color: 'from-green-50 to-emerald-50 border-green-200'
    },
    {
      material: 'Elastane (Spandex)',
      percentage: 5,
      icon: <Shirt className="w-5 h-5 text-blue-600" />,
      sustainability: 'Good',
      properties: ['Stretch', 'Shape Retention', 'Flexibility'],
      certifications: ['OEKO-TEX Standard 100'],
      description: 'Provides comfortable stretch and helps the fabric maintain its shape after multiple wears.',
      color: 'from-blue-50 to-cyan-50 border-blue-200'
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

  // PHASE 2: Comprehensive Visual Experience Data
  const productImages = [
    {
      type: 'front',
      url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
      label: 'Front View',
      icon: <Eye className="w-4 h-4" />
    },
    {
      type: 'back',
      url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80',
      label: 'Back View',
      icon: <RotateCw className="w-4 h-4" />
    },
    {
      type: 'detail',
      url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80',
      label: 'Fabric Detail',
      icon: <ZoomIn className="w-4 h-4" />
    },
    {
      type: 'side',
      url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
      label: 'Side View',
      icon: <Camera className="w-4 h-4" />
    }
  ];

  const modelShots = [
    {
      type: 'standard',
      url: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&q=80',
      bodyType: 'Athletic',
      height: '5\'10"',
      size: 'M',
      label: 'Athletic Build'
    },
    {
      type: 'slim',
      url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80',
      bodyType: 'Slim',
      height: '5\'8"',
      size: 'M',
      label: 'Slim Build'
    },
    {
      type: 'broad',
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      bodyType: 'Broad',
      height: '6\'0"',
      size: 'L',
      label: 'Broad Build'
    }
  ];

  const userPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=300&q=80',
      user: 'Rahul M.',
      bodyType: 'Athletic',
      height: '5\'9"',
      size: 'M',
      verified: true,
      rating: 5
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
      user: 'Arjun K.',
      bodyType: 'Slim',
      height: '5\'7"',
      size: 'S',
      verified: true,
      rating: 5
    },
    {
      url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
      user: 'Vikram S.',
      bodyType: 'Average',
      height: '5\'10"',
      size: 'M',
      verified: true,
      rating: 4
    }
  ];

  const colorVariants = [
    { name: 'Navy Blue', hex: '#1e3a8a', current: true },
    { name: 'Charcoal', hex: '#374151' },
    { name: 'Olive Green', hex: '#6b7280' },
    { name: 'White', hex: '#f9fafb' }
  ];

  // PHASE 2: Price Intelligence Data
  const platformPrices = [
    {
      platform: 'Myntra',
      price: 1299,
      originalPrice: 1799,
      discount: 28,
      rating: 4.7,
      reviews: '2,123',
      logo: 'https://logo.clearbit.com/myntra.com',
      shipping: 'Free',
      coupon: 'FASHION200',
      couponDiscount: 200,
      finalPrice: 1099,
      deliveryDays: '2-3',
      color: 'bg-pink-50 border-pink-200',
      badges: ['Lowest Price', 'Free Shipping']
    },
    {
      platform: 'Ajio',
      price: 1399,
      originalPrice: 1899,
      discount: 26,
      rating: 4.6,
      reviews: '847',
      logo: 'https://logo.clearbit.com/ajio.com',
      shipping: 'Free',
      coupon: 'FIRST15',
      couponDiscount: 150,
      finalPrice: 1249,
      deliveryDays: '3-4',
      color: 'bg-orange-50 border-orange-200',
      badges: ['Bank Offer']
    },
    {
      platform: 'Amazon Fashion',
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      rating: 4.5,
      reviews: '1,534',
      logo: 'https://logo.clearbit.com/amazon.in',
      shipping: '₹50',
      coupon: 'PRIME100',
      couponDiscount: 100,
      finalPrice: 1399,
      deliveryDays: '1-2',
      color: 'bg-blue-50 border-blue-200',
      badges: ['Fastest Delivery']
    },
    {
      platform: 'Flipkart',
      price: 1449,
      originalPrice: 1899,
      discount: 24,
      rating: 4.4,
      reviews: '956',
      logo: 'https://logo.clearbit.com/flipkart.com',
      shipping: 'Free',
      coupon: 'PLUS50',
      couponDiscount: 50,
      finalPrice: 1399,
      deliveryDays: '2-4',
      color: 'bg-yellow-50 border-yellow-200',
      badges: ['Plus Member']
    }
  ];

  const priceHistory = [
    { date: 'Oct 14', price: 1599 },
    { date: 'Oct 21', price: 1499 },
    { date: 'Oct 28', price: 1399 },
    { date: 'Nov 4', price: 1349 },
    { date: 'Nov 11', price: 1299 },
    { date: 'Nov 18', price: 1449 },
    { date: 'Nov 25', price: 1299 },
    { date: 'Dec 2', price: 1199 },
    { date: 'Dec 9', price: 1299 },
    { date: 'Today', price: 1099 }
  ];

  const priceInsights = {
    lowestEver: 1099,
    averagePrice: 1374,
    belowAverage: 20,
    nextSale: 'Republic Day Sale (Jan 26)',
    daysUntilSale: 12,
    watchingUsers: 234,
    priceDropChance: 'High'
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight']">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">Product Analysis</h1>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Fashion</span>
          </div>
        </div>
      </div>

      {/* Phase 2 Badge */}
      <div className="mx-4 mt-3 mb-3">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            <div>
              <p className="font-bold text-sm">Phase 2: Visual Confidence</p>
              <p className="text-xs opacity-90">Months 3-4 Features</p>
            </div>
          </div>
          <div className="bg-white/20 rounded px-2 py-1">
            <p className="text-xs font-semibold">NEW</p>
          </div>
        </div>
      </div>

      {/* PHASE 2 FEATURE: Comprehensive Visual Experience */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Camera className="w-5 h-5 text-orange-600" />
            360° Visual Experience
          </h3>
          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
            Phase 2
          </span>
        </div>

        {/* Main Product Image with 360° View */}
        <div className="relative mb-3">
          <img
            src={productImages[selectedImage].url}
            alt={productImages[selectedImage].label}
            className="w-full h-80 object-cover rounded-lg border border-gray-200"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="bg-white/90 backdrop-blur p-2 rounded-full shadow-lg">
              <ZoomIn className="w-5 h-5 text-gray-700" />
            </button>
            <button className="bg-white/90 backdrop-blur p-2 rounded-full shadow-lg">
              <RotateCw className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
            {productImages[selectedImage].label}
          </div>
        </div>

        {/* Image Selector */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {productImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative rounded-lg overflow-hidden border-2 ${selectedImage === idx ? 'border-orange-500' : 'border-gray-200'}`}
            >
              <img src={img.url} alt={img.label} className="w-full h-20 object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                {img.icon}
              </div>
            </button>
          ))}
        </div>

        {/* AR Virtual Try-On */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 rounded-full p-2">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">AR Virtual Try-On</p>
                <p className="text-xs text-gray-600">See how it looks on you</p>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-xs font-semibold">
              Try Now
            </button>
          </div>
        </div>

        {/* Color Accuracy */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-amber-600" />
            <p className="text-sm font-semibold text-gray-900">True Color Photography</p>
          </div>
          <p className="text-xs text-gray-600 mb-2">Photographed in natural daylight & studio lighting for accurate colors</p>
          <div className="flex gap-2">
            {colorVariants.map((color, idx) => (
              <div key={idx} className="relative">
                <div
                  className={`w-10 h-10 rounded-full border-2 ${color.current ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-300'}`}
                  style={{ backgroundColor: color.hex }}
                />
                {color.current && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                    Current
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Video Content */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <PlayCircle className="w-5 h-5 text-blue-600" />
            <p className="font-semibold text-gray-900 text-sm">Video Gallery</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Fabric Flow', duration: '0:45' },
              { label: 'Fit & Style', duration: '1:20' },
              { label: 'Unboxing', duration: '2:15' }
            ].map((video, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-200 rounded-lg h-20 flex items-center justify-center">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-700 mt-1">{video.label}</p>
                <span className="absolute top-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                  {video.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 2 FEATURE: Multiple Model Shots & Body Types */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 mx-4 mb-3 border border-indigo-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            See It On Different Body Types
          </h3>
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
            Phase 2
          </span>
        </div>

        {/* Model Selection */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
          {modelShots.map((model, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedModelView(model.type)}
              className={`flex-shrink-0 rounded-lg overflow-hidden border-2 ${selectedModelView === model.type ? 'border-indigo-500' : 'border-gray-200'}`}
            >
              <img src={model.url} alt={model.label} className="w-20 h-24 object-cover" />
              <div className="bg-white px-2 py-1">
                <p className="text-xs font-semibold text-gray-900">{model.label}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Model Details */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <div className="flex gap-3">
            <img
              src={modelShots.find(m => m.type === selectedModelView).url}
              alt="Model"
              className="w-24 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm mb-2">
                {modelShots.find(m => m.type === selectedModelView).label}
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Body Type:</span>
                  <span className="font-semibold text-gray-900">
                    {modelShots.find(m => m.type === selectedModelView).bodyType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Height:</span>
                  <span className="font-semibold text-gray-900">
                    {modelShots.find(m => m.type === selectedModelView).height}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Wearing Size:</span>
                  <span className="font-semibold text-gray-900">
                    {modelShots.find(m => m.type === selectedModelView).size}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Size Comparison on Same Model */}
        <div className="bg-white rounded-lg p-3">
          <p className="text-sm font-semibold text-gray-900 mb-2">Size Comparison (S/M/L)</p>
          <div className="flex gap-2">
            {['S', 'M', 'L'].map((size, idx) => (
              <div key={idx} className="flex-1">
                <div className="bg-gray-200 rounded-lg h-32 mb-1"></div>
                <p className="text-xs text-center font-semibold text-gray-700">Size {size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 2 FEATURE: User-Generated Content Gallery */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 mx-4 mb-3 border border-green-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Instagram className="w-5 h-5 text-green-600" />
            See It On Real People
          </h3>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
            {userPhotos.length} Verified Photos
          </span>
        </div>

        {/* Filter by Body Type */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
          {['All', 'Athletic', 'Slim', 'Average', 'Broad'].map((type, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium ${idx === 0 ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* User Photos Grid */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {userPhotos.map((photo, idx) => (
            <div key={idx} className="relative">
              <img
                src={photo.url}
                alt={`User photo ${idx + 1}`}
                className="w-full h-28 object-cover rounded-lg border border-gray-200"
              />
              {photo.verified && (
                <div className="absolute top-1 right-1 bg-green-600 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Featured User Review */}
        <div className="bg-white rounded-lg p-3">
          <div className="flex items-start gap-3">
            <img
              src={userPhotos[0].url}
              alt="User"
              className="w-12 h-12 object-cover rounded-full border-2 border-green-500"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold text-sm text-gray-900">{userPhotos[0].user}</p>
                <CheckCircle className="w-4 h-4 text-green-600" />
                <div className="flex">
                  {[...Array(userPhotos[0].rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{userPhotos[0].bodyType}</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{userPhotos[0].height}</span>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-medium">Size {userPhotos[0].size}</span>
              </div>
              <p className="text-xs text-gray-600">
                "Perfect fit! The fabric is incredibly soft and breathable. True to size for athletic build."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 2 FEATURE: Real-Time Price Intelligence Engine */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 mx-4 mb-3 border border-orange-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-orange-600" />
            Price Intelligence
          </h3>
          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
            Phase 2
          </span>
        </div>

        {/* Price Insights Summary */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg p-4 mb-3">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs opacity-90 mb-1">Best Price Today</p>
              <p className="text-3xl font-bold">₹{priceInsights.lowestEver}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full font-medium">
                  Lowest Ever
                </span>
                <span className="text-xs opacity-90">
                  {priceInsights.belowAverage}% below avg
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white/20 rounded-lg px-3 py-2">
                <TrendingDown className="w-6 h-6 mb-1" />
                <p className="text-xs">Great Deal</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/10 rounded p-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <p className="text-xs">
              {priceInsights.watchingUsers} users watching • {priceInsights.priceDropChance} chance of further drop
            </p>
          </div>
        </div>

        {/* 90-Day Price History */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <p className="text-sm font-semibold text-gray-900 mb-3">90-Day Price Trend</p>
          <div className="relative h-32 mb-2">
            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                fill="url(#priceGradient)"
                stroke="none"
                points={priceHistory.map((p, i) => `${(i / (priceHistory.length - 1)) * 300},${100 - ((p.price - 1099) / 500) * 100}`).join(' ') + ' 300,100 0,100'}
              />
              <polyline
                fill="none"
                stroke="#f97316"
                strokeWidth="2"
                points={priceHistory.map((p, i) => `${(i / (priceHistory.length - 1)) * 300},${100 - ((p.price - 1099) / 500) * 100}`).join(' ')}
              />
            </svg>
            <div className="absolute inset-0 flex items-end justify-between text-xs text-gray-500 px-1">
              <span>{priceHistory[0].date}</span>
              <span>{priceHistory[priceHistory.length - 1].date}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-600">Average</p>
              <p className="font-bold text-gray-900">₹{priceInsights.averagePrice}</p>
            </div>
            <div className="bg-green-50 rounded p-2">
              <p className="text-green-600">Lowest</p>
              <p className="font-bold text-green-700">₹{priceInsights.lowestEver}</p>
            </div>
            <div className="bg-orange-50 rounded p-2">
              <p className="text-orange-600">You Save</p>
              <p className="font-bold text-orange-700">₹{priceInsights.averagePrice - priceInsights.lowestEver}</p>
            </div>
          </div>
        </div>

        {/* Multi-Platform Pricing with Active Deals */}
        <div className="space-y-2 mb-3">
          <p className="text-sm font-semibold text-gray-900">Compare Across Platforms</p>
          {platformPrices.map((platform, idx) => (
            <div key={idx} className={`${platform.color} border rounded-lg p-3`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3 flex-1">
                  <img src={platform.logo} alt={platform.platform} className="w-10 h-10 object-contain" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900 text-sm">{platform.platform}</p>
                      {platform.badges.map((badge, bIdx) => (
                        <span key={bIdx} className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full font-medium">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-700">{platform.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({platform.reviews})</span>
                      <span className="text-xs text-gray-600">• {platform.deliveryDays} days</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 line-through">₹{platform.originalPrice}</span>
                    <span className="text-xs bg-red-100 text-red-700 px-1 py-0.5 rounded font-medium">
                      {platform.discount}% OFF
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">₹{platform.price}</p>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="bg-white rounded border border-dashed border-gray-300 p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Apply code: {platform.coupon}</p>
                    <p className="text-xs text-green-600">Extra ₹{platform.couponDiscount} off</p>
                  </div>
                </div>
                <button className="text-xs text-orange-600 font-semibold">COPY</button>
              </div>

              {/* Final Price */}
              <div className="mt-2 flex items-center justify-between bg-green-50 rounded p-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-gray-700">Final Price (with coupon + {platform.shipping} shipping)</span>
                </div>
                <span className="text-sm font-bold text-green-700">₹{platform.finalPrice}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Price Drop Alert */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-5 h-5 text-purple-600" />
            <p className="font-semibold text-gray-900 text-sm">Set Price Drop Alert</p>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <input
                type="number"
                value={priceAlertValue}
                onChange={(e) => setPriceAlertValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                placeholder="Enter price"
              />
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Notify Me
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            {priceInsights.watchingUsers} users are watching this price
          </p>
        </div>

        {/* Sale Season Prediction */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <p className="font-semibold text-gray-900 text-sm">Next Sale Prediction</p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
              {priceInsights.daysUntilSale} days
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-1">{priceInsights.nextSale}</p>
          <p className="text-xs text-gray-600">Expected discount: 30-40% off</p>
        </div>

        {/* Value Assessment */}
        <div className="bg-white rounded-lg p-3">
          <p className="font-semibold text-gray-900 text-sm mb-3">Value Assessment</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Price Category</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                Premium
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Price per Wear (100 wears)</span>
              <span className="text-xs font-semibold text-gray-900">₹{Math.round(priceInsights.lowestEver / 100)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Similar Styles Range</span>
              <span className="text-xs font-semibold text-gray-900">₹899 - ₹1,999</span>
            </div>
          </div>
          <div className="mt-3 bg-green-50 rounded p-2 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-700">
              <span className="font-semibold text-green-700">Worth the premium:</span> High-quality organic cotton, ethical production, and premium durability justify the price point.
            </p>
          </div>
        </div>
      </section>

      {/* Wishlist & Compare */}
      <div className="mx-4 mb-3 flex gap-2">
        <button className="flex-1 bg-white border border-gray-300 rounded-lg p-3 flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">Add to Wishlist</span>
        </button>
        <button className="flex-1 bg-white border border-gray-300 rounded-lg p-3 flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-semibold text-gray-700">Compare</span>
        </button>
      </div>

      {/* PHASE 1 FEATURE: Advanced Size & Fit Prediction Engine */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 mx-4 mb-3 border border-purple-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Ruler className="w-5 h-5 text-purple-600" />
            Smart Size & Fit Predictor
          </h3>
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
            {returnReduction.savings}% fewer returns
          </span>
        </div>

        {/* Size Predictor Toggle */}
        {!showSizePredictor ? (
          <button
            onClick={() => setShowSizePredictor(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4 font-semibold text-sm flex items-center justify-between hover:from-purple-700 hover:to-pink-700 transition-all"
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4">
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
                      className={`border-b border-gray-100 ${row.size === sizePrediction.recommended ? 'bg-purple-50' : ''}`}
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
            <div className="bg-white rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
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
                        className={`h-full rounded-full ${idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-orange-500' : 'bg-blue-500'}`}
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

      {/* PHASE 1 FEATURE: Material & Quality Transparency Hub */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Shield className="w-5 h-5 text-gray-700" />
            Material & Quality Details
          </h3>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Certified Sustainable</span>
        </div>

        {/* Material Composition */}
        <div className="space-y-3 mb-4">
          {materialBreakdown.map((material, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${material.color} rounded-lg p-3 border`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {material.icon}
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{material.material}</p>
                    <p className="text-xs text-gray-600">{material.percentage}% of fabric</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${material.sustainability === 'Excellent' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {material.sustainability}
                </span>
              </div>

              <p className="text-xs text-gray-700 mb-2">{material.description}</p>

              {/* Properties */}
              <div className="flex flex-wrap gap-1 mb-2">
                {material.properties.map((prop, pIdx) => (
                  <span key={pIdx} className="text-xs bg-white px-2 py-1 rounded text-gray-700 border border-gray-200">
                    {prop}
                  </span>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-1">
                {material.certifications.map((cert, cIdx) => (
                  <span key={cIdx} className="text-xs bg-white px-2 py-1 rounded text-green-700 font-medium border border-green-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Indicators */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-200">
          <p className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-600" />
            Premium Quality Indicators
          </p>
          <div className="space-y-2">
            {qualityIndicators.map((indicator, idx) => (
              <div key={idx} className="bg-white rounded p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-amber-600">{indicator.icon}</div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{indicator.aspect}</p>
                    <p className="text-xs text-gray-600">{indicator.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
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
        <div className="mt-3 bg-blue-50 rounded-lg p-3 border border-blue-200">
          <p className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
            <Droplets className="w-4 h-4 text-blue-600" />
            Care Instructions for Longevity
          </p>
          <div className="space-y-1 text-xs text-gray-700">
            <p>• Machine wash cold (30°C) with similar colors</p>
            <p>• Use mild detergent, avoid bleach</p>
            <p>• Tumble dry low or hang to dry</p>
            <p>• Iron on low heat if needed (inside out)</p>
            <p>• Do not dry clean</p>
          </div>
          <div className="mt-2 flex items-start gap-2 bg-white rounded p-2">
            <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-700">
              Following these instructions can extend your garment's life by <span className="font-semibold text-blue-700">2-3 years</span>
            </p>
          </div>
        </div>
      </section>

      {/* Score Breakdown */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <h3 className="font-bold text-gray-900 text-base mb-3">Score Breakdown</h3>
        <div className="space-y-3">
          {[
            { name: 'Material Quality', score: 95, color: 'bg-green-500', description: 'Premium organic cotton' },
            { name: 'Sustainability', score: 98, color: 'bg-emerald-500', description: 'GOTS certified, eco-friendly' },
            { name: 'Comfort', score: 93, color: 'bg-blue-500', description: 'Soft, breathable fabric' },
            { name: 'Durability', score: 90, color: 'bg-purple-500', description: '220 GSM, double-stitched' },
            { name: 'Value for Money', score: 88, color: 'bg-orange-500', description: 'Premium quality, fair price' }
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">{item.name}</span>
                <span className="text-sm font-bold text-gray-900">{item.score}/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
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
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{product.match} match</span>
                </div>
                <p className="font-bold text-gray-900 text-sm">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FashionProduct_Phase2;
