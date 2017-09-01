<template>
	<div>
		<headerBar :color="'white'"></headerBar>
		<searchTag :searchTag="datas" v-if="!proData"></searchTag>
    <div v-else>
        <div class="tabs">
          <span @click="getData('BrandID')">综合排序</span>
          <span @click="getData('SoldNum')">销量优先</span>
          <span @click="getData('PriceAs')">价格排序</span>
        </div>
        <productList :proData="proData"></productList>
    </div>
	</div>
</template>
<script>
import headerBar from '@/components/headerbar'
import searchTag from './component/searchtag'
import productList from '@/components/productList'
export default {
  data () {
  	return {
  		datas:'',
      proData:[]
  	}
  },
  created () {
	  this.getData()
  },
  methods: {
  	getData (ids) {
  	  this.$http.jsonp('http://m.haimi.com/api/search/hotword?type=PRODUCT&platform=WAP',{
  	  	jsonp:'_callback'
  	  }).then(function(opt){
  	  		this.datas = opt.data.extra
  	  })

      var id = this.$route.query.id
      this.$http.jsonp('http://www.haimi.com/api/search/product?Subject='+id,{
        Params:{
          ActivityID:'BonusID',
          Status:'ON',
          page:1,
          pageSize:20,
          Sort:ids,
          platform:'WAP',
          BrandID:id
        },
        jsonp:'_callback'
      }).then(function(opt){
        var res = opt.body.data || opt.data
        this.proData = res
        console.log(opt)
      })
  	}
  },
  components:{
  	headerBar,
  	searchTag,
    productList
  }
}	
</script>
<style lang="less">
.tabs	{
  line-height: .34rem;
  text-align: center;
  background:white;
  border-bottom: 1px solid #ccc;
  display: flex;
  span{
    &:first-child,&:last-child{
      flex:2;
    }
    &:nth-child(2){
      flex:3;
    }
  }
}
</style>	