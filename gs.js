/*************************************

项目名称：gs
下载地址：
脚本作者：iOS151
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https://app.guwendao.net/api/user/getVip.aspx url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/gs.js
[mitm]
hostname = app.guwendao.net


**************************************

var name1908 = JSON.parse($response.body);

name1908={
{
	"imDate" : "2024/5/31 14:09:45",
	"lastDate" : "/2099-09-09(2099-09-09)/",
	"msg" : "初始值",
	"status" : true,
	"statusCode" : 200,
	"svip" : "/永久订阅(2099-09-09)/",
	"vip" : "/永久订阅(2099-09-09)/",
}

$done({body : JSON.stringify(name1908)});
