		$(function () {
		    $("#remarks_box").on("input", function () {
		        var markNum = document.getElementById('remarks_box').value.length;
		        document.getElementById("text-num").textContent = markNum;
		    })
		})