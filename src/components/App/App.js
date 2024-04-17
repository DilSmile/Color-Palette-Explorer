import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import ColorDisplay from './components/ColorDisplay';
import { adjustHue } from './utils/colorUtils';
import './App.css';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleAdjustHue = (degrees) => {
    const newColor = adjustHue(selectedColor, degrees);
    setSelectedColor(newColor);
  };

  return (
    <div className="app">
      <h1>Color Palette Explorer</h1>
      <div className="color-picker-container">
        <ColorPicker onColorSelect={handleColorSelect} />
      </div>
      <div className="color-display-container">
        <ColorDisplay color={selectedColor} />
        <button onClick={() => handleAdjustHue(30)}>Adjust Hue +30°</button>
        <button onClick={() => handleAdjustHue(-30)}>Adjust Hue -30°</button>
      </div>
    </div>
  );
};

export default App;
