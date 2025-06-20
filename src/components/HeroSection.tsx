
import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="fintech-section w-full">
        <div className="premium-content max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
              Every Menu
              <span className="block gradient-text font-serif italic">Tells a Story</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto text-balance leading-relaxed text-neutral-600">
              We transform restaurant menus into beautiful braille experiences, 
              opening doors to independence and dignity for every diner—completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="premium-button text-lg px-8 py-4">
                Transform Your Menu
              </button>
              <button className="relative px-8 py-4 text-lg font-medium text-neutral-700 border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-all duration-300">
                See the Impact
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="metric-card">
                <div className="text-4xl font-bold gradient-text mb-2 font-serif">2,847</div>
                <div className="text-sm text-neutral-600">Restaurants empowered</div>
              </div>
              <div className="metric-card">
                <div className="text-4xl font-bold gradient-text mb-2 font-serif">156K</div>
                <div className="text-sm text-neutral-600">Menus made accessible</div>
              </div>
              <div className="metric-card">
                <div className="text-4xl font-bold gradient-text mb-2 font-serif">Free</div>
                <div className="text-sm text-neutral-600">Always and forever</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-gentle-bounce opacity-20"
              style={{
                background: `rgb(var(--accent-purple))`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
