<template>
	<div class="swiper_product_container">
		<div class="swiper_product_content_wrap">
			<div class="swiper_product_title_content">
				<h1 class="swiper_product_title">{{title}}</h1>
			</div>
			<div class="swiper_content" id="product_swiper_content">
				<swiper ref="productSwiper" :options="productionSwiperOption" class="swiper_wrap">
					<swiper-slide
							v-for="(item,index) in formatProductList"
							:key="index">
						<product_swiper_component :product-data="item"></product_swiper_component>
					</swiper-slide>
				</swiper>
				<div class="swiper-button-prev product_swiper_prev_button"></div>
				<div class="swiper-button-next product_swiper_next_button"></div>
				<div class="product_tab_content">
					<div class="product_tab_content_wrap">
						<div class="product_tab_item_content"
						     v-for="(value,index) in footMenuList"
						     :class="swiperObj.realIndex === index ? 'swiper_active' : ''"
						     :key="index"
						     @click="changeSwiperActive(index)">
							<span >{{value}}</span>
						</div>
					</div>
					
				</div>
			</div>
			<div class="swiper_github_link_content"></div>
		</div>
	</div>
</template>

<script>
	import Product_swiper_component from "./ProductSwiperComponent";
	export default {
		name: "swiper-product",
		components: {
			Product_swiper_component,
		},
		data () {
			return {
				swiperActiveIndex: 0,
				swiperObj : {},
				productionSwiperOption: {
					// 分页器配置
					pagination: {
						clickable: true,
						progressbarOpposite: true,
					},
					mousewheel: true,
					// 设定初始化时slide的索引
					initialSlide: 0,
					//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
					direction: 'horizontal',
					// 自动切换图配置
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: true
					},
					
					// 箭头配置
					navigation: {
						nextEl: '#product_swiper_content .swiper-button-next',
						prevEl: '#product_swiper_content .swiper-button-prev',
					},
					// 环状轮播
					loop: true,
					slidesPerView: 'auto',
					loopedSlides: 3,
					loopAdditionalSlides: 0,
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.productSwiper.swiper;
			},
			title(){
				return this.$page.frontmatter.productContent.title
			},
			formatProductList(){
				return this.$page.frontmatter.productContent.productList
			},
			footMenuList(){
				return this.$page.frontmatter.productContent.footMenuList
			}
		},
		mounted(){
			this.swiperObj = this.swiper
		},
		methods:{
			changeSwiperActive(index){
				this.swiper.slideToLoop(index, 1000, false);
			}
		}
	}
</script>

<style scoped lang="stylus">
.swiper_product_container{
	width 100%
	height 100%
	background url("../../public/swiper_product_bg.png") no-repeat center center
	background-size cover
	.swiper_product_content_wrap{
		max-width 93.4rem
		padding-top 8rem
		margin  0 auto
		.swiper_product_title_content{
			margin-top 8rem
			.swiper_product_title{
				text-align center
				color $fontColor
				font-size $fontSize30
				font-weight $fontWeight600
				letter-spacing 0.5rem
			}
		}
		.swiper_content{
			margin-top 6.8rem
			position relative
			.product_swiper_prev_button{
				background url("../../public/arrow_left.png")
				background-size 100% 100%
				outline none
				-webkit-tap-highlight-color transparent
				left -4.5rem
			}
			.product_swiper_next_button{
				background url("../../public/arrow_right.png")
				background-size 100% 100%
				outline none
				-webkit-tap-highlight-color transparent
				right -4.5rem
			}
			.product_tab_content{
				box-sizing border-box
				color #3c763d
				padding-top 0.9rem
				background $whiteColor
				.product_tab_content_wrap{
					height 6.8rem
					margin 0 2.4rem
					border-top 0.1rem solid $grayColor
					display flex
					justify-content space-between
					align-items center
					box-sizing border-box
					padding 0 5rem
					.product_tab_item_content{
						display flex
						justify-content center
						margin-left 1px
						border-radius 0.4rem
						cursor pointer
						span{
							font-size $fontSize20
							color $iconColor
							padding 1rem 3.2rem
						}
					}
					.swiper_active{
						background $navigationBgColor1
					}
				}
				
				
			}
		}
	}
}
</style>
