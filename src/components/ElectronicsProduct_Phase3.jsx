import React, { useState } from 'react';
import { Star, TrendingDown, Clock, AlertCircle, ChevronDown, ChevronUp, Info, Zap, Cpu, Battery, Camera, Shield, MapPin, HelpCircle, Award, DollarSign, TrendingUp, CheckCircle, Package, Wrench, FileText, Phone } from 'lucide-react';

const ElectronicsProduct_Phase3 = () => {
  const [expandedSpec, setExpandedSpec] = useState(null);
  const [priceHistory, setPriceHistory] = useState('30d');
  const [selectedStorage, setSelectedStorage] = useState(256);
  const [selectedRAM, setSelectedRAM] = useState(8);
  const [selectedColor, setSelectedColor] = useState('Natural Titanium');
  const [budgetInput, setBudgetInput] = useState('');
  const [showStorageQuiz, setShowStorageQuiz] = useState(false);
  const [storageUsage, setStorageUsage] = useState('photos');
  const [showWarrantyDetails, setShowWarrantyDetails] = useState(false);
  const [activeVariantTab, setActiveVariantTab] = useState('storage');
  const [selectedProducts, setSelectedProducts] = useState([1]);

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

  // PHASE 3: Variant & Configuration Data
  const storageOptions = [
    { size: 128, price: 124900, recommendation: 'Basic users, minimal apps', savings: 0 },
    { size: 256, price: 134999, recommendation: 'Regular photos/videos, moderate apps', savings: 0, popular: true },
    { size: 512, price: 154999, recommendation: 'Heavy media, lots of apps/games', savings: 0 },
    { size: 1024, price: 184999, recommendation: 'Professional content creators', savings: 0 }
  ];

  const ramOptions = [
    { size: 8, price: 0, recommendation: 'Standard multitasking, regular apps', futureProof: 'Good for 3-4 years' },
    { size: 16, price: 20000, recommendation: 'Heavy multitasking, gaming, pro apps', futureProof: 'Excellent for 5+ years' }
  ];

  const colorOptions = [
    { name: 'Natural Titanium', hex: '#8B8680', popular: true },
    { name: 'Blue Titanium', hex: '#2C3E50' },
    { name: 'White Titanium', hex: '#E8E8E8' },
    { name: 'Black Titanium', hex: '#1C1C1E' }
  ];

  const storageScenarios = [
    { usage: 'basic', label: 'Light User', description: 'Social media, calls, basic apps', recommendation: 128, icon: '📱' },
    { usage: 'photos', label: 'Photo Enthusiast', description: 'Lots of photos, some videos', recommendation: 256, icon: '📸' },
    { usage: 'video', label: 'Video Creator', description: '4K video recording, editing', recommendation: 512, icon: '🎥' },
    { usage: 'pro', label: 'Professional', description: 'ProRes video, RAW photos, apps', recommendation: 1024, icon: '💼' }
  ];

  const comparisonProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro 256GB',
      price: 134999,
      storage: 256,
      ram: 8,
      processor: 'A17 Pro',
      camera: '48MP',
      battery: '23 hrs',
      display: '6.1" ProMotion',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro 512GB',
      price: 154999,
      storage: 512,
      ram: 8,
      processor: 'A17 Pro',
      camera: '48MP',
      battery: '23 hrs',
      display: '6.1" ProMotion',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80'
    },
    {
      id: 3,
      name: 'iPhone 15 Pro Max 256GB',
      price: 159900,
      storage: 256,
      ram: 8,
      processor: 'A17 Pro',
      camera: '48MP',
      battery: '29 hrs',
      display: '6.7" ProMotion',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80'
    }
  ];

  const budgetPhoneRanges = [
    {
      range: 'Under ₹15,000',
      phones: [
        { name: 'Redmi Note 13', price: 13999, rating: 4.3, highlight: 'Best battery life' },
        { name: 'Realme 11', price: 14999, rating: 4.2, highlight: 'Best camera' }
      ]
    },
    {
      range: '₹15,000 - ₹30,000',
      phones: [
        { name: 'OnePlus Nord 3', price: 27999, rating: 4.4, highlight: 'Best performance' },
        { name: 'Samsung Galaxy M54', price: 25999, rating: 4.3, highlight: 'Best display' }
      ]
    },
    {
      range: '₹30,000 - ₹60,000',
      phones: [
        { name: 'OnePlus 11R', price: 39999, rating: 4.5, highlight: 'Best value' },
        { name: 'Samsung Galaxy S23 FE', price: 59999, rating: 4.6, highlight: 'Best camera' }
      ]
    }
  ];

  const toggleProductComparison = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(p => p !== productId));
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, productId]);
      }
    }
  };

  const getStorageRecommendation = () => {
    const scenario = storageScenarios.find(s => s.usage === storageUsage);
    return scenario ? scenario.recommendation : 256;
  };

  const calculateUpgradeValue = (fromStorage, toStorage) => {
    const fromOption = storageOptions.find(o => o.size === fromStorage);
    const toOption = storageOptions.find(o => o.size === toStorage);
    const priceDiff = toOption.price - fromOption.price;
    const storageDiff = toStorage - fromStorage;
    const pricePerGB = (priceDiff / storageDiff).toFixed(2);
    return { priceDiff, storageDiff, pricePerGB };
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">Product Analysis</h1>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-bold">
              Phase 3: Optimization
            </span>
            <span className="text-xs text-gray-500">Months 5-6</span>
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
            <p className="text-sm text-gray-600 mb-2">{selectedStorage}GB, {selectedColor}</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-900">4.6</span>
              </div>
              <span className="text-xs text-gray-500">16,718 reviews</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
              <TrendingDown className="w-3 h-3 text-green-600" />
              <span className="text-xs font-medium text-green-700">₹14,901 price drop</span>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 3 FEATURE: Variant & Configuration Optimizer */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-4 mx-4 mb-3 border-2 border-purple-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Package className="w-5 h-5 text-purple-600" />
            Configure Your Perfect Device
          </h3>
          <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-bold">
            PHASE 3
          </span>
        </div>

        {/* Configuration Tabs */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
          {['storage', 'ram', 'color'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveVariantTab(tab)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                activeVariantTab === tab
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border hover:border-purple-300'
              }`}
            >
              {tab === 'storage' && '💾 Storage'}
              {tab === 'ram' && '⚡ RAM'}
              {tab === 'color' && '🎨 Color'}
            </button>
          ))}
        </div>

        {/* Storage Configuration */}
        {activeVariantTab === 'storage' && (
          <div className="space-y-3">
            {/* Storage Quiz */}
            <div className="bg-white rounded-lg p-3">
              <button
                onClick={() => setShowStorageQuiz(!showStorageQuiz)}
                className="w-full flex items-center justify-between mb-2"
              >
                <span className="text-sm font-semibold text-gray-900">❓ How much storage do you need?</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showStorageQuiz ? 'rotate-180' : ''}`} />
              </button>

              {showStorageQuiz && (
                <div className="space-y-2 mt-3">
                  <p className="text-xs text-gray-600 mb-2">Select your usage pattern:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {storageScenarios.map((scenario) => (
                      <button
                        key={scenario.usage}
                        onClick={() => {
                          setStorageUsage(scenario.usage);
                          setSelectedStorage(scenario.recommendation);
                        }}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          storageUsage === scenario.usage
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        <div className="text-2xl mb-1">{scenario.icon}</div>
                        <p className="text-xs font-semibold text-gray-900">{scenario.label}</p>
                        <p className="text-xs text-gray-600 mt-1">{scenario.description}</p>
                        <p className="text-xs font-bold text-purple-600 mt-2">→ {scenario.recommendation}GB</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Visual Storage Calculator */}
            <div className="bg-white rounded-lg p-3">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">What fits in {selectedStorage}GB?</h4>
              <div className="space-y-2">
                {[
                  { type: 'Photos', amount: Math.floor(selectedStorage * 200), unit: 'photos', icon: '📸' },
                  { type: '4K Videos', amount: Math.floor(selectedStorage / 2), unit: 'mins', icon: '🎥' },
                  { type: 'Apps/Games', amount: Math.floor(selectedStorage / 2), unit: 'apps', icon: '📱' },
                  { type: 'Music', amount: Math.floor(selectedStorage * 16), unit: 'songs', icon: '🎵' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-xs text-gray-700">{item.icon} {item.type}</span>
                    <span className="text-xs font-bold text-purple-600">~{item.amount.toLocaleString()} {item.unit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage Options with Value Analysis */}
            <div className="space-y-2">
              {storageOptions.map((option) => {
                const isSelected = selectedStorage === option.size;
                const upgrade = selectedStorage < option.size ? calculateUpgradeValue(selectedStorage, option.size) : null;

                return (
                  <div
                    key={option.size}
                    className={`bg-white rounded-lg p-3 border-2 cursor-pointer transition-all ${
                      isSelected ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => setSelectedStorage(option.size)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-900">{option.size}GB</span>
                          {option.popular && (
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{option.recommendation}</p>
                      </div>
                      <span className="text-sm font-bold text-gray-900">₹{option.price.toLocaleString()}</span>
                    </div>

                    {upgrade && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Upgrade cost:</span>
                          <span className="text-xs font-bold text-orange-600">+₹{upgrade.priceDiff.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-600">Value:</span>
                          <span className="text-xs font-medium text-gray-700">₹{upgrade.pricePerGB}/GB extra</span>
                        </div>
                        <div className={`mt-2 text-xs font-medium ${
                          upgrade.pricePerGB < 100 ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {upgrade.pricePerGB < 100 ? '✓ Great value upgrade!' : '→ Consider if you need the space'}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* RAM Configuration */}
        {activeVariantTab === 'ram' && (
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 mb-3">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">8GB vs 16GB - Which do you need?</h4>
              <p className="text-xs text-gray-600">
                More RAM means better multitasking and future-proofing. Here's what you need to know:
              </p>
            </div>

            {ramOptions.map((option) => {
              const isSelected = selectedRAM === option.size;
              const totalPrice = storageOptions.find(s => s.size === selectedStorage).price + option.price;

              return (
                <div
                  key={option.size}
                  className={`bg-white rounded-lg p-3 border-2 cursor-pointer transition-all ${
                    isSelected ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => setSelectedRAM(option.size)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <span className="text-sm font-bold text-gray-900">{option.size}GB RAM</span>
                      <p className="text-xs text-gray-600 mt-1">{option.recommendation}</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-blue-600">
                        <Shield className="w-3 h-3" />
                        <span>{option.futureProof}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900">₹{totalPrice.toLocaleString()}</span>
                      {option.price > 0 && (
                        <p className="text-xs text-orange-600 font-medium mt-1">+₹{option.price.toLocaleString()}</p>
                      )}
                    </div>
                  </div>

                  {/* Use Case Recommendations */}
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Best for:</p>
                    <div className="space-y-1">
                      {option.size === 8 ? (
                        <>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>Social media & browsing</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>Photography & casual gaming</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>Streaming & video calls</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>Intensive gaming & multitasking</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>Video editing & ProRes recording</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>Professional apps & future-proofing</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Color Selection */}
        {activeVariantTab === 'color' && (
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 mb-3">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Choose Your Finish</h4>
              <p className="text-xs text-gray-600">
                All colors feature premium titanium construction with textured matte glass back.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {colorOptions.map((color) => {
                const isSelected = selectedColor === color.name;

                return (
                  <div
                    key={color.name}
                    className={`bg-white rounded-lg p-3 border-2 cursor-pointer transition-all ${
                      isSelected ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="w-16 h-16 rounded-full mb-2 border-4 border-white shadow-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-semibold text-gray-900 text-center">{color.name}</span>
                      {color.popular && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium mt-2">
                          Most Popular
                        </span>
                      )}
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-2 border-t border-gray-200">
                        <p className="text-xs text-gray-600 text-center">
                          <CheckCircle className="w-3 h-3 inline text-green-600 mr-1" />
                          Selected
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Practical Considerations */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-200">
              <h4 className="text-xs font-semibold text-gray-900 mb-2">💡 Color Tips</h4>
              <div className="space-y-1">
                <div className="flex items-start gap-2 text-xs text-gray-700">
                  <span>•</span>
                  <span>Lighter colors show fingerprints less</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-700">
                  <span>•</span>
                  <span>Natural Titanium has the best resale value</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-700">
                  <span>•</span>
                  <span>All colors look great with most cases</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Variant Comparison */}
        <div className="mt-3 bg-white rounded-lg p-3">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Your Configuration Summary</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-xs text-gray-600">Storage</span>
              <span className="text-xs font-bold text-gray-900">{selectedStorage}GB</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-xs text-gray-600">RAM</span>
              <span className="text-xs font-bold text-gray-900">{selectedRAM}GB</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-xs text-gray-600">Color</span>
              <span className="text-xs font-bold text-gray-900">{selectedColor}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-purple-50 rounded border border-purple-200">
              <span className="text-sm font-bold text-gray-900">Total Price</span>
              <span className="text-lg font-bold text-purple-600">
                ₹{(storageOptions.find(s => s.size === selectedStorage).price + ramOptions.find(r => r.size === selectedRAM).price).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Compatible Accessories */}
        <div className="mt-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-3 border border-yellow-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Package className="w-4 h-4 text-orange-600" />
            Recommended Accessories
          </h4>
          <div className="space-y-2">
            {[
              { name: 'MagSafe Clear Case', price: 4900, bought: '89%', savings: 500 },
              { name: '20W USB-C Adapter', price: 1900, bought: '76%', savings: 200 },
              { name: 'MagSafe Charger', price: 3900, bought: '64%', savings: 300 }
            ].map((accessory, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-white rounded border border-orange-200">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-900">{accessory.name}</p>
                  <p className="text-xs text-gray-600">{accessory.bought} bought together</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900">₹{accessory.price.toLocaleString()}</p>
                  <p className="text-xs text-green-600">Save ₹{accessory.savings}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg text-xs font-medium hover:shadow-lg transition-shadow">
            Bundle & Save ₹1,000
          </button>
        </div>
      </section>

      {/* PHASE 3 FEATURE: Budget Shopping Assistant */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-xl p-4 mx-4 mb-3 border-2 border-emerald-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            Budget Shopping Assistant
          </h3>
          <span className="text-xs bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full font-bold">
            PHASE 3
          </span>
        </div>

        {/* Budget Input */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <label className="text-sm font-semibold text-gray-900 mb-2 block">What's your budget?</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={budgetInput}
              onChange={(e) => setBudgetInput(e.target.value)}
              placeholder="Enter amount"
              className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg text-sm focus:border-emerald-500 focus:outline-none"
            />
            <button
              onClick={() => {}}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700"
            >
              Find
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            {[15000, 30000, 60000, 100000].map((amount) => (
              <button
                key={amount}
                onClick={() => setBudgetInput(amount)}
                className="px-3 py-1 bg-gray-100 hover:bg-emerald-100 hover:text-emerald-700 rounded text-xs font-medium transition-colors"
              >
                ₹{amount.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Value Proposition Visualizer */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-3 mb-3 text-white">
          <h4 className="text-sm font-bold mb-2">💎 For ₹2,000 more, you get:</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>2x storage (128GB → 256GB)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Better camera quality</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Faster processor (15% boost)</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-white/30">
            <p className="text-xs opacity-90">Worth the upgrade? 87% of users say yes!</p>
          </div>
        </div>

        {/* Price-Performance Chart */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Price vs Performance</h4>
          <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3">
            {/* Scatter plot simulation */}
            <div className="relative h-full">
              {[
                { x: 20, y: 25, label: '₹15K', size: 'small', color: 'bg-blue-500' },
                { x: 35, y: 50, label: '₹30K', size: 'medium', color: 'bg-green-500' },
                { x: 55, y: 75, label: '₹60K', size: 'large', color: 'bg-yellow-500', sweetSpot: true },
                { x: 80, y: 85, label: '₹100K+', size: 'large', color: 'bg-purple-500' }
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="absolute"
                  style={{ left: `${point.x}%`, bottom: `${point.y}%` }}
                >
                  <div className={`${point.color} rounded-full ${
                    point.size === 'small' ? 'w-6 h-6' : point.size === 'medium' ? 'w-8 h-8' : 'w-10 h-10'
                  } flex items-center justify-center shadow-lg`}>
                    {point.sweetSpot && (
                      <Star className="w-4 h-4 text-white fill-white" />
                    )}
                  </div>
                  <span className="absolute top-full mt-1 text-xs font-medium whitespace-nowrap transform -translate-x-1/3">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 text-xs text-gray-500">Low Price</div>
            <div className="absolute bottom-0 right-0 text-xs text-gray-500">High Price</div>
            <div className="absolute top-0 left-0 text-xs text-gray-500 -rotate-90 origin-top-left transform translate-y-full">
              Performance
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-2 flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span>Sweet spot: Best performance per rupee</span>
          </p>
        </div>

        {/* Category Budget Guides */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900">Best Phones by Budget</h4>
          {budgetPhoneRanges.map((range, idx) => (
            <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
              <button
                className="w-full flex items-center justify-between mb-2"
                onClick={() => {}}
              >
                <span className="text-sm font-semibold text-gray-900">{range.range}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              <div className="space-y-2">
                {range.phones.map((phone, pIdx) => (
                  <div key={pIdx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-900">{phone.name}</p>
                      <p className="text-xs text-emerald-600 font-medium">{phone.highlight}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900">₹{phone.price.toLocaleString()}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{phone.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHASE 3 FEATURE: Warranty & Service Transparency */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-4 mx-4 mb-3 border-2 border-blue-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            Warranty & Service Info
          </h3>
          <span className="text-xs bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full font-bold">
            PHASE 3
          </span>
        </div>

        {/* Warranty Details */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">Standard Warranty</h4>
              <p className="text-lg font-bold text-blue-600 mt-1">1 Year</p>
            </div>
            <button
              onClick={() => setShowWarrantyDetails(!showWarrantyDetails)}
              className="text-xs text-blue-600 font-medium flex items-center gap-1"
            >
              {showWarrantyDetails ? 'Hide' : 'Show'} Details
              <ChevronDown className={`w-3 h-3 transition-transform ${showWarrantyDetails ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showWarrantyDetails && (
            <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">What's Covered:</p>
                <div className="space-y-1">
                  {[
                    'Manufacturing defects',
                    'Hardware malfunctions',
                    'Battery issues (if capacity drops below 80%)',
                    'Display defects'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Not Covered:</p>
                <div className="space-y-1">
                  {[
                    'Accidental damage (drops, cracks)',
                    'Water damage (not covered under IP68)',
                    'Cosmetic damage (scratches, dents)',
                    'Software issues (covered under updates)'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <AlertCircle className="w-3 h-3 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Extended Warranty Options */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Extended Warranty Options</h4>
          <div className="space-y-2">
            {[
              { name: 'AppleCare+', duration: '2 years', price: 22900, coverage: 'Accidental damage (2 incidents/year)', deductible: '₹2,900/incident' },
              { name: 'Croma Care', duration: '2 years', price: 15999, coverage: 'Extended warranty only', deductible: 'No accidental coverage' }
            ].map((plan, idx) => (
              <div key={idx} className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">{plan.name}</p>
                    <p className="text-xs text-gray-600">{plan.duration} coverage</p>
                  </div>
                  <span className="text-sm font-bold text-gray-900">₹{plan.price.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-700 mb-1">{plan.coverage}</p>
                <p className="text-xs text-gray-600">{plan.deductible}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Center Locator */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            Nearby Service Centers
          </h4>
          <div className="space-y-2">
            {[
              { name: 'Apple Authorized Service Center', location: 'Koramangala, 2.3 km', rating: 4.6, reviews: 342, time: '2-3 days' },
              { name: 'iCare Service Center', location: 'Indiranagar, 3.8 km', rating: 4.4, reviews: 189, time: '1-2 days' }
            ].map((center, idx) => (
              <div key={idx} className="p-2 bg-gray-50 rounded border border-gray-200">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-900">{center.name}</p>
                    <p className="text-xs text-gray-600">{center.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{center.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{center.reviews} reviews</span>
                  <span className="text-xs text-blue-600 font-medium">Avg repair: {center.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg text-xs font-medium hover:bg-blue-700">
            View All Centers on Map
          </button>
        </div>

        {/* Claim Process Guide */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 mb-3 border border-green-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-green-600" />
            How to File a Warranty Claim
          </h4>
          <div className="space-y-2">
            {[
              { step: 1, title: 'Contact Support', description: 'Call 1800-xxx-xxxx or use Apple Support app', docs: 'N/A' },
              { step: 2, title: 'Diagnosis', description: 'Remote or in-person diagnosis', docs: 'N/A' },
              { step: 3, title: 'Submit Documents', description: 'Upload proof of purchase, photos if needed', docs: 'Invoice, IMEI' },
              { step: 4, title: 'Service', description: 'Drop-off or mail-in service', docs: 'Service ticket' }
            ].map((step) => (
              <div key={step.step} className="flex gap-2 p-2 bg-white rounded">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {step.step}
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-900">{step.title}</p>
                  <p className="text-xs text-gray-600">{step.description}</p>
                  {step.docs !== 'N/A' && (
                    <p className="text-xs text-blue-600 mt-1">Required: {step.docs}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 p-2 bg-white rounded border border-green-200">
            <p className="text-xs font-semibold text-gray-900">Expected Timeline:</p>
            <p className="text-xs text-gray-600">Most repairs: 3-5 business days • Express service available</p>
          </div>
        </div>

        {/* Brand Reliability Score */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-3 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-8 h-8" />
            <div>
              <p className="text-sm font-bold">Brand Reliability Score</p>
              <p className="text-2xl font-bold">9.2/10</p>
            </div>
          </div>
          <div className="space-y-2 mt-3">
            <div className="flex items-center justify-between text-xs">
              <span>After-Sales Service</span>
              <div className="flex items-center gap-1">
                <div className="w-16 h-1.5 bg-white/30 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-white rounded-full"></div>
                </div>
                <span className="font-bold">9.2</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Customer Satisfaction</span>
              <div className="flex items-center gap-1">
                <div className="w-16 h-1.5 bg-white/30 rounded-full overflow-hidden">
                  <div className="w-[94%] h-full bg-white rounded-full"></div>
                </div>
                <span className="font-bold">9.4</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Repair Quality</span>
              <div className="flex items-center gap-1">
                <div className="w-16 h-1.5 bg-white/30 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-white rounded-full"></div>
                </div>
                <span className="font-bold">9.0</span>
              </div>
            </div>
          </div>
          <p className="text-xs opacity-90 mt-3">Based on 15,000+ customer reviews and service experiences</p>
        </div>
      </section>

      {/* PHASE 1 FEATURE: Real-Time Price Intelligence Engine */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mx-4 mb-3 border border-blue-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-blue-600" />
            Live Price Intelligence
          </h3>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">PHASE 1</span>
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
                  className={`text-xs px-2 py-1 rounded ${priceHistory === period ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

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
            <div className="text-xs">
              <span className="text-gray-500">Lowest: </span>
              <span className="font-semibold text-green-600">₹{lowestPrice.toLocaleString()}</span>
            </div>
            <div className="text-xs">
              <span className="text-gray-500">Drop: </span>
              <span className="font-semibold text-blue-600">{dropPercentage}%</span>
            </div>
            <div className="text-xs">
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
              <p className="text-xs opacity-90">Amazon offers the lowest price at ₹1,34,999 - Save ₹4,901 compared to MRP. Deal expires in 6 hours.</p>
            </div>
          </div>
        </div>

        {/* Multi-Platform Price Comparison */}
        <div className="space-y-2">
          {priceComparisons.map((platform, idx) => (
            <div key={idx} className={`${platform.color} border rounded-lg p-3 relative`}>
              {platform.bestSeller && (
                <span className="absolute -top-2 left-3 bg-yellow-400 text-yellow-900 text-xs px-2 py-0.5 rounded-full font-semibold">
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
                        <span className="text-xs text-gray-700">{platform.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({platform.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-lg">₹{platform.price.toLocaleString()}</p>
                  {platform.discount > 0 && (
                    <span className="text-xs text-green-600 font-medium">{platform.discount}% off</span>
                  )}
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600">{platform.delivery}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHASE 1 FEATURE: Comprehensive Technical Specifications Hub */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Cpu className="w-5 h-5 text-gray-700" />
            Complete Technical Specs
          </h3>
          <span className="text-xs text-gray-500">Tap specs for details</span>
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
                        <span className="text-xs text-gray-600 font-medium">{spec.name}</span>
                        <div className="flex items-center gap-1">
                          <span className={`text-sm font-semibold ${spec.highlight ? 'text-blue-700' : 'text-gray-900'}`}>
                            {spec.value}
                          </span>
                          <div className="group relative">
                            <Info className="w-3 h-3 text-gray-400 cursor-help" />
                            <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-gray-900 text-white text-xs p-2 rounded shadow-lg z-10">
                              {spec.tooltip}
                            </div>
                          </div>
                        </div>
                      </div>

                      {spec.visualBar && (
                        <div className="mt-2">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              style={{ width: `${(spec.visualBar / 5000) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{spec.tooltip}</p>
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
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">vs iPhone 14 Pro</span>
              <span className="font-semibold text-green-600">15% faster • 2 hrs more battery</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">vs Samsung S24 Ultra</span>
              <span className="font-semibold text-blue-600">Similar performance • Better ecosystem</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">vs Google Pixel 8 Pro</span>
              <span className="font-semibold text-orange-600">Better processor • Pixel wins camera</span>
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
                    <span className="text-xs text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{product.match} match</span>
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

export default ElectronicsProduct_Phase3;
