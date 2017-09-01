<template>
  <div>
    <div v-for="val in indexJson">
      <swiPer v-if="val.Channel.Type == 'Slides'" :swiper-data="val"></swiPer> 
      <navContent v-else-if="val.Channel.Type == 'Col4ImageWithTitleNoDesc'" :navcon="val"></navContent>
      <banner v-else-if="val.Channel.Type == 'Col1ImageOnly'" :banerData="val"></banner>
      <produc v-else-if="val.Channel.Type == 'Col2LeftTop1LeftBottom1Right1'" :imgs="val"></produc>
      <imgList v-else-if="val.Channel.Type == 'Col2ImageOnly'" :imglist="val"></imgList>
      <imgTitle v-else-if="val.Channel.Type == 'Col1ImageOnly'" :imgtit="val"></imgTitle>
      <scrollX v-else-if="val.Channel.Type == 'Col3AndHalfWithTitleAndDesc'" :scrollData="val"></scrollX>
    </div>
    <proList :proData="proData"></proList>
  </div>
</template>
<script>
import swiPer from '@/components/swiper'
import navContent from '@/view/home/component/navcontent'
import banner from '@/view/home/component/banner'
import produc from '@/view/home/component/produc'
import imgList from '@/view/home/component/imglist'
import imgTitle from '@/view/home/component/imgtitle'
import scrollX from '@/view/home/component/scrollx'
import proList from '@/view/home/component/prolist'

export default {
  name: 'homePageIndex',
  data () {
    return {
      indexJson :[],
      proData: []
    }
  },
  components: {
    swiPer,
    navContent,
    banner,
    produc,
    imgList,
    imgTitle,
    scrollX,
    proList
  },
  created () {
    this.indexData()
  },
  methods: {
    indexData: function () {
      this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_2&platform=WAP',{
        jsonp:'_callback'
      }).then(function(opt){
        var datas = opt.data.data
        this.indexJson = datas  
      })
      this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',{
        jsonp:'_callback'
      }).then(function(opt){
        this.proData = opt.body.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
