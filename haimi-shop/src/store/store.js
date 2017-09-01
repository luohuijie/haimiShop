import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		isshow:false,
		isble: false,
		sum:0,
		list:[],
		isok:true,
		ips:'',
		val:''
	},
	getters: {
		list (state) {
			return state.list
		},
		isble (state) {
			return state.isble
		},
		sum (state) {
			return state.sum
		},
		isshow (state) {
			return state.isshow
		},
		isok (state) {
			return state.isok
		},
		ips (state) {
			return state.ips
		},
		val (state) {
			return state.val
		}
	},
		mutations: {
		checAll (state) {
			state.isble = !state.isble
			state.list.forEach(function(val){
				val.id = state.isble	
			})
		},
		getRadio (state,ind) {
			state.list[ind].id = !state.list[ind].id
		},
		arrSum (state,ind) {
			state.sum = 0;
			var num = 0;
			state.list.forEach(function(val){
				if(val.id){
					num++;
					state.sum += val.num*val.price;
				}else{
					state.isble = false
				}	
			})
			if(state.list.length!=0){
				state.isble = num==state.list.length ? true :false 
			}else{
				state.isble = false
			}
		},
		removeData (state,ind){
			state.list.splice(ind,1);
			window.localStorage['list'] = JSON.stringify(state.list)
		},
		fn (state) {
			state.isshow = !state.isshow
		},
		dialong (state) {
			state.isshow = true
		},
		ok(state,ste){
			if(ste){
				console.log(state.ips)
				console.log(state.val)
				state.ips = state.val
			}
			state.isok = false
		},
		update (state){
			console.log(222)
			state.isok = true
		}
	}, 
	actions: {
		checAll ({commit}) {
			commit('checAll')
			commit('arrSum')
		},
		getRadio ({commit},ind) {
			commit('getRadio',ind)
			commit('arrSum')
		},
		removeData ({commit},ind) {
			commit('removeData',ind)
			commit('arrSum')
		},
		fn ({commit}) {
			commit('fn')
		},
		dialong ({commit}) {
			commit('dialong')
		},
		ok ({commit},ste){
			commit('ok',ste)
		},
		update ({commit}){
			commit('update')
		}

	}
})
