// 浮动按钮交互
$(".float-btn").on("click", function () {
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
$(".modal-bg").on("click", function () {
	$(".modal-main").hide();
})
$(".modal-main .no").on("click", function () {
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
// 搜索框
$("#search-delete").on("click", function () {
		$(this).siblings("input").val("");
	})
	// 文本域字数限定
$(function () {
	$("#remarks_box").on("input", function () {
		var markNum = document.getElementById('remarks_box').value.length;
		document.getElementById("text-num").textContent = markNum;
	})
})

// 读取图片并回显
function showPreview(source) {
	var file = source.files[0];
	if (window.FileReader) {
		var fr = new FileReader();
		fr.readAsDataURL(file);
		fr.onloadend = function (e) {
			document.getElementById("js_uploadImg").src = e.target.result;
		};
		
	}
}