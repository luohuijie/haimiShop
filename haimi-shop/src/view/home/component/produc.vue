<template>
  <div>
    <div class="produc m-box">
      <div class="title" v-text="imgs.Channel.Name"></div> 
      <div class="cle">
        <a v-for="ims in imgs.Records"><img :src="ims.PictureWebp" alt=""></a>
      </div>
	  </div>
  </div>
</template>

<script>


export default {
  props: ['imgs']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title{
  font-size:.14rem;
  line-height: .42rem;
  text-align: center;
}
.cle{
  width:100%;
  display: flex;
  flex-wrap:wrap;
  position: relative;
}
.cle a{
  display: block;
  width:50%;
  box-sizing:border-box;
}
.cle a img{
  width:100%;
  display:block;
}
.cle a:last-child{
  margin-left: 50%; 
}
.cle a:nth-child(1){
  height:50%;
  position: absolute;
  top:0;
  left:0;
  img{
    height:100%;
  }
}
.cle a:nth-child(2){
  height:50%;
  position: absolute;
  top:50%;
  left:0;
  img{
    height:100%;
  }
}
  
</style>
