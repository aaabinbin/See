
$(document).ready(function(){

	if(2.5>window.devicePixelRatio>1.25){
        $('img').each(function(){
        	var src = $(this).attr("src").split(".");
        	var newSrc = src[0]+"@2x."+src[1];
        	$(this).attr('src',newSrc);
        });

        $(".per50").css({"width":"50%","height":"50%"});
    }

    if(window.devicePixelRatio>2.5){
        $('img').each(function(){
        	var src = $(this).attr("src").split(".");
        	var newSrc = src[0]+"@3x."+src[1];
        	$(this).attr('src',newSrc);
        });
    }

    var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	
	if(isiOS){
		$("body").css("font-family","黑体,微软雅黑");
		$("a").css("font-family","黑体,微软雅黑");
	}
	if(isAndroid){
		$("body").css("font-family","微软雅黑");
	}
});