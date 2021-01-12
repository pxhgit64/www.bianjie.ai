<template>
	<div class="join_us_container">
		<subpage_component :title="joinUsData.pageTitle" :sub-title="' '"></subpage_component>
		<div class="recruitment_container">
			<div class="recruitment_content_container">
				<overlay-scrollbars class="scroll_content" >
					<ul class="recruitment_job_container">
						<li class="recruitment_job_item"
						    :class="activeIndex === index ? 'active_style' : ''"
						    v-for="(item,index) in joinUsData.jobList"
						    :key="index" @click="selectJob(index,item)">
							{{item.jobName}}
						</li>
					</ul>
				</overlay-scrollbars>
				<div class="recruitment_content">
					<h2 class="job_name">{{jobData.jobName}}</h2>
					<p class="duty_title">{{jobData.dutyTitle}}</p>
					<ol class="duty_list_content">
						<li class="duty_list_item"
						    v-for="(item,index) in jobData.duty"
						    :key="index">
							{{item.item}}
						</li>
					</ol>
					<p class="technical_ability_Title">{{jobData.technicalAbilityTitle}}</p>
					<ol class="technical_ability_list_content">
						<li class="technical_ability_item"
						    v-for="(item,index) in jobData.technicalAbility"
						    :key="index">
							{{item.item}}
						</li>
					</ol>
					<p class="mail_tip_content">
						{{joinUsData.contact}}
					</p>
				</div>
			</div>
		</div>
		<div class="place_holder_background"></div>
		<footer_component></footer_component>
	</div>
</template>

<script>
	import Subpage_component from "./SubPageHeader";
	import Footer_component from "./FooterComponent";
	
	export default {
		name: "join-us-page",
		components: {Footer_component, Subpage_component},
		data () {
			return {
				jobData: null,
				activeIndex: 0
 			}
		},
		created () {
			this.jobData = this.$page.frontmatter.jobList[0]
		},
		computed: {
			joinUsData () {
				return this.$page.frontmatter
			}
		},
		methods: {
			selectJob (index,job) {
				this.activeIndex = index
				this.jobData = job
			}
		}
	}
</script>

<style scoped lang="stylus">
	.join_us_container {
		margin-top 6rem
		height 100%
		
		.recruitment_container {
			.recruitment_content_container {
				max-width 120rem
				margin 0 auto
				background $whiteColor
				padding-top 4.9rem
				display grid
				grid-template-columns 25.4rem auto
				.scroll_content{
					height 100%
				}
				.recruitment_job_container {
					list-style none
					margin 0
					border-right 0.1rem solid $grayColor
					
					.recruitment_job_item {
						font-size $fontSize20
						color $navigationImgBgColor
						letter-spacing 0.1rem
						margin-top 4.8rem
						font-weight $fontWeight600
						cursor pointer
						white-space nowrap
					}
					.active_style{
						color $buttonColor
					}
					.recruitment_job_item:first-child {
						margin-top 0
					}
				}
				.recruitment_content{
					box-sizing border-box
					padding 1.6rem 10rem
					color $navigationImgBgColor
					.job_name{
						font-size $fontSize24
						font-weight $fontWeight600
						letter-spacing 0.1rem
						border-bottom none
					}
					.duty_title{
						margin-top 3.6rem
						font-size $fontSize16
						font-weight $fontWeight600
						letter-spacing 0.1rem
						margin-bottom 2.4rem
					}
					.duty_list_content{
						color $navigationImgBgColor75
						
					}
					.technical_ability_Title{
						margin-top 3.6rem
						font-size $fontSize16
						font-weight $fontWeight600
						letter-spacing 0.1rem
						margin-bottom 2.4rem
					}
					.technical_ability_list_content{
						color $navigationImgBgColor75
					}
					.mail_tip_content{
						margin-top 3.6rem
						font-size $fontSize16
						font-weight $fontWeight600
					}
				}
			}
		}
		.place_holder_background{
			height 20rem
			width 100%
			background url("../../public/opb_bg.png") no-repeat center center
			background-size cover
		}
	}
	@media (max-width: 768px){
		.join_us_container{
			.recruitment_container{
				.recruitment_content_container{
					grid-template-columns auto
					.scroll_content{
						height 4rem
						/deep/.os-scrollbar{
							display none
						}
						border-bottom 0.1rem solid $grayColor
					}
					.recruitment_job_container{
						display flex
						width 100%
						border-right none
						.recruitment_job_item{
							margin-top 0
							margin-right 1.6rem
						}
					}
					.recruitment_content{
						padding-left 4.8rem
						padding-right 4.8rem
					}
				}
			}
		}
	}
	@media (max-width: 500px){
		.join_us_container{
			.recruitment_container{
				.recruitment_content_container{
					grid-template-columns auto
					padding-top 1.6rem
					
					.recruitment_job_container{
						display flex
						width 100%
						border-right none
						.recruitment_job_item{
							margin-top 0
							margin-right 1.6rem
						}
					}
					.recruitment_content{
						padding 1.5rem 1.2rem
						.job_name{
							margin-top 0
							font-size $fontSize20
							letter-spacing 0.1rem
							padding-bottom 0
						}
						.duty_title{
							margin 1.6rem 0 1.2rem 0
						}
						.technical_ability_Title{
							margin 1.6rem 0 1.2rem 0
						}
						.mail_tip_content{
							margin-top 1.6rem
						}
					}
				}
			}
		}
	}
</style>
