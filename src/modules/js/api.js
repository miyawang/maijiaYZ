let url = {
  hotLists: '/index/hotLists',
  banner:'/index/banner',
  topList:'/category/topList',
  subList:'/category/subList',
  rank:'/category/rank',
  searchList:'/search/list',
  details:'/goods/details',
  deal:'/goods/deal',
  addCart:'/cart/add',
  cartLists:'/cart/list',
  cartReduce:'/cart/reduce',
  cartRemove:'/cart/remove',
  cartMremove:'/cart/mremove',
}
//开发环境和直接打包上线的切换
// 开发时 是ip接口 前后端可以分离
// 运行时 是后台的地址
let host = 'http://rapapi.org/mockjsdata/35751' //开发环境  ip
// let host = 'http://rapapi.org/mockjsdata/24170' //开发环境  ip


// let host = ''  //真实环境

// 在所有url前面加上host
for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key];
    
  }
}
export default url;