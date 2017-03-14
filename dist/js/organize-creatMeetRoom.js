// 组织身份创建会议厅
$(function () {
    var og_creatMtrm = {
        init: function () {
            this.uploadCard1();
            this.uploadCard2();
            this.saveidCard();
            this.cutIdcard();
            this.cutAccredit();
        },
        // 选择身份证页面
        cutIdcard: function () {
            $(".js-cut-idCard").on("click", function () {
                $(".js-idCard-box").show().siblings().hide();
            });
        },
        // 切换授权书
        cutAccredit: function () {
            $(".js-cut-accredit").on("click", function () {
                $(".js-accredit-box").show().siblings().hide();
            });
        },
        // 上传正面身份证
        uploadCard1: function () {
            var _this = this;
            $("#idcard-upload1").on("change", function () {
                _this.uploadCard(this, "idcard_img1")
            })
        },
                // 上传反面身份证
        uploadCard2: function () {
            var _this = this;
            $("#idcard-upload2").on("change", function () {
                _this.uploadCard(this, "idcard_img2")
            })
        },

        uploadCard: function (source, imgID) {
            var file = source.files[0];
            if (window.FileReader) {
                var fr = new FileReader();
                fr.readAsDataURL(file);
                fr.onloadend = function (e) {
                    document.getElementById(imgID).src = e.target.result;
                };

            }
        },
        saveidCard: function () {
            var _this = this;
            $(".js-saveIdCard").on("click", function () {
                _this.backbasic();
            })
        },
        // 返回主页面
        backbasic: function () {
                $(".js-basic-box").show().siblings().hide();
            }
            // 上传反面身份证
    }
    og_creatMtrm.init();

})