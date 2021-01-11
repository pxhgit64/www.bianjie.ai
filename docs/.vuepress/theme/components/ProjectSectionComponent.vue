<template>
	<div class="project_list_container">
		<div class="project_item_content"
		     v-for="(item,index) in projectList"
		     :key="index">
			<div class="project_item_icon_content">
				<icon-component :icon-name="item.iconName"></icon-component>
			</div>
			<p class="project_item_title">{{item.title}}</p>
			<p class="project_item_section">{{item.section}}</p>
		</div>
	</div>
</template>

<script>
	import IconComponent from "./SvgIconComponent";
	export default {
		name: "project_list_component",
		components: {IconComponent},
		props:{
			projectList:{
				type: Array
			}
		}
	}
</script>

<style scoped lang="stylus">
	.project_list_container{
		display grid
		grid-template-columns repeat(4,25%)
		grid-row-gap 4.8rem
		justify-items center
		max-width 120rem
		margin-top 4.8rem
		.project_item_content{
			color $iconColor
			max-width 20rem
			.project_item_icon_content{
				width 6.5rem
				height: 7.5rem
				margin 0 auto
				color $buttonColor
			}
			.project_item_title{
				text-align center
				font-size $fontSize16
				font-weight $fontWeight600
				margin-top 3.6rem
			}
			.project_item_section{
				margin-top 1.6rem
				font-size $fontSize16
				line-height 2.4rem
			}
		}
	}
	@media (max-width: 1200px){
		.project_list_container{
			grid-template-columns repeat(2,50%)
		}
	}
	@media (max-width: 768px){
		.project_list_container{
			grid-template-columns repeat(1,100%)
			margin-top 2.4rem
			.project_item_content{
				max-width 100%
				.project_item_title{
					margin-top 2rem
				}
				.project_item_section{
					margin-top 2rem
				}
			}
		}
	}
</style>
