package
{
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.MouseEvent;
	import flash.events.NetStatusEvent;
	import flash.events.TimerEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.net.URLRequestMethod;
	import flash.net.URLVariables;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import flash.utils.Timer;
	[SWF(width="758",height="500")]
	public class CaiPiaoHeBin extends Sprite
	{
		public var link_Url;
		public static var _preURL:String;// = "http://game.ttgw08.com";//"http://gxsf.cczkw.com";//"http://klsf.cczkw.com";//"http://ads114.jzg520.com";// ;	//"http://103.243.130.16"; 
		public static var userName:String;
		public static var timeOffset:Number;	//服务器与客户端时间的差值
		private var _main:MainView;
		
		//public var kuaishanTime:String = "00:00"; 
		public var kuaiqihao:String = "20170618";
		public var kuaishanOpenTime:Number = -1;
		//TwoCaiPiao
		public static var stageObj:*;
		public var isOpenSound = true;	//声音开关
		
		public function CaiPiaoHeBin()
		{
			//init();
		}
		public function init(obj:*):void
		{
			trace("function:init");
			trace("_preURL = "+link_Url);
			_preURL = link_Url;
			stageObj = obj;
			_main=new MainView(this);
			this.addChild(_main);
			_main.playerHaoSound = !isOpenSound;
			_main.prizeSound = isOpenSound;
			
			Http.getFromServer(_preURL+"gettime.aspx?r="+Math.random(),callback);
			function callback(evt:Event):void
			{
				var timeStr:String = String(evt.target.data);
				var arr:Array = timeStr.split("-");
				var dateServer:Date = new Date(int(arr[0]),int(arr[1])-1,int(arr[2]),int(arr[3]),int(arr[4]),int(arr[5]),0);
				var datalocal:Date = new Date();
				timeOffset = dateServer.getTime() - datalocal.getTime();
				_main.init();
				_main.x=-5;
			}
		}
		public function onResize(evt:Event):void
		{
			
		}
	}
}