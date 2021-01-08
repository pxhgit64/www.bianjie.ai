<template>
	<div class="opb_component_container">
		<div class="opb_component_item" v-for="(item,index) in listData" :key="index">
			<div class="opb_component_item_img_container">
				<div class="opb_component_item_img_content">
					<icon-component :icon-name="item.iconName"></icon-component>
				</div>
			</div>
			<div class="opb_component_item_section">
				<h4 class="opb_component_item_title">{{item.title}}</h4>
				<p class="opb_component_section">{{item.content}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import IconComponent from "./SvgIconComponent";
	export default {
		name: "opb_item_component",
		components: {IconComponent},
		props:{
			listData:{
				type: Array
			}
		}
	}
</script>

<style scoped lang="stylus">
	.opb_component_container{
		display grid
		grid-template-columns repeat(2, auto)
		justify-items center
		grid-column-gap 6.4rem
		grid-row-gap 4.8rem
		.opb_component_item{
			display grid
			grid-template-columns 7.2rem auto
			grid-column-gap 3rem
			margin-top 2.4rem
			.opb_component_item_img_container{
				display flex
				align-items center
				.opb_component_item_img_content{
					width 7.2rem
					height 7.5rem
				}
			}
			.opb_component_item_section{
				.opb_component_item_title{
					margin-top 0
					font-size $fontSize16
					color $iconColor
					font-weight $fontWeight600
				}
				.opb_component_section{
					font-size $fontSize16
					color $iconColor74
					margin-top 0.8rem
				}
			}
		}
	}
</style>
