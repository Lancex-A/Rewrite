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
万雷元:
https://raw.githubusercontent.com/Lancex-A/Rewrite/refs/heads/main/nct.js

万雷元:
{
  "total": 0,
  "loadmore": false,
  "code": 0,
  "msg": "success",
  "reqId": "6115cfc3f5ec4d1c9c35bc9b6be71a6d",
  "data": {
    "userId": 56629081,
    "isVIP": true,  // 修改为 true 表示 VIP
    "vipExpire": "2024-07-13T00:00:00",  // 修改为 VIP 过期时间
    "fullName": "哈哈哈",
    "displayName": "哈哈哈",
    "phoneNumber": "(+86)195XXX64931",
    "createTime": 1747150193984,
    "success": true
  },
  "profileId": "prod",
  "curTime": 1747313463011
}

$done({ body });

