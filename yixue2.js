/*************************************

项目名称：易学
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api.yuceshu.cn:8443\/api\/Account\/GetUserInfo? url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/yixue2.js

[mitm]
hostname =api.yuceshu.cn:8443


**************************************

var name1908 = JSON.parse($response.body);
{
  {
  "ok" : true,
  "data" : {
    "memberLevel" : 0,
    "birthday" : null,
    "nickName" : null,
    "money" : 0,
    "status" : 0,
    "isVip" : true,
    "totalGoldCoin" : 0,
    "realName" : null,
    "goldCoin" : 0,
    "headImage" : null,
    "inviteUserId" : null,
    "email" : null,
    "lastLoginTime" : "2024-04-09 15:17:43",
    "mobile" : "17718491493",
    "vipValidTime" : 2025-12-09 15:19:19,
    "age" : null,
    "isLeapMonth" : false,
    "userName" : null,
    "birthdayType" : 0,
    "createTime" : "2024-04-09 15:17:43",
    "address" : null,
    "userId" : "AAJLXN"
  },
  "code" : 0,
  "message" : "成功"
}
$done({body : JSON.stringify(name1908)});
