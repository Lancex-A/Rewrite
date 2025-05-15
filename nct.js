/*************************************

项目名称：nct
下载地址：
脚本作者：iOS151
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/graph\.nhaccuatui\.com\/api\/v1\/user\/account\/info url script-response-body https://raw.githubusercontent.com/Lancex-A/Rewrite/refs/heads/main/nct.js
[mitm]
hostname = graph.nhaccuatui.com


**************************************
let body = $response.body;
body = body.replace(/("isVIP"\s*:\s*)false/g, '$1true');

$done({ body });

