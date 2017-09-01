<template>
	<div class="wrap">
		<shopPage></shopPage>
		<shopList class="mt" :proData="shopData">
			<div class="product-tit shop-bor">大家都在买的宝贝</div>
		</shopList>
		<footerNav></footerNav>
	</div>
</template>
<script>
import shopPage from './component/shopPage'
// import shopList from './component/shopList'
import shopList from '@/components/productList'
import footerNav from '@/components/footerNav'
export default {
	name:'shopIndex',
	data () {
		return {
			shopData: []
		}
	},
	components: {
		shopPage,
		shopList,
		footerNav
	},
	created () {
    	this.getData()
  	},
  	methods: {
    	getData () {
      		this.$http.get('/api/shopPage').then(function (opt) {
        		this.shopData = opt.data.extra.Suggest
      		})
        }
    }  
}	
</script>
<style>
.mt{
	margin-top: .1rem;
}
</style>	