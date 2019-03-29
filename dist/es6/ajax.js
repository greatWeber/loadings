"use strict";

var Ajax = function Ajax() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _option$type = option.type,
      type = _option$type === undefined ? 'GET' : _option$type,
      _option$data = option.data,
      data = _option$data === undefined ? {} : _option$data,
      _option$dataType = option.dataType,
      dataType = _option$dataType === undefined ? "json" : _option$dataType,
      _option$timeout = option.timeout,
      timeout = _option$timeout === undefined ? 60 * 1000 : _option$timeout;
};