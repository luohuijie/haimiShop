<template>
  <div class="nav" v-scro >
    <div class="nav-list">
      <span v-for="item in navData">
        <router-link :to="{path:'/Home/homeChild'+item.NavID,query:{id:item.NavID}}" active-class="active">    {{item.Title}}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['navData'],
  data () {
    return {}
  },
  directives: {
    scro: {
      bind (ele) {
        window.onscroll = function(){
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; 
          if(scrollTop>ele.offsetTop){
            ele.className = 'nav pos';
          }else{
            ele.className = 'nav';
          }
        }
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pos{
  position: static;
  position: fixed;
  background:#fc3154;
  top:0;
  left:0;
  z-index: 100;
}
.nav{
  font-size:.14rem;
  background: #fff; 
  .nav-list{
      overflow-x: auto;
      display: inline-flex;
      display: -webkit-box;
      width: 100%;
      height:.4rem;
      border-bottom:solid #ccc 1px;
    span{
      display: block;
      height: .4rem;
      line-height: .4rem;
      text-align: center;
      &:first-child{
        padding-left: .05rem;    
      };
      a{
        border-bottom: 4px solid #fff;
        margin: 0 .05rem;
        padding: 0 .05rem;
        display: block;
        height: .36rem;
        color:#242424;
      }
      .active{
        border-bottom-color:#000;
      }
    }
  }
}
</style>
