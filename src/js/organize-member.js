$(function () {
    var personMember = {
        init: function () {
            this.cutSelectrole();
            this.saveRole();
            this.delMember();
            this.delMemberdues();
            this.cutSelectdues();
        },
        //   删除组织信息
        delMember: function () {
            var callback = this.delMemberTrue;
            $(".js-delMember").on("click", function () {
                $.affirm("确认要删除么？", callback)
            })

        },
        // 确认删除
        delMemberTrue: function () {
            // 这里写删除的AJAX
            alert("删除组织成功");
        },
          //   删除组织会费信息
        delMemberdues: function () {
            var callback = this.delMemberduesTrue;
            $(".js-delMemberDues").on("click", function () {
                $.affirm("确认要删除么？", callback)
            })

        },
        // 确认删除
        delMemberduesTrue: function () {
            // 这里写删除的AJAX
            alert("删除组织会费信息成功");
        },
        // 切换选择角色
        cutSelectrole: function () {
            $(".js-cutSelectrole").on("click", function () {
                $(".page2").show().siblings().hide();
            })
        },
        // 切换选择选择会议
        cutSelectdues: function () {
            $(".js-cutSelectdues").on("click", function () {
                $(".page3").show().siblings().hide();
            })
        },
        // 保存角色
        saveRole: function () {
            $(".js-saveRole").on("click", function () {
                $(".page1").show().siblings().hide();
            })

        }
    }
    personMember.init();
})