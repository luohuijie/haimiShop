<template>
  <div>
    <div class="banner">
	  <router-link :to="{path:'/shopCart',query:{id:banerData.Records[0].CastID}}"><img :src="banerData.Records[0].PictureWebp" /></router-link>
	</div>
  </div>
</template>

<script>
export default {
  props: ['banerData'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.banner{
	margin-top: .1rem;
}
.banner a{
	display: block;
}
.banner img{
	width: 100%;
  display:block;
} 
</style>
