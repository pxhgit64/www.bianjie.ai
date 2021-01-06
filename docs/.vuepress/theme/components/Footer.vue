<template>
	<div class="footer_container">
		<span class="copyright_content">{{`版权所有©2016-${new Date().getFullYear()} 上海边界智能科技有限公司`}}</span>
		<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028"
		   target="_blank"
		   rel="noreferrer noopener">沪ICP备17020986号</a>
		<span class="police_content">
			<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028"
			   target="_blank" rel="noreferrer noopener">沪公网安备31011502009028号</a>
			<img :src="$withBase('/police_badge.png')" alt="">
		</span>
	</div>
</template>

<script>
	export default {
		name: "bottom-footer",
		data() {
			return {
			
			}
		},
	}
</script>

<style scoped lang="stylus">
.footer_container{
	border-top 0.1rem solid $whiteColor25
	position absolute
	bottom 0
	left 0
	width 100%
	height 4.7rem
	display flex
	align-items center
	color $whiteColor
	justify-content center
	font-size $fontSize14
	.copyright_content{
		margin-right 1.2rem
	}
	a{
		color $whiteColor
	}
	.police_content{
		margin-left 1.2rem
		align-items center
		display flex
		img{
			margin-left 0.4rem
			width 1.6rem
			height 1.6rem
		}
	}
}
</style>
