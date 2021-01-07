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
				pageSize: newsPageSize,
				pageNum:1,
				total: 0
			}
		},
		created(){
			this.total = this.$page.frontmatter.newsContent.list.length
			this.newsListData  = this.pageNation(this.$page.frontmatter.newsContent.list)
			this.currentPageData = this.newsListData[this.pageNum - 1]
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
			newsList() {
				
				return
			}
		}
	}
</script>

<style scoped lang="stylus">
	.swiper_news_container{
		width 100%
		height 100%
		background url("../../public/swiper_product_bg.png") no-repeat center center
		background-size cover
		.swiper_news_content_wrap{
			max-width 103.6rem
			margin 0 auto
			padding-top 8rem
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
				margin-top 6.8rem
			}
			.pagination{
				display flex
				justify-content flex-end
				margin-top 2.4rem
			}
		}
		
	}

</style>
