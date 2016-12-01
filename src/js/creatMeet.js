$(function () {
	var currYear = (new Date()).getFullYear();	
	var opt={};
	opt.date = {preset : 'date'};
	opt.datetime = {preset : 'datetime'};
	opt.time = {preset : 'time'};
	opt.default = {
		theme: 'android-ics light', //皮肤样式
		display: 'bottom', //显示方式 
		mode: 'scroller', //日期选择模式
		dateFormat: 'yyyy-mm-dd',
		lang: 'zh',
		showNow: true,
		nowText: "今天",
		startYear: currYear - 50, //开始年份
		endYear: currYear + 10 //结束年份
	};

	$(".begin-time").mobiscroll($.extend(opt['datetime'], opt['default']));

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
 		}
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
 		formBox: function (_this) {
 			// 会议报名
 			var data = _this.serializeJson();
 			console.log(JSON.stringify(data));
 			$.ajax({
 				url: urlIp + '/formBoxOne/firstStep',
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
 		}
 	}
 });