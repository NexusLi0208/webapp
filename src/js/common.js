// public javascript
//获取用户信息保存至sessionStrong
var userInfoUrl='http://10.1.0.26:8081/whoami/'
function getUserInfo(){
    var userinfo= JSON.parse(sessionStorage.getItem('userInfo'));
    var userId=userinfo.userId;
    $.ajax({
 				url: userInfoUrl + 'signup/select',
 				data:JSON.stringify({"userId":userId}),
 				type: "POST",
 				contentType: 'application/json',
 				success: function (data) {
 					if (data.status == 0) {
                         console.log('ok');
                         sessionStorage.setItem('userInfo',data.userinfo)
 					} else if (data.status == 6403) {
 						console.log('没有此用户信息');
 					} else {
 						console.log('查询失败');
 					}
 				},
 				error: function () {
 					alert('请求失败');
 				}
 			})
}
