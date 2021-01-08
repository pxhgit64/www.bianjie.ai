<template>
	<ul class="irita_content">
		<li class="irita_section_item"
		    v-for="(item,index) in sectionData"
		    :key="index">
			{{item.content}}
			<ul class="irita_section_list" v-show="item.list">
				<li class="irita_section_list_item"
				    v-for="(value,index) in item.list"
				    :key="index">
					{{value}}
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "sub-section-component",
		props:{
			sectionData:{
				type: Array
			}
		},
	}
</script>

<style scoped lang="stylus">
	.irita_content{
		color $iconColor
		max-width 100rem
		margin 0 auto
		list-style none
		box-sizing border-box
		padding 4.8rem 0
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
</style>
