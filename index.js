//悬浮结构
window.onload = function () {
	var header = document.getElementsByClassName('header')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;//IE兼容
		if(st>169){
			header.style.position = 'fixed';
		}else{
			header.style.position = 'static';
		}
	}
}
//轮播效果
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	  	for(var attr in json){
	  		if(attr == 'opacity')
	  			var now = parseInt(getStyle(obj,attr)*100);
	  		else
	  			var now = parseInt(getStyle(obj,attr));//将字符串转换成数字
	  			var isStop = true;
	  			var speed = (json[attr]-now)/10;
	  			speed = speed>0?Math.ceil(speed):Math.floor(speed);
	  			var current = now+speed;
	  			if(attr == 'opacity')
	  				obj.style[attr] = current/100;
	  			else
	  				obj.style[attr] = current+"px";	
	  			if(json[attr] !== current){//!==同类型之间才会比较
		  			isStop = false;
		  		}
		}//for
		if(isStop){
		  	clearInterval(obj.timer);
			callback && callback();//回调函数
	  	}
	},10);	
}//animate
function getStyle(obj,style) {  
	if(obj.currentStyle) 
		return obj.currentStyle[style];  
	else 
		return getComputedStyle(obj)[style];  
}   