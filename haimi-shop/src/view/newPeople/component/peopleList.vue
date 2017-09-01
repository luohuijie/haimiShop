<template>
	<div class="people-list">
		<router-link v-for="(item,i) in datas" :to="{path:'/shopCart',query:{id:item.ProductID}}">
			<i v-if="(item.FinalPrice-item.NewComerPrice)!=0">{{item.FinalPrice-item.NewComerPrice}}</i>
			<div class="ple-left">
				<img :src="item.PicturesWebp">
				<div></div>
			</div>
			<div class="ple-right">
				<h3>{{item.Subject}}</h3>
				<p>{{item.SecondSubject}}</p>
				<p class="ple-price">
					$30.00
				</p>
			</div>
		</router-link>	
	</div>	
</template>
<script>
export default {
	props:['datas']
}	
</script>

<style lang="less">
.people-list{
  padding: 0 .1rem;
  a{
  	display:block;
  	width:100%;
  	background: #fff;
  	box-sizing:border-box;
  	position: relative;
  	margin-bottom: .1rem;
  	display:flex;
  	color:#000;
  	  i{
  	  	position: absolute;
  	  	width:.34rem;
  	  	height:.34rem;
  	  	left: .1rem;
  	  	top: 0;
  	  	z-index: 100;
  	  	color:white;
  	  	text-align: center;
  	  	background:url(//img.haimi.com/FptCz4tH4XADfCSIEMzEQwCaZWUT) no-repeat;
  	  	background-size: 100%;
  	  }
  	  .ple-left{
  	  	position: relative;
  	  	width:40%;
  	  	img{
  	  		width:100%;
  	  	}
  	  	/* div{
  	  		padding-top: 100%;
  	  	} */

  	  }
  	  .ple-right{
  	  	width:60%;
  	  	padding:.1rem .05rem;
  	  	p,h3{
  	  	    width: 90%;
   				margin: 0 auto;
   				white-space: nowrap;
   				overflow: hidden;
   				text-overflow: ellipsis;
  	  	}
  	  	.ple-price{
			padding-top:.2rem;
			font-size: .25rem;
			text-align: right;
			background: url(//img.haimi.com/Fodwf3ZSFlsKKWphQD4P_BCJvyw0) no-repeat left bottom;
			background-size:.7rem auto ; 
  	  	}
  	  }
  }
}	

</style>