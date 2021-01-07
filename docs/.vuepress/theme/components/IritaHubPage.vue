<template>
	<div class="irita_hub_container">
		<subpage_component :title="iritaHubData.pageTitle" :sub-title="iritaHubData.subTitle"></subpage_component>
		<sub-section-component :section-data="iritaHubData.section"></sub-section-component>
		<sub_frame_work_component :title="iritaHubData.framework.title"></sub_frame_work_component>
	</div>
</template>

<script>
	import Subpage_component from "./SubPageHeader";
	import SubSectionComponent from "./SubSectionComponent";
	import Sub_frame_work_component from "./SubFrameWorkComponent";
	export default {
		name: "iritahub_page",
		components: {Sub_frame_work_component, SubSectionComponent, Subpage_component},
		computed:{
			iritaHubData(){
				return this.$page.frontmatter
			}
		}
	}
</script>

<style scoped lang="stylus">
	.irita_hub_container{
		margin-top 6rem
	}
</style>
