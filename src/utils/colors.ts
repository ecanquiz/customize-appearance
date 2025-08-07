import type { HexColor } from "@/types/colors";

export function isHexColor(value: string): value is HexColor {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
}

export function getContrastColor (hexColor: HexColor): HexColor {
  if (!isHexColor(hexColor)) return '#ffffff';

  // Convert to RGB
  const r = parseInt(hexColor.substring(1, 2), 16);
  const g = parseInt(hexColor.substring(3, 2), 16);
  const b = parseInt(hexColor.substring(5, 2), 16);
      
 // Calculate luminosity
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
};