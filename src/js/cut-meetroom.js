$(function () {
    var cutmeetroom = {
        init: function () {
            this.click();
            this.click1();
            this.judge();
        },
        click: function () {
            $(".arrowicon").click(function () {
                if ($(this).hasClass("rotate")) { //点击箭头旋转180度
                    $(this).removeClass("rotate").addClass("rotate1");
                    $('.js-mtrm-creat').slideDown();
                } else {
                    $(this).removeClass("rotate1").addClass("rotate"); //再次点击箭头回来
                    $('.js-mtrm-creat').slideUp();
                }

            })

        },
        click1: function () {
            $(".arrowicon1").click(function () {
                if ($(this).hasClass("rotate")) { //点击箭头旋转180度
                    $(this).removeClass("rotate").addClass("rotate1");
                    $('.js-mtrm-admin').slideDown();
                } else {
                    $(this).removeClass("rotate1").addClass("rotate"); //再次点击箭头回来
                    $('.js-mtrm-admin').slideUp();
                }

            })

        },
        // 判断是否有数据
        judge: function () {
            var infoNum = $(".js-mtrm-creat").find("li").size();
            var infoNum1 = $(".js-mtrm-admin").find("li").size();
            if (infoNum == 0) {
                $(".js-mtrm-creat").find(".noinfo").show();
            }
            if (infoNum1 == 0) {
                $(".js-mtrm-admin").find(".noinfo").show();
            }

        }

    }

    cutmeetroom.init();

})