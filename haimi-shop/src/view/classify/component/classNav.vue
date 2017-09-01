<template>
	<div>
		<div class="clsnav">
		<ul>
			<li><router-link to="/Classify/classContent" active-class="bor">分类</router-link></li>	
			<li><router-link to="/Classify/classList" active-class="bor">品牌</router-link></li>	
		</ul>
		</div>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.clsnav{
  height:.25rem;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  ul{
  	margin-top: .1rem;
  	li{
  		display: inline-block;
  		margin: 0 auto;
  		text-align: center;
    	background-color: #fff;
    	margin: 0 .1rem;
    	a{
    		color: #242424;
    		border-bottom: 2px solid #fff;
    		padding: .05rem .05rem;
    	}
    	.bor{
    		border-color: #242424
    	}
  	}
  }
}
</style>
