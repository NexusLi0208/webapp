
new Vue({
	el: '#vue_main',
	data: {
		selectmeeinfo:''
        //hallInfo:''
	},
	ready: function () {
            var _this=this;
			this.meetInfo=JSON.parse(sessionStorage.getItem('meetInfo'));
            this.selectmeeinfo=JSON.parse(sessionStorage.getItem('selectmeeinfo'));
		}
		//	过滤器
		,
	filters: {

	}
	//方法
	,
	methods: {
	
	}
});