import React, { useState } from 'react';

const ColorPicker = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    onColorSelect(newColor);
  };

  return (
    <div>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
