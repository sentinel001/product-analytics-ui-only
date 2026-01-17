import React, { useState } from 'react';
import { Star, TrendingDown, Clock, AlertCircle, ChevronDown, ChevronUp, Info, Zap, Cpu, Battery, Camera, Shield, Play, Download, Wifi, BookOpen, CheckCircle, Award, BarChart3, Smartphone, Monitor, Apple, Chrome } from 'lucide-react';

const ElectronicsProduct_Phase2 = () => {
  const [expandedSpec, setExpandedSpec] = useState(null);
  const [priceHistory, setPriceHistory] = useState('30d');
  const [selectedComparison, setSelectedComparison] = useState([]);
  const [activeGuideTab, setActiveGuideTab] = useState('quickstart');

  const specifications = [
    {
      category: 'Performance',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      specs: [
        { name: 'Processor', value: 'Apple A17 Pro', tooltip: '3nm chip with 6-core CPU (2 performance + 4 efficiency cores)', highlight: true },
        { name: 'RAM', value: '8GB', tooltip: 'LPDDR5 unified memory for smooth multitasking' },
        { name: 'Storage', value: '256GB', tooltip: 'NVMe SSD - Non-expandable', visualBar: 256 },
        { name: 'GPU', value: '6-core GPU', tooltip: 'Hardware-accelerated ray tracing support' }
      ]
    },
    {
      category: 'Display',
      icon: <Zap className="w-5 h-5 text-purple-600" />,
      specs: [
        { name: 'Screen Size', value: '6.1 inches', tooltip: 'Super Retina XDR OLED display' },
        { name: 'Resolution', value: '2556 x 1179', tooltip: '460 ppi pixel density for crisp visuals', highlight: true },
        { name: 'Refresh Rate', value: '120Hz ProMotion', tooltip: 'Adaptive refresh rate 1-120Hz for smooth scrolling' },
        { name: 'Peak Brightness', value: '2000 nits', tooltip: 'HDR peak brightness for outdoor visibility' }
      ]
    },
    {
      category: 'Battery & Charging',
      icon: <Battery className="w-5 h-5 text-green-600" />,
      specs: [
        { name: 'Battery Capacity', value: '3,877 mAh', tooltip: 'Lithium-ion battery', visualBar: 3877 },
        { name: 'Video Playback', value: 'Up to 23 hours', tooltip: 'Based on Apple testing conditions', highlight: true },
        { name: 'Charging Speed', value: '20W Fast Charge', tooltip: '50% in 30 minutes with 20W adapter (sold separately)' },
        { name: 'Wireless', value: 'MagSafe 15W', tooltip: 'Qi2 wireless charging compatible' }
      ]
    },
    {
      category: 'Camera System',
      icon: <Camera className="w-5 h-5 text-pink-600" />,
      specs: [
        { name: 'Main Camera', value: '48MP f/1.6', tooltip: 'Quad-pixel sensor with sensor-shift OIS', highlight: true },
        { name: 'Ultra Wide', value: '12MP f/2.4', tooltip: '120° field of view with macro capability' },
        { name: 'Telephoto', value: '12MP f/2.8', tooltip: '3x optical zoom (77mm focal length)' },
        { name: 'Front Camera', value: '12MP TrueDepth', tooltip: 'Autofocus with Face ID support' }
      ]
    }
  ];

  const priceComparisons = [
    { platform: 'Amazon', price: 134999, rating: 4.6, reviews: '2,847', discount: 5, stock: 'In Stock', delivery: 'Tomorrow', logo: 'https://logo.clearbit.com/amazon.in', color: 'bg-orange-50 border-orange-200' },
    { platform: 'Flipkart', price: 135999, rating: 4.5, reviews: '1,932', discount: 4, stock: 'In Stock', delivery: 'Tomorrow', logo: 'https://logo.clearbit.com/flipkart.com', color: 'bg-blue-50 border-blue-200', bestSeller: true },
    { platform: 'Croma', price: 139900, rating: 4.7, reviews: '486', discount: 0, stock: 'Limited Stock', delivery: '2-3 days', logo: 'https://logo.clearbit.com/croma.com', color: 'bg-green-50 border-green-200' },
    { platform: 'Apple Store', price: 139900, rating: 4.8, reviews: '12,453', discount: 0, stock: 'In Stock', delivery: '3-5 days', logo: 'https://logo.clearbit.com/apple.com', color: 'bg-gray-50 border-gray-200' }
  ];

  const priceHistoryData = {
    '7d': [139900, 138900, 137900, 136900, 135999, 134999, 134999],
    '30d': [144900, 143900, 142900, 141900, 140900, 139900, 138900, 137900, 136900, 135999, 134999],
    '90d': [149900, 148900, 147900, 146900, 145900, 144900, 142900, 140900, 138900, 136900, 134999]
  };

  const currentHistory = priceHistoryData[priceHistory];
  const lowestPrice = Math.min(...currentHistory);
  const highestPrice = Math.max(...currentHistory);
  const priceDrop = highestPrice - lowestPrice;
  const dropPercentage = ((priceDrop / highestPrice) * 100).toFixed(1);

  const budgetRecommendations = [
    { label: 'Budget Alternative', product: 'OnePlus 11R', price: 39999, saving: 95000, match: '75%' },
    { label: 'Mid-Range Option', product: 'Samsung Galaxy S23 FE', price: 59999, saving: 75000, match: '82%' },
    { label: 'Premium Alternative', product: 'Google Pixel 8 Pro', price: 106999, saving: 28000, match: '88%' }
  ];

  // PHASE 2: Usage Guidance Data
  const quickStartSteps = [
    {
      step: 1,
      title: 'Unbox & Inspect',
      description: 'Check contents: iPhone, USB-C cable, documentation. No power adapter included.',
      duration: '2 min',
      icon: '📦'
    },
    {
      step: 2,
      title: 'Power On & Setup',
      description: 'Long press side button. Follow on-screen setup. Transfer data from old device if needed.',
      duration: '10-15 min',
      icon: '⚡'
    },
    {
      step: 3,
      title: 'Face ID Configuration',
      description: 'Set up Face ID for secure unlock and Apple Pay. Position face in camera frame.',
      duration: '3 min',
      icon: '👤'
    },
    {
      step: 4,
      title: 'Download Essential Apps',
      description: 'App Store, iCloud sync, enable automatic updates. Sign in with Apple ID.',
      duration: '5 min',
      icon: '📱'
    }
  ];

  const first24HoursGuide = [
    { time: 'First Hour', task: 'Initial charge to 80% (optimal for battery health)', icon: <Battery className="w-4 h-4" /> },
    { time: '2-4 Hours', task: 'Explore camera features, test ProRAW & Action mode', icon: <Camera className="w-4 h-4" /> },
    { time: '4-8 Hours', task: 'Set up widgets, customize Control Center, enable Dynamic Island', icon: <Smartphone className="w-4 h-4" /> },
    { time: '24 Hours', task: 'Full charge cycle for battery calibration', icon: <Zap className="w-4 h-4" /> }
  ];

  const featureVideos = [
    { title: 'ProRAW Photography', duration: '2:34', thumbnail: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=300&q=80', views: '124K' },
    { title: 'Action Mode Video', duration: '1:45', thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80', views: '89K' },
    { title: 'Face ID Setup & Tips', duration: '3:12', thumbnail: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=300&q=80', views: '156K' },
    { title: 'Battery Optimization', duration: '4:01', thumbnail: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300&q=80', views: '201K' }
  ];

  const batteryBreakdown = [
    { activity: 'Gaming (Genshin Impact)', duration: '6 hours', percentage: 25, color: 'bg-red-500' },
    { activity: 'Video Streaming (Netflix)', duration: '10 hours', percentage: 42, color: 'bg-blue-500' },
    { activity: 'Standby Mode', duration: '2 days (48 hrs)', percentage: 20, color: 'bg-green-500' },
    { activity: 'Social Media Browsing', duration: '8 hours', percentage: 33, color: 'bg-purple-500' }
  ];

  const compatibility = [
    { platform: 'iOS Ecosystem', items: ['AirPods Pro', 'Apple Watch', 'MacBook', 'iPad'], icon: <Apple className="w-5 h-5" />, status: 'Excellent' },
    { platform: 'Android Devices', items: ['File transfer via cable', 'Limited wireless features'], icon: <Smartphone className="w-5 h-5" />, status: 'Limited' },
    { platform: 'Windows PC', items: ['iTunes for sync', 'iCloud for Windows'], icon: <Monitor className="w-5 h-5" />, status: 'Good' },
    { platform: 'macOS', items: ['Universal Control', 'AirDrop', 'Handoff'], icon: <Apple className="w-5 h-5" />, status: 'Excellent' }
  ];

  // PHASE 2: Comparison Engine Data
  const comparisonProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 134999,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80',
      specs: {
        processor: { value: 'A17 Pro', score: 100 },
        ram: { value: '8GB', score: 80 },
        storage: { value: '256GB', score: 75 },
        display: { value: '6.1" 120Hz', score: 95 },
        camera: { value: '48MP + 12MP', score: 95 },
        battery: { value: '3,877 mAh', score: 85 },
        price: { value: '₹1,34,999', score: 70 }
      },
      rating: 4.6,
      reviews: 16718
    },
    {
      id: 2,
      name: 'Samsung S24 Ultra',
      price: 129999,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&q=80',
      specs: {
        processor: { value: 'Snapdragon 8 Gen 3', score: 98 },
        ram: { value: '12GB', score: 100 },
        storage: { value: '256GB', score: 75 },
        display: { value: '6.8" 120Hz', score: 100 },
        camera: { value: '200MP + 50MP', score: 100 },
        battery: { value: '5,000 mAh', score: 100 },
        price: { value: '₹1,29,999', score: 75 }
      },
      rating: 4.6,
      reviews: 8932
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      price: 106999,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&q=80',
      specs: {
        processor: { value: 'Google Tensor G3', score: 85 },
        ram: { value: '12GB', score: 100 },
        storage: { value: '256GB', score: 75 },
        display: { value: '6.7" 120Hz', score: 95 },
        camera: { value: '50MP AI', score: 98 },
        battery: { value: '5,050 mAh', score: 100 },
        price: { value: '₹1,06,999', score: 85 }
      },
      rating: 4.5,
      reviews: 5421
    },
    {
      id: 4,
      name: 'iPhone 15 Pro Max',
      price: 159900,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80',
      specs: {
        processor: { value: 'A17 Pro', score: 100 },
        ram: { value: '8GB', score: 80 },
        storage: { value: '256GB', score: 75 },
        display: { value: '6.7" 120Hz', score: 100 },
        camera: { value: '48MP + 12MP', score: 95 },
        battery: { value: '4,441 mAh', score: 95 },
        price: { value: '₹1,59,900', score: 60 }
      },
      rating: 4.7,
      reviews: 12453
    }
  ];

  const aiRecommendations = [
    {
      badge: 'Best Overall',
      product: 'iPhone 15 Pro',
      reason: 'Perfect balance of performance, camera quality, and ecosystem integration',
      color: 'bg-gradient-to-r from-yellow-400 to-orange-500'
    },
    {
      badge: 'Best Value',
      product: 'Google Pixel 8 Pro',
      reason: 'Flagship features at ₹28,000 less with industry-leading AI camera',
      color: 'bg-gradient-to-r from-green-400 to-emerald-500'
    },
    {
      badge: 'Best for Power Users',
      product: 'Samsung S24 Ultra',
      reason: '12GB RAM, S Pen support, largest display, and longest battery life',
      color: 'bg-gradient-to-r from-blue-400 to-indigo-500'
    }
  ];

  const getScoreColor = (score1, score2) => {
    if (score1 > score2) return 'text-green-600 bg-green-50';
    if (score1 < score2) return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  };

  const toggleComparison = (productId) => {
    if (selectedComparison.includes(productId)) {
      setSelectedComparison(selectedComparison.filter(id => id !== productId));
    } else if (selectedComparison.length < 4) {
      setSelectedComparison([...selectedComparison, productId]);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight']">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">Product Analysis</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-semibold">
              Phase 2: Guidance & Decisions
            </span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-white px-4 py-4 mb-3">
        <div className="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80"
            alt="iPhone 15 Pro"
            className="w-24 h-24 object-cover rounded-lg border border-gray-200"
          />
          <div className="flex-1">
            <h2 className="font-bold text-gray-900 text-base mb-1">iPhone 15 Pro</h2>
            <p className="text-sm text-gray-600 mb-2">256GB, Natural Titanium</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-900">4.6</span>
              </div>
              <span className="text-sm text-gray-500">16,718 reviews</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
              <TrendingDown className="w-3 h-3 text-green-600" />
              <span className="text-sm font-medium text-green-700">₹14,901 price drop</span>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 1 FEATURE: Real-Time Price Intelligence Engine */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mx-4 mb-3 border border-blue-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-blue-600" />
            Live Price Intelligence
          </h3>
          <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Updated 2 min ago</span>
        </div>

        {/* Price History Graph */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-900">Price Trend</span>
            <div className="flex gap-1">
              {['7d', '30d', '90d'].map(period => (
                <button
                  key={period}
                  onClick={() => setPriceHistory(period)}
                  className={`text-sm px-2 py-1 rounded ${priceHistory === period ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Simple line chart visualization */}
          <div className="relative h-24 flex items-end gap-1">
            {currentHistory.map((price, idx) => {
              const height = ((price - lowestPrice) / (highestPrice - lowestPrice)) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                    style={{ height: `${Math.max(height, 10)}%` }}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-2">
            <div className="text-sm">
              <span className="text-gray-500">Lowest: </span>
              <span className="font-semibold text-green-600">₹{lowestPrice.toLocaleString()}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Drop: </span>
              <span className="font-semibold text-blue-600">{dropPercentage}%</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Highest: </span>
              <span className="font-semibold text-gray-700">₹{highestPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Best Deal Alert */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-3 mb-3">
          <div className="flex items-start gap-2">
            <Zap className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm mb-1">Best Deal Alert!</p>
              <p className="text-sm opacity-90">Amazon offers the lowest price at ₹1,34,999 - Save ₹4,901 compared to MRP. Deal expires in 6 hours.</p>
            </div>
          </div>
        </div>

        {/* Multi-Platform Price Comparison */}
        <div className="space-y-2">
          {priceComparisons.map((platform, idx) => (
            <div key={idx} className={`${platform.color} border rounded-lg p-3 relative`}>
              {platform.bestSeller && (
                <span className="absolute -top-2 left-3 bg-yellow-400 text-yellow-900 text-sm px-2 py-0.5 rounded-full font-semibold">
                  Best Seller
                </span>
              )}
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
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-lg">₹{platform.price.toLocaleString()}</p>
                  {platform.discount > 0 && (
                    <span className="text-sm text-green-600 font-medium">{platform.discount}% off</span>
                  )}
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-sm text-gray-600">{platform.delivery}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Budget-Based Recommendations */}
        <div className="mt-3 bg-white rounded-lg p-3">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-600" />
            Budget-Friendly Alternatives
          </h4>
          <div className="space-y-2">
            {budgetRecommendations.map((rec, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{rec.label}</p>
                  <p className="font-semibold text-sm text-gray-900">{rec.product}</p>
                  <p className="text-sm text-green-600 font-medium mt-0.5">Save ₹{rec.saving.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-sm">₹{rec.price.toLocaleString()}</p>
                  <span className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{rec.match} match</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 1 FEATURE: Comprehensive Technical Specifications Hub */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Cpu className="w-5 h-5 text-gray-700" />
            Complete Technical Specs
          </h3>
          <span className="text-sm text-gray-500">Tap specs for details</span>
        </div>

        <div className="space-y-3">
          {specifications.map((category, catIdx) => (
            <div key={catIdx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedSpec(expandedSpec === catIdx ? null : catIdx)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span className="font-semibold text-gray-900 text-sm">{category.category}</span>
                </div>
                {expandedSpec === catIdx ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {expandedSpec === catIdx && (
                <div className="p-3 bg-white space-y-2">
                  {category.specs.map((spec, specIdx) => (
                    <div key={specIdx} className={`p-2 rounded ${spec.highlight ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-sm text-gray-600 font-medium">{spec.name}</span>
                        <div className="flex items-center gap-1">
                          <span className={`text-sm font-semibold ${spec.highlight ? 'text-blue-700' : 'text-gray-900'}`}>
                            {spec.value}
                          </span>
                          <div className="group relative">
                            <Info className="w-3 h-3 text-gray-400 cursor-help" />
                            <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-sm p-2 rounded shadow-lg z-10">
                              {spec.tooltip}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visual bar for storage/battery */}
                      {spec.visualBar && (
                        <div className="mt-2">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              style={{ width: `${(spec.visualBar / 5000) * 100}%` }}
                            />
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{spec.tooltip}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Spec Comparison */}
        <div className="mt-3 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">How It Compares</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">vs iPhone 14 Pro</span>
              <span className="font-semibold text-green-600">15% faster • 2 hrs more battery</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">vs Samsung S24 Ultra</span>
              <span className="font-semibold text-blue-600">Similar performance • Better ecosystem</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">vs Google Pixel 8 Pro</span>
              <span className="font-semibold text-orange-600">Better processor • Pixel wins camera</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 2 FEATURE: Usage Guidance & How-To Center */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 mx-4 mb-3 border border-emerald-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Usage Guidance & How-To
          </h3>
          <span className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">Phase 2</span>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-3 overflow-x-auto">
          {[
            { id: 'quickstart', label: 'Quick Start' },
            { id: 'first24', label: 'First 24 Hours' },
            { id: 'features', label: 'Feature Videos' },
            { id: 'battery', label: 'Battery Life' },
            { id: 'compatibility', label: 'Compatibility' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveGuideTab(tab.id)}
              className={`text-sm px-3 py-2 rounded-lg font-medium whitespace-nowrap ${
                activeGuideTab === tab.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Quick Start Guide */}
        {activeGuideTab === 'quickstart' && (
          <div className="bg-white rounded-lg p-3">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              Visual Setup Instructions
            </h4>
            <div className="space-y-3">
              {quickStartSteps.map((step, idx) => (
                <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-3xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-emerald-600">STEP {step.step}</span>
                      <span className="text-sm text-gray-500">{step.duration}</span>
                    </div>
                    <p className="font-semibold text-sm text-gray-900 mb-1">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-gray-300" />
                </div>
              ))}
            </div>

            {/* Initial Charging Recommendation */}
            <div className="mt-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Initial Charging Tip</p>
                  <p className="text-sm text-gray-600">For optimal battery health, charge to 80% on first use. Enable "Optimized Battery Charging" in Settings → Battery.</p>
                </div>
              </div>
            </div>

            {/* App Download Links */}
            <div className="mt-3">
              <h5 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1">
                <Download className="w-3 h-3" />
                Essential Apps to Download
              </h5>
              <div className="grid grid-cols-2 gap-2">
                {['iCloud', 'Find My', 'Apple Music', 'Apple TV'].map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      {app[0]}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pairing Instructions */}
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <Wifi className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Quick Pairing</p>
                  <p className="text-sm text-gray-600">AirPods: Open case near iPhone. Apple Watch: Open Watch app. Other devices: Settings → Bluetooth.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* First 24 Hours Guide */}
        {activeGuideTab === 'first24' && (
          <div className="bg-white rounded-lg p-3">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Your First 24 Hours with iPhone 15 Pro</h4>
            <div className="space-y-2">
              {first24HoursGuide.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2 bg-gray-50 rounded">
                  <div className="mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-emerald-600">{item.time}</p>
                    <p className="text-sm text-gray-700">{item.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feature Videos */}
        {activeGuideTab === 'features' && (
          <div className="bg-white rounded-lg p-3">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Feature Explainer Videos</h4>
            <div className="grid grid-cols-2 gap-2">
              {featureVideos.map((video, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden border border-gray-200">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-24 object-cover" />
                  <div className="absolute inset-0 bg-[#363636] bg-opacity-40 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <p className="text-sm font-semibold text-white">{video.title}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-white">{video.duration}</span>
                      <span className="text-sm text-white opacity-75">{video.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Battery Life Breakdown */}
        {activeGuideTab === 'battery' && (
          <div className="bg-white rounded-lg p-3">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Real-World Battery Life Scenarios</h4>
            <div className="space-y-3">
              {batteryBreakdown.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.activity}</span>
                    <span className="text-sm font-bold text-gray-900">{item.duration}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-2">
                <Battery className="w-4 h-4 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Battery Optimization Tips</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Enable Low Power Mode for 20-25% longer battery life</li>
                    <li>• Reduce screen brightness and use Auto-Brightness</li>
                    <li>• Disable Background App Refresh for unused apps</li>
                    <li>• Use Wi-Fi instead of cellular data when possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compatibility Information */}
        {activeGuideTab === 'compatibility' && (
          <div className="bg-white rounded-lg p-3">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Device Compatibility</h4>
            <div className="space-y-3">
              {compatibility.map((item, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-sm font-semibold text-gray-900">{item.platform}</span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full font-medium ${
                      item.status === 'Excellent' ? 'bg-green-100 text-green-700' :
                      item.status === 'Good' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.items.map((feature, featureIdx) => (
                      <li key={featureIdx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Warranty & Support */}
            <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Warranty & Support</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 1-year limited warranty included</li>
                    <li>• AppleCare+ available: ₹18,900 (2 years coverage)</li>
                    <li>• 90 days complimentary technical support</li>
                    <li>• Visit apple.com/support or Genius Bar for assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PHASE 2 FEATURE: Intelligent Comparison Engine */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 mx-4 mb-3 border border-purple-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            Intelligent Comparison Engine
          </h3>
          <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">Phase 2</span>
        </div>

        {/* AI-Powered Recommendations */}
        <div className="mb-3 space-y-2">
          {aiRecommendations.map((rec, idx) => (
            <div key={idx} className={`${rec.color} text-white rounded-lg p-3`}>
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm mb-1">{rec.badge}: {rec.product}</p>
                  <p className="text-sm opacity-90">{rec.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Selection for Comparison */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-gray-900">Select Products to Compare (up to 4)</h4>
            <span className="text-sm text-gray-500">{selectedComparison.length}/4 selected</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {comparisonProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => toggleComparison(product.id)}
                className={`p-2 rounded-lg border-2 transition-all ${
                  selectedComparison.includes(product.id)
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <img src={product.image} alt={product.name} className="w-full h-16 object-cover rounded mb-2" />
                <p className="text-sm font-semibold text-gray-900 truncate">{product.name}</p>
                <p className="text-sm text-gray-600">₹{product.price.toLocaleString()}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side Comparison Table */}
        {selectedComparison.length >= 2 && (
          <div className="bg-white rounded-lg p-3 overflow-x-auto">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Side-by-Side Comparison</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-2 text-gray-600 font-semibold">Specification</th>
                  {selectedComparison.map((id) => {
                    const product = comparisonProducts.find(p => p.id === id);
                    return (
                      <th key={id} className="text-center py-2 px-2 font-semibold text-gray-900">
                        <div className="text-sm truncate">{product.name}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {['processor', 'ram', 'storage', 'display', 'camera', 'battery', 'price'].map((specKey) => {
                  const scores = selectedComparison.map(id =>
                    comparisonProducts.find(p => p.id === id).specs[specKey].score
                  );
                  const maxScore = Math.max(...scores);
                  const minScore = Math.min(...scores);

                  return (
                    <tr key={specKey} className="border-b border-gray-100">
                      <td className="py-2 pr-2 text-gray-600 capitalize font-medium">{specKey}</td>
                      {selectedComparison.map((id) => {
                        const product = comparisonProducts.find(p => p.id === id);
                        const spec = product.specs[specKey];
                        const isWinner = spec.score === maxScore;
                        const isLoser = spec.score === minScore && maxScore !== minScore;

                        return (
                          <td key={id} className={`text-center py-2 px-2 rounded ${
                            isWinner ? 'bg-green-50 text-green-700 font-semibold' :
                            isLoser ? 'bg-red-50 text-red-700' :
                            'bg-yellow-50 text-yellow-700'
                          }`}>
                            <div className="text-sm">{spec.value}</div>
                            {isWinner && <Award className="w-3 h-3 mx-auto mt-1 text-yellow-500" />}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-2 pr-2 text-gray-900 font-semibold">Overall Rating</td>
                  {selectedComparison.map((id) => {
                    const product = comparisonProducts.find(p => p.id === id);
                    return (
                      <td key={id} className="text-center py-2 px-2">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>

            {/* Decision Helper */}
            <div className="mt-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
              <h5 className="text-sm font-semibold text-gray-900 mb-2">Decision Helper</h5>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• <strong>Choose iPhone 15 Pro</strong> if you prioritize ecosystem integration and optimal performance</p>
                <p>• <strong>Choose Samsung S24 Ultra</strong> if you need maximum battery life and S Pen functionality</p>
                <p>• <strong>Choose Google Pixel 8 Pro</strong> if you want the best value with AI-powered camera features</p>
                <p>• <strong>Choose iPhone 15 Pro Max</strong> if you prefer a larger display and longer battery life</p>
              </div>
            </div>
          </div>
        )}

        {/* Alternative Suggestions */}
        <div className="mt-3 bg-white rounded-lg p-3">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Alternative Suggestions Based on Your Priorities</h4>
          <div className="space-y-2">
            <div className="p-2 bg-blue-50 rounded border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-1">Best for Gaming</p>
              <p className="text-sm text-blue-700">Samsung Galaxy S24 Ultra - 12GB RAM, better cooling system</p>
            </div>
            <div className="p-2 bg-purple-50 rounded border border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-1">Best for Photography</p>
              <p className="text-sm text-purple-700">Google Pixel 8 Pro - AI-enhanced camera with Night Sight</p>
            </div>
            <div className="p-2 bg-green-50 rounded border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-1">Best Battery Life</p>
              <p className="text-sm text-green-700">Samsung Galaxy S24 Ultra - 5,000 mAh battery (30% more)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Score Breakdown */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <h3 className="font-bold text-gray-900 text-base mb-3">Score Breakdown</h3>
        <div className="space-y-3">
          {[
            { name: 'Performance', score: 96, color: 'bg-blue-500', description: 'Exceptional A17 Pro chip' },
            { name: 'Camera Quality', score: 94, color: 'bg-purple-500', description: '48MP with excellent low-light' },
            { name: 'Battery Life', score: 85, color: 'bg-green-500', description: '23 hrs video playback' },
            { name: 'Display', score: 98, color: 'bg-pink-500', description: 'ProMotion 120Hz OLED' },
            { name: 'Value for Money', score: 78, color: 'bg-orange-500', description: 'Premium pricing' }
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
            { name: 'iPhone 15 Pro Max', price: 159900, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80', rating: 4.7, match: '95%' },
            { name: 'Samsung Galaxy S24 Ultra', price: 129999, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&q=80', rating: 4.6, match: '88%' },
            { name: 'Google Pixel 8 Pro', price: 106999, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&q=80', rating: 4.5, match: '85%' }
          ].map((product, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-900 mb-1">{product.name}</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{product.match} match</span>
                </div>
                <p className="font-bold text-gray-900 text-sm">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ElectronicsProduct_Phase2;
