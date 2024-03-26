/*************************************

项目名称：易学
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https://buy.itunes.apple.com/verifyReceipt url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/yijue2.js

[mitm]
hostname = buy.itunes.apple.com


**************************************

var name1908 = JSON.parse($response.body);
name1908 = {
{
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1659589660,
    "app_item_id": 1659589660,
    "bundle_id": "cn.congzhen.CongZhenBaZi",
    "application_version": "1.2.7.1",
    "download_id": 503293367389455859,
    "version_external_identifier": 864466843,
    "receipt_creation_date": "2099-03-26 10:06:21 Etc/GMT",
    "receipt_creation_date_ms": "1711447581000",
    "receipt_creation_date_pst": "2099-03-26 03:06:21 America/Los_Angeles",
    "request_date": "2099-03-26 10:12:22 Etc/GMT",
    "request_date_ms": "1711447942486",
    "request_date_pst": "2099-03-26 03:12:22 America/Los_Angeles",
    "original_purchase_date": "2099-03-13 11:13:42 Etc/GMT",
    "original_purchase_date_ms": "1710328422000",
    "original_purchase_date_pst": "2024-03-13 04:13:42 America/Los_Angeles",
    "original_application_version": "1.2.5.1",
    "in_app": []
  },
  "environment": "Production",
  "status": 0
}
$done({body : JSON.stringify(name1908)});
