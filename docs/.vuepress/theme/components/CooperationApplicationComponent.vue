<template>
	<div class="cooperation_application_container">
		<div v-show="!isSubmit" class="cooperation_application_content_wrap">
			<div class="cooperation_ipt_content">
				<span class="cooperation_ipt_label">{{cooperationLabelData.userName}}:</span>
				<el-input :class="flShowUserNameWarning ? 'warning_style' : ''"
				          v-model="userName"></el-input>
			</div>
			<p :style="{visibility: flShowUserNameWarning ? 'visible':'hidden'}"
			   class="cooperation_warning_label">{{cooperationLabelData.warningText.userNameWarning}}</p>
			<div class="cooperation_ipt_content">
				<span class="cooperation_ipt_label">{{cooperationLabelData.position}}:</span>
				<el-input :class="flShowPositionWarning ? 'warning_style' : ''"
				          v-model="position"></el-input>
			</div>
			<p :style="{visibility: flShowPositionWarning ? 'visible':'hidden'}"
			   class="cooperation_warning_label">{{cooperationLabelData.warningText.positionWarning}}</p>
			<div class="cooperation_ipt_content">
				<span class="cooperation_ipt_label">{{cooperationLabelData.company}}:</span>
				<el-input :class="flShowCompanyNameWarning ? 'warning_style' : ''"
				          v-model="companyName"></el-input>
			</div>
			<p :style="{visibility: flShowCompanyNameWarning ? 'visible':'hidden'}"
			   class="cooperation_warning_label">{{cooperationLabelData.warningText.companyWarning}}</p>
			<div class="cooperation_ipt_content">
				<span class="cooperation_ipt_label">{{cooperationLabelData.mail}}:</span>
				<el-input :class="flShowMailWarning ? 'warning_style' : ''"
				          v-model="mail"></el-input>
			</div>
			<p :style="{visibility: flShowMailWarning ? 'visible':'hidden'}"
			   class="cooperation_warning_label">{{cooperationLabelData.warningText.mailWarning}}</p>
			<div class="cooperation_ipt_content">
				<span class="cooperation_ipt_label">{{cooperationLabelData.telephone}}:</span>
				<el-input :class="flShowTelephoneWarning ? 'warning_style' : ''"
				          v-model="telephone"></el-input>
			</div>
			<p :style="{visibility: flShowTelephoneWarning ? 'visible':'hidden'}"
			   class="cooperation_warning_label">{{cooperationLabelData.warningText.telephoneWarning}}</p>
			<div class="cooperation_ipt_content">
				<span class="cooperation_ipt_label">{{cooperationLabelData.cooperationContent}}:</span>
				<el-input v-model="cooperationDemand"
				          :autosize="{
				            minRows:2,
				            maxRows: 6
				          }"
				          type="textarea"
				          maxlength="100"
				          show-word-limit
				          :class="flShowCooperationWarning ? 'warning_style' : ''"></el-input>
			</div>
			<p :style="{visibility: flShowCooperationWarning ? 'visible':'hidden'}"
			   class="cooperation_warning_label">{{cooperationLabelData.warningText.cooperationWarning}}</p>
			<div class="cooperation_button">
				<el-button type="primary"
				           :loading="isLoading"
				           :disabled="flSubmit" @click="submitApply">
					{{cooperationLabelData.submitButtonLabel}}
				</el-button>
			</div>
		</div>
		<div v-show="isSubmit" class="cooperation_application_submit_success_content">
			<div class="cooperation_submit_success_img_content">
				<icon-component
						:icon-name="flSubmitSuccess ? cooperationLabelData.successIconName : cooperationLabelData.failedIconName "></icon-component>
			</div>
			<p class="success_title">{{ flSubmitSuccess ? cooperationLabelData.submitSuccess :
				cooperationLabelData.submitFailed}}</p>
			<p class="success_tip">{{flSubmitSuccess ? cooperationLabelData.successText :
				cooperationLabelData.againSubmit}}</p>
			<p class="tanks">{{cooperationLabelData.thanks}}</p>
		</div>
	</div>
</template>

<script>
	import IconComponent from "./SvgIconComponent";
	import emailjs from 'emailjs-com'
	import {successTipTime} from "../constant";
	import config from "../../config.json"
	
	export default {
		name: "cooperation-mail-component",
		components: {IconComponent},
		data () {
			return {
				flShowUserNameWarning: false,
				flShowCompanyNameWarning: false,
				flShowMailWarning: false,
				flShowTelephoneWarning: false,
				flShowCooperationWarning: false,
				flShowPositionWarning: false,
				isSubmit: false,
				flSubmitSuccess: false,
				isLoading: false,
				userName: '',
				companyName: '',
				mail: '',
				telephone: '',
				cooperationDemand: '',
				position: ''
			}
		},
		watch: {
			'$store.state.partnerActiveIndex' () {
				this.isSubmit = false
				this.userName = '';
				this.companyName = '';
				this.mail = '';
				this.telephone = '';
				this.cooperationDemand = '';
				this.position = '';
				this.flShowUserNameWarning= false;
				this.flShowCompanyNameWarning= false;
				this.flShowMailWarning= false;
				this.flShowTelephoneWarning= false;
				this.flShowCooperationWarning= false;
				this.flShowPositionWarning= false;
			},
			userName (userName) {
				this.flShowUserNameWarning = !!!userName
			},
			companyName (companyName) {
				this.flShowCompanyNameWarning = !!!companyName
			},
			mail (mail) {
				if (/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(mail)) {
					this.flShowMailWarning = !!!mail
				} else {
					this.flShowMailWarning = !!mail
				}
			},
			telephone (telephone) {
				if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(telephone)) {
					this.flShowTelephoneWarning = !!!telephone
				} else {
					this.flShowTelephoneWarning = !!telephone
				}
			},
			cooperationDemand (cooperationDemand) {
				this.flShowCooperationWarning = !!!cooperationDemand
			},
			position (position) {
				this.flShowPositionWarning = !!!position
			}
		},
		methods: {
			submitApply () {
				this.isLoading  = true
				let templateParams = {
					name: this.userName,
					title: this.position,
					company: this.companyName,
					mail: this.mail,
					phone_number: this.telephone,
					message: this.cooperationDemand,
				}
				emailjs.send(config.serverId, config.templateId, templateParams, config.userId).then((result) => {
					this.isLoading  = false
					if (result && result.status && result.status === 200) {
						this.isSubmit = true
						this.flSubmitSuccess = true
					}
					console.log('成功', result)
				}, (error) => {
					this.isLoading  = false
					this.isSubmit = true
					this.flSubmitSuccess = false
					setTimeout(() => {
						this.isSubmit = false
					}, successTipTime)
					console.log(error, "失败")
				})
				
			}
		},
		computed: {
			flSubmit () {
				return (this.userName && this.companyName && this.mail && this.telephone && this.cooperationDemand)
					&& (this.flShowUserNameWarning || this.flShowCompanyNameWarning || this.flShowMailWarning || this.flShowTelephoneWarning || this.flShowCooperationWarning)
			},
			cooperationLabelData () {
				return this.$page.frontmatter.partnerContent.cooperationApplicationTips
			}
		}
	}
</script>

<style scoped lang="stylus">
	.cooperation_application_container {
		width 100%
		height 100%
		margin-top 4.8rem
		border 0.1rem solid $grayColor
		background $whiteColor
		border-radius 0.4rem
		
		.cooperation_application_content_wrap {
			margin 0 auto
			height 59.8rem
			max-width 80rem
			box-sizing border-box
			padding 4.8rem 0
			
			.cooperation_ipt_content {
				margin 0
				display grid
				align-items center
				grid-template-columns 19.4rem auto
				
				.cooperation_ipt_label {
					color $navigationImgBgColor
					font-weight $fontWeight600
					font-size $fontSize18
					letter-spacing: 0.4rem
					
					&:before {
						width 1rem
						height 1.8rem
						content '*'
						font-size $fontSize18
						color $buttonColor
					}
					
				}
			}
			
			/deep/ .warning_style {
				.el-input__inner:focus {
					border-color $warningColor
				}
				
				.el-input__inner {
					border-color $warningColor
				}
				
				.el-textarea__inner {
					border-color $warningColor
				}
			}
			
			.cooperation_warning_label {
				margin 0
				color: $warningColor
				display inline-block
				padding-left 19.4rem
				font-size $fontSize14
				line-height 1.8rem
				margin-bottom 1.2rem
			}
			
			.cooperation_button {
				margin-top 2rem
				display flex
				justify-content flex-end
			}
		}
		
		.cooperation_application_submit_success_content {
			box-sizing border-box
			padding-top 8.9rem
			color $navigationImgBgColor
			height 59.8rem
			
			.cooperation_submit_success_img_content {
				width 22.2rem
				margin 0 auto
			}
			
			.success_title {
				margin-top 1.6rem
				font-size $fontSize24
				font-weight $fontWeight600
				line-height 3.3rem
				text-align center
			}
			
			.success_tip {
				margin-top 1.1rem
				font-size $fontSize16
				line-height 2.2rem
				text-align center
			}
			
			.tanks {
				margin-top 0.4rem
				font-size $fontSize16
				line-height 2.2rem
				text-align center
			}
		}
	}
	@media (max-width: 1200px){
		.cooperation_application_container{
			margin-left 2rem
			margin-right 2rem
			width auto
			box-sizing border-box
			padding-left 2rem
			padding-right 2rem
		}
	}
</style>
