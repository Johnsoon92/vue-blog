import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HomePage,
      meta: {title: 'BootstrapVue Demo Project'},
      children: [
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
