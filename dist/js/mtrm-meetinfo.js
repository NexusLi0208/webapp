
var aaa=new Vue({
	el: '#vue_main',
	data: {
		mtrmChlist:'true',
		chmeeList:{},
        meetInfo:'',
		selectmeeinfo:''
        //hallInfo:''
	},
	ready: function () {
            var _this=this;
			this.meetInfo=JSON.parse(sessionStorage.getItem('meetInfo'));
            this.selectmeeinfo=JSON.parse(sessionStorage.getItem('selectmeeinfo'));
                
			$.ajax({
				url: meetingpath + '/meetingInfo/selectSubMeeByParentId',
				data: JSON.stringify({
					"meeParentId": this.selectmeeinfo.meeId
				}),
				type: "POST",
				contentType: 'application/json',
				success: function (data) {
					if (data.code == 6360) {
					  console.log(data.list)
                       _this.chmeeList=data.list;
					} else {
					    console.log('查询失败');
					}
				},
				error: function () {
					alert('请求失败');
				}
			})
		}
		//	过滤器
		,
	filters: {
		getTime: {
			read: function (value) {
				{
					return new Date(parseInt(value)).toLocaleString().substr(0, 17);
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
		meetSignup:function(){
			window.location.href="../meet/meet-func-list.html"
		}
	}
});