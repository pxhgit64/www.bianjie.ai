<template>
	<div class="swiper_application_container">
		<div class="swiper_application_content_wrap">
			<div class="swiper_application_scenarios_content">
				<h1 class="swiper_application_scenarios_title">{{scenariosTitle}}</h1>
				<div class="swiper_application_scenarios_list_item"
				     v-for="(item,index) in scenariosList"
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
			<div class="swiper_solution_content">
				<h1 class="swiper_application_solution_title">{{scenariosData.title}}</h1>
				<div class="swiper_application_solution_list_content"
				     v-for="(item,index) in scenariosData.list"
				     :key="index">
					<div class="list_icon_content">
						<icon-component :icon-name="item.iconName"></icon-component>
					</div>
					<div class="list_arrow_content">
						<span class="item_content">{{item.content}}</span>
						<span class="iconfont iconjiantou"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import '../../public/iconfont/iconfont.css'
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
			scenariosList(){
				return this.$page.frontmatter.applicationContent.scenarios.list
			},
			scenariosData(){
				return this.$page.frontmatter.applicationContent.solution
			}
		}
	}
</script>

<style scoped lang="stylus">

.swiper_application_container{
	background url("../../public/swiper_advantage_bg.png") no-repeat center center
	background-size cover
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
					margin-top 0.4rem
					max-width 52.8rem
					font-size $fontSize16
					line-height 2.4rem
				}
			}
		}
		
		.swiper_solution_content{
			.swiper_application_solution_title{
				color $fontColor
				font-size $fontSize30
				letter-spacing 0.5rem
				line-height 2.8rem
			}
			.swiper_application_solution_list_content{
				display flex
				align-items center
				margin-bottom 2.1rem
				.list_icon_content{
					width 12rem
					height 10.6rem
					margin-top 2.1rem
					box-sizing border-box
					padding 2.6rem
				}
				.list_icon_content:first-child{
					margin-top 0
				}
				.list_arrow_content{
					position relative
					left -1.8rem
					box-sizing border-box
					font-size $fontSize20
					background $whiteColor
					font-weight $fontWeight600
					border-width  0.2rem
					border-style solid
					border-radius 0.4rem
					width 26.6rem
					.item_content{
						display inline-block
						padding 1.4rem 7.5rem 1.4rem 1.8rem
						letter-spacing 0.4rem
						line-height 2rem
					}
				}
			}
			.swiper_application_solution_list_content:nth-of-type(1){
				margin-top 7.5rem
				.list_icon_content{
					background $iconColor
				}
				.list_arrow_content{
					border-color $iconColor
					.item_content{
						color $iconColor
					}
					.iconjiantou{
						color $iconColor
						font-size $fontSize20
						position absolute
						right 2rem
						top 1.2rem
					}
				}
			}
			.swiper_application_solution_list_content:nth-of-type(2){
				.list_icon_content{
					background $buttonColor
				}
				.list_arrow_content{
					border-color $buttonColor
					.item_content{
						color $buttonColor
					}
					.iconjiantou{
						color $buttonColor
						font-size $fontSize20
						position absolute
						right 2rem
						top 1.2rem
					}
				}
			}
			.swiper_application_solution_list_content:nth-of-type(3){
				.list_icon_content{
					background $grayColor
				}
				.list_arrow_content{
					border-color $grayColor
					.item_content{
						color $grayColor
					}
					.iconjiantou{
						color $grayColor
						font-size $fontSize20
						position absolute
						right 2rem
						top 1.2rem
					}
				}
			}
			.swiper_application_solution_list_content:nth-of-type(4){
				.list_icon_content{
					background $yellowColor
				}
				.list_arrow_content{
					border-color $yellowColor
					.item_content{
						color $yellowColor
					}
					.iconjiantou{
						color $yellowColor
						font-size $fontSize20
						position absolute
						right 2rem
						top 1.2rem
					}
					
				}
			}
		}
	}
}
</style>
