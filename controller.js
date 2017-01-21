import {Router} from "express";
import {SERVER_CONFIG} from "./config";
import readFileAsync from "./utils";
const {
	host,
	port
}=SERVER_CONFIG;
const router=Router();
router
	.route("/api/get_banner/:type")
	.get((req,res)=>{
		// switch(params.type){
		// 	case "home":
		// 	data:[
		// 		{
		// 			url:"/image/banner/1.png",
		// 			href:"/active/1"
		// 		},
		// 		{
		// 			url:"/image/banner/2.png",
		// 			href:"/active/2"
		// 		},
		// 		{
		// 			url:"/image/banner/3.png",
		// 			href:"/active/3"
		// 		},
		// 		{
		// 			url:"/image/banner/4.png",
		// 			href:"/active/4"
		// 		}
		// 	];
		// 	case "me":
			// data:[
			// 	{
			// 		url:"/image/banner/1.png",
			// 		href:"/active/1"
			// 	},
			// 	{
			// 		url:"/image/banner/2.png",
			// 		href:"/active/2"
			// 	},
			// 	{
			// 		url:"/image/banner/3.png",
			// 		href:"/active/3"
			// 	}
			// ]
		// }
		res.set({
			"Access-Control-Allow-Origin":"*"
		}).json({
			code:0,
			data:[
				{
					url:"/image/banner/1.png",
					href:"/active/1"
				},
				{
					url:"/image/banner/2.png",
					href:"/active/2"
				},
				{
					url:"/image/banner/3.png",
					href:"/active/3"
				},
				{
					url:"/image/banner/4.png",
					href:"/active/4"
				}
			].map(item=>{
				console.log(item.url);
				item.url=`http://${host}:${port}${item.url}`;

				return item;
			}),
			message:"success"
		});
	});
router
	.route("*")
	.get(async (req,res)=>{
		res.send(await readFileAsync("./dev/dist/index.html"))
	})
export default router;
// module.exports =1;//模块导包1999
//默认导出只能一次
// export default a => {
// 	console.log(a);
// }
// export const A ="haha";
// export const B = a =>{
// 	console.log(A,a);
// };
// export let a= {
// 	a:1,
// 	b(){
// 		return this.a;
// 	}
// }

// let a=1;
// const b=function(){
// 	return this.a;
// }
// export const B = a =>{console.log(A,a),2};
// export const C =()=>({
// 	a:1,
// 	b:2
// })
// export default{
// 	a,
// 	b
// }