<template>
<button class="btn primary" @click="btn">{{value}}</button>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    btn(){
      console.log('you click button!');
      this.$emit('btn');
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/btn.less';
</style>
