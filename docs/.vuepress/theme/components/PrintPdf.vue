<template>
	<div class="print_container">
		<div class="print_content_wrap">
			<router-link :to="`/download`" target="_blank" rel="noreferrer noopener" class="print_title">{{pdfTitle}}</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PrintPdf",
		computed:{
			pdfTitle(){
				return this.$page.frontmatter.print
			}
		}
	}
</script>

<style scoped lang="stylus">
.print_container{
	position absolute
	right 4.5rem
	.print_content_wrap{
		height 6rem
		line-height 6rem
		.print_title{
			font-size $fontSize16
			color $textColor
		}
	}
}
</style>
