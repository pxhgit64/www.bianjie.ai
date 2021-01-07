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
</style>
