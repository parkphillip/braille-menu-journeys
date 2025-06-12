
import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const brailleMap: Record<string, number[]> = {
  'a': [1], 'b': [1, 2], 'c': [1, 4], 'd': [1, 4, 5], 'e': [1, 5],
  'f': [1, 2, 4], 'g': [1, 2, 4, 5], 'h': [1, 2, 5], 'i': [2, 4], 'j': [2, 4, 5],
  'k': [1, 3], 'l': [1, 2, 3], 'm': [1, 3, 4], 'n': [1, 3, 4, 5], 'o': [1, 3, 5],
  'p': [1, 2, 3, 4], 'q': [1, 2, 3, 4, 5], 'r': [1, 2, 3, 5], 's': [2, 3, 4], 't': [2, 3, 4, 5],
  'u': [1, 3, 6], 'v': [1, 2, 3, 6], 'w': [2, 4, 5, 6], 'x': [1, 3, 4, 6], 'y': [1, 3, 4, 5, 6],
  'z': [1, 3, 5, 6], ' ': [], ',': [2], '.': [2, 5, 6], '?': [2, 6], '!': [2, 3, 5]
};

const BrailleCell: React.FC<{ pattern: number[]; delay?: number }> = ({ pattern, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const dotPositions = [
    { top: '10%', left: '20%' },   // dot 1
    { top: '40%', left: '20%' },   // dot 2
    { top: '70%', left: '20%' },   // dot 3
    { top: '10%', left: '70%' },   // dot 4
    { top: '40%', left: '70%' },   // dot 5
    { top: '70%', left: '70%' }    // dot 6
  ];

  return (
    <div className="relative inline-block w-8 h-12 mx-1 my-1">
      {dotPositions.map((pos, index) => (
        <div
          key={index}
          className={`braille-dot-craft ${
            isVisible && pattern.includes(index + 1) ? 'active' : ''
          }`}
          style={{
            top: pos.top,
            left: pos.left,
            transitionDelay: `${delay + index * 50}ms`
          }}
        />
      ))}
    </div>
  );
};

const TypewriterEffect: React.FC<{ text: string; speed?: number }> = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="typewriter-container">
      <div className="text-stone-300 text-sm mb-2">menu_input.txt</div>
      <div className="font-mono">
        {displayText}
        <span className="typewriter-cursor"></span>
      </div>
    </div>
  );
};

const BrailleWorkshop: React.FC = () => {
  const [inputText, setInputText] = useState('Welcome to our restaurant');
  const [animationKey, setAnimationKey] = useState(0);
  const [braillePattern, setBraillePattern] = useState<{ char: string; pattern: number[] }[]>([]);

  useEffect(() => {
    const pattern = inputText.toLowerCase().split('').map(char => ({
      char,
      pattern: brailleMap[char] || []
    }));
    setBraillePattern(pattern);
  }, [inputText]);

  const handleTextChange = (value: string) => {
    setInputText(value);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <section className="craft-section" id="experience-menu">
      <div className="craft-content max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-stone-800">
            Craft Your Menu
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Watch your words transform into tactile art. Every letter becomes a story, 
            every menu a masterpiece of accessibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Input Workshop */}
          <div className="space-y-8 animate-fade-in-delay">
            <div className="craft-card p-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-6">
                Menu Workshop
              </h3>
              <Textarea
                value={inputText}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder="Type your menu text here..."
                className="min-h-32 text-lg bg-stone-50 border-stone-300 focus:border-craft-rust focus:ring-craft-rust/20"
              />
              
              <div className="mt-6">
                <TypewriterEffect text={inputText} key={animationKey} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button className="craft-button py-6">
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                className="py-6 border-stone-400 hover:bg-stone-100 text-stone-700"
              >
                See Process
              </Button>
            </div>
          </div>

          {/* Braille Animation */}
          <div className="space-y-8">
            <div className="braille-workshop">
              <h3 className="text-xl font-serif text-stone-800 mb-6">
                Live Braille Translation
              </h3>
              
              <div className="min-h-48 flex flex-wrap items-center justify-center p-6 rounded bg-gradient-to-br from-stone-100 to-earth-100">
                {braillePattern.map((item, index) => (
                  <BrailleCell
                    key={`${animationKey}-${index}`}
                    pattern={item.pattern}
                    delay={index * 100}
                  />
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-sm text-stone-600 mb-2">Translation Progress</div>
                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-craft-rust to-craft-orange transition-all duration-1000"
                    style={{ width: `${Math.min(100, (braillePattern.length / inputText.length) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="craft-card p-6">
              <h4 className="font-serif text-stone-800 mb-4">Craft Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-600">Characters:</span>
                  <span className="font-medium craft-gradient-text">{inputText.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Braille Cells:</span>
                  <span className="font-medium craft-gradient-text">{braillePattern.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Estimated Size:</span>
                  <span className="font-medium craft-gradient-text">8.5" × 11"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrailleWorkshop;
