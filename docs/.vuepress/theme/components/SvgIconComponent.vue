<template>
	<svg class="icon" aria-hidden="true">
		<use :xlink:href="`#${iconName}`"></use>
	</svg>
</template>

<script>
	export default {
		name: "icon-component",
		props:{
			iconName:{
				type:String
			}
		}
	}
</script>

<style scoped lang="stylus">
.icon{
	width: 10rem;
	height: 10rem;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}

</style>
