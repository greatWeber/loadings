<template >
  <div class="type-two-loading flex flex-colmun align-center">
    <div class=" flex-item flex align-center">
      <div class="type-two-loading__wrapper">
        <p class="type-two-loading-p type-two-loading-p_1"></p>
        <p class="type-two-loading-p type-two-loading-p_2"></p>
        <p class="type-two-loading-p type-two-loading-p_3"></p>
        <p class="type-two-loading-p type-two-loading-p_4"></p>
        <p class="type-two-loading-p type-two-loading-p_5"></p>
      </div>
    </div>
    <p class="type-two-loading__title flex-item flex align-center">
      <span class="common-loading__span">加载中...</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'type-two-loading',
  props: {
    title: {
      type: String,
      default: '加载中...'
    }
  }

}
</script>

<style lang="less" scoped>
@import '~@/assets/style/type-two-loading.less';
</style>
