/*************************************

项目名称：天天素材
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http://108.181.40.58:88/api/v2/saveiaporder/8? url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/ttsc.js   


[mitm]
hostname = 108.181.40.58:88

**/
var objc = JSON.parse($response.body);
objc={
  {
  "status" : "1",
  "data" : "123484"
}

$done({body : JSON.stringify(objc)});
