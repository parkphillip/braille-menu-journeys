
import React from 'react';
import { Button } from '@/components/ui/button';

const ImpactStories: React.FC = () => {
  const stories = [
    {
      name: "Maria Rodriguez",
      location: "Casa Bella, Austin TX",
      quote: "For the first time in 15 years, I could order dinner without asking for help. The braille menu made me feel truly welcome.",
      type: "Diner",
      category: "Independence"
    },
    {
      name: "Chef David Chen",
      location: "Golden Dragon, San Francisco",
      quote: "Seeing our customers' faces light up when they receive our braille menus... that's why we cook.",
      type: "Restaurant Owner",
      category: "Joy"
    },
    {
      name: "Sarah Thompson",
      location: "Family Diner, Portland",
      quote: "My daughter can now read the kids menu herself. These small moments change everything.",
      type: "Parent",
      category: "Family"
    },
    {
      name: "James Wilson",
      location: "Sunset Café, Seattle",
      quote: "The free service from Accessly means we could provide this without any financial burden. It's incredible.",
      type: "Business Owner",
      category: "Accessibility"
    },
    {
      name: "Lisa Martinez",
      location: "Downtown Bistro, Chicago",
      quote: "I never realized how much I was missing until I had a braille menu. Now dining out is pure pleasure.",
      type: "Diner",
      category: "Discovery"
    },
    {
      name: "Michael Park",
      location: "University Dining, Boston",
      quote: "Our students finally have equal access to all our dining options. It's transformed campus life.",
      type: "Institution",
      category: "Equality"
    }
  ];

  const categories = ["All", "Independence", "Joy", "Family", "Accessibility", "Discovery", "Equality"];

  return (
    <section className="fintech-section">
      <div className="premium-content max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stories That Touch Hearts</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Real stories from real people whose lives have been touched by accessible dining—all made possible through our free service.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/90 text-neutral-700 hover:bg-white hover:shadow-md border border-neutral-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div key={index} className="story-card group">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-neutral-700 rounded-full text-sm font-medium">
                  {story.type}
                </span>
                <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                  {story.category}
                </span>
              </div>
              
              <blockquote className="text-lg italic mb-6 text-neutral-700 leading-relaxed">
                "{story.quote}"
              </blockquote>
              
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-semibold text-neutral-800">{story.name}</div>
                <div className="text-sm text-neutral-500">{story.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-neutral-800">Our Free Service Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
              
              {[
                { year: '2019', title: 'First Free Menu', description: 'Launched with local café in Portland—completely free' },
                { year: '2020', title: '100 Free Restaurants', description: 'Reached our first major milestone at no cost' },
                { year: '2021', title: 'National Free Program', description: 'Available in all 50 states, always free' },
                { year: '2022', title: 'International Free Expansion', description: 'Expanded to Canada and UK without charge' },
                { year: '2023', title: 'Free Material Innovation', description: 'Introduced aluminum and plastic options for free' },
                { year: '2024', title: 'Free Digital Integration', description: 'QR codes linking to braille versions at no cost' }
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="fintech-card p-6">
                      <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h4 className="font-semibold mb-2 text-neutral-800">{milestone.title}</h4>
                      <p className="text-sm text-neutral-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="premium-button text-lg px-12 py-6">
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
