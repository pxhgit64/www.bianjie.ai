import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './vuex'
export default async ({
	Vue,
	options,
	router,
	siteData,
	isServer,
}) => {
	Vue.use(router)
	Vue.use(Vuex)
	Vue.mixin({ store: store });
	if(!isServer){
		import("./public/iconfont/iconfont").then(module => {
		})
		await import('vue-awesome-swiper').then( module => {
			Vue.use(module)
		}).catch(e => {
			console.log(e)
		})
		await import('element-ui').then(module => {
			Vue.use(module.default)
		}).catch(e => {
			console.log(e)
		})
		await import('vue-line-clamp').then(module => {
			Vue.use(module)
		}).catch(e => {
			console.log(e)
		})
	}
}
