import { getContrastColor, isHexColor } from '@/utils/colors';
import { describe, it, expect } from 'vitest';

describe('Color Utilities', () => {
  describe('isHexColor', () => {
    it('should validate correct HEX colors', () => {
      expect(isHexColor('#ffffff')).toBe(true);
      expect(isHexColor('#fff')).toBe(true);
      expect(isHexColor('#abc123')).toBe(true);
    });

    it('should reject invalid HEX colors', () => {
      expect(isHexColor('ffffff')).toBe(false);
      expect(isHexColor('#zzz')).toBe(false);
      expect(isHexColor('#12345')).toBe(false);
    });
  });

  describe('getContrastColor', () => {
    it('should return dark color for light backgrounds', () => {
      expect(getContrastColor('#ffffff')).toBe('#000000');
    });

    it('should return light color for dark backgrounds', () => {
      expect(getContrastColor('#000000')).toBe('#ffffff');
    });

    it('should handle short HEX notation', () => {
      expect(getContrastColor('#fff')).toBe('#000000'); // White -> Black
      expect(getContrastColor('#000')).toBe('#ffffff'); // Black -> White
      expect(getContrastColor('#abc')).toBe('#000000'); // Light gray -> Black
      expect(getContrastColor('#369')).toBe('#ffffff'); // Dark gray -> Blanco
    });
  });
});
