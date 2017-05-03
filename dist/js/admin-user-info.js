var $tiket_md = $("#tiket_md");
var $chmeet_md = $("#chmeet_md");
var $remark_md = $("#remark_md");
$(".js-tiket-on").on("click",function(){
    $tiket_md.show();
})
$(".js-chmeet-on").on("click",function(){
    $chmeet_md.show();
})
$(".js-remark-on").on("click",function(){
    $remark_md.show();
})
$(".modal-main .yes").on("click",function(){
    $(".modal-main").hide();
})