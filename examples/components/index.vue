<template>
<section>
  <header class="">
    <!-- <span class="iconfont load-loading_ico "></span> -->
    <div class="loading-animation">
      <span class="ball"></span>
      <span class="shadow"></span>
    </div>
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
  border-top: 1px solid #fff;

  // span {
  //   font-size: 50*@baserem;
  //   margin: 0 auto;
  //   animation: loading 1s linear infinite;
  //   transform-origin: center center;
  // }
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

.loading-animation {
  height: 100%;
  transform-style: preserve-3d;
  .ball {
    display: block;
    width: 50*@baserem;
    height: 50*@baserem;
    border-radius: 50%;
    margin: 50*@baserem auto;
    box-shadow: inset 0 0 30*@baserem #ccc;
    animation: ball 2s linear infinite;
  }
  .shadow {
    display: block;
    width: 40*@baserem;
    height: 15*@baserem;
    margin: 0 auto;
    border-radius: 50%;
    background: #666;
    animation: shadows 2s linear infinite;
    transform: translateZ(1px);
  }
}

@keyframes ball {
  0% {
    transform: translateY(0) scale(1);
  }

  20% {
    transform: translateY(-25*@baserem) scale( 0.8,1.2);
  }

  40% {
    transform: translateY(-30*@baserem) scale(1);
  }

  60% {
    transform: translateY(50*@baserem) scale(0.8,1);
  }

  80% {
    transform: translateY(60*@baserem) scale(1.2,0.8) translateZ(2px);
  }

  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes shadows {
  0% {
    transform:  scale(1);
  }

  25% {
    transform: scale( 0.8);
  }

  50% {
    transform: scale(0.9);
  }

  70% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
