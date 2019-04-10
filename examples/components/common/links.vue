<template>
  <div class="link-wrapper flex ">
    <!-- css链接 -->
    <a class="flex-item" :href="css" target="_blank">
      css链接
    </a>
    <a class="flex-item" :href="less" target="_blank">
      less链接
    </a>
  </div>
</template>

<script>
export default {
  props: {
    css: {
      type: String,
    },
    less: {
      type: String,
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/base.less';

.link-wrapper {
  text-align: center;
  font-size: 16*@baserem;
  color: #666;
}


</style>
