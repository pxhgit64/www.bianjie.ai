<template>
	<div class="about_container">
		<div class="about_title_container">
			<div class="about_title_content">
				<span class="about_title">{{aboutData.title}}</span>
			</div>
		</div>
		<div class="about_section_container">
			<ul class="about_section_content">
				<li class="about_section_item"
				    v-for="(item,index) in aboutData.section "
				    :key="index">
					<p class="section_item">{{item}}</p>
				</li>
			</ul>
		</div>
		<div class="memorabilia_container">
			<div class="memorabilia_content">
				<h2 class="memorabilia_title">{{aboutData.memorabilia.title}}</h2>
			</div>
			<div class="memorabilia_list_img_content">
				<div class="memorabilia_list_content">
					<memorabilia-list-component :memorabilia-list="aboutData.memorabilia.list"></memorabilia-list-component>
				</div>
				<div class="memorabilia_img_content">
					<memorabilia_img_component :memorabilia-image-list="aboutData.memorabilia.imageList"></memorabilia_img_component>
				</div>
			</div>
		</div>
		<footer_component></footer_component>
	</div>
</template>

<script>
	import MemorabiliaListComponent from "./MemorabiliaListComponent";
	import Memorabilia_img_component from "./MemorabiliaImgComponent";
	import Footer_component from "./FooterComponent";
	import SwiperContact from "./SwiperContact";
	export default {
		name: "about",
		components: {SwiperContact, Footer_component, Memorabilia_img_component, MemorabiliaListComponent},
		data(){
			return{
			
			}
		},
		computed:{
			aboutData(){
				return this.$page.frontmatter
			}
		}
	}
</script>

<style scoped lang="stylus">
.about_container{
	margin-top 6rem
	.about_title_container{
		background url("../../public/swiper_home.png") no-repeat center center
		background-size cover
		height 20rem
		display flex
		align-items center
		justify-content center
		.about_title_content{
			.about_title{
				font-size $fontSize30
				letter-spacing 0.5rem
				font-weight $fontWeight600
				color $whiteColor
			}
		}
	}
	.about_section_container{
		background $whiteColor
		display flex
		align-items center
		justify-content center
		box-sizing border-box
		padding 6rem 0
		.about_section_content{
			max-width 100rem
			.about_section_item{
				list-style none
				color $iconColor
				font-size $fontSize16
				line-height 3.2rem
				margin-top 1rem
			}
		}
	}
	.memorabilia_container{
		background url("../../public/swiper_product_bg.png") no-repeat center center
		background-size cover
		box-sizing border-box
		padding 6rem 0 8rem 0
		.memorabilia_content{
			max-width 120rem
			text-align center
			margin 0 auto
			.memorabilia_title{
				color $fontColor
				font-size $fontSize30
			}
		}
		.memorabilia_list_img_content{
			display flex
			max-width 105rem
			margin 0 auto
			margin-top 6.9rem
			.memorabilia_list_content{
				flex:1
			}
			.memorabilia_img_content{
				width 37rem
			}
		}
	}
}
@media (max-width: 1150px){
	.about_container{
		.about_section_container{
			padding 3.2rem 0
			.about_section_content{
				padding  0 4.8rem
				margin 0
				.about_section_item{
					margin-top 0
					.section_item{
						line-height 3.2rem
					}
				}
			}
		}
		.memorabilia_container{
			.memorabilia_list_content{
				display flex
				justify-content center
				.memorabilia_list_container{
					margin-right 0
					max-width 100%
					margin-top 5.2rem
				}
			}
			.memorabilia_list_img_content{
				flex-direction column
				margin 0 4.8rem
				.memorabilia_img_content{
					width 100%
				}
			}
		}
	}
}
	@media (max-width: 768px){
		.about_container{
			.about_section_container{
				.about_section_content{
					padding  0 2rem
					margin 0
				}
			}
			.memorabilia_container{
				.memorabilia_list_content{
					display flex
					justify-content center
					.memorabilia_list_container{
						margin-right 0
						max-width 100%
						margin-top 5.2rem
					}
				}
				.memorabilia_list_img_content{
					flex-direction column
					margin 0 2rem
					.memorabilia_img_content{
						width 100%
					}
				}
			}
		}
	}
</style>
