import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/city')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
    // 异步组件可以用于任何组件上，但是不超过1M的JS文件不推荐使用异步组件，会降低代码性能
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
