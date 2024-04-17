// Функция для изменения оттенка цвета
export const adjustHue = (color, degrees) => {
    // Преобразование цвета в формат HSL
    const hslColor = rgbToHsl(hexToRgb(color));
    // Изменение оттенка
    hslColor[0] += degrees / 360;
    // Преобразование обратно в RGB
    const rgbColor = hslToRgb(hslColor);
    // Преобразование RGB в hex формат
    return rgbToHex(rgbColor);
  };
  
  // Функция для преобразования цвета из hex в RGB
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  
  // Функция для преобразования цвета из RGB в hex
  const rgbToHex = (rgb) => {
    return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
  };
  
  // Функция для преобразования цвета из RGB в HSL
  const rgbToHsl = (rgb) => {
    let r = rgb.r / 255;
    let g = rgb.g / 255;
    let b = rgb.b / 255;
  
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
  
    return [h, s, l];
  };
  
  // Функция для преобразования цвета из HSL в RGB
  const hslToRgb = (hsl) => {
    let h = hsl[0];
    let s = hsl[1];
    let l = hsl[2];
  
    let r, g, b;
  
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
  
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
  
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  };
  
  export default { adjustHue };
  