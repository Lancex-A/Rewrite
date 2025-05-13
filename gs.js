/*************************************

项目名称：gs
下载地址：
脚本作者：iOS151
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/graph\.nhaccuatui\.com\/api\/v1\/user\/account\/info url response-body jsonjq-response-body 'if .data?.isVIP? != null then .data.isVIP = true else . end' https://raw.githubusercontent.com/name1908/Rewrite/main/gs.js
[mitm]
hostname = buy.itunes.apple.com


**************************************

var name1908 = JSON.parse($response.body);


$done({body : JSON.stringify(name1908)});
