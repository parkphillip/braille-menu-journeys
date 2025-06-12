
import React from 'react';
import StoryNavigation from '@/components/StoryNavigation';
import HeroSection from '@/components/HeroSection';
import WhatBrailleChanges from '@/components/WhatBrailleChanges';
import BrailleWorkshop from '@/components/BrailleWorkshop';
import InteractiveMapReal from '@/components/InteractiveMapReal';
import ImpactStories from '@/components/ImpactStories';
import OrderFlow from '@/components/OrderFlow';

const Index = () => {
  return (
    <div className="min-h-screen">
      <StoryNavigation />
      
      <main className="pt-[60px]">
        <HeroSection />
        <WhatBrailleChanges />
        <BrailleWorkshop />
        <InteractiveMapReal />
        <ImpactStories />
        <OrderFlow />
        
        {/* Join the Movement Section */}
        <section className="craft-section">
          <div className="craft-content max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-stone-800 font-serif">Join the Movement</h2>
            <p className="text-xl mb-16 text-stone-600 leading-relaxed max-w-4xl mx-auto">
              Every braille menu creates ripples of independence. 
              Be part of a community that believes dining should be accessible to everyone—completely free.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="craft-card p-10">
                <h3 className="text-2xl font-bold mb-4 font-serif text-stone-800">Restaurant Owners</h3>
                <p className="text-stone-600 mb-8 leading-relaxed">Transform your space into a beacon of inclusivity at no cost</p>
                <button className="craft-button w-full">
                  Get Free Menus
                </button>
              </div>
              
              <div className="craft-card p-10">
                <h3 className="text-2xl font-bold mb-4 font-serif text-stone-800">Advocates</h3>
                <p className="text-stone-600 mb-8 leading-relaxed">Nominate restaurants in your community for free service</p>
                <button className="craft-button w-full">
                  Nominate a Place
                </button>
              </div>
              
              <div className="craft-card p-10">
                <h3 className="text-2xl font-bold mb-4 font-serif text-stone-800">Partners</h3>
                <p className="text-stone-600 mb-8 leading-relaxed">Help us scale free accessibility nationwide</p>
                <button className="craft-button w-full">
                  Partner With Us
                </button>
              </div>
            </div>
            
            <p className="text-xl text-stone-600 leading-relaxed font-serif italic">
              Together, we're not just making menus accessible—we're changing lives, one free meal at a time.
            </p>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="craft-section bg-gradient-to-br from-stone-800 to-earth-900 text-stone-100">
        <div className="craft-content max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-serif text-stone-100">Accessly</h3>
              <p className="text-stone-300 leading-relaxed">
                Making dining accessible, one free braille menu at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-stone-100 text-lg">Free Services</h4>
              <ul className="space-y-3 text-stone-300">
                <li>Braille Menu Design</li>
                <li>Material Selection</li>
                <li>Multi-language Support</li>
                <li>Ongoing Updates</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-stone-100 text-lg">Resources</h4>
              <ul className="space-y-3 text-stone-300">
                <li>Accessibility Guidelines</li>
                <li>Success Stories</li>
                <li>Design Best Practices</li>
                <li>Support Center</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-stone-100 text-lg">Connect</h4>
              <ul className="space-y-3 text-stone-300">
                <li>Contact Us</li>
                <li>Partner Network</li>
                <li>Community Forum</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400">© 2024 Accessly. Making dining inclusive for everyone, always free.</p>
            <div className="flex gap-8 mt-6 md:mt-0 text-stone-400">
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
