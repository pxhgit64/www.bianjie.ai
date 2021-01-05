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
		navbar: true,
		locales:{
			'/':{
				selectText: '选择语言',
				// 由于首页是轮播展示，故添加index
				nav:[
					{text:'首页',link:'/',index:1},
					{text:'优势',link:'/advantage',index:2},
					{text:'产品',link:'/product',index:3,items:[
						{text:'IRITA',link:'/aboutus'},
						{text:'BSN-IRITA HUB',link:'/iritahub'},
						{text:'IRISnet',link:'/irisnet'},
					]},
					{text:'应用',link:'/app',index:4,items:[
							{text:'供应链金融',link:'/irita'},
							{text:'金融监管',link:'/iritahub'},
							{text:'医疗电子处方管理',link:'/irisnet2'},
							{text:'传染病预警和监控',link:'/irisnet3'},
							{text:'加密货币反洗钱',link:'/irisnet4'},
						]},
					{text:'资讯',link:'/news',index:5},
					{text:'伙伴',link:'/partner',index:6},
					{text:'联系',link:'/contact',index:7},
					{text:'关于',link:'/a'},
					{text:'开发者',link:'/developer',isRight: true},
					{text:'资源下载',link:'/download',isRight: true},
				]
			}
		}
	}
}
