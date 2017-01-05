
new Vue({
	el: '#vue_main',
	data: {
		meeList: {},
        meetInfo:'',
        hallInfo:''
	},
	ready: function () {
            var _this=this;
			this.meetInfo=JSON.parse(sessionStorage.getItem('meetInfo'));
            this.hallInfo=JSON.parse(sessionStorage.getItem('existMeeHall'));
			$.ajax({
				url: meetingpath + '/meetingInfo/selectMeeting',
				data: JSON.stringify({
					"hallId": this.hallInfo.hallId
				}),
				type: "POST",
				contentType: 'application/json',
				success: function (data) {
					if (data.code == 6360) {
                       _this.meeList=data.list;
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
       selectMeet:function(e){
		   var thisItem = e.currentTarget,
		   selectmeeID= $(thisItem).attr('data-meeId'),
           selectmeeName=$(thisItem).find('.meet-name').text(),
           selectmeeTime=$(thisItem).find('time').text(),
           selcetmeeinfo={"meeId":selectmeeID,"meeName":selectmeeName,"meeTime":selectmeeTime};
           sessionStorage.setItem('selectmeeinfo',JSON.stringify(selcetmeeinfo));
           window.location.href="meetroom-meetinfo.html"
       }
	}
});