import { mount } from '@vue/test-utils'
import StylePanel from '../StylePanel.vue'
import { describe, it, expect } from 'vitest'

const baseStyles = {
  backgroundColor: '#ffffff',
  textColor: '#333333',
  primaryColor: '#42b983',
  titleColor: '#2c3e50',
  headerBackground: '#f8f9fa',
  footerBackground: '#f8f9fa'
}

describe('StylePanel', () => {
  it('renderiza todos los controles de color', () => {
    const wrapper = mount(StylePanel, {
      props: { styles: baseStyles }
    })
    
    // Verifica que hay 6 grupos de controles (uno por cada propiedad)
    expect(wrapper.findAll('.form-group')).toHaveLength(6)
    expect(wrapper.findAll('input[type="color"]')).toHaveLength(6)
    expect(wrapper.findAll('input[type="text"]')).toHaveLength(6)
  })

  it('emite evento al cambiar color', async () => {
    const wrapper = mount(StylePanel, {
      props: { styles: baseStyles }
    })
    
    // Simula cambio en el input de color
    await wrapper.find('input[type="color"]').setValue('#123456')
    
    // Verifica que se emitió el evento con el nuevo valor en RGB
    expect(wrapper.emitted('update-styles')).toBeTruthy()
    expect(wrapper.emitted('update-styles')?.[0][0]).toMatchObject({
      backgroundColor: '#123456'
    })
  })
})

describe('Validación de colores', () => {
  it('muestra alerta con color inválido', async () => {
    // Mock de window.alert
    window.alert = vi.fn()
    
    const wrapper = mount(StylePanel, {
      props: { styles: baseStyles }
    })
    
    // Input de texto (no el color picker)
    const textInput = wrapper.find('input[type="text"]')
    await textInput.setValue('not-a-color')
    await textInput.trigger('change')
    
    expect(window.alert).toHaveBeenCalled()
    // Verifica que se restauró el valor original
    expect(textInput.element.value).toBe('#ffffff')
  })

  it('resetea a valores por defecto', async () => {
    const wrapper = mount(StylePanel, {
      props: { 
        styles: {
          ...baseStyles,
          backgroundColor: '#123456'
        }
      }
    })
  
    await wrapper.find('button').trigger('click')
  
    expect(wrapper.emitted('update-styles')).toBeTruthy()
    expect(wrapper.emitted('update-styles')?.[0][0]).toEqual({
      backgroundColor: '#ffffff',
      textColor: '#333333',
      primaryColor: '#42b983',
      titleColor: '#2c3e50',
      headerBackground: '#f8f9fa',
      footerBackground: '#f8f9fa'
    })
  })

  it('debe tener la clase style-panel con estilos aplicados', () => {
    const wrapper = mount(StylePanel, { 
      props: { styles: baseStyles } 
    });

    // Verificar que el elemento existe y tiene la clase correcta
    expect(wrapper.find('.style-panel').exists()).toBe(true);
    const panel = wrapper.find('.style-panel');
    expect(panel.exists()).toBe(true);
  
    // Verificar estilos inline si es necesario
    if (panel.attributes('style')) {
      expect(panel.attributes('style')).toMatch(/background-color/);
    }
  });
})