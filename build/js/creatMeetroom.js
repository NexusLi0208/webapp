new Vue({
	el: '#creat-meetroom',
	data: {
		formBox: {
			basic: true,
			remark: false
		},
		itemText: {
			remarkTxt: '请填写'
		},
		modal: false,
		userInfo: userInfo = JSON.parse(sessionStorage.getItem("user"))
	}
	//	过滤器
	,
	ready: function () {
		$('input[type=text],input[type=tel],select').each(function () {
			if (this.value != '' && this.value != 0) {
				this.setAttribute("readonly", "readonly");
			}
		})
	},
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
		saveMeetroom1: function () {
			var data = $("#creatmeetroom_form").serializeJson();
			$.ajax({
					url: meetingpath + '/meetinghall',
					type: "POST",
					data: JSON.stringify(data),
					contentType: 'application/json',
					success: function (data) {
						console.log(data);
						sessionStorage.setItem('hallId', data.dataId);
						window.location.href = "person-creatMeetRoom-tep2.html"
					},
					error: function () {
						// 查询失败
					}
				})
			
		},
		getCodes: function () {
			var phoneNum = $("#phone").val();
			$.ajax({
				url: userpath + '/weixin/sendMsgToHasReg/' + phoneNum,
				type: "POST",
				contentType: 'application/json',
				success: function (data) {
					if (data.errcode == 0) {
						alert("已发送验证码")
					}
				},
				error: function () {
					alert("获取验证码失败")
				}
			})
		},
		saveMeetroom2: function () {
			var data = $("#creatmeetroom_form2").serializeJson();
			console.log(JSON.stringify(data))
			$('input').each(function () {
				if ($(this).val() == '') {
					alert('请补全信息')
					return false;
				}
			})
			$.ajax({
					url: userpath + '/weixin/createHallStep2',
					type: "POST",
					data: JSON.stringify(data),
					contentType: 'application/json',
					success: function (data) {
						console.log(data);
						sessionStorage.setItem('hallId', data.dataId);
						window.location.href = "creatmeetroom-success.html"
					},
					error: function () {
						// 查询失败
						alert("保存失败");
					}
				})
				// window.location.href="creatmeetroom-success.html"
		}
	}
});