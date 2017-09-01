<template>
	<div>
		<div class="comment-imgslist">
			<div class="comment-imgs" v-for="(val,i) in lists.split(',')" @click="bgImg(i)" ><img :src="val" alt=""></div>
		</div>
		<div class="mark" :style="{'display':display}" @click="bgImg">
			<shopSwiper ref="swiperObj" :swiperData="slideList"></shopSwiper>	
		</div>
	</div>
</template>
<script>
import shopSwiper from '@/components/shopSwiper'
export default {
	props: {
		'lists':{
			'default':[]
		}
	},
	data () {
		return {
			slideList:[],
			display:'none'
		}
	},
	methods: {
		bgImg (i) {
			if(this.display == 'none'){
				this.$refs.swiperObj.swiper.slideTo(i)
				this.display = '-webkit-box'
			}else{
				this.display = 'none'
			}
		}
	},
	mounted () {
		var arr = this.lists.split(',')
		var that = this
		arr.forEach(function(val,i){
			that.slideList.push({
				'PictureWebp':val
			})
		})
	},
	updated () {
		this.$refs.swiperObj.swiper.update()
	},
	components:{
		shopSwiper
	}
}	
</script>
<style lang="less">
.mark{
	position:fixed;
	bottom:0;
	right:0;
	top:0;
	left:0;
	z-index: 10000;
	background:rgba(0,0,0,.5);
	display:-webkit-box;
    display: flex;
	-webkit-box-pack: center;
    -webkit-box-align: center;
    justify-content: center;
    align-items: center;
	.swiper-container{
		width:100%;
		z-index: 100000;
	}
}	
</style>