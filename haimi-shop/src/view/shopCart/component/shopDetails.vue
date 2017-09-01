<template>
	<div class="shop-details m-box">
		<h3>商品详情</h3>
		<div class="shop-weixin">
			<p></p>
			<p><img src="http://img.haimi.com/Fpf_7URcK8ypvJq3cz3JySMSN6MI"></p>
		</div>
		<div class="shop-specifics"></div>
		<slot></slot>	
	</div>
</template>
<style lang="less">
.shop-details{
	padding:0 .1rem;
	h3{
		line-height: .4rem;
	}
	img{
		display: block;
		width:100%;
	}
	.shop-weixin{
		margin-bottom: .1rem;
	}
}	
</style>