//表单格式化json
(function ($) {
	$.fn.serializeJson = function (arrlist) {
		var serializeObj = {};
		var array = this.serializeArray();
		$(array).each(function () {
			// 是否存在键名
			if (serializeObj[this.name]) {
				//    是否为数组
				if ($.isArray(serializeObj[this.name])) {
					serializeObj[this.name].push(this.value);
				} else {
					serializeObj[this.name] = [serializeObj[this.name], this.value];
				}
			} else if(this.name!="") {

					if (this.name == arrlist) {
						serializeObj[this.name] = [this.value];
					} else {
						serializeObj[this.name] = this.value;
					}
				


			}
		});
		return serializeObj;
	};
})(Zepto)
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
//  sildedown
(function ($) {
  $.fn.slideDown = function (duration) {    
    // get old position to restore it then
    var position = this.css('position');
    
    // show element if it is hidden (it is needed if display is none)
    this.show();
    
    // place it so it displays as usually but hidden
    this.css({
      position: 'absolute',
      visibility: 'hidden'
    });
 
    // get naturally height
    var height = this.height();
    
    // set initial css for animation
    this.css({
      position: position,
      visibility: 'visible',
      overflow: 'hidden',
      height: 0
    });
 
    // animate to gotten height
    this.animate({
      height: height
    }, duration);
  };
})(Zepto);