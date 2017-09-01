<template>
  <div class="wrap">
    <headerBar :color="'black'"></headerBar>
    <div class="content">
      <navList :navData="navData"></navList> 
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <footerNav></footerNav>
  </div>
</template>

<script>
import headerBar from '@/components/headerbar'
import navList from '@/view/home/component/navlist'
import footerNav from '@/components/footerNav'

export default {
  name: 'homePage',
  components: {
    headerBar,
    navList,
    footerNav
  },
  data () {
    return {
      navData: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.jsonp('http://m.haimi.com/api/nav/list?platform=WAP',{
        Params:{
        },
         jsonp:'_callback'
      }).then(function(opt){
          this.navData = opt.data.data;
      })
      this.$http.jsonp('http://m.haimi.com/api/nav/list',{
        Params:{
          platform:'WAP'
        },
         jsonp:'_callback'
      }).then(function(opt){
        this.navData = opt.data.data
      })
      this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',{
        jsonp:'_callback'
      }).then(function(opt){
        console.log(opt)
      }).catch(function(err){
        console.log(err)
      })  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.wrap{
  background:#F7F7F7;
}
.m-box{
  margin-top: .1rem;
  background:white;
}


</style>
