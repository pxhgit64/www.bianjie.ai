import Vue from 'vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
	state: {
		swiperIndex: 0
	},
	mutations: {
		swiperIndex(state,data){
			state.swiperIndex = data
		}
	}
})
export default store
