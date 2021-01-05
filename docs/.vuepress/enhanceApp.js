import 'element-ui/lib/theme-chalk/index.css'
export default async ({
	Vue,
	options,
	router,
	siteData,
	isServer,
}) => {
	Vue.use(router)
	if(!isServer){
		import('vuex').then(module => {
			Vue.use(module)
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
