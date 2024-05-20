/*************************************

项目名称：theme
下载地址：
脚本作者：iOS151
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https://buy.itunes.apple.com/verifyReceipt url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/theme.js
[mitm]
hostname = buy.itunes.apple.com


**************************************

var name1908 = JSON.parse($response.body);

name1908={
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1542453907,
    "receipt_creation_date" : "2099-05-20 08:44:34 Etc/GMT",
    "bundle_id" : "com.themeFactory.iconMaker",
    "original_purchase_date" : "2024-05-20 08:26:01 Etc/GMT",
    "in_app" : [

    ],
    "adam_id" : 1542453907,
    "receipt_creation_date_pst" : "2099-05-20 01:44:34 America/Los_Angeles",
    "request_date" : "2099-05-20 08:47:31 Etc/GMT",
    "request_date_pst" : "2099-05-20 01:47:31 America/Los_Angeles",
    "version_external_identifier" : 865528300,
    "request_date_ms" : "1716194851104",
    "original_purchase_date_pst" : "2024-05-20 01:26:01 America/Los_Angeles",
    "application_version" : "2670",
    "original_purchase_date_ms" : "1716193561000",
    "receipt_creation_date_ms" : "1716194674000",
    "original_application_version" : "2670",
    "download_id" : 503485556526040096
  },
  "status" : 0,
  "environment" : "Production"
}

$done({body : JSON.stringify(name1908)});
