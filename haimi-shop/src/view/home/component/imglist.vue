<template>
  <div>
    <div class="imglist m-box">
      <div class="title">{{imglist.Channel.Name}}</div> 
      <div class="imgbox">
        <router-link v-for="ims in imglist.Records" :to="{path:'/shopCart',query:{id:ims.CastID}}"><img :src="ims.PictureWebp" alt=""><div></div></router-link>
      </div> 
	  </div>
  </div>
</template>
<script>
export default {
  props: ['imglist']
}
</script>
<style lang="less">
.title{
  font-size:.14rem;
  line-height: .42rem;
  text-align: center;
}
.imgbox{
  width:100%;
  a{
    display: block;
    width:50%;
    float: left;
    position: relative;
    overflow: hidden;
    div{
      padding-top: 60%;
    }
    img{
      position: absolute;
      width:100%;
      top:0;
      left:0;
    }
  }
}


</style>
