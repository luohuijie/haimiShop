<template>
	<div class="indent-box">
		<indentTitle></indentTitle>
		<router-view></router-view>	
	</div>
</template>
<script>
import indentTitle from './component/indentTitle'
export default{
  date (){
  	return {

  	}
  },
  components:{
  	indentTitle
  }	
}	
</script>

<style>
.indent-box{
	position:absolute;
	top:0;
	bottom:0;
	right:0;
	left:0;
	background: #f7f7f7;


}	
</style>