import "babel-polyfill";
import express from "express";
import router from "./controller";
import {SERVER_CONFIG} from "./config";
import {l,createHTML} from "./utils";
express()
	.use(express.static("./static"))
	.use(express.static("./dev/dist"))
	.use(router)
	.listen(SERVER_CONFIG.port);

// function l(){
// 	return console.log(...arguments);
// }

// var getJson = (url,{method,headers,body})=>{
// 	var promise = new Promise((resolve,reject)=>{
// 		const xhr =new XMLHttpRequest;
// 		xhr.onreadystatechange=()=>{
// 			if(xhr.readyState===4){
// 				if(xhr.status===200){
// 					resolve(JSON.parse(xhr.responseText));
// 				}else{
// 					reject(new Error(xhr.responseText))
// 				}
// 			}
// 		};
// 		xhr.open(method,url,1);
// 		for(let i in headers){
// 			xhr.setRequestHeader(i,headers[i])
// 		}
// 		xhr.send(method === "get" ? null : body);
// });
// 	return promise;
// }
// getJson("/api/test/get",{
// 	method:"get",
// 	headers:{
// 		"Content-Type":"text/plain"
// 	},
// 	body:"len=2"
// }).then(date=>{
// 	l(date)
// }).catch(err=>{
// 	l(err)
// })
// l(A);
// l(obj.b());
// B(23344);
// l(C());
// const A=9;
//解构
// let {a,b}={
// 	a:1,
// 	b:2,
// 	c:3
// }
// console.log(a,b);
// let arr =[{},function(){}];
// var a=arr[0];
// arr[0]=arr[1];
// arr[1]=a;
// console.log(arr);

// let [a,b]=arr;
//  arr=[b,a];
// console.log(arr);
//迭代器
// let [a,...rest]=[1,2,3,5];
// console.log(a,rest);
// let {a,b,...rest}={
// 	a:1,
// 	b:2,
// 	c:3,
// 	d:4,
// 	f:5,
// 	g:6
// }
// console.log(a,rest);
// function l0(){
// 	return console.log.apply(console,arguments);
// }
// l0(12,console);

// import obj,{A,B,C} from "./controller";
// log(1,2,3);

// Array.prototype.s=function(){
// 	return this.splice(...arguments);
// }
// l([1,2,3].splice(1,2,"a","b"));
// l([1,2,3].s(1,2,"a","b"));

// Object.k=function(){
// 	return this.keys(...arguments);
// }
// l(Object.k({a:123,b:45}));
//箭头函数拿不到当前所传入的参数
// const a = ()=>{
// 	console.log(123);
// }
// a();

// let obj={
// 	a:1,
// 	b:function(){
// 		l(this.a);
// 	}
// }
// obj.b();

// const show=([a,...rest1],{b,...rest2},c=0,...rest3)=>{
// 	l(rest1,rest2,rest3);
// }
// show([1,2,3],{
// 	b:1,
// 	c(){},
// 	d:"666"
// },0,56,"9");

// function add(...value){
// 	let sum =0;
// 	for(var val of value){
// 		sum += val;
// 	}
// 	return sum;
// }
// l(add(2,5,3));
// l(require("./controller"));

