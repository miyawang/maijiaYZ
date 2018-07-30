// 使用vue-router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [
    {
      path: '/',
      component: require('./components/member.vue'),
    },
    {
      path: '/address',
      component: require('./components/address.vue'),
      children: [
        {
          path:'',
          // component:require('./components/all.vue'),
          //也可以进行重定向
          redirect:'all',
        },
        {
          path:'all',
          component:require('./components/all.vue'),
        },  
        {
          path:'form',
          component:require('./components/form.vue'),
        }
      ]
    }
]
// 创建router实例
let router = new Router({
  routes
})

// 根组件 挂载点 根组件注入
new Vue({
  el: '#app',
  router,
})
