
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface StoryNavigationProps {
  onSectionChange?: (section: string) => void;
}

const StoryNavigation: React.FC<StoryNavigationProps> = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState('what-braille-changes');

  const sections = [
    { id: 'what-braille-changes', title: 'What Braille Changes', subtitle: 'The hidden impact' },
    { id: 'experience-menu', title: 'Experience a Menu', subtitle: 'Try it yourself' },
    { id: 'see-movement', title: 'See the Movement', subtitle: 'Real stories' },
    { id: 'order-space', title: 'Order for Your Space', subtitle: 'Get started' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);
              onSectionChange?.(section.id);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, onSectionChange]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="text-3xl font-bold font-serif text-primary">Accessly</div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`nav-story ${activeSection === section.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'} transition-colors`}
              >
                <div className="text-left">
                  <div className="text-base font-semibold">{section.title}</div>
                  <div className="text-sm opacity-75">{section.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          <Button className="tactile-button bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg shadow-md">
            Join the Movement
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default StoryNavigation;
