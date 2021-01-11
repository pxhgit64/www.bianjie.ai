<template>
	<ul class="summarize_section_content">
		<li class="summarize_section_item"
		    v-for="(item,index) in sectionData"
		    :key="index">
			{{item.content}}
		</li>
	</ul>
</template>

<script>
	export default {
		name: "summarize_section_component",
		props:{
			sectionData:{
				type:Array
			}
		}
	}
</script>

<style scoped lang="stylus">
	.summarize_section_content{
		list-style none
	}
	@media (max-width: 1200px){
		.summarize_section_content{
			margin-top 1.6rem
			.summarize_section_item{
				line-height 3.2rem
				font-size $fontSize16
			}
		}
	}
	@media (max-width: 768px){
		.summarize_section_content{
			margin-top 0.8rem
			.summarize_section_item{
				font-size $fontSize14
			}
		}
	}
</style>
