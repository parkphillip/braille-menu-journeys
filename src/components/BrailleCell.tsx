
import React from 'react';

interface BrailleCellProps {
  pattern: number[];
  isHighlighted?: boolean;
  onClick?: () => void;
  material?: 'paper' | 'aluminum' | 'plastic';
}

const BrailleCell: React.FC<BrailleCellProps> = ({ 
  pattern, 
  isHighlighted = false, 
  onClick,
  material = 'paper'
}) => {
  const dotPositions = [
    { top: '0%', left: '0%' },      // dot 1
    { top: '33%', left: '0%' },     // dot 2
    { top: '66%', left: '0%' },     // dot 3
    { top: '0%', left: '60%' },     // dot 4
    { top: '33%', left: '60%' },    // dot 5
    { top: '66%', left: '60%' },    // dot 6
  ];

  const materialClass = {
    paper: 'material-paper',
    aluminum: 'material-aluminum',
    plastic: 'material-plastic'
  }[material];

  return (
    <div 
      className={`braille-cell ${materialClass} ${isHighlighted ? 'ring-2 ring-accent' : ''} cursor-pointer rounded-sm`}
      onClick={onClick}
    >
      {dotPositions.map((pos, index) => (
        <div
          key={index}
          className={`braille-dot ${pattern.includes(index + 1) ? 'active' : ''} ${isHighlighted ? 'highlighted' : ''}`}
          style={{
            top: pos.top,
            left: pos.left,
          }}
        />
      ))}
    </div>
  );
};

export default BrailleCell;
