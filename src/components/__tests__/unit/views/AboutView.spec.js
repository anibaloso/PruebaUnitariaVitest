import App from '@/App.vue'
import AboutView from '@/views/AboutView.vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createWebHistory, createRouter } from 'vue-router'

describe('AboutView', () => {
    it('Se renderiza AboutView.vue despues de navegar ala ruta "about"', async () => {
        const routerPruebas = createRouter({
            history: createWebHistory(),
            routes: [
                {
                    path: '/about',
                    name: 'about',
                    component: AboutView
                }
            ]
        })

        //navegamos ala ruta /about
        routerPruebas.push({ name: 'about' })
        await routerPruebas.isReady()
        
        //monta el componente app con el router inyectado
        const wrapper = mount(App, {
            global: {
                plugins: [routerPruebas]
            }
        })

        //comprobamos si AboutView esta predente en el renderizado
        expect(wrapper.findComponent(AboutView).exists()).toBeTruthy()
    })

    const wrapper=mount(AboutView)
    it('El HTML se mantiene en las pruebas',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })
})