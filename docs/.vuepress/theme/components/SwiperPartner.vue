<template>
	<div class="swiper_partner_container">
		<div class="swiper_partner_content_wrap">
			<partner_tab_component @selectIndex="tabActiveIndex"></partner_tab_component>
			<partner_img_component v-show="activeIndex !== 2 " :img-list="imgArray"></partner_img_component>
		</div>
	</div>
</template>

<script>
	import Partner_tab_component from "./PartnerTabComponent";
	import Partner_img_component from "./PartnerImgCompontent";
	export default {
		name: "swiper-partners",
		components: {Partner_img_component, Partner_tab_component},
		data(){
			return {
				activeIndex:0,
				imgListData:null,
				imgArray: []
			}
		},
		methods:{
			tabActiveIndex(index){
				this.activeIndex = index
				console.log(this.imgList)
			}
		},
		watch:{
			activeIndex(index){
				console.log(index,"??????????????????????????????????????????????????????????????????")
				this.imgArray = []
				if(index){
					this.imgArray = this.imgListData.IndustryCollaborationImgList
				}else {
					this.imgArray = this.imgListData.businessPartnersImgList
				}
				console.log(this.imgArray,"??????????????????????????????????????????????????????????????????")
			}
		},
		mounted(){
			if(this.activeIndex){
				this.imgArray = this.$page.frontmatter.partnerContent.IndustryCollaborationImgList
			}else {
				this.imgArray = this.$page.frontmatter.partnerContent.businessPartnersImgList
			}
		},
		computed:{
			imgList(){
				this.imgListData = this.$page.frontmatter.partnerContent
				return this.$page.frontmatter.partnerContent
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
	.swiper_partner_content_wrap{
		max-width 120rem
		margin 0 auto
	}
}
</style>
