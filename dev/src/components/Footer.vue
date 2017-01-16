<style lang="stylus" scoped>
	footer
		position fixed
		bottom .5rem
	a
		display inline-block
		width 4rem
		height 2.7rem
		font-size .64rem
		text-align center
		border-top 1px solid #e5e5e5
		color #b4b4b4
		padding .45rem
		.icon
			display block
			margin .32rem auto .16rem
		&.router-link-active
			.icon
				color #e63700
			span
				color #e63700 + 50
</style>
<template>
    <footer>
    	<!--:自动监听数据变化-->
    	<router-link v-for="item of setting" :to="item.href">
    	<svg class="icon" aria-hidden="true">
  			<use :xlink:href="`#icon-${item.icon}`"></use>
		</svg>
		<span>{{item.name}}</span>
		</router-link>
    	<!-- <router-link to="/order" v-text="'预约'"/>
    	<router-link to="/info" v-text="'信息'"/>
    	<router-link to="/me" v-text="'个人中心'"/> -->
    </footer>
</template>
<script>
	export default {
		data(){ 
			return{
				setting:[
					{
						name:"首页",
						icon:"all",
						href:"/home"
					},
					{
						name:"预约",
						icon:"phone",
						href:"/order"
					},
					{
						name:"",
						icon:"add",
						href:"/new"
					},
					{
						name:"信息",
						icon:"comments",
						href:"/info"
					},
					{
						name:"个人中心",
						icon:"account",
						href:"/me"
					}
				]
			}
		}
	}
</script>


