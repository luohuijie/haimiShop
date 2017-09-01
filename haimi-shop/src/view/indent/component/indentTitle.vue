<template>
	<div>
		<ul class="order-nav">
			<li><router-link to="/indent/entAll" active-class="bor">全部</router-link></li>
			<li><router-link to="/indent/await" active-class="bor">待付货</router-link></li>
			<li><router-link to="/indent/dueout" active-class="bor">待发货</router-link></li>
			<li><router-link to="/indent/duein" active-class="bor">待收货</router-link></li>
			<li><router-link to="/indent/refund" active-class="bor">退款</router-link></li>
		</ul>
	</div>
</template>

<style lang="less">
.order-nav{
	line-height: .36rem;
	background: white;
	text-align: center;
	width:100%;
	display: flex;
	border-bottom:solid #ccc 1px;	
	li{
		flex:1;
		a{
			color:#000;
			padding: .09rem 0.05rem; 
			border-bottom:solid #fff 2px;
		}
		.bor{
			border-bottom-color:#000;
		}
	}


}	
</style>