// 浮动按钮交互
$(".float-btn").on("tap", function () {
		var _this = $(this);
		var $menu = $(this).siblings(".float-menu-box");
		if ($menu.is(':hidden')) {
			$menu.show();
			_this.css("background", "#f87c17");
		} else {
			$menu.hide();
			_this.css("background", "#ffa53a");
		}
	})
	// 模态框
$(".js-modal-btn").on("tap", function () {
	$(".modal-main").show();
})
$(".modal-bg").on("tap", function () {
	$(".modal-main").hide();
})
$(".modal-main .no").on("tap", function () {
		$(".modal-main").hide();
	})
	
	// 获取文件上传路径
$("#data_upload").on("change", function () {
	var fileName = getFileName(this.value);
	$(this).siblings('.form-text').text(fileName);
})

function getFileName(path) {
	var pos1 = path.lastIndexOf('/');
	var pos2 = path.lastIndexOf('\\');
	var pos = Math.max(pos1, pos2)
	if (pos < 0)
		return path;
	else
		return path.substring(pos + 1);
}