<template>
  <div>
    <div v-for="item in classList">
      <ClassBanner v-if="item.Channel.Type=='Col1ImageOnly'" :imgData="item"></ClassBanner>
      <ClassTag v-else-if="item.Channel.Type=='ColNWithTitleAndBorder'" :classTag="item"></ClassTag>
    </div>
  </div>
</template>

<script>
import ClassBanner from '@/view/classify/component/classBanner'
import ClassTag from '@/view/classify/component/classtag'

export default {
  name: 'classPageIndex',
  data () {
    return {
      classList: []
    }
  },
  components: {
    ClassBanner,
    ClassTag
  },
  created () {
    this.getData()
  },
  methods:{
    getData:function(){
      this.$http.get('/api/classIndex').then(function(opt){
        this.classList = opt.body.data
        console.log(this.classList)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
