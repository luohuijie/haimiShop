<template>
	<div>
		<Swiper :swiperData="list"></Swiper>
		<shopInfo :datas="datas"></shopInfo>
		<shopOther :datas="datas"></shopOther>
		<shopGrade :datas="datas"></shopGrade>
		<shopSelect :datas="datas"></shopSelect>
		<shopDetails :Promises="datas.Promises">
			<div v-html="datas.Descriptioin"></div>
		</shopDetails>
		<shopDtail :datas="datas"></shopDtail>
		<shopFooter v-on:ble="isble=true" ></shopFooter>
		<shopPopup  :isble="isble" :datas="datas"></shopPopup>	
	</div>
</template>

<script>
import Swiper from '@/components/shopSwiper'	
import shopInfo from './component/shopInfo'	
import shopOther from './component/shopOther'
import shopGrade from './component/shopGrade'	
import shopSelect from './component/shopSelect'	
import shopDetails from './component/shopDetails'	
import shopDtail from '@/components/shopDtail'	
import shopFooter from '@/components/shopFooter'	
import shopPopup from './component/shopPopup'	

export default {
	data () {
		return {
			list: [],
			datas: '',
			isble:false
		}	
	},
	components: {
		Swiper,
		shopInfo,
		shopOther,
		shopGrade,
		shopSelect,
		shopDetails,
		shopDtail,
		shopFooter,
		shopPopup	
	},
	created () {
		this.getData()
	},
	methods: {
		getData () {
			this.$http.jsonp('http://m.haimi.com/api/product/detail-cdn?ProductID='+this.$route.query.id,{
				Params:{
					platform:'WAP'
				},
				jsonp:'_callback'
			}).then(function(opt){
				this.list = JSON.parse(opt.data.data.ProductPictures)
				this.datas = opt.body.data
			})
		},
		fn () {
			this.isble = true;
		}
	},
	watch:{
		'$route':'getData'
	}
}
</script>
<style>
	
</style>	