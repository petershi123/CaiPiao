package
{
	import flash.display.Loader;
	import flash.display.MovieClip;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.TimerEvent;
	import flash.filesystem.File;
	import flash.filesystem.FileMode;
	import flash.filesystem.FileStream;
	import flash.media.Sound;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.text.TextField;
	import flash.utils.Timer;
	import flash.utils.clearTimeout;
	import flash.utils.setTimeout;
	
	public class MainView extends MovieClip
	{
		private var _main:_Main;
		private var endMc:MovieClip;
		private var selectPrizeMc:MovieClip;
		
		private var txt1:TextField;
		private var txt2:TextField;
		private var txt3:TextField;
		private var txt4:TextField;
		
		private var prizePos:Array=[{x:-79,y:-349},{x:27,y:-349},{x:132,y:-349},{x:238,y:-349},{x:343,y:-349}];
		private var resultArr:Array=[1,2,3,6,12];
		private var pshowArr:Array=new Array();
		
		private var timestopBo:Boolean;
		private var resultLoader:Loader;
		private var sound:Sound;
		public var playerHaoSound:Boolean = false;
		public var prizeSound:Boolean = true;
		
		private var prizeTimer:Timer;
		private var loader:Loader;
		
		private var _playBo:Boolean;	//是否开机
		//显示奖品
		private var prizeShowindex:uint;
		
		private var _isSelectPrizeBo:Boolean;		//是否正在抽奖
		private var _qihao:int;				//当前期号
		
		private var _num1:int;
		private var _num2:int;
		private var _num3:int;
		private var _num4:int;
		private var _num5:int;
		private var _num6:int;
		private var _num7:int;
		private var _num8:int;
		private var _num9:int;
		private var _num10:int;
		private var _num11:int;
		private var _num12:int;
		private var _num13:int;
		private var _num14:int;
		private var _num15:int;
		private var _num16:int;
		private var _num17:int;
		private var _num18:int;
		private var _dateLink:String;		//期号链接
		private var regetQihao:Boolean;
		
		public function MainView()
		{
			super();
		}
		public function init():void
		{
			_main=new _Main();
			this.addChild(_main);
			//_main.x=-5;
			endMc			=_main.getChildByName("endMc") as MovieClip;
			selectPrizeMc	=_main.getChildByName("selectPrizeMc") as MovieClip;
			
			txt1=_main.getChildByName("txt1") as TextField;
			txt2=_main.getChildByName("txt2") as TextField;
			txt3=_main.getChildByName("txt3") as TextField;
			txt4=_main.getChildByName("txt4") as TextField;
			
			endMc.visible=false;
			// sound=new Sound(new URLRequest("Date/music.mp3"));
			// sound.play(0,1);
			selectPrizeMc.visible=false;
			selectType();
		}
		private var isOutLinkBoo:Boolean;
		/**
		 * 选择类型
		 * **/
		private function selectType():void
		{
			var urlloader:URLLoader=new URLLoader();
			urlloader.load(new URLRequest(CaiPiao._preURL+"/Soft/link.xml"));	//CaiPiao._preURL+"/blt168/link.xml"));
			urlloader.addEventListener(Event.COMPLETE,			complete);
			urlloader.addEventListener(IOErrorEvent.IO_ERROR,	onIOError);
			function complete(evt:Event):void
			{
				var _xml:XML=new XML(evt.currentTarget.data as String);
				if(""!=String(_xml.link.@src))
				{
					_dateLink=String(_xml.link.@src);
					isOutLinkBoo = true;
				}
				else
				{
					_dateLink=CaiPiao._preURL+"/getqi.aspx?type=1";
					isOutLinkBoo = false;
				}
				_main.addEventListener(Event.ENTER_FRAME,	onShowHandler);
			}
			function onIOError(err:IOErrorEvent):void
			{
				_dateLink=CaiPiao._preURL+"/getqi.aspx?type=1";
				isOutLinkBoo = false;
				_main.addEventListener(Event.ENTER_FRAME,	onShowHandler);
			}
		}
		
		//需要判断是否在抽奖中
		private function getPrizeQiHao():void
		{
			var urlloader:URLLoader=new URLLoader();
			if(isOutLinkBoo)
			{
				urlloader.load(new URLRequest(_dateLink+"?n=0&a="+Math.random()));
			}
			else
			{
				urlloader.load(new URLRequest(_dateLink));
			}
			
			urlloader.addEventListener(Event.COMPLETE,			complete);
			urlloader.addEventListener(IOErrorEvent.IO_ERROR,	onIOError);
			function complete(evt:Event):void
			{
				var str:String = evt.currentTarget.data as String;
				if(isOutLinkBoo)
				{
					var index:int = str.indexOf("\r",0);
					str = str.substr(0,index);
				}
				str=str.replace(/qi=/,"");
				str=str.replace(/&hao=/,",");
				str=str.replace(/-/g,",");
				var arr:Array=str.split(",") as Array;
				if(int(arr[0])%100 == 50)
				{
					_qihao = int(arr[0]) + 51;
				}
				else
				{
					if(isOutLinkBoo)
					{
						_qihao = int(arr[0]);
					}
					else
					{
						_qihao = int(arr[0]) + 1
					}
				}
				resultArr = [];
				for(var i:int=1;i<arr.length;i++)
				{
					resultArr.push(arr[i]);
				}
			}
			function onIOError(err:IOErrorEvent):void
			{
				trace(err.toString());
				
			}
		}
		
		/**
		 * 获取期号
		 * 
		 * */
		private function getQiHao():void
		{
			_num1=338+int(Math.random()*100);
			_num2=3524+int(Math.random()*1000);
			_num3=7660+int(Math.random()*1000);
			_num4=24648+int(Math.random()*10000);
			_num5=1788+int(Math.random()*1000);
			_num6=456+int(Math.random()*100);
			_num7=3+int(Math.random()*10);
			_num8=140+int(Math.random()*100);
			_num9=114+int(Math.random()*100);
			_num10=123+int(Math.random()*100);
			_num11=3+int(Math.random()*10);
			_num12=3+int(Math.random()*1000);
			_num13=20+int(Math.random()*10);
			_num14=4+int(Math.random()*10);
			_num15=20+int(Math.random()*50);
			_num16=120+int(Math.random()*100);
			_num17=1120+int(Math.random()*1500);
			_num18=20000+int(Math.random()*10000);
			
			resultArr=new Array();
			getlinkHao();
		}
		private function getlinkHao():void
		{
			var urlloader:URLLoader=new URLLoader();
			if(isOutLinkBoo)
			{
				urlloader.load(new URLRequest(_dateLink+"?n=0&a="+Math.random()));
			}
			else
			{
				urlloader.load(new URLRequest(_dateLink));
			}
			
			urlloader.addEventListener(Event.COMPLETE,			complete);
			urlloader.addEventListener(IOErrorEvent.IO_ERROR,	onIOError);
			function complete(evt:Event):void
			{
				var str:String=evt.currentTarget.data as String;
				if(isOutLinkBoo)
				{
					var index:int = str.indexOf("\r",0);
					str = str.substr(0,index);
				}
				str=str.replace(/qi=/,"");
				str=str.replace(/&hao=/,",");
				str=str.replace(/-/g,",");
				var arr:Array=str.split(",") as Array;
				if(int(arr[0])%100 == 50)
				{
					_qihao = int(arr[0]) + 51;
				}
				else
				{
					if(isOutLinkBoo)
					{
						_qihao = int(arr[0]);
					}
					else
					{
						_qihao = int(arr[0]) + 1
					}
				}
				resultArr = [];
				for(var i:int=1;i<arr.length;i++)
				{
					resultArr.push(arr[i]);
				}
				if(null!=prizeTimer)
				{
					prizeTimer.start();
				}
				txt3.htmlText="第  <font color=\"#FFFF00\">"+_qihao+"</font>  期";
			}
			function onIOError(err:IOErrorEvent):void
			{
				trace(err.toString());
			}
		}
		private function onPrizeShowHandler(evt:TimerEvent):void
		{
			showPrize();
		}
		private function onShowHandler(evt:Event):void
		{
			var year:Number;
			var month:Number;
			var date:Number;
			var day:Number;
			var hour:Number;
			var minute:Number;
			var second:Number;
			var nowdate:Date;
			nowdate = new Date();
			nowdate.setTime(nowdate.getTime() + CaiPiao.timeOffset);
			year	= nowdate.getFullYear();
			month	= nowdate.getMonth()+1;
			date 	= nowdate.getDate();
			day		= nowdate.getDay();
			hour	= nowdate.getHours();
			minute	= nowdate.getMinutes();
			second	= nowdate.getSeconds();
			
			showTimeAndOther(year,month,date,day,hour,minute,second);
		}
		private function showTimeAndOther(year:Number,month:Number,date:Number,day:Number,hour:Number,minute:Number,second:Number):void
		{
			var hourstr:String;
			var minutestr:String;
			var secondstr:String;
			
			var time:int;
			var leftTime:int;	//以秒为单位
			var num:int=hour*60+minute-9*60;
			if(num<0)
			{
				time=0;
				leftTime=0;
			}
			else if(num>=0 && num<10)
			{
				time=1;
				leftTime=(9-num)*60+60-second;
			}
			else
			{
				time=int((num-10)/15+1)+1;
				leftTime=(14-(num-10)%15)*60+60-second;
			}
			
			if((hour<9) || (hour>21) || ((hour==21) && (minute>30)))	//停服了
			{
				_playBo=false;
				//停
				if(endMc.visible==false)
				{
					endMc.visible=true;
				}
				if(loader!=null)
				{
					loader.unload();
					loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,	loadComplete);
					prizeTimer.stop();
					prizeTimer.removeEventListener(TimerEvent.TIMER,	onPrizeShowHandler);
					loader=null;
					prizeTimer=null;
				}
				return;
			}
			else
			{
				if(false==_playBo && _isSelectPrizeBo==false)
				{
					getQiHao();
					
					if(endMc.visible == true)
					{
						//endMc.visible=false;
						this.clearListener();
						this.parent.removeChild(this);
						offLine();
						//this = null;
						//endMc.visible=false;
					}
					
					if(leftTime>5)
					{
						loader=new Loader();
						loader.contentLoaderInfo.addEventListener(Event.COMPLETE,	loadComplete);
						loader.y=132;
						loader.x=16;
						loader.load(new URLRequest("Date/pic.swf"));
						_main.addChild(loader);
					}
					prizeTimer=new Timer(64100);
					prizeTimer.addEventListener(TimerEvent.TIMER,	onPrizeShowHandler);
					_playBo=true;
				}
				//trace("leftTime = " + leftTime);
				if(leftTime == 60 && playerHaoSound == false)
				{
					sound=new Sound(new URLRequest("Date/oneMinute.mp3"));
					sound.play(0,1);
					playerHaoSound = true;
					setTimeout(function(){playerHaoSound = false;},10000);
				}
				else if(leftTime == 120 && playerHaoSound == false)
				{
					sound=new Sound(new URLRequest("Date/twoMinutes.mp3"));
					sound.play(0,1);
					playerHaoSound = true;
					setTimeout(function(){playerHaoSound = false;},10000);
				}
				else if(leftTime == 5 && playerHaoSound == false)
				{
					sound=new Sound(new URLRequest("Date/immediately.mp3"));
					sound.play(0,1);
					playerHaoSound = true;
					setTimeout(function(){playerHaoSound = false;},10000);
				}
			}
			var str:String='<font color="#FFFF00">'+year+'</font>年<font color="#FFFF00">'+month+'</font>月<font color="#FFFF00">'+date+'</font>日';
			txt1.htmlText=str;
			var strday:String;
			switch(day)
			{
				case 0:
					strday="日";
					break;
				case 1:
					strday="一";
					break;
				case 2:
					strday="二";
					break;
				case 3:
					strday="三";
					break;
				case 4:
					strday="四";
					break;
				case 5:
					strday="五";
					break;
				case 6:
					strday="六";
					break;
			}
			
			hourstr=(hour<10?("0"+hour):String(hour));
			minutestr=(minute<10?("0"+minute):String(minute));
			secondstr=(second<10?("0"+second):String(second));
			
			var str1:String='星期<font color="#FFFF00">'+strday+"   "+hourstr+":"+minutestr+":"+secondstr+'</font>';
			txt2.htmlText=str1;
			
			//如果正在抽奖，是显示日期时间
			if(_isSelectPrizeBo==true)
			{
				return;
			}
			//leftTime--;
			var dataStr:String;
			var datanum:int=datanumber(year,month,date);
			if(datanum<10)
			{
				dataStr="00"+datanum;
			}
			else if((datanum>=10) && (datanum<100))
			{
				dataStr="0"+datanum;
			}
			else dataStr=""+datanum;
			
			if(leftTime > 14*60 && _isSelectPrizeBo == false)
			{
				txt3.htmlText="第  <font color=\"#FFFF00\">"+(_qihao+1)+"</font>  期";
			}
			else if (leftTime < 13*60 && _isSelectPrizeBo == false)
			{
				if(regetQihao == false && _isSelectPrizeBo == false)
				{
					regetQihao = true;
					getPrizeQiHao();
				}
				txt3.htmlText="第  <font color=\"#FFFF00\">"+_qihao+"</font>  期";
			}
			else
			{
				txt3.htmlText="第  <font color=\"#FFFF00\">"+_qihao+"</font>  期";
			}
			
			if(_isSelectPrizeBo==false)
			{
				var lefttimeStr:String;
				lefttimeStr=((int(leftTime/60)<10)?"0"+int(leftTime/60):""+int(leftTime/60));
				var leftsecondStr:String;
				leftsecondStr=((int(leftTime%60)<10)?("0"+int(leftTime%60)):""+int(leftTime%60));
				txt4.htmlText="离本期开奖时间:<font color=\"#FFFF00\">"+lefttimeStr+":"+leftsecondStr+"</font>";
			}
			//剩余时间为0
			if(leftTime<2)
			{
				if(timestopBo==false)
				{
					hidePrize();
					clearTimeout(prizeShowindex);
					prizeTimer.reset();
					prizeTimer.stop();
					timestopBo=true;
					if((null!=loader) && _main.contains(loader))
					{
						loader.unload();
						_main.removeChild(loader);
						loader=null;
					}
					resultLoader=new Loader();
					resultLoader.contentLoaderInfo.addEventListener(Event.COMPLETE,  openPrizeHandler);
					resultLoader.addEventListener(IOErrorEvent.IO_ERROR,	onIOErrorHandler);
					resultLoader.load(new URLRequest("Date/prize.swf"));
					if(stage != null && stage.nativeWindow.displayState == "minimized")
					{
						haveboo = true;
					}
					//if(stage.nativeWindow.displayState == "min")maximized
					_main.addChild(resultLoader);
					resultLoader.x=0;
					resultLoader.y=132;
					stage.addEventListener("ResetGame",	reset);
					txt4.htmlText="离本期开奖时间:<font color=\"#FFFF00\">"+"00:00"+"</font>";
					_isSelectPrizeBo=true;
				}
			}
		}
		
		private function onIOErrorHandler(err:IOErrorEvent):void
		{
			trace(err.toString());
		}
		private function offLine():void
		{
			var urlloader:URLLoader = new URLLoader();
			urlloader.load(new URLRequest(CaiPiao._preURL+"/OffLine.aspx?user="+CaiPiao.userName));
			urlloader.addEventListener(Event.COMPLETE,			onComplete);
			urlloader.addEventListener(IOErrorEvent.IO_ERROR,	onError);
			function onComplete(evt:Event):void
			{
				
			}
			function onError(err:IOErrorEvent):void
			{
				
			}
		}
		
		private function reset(evt:Event):void
		{
			_num1=338+int(Math.random()*100);
			_num2=3524+int(Math.random()*1000);
			_num3=7660+int(Math.random()*1000);
			_num4=24648+int(Math.random()*10000);
			_num5=1788+int(Math.random()*1000);
			_num6=456+int(Math.random()*100);
			_num7=3+int(Math.random()*10);
			_num8=140+int(Math.random()*100);
			_num9=114+int(Math.random()*100);
			_num10=123+int(Math.random()*100);
			_num11=3+int(Math.random()*10);
			_num12=3+int(Math.random()*1000);
			_num13=20+int(Math.random()*10);
			_num14=4+int(Math.random()*10);
			_num15=20+int(Math.random()*50);
			_num16=120+int(Math.random()*100);
			_num17=1120+int(Math.random()*1500);
			_num18=20000+int(Math.random()*10000);
			
			isOutLinkBoo = resultLoader.content["isOtherPrize"];
			
			if(isOutLinkBoo)
			{
				var urlloader:URLLoader=new URLLoader();
				urlloader.load(new URLRequest(CaiPiao._preURL+"/Soft/link.xml"));	
				urlloader.addEventListener(Event.COMPLETE,			complete);
				urlloader.addEventListener(IOErrorEvent.IO_ERROR,	onIOError);
			}
			else
			{
				unloadComplete();
			}
			function complete(evt:Event):void
			{
				var _xml:XML=new XML(evt.currentTarget.data as String);
				if("" != String(_xml.link.@src))
				{
					_dateLink = String(_xml.link.@src);
					isOutLinkBoo = true;
				}
				else
				{
					_dateLink = CaiPiao._preURL+"/getqi.aspx?type=1";
					isOutLinkBoo = false;
				}
				unloadComplete()
			}
			function onIOError(err:IOErrorEvent):void
			{
				_dateLink = CaiPiao._preURL+"/getqi.aspx?type=1";
				isOutLinkBoo = false;
				unloadComplete();
			}
		}
		private function unloadComplete():void
		{
			getQiHao();
			
			resultLoader.unloadAndStop(true);
			_main.removeChild(resultLoader);
			resultLoader=null;
			
			_isSelectPrizeBo=false;
			timestopBo=false;
			loader=new Loader();
			loader.load(new URLRequest("Date/pic.swf"));
			loader.contentLoaderInfo.addEventListener(Event.COMPLETE,	loadComplete);
			_main.addChild(loader);
			loader.y=132;
			loader.x=16;
			prizeTimer.start();
		}
		
		private function openPrizeHandler(evt:Event):void
		{
			//resultLoader.content.width=stage.stageWidth-26;
			//resultLoader.content.height=stage.stageHeight-148;
			//resultLoader.content["resultArr"]=[1,2,3,4,5];
			//resultLoader.content["goPlay()"];
			resultLoader.content["qihao"] = _qihao;
			resultLoader.content["localDataLink"] = CaiPiao._preURL;
			resultLoader.content["isOpenSound"] = prizeSound;
			(evt.target.content).goPlay();
		}
		private function leap(year:int):int
		{
			if((year%4==0) && (year%100!=0) || (year%400==0))
				return 1;
			else return 0;
		}
		/*计算天数*/
		private function datanumber(year:int,month:int,day:int):int
		{
			var a:Array=[31,28,31,30,31,30,31,31,30,31,30,31];
			var b:Array=[31,29,31,30,31,30,31,31,30,31,30,31];
			var sum:int;
			if(leap(year))
			{
				for(var i:int=0;i<month-1;i++)
				{
					sum+=b[i];
				}
			}
			else
			{
				for(var j:int=0;j<month-1;j++)
				{
					sum+=a[j];
				}
			}
			sum+=day;
			return sum;
		}
		private function loadComplete(evt:Event):void
		{
			if(resultLoader!=null)
			{
				try{
					resultLoader.content["stopRandamShow()"];
					_main.removeChild(resultLoader);
					resultLoader=null;
				}
				catch(err:Error)
				{
					trace(err.toString());
				}
			}
			evt.currentTarget.content.width=1280-26;
			evt.currentTarget.content.height=760-148;
		}
		private function showPrize():void
		{
			for(var j:int=0;j<pshowArr.length;j++)
			{
				selectPrizeMc["numMc"+pshowArr[j]].visible=false;
				if(selectPrizeMc["numMc"+pshowArr[j]].currentFrame==3)
				{
					selectPrizeMc["numMc"+pshowArr[j]].gotoAndStop(1);
				}
			}
			pshowArr=new Array();
			for(var i:int=0;i<resultArr.length-1;i++)
			{
				if(int(resultArr[i])>0)
				{
					selectPrizeMc["numMc"+resultArr[i]].visible=true;
					pshowArr.push(resultArr[i]);
					trace("resultArr:"+resultArr[i]);
					selectPrizeMc["numMc"+resultArr[i]].x=prizePos[i].x;
					selectPrizeMc["numMc"+resultArr[i]].y=prizePos[i].y;
				}
			}
			if(int(resultArr[resultArr.length-1])>0)
			{
				selectPrizeMc["numMc"+resultArr[resultArr.length-1]].visible=true;
				selectPrizeMc["numMc"+resultArr[resultArr.length-1]].x=prizePos[resultArr.length-1].x;
				selectPrizeMc["numMc"+resultArr[resultArr.length-1]].y=prizePos[resultArr.length-1].y;
				selectPrizeMc["numMc"+resultArr[resultArr.length-1]].gotoAndStop(3);
				pshowArr.push(resultArr[resultArr.length-1]);
			}
			selectPrizeMc.qiTxt.text=String(_qihao-1);
			
			selectPrizeMc.shouTxt1.text=String(_num1);
			selectPrizeMc.shouTxt2.text=String(_num2);
			selectPrizeMc.shouTxt3.text=String(_num3);
			selectPrizeMc.shouTxt4.text=String(_num4);
			selectPrizeMc.shouTxt5.text=String(_num5);
			selectPrizeMc.shouTxt6.text=String(_num6);
			
			selectPrizeMc.zhongTxt1.text=String(_num7);
			selectPrizeMc.zhongTxt2.text=String(_num8);
			selectPrizeMc.zhongTxt3.text=String(_num9);
			selectPrizeMc.zhongTxt4.text=String(_num10);
			selectPrizeMc.zhongTxt5.text=String(_num11);
			selectPrizeMc.zhongTxt6.text=String(_num12);
			
			selectPrizeMc.moneyTxt1.text=String(_num13);
			selectPrizeMc.moneyTxt2.text=String(_num14);
			selectPrizeMc.moneyTxt3.text=String(_num15);
			selectPrizeMc.moneyTxt4.text=String(_num16);
			selectPrizeMc.moneyTxt5.text=String(_num17);
			selectPrizeMc.moneyTxt6.text=String(_num18);
			
			selectPrizeMc.visible=true;
			prizeShowindex=setTimeout(hidePrize,10000);
			_main.setChildIndex(selectPrizeMc,_main.numChildren-1);
			prizeTimer.reset();
			prizeTimer.stop();
		}
		private function hidePrize():void
		{
			prizeTimer.start();
			selectPrizeMc.visible=false;
		}
		private var statemode:String = "";
		private var haveboo:Boolean;
		public function onResize():void
		{
			if(statemode == "maximized" && stage.nativeWindow.displayState=="normal")
			{
				
			}
			else
			{
				if(resultLoader!=null && haveboo == true)
				{
					haveboo = false;
					stage.nativeWindow.maximize();
				}
			}
			/*trace(stage.nativeWindow.width,stage.nativeWindow.height);
			//_main.scaleX = stage.stageWidth/_main.width;
			//_main.scaleY = stage.stageHeight/_main.height;
			trace("_main.scaleX,_main.scaleY,_main.width,_main.height,stage.stageWidth,stage.stageHeight:"+_main.scaleX,_main.scaleY,_main.width,_main.height,stage.stageWidth,stage.stageHeight);
			if(resultLoader!=null)
			{
				_main.addChild(resultLoader);
				trace("resultLoader.content.scaleX,resultLoader.content.scaleY:"+resultLoader.content.scaleX,resultLoader.content.scaleY);
				resultLoader.scaleX = 1;
				resultLoader.scaleY = 1;
				//resultLoader.width = stage.stageWidth;
				//resultLoader.height = stage.stageHeight;
			}*/
		}
		public function clearListener():void
		{
			_main.removeEventListener(Event.ENTER_FRAME,		onShowHandler);
			if(prizeTimer != null)
			{
				prizeTimer.removeEventListener(TimerEvent.TIMER,	onPrizeShowHandler);
			}
			stage.removeEventListener("ResetGame",				reset);
			
		}
		
		public function unloadSWF():void
		{
			if(resultLoader!=null)
			{
				resultLoader.unloadAndStop(true);
				_main.removeChild(resultLoader);
				resultLoader=null;
			}
			
			if(loader!=null)
			{
				loader.unloadAndStop(true);
				loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,	loadComplete);
				loader=null;
			}
			
			if(prizeTimer!=null)
			{
				prizeTimer.stop();
				prizeTimer.removeEventListener(TimerEvent.TIMER,	onPrizeShowHandler);
				prizeTimer=null;
			}
			
		}
	}
}