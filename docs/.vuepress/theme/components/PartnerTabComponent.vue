<template>
	<div class="partner_tab_container">
		<div class="partner_tab_content_wrap"
		     v-for="(item,index) in tabData"
		     :key="index">
			<div class="partner_tab_icon_content">
				<div class="partner_icon_content" :style="{visibility: $store.state.partnerActiveIndex === index ? 'visible' : 'hidden'}">
					<icon-component :icon-name="item.iconName"></icon-component>
				</div>
				<span class="partner_tab_label"
				      :class="$store.state.partnerActiveIndex === index ? 'active_style' : ''"
				      @click="selectTabOption(index)">{{item.label}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import IconComponent from "./SvgIconComponent";
	export default {
		name: "partner_tab_component",
		components: {IconComponent},
		data(){
			return {
			}
		},
		methods:{
			selectTabOption(index){
				this.$emit('selectIndex',index)
				this.$store.commit('partnerActiveIndex',index)
			}
		},
		computed:{
			tabData () {
				return this.$page.frontmatter.partnerContent.partnerTab
			}
		}
	}
</script>

<style scoped lang="stylus">
	.partner_tab_container{
		color $fontColor
		display flex
		justify-content center
		.partner_tab_content_wrap{
			display flex
			padding  0 3.2rem
			padding-top 8rem
		}
		.partner_tab_icon_content{
			flex 1
			display flex
			align-items center
			.partner_icon_content{
				width 4.7rem
				height 5.4rem
			}
			.partner_tab_label{
				margin-left 0.8rem
				font-size $fontSize30
				color $fontColor45
				cursor pointer
			}
			.active_style{
				color $fontColor
			}
		}
	}
	@media (max-width: 768px){
		.partner_tab_container{
			.partner_tab_content_wrap{
				padding 3.2rem 0 0 0
				.partner_tab_icon_content{
					display flex
					.partner_icon_content{
						display none

					}
					.partner_tab_label{
						font-size $fontSize20
						margin-left 1.6rem
					}
				}
			}
		}
	}
</style>
