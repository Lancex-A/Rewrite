/*************************************

项目名称：
下载地址：
脚本作者：Lancex-A
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

*************************************
[rewrite_local]
^ url script-response-body
[mitm]
hostname = 
*************************************
var Lancex-A = $response.body;
var obj = JSON.parse(Lancex-A);

if($request.url.indexOf("/api/Account/GetUserInfo") != -1 {
}
Lancex-A = JSON.stringify(obj);
$done(name1908);
