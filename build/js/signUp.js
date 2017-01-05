var signup = new Vue({
	el: '#sign-main',
	data: {
		formBox: {
			basic: true,
			tiket: false,
			meetlist: false,
			remark: false
		},
		chmeetBtn: true,
		itemText: {
			tiketTxt: '请填写',
			meetTxt: '请选择',
			remarkTxt: '请填写'
		},
		userInfo: JSON.parse(sessionStorage.getItem('user')),
		meetroomInfo: JSON.parse(sessionStorage.getItem('existMeeHall')),
		selcetmeeInfo: JSON.parse(sessionStorage.getItem('selectmeeinfo')),
		meetInfo: ''
	}

	,
	ready: function () {
		var _this = this;
		$.ajax({
			url: meetingpath + '/meetingInfo/selectSubMeeByParentId',
			data: JSON.stringify({
				"meeParentId": _this.selcetmeeInfo.meeId
			}),
			type: "POST",
			contentType: 'application/json',
			success: function (data) {
				if (data.code == 6360) {
					_this.meetInfo = data;
					if (_this.meetInfo.list == 0) {
						_this.chmeetBtn = false;
					}
					else{
						_this.chmeetBtn = true;
					}

				} else {
					console.log('查询失败');
				}
			},
			error: function () {
				alert('请求失败');
			}
		})

		$('input[type=text],input[type=tel],select').each(function () {
			if (this.value != '' && this.value != 0) {
				this.setAttribute("disabled", "disabled");
			}
		})

	},
	//	过滤器
	filters: {
		select: {
			read: function (value) {
				{
					if (value == "") {
						return 0;
					}
					return value;
				}

			},
			write: function (value) {
				return value;
			}
		}
	}
	//方法
	,
	methods: {
		//  选择发票
		selectTiket: function () {
			this.formBox.tiket = true;
			this.formBox.basic = false;
		},
		//  回基本信息
		go_basic: function () {
			this.formBox.tiket = false;
			this.formBox.basic = true;
			this.formBox.meetlist = false;
			this.formBox.remark = false;
		},
		//  保存发票信息
		saveTiket: function () {
			var _this = this,
				inputIndex = 0,
				inputList = $('.js-tiket-info').find('input');
			inputList.each(function () {
				if (this.value != '') {
					inputIndex++;
				}
			})
			if (inputIndex > 0) {
				_this.itemText.tiketTxt = "已填写"
			} else {
				_this.itemText.tiketTxt = "请填写"
			}
			this.go_basic();
		},
		//  选择子会议
		selectMeet: function () {
			this.formBox.basic = false;
			this.formBox.meetlist = true;
		},
		saveMeet: function () {
			var _this = this,
				inputIndex = $('.js-meetlist-info').find('input:checked').size();
			if (inputIndex > 0) {
				_this.itemText.meetTxt = "已选择"
			} else {
				_this.itemText.meetTxt = "请选择"
			}
			this.go_basic();
		},
		selectRemark: function () {
			this.formBox.basic = false;
			this.formBox.remark = true;
		},
		remarkNum: function () {
			var markNum = document.getElementById('remarks_box').value.length;
			document.getElementById("text-num").textContent = markNum;
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
		// 会议报名
		formSubmit: function () {
			//需要存为数组的表单name值
			var arrname = 'submeetingId';

			var data = $("#sign_up_main").serializeJson(arrname);
			console.log(JSON.stringify(data));
			// console.log(JSON.stringify(data));
			$.ajax({
				url: userpath + 'signup/set',
				data: JSON.stringify(data),
				type: "POST",
				contentType: 'application/json',
				success: function (data) {
					if (data.status == 0) {
						window.location.href = "sign-up-success.html"
					} else if (data.status == 6400) {
						alert('报名失败');
					} else {
						alert('服务器不可用');
					}
				},
				error: function () {
					alert('请求失败');
				}
			})
		},
	}
});