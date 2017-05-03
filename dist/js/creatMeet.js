$(function () {
	$('.begin-time').mobiscroll().datetime({
		theme: "android-holo-light", // Specify theme like: theme: 'ios' or omit setting to use default 
		mode: "scroller", //效果
		display: "bottom", // 显示位置
		lang: "zh", //中文
		minDate: new Date(), //最小日期
		maxDate: new Date(new Date().setMonth(new Date().getMonth() + 6)), //最大日期
		dateFormat: "yy-mm-dd",
		timeFormat: "HH:ii",
		stepMinute: 1 // More info about stepMinute: http://docs.mobiscroll.com/2-16-1/datetime#!opt-stepMinute
	});

});

new Vue({
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
		modal: false,
		userInfo:'',
		hallInfo:'',
		meetInfo:''
	}
	//	过滤器
	,
	filters: {}
	//方法
	,
	ready:function(){
		this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
		this.hallInfo=JSON.parse(sessionStorage.getItem('existMeeHall'));
		this.meetInfo=JSON.parse(sessionStorage.getItem('meetInfo'));
	},
	methods: {
		//  回基本信息
		go_basic: function () {
			this.formBox.basic = true;
			this.formBox.time = false;
			this.formBox.remark = false;
		},
		selectTime: function () {
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
		childtrue: function () {
		       
			window.location.href = "ch-meet-list.html"
			//	
		

		},
		// 保存子会议
		saveChildMeet: function () {
				var data = $("#creatchmeet_form").serializeJson();
				console.log(data);
				$.ajax({
				url: meetingpath + '/meetingInfo/addSubMeeting',
				data: JSON.stringify(data),
				type: "PUT",
				contentType: 'application/json',
				success: function (data) {
					console.log(data.msg);
					if (data.code == 6310) {
						alert("创建成功");
					    window.location.href = "ch-meet-list.html"
					}
					else{
						alert('保存会议失败');
					}
				},
				error: function () {
					alert('请求失败');
				}
			})
		},
		//  不创建子会议
		childfalse: function () {
               	window.location.href = "creatmeet-success.html";
		},
		setTime:function(e){
			var obj=e.currentTarget;
            var obj_str=obj.value;
			var date=new Date(obj_str.replace(/-/g,'/')).getTime();
            $(obj).siblings('input').val(date);
		},
			// 创建会议
		greatmeet: function (callback) {
			var _this =this;
		
			var data = $("#creatmeet-form").serializeJson();
			    console.log(JSON.stringify(data));
			$.ajax({
				url:  meetingpath+'/meetingInfo/addMeeting',
				data: JSON.stringify(data),
				type: "PUT",
				contentType: 'application/json',
				success: function (data) {
					console.log(data);
					if (data.code == 6300) {
					  sessionStorage.setItem('meetInfo',JSON.stringify(data.meetingInfo));
					  _this.modal=true;
					}
					else{
						alert('保存会议失败');
					}
				},
				error: function () {
					alert('请求失败');
				}
			})
		}
	}
});