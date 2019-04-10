<template>
  <div class="tip-wrapper">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "提示: 点击 '纯样式展示' 标题可切换导航条哦^*^"
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/base.less';


.tip-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 5*@baserem 0;
  font-size: 16*@baserem;
  background: @baseColor;
  color: #666;
}
</style>
