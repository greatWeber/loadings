'use strict';

var Ajax = function Ajax() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new Promise(function (resolve, reject) {
    var _option = option,
        _option$type = _option.type,
        type = _option$type === undefined ? 'GET' : _option$type,
        _option$data = _option.data,
        data = _option$data === undefined ? {} : _option$data,
        _option$dataType = _option.dataType,
        dataType = _option$dataType === undefined ? "json" : _option$dataType,
        _option$async = _option.async,
        async = _option$async === undefined ? true : _option$async,
        _option$contentType = _option.contentType,
        contentType = _option$contentType === undefined ? 'application/x-www-form-urlencoded;charset=utf-8' : _option$contentType,
        _option$timeout = _option.timeout,
        timeout = _option$timeout === undefined ? 60 * 1000 : _option$timeout;


    option = Object.assign({
      type: 'GET',
      data: {},
      dataType: "json",
      async: true,
      contentType: 'application/x-www-form-urlencoded;charset=utf-8',
      timeout: 60 * 1000

    }, option);

    console.log(option);

    var xmlHttp = createHttp();

    var postData = setParams(option.data);

    if (option.type.toUpperCase() === 'POST') {
      POSTAjax(xmlHttp, option);
    } else {
      GETAjax(xmlHttp, option, postData);
    }

    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        resolve(xmlHttp.responseText);
      } else {
        reject(xmlHttp.responseText);
      }
    };
  });
};

//创建http对象
var createHttp = function createHttp() {
  if (XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    return new ActiveXObject('Microsoft.XMLHTTP');
  }
};

// 对请求数据做处理
var setParams = function setParams(data) {
  var params = [];
  for (var key in data) {
    params.push(key + '=' + data[key]);
  }
  return params.join('&');
};

var POSTAjax = function POSTAjax() {
  var http = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  http.open(option.type, option.url, option.async);
  // 如果使用formdata 上传文件 不设置请求头
  if (option.contentType !== 'multipart/form-data') {
    http.setRequestHeader('Content-Type', opt.contentType || 'application/x-www-form-urlencoded;charset=utf-8');
  }
  http.send(option.data);
};

var GETAjax = function GETAjax() {
  var http = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  http.open(option.type, option.url + '?' + data, option.async);
  http.send(null);
};