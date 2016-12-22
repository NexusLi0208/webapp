$(function () {
    var adminHotel = {
        init: function () {
            this.deleteHotel();
            this.deleteHotel_true();
            this.delUserHotelInfo();
            this.delUserHotelInfo_true();
        },
        // 点击删除酒店信息
        deleteHotel: function () {
            $(".js-delHotel").on("click", function () {
                $("#del-hotelInfo").show();
            })
        },
        deleteHotel_true: function () {
            //    确认删除酒店信息
            $("#del-hotelInfo .yes").on("click", function () {
                // 执行ajax
            })
        },
        // 点击删除用户酒店信息
        delUserHotelInfo: function () {
            $(".js-delUserHotel").on("click", function () {
                $("#user-hotelinfo-modal").show();
            })
        },
        delUserHotelInfo_true: function () {
            // 确认删除用户酒店信息
            $("#user-hotelinfo-modal .yes").on("click", function () {
                // 执行ajax
            })
        }
    }
    adminHotel.init();
})