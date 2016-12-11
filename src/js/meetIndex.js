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
    }
    //	过滤器
    ,
    ready: function () {
       if(userInfo==null){
           alert("请先登录");
           window.location.href="../login/login.html"
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
                  if(data.status==6509){
                      window.location.href="../meetroom/no-meetRoom.html"
                  }
                  else{
                      sessionStorage.setItem('existMeeHall',JSON.stringify(data));
                      window.location.href="../meetroom/meet-room.html"
                  }
                },
                error: function () {
                    // 查询失败
                    
                }
            })
        }
    }
});