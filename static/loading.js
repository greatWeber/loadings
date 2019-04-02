import Type from './loading-type.js';

console.log(Type);
class Loading {
  constructor(option={}){
    this.option = Object.assign({
      type: 'weixin',
      title: '加载中...'
    },option);
    this.instance = null;
    this.title = null;
    this.display = 'block';
    if(!Type[this.option.type]){
      console.warn('没有该类型');
      return;
    }
  }

  open(title,type){
    title = title || this.option.title;
    type = type || this.option.type;
    if(!Type[type]){
      console.warn('没有该类型');
      return;
    }
    console.log('open')
    let className = `.${type}-loading`;
    this.instance = document.querySelectorAll(className)[0];
    console.log(this.instance);
    if(!this.instance){
      this.instance = document.createElement('div');
      this.instance.className = `${type}-loading flex flex-colmun align-center`;
      this.instance.innerHTML = Type[type];
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

export default Loading
