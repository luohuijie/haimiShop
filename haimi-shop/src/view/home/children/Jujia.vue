<template>
	<div>
		<juBanner :juTitle="juTitle"></juBanner>
		<proList :proData="proData"></proList>
	</div>

</template>	

<script>
import juBanner from '@/view/home/component/ju-banner'
import proList from '@/view/home/component/prolist'

export default {
  name: 'homePageIndex',
  data () {
    return {
      juTitle: '',
      proData: []
    }
  },
  components: {
    juBanner,
    proList
  },
  created:function(){
    this.getData()
  },
  methods: {
    getData () {
      var res = this.$route.query.id
      this.$http.get('/api/childList'+res).then(function (opt) {
        this.proData = opt.data.data
      })    
      if(res!=13 || res!=9){
        this.$http.get('/api/childTitle'+res).then(function (opt) {
          this.juTitle = opt.data.data[0].Records[0].PictureWebp
        })
      }
       
    }
  },
  watch: {
    '$route': 'getData'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
