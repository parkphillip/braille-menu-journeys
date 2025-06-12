
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-50 via-background to-warm-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance text-foreground leading-tight">
            Every Menu
            <span className="block text-primary font-serif">Tells a Story</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-balance leading-relaxed">
            We transform restaurant menus into beautiful braille experiences, 
            opening doors to independence and dignity for every diner.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="tactile-button text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg">
              Transform Your Menu
            </Button>
            <Button variant="outline" size="lg" className="tactile-button text-lg px-12 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg">
              See the Impact
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="impact-card p-8 bg-white/80 backdrop-blur">
              <div className="text-4xl font-bold text-primary mb-2 font-serif">2,847</div>
              <div className="text-base text-muted-foreground">Restaurants empowered</div>
            </div>
            <div className="impact-card p-8 bg-white/80 backdrop-blur">
              <div className="text-4xl font-bold text-primary mb-2 font-serif">156K</div>
              <div className="text-base text-muted-foreground">Menus made accessible</div>
            </div>
            <div className="impact-card p-8 bg-white/80 backdrop-blur">
              <div className="text-4xl font-bold text-primary mb-2 font-serif">28</div>
              <div className="text-base text-muted-foreground">Countries reached</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating braille dots animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
