var Template = `
<button class="btn primary" @click="btn">{{value}}</button>
`;
console.log('template',Template)
Vue.component('load-btn', {
  props: {
    value: String
  },
  template: Template,
  data: function(){
    return {}
  },
  methods: {
    btn(){
      console.log('you click button!');
      this.$emit('btn');
    }
  }
})
