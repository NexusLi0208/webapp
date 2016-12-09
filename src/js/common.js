// 浮动按钮交互
$(".float-btn").on("tap",function () {
	var _this=$(this);
	var $menu = $(this).siblings(".float-menu-box");
	if ($menu.is(':hidden')) {
		$menu.show();
		_this.css("background","#f87c17");
	} else {
		$menu.hide();
		_this.css("background","#ffa53a");
	}
})