<template >
  <section id="loading">
    <load-head title="加载样式-01"></load-head>

    <h2 class="line" @click="change(1)">纯样式展示:</h2>
    <div class="content" v-if="index==1" >
      <div ref="code">
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
            <span class="common-loading__span">加载中...</span>
          </p>
        </div>

      </div>

      <!-- 拷贝 -->
      <load-copy :value="code"></load-copy>

      <!-- 链接 -->
      <load-links :css="css" :less="less"></load-links>

      <!-- 提示 -->
      <load-tip></load-tip>

    </div>
    <!--
      ——————————————————————————————————我是分割线——————————————————————————————————
     -->
     <h2 class="line" @click="change(2)">js调用:</h2>
     <div class="content" v-if="index==2">
       <load-btn value="js调用:(open)" @btn="openLoad"></load-btn>
       <load-btn value="js调用:(close)" @btn="closeLoad"></load-btn>

       <section class="explain">
         <p>说明:</p>
         <p>可通过var loading = new Loading({type:'type-one'});loading.open()来调用</p>
         <p>也可以通过new一个实例后，赋值给vue.prototype来使用。Vue.protptype.$loading = loading; this.$loading.open()</p>
       </section>
     </div>

     <!--
       ——————————————————————————————————我是分割线——————————————————————————————————
      -->
      <h2 class="line" @click="change(3)">vue组件调用:</h2>
      <div class="content" v-if="index==3">
        <load-btn value="调用vue组件" @btn="show=!show" ></load-btn>
        <type-one-loading title="加载中.." v-show="show"></type-one-loading>
        <section class="explain">
          <p>说明:</p>
          <p>组件名称: type-one-loading</p>
          <p>props: title(加载的文字)</p>
        </section>
      </div>
  </section>
</template>

<script>
import loadHead from './common/header.vue';
import loadBtn from './common/btn.vue';
import loadCopy from './common/copy.vue';
import loadLinks from './common/links.vue';
import loadTip from './common/tip.vue';

import ClipboardJS from 'clipboard';
export default {
  components: {
    loadHead,
    loadBtn,
    loadCopy,
    loadLinks,
    loadTip
  },
  data(){
    return {
      index: 1,
      show: false,
      code: '',
      css: 'https://raw.githubusercontent.com/greatWeber/loadings/master/lib/style/type-one-loading.css',
      less: 'https://raw.githubusercontent.com/greatWeber/loadings/master/packages/assets/style/type-one-loading.less',
    }
  },
  mounted(){
    this.code = this.$refs.code.innerHTML;
    new ClipboardJS('.copy');
  },
  methods: {
    change(i){
      if(this.index==i){
        this.index = 0;
      }else{
        this.index = i;
      }
    },
    openLoad(){
      this.$loading.open('加载中.....','type-one');
    },
    closeLoad(){
      this.$loading.close();
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/style/type-one-loading.less';
@import '~@/assets/style/common/example.less';
</style>
