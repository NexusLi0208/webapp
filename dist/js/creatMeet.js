var urlIp="http://10.1.0.19:8080/deptmeeting",CreatMeet={getPhone:function(){$.ajax({url:urlIp+"/meethall/1316546151",type:"GET",success:function(t){console.log(t)}})},creatMeet:function(t){var e=t.serializeJson();console.log(JSON.stringify(e)),$.ajax({url:urlIp+"/meethall/new   ",data:JSON.stringify(e),type:"POST",contentType:"application/json",async:!0,success:function(t){200==t.status?alert("添加成功!"):400==t.status?alert("添加失败"):500==t.status&&alert("服务器异常")},error:function(){alert("请求失败")}})}};$(function(){CreatMeet.getPhone()}),$("#CreatMeet-form").submit(function(t){t.preventDefault(),CreatMeet.creatMeet($(this))});