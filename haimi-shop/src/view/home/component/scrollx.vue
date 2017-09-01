<template>
  <div>
    <div class="scrollx">
      <div class="scrollx-imgs">
        <router-link v-for="item in scrollData.Records" :to="{path:'/shopCart',query:{id:item.CastID}}">
          <img :src="item.PictureWebp"/>
          <div class="dd">
            <p>{{item.SlideName}}</p>
            <p>{{item.Description}}</p>
          </div>
        </router-link>        
      </div> 
	  </div>
  </div>
</template>

<script>
export default {
  props: ['scrollData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.scrollx{
  width:100%;
  overflow-x: auto;
  background:#fff;
}
.scrollx-imgs{
  width:100%;
  display: -webkit-box;
}
.scrollx-imgs a{
  display: block;
  width:28%;  
  text-align: center;
}
.scrollx-imgs a dd{
  padding: .05rem 0;
  text-align: center;
}
.scrollx-imgs img{
  width:100%;
  display:block;
}
</style>
