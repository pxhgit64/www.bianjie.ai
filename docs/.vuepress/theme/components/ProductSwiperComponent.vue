<template>
	<div class="product_swiper_content">
		<div class="product_swiper_content_wrap">
			<div class="product_swiper_left_content">
				<h1 class="product_swiper_card_title">{{productData.title}}</h1>
				<div class="product_content">{{productData.content}}</div>
				<router-link class="product_detail_link" :to="`${productData.moreLink}`">{{productData.more}}</router-link>
			</div>
			<div class="product_swiper_right_content">
				<div class="product_icon_content">
					<icon-component :iconName="productData.iconName"></icon-component>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import IconComponent from "./SvgIconComponent";
	export default {
		name: "product_swiper_component",
		components: {IconComponent},
		data () {
			return {
			
			}
		},
		props:{
			productData:{
				type: Object
			}
		}
	}
</script>

<style scoped lang="stylus">
	.product_swiper_content{
		height 40rem
		background $whiteColor
		margin 0 auto
		.product_swiper_content_wrap{
			box-sizing border-box
			padding 6rem 8rem 0 8rem
			display grid
			grid-template-columns 40rem auto
			grid-template-rows repeat(1, 100%)
			color $iconColor
			.product_swiper_left_content{
				.product_swiper_card_title{
					font-size $fontSize24
				}
				.product_content{
					margin-top 3.2rem
					line-height 4rem
					font-size $fontSize20
					height 20rem
				}
				.product_detail_link{
					display inline-block
					margin-top 2rem
					color $iconColor
					font-size $fontSize20
				}
			}
			.product_swiper_right_content{
				display flex
				align-items center
				justify-content center
				.product_icon_content{
					max-width 31.8rem
					height 100%
				}
			}
		}
	}
</style>
