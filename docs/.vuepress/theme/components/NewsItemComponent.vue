<template>
	<div class="news_item_component_content">
		<a class="news_item_content_wrap" :href="newsItem.link" target="_blank" rel="noreferrer noopener">
			<div class="news_item_content">
				<div class="news_item_img_content">
					<img v-show="newsItem.imageName" :src="$withBase(`/news/${newsItem.imageName}`)"  alt="">
				</div>
				<div class="news_container">
					<h2 class="news_title">{{newsItem.title}}</h2>
					<p v-line-clamp:20="3" class="news_content">{{newsItem.content}}</p>
					<p class="news_date">{{newsItem.date}}</p>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: "news_item_component",
		props:{
			newsItem:{
				type:Object
			}
		},
	}
</script>

<style scoped lang="stylus">
	.news_item_component_content{
		.news_item_content_wrap{
			background $whiteColor
			display inline-block
			box-sizing border-box
			padding 2.4rem 1.9rem 2.4rem 2.4rem
			border 0.1rem solid $grayColor
			border-radius 0.4rem
			.news_item_content{
				display grid
				grid-template-rows 100%
				grid-template-columns 11.2rem auto
				.news_item_img_content{
					height 11.2rem
					box-sizing border-box
					display flex
					justify-content center
					align-items center
					img{
						width 100%
					}
				}
			}
			.news_container{
				width 100%
				margin-left 1.9rem
				.news_title{
					margin-top 0
					padding-bottom 0
					width 32rem
					font-size $fontSize16
					font-weight $fontWeight600
					color $navigationImgBgColor
					height 2rem
					border-bottom none
					overflow hidden
					text-overflow ellipsis
					white-space nowrap
				}
				.news_content{
					width 32rem
					font-size $fontSize14
					margin-top 1.2rem
					line-height 2rem
				}
				.news_date{
					font-size $fontSize14
					color $grayColor
					margin-top 0.3rem
				}
			}
		}
	}
	@media (max-width: 1200px){
		.news_item_component_content{
			.news_item_content_wrap{
				padding 2rem
				.news_item_content{
					grid-template-columns 100%
					.news_item_img_content{
						display none
					}
					.news_container{
						margin-left 0
					}
				}
			}
		}
	}
	@media (max-width: 768px){
		.news_item_component_content{
			.news_item_content_wrap{
				padding 1.6rem
			}
		}
	}
	@media (max-width: 375px){
		.news_item_component_content{
			.news_item_content_wrap{
				.news_item_content{
					.news_container{
						.news_title{
							width 24.8rem
						}
						.news_content{
							width 24.8rem
						}
					}
				}
			}
		}
	}
</style>
