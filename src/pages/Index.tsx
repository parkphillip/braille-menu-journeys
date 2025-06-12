
import React from 'react';
import StoryNavigation from '@/components/StoryNavigation';
import HeroSection from '@/components/HeroSection';
import WhatBrailleChanges from '@/components/WhatBrailleChanges';
import BrailleExplorer from '@/components/BrailleExplorer';
import InteractiveMap from '@/components/InteractiveMap';
import ImpactStories from '@/components/ImpactStories';
import OrderFlow from '@/components/OrderFlow';

const Index = () => {
  return (
    <div className="min-h-screen">
      <StoryNavigation />
      
      <main className="pt-24">
        <HeroSection />
        <WhatBrailleChanges />
        <BrailleExplorer />
        <InteractiveMap />
        <ImpactStories />
        <OrderFlow />
        
        {/* Join the Movement Section */}
        <section className="organic-section">
          <div className="floating-content max-w-6xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-warm-coffee font-serif">Join the Movement</h2>
            <p className="text-2xl mb-16 text-warm-coffee/80 leading-relaxed handwritten-style max-w-4xl mx-auto">
              Every braille menu creates ripples of independence. 
              Be part of a community that believes dining should be accessible to everyone.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="natural-card p-10">
                <h3 className="text-3xl font-bold mb-4 font-serif text-warm-coffee">Restaurant Owners</h3>
                <p className="text-warm-coffee/80 mb-8 leading-relaxed">Transform your space into a beacon of inclusivity</p>
                <button className="warm-button w-full">
                  Get Your Menus
                </button>
              </div>
              
              <div className="natural-card p-10">
                <h3 className="text-3xl font-bold mb-4 font-serif text-warm-coffee">Advocates</h3>
                <p className="text-warm-coffee/80 mb-8 leading-relaxed">Nominate restaurants in your community</p>
                <button className="warm-button w-full">
                  Nominate a Place
                </button>
              </div>
              
              <div className="natural-card p-10">
                <h3 className="text-3xl font-bold mb-4 font-serif text-warm-coffee">Partners</h3>
                <p className="text-warm-coffee/80 mb-8 leading-relaxed">Help us scale accessibility nationwide</p>
                <button className="warm-button w-full">
                  Partner With Us
                </button>
              </div>
            </div>
            
            <p className="text-xl text-warm-coffee/80 leading-relaxed font-serif italic">
              Together, we're not just making menus accessible—we're changing lives, one meal at a time.
            </p>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="organic-section" style={{ 
        background: `linear-gradient(135deg, 
          rgb(var(--warm-coffee)) 0%, 
          rgb(var(--warm-clay)) 100%)` 
      }}>
        <div className="floating-content max-w-7xl mx-auto text-warm-cream">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-serif">Accessly</h3>
              <p className="text-warm-cream/80 leading-relaxed">
                Making dining accessible, one braille menu at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-warm-cream/90 text-lg">Services</h4>
              <ul className="space-y-3 text-warm-cream/70">
                <li>Braille Menu Design</li>
                <li>Material Selection</li>
                <li>Multi-language Support</li>
                <li>Ongoing Updates</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-warm-cream/90 text-lg">Resources</h4>
              <ul className="space-y-3 text-warm-cream/70">
                <li>Accessibility Guidelines</li>
                <li>Success Stories</li>
                <li>Design Best Practices</li>
                <li>Support Center</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-warm-cream/90 text-lg">Connect</h4>
              <ul className="space-y-3 text-warm-cream/70">
                <li>Contact Us</li>
                <li>Partner Network</li>
                <li>Community Forum</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-warm-cream/20 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-warm-cream/70">© 2024 Accessly. Making dining inclusive for everyone.</p>
            <div className="flex gap-8 mt-6 md:mt-0 text-warm-cream/70">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Accessibility Statement</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
