<template>
	<div id="certify">
		<swiper ref="mySwiper" :options="swiperOption" >
			<swiper-slide>
				<swiper-home></swiper-home>
			</swiper-slide>
			<swiper-slide>
				<swiper-advantage></swiper-advantage>
			</swiper-slide>
			<swiper-slide><div style="text-align:center;width:100%;height: 100%;color: red">Slide 3</div></swiper-slide>
			<swiper-slide><div style="text-align:center;width:100%;height: 100%;color: red">Slide 4</div></swiper-slide>
			<swiper-slide><div style="text-align:center;width:100%;height: 100%;color: red">Slide 5</div></swiper-slide>
			<swiper-slide><div style="text-align:center;width:100%;height: 100%;color: red">Slide 6</div></swiper-slide>
			<swiper-slide><div style="text-align:center;width:100%;height: 100%;color: red">Slide 7</div></swiper-slide>
		</swiper>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.min.css'
	import store from "../../vuex";
	import SwiperHome from "./SwiperHome";
	import SwiperAdvantage from "./SwiperAdvantage";
	export default {
		name: "new_home",
		components: {
			SwiperAdvantage,
			SwiperHome,
			swiper,
			swiperSlide
		},
		data () {
			return {
				swiperObj: {},
				swiperOption: {
					// 分页器配置
					pagination: {
						el: '.swiper-pagination',
						clickable: false,
						progressbarOpposite: true,
					},
					mousewheel: true,
					
					// 设定初始化时slide的索引
					initialSlide: 0,
					//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
					direction: 'vertical',
					// 自动切换图配置
					/*autoplay: {
						delay: 5000,
						stopOnLastSlide: false,
						disableOnInteraction: true
					},*/
					
					// 箭头配置
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					// 环状轮播
					loop: false,
					slidesPerView: 'auto',
					loopedSlides: 3,
					loopAdditionalSlides: 0,
					// 一个屏幕展示的数量
					// 间距
					// spaceBetween: 26,
					// 修改swiper自己或子元素时，自动初始化swiper
					observer: true,
					// 修改swiper的父元素时，自动初始化swiper
					observeParents: true
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			},
			swiperIndex(){
				return store.state.swiperIndex;
			}
		},
		watch:{
			'swiperObj.activeIndex':function(currentIndex){
				if(currentIndex === 0){
					this.swiper.allowSlidePrev = false
				}else {
					this.swiper.allowSlidePrev = true
				}
			},
			swiperIndex:function(newValue,oldValue){
				
				this.swiper.slideTo(newValue -1, 1000, false);
			}
		},
		mounted() {
			/*let swiper = document.getElementsByClassName('mySwiper')[0];
			if (swiper) {
				swiper.style.alignItems = 'center';
			}*/
			
			this.swiper.slideTo(store.state.swiperIndex -1, 1000, false);
			// current swiper instance
			this.swiperObj = this.swiper
			// this.swiper.slideTo(3, 1000, false);
		}
	}
</script>

<style scoped lang="stylus">
	#certify {
		width 100%
		top 6rem
		height calc(100% - 6rem)
		/deep/.swiper-container {
			height  100%
		}
		position relative
		z-index 0
		.swiper-pagination{
			position absolute
			right 2rem
			top 50%
			transform translate3D(0px,-50%,0)
			display flex
			flex-direction column
			/deep/.swiper-pagination-bullet {
				margin 0.2rem 0
				display block
				background $whiteColor
			}
		}
	}

</style>
