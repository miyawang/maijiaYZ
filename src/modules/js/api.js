let url = {
  'hotLists': '/index/hotLists'
}
//开发环境和直接打包上线的切换
// 开发时 是ip接口 前后端可以分离
// 运行时 是后台的地址
let host = 'http://rapapi.org/mockjsdata/23334' //开发环境  ip
// let host = ''  //真实环境

// 在所有url前面加上host
for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key];
    
  }
}
export default url;