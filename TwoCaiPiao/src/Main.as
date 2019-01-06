package
{
    import flash.display.*;
    import flash.events.*;
    import flash.external.ExternalInterface;
    import flash.media.Sound;
    import flash.net.*;
    import flash.net.InterfaceAddress;
    import flash.net.NetworkInfo;
    import flash.text.*;
    import flash.utils.*;
	/**
		快3v1彩票
	*/
    public class Main extends MovieClip
    {
        public var shuju:String;
        public var jgdx66:MovieClip;
        public var jg666:MovieClip;
        public var jg11:MovieClip;
        public var jg12:MovieClip;
        public var jg13:MovieClip;
        public var jg14:MovieClip;
        public var jg15:MovieClip;
        public var jg16:MovieClip;
        public var jgh11:MovieClip;
        public var jgh12:MovieClip;
        public var jgh13:MovieClip;
        public var jgh15:MovieClip;
        public var jgh16:MovieClip;
        public var jgh17:MovieClip;
        public var jgh14:MovieClip;
		
        public var openTime:Date = null;
        public var guanggao:MovieClip;
        public var jgh10:MovieClip;
        public var jg22:MovieClip;
        public var jg23:MovieClip;
        public var jg24:MovieClip;
        public var jg26:MovieClip;
        public var jg25:MovieClip;
        public var kaijiang:MovieClip;
        public var smallY:Object;
        public var myState:Object;
        public var jg555:MovieClip;
        public var urlloader:URLLoader;
        public var youshangjiao:MovieClip;
        public var jg444:MovieClip;
        public var jg33:MovieClip;
        public var jg35:MovieClip;
        public var newDatas:Array;
        public var jg34:MovieClip;
        public var jg36:MovieClip;
        public var newData:String;
        public var stayTimes:Object;
        public var url:URLRequest;
        public var jgdx11:MovieClip;
        public var leftTimeTF:TextField;
        public var jg333:MovieClip;
        public var smallX:Object;
        public var jg456:MovieClip;
        public var jg44:MovieClip;
        public var jg46:MovieClip;
        public var jg45:MovieClip;
        public var shujuzu:Array;
        public var currentTerm:TextField;
        public var zuoshangjiao:MovieClip;
        public var jgdx22:MovieClip;
        public var urlloader2:URLLoader;
        public var jg222:MovieClip;
        public var jg345:MovieClip;
        public var jg55:MovieClip;
        public var jg56:MovieClip;
        public var url2:URLRequest;
        public var jg3tx:MovieClip;
        public var jgdx33:MovieClip;
        public var jg111:MovieClip;
        public var jg234:MovieClip;
        public var jg66:MovieClip;
        public var jgsbth:MovieClip;
        public var jgh4:MovieClip;
        public var jgh5:MovieClip;
        public var jgh6:MovieClip;
        public var fs:SimpleButton;
        public var jgh9:MovieClip;
        public var jgdx44:MovieClip;
        public var jgh7:MovieClip;
        public var jgh8:MovieClip;
        public var jg123:MovieClip;
        public var currentTime:TextField;
        public var jgdx55:MovieClip;
		
		private var _interId:int = -1;
		
		public var currentTermNum:int;	// 当前的期数，即奖号对应的期数
		public var nextTermNum:int;		// 下一期的期数
		public var nowLeftTime:String;	//当前剩余时间
		public var thisOpenTime:Number = -1;//开启时间
		public var isOpenSound = true;	//声音开关
		public var server_ip:String = "http://gxks16.xhcs188.com/";//"http://kksf1688.mykcai.cn/";//
		
		public static var timeOffset:int;
		public var mainScene:Main;
		
        public function Main()
        {
			mainScene = this;
            addFrameScript(0, frame1, 1, this.frame2);
		}
		/**
		*	等待开奖界面
		*/
        function frame1()
        {
			Http.getFromServer(server_ip + Config.GETTIME+"?r="+Math.random(),callback);
			function callback(evt:Event):void
			{
				var timeStr:String = String(evt.target.data);
				var dateServer:Date = new Date(timeStr);
				var datalocal:Date = new Date();
				trace(timeStr,dateServer.time,datalocal.time);
				timeOffset = dateServer.getTime() - datalocal.getTime(); //-60*1000因为获取的时间快了一分钟-60*1000
				trace("timeOffset"+timeOffset);
				mainScene.url = new URLRequest(server_ip + Config.INFO + "?id=" + Math.random());
				mainScene.urlloader = new URLLoader();
				mainScene.myState = 0;
				mainScene.urlloader.addEventListener(Event.COMPLETE, mainScene.updateData);
				mainScene.urlloader.addEventListener(IOErrorEvent.IO_ERROR, mainScene.retry);
				mainScene.loadData();
				
				currentTime.autoSize = TextFieldAutoSize.LEFT;
				_isPlayOneSound = _isPlayReadySound = _isPlayTwoSound = false;
			}
		    
            stop();
        }
		
		// 更新上期数据
		public function updateData(param1:Event)
        {
			this.urlloader.removeEventListener(Event.COMPLETE, this.updateData);
			
            this.shuju = String(param1.target.data);
			this.shujuzu = this.shuju.split("\"");
			currentTermNum = int(this.shujuzu[19]);
			nextTermNum = int(this.shujuzu[183]);
			nextTermNum = (nextTermNum == currentTermNum?currentTermNum+1:nextTermNum);
            this.currentTerm.text = String(nextTermNum);
            this.guanggao.shangqijg.qishu.text = this.shujuzu[19];
            this.guanggao.shangqijg.sq1.numText.text = int(this.shujuzu[3]);
            this.guanggao.shangqijg.sq2.numText.text = int(this.shujuzu[7]);
            this.guanggao.shangqijg.sq3.numText.text = int(this.shujuzu[11]);
			
            if (this.shujuzu[3] == this.shujuzu[7] && this.shujuzu[7] == this.shujuzu[11])
            {
                this.guanggao.shangqijg.sq1.gotoAndStop(4);
                this.guanggao.shangqijg.sq2.gotoAndStop(4);
                this.guanggao.shangqijg.sq3.gotoAndStop(4);
            }
            else if (this.shujuzu[3] == this.shujuzu[7] && this.shujuzu[3] != this.shujuzu[11])
            {
                this.guanggao.shangqijg.sq1.gotoAndStop(3);
                this.guanggao.shangqijg.sq2.gotoAndStop(3);
                this.guanggao.shangqijg.sq3.gotoAndStop(2);
            }
            else if (this.shujuzu[3] == this.shujuzu[11] && this.shujuzu[3] != this.shujuzu[7])
            {
                this.guanggao.shangqijg.sq1.gotoAndStop(3);
                this.guanggao.shangqijg.sq2.gotoAndStop(2);
                this.guanggao.shangqijg.sq3.gotoAndStop(3);
            }
            else if (this.shujuzu[11] == this.shujuzu[7] && this.shujuzu[3] != this.shujuzu[11])
            {
                this.guanggao.shangqijg.sq1.gotoAndStop(2);
                this.guanggao.shangqijg.sq2.gotoAndStop(3);
                this.guanggao.shangqijg.sq3.gotoAndStop(3);
            }
            else
            {
                this.guanggao.shangqijg.sq1.gotoAndStop(1);
                this.guanggao.shangqijg.sq2.gotoAndStop(1);
                this.guanggao.shangqijg.sq3.gotoAndStop(1);
            }
            var _loc_2:int = 0;
            while (_loc_2 < 8)
            {
                this.guanggao.shangqijg["t" + _loc_2 + "1"].text = this.shujuzu[23 + 16 * _loc_2];
                this.guanggao.shangqijg["t" + _loc_2 + "2"].numText.text = this.shujuzu[27 + 16 * _loc_2];
                this.guanggao.shangqijg["t" + _loc_2 + "3"].numText.text = this.shujuzu[31 + 16 * _loc_2];
                this.guanggao.shangqijg["t" + _loc_2 + "4"].numText.text = this.shujuzu[35 + 16 * _loc_2];
                this.guanggao.shangqijg["t" + _loc_2 + "5"].text = int(this.shujuzu[27 + 16 * _loc_2]) + int(this.shujuzu[31 + 16 * _loc_2]) + int(this.shujuzu[35 + 16 * _loc_2]);
                if (this.shujuzu[27 + 16 * _loc_2] == this.shujuzu[31 + 16 * _loc_2] && this.shujuzu[27 + 16 * _loc_2] == this.shujuzu[35 + 16 * _loc_2])
                {
                    this.guanggao.shangqijg["t" + _loc_2 + "6"].text = "三同号";
                    this.guanggao.shangqijg["t" + _loc_2 + "7"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "8"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "2"].gotoAndStop(4);
                    this.guanggao.shangqijg["t" + _loc_2 + "3"].gotoAndStop(4);
                    this.guanggao.shangqijg["t" + _loc_2 + "4"].gotoAndStop(4);
                }
                else if (this.shujuzu[27 + 16 * _loc_2] != this.shujuzu[31 + 16 * _loc_2] && this.shujuzu[27 + 16 * _loc_2] != this.shujuzu[35 + 16 * _loc_2] && this.shujuzu[31 + 16 * _loc_2] != this.shujuzu[35 + 16 * _loc_2])
                {
                    this.guanggao.shangqijg["t" + _loc_2 + "6"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "7"].text = "三不同号";
                    this.guanggao.shangqijg["t" + _loc_2 + "8"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "2"].gotoAndStop(1);
                    this.guanggao.shangqijg["t" + _loc_2 + "3"].gotoAndStop(1);
                    this.guanggao.shangqijg["t" + _loc_2 + "4"].gotoAndStop(1);
                }
                else if (this.shujuzu[27 + 16 * _loc_2] == this.shujuzu[31 + 16 * _loc_2] && this.shujuzu[31 + 16 * _loc_2] != this.shujuzu[35 + 16 * _loc_2])
                {
                    this.guanggao.shangqijg["t" + _loc_2 + "6"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "7"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "8"].text = "二同号";
                    this.guanggao.shangqijg["t" + _loc_2 + "2"].gotoAndStop(3);
                    this.guanggao.shangqijg["t" + _loc_2 + "3"].gotoAndStop(3);
                    this.guanggao.shangqijg["t" + _loc_2 + "4"].gotoAndStop(2);
                }
                else if (this.shujuzu[27 + 16 * _loc_2] == this.shujuzu[35 + 16 * _loc_2] && this.shujuzu[31 + 16 * _loc_2] != this.shujuzu[35 + 16 * _loc_2])
                {
                    this.guanggao.shangqijg["t" + _loc_2 + "6"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "7"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "8"].text = "二同号";
                    this.guanggao.shangqijg["t" + _loc_2 + "2"].gotoAndStop(3);
                    this.guanggao.shangqijg["t" + _loc_2 + "3"].gotoAndStop(2);
                    this.guanggao.shangqijg["t" + _loc_2 + "4"].gotoAndStop(3);
                }
                else if (this.shujuzu[31 + 16 * _loc_2] == this.shujuzu[35 + 16 * _loc_2] && this.shujuzu[27 + 16 * _loc_2] != this.shujuzu[31 + 16 * _loc_2])
                {
                    this.guanggao.shangqijg["t" + _loc_2 + "6"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "7"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "8"].text = "二同号";
                    this.guanggao.shangqijg["t" + _loc_2 + "2"].gotoAndStop(2);
                    this.guanggao.shangqijg["t" + _loc_2 + "3"].gotoAndStop(3);
                    this.guanggao.shangqijg["t" + _loc_2 + "4"].gotoAndStop(3);
                }
                else
                {
                    this.guanggao.shangqijg["t" + _loc_2 + "8"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "8"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "8"].text = "";
                    this.guanggao.shangqijg["t" + _loc_2 + "2"].gotoAndStop(1);
                    this.guanggao.shangqijg["t" + _loc_2 + "3"].gotoAndStop(1);
                    this.guanggao.shangqijg["t" + _loc_2 + "4"].gotoAndStop(1);
                }
                this.guanggao.shangqijg["t" + _loc_2 + "9"].text = Math.max(int(this.shujuzu[27 + 16 * _loc_2]), int(this.shujuzu[31 + 16 * _loc_2]), int(this.shujuzu[35 + 16 * _loc_2])) - Math.min(int(this.shujuzu[27 + 16 * _loc_2]), int(this.shujuzu[31 + 16 * _loc_2]), int(this.shujuzu[35 + 16 * _loc_2]));
            	_loc_2 ++;
			}
			
			var shujustr:String = this.shujuzu[15];
			var index:int = shujustr.lastIndexOf("9:27:00");
			var index1:int = shujustr.lastIndexOf("19:27:00");
			if(index != -1 && index1 == -1)
			{
				this.shujuzu[15] = String(this.shujuzu[15]).substring(0,10) + "9:37:00";
			}
           	this.openTime = new Date(this.shujuzu[15]);
			thisOpenTime = this.openTime.time;
			trace("thisOpenTime,this.shujuzu[15]"+thisOpenTime+","+this.shujuzu[15])
			stage.dispatchEvent(new Event("changeOpenTimeNow"));
            _interId = setInterval(getTOU, 200);
        }
		private var daojishi:int = 10;
		public function getTOU()
        {
            var curDate:Date = new Date();
			curDate.setTime(curDate.getTime() + timeOffset);
            var _loc_2:* = curDate.getFullYear();
            var _loc_3:* = curDate.getMonth() + 1;
            var _loc_4:* = curDate.getDate();
            var _loc_5:* = curDate.getDay();
            var _loc_6:* = curDate.getHours();
            var _loc_7:* = curDate.getMinutes();
            var _loc_8:* = curDate.getSeconds();
			var leftTime:Number;
			
			if(this.openTime.time <= curDate.time)
			{
				leftTime = 10*60*1000 + this.openTime.time - curDate.time;
			}
			else
			{
				leftTime = this.openTime.time - curDate.time;
			}
			if(leftTime > 30*60*1000)
			{
				leftTime = leftTime + 10*60*1000;
			}
			
			//leftTime = leftTime + 10*1000;
            
            var _loc_10:* = int(leftTime / 1000 / 60 / 60);
            var _loc_11:* = int(leftTime / 1000 / 60 % 60);
            var _loc_12:* = int(leftTime / 1000 % 60);
			
			if(int(_loc_12) == 5 && int(_loc_10) == 0 && int(_loc_11)== 0)
			{
				stage.dispatchEvent(new Event("showKuaiShan"));
			}
			
			//_loc_12 += 1;
            _loc_10 = _loc_10 > 0 ? (_loc_10) : (0);
            _loc_11 = _loc_11 > 0 ? (_loc_11) : (0);
			if(this.myState != 1)
			{
				_loc_12 = _loc_12 > 0 ? (_loc_12) : (0);
			}
            
            if (this.myState == 1)	//进入开奖界面
            {
				if(youshangjiao)
				{
					if(_loc_12 < 50)
					{
						daojishi = 10+_loc_12;
					}
					else
					{
						daojishi = _loc_12 - 50;
					}
					
					if(daojishi < -10)
					{
						youshangjiao.daojishi.text = "00:00:10";
					}
					else
						youshangjiao.daojishi.text = "00:00:"+(daojishi < 10 ? ("0" + daojishi) : daojishi);
				}
				
				
				//this.youshangjiao.daojishi.text = (_loc_11 < 10 ? ("0" + _loc_11) : (_loc_11)) + ":" + (_loc_12 < 10 ? ("0" + _loc_12) : (_loc_12));
                //if (_loc_10 == 0 && _loc_11 == 0 && _loc_12 <= 0)
				if(daojishi <= 0 && daojishi > -10)
                {
					daojishi = 10;
                    this.myState = 2;	// 跳筛子
                    this.youshangjiao.gotoAndStop(2);
                    this.kaijiang.gotoAndPlay(2);
                    this.kaijiang.visible = true;
                }
				
                return;
            }
            else if (this.myState == 2)	// 揭晓结果
            {
                if (this.kaijiang.currentFrame > 55)
                {
                    this.myState = 3;		// 筛子跳动结束
                    this.kaijiang.gotoAndStop(59);
                }
                return;
            }
            else if (this.myState == 3)
            {
                return;
            }
            else if (this.myState == 4)
            {
                return;
            }
			
            this.currentTime.text = _loc_2 + "年" + _loc_3 + "月" + _loc_4 + "日 " + (_loc_6 < 10 ? ("0" + _loc_6) : (_loc_6)) + ":" + (_loc_7 < 10 ? ("0" + _loc_7) : (_loc_7)) + ":" + (_loc_8 < 10 ? ("0" + _loc_8) : (_loc_8));
            this.leftTimeTF.text = (_loc_10 < 10 ? ("0" + _loc_10) : (_loc_10)) + ":" + (_loc_11 < 10 ? ("0" + _loc_11) : (_loc_11)) + ":" + (_loc_12 < 10 ? ("0" + _loc_12) : (_loc_12));
			nowLeftTime = this.leftTimeTF.text;
			
			if (_loc_10 == 0 && _loc_11 == 0 && _loc_12 <= 0)	
            {
				if(_isPlayReadySound)
					return;
				if(isOpenSound)
				{
					var readySound:Sound = new Sound(new URLRequest("kuai_ready.mp3"));
					readySound.play(0, 1);
				}
				_isPlayReadySound = true;
                this.myState = 1;	// 进入开奖倒计时
                this.gotoAndStop(2);
            }
			else if(_loc_10 == 0 && ((_loc_11 == 2 && _loc_12 == 0) ||(_loc_11 == 1 && _loc_12 >= 59)))
			{
				if(_isPlayTwoSound)
					return;
				if(isOpenSound)
				{
					var twoSound:Sound = new Sound(new URLRequest("kuai_two.mp3"));
					twoSound.play(0, 1);
				}
				_isPlayTwoSound = true;
			}
			else if(_loc_10 == 0 && ((_loc_11 == 1 && _loc_12 == 0) || (_loc_11 == 0 && _loc_12 >= 59)))
			{
				if(_isPlayOneSound)
					return;
				if(isOpenSound)
				{
					var oneSound:Sound = new Sound(new URLRequest("kuai_one.mp3"));
					oneSound.play(0, 1);
				}
				
				_isPlayOneSound = true;
			}
        }
		
		function frame2()
        {
            this.kaijiang.visible = false;
            this.zuoshangjiao.qishu.text = String(nextTermNum);
			
            this.newData = "";
            this.smallX = 950; //1750;
            this.smallY = 240;
            this.stayTimes = 10;
			
			//加载开奖信息
			this.url2 = new URLRequest(server_ip + Config.INFO + "?uid=" + new Date().time);
            this.urlloader2 = new URLLoader();
            this.urlloader2.addEventListener(Event.COMPLETE, this.updateData2);
            this.urlloader2.addEventListener(IOErrorEvent.IO_ERROR, this.retry2);
            this.loadData2();
        }
		
		public function updateData2(param1:Event) : void
        {
			trace("新数据 = " + param1.target.data);
            this.newData = param1.target.data;
            this.newDatas = this.newData.split("\"");
			newDataTime++
            setTimeout(this.waiting, 100);
        }
		
		public function loadData2()
        {
			url2.url = server_ip + Config.INFO + "?uid=" + new Date().time;
            this.urlloader2.load(this.url2);
			trace("url2.url = "+url2.url);
        }
		
		private var getDataTimeIndex:uint;
		private var newDataTime:int;
		public function waiting()
        {
            var _local2:Number;
            var _local3:Number;
            var _local4:Number;
            var _local5:Number;
            var _local6:Number;
            var _local7:Number;
            var _local8:Number;
            var _local1:Date = new Date();
			_local1.setTime(_local1.getTime() + timeOffset);
			if(this.currentFrame == 1)
				return;
			
			if ((this.newData == "") || (this.newDatas[19] == currentTermNum) || (this.openTime.time > _local1.time) || !((this.myState == 3) || (this.myState == 4))){
               getDataTimeIndex = setTimeout(this.loadData2, 5000);
            } else {
				trace("此时的期数："+this.newDatas[183]+"以前的期数 = "+this.shujuzu[183]);
				clearTimeout(getDataTimeIndex);
                if (this.myState == 3)
				{
                    if (this.kaijiang.currentFrame < 55)
					{
                        setTimeout(this.waiting, 200);
                    }
					else 
					{
                        this.kaijiang.gotoAndStop(60);
                        this.kaijiang.jieguo1.gotoAndStop(this.newDatas[3]);
                        this.kaijiang.jieguo2.gotoAndStop(this.newDatas[7]);
                        this.kaijiang.jieguo3.gotoAndStop(this.newDatas[11]);
                        this.youshangjiao.jieguobei.gotoAndStop(60);
                        this.youshangjiao.jieguobei.jieguo1.gotoAndStop(this.newDatas[3]);
                        this.youshangjiao.jieguobei.jieguo2.gotoAndStop(this.newDatas[7]);
                        this.youshangjiao.jieguobei.jieguo3.gotoAndStop(this.newDatas[11]);
                        if (this.stayTimes <= 0)
						{
                            if (((((this.smallX - this.kaijiang.x) > 75)) || (((this.kaijiang.y - this.smallY) > 30)))){
                                this.kaijiang.x = (this.kaijiang.x + 75);
                                this.kaijiang.y = (this.kaijiang.y - 30);
                                this.kaijiang.width = (this.kaijiang.width - 46);
                                this.kaijiang.height = (this.kaijiang.height - 45);
                            } else {
                                this.kaijiang.visible = false;
                                this.kaijiang.width = 914;
                                this.kaijiang.height = 892;
                                this.kaijiang.x = 990;
                                this.kaijiang.y = 550;
                                this.zuoshangjiao.gotoAndStop(2);
                                this.zuoshangjiao.qishu2.text = String(nextTermNum);// this.shujuzu[183];
                                this.zuoshangjiao.sezi1.gotoAndStop(this.newDatas[3]);
                                this.zuoshangjiao.sezi2.gotoAndStop(this.newDatas[7]);
                                this.zuoshangjiao.sezi3.gotoAndStop(this.newDatas[11]);
                                this.stayTimes = 10;
                                this.myState = 4;	// 显示结果
                                _local2 = int(this.newDatas[3]);
                                _local3 = int(this.newDatas[7]);
                                _local4 = int(this.newDatas[11]);
                                _local5 = ((_local2 + _local3) + _local4);
                                _local6 = Math.max(_local2, _local3, _local4);
                                _local7 = Math.min(_local2, _local3, _local4);
                                _local8 = ((_local5 - _local6) - _local7);
                                if (((!((_local5 == 3))) && (!((_local5 == 18))))){
                                    this[("jgh" + _local5)].gotoAndStop(2);
                                };
                                this[(("jg" + _local7) + _local8)].gotoAndStop(2);
                                this[(("jg" + _local7) + _local6)].gotoAndStop(2);
                                this[(("jg" + _local8) + _local6)].gotoAndStop(2);
                                if ((((_local2 == _local3)) && ((_local3 == _local4)))){
                                    this[((("jg" + _local2) + _local3) + _local4)].gotoAndStop(2);
                                    this.jg3tx.gotoAndStop(2);
                                    this[(("jg" + _local2) + _local3)].gotoAndStop(2);
                                };
                                if (((((!((_local2 == _local3))) && (!((_local2 == _local4))))) && (!((_local3 == _local4))))){
                                    this.jgsbth.gotoAndStop(2);
                                    if (((((_local6 - _local8) == 1)) && (((_local8 - _local7) == 1)))){
                                        this.jg123.gotoAndStop(2);
                                        this.jg234.gotoAndStop(2);
                                        this.jg345.gotoAndStop(2);
                                        this.jg456.gotoAndStop(2);
                                    };
                                };
                                if ((((_local6 == _local8)) && (!((_local8 == _local7))))){
                                    this[(("jgdx" + _local8) + _local6)].gotoAndStop(2);
                                };
                                if ((((_local7 == _local8)) && (!((_local8 == _local6))))){
                                    this[(("jgdx" + _local7) + _local8)].gotoAndStop(2);
                                };
                            };
                        };
                        this.stayTimes--;
                        setTimeout(this.waiting, 50);
                    };
                } 
				else if (this.myState == 4) 
				{
                     setTimeout(this.restart, 15000);
                };
            };
        }
		
		public function output($mac:String):void
		{
			//this.tipTF.text = $mac;
		}
		
        public function restart()
        {
            this.jg111.gotoAndStop(1);
            this.jg222.gotoAndStop(1);
            this.jg333.gotoAndStop(1);
            this.jg444.gotoAndStop(1);
            this.jg555.gotoAndStop(1);
            this.jg666.gotoAndStop(1);
            this.jg11.gotoAndStop(1);
            this.jg22.gotoAndStop(1);
            this.jg33.gotoAndStop(1);
            this.jg44.gotoAndStop(1);
            this.jg55.gotoAndStop(1);
            this.jg66.gotoAndStop(1);
            this.jgdx11.gotoAndStop(1);
            this.jgdx22.gotoAndStop(1);
            this.jgdx33.gotoAndStop(1);
            this.jgdx44.gotoAndStop(1);
            this.jgdx55.gotoAndStop(1);
            this.jgdx66.gotoAndStop(1);
            this.jg12.gotoAndStop(1);
            this.jg13.gotoAndStop(1);
            this.jg14.gotoAndStop(1);
            this.jg15.gotoAndStop(1);
            this.jg16.gotoAndStop(1);
            this.jg23.gotoAndStop(1);
            this.jg24.gotoAndStop(1);
            this.jg25.gotoAndStop(1);
            this.jg26.gotoAndStop(1);
            this.jg34.gotoAndStop(1);
            this.jg35.gotoAndStop(1);
            this.jg36.gotoAndStop(1);
            this.jg45.gotoAndStop(1);
            this.jg46.gotoAndStop(1);
            this.jg56.gotoAndStop(1);
            this.jg3tx.gotoAndStop(1);
            this.jg123.gotoAndStop(1);
            this.jg234.gotoAndStop(1);
            this.jg345.gotoAndStop(1);
            this.jg456.gotoAndStop(1);
            this.jgh4.gotoAndStop(1);
            this.jgh5.gotoAndStop(1);
            this.jgh6.gotoAndStop(1);
            this.jgh7.gotoAndStop(1);
            this.jgh8.gotoAndStop(1);
            this.jgh9.gotoAndStop(1);
            this.jgh10.gotoAndStop(1);
            this.jgh11.gotoAndStop(1);
            this.jgh12.gotoAndStop(1);
            this.jgh13.gotoAndStop(1);
            this.jgh14.gotoAndStop(1);
            this.jgh15.gotoAndStop(1);
            this.jgh16.gotoAndStop(1);
            this.jgh17.gotoAndStop(1);
            this.jgsbth.gotoAndStop(1);
			
			if(_interId != -1)
			{
				clearInterval(_interId);
			}
				
			// 获取上期输入时间
			//lastOpenTime = openTime;
            this.gotoAndStop(1);
			stage.dispatchEvent(new Event("stopShowKuaiShan"));
        }
		
        public function getXingQi(param1:Number)
        {
            switch(param1)
            {
                case 0:
                {
                    return "日";
                }
                case 1:
                {
                    return "一";
                }
                case 2:
                {
                    return "二";
                }
                case 3:
                {
                    return "三";
                }
                case 4:
                {
                    return "四";
                }
                case 5:
                {
                    return "五";
                }
                case 6:
                {
                    return "六";
                }
                default:
                {
                    return "";
                    break;
                }
            }
        }

		private var _isPlayTwoSound:Boolean = false;
		private var _isPlayOneSound:Boolean = false;
		private var _isPlayReadySound:Boolean = false;

		/*
			全屏
		*/
        public function toggleFullScreen(param1:Event = null)
        {
            stage.displayState = (stage.displayState == StageDisplayState.FULL_SCREEN)?StageDisplayState.NORMAL:StageDisplayState.FULL_SCREEN;
        }

        public function retry(param1:Event)
        {
            setTimeout(this.loadData, 5000);
        }

		/**
			重试加载
		*/
        public function retry2(param1:Event)
        {
			trace("加载失败，5秒后重新加载！！！");
            setTimeout(this.loadData2, 5000);
        }

        public function loadData()
        {
            this.openTime = null;
            this.shuju = "";
            this.shujuzu = this.shuju.split("\"");
			this.url.url = server_ip + Config.INFO + "?id=" + Math.random();
            this.urlloader.load(this.url);
        }
    }
}