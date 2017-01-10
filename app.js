import "babel-polyfill";
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
function l(){
	return console.log.apply(console,arguments);
}
// l(12,console);

// function log(){
// 	return console.log(...arguments);
// }
// log(1,2,3);

Array.prototype.s=function(){
	return this.splice(...arguments);
}
l([1,2,3].splice(1,2,"a","b"));
l([1,2,3].s(1,2,"a","b"));

// Object.k=function(){
// 	return this.keys(...arguments);
// }
// l(Object.k({a:123,b:45}));
