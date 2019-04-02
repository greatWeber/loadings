import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/weixin_loading',
      name: 'weixin_loading',
      meta:{
        title:'仿微信加载样式'
      },
      component: () =>
        import ('@ex/components/weixin-loading')
    }
  ]
})
