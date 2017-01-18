   var _this;
   //    点击删除
   $(".js-modal-btn").on("click", function (event) {
       _this = this;
       event.preventDefault();
       $(".modal-main").show();
   })
   //    确认删除
   $(".modal-main .yes").on("click", function () {
       $(".modal-main").hide();
       $(_this).parents(".article-item").remove();
   })