//表单格式化json
(function ($) {
	$.fn.serializeJson = function () {
		var serializeObj = {};
		var array = this.serializeArray();
		var str = this.serialize();
		$(array).each(function () {
			if (serializeObj[this.name]) {
				if ($.isArray(serializeObj[this.name])) {
					serializeObj[this.name].push(this.value);
				} else {
					serializeObj[this.name] = [serializeObj[this.name], this.value];
				}
			} else {
				serializeObj[this.name] = this.value;
			}
		});
		return serializeObj;
	};
})(jQuery)
// 验证码倒计时
var countdown = 60;
function getCode(obj) {
		var $obj = $(obj);
		if (countdown == 0) {
			$obj.removeAttr("disabled");
			$obj.text("获取验证码");
			countdown = 60;
			return;
		} else {

			$obj.text("重新发送(" + countdown + "S)");
			$obj.attr("disabled", "disabled")
			countdown--;
		}
		setTimeout(function () {
			getCode(obj)
		}, 1000)
	}
