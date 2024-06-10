/*************************************

项目名称：yyqk
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

*************************************
[rewrite_local]
^https://api.yuceshu.cn:8443/api/Account/GetUserInfo?platform=101&version=2.1.8&city=1&device=8348CAB6-3922-486D-8D61-C1D427DEFA85&channel=&source=0 url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/yyqk.js
[mitm]
hostname = api.yuceshu.cn
*************************************
var name1908 = $response.body;
var obj = JSON.parse(name1908);

if($request.url.indexOf("/api/userinfo") != -1
    obj.isVip = true,
    obj.memberLevel = 1,
    obj.vipValidTime = "2025-06-10 14:04:21"
}

name1908 = JSON.stringify(obj);
$done(name1908);
