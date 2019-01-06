package
{
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Loader;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;
	import flash.net.URLRequest;
	import flash.system.ApplicationDomain;
	import flash.system.LoaderContext;
	import flash.text.TextField;
	import flash.text.TextFormat;

	[SWF(width='1024',height='768',frameRate='60',backgroundColor='#ffffff')]
	public class H5Test extends Sprite
	{
		private var loader:MovieClip;
		private var disX:Number;
		private var disY:Number;
		
		private var randArr:Array = [3,6,7];
		private var loaderArr:Array;
		private var index:int = 0;
		public function H5Test()
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		private function init(evt:Event = null):void
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			
			IFlash.setSize(1024,768);// 设置舞台宽高
			IFlash.setBgcolor("#ffffff");   //设置舞台背景颜色，默认 #000000
			IFlash.setOrientationEx(1);//设置手机横竖屏显示，默认横屏 @param value 0 竖屏 1 横屏
			IFlash.showInfo(false);//设置是否显示FPS信息，默认true 显示        
			
			initStage();
			initData();
			initView();
			
		}
		private function initStage():void
		{
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
		}
		private function initData():void
		{
			loaderArr = new Array();
		}
		private function initView():void
		{
			var context:LoaderContext = new LoaderContext(false,ApplicationDomain.currentDomain)
			for(var i:int = 1;i <= 9;i++)
			{
				if(i == randArr[0] || i == randArr[1] || i == randArr[2])
					continue;
				
				var loader:Loader = new Loader();
				loader.load(new URLRequest("png/"+i+".png"),context);
				this.addChild(loader);
				loader.x = 256*((i-1)%3);
				loader.y = 192*int((i-1)/3);
			}
			
			for(var j:int = 0;j < 3;j++)
			{
				loader = new Loader();
				
				loader.load(new URLRequest("png/"+randArr[j]+".png"),context);
				loader.contentLoaderInfo.addEventListener(Event.COMPLETE,	onLoadComplete);
				loader.x = 256*3;
				loader.y = 192*j;
				loader.name = ""+randArr[j];
			}
		}
		private function initListener():void
		{
			for(var i:int = 0;i < 3;i++)
			{
				loaderArr[i].addEventListener(MouseEvent.MOUSE_DOWN,	onLoaderMouseDown);
				loaderArr[i].addEventListener(MouseEvent.MOUSE_UP,		onLoaderMouseUp);
			}
		}
		
		private function removeListener():void
		{
			for(var i:int = 0;i < 3;i++)
			{
				loaderArr[i].removeEventListener(MouseEvent.MOUSE_DOWN,		onLoaderMouseDown);
				loaderArr[i].removeEventListener(MouseEvent.MOUSE_UP,		onLoaderMouseUp);
			}
		}
		
		private function onLoadComplete(evt:Event):void
		{
			var bitmp1:Bitmap = (evt.target).content as Bitmap;
			//bitmp1.name = "loader"+randArr[index];
			var bpMc:MovieClip = new MovieClip();
			bpMc.addChild(bitmp1);
			//bitmp1.x =-bpMc.width/2;
			//bitmp1.y = -bpMc.height/2;
				
			bpMc.x = 256*3;
			bpMc.y = 192*index;
			this.addChild(bpMc);
			loaderArr.push(bpMc);
			
			index++;
			if(index == 3)
			{
				initListener();
			}
		}
		
		private function onLoaderMouseDown(evt:MouseEvent):void
		{
			loader = evt.target as MovieClip;
			//disX = mouseX-loader.x;
			//disY = mouseY-loader.y;
			//this.addChildAt(loader,this.numChildren-1);
			
			loader.startDrag();
		}
		
		private function onLoaderMouseUp(evt:MouseEvent):void
		{
			loader.stopDrag();
			var num:int = 0;
			for(var i:int = 0;i<3;i++)
			{
				if(Math.sqrt((loader.x - 256*((randArr[i]-1)%3))*(loader.x - 256*((randArr[i]-1)%3)) + (loader.y - 192*int((randArr[i]-1)/3))*(loader.y - 192*int((randArr[i]-1)/3))) < 20)
				{
					loader.x = ((randArr[i]-1)%3)*256;
					loader.y = int((randArr[i]-1)/3)*192;
				}
				
				if(loaderArr[i].x == ((randArr[i]-1)%3)*256 && loaderArr[i].y == int((randArr[i]-1)/3)*192)
				{
					num++;
				}
			}
			if(num == 3)
			{
				removeListener();
				
				var txt:TextField = new TextField();
				txt.text = "游戏结束";
				txt.defaultTextFormat = new TextFormat("宋体",20);
				this.addChild(txt);
				txt.x = (stage.stageWidth - txt.width)/2;
				txt.y = (stage.stageHeight - txt.height)/2;
				
			}
		}
	}
}