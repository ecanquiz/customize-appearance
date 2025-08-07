import { describe, it, expect } from 'vitest';
import { getContrastColor, isHexColor, hexToRgb } from '@/utils/colors';

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

  describe('hexToRgb', () => {
    it('convierte colores HEX de 6 dígitos a RGB', () => {
      expect(hexToRgb('#000000')).toBe('rgb(0, 0, 0)');
      expect(hexToRgb('#ffffff')).toBe('rgb(255, 255, 255)');
      expect(hexToRgb('#ff0000')).toBe('rgb(255, 0, 0)');
      expect(hexToRgb('#00ff00')).toBe('rgb(0, 255, 0)');
      expect(hexToRgb('#0000ff')).toBe('rgb(0, 0, 255)');
      expect(hexToRgb('#1a2b3c')).toBe('rgb(26, 43, 60)');
    });

    it('convierte colores HEX de 3 dígitos a RGB', () => {
      expect(hexToRgb('#000')).toBe('rgb(0, 0, 0)');
      expect(hexToRgb('#fff')).toBe('rgb(255, 255, 255)');
      expect(hexToRgb('#f00')).toBe('rgb(255, 0, 0)');
      expect(hexToRgb('#0f0')).toBe('rgb(0, 255, 0)');
      expect(hexToRgb('#00f')).toBe('rgb(0, 0, 255)');
      expect(hexToRgb('#1a2')).toBe('rgb(17, 170, 34)'); // 1a2 → 11 aa 22
      expect(hexToRgb('c8f')).toBe('rgb(204, 136, 255)');
    });

    it('funciona sin el símbolo #', () => {
      expect(hexToRgb('000000')).toBe('rgb(0, 0, 0)');
      expect(hexToRgb('ffffff')).toBe('rgb(255, 255, 255)');
      expect(hexToRgb('00ff00')).toBe('rgb(0, 255, 0)');
    });

    it('maneja valores inválidos', () => {
      expect(hexToRgb('')).toBe('');
      expect(hexToRgb('not-a-color')).toBe('');
      expect(hexToRgb('#zzz')).toBe('');
      expect(hexToRgb('#12345')).toBe(''); // Longitud incorrecta
      expect(hexToRgb('#1234567')).toBe(''); // Longitud incorrecta
    });

    it('es case insensitive', () => {
      expect(hexToRgb('#FFFFFF')).toBe('rgb(255, 255, 255)');
      expect(hexToRgb('#ffFFff')).toBe('rgb(255, 255, 255)');
      expect(hexToRgb('#AbCdEf')).toBe('rgb(171, 205, 239)');
    });

    it('maneja formatos mixtos', () => {
      expect(hexToRgb('#AbC')).toBe('rgb(170, 187, 204)');
      expect(hexToRgb('1F3')).toBe('rgb(17, 255, 51)');
    });

    it('conserva el comportamiento para HEX de 6 dígitos', () => {
     expect(hexToRgb('#aabbcc')).toBe('rgb(170, 187, 204)');
     expect(hexToRgb('112233')).toBe('rgb(17, 34, 51)');
    });
  });
});
