/*************************************

项目名称：天天素材
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^"http:\/\/api.ttsc.juxiao123.cn\/frontend\/account?version=v2.2.1" url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/ttsc.js   


[mitm]
hostname = api.ttsc.juxiao123.cn

**/
var objc = JSON.parse($response.body);
objc={
  "data" : {
    "latest_platform" : 0,
    "latest_ip" : 771427237,
    "id" : 1316231,
    "guest" : true,
    "is_limit_times" : 1,
    "login_times" : 1,
    "latest_package_id" : 0,
    "created_at" : "2024-01-22 14:12:17",
    "identifyCode" : 1316231,
    "vip_expired_at" : 2099-09-09,
    "nickname" : "小霸王",
    "oaid" : null,
    "wechat_open_id" : null,
    "avatar_url" : "",
    "latest_order" : null,
    "latest_device_name" : "iPhone",
    "source" : "App store",
    "guest_positive_at" : null,
    "enable" : 1,
    "qq_open_id" : null,
    "status" : 1,
    "avatar" : "",
    "perpetual_vip" : 2099-09-09,
    "idfa" : "00000000-0000-0000-0000-000000000000",
    "idfv" : "C4F4AA34-90FC-4303-AB5E-8A8F5D101FCB",
    "android_id" : "C4F4AA34-90FC-4303-AB5E-8A8F5D101FCB",
    "receive_times" : 2099-09-09,
    "updated_at" : "2024-01-22 14:12:20",
    "bddid" : "",
    "latest_login_at" : "2024-01-22 14:12:17",
    "free_search_times" : 1,
    "latest_version" : "v2.2.1",
    "vip_level" : "vip",
    "register_version" : "v2.2.1",
    "csj_bddid" : "MJDSCXJ7MDLQT7GQWF7BV54HIN4GRWF5AXL7U54FFVKEDKT4ISGA01",
    "jpush_id" : "1114a89793ad68399cd",
    "phone" : null,
    "vip" : 2099-09-09
  }
}
$done({body : JSON.stringify(objc)});
