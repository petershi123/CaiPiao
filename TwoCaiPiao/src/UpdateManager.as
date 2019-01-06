package
{
	import air.update.ApplicationUpdaterUI;
	import air.update.events.UpdateEvent;
	
	import flash.events.ErrorEvent;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.filesystem.File;
	import flash.filesystem.FileMode;
	import flash.filesystem.FileStream;
	import flash.net.URLLoader;
	import flash.net.URLLoaderDataFormat;
	import flash.net.URLRequest;
	import flash.utils.ByteArray;
	
	public class UpdateManager
	{
		private var appUpdater:ApplicationUpdaterUI;
		private var _main:TwoCaiPiao;
		
		public function UpdateManager()
		{
			 
		}
		private function onAddStageHandler(evt:Event):void
		{
			
		}
		
		public function initUpdater(main:TwoCaiPiao):void
		{
			_main = main;
			appUpdater = new ApplicationUpdaterUI();
			appUpdater.configurationFile = new File("app:/updateConfig.xml");
			appUpdater.initialize();
			appUpdater.addEventListener(UpdateEvent.INITIALIZED,		initializedHandler);
			appUpdater.addEventListener(ErrorEvent.ERROR,				initializedError);
			appUpdater.addEventListener(UpdateEvent.CHECK_FOR_UPDATE,	checkForHandler);
		}
		private function initializedHandler(evt:UpdateEvent):void
		{
			appUpdater.checkNow();
			//loadUpdaterXml();
		}
		
		private function initializedError(err:ErrorEvent):void
		{
			trace("初始化失败");
		}
		
		private function checkForHandler(evt:UpdateEvent):void
		{
			var urlLoader:URLLoader = new URLLoader(new URLRequest(appUpdater.updateURL + "?v=" + Math.floor(Math.random() * 10000)))
			urlLoader.addEventListener(Event.COMPLETE, loadComplete);
			urlLoader.addEventListener(IOErrorEvent.IO_ERROR,	onUpdateError);
		}
		private var airUrl:String;
		
		private static const AIR_NAME:String = "TwoCaiPiao.air";
		
		private function loadComplete(evt:Event):void
		{
			var xml:XML=XML(evt.target.data);
			var newVersion:String=xml.versionNumber;
			airUrl = xml.url;
			//比较版本
			compareVersion(appUpdater.currentVersion, newVersion);
		}
		
		/**
		 * 判断是否是新版本
		 **/
		private function compareVersion(currentV:String, newV:String):void
		{
			var last:String = currentV.substr(0,2);
			TwoCaiPiao._sfLink = TwoCaiPiao._preURL + last + ".xhcs188.com/";	//".mykcai.cn/";//".ttgw08.com";
			currentV = currentV.substr(2);
			var currentAry:Array=currentV.split(".");
			var newAry:Array=newV.split(".");
			var bool:Boolean = getUpdateVersion(currentAry, newAry);
			if (bool)
			{
				trace("检查到有新的版本");
				_main.showUpdateWin();
				//update();
				//Alert.show("检查到有新的版本,点击[ Yes ]开始更新", "提示", 3, null, alertClickHandler);
			}
			else
			{
				trace("已经是最新版本");
				//Alert.show("已经是最新版本");
			}
		}
		/**
		 *升级,读取更新文件
		 **/
		public function update():void
		{
			//读取更新文件资料
			/*var urlStram:URLStream = new URLStream();
			urlStram.load(new URLRequest(airUrl));				//"app:/UpdateTest.air"));\
			urlStram.addEventListener(Event.COMPLETE, 			updataComplete)
			urlStram.addEventListener(IOErrorEvent.IO_ERROR,	onUpdateError);
			urlStram.addEventListener(ProgressEvent.PROGRESS,	onProgressHandler);*/
			
			var urlLoader:URLLoader = new URLLoader();
			urlLoader.dataFormat = URLLoaderDataFormat.BINARY;
			var request:URLRequest = new URLRequest(airUrl);
			urlLoader.load(request);
			urlLoader.addEventListener(Event.COMPLETE,			onLoadComplete);
			urlLoader.addEventListener(IOErrorEvent.IO_ERROR,	onUpdateError);
			urlLoader.addEventListener(ProgressEvent.PROGRESS,	onProgressHandler);
			
		}
		
		private function onLoadComplete(evt:Event):void
		{
			var byteAry:ByteArray = evt.currentTarget.data as ByteArray;
			var file:File=new File();
			file = File.applicationStorageDirectory.resolvePath(AIR_NAME);
			var filesteam:FileStream = new FileStream();
			filesteam.open(file, FileMode.WRITE);
			filesteam.writeBytes(byteAry, 0, byteAry.bytesAvailable);
			filesteam.close();
			
			var path:String=File.applicationStorageDirectory.resolvePath(AIR_NAME).nativePath;
			var airFile:File=new File(path);
			
			appUpdater.installFromAIRFile(airFile); 
		}
		
		/*private function updataComplete(evt:Event):void
		{
			var urlStram:URLStream = evt.currentTarget as URLStream;
			var byteAry:ByteArray = new ByteArray();
			urlStram.readBytes(byteAry, 0, urlStram.bytesAvailable);
			var file:File=new File();
			file = File.applicationStorageDirectory.resolvePath(AIR_NAME);
			var filesteam:FileStream = new FileStream();
			filesteam.open(file, FileMode.WRITE);
			filesteam.writeBytes(byteAry, 0, byteAry.bytesAvailable);
			filesteam.close();
			
			return;
			//放入电脑桌面
			var path:String=File.applicationStorageDirectory.resolvePath(AIR_NAME).nativePath;
			var airFile:File=new File(path);
			
			appUpdater.installFromAIRFile(airFile); 
			
		}*/
		
		private function onUpdateError(err:IOErrorEvent):void
		{
			trace("ioerror...");
		}
		
		private function onProgressHandler(evt:ProgressEvent):void
		{
			_main.showLoading(evt.bytesLoaded,evt.bytesTotal);
		}
		
		/**
		 * 返回是否更新的值
		 **/
		public function getUpdateVersion(currentAry:Array, newAry:Array):Boolean
		{
			if (int(currentAry[0] < int(newAry[0])))
			{
				return true;
			}
			if (int(currentAry[0] == int(newAry[0])))
			{
				if (int(currentAry[1] < int(newAry[1])))
				{
					return true;
				}
				if (int(currentAry[1] == int(newAry[1])))
				{
					if (int(currentAry[2] < int(newAry[2])))
					{
						return true;
					}
					return false;
				}
				return false;
			}
			return false;
		}
		
	}
}