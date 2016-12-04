$(function () {

			$('.begin-time').mobiscroll().datetime({
	        theme: "android-holo-light",     // Specify theme like: theme: 'ios' or omit setting to use default 
	        mode: "scroller",       // Specify scroller mode like: mode: 'mixed' or omit setting to use default 
	        display: "bottom", // Specify display mode like: display: 'bottom' or omit setting to use default 
	        lang: "zh",       // Specify language like: lang: 'pl' or omit setting to use default
	        minDate: new Date(),  // More info about minDate: http://docs.mobiscroll.com/2-16-1/datetime#!opt-minDate
	        maxDate: new Date(new Date().setMonth(new Date().getMonth() + 6)),   // More info about maxDate: http://docs.mobiscroll.com/2-16-1/datetime#!opt-maxDate
	        dateFormat:"yy-mm-dd",
	        timeFormat:"HH:ii",
	        stepMinute: 1  // More info about stepMinute: http://docs.mobiscroll.com/2-16-1/datetime#!opt-stepMinute
	    });

});

 var urlIp = '';
 var signup=new Vue({
 	el: '#creat-meet',
 	data: {
 		formBox: {
 			basic: true,
 			time: false,
 			remark: false
 		},
 		itemText: {
 			timeTxt: '请选择',
 			remarkTxt: '请填写'
 		},
		 modal:false
 	}
 	//	过滤器
 	,
 	filters: {}
 	//方法
 	,
 	methods: {
 		//  回基本信息
 		go_basic: function () {
 			this.formBox.basic = true;
 			this.formBox.time = false;
 			this.formBox.remark = false;
 		},
		 selectTime:function(){
			 this.formBox.basic = false;
 			 this.formBox.time = true;
		 },
 		//  保存时间
 		saveTime: function () {
 			var _this = this,
 				inputIndex = 0,
 				inputList = $('.js-meetTime-info').find('input');
 			inputList.each(function () {
 				if (this.value != '') {
 					inputIndex++;
 				}
 			})
 			if (inputIndex > 0) {
 				_this.itemText.timeTxt = "已选择"
 			} else {
 				_this.itemText.timeTxt = "请选择"
 			}
 			this.go_basic();
 		},
    //   备注
 		remarkNum: function () {
 			var markNum = document.getElementById('remarks_box').value.length;
 			document.getElementById("text-num").textContent = markNum;
 		},
		 	selectRemark: function () {
 			this.formBox.basic = false;
 			this.formBox.remark = true;
 		},
 		saveRemark: function () {
 			_this = this;
 			var markNum = document.getElementById('remarks_box').value;
 			if (markNum == '') {
 				_this.itemText.remarkTxt = '请填写';
 			} else {
 				_this.itemText.remarkTxt = '已填写';
 			}
 			this.go_basic();
 		},
		//  创建子会议
		childtrue:function(){
			window.location.href="ch-meet-list.html"
		},
		// 保存子会议
		saveChildMeet:function(){
             window.location.href="creatmeet-success.html"
		},
		//  不创建子会议
		 childfalse:function(){
			 window.location.href="creatmeet-success.html"
		 },

 		// formBox: function (_this) {
 		// 	// 会议报名
 		// 	var data = _this.serializeJson();
 		// 	console.log(JSON.stringify(data));
 		// 	$.ajax({
 		// 		url: urlIp + '/formBoxOne/firstStep',
 		// 		data: JSON.stringify(data),
 		// 		type: "POST",
 		// 		contentType: 'application/json',
 		// 		async: true,
 		// 		success: function (data) {
 		// 			if (data.code == 200) {
 		// 				userId = data.userId;
 		// 				$('.js_userId').val(userId);
 		// 				$('.action1').hide();
 		// 				$('.action2').show();
 		// 			}
 		// 		},
 		// 		error: function () {
 		// 			alert('请求失败');
 		// 		}
 		// 	})
 		// }
 	}
 });