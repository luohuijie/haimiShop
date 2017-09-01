<template>
  <div class="product shop-box">
	  <div class="product-tit shop-bor">大家都在买的宝贝</div>
	  <div class="product-list">
	  	<div class="li" v-for="val in shopData">	
        <a>
        	<img :src="val.PicturesWebp">
        	<p>{{val.Subject}}</p>	
        	<p>{{val.FinalPrice}}</p>	
        </a>
	  	</div>	    	
	  </div>
  </div> 
</template>

<script>
export default {
  props: ['shopData']
}
</script>
<style scoped>
.shop-box{
  margin-top: .5rem;
}
.shop-bor{
  border-bottom:solid #ccc 1px;
  background: #fff;
}
.product-tit{
	text-align: center;
    line-height: .42rem;
    font-size: .14rem;
    padding: 0 .25rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.product-list{
	display: -webkit-flex;
	justify-content:space-between;
	flex-wrap: wrap;
}
.product-list .li{
background:#fff;
	width: 49%;	
  margin-bottom: .1rem;
	padding-bottom: .1rem;
}
.product-list .li a{
	display: block;
  height: 49%;
}
.product-list .li a img{
	width:100%;
}
.product-list .li a p{
	width: 90%;
	margin:0 auto;
	white-space: nowrap;
	overflow:hidden;
	padding-top: .1rem;
	text-overflow: ellipsis;

}
.product-list .li a p:last-child{
	padding-top: .08rem;
  text-align: center;
}
</style>
