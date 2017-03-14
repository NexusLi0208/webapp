$(function () {
    var funcList = {
        init: function () {
            this.addFunc();
            this.removeFunc();
        },
        // 添加权限
        addFunc: function () {
            var _this = this;
            $(".choose").on("click", " li", function () {
                _this.id = $(this).data("right-id");
                console.log(_this.id);
                $(".choosed ul").append($(this));
                $(".choosed ul li[data-right-id=" + _this.id + "]").append("<span class='delBtn'></span>")
            })
        },
        // 移出权限
        removeFunc: function () {
            var _this = this;
            $(".choosed").on("click", ".delBtn", function (event) {
                event.stopPropagation();
                _this.id = $(this).parents("li").data("right-id");
                console.log(_this.id);
                $(".choose ul").append($(this).parents("li"));
                $(".choose ul li[data-right-id=" + _this.id + "]").find(".delBtn").remove();

            })
        }

    }

    funcList.init();
})