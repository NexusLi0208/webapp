$(function () {
    var _item;
    var adminlist = {
        // 管理员ID
        adminId: '1',
        // 入口函数
        init: function () {
            this.deleteAdmin();
            this.inviteAdmin();
        },
        // 点击删除执行
        deleteAdmin: function () {
            var _this = this;
            $(".js-remove-admin").on("click", function () {
               $.affirm("确认要删除么？")
            })
        },
        // 邀请管理员
        inviteAdmin: function () {
            $("#invite-admin").on("click", function () {
                $("#invite-modal").show();
            });
        }
    }

    adminlist.init();
})