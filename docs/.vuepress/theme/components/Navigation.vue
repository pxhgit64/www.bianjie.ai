<template>
	<div class="navigation_container">
		<div class="navigation_content">
			<div class="navigation_left_container">
				<div class="navigation_content_wrap">
					<div class="navigation_img_content" @click="toHome()">
						<img src="../../public/logo.svg" alt="">
					</div>
					<ul class="navigation_list_container">
						<li class="navigation_list_item"
						    v-for="(item,index) in navigationList"
						    v-show="!item.isRight"
						    :key="index"
						    @click="swiperIndex(item.index)">
							<span v-show="item.index">{{item.text}}</span>
							<router-link v-show="!item.index" :to="item.link">{{item.text}}</router-link>
							<ul v-show="item.items && item.items.length > 0" class="sub_menu">
								<li class="sub_menu_item" v-for="v in item.items">
									<span @click.stop="toPage(v.link)" >{{v.text}}</span>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="navigation_right_content">
				<div  class="navigation_right_content_item">{{developer}}</div>
				<span class="line"></span>
				<RouterLink class="navigation_right_content_item" :to="'/download'" target="_blank" rel="noreferrer noopener"><div >{{download}}</div></RouterLink>
			</div>
		</div>
		
		<div class="mobile_navigation_container">
			<div class="mobile_navigation_content">
				<div class="mobile_navigation_logo" @click="toHome()">
					<img src="../../public/logo.svg" alt="">
				</div>
				<div class="mobile_menu_icon" @click="isShowMobileMenu()">
					<span class="iconfont iconcaidan"></span>
				</div>
			</div>
			<ul class="mobile_navigation_list_content" v-show="flShowMobileMenu">
				<li class="mobile_navigation_item_content"
				    v-for="(item,index) in navigationList"
				    :key="index"
				    @click="mobileSwiperIndex(item.index,item)">
					<span class="mobile_navigation_item_label"
					      v-show="item.index">{{item.text}}
						<i :class="`iconfont ${item.items && item.items.length > 0
						? `${flShowSunMenu && isShowSubMenuText === item.text
						? 'iconshouqi' : 'iconzhankai1'}` : ''}`"></i>
					</span>
					<router-link class="mobile_navigation_item_link" v-show="!item.index && item.link !== '/developer'&& item.link !== '/download' " :to="item.link">{{item.text}}</router-link>
					<span v-if="item.link == '/developer'">{{item.text}}</span>
					<template v-if="isShowSubMenuText === item.text && flShowSunMenu ">
						<ul v-show="item.items && item.items.length > 0"
						    class="mobile_sub_menu">
							<li class="mobile_sub_menu_item" v-for="v in item.items">
								<span @click.stop="toPage(v.link)" >{{v.text}}</span>
							</li>
						</ul>
					</template>
				</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: "navigation",
		data(){
			return {
				navigation:[],
				isShowSubMenuText: '',
				flShowMobileMenu: false,
				flShowSunMenu: false
			}
		},
		created(){
			this.navigation = this.$site.themeConfig.nav
		},
		methods:{
			toHome(){
				this.$router.push('/')
				this.$store.commit('swiperIndex',1)
			},
			isShowMobileMenu(){
				this.flShowMobileMenu = !this.flShowMobileMenu
			},
			swiperIndex(index) {
				if(index){
					if(this.$route.path !== '/'){
						this.$router.push('/')
					}
				}
				this.$store.commit('swiperIndex',index)
			},
			mobileSwiperIndex(index,item){
				this.isShowSubMenuText = item.text
				this.flShowSunMenu = !this.flShowSunMenu
				if(index){
					if(this.$route.path !== '/'){
						this.$router.push('/')
					}
					if(item.text !== '产品' && item.text !== '应用' ) {
						this.flShowMobileMenu = false
					}else {
						this.flShowMobileMenu = true
					}
					
				}
				this.$store.commit('swiperIndex',index)
				
			},
			toPage(path){
				this.flShowSunMenu = false
				this.flShowMobileMenu = false
				this.$router.push(path)
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
		z-index 10
		.navigation_content{
			display flex
			align-items center
			justify-content: space-between
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
								z-index 100
								display none
								position absolute
								top 6rem
								list-style none
								background $whiteColor
								box-sizing border-box
								padding 1.2rem 0
								border-radius 0 0 0.2rem 0.2rem
								border 0.1rem solid $grayColor
								.sub_menu_item{
									line-height 1
									padding 0.5rem 1.2rem
									white-space nowrap
									span{
										color $fontColor
									}
									span:hover{
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
				background $navigationImgBgColor
				.navigation_right_content_item{
					display inline-block
					width 10rem
					height 6rem
					text-align center
					line-height 6rem
					cursor pointer
					color $whiteColor
				}
				.line{
					display inline-block
					height 2.4rem
					border-right 1px solid $whiteColor75
				}
			}
		}
		.mobile_navigation_container{
			display none
			width 100%
			background $navigationBgColor
			position fixed
			top 0
			left 0
			z-index 10
			.mobile_navigation_content{
				height: 6rem
				display flex
				justify-content space-between
				align-items center
				.mobile_navigation_logo{
					box-sizing border-box
					padding 1.4rem 1.2rem
					width 12.3rem
					height 6rem
					background $navigationImgBgColor
					img{
						width 100%
						height: 100%
					}
				}
				.mobile_menu_icon{
					width 6rem
					height 6rem
					display flex
					align-items center
					justify-content center
					background $navigationImgBgColor
				}
			}
			.mobile_navigation_list_content{
				list-style none
				margin 0
				background $navigationBgColor
				padding 1.2rem 0 1.2rem 0
				.mobile_navigation_item_content{
					margin-top 1.2rem
					text-indent 2.4rem
					.mobile_navigation_item_label{
						i{
							font-size 1.6rem
						}
					}
					.mobile_navigation_item_link{
						color $whiteColor
					}
					.mobile_sub_menu{
						margin-top 1.2rem
						background $whiteColor
						color $fontColor
						list-style none
						box-sizing border-box
						padding 1.2rem 0 1.2rem 0
						.mobile_sub_menu_item{
							margin-top 1.2rem
						}
						.mobile_sub_menu_item:first-child{
							margin-top 0
						}
					}
				}
				.mobile_navigation_item_content:first-child{
					margin-top 0
					
				}
			}
		}
	}
	
	@media (max-width: 1030px){
		.navigation_container{
			.navigation_content{
				.navigation_left_container{
					.navigation_content_wrap{
						.navigation_img_content{
							width 14.2rem
							justify-content center
							img{
								width 9.6rem
								padding 0.7rem 1.4rem
							}
						}
						.navigation_list_container{
							.navigation_list_item{
								padding 0 1.2rem
							}
						}
						
					}
				}
				.navigation_right_content{
					.navigation_right_content_item{
						width 8rem
					}
				}
			}
			
		}
	}
	@media (max-width: 768px){
		.navigation_container{
			.navigation_content{
				display none
			}
			.mobile_navigation_container{
				display block
			}
		}
	}
</style>
