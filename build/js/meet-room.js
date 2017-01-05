new Vue({
    el: '#vue_main',
    data: {
        userInfo: JSON.parse(sessionStorage.getItem("user")),
        hallInfo: JSON.parse(sessionStorage.getItem("existMeeHall")),
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
            $.ajax({
                url: meetingpath + '/meetinghall/user/' + userId,
                type: "GET",
                async: false,
                contentType: 'application/json',
                success: function (data) {
                    if (data == null) {
                        window.location.href = "../meetroom/no-meetRoom.html"
                    } else {
                        sessionStorage.setItem('existMeeHall', JSON.stringify(data));
                    }
                },
                error: function () {
                    // 查询失败
                }
            })
        },
        creatMeet:function(){
            sessionStorage.setItem('backMark',0);
            window.location.href="../meet/creatMeet.html"
        }
    }
});