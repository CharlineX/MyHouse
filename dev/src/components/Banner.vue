<style lang="stylus" scoped>
	$orange=#e63700
	.banner
		position relative
		height 17.0625rem
		a
			position absolute
			left 0
			width 100%
			height @width
			transform translateX(100%)
			background-size 100% 100%
			&.current
				animation rightFadeIn 1s linear forwards
			&.previous
				animation rightFadeOut 1s linear forwards
		div
			position absolute
			bottom .5625rem
			left 50%
			transform translate(-50% ,-50%)
			text-align center
			z-index 1
			em
				position relative
				float left
				width .5rem
				height @width
				box-shadow inset 0 0 0 1px #b4b4b4
				border-radius 50%
				&:after
					content ""
					position absolute
					top 50%
					left 50%
					transform translate(-50%,-50%)
					width (@width/2)
					height @width
					box-shadow @box-shadow
					border-radius 50%
				&.current
					box-shadow inset 0 0 0 1px $orange
					
					&:after
						box-shadow @box-shadow
	@keyframes rightFadeIn
		from
			transform translateX(100%)
		to
			transform translateX(0)
	@keyframes rightFadeOut
		from
			transform translateX(0)
		to
			transform translateX(-100%)
</style>
<template>
	<div class="banner">
		<router-link v-for="(item,$index) of data" :to="item.href" :style="`background-image:url(${item.url})`" :class="{'current':index===$index,'previous':(index?index-1:dataLen-1)===$index}" />
		<div>
			<em v-for="(item,$index) of data" :class="{'current':index===$index}"></em>
		</div>
	</div>
</template>
<script>
	export default {
		// props:["action"],
		data(){
			return{
				index:0,
				data:[
					// {
					// 	url:require("../assets/1.png"),
					// 	href:"/active/1"
					// },
					// {
					// 	url:require("../assets/2.png"),
					// 	href:"/active/2"
					// },
					// {
					// 	url:require("../assets/3.png"),
					// 	href:"/active/3"
					// },
					// {
					// 	url:require("../assets/4.png"),
					// 	href:"/active/4"
					// }
				]
			}
		},
		computed:{
			dataLen(){
				return this.data.length
			},
			// bannerData:{
			// 	get(){
			// 		return this.data
			// 	},
			// 	set(value){
			// 		this.data=value;

			// 	}
			// }
		},
		// async created(){

		// },
		async mounted(){
			this.data=(await(await fetch("http://127.0.0.1:23333/api/get_banner")).json()).data;
			const len = this.data.length;
			setInterval(()=>{
				this.index=(this.index+1)%len
			},4000)
		}
	}

</script>