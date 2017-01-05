$(function () {
    var creatRole = {
        id: '',
        deleteRoleID: '',
        init: function () {
            this.adminBack();
            this.userBack();
            this.cutPage1();
            this.cutPage2();
            this.addRight();
            this.removeRight();
            this.deleteRole();
            this.deleteTrue();
        },
        // 管理员角色下拉
        adminBack: function () {
            $(".arrowicon").click(function () {
                if ($(this).hasClass("rotate")) {
                    $(this).removeClass("rotate").addClass("rotate1");
                    $('.js-role-admin').slideDown(200);
                } else {
                    $(this).removeClass("rotate1").addClass("rotate");
                    $('.js-role-admin').slideUp(200);
                }

            })

        },
        // 点击删除
        deleteRole: function () {
            var _this = this;

            $(".js-delete-role").on("click", function () {
                _this.deleteItem = this;
                _this.deleteRoleID = $(this).parents(".form-group").data("role-id");
                $("#delete-modal").show();
            })
        },
        // 确认删除
        deleteTrue: function () {
            var _this = this;
            $("#delete-modal .yes").on("click", function () {
                //   点击的角色ID为  _this.deleteRoleID
                //ajax 删除请求
                /********************************** */
                // 删除成功后执行（或刷新页面）
                $(".form-group[data-role-id='" + _this.deleteRoleID + "']").remove();
                $("#delete-modal").hide();
            })
        },
        // 切换页面一
        cutPage1: function () {
            $(".js-saveRight").click(function () {
                $(".js-right-page1").show();
                $(".js-right-page2").hide();
            })
        },
        // 切换页面二
        cutPage2: function () {
            $(".js-set-right").click(function () {
                $(".js-right-page1").hide();
                $(".js-right-page2").show();
            })
        },
        // 用户角色下拉
        userBack: function () {
            $(".arrowicon1").click(function () {
                if ($(this).hasClass("rotate")) {
                    $(this).removeClass("rotate").addClass("rotate1");
                    $('.js-role-user').slideDown(200);
                } else {
                    $(this).removeClass("rotate1").addClass("rotate");
                    $('.js-role-user').slideUp(200);
                }

            })

        },
        // 添加权限
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
        }

    }

    creatRole.init();
})