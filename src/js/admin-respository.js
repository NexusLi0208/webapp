"use strict"
$(function () {
    var adminRespository = {
        init: function () {
            this.addItem();
            this.closeOperateModal();
            this.cliickItem();
            this.editItem();

        },
        // 点击类名
        cliickItem: function () {
            $(document).on('click', ".js-repositoryItem", function (e) {
                e.stopPropagation();
                $("#operate_modal").show();
            })
        },
        //   添加类
        addItem: function () {
            $("#addItem").on("click", function () {
                $("#addItemModal").show();
            })
        },
        // 修改类名
        editItem: function () {
            $(document).on("click",".js-editItem", function () {
                $("#editItemModal").show();
            })
        },
        closeOperateModal: function () {
            $("#js_closeModal").on("click", function () {
                $("#operate_modal").hide();
            })

        }
    }
    //    关闭点击主类的操作选择框

    adminRespository.init();
})