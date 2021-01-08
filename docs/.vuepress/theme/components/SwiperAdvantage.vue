<template>
	<div class="swiper_advantage_container">
		<div class="swiper_advantage_content_wrap">
			<div class="swiper_advantage_title_content">
				<h1 class="swiper_advantage_title">{{title}}</h1>
			</div>
			<div class="swiper_advantage_list_content">
				<div class="swiper_advantage_list_item_card"
				     v-for="(item,index) in advantageList"
				     :key="index">
						<div class="swiper_advantage_list_item_img_content">
							<IconComponent :icon-name="item.iconName"></IconComponent>
						</div>
						<p class="swiper_advantage_list_item_description">{{item.description}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import IconComponent from "./SvgIconComponent";
	export default {
		name: "swiper-advantage",
		components: {IconComponent},
		data(){
			return {
			
			}
		},
		computed:{
			title(){
				return this.$page.frontmatter.advantageContent.title
			},
			advantageList(){
				return this.$page.frontmatter.advantageContent.advantageList
			}
		}
	}
</script>

<style scoped lang="stylus">
	.swiper_advantage_container{
		background url("../../public/swiper_advantage_bg.png") no-repeat center center
		background-size cover
		width 100%
		height 100%
		.swiper_advantage_content_wrap{
			max-width 120rem
			margin 0 auto
			.swiper_advantage_title_content{
				padding-top 14.8rem
				.swiper_advantage_title{
					text-align center
					font-size $fontSize30
					color $fontColor
					letter-spacing 0.5rem
				}
			}
			.swiper_advantage_list_content{
				max-width 86.8rem
				margin 6rem  auto 0 auto
				display grid
				grid-template-columns repeat(2, 50%);
				grid-row-gap: 4.7rem
				grid-column-gap: 8rem
				align-items center
				justify-content center
				height 34.3rem
				.swiper_advantage_list_item_card{
					box-sizing border-box
					padding 2.4rem 3.6rem
					display grid
					grid-template-columns  27% 21.5rem
					grid-column-gap: 2rem
					border 0.01rem solid $grayColor
					border-radius 0.4rem !important
					background $whiteColor
					.swiper_advantage_list_item_img_content{
						width 8.7rem
						height 10rem
					}
					.swiper_advantage_list_item_description{
						font-size $fontSize20
						color $iconColor
						font-weight $fontWeight600
						letter-spacing 0.1rem
					}
				}
			}
		}
	}
</style>
