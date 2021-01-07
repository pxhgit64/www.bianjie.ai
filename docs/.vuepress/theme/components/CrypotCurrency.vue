<template>
	<div class="supply_container">
		<subpage_component :title="cryptoCurrencyData.pageTitle"></subpage_component>
		<div class="supply_summarize_project_content">
			<div class="supply_summarize_content">
				<p class="supply_summarize_label">{{cryptoCurrencyData.summarizeLabel}}</p>
				<summarize_section_component :section-data="cryptoCurrencyData.summarizeSection"></summarize_section_component>
			</div>
			<div class="project_content">
				<p class="project_label">{{cryptoCurrencyData.projectLabel}}</p>
				<project_list_component :project-list="cryptoCurrencyData.projectSection"></project_list_component>
			</div>
		</div>
	</div>
</template>

<script>
	import Subpage_component from "./SubPageHeader";
	import Summarize_section_component from "./ApplicationSummarizeSectionComponent";
	import Project_list_component from "./ProjectSectionComponent";
	export default {
		name: "crypto-Currency-page",
		components: {Project_list_component, Summarize_section_component, Subpage_component},
		computed:{
			cryptoCurrencyData () {
				return this.$page.frontmatter
			}
		}
	}
</script>

<style scoped lang="stylus">
	.supply_container{
		.supply_summarize_project_content{
			background url("../../public/swiper_product_bg.png") no-repeat center center
			background-size cover
			margin-bottom 6rem
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
</style>
