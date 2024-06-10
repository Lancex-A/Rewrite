/*************************************

项目名称：yyqk
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

*************************************
[rewrite_local]
^https://api.yuceshu.cn:8443/api/Account/GetUserInfo? url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/yyqk.js
[mitm]
hostname = api.yuceshu.cn
*************************************
var name1908 = $response.body;
var obj = JSON.parse(name1908);

if($request.url.indexOf("/api/Account/GetUserInfo") != -1 {
    obj.isVip = true,
    obj.data.nickName = "name1908";
    obj.data = "2025-06-10 14:04:21";
    obj.memberLevel = 11;
    obj.vipValidTime = "2025-06-10 14:04:21";
}

name1908 = JSON.stringify(obj);
$done(name1908);
