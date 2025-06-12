
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
      
      <main className="pt-[64px]">
        <HeroSection />
        <WhatBrailleChanges />
        <BrailleWorkshop />
        <InteractiveMapReal />
        <ImpactStories />
        <OrderFlow />
        
        {/* Integration Section */}
        <section className="lab-section alt">
          <div className="lab-content max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-8 text-slate-900">Integrations</h2>
            <p className="text-xl mb-16 text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Connect Accessly with 300+ integrations so you can research, analyze, 
              and deploy without switching between platforms.
            </p>
            
            <div className="integration-grid max-w-4xl mx-auto mb-16">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="integration-item">
                  <div className="w-8 h-8 bg-slate-200 rounded"></div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="lab-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Restaurants</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Deploy AI-powered accessibility solutions instantly</p>
                <button className="lab-button w-full">
                  Start Deployment
                </button>
              </div>
              
              <div className="lab-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Researchers</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Access comprehensive accessibility analytics and insights</p>
                <button className="lab-button secondary w-full">
                  Explore Data
                </button>
              </div>
              
              <div className="lab-card p-8">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Partners</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Scale accessibility solutions across enterprise networks</p>
                <button className="lab-button secondary w-full">
                  Join Network
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="lab-section bg-slate-900 text-slate-100">
        <div className="lab-content max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
                </div>
                <div className="text-xl font-semibold">Accessly</div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Accessly Autopilot—the best way to bring AI into your accessibility workflow.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-slate-200 text-lg">Solutions</h4>
              <ul className="space-y-3 text-slate-400">
                <li>Braille Automation</li>
                <li>Menu Intelligence</li>
                <li>Integration Platform</li>
                <li>Analytics Suite</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-slate-200 text-lg">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li>Home</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Brand Kit</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-slate-200 text-lg">Legal</h4>
              <ul className="space-y-3 text-slate-400">
                <li>Security</li>
                <li>Privacy</li>
                <li>Terms of use</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500">©2024 ACCESSLY.INC</p>
            <div className="flex gap-4 mt-4 md:mt-0 text-slate-500">
              <span>Socials</span>
              <span>|</span>
              <span>X</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
