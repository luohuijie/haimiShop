<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in swiperData"><img :src="item.PictureWebp||item.picture"></div> 
    </div>
    <div class="swiper-pagination"></div>	
  </div>
</template>

<script>
import Swiper from '@/lib/swiper/js/swiper.js'
import '@/lib/swiper/css/swiper.min.css'
export default {
  props: ['swiperData'],
  data () {
    return {
      swiper: ''   
    }
  },   
  mounted () {
    this.swiper = new Swiper(this.$el,{
      autoplay: 600,
      pagination: '.swiper-pagination',
      paginationClickable: true
    })
  },
  updated () {
    this.swiper.update()
  } 
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.swiper-container{
	height:2.4rem;
  img{
    display:block;
    margin: 0 auto;
	}
  .swiper-pagination{
    .swiper-pagination-bullet{
      width:10px;
      height:3px;
      background:#dcdcdc;
      -webkit-transition:width .5s ease;
    }
    .swiper-pagination-bullet-active{
      width:20px;
    }
  }
}
</style>
