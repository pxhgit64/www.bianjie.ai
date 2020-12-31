<template>
	<div class="partner_img_container">
		<ul class="partner_img_content_wrap">
			<li class="partner_img_item"
			    v-for="(item,index) in imgArr"
			    :key="index">
				<a v-if="item.link" :href="item.link" target="_blank" rel="noreferrer noopener">
					<img :src="$withBase(`/${item.imageName}`)" alt="">
				</a>
				<img v-else :src="$withBase(`/${item.imageName}`)" alt="">
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "partner_img_component",
		props:{
			imgList:{
				type:Array
			}
		},
		data(){
			return{
				imgArr:[]
			}
		},
		watch:{
			imgList(imgArray){
				console.log(imgArray,'?>>>>>>>>>>>>>>>>>>>>>>>>>>>')
				if(imgArray && imgArray.length) this.imgArr = imgArray
			}
		}
	}
</script>

<style scoped lang="stylus">
	.partner_img_container{
		width 100%
		height 59.8rem
		border 0.1rem solid $grayColor
		border-radius 0.4rem
		margin-top 4.9rem
		background $whiteColor
		.partner_img_content_wrap{
			max-width 120rem
			margin 0 auto
			display flex
			flex-direction row
			align-items flex-start
			flex-wrap wrap
			list-style none
			box-sizing border-box
			padding 4.8rem 2rem
			.partner_img_item{
				width 27.8rem
				height 10rem
				display flex
				align-items center
				justify-content center
				img{
					width 100%
					height 4rem
				}
			}
		}
	}
</style>
