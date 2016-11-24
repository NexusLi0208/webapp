 var urlIp = 'http://114.55.234.133:8070';
 var signUp = new Vue({
 	el: '#sign-main',
 	data: {
 		userId: '',
 		item: {},
 		items: []
 	}
 	//	过滤器

 	,
 	filters: {}
 	//方法
 	,
 	methods: {
 		signTep1: function (_this) {
 			// 会议报名
 			var data = _this.serializeJson();
 			console.log(JSON.stringify(data));
 			$.ajax({
 				url: urlIp + '/signUpOne/firstStep',
 				data: JSON.stringify(data),
 				type: "POST",
 				contentType: 'application/json',
 				async: true,
 				success: function (data) {
 					if (data.code == 200) {
 						userId = data.userId;
 						$('.js_userId').val(userId);
 						$('.action1').hide();
 						$('.action2').show();
 					}
 				},
 				error: function () {
 					alert('请求失败');
 				}
 			})
 		},
 		signTep2: function (_this) {
 			// 会议报名
 			var data = _this.serializeJson();
 			console.log(JSON.stringify(data));
 			$.ajax({
 				url: urlIp + '/signup/two',
 				data: JSON.stringify(data),
 				type: "POST",
 				contentType: 'application/json',
 				async: true,
 				success: function (data) {
 					if (data.code == 0) {
 						$('.action2').hide();
 						$('.action3').show();
 					}
 				},
 				error: function () {
 					alert('请求失败');
 				}
 			})
 		},
 		signTep3: function (_this) {
 			// 会议报名
 			var data = _this.serializeJson();
 			console.log(JSON.stringify(data));
 			$.ajax({
 				url: urlIp + '/save/info',
 				data: JSON.stringify(data),
 				type: "POST",
 				contentType: 'application/json',
 				async: true,
 				success: function (data) {
 					if (data.code == 200) {
 						alert('报名成功');
 					} else if (data.status == 400) {
 						alert('报名失败');
 					} else if (data.status == 500) {
 						alert('服务器异常')
 					}
 				},
 				error: function () {
 					alert('请求失败');
 				}
 			})
 		}
 	}
 });

 $("#action1").submit(function (e) {
 	e.preventDefault();
 	var selectItem = $('input[name=submeeIds]:checked').length;
 	if (selectItem < 2) {
 		alert('请至少选择两个分会议');
 	} else {
 		signUp.signTep1($(this));
 	}

 })

 $("#action2").submit(function (e) {
 	e.preventDefault();
 	signUp.signTep2($(this));
 })
 $("#action3").submit(function (e) {
 	e.preventDefault();
 	signUp.signTep3($(this));
 })