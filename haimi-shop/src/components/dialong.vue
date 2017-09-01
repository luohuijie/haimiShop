<template>
	<div class="log-mark" v-show="ble.ste">
		<div class="log-box">
			<div class="log-title">{{ble.title}}</div>
			<div class="log-ips" v-if="ble.ips"><input type="text" v-model="val"></div>
			<div class="log-btns"><span @click="ok(false)">取消</span><span @click="ok(true)">确定</span></div>	
		</div>
	</div>	
</template>
<script>
// import {mapActions,mapGetters} from 'vuex'
export default {
	props:['ble'],
	data () {
		return {
			val: ''
		}
	},
	/*computed: mapGetters(['isok','val']),*/
	methods:{
		ok (opt){
			if(this.ble.ips){
				this.$emit('upde',this.val)
				this.val = ''
			}else{
				if(opt){
					window.localStorage['userMsg'] = '';
					this.$router.push({path:'/loginIndex'})
				}
			}
			this.ble.ste = false
		}
		/*...mapActions(['ok'])*/
	}
}	
</script>
<style>
.log-mark{
	position: fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	z-index: 100;
	background: rgba(0,0,0,.8);
	display: -webkit-box;
	-webkit-box-pack:center;
	-webkit-box-align:center;
}
.log-box{
	width:70%;
	background:white;
	
}	
.log-title{
	line-height: .54rem;
	text-align: center;
}
.log-ips{
	text-align: center;
}
.log-ips input{
		background-color: #f7f7f7;
    	border: none;
    	width: 90%;
    	line-height: .3rem;
    	padding: 0 .1rem;
    	box-sizing:border-box;
}
.log-btns{
	line-height: .38rem;
	display: flex;
	text-align: center;
	border-top:solid #ccc 1px;
	margin-top: .2rem;
}
.log-btns span{
	flex:1;
}
.log-btns span:last-child{
	color:red;
	border-left:1px solid #ccc;
}

</style>