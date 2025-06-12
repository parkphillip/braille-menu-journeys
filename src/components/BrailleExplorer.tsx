
import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

// Basic English Braille mapping
const brailleMap: Record<string, number[]> = {
  'a': [1], 'b': [1, 2], 'c': [1, 4], 'd': [1, 4, 5], 'e': [1, 5],
  'f': [1, 2, 4], 'g': [1, 2, 4, 5], 'h': [1, 2, 5], 'i': [2, 4], 'j': [2, 4, 5],
  'k': [1, 3], 'l': [1, 2, 3], 'm': [1, 3, 4], 'n': [1, 3, 4, 5], 'o': [1, 3, 5],
  'p': [1, 2, 3, 4], 'q': [1, 2, 3, 4, 5], 'r': [1, 2, 3, 5], 's': [2, 3, 4], 't': [2, 3, 4, 5],
  'u': [1, 3, 6], 'v': [1, 2, 3, 6], 'w': [2, 4, 5, 6], 'x': [1, 3, 4, 6], 'y': [1, 3, 4, 5, 6],
  'z': [1, 3, 5, 6], ' ': [], ',': [2], '.': [2, 5, 6], '?': [2, 6], '!': [2, 3, 5],
  ':': [2, 5], ';': [2, 3], '-': [3, 6], "'": [3], '"': [2, 3, 6], '(': [2, 3, 6], ')': [3, 5, 6]
};

interface BrailleCellProps {
  pattern: number[];
  isHighlighted?: boolean;
  onClick?: () => void;
}

const BrailleCell: React.FC<BrailleCellProps> = ({ pattern, isHighlighted = false, onClick }) => {
  const dotPositions = [
    { top: '0%', left: '0%' },      // dot 1
    { top: '33%', left: '0%' },     // dot 2
    { top: '66%', left: '0%' },     // dot 3
    { top: '0%', left: '60%' },     // dot 4
    { top: '33%', left: '60%' },    // dot 5
    { top: '66%', left: '60%' },    // dot 6
  ];

  return (
    <div 
      className={`braille-cell-premium ${isHighlighted ? 'ring-2 ring-purple-500' : ''} cursor-pointer rounded-sm`}
      onClick={onClick}
    >
      {dotPositions.map((pos, index) => (
        <div
          key={index}
          className={`braille-dot-premium ${pattern.includes(index + 1) ? 'active' : ''}`}
          style={{
            top: pos.top,
            left: pos.left,
          }}
        />
      ))}
    </div>
  );
};

interface BrailleExplorerProps {
  className?: string;
}

const BrailleExplorer: React.FC<BrailleExplorerProps> = ({ className }) => {
  const [inputText, setInputText] = useState('Welcome to our restaurant');
  const [language, setLanguage] = useState('english');
  const [material, setMaterial] = useState<'paper' | 'aluminum' | 'plastic'>('paper');
  const [highlightedWord, setHighlightedWord] = useState<number | null>(null);
  const [braillePattern, setBraillePattern] = useState<{ char: string; pattern: number[]; wordIndex: number }[]>([]);

  useEffect(() => {
    const words = inputText.toLowerCase().split(' ');
    const pattern: { char: string; pattern: number[]; wordIndex: number }[] = [];
    
    words.forEach((word, wordIndex) => {
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        pattern.push({
          char,
          pattern: brailleMap[char] || [],
          wordIndex
        });
      }
      // Add space after each word except the last
      if (wordIndex < words.length - 1) {
        pattern.push({
          char: ' ',
          pattern: [],
          wordIndex
        });
      }
    });
    
    setBraillePattern(pattern);
  }, [inputText]);

  const handleCellClick = (wordIndex: number) => {
    setHighlightedWord(wordIndex === highlightedWord ? null : wordIndex);
  };

  return (
    <section className={`fintech-section ${className}`} id="experience-menu">
      <div className="premium-content max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience a Menu</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Transform your menu text into beautiful, accurate braille. See how your words become tactile experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="fintech-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800">Menu Text</h3>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your menu text here..."
                className="min-h-32 text-lg border-neutral-200 focus:border-purple-500 focus:ring-purple-500"
              />
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="text-sm font-medium mb-2 block text-neutral-700">Language</label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="border-neutral-200 focus:border-purple-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block text-neutral-700">Material</label>
                  <Select value={material} onValueChange={(value: 'paper' | 'aluminum' | 'plastic') => setMaterial(value)}>
                    <SelectTrigger className="border-neutral-200 focus:border-purple-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paper">Soft Paper</SelectItem>
                      <SelectItem value="aluminum">Aluminum Plate</SelectItem>
                      <SelectItem value="plastic">Plastic Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="fintech-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">Physical Preview</h3>
              <div className="bg-gradient-to-br from-neutral-50 to-warm-50 min-h-64 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neutral-200 to-warm-200 rounded-2xl mb-4 mx-auto"></div>
                  <p className="text-sm text-neutral-500">3D menu preview will appear here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Braille Output */}
          <div className="space-y-6">
            <div className="fintech-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-neutral-800">Braille Output</h3>
              <div 
                className="p-6 rounded-xl border-2 border-dashed border-neutral-200 bg-gradient-to-br from-white to-neutral-50"
                style={{ minHeight: '200px' }}
              >
                <div className="flex flex-wrap leading-10">
                  {braillePattern.map((item, index) => (
                    <BrailleCell
                      key={index}
                      pattern={item.pattern}
                      isHighlighted={highlightedWord === item.wordIndex}
                      onClick={() => handleCellClick(item.wordIndex)}
                    />
                  ))}
                </div>
              </div>
              
              {highlightedWord !== null && (
                <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-sm font-medium text-neutral-700">
                    Highlighted word: <span className="font-bold gradient-text">
                      {inputText.split(' ')[highlightedWord]}
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button className="premium-button py-6 text-lg">
                Get Free Quote
              </Button>
              <Button variant="outline" className="py-6 text-lg border-neutral-300 hover:bg-neutral-50">
                Download Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrailleExplorer;
