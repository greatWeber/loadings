<template >
  <div class="weixin-loading flex flex-colmun align-center">
    <div class=" flex-item flex align-center">
      <div class="weixin-loading__wrapper">
        <p class="weixin-loading-p weixin-loading-p_1"></p>
        <p class="weixin-loading-p weixin-loading-p_2"></p>
        <p class="weixin-loading-p weixin-loading-p_3"></p>
        <p class="weixin-loading-p weixin-loading-p_4"></p>
        <p class="weixin-loading-p weixin-loading-p_5"></p>
        <p class="weixin-loading-p weixin-loading-p_6"></p>
        <p class="weixin-loading-p weixin-loading-p_7"></p>
        <p class="weixin-loading-p weixin-loading-p_8"></p>
        <p class="weixin-loading-p weixin-loading-p_9"></p>
        <p class="weixin-loading-p weixin-loading-p_10"></p>
        <p class="weixin-loading-p weixin-loading-p_11"></p>
        <p class="weixin-loading-p weixin-loading-p_12"></p>
      </div>
    </div>
    <p class="weixin-loading__title flex-item flex align-center">
      <span class="common-loading__span">{{title}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'weixin-loading',
  props: {
    title: {
      type: String,
      default: '加载中...'
    }
  }

}
</script>

<style lang="less" scoped>
@import '~@/assets/style/weixin-loading.less';
</style>
