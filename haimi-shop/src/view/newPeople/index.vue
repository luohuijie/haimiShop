<template>
	<div class="people">
		<div class="people-head"></div>	
		<peopleList :datas="list"></peopleList>	
		<div class="people-footer"></div>
	</div>
</template>	


<script>
import peopleList from '@/view/newPeople/component/peopleList'
export default {
	data (){
		return {
			list:[]
		}
	},
	components:{
		peopleList
	},
	created () {
		this.$http.jsonp('http://www.haimi.com/api/promotion/activity-products-cdn?_callback=doSuccess2&ActivityID=1077&pageSize=40',{
			jsonp:'_callback'
		}).then(function(opt){
			this.list = opt.body.data.Specials[0].Products;
		})
	}
}	


</script>

<style>
.people{
	background: #eee;
}
.people-head{
	padding-top:75%;
	background:url(//img.haimi.com/FpITbmepYfWQ1V3QtEenAqakw37Z) no-repeat;
	background-size:100%; 
}
.people-footer{
	padding-bottom: 1.2rem;
	background: url(//img.haimi.com/Fq8hB-5CIcTMZDYrIoViL5JB8bfM) no-repeat;
	background-size:100% auto; 
}
</style>