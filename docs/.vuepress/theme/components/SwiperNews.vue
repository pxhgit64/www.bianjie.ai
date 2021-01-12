<template>
	<div class="swiper_news_container">
		<div class="swiper_news_content_wrap">
			<h1 class="swiper_news_content_title">{{title}}</h1>
			<div class="swiper_news_list_content">
				<news_item_component v-for="(item,index) in currentPageData" :news-item="item"></news_item_component>
			</div>
			<div class="pagination">
				<el-pagination
					background
					layout="prev,pager,next"
					:total="total"
					:pager-count="5"
					:page-size="pageSize"
					:current-page="pageNum"
					@current-change="changeCurrentPage"
				></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import News_item_component from "./NewsItemComponent";
	import {newsPageSize} from "../constant";
	export default {
		name: "swiper-news",
		components: {News_item_component},
		data(){
			return {
				newsListData: [],
				currentPageData: [],
				changeData : [],
				pageSize: newsPageSize,
				pageNum:1,
				total: 0,
				innerWidth: 0
			}
		},
		created(){
			this.total = this.$page.frontmatter.newsContent.list.length
			this.newsListData  = this.pageNation(this.$page.frontmatter.newsContent.list)
			this.changeData = this.$page.frontmatter.newsContent.list
			this.currentPageData = this.newsListData[this.pageNum - 1]
		},
		watch:{
			innerWidth(innerWidth){
				let changeStyleNodeWidth = 768
				if(innerWidth < changeStyleNodeWidth){
					this.pageSize = 2
					this.newsListData = this.pageNation(this.changeData)
					this.currentPageData = this.newsListData[this.pageNum - 1]
				}else {
					this.pageSize = 6
					this.newsListData = this.pageNation(this.changeData)
					this.currentPageData = this.newsListData[this.pageNum - 1]
				}
			}
		},
		mounted(){
			this.innerWidth = window.innerWidth
			window.onresize = (e) => {
				this.innerWidth = e.currentTarget.innerWidth
			}
		},
		methods:{
			changeCurrentPage(currentPage){
				this.pageNum = currentPage
				this.currentPageData =  this.newsListData[currentPage - 1]
			},
			pageNation(array){
				let index = 0;
				let newArray  = [];
				if(array.length > this.pageSize){
					while(index < array.length) {
						newArray.push(array.slice(index, index += this.pageSize));
					}
				}else {
					newArray = array
				}
				return newArray
			},
		},
		computed:{
			title () {
				return this.$page.frontmatter.newsContent.title
			},
		}
	}
</script>

<style scoped lang="stylus">
	.swiper_news_container{
		width 100%
		height 100%
		background url("../../public/swiper_product_bg.png") no-repeat center center
		background-size cover
		margin-top 6rem
		.swiper_news_content_wrap{
			max-width 103.6rem
			margin 0 auto
			padding-top 6rem
			.swiper_news_content_title{
				text-align center
				font-size $fontSize30
				color $fontColor
				font-weight $fontWeight600
				letter-spacing 0.5rem
			}
			.swiper_news_list_content{
				display grid
				grid-template-rows repeat(3 auto)
				grid-template-columns 50% 50%
				grid-row-gap 2.4rem
				grid-column-gap 3.6rem
				margin-top 5.4rem
			}
			.pagination{
				display flex
				justify-content flex-end
				margin-top 2.4rem
			}
		}
		
	}
@media(max-width: 1200px){
	.swiper_news_container{
		.swiper_news_content_wrap{
			.swiper_news_list_content{
				margin-left: 2rem
				margin-right: 2rem
				justify-items center
				box-sizing border-box
				grid-template-columns 1fr 1fr
				grid-row-gap 1.6rem
				grid-column-gap 0.8rem
			}
		}
	}
}
	@media (max-width: 768px){
		.swiper_news_container{
			.swiper_news_content_wrap{
				padding-top 3.2rem
				.swiper_news_content_title{
					font-size $fontSize20
					letter-spacing 0.1rem
					font-weight $fontWeight600
				}
				.swiper_news_list_content{
					grid-template-columns 100%
					margin-top 2rem
				}
			}
		}
	}
</style>
