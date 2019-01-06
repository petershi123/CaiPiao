currentDate = new Date()                   
	with (currentDate) {                   
		day=getDay()                   
		month=getMonth()+1                   
		this.document.write(getFullYear()+'年'+month+'月'+getDate()+'日')                   
	}                                     
currentDate = new Date()                   
	with (currentDate) {                   
 	youbi = new Array();                   
	youbi[0] = " 星期日 ";                   
	youbi[1] = " 星期一 ";                   
	youbi[2] = " 星期二 ";                   
	youbi[3] = " 星期三 ";                   
	youbi[4] = " 星期四 ";                   
	youbi[5] = " 星期五 ";                   
	youbi[6] = " 星期六 ";                   
	day=getDay()                   
	month=getMonth()+1                   
	this.document.write(youbi[(new Date()) . getDay()])                   
	}                                  
document.write('<font color=#3a6ea5>');               
document.write("<font id='clock'></font>");               
var now,hours,minutes,seconds,timeValue;               
function showtime(){               
	now = new Date();               
	hours = now.getHours();               
	minutes = now.getMinutes();               
	seconds = now.getSeconds();               
	timeValue = (hours >= 12) ? "下午 " : "上午 ";               
	timeValue += ((hours > 12) ? hours - 12 : hours) + ":";               
	timeValue += ((minutes < 10) ? "0" : "") + minutes + ":";               
	timeValue += ((seconds < 10) ? "0" : "") + seconds + "";               
	clock.innerHTML = timeValue;               
	setTimeout("showtime()",600);             
	}               
//showtime();               
document.write('</font>');   