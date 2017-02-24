$(function () {
    var mtrmManage = {
        init: function () {
            this.addIntro();
            this.saveIntro();
            this.editName();
        },
        // 填写会议厅名称
        editName:function(){
            $(".js-mtrmName").on("click",function(){
                $("#mtrmName").show();
            })
        },
        // 填写简介
        addIntro: function () {
            $(".js-add-intro").on("click", function () {
                $(".mtrm-basic-box").hide();
                $(".mtrm-intro-box").show();
            })
        },
        // 保存简介
        saveIntro: function () {
            $(".js-save-intro").on("click", function () {
                $(".mtrm-basic-box").show();
                $(".mtrm-intro-box").hide();
            })
        }

    }
    mtrmManage.init();
})