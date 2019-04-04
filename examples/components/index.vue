<template>
<section>
  <header class="flex align-center">
    <span class="iconfont load-loading_ico "></span>
  </header>
  <section class="list-wrapper">
    <router-link class="list-item" :to="{ name: item.name }" v-for="(item,i) in list" :key="i">
      <span>{{item.name}}</span>
    </router-link>
  </section>

</section>
</template>

<script>
export default {
  data(){
    return {
      list: []
    }
  },
  created(){
    this.list = this.$router.options.routes;
  }

}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common/base.less';

header {
  width: 100%;
  height: 200*@baserem;

  span {
    font-size: 50*@baserem;
    margin: 0 auto;
    animation: loading 1s linear infinite;
    transform-origin: center center;
  }
}

.list-wrapper {
  width: 100%;

  .list-item {
    display: block;
    width: 100%;
    line-height: 50*@baserem;
    font-size: 16*@baserem;
    color: #666;
    text-indent: 10*@baserem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
}

@keyframes loading {
  to {
    transform: rotate(360deg);
  }

  from {
    transform: rotate(0deg);
  }
}
</style>
