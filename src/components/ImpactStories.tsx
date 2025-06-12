
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ImpactStories: React.FC = () => {
  const stories = [
    {
      name: "Maria Rodriguez",
      location: "Casa Bella, Austin TX",
      quote: "For the first time in 15 years, I could order dinner without asking for help. The braille menu made me feel truly welcome.",
      image: "/placeholder.svg",
      type: "video"
    },
    {
      name: "Chef David Chen",
      location: "Golden Dragon, San Francisco",
      quote: "Seeing our customers' faces light up when they receive our braille menus... that's why we cook.",
      image: "/placeholder.svg",
      type: "letter"
    },
    {
      name: "Sarah Thompson",
      location: "Family Diner, Portland",
      quote: "My daughter can now read the kids menu herself. These small moments change everything.",
      image: "/placeholder.svg",
      type: "testimonial"
    }
  ];

  const menuExamples = [
    {
      restaurant: "Bistro Luna",
      city: "Chicago",
      material: "Aluminum",
      image: "/placeholder.svg"
    },
    {
      restaurant: "Ocean View",
      city: "Seattle",
      material: "Soft Paper",
      image: "/placeholder.svg"
    },
    {
      restaurant: "Garden Café",
      city: "Portland",
      material: "Plastic Card",
      image: "/placeholder.svg"
    },
    {
      restaurant: "Metro Grill",
      city: "New York",
      material: "Aluminum",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="see-movement" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">See the Movement</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people whose lives have been touched by accessible dining.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stories.map((story, index) => (
            <Card key={index} className="impact-card p-8 group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-full h-48 bg-slate-200 rounded-lg overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={`${story.name} story`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  {story.type}
                </div>
              </div>
              
              <blockquote className="text-lg italic mb-4 text-muted-foreground">
                "{story.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold">{story.name}</div>
                <div className="text-sm text-muted-foreground">{story.location}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Wall of Menus */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Wall of Menus</h3>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {menuExamples.map((menu, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <Card className="impact-card overflow-hidden group cursor-pointer">
                    <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                      <img 
                        src={menu.image} 
                        alt={`${menu.restaurant} braille menu`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold mb-1">{menu.restaurant}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{menu.city}</p>
                      <div className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                        {menu.material}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-border"></div>
              
              {[
                { year: '2019', title: 'First Braille Menu', description: 'Launched with local café in Portland' },
                { year: '2020', title: '100 Restaurants', description: 'Reached our first major milestone' },
                { year: '2021', title: 'National Expansion', description: 'Available in all 50 states' },
                { year: '2022', title: 'International Growth', description: 'Expanded to Canada and UK' },
                { year: '2023', title: 'Material Innovation', description: 'Introduced aluminum and plastic options' },
                { year: '2024', title: 'Digital Integration', description: 'QR codes linking to braille versions' }
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="impact-card p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h4 className="font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="tactile-button text-lg px-12 py-6">
            Add Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
