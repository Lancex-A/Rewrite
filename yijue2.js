/*************************************

项目名称：易学
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/app70xpgd776392.h5.xiaoeknow.com\/xe.svip.info.get_by_resource.detail\/1.0.0 url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/yijue2.js

[mitm]
hostname = app70xpgd776392.h5.xiaoeknow.com


**************************************

var name1908 = JSON.parse($response.body);
name1908 = {
{
  "forward_url" : "",
  "msg" : "接口请求成功.",
  "code" : 0,
  "data" : {
    "sku_svip_price_list" : {

    },
    "svip_purchase_valid" : 0,
    "svip_info" : {
      "user_svip_info" : [

      ],
      "svip_info" : [

      ],
      "single_resource_rights" : [

      ],
      "svip_state" : 1
    }
  }
}
$done({body : JSON.stringify(name1908)});
