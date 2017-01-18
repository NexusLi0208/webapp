$(function () {
    var _item;
    var adminlist = {
        // 管理员ID
        adminId: '1',
        // 入口函数
        init: function () {
            this.deleteAdmin();
            this.deleteTrue();
            this.inviteAdmin();
        },
        // 点击删除执行
        deleteAdmin: function () {
            var _this = this;
            $(".js-remove-admin").on("click", function () {
                _item = $(this).parents('.admin')
                _this.adminId = $(this).data('admin-id');
                $("#delete-modal").show();
            })
        },
        // 点击确认删除执行
        deleteTrue: function () {
            var _this = this;
            $("#delete-modal .yes").on("click", function () {
                // ajax请求
                // 成功后执行
                $("#delete-modal").hide();
                _item.remove();
            })
        },
        // 邀请管理员
        inviteAdmin: function () {
            $("#invite-admin").on("click", function () {
                $("#invite-modal").show();
            });
            $("#inviteTrue").on("click", function () {
                var slt = $("#selectRole").val();
                if (slt == 0) {
                    $.prompt("请选择角色")
                } else {
                }
            })
        }
    }

    adminlist.init();
})