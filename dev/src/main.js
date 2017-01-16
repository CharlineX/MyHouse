import Vue from 'vue';
import Router from "vue-router";
import App from './App';
import Home from './pages/Home';
import Me from "./pages/Me";
import Order from "./pages/Order";
import Info from "./pages/Info";
import New from "./pages/new"
import "./utils/iconfont"
Vue.use(Router);
const router = new Router({
	mode:"history",
	routes:[
		{
			path:"/home",
			component:Home
		},
		{
			path:"/order",
			component:Order
		},
		{
			path:"/new",
			component:New
		},
		{
			path:"/info",
			component:Info
		},
		{
			path:"/me",
			component:Me
		}
	]
}) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
