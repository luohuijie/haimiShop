<template>
  <nav class="footerNav">
      <div class="lis" v-for="(item,index) in navList" >
        <router-link :to="item.path">
          <span v-if="index==2 && list.length>0" class="radio">{{list.length}}</span>
          {{item.text}}
        </router-link>
      </div>
  </nav>
</template>

<script>
import {mapGetters,mapState} from 'vuex'
export default {
  name: 'footerNav',
  computed:{
    ...mapState({
    list:function(state)  {
        // if(state.list.length<=0){
        // this.$router.push({path:'/shopIndex'})
        // }
      return state.list
      }
    })
  },
  data () {
    return {
      navList: [
        {
          icon: '',
          text: '首页',
          path: '/'
        },
        {
          icon: '',
          text: '分类',
          path: '/Classify'
        },
        {
          icon: '',
          text: '购物车',
          path: '/shopIndex'
        },
        {
          icon: '',
          text: '我的',
          path: '/loginIndex'
        }
      ]
    }
  }
}
</script>

<style lang="less">

  .footerNav{
    display:flex;
    height:.4rem;
    width:100%;
    background-color:#fff;
    border-top:solid #ccc 1px;
    position:fixed;
    bottom:0;
    .lis{
      flex:1;
      text-align:center;
      padding-top:.22rem;
      a{
        color:#000;
      }
    }
    .lis:first-child{
      a{
        background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg0Q0U3MTkzODNBNTExRTY4OEExQUUyQ0E2RjM3MDY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg0Q0U3MTk0ODNBNTExRTY4OEExQUUyQ0E2RjM3MDY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODRCQkY3QTc4M0E1MTFFNjg4QTFBRTJDQTZGMzcwNjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODRCQkY3QTg4M0E1MTFFNjg4QTFBRTJDQTZGMzcwNjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Fvg1TAAACN0lEQVR42uyaPywDURzHVcUgYWERgyaGSgw1+jNI2CQVDILJoGIVNoM/qwibRAmbjYREFx3aIB0tBptEhEgsJAZJc74v+TZ5aRB1vdPW95d8ctfX9+c+fS/33rtrwHGcqv8U1VX/LCQsYQlLWMISlrCEJexV1Pym0EpLh5s2A2CNxwVQ8GJ+6f7aX2EXUQv2wCQ/N4Mp8F6JQ7oBnFL2hUwwraHShE1PpsAAeAB95IFpKeapCOEwuASd4Ab0gCvSw7RO5gmXu3AXuAAhkAG94Nb6/pZpGea5YJmyFI6CJGgEJxy6z5/ke+Z3J8ybZNmyEp4GR6AO7IAR8PZN/jfm2WGZI9ZRFsJLIA6CZsoGMZD9Qbks866wbJx1laywuchtsMyLn+F5obHMslmeb7PukhI2w/CQPZQbnnEX9Zmyo6wrxrrrSkXY3GjOwFDeDchtHFs3uiG20fjXwmYqOQfdeVNMscKeyrrZVuivhCNcLLTnLSKKHfZixbR1ic1LxG/hfpDmcjBpLRO9itxyNMk205Du90UYDY3jkOCC/wAMciPgdWyCXWuzkeC1FLY3LeTdEhqYw2Gde1kTr+AJzPKm4mU41nwdtNLmsT/e8KqHhy1ZE/WgjSskv8LJe5gQ9XJIr4I7sEX53DTR6qNwExgD++ARLHo2pL94xONYv7YfPRtw84hHTy0lLGEJS1jCEpawhCUsYQlL+LMo5gtxRz1cghHQ/6UlLGEJS1jCEpawhCUs4V/FhwADADYpf/SH0XvrAAAAAElFTkSuQmCC) center .05rem no-repeat;
        background-size:.25rem;
        padding-top:.27rem;
        color:#801a2a;
      }
    }
    .lis:nth-child(2){
      a{
        position: relative;
        background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNGMzI4N0U5ODNBNTExRTZBMTk2Q0U2RDI5Nzk4OUYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNGMzI4N0VBODNBNTExRTZBMTk2Q0U2RDI5Nzk4OUYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0YxRjcxQTk4M0E1MTFFNkExOTZDRTZEMjk3OTg5RjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0YxRjcxQUE4M0E1MTFFNkExOTZDRTZEMjk3OTg5RjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wu7zxAAAAiUlEQVR42uzYwQmAMBAEwJzY39WaCpMU4EcROcnsX3AI6G5ijNF2ytE2CzAwMDAwMDAwMDAwMPBVzrsP9N7LDOjMDCf89gmvxJ/B4YoHGBgYGBgYuHKXLvPyq0t/Ui0rVTPjwXgwHvyWgIGBgYGBjQfjwXjQpX20gIGBgYGBgYGBgYGBgR9mCjAA8TsYeSLG/f4AAAAASUVORK5CYII=) center .05rem no-repeat;
        background-size:.25rem;
        padding-top:.27rem;
      }
    }
    .lis:nth-child(3){
      a{
        background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyNDMwNTI3ODNBNjExRTY4QzNCRjE4RkY0MUI1MTFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyNDMwNTI4ODNBNjExRTY4QzNCRjE4RkY0MUI1MTFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjIzMEIyNTg4M0E2MTFFNjhDM0JGMThGRjQxQjUxMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjIzMEIyNTk4M0E2MTFFNjhDM0JGMThGRjQxQjUxMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xph1cAAAB2klEQVR42uyazytEURTH3zAUSbLTYGMWIku/ZoEaNjbzLyhLO/4FC/+EhT9hVmowRdGQlWGULIiFYkWUkuf7cl5pUoy575zR+576dHs13ZnPnHfPPe/2Er7ve3GKJi9mQWEKU5jCFKYwhSlM4agiWcuH8/n8bxvvhKZELpdjhp1kWDtzXMMUpnDkwmPgEvhG7IOUpvAaGDBMWAasaAp3yDgPun+gXaq8K5blu1uj3Jaq4wyMgj6wqZzdWRn3NDNclnFEWbYFTIF3UIyD8KQspxPwEAfh8Hbe0t6W7sC9FKWUonBWxqK2sEWWO2X/f621YLkWHlISnpbdpQRe4pDhcP3uWPXSp8rCWWvhivS1wS3dHLFsDxgGj+DISvgJXIE2kFbK7i54s3w81FrH4frdtn4e1qrUda3f/5bhQdArzU4lDsJfs+tbC19I55OW4tVw+69r4aBinsu2FMU6DuadqbdguRQO4lDGY8/92VXwh3bJgcNNowivSjMQ1XtQ12Cp3kmSDn/QLRj3Gjx4Lk3h2qMfFKTHLsi1xRxqwutgzvs8ZAvGDaM51IQnqq4zRnOoCZeqrg+M5lATXpRu6FnGBaM5vo0E35emMIUpTGEKU5jCFKYwhf8UHwIMALudjU3NJkhkAAAAAElFTkSuQmCC) center .05rem no-repeat;
        background-size:.25rem;
        padding-top:.27rem;
        position: relative;
      }
    }
    .lis:last-child{
      a{
        background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExN0FCNTI0ODNBNjExRTY4QjBBQjVCRUM5RTAyMjFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExN0FCNTI1ODNBNjExRTY4QjBBQjVCRUM5RTAyMjFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTE2N0VEMTY4M0E2MTFFNjhCMEFCNUJFQzlFMDIyMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTE2N0VEMTc4M0E2MTFFNjhCMEFCNUJFQzlFMDIyMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6kkkdmAAADFUlEQVR42uyaW4hNURjH93G/jBGTMRjJDMqdaJTbg0sazBzlWh4wyeVBIh4QgynEgzzyMJyXYRBOk0upOR4oPCCmZMw0lCi3miImnOO/8t+1H9Tss/fae6/TfF/9+nYzZ1b711r72+tbZ2KZTMbqStHN6mIhwiIswiIswiIswiIswkFFDz9/nEwm3X60D6gAlWAqKAIF4BNoBilQB165HTAej4cv7CJiYDM4Aob95/dDyTxwEFwDe8CbXFzS+aABnKPsc7APzACFoC8oAcv5mZ9gJXgGluSacD/QCJaBL2AdmAZOgCdcykqwDdwEW0EpuAIG8mfrc0VYLeMEZ7IFzAT1oLPG+wNYA/aD7uACmJsLwlVgFWd2kYfn8Tg4xfpSy4JnrHAvcJTXO8Bbj+McAE1gLIuescIrwHAWqEs+xvkFqnm93WThSubzLp7ZzkIVrnYwgTNtpHAZc0rDWB2s9M5xjRMexfxS03ivmUeaXLTsZ1BHfGceYKqwfYNDNI1XyPzVVOFm5nGaxpvE3GKq8H3mpRrGGgRmgzR4YKrwZeaN3E/7CfX+7clK/dnkGX7M7qjaxzjFbBNVnDZ9L70T/AZ7QbnHSn+RS/o2uGW68EPuhWNs92Zl2WnVskt6p3sfHZSwmqHxvO7PnthtjGGHpaK3Yxyju6UbLFrfwFpwKMud1RQuZfUuv6P7IECnsL0cy3miMd9RtbOJjzz2OcaeOOFoSowS3sbZUB3OQvDUx1hp1oEann6oIjbRJGF18niS1+p86oWmcdWrrY7v9ISO+9UlfBjksYet17hqVE+9BbRa/87IqkwQLubrQ717dwVQ9VVDspvXNY6OLDLhTSwu1x39q+5oYE1Q31isjlp4A/NZK7hQS/uMo0ZEJqzOmkrZr96zgo2r4AeYAwZHJbyA+S74E7CwepZTvOfFUQlPZ35khRN2X1wWlbC9GWgKSdjezEyOSngEc1tIwq3Mo6MSLnDsf8OI98xFXgfw+4V4PnO7FW7kRTXDHVY0kfbc0sn/S4uwCIuwCIuwCIuwCIuwCHuKvwIMALHojVBPu6R8AAAAAElFTkSuQmCC) center .05rem no-repeat;
        background-size:.25rem;
        padding-top:.27rem;

      }
      
    }
  }
  .radio{
    position: absolute;
    width:.15rem;
    top:.05rem;
    right:0;
    line-height:.15rem;
    border-radius:100%;
    background:#801a2a;
    color:#fff; 
  }
</style>
<!-- Add "scoped" attribute to lismit CSS to this component only -->
