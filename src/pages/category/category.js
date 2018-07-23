import 'css/common.css'
import './category.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api'

import Foot from '@/components/Foot.vue'


new Vue({
  el:'#app',
  data:{
    topLists:null,
    topIndex: 0,
    subData:null,
    rankData:null,
  },
  created() {
    this.getToplist();
    this.getSubList(0);
  },
  methods:{
    getToplist(){
      axios.post(url.topList).then(res=>{
        this.topLists = res.data.lists;
      }).catch(res=>{

      })
    },
    getSubList(index,id){
      this.topIndex = index;
      if(index === 0){
        this.getRank();
      }else{
        axios.post(url.subList,{id}).then(res=>{
          this.subData = res.data.data;
        })
      }
    },
    getRank(){
      axios.post(url.rank).then(res=>{
        this.rankData = res.data.data;
      })
    },
  },
  
  components:{
    Foot,
    
  },
  // filters:{
  //   number(price) {
  //     return price + '.00';
  //   }
  // }
})