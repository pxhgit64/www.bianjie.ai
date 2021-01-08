<template>
	<div class="swiper_partner_container">
		<div class="swiper_partner_content_wrap">
			<partner_tab_component></partner_tab_component>
			<partner_img_component v-show="$store.state.partnerActiveIndex !== 2 " :img-list="imgArray"></partner_img_component>
			<cooperation-mail-component v-show="$store.state.partnerActiveIndex === 2 "></cooperation-mail-component>
		</div>
	</div>
</template>

<script>
	import Partner_tab_component from "./PartnerTabComponent";
	import Partner_img_component from "./PartnerImgCompontent";
	import CooperationMailComponent from "./CooperationApplicationComponent";
	export default {
		name: "swiper-partners",
		components: {CooperationMailComponent, Partner_img_component, Partner_tab_component},
		data(){
			return {
				imgListData:null,
				imgArray: []
			}
		},
		watch:{
			'$store.state.partnerActiveIndex'(){
				this.imgArray = []
				if(this.$store.state.partnerActiveIndex){
					this.imgArray = this.$page.frontmatter.partnerContent.IndustryCollaborationImgList
				}else {
					this.imgArray = this.$page.frontmatter.partnerContent.businessPartnersImgList
				}
			}
		},
		mounted(){
			if(this.$store.state.partnerActiveIndex){
				this.imgArray = this.$page.frontmatter.partnerContent.IndustryCollaborationImgList
			}else {
				this.imgArray = this.$page.frontmatter.partnerContent.businessPartnersImgList
			}
		},
		computed:{
			imgList(){
				this.imgListData = this.$page.frontmatter.partnerContent
				return
			}
		}
	}
</script>

<style scoped lang="stylus">
.swiper_partner_container{
	width 100%
	height 100%
	background url("../../public/swiper_advantage_bg.png")
	background-size cover
	margin-top 6rem
	.swiper_partner_content_wrap{
		max-width 120rem
		margin 0 auto
	}
}
</style>
