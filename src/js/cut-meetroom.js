$(function () {
    var cutmeetroom = {
        init: function () {
            this.click();
            this.click1();
        },
        click: function () {
            $(".arrowicon").tap(function () {
                if ($(this).hasClass("rotate")) { //点击箭头旋转180度
                    $(this).removeClass("rotate").addClass("rotate1");
                    $('.js-mtrm-creat').show();
                }
                 else {
                    $(this).removeClass("rotate1").addClass("rotate"); //再次点击箭头回来
                    $('.js-mtrm-creat').hide();
                }

            })

        },
           click1: function () {
            $(".arrowicon1").tap(function () {
                if ($(this).hasClass("rotate")) { //点击箭头旋转180度
                    $(this).removeClass("rotate").addClass("rotate1");
                    $('.js-mtrm-admin').show();
                }
                 else {
                    $(this).removeClass("rotate1").addClass("rotate"); //再次点击箭头回来
                    $('.js-mtrm-admin').hide();
                }

            })

        }

    }

    cutmeetroom.init();

})