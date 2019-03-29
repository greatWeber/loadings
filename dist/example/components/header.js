var Template = `
<header class="header">
  <p class="back" @click="back">
    <i class="iconfont load-back"></i>
  </p>
  <h1 class="title">{{title}}</h1>
</header>
`;
console.log('template',Template)
Vue.component('load-head', {
  props: {
    title: String
  },
  template: Template,
  data: function(){
    return {}
  },
  methods: {
    back(){

    }
  }
})
