
   //    点击删除
   $(".js-modal-btn").on("click", function (event) {
       var _this=this;
       $.affirm("确认要删除么", function () {
           $(_this).parents(".form-group").remove();
       })
   })