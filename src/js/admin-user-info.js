var $tiket_md = $("#tiket_md");
var $chmeet_md = $("#chmeet_md");
var $remark_md = $("#remark_md");
$(".js-tiket-on").on("tap",function(){
    $tiket_md.show();
})
$(".js-chmeet-on").on("tap",function(){
    $chmeet_md.show();
})
$(".js-remark-on").on("tap",function(){
    $remark_md.show();
})
$(".modal-main .yes").on("tap",function(){
    $(".modal-main").hide();
})