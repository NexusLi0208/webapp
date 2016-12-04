var urlIp = '';
 var signup=new Vue({
 	el: '#creat-meetroom',
 	data: {
 		formBox: {
 			basic: true,
 			remark: false
 		},
 		itemText: {
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
        nextTep:function(){
            window.location.href="person-creatMeetRoom-tep2.html"
        },
        saveMeetroom:function(){
            window.location.href="creatmeetroom-success.html"
        }
 	}
 });