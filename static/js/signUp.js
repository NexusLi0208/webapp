 var urlIp = '';
 new Vue({
 	el: '#sign-main',
 	data: {
 		formBox: {
 			basic: true,
 			tiket: false,
 			meetlist: false
 		},
		 itemText:{
			 tiketTxt:'请选择',
			 meetTxt:'请选择',
			 remarkTxt:'请填写'
		 }


 	}
 	//	过滤器

 	,
 	filters: {}
 	//方法
 	,
 	methods: {
 		selectTiket: function () {
 			this.formBox.tiket = true;
 			this.formBox.basic = false;
 			this.formBox.meetlist = false;
 		},
		 go_basic:function(){
           this.formBox.tiket = false;
 			this.formBox.basic = true;
 			this.formBox.meetlist = false;
		 },
 		saveTiket: function () {
			var _this=this,
 		    inputIndex = 0,
 			inputList = $('.js-tiket-info').find('input');
 			inputList.each(function () {
 				if (this.value!='') {
 					inputIndex++;
 				}
 			})
 			if (inputIndex > 0) {
 				_this.itemText.tiketTxt="已选择"
 			} else {
 				_this.itemText.tiketTxt="请选择"
 			}
			 this.go_basic();
 		},
 		selectMeet: function () {
 			this.formBox.tiket = false;
 			this.formBox.basic = false;
 			this.formBox.meetlist = true;
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
