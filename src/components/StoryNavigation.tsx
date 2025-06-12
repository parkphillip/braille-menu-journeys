
import React, { useState, useEffect } from 'react';

interface StoryNavigationProps {
  onSectionChange?: (section: string) => void;
}

const StoryNavigation: React.FC<StoryNavigationProps> = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState('what-braille-changes');

  const sections = [
    { id: 'what-braille-changes', title: 'Impact' },
    { id: 'experience-menu', title: 'Craft' },
    { id: 'see-movement', title: 'Movement' },
    { id: 'order-space', title: 'Start' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;
      
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
    <nav className="fixed top-0 left-0 right-0 z-50 craft-nav">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-[60px]">
          <div className="text-2xl font-bold font-serif text-stone-800">Accessly</div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`nav-link-craft ${activeSection === section.id ? 'active' : ''}`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <button className="craft-button">
            Join Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StoryNavigation;
