import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		swiperIndex: 0,
		partnerActiveIndex: 0
	},
	mutations: {
		swiperIndex(state,data){
			state.swiperIndex = data
		},
		partnerActiveIndex(state,data){
			state.partnerActiveIndex = data
		}
	}
})
