<template>
	<div class="follow_us_container">
		<div class="follow_us_content_wrap">
			<span class="follow_us_title">{{followUS}}</span>
			<div class="follow_us_qr_code">
				<img src="../../public/qr_bianjie.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "FollowUsQr",
		computed:{
			followUS(){
				return this.$page.frontmatter.followUs
			}
		}
	}
</script>

<style scoped lang="stylus">
	.follow_us_container{
		position absolute
		right 10rem
		.follow_us_content_wrap{
			position relative
			display flex
			align-items center
			cursor pointer
			&:hover{
				.follow_us_qr_code{
					display block
				}
			}
			.follow_us_title{
				display inline-block
				height 100%
				font-size $fontSize16
				line-height 6rem
			}
			.follow_us_qr_code{
				display none
				position absolute
				width 13rem
				height 13rem
				border-radius 0.4rem
				overflow hidden
				left 50%
				top 6rem
				transform translateX( -50%)
				img{
					width 100%
					height 100%
				}
			}
			
		}
	}
@media (max-width: $MQMobile){
	.follow_us_container{
		display none
	}
}
</style>
