import Type from './loading-type.js';

class Loading {
  constructor(option={}){
    this.option = Object.assign({
      type: 'weixin',
      title: '加载中...'
    },option);
    this.instance = null;
    this.title = null;
    this.display = 'block';
    this.included(Type,this.option.type);
  }

  open(title,type){
    title = title || this.option.title;
    type = type || this.option.type;
    this.included(Type,type);
    console.log('open')
    let className = `.${type}-loading`;
    this.instance = document.querySelectorAll(className)[0];

    if(!this.instance){
      this.instance = document.createElement('div');
      this.instance.className = `${type}-loading flex flex-colmun align-center`;
      this.instance.innerHTML = this.getHTML(Type,type);
      this.title = this.instance.querySelectorAll('.common-loading__span')[0];
      this.title.innerHTML = title;
      document.body.appendChild(this.instance);
      console.log(window.getComputedStyle(this.instance,null).display);
      this.display = window.getComputedStyle(this.instance,null).display;
    }else{
      let state = this.instance.dataset['state'];
      if(state == 'open'){
        return
      }
      this.instance.dataset['state'] = 'open';
      this.instance.style.display = this.display;
    }
  }

  close(){
    console.log('close')
    this.instance.dataset['state'] = 'close';
    this.instance.style.display = 'none';
  }

  included(typeObj,type){
    let newType = type.replace('-','_'); //把中划线转成下划线
    if(!typeObj[newType]){
      console.warn('没有该类型!');
      return;
    }
  }

  getHTML(typeObj,type){
    let newType = type.replace('-','_'); //把中划线转成下划线
    return typeObj[newType];
  }
}

export default Loading
