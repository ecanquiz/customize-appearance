import useApp from '@/composables/useApp';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('useApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with default styles', () => {
    const { currentStyles } = useApp();

    expect(currentStyles.value.backgroundColor).toBe('#ffffff');
  });

  it('should load saved styles from localStorage', async() => {
    localStorage.setItem('themeStyles', JSON.stringify({ backgroundColor: '#000000' }));
    const { currentStyles, loadSavedStyles } = useApp();  // _test

    //a_test.loadSavedStyles();
    loadSavedStyles();
    expect(currentStyles.value.backgroundColor).toBe('#000000');
  });

  it('should update styles and save to localStorage', () => {
    const { currentStyles, handleStyleUpdate } = useApp();
    handleStyleUpdate({ backgroundColor: '#123456' });
    
    expect(currentStyles.value.backgroundColor).toBe('#123456');
    expect(localStorage.getItem('themeStyles')).toContain('123456');
  });
});
