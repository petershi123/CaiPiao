package
{
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.net.URLRequestMethod;

	public class Http
	{
		public function Http()
		{
		}
		public static function getFromServer(url:String,callback:Function):void
		{
			var urlloader:URLLoader = new URLLoader();
			var request:URLRequest=new URLRequest(url);
			request.method=URLRequestMethod.GET;
			urlloader.load(request);
			urlloader.addEventListener(Event.COMPLETE,	onComplete);
			urlloader.addEventListener(IOErrorEvent.IO_ERROR,	onErrorHandler);
			function onComplete(evt:Event)
			{
				callback(evt);
			}
			function onErrorHandler(error:IOErrorEvent):void
			{
				trace(error.toString());
			}
		}
	}
}