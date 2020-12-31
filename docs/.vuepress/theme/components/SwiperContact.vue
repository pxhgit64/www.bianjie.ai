<template>
	<div class="swiper_contact_container">
		<div class="swiper_contact_content_wrap">
			<div class="swiper_contact_logo_content">
				<div class="bian_jie_log_content">
					<icon-component :icon-name="contactData.iconName"></icon-component>
				</div>
				<p class="contact_content">
					<span class="contact_label">{{contactData.contactLabel}}</span>
					<span class="contact_mail">{{contactData.mail}}</span>
				</p>
				<div class="button_content">
					<span class="cooperation_button">{{contactData.cooperationButtonLabel}}</span>
					<span class="join_button">{{contactData.joinUsButtonLabel}}</span>
				</div>
			</div>
			<div class="swiper_contact_Qr_content">
				<div class="qr_img">
					<img src="../../public/qr_bianjie.png" alt="">
					<p class="qr_label">关注微信公众号</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import IconComponent from "./SvgIconComponent";
	export default {
		name: "swiper-contact",
		components: {IconComponent},
		computed:{
			contactData () {
				return this.$page.frontmatter.contactContent
			}
		}
	}
</script>

<style scoped lang="stylus">
	.swiper_contact_container{
		width 100%
		height 100%
		background url("../../public/swiper_home.png")
		background-size cover
		.swiper_contact_content_wrap{
			max-width 120rem
			height 100%
			margin 0 auto
			display flex
			.swiper_contact_logo_content{
				padding-top 25.4rem
				flex 1
				.bian_jie_log_content{
					max-width 30.6rem
				}
				.contact_content{
					border-top 0.1rem solid $whiteColor25
					box-sizing border-box
					padding-top 1.9rem
					margin 0
					.contact_label{
						font-size $fontSize14
						color $whiteColor
					}
					.contact_mail{
						font-size $fontSize14
						color $whiteColor
					}
				}
				.button_content{
					margin-top 2rem
					.cooperation_button{
						border 0.1rem solid $whiteColor
						font-size $fontSize14
						color $whiteColor
						padding 0.4rem 0.8rem
						border-radius 0.2rem
					}
					.join_button{
						margin-left 1.2rem
						border 0.1rem solid $whiteColor
						font-size $fontSize14
						color $whiteColor
						padding 0.4rem 0.8rem
						border-radius 0.2rem
					}
				}
			}
			.swiper_contact_Qr_content{
				flex 1
				padding-top 25.4rem
				.qr_img{
					display flex
					flex-direction column
					align-items center
					justify-content center
					img{
						max-width 18.4rem
						width 100%
					}
					.qr_label{
						font-size $fontSize16
						letter-spacing 0.2rem
						color $whiteColor
					}
				}
			}
		}
	}
</style>
