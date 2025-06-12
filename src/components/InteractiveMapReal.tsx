
import React, { useState } from 'react';
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
      material: 'aluminum',
      language: 'English',
      testimonial: 'Our customers love being able to read menus independently. It has transformed the dining experience.',
      coordinates: { lat: 37.7749, lng: -122.4194 }
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
      coordinates: { lat: 45.5152, lng: -122.6784 }
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
      coordinates: { lat: 41.8781, lng: -87.6298 }
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
      coordinates: { lat: 25.7617, lng: -80.1918 }
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
      coordinates: { lat: 39.7392, lng: -104.9903 }
    }
  ];

  const filteredLocations = filter === 'all' ? locations : locations.filter(loc => loc.type === filter);

  // Convert coordinates to SVG positions (simplified projection)
  const coordsToSVG = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 60;
    return { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(60, y)) };
  };

  return (
    <section id="see-movement" className="fintech-section">
      <div className="premium-content max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-800">
            Where Accessibility Lives
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Discover the growing network of businesses creating inclusive dining experiences. 
            Each story represents independence and dignity—provided completely free.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Real Map Section */}
          <div className="lg:col-span-2">
            <div className="fintech-card p-8 min-h-[600px] overflow-hidden">
              {/* USA Map SVG */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-50 to-warm-50">
                
                {/* Simplified USA outline */}
                <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(var(--neutral-100))" />
                      <stop offset="100%" stopColor="rgb(var(--warm-100))" />
                    </linearGradient>
                  </defs>
                  
                  {/* USA shape (simplified) */}
                  <path 
                    d="M10,25 Q15,20 25,22 Q35,18 50,20 Q65,15 80,18 Q90,20 95,25 Q92,35 85,40 Q70,45 50,42 Q30,44 15,42 Q5,35 10,25 Z" 
                    fill="url(#mapGradient)" 
                    stroke="rgb(var(--neutral-200))"
                    strokeWidth="0.2"
                  />
                </svg>

                {/* Location Markers */}
                {filteredLocations.map((location) => {
                  const pos = coordsToSVG(location.coordinates.lat, location.coordinates.lng);
                  return (
                    <button
                      key={location.id}
                      className={`map-marker ${location.type}`}
                      style={{ 
                        left: `${pos.x}%`, 
                        top: `${pos.y}%` 
                      }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <span className="sr-only">{location.name}</span>
                    </button>
                  );
                })}

                {/* Filter Buttons */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {['all', 'restaurant', 'cafe', 'hotel', 'school'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type as any)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        filter === type 
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                          : 'bg-white/90 text-neutral-700 hover:bg-white hover:shadow-md border border-neutral-200'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Nominate Button */}
                <button className="absolute bottom-6 right-6 premium-button">
                  Nominate a Location
                </button>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-8">
            {selectedLocation ? (
              <div className="fintech-card p-8">
                <h3 className="text-2xl font-serif text-neutral-800 mb-2">
                  {selectedLocation.name}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {selectedLocation.city}, {selectedLocation.state}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                    {selectedLocation.type}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                    {selectedLocation.material}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                    {selectedLocation.language}
                  </span>
                </div>
                
                <blockquote className="text-neutral-700 italic border-l-4 border-purple-500 pl-6 leading-relaxed mb-6">
                  "{selectedLocation.testimonial}"
                </blockquote>
                
                <Button className="w-full">
                  View Menu Preview
                </Button>
              </div>
            ) : (
              <div className="fintech-card p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl animate-gentle-bounce"></div>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Click on any marker to learn about their accessibility journey and see their impact stories.
                </p>
              </div>
            )}

            {/* Stats Card */}
            <div className="fintech-card p-8">
              <h4 className="text-xl font-serif text-neutral-800 mb-6">Movement Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Active Locations</span>
                  <span className="font-semibold gradient-text text-lg">{locations.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Languages Supported</span>
                  <span className="font-semibold gradient-text text-lg">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">New This Month</span>
                  <span className="font-semibold gradient-text text-lg">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Cost to Restaurants</span>
                  <span className="font-semibold text-emerald-600 text-lg">$0</span>
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
