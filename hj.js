/*************************************

项目名称：hj
下载地址：
脚本作者：Lancex-A
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

*************************************
[rewrite_local]
^https://api.qianmoai.com/api/vip/v1/my url script-response-body https://raw.githubusercontent.com/Lancex-A/Rewrite/main/hj.js
[mitm]
hostname = api.qianmoai.com
*************************************
var Lancex-A = $response.body;
var obj = JSON.parse(Lancex-A);

if($request.url.indexOf("/api/vip/v1/my") != -1 {
  obj."is_bought" : true,
	obj."is_lifetime_vip" : true,
	obj."is_public_beta_trial_vip" : true
 }
Lancex-A = JSON.stringify(obj);
$done(Lancex-A);
