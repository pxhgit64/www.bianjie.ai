<template>
	<div class="navigation_container">
		<div class="navigation_left_container">
			<div class="navigation_content_wrap">
				<div class="navigation_img_content">
					<img src="../../public/logo.svg" alt="">
				</div>
				<ul class="navigation_list_container">
					<li class="navigation_list_item"
					    v-for="(item,index) in navigationList"
					    v-if="!item.isRight"
					    :key="index"
					    @click="swiperIndex(item.index)">
						<span v-show="item.index">{{item.text}}</span>
						<router-link v-show="!item.index" :to="item.link">{{item.text}}</router-link>
						<ul v-show="item.items && item.items.length > 0" class="sub_menu">
							<li class="sub_menu_item" v-for="v in item.items ">
								<router-link :to="v.link">{{v.text}}</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="navigation_right_content">
			<div  class="navigation_right_content_item">{{developer}}</div>
			<span class="line"></span>
			<div class="navigation_right_content_item">{{download}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "navigation",
		data(){
			return {
				navigation:[],
			}
		},
		mounted(){
			this.navigation = this.$site.themeConfig.locales['/'].nav
		},
		methods:{
			swiperIndex(index) {
				if(index){
					if(this.$route.path !== '/'){
						this.$router.push('/')
					}
				}
				this.$store.commit('swiperIndex',index)
			}
		},
		computed:{
			navigationList(){
				return this.navigation
			},
			developer(){
				return this.navigation && this.navigation.length > 0 && this.navigation[this.navigation.length - 2].text
			},
			download(){
				return this.navigation && this.navigation.length > 0 && this.navigation[this.navigation.length - 1].text
			}
		}
	}
</script>

<style scoped lang="stylus">
	.navigation_container{
		width 100%
		height: 6rem
		background $navigationBgColor
		position fixed
		top 0
		left 0
		display flex
		align-items center
		justify-content: space-between
		z-index 10
		.navigation_left_container{
			height 6rem
			display flex
			.navigation_content_wrap{
				width 100%
				height 100%
				display flex
				.navigation_img_content{
					width 16.2rem
					box-sizing border-box
					background $navigationImgBgColor
					display flex
					align-items center
					img{
						padding 0.7rem 2.8rem
						width 10.6rem
					}
				}
				.navigation_list_container{
					display flex
					list-style none
					padding-left 0
					margin 0
					.navigation_list_item{
						padding 0 2.4rem
						position relative
						line-height 6rem
						cursor pointer
						z-index 10
						a{
							color $whiteColor
						}
						span{
							white-space nowrap
							letter-spacing: 0.1rem;
						}
						&:hover{
							.sub_menu{
								display block
							}
						}
						.sub_menu{
							display none
							position absolute
							top 6rem
							list-style none
							background $whiteColor
							box-sizing border-box
							padding 1.2rem 0
							border-radius 0 0 0.2rem 0.2rem
							.sub_menu_item{
								line-height 1
								padding 0.5rem 1.2rem
								white-space nowrap
								a{
									color $fontColor
								}
								a:hover{
									color $buttonColor
								}
							}
						}
					}
				}
			}
		}
		
		.navigation_right_content{
			display flex
			align-items center
			background $buttonColor
			.navigation_right_content_item{
				width 10rem
				height 6rem
				text-align center
				line-height 6rem
				cursor pointer
			}
			.line{
				display inline-block
				height 2.4rem
				border-right 1px solid $whiteColor75
			}
		}
	}
	
</style>
