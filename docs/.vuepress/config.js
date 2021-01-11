module.exports = {
	title:'边界智能-BIANJIE.AI',
	description:'上海边界智能专注于区块链、大数据相关产品技术研发、应用平台建设和解决方案咨询的高科技公司和国家高新技术企业。以区块链跨链、隐私计算及大数据分析技术创新为核心，自主研发了安全可控、符合国密标准、支持下一代分布式商业系统构建的企业联盟链 IRITA产品系列。',
	base:'/',
	head:[
		[ 'link',{ rel:'icon', href:'/favicon.ico'} ],
		[ 'meta',{name:'keywords',content:'BIANJIE,BIANJIE.AI,bianjie.ai,bianjie,上海边界智能,区块链技术服务,供应链金融,金融监管,医疗电子处方管理,传染病预警和监控,加密货币反洗钱,数字化凭证,隐私计算和保护,跨链可信数据交互,IRITA,IRITA HUB,IRITA OPB,IRISnet,COSMOS,Tendermint'} ],
		[ 'meta',{name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
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
					{text:'IRITA HUB',link:'/products/iritahub'},
					{text:'IRITA OPB',link:'/products/iritaopb'},
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
