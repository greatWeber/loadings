<template>
  <header class="header">
    <p class="back" @click="back">
      <i class="iconfont load-back"></i>
    </p>
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    back(){
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/header.less';

</style>
