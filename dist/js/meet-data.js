$(".js-modal-btn").on("click", function (event) {
    event.preventDefault();
    var _this = this;
    $.affirm("是否要删除？", function () {
        $(_this).parents(".article-item").remove();
    })
})