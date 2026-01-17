import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Monitor, ShoppingCart, CheckCircle, Zap, Info } from 'lucide-react';

const ProgrammerSetup = () => {
  const navigate = useNavigate();

  const bundleInfo = {
    title: 'High-End Programmer Workspace',
    totalProducts: 6,
    totalPrice: 87499,
    savingsWithBundle: 12500
  };

  const userPersona = {
    type: 'High-End Programmer',
    detectedFrom: ['Previous purchases: Mechanical keyboards', 'Searches: Ultrawide monitors', 'Order history: Premium tech accessories'],
    needs: ['Ergonomic setup', 'High performance', 'Multi-monitor support']
  };

  const products = [
    {
      id: 1,
      name: 'LG 34" UltraWide Curved Monitor',
      brand: 'LG',
      category: 'Monitor',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&q=80',
      price: 34999,
      aiScore: 94,
      rating: 4.6,
      reviews: 2341,
      specs: ['3440x1440 WQHD', '144Hz', 'IPS Panel', 'HDR10'],
      whyThis: 'Perfect for coding - see more code without switching windows'
    },
    {
      id: 2,
      name: 'Keychron K8 Pro Mechanical Keyboard',
      brand: 'Keychron',
      category: 'Keyboard',
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=300&q=80',
      price: 8999,
      aiScore: 96,
      rating: 4.8,
      reviews: 5432,
      specs: ['Hot-swappable', 'RGB Backlit', 'Gateron Brown', 'Wireless'],
      whyThis: 'Tactile feedback for precise typing, wireless for clean desk'
    },
    {
      id: 3,
      name: 'Logitech MX Master 3S',
      brand: 'Logitech',
      category: 'Mouse',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&q=80',
      price: 8999,
      aiScore: 95,
      rating: 4.7,
      reviews: 8765,
      specs: ['8000 DPI', 'Multi-device', 'Ergonomic', 'USB-C Charging'],
      whyThis: 'Precision control and ergonomic design reduces wrist strain'
    },
    {
      id: 4,
      name: 'Herman Miller Aeron Mesh Office Chair',
      brand: 'Herman Miller',
      category: 'Chair',
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&q=80',
      price: 89999,
      aiScore: 98,
      rating: 4.9,
      reviews: 1234,
      specs: ['Lumbar Support', 'Adjustable Arms', '12-year Warranty', 'Breathable Mesh'],
      whyThis: 'Industry standard for programmers - prevents back pain during long sessions'
    },
    {
      id: 5,
      name: 'BenQ ScreenBar Plus Monitor Light',
      brand: 'BenQ',
      category: 'Lighting',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&q=80',
      price: 11999,
      aiScore: 92,
      rating: 4.5,
      reviews: 987,
      specs: ['Auto-dimming', 'USB Powered', 'No Screen Glare', 'Touch Control'],
      whyThis: 'Reduces eye strain during late-night coding sessions'
    },
    {
      id: 6,
      name: 'CalDigit TS3 Plus Thunderbolt Dock',
      brand: 'CalDigit',
      category: 'Dock',
      image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=300&q=80',
      price: 25999,
      aiScore: 93,
      rating: 4.6,
      reviews: 1876,
      specs: ['15 Ports', '85W Charging', '4K@60Hz', 'Thunderbolt 3'],
      whyThis: 'One-cable solution for connecting all peripherals to laptop'
    }
  ];

  const knowledgeContent = {
    ergonomics: 'Proper ergonomics can increase productivity by 25% and significantly reduce repetitive strain injuries common among programmers.',
    tips: [
      'Monitor at arm\'s length, top of screen at eye level',
      'Keyboard and mouse at elbow height',
      'Feet flat on floor or footrest',
      'Take 5-minute breaks every hour'
    ]
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-['Inter_Tight'] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-[#363636]">{bundleInfo.title}</h1>
            <p className="text-sm text-gray-600">Curated based on your profile</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* AI Personalization Banner */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-[#363636] rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#363636] mb-1">Detected: {userPersona.type}</h3>
              <p className="text-sm text-gray-700 mb-2">
                Based on your activity, we've identified you as a high-end programmer who values quality and ergonomics.
              </p>
              <div className="space-y-1">
                {userPersona.detectedFrom.map((item, idx) => (
                  <p key={idx} className="text-sm text-gray-600 flex items-start gap-1">
                    <CheckCircle className="w-3 h-3 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded p-2">
              <p className="text-sm text-gray-600">Bundle Price</p>
              <p className="text-lg font-bold text-[#363636]">₹{(bundleInfo.totalPrice - bundleInfo.savingsWithBundle).toLocaleString()}</p>
            </div>
            <div className="bg-white rounded p-2">
              <p className="text-sm text-gray-600">You Save</p>
              <p className="text-lg font-bold text-green-600">₹{bundleInfo.savingsWithBundle.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Ergonomics Knowledge */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-start gap-2 mb-3">
            <Info className="w-4 h-4 text-gray-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[#363636] mb-2">Why Ergonomics Matter</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{knowledgeContent.ergonomics}</p>

              <p className="text-sm font-semibold text-[#363636] mb-1">Setup Guidelines:</p>
              <ul className="space-y-1">
                {knowledgeContent.tips.map((tip, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-1">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Products in Bundle */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#363636]">{bundleInfo.totalProducts} Premium Products</h3>

          {products.map((product, idx) => (
            <div
              key={idx}
              onClick={() => navigate('/product/electronics')}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#363636] hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex gap-3 p-3">
                {/* Product Image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded border border-gray-200"
                  />
                  <div className="absolute top-1 left-1 bg-[#363636] text-white px-1.5 py-0.5 rounded text-sm font-bold">
                    {product.aiScore}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-sm font-medium mb-1">
                    {product.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#363636] line-clamp-1 mb-0.5">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                      <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-[#363636]">₹{product.price.toLocaleString()}</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="border-t border-gray-200 bg-gray-50 p-3 space-y-2">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Key Specs:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.specs.map((spec, i) => (
                      <span key={i} className="bg-white border border-gray-200 px-2 py-0.5 rounded text-sm text-gray-700">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-0.5 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    Why this product:
                  </p>
                  <p className="text-sm text-gray-600 italic">"{product.whyThis}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-sm font-bold text-[#363636] mb-2 flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            Your Productivity Benefits
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>25% increase in coding productivity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Reduced eye and wrist strain for longer sessions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Professional setup that impresses in video calls</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>Investment in long-term health and career</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-gray-600">Bundle Price</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold text-[#363636]">₹{(bundleInfo.totalPrice - bundleInfo.savingsWithBundle).toLocaleString()}</p>
              <span className="text-sm text-gray-500 line-through">₹{bundleInfo.totalPrice.toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="flex-1 bg-[#363636] text-white py-3 px-6 rounded-lg font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add Bundle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgrammerSetup;
