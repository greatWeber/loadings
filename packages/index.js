import Loading from '../static/loading.js';


import weixinLoading from './components/weixin-loading';
import typeOneLoading from './components/type-one-loading';



const components = [
  weixinLoading,
  typeOneLoading

];


const version = '1.0.0';
const install = (Vue, config={}) => {

  if(install.installed) return;
  let loading = new Loading();

  Vue.prototype.$loading = loading;

  components.map((component) => {
    Vue.component(component.name,component);
    return component;
  })
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const LOADING = {
  version,
  install,
  weixinLoading,
  typeOneLoading
};

export default LOADING;

export {
  weixinLoading,
  typeOneLoading,
}
