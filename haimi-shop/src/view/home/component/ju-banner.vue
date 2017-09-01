<template>
	<div>
		<div class="jujia">
			<a v-if="juTitle"><img :src="juTitle" /></a>
			<a v-else="juTitle"></a>
		</div>	
	</div>
</template>	

<script>
export default {
  name: 'jujiabanner',
  props: ['juTitle'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jujia{
	a{
		display: block;
		img{
			width: 100%;
		}
	}
}	
</style>
