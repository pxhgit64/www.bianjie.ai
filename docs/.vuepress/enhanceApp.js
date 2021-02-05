import 'element-ui/lib/theme-chalk/index.css'
import 'overlayscrollbars/css/OverlayScrollbars.css'
import Vuex from 'vuex'
import store from './vuex'
export default async ({
	Vue,
	options,
	router,
	siteData,
	isServer,
}) => {
	// 解决  Uncaught (in promise) Error: Redirected when going from "/xxx/xxx.html" to "/xxx/xxx" via a navigation guard 警告
	const originalPush = router.push
	router.push = function push(location, onResolve, onReject) {
		if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
		return originalPush.call(this, location).catch(err => {err})
	}
	
	Vue.use(router)
	Vue.use(Vuex)
	Vue.mixin({ store: store });
	if(!isServer){
		router.beforeEach((from,to,next) => {
			window.scrollTo(0,0);
			next()
		})
		await import("./public/iconfont/iconfont").then(module => {
		})
		await import('vue-awesome-swiper').then( module => {
			Vue.use(module.default)
		}).catch(e => {
			console.log(e,'vue-awesome-swiper error')
		})
		await import('element-ui').then(module => {
			Vue.use(module.default)
		}).catch(e => {
			console.log(e,'element-ui error ')
		})
		await import('vue-line-clamp').then(module => {
			Vue.use(module)
		}).catch(e => {
			console.log(e,'vue-line-clamp error')
		})
		await import('overlayscrollbars-vue').then(module => {
			Vue.use(module.OverlayScrollbarsPlugin)
		}).catch(e => {
			console.log(e,'overlayscrollbars-vue error')
		})
	}
}
