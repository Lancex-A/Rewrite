/*************************************

项目名称：易学
下载地址：
脚本作者：
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/app70xpgd776392.h5.xiaoeknow.com\/xe.transaction.ogw.calculate_price\/1.0.0 url script-response-body https://raw.githubusercontent.com/name1908/Rewrite/main/yixue.js


[mitm]
hostname = app70xpgd776392.h5.xiaoeknow.com
**************************************

var name1908 = JSON.parse($response.body);
{
  "data" : {
    "app_id" : "app70XpgD776392",
    "goods_list" : [
      {
        "activity_info" : {
          "team_buy_id" : "",
          "discount_price" : 0,
          "activity_type" : 0,
          "team_buy_task_id" : "",
          "team_buy_user_type" : 0,
          "team_num" : 0,
          "activity_id" : "",
          "coupon_discount" : 0
        },
        "spu_type" : "SPC",
        "count" : 1,
        "spu_id" : "p_60199d17e4b0f176aecf76dd",
        "sku_id" : "SKU_SPC_6215748862725tFBey37"
      }
    ],
    "virtual_coin_info" : {
      "amount" : 0,
      "discount" : 0,
      "wallet_type" : 0,
      "enough" : false
    },
    "collect_info" : {
      "collect_error" : "",
      "collect_switch" : false,
      "collect_type" : 0
    },
    "points_info" : {
      "available_points" : 0,
      "discount_price" : 0,
      "is_show_point" : false,
      "invalid_text" : "商家未开启积分抵现",
      "used_point" : 0,
      "is_available" : false,
      "is_use_integral" : 0
    },
    "price_info" : {
      "actual_shipment_fee" : 0,
      "original_shipment_fee" : 0,
      "virtual_coin_discount" : 0,
      "identity_discount" : 0,
      "activity_discount" : 0,
      "coupon_discount" : 0,
      "points_discount" : 0,
      "front_end_goods_price" :0,
      "front_end_team_buy_caption_discount" : 0,
      "final_price" : 0,
      "original_price" : 0,
      "promo_code_discount" : 0,
      "front_end_discount_price" : 0
    },
    "user_id" : "u_64fec8cb448f3_3Rae7FzOwO",
    "identity_info" : {
      "identity_user_type" : 1,
      "is_upgrade_svip" : true,
      "identity_id" : "",
      "identity_invalid_reason" : "",
      "is_show_svip" : true,
      "svip_discount" : 1,
      "identity_type" : -1
    },
    "hide_coupon" : false,
    "promo_code_info" : {
      "promo_code" : "",
      "min_charge" : 0,
      "style" : 0,
      "promo_code_discount" : 0,
      "can_use_promo_code" : false,
      "discount" : 0,
      "discount_limit" : 0,
      "batch_id" : ""
    },
    "token" : "6022e6f1eaa4458fb26907834a6d68ed",
    "coupon_info" : {
      "invalid" : [

      ],
      "recommended_coupons" : {
        "total" : 0,
        "list" : [

        ]
      },
      "selected_coupons" : {
        "total" : 0,
        "list" : [

        ]
      },
      "valid" : [

      ],
      "limited_svip" : true
    },
    "shipment_info" : {
      "actual_shipment_fee" : 0,
      "is_free_shipment" : false,
      "original_shipment_fee" : 0
    }
  },
  "msg" : "success",
  "code" : 0
}
$done({body : JSON.stringify(name1908)});
