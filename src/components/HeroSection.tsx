
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="organic-section w-full">
        <div className="floating-content max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl lg:text-8xl font-bold mb-12 text-balance leading-tight">
              Every Menu
              <span className="block text-warm-clay font-serif italic">Tells a Story</span>
            </h1>
            
            <p className="text-2xl lg:text-3xl mb-16 max-w-4xl mx-auto text-balance leading-relaxed handwritten-style">
              We transform restaurant menus into beautiful braille experiences, 
              opening doors to independence and dignity for every diner.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <button className="warm-button text-xl">
                Transform Your Menu
              </button>
              <button className="relative px-8 py-4 text-xl font-medium text-warm-coffee border-2 border-warm-clay rounded-2xl hover:bg-warm-stone/20 transition-all duration-300">
                See the Impact
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="natural-card p-10">
                <div className="text-5xl font-bold text-warm-clay mb-4 font-serif">2,847</div>
                <div className="text-lg text-warm-coffee/80">Restaurants empowered</div>
              </div>
              <div className="natural-card p-10">
                <div className="text-5xl font-bold text-warm-clay mb-4 font-serif">156K</div>
                <div className="text-lg text-warm-coffee/80">Menus made accessible</div>
              </div>
              <div className="natural-card p-10">
                <div className="text-5xl font-bold text-warm-clay mb-4 font-serif">28</div>
                <div className="text-lg text-warm-coffee/80">Countries reached</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating organic elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-gentle-float opacity-30"
              style={{
                background: `linear-gradient(45deg, rgb(var(--warm-clay)), rgb(var(--warm-earth)))`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
