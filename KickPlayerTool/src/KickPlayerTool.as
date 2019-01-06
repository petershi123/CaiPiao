package
{
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.MouseEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.text.TextField;
	import flash.text.TextFieldType;
	import flash.text.TextFormat;
	import flash.text.TextFormatAlign;
	import flash.utils.clearInterval;
	import flash.utils.setInterval;

	[SWF(width="340",height="100",backgroundColor="0xffffff",frameRate="12")]
	public class KickPlayerTool extends Sprite
	{
		private var _nameTxt:TextField;
		
		private var _button:Sprite;
		
		public function KickPlayerTool()
		{
			this.addEventListener(Event.ADDED_TO_STAGE,	addStageHandler);
		}
		private function addStageHandler(evt:Event):void
		{
			init();
		}
		private function init():void
		{
			initStage();
			initView();
		}
		private function initStage():void
		{
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
		}
		private function initView():void
		{
			var format:TextFormat = new TextFormat("微软雅黑",18);
			
			
			var txt:TextField = new TextField();
			txt.text = "请输入要踢掉的服务器链接,用户名:";
			txt.width = 200;
			txt.height = 20;
			this.addChild(txt);
			txt.defaultTextFormat = format;
			
			this.graphics.beginFill(0x00ff00);
			this.graphics.drawRect(50,30,235,30);
			this.graphics.endFill();
			
			_nameTxt = new TextField();
			this.addChild(_nameTxt);
			_nameTxt.x = 50;
			_nameTxt.y = 30;
			_nameTxt.width = 235;
			_nameTxt.height = 30;
			_nameTxt.type = TextFieldType.INPUT;
			format.align = TextFormatAlign.LEFT;
			_nameTxt.defaultTextFormat = format;
			stage.focus = _nameTxt;
			
			_button = new Sprite();
			this.addChild(_button);
			_button.graphics.clear();
			_button.graphics.beginFill(0x00ffff);
			_button.graphics.drawRect(0,0,81,23);
			_button.graphics.endFill();
			var bTxt:TextField = new TextField();
			bTxt.text = "确定";
			//bTxt.defaultTextFormat = format;
			format.align = TextFormatAlign.CENTER;
			bTxt.setTextFormat(format);
			bTxt.width = 81;
			bTxt.height = 23;
			_button.addChild(bTxt);
			bTxt.type = TextFieldType.DYNAMIC;
			bTxt.selectable = false;
			_button.buttonMode = true;
			_button.x = 200;
			_button.y = 70;
			
			_button.addEventListener(MouseEvent.MOUSE_DOWN,	onMouseDown);
			stage.addEventListener(MouseEvent.MOUSE_UP,	onMouseUp);
			
		}
		private function onMouseDown(evt:MouseEvent):void
		{
			if(_nameTxt.text == "" || _nameTxt.text == "踢人成功" || _nameTxt.text == "踢人不成功") return;
			_button.graphics.clear();
			_button.graphics.beginFill(0x00ff34);
			_button.graphics.drawRect(0,0,81,23);
			_button.graphics.endFill();
			_button.mouseEnabled = false;
			var content:String = _nameTxt.text;
			var dotIndex = content.indexOf(",");
			var link:String = content.substring(0,dotIndex);
			var name:String = content.substring(dotIndex+1)
			var urlloader:URLLoader = new URLLoader();
			urlloader.load(new URLRequest(link + "OffLine.aspx?user="+name));
			urlloader.addEventListener(Event.COMPLETE,			onComplete);
			urlloader.addEventListener(IOErrorEvent.IO_ERROR,	onError);
			function onComplete(evt:Event):void
			{
				
				_nameTxt.text = "踢人成功";
				var index:uint;
				index = setInterval(function():void
				{
					trace("111111");
					_nameTxt.text = "";
					stage.focus = _nameTxt;
					_button.mouseEnabled = true;
					clearInterval(index);
				},1000);
			}
			function onError(err:IOErrorEvent):void
			{
				_nameTxt.text = "踢人不成功";
				var index:uint;
				index = setInterval(function():void
				{
					trace("111111");
					_nameTxt.text = "";
					stage.focus = _nameTxt;
					_button.mouseEnabled = true;
					clearInterval(index);
				},1000);
			}
		}
		private function onMouseUp(evt:MouseEvent):void
		{
			_button.graphics.clear();
			_button.graphics.beginFill(0x00ffff);
			_button.graphics.drawRect(0,0,81,23);
			_button.graphics.endFill();
		}
	}
}