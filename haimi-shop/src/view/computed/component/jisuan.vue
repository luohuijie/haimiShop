<template>
	<div class="check-clos">
		<div :class="{'check-select':true,'check-seled':isble}" @click="checAll"></div>
		<div class="all">全选</div>
		<div class="sum">
			<p>合计:${{sum}}</p>
			<p>已优惠{{0}}元</p>
		</div>
		<div class="closing">结算</div>
	</div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
	computed:{
		...mapGetters(['sum','isble'])
	},
	methods:{
		...mapActions(['getRadio','checAll'])
	}
}	
</script>
<style lang="less">
.check-clos{
	width:100%;
	background: white;
	border-top:solid #ccc 1px;
	position: fixed;
	bottom:.4rem;
	display:flex;
	.all{
		line-height: .48rem;
	}
	.sum{
		flex:1;
		text-align: right;
		padding-right: .1rem;
		p{
			padding-top:.05rem;
			&:first-child{
				font-size:.14rem;
				color:#991f33;
			};
			&:last-child{
				color:#999;
			};
		};
	}
	.closing{
		width: .9rem;
		line-height: .48rem;
		text-align: center;
		background: #991f33;
		text-align: center;
		color:white;
	}
}	
</style>