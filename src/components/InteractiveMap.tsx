
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

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'restaurant': return 'bg-warm-600';
      case 'cafe': return 'bg-warm-500';
      case 'hotel': return 'bg-warm-700';
      case 'school': return 'bg-warm-400';
      default: return 'bg-primary';
    }
  };

  return (
    <section id="map-section" className="py-24 px-6 bg-warm-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground font-serif">
            Where Accessibility Lives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the growing network of businesses creating inclusive dining experiences. 
            Each pin represents a story of independence and dignity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-warm-100 to-warm-200 rounded-2xl p-8 min-h-[600px] overflow-hidden shadow-lg">
              {/* Simplified US Map Background */}
              <div className="absolute inset-4 bg-warm-200/50 rounded-xl border-2 border-warm-300">
                <svg viewBox="0 0 100 60" className="w-full h-full opacity-20">
                  <path d="M10,30 Q20,20 30,25 Q40,30 50,28 Q60,26 70,30 Q80,35 90,32" 
                        stroke="currentColor" strokeWidth="0.5" fill="none" />
                  <path d="M15,40 Q25,35 35,38 Q45,42 55,40 Q65,38 75,42 Q85,45 90,43" 
                        stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
              </div>

              {/* Location Markers */}
              {filteredLocations.map((location) => (
                <button
                  key={location.id}
                  className={`absolute w-4 h-4 ${getMarkerColor(location.type)} rounded-full border-2 border-white shadow-lg transform -translate-x-2 -translate-y-2 hover:scale-125 transition-all duration-200 z-10`}
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
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {['all', 'restaurant', 'cafe', 'hotel', 'school'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type as any)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === type 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-white/80 text-foreground hover:bg-white'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              {/* Nominate Button */}
              <Button className="absolute bottom-4 right-4 bg-warm-600 hover:bg-warm-700 text-white rounded-lg">
                Nominate a Location
              </Button>
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-6">
            {selectedLocation ? (
              <Card className="border-2 border-warm-200 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-serif text-foreground">
                    {selectedLocation.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {selectedLocation.city}, {selectedLocation.state}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-warm-100 text-warm-800">
                      {selectedLocation.type}
                    </Badge>
                    <Badge variant="outline" className="border-warm-300">
                      {selectedLocation.material}
                    </Badge>
                    <Badge variant="outline" className="border-warm-300">
                      {selectedLocation.language}
                    </Badge>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground border-l-4 border-warm-300 pl-4 leading-relaxed">
                    "{selectedLocation.testimonial}"
                  </blockquote>
                  <Button variant="outline" className="w-full border-warm-300 hover:bg-warm-50">
                    View Menu Preview
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-warm-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-warm-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-warm-500 rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Click on any marker to learn about their accessibility journey and see their impact stories.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Stats Card */}
            <Card className="border-2 border-warm-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-serif">Movement Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Locations</span>
                  <span className="font-semibold text-primary">{locations.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages Supported</span>
                  <span className="font-semibold text-primary">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">New This Month</span>
                  <span className="font-semibold text-primary">23</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
