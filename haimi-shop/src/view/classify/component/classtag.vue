<template>
	<div>
		<div class="class-tag">
      <router-link v-for="item in classTag.Records" :to="{path:'/search',query:{id:item.CastID}}">{{item.SlideName}}</router-link>  
    </div>
	</div>
</template>
<script>
export default {
  props: ['classTag']
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.class-tag{
  padding: .1rem 0 .05rem;
  a{
    padding: .05rem .08rem;
    border: 1px solid #e5e5e5;
    float: left;
    margin: 0 0 .15rem .15rem;
    color:#000;
  }
}
</style>
