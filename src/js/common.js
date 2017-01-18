//IOS激活伪类
$('body').on("touchstart", function () {})
// 浮动按钮交互
$(".float-btn").on("click", function () {
	var _this = $(this);
	var $menu = $(this).siblings(".float-menu-box");
	if ($menu.is(':hidden')) {
		_this.addClass("rotate45reg");
		$menu.show();
		_this.css("background", "#f87c17");
	} else {
		_this.removeClass("rotate45reg").addClass("rotate1");
		$menu.hide();
		_this.css("background", "#ffa53a");
	}
})
// 模态框
$(".modal-bg").on("click", function () {
	$(".modal-main").hide();
});
$(document).on("click", ".modal-main .no", function () {
	$(".modal-main").hide();
});
$(document).on("click", ".modal-bg", function () {
	$(".modal-main").hide();
	$("#prompt_modal,#affirm_modal").remove();
})
$(document).on("click", ".modal-main .know", function () {
	$("#prompt-modal").remove();

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
// 确认框
(function ($) {
	$.extend({
		// 确认框
		affirm: function (option, callback) {

			var _this = this;
			var modal = "<div class='modal-main' id='affirm_modal'>" +
				"<div class='modal-bg'></div>" +
				"<div class='modal-contant'>" +
				"<div class='modal-body'>" +
				"<p class='txt text-m'>" + option + "</p>" +
				"</div>" +
				"<div class='modal-footer'>" +
				" <button type='button' class='yes'>是</button>" +
				"<button type='button' class='no'>否</button>" +
				"</div>" +
				"</div>" +
				"</div>";
			$('body').append(modal);
			$(document).on("click", "#affirm_modal .yes", function () {
				if (callback) {
					callback();
				}
				$("#affirm_modal").remove();
				$(document).off("click", "#affirm_modal .yes");
			})
			$(document).on("click", "#affirm_modal .no", function () {
				$("#affirm_modal").remove();
			})
		},
		// 弹出框
		prompt: function (option, callback) {
			var modal = "<div class='modal-main' id='prompt_modal'>" +
				"<div class='modal-bg'></div>" +
				"<div class='modal-contant'>" +
				"<div class='modal-body'>" +
				"<p class='txt text-m'>" + option + "</p>" +
				"</div>" +
				"<div class='modal-footer'>" +
				"<button type='button' class='know'>知道了</button>" +
				"</div>" +
				"</div>" +
				"</div>";
			$('body').append(modal);
			$(document).on("click", "#prompt_modal .know", function () {
				if (callback) {
					callback();
				  $(document).off("click", "#prompt_modal .know");
				  $("#prompt_modal").remove();
				}
				else{
					$("#prompt_modal").remove();
				}
			})

		}
	})
}(jQuery));