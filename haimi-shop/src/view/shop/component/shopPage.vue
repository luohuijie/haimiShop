<template>
	<div>
		<div class="shop-cart">
			<router-link to="/Home/homeChild2">
				<img :src="imgSrc" alt="">
				<span>去首页逛逛</span>
			</router-link>
		</div>
	</div>
</template>	
<script>
export default {
	props:['imgSrc']
}	
</script>
<style lang="less">
.shop-cart{
	width:100%;
	padding-top: 1.2rem;
	a{
		display:block;
		width: 30%;
		text-align: center;
		margin: 0 auto;
		color:#000;
		img{
			display:block;
			width:100%;
			margin:0 auto .15rem;
		}
		span{
			padding:.04rem;
			border:solid #000 1px; 
		}
	}
}	
</style>