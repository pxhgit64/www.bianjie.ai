module.exports = {
	title:'',
	description:'bienjie websit',
	base:'/',
	head:[
		[ 'link',{ rel:'icon', href:'/favicon.ico'}]
	],
	locales:{
	
	},
	themeConfig: {
		logo:'/logo.png',
		search: false,
		locales:{
			'/':{
				selectText: '选择语言',
				nav:[
					{text:'首页',link:'/'},
					{text:'产品服务',link:'/a'},
					{text:'应用场景',link:'/b'},
					{text:'合作伙伴',link:'/c'},
					{text:'动态资讯',link:'/d'},
					{text:'关于我们',link:'/e'},
				]
			}
		}
	},
}
