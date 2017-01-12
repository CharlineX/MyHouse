// module.exports =1;//模块导包1999
//默认导出只能一次
// export default a => {
// 	console.log(a);
// }
export const A ="haha";
// export const B = a =>{
// 	console.log(A,a);
// };
// export let a= {
// 	a:1,
// 	b(){
// 		return this.a;
// 	}
// }

let a=1;
const b=function(){
	return this.a;
}
export const B = a =>{console.log(A,a),2};
export const C =()=>({
	a:1,
	b:2
})
export default{
	a,
	b
}