/*************************************

项目名称：Ai
下载地址：
脚本作者：iOS151
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http://175.178.52.149:88/api/v2/myinfo/8?token=40a9e81c1716307457830b6l2&device=2.3,5.18,iPhone%2014%20Pro%20Max,16.5,zh-Hans&uid=dd57d3e88&v=562 url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/Ai.js
[mitm]
hostname = 175.178.52.149:88


**************************************

var name1908 = JSON.parse($response.body);

name1908={
{
  "status" : "1",
  "data" : [
    {
      "uuid" : "dd57d3e88",
      "banned" : "1",
      "headimgurl" : null,
      "type" : "1",
      "wxunionid" : null,
      "token" : "ba337c72",
      "vipto" : "2099-05-21 23:54:52",
      "wxopenid" : null,
      "nickname" : null,
      "email" : null,
      "appleid" : null,
      "device" : null
    }
  ],
  "seconds" : 0.010999999999999999
}

$done({body : JSON.stringify(name1908)});
