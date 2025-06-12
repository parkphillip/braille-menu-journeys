
import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="lab-section w-full">
        <div className="lab-content max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-7xl font-semibold mb-8 text-balance leading-tight">
              The AI
              <span className="block italic text-slate-700">Accessibility</span>
              Suite
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto text-balance leading-relaxed text-slate-600">
              Transform restaurant experiences with AI-powered braille solutions. 
              Making dining accessible through intelligent design and automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="lab-button text-lg px-8 py-4">
                Deploy Solution
              </button>
              <button className="lab-button secondary text-lg px-8 py-4">
                Explore Research
              </button>
            </div>

            <div className="text-center mb-12">
              <p className="text-sm text-slate-500 mb-6">TRUSTED BY LEADING ORGANIZATIONS</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-slate-400 font-medium">BlackRock</div>
                <div className="text-slate-400 font-medium">Deloitte</div>
                <div className="text-slate-400 font-medium">Microsoft</div>
                <div className="text-slate-400 font-medium">PwC</div>
                <div className="text-slate-400 font-medium">KPMG</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="lab-card p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">2,847</div>
                <div className="text-sm text-slate-600">Locations deployed</div>
              </div>
              <div className="lab-card p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">156K</div>
                <div className="text-sm text-slate-600">Interactions processed</div>
              </div>
              <div className="lab-card p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">99.9%</div>
                <div className="text-sm text-slate-600">Uptime guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
