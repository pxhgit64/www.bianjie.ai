<template>
	<div class="framework_content">
		<h2 class="framework_content_title">{{title}}</h2>
	</div>
</template>

<script>
	export default {
		name: "sub_frame_work_component",
		props:{
			title:{
				type:String
			}
		}
	}
</script>

<style scoped lang="stylus">
	.framework_content{
		.framework_content_title{
			font-size $fontSize30
			color $iconColor
			text-align center
		}
	}
</style>
