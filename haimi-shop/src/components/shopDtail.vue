<template>
  <div class="product-box">
	  <div class="product-tit1"></div>
	  <div class="product-list1">
	  	<div class="li" v-for="val in datas.Recommend">	
      	  <router-link :to="{path:'/shopCart',query:{id:val.ProductID}}">
      	  	<img :src="val.PicturesWebp">
      		  <div></div>	
      	  </router-link>
      	  <p>{{val.Subject}}</p>	
      		<p>{{val.FinalPrice}}</p>
	  	</div>	  	
    </div> 
  </div>
</template>

<script>
export default {
  props: ['datas']
}
</script>
<style lang="less">
.product-tit1{
   height: .42rem;
   img{
      width:100%;
   }
}
.product-list1{
	display: -webkit-flex;
	justify-content:space-between;
	flex-wrap: wrap;
}
.product-list1 .li{
  background:#fff;
	width: 49%;	
	margin-bottom: .1rem;
  p{
    width: 90%;
    margin:0 auto;
    white-space: nowrap;
    overflow:hidden;
    padding-top: .1rem;
    text-overflow: ellipsis;
 }
  p:last-child{
    padding-top: .08rem;
 	text-align: center;
  }
}
.product-list1 .li a{
	display: block;
  position: relative;
  div{
    padding-top: 100%;
  }
}
.product-list1 .li a img{
	  width:100%;
    position: absolute;
}
</style>
