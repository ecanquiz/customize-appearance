import {describe, it, expect, vi} from 'vitest'
import useStylePanel from '../useStylePanel';

describe('useStylePanel', () => {
  it('should update styles correctly', () => {
    const mockProps = { styles: { backgroundColor: '#fff' } };
    const mockEmit = vi.fn();
    
    const { localStyles, updateStyles } = useStylePanel(
      mockProps, 
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