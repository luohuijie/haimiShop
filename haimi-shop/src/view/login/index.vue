<template>
	<div>
		<div class="login">
			<div class="login-title">请输入手机号码验证码直接登录</div>
			<div class="login-form">
				<form action="#">
					<div class="login-cell">
						<span>手机号：</span>
						<input type="text" v-model="len">
						<span class="form-send form-clear" v-if="isShow" @click="clear"></span>
					</div>
					<div class="login-cell">
						<span>验证码：</span>
						<input type="text" v-model="psd">
						<span class="form-send" v-if="sendSmsFlg" @click="sendSms">发送验证码</span>
						<span class="form-send-tiem" v-else >{{sendTime}}秒后重新发送</span>
					</div>
					<div class="login-submit">
						<div class="login-btn" @click="loginTo">登录</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      isShow:false,
      sendSmsFlg:true,
      sendTime:10,
      len:'',
      psd:''      
    }
  },
  watch:{
    len: function (val){
      this.isShow = val.length > 0 ? true : false
    }
  },
  methods:{
    clear () {
      this.len = ''
    },
    sendSms () {
    	/*this.$http.jsonp('http://m.haimi.com/api/member/send-quick-login-code?mobile='+this.len,{
    		Params:{
    			// mobile:this.psd,
    			platform:'WAP'
    		},
    		jsonp:'_callback'
    	}).then(function(opt){
    		console.log(opt)
    	})*/
    	this.sendSmsFlg = false
    	let codeArr = [];
    	for( var i=0; i<4; i++ ){
    		codeArr.push(this.getRandom(0,9));
    	};
    	this.smsCode = codeArr = codeArr.join("");

    	let that = this;
    	let time = setInterval(function(){
    		if( --that.sendTime == 0 ){
    			clearInterval( time )
    			that.sendTime = 60;
    			that.sendSmsFlg = true;
    		}
    	}, 1000)
    },
    getRandom (min,max) {
    	var random = Math.random();
    	return Math.floor( (max-min+1)*random+min );
    },
    loginTo () {
    	if(this.len!=""&&this.psd!=""){
    		var that = this
    		var userMsg = {
    			username:that.len,
    			phone:13091272978,
    			imgs:'images/banner.jpg'
    		}
    		var url = this.$route.query.to;
    		console.log(url)
    		window.localStorage.setItem('userMsg',JSON.stringify(userMsg))
    		if(url){
    			this.$router.push(url);
    		}else{
    			this.$router.push({path: '/Zoom',query:{userName:this.len}});
    		}
    	}

    }
  }
}	
</script>
<style lang="less">
.login{
	.login-title{
		line-height: .32rem;
		text-align: center;
		color: #991f33;
		background:#fff9f3;
	}
}
.login-form{
	padding: 0 .1rem;
	box-sizing:border-box;
	background:white;
	.login-cell{
		line-height: .32rem;
		padding-top: .15rem;
		border-bottom: 1px solid #ccc;
		display:-webkit-box;
		input{
			border:none;
			padding-left:.05rem;
			display:block;
			-webkit-box-flex:1;
			height:.32rem;
		}
		.form-send{
			color:#991f33;
		}
	}

	.login-submit{
		color:white;
		line-height: .33rem;
		margin-top: .25rem;
		background:#991f33;
		text-align: center;
	}
	.form-clear{
	  width:.3rem;
      height:.3rem;
      background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCQzk4NDhBODYwNDExRTZCRDlERDVENTczQjIwN0Y2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCQzk4NDhCODYwNDExRTZCRDlERDVENTczQjIwN0Y2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0JDOTg0ODg4NjA0MTFFNkJEOURENUQ1NzNCMjA3RjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0JDOTg0ODk4NjA0MTFFNkJEOURENUQ1NzNCMjA3RjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HK54VAAACkUlEQVR42ryXTUhUURTHn4+wsLQgDZcp5sYwTSQykMaNpqbjokKsVaALWwSVuSlwVQq1CBIGol2CH6CBGZboSiQjUpGiUtsG08KvnEGC/J84Ty5P79d8Hfht3rtz/v+5975zz00LhUKOYRwB9SAASkAeOAr+gTXwE8yBSTAGNk2SHjAYcwrcB80gQzLmBHMOtLF4H+gGK6rkruIdifWAL+CmQlw2W63gK3gEDtkaoH/9AdwznCVZpINOMAPyTQ2UgWlw2klclMhy+g0UgLcgx0l85PIGLZAZoDUeTpK4F5R7QNwTooGuBE+7LErBQ7+BQnDbSV3c8TalZ6BTs9ujoBd8MkgeAc/BR83X0eEZyALXNElfgnZQCd4pxm2BRnALNGlytoDDLpdXXZEp542zxYnfS8SDwruLBsWqlgxUGUwrGRgRTAR9JvzPgjxrugiQgTOGG6daYsIvTkvQz+usi2KXTzUnDhMBn/iAofj/wufykerEYWI2RnGKTDKQFsN3TF9Dse9Zq6X4biFatfxNhKd+1vf8CpiwzLXhcidjK+7VggbwGhwUaoCNiWUyMG8h3iSIXwaDbGIkRhMLLh+Ruoiy+LggPiSsec0+JkzyTpKBUf53qnihEHckJm5oclLfOEYG1rlwqOIsOM5nxpBit9fwnsg2qLCvwB/vBHwMritOxArw26JOhDVjtrnh3T2Ov4FnKewHnnrtutgRPQCLKRD/zN3XnpbMO2rDSRSn3Ff5q9q3K14Cl5Jk4hdvzCXdvYDargsJXo45WU7ZzegH3/OegL9xCG/z/fC87I7oavq7u6CIu5uIhfAmF68ibnij8dyOv/PllNr2Ol5HumqdBMd4zCofarTDp8Ab0+v5jgADABSilJXiVZaAAAAAAElFTkSuQmCC) center center no-repeat;
      background-size: 50%;
      
    }
}	
</style>