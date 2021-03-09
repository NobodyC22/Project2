import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './views/Inicio.vue'
import Portafolio from './views/Portafolio.vue'
import Contacto from './views/Contacto.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/portafolio',
            name: 'portafolio',
            component: Portafolio
        },{
            path: '/contacto',
            name: 'contacto',
            component: Contacto
        }
    ]
})