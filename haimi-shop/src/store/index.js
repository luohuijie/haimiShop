import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isble : true,
		togger :false
	},
	getters: {
		togger (state) {
			return state.togger
		},
		isble: state => {
    	  return state.isble
    	}
	},
	mutations: {
		checAll (state) {
			state.togger = !state.togger
		},
		sendData (state) {
			console.log(4445456)
		}
	},
	actions: {
		checAll ({commit}) {
			commit('checAll')
		},
		sendData ({commit}) {
			commit('sendData')
		}
	}
})