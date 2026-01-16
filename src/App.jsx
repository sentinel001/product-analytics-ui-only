import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BeautyProduct from './components/BeautyProduct';
import BeautyProduct_Phase2 from './components/BeautyProduct_Phase2';
import BeautyProduct_Phase3 from './components/BeautyProduct_Phase3';
import ElectronicsProduct from './components/ElectronicsProduct';
import ElectronicsProduct_Phase2 from './components/ElectronicsProduct_Phase2';
import ElectronicsProduct_Phase3 from './components/ElectronicsProduct_Phase3';
import FashionProduct from './components/FashionProduct';
import FashionProduct_Phase2 from './components/FashionProduct_Phase2';
import FashionProduct_Phase3 from './components/FashionProduct_Phase3';
import FlashHome from './components/FlashHome';
import ProductDiscovery from './components/ProductDiscovery';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import OrderTracking from './components/OrderTracking';
import { Sparkles, Zap, Shirt, Calendar } from 'lucide-react';

// Phase Evolution Demo Component
function PhaseEvolutionDemo() {
  const [activeCategory, setActiveCategory] = useState('beauty');
  const [activePhase, setActivePhase] = useState('phase1');

  const categories = [
    {
      id: 'beauty',
      name: 'Beauty',
      icon: <Sparkles className="w-5 h-5" />,
      components: {
        phase1: BeautyProduct,
        phase2: BeautyProduct_Phase2,
        phase3: BeautyProduct_Phase3
      },
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: <Zap className="w-5 h-5" />,
      components: {
        phase1: ElectronicsProduct,
        phase2: ElectronicsProduct_Phase2,
        phase3: ElectronicsProduct_Phase3
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: <Shirt className="w-5 h-5" />,
      components: {
        phase1: FashionProduct,
        phase2: FashionProduct_Phase2,
        phase3: FashionProduct_Phase3
      },
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const phases = [
    { id: 'phase1', label: 'Months 1-2', description: 'Foundation' },
    { id: 'phase2', label: 'Months 3-4', description: 'Enhancement' },
    { id: 'phase3', label: 'Months 5-6', description: 'Advanced' }
  ];

  const ActiveComponent = categories.find(cat => cat.id === activeCategory)?.components[activePhase];
  const activeColor = categories.find(cat => cat.id === activeCategory)?.color;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category & Phase Selector */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-3">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto mb-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Phase Timeline */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
            {phases.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`relative flex-1 min-w-[100px] px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activePhase === phase.id
                    ? `bg-gradient-to-r ${activeColor} text-white shadow-sm`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="font-semibold">{phase.label}</div>
                <div className={`text-xs mt-0.5 ${activePhase === phase.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {phase.description}
                </div>
                {idx < phases.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-300 z-10" />
                )}
              </button>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            <span className="font-semibold">Evolution Timeline:</span> See how features progressively improve the experience
          </p>
        </div>
      </div>

      {/* Active Product Component */}
      {ActiveComponent && <ActiveComponent />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Full User Journey Flow */}
        <Route path="/" element={<FlashHome />} />
        <Route path="/discovery/:category" element={<ProductDiscovery />} />
        <Route path="/product/:category" element={<BeautyProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-tracking" element={<OrderTracking />} />

        {/* Phase Evolution Demo (original view) */}
        <Route path="/demo" element={<PhaseEvolutionDemo />} />

        {/* Redirect old root to demo */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
