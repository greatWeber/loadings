'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loading = function () {
  function Loading() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Loading);

    this.option = Object.assign({
      type: 'weixin',
      title: '加载中...'
    }, option);
    this.instance = null;
    this.title = null;
    this.display = 'block';
    if (!type[this.option.type]) {
      console.warn('没有该类型');
      return;
    }
  }

  _createClass(Loading, [{
    key: 'open',
    value: function open(title) {
      title = title || this.option.title;
      console.log('open');
      var className = '.' + this.option.type + '-loading';
      this.instance = document.querySelectorAll(className)[0];
      if (!this.instance) {
        this.instance = document.createElement('div');
        this.instance.className = this.option.type + '-loading flex flex-colmun align-center';
        this.instance.innerHTML = type[this.option.type];
        this.title = this.instance.querySelectorAll('.common-loading__span')[0];
        this.title.innerHTML = title;
        document.body.appendChild(this.instance);
        console.log(window.getComputedStyle(this.instance, null).display);
        this.display = window.getComputedStyle(this.instance, null).display;
      } else {

        this.instance.style.display = this.display;
      }
    }
  }, {
    key: 'close',
    value: function close() {
      console.log('close');
      this.instance.style.display = 'none';
    }
  }]);

  return Loading;
}();

var type = {
  weixin: '\n\n    <div class=" flex-item flex align-center">\n      <div class="weixin-loading__wrapper">\n        <p class="weixin-loading-p weixin-loading-p_1"></p>\n        <p class="weixin-loading-p weixin-loading-p_2"></p>\n        <p class="weixin-loading-p weixin-loading-p_3"></p>\n        <p class="weixin-loading-p weixin-loading-p_4"></p>\n        <p class="weixin-loading-p weixin-loading-p_5"></p>\n        <p class="weixin-loading-p weixin-loading-p_6"></p>\n        <p class="weixin-loading-p weixin-loading-p_7"></p>\n        <p class="weixin-loading-p weixin-loading-p_8"></p>\n        <p class="weixin-loading-p weixin-loading-p_9"></p>\n        <p class="weixin-loading-p weixin-loading-p_10"></p>\n        <p class="weixin-loading-p weixin-loading-p_11"></p>\n        <p class="weixin-loading-p weixin-loading-p_12"></p>\n      </div>\n    </div>\n    <p class="weixin-loading__title flex-item flex align-center">\n      <span class="common-loading__span"></span>\n    </p>\n\n  '
};