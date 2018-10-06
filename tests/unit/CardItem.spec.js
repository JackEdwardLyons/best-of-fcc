import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'
import CardItem from '@/components/CardItem.vue'

describe('CardItem.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  it('renders the MainCard template with correct props', () => {
    const CARD_ITEM = mount(CardItem, {
      store,
      localVue,
      propsData: {
        project: {
          projectTitle: 'Testing Vue App',
          projectAuth: 'Jack'
        }
      }
    })
    expect(CARD_ITEM.find('[data-test__project-title]').text()).toContain('Testing Vue App')
    expect(CARD_ITEM.find('[data-test__project-auth]').text()).toBe('posted by Jack')
  })
})
