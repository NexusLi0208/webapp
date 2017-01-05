$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        freeMode: false
    });
    // $('.index-nav').css('width',$('body').css('width'));
})

var userInfo = JSON.parse(sessionStorage.getItem("user"));
new Vue({
    el: '#vue_main',
    data: {
        meetList: true,
    }
    //	过滤器
    ,
    ready: function () {
        if (userInfo == null) {
            alert("请先登录");
            window.location.href = "../login/login.html"
        }
    },
    filters: {

    }
    //方法
    ,
    methods: {
        select_meetroom: function () {
            var userId = userInfo.userId;
            $.ajax({
                url: meetingpath + '/meetinghall/user/' + userId,
                type: "GET",
                contentType: 'application/json',
                success: function (data) {
                    if (data.status == 6509) {
                        window.location.href = "../meetroom/no-meetRoom.html"
                    } else {
                        sessionStorage.setItem('existMeeHall', JSON.stringify(data));
                        window.location.href = "../meetroom/meet-room.html"
                    }
                },
                error: function () {
                    // 查询失败

                }
            })
        },
    }
});
var loading = false; //状态标记
$(".main-cantainer").infinite().on("infinite", function () {
    if (loading) return;
    loading = true;
    setTimeout(function () {
        for (var i = 0; i < 10; i++) {
            $(".meet-list").append("<a href='meet-func-list.html'><li class='meet-item'><div class='left'><img src='../../css/img/pic1@2x.png' alt='meetimg'></div><div class='right'><p class='meet-name'>淄博职业学院：三项机制成就大学生圆梦</p><time>2016-06-04</time></div></li></a>");
        }

        loading = false;
    }, 500); //模拟延迟
});