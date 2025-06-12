
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
    <nav className="fixed top-0 left-0 right-0 z-50 organic-nav">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          <div className="text-4xl font-bold font-serif text-warm-coffee">Accessly</div>
          
          <div className="hidden lg:flex items-center space-x-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`nav-link ${activeSection === section.id ? 'text-warm-clay' : 'text-warm-coffee/70 hover:text-warm-coffee'}`}
              >
                <div className="text-left">
                  <div className="text-lg font-semibold">{section.title}</div>
                  <div className="text-sm opacity-75 handwritten-style">{section.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          <button className="warm-button">
            Join the Movement
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StoryNavigation;
