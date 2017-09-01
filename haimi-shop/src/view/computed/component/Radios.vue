<template>
	<div class="check-box">
		<div class="check-list" v-for="(val,index) in list">
			<div :class="{'check-select':true,'check-seled':val.id}" @click="getRadio(index)"></div>
			<a href="javascript:;">
				<img :src="val.imgs">
			</a>
			<div class="check-info">
				<p>{{val.info}}</p>
				<p v-if="val.classify">颜色分类:{{val.classify}}</p>
				<p class="price">￥{{price = val.price}}</p>
			</div>
			<div class="check-edit">
				<p @click="removeData(index)">删除</p>
				<p class="mt10">X{{num = val.num}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
	props: ['val','isble'],
	data () {
		return {
			tog:false
		}
	},
	computed:{
		...mapGetters(['togger','price','num','list'])
	},
	methods: {
		...mapActions(['getRadio','removeData'])
	}
}	
</script>
<style lang="less">
.check-box{
	background:white;
}
.check-list{
	padding-top:.15rem;
	display:-webkit-flex;
	display:-webkit-box;
	.check-select{
		height: .6rem;
	}
	a{
		display: block;
		width: .6rem;
		height: .6rem;
		border:solid #ccc 1px;
		img{
			display: block;
			width: 100%;
		}
	}
	.check-info{
		flex:1;
		padding-left: .1rem;
		p:nth-child(1){
			white-space: nowrap;
    		overflow: hidden;
    		text-overflow: ellipsis;
		};
		p:nth-child(2){
			color:#ccc;
		};
	}
	.check-edit{
		width:.25rem;
		padding-right: .1rem;
	}
	.price{
		margin-top: .15rem;
	}
	.mt10{
		margin-top:.3rem; 
	}
}
</style>