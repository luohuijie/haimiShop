<template>
  <div class="product-box">
    <div class="product" v-for="item in proData">
	  <div class="product-tit">{{item.Title}}</div>
	  <div class="product-list">
	  	<div class="li" v-for="val in item.Products">	
      	  <router-link :to="{path:'/shopCart',query:{id:val.ProductID}}">
      	  	<img :src="val.PicturesWebp">	
            <div></div>
      	    <p>{{val.Subject}}</p>  
            <p>{{val.FinalPrice}}</p>
          </router-link>        
	  	</div>
	  </div>
    </div> 
  </div>
</template>

<script>
export default {
  props: ['proData'],
  created () {
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
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
    text-align:left;

  }
}
.product-list .li a{
	display: block;
  height: 49%;
  position: relative;
  div{
    padding-top: 100%;
  }
}
.product-list .li a img{
	width:100%;
  position: absolute;
}
</style>
