
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface MapLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  type: 'restaurant' | 'cafe' | 'hotel' | 'school';
  material: 'paper' | 'aluminum' | 'plastic';
  language: string;
  testimonial: string;
  position: { x: number; y: number };
}

const InteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [filter, setFilter] = useState<'all' | 'restaurant' | 'cafe' | 'hotel' | 'school'>('all');

  const locations: MapLocation[] = [
    {
      id: '1',
      name: 'Bella Vista Restaurant',
      city: 'San Francisco',
      state: 'CA',
      type: 'restaurant',
      material: 'aluminum',
      language: 'English',
      testimonial: 'Our customers love being able to read menus independently. It has transformed the dining experience.',
      position: { x: 15, y: 35 }
    },
    {
      id: '2',
      name: 'Sunrise Cafe',
      city: 'Portland',
      state: 'OR',
      type: 'cafe',
      material: 'paper',
      language: 'English',
      testimonial: 'The braille menus have made our cafe truly inclusive. We see the joy it brings every day.',
      position: { x: 18, y: 25 }
    },
    {
      id: '3',
      name: 'Grand Hotel',
      city: 'Chicago',
      state: 'IL',
      type: 'hotel',
      material: 'plastic',
      language: 'English & Spanish',
      testimonial: 'Having bilingual braille menus sets us apart as a truly accessible hospitality destination.',
      position: { x: 55, y: 40 }
    },
    {
      id: '4',
      name: 'Ocean Breeze',
      city: 'Miami',
      state: 'FL',
      type: 'restaurant',
      material: 'aluminum',
      language: 'English & Spanish',
      testimonial: 'Our guests appreciate the thoughtfulness. It shows we care about every customer.',
      position: { x: 75, y: 70 }
    },
    {
      id: '5',
      name: 'Mountain View School',
      city: 'Denver',
      state: 'CO',
      type: 'school',
      material: 'paper',
      language: 'English',
      testimonial: 'Students can now navigate the cafeteria menu independently. It builds confidence.',
      position: { x: 45, y: 45 }
    }
  ];

  const filteredLocations = filter === 'all' ? locations : locations.filter(loc => loc.type === filter);

  const getMarkerStyle = (type: string) => {
    const baseStyle = "absolute w-5 h-5 rounded-full border-2 border-white transform -translate-x-2 -translate-y-2 hover:scale-125 transition-all duration-300 z-10 shadow-lg";
    switch (type) {
      case 'restaurant': return `${baseStyle} bg-warm-clay`;
      case 'cafe': return `${baseStyle} bg-warm-earth`;
      case 'hotel': return `${baseStyle} bg-warm-coffee`;
      case 'school': return `${baseStyle} bg-warm-stone`;
      default: return `${baseStyle} bg-warm-clay`;
    }
  };

  return (
    <section id="see-movement" className="organic-section">
      <div className="floating-content max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-warm-coffee font-serif">
            Where Accessibility Lives
          </h2>
          <p className="text-2xl text-warm-coffee/80 max-w-4xl mx-auto leading-relaxed handwritten-style">
            Discover the growing network of businesses creating inclusive dining experiences. 
            Each story represents independence and dignity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="natural-card p-8 min-h-[600px] overflow-hidden">
              {/* Organic Map Background */}
              <div className="relative h-full rounded-2xl overflow-hidden" style={{
                background: `linear-gradient(135deg, 
                  rgb(var(--warm-cream)) 0%, 
                  rgb(var(--warm-paper)) 30%,
                  rgb(var(--warm-stone)) 70%,
                  rgb(var(--warm-earth)) 100%)`
              }}>
                
                {/* Abstract map shapes */}
                <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full opacity-20">
                  <path 
                    d="M10,25 Q25,15 40,20 Q55,25 70,22 Q85,20 95,25 Q90,35 75,38 Q60,42 45,40 Q30,38 15,42 Q5,35 10,25 Z" 
                    fill="rgba(var(--warm-coffee), 0.1)" 
                  />
                  <path 
                    d="M5,45 Q20,40 35,43 Q50,47 65,45 Q80,43 95,48 Q90,55 75,52 Q60,50 45,52 Q30,54 15,50 Q0,48 5,45 Z" 
                    fill="rgba(var(--warm-clay), 0.1)" 
                  />
                </svg>

                {/* Location Markers */}
                {filteredLocations.map((location) => (
                  <button
                    key={location.id}
                    className={getMarkerStyle(location.type)}
                    style={{ 
                      left: `${location.position.x}%`, 
                      top: `${location.position.y}%` 
                    }}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <span className="sr-only">{location.name}</span>
                  </button>
                ))}

                {/* Filter Buttons */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                  {['all',

 'restaurant', 'cafe', 'hotel', 'school'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type as any)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        filter === type 
                          ? 'bg-warm-clay text-warm-cream shadow-md' 
                          : 'bg-white/80 text-warm-coffee hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Nominate Button */}
                <button className="absolute bottom-6 right-6 warm-button">
                  Nominate a Location
                </button>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-8">
            {selectedLocation ? (
              <div className="natural-card p-8">
                <h3 className="text-2xl font-serif text-warm-coffee mb-2">
                  {selectedLocation.name}
                </h3>
                <p className="text-warm-coffee/70 mb-6">
                  {selectedLocation.city}, {selectedLocation.state}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-warm-stone/30 text-warm-coffee rounded-full text-sm">
                    {selectedLocation.type}
                  </span>
                  <span className="px-3 py-1 bg-warm-stone/30 text-warm-coffee rounded-full text-sm">
                    {selectedLocation.material}
                  </span>
                  <span className="px-3 py-1 bg-warm-stone/30 text-warm-coffee rounded-full text-sm">
                    {selectedLocation.language}
                  </span>
                </div>
                
                <blockquote className="text-warm-coffee/80 italic border-l-4 border-warm-clay pl-6 leading-relaxed mb-6">
                  "{selectedLocation.testimonial}"
                </blockquote>
                
                <button className="w-full px-6 py-3 border-2 border-warm-clay text-warm-coffee rounded-xl hover:bg-warm-stone/20 transition-all duration-300">
                  View Menu Preview
                </button>
              </div>
            ) : (
              <div className="natural-card p-12 text-center">
                <div className="w-16 h-16 bg-warm-stone/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-warm-clay rounded-full animate-organic-pulse"></div>
                </div>
                <p className="text-warm-coffee/70 leading-relaxed">
                  Click on any marker to learn about their accessibility journey and see their impact stories.
                </p>
              </div>
            )}

            {/* Stats Card */}
            <div className="natural-card p-8">
              <h4 className="text-xl font-serif text-warm-coffee mb-6">Movement Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-warm-coffee/70">Active Locations</span>
                  <span className="font-semibold text-warm-clay text-lg">{locations.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-warm-coffee/70">Languages Supported</span>
                  <span className="font-semibold text-warm-clay text-lg">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-warm-coffee/70">New This Month</span>
                  <span className="font-semibold text-warm-clay text-lg">23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
