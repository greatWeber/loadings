<template>
  <div class="codebox-wrapper">
    <textarea id="code" class="codebox" readonly :value="value"></textarea>
    <span class="copy" data-clipboard-target="#code">copy</span>
  </div>
</template>

<script>
export default {
  name: 'copy',
  props: {
    value: {
      type: String,
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/base.less';

.codebox-wrapper {

    position: relative;
    .codebox {
      display: block;
      width: 90%;
      height: 200*@baserem;
      margin: 20*@baserem auto;
      background: #f5f5f5;
      overflow: scroll;
    }

    .copy {
      position: absolute;
      top:0;
      left:5%;
      z-index: 1;
      background: rgba(0,0,0,0.5);
      color: #fff;
      padding: 10*@baserem 20*@baserem;
      font-size: 16*@baserem;
    }

}

</style>
