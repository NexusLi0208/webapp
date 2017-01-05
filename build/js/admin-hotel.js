$(function () {
    var adminHotel = {
        init: function () {
            this.deleteHotel();
            this.delUserHotelInfo();
            this.delHotelRoom();
            this.cutSelectHotel();
            this.selectHotel();
        },
        // 切换选择酒店
        cutSelectHotel: function () {
            $(".js-cutHotel").on("click", function () {
                $(".page2").show().siblings().hide();
            })
        }, // 点击删除酒店信息
        deleteHotel: function () {
            var _this = this;
            $(".js-delHotel").on("click", function () {
                var callback = _this.deleteHotel_true;
                $.affirm("确认要删除该酒店信息么？", callback)
            })
        },
        deleteHotel_true: function () {
            //    确认删除酒店信息
            // 执行删除成功后
            $.prompt ("删除成功")
        },
        // 删除房间信息
        delHotelRoom: function () {
            var _this = this;
            $(".js-delhtrm").on("click", function () {
                var callback = _this.delHotelRoom_true;
                $.affirm("确认要删除该房间信息么？", callback)
            })
        },
        // 确认删除该酒店信息
        delHotelRoom_true: function () {
            // 执行删除成功后
            $.prompt ("删除成功");
        },
        // 点击删除用户酒店信息
        delUserHotelInfo: function () {
            var _this = this;
            $(".js-delUserHotel").on("click", function () {
                $.affirm("确定要删除用户酒店信息？", _this.delUserHotelInfo_true)
            })
        },
        // 确认删除用户酒店信息
        delUserHotelInfo_true: function () {
            $.prompt ("执行删除ajax成功！")
                // 执行ajax

        },
        // 选择酒店
        selectHotel: function () {
            $(".js-selectHotel").on("click", function () {
                var hotelId = $(this).attr("data-hote-Id");
                var hotelName = $(this).find(".name").text();
                $(".page1").show().siblings().hide();
                $(".js-cutHotel").attr("data-hotel-Id", hotelId).find(".form-text").text(hotelName);
            })
        }
    }
    adminHotel.init();
})