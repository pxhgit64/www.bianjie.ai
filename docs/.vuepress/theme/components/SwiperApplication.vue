<template>
	<div class="swiper_application_container">
		<div class="swiper_application_content_wrap" id="application_swiper_container">
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
					<div class="list_arrow_content" @click="toApplication(item.link)">
						<span class="item_content">{{item.content}}</span>
						<span class="iconfont iconjiantou"></span>
					</div>
				</div>
			</div>
			<swiper id="application_swiper_content"
			        :options="applicationSwiperOption">
				<swiper-slide>
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
				</swiper-slide>
				<swiper-slide>
					<div class="swiper_solution_content">
						<h1 class="swiper_application_solution_title">{{scenariosData.title}}</h1>
						<div class="swiper_application_solution_list_content"
						     v-for="(item,index) in scenariosData.list"
						     :key="index">
							<div class="list_icon_content">
								<icon-component :icon-name="item.iconName"></icon-component>
							</div>
							<div class="list_arrow_content" @click="toApplication(item.link)">
								<span class="item_content">{{item.content}}</span>
								<span class="iconfont iconjiantou"></span>
							</div>
						</div>
					</div>
				</swiper-slide>
			</swiper>
			
			<swiper id="mobile_application_swiper_content"
			        :options="mobileApplicationSwiperOption">
				<swiper-slide  v-for="(item,index) in scenariosList"
				               :key="index">
					<div class="swiper_application_scenarios_content">
						<h1 class="swiper_application_scenarios_title">{{scenariosTitle}}</h1>
						<div class="swiper_application_scenarios_list_item">
							<p class="item_title_content">
								<span class="item_icon_content">
									<icon-component :icon-name="item.iconName"></icon-component>
								</span>
								<span class="item_title">{{item.title}}</span>
							</p>
							<p class="item_content">{{item.content}}</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="swiper_solution_content">
						<h1 class="swiper_application_solution_title">{{scenariosData.title}}</h1>
						<div class="swiper_application_solution_list_content"
						     v-for="(item,index) in scenariosData.list"
						     :key="index">
							<div class="list_icon_content">
								<icon-component :icon-name="item.iconName"></icon-component>
							</div>
							<div class="list_arrow_content" @click="toApplication(item.link)">
								<span class="item_content">{{item.content}}</span>
								<span class="iconfont iconjiantou"></span>
							</div>
						</div>
					</div>
				</swiper-slide>
			</swiper>
			<div class="application_swiper-pagination"></div>
			<div class="mobile_application_swiper_pagination"></div>
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
				mobileApplicationSwiperOption:{
					pagination:{
						el:'.mobile_application_swiper_pagination'
					},
					loop:true,
					effect:'flip',
				},
				applicationSwiperOption:{
					pagination:{
						el:'.application_swiper-pagination'
					},
					loop:true,
					effect:'flip',
				},
				flShowMobileSwiperItem: false,
				innerWidth: 0,
			}
		},
		watch:{
			innerWidth(innerWidth){
				let changeStyleNodeWidth = 768
				if(innerWidth < changeStyleNodeWidth){
					this.flShowMobileSwiperItem = true
				}else {
					this.flShowMobileSwiperItem = false
				}
			}
		},
		mounted(){
			this.innerWidth = window.innerWidth
			window.onresize = (e) => {
				this.innerWidth = e.currentTarget.innerWidth
			}
		},
		methods:{
			toApplication(link){
				this.$router.push(link)
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
	padding-top 6rem
	.swiper_application_content_wrap{
		max-width 120rem
		margin 0 auto
		display grid
		grid-template-columns 50% 50%
		grid-column-gap 10.2rem
		padding-top 6rem
		.application_swiper-pagination{
			display none
			position absolute
			bottom 2rem
			left 50%
			transform translateX(-50%)
			/deep/.swiper-pagination-bullet{
				margin-right 1rem
			}
			/deep/.swiper-pagination-bullet-active{
				background $yellowColor
			}
		}
		.mobile_application_swiper_pagination{
			display none
			position absolute
			bottom 2rem
			left 50%
			transform translateX(-50%)
			/deep/.swiper-pagination-bullet{
				margin-right 1rem
			}
			/deep/.swiper-pagination-bullet-active{
				background $yellowColor
			}
		}
		.application_swiper-pagination{
			display none
		}
		#application_swiper_content{
			display none
		}
		#mobile_application_swiper_content{
			display none
		}
		.swiper_application_scenarios_content{
			color $navigationImgBgColor
			.swiper_application_scenarios_title{
				font-size $fontSize30
				font-weight $fontWeight600
				letter-spacing 0.5rem
				text-align center
				color $fontColor
				max-width 52.8rem
				line-height 1
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
					margin-top 2.4rem
					max-width 52.8rem
					font-size $fontSize16
					line-height 2.4rem
				}
			}
		}
		
		.swiper_solution_content{
			.swiper_application_solution_title{
				max-width 36.6rem
				color $fontColor
				font-size $fontSize30
				letter-spacing 0.5rem
				text-align center
			}
			.swiper_application_solution_list_content{
				display flex
				align-items center
				margin-bottom 2.1rem
				.list_icon_content{
					width 12rem
					height 8rem
					margin-top 2.1rem
					box-sizing border-box
					padding 1.2rem 1.8rem
					border-radius 0.2rem
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
					cursor pointer
					.item_content{
						display inline-block
						padding 1.4rem 4.3rem 1.4rem 1.8rem
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
						color $iconColor
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
						color $iconColor
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
						color $iconColor
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
			.swiper_application_solution_list_content:nth-of-type(5){
				.list_icon_content{
					background $navigationBgColor
				}
				.list_arrow_content{
					border-color $navigationBgColor
					.item_content{
						color $iconColor
					}
					.iconjiantou{
						color $navigationBgColor
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
	@media(max-width: 1200px){
		.swiper_application_container{
			box-sizing border-box
			padding 6rem 2rem 0 2rem
			.swiper_application_content_wrap{
				grid-column-gap 2rem
				grid-template-columns auto 37.5rem
			}
		}
	}
	@media (max-width: 900px){
		.swiper_application_container{
			padding 0
			.swiper_application_content_wrap{
				box-sizing border-box
				display flex
				height 100%
				position relative
				.application_swiper-pagination{
					display block
				}
				.mobile_application_swiper_pagination{
					display none
				}
				#application_swiper_content{
					display block
					height 100%
					box-sizing border-box
					width 100%
					.swiper_application_scenarios_content{
						display block
						margin-top 10rem
						.swiper_application_scenarios_title{
							max-width 100%
							text-align center
						}
						.swiper_application_scenarios_list_item{
							max-width 52.8rem
							margin-left auto
							margin-right auto
						}
					}
					.swiper_solution_content{
						display block
						margin-top 10rem
						.swiper_application_solution_title{
							max-width 100%
						}
						.swiper_application_solution_list_content{
							justify-content center
						}
					}
				}
				.swiper_application_scenarios_content{
					display none
				}
				.swiper_solution_content{
					display none
				}
			}
			
		}
	}
	@media (max-width: 768px){
		.swiper_application_container{
			.swiper_application_content_wrap{
				.application_swiper-pagination{
					display none
				}
				.mobile_application_swiper_pagination{
					display block
				}
				#application_swiper_content{
					display none
				}
				#mobile_application_swiper_content{
					display block
					height 100%
					box-sizing border-box
					width 100%
					/deep/.swiper-wrapper{
						.swiper-slide{
							.swiper_application_scenarios_content{
								margin-top 3.2rem
								.swiper_application_scenarios_title{
									font-size $fontSize20
									letter-spacing 0.2rem
									font-weight $fontWeight600
								}
								.swiper_application_scenarios_list_item{
									margin-top 2.4rem
									box-sizing border-box
									padding 2rem 2.4rem 5.6rem 2rem
									border 0.1rem solid $grayColor
									border-radius 0.2rem
									max-width 28rem
									.item_title_content{
										.item_title{
											font-size $fontSize16
											font-weight $fontWeight600
										}
									}
								}
								.item_content{
									margin-top 1.6rem
									font-size $fontSize16
									line-height 3.2rem
								}
							}
							.swiper_solution_content{
								margin-top 3.2rem
								.swiper_application_solution_title{
									font-size $fontSize20
									letter-spacing 0.1rem
								}
								.swiper_application_solution_list_content{
									margin-top 0
									margin-bottom 2rem
									.list_icon_content{
										width 8rem
										height 6rem
									}
									.list_arrow_content{
										width 20rem
										.item_content{
											padding 1.2rem 0 1.2rem 1.6rem
											font-size $fontSize16
											font-weight $fontWeight600
											letter-spacing 0.1rem
										}
										.iconfont{
											right 1.6rem
										}
									}
								}
								.swiper_application_solution_list_content{
									&:nth-of-type(1){
										margin-top 2.4rem
									}
								}
							}
						}
					}
					.swiper_application_scenarios_content{
						display block
						margin-top 10rem
						.swiper_application_scenarios_title{
							max-width 100%
							text-align center
						}
						.swiper_application_scenarios_list_item{
							max-width 52.8rem
							margin-left auto
							margin-right auto
						}
					}
					.swiper_solution_content{
						display block
						margin-top 10rem
						.swiper_application_solution_title{
							max-width 100%
						}
						.swiper_application_solution_list_content{
							justify-content center
						}
					}
				}
			}
		}
		
	}
</style>
