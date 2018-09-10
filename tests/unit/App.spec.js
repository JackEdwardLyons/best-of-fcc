import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('CardItem.vue', () => {
  it('renders the entire application via a single div with the id of "app"', () => {
    const wrapper = mount(App)
    expect(wrapper.attributes().id).toContain('app')
  })
})
