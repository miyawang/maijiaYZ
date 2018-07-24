import 'css/common.css';
import './search.css';

import Vue from 'vue';
import axios from 'axios';
import url from 'js/api.js';
import qs from 'qs';

let {keyword,id} = qs.parse(location.search.substr(1));

import mixin from 'js/mixin.js'
import Velocity from 'velocity-animate'
new Vue({
  el:'.container',
  data:{
    searchList:null,
    keyword,
    isShow:false,
  },
  created(){
    this.getSeachList();
  },
  methods:{
    getSeachList(){
      axios.post(url.searchList,{keyword,id}).then(res=>{
        this.searchList = res.data.lists
      })
      
    },
    move(){
      if(document.body.scrollTop > 100){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    },
    toTop() {
      Velocity(codument.body,'scroll',{duration:1000})
    }
  },

  mixins:[mixin]
})