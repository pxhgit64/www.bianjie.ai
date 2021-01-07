<template>
	<div class="sub_page_container">
		<div>
			<h2 class="title">{{title}}</h2>
			<h4 class="subtitle">{{subTitle}}</h4>
		</div>
	</div>
</template>

<script>
	export default {
		name: "subpage_component",
		props:{
			title:{
				type:String
			},
			subTitle:{
				type:String
			}
		}
	}
</script>

<style scoped lang="stylus">
	.sub_page_container{
		height 20rem
		color $whiteColor
		text-align center
		background url("../../public/swiper_home.png") no-repeat center center
		background-size cover
		display flex
		align-items center
		justify-content center
		.title{
			font-size $fontSize30
			letter-spacing 0.5rem
			font-weight $fontWeight600
			border-bottom none
		}
		.subtitle{
			font-size $fontSize16
		}
	}
</style>
