$(function () {
    var _item;
    var adminlist = {
        // 管理员ID
        adminId: '1',
        // 入口函数
        init: function () {
            this.deleteAdmin();
            this.deleteTrue();
        },
        // 点击删除执行
        deleteAdmin: function () {
            var _this = this;
            $(".js-remove-admin").on("click", function () {
                _item=$(this).parents('.admin')
                _this.adminId=$(this).data('admin-id');
                $("#delete-modal").show();
            })
        },
        // 点击确认删除执行
        deleteTrue: function () {
            var _this = this;
            $(".modal-main .yes").on("click", function () {
                // ajax请求
                // 成功后执行
                $("#delete-modal").hide();
                _item.remove();
            })
        }
    }

    adminlist.init();
})