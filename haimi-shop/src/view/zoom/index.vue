<template>
	<div>
		<infoUser></infoUser>
		<userMenu :phone="phone"></userMenu>
		
	</div>
</template>
<script>
import infoUser from './component/infoUser'
import userMenu from './component/userMenu'
export default {
	data () {
		return {
			phone:''
		}
	},
	created () {
		this.phone = this.$route.query.userName
	},
	components:{
		infoUser,
		userMenu
	}
}
</script>


