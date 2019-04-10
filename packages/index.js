import Loading from '../static/loading.js';


import weixinLoading from './components/weixin-loading';
import typeOneLoading from './components/type-one-loading';
import typeTwoLoading from './components/type-two-loading';



const components = [
  weixinLoading,
  typeOneLoading,
  typeTwoLoading,

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
  typeOneLoading,
  typeTwoLoading
};

export default LOADING;

export {
  weixinLoading,
  typeOneLoading,
  typeTwoLoading
}
