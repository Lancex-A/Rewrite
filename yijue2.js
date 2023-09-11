/*************************************

项目名称：易学
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/app70xpgd776392.h5.xiaoeknow.com\/xe.ecommerce.goods_center.get_spu_info\/1.0.0 url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/yijue2.js

[mitm]
hostname = app70xpgd776392.h5.xiaoeknow.com


**************************************

var name1908 = JSON.parse($response.body);
name1908 = {
{
  "code" : 0,
  "msg" : "Success",
  "data" : {
    "sale_status" : 1,
    "price_low" : 0,
    "id" : 934104,
    "is_free" : 1,
    "is_recom" : 0,
    "price_line" : 0,
    "timing_offtime" : "2099-09-09 00:00:00",
    "detail_cos_url" : "",
    "price_high" : 0,
    "freight_template_id" : 0,
    "is_timing_off" : 0,
    "is_deleted" : 0,
    "app_id" : "app70XpgD776392",
    "wx_goods_category_id" : "",
    "is_public" : 1,
    "sell_mode" : 1,
    "timing_off" : "2099-09-09 00:00:00",
    "is_timing_sale" : 0,
    "is_new" : 0,
    "parent_spu_id" : "",
    "audit_time" : "2099-09-09 00:00:00",
    "period_type" : 0,
    "can_sold_end" : "2099-09-09 00:00:00",
    "resource_type" : 6,
    "video_url" : "",
    "visit_num" : 2158,
    "audit_reason" : "",
    "is_best" : 0,
    "appraise_num" : 0,
    "goods_tag" : "",
    "is_single" : 1,
    "goods_sn" : "",
    "spu_extend" : "",
    "sale_at" : "2021-02-03 02:42:31",
    "goods_tag_is_show" : 1,
    "is_hot" : 0,
    "spu_type" : "SPC",
    "updated_at" : "2023-08-11 01:05:01",
    "is_stop_sell" : 0,
    "freight" : 0,
    "goods_category_id" : "",
    "sale_diff_stamp" : "0",
    "timing_sale" : "",
    "is_uniform_freight" : 0,
    "custom_cover" : "",
    "created_at" : "2021-02-03 02:42:31",
    "period" : 0,
    "sell_type" : 1,
    "can_sold_start" : "2099-09-09 00:00:00",
    "goods_brief_text" : "李林老师告诉你，学习周易并不难~",
    "stock_deduct_mode" : 0,
    "video_img_url" : "",
    "parent_app_id" : "",
    "img_url_compressed" : "http:\/\/wechatapppro-1252524126.file.myqcloud.com\/app70XpgD776392\/image\/compress\/414320928l5j1s61c0rws.jpg",
    "distribution_pattern" : 0,
    "has_distribute" : 0,
    "period_value" : "-1",
    "is_password" : 0,
    "goods_name" : "李林老师教你 · 三小时学会数字能量（23合集）",
    "is_ignore" : 0,
    "is_goods_package" : 0,
    "is_display" : 1,
    "is_forbid" : 0,
    "resource_id" : "p_60199d17e4b0f176aecf76dd",
    "limit_purchase" : ,
    "show_stock" : 0,
    "audit_user_id" : ,
    "goods_img" : [
      "https:\/\/wechatapppro-1252524126.file.myqcloud.com\/app70XpgD776392\/image\/b_u_5dca02dff31fc_JG03RLWm\/l5j1s61c0rws.jpg"
    ],
    "has_stock" : 0,
    "spu_id" : "p_60199d17e4b0f176aecf76dd",
    "goods_detail_text" : ""
  }
}
$done({body : JSON.stringify(name1908)});
