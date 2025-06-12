
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
    <div className="min-h-screen bg-background">
      <StoryNavigation />
      
      <main className="pt-20">
        <HeroSection />
        <WhatBrailleChanges />
        <BrailleExplorer />
        <InteractiveMap />
        <ImpactStories />
        <OrderFlow />
        
        {/* Join the Movement Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-primary to-warm-700 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif">Join the Movement</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Every braille menu creates ripples of independence. 
              Be part of a community that believes dining should be accessible to everyone.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-xl bg-white/10 backdrop-blur">
                <h3 className="text-2xl font-bold mb-3 font-serif">Restaurant Owners</h3>
                <p className="opacity-90 mb-6 leading-relaxed">Transform your space into a beacon of inclusivity</p>
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-warm-50 transition-colors shadow-lg">
                  Get Your Menus
                </button>
              </div>
              
              <div className="p-8 rounded-xl bg-white/10 backdrop-blur">
                <h3 className="text-2xl font-bold mb-3 font-serif">Advocates</h3>
                <p className="opacity-90 mb-6 leading-relaxed">Nominate restaurants in your community</p>
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-warm-50 transition-colors shadow-lg">
                  Nominate a Place
                </button>
              </div>
              
              <div className="p-8 rounded-xl bg-white/10 backdrop-blur">
                <h3 className="text-2xl font-bold mb-3 font-serif">Partners</h3>
                <p className="opacity-90 mb-6 leading-relaxed">Help us scale accessibility nationwide</p>
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-warm-50 transition-colors shadow-lg">
                  Partner With Us
                </button>
              </div>
            </div>
            
            <p className="text-lg opacity-90 leading-relaxed font-serif">
              Together, we're not just making menus accessible—we're changing lives, one meal at a time.
            </p>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-warm-900 text-warm-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif text-warm-200">Accessly</h3>
              <p className="text-warm-300 leading-relaxed">
                Making dining accessible, one braille menu at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-warm-200">Services</h4>
              <ul className="space-y-2 text-warm-300">
                <li>Braille Menu Design</li>
                <li>Material Selection</li>
                <li>Multi-language Support</li>
                <li>Ongoing Updates</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-warm-200">Resources</h4>
              <ul className="space-y-2 text-warm-300">
                <li>Accessibility Guidelines</li>
                <li>Success Stories</li>
                <li>Design Best Practices</li>
                <li>Support Center</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-warm-200">Connect</h4>
              <ul className="space-y-2 text-warm-300">
                <li>Contact Us</li>
                <li>Partner Network</li>
                <li>Community Forum</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-warm-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-warm-300">© 2024 Accessly. Making dining inclusive for everyone.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-warm-300">
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
