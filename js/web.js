
/*
 * by:Yan
 * Time:2017-5-9 10:57:05
 * */
 function getYzCode(){
	var phoneNumber = $("#forgetPassPhone").val();
	phoneNumber = phoneNumber.trim()
	if(!checkPhoneNum(phoneNumber)){
		$.showMsg("warning","清输入正确的手机号");
	}else{
		$("#getYzCode").html("短信发送中");

		$.myAjax("post",
				"index/fdx.html",
				{"kz":"fdx","tel":phoneNumber,"k":"z"},
				function(dataJson){
					console.log(dataJson)
					},
				function(erroeMsg){
						alert("error")
						}
					);
		
		/*$.post("/index/fdx.html",{"kz":"fdx","tel":tel,"k":k},function(data){
			var objdata=eval("("+data+")");
			if(objdata.err=="Y"){
				setTimeout("yz()", 10);
			}else{
				alert(objdata.msg);
				$(".c1c_pastoo .dx").text("发送短信").css({"background":"#8f5bba","color":"#fff"});
			}
		})*/
	};
	
	
} 
 
 
 /*
  * by:hu tao
  * Time:2017-5-9 14:57:05
  * Code function:获取验证码
  * */
 $(".safe").click(function(e){
		var tel=$("#tel").val();
		debugger;
		if(tel.length!=11){
			alert("正确输入手机号！");
			$("#tel").focus();
			return false;
		}
		var k=$(this).attr("k");
		$("#getCode").text("短信发送中...").css({"background":"#eeeeee","color":"#cccccc"});
		$.myAjax(
			"post",
			"/index/fdx.html",
			{"kz":"fdx","tel":tel,"k":k},
			function(data){
			var objdata=eval(data);
			if(objdata.err=="Y"){
				setTimeout("yz()", 10);
			}else{
				$.showMsg("error","发送失败！");
				$("#getCode").text("获取验证码").css({"background":"#8f5bba","color":"#fff"});
			}
		})
	})
	
	var dxt=120;
	function yz(){
	  if(dxt<=0){
		$("#getCode").text("重发短信").css({"background":"#8f5bba","color":"white"});
	}else{
		$("#getCode").show();
		$("#getCode").text(dxt+"秒重新发送").css({"background":"#eeeeee","color":"#cccccc"});
		dxt=dxt-1;
		setTimeout("yz()",1000);
	}
}
 
	$("#pas").keydown(function(e){
		debugger;
		var ev = document.all ? window.event : e;
	    if(ev.keyCode==13){
		    $("#dr").trigger("click");
	    }
	})

$("#reg").click(function(e){
	 debugger;
		var tel=$("#tel");
		var yzm=$("#yzm");
		var pas=$("#pas");
	/*	var pas2=$("#pas2");*/
		var xy=$("#xy");
		if(tel.val().length!=11){
			alert("正确填写手机号!");
			tel.focus();
			return false;
		}
		if(yzm.val().length!=4){
			alert("正确验证码!");
			yzm.focus();
			return false;
		}
		if(pas.val().length<6 || pas.val().length>20){
			alert("正确填写密码!");
			pas.focus();
			return false;
		}
		/* if(pas.val()!=pas2.val()){
			alert("正确填写确认密码!");
			pas2.focus();
			return false;
		} */
		if($("#xy:checked").val()!=1){
			alert("请同意服务协议");
			return false;
		};
		$.myAjax( "post",
				  "/index/regxx.html",
				 {
			       "kz":"add",
			       "pas":pas.val(),
			       "tel":tel.val(),
			       "yzm":yzm.val()
			       },function(data){
			//alert(data);
			var objdata=eval(data);
			
			if(objdata.err=="Y"){
				alert('会员注册成功!');
				location.href='/';
				return false;
				}
			alert(objdata.msg);
		});	
	})	
	
	