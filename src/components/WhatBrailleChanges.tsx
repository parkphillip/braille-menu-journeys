
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

const WhatBrailleChanges: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('what-braille-changes');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const impacts = [
    {
      title: "Independence",
      description: "Diners can explore menus privately, making choices without assistance",
      stat: "94%",
      statLabel: "feel more confident dining out"
    },
    {
      title: "Dignity",
      description: "Equal access to the full dining experience, from appetizers to desserts",
      stat: "8x",
      statLabel: "more likely to return"
    },
    {
      title: "Connection",
      description: "Families dine together without barriers, creating lasting memories",
      stat: "73%",
      statLabel: "dine out more frequently"
    }
  ];

  return (
    <section id="what-braille-changes" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Braille Changes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Beyond accessibility compliance, braille menus transform the entire dining experience, 
            creating moments of independence and joy that ripple through communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card 
              key={index}
              className={`impact-card p-8 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{impact.title}</h3>
                <p className="text-muted-foreground">{impact.description}</p>
              </div>
              
              <div className="border-t pt-6">
                <div className="text-3xl font-bold text-primary mb-1">{impact.stat}</div>
                <div className="text-sm text-muted-foreground">{impact.statLabel}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Before/After Visualization */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h3 className="text-3xl font-bold mb-6">The Hidden Barrier</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dependence on Others</h4>
                  <p className="text-muted-foreground">Having to ask servers or companions to read the entire menu, limiting privacy and choice.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Limited Exploration</h4>
                  <p className="text-muted-foreground">Unable to browse leisurely, often settling for familiar items rather than discovering new favorites.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dining Anxiety</h4>
                  <p className="text-muted-foreground">Stress about ordering appropriately, checking prices, or understanding dietary information.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6">The Braille Difference</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Private Decision Making</h4>
                  <p className="text-muted-foreground">Read menus independently, take time to consider options, and make personal choices without assistance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Culinary Adventure</h4>
                  <p className="text-muted-foreground">Discover new dishes, understand ingredients and preparations, and make informed dietary choices.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Confident Dining</h4>
                  <p className="text-muted-foreground">Enjoy meals with peace of mind, knowing exactly what they're ordering and how much it costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatBrailleChanges;
