'use strict'

var meetFuncSetting = {
    init: function () {
        this.addRight();
        this.removeRight();
        this.allSelect();
        this.allUnSelect();
    },
    addRight: function () {
        var _this = this;
        $(".choose").on("click", " li", function () {
            _this.id = $(this).data("right-id");
            console.log(_this.id);
            $(".choosed ul").append($(this));
            $(".choosed ul li[data-right-id=" + _this.id + "]").append("<span class='delBtn'></span>")
        })
    },
    // 移出权限
    removeRight: function () {
        var _this = this;
        $(".choosed").on("click", ".delBtn", function (event) {
            event.stopPropagation();
            _this.id = $(this).parents("li").data("right-id");
            console.log(_this.id);
            $(".choose ul").append($(this).parents("li"));
            $(".choose ul li[data-right-id=" + _this.id + "]").find(".delBtn").remove();

        })
    },
    // 全选
    allSelect: function () {
        $(".js-allSelect").on("click", function (e) {
            var $chooseItem = $(".choose ul li");
            if ($chooseItem.size()) {
                $chooseItem.each(function () {
                    $(this).append("<span class='delBtn'></span>").appendTo(".choosed ul");
                })
            } else {
                $.toastr("没有可选项");
            }

        })
    },
    //全不选
    allUnSelect: function () {
        $(".js-allUnSelect").on("click", function (e) {
            var $chooseItem = $(".choosed ul li");
            if ($chooseItem.size()) {
                $chooseItem.each(function () {
                    $(this).find(".delBtn").remove();
                    $(this).appendTo(".choose ul");
                })
            } else {
                $.toastr("没有可移出项");
            }

        })
    }
}
$(function () {
    meetFuncSetting.init();
})