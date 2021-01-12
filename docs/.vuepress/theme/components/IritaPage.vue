<template>
	<div class="irita_container">
		<subpage_component :title="iritaSection.pageTitle" :sub-title="iritaSection.subTitle"></subpage_component>
		<sub-section-component :section-data="iritaSection.section"></sub-section-component>
		<div class="core_container">
			<h2 class="core_title">{{iritaSection.coreAdvantage.title}}</h2>
			<div class="core_advantage_content">
				<div class="core_advantage_item"
				     v-for="(item,index) in iritaSection.coreAdvantage.list">
					<div class="core_advantage_item_image_content">
						<icon-component :icon-name="item.iconName"></icon-component>
					</div>
					<p class="core_advantage_title">{{item.title}}</p>
					<p class="core_advantage_section">{{item.content}}</p>
					<p class="core_advantage_sub_section" v-show="item.subContent">{{item.subContent}}</p>
				</div>
			</div>
		</div>
		<sub_frame_work_component :title="iritaSection.framework.title"></sub_frame_work_component>
		<footer_component></footer_component>
	</div>
</template>

<script>
	import IconComponent from "./SvgIconComponent";
	import Subpage_component from "./SubPageHeader";
	import SubSectionComponent from "./SubSectionComponent";
	import Sub_frame_work_component from "./SubFrameWorkComponent";
	import Footer_component from "./FooterComponent";
	export default {
		name: "irita-page",
		components: {Footer_component, Sub_frame_work_component, SubSectionComponent, Subpage_component, IconComponent},
		data(){
			return {
			
			}
		},
		computed:{
			iritaSection(){
				return this.$page.frontmatter
			}
		}
	}
</script>

<style scoped lang="stylus">
	.irita_container{
		margin-top 6rem
		.irita_content{
			color $iconColor
			max-width 100rem
			margin 0 auto
			list-style none
			box-sizing border-box
			padding 6rem 0
			.irita_section_item{
				margin-top 3.2rem
				.irita_section_list{
					.irita_section_list_item{
						list-style none
						&:before{
							content: '•'
						}
					}
				}
			}
		}
		.core_container{
			background url("../../public/swiper_product_bg.png") no-repeat center center
			background-size cover
			box-sizing border-box
			padding 6rem 0
			.core_title{
				font-size $fontSize30
				letter-spacing 0.5rem
				text-align center
				color $iconColor
				border-bottom none
			}
			.core_advantage_content{
				max-width 120rem
				margin 4.8rem auto 0 auto
				display grid
				justify-items center
				grid-template-columns repeat(3,33.33%)
				grid-row-gap 4.8rem
				.core_advantage_item{
					max-width 27rem
					color $iconColor
					display flex
					flex-direction column
					align-items center
					text-align center
					.core_advantage_item_image_content{
						width 5rem
						height 5rem
					}
					.core_advantage_title{
						margin-top 2.4rem
						color $iconColor
						font-weight $fontWeight600
					}
					.core_advantage_section{
						margin-top 2rem
						font-size $fontSize14
					}
					.core_advantage_sub_section{
						font-size $fontSize14
					}
				}
			}
		}
		.framework_content{
			.framework_content_title{
				font-size $fontSize30
				color $iconColor
				text-align center
			}
		}
	}
	@media (max-width: 1200px){
		.irita_container{
			.irita_content{
			
			}
			.core_container{
				.core_advantage_content{
					grid-template-columns repeat(2,50%)
				}
			}
		}
	}
	@media (max-width: 768px){
		.irita_container{
			.core_container{
				.core_advantage_content{
					grid-template-columns repeat(1,100%)
				}
			}
		}
	}
</style>
