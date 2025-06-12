
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import BrailleCell from './BrailleCell';

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
    <section className={`py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience a Menu</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your menu text into beautiful, accurate braille. See how your words become tactile experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Menu Text</h3>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your menu text here..."
                className="min-h-32 text-lg"
              />
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Language</label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
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
                  <label className="text-sm font-medium mb-2 block">Material</label>
                  <Select value={material} onValueChange={(value: 'paper' | 'aluminum' | 'plastic') => setMaterial(value)}>
                    <SelectTrigger>
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
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Physical Preview</h3>
              <div className="menu-preview bg-gradient-to-br from-slate-50 to-slate-100 min-h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-lg mb-4 mx-auto"></div>
                  <p className="text-sm text-muted-foreground">3D menu preview will appear here</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Braille Output */}
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Braille Output</h3>
              <div 
                className={`p-6 rounded-lg border-2 border-dashed border-border ${
                  material === 'paper' ? 'material-paper' : 
                  material === 'aluminum' ? 'material-aluminum' : 
                  'material-plastic'
                }`}
                style={{ minHeight: '200px' }}
              >
                <div className="flex flex-wrap leading-10">
                  {braillePattern.map((item, index) => (
                    <BrailleCell
                      key={index}
                      pattern={item.pattern}
                      isHighlighted={highlightedWord === item.wordIndex}
                      onClick={() => handleCellClick(item.wordIndex)}
                      material={material}
                    />
                  ))}
                </div>
              </div>
              
              {highlightedWord !== null && (
                <div className="mt-4 p-4 bg-accent rounded-lg">
                  <p className="text-sm font-medium">
                    Highlighted word: <span className="font-bold">
                      {inputText.split(' ')[highlightedWord]}
                    </span>
                  </p>
                </div>
              )}
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Button className="tactile-button py-6 text-lg">
                Get Quote
              </Button>
              <Button variant="outline" className="tactile-button py-6 text-lg">
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
