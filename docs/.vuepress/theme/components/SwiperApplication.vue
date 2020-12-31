<template>
	<div class="swiper_application_container">
		<div class="swiper_application_content_wrap">
			<div class="swiper_application_scenarios_content">
				<h1 class="swiper_application_scenarios_title">{{scenariosTitle}}</h1>
				<div class="swiper_application_scenarios_list_item"
				     v-for="(item,index) in secenariosList "
				     :key="index">
					<p class="item_title_content">
						<span class="item_icon_content">
							<icon-component :icon-name="item.iconName"></icon-component>
						</span>
						<span class="item_title">{{item.title}}</span>
					</p>
					<p class="item_content">{{item.content}}</p>
				</div>
			</div>
			<div class="swiper_solution_content"></div>
		</div>
	</div>
</template>
<script>
	import IconComponent from "./SvgIconComponent";
	export default {
		name: "swiper-application",
		components: {IconComponent},
		data () {
			return {
			
			}
		},
		computed:{
			scenariosTitle(){
				return this.$page.frontmatter.applicationContent.scenarios.title
			},
			secenariosList(){
				return this.$page.frontmatter.applicationContent.scenarios.list
			}
		}
	}
</script>

<style scoped lang="stylus">
.swiper_application_container{
	background $whiteColor
	width 100%
	height 100%
	.swiper_application_content_wrap{
		max-width 120rem
		margin 0 auto
		display grid
		grid-template-columns 66% 44%
		padding-top 8rem
		.swiper_application_scenarios_content{
			color $navigationImgBgColor
			.swiper_application_scenarios_title{
				font-size $fontSize30
				font-weight $fontWeight600
				letter-spacing 0.5rem
				text-align center
				color $fontColor
				max-width 52.8rem
			}
			.swiper_application_scenarios_list_item{
				margin-top 6.8rem
				.item_title_content{
					display flex
					align-items center
					.item_icon_content{
						display inline-block
						width 3.6rem
						height 3.6rem
					}
					.item_title{
						margin-left 1.2rem
						font-size $fontSize20
						font-weight $fontWeight600
					}
				}
				.item_content{
					max-width 52.8rem
					font-size $fontSize16
					line-height 2.4rem
				}
			}
		}
	}
}
</style>
