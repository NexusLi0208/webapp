var urlIp = 'http://10.1.0.27:8882/whoami-meeting/meetingInfo';
var signup = new Vue({
	el: '#chMeet-list',
	data: {
		chmeetlist: {}

	},
	ready: function () {
			var meeId = localStorage.getItem("meeId");
			var _this = this;
			$.ajax({
				url: urlIp + '/selectSubMeeByParentId',
				data: JSON.stringify({
					"meeParentId": meeId
				}),
				type: "POST",
				contentType: 'application/json',
				success: function (data) {
					if (data.code == 6360) {
						_this.chmeetlist = data.list;
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
		creatChMeet: function () {
			window.location.href = "creatmeet-success.html"
		},
		removeItem: function (index, e) {
			//ajax
			var _this = this;
			var deletBtn = e.currentTarget;
			var chMeeId = $(deletBtn).parents('.meet-item').attr('data-chMeeId');
			$.ajax({
				url: urlIp + '/deleteSub',
				data: JSON.stringify({
					"meeId": chMeeId
				}),
				type: "POST",
				contentType: 'application/json',
				success: function (data) {
					if (data.code == 6350) {
						console.log(data.msg);
						_this.chmeetlist.splice(index, 1);
					} else {
						console.log('删除失败');
					}
				},
				error: function () {
					alert('请求失败');
				}
			})

		}
	}
});