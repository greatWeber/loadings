const Ajax = (option={}) =>{
  return new Promise((resolve,reject) => {

      let {
        type= 'GET',
        data = {},
        dataType =  "json" ,
        async = true,
        contentType = 'application/x-www-form-urlencoded;charset=utf-8',
        timeout = 60 * 1000,
      } = option;

      option = Object.assign({
        type : 'GET',
        data : {},
        dataType :  "json" ,
        async : true,
        contentType : 'application/x-www-form-urlencoded;charset=utf-8',
        timeout : 60 * 1000,

      }, option);

      console.log(option)

      let xmlHttp = createHttp();

      let postData = setParams(option.data);

      if(option.type.toUpperCase() === 'POST'){
        POSTAjax(xmlHttp,option);
      }else{
        GETAjax(xmlHttp,option,postData);
      }

      xmlHttp.onreadystatechange  = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
          resolve(xmlHttp.responseText);
        }else{
          reject(xmlHttp.responseText);
        }
      }
  })

}
 
//创建http对象
const createHttp = () => {
  if(XMLHttpRequest){
    return new XMLHttpRequest();
  }else{
    return new ActiveXObject('Microsoft.XMLHTTP');
  }
}

// 对请求数据做处理
const setParams = (data) => {
  var params = [];
  for(var key in data){
    params.push(key+'='+data[key]);
  }
  return params.join('&');
}

const POSTAjax =(http={},option={}) => {
  http.open(option.type,option.url,option.async);
  // 如果使用formdata 上传文件 不设置请求头
  if(option.contentType!=='multipart/form-data'){
    http.setRequestHeader('Content-Type', opt.contentType||'application/x-www-form-urlencoded;charset=utf-8');
  }
  http.send(option.data);
}

const GETAjax = (http={},option={},data={}) => {
  http.open(option.type,option.url+'?'+data,option.async);
  http.send(null);

}
