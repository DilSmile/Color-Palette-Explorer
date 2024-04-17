import React from 'react';

const ColorDisplay = ({ color }) => {
  return (
    <div style={{ backgroundColor: color, width: '100px', height: '100px' }}>
      <p>Selected Color: {color}</p>
    </div>
  );
};

export default ColorDisplay;