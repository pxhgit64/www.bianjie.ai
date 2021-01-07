<template>
	<div id="certify">
		<ClientOnly>
			<swiper ref="mySwiper" :options="swiperOption" class="my_swiper" >
				<swiper-slide>
					<swiper-home></swiper-home>
				</swiper-slide>
				<swiper-slide>
					<swiper-advantage></swiper-advantage>
				</swiper-slide>
				<swiper-slide>
					<swiper-product></swiper-product>
				</swiper-slide>
				<swiper-slide>
					<swiper-application></swiper-application>
				</swiper-slide>
				<swiper-slide>
					<swiper-news></swiper-news>
				</swiper-slide>
				<swiper-slide>
					<swiper-partners></swiper-partners>
				</swiper-slide>
				<swiper-slide>
					<swiper-contact></swiper-contact>
				</swiper-slide>
			</swiper>
		</ClientOnly>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.min.css'
	import SwiperHome from "./SwiperHome";
	import SwiperAdvantage from "./SwiperAdvantage";
	import SwiperProduct from "./SwiperProduct";
	import SwiperApplication from "./SwiperApplication";
	import SwiperContact from "./SwiperContact";
	import SwiperPartners from "./SwiperPartner";
	import SwiperNews from "./SwiperNews";
	export default {
		name: "new_home",
		components: {
			SwiperPartners,
			SwiperContact,
			SwiperApplication,
			SwiperProduct,
			SwiperAdvantage,
			SwiperHome,
			SwiperNews,
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
					observeParents: true,
					// 箭头配置
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			},
			swiperIndex(){
				return this.$store.state.swiperIndex;
			}
		},
		watch:{
			'swiperObj.activeIndex'(currentIndex){
				this.swiper.allowSlidePrev = true
				this.swiper.allowSlideNext = true
				if(currentIndex === 0){
					this.swiper.allowSlidePrev = false
				}
				if(currentIndex === 6) {
					this.$store.commit('swiperIndex',currentIndex +1)
					this.swiper.allowSlideNext = false
				}
			},
			swiperIndex(newValue,oldValue){
				this.swiper.slideTo(newValue -1, 1000, false);
			},
		},
		mounted() {
			setTimeout(() => {
				this.swiper.slideTo( this.$store.state.swiperIndex ? this.$store.state.swiperIndex -1 : 0, 1000, false);
				this.swiperObj = this.swiper
			},)
	
		}
	}
</script>

<style scoped lang="stylus">
	#certify {
		width 100%
		height 100%
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
				background $buttonColor
			}
		}
	}

</style>
