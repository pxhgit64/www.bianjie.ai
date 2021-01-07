module.exports = {
	title:'边界智能-BIANJIE.AI',
	description:'bienjie websit',
	base:'/',
	head:[
		[ 'link',{ rel:'icon', href:'/favicon.ico'} ],
		[ 'meta',{name:'keywords',content:'Bianjie,边界,边界智能,IRITA'} ]
	],
	themeConfig: {
		logo:'/logo.png',
		search: false,
		navbar: false,
		nav:[
			{text:'首页',link:'/',index:1},
			{text:'优势',link:'/advantage',index:2},
			{text:'产品',link:'/product',index:3,items:[
					{text:'IRITA',link:'/products/irita'},
					{text:'BSN-IRITA HUB',link:'/products/iritahub'},
					{text:'IRISnet',link:'/irisnet'},
				]},
			{text:'应用',link:'/app',index:4,items:[
					{text:'供应链金融',link:'/application/supply'},
					{text:'金融监管',link:'/application/finance'},
					{text:'医疗电子处方管理',link:'/application/medical'},
					{text:'传染病预警和监控',link:'/application/infectious'},
					{text:'加密货币反洗钱',link:'/application/cryptocurrency'},
				]},
			{text:'资讯',link:'/news',index:5},
			{text:'伙伴',link:'/partner',index:6},
			{text:'联系',link:'/contact',index:7},
			{text:'关于',link:'/about'},
			{text:'开发者',link:'/developer',isRight: true},
			{text:'资源下载',link:'/download',isRight: true},
		],
		locales:{
			'/':{
				// 由于首页是轮播展示，故添加index
				
			}
		}
	}
}
