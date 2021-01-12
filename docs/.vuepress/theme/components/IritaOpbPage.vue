<template>
	<div class="irita_opb_container">
		<subpage_component :title="iritaOpbData.pageTitle" :sub-title="iritaOpbData.subTitle"></subpage_component>
		<div class="section_container">
			<div class="section_content_wrap">
				<sub-section-component :section-data="iritaOpbData.section"></sub-section-component>
				<div class="change_content">
					<h3 class="change_content_title">{{iritaOpbData.change.title}}</h3>
					<opb_item_component :list-data="iritaOpbData.change.list"></opb_item_component>
				</div>
				<div class="example_content">
					<h3 class="example_title">{{iritaOpbData.example.title}}</h3>
					<ul class="example_list">
						<li class="example_list_item" v-for="(item,index) in iritaOpbData.example.list">
							<a :href="item.link" target="_blank" rel="noreferrer noopener">{{item.title}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="background_content"></div>
		<footer_component></footer_component>
	</div>
</template>

<script>
	import Subpage_component from "./SubPageHeader";
	import SubSectionComponent from "./SubSectionComponent";
	import Opb_item_component from "./IritaOpbItemCompontent";
	import Footer_component from "./FooterComponent";
	export default {
		name: "irita-opb-page",
		components: {Footer_component, Opb_item_component, SubSectionComponent, Subpage_component},
		computed:{
			iritaOpbData(){
				return this.$page.frontmatter
			}
		},
	}
</script>

<style scoped lang="stylus">
	.irita_opb_container{
		display flex
		flex-direction column
		margin-top 6rem
		.section_container{
			flex 1
			.section_content_wrap{
				width 100%
				background $whiteColor
				.change_content{
					max-width 100rem
					margin 0 auto
					color $iconColor
					.change_content_title{
						font-size $fontSize16
						font-weight $fontWeight600
						line-height 3.2rem
						margin-top 0
						margin-bottom 2.4rem
					}
				}
				.example_content{
					max-width 100rem
					margin 0 auto
					padding-bottom 7.1rem
					.example_title{
						margin-top 4.8rem
						font-size $fontSize16
						font-weight $fontWeight600
						line-height 3.2rem
						color $iconColor
					}
					.example_list{
						display grid
						grid-template-columns repeat(4,25%)
						padding-left 0
						margin 2.4rem 0 0 0
						list-style none
						.example_list_item{
							line-height 1
							a{
								color $buttonColor
							}
						}
					}
				}
			}
		}
		.background_content{
			background url("../../public/opb_bg.png") no-repeat center center
			background-size 100%
			width 100%
			height 20rem
		}
	}
	@media(max-width: 1200px){
		.irita_opb_container{
			.section_container{
				padding-left 2.4rem
				padding-right 2.4rem
				.section_content_wrap{
					.change_content{
						box-sizing border-box
						padding 0 2.4rem
						.opb_component_container{
							grid-template-columns auto
						}
					}
					.example_content{
						box-sizing border-box
						padding 0 2.4rem
						.example_list{
							grid-template-columns repeat(3,33%)
						}
					}
				}
			}
		}
	}
	@media (max-width: 768px){
		.irita_opb_container{
			.section_container{
				padding-left 0
				padding-right 0
				.section_content_wrap{
					.change_content{
						box-sizing border-box
						padding 0 2.4rem
						.opb_component_container{
							.opb_component_item{
								grid-template-columns auto
							}
						}
					}
					.example_content{
						box-sizing border-box
						padding 0 2.4rem
						.example_list{
							grid-template-columns auto
							margin-top 0
							.example_list_item{
								margin-top 1rem
							}
						}
					}
				}
			}
		}
	}

</style>
