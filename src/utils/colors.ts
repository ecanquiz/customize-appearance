import type { HexColor } from "@/types/colors";

export function isHexColor(value: string): value is HexColor {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
}

export function getContrastColor (hexColor: HexColor): HexColor {
  if (!isHexColor(hexColor)) return '#ffffff';

  // Expand short format (#abc) to long format (#aabbcc)
  const fullHex = hexColor.length === 4 
    ? `#${hexColor[1]}${hexColor[1]}${hexColor[2]}${hexColor[2]}${hexColor[3]}${hexColor[3]}`
    : hexColor;

  // Convert to RGB
  const r = parseInt(fullHex.substring(1, 3), 16);
  const g = parseInt(fullHex.substring(3, 5), 16);
  const b = parseInt(fullHex.substring(5, 7), 16);
      
 // Calculate luminosity
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
};


export function hexToRgb(hex: string) {
  // Remove the # if present
  const hexColor = hex.replace(/^#/, '');
  
  // Handle both 3 and 6 character formats
  const regex = /^([a-f\d])([a-f\d])([a-f\d])$/i;
  const shortMatch = hexColor.match(regex);
  
  if (shortMatch) {
    // Expand short format (#abc → #aabbcc)
    const r = parseInt(shortMatch[1] + shortMatch[1], 16);
    const g = parseInt(shortMatch[2] + shortMatch[2], 16);
    const b = parseInt(shortMatch[3] + shortMatch[3], 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Handle normal 6-character format
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : '';
}