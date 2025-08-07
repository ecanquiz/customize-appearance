import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { describe, it, expect } from 'vitest'

describe('App.vue', () => {
  it('matches snapshot', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
