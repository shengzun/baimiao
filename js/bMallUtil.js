
var BASE_URL = "http://127.0.0.1/";
/*
 * title:封装部分公共
 * by:Yan
 * time:2017-5-9 11:18:45
 * [方法列表]
 * myAjax:ajax封装；
 * showMsg:消息提示封装：
*/
jQuery.extend({
	myAjax: function (_type,_url,_data,_successFun,_errorFun) {
		_url = BASE_URL+_url;
		$.ajax({
		    type:_type,
		    url:_url,
		    data:_data,
		    dataType:"json",
		    success:function(json){_successFun(json)},
		    error:function(data){_errorFun(data)}
		});
		
	},
	showMsg: function (msgTyle,msgContent) {
		msgTyle = msgTyle.toLocaleUpperCase();
		if("WARNING"==msgTyle){
			alert("[警告]"+msgContent);
		}else if("ERROR"==msgTyle){
			alert("[错误]"+msgContent);
		}else{
			alert("[信息]"+msgContent);
		}
		
	}
}); 

/* 手机号校验
 * str:手机号
 * return：true/false
 * by:Yan
 * time:2017-5-9
 * */
function checkPhoneNum(str){
	var re = /^1\d{10}$/
	if (re.test(str)) {
			return true;
		} else {
			return false;
	    }
}
/* 电子邮箱校验
 * str:手机号
 * return：true/false
 * by:Yan
 * time:2017-5-9
 * */
function checkEmail(str){
	var str = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if (re.test(str)) {
		return true;
	} else {
		return false;
    }
}

