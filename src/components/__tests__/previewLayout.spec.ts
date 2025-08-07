import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PreviewLayout from '../PreviewLayout.vue'
import { hexToRgb } from '@/utils/colors'

const baseStyles = {
  backgroundColor: '#ffffff',
  textColor: '#333333',
  primaryColor: '#42b983',
  titleColor: '#2c3e50',
  headerBackground: '#f8f9fa',
  footerBackground: '#f8f9fa'
}

describe('PreviewLayout', () => {
  it('renderiza correctamente con estilos base', () => {
    const wrapper = mount(PreviewLayout, {
      props: { styles: baseStyles } 
    })

    // Verifica que los elementos principales existan
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('Mi Sitio Web')
  })

  it('aplica estilos dinámicos al contenedor principal', () => {
    const wrapper = mount(PreviewLayout, {
      props: { 
        styles: {
          ...baseStyles,
          backgroundColor: '#000000', // HEX
          textColor: '#ffffff' // HEX
        }
      }
    })

    const layout = wrapper.find('.preview-layout')
    const style = layout.attributes('style')
  
    // Verifica en formato RGB (como lo devuelve el navegador)

    // hexToRgb
    expect(layout.attributes('style')).toContain(`background-color: ${hexToRgb('#000000')}`)
    expect(layout.attributes('style')).toContain(`color: ${hexToRgb('#ffffff')}`)
    expect(style).toContain('background-color: rgb(0, 0, 0)') // #000000 → rgb(0, 0, 0)
    expect(style).toContain('color: rgb(255, 255, 255)') // #ffffff → rgb(255, 255, 255)
  })
})

describe('Aplicación de estilos', () => {
  it('aplica colores correctos al header', () => {
    const wrapper = mount(PreviewLayout, {
      props: { 
        styles: {
          ...baseStyles,
          headerBackground: '#123456'
        }
      }
    })

    const header = wrapper.find('header')
    expect(header.attributes('style')).toContain(`background-color: ${hexToRgb('#123456')}`) 
  })

  it('aplica color principal a los enlaces', () => {
    const wrapper = mount(PreviewLayout, {
      props: { 
        styles: {
          ...baseStyles,
          primaryColor: '#ff0000'
        }
      }
    })

    const links = wrapper.findAll('nav a')
    links.forEach(link => {
      expect(link.attributes('style')).toContain(`color: ${hexToRgb('#ff0000')}`) 
    })
  })
})

describe('Comportamiento', () => {
  it('actualiza estilos cuando cambian las props', async () => {
    const wrapper = mount(PreviewLayout, {
      props: { styles: baseStyles }
    })

    const newStyles = {
      ...baseStyles,
      titleColor: '#ff0000',
      footerBackground: '#654321'
    }

    await wrapper.setProps({ styles: newStyles })

    expect(wrapper.find('h2').attributes('style'))
      .toContain(`color: ${hexToRgb('#ff0000')}`) 
    expect(wrapper.find('footer').attributes('style'))
      .toContain(`background-color: ${hexToRgb('#654321')}`) 
  })
})

describe('Estructura del componente', () => {
  it('contiene todos los elementos esperados', () => {
    const wrapper = mount(PreviewLayout, {
      props: { styles: baseStyles }
    })

    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('header h1').exists()).toBe(true)
    expect(wrapper.find('header nav').exists()).toBe(true)
    expect(wrapper.find('main article').exists()).toBe(true)
    expect(wrapper.find('main aside').exists()).toBe(true)
    expect(wrapper.find('footer p').exists()).toBe(true)
  })

  it('muestra el contenido correcto', () => {
    const wrapper = mount(PreviewLayout, {
      props: { styles: baseStyles }
    })

    expect(wrapper.find('h1').text()).toBe('Mi Sitio Web')
    expect(wrapper.find('h2').text()).toBe('Artículo Principal')
    expect(wrapper.find('footer p').text()).toContain('©')
  })
})