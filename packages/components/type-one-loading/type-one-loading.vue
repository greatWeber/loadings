<template >
  <div class="type-one-loading flex flex-colmun align-center">
    <div class=" flex-item flex align-center">
      <div class="type-one-loading__wrapper">
        <p class="type-one-loading-p type-one-loading-p_1"></p>
        <p class="type-one-loading-p type-one-loading-p_2"></p>
        <p class="type-one-loading-p type-one-loading-p_3"></p>
        <p class="type-one-loading-p type-one-loading-p_4"></p>
        <p class="type-one-loading-p type-one-loading-p_5"></p>
      </div>
    </div>
    <p class="type-one-loading__title flex-item flex align-center">
      <span class="common-loading__span">{{title}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'type-one-loading',
  props: {
    title: {
      type: String,
      default: '加载中...'
    }
  }

}
</script>

<style lang="less" scoped>
@import '~@/assets/style/type-one-loading.less';
</style>
