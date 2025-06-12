
import React, { useEffect, useState } from 'react';

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
      description: "Diners explore menus privately, making choices without assistance",
      stat: "94%",
      statLabel: "feel more confident"
    },
    {
      title: "Dignity",
      description: "Equal access to the full dining experience",
      stat: "8x",
      statLabel: "more likely to return"
    },
    {
      title: "Connection",
      description: "Families dine together without barriers",
      stat: "73%",
      statLabel: "dine out more frequently"
    }
  ];

  return (
    <section id="what-braille-changes" className="craft-section">
      <div className="craft-content max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-stone-800">What Braille Changes</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto text-balance">
            Beyond accessibility compliance, braille menus transform the entire dining experience, 
            creating moments of independence and joy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className={`craft-card p-8 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-stone-200 to-earth-200 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-craft-rust to-craft-orange"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-stone-800">{impact.title}</h3>
                <p className="text-stone-600 leading-relaxed">{impact.description}</p>
              </div>
              
              <div className="border-t border-stone-200 pt-6">
                <div className="text-3xl font-bold craft-gradient-text mb-1">{impact.stat}</div>
                <div className="text-sm text-stone-500">{impact.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatBrailleChanges;
