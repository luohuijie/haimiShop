<template>
	<div>
		<div class="user-info">
			<div class="user-file">
				<input type="file" v-file>
				<div class="user-imgs">
					<img id="imgs" src="//img.haimi.com/Fo7TfAkGWBUqwYoBxxYCJYrEG7-L?imageView2/1/w/100/h/100" alt="">
				</div>
			</div>
			<div class="user-name">
				{{val}}
			</div>
			<i @click="update"></i>	
		</div>
		<dialong :ble="ble" v-on:upde="fn"></dialong>
	</div>
</template>	
<script>
import dialong from '@/components/dialong'

import {mapActions,mapGetters} from 'vuex'
export default {
	data () {
		return {
			val:'海密',
			ble:{
				ips:true,
				ste:false,
				title:'请输入昵称'
			}
		}
	},
	methods:{
		fn(opt){
			this.val = opt
		},
		update () {
			this.ble.ste = true
		},
		...mapActions([])
	},
	computed:mapGetters(['ips']),
	components:{
		dialong
	},
    directives: {
      'file':{
        bind (el) {
          el.onchange = function(){
          	var reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
            var imgs = document.getElementById('imgs');
            reader.onload = function(){
               imgs.src = this.result;
            }
          }
        }
      }
    }
}	
</script>

<style lang="less">
.user-info{
	padding: .1rem;
	line-height: .42rem;
	background:white;
	display: flex;
	i{
		width:.2rem;
		background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAR5JREFUeNrs2b0KglAUB3CNlj5oqyeQltagyaGxLWpvdAh6mmjxHaJNaGqNaG3yEZr7WML+FwzKJfWeczU6B/7c5ao/jlcuqh1FkfVrVbF+sAQtaEEL+o/Q1W8TfN9vYVgiE6SZ4dx3ZIxsU8xtI4E6xvM8l6LTK2SWEawq7VarwDukj9RIOh13WFUXCYnv9AvcQ07IiGpN1+ORGzxEzmV+EHODi0JrgYtAa4NNo0nAJtFkYFNoUrAJNDmYG80C5kTnAe+RA9U2bqrDg6I63eFaEpzogBvMgb4hR04wx5p2LQMl74iCFrSgBf1R13h0GB1O4lra6M3bJ4SIKWHiWto74hx5IFOkwdTpC7JGFmkm2/KjSNCCFrSgS11PAQYAtIJgn5JOJd0AAAAASUVORK5CYII=) no-repeat center center;
		background-size:100%;
	}
}
.user-imgs{
	width:.42rem;
	height:.42rem;
	overflow: hidden;
	img{
		display:block;
		height:100%;
		margin: 0 auto;
	}
}
.user-file{
	position: relative;
	overflow: hidden;
	input{
		position: absolute;
		opacity: 0;
	}
	
}
.user-name{
	padding:0 .1rem;
	font-size: .16rem;
}
</style>