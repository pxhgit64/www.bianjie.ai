<template>
	<div class="home_container">
		<Navbar></Navbar>
		<div class="home_content">
			<p>{{test('homeTitle')}}</p>
			<p>{{test('subTitle')}}</p>
		</div>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar";
	export default {
		name: "home",
		components: {Navbar},
		methods:{
		
		},
		computed:{
			test(){
				return function (params){
					return this.$page.frontmatter[params]
				}
			}
		}
	}
</script>

<style lang="stylus">
	.home_container{
		height calc(100% - 6rem)
		.home_content{
			width 100%
			position relative
			height 100%
			top 6rem
			p{
				margin 0
				font-size $fontSize16
			}
		}
	}
</style>
