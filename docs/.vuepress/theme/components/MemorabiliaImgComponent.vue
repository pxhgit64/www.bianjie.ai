<template>
	<div class="memorabilia_swiper_content" id="memorabilia_swiper_img">
		<swiper ref="memorabiliaSwiper" :options="memorabiliaImgOption" class="swiper_wrap">
			<swiper-slide class="slide" v-for="item in memorabiliaImageList">
				<div class="memorabilia_swiper_img">
					<img :src="$withBase(`/honorImage/${item}`)" alt="">
				</div>
			</swiper-slide >
		</swiper>
	</div>
</template>

<script>
	let effect = 0
	export default {
		name: "memorabilia_img_component",
		props:{
			memorabiliaImageList:{
				type:Array
			}
		},
		data() {
			return {
				memorabiliaImgOption:{
					// 分页器配置
					pagination: {
						el: '.swiper-pagination',
						clickable: false,
						progressbarOpposite: true,
					},
					mousewheel: true,
					//开启计算
					watchSlidesProgress : true,
					centeredSlides:true,
					// 设定初始化时slide的索引
					initialSlide: 0,
					//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
					direction: 'horizontal',
					// 自动切换图配置
					/*autoplay: {
						delay: 5000,
						stopOnLastSlide: false,
						disableOnInteraction: true
					},*/
					// 环状轮播
					loop: true,
					slidesPerView: 'auto',
					// loopedSlides: 3,
					// loopAdditionalSlides: 0,
					// 一个屏幕展示的数量
					// 间距
					// spaceBetween: 26,
					// 修改swiper自己或子元素时，自动初始化swiper
					observer: true,
					// 修改swiper的父元素时，自动初始化swiper
					observeParents: true,
					// 设定初始化时slide的索引
					// 自动切换图配置
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: true
					},
				},
				mobileMemorabiliaImgOption:{
					watchSlidesProgress: true,
					slidesPerView: "auto",
					centeredSlides: true,
					loop: true,
					speed: 300,
					autoplay: true,
					on:{
						setTransition: function(transition) {
							for (var i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								slide.transition(transition);
							}
							
						}
					}
				},
				swiperObj:null,
			}
		},
		mounted(){
			this.swiperObj = this.swiper
		},
		computed: {
			swiper() {
				return this.$refs.memorabiliaSwiper.swiper;
			},
		}
	}
</script>

<style scoped lang="stylus">
	.memorabilia_swiper_content{
		width 100%
		height 54rem
		overflow hidden
		/deep/.swiper-container {
			width 100%
			height 100%
		}
		.swiper_wrap{
			color $fontColor
			.slide{
				display flex
				align-items center
				justify-content center
				.memorabilia_swiper_img{
					width 100%
					display flex
					justify-content center
					img{
						width  100%
					}
				}
			}
			
		}
	}
	@media (max-width: 1150px){
		.memorabilia_swiper_content{
			height 32rem
			margin-top 3.6rem
			.swiper_wrap{
				.slide{
					width  auto
					.memorabilia_swiper_img{
						width  auto
						height 32rem
						margin 0 2rem
						img{
							display block
							height  100%
							width auto
						}
					}
				}
			}
		}
	}
</style>
