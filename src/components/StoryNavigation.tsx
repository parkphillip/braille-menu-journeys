
import React, { useState, useEffect } from 'react';

interface StoryNavigationProps {
  onSectionChange?: (section: string) => void;
}

const StoryNavigation: React.FC<StoryNavigationProps> = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState('what-braille-changes');

  const sections = [
    { id: 'what-braille-changes', title: 'Impact' },
    { id: 'experience-menu', title: 'Lab' },
    { id: 'see-movement', title: 'Network' },
    { id: 'order-space', title: 'Deploy' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 lab-nav">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-[64px]">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div className="text-xl font-semibold text-slate-900">Accessly</div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`nav-link-lab ${activeSection === section.id ? 'active' : ''}`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <button className="lab-button">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StoryNavigation;
