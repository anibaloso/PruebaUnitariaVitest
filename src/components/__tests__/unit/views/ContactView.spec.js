import ContactView from "@/views/ContactView.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from 'vitest';
import { createRouter, createWebHistory } from "vue-router";

describe('ContactView', () => {
    it('renderiza ContactView.vue despues de navegar en la ruta ContacView', async () => {
        const routerPruebas = createRouter({
            history: createWebHistory(),
            routes: [
                {
                    path: '/contact',
                    name: 'contact',
                    component: ContactView
                }
            ]
        })

        routerPruebas.push({ name: 'contact' })
        await routerPruebas.isReady()

        const wrapper = mount(ContactView, {
            global: {
                plugins: [routerPruebas]
            }
        })

        expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    })
})