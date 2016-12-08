
var urlIp = 'http://10.1.0.25:8882/whoami-meeting/';
new Vue({
    el: '#vue_main',
    data: {
        userInfo : JSON.parse(localStorage.getItem("user"))
    }
    //	过滤器
    ,
    ready: function () {
        this.select_meetroom();
    },
    filters: {

    }
    //方法
    ,
    methods: {
         select_meetroom: function () {
            var userId = this.userInfo.userId;
            console.log(userId);
            $.ajax({
                url: urlIp + 'meetinghall/user/' + userId,
                type: "GET",
                contentType: 'application/json',
                success: function (data) {
                  if(data==null){
                      window.location.href="../meetroom/no-meetRoom.html"
                  }
                  else{
                      localStorage.setItem('existMeeHall',JSON.stringify(data));
                  }
                },
                error: function () {
                    // 查询失败
                }
            })
        }
    }
});