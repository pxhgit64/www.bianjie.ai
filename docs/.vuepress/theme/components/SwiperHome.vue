<template>
	<div class="swiper_home_container">
		<div class="swiper_home_content_wrap">
			<div class="swiper_home_left_content">
				<div>
					<h1 class="swiper_home_left_title" v-for="item in frontmatter('homeContent').title">{{item}}</h1>
					<p class="swiper_home_subtitle">{{frontmatter('homeContent').subTitle}}</p>
				</div>
		
				<!--<p class="swiper_description" v-for="value in frontmatter('homeContent').description">{{value}}</p>
				<div class="about_us">{{frontmatter('homeContent').aboutUs}}</div>-->
			</div>
			<div class="swiper_home_right_content">
				<img :src="$withBase('/swiper_home_right.png')" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "swiper-home",
		data(){
			return {
			}
		},
		computed:{
			frontmatter(){
				return function (title) {
					return this.$page.frontmatter[title]
				}
			}
		},
	}
</script>

<style scoped lang="stylus">
	.swiper_home_container{
		margin-top 0
		width 100%
		height 100%
		background url("../../public/swiper_home.png") no-repeat center center;
		background-size cover
		z-index 3
		position relative
		.swiper_home_content_wrap{
			display flex
			align-items center
			box-sizing border-box
			height 100%
			max-width 120rem
			margin 0 auto
			.swiper_home_left_content{
				flex 1
				height 100%
				background url("../../public/swiper_home_left.png") no-repeat top left
				background-position-y 50%
				background-size 100%
				display flex
				align-items center
				.swiper_home_left_title{
					font-size $fontSize72
					margin-left 10.4rem
					font-weight initial
					&:nth-last-of-type({1}){
						margin-top 0rem
					}
				}
				
				.swiper_home_subtitle{
					margin-top 5rem
					margin-left 10.4rem
					font-size $fontSize24
					letter-spacing 0.1rem
				}
				.swiper_description{
					margin-top 2.4rem
					margin-left 10.4rem
					font-size $fontSize16
					margin-bottom 0
					letter-spacing 0.4rem
					&:nth-last-of-type({1}){
						margin-top 1.2rem
					}
				}
				.about_us{
					margin-top 3.2rem
					margin-left 10.4rem
					letter-spacing 0.12rem
				}
			}
			.swiper_home_right_content{
				flex 1
				display flex
				align-items center
				justify-content flex-end
				img{
					width 100%
					max-width 65.4rem
				}
			}
		}
	}
	@media(max-width: 950px){
		.swiper_home_container{
			.swiper_home_content_wrap{
				flex-direction column
				margin-top 6rem
				.swiper_home_left_content{
					div{
						.swiper_home_left_title{
							margin-left 0
							text-align center
						}
						.swiper_home_subtitle{
							margin-left 0
							text-align center
						}
					}
				}
				.swiper_home_right_content{
					max-width 38.6rem
				}
			}
		}
	}
</style>
