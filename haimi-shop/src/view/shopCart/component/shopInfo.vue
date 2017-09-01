<template>
	<div>
		<div class="info">
			<div class="info-title">{{datas.Subject}}</div>
			<div class="info-price">
				<i>￥{{datas.FinalAmount}}</i>
				<s>￥{{datas.FinalPrice}}</s>
				<span>月销{{datas.SoldNum}}件</span>
			</div>
			<div class="info-other">
				<p>邮费{{datas.MaxCreditDeduct}}元</p>
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
.info{
	background: white;
	padding-top: .12rem;
	.info-title{
		padding: 0 .1rem;
		font-size: .14rem;
	}
	.info-price{
		padding: .12rem;
		border-bottom: 1px solid #eee;
		i{
			color:#991f33;
		}
		span{
			float: right;
		}
	}
	.info-other{
		line-height:.28rem;
		p{
			width:25%;
			color:#999;
			text-align: center; 
			position: relative;
			&:before{
				content:"";
				width: .02rem;
				height:.02rem;
				background: #000;
				position: absolute;
				top:50%;
				left:.12rem;
			}
		}
	}
}	

</style>