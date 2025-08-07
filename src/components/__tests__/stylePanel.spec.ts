import { mount } from '@vue/test-utils';
import StylePanel from '../StylePanel.vue';
import { describe, it, expect } from 'vitest';

describe('StylePanel', () => {
  it('emite update-styles al cambiar color', async () => {
    const wrapper = mount(StylePanel, {
      props: {
        styles: {
          backgroundColor: '#fff',
          textColor: '#000'
        }
      }
    });

    await wrapper.find('input[type="color"]').setValue('#ffffff');
    expect(wrapper.emitted()).toHaveProperty('update-styles');
  });
});