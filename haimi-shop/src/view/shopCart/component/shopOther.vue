<template>
	<div>
		<div class="outher m-box">
			<ul>
				<li class="shop-lis">
					<span v-for="item in datas.Promises">{{item}}</span>
				</li>
				<li class="shop-lis2" v-if="datas.Promotions!= [] ">
					<a v-for="item in datas.Promotions">{{item.Subject}}</a>
				</li>
				<li class="shop-lis2" v-else>
					<div>请选择
						<a href="#" v-for="val in datas.PropertySku.Properties"> {{val.Name}}</a>
					</div>
				</li>	
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	props:['datas']
}	
</script>
<style lang="less">
.outher{
	ul{
		li{
			span{
				float:left;
				padding-left: .15rem;
				padding-right: .1rem;
				background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnpJREFUeNqsll1oTnEcx89zuEK5mJC3uEHy9twodmNjkUnUI2+JjNt5ibWZdqFJ8ja7k7ayEtOSm92x0YaSDJOYGxfCHk2UVkry+dX3cJydc55zHs+vPj31nHN+3////3v7Z67MzjoFbCFshvWwAKZABj7DEPTBLXga52R8zLPVcApWwS94AXfgk55Ph8XQAI3wCI7DvaRCE6AVauAD1EEHDEcsaBrshkPQC21QC6P+l9zAR2XQA/vgko7qbIyIo2fndMQt+rZHvkKFbCfdYEHbqRV+d5KbvXsYdshHt3yOEbIdrNCKbjjFWyfsla/WoFAF7NfWrzn/b9flq0a+/wg1w0dockpnTUqmZk8oqxS+mDIm/lOZFRGzFvnO2ks51UlHESLjdNTvYE7I86vynTOhchXjcEqRjGpmO9zVMQUtD89Nw1X+DxYhchn2wH3YAj8j3n1pGq4KK5+yTVk8D8BD2BjsAiG7KnMLrHw+fIV6339n4CA8gQ1JE8hW+wWmxqzGzv40/IDJ6n0W03XwLYGG+R4xoddK8TCz3VQqDucVm1ewVgtMYstMw46uX+1+XsSL72GNft9ClWZREpsLS+GBCXXpz60xH1idLILlEWkcZZ7PLhMa0NCyAE8q0J1HU4hMlE/LzAEv62xCzoCTJex15msmnPA3VW8y2gzaVQKRbZpNbfL9TzHWKinaVeWdRYrk1Dcfy+eYwWfnXw3PNE8uFIhZWEysBG4q7tX+mAY7w4gGVbu2bjV2LKagvYI8Cm/giL6tlK+/zTHmXleh69ZK33VrMHDdWqI6cZW5jV5M0tzrejW0rH426QJZ5dtdXrsw57e1+0j7LcAA6FyRSkLv93MAAAAASUVORK5CYII=) no-repeat left center;
				background-size:.1rem ;
			}
		}
	}
}
.shop-lis{
	line-height: .38rem;
	padding: 0 .1rem;
	border-bottom: 1px solid #eee;
	overflow: hidden;			
	a{
		color:#000;
		display:block;
		padding-right: .15rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4NTUxQjhEODQ3RTExRTZBMDgyQkZEMTM5MjgzQTlEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ4NTUxQjhFODQ3RTExRTZBMDgyQkZEMTM5MjgzQTlEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDg1NTFCOEI4NDdFMTFFNkEwODJCRkQxMzkyODNBOUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDg1NTFCOEM4NDdFMTFFNkEwODJCRkQxMzkyODNBOUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Hi23WAAABXklEQVR42rTWPyhFYRjH8XORoiSDDFYji4XZIrcoBtQdSLn5O4osZBA25V9X/iwiCqGYZFLKZrUbDGJQFMf3qd8tpW5X93mf+nRPt3v79Z7nfZ9zEnEcR78rk8lkL+uxjF48R3lWOp3+811Rjt+vogXnqIgKqFwhtoJHNOEUpSFCntCmT1vRPoq9QyKtpBWv6MIaEt4hVg9I4t36ivkQIVa36MEnpjARIsTqAgOwPb+IvhAhVnsYV1+20BEiJHt+5rTTDrTz3EOsZrCOMhyjMUSI1ZhuXyWuUBci5BtDeEE1dkOEWPM3UKUB2h8iZAUpTYOkpoN740fwoXFz7934YcziC9249t7CKZ0TO/WDOMvnTyX/CLD7vq2GT2LHe6w040gPrgUseQ/IBh22cmxi2nvU2ym+1Kk+UdNjz5AaBdRqB/VqR7k+fg+1kjt06oHl/iIxihu0462QV6IfAQYAL11FMkapwi4AAAAASUVORK5CYII=) no-repeat right center;
			background-size: .1rem;
	}
}
.shop-lis2{
	line-height: .38rem;
	padding:0 .1rem;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4NTUxQjhEODQ3RTExRTZBMDgyQkZEMTM5MjgzQTlEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ4NTUxQjhFODQ3RTExRTZBMDgyQkZEMTM5MjgzQTlEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDg1NTFCOEI4NDdFMTFFNkEwODJCRkQxMzkyODNBOUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDg1NTFCOEM4NDdFMTFFNkEwODJCRkQxMzkyODNBOUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Hi23WAAABXklEQVR42rTWPyhFYRjH8XORoiSDDFYji4XZIrcoBtQdSLn5O4osZBA25V9X/iwiCqGYZFLKZrUbDGJQFMf3qd8tpW5X93mf+nRPt3v79Z7nfZ9zEnEcR78rk8lkL+uxjF48R3lWOp3+811Rjt+vogXnqIgKqFwhtoJHNOEUpSFCntCmT1vRPoq9QyKtpBWv6MIaEt4hVg9I4t36ivkQIVa36MEnpjARIsTqAgOwPb+IvhAhVnsYV1+20BEiJHt+5rTTDrTz3EOsZrCOMhyjMUSI1ZhuXyWuUBci5BtDeEE1dkOEWPM3UKUB2h8iZAUpTYOkpoN740fwoXFz7934YcziC9249t7CKZ0TO/WDOMvnTyX/CLD7vq2GT2LHe6w040gPrgUseQ/IBh22cmxi2nvU2ym+1Kk+UdNjz5AaBdRqB/VqR7k+fg+1kjt06oHl/iIxihu0462QV6IfAQYAL11FMkapwi4AAAAASUVORK5CYII=) 100% no-repeat right center;
	background-size: .1rem;

}
</style>