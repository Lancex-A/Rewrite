/*************************************

项目名称：ds
下载地址：
脚本作者：iOS151
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https://fast.lmfasting.cn/api/plot/list url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/ds.js
[mitm]
hostname = fast.lmfasting.cn


**************************************

var name1908 = JSON.parse($response.body);

name1908={
 {
	"code" : 200,
	"data" :  {
		"items" :  [
			 {
				"clues" :  [
					"1、提示1"
				],
				"code" : "story_one",
				"id" : 1,
				"img" : "http://d.lmfasting.cn/fast/images/3a0947575c3bcd42c6fefb48317f2888.png",
				"name" : "柠檬子的故事",
				"reward" :  {
					"cate" : "product",
					"count" : 1,
					"product" :  {
						"anchor_x" : 1,
						"anchor_y" : 1,
						"cate" :  {
							"icon" : "http://d.lmfasting.cn/fast/images/3a05222aa6fa4bbee1a8d36f0d731454.png",
							"id" : 7,
							"main_cate" : "cat",
							"name" : "猫咪",
							"sort" : 0
						},
						"cate_id" : 12,
						"display" : true,
						"gold" : 0,
						"id" : 188,
						"img" : "http://d.lmfasting.cn/fast/images/3a0947a3b9c047543f808153d15820c9.png",
						"intro" : "一只勤奋、认真、负责的专业搬家猫！",
						"is_hot" : true,
						"is_vip" : true,
						"level" : 100,
						"limit_range" : "0,0,1293,765",
						"max_count" : 1,
						"move_able" : true,
						"name" : "搬搬",
						"product_cate_id" : 7,
						"shop_hidden" : true,
						"sort" : 99,
						"url" : "http://d.lmfasting.cn/fast/images/3a0f93b5137cbeec72fe73e1a1680371.zip",
						"x" : 646,
						"y" : 430
					},
					"reward_id" : 188
				},
				"url" : "http://d.lmfasting.cn/fast/images/3a094c02b81aa206e78d0c9f70d3dc62.zip"
			}
		],
		"userPlotIds" :  [
		]
	},
	"msg" : "ok",
	"t" : "2024-05-26 15:47:48"
}
$done({body : JSON.stringify(name1908)});
