<template>
	<div>
		<slot></slot>
		<div class="product-list1">		
			<div class="li" v-for="val in proData">	
			  	<router-link :to="{path:'/shopCart',query:{id:val.ProductID}}">
			  		<img :src="val.PicturesWebp">
			  		<span v-if="val.MonthSalesNum">月销{{val.MonthSalesNum}}件</span>	
					<div></div>
			    	<p>{{val.Subject}}</p>  
					<p :class="{'bgshop':val.TradeType=='OVERSEA_AGENT'}">{{val.FinalPrice}}</p>
				</router-link>        
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props:['proData']
}
</script>	
<style lang="less" scoped>
.product-tit1{
	text-align: center;
    line-height: .42rem;
    font-size: .14rem;
    padding: 0 .25rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: .6rem;
}
.shop-bor{
  border-bottom:solid #ccc 1px;
  background: #fff;
}
.bgshop{
	background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAahJREFUeNrsmVErREEUx3e2jQdKyReQPHjgyYNSiiUK5cWnUD6Uz7GilCdvlPJgKTZtKZYSi+s/da4mtWPOmHOvYU79d7Z2z9zfPXNmzsy9KsuySmxWrURoCTpBJ+gE7We1Xj8opb5bwJX+KGOd/1uRziMZG7STIY1EwGxpV/VximX12IYe9b0UoAdoyzq6togaQ687GiwwmB1wDf000vfUjtMEldIsXacVIj2OqZ0UjnCd2t2YoBepbcQCPQDNQG/QfizQc1AfdATdhYA+hV6hMai/zHzmQD9DZ1RBJ4ShGyE3TJIpMgJNQU/QYSzQdWI5oFGNAnrBNZ8/N0a99MVGaW9wJQB9Tn1PO3ExoHWZ7VDnwwGB82DcmiNv4+Kkh+74RCBFlqjdg94ljlsSeT3vutT9FmjFKSo+EzEvtRIb/yaLiwmtR2YH6gYE1hNwkwPtenIp3GxcNa5jGafvkA9r1qA2dA2tMvzWyUcfqTa875Ajw1pGXt4wLnlh+LV9OEI9Fnth/NcsIN2iI71MUbuk75wK2CS/FR8Old5uJegEnaD/D/SHAAMAFobZ/36BLJ8AAAAASUVORK5CYII=) right center no-repeat;
	background-size:auto 100%;
}
.li{
	padding-bottom:.1rem; 
	a{
		position:relative;
		overflow: hidden;
		color:#000;
		span{
			padding: .03rem .05rem;
			color:#fff;
			background:rgba(0,0,0,.4);
			position: absolute;
			z-index: 1000;
			bottom:.5rem;
			right:0;
		}
		p{
			text-align: left;
		}
	}

}	
</style>
