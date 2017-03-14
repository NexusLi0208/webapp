"use strict"
var adminVote = {
    init: function () {
        this.checkVoteIfo();
        this.deleteOnlineTheme();
        this.deleteOnlinePicCase();
        this.deleteOnlineTxtCase();
        this.deleteSceneCase();
    },
    //  查看案例投票详情
    checkVoteIfo: function () {
        $(".js_checkVoteInfo").on("click", function () {
            $("#vote-modal").show();
        })
    },
    //  网上投票--------------------------------------------------------------------
    // 删除主题
    deleteOnlineTheme: function () {
        $(document).on("click", ".js_deleteTheme", function () {
            $.affirm("确认要删除么？", function () {
                alert("删除成功");
            })
        })
    },
    // 删除图片案例
    deleteOnlinePicCase: function () {
        $(document).on("click", ".js-delPicCase", function () {
            $.affirm("确认要删除么？", function () {
                alert("删除成功");
            })
        })
    },
    //  删除文字案例
    deleteOnlineTxtCase: function () {
        $(document).on("click", ".js-delTxtCase", function () {
            $.affirm("确认要删除么？", function () {
                alert("删除成功");
            })
        })
    },
    //  删除现场案例
    deleteSceneCase: function () {
        $(document).on("click", ".js-delSceneCase", function () {
            $.affirm("确认要删除么？", function () {
                alert("删除成功");
            })
        })
    }

}
$(function () {
    adminVote.init();
})