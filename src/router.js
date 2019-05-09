import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: () => import(/* webpackChunkName: "about" */ './views/FormView.vue')
    },
    {
      path: '/dpicker',
      name: 'dpicker',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/DPicker.vue')
    },
    {
      path: '/smodal',
      name: 'smodal',
      component: () => import('./views/SModalView.vue')
    }
  ]
})
