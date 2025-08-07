import { nextTick } from 'vue';
import {describe, it, expect, vi} from 'vitest'
import useStylePanel from '../useStylePanel';
import type { StylePanelProps } from '@/types/styles';

describe('useStylePanel', () => {
  it('should update styles correctly', () => {
    const mockProps  = { styles: { backgroundColor: '#fff' } };
    const mockEmit = vi.fn();
    
    const { localStyles, updateStyles } = useStylePanel(
      mockProps as StylePanelProps, 
      mockEmit
    );
    
    localStyles.value.backgroundColor = '#000';
    updateStyles();
    
    expect(mockEmit).toHaveBeenCalledWith(
      'update-styles', 
      expect.objectContaining({ backgroundColor: '#000' })
    );
  });
});

describe('useStylePanel- Color Validation', () => {
  it('should accept valid HEX colors', () => {
    const mockProps = { styles: { backgroundColor: '#fff' } };
    const mockEmit = vi.fn();
    const { validateColor } = useStylePanel(mockProps as StylePanelProps, mockEmit);
    
    // Mock window.alert para no mostrarlo en pruebas
    window.alert = vi.fn();
    
    validateColor('backgroundColor');
    expect(mockEmit).toHaveBeenCalled();
  });

  it('should reject invalid HEX colors and reset value', () => {
    const mockProps = { styles: { backgroundColor: '#fff' } };
    const mockEmit = vi.fn();
    const { localStyles, validateColor } = useStylePanel(
      mockProps as StylePanelProps, 
      mockEmit
    );
    
    localStyles.value.backgroundColor = 'not-a-color' as any;
    window.alert = vi.fn();
    
    validateColor('backgroundColor');
    
    expect(window.alert).toHaveBeenCalled();
    expect(localStyles.value.backgroundColor).toBe('#fff');
    expect(mockEmit).not.toHaveBeenCalled();
  });
});

describe('useStylePanel - resetStyles', () => {
    it('should reset to default styles', () => {
    const mockProps = { styles: { backgroundColor: '#000' } };
    const mockEmit = vi.fn();
    const { resetStyles } = useStylePanel(mockProps as StylePanelProps, mockEmit);
    
    resetStyles();
    
    expect(mockEmit).toHaveBeenCalledWith('update-styles', {
      backgroundColor: '#ffffff',
      textColor: '#333333',
      primaryColor: '#42b983',
      titleColor: '#2c3e50',
      headerBackground: '#f8f9fa',
      footerBackground: '#f8f9fa'
    });
  });
});

describe('useStylePanel - Props Reactivity', () => {
  it('should update localStyles when props change', () => {
    let currentProps = { styles: { backgroundColor: '#fff' } };
    const mockEmit = vi.fn(); 
    const getComposable = () => useStylePanel(currentProps as StylePanelProps, mockEmit);  
    const { localStyles } = getComposable();  
    currentProps = { styles: { ...currentProps.styles, backgroundColor: '#000' } };  
    const { localStyles: newLocalStyles } = getComposable();
  
    expect(newLocalStyles.value.backgroundColor).toBe('#000');
  });
});

describe('useStylePanel - validateColor', () => {
  it('should log the field being validated', () => {
    const mockProps = { styles: { primaryColor: '#42b983' } };
    const mockEmit = vi.fn();
    const consoleSpy = vi.spyOn(console, 'log');
    
    const { validateColor } = useStylePanel(mockProps as StylePanelProps, mockEmit);
    validateColor('primaryColor');
    
    expect(consoleSpy).toHaveBeenCalledWith('primaryColor');
    consoleSpy.mockRestore();
  });
});

describe('useStylePanel - Integration', () => {
  it('should handle full style update flow', () => {
    const mockProps = { styles: { 
      backgroundColor: '#fff',
      textColor: '#000'
    }};
    const mockEmit = vi.fn();
    
    const { 
      localStyles,
      validateColor,
      updateStyles
    } = useStylePanel(mockProps as StylePanelProps, mockEmit);
    
    // 1. Cambiar valor
    localStyles.value.backgroundColor = '#ccc';
    
    // 2. Validar
    validateColor('backgroundColor');
    
    // 3. Actualizar
    updateStyles();
    
    expect(mockEmit).toHaveBeenCalledWith(
      'update-styles',
      expect.objectContaining({
        backgroundColor: '#ccc',
        textColor: '#000' // Mantiene el valor original
      })
    );
  });
});

describe('useStylePanel - Edge cases', () => {
  it('should handle empty props gracefully', () => {
    const mockProps = { styles: {} } as unknown as StylePanelProps;
    expect(() => useStylePanel(mockProps, vi.fn())).not.toThrow();
  });
});
