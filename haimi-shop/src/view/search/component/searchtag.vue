<template>
	<div class="tag-box">
    <div>
  		<div class="tag-title">热搜宝贝</div>	
  		<div class="class-tag">
        <a href="javascript:;" v-for="item in searchTag.Hotwords">{{item.Keyword}}</a>  
      </div>
    </div>
  </div>    
</template>
<script>
export default {
  props: ['searchTag']
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.tag-box{
	padding: .1rem;
	background:white;
	border-top:solid #ccc 1px;
}
.tag-title{

}
.class-tag{
  padding: .1rem 0 .05rem;
  overflow: hidden;
  a{
    padding: 0 .08rem;
    line-height: .23rem;
    border: 1px solid #e5e5e5;
    margin: 0 .08rem .08rem 0;
    color:#000;
  }
}
</style>
