import { mount } from '@vue/test-utils';
import PreviewLayout from '@/components/PreviewLayout.vue';
import { describe, it, expect } from 'vitest';

describe('PreviewLayout', () => {
  it.todo('renders with correct styles', () => {
    const wrapper = mount(PreviewLayout, {
      props: {
        styles: {
          backgroundColor: '#ffffff',
          textColor: '#000000',
          primaryColor: '#42b983',
          titleColor: '#2c3e50',
          headerBackground: '#f8f9fa',
          footerBackground: '#f8f9fa'
        }
      }
    });

    expect(wrapper.find('header').attributes('style')).toContain('background-color: #f8f9fa');
    expect(wrapper.find('h1').attributes('style')).toContain('color: #42b983');
  });

  it.todo('updates when props change', async () => {
    const wrapper = mount(PreviewLayout, {
      props: {
        styles: {/* styles iniciales */ }
      }
    });

    await wrapper.setProps({
      styles: {
        ...wrapper.props().styles,
        primaryColor: '#ff0000'
      }
    });

    expect(wrapper.find('h1').attributes('style')).toContain('color: #ff0000');
  });
});
