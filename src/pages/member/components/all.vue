<template>
    <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" v-if="lists&&lists.length">
      <a class="block-item js-address-item address-item " v-for="list in lists" :key="list.id"
      @click="toEdit(list)"
      :class="{'address-item-default':list.isDefault}"
      >
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
      </a>
      <div v-if="lists&&!lists.length">
        没有地址哦，请添加
      </div>
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" 
      :to="{name:'form',query:{type:'add'}}">
        <!-- to="/address/form" -->
            新增地址
        </router-link>
    </div>
  </div>
</template>

<script>
  import Address from 'js/addressService.js'
  export default {
    data(){
      return {
        // lists:null,
        lists:null,
      }
      
    },
    created() {
      Address.list().then(res => {
        this.lists = res.data.lists
      })
    },
    methods:{
      toEdit(list){
        // this.$router.push({path:'/address/form'})
        this.$router.push({name:'form',query:{
          type:'edit',
          ...list
        }})
      }
    }
  }
</script>