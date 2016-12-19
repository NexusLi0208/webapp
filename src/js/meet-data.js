   var _this;
   //    点击删除
   $(".js-modal-btn").on("tap", function () {
           _this = this;
           //field_id = $(this).parents(".form-group").data("field-id");
           $(".modal-main").show();
       })
       //    确认删除
   $(".modal-main .yes").on("tap", function () {
       $(".modal-main").hide();
       $(_this).parents(".article-item").remove();
   })