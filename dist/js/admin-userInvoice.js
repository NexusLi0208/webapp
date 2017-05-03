$(function () {
    var userInvoice = {
        // 入口函数
        init: function () {
            this.delInvoice();
        },
        delInvoice: function () {
            var callback = this.deltrue;
            $(".js-del").on("click", function () {
                $.affirm("确定删除该用户发票信息么？",callback)
            })
        },
        deltrue: function () {
            // 这里写删除发票信息的方法和Ajax
        }
    }
    userInvoice.init();
})