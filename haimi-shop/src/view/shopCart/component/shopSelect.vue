<template>
	<div>
		<dl class="select-box m-box">
			<dt><img src="//img.haimi.com/FvfydT6_Ns4g4HtqgojwY36mFbkn" alt=""></dt>
			<dd>
				<h3>海密严选</h3>
				<p>由海蜜严选直接销售，提供物流与售后服务</p>
			</dd>
		</dl>
		<div class="shop-lis m-box">
			<a href="#">发现更多<span>{{datas.BrandName}}</span>良品</a>
		</div>
	</div>
</template>
<script>
export default {
	props: ['datas']
}
</script>
<style lang="less">
.select-box{
	padding:.1rem;
	overflow:hidden;
	dt,dd{
		float: left;
	}
	dt{
		width:.42rem;
		img{
			display: block;
			width:100%;
		}
		display:inline-block;
	}
	dd{
		padding-left: .1rem;
		h3{
			font-weight: normal;
		}
		p{
			white-space: nowrap;
    		overflow: hidden;
    		text-overflow: ellipsis;
		}
	}

}
.shop-lis{
	span{
		color:#991f33;
	}
}
</style>