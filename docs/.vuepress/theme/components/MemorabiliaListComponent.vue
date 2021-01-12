<template>
	<div class="memorabilia_list_container">
		<overlay-scrollbars class="scroll_content">
			<ul class="memorabilia_list_content">
				<li class="memorabilia_item"
				    v-for="(item,index) in memorabiliaListArr"
				    :key="index">
					<span :class="item.className">
						<i class="iconfont iconshijianzhoudian"></i>
					</span>
					<p class="item_date">{{item.date}}</p>
					<p class="item_content">{{item.content}}</p>
				</li>
			</ul>
		</overlay-scrollbars>
	</div>
</template>

<script>
	import '../../public/iconfont/iconfont.css'
	export default {
		name: "memorabilia-list-component",
		props:{
			memorabiliaList:{
				type:Array
			}
		},
		data(){
			return{
				memorabiliaListArr:[],
			}
		},
		created(){
			this.memorabiliaListArr = this.memorabiliaList.map(value => {
				let className = this.fontColorClass(value.date)
				return {
					...value,
					className:className
				}
			})
		},
		methods:{
			fontColorClass(date){
				let year = Number(date.split('/')[0])
				switch (year) {
					case 2020:
						return 'font_color_yellow'
					case 2019:
						return 'font_color_blue'
					case 2018:
						return 'font_color_gray'
					case 2017:
						return 'font_color_green_black'
					case 2016:
						return 'font_color_dark_blue'
				}
			}
		}
	}
</script>

<style scoped lang="stylus">
	.memorabilia_list_container{
		background $whiteColor
		height 54rem
		max-width 61.6rem
		border-radius 0.2rem
		margin-right 6rem
		.scroll_content{
			height 100%;
			box-sizing border-box
			padding 3.5rem
			.memorabilia_list_content{
				list-style none
				margin 0
				padding 0 0 3rem 0
				.memorabilia_item{
					display flex
					padding-top 2.2rem
					border-left 0.1rem solid $grayColor
					.iconfont{
						position relative
						left -0.9rem
					}
					.font_color_yellow{
						color $yellowColor !important
					}
					.font_color_blue{
						color $buttonColor
					}
					.font_color_gray{
						color $grayColor
					}
					.font_color_green_black{
						color $iconColor
					}
					.font_color_dark_blue{
						color $darkBlueColor
					}
					.item_date{
						color $iconColor
						margin-left  1.9rem
						font-size $fontSize16
						font-weight $fontWeight600
					}
					.item_content{
						color $iconColor
						margin-left 1.8rem
						font-size $fontSize16
					}
				}
				.memorabilia_item:nth-of-type(1){
					padding-top 0
					margin-top 2.2rem
					border-left none
					position relative
					.iconfont{
						position relative
						left -0.8rem
					}
					&:before{
						border-left 0.1rem solid $grayColor
						content ' '
						position absolute
						height 100%
						left 0
						top 1.6rem
					}
				}
				.memorabilia_item:nth-last-of-type(1){
					position relative
					border-left none
					.iconfont{
						position relative
						left -0.8rem
					}
					&:before{
						border-left 0.1rem solid $grayColor
						content ' '
						position absolute
						height 100%
						left 0
						top -2.2rem
					}
				}
			}
			/deep/.os-scrollbar{
				.os-scrollbar-track{
					.os-scrollbar-handle{
						background $grayColor !important
					}
				}
			}
		}
	}
@media (max-width: 600px){
	.memorabilia_list_container{
		.scroll_content{
			.memorabilia_list_content{
				.memorabilia_item{
					.item_date{
						margin-left 0
					}
					.item_content{
						margin-left 1rem
					}
				}
				
			}
		}
	}
}
	@media (max-width: 375px){
		.memorabilia_list_container{
			.scroll_content{
				.memorabilia_list_content{
					.memorabilia_item{
						.item_date{
							margin-left 0
						}
						.item_content{
							margin-left 1rem
						}
					}
				}
				/deep/.os-padding{
					.os-viewport{
						.os-content{
							padding-left 2rem !important
							padding-right 2rem !important
						}
					}
				}
				
			}
		}
	}
</style>
