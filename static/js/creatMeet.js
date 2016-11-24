 var urlIp = 'http://10.1.0.19:8080/deptmeeting';
 var CreatMeet = {
 	getPhone: function () {
 		$.ajax({
 			url: urlIp + '/meethall/1316546151',
 			type: "GET",
 			success: function (data) {
 				console.log(data);
 			}
 		})
 	},
 	creatMeet: function (_this) {
 		// 创建会议厅
 		var data = _this.serializeJson();
 		console.log(JSON.stringify(data));
 		$.ajax({
 			url: urlIp + '/meethall/new   ',
 			data: JSON.stringify(data),
 			type: "POST",
 			contentType: 'application/json',
 			async: true,
 			success: function (data) {
 				if (data.status == 200) {
 					alert('添加成功!');

 				} else if (data.status == 400) {
 					alert('添加失败');
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

 $(function () {
 	CreatMeet.getPhone();
 })

 $("#CreatMeet-form").submit(function (e) {
 	e.preventDefault();
 	CreatMeet.creatMeet($(this));

 })