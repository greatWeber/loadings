import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{
        title:'首页'
      },
      component: () =>
        import ('@ex/components/index')
    },
    {
      path: '/weixin-loading',
      name: 'weixin-loading',
      meta:{
        title:'仿微信加载样式'
      },
      component: () =>
        import ('@ex/components/weixin-loading')
    },

    {
      path: '/type-one-loading',
      name: 'type-one-loading',
      meta:{
        title:'加载样式-01'
      },
      component: () =>
        import ('@ex/components/type-one-loading')
    },
    {
      path: '/type-two-loading',
      name: 'type-two-loading',
      meta:{
        title:'加载样式-02'
      },
      component: () =>
        import ('@ex/components/type-two-loading')
    }
  ]
})
