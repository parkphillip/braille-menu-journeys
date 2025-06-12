
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
      description: "Autonomous menu navigation without assistance",
      metric: "94%",
      metricLabel: "user satisfaction"
    },
    {
      title: "Efficiency",
      description: "Streamlined ordering with intelligent adaptation",
      metric: "8x",
      metricLabel: "faster decisions"
    },
    {
      title: "Integration",
      description: "Seamless connection across dining ecosystems",
      metric: "73%",
      metricLabel: "increased usage"
    }
  ];

  return (
    <section id="what-braille-changes" className="lab-section">
      <div className="lab-content max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-slate-900">Impact Metrics</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
            Quantifying the transformation of accessibility through intelligent automation 
            and human-centered design principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className={`lab-card p-8 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-slate-100 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-slate-900"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">{impact.title}</h3>
                <p className="text-slate-600 leading-relaxed">{impact.description}</p>
              </div>
              
              <div className="border-t border-slate-200 pt-6">
                <div className="text-3xl font-bold text-slate-900 mb-1">{impact.metric}</div>
                <div className="text-sm text-slate-500">{impact.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatBrailleChanges;
