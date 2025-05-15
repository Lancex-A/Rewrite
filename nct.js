/*************************************

项目名称：gs
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

var name1908 = JSON.parse($response.body);
{
  "total": 0,
  "loadmore": false,
  "code": 0,
  "msg": "success",
  "reqId": "6115cfc3f5ec4d1c9c35bc9b6be71a6d",
  "data": {
    "userId": 56629081,
    "username": "9535164931_1747150193984",
    "avatar": "https://image-cdn.nct.vn/avatar/2023/06/13/t/k/r/6/1686637528839.png",
    "avatarMax": "https://image-cdn.nct.vn/avatar/2023/06/13/t/k/r/6/1686637528839_1000.png",
    "isVIP": true,
    "vipExpire": "2099-09-09",
    "fullName": "哈哈哈",
    "displayName": "哈哈哈",
    "listSongDefault": "0",
    "listVideoDefault": "0",
    "email": "85XXX033@qq.com",
    "loginUsername": "9535164931_1747150193984",
    "isShowUpdate": false,
    "cloudInfo": {
      "userId": 56629081,
      "totalPlaylist": 0,
      "totalVideo": 0,
      "totalSong": 0,
      "totalUpload": 0,
      "uploadSong": 0,
      "uploadVideo": 0,
      "favouriteSongImage": "",
      "totalFollowingArtist": 39,
      "cloudSize": "Unlimited",
      "folderDefaultId": "0",
      "folderDefaultPub": 1,
      "listPlaylist": [],
      "listVideo": [],
      "listSongUpload": []
    },
    "accessToken": {
      "jwtToken": "",
      "tokenExpiredAt": 0,
      "deviceId": "",
      "provider": "NCTCorp"
    },
    "balance": "0 Coins",
    "balanceNum": 0,
    "refId": "",
    "loginType": "nct",
    "userConfs": {},
    "pendantUrl": "",
    "zodiacName": "Cancer",
    "zodiacUrl": "https://image-cdn.nct.vn/user/zodiac/cancer.png",
    "createAge": 0,
    "shareUrl": "https://h5app.nhaccuatui.com/ssr/user/56629081/",
    "background": "",
    "bio": "",
    "gender": "-1",
    "birthday": "837360000000",
    "phoneNumber": "(+86)195XXX64931",
    "hasPwd": true,
    "createTime": 1747150193984,
    "listenTime": 666,
    "followerNum": 0,
    "followingNum": 39,
    "newUser": false
  },
  "profileId": "prod",
  "curTime": 1747313463011,
  "success": true
}
$done({body : JSON.stringify(name1908)});
