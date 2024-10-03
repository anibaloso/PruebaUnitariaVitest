
import HomeView from '@/views/HomeView.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'


describe('HomeView.vue', () => {
    it('El HTML se mantiene en las pruebas', () => {
        const wrapper = mount(HomeView)
        expect(wrapper.html()).toMatchSnapshot()
    })
})