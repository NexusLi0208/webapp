

 var urlIp = '';
 var signup=new Vue({
 	el: '#chMeet-list',
 	data: {
		 chmeetlist:[{
			 meetTitle:"习近平出席中央军委军队规模结构和力量编成改革工作会议 ",
			 meetTime:"2016-06-02"
		 },{
			 meetTitle:"广西都安:召开审议检察官入额推荐人选会议 ",
			 meetTime:"2016-06-07"
		 },{
			 meetTitle:"德国接任G20主席国:各方期待确保杭州峰会",
			 meetTime:"2016-06-08"
		 }]
 	}
 	//	过滤器
 	,
 	filters: {}
 	//方法
 	,
 	methods: {
        creatChMeet:function(){
            window.location.href="creatmeetroom-success.html"
        },
		 removeItem: function (index) {  
             this.chmeetlist.splice(index, 1);  
           }  
 	}
 });