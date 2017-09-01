<template>
	<div>
		<transition-group enter-active-class="animated" leave-active-class="animated bounceOut">
		<div class="shop-mark bounceInDown" v-show="isshow" :key="1" @click="fn"></div>
		<div class="shop-buy bounceInUp" :key="2" v-show="isshow">
			<dl class="shop-dls">
				<dt><img :src="imgs||datas.PicturesWebp"></dt>
				<dd>
					<p>￥{{price=datas.FinalPrice}}</p>
					<p>(库存{{stock||datas.Stock}}件)</p>
					<p v-if="datas.AttrInfo">{{sel||'请选择规格分类'}}</p>
				</dd>	
			</dl>
			<div class="shop-sku"  v-if="datas.AttrInfo">
				<h3>{{datas.AttrInfoArray[0].AttrName}}</h3>
				<div class="color-list">
					<span v-for="(val,i) in datas.SkuInfo" @click="select(val,i)" ref="menuItem">{{val.SkuName}}</span>
				</div>
			</div>
			<div class="shop-num">
				<span>购买数量</span>
				<div class="num">
					<button @click="add('prev')">-</button>
					<input type="text" v-model="num">
					<button @click="add('next')">+</button>
				</div>
			</div>
			<div class="btn" @click="btnOk">确定</div>
		</div>
		</transition-group>
	</div>
	
</template>
<script>
import '@/static/css/animate.css'
import {mapGetters , mapActions} from 'vuex'
export default {
	props:['datas','isble'],
	data () {
		return {
			price:0,
			imgs:'',
			sel:'请选择:颜色分类',
			num:1,
			stock:0,
			classify:'',
			ble:false,
			arr:[]
		}
	},
	watch:{
		'$store.state':function(){
			console.log(this.$store.state.list)			
		}
	},
	computed:{ 
		...mapGetters(['isshow'])
	},
	methods:{
		select (val,i) {
			if(this.datas.SkuPictures[i]){
				this.imgs = this.datas.SkuPictures[i].PictureWebp
				this.stock = val.Stock
				this.price = val.Price
				this.togger(this.$refs.menuItem,i)
			}
		},
		togger (opt,ind){
			opt.forEach(function(val){
				val.style.color = ''
			})
			console.log(opt)
			opt[ind].style.color = 'red'
			this.classify = opt[ind].innerText 	
		},
		add (opt) {
			if(opt == 'next'){
				this.num++
			}else{
				this.num = this.num <= 1 ? this.num = 1 : this.num - 1 
			}
		},
		btnOk () {
			var that = this
			var list = window.localStorage['list'];
			var a = 1;
			this.arr = list ? JSON.parse(list) : []
			this.arr.forEach(function(val,i){
				if(val.info == that.datas.Subject){
					that.arr[i].num += that.num;
					window.localStorage.setItem('list',JSON.stringify(that.arr))
					a = 0;
					that.arr = []
					return
				}
			})
			if(a){
				var listParams = {
					info:that.datas.Subject,
					imgs:that.imgs,
					classify: that.classify,
					price : that.price,
					num: that.num
				} 
				this.arr.unshift(listParams);
				window.localStorage.setItem('list',JSON.stringify(this.arr))
				that.arr = []
				this.$store.commit('dialong')
			}
			this.$store.state.isshow = false
		},
			...mapActions(['fn'])
	}
}	
</script>
<style lang="less">
.shop-popup{

}	
.shop-mark{
	position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.35);
}
.shop-buy{
	background: #fff;
    position: fixed;
    bottom: 0;
    width:100%;
    z-index: 101;
}
.shop-dls{
	padding:.12rem .1rem;
	display: flex;
	display: -webkit-box;
	border-bottom:1px solid #e0e0e0;

	dt{
		width:.5rem;
		height:.5rem;
		margin-right: .1rem;
		img{
			display:block;
			width:100%;
			margin: auto 0;
		}
	}
	dd{
		p{
			&:first-child{
				color:#991f33;
			};
			&:nth-child(2){
				color:#999;
			};
		}
	}

}
.shop-sku{
	padding: 0 .1rem;
	h3{
		font-weight: normal;
		font-size: .12rem;
		line-height:.3rem; 
	}
	.color-list{
		display: flex;
		flex-wrap:wrap;
		border-bottom: solid #ccc 1px;
		padding-bottom: .05rem;
		span{
			padding: .03rem .05rem;
			border:1px solid #000;
			margin-right: .1rem;
			margin-bottom: .05rem;
		}
	}
	
}
.shop-num{
	padding: .1rem;
	& > span{
		line-height: .24rem;
	}
	
}
.num{
	float: right;
	display: flex;
	input{
		width: .45rem;
		border: none;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		padding:0 .1rem;
		box-sizing:border-box;
		text-align: center;
	}
	button{
		display: block;
		width:.24rem;
	    height: .24rem;
	    border:1px solid #ccc;
	    text-align: center;
	    line-height: .24rem;
	    background: #fff;
	}
}
.btn{
	line-height: .38rem;
    text-align: center;
    background: #801a2a;
    color:white;
}
</style>