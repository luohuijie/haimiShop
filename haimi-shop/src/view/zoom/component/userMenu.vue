<template>
	<div class="user-box">
		<div class="user-menu m-box">
			<ul>
			<li class="first"><router-link :to="{path:'/indent'}">我的订单<span>查看全部订单</span></router-link></li>
			<li class="column">
				<router-link to="/indent/await">
					待付款
				</router-link>
				<router-link to="/indent/dueout">
					待发货
				</router-link>
				<router-link to="/indent/duein">
					待收货
				</router-link>
				<router-link to="">
					待评价
				</router-link>
				<router-link to="/indent/refund">
					待退款
				</router-link>
			</li>
			<li class="line"><a href="#">收藏宝贝</a></li>
			<li class="line"><a href="#">红包优惠券</a></li>
			<li class="line"><a href="#">足迹</a></li>
			<li class="line"><a href="#">积分商城</a></li>
			<li class="line"><a href="#">收货地址</a></li>
			<li class="line"><a href="#">绑定手机<span>{{phone}}</span></a></li>
			<li class="line"><a href="#">海密客服</a></li>
			</ul>
		</div>
		<div class="logout" @click="logout">退出登录</div>
		<dialong :ble="ble"></dialong>
	</div>
</template>
<script>
import dialong from '@/components/dialong'
export default {
	props:['phone'],
	data (){
		return{
			ble:{
				ste:false,
				ips:false,
				title:'退出登录'
			}
		}
	},
	components:{
		dialong
	},
	methods:{
		logout (){
			this. ble.ste=true
		}
	}
}	
</script>


<style lang="less">
.user-box{
	background: #F7F7F7;
}
.logout{
	/*margin: .1rem 0 .2rem;*/
	margin: .1rem 0 ;
    background-color: #fff;
    line-height: .34rem;
    text-align: center;
}
.user-menu{
	a{
		color:#242424;
	}		
			
}
ul{
	.line,.first{
		border-bottom: 1px solid #ccc;
		line-height: .4rem;
		position: relative;
		padding-left:.1rem; 
		&:after{
			content:"";
			width: .1rem;
			height:100%;
			position: absolute;
			top:0;
			right:.1rem;
			background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYJJREFUeNqslcErBHEUx2eXJBdntUehPchlIye5UdQWLluSwxRxVKs2t60tBwcns7mRKA7rvrmJv8DBCblIUZKE8fnVm3oHu2Z33qtP3+Yd3nfe+828XyoMQ69RBEGQRiowCHnf93+8FiPdpHgncgobMAtlr41oaMDbfiE3KlXEdMnMQKIENfW8h8lEKwapZmcgo+pBLmFYUk8wToe3JgZikkGuoU9SbnRjmLwmHVF0Hg/uK4J3SQ3BGcYdJgZicoUsQ9TyJOyaGYjJMbKlUit0sW5mIOH+h0P1vIPJdKJD/uPQu5ELGJWUO+wsHT5adOBG9YHMwJ2kemHeakQ6PvU0zAwYURdyAv2SepO9ZdZBFaKV8Q0FxnZvYsDbF5FFldqkeM3kK6J4XkYRzbtKcd/kP6B4DjlQxeuwZrns3EbNSMpt0hwv/5J4Vci6PlfFn2EqTvF/DWRbHsGI+u4X4t4FcTooy30cxSrF65aX/oBKVSi+b33pz8G23Muldv7IXwEGAC7agjacn98NAAAAAElFTkSuQmCC) no-repeat center;
			background-size: 100%;
		};
		
		span{
			float: right;
			padding-right:.2rem;
		}
	}
	.line{
		margin-left: .1rem;
		padding-left: .25rem;
		&:nth-child(3){
			background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5tJREFUeNrsmUtoE1EUhm9KK5SmPhCJ1dpnEBMRBRVF0cYHKuhCcSO6qG6qqLhR8AWiGxeiICiowYWCSy3izkct1geKWDVQsTVJ46NYiTbxgU3EGv8zOSnDNEkzdzITIh74cmdy5/Hnzsk599yxJRIJUWxWIorQilJ0aa4Her3eTF0usAmsBm5QCb6DV+AWuAJ6Mp3c0tJinug0Nh6cBZuBTdNHwhcwh1j4PvC5kO5BI/oUbAExcIFHejJfcwLvnwO/QDN4DmYWSvQUcBM4wUP+ATvYFT4BCkdR3t/J/U9ANbgNphZCtJcFkJBVIDTK8dTfBO6CKnDRatGLwFrwA2wEP3M8L86u9A2sAUutFL2N2zOgT+e5/Xwe2VYrRS/k9prk/Vq5XWKl6GpuA5L3e8NtjSXJhe0FnxOVvB8lnY40cV2X2bQTpiyZz1LLlin/mQkTBf92MMSJwiqG+L51MqIp+HsK8BRK+L5eGdGLua3iP4xVVGnur0v0F27HWjzSY7iNyIhOxeBGi0XXcvvWiOiGNH3LwR6eesoYPb3dPG3NJPqdTHIJZhhpSuF32P9odrdOQvRlsJ63adJ0X9VXk6voEh2i61SZrFZypOvTiNTuS7mHP4N7tHI4eswuImPkGo/AJXBV1qezuUe95nsqm7Yb/LM9yBLS7JpB0yX6K4e9iRw7P1oUPZq5hOuWnZr6s0QQsyzIdaX0fDpYANGGi4BggRKMIdGFyIq0LHHDSOUSsNg9VnDCErzccK8Y3OOAavugrHv08XKXQxU/zbL5YGVZWZkoLVUePM1L5sq4R4JH280u4sujyHlgGZjOzFEeaWOjoHq1u1sJ022oVamI7mHaUTM+y6UaN0s0LY9Vqr9wOBzC5XIpogcGBkQ4HB7Hvt3Eh0TVM8vRRAvOUvm0Y+Ck8i9vaBBut1uUl5cPd3o8HjE4OCi6urpEb2+v+pycqnGzsuIpcJg2SFQ0OnIJJRKJiFAolNrdD9c4natoM7PicXCU3MHnG+l59B2vxxyB4BN61j3Mco/hdSH6iMfjIzpisVhq87zeZTES/Ycn53Tc7zyLnkEfFRUVwu/3i0Agmc+cTqew2+2Ki4jk+5ywHtFxjtfTOIr48iyarqlECyJlnZ2d2mM69C6LtXH70uDq0QcwSXNt9fsXehO2QSQX6l9rf5he0Xt5EmPUNdI9Ufoh70XyvcxscJ1LullgFxcf/ekuZvv/mtki+yvAAOHqE1i6jC0LAAAAAElFTkSuQmCC);
		}
		&:nth-child(4){
			background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbpJREFUeNrsWS1PxEAQbckFDbJgSfgFGDQGDKoSQSCVBMPXH4AEB7gmFwS4Gs6AIFiCw5BgkEc5RbBglimZJpu7/Wj3OmUX9iUvU9FLXyez783dhYyxwDVMBA7Ci/ai/5roTnmRpukylC4wskzjG3AjSZIbUadtFBygpq6w05zg0DLRbLiZ/iD+puh5F0U/AOdcET0DLGxlCnjY4iFj44j+8UO8XnFpPMq3/hLcW4RPznWnKnP8rAihicXyomc5E78T3GsaPiPh0FiMA/pYP4AHkocHcRzXekCWZYHiZZkm0Jaqusc68MWC0T0C3uo6XeIc+CQQXhzUCDtXFwPFTIuwCtzHs7UDvDS1vE3Fw1V45VypKrax7gJPge+yTpeWl0ss75pgC5TN9ALWi3Etr018NmV5FJD59CPWNZ3oPo6FzPIowkWGM6zHwC3gtKnlUYSLbPfooeBJ4InqIOosjyJcVNgD3gOvbNvydLtHTxcuOsujCBfyLY8iXIz26c6Q5aUKy6MIF/Itj2qmG/mOuGjJlldL9LP/3cOLFvt0ZGJBLWAg67SpD1NjxOdD/++WF+1Fe9H/R/S3AAMAK4mIBHn/FhEAAAAASUVORK5CYII=);
		}
		&:nth-child(5){
			background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbpJREFUeNrsWS1PxEAQbckFDbJgSfgFGDQGDKoSQSCVBMPXH4AEB7gmFwS4Gs6AIFiCw5BgkEc5RbBglimZJpu7/Wj3OmUX9iUvU9FLXyez783dhYyxwDVMBA7Ci/ai/5roTnmRpukylC4wskzjG3AjSZIbUadtFBygpq6w05zg0DLRbLiZ/iD+puh5F0U/AOdcET0DLGxlCnjY4iFj44j+8UO8XnFpPMq3/hLcW4RPznWnKnP8rAihicXyomc5E78T3GsaPiPh0FiMA/pYP4AHkocHcRzXekCWZYHiZZkm0Jaqusc68MWC0T0C3uo6XeIc+CQQXhzUCDtXFwPFTIuwCtzHs7UDvDS1vE3Fw1V45VypKrax7gJPge+yTpeWl0ss75pgC5TN9ALWi3Etr018NmV5FJD59CPWNZ3oPo6FzPIowkWGM6zHwC3gtKnlUYSLbPfooeBJ4InqIOosjyJcVNgD3gOvbNvydLtHTxcuOsujCBfyLY8iXIz26c6Q5aUKy6MIF/Itj2qmG/mOuGjJlldL9LP/3cOLFvt0ZGJBLWAg67SpD1NjxOdD/++WF+1Fe9H/R/S3AAMAK4mIBHn/FhEAAAAASUVORK5CYII=);
		}
		&:nth-child(6){
			background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABRJJREFUeNrsWQtsFFUUfVtWau2HLawVU7X+EzURNNJIbSpq/IBiasKqBI2fxGKMhBiiUYNfMP6IJmIUG4MBgahNFDGgJGJpSkFNrbHWat3a6laxdktrrKV0u9t67nrGPIftdmZ2p2sTb3L2vZn35s2d++7v3fWMjY2pqUZZagrSlGTam2ywv7/f8kI1NTXT0KwG7gbygQ+BlYFA4KA2Zzqa54A7gUPASxh/cbw1CwsLXZf0GuBxYDaQCywBdoJRXTDyUSv5UacCL2D8+rRKWpOQzDsb8ADtkM6waVzu3yP98vJy5fP5VG1trRocHJyLW5cCezg1ID8VFRWqr69PtbS0yGUlsMO0Y/KucFVVVa9tSQuzwMPo/gZ8A8hbwri3DjhWmyr9GVlZWaqoqEjl5OSogoICY2yWNq9bfjo7O1V3d7dxL6y9bwaaz4FW4Kfq6upKW0zjAZFeDfAUMDMvL0/l58uuxrd2FbCbOqog+SE0+0dHR1V9fb1qbGw0mIoCn2rLPgIc6erqUr29cSGKMF7WxsUeLszOzpb+caYxS+ohxlIpC5SVlSm/3/+PcTY0NKihoaEKXD4IPMn5y4G94XB4FiDXEgAewAeFjAXR34cPvQDdpbIU8Dbu/aq9c6b8yE4ND8c1MDcRY57xggskfQDNxaWlpaqkpORfYz09Paqurk66PwMna0N+GmC+1+vdHY1Gm23a2FnAZ+I4jJ2BXq+1I+k58lNcXHzUgOgtmFJg6iRc+oDfOSR7viGuF9GoEw8UBM4FLgdkh/bZVQ/Zn5xYLBZnUCfRXW2HIgmeFaVcBCwE5gGncOsH6J9/EBsA3ge+MD0rxrDNaUSMG1BHR8dRA6FQSMnH0JscNg3fLg4CeBe4C5hr6Krmn6+gUTYCX9LtpSWMrxNjam1tVW1tbSoSiaiRkREVDAZVU1OTMed5bb74143AG8CJwFdiiMB86rqHrvE0YLFEQ3oP+aj3gO2aLiclT7IsD8a4mpEuEYk7WqFdC8N3UAUk0GylB0lGokZV9EA++ucFuu+GIdoLLnBHYrnXAB+TmcM0joCJ4WVkWMavBLZYYNiwm/WUdjONUKLjdMeSTpQwwc+ab4kvbWfOcRuw2WHucjzt6HTgMcP/25a0RVpGhsW/vpnCOmF+tND9VBf7CdN4qaGJrmO7waJKJCNRvb3U65uA19xKTS9i+0maUtytbK928+RSxPaXNDFtRMHz3WT6D7az08R0SDNM15jez/aGNDEd1Xy4a0y/znYto1+qZFj/gJtMb2cYllOH5KuPAseksN4ZbH90u4RwM8O65B9PAB/w5OGE5rFtdpvpCMP6AqaW4q5ecbjWJSZbcb1YUw9cBfzJ6HaZgzXm66nxZFWYvgaeZn+VzWflXCenoT7g28kui0n4jTHjy7XxXLkm5dHJZvoQc2NJMc+x8dxitnsyVYDsSVCsmehAsJD9XZli+gQjLbc4X4xWylLfA99lgmmphZxHL2K19nEj23dSOdimQrfyICvl3iMW5hfwCCf5+KZMMX0t27cszpcaXh4NsD1TTM+ZKKqZpGz482dTrXs4pWn0zTGG9IloDQ8SO3nqzwjTwuwgmS+0YHwrWEq4Lx0VplTogHZSH4+W8vTuIcPBTDO9XtPRW5hrC/l5epeCzDZGzGeAV+0s7nWJ6R3MP5YnqYVINeoh9XdNT/0XmDbcmCQ+9wJnUtoDzN4+4kcddLKw5/+/mSeJ/hJgAI53cAiO+XmyAAAAAElFTkSuQmCC);
		}
		&:nth-child(7){
			background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABLFJREFUeNrsmWtMm1Ucxk+BlQIFChrEKcREV8LcdGOQ4OJidPE2jZdkmM1PXha++M1E4+XrdMZLlmUzKh/8pIsTE+/XOOeHBRkCU9F1MyaQgaytBtpyb4H6/F+ek7ySrstpX1qWcJJfT/u2nP/znstz/ufFlUwm1eVWCtRlWNZE56oUpftyfHw85fXOzk4XqkawGWwEG8A1oAZcxZ9V6WZYh0AYjII/wRkwAAJtbW0pF1ZVVVXK+K50C9EuGkIrUT0IHga3gisd6rh/wUnwMfgUNxDNWjTEXoe3z4LHgUd/V1xcrHw+n6qsrFTl5eWqpKREeTwe5Xa7VWFhoSooWJp5i4uLamFhQSUSCTUzM2MxMTGhotGoikQiam5uzh5SPrwLXoX4IWPRHR0dUu0Dh0CpfKiurlZ1dXWqtrZWVVRUONLNsVhMBYNBNTw8rMbGxvTlafA0eKe9vd1oTj8FjsgbEdrY2Gj1qtNFbl7w+/1W7wcCAbkB6aS3qe9NE/d4QV6am5tVa2vrigheXiSGxGppadGXXszI8vTczGWRNaGnr6noV+Slp6dH9fb2qqmpqRUXKzEkVnd39/80mMzpw/z+5cHBQc/Q0JCqqamx5rfUZWVljgkNh8NqZGREhUIhRWOY5dQ4ZLy5wHYOwvK+xtvn0NheNOqWhqWUlpZalieLyOv1WnanLc/lcqmioqWm5+fnLSHxeFzNzs5aTE5OWq4hljc9PW0PGQcfgAOIfRaxzXdECj+L6jE08Dzqh8AD4DYEK5GAo6Oj2Xa29OqP4DPwCeJdyGobXyZeGntLwA2sQ70F3AwawHpQD2q5fcv32shjIMHtPAjO27byX8FptJ1wLPdIcwMS5GeyqhKmBvTouTwndDKK50ws7wS4L4+Cd1GDkU93gS/Al+D2HIrdAT5n3C7T6fEk8PKOd3HRdHKVDzgsdDNdaTcXuJTvqMFItOS194JHwDNgG91iP/gb/AT6mcz/xWuRS4jz8bBwAw8PTeAWXtOlD7wOjoFkJu6R5B8fY2/sATslj2Kv7F72e9kcpkic19ygjLhTxFgAp8Bx8CFH1DHLGyCyvZbzJjaxx6SnruZxy0eB+tg1KRsj/Vm20wscFRmhP8BvYGLFfZpBui62UPJ5Gm9YBQdvv6noE1yI+Sp3Mycx9umv6Jk78uDT32Tq07Lg7ienwUdyzOcCcrJspE+30QalfJ+pT98D9vJkLD69Fbxk8+k+m0+PMKNLe44F19p8egt9ut72G+mcN8DRbHz6KGliT9zBG0jl0zPMj2O0OR1DxBbrRxEpfLoH/MCR7HPS8vqJdXC2+bQ8HqujL+t8uiLFY7EgCXFUZIR+p/dHc+HTUT7KOrnafNq/Cnx6g6lo8ci78ij4zkzyaXGHb/Pg09vlgMvU9JTpnH6CC0r7dL8tnz6TA58+Tg3GPi3T41G19Ki3iRxgxia71S8gQJ8+z4wuXfHSk6+3+fT2ZT4tbvIaeC8bn36fbGNP7OQms4fYizx5maPN6ccC62h/F/PpRXqzzqcd9ek+W4OSM98EbqRP1zOXXs8pdQW9XI+YCPuHzzvCHJWALZ+OmMwl19r/EddEr4nOf/lPgAEAHDKLJusxB+4AAAAASUVORK5CYII=);
		}
		&:nth-child(8){
			background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABDZJREFUeNrsmV1IVEEUx2d1MYlSWHJBIcJC09VQCy3Rol4qIXoRk0jp28jKEgIxCSqijHqwlB7WSAP7zj6MqIfwIeylHqzWL7R66MFNUcvCELW2c+S/sWw79+re2UWjAz/n6pw589+7c8+cuZpcLpeYbRYiZqHNStFmPQe73T6VOCnERiKdSCCiiUj0DRNOoot4TTwj3uoFLCoq8l+0zgfeSRwmkjT8LIB9colKooOoIuqIiWAtj5XEO/4iIKYP14VEKhGFD2XGdSr67PC14dqBWAEXvZtoIRKJ98Q2YiGxj2jAVz9A/AQD+FsDfNi3AGMTEGtPIEXvJ2pxB2uIZcQNYnwaMdj3OsbWIJYdsZWLXk1UEyailDhEjBp4JkYRoxQxqzGHMtHhxDUiFA9QlcIM5o4XigczXJVo/upikbbKApB6yxB7CVGsQnQI0hpbOTGm4buAOIPMMgreEKfQJ7MxxGYr0dM1FdGriEXEJ6JJwy8XGaEcD9kcwBvPceIDfGTWhDl4rkxDOyLZBrSPiF8agu/yAxUdHS3i4+OFxWKZ7BgaGhLd3d3C6XRGwCePaPQRg2M/wLe6nnhp5E6no30h6efN4yoLTkpKEtnZ2cJqtQqz2TwJX/PfkpOTBbIE+1olsVrQZhhdHnFo2yX9nLYi+A7bbDZpkMTERBETE8OXfMePSNzaveb0W3QUWqekfzP/4CWh++nj/mjZJHFxejzQhkRHeFRrvixhsirCGtYyD5+lEpevaCONiv7iJV6FydKmW+yQUdGf0cZK+rvcWULPPHw+Slxiveb0W/QrtFka+VX09PToBvLweSJxyfKa02/Rz9HmSfq5UvvW29srOjs7pUG4j33YV6N2yfOa0+/N5SEewjUo3ju8+vuJXbxxtLW1mQYHB//aXPgOQ7ALvv0+5rFhjmFsMoZEjxD12KkqUPR7G+9wW3jjoJ1vPuErzncczxol81Rg8+G5fqio8s5C/FaNuuAesRi+bSj2eUwrcRp9MsGZiD2C8UpK0z4cSPlOXNGoeflodQwFUxgxj1iOgmlAo1avRexKzKXs5HIOB1FeexcU5uxLOBw7MIfS49Y41jOvtwM4XRs1frmxFzELpnrWnO7B1gHBAstkrQHB63AuZDuIg0PAXiHUY+2FIR1m+BEjA2ktDLHqgvGyhh+2W6gVnuJ0MlVLwRgeexOxgvKGiTeJ7bjTvIs06x2RPFJbM8bw2B2IFRTR7kotn7gPEbz15mj458DHgjH5OofkgIj2FM7rfC6KpxIffkeJx/CpNyJYhWi2CdQTJ/DC5SI2i3CI5Ndm5zHXSfhOGJnQLNSYC4I6kQn4hWIahKYhD3PdcUfFZKpEu41FcdF8m1jhLqOxHFpVTaJatIA4FnwZvxejwhMzWbS7DC0MUOz//92aUaIdyA7BxPHP3WnT/38zB8l+CzAAtgwlwMk5ApQAAAAASUVORK5CYII=)
		}	
		&:nth-child(9){
			background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuJJREFUeNrsmVloU0EUhiepVR/cHoSqIPoiuIAoYlEQEcWlRUSECCL6pMEiFWndwO3JXREXXKJ90CchKupDRUFcKqjgSxXBV1t3RIxrapT4H/MHgt5MMrfTiRfvgY8J9+bO+TOZOTPn3Eg2m1VBs6gKoAVSdK9iNxKJhEk/w0A9mA7GghFgAO99BM/AE9AGWsHLcjuOx+Pliy7T5oEmMEvzrw0mk8By8BPcAAfAdZfTYzy4Ba6C2SADLoFGMBXUgD6khtca+Z0fYA64Bm6Ccdamh8bWgL0U9A7sAydBqsj335L74CgYBFaBZjADPATrec/6SFeB4+AQBZ8Ao/gDUgb9fAC7+exp0Bccoegqm6Ij4BhHKA0WgwYK8Gvy7EqwhH2upnhrotfJQgZfwVyQtBjBzoH57LuB06bboieDnUC2zqXgTg+EXokmy+hjFyONb9FRLjJZsAe5+nvKLoLDoJo+o35Fx8BE0AG2OdjstoBOjvQiv6Kb2O4AXxyI/szpoXRzWyd6DKgF78FZh0eLM9z6pzAsGomuZ3uFIcmVSRS5zM8LTUVPK1jZri3vs9ZU9Gi27RUQ3f6HhrJFD2XbWQHRHQVHXiPR+fNwqgKiP7Htbyo6wrYSSWSGbfV/lSNmPZB0qc6C/zr25eXDeuYii7TFguiWggVvL3OJxWJ/XUsmk8qPs2IRSuMjrHuEokPRoWiT7TCTCZ7odDrtO06/kjiqiZevLegr5eO7qegV3LGGeNx7oX4XNOMlVZWovup8iJ03Eg1BrZZ2PZ15+egHnoOBYE9Q5nQzBd8Fj4IgegLYxFPe5iBEj+HM/KWKekppym/Rf2iE2yj8AVjbraOpiRm+p8nngDKHN3KE76lcBfWb681FSmhdHplIF6PBSLBA5Yry8gJpu8oV6aXoOFPlKlrK2UjTpJbd2+O6XNtACu022MrpYSdz8WH7iwiX0ZY3W2/AU4a0C+CxqYNI+JrZkf0SYABg0a24seRwHwAAAABJRU5ErkJggg==)
		}
		background-repeat:no-repeat;
		background-size:auto 50%;
		background-position:left center; 
	}
	.column{
		display:-webkit-flex;
		text-align: center;
		margin-bottom: .1rem;
		a{
			flex:1;
			line-height: .2rem;
			padding-top:.38rem;
			background-size: 30%;
			background-repeat: no-repeat;
			background-position:center;
			&:nth-child(1){
				background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNrsmbtKxEAUhs8saVIo2ESWkELfQKy3sbNIFfAFVvIONgvBwlfYFNZh6xQ2Wm0v1im0iEElYKFFynjOkgGL3aTaZAL/gW8uzBQfw9wyUXVd09hiQiMMSPcVKgzDS87vmanhrh/MPI7jh8lIhKlxFFey/gkrw6Vr7YqFCGlIQxrSm1g3e+MQrMc40q0HndXSNsOchjSkIQ1pSO9L+ohZMu8tx+4PE/UlbXW0HzJPzFlHvwNmwTx23Rv6kL4RYcdxKAgCknxbJElCWZZJ8diE6XElie/7O4XlLTDPc119Hlr6hDm1bZtc193ZqSgKqqpKim/M69DS55J4nkdKbb8plmVJaZrq6sqEhfgliczVKOrcGF6YO1O+XG6Z35Y+30zMXDTbnhFb3qIBJyKkIb3nhSgv7NPm4mN6fOqRvtYVw6Ng5ptHEfxHhDSkh48/AQYAOgdpIUWPZRcAAAAASUVORK5CYII=);
			}
			&:nth-child(2){
				background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVVJREFUeNpi/P//P8NQA0wMQxCMOppegDEtLc0TSM8FYslB7tbnQJw8c+bM7UxDxMEMUDeC3MrAguRgRhINARc79fX1JGlqbGxkoMA+ydGMOOroUUePOnrU0aOOHnU0DLBQ07CfP38ynDt3DoxBwMjIiMHQ0JCBg4Nj8Dn6zZs3DCdPnmS4dOkSw69fv+Diu3btYjhw4ACDnp4eg7m5OYOIiMjgcPTixYsZ7t27h9yo2QPEU6D8HKAnXM6cOcMIxAxKSkqDw9FQB38BuR/q2GtI0puAWAvkeCCOBarlGeiMeASIbwNxMRDLAnEWmoNh4BpUThaqFqTn4ECFtC2J6j8AcR8Uj5bTo44edfSooxHgMLRywYYPD8WQZqSmYdRsMNmOpulRR486etTRo46mSccWNMIuCa25Bjt4AQvpFBhnkIOnQJwMrl5H5xFHHT3q6IEHAAEGAMspXDu1VNnHAAAAAElFTkSuQmCC);
			}
			&:nth-child(3){
				background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAh5JREFUeNrsmT1PAkEQhucM4ShMTKAy2gAVldioPTRGOztjYxAuNv4A/4WVIWBnYmflRyHUYIkNMQY6ow3ESIM05ztkLyEB5di7eG7YSZ67ze1lZ2dnP2Z3Ddu2SWVZIMVFGxC0GIVCYRvvC7D8x7rfQA7cF4tFTx4IovIkdF54LSQ0Unnjjw2w/Wg4PYi1AfNuQOg/VMKyLKU9YLukB2rgBIRV7EKLYAucgUew8l8MMFyyBPbAC0iDW2Cq5IFPcA02wDNYAwUVZ6EPcCrS+6pOow/iva6qAT3xNvVKrA3wMZSwtQcC9kAQOzLtgbkxICzC2JpYRCaGtj7IzHrcbGg4bL0REeCobAkOwS549Vh5KT0hFy0yLDQajVI2m6VEIjHMaLfbVKlUqNvtOqHtJvjy0PJSeqZ1Id7rpWOxGOXzeUqlUmSa5hBO8zfOc0JbL7tKWT3TDNjnRyaToUgkMpbJ3zhv9F9JkdbDXYjPKJd/m5cdd06SZDI52ldl5nbbg5539sARJxScQXkw59iAO+GBSfvQujOQfpJWq+Uk6zPsb/3Qs8p1D/12tG1Z1hW7rFqtUjweH+uf/X6fOE/IlewxuRc90wYx/9nodDpUKpWo2WzSYDAYwulyuUycB3kS/8qKtB5j2iUfWuenBcaRBthBq3hayGT1GG5uKVE4LzTH4ACkxOcmuATnKHTgx6iU0WPoa1ZtgDZAGxCofAswAOBN4RWiT1JMAAAAAElFTkSuQmCC);
			}
			&:nth-child(4){
				background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbdJREFUeNrsmT9Iw1AQhxMpDboEixZRyOaqi+CiLoJOooO4OVSwg6AgQikqagQHHRxcpCBmcFNcdBHEqToILrq5BkSIYCmCkiLG38F1sNZKpX/ek3fwwT1K2y+Py71rqgdBoMkWDZqEoaRrFXo8Hg9Ho9HDbDY74vu+kBdhGMaHaZqnnudNpFKpHEluYTEqqjAFuZEj0nVah8AkJbFYTLMsS0hp13U1x3EonQZJ2t0IrUQVLnCLqO6hpP+jdCif2LatC+4aqPJQ0kpaUuk038F/IV0B10tw9aXlVXsErsBn9H/r0+W8SdW0klbdo7LdRZSdLqu7yNI9Qtync2BAlpqeAr2gRZYbsRGscL4mi/Qs6AA34EgG6WZ6zsH5Yv7Xi+jSCRa/AOcyHC7tYI53NynLibgKmsAx17MQ0jQb34LuIq91cpt7B8sinYj03V3gGswXnIobfKDsg3uRpAfBLgiDbXAG2kAPGAdvGj/aLSb9zHlfjaVfwQwYA09gCNyBPd71HfDwk/RBlae43ya4E65rammtnGfAZqm6SvBVZeo4wT2CYbAAXsBSKR9d/Y+opJV0/eNTgAEAmr6XjlsWOe4AAAAASUVORK5CYII=);
			}
			&:nth-child(5){
				background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcNJREFUeNrsmT9Lw0AUwJMSBNGl2jr2C4joUFChHdpJ/Q4OGcyok+KaVT9Bpgx+CAfFCi12EEHw356tVnRwEBWN7+QFQsilSXPx7uQe/JqQ3MGPR9+9S6L7vq/JFrqSVtIJ0pZlTcDxENgEyoJ6vgBHwK7jOB8GnBwA24Int4yOb8C+gRnWTNPUarVa7AzbtnXO0g2gC2wR6RL8zJCrNGFBoofHX9eSJmEoaSVdkDSp5gugkmEOGdsHznlJTwGrwGlK8QqOXQGmeUmvAffAYgrxKo4hY++AdV7Sj0A7JH5CEa/iPTLmFmgBQ56FOAiJL8WIR4XbeYVZrR6B+ENIfDYifMNKmISRY+41CkWDiD9Fri3g3ymIK6DOI9PvOeZ+8sr0csK94MmikN2hauMMgnTZSyxiaaQnsUA7SeKiSW9gx5xPEh9Xuo/FRiNckDS6lC7bGiU+rvQXg6x+U64PY8TnWCx5jRH38y55gXgHxc9kWfKiGZdmnQ6LM+mIfy1+DLzKIh2I16Vu40VlupewpAkr3VTvPf6L9DM58TxPqkIkb9h3XNdN05a1Agu3mUV6D/cIPD9fZNqjqK9bSlpJCxA/AgwAjyOChY/U74cAAAAASUVORK5CYII=);
			}
		} 
	}

}
</style>