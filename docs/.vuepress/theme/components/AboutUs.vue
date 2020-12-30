<template>
	<div class="about_us_container">
		<span>我是关于我们</span>
	</div>
</template>

<script>
	export default {
		name: "aboutUs",
		
	}
</script>

<style scoped lang="stylus">
	.about_us_container{
		margin-top 6rem
		span{
			font-size $fontSize20
			color #0a84ff
		}
		.list-item {
			display: inline-block;
			margin-right: 10px;
		}
		.list-enter-active,
		.list-leave-active {
			transition: all 1s ease;
		}
		.list-enter-from,
		.list-leave-to {
			opacity: 0;
			transform: translateY(30px);
		}
	}
	body {
		margin: 30px;
	}
	
	button {
		margin-right: 10px;
	}
	#list-demo{
		margin auto
		margin-top 6rem
		max-width 500px;
	}
	.list-item {
		display: inline-block;
		margin-right: 10px;
		color #0a84ff
	}
	
	.list-enter-active,
	.list-leave-active {
		transition: all 1s ease;
	}
	
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}

</style>
