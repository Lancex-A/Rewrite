/*************************************

项目名称：ds
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https://fast.lmfasting.cn/api/Order/ConfigList url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/dss.js   


[mitm]
hostname = fast.lmfasting.cn

**/
var name1908 = JSON.parse($response.body);
objc name1908={
 {
	"code" : 200,
	"data" :  [
		 {
			"count" : 36000,
			"discount" : 2,
			"flag" : "permanent",
			"freeCount" : 0,
			"hidden" : true,
			"intro" : "一次付费，所有功能无限次使用",
			"isRecommend" : true,
			"isSub" : true,
			"orderType" : 1,
			"platform" : 0,
			"price" : 0,
			"primePrice" : 0,
			"productId" : "p_vip_0.0",
			"text" : "永久会员"
		},
		 {
			"count" : 30,
			"discount" : 5,
			"flag" : "month",
			"freeCount" : 0,
			"hidden" : false,
			"intro" : "平均每日1.6",
			"isRecommend" : false,
			"isSub" : true,
			"orderType" : 1,
			"platform" : 0,
			"price" : 0,
			"primePrice" : 0,
			"productId" : "vip_subscribe_months_0.0",
			"text" : "月卡会员"
		},
		 {
			"count" : 360,
			"discount" : 3,
			"flag" : "year",
			"freeCount" : 0,
			"hidden" : false,
			"intro" : "平均每日0.27",
			"isRecommend" : true,
			"isSub" : true,
			"orderType" : 1,
			"platform" : 0,
			"price" : 0,
			"primePrice" : 0,
			"productId" : "vip_subscribe_years_0.0",
			"text" : "年卡会员"
		}
	],
	"msg" : "ok",
	"t" : "2024-05-26 15:47:42"
}


$done({body : JSON.stringify(objc)});
