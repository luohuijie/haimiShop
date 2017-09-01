<template>
	<div class="shop-comment m-box">
		<div class="star">
			<span>宝贝评分</span>
			<span><i></i></span>
			<span>{{datas.ProductScore}}分</span>
		</div>
		<ul class="leave-msg">
			<li v-for="item in datas.TopReviews">
				<div class="comment-title">
					<div class="comment-title-img"><img :src="item.Buyer.Avatar" alt=""></div>
					<div class="comment-title-msg">{{item.Buyer.NickName}}</div>
					<time>{{item.CreateTime}}</time>
				</div>
				<p class="comment-text">{{item.BuyerNote}}</p>
				<ImgZoom :lists="item.BuyerPicturesWebp"></ImgZoom>
			</li>
		</ul>
		<a class="all-btn">全部评价({{datas.ReviewCount}})</a>
	</div>
</template>
<script>
import ImgZoom from '@/components/ImgZoom'
export default {
	props: ['datas'],
	components:{
		ImgZoom
	}
}
</script>
<style lang="less">
.shop-comment{
	.star{
		padding: .12rem .1rem;
		border-bottom: 1px solid #ccc;
	}
	span{
	i{
		display: inline-block;
		width: .72rem;
		height: .12rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXZJREFUeNrMlzFOwzAUhtOC1KEnKCgTrEWCZECwcwNYYYADQOlMq3YrAlbEEXoDDlBggDNAJS7QDQES/5P+wUKunTh2kid9Suz4KZ9l58lpPMTbkUMc8PqYN/F0/mZ8vuogswImoAFkNr+Rx2g65ByDLdDlfVSlUBuMlPaYfZUJXYI1pd1hXyVC8vK+pr/PZ6ULjZYsT5tLV6qQbOATy0bvlik04eduKgXXPoR0dajF+rIL9niNMxbLOXgGM/ACpAp+5RVaV14sJJRyiZgcsi0yr5R7ouinTegMXEVhosXJCudgCAa2PTTgwNBhlVE3dWipTDL/v7JQUplldJ+9b6lcMsvqkC+p3DKmwlhUyknGVqnvCwg555qEkgJCad2EkroJ7YQQSuu0ZJ2Cp0Dn/GbO5ZJfninYJ1PDb1AaUmgB7sAmOOIxYsZ76bvlmMJ70Cb0AXo848jx4V0zVvouOKbHHO9CP8rsbzSz18WCYzeY++0i9CfAAPXVQoZab75nAAAAAElFTkSuQmCC) repeat-x;
		background-size:auto 100%;
	}	
	}
}
.leave-msg{
	padding: 0 .1rem;
	li{
		border-bottom: 1px solid #eee;
		padding-top:.1rem; 
	}
	img{
		width:100%;
		display:block;
	}
}

.comment-title{
	line-height: .2rem;
	overflow: hidden;
	.comment-title-img{
		width:.2rem;
		float: left;
	}
	.comment-title-msg{
		float: left;
		padding-left: .1rem;
	}
	time{
		float: right;
	}
}
.comment-text{
	padding: .1rem;
}
.comment-imgslist{
	display: -webkit-box;
	.comment-imgs{
		width:.42rem;
		height: .42rem;
		margin-right:.1rem;
		padding-bottom: .12rem;
		img{
			height:100%;			
		} 		
	}
}
.all-btn{
	display: block;
	line-height: .38rem;
	text-align: center;
	color:#666;
}
</style>