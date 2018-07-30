import Vue from 'vue'
import Router from 'vue-router'
// main home pages
const home = () => import(/* webpackChunkName: 'common' */'@/pages/home')
const error = () => import(/* webpackChunkName: 'common' */'@/pages/error')
const front = () => import(/* webpackChunkName: 'common' */'@/pages/front/index')
const backend = () => import(/* webpackChunkName: 'common' */'@/pages/backend/index')
// front home pages
const html = () => import(/* webpackChunkName: 'front' */'@/pages/front/html/index')
const javascript = () => import(/* webpackChunkName: 'front' */'@/pages/front/javascript/index')
const css = () => import(/* webpackChunkName: 'front' */'@/pages/front/css/index')
// backend home pages
const java = () => import(/* webpackChunkName: 'backend' */'@/pages/backend/java/index')
// css pages
const triangle = () => import(/* webpackChunkName: 'css' */'@/pages/front/css/triangle')



Vue.use(Router)

export default new Router({
  routes: [
    // 主页
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {title: 'Home - Blog of Sean John'},
    },
    // 出错页
    {
      path: '/error',
      name: 'error',
      component: error,
      meta: {title: 'Error - Blog of Sean John'},
    },
    // 前端
    {
      path: '/front',
      name: 'front',
      component: front,
      meta: {title: 'Front Home - Blog of Sean John'},
      children: [
        {
          path: 'html',
          name: 'html',
          component: html,
          meta: {title: 'HTML Home - Blog of Sean John'},
          children: [
          ]
        },
        {
          path: 'javascript',
          name: 'javascript',
          component: javascript,
          meta: {title: 'JavaScript Home - Blog of Sean John'},
          children: [
          ]
        },
        {
          path: 'css',
          name: 'css',
          component: css,
          meta: {title: 'CSS Home - Blog of Sean John'},
          children: [
            {
              path: 'triangle',
              name: 'triangle',
              component: triangle,
              meta: {title: 'Triangle implemented by pure CSS - Blog of Sean John'}
            },
            {
              path: 'doublewinglayout',
              name: 'doublewinglayout',
              component: triangle,
              meta: {title: 'doublewinglayout - Blog of Sean John'}
            },
          ]
        },
      ]
    },
    // 后端
    {
      path: '/backend',
      name: 'backend',
      component: backend,
      meta: {title: 'Backend Home - Blog of Sean John'},
      children: [
        {
          path: 'java',
          name: 'java',
          component: java,
          meta: {title: 'JAVA Home - Blog of Sean John'},
          children: [
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
