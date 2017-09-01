<template>
  <div class="nav-content m-box">
    <div class="nav-img">
      <router-link v-for="(item,i) in navcon.Records" :to="{path:'/activity'+i}">
        <img :src="item.PictureWebp" alt="">
        <div class="desc"><p>{{item.SlideName}}</p></div>
      </router-link>
    </div>	
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['navcon']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav-img{
	display: -webkit-box;
    display: flex;
	a{
		display: block;
		width:25%;
    color:#000;
		img{
			width:100%;
   		display: block;
		}
		.desc{
			font-size: .1rem;
			padding: .1rem 0;
			text-align: center;
		}
	}
}
</style>
