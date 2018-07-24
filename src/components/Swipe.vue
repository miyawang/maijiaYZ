<template>
   <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swp-page swiper-slide" v-for="list in lists" :key="list.id">
                <a class="js-no-follow"  v-bind:href="list.clickUrl">
                  <img class="goods-main-photo fadeIn" :src="list.image">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
</template>

<style>
  .swiper-slide img {
    width:100%;
    height: 100%;
  }
</style>

<script>
  // swiper对dom节点进行操作 dom节点是什么时候生成的
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name:'swipe',
    props:['lists'],
    // props:{
    //   lists:{
    //     type:Array,
    //     required:true
    //   }
    // },
    // created(){
      
    // },
    mounted(){
      new Swiper('.swiper-container',{
        loop:true,
        pagination:'.swiper-pagination'
      })
    },
    
  }
</script>
