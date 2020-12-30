
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
			console.log()
		})
	}
}
