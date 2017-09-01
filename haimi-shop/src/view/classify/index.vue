<template>
  <div class="class-contnet">
    <classNav></classNav> 
    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <footerNav></footerNav>
  </div>
</template>

<script>
import classNav from '@/view/classify/component/classNav'
import footerNav from '@/components/footerNav'

export default {
  name: 'Classify',
  components: {
    classNav,
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.class-contnet{
  background:white;
}
</style>
