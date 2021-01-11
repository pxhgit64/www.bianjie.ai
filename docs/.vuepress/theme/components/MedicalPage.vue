<template>
	<div class="supply_container">
		<subpage_component :title="medicalData.pageTitle"></subpage_component>
		<div class="supply_summarize_project_content">
			<div class="supply_summarize_content">
				<p class="supply_summarize_label">{{medicalData.summarizeLabel}}</p>
				<summarize_section_component :section-data="medicalData.summarizeSection"></summarize_section_component>
			</div>
			<div class="project_content">
				<p class="project_label">{{medicalData.projectLabel}}</p>
				<project_list_component :project-list="medicalData.projectSection"></project_list_component>
			</div>
		</div>
		<footer_component></footer_component>
	</div>
</template>

<script>
	import Subpage_component from "./SubPageHeader";
	import Summarize_section_component from "./ApplicationSummarizeSectionComponent";
	import Project_list_component from "./ProjectSectionComponent";
	import Footer_component from "./FooterComponent";
	export default {
		name: "medical-page",
		components: {Footer_component, Project_list_component, Summarize_section_component, Subpage_component},
		computed:{
			medicalData () {
				return this.$page.frontmatter
			}
		}
	}
</script>

<style scoped lang="stylus">
	.supply_container{
		margin-top 6rem
		.supply_summarize_project_content{
			background url("../../public/swiper_product_bg.png") no-repeat center center
			background-size cover
			padding-bottom 6rem
			.supply_summarize_content{
				max-width 120rem
				color $iconColor
				box-sizing border-box
				padding 4rem 0 3.6rem 0
				margin 0 auto
				.supply_summarize_label{
					font-weight $fontWeight600
					font-size $fontSize20
				}
			}
			.project_content{
				max-width 120rem
				margin 0 auto
				padding-bottom 6rem
				.project_label{
					color $iconColor
					font-weight $fontWeight600
					font-size $fontSize20
				}
			}
		}
	}
	@media (max-width: 1200px){
		.supply_container{
			.supply_summarize_project_content{
				.supply_summarize_content{
					box-sizing border-box
					padding 2.4rem 4.8rem
					.supply_summarize_label{
						font-size $fontSize20
						font-weight $fontWeight600
					}
				}
				.project_content{
					box-sizing border-box
					padding 0 4.8rem
				}
			}
		}
	}
	@media (max-width: 768px){
		.supply_container{
			.supply_summarize_project_content{
				.supply_summarize_content{
					box-sizing border-box
					padding 1.6rem 1.2rem
					.supply_summarize_label{
						font-size $fontSize16
						font-weight $fontWeight600
					}
				}
				.project_content{
					box-sizing border-box
					padding 0 1.2rem
					.project_label{
						font-size $fontSize16
						font-weight $fontWeight600
					}
				}
			}
		}
	}
	
</style>
