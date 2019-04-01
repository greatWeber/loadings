
class Loading {
  constructor(option={}){
    this.option = Object.assign({
      type: 'weixin',
      title: '加载中...'
    },option);
    this.instance = null;
    this.title = null;
    this.display = 'block';
    if(!type[this.option.type]){
      console.warn('没有该类型');
      return;
    }
  }

  open(title){
    title = title || this.option.title;
    console.log('open')
    let className = `.${this.option.type}-loading`;
    this.instance = document.querySelectorAll(className)[0];
    if(!this.instance){
      this.instance = document.createElement('div');
      this.instance.className = `${this.option.type}-loading flex flex-colmun align-center`;
      this.instance.innerHTML = type[this.option.type];
      this.title = this.instance.querySelectorAll('.common-loading__span')[0];
      this.title.innerHTML = title;
      document.body.appendChild(this.instance);
      console.log(window.getComputedStyle(this.instance,null).display);
      this.display = window.getComputedStyle(this.instance,null).display;
    }else{

      this.instance.style.display = this.display;
    }
  }

  close(){
    console.log('close')
    this.instance.style.display = 'none';
  }
}

const type = {
  weixin : `

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
      <span class="common-loading__span"></span>
    </p>

  `
}
