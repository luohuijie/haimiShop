<template>
  <div :class="['search-bar',color]">
    <div class="search-box">
      <span class="search-close" v-if="isShow" @click="clear"></span>
      <input type="text" placeholder="搜索宝贝" v-model="len" @keydown.enter="search"/>
      <a class="button" @click="search">搜索</a>
    </div>
  </div>

</template>
<script>
export default {
  props: ['color'],
  data () {
    return {
      isShow:false,
      len:''
    }
  },
  watch:{
    len: function (val){
      this.isShow = val.length > 0 ? true : false
    }
  },
  methods:{
    clear () {
      this.len = ''
    },
    search () {
      this.$http.jsonp('http://m.haimi.com/api/search/product',{
        Params: {
            ActivityID:'',
            BonusID:'',
            Status:'ON',
            page:2,
            pageSize:20,
            Subject:this.len,
            Sort:'',
            BrandID:'',
            platform:'WAP'  
        },
        jsonp:'_callback'
      }).then(function(opt){
        console.log(opt)
      })
      this.$router.push({path:'/search',query:{id:this.len}})
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-bar{
  width: 100%;
  padding: 5px;
  box-sizing:border-box;
  border-bottom:solid #ccc 1px;
  .search-box{
    height:0.3rem;
    display: -webkit-box;
    width:100%;
    -webkit-box-align:center;
    position: relative;
    .search-close{
      position: absolute;
      right: .45rem;
      width:.3rem;
      height:.3rem;
      background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCQzk4NDhBODYwNDExRTZCRDlERDVENTczQjIwN0Y2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCQzk4NDhCODYwNDExRTZCRDlERDVENTczQjIwN0Y2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0JDOTg0ODg4NjA0MTFFNkJEOURENUQ1NzNCMjA3RjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0JDOTg0ODk4NjA0MTFFNkJEOURENUQ1NzNCMjA3RjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HK54VAAACkUlEQVR42ryXTUhUURTHn4+wsLQgDZcp5sYwTSQykMaNpqbjokKsVaALWwSVuSlwVQq1CBIGol2CH6CBGZboSiQjUpGiUtsG08KvnEGC/J84Ty5P79d8Hfht3rtz/v+5975zz00LhUKOYRwB9SAASkAeOAr+gTXwE8yBSTAGNk2SHjAYcwrcB80gQzLmBHMOtLF4H+gGK6rkruIdifWAL+CmQlw2W63gK3gEDtkaoH/9AdwznCVZpINOMAPyTQ2UgWlw2klclMhy+g0UgLcgx0l85PIGLZAZoDUeTpK4F5R7QNwTooGuBE+7LErBQ7+BQnDbSV3c8TalZ6BTs9ujoBd8MkgeAc/BR83X0eEZyALXNElfgnZQCd4pxm2BRnALNGlytoDDLpdXXZEp542zxYnfS8SDwruLBsWqlgxUGUwrGRgRTAR9JvzPgjxrugiQgTOGG6daYsIvTkvQz+usi2KXTzUnDhMBn/iAofj/wufykerEYWI2RnGKTDKQFsN3TF9Dse9Zq6X4biFatfxNhKd+1vf8CpiwzLXhcidjK+7VggbwGhwUaoCNiWUyMG8h3iSIXwaDbGIkRhMLLh+Ruoiy+LggPiSsec0+JkzyTpKBUf53qnihEHckJm5oclLfOEYG1rlwqOIsOM5nxpBit9fwnsg2qLCvwB/vBHwMritOxArw26JOhDVjtrnh3T2Ov4FnKewHnnrtutgRPQCLKRD/zN3XnpbMO2rDSRSn3Ff5q9q3K14Cl5Jk4hdvzCXdvYDargsJXo45WU7ZzegH3/OegL9xCG/z/fC87I7oavq7u6CIu5uIhfAmF68ibnij8dyOv/PllNr2Ol5HumqdBMd4zCofarTDp8Ab0+v5jgADABSilJXiVZaAAAAAAElFTkSuQmCC) center center no-repeat;
      background-size: 50%;
      
    }
    &:before{
      content: "";
      display: inline-block;
      width: 0.30rem;
      height: 0.30rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAdCAYAAABbjRdIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFCRjRDRUY4ODYxODExRTY5N0U5RTI5QTMyNkIxNDU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFCRjRDRUY5ODYxODExRTY5N0U5RTI5QTMyNkIxNDU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUJGNENFRjY4NjE4MTFFNjk3RTlFMjlBMzI2QjE0NTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUJGNENFRjc4NjE4MTFFNjk3RTlFMjlBMzI2QjE0NTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DOEMjAAAChklEQVR42rSWa4iMURjHz4y9FNZq20jNprSED6wdJbdWytCSiCg2xcdto21dErXFF/LJLb5R5JKQ0qKND6gVM3LJElGbtYkls8glNX5n+8/2es07s/POu//6dU7vXP7veZ5znueE4vG4yaIKWAsxmAbjoAR64SXchvPw1ORQNBo1RR6fjYSt0KK5W2PFfNgFlzU+z2YYzvCsBjqhFUbANdiklVVCMURgKRyFJKyEJ7A5H7MlcAeq4AHMgXo4oVB9gj/wDtqgCarhGAyDg3qBUC6zmXBRYTsJ8+CeyS2bv0ZYBz8035PNbLgSbcfjsBF+m/x0DpZp5TZ/C73MdsAEeARbjH/dgr0K4xF3msIKWzqx232syK0DyukUWOU2WwGjoQPaTeGyeduv+Qa32WLNz5rgZPOfUt5KnGa1mncEaPYBXmvDTXaaVWn+1gSrbo0Rp1mZ5h8DNuvVWOY0S2peHrBZ2qTPaZZebnXAZhNd4ew3u695XYBGERWJr85OEFZBtWrwKqA+1KCxXeVrwOyqNsd0HfBCNUp90Kig/3Oof6rEWO1TDytErep7CS3kv0J8CJ7BJDij3uRH66FZoWtUFelXIpEYMPsFa3QMlqtd5LtC20hPKe87HRsvY/PsVD/6AqsVhtggTMarFh6W0Te4kumL7gvPXZitjj0VbsBDuAD2GtYD33XrqlEU6lVs7fMu/c72tQWqj55mVi9ghproNhXq2iwrs/k5Dbu1q9t0Zm9q7Ep/MZTj3liqN49pJWP0gn06rPbeeEkrdl4Dr8NceCPD7sGY+VW5UjALXimkPaFUKlXwP9tt7WFoQxlVaurCZuiUVPgfa5cWF5mh1WdYpCLx/q8AAwDOBJFi/6m5HgAAAABJRU5ErkJggg==) center center no-repeat;
      background-size: 50%;
      position: absolute;
      top: 0;
      left: 0;
    };
  }
  input{
    display: block;
    -webkit-box-flex:1;
    height: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    color:#fff;
    padding-left: 0.3rem;
  }
  /* ::-webkit-input-placeholder { WebKit browsers 
    color: #999; 
  } */
  .button{
    background: transparent;
    border: 0;
    height: 100%;
    padding: 0 0.1rem;
  } 
  &.white{
    background: #fff;
    input{
      background: #f7f7f7;
      color:#000;
    }
    .button{
      color: #000;
    }
  }
  &.black{
    background: #242424;
    input{
      background: #000;
      color:#fff;
    }
    .button{
      color: #fff;
    }
  }
}
</style>
