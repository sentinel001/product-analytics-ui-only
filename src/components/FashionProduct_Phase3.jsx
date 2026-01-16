import React, { useState } from 'react';
import { Star, TrendingDown, Ruler, AlertCircle, ChevronRight, CheckCircle, Info, Shirt, Wind, Droplets, Shield, Package, Users, Calendar, Tag, Briefcase, PartyPopper, Mountain, Sun, ThermometerSun, CloudRain, Sparkles, Award, BadgeCheck, MapPin, Factory, FileCheck, TrendingUp, Repeat } from 'lucide-react';

const FashionProduct_Phase3 = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [userMeasurements, setUserMeasurements] = useState({
    height: '175',
    weight: '70',
    chest: '38',
    waist: '32'
  });
  const [showSizePredictor, setShowSizePredictor] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('casual');
  const [showCareGuide, setShowCareGuide] = useState(false);

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

  // PHASE 3: Occasion & Activity Suitability Data
  const occasions = [
    {
      id: 'formal',
      name: 'Formal Wear',
      icon: '👔',
      color: 'from-gray-700 to-slate-800',
      suitability: {
        comfort: 3,
        warmth: 2,
        formalRating: 2,
        versatility: 2
      }
    },
    {
      id: 'casual',
      name: 'Casual Daily Wear',
      icon: '👟',
      color: 'from-blue-500 to-cyan-500',
      suitability: {
        comfort: 5,
        warmth: 3,
        formalRating: 2,
        versatility: 5
      }
    },
    {
      id: 'sports',
      name: 'Running/Sports',
      icon: '🏃',
      color: 'from-orange-500 to-red-500',
      suitability: {
        comfort: 5,
        warmth: 3,
        formalRating: 1,
        versatility: 3
      }
    },
    {
      id: 'party',
      name: 'Party/Events',
      icon: '🎉',
      color: 'from-purple-500 to-pink-500',
      suitability: {
        comfort: 4,
        warmth: 3,
        formalRating: 3,
        versatility: 4
      }
    },
    {
      id: 'winter',
      name: 'Winter Wear',
      icon: '🏔️',
      color: 'from-cyan-600 to-blue-700',
      suitability: {
        comfort: 3,
        warmth: 2,
        formalRating: 2,
        versatility: 3
      }
    },
    {
      id: 'summer',
      name: 'Summer Collection',
      icon: '☀️',
      color: 'from-yellow-400 to-orange-400',
      suitability: {
        comfort: 5,
        warmth: 1,
        formalRating: 2,
        versatility: 5
      }
    }
  ];

  const weatherSuitability = {
    bestFor: ['Spring', 'Summer', 'Fall'],
    temperature: '15-30°C',
    breathability: 5,
    waterResistance: 1,
    uvProtection: 3
  };

  const styleGuide = {
    pairsWellWith: [
      { item: 'Blue Denim Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&h=150&fit=crop' },
      { item: 'Khaki Chinos', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=150&h=150&fit=crop' },
      { item: 'White Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop' },
      { item: 'Casual Jacket', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=150&h=150&fit=crop' }
    ],
    outfitIdeas: [
      {
        name: 'Casual Weekend',
        items: ['This T-Shirt', 'Light Blue Jeans', 'White Sneakers'],
        image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=200&h=250&fit=crop'
      },
      {
        name: 'Smart Casual',
        items: ['This T-Shirt', 'Beige Chinos', 'Loafers', 'Watch'],
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&h=250&fit=crop'
      }
    ]
  };

  // PHASE 3: Product Care & Maintenance
  const careInstructions = [
    {
      icon: '🌊',
      label: 'Washing',
      instruction: 'Machine wash cold (30°C)',
      details: 'Use mild detergent, wash with similar colors, turn inside out'
    },
    {
      icon: '🌀',
      label: 'Drying',
      instruction: 'Tumble dry low or hang dry',
      details: 'Avoid high heat to prevent shrinkage, reshape while damp'
    },
    {
      icon: '🔥',
      label: 'Ironing',
      instruction: 'Iron on low heat (110°C)',
      details: 'Iron inside out, avoid direct heat on prints if any'
    },
    {
      icon: '❌',
      label: 'Dry Clean',
      instruction: 'Not required',
      details: 'Machine washable - dry cleaning unnecessary'
    }
  ];

  const durabilityInfo = {
    expectedLifetime: '3-5 years',
    shrinkage: 'Minimal (2-3%) after first wash',
    colorFastness: 'Grade 4-5 (Excellent)',
    pillingTendency: 'Low',
    maintenanceTips: [
      'Wash inside out to preserve color',
      'Avoid fabric softeners (reduces breathability)',
      'Store folded to prevent stretching',
      'Remove stains immediately for best results'
    ]
  };

  const stainRemovalGuide = [
    { stain: 'Coffee/Tea', solution: 'Cold water + mild detergent, soak for 15 mins' },
    { stain: 'Oil/Grease', solution: 'Apply dish soap, let sit, then wash normally' },
    { stain: 'Sweat', solution: 'Vinegar solution (1:4) before washing' },
    { stain: 'Ink', solution: 'Rubbing alcohol on stain, blot, then wash' }
  ];

  // PHASE 3: Brand Authenticity & Trust
  const brandInfo = {
    story: 'Premium organic cotton brand committed to sustainable fashion since 2015',
    manufacturing: 'Made in India',
    heritage: '8+ years of quality craftsmanship',
    partnership: 'Official Brand Partner',
    authorizedRetailer: true
  };

  const trustIndicators = {
    unitsSold: 15420,
    repeatBuyerRate: 73,
    trending: true,
    bestseller: true,
    verifiedPurchases: 2123,
    returnRate: 8
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  const selectedOccasionData = occasions.find(o => o.id === selectedOccasion);

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

      {/* Phase Badge */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold">Phase 3: Suitability & Trust</div>
            <div className="text-xs opacity-90">Months 5-6 • All Features Active</div>
          </div>
          <Award className="w-8 h-8 opacity-90" />
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
            <div className="flex gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span className="text-xs font-medium text-green-700">Sustainable</span>
              </div>
              <div className="inline-flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                <Shield className="w-3 h-3 text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Premium Quality</span>
              </div>
              <div className="inline-flex items-center gap-1 bg-purple-50 px-2 py-1 rounded">
                <BadgeCheck className="w-3 h-3 text-purple-600" />
                <span className="text-xs font-medium text-purple-700">100% Original</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PHASE 3 FEATURE: Brand Authenticity & Trust Hub */}
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-xl p-4 mx-4 mb-3 border-2 border-purple-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-purple-600" />
            Authenticity & Trust
          </h3>
          <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-bold">
            PHASE 3
          </span>
        </div>

        {/* Authenticity Guarantee */}
        <div className="bg-white rounded-lg p-3 mb-3 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <BadgeCheck className="w-5 h-5 text-green-600" />
            <span className="font-bold text-sm text-green-700">100% Original Guarantee</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-green-50 rounded p-2">
              <p className="text-xs text-gray-600 mb-1">Brand Authorization</p>
              <p className="text-xs font-semibold text-gray-900 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-600" /> Certified Partner
              </p>
            </div>
            <div className="bg-green-50 rounded p-2">
              <p className="text-xs text-gray-600 mb-1">Serial Number</p>
              <p className="text-xs font-semibold text-gray-900 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-600" /> Verifiable
              </p>
            </div>
          </div>
          <div className="mt-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded p-2 text-center">
            <p className="text-xs font-semibold">Money-Back Guarantee if Product is Not Original</p>
          </div>
        </div>

        {/* Brand Information */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <p className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Brand Story
          </p>
          <p className="text-xs text-gray-700 mb-2">{brandInfo.story}</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 bg-purple-50 rounded p-2">
              <MapPin className="w-4 h-4 text-purple-600" />
              <div>
                <p className="text-xs text-gray-600">Manufacturing</p>
                <p className="text-xs font-semibold text-gray-900">{brandInfo.manufacturing}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 rounded p-2">
              <Calendar className="w-4 h-4 text-purple-600" />
              <div>
                <p className="text-xs text-gray-600">Heritage</p>
                <p className="text-xs font-semibold text-gray-900">{brandInfo.heritage}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-lg p-3">
          <p className="font-semibold text-sm text-gray-900 mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            Trust Indicators
          </p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-blue-50 rounded p-2 text-center">
              <p className="text-xl font-bold text-blue-700">{trustIndicators.unitsSold.toLocaleString()}</p>
              <p className="text-xs text-gray-600">Units Sold</p>
            </div>
            <div className="bg-green-50 rounded p-2 text-center">
              <p className="text-xl font-bold text-green-700">{trustIndicators.repeatBuyerRate}%</p>
              <p className="text-xs text-gray-600">Repeat Buyers</p>
            </div>
          </div>
          <div className="flex gap-2">
            {trustIndicators.trending && (
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Trending
              </span>
            )}
            {trustIndicators.bestseller && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                <Award className="w-3 h-3" /> Bestseller
              </span>
            )}
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> {trustIndicators.verifiedPurchases} Verified
            </span>
          </div>
        </div>
      </section>

      {/* PHASE 3 FEATURE: Occasion & Activity Suitability Matcher */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-xl p-4 mx-4 mb-3 border-2 border-cyan-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Tag className="w-5 h-5 text-cyan-600" />
            Occasion & Activity Suitability
          </h3>
          <span className="text-xs bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full font-bold">
            PHASE 3
          </span>
        </div>

        {/* Occasion Tags */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">Shop by Occasion:</p>
          <div className="grid grid-cols-3 gap-2">
            {occasions.map((occasion) => (
              <button
                key={occasion.id}
                onClick={() => setSelectedOccasion(occasion.id)}
                className={`p-2 rounded-lg border-2 transition-all ${
                  selectedOccasion === occasion.id
                    ? 'border-cyan-600 bg-cyan-50'
                    : 'border-gray-200 bg-white hover:border-cyan-300'
                }`}
              >
                <div className="text-2xl mb-1">{occasion.icon}</div>
                <p className="text-xs font-medium text-gray-900 leading-tight">{occasion.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Activity Suitability Ratings */}
        {selectedOccasionData && (
          <div className="bg-white rounded-lg p-3 mb-3">
            <p className="text-sm font-semibold text-gray-900 mb-3">
              Suitability for {selectedOccasionData.name}
            </p>
            <div className="space-y-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-700">Comfort</span>
                  <div className="flex gap-0.5">{renderStars(selectedOccasionData.suitability.comfort)}</div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-700">Warmth</span>
                  <div className="flex gap-0.5">{renderStars(selectedOccasionData.suitability.warmth)}</div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-700">Formal Rating</span>
                  <div className="flex gap-0.5">{renderStars(selectedOccasionData.suitability.formalRating)}</div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-700">Versatility</span>
                  <div className="flex gap-0.5">{renderStars(selectedOccasionData.suitability.versatility)}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Weather & Season Appropriateness */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <ThermometerSun className="w-4 h-4 text-orange-600" />
            Weather & Season
          </p>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {weatherSuitability.bestFor.map((season, idx) => (
              <div key={idx} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded p-2 text-center border border-yellow-200">
                <p className="text-xs font-semibold text-gray-900">{season}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded p-2 mb-2">
            <p className="text-xs text-gray-600 mb-1">Suitable for:</p>
            <p className="text-sm font-bold text-blue-700">{weatherSuitability.temperature} weather</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <p className="text-xs text-gray-600 mb-1">Breathability</p>
              <div className="flex gap-0.5 justify-center">{renderStars(weatherSuitability.breathability)}</div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600 mb-1">Water Resist</p>
              <div className="flex gap-0.5 justify-center">{renderStars(weatherSuitability.waterResistance)}</div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600 mb-1">UV Protection</p>
              <div className="flex gap-0.5 justify-center">{renderStars(weatherSuitability.uvProtection)}</div>
            </div>
          </div>
        </div>

        {/* Style Guide & Outfit Ideas */}
        <div className="bg-white rounded-lg p-3">
          <p className="text-sm font-semibold text-gray-900 mb-2">How to Style This?</p>

          {/* Pairs Well With */}
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-700 mb-2">Pairs well with:</p>
            <div className="grid grid-cols-4 gap-2">
              {styleGuide.pairsWellWith.map((item, idx) => (
                <div key={idx} className="text-center">
                  <img src={item.image} alt={item.item} className="w-full h-16 object-cover rounded mb-1" />
                  <p className="text-xs text-gray-700 leading-tight">{item.item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Outfit Suggestions */}
          <div>
            <p className="text-xs font-semibold text-gray-700 mb-2">Complete Outfit Ideas:</p>
            <div className="grid grid-cols-2 gap-2">
              {styleGuide.outfitIdeas.map((outfit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg overflow-hidden border border-cyan-200">
                  <img src={outfit.image} alt={outfit.name} className="w-full h-24 object-cover" />
                  <div className="p-2">
                    <p className="text-xs font-semibold text-gray-900 mb-1">{outfit.name}</p>
                    <ul className="space-y-0.5">
                      {outfit.items.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs text-gray-600 flex items-center gap-1">
                          <CheckCircle className="w-2 h-2 text-cyan-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 3 FEATURE: Product Care & Maintenance Guide */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 rounded-xl p-4 mx-4 mb-3 border-2 border-teal-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-600" />
            Product Care & Maintenance
          </h3>
          <span className="text-xs bg-gradient-to-r from-teal-600 to-green-600 text-white px-3 py-1 rounded-full font-bold">
            PHASE 3
          </span>
        </div>

        {/* Visual Care Instructions */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <p className="text-sm font-semibold text-gray-900 mb-3">Care Instructions</p>
          <div className="space-y-2">
            {careInstructions.map((care, idx) => (
              <div key={idx} className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-3 border border-teal-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{care.icon}</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-900 mb-1">{care.label}</p>
                    <p className="text-xs font-medium text-teal-700 mb-1">{care.instruction}</p>
                    <p className="text-xs text-gray-600">{care.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Durability Information */}
        <div className="bg-white rounded-lg p-3 mb-3">
          <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-green-600" />
            Durability & Lifespan
          </p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-green-50 rounded p-2">
              <p className="text-xs text-gray-600 mb-1">Expected Lifetime</p>
              <p className="text-sm font-bold text-green-700">{durabilityInfo.expectedLifetime}</p>
              <p className="text-xs text-gray-600 mt-1">with proper care</p>
            </div>
            <div className="bg-blue-50 rounded p-2">
              <p className="text-xs text-gray-600 mb-1">Color Fastness</p>
              <p className="text-sm font-bold text-blue-700">{durabilityInfo.colorFastness}</p>
              <p className="text-xs text-gray-600 mt-1">won't fade easily</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-yellow-50 rounded p-2">
              <p className="text-xs font-semibold text-gray-900 mb-1">Will it shrink?</p>
              <p className="text-xs text-gray-700">{durabilityInfo.shrinkage}</p>
            </div>
            <div className="bg-purple-50 rounded p-2">
              <p className="text-xs font-semibold text-gray-900 mb-1">Pilling Tendency</p>
              <p className="text-xs text-gray-700">{durabilityInfo.pillingTendency}</p>
            </div>
          </div>
        </div>

        {/* Maintenance Tips */}
        <button
          onClick={() => setShowCareGuide(!showCareGuide)}
          className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg p-3 font-semibold text-sm flex items-center justify-between hover:from-teal-700 hover:to-green-700 transition-all mb-3"
        >
          <span>Maintenance Tips & Stain Removal Guide</span>
          <ChevronRight className={`w-5 h-5 transition-transform ${showCareGuide ? 'rotate-90' : ''}`} />
        </button>

        {showCareGuide && (
          <div className="space-y-3">
            {/* Maintenance Tips */}
            <div className="bg-white rounded-lg p-3">
              <p className="text-xs font-semibold text-gray-900 mb-2">Maintenance Tips:</p>
              <div className="space-y-1">
                {durabilityInfo.maintenanceTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle className="w-3 h-3 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stain Removal Guide */}
            <div className="bg-white rounded-lg p-3">
              <p className="text-xs font-semibold text-gray-900 mb-2">How to Remove Common Stains:</p>
              <div className="space-y-2">
                {stainRemovalGuide.map((guide, idx) => (
                  <div key={idx} className="bg-teal-50 rounded p-2 border border-teal-200">
                    <p className="text-xs font-semibold text-gray-900 mb-1">{guide.stain}</p>
                    <p className="text-xs text-gray-700">{guide.solution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty Info */}
            <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4" />
                <p className="text-xs font-bold">Quality Warranty</p>
              </div>
              <p className="text-xs">
                6-month warranty on manufacturing defects. If you experience any quality issues like excessive shrinkage, color bleeding, or stitching problems, we'll replace it free of charge.
              </p>
            </div>
          </div>
        )}
      </section>

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

      {/* Price Comparison */}
      <section className="bg-white rounded-xl p-4 mx-4 mb-3">
        <h3 className="font-bold text-gray-900 text-base mb-3">Best Price</h3>
        <div className="space-y-2">
          {[
            { platform: 'Myntra', price: 1299, rating: 4.7, reviews: '2,123', logo: 'https://logo.clearbit.com/myntra.com', color: 'bg-pink-50 border-pink-200' },
            { platform: 'Ajio', price: 1399, rating: 4.6, reviews: '847', logo: 'https://logo.clearbit.com/ajio.com', color: 'bg-orange-50 border-orange-200' },
            { platform: 'Amazon Fashion', price: 1499, rating: 4.5, reviews: '1,534', logo: 'https://logo.clearbit.com/amazon.in', color: 'bg-blue-50 border-blue-200' }
          ].map((platform, idx) => (
            <div key={idx} className={`${platform.color} border rounded-lg p-3`}>
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

export default FashionProduct_Phase3;
