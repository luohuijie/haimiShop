<template>
	<div>
		<div class="class-banner">
			<a href="javascript:;"><img :src="imgData.Records[0].PictureWebp" alt=""></a>
		</div>
	</div>
</template>
<script>
export default {
	props: ['imgData']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.class-banner{
	a{
		img{
			width:100%;
			display: block;
		}
	}
}
</style>
