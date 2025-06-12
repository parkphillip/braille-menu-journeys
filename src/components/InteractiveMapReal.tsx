
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface MapLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  type: 'restaurant' | 'cafe' | 'hotel' | 'school';
  testimonial: string;
  coordinates: { lat: number; lng: number };
}

const InteractiveMapReal: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [filter, setFilter] = useState<'all' | 'restaurant' | 'cafe' | 'hotel' | 'school'>('all');

  const locations: MapLocation[] = [
    {
      id: '1',
      name: 'Bella Vista Restaurant',
      city: 'San Francisco',
      state: 'CA',
      type: 'restaurant',
      testimonial: 'Our customers love being able to read menus independently.',
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    {
      id: '2',
      name: 'Sunrise Cafe',
      city: 'Portland',
      state: 'OR',
      type: 'cafe',
      testimonial: 'The braille menus have made our cafe truly inclusive.',
      coordinates: { lat: 45.5152, lng: -122.6784 }
    },
    {
      id: '3',
      name: 'Grand Hotel',
      city: 'Chicago',
      state: 'IL',
      type: 'hotel',
      testimonial: 'Having braille menus sets us apart as accessible.',
      coordinates: { lat: 41.8781, lng: -87.6298 }
    },
    {
      id: '4',
      name: 'Ocean Breeze',
      city: 'Miami',
      state: 'FL',
      type: 'restaurant',
      testimonial: 'Our guests appreciate the thoughtfulness.',
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    {
      id: '5',
      name: 'Mountain View School',
      city: 'Denver',
      state: 'CO',
      type: 'school',
      testimonial: 'Students can now navigate independently.',
      coordinates: { lat: 39.7392, lng: -104.9903 }
    }
  ];

  const filteredLocations = filter === 'all' ? locations : locations.filter(loc => loc.type === filter);

  // Convert coordinates to map positions
  const coordsToPosition = (lat: number, lng: number) => {
    const x = ((lng + 130) / 70) * 100;
    const y = ((50 - lat) / 25) * 100;
    return { 
      x: Math.max(5, Math.min(95, x)), 
      y: Math.max(10, Math.min(90, y)) 
    };
  };

  return (
    <section id="see-movement" className="craft-section">
      <div className="craft-content max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-stone-800">
            Movement Across America
          </h2>
          <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Every pin represents independence. Every story builds a more accessible world.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="craft-card p-8 min-h-[500px]">
              <div className="map-container relative">
                {/* USA Outline SVG */}
                <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="usaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(var(--stone-200))" />
                      <stop offset="100%" stopColor="rgb(var(--earth-200))" />
                    </linearGradient>
                  </defs>
                  
                  {/* Simplified USA outline */}
                  <path 
                    d="M15,20 Q20,15 30,18 Q45,12 60,15 Q75,10 85,15 Q92,18 95,25 Q90,35 80,40 Q60,45 40,42 Q20,44 10,38 Q5,30 15,20 Z" 
                    fill="url(#usaGradient)" 
                    stroke="rgb(var(--stone-300))"
                    strokeWidth="0.3"
                    className="drop-shadow-sm"
                  />
                </svg>

                {/* Location Markers */}
                {filteredLocations.map((location) => {
                  const pos = coordsToPosition(location.coordinates.lat, location.coordinates.lng);
                  return (
                    <button
                      key={location.id}
                      className={`map-marker-craft ${location.type} ${
                        selectedLocation?.id === location.id ? 'ring-2 ring-stone-600 scale-150' : ''
                      }`}
                      style={{ 
                        left: `${pos.x}%`, 
                        top: `${pos.y}%` 
                      }}
                      onClick={() => setSelectedLocation(location)}
                    />
                  );
                })}

                {/* Filter Controls */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {(['all', 'restaurant', 'cafe', 'hotel', 'school'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        filter === type 
                          ? 'bg-craft-rust text-stone-50 shadow-md' 
                          : 'bg-stone-100/90 text-stone-700 hover:bg-stone-200 border border-stone-300'
                      }`}
                    >
                      {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Stats Display */}
                <div className="absolute bottom-4 right-4 bg-stone-50/95 backdrop-blur-sm rounded-lg p-3 border border-stone-300">
                  <div className="text-xs text-stone-600">Active Locations</div>
                  <div className="text-xl font-bold craft-gradient-text">{filteredLocations.length}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-6">
            {selectedLocation ? (
              <div className="craft-card p-6 animate-slide-up">
                <h3 className="text-xl font-serif text-stone-800 mb-2">
                  {selectedLocation.name}
                </h3>
                <p className="text-stone-600 mb-4">
                  {selectedLocation.city}, {selectedLocation.state}
                </p>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    selectedLocation.type === 'restaurant' ? 'bg-craft-olive/20 text-craft-olive' :
                    selectedLocation.type === 'cafe' ? 'bg-craft-orange/20 text-craft-orange' :
                    selectedLocation.type === 'hotel' ? 'bg-craft-sage/20 text-craft-sage' :
                    'bg-craft-rust/20 text-craft-rust'
                  }`}>
                    {selectedLocation.type}
                  </span>
                </div>
                
                <blockquote className="text-stone-700 italic border-l-4 border-craft-rust pl-4 mb-6">
                  "{selectedLocation.testimonial}"
                </blockquote>
                
                <Button className="craft-button w-full">
                  View Their Story
                </Button>
              </div>
            ) : (
              <div className="craft-card p-8 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-stone-200 to-earth-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-craft-rust rounded opacity-60"></div>
                </div>
                <p className="text-stone-600">
                  Click any marker to see their accessibility story
                </p>
              </div>
            )}

            {/* Movement Stats */}
            <div className="craft-card p-6">
              <h4 className="text-lg font-serif text-stone-800 mb-4">Impact Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-stone-600">Communities Served</span>
                  <span className="font-semibold craft-gradient-text">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Menus Created</span>
                  <span className="font-semibold craft-gradient-text">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Always Free</span>
                  <span className="font-semibold text-craft-olive">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapReal;
