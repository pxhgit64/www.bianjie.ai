<template>
	<div class="footer_container">
		<div class="footer_content_wrap">
			<div class="footer_logo_content">
				<div class="footer_logo">
					<icon-component :icon-name="'iconLOGO'"></icon-component>
				</div>
				<p class="contact_content">
					<span class="contact_label">联系我们：</span>
					<span class="contact_mail">contact@bianjie.ai</span>
				</p>
				<div class="button_content">
					<span class="cooperation_button" @click="cooperation()">合作申请</span>
					<span class="join_button" @click="joinUs()">加入我们</span>
				</div>
			</div>
			<div class="footer_qr_content">
				<div class="qr_img">
					<img src="../../public/qr_bianjie.png" alt="">
					<p class="qr_label">关注微信公众号</p>
				</div>
			</div>
		</div>
		<bottom-footer></bottom-footer>
	</div>
</template>

<script>
	import BottomFooter from "./Footer";
	import IconComponent from "./SvgIconComponent";
	export default {
		name: "footer_component",
		components: {IconComponent, BottomFooter},
		methods:{
			cooperation(){
				this.$router.push('/')
				this.$store.commit('swiperIndex',6)
				this.$store.commit('partnerActiveIndex',2)
			},
			joinUs(){
				this.$router.push('/joinus')
			}
		},
		computed:{
			aboutFooterData(){
				return this.$page.frontmatter.footer
			}
		}
	}
</script>

<style scoped lang="stylus">
	.footer_container{
		position relative
		background url("../../public/swiper_home.png") no-repeat center center
		background-size cover
		.footer_content_wrap{
			max-width 80rem
			margin 0 auto
			display flex
			.footer_logo_content{
				display flex
				flex-direction column
				padding-bottom 7.2rem
				flex 1
				.footer_logo{
					margin-top 6.4rem
					width 23.2rem
					height 7.6rem
				}
				.contact_content{
					margin-top 2.4rem
					max-width 52.6rem
					border-top 0.1rem solid $whiteColor25
					.contact_label{
						display inline-block
						margin-top 2.3rem
						font-size $fontSize14
						color $whiteColor
						line-height 1.6rem
						letter-spacing 0.1rem
					}
					.contact_mail{
						display inline-block
						margin-top 2.3rem
						font-size $fontSize14
						color $whiteColor
						line-height 1.6rem
						letter-spacing 0.1rem
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
						cursor pointer
					}
					.join_button{
						margin-left 1.2rem
						border 0.1rem solid $whiteColor
						font-size $fontSize14
						color $whiteColor
						padding 0.4rem 0.8rem
						border-radius 0.2rem
						cursor pointer
					}
				}
			}
			.footer_qr_content{
				flex 1
				margin-top 6.4rem
				.qr_img{
					display flex
					flex-direction column
					align-items center
					justify-content center
					img{
						max-width 14.6rem
						width 100%
					}
					.qr_label{
						margin-top 2.6rem
						font-size $fontSize16
						letter-spacing 0.2rem
						color $whiteColor
					}
				}
			}
		}
	}
	@media (max-width: 1200px){
		.footer_container{
			.footer_content_wrap{
				margin 0 4.8rem
			}
		}
	}
	@media (max-width: 768px){
		.footer_container{
			.footer_content_wrap{
				flex-direction column
				.footer_logo_content{
					flex none
					padding-bottom 0
					.footer_logo{
						margin 2.4rem  auto 0 auto
						max-width 18rem
					}
					.contact_content{
						text-align center
						.contact_label{
							margin-top 1.2rem
						}
						.contact_mail{
							margin-top 1.2rem
						}
					}
					.button_content{
						display flex
						justify-content center
						margin-top 1.2rem
					}
				}
				.footer_qr_content{
					margin-top 1.2rem
					.qr_img{
						margin-bottom 2.4rem
						img{
							max-width 8rem
							width 100%
						}
						.qr_label{
							margin-top 1.2rem
							font-size $fontSize14
						}
					}
				}
			}
		}
	}
</style>
