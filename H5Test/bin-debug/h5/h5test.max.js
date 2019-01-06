/*****************************************************/
/*                                 www.layabox.com   */
/*****************************************************/
(function(window,document,$lmodule)
{
	/************************************************/
	$lmodule=window;
	Function.prototype.BIND$ = function(o) {
		var f=(o.__closures_laya__ ||
				DEFUNENUMPTY$(o,'__closures_laya__',{}))[this.__$BiD___ || (this.__$BiD___ = LAYABOX.bindid++)];
		if(f) return f;
		var method=this;
		f = function(){ return method.apply(o,arguments); }; 
		o.__closures_laya__[this.__$BiD___] = f; 
		return f;
	};

	var LAYABOX=window.LAYABOX={
		initClass:function(_classs){for(var i=0,sz=_classs.length,o;i<sz;i++) {o=_classs[i];o.__init$__ && o.__init$__();}},
		bindid:1,
		substr:String.prototype.substr,
		mainModule:$lmodule,
		runOnlyPlayer:false,
		debugAs:function(value,type){
			if(value==null) return null;
			if(type==int || type==Number)
				if(typeof value=='number') return value;
				else {debugger;return null}
			if(!LAYABOX.typeof(value,type)) debugger;
			return value;
		},
		regstaticattr:function(_class,def){for(var i=0,sz=def.length;i<sz;i+=2){if(def[i]=='length') _class.length=def[i+1].call(_class);else{function tmp(){var name=def[i];var getfn=def[i+1];Object.defineProperty(_class,name,{get:function(){delete this[name];return this[name]=getfn();},set:function(v){delete this[name];this[name]=v;},enumerable: true,configurable: true});}tmp();}}},
		bind:function(obj,fn){return obj==null || fn==null?null:fn.BIND$(obj);},
		_sortonNameArray2_:function(array,name,options){(options===void 0)&& (options=0);var name0=name[0],name1=name[1],type=1;if (options==(16 | 2))type=-1;return array.sort(function(a,b){if (b[name0]==a[name0]){return type *(a[name1]-b[name1]);}else return type *(a[name0]-b[name0]);});},
		_sortonNameArray_:function(array,name,options){(options===void 0)&& (options=0);var name0=name[0],type=1;if (options==(16 | 2))type=-1;return array.sort(function(a,b){if (b[name0]==a[name0]){for (var i=1,sz=name.length;i < sz;i++){var tmp=name[i];if (b[tmp]!=a[tmp])return type *(a[tmp]-b[tmp]);}return 0;}else return type *(a[name0]-b[name0]);});},
		sortOn:function(name,options){
			if ((name instanceof Array)){
				if(name.length==0)return this;
				if(name.length==2)return LAYABOX._sortonNameArray2_(this,name,options);
				if(name.length>2)return LAYABOX._sortonNameArray_(this,name,options);name=name[0];
			}
			if (options==16)return this.sort(function(a,b){return a[name]-b[name];});
			if (options==(16 | 2))return this.sort(function(a,b){return b[name]-a[name];});
			return this.sort(function(a,b){return a[name]-b[name];});
		},
		defSomeUnEnumPty:function(obj,names){for(var i=0;i<names.length;i++) LAYABOX.defUnEnumPty(obj,names[i]);		},
		_propertyVar_:{writable: true,enumerable: false,configurable: true},
		defUnEnumPty:function(obj,name,value){if(arguments.length<3) value=obj[name];LAYABOX._propertyVar_.value=value;Object.defineProperty(obj, name, LAYABOX._propertyVar_);return value;},
		parseInt:function(value){return !value?0:parseInt(value);},
		ENABLE3D:false,
		classmap:[],
		internals:[],
		DICKEY:0,
		DICKEYS:[],
		systemClass:{'object':'Object','array':'Array','string':'String','dictionary':'Dictionary'},
		extend:function(d,b){
			for (var p in b){
				if (!b.hasOwnProperty(p)) continue;
				var g = b.__lookupGetter__(p), s = b.__lookupSetter__(p); 
				if ( g || s ) {
					if ( g )
						d.__defineGetter__(p, g);
					if ( s )
						d.__defineSetter__(p, s);
				} else
					d[p] = b[p];
				}
			function __() { DEFUNENUMPTY$(this,'constructor',d); }__.prototype=b.prototype;d.prototype=new __();DEFUNENUMPTY$(d.prototype,'__implements__',LAYABOX._copy_({},b.prototype.__implements__));
		},
		toStringForDic:function(){(!this.__DICKEY__) && (DEFUNENUMPTY$(this,'__DICKEY__',--LAYABOX.DICKEY),LAYABOX.DICKEYS['&layadic_'+this.__DICKEY__]=this);return '&layadic_'+this.__DICKEY__;},
		typeof:function(o,value){if(!o || !value) return false;if(value==String) return (typeof o=='string');if(value==Number) return (typeof o=='number');if(value.__interface__) value=value.__interface__;else if(typeof value!='string')  return (o instanceof value);return (o.__implements__ && o.__implements__[value]) || (o.__class__==value);},
		typeAs:function(value,type){return (this.typeof(value,type))?value:null;},
		isClass:function(o){return o && (o.__isclass__ || o==Object || o==String || o==Array);},
		_copy_:function(dec,src){if(!src) return null;dec=dec||{};for(var i in src) dec[i]=src[i];return dec;},
		debugtype:function(value,type){
			if(type=='int' || type=='uint') return (typeof value=='number') && parseInt(value)==value;
			if(type=='Number') return value==NaN || (typeof value=='number');
			if(type=='String') return value==null || (typeof value=='string');
			if(type=='Boolean') return value==true || value==false;
		},
		implements:function(dec,src){if(!src) return null;var d=dec.__implements__|| DEFUNENUMPTY$(dec,'__implements__',{});for(var i in src){d[i]=src[i];var c=i;while((c=this.internals[c]) && (c=c.extend) ){c=c.self;d[c]=true;}}},
		classHasOwnProperty:function(name,o){if(Object.hasOwnProperty.call(o.prototype,name)) return true;return o.prototype.__super__==null?null:LAYABOX.classHasOwnProperty(name,o.prototype.__super__);},
		hasOwnProperty:function(name,o){o=o ||this;return (Object.hasOwnProperty.call(o,name)) || LAYABOX.classHasOwnProperty(name,o.__class__);},
		regClass:function(o,fullName,chgHasOwnProperty,toStringFun,_super,miniName){		DEFUNENUMPTY$(o,'__$INIT__',function(){});toStringFun && (DEFUNENUMPTY$(o.prototype,'toString',LAYABOX.toStringForDic));_super && LAYABOX.extend(o,_super);LAYABOX.classmap[fullName]=o;_super && DEFUNENUMPTY$(o.prototype,'__super__',_super);chgHasOwnProperty && DEFUNENUMPTY$(o.prototype,'hasOwnProperty',LAYABOX.hasOwnProperty);DEFUNENUMPTY$(o.prototype,'__class__',o);DEFUNENUMPTY$(o.prototype,'__className__',fullName);DEFUNENUMPTY$(o,'__className__',fullName);DEFUNENUMPTY$(o,'__isclass__',true);var paths=fullName.split('.');miniName=miniName || paths[paths.length-1];$lmodule[miniName]=o;},
		interface:function(name,_super){var a=this.internals[name]=this.internals[name] || {};a.self=name;if(_super)a.extend=this.internals[_super]=this.internals[_super] || {};var words=name.split('.');var o=window;for(var i=0;i<words.length-1;i++) o=o[words[i]];o[words[words.length-1]]={__interface__:name};},
		createPackage:function(classs,module){for(var s=0;s<classs.length;s++){var strs=classs[s].split('.');p=module;n=strs[0];$modulethis[n]=$modulethis[n]||{};module[n]=$modulethis[n];for(var i=0,sz=strs.length;i<sz;i++) {n=strs[i];p=p[n]?p[n]:(p[n]={});}}}
	}

	var $modulethis=this;
	var iflash=window.iflash={utils:{}};
	var Dictionary=window.Dictionary=iflash.utils.Dictionary=function(){};	window.Dictionary.prototype=Object.prototype;
	var DEFUNENUMPTY$=LAYABOX.defUnEnumPty;
	var DEFSOMEUNENUMPTY$=LAYABOX.defSomeUnEnumPty;
	var BIND$=LAYABOX.bind;
	var REGSTATICATTR$=LAYABOX.regstaticattr;
	var REGCLASS$=LAYABOX.regClass;
	var __DEBUGTYPE__=LAYABOX.debugtype;
	var __DEBUGAS__=LAYABOX.debugAs;
	
	window.trace =window.trace || (window.console==null?function (s){}:function (s){console.log(s);});
	Error.prototype.throwError=function(){throw arguments;};
	(function(defs){for(var i=0;i<defs.length;i++)Object.defineProperty(Date.prototype,defs[i],{get:Date.prototype['get'+defs[i].charAt(0).toUpperCase()+defs[i].substr(1)]})})(['date','day','fullYear','hours','millseconds','minutes','month','seconds','time','timezoneOffset','dateUTC','dayUTC','fullYearUTC','hoursUTC'])
	Object.defineProperty(Date.prototype,'millisecondsUTC',{get:Date.prototype.getUTCMilliseconds,enumerable: false});
	Object.defineProperty(Date.prototype,'minutesUTC',{get:Date.prototype.getUTCMinutes,enumerable: false});
	Object.defineProperty(Date.prototype,'mouthUTC',{get:Date.prototype.getUTCMonth,enumerable: false});
	
	String.prototype.substr=function(ofs,sz){if(arguments.length==1)return LAYABOX.substr.call(this,ofs);if(sz<0) sz=this.length+sz;return LAYABOX.substr.call(this,ofs,sz);}
	Array.CASEINSENSITIVE = 1;	Array.DESCENDING = 2;	Array.NUMERIC = 16;	Array.RETURNINDEXEDARRAY = 8;	Array.UNIQUESORT = 4;
	DEFUNENUMPTY$(Array.prototype,'sortOn',LAYABOX.sortOn);
	
	LAYABOX.classmap['Object']=Object;	LAYABOX.classmap['Function']=Function;	LAYABOX.classmap['Array']=Array;	LAYABOX.classmap['Dictionary']=Dictionary;	LAYABOX.classmap['String']=String;
	LAYABOX.createPackage(['iflash.method','Browser','iflash.display.swf.classs','iflash.accessibility','iflash.events','iflash.geom','iflash.display.unit','iflash.laya.utils','Laya','int','iflash.media','uint','iflash.display3D.shader','iflash.ui','iflash.laya.dom','mx.utils','iflash.filters','iflash.xml','iflash.laya.display.unit','iflash.laya.net','iflash.laya.system','iflash.system','iflash.laya.xml','iflash.display.plug','iflash.swf.utils','iflash.display.utils','iflash.text.engine','H5Test','iflash.net','iflash.display3D.textures','iflash.laya.css','iflash.swf.animation','iflash.laya.typesetting','mx.core','iflash.errors','iflash.laya.driver','iflash.laya.runner.defines','iflash.external','IFlash','iflash.filesystem','iflash.laya.automation','iflash.text.textformat','IFlashMain','ArgumentError','RangeError','','iflash.display3D.webgl'],$lmodule);
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/idataoutput.as=======1100000100.000000
	LAYABOX.interface('iflash.utils.IDataOutput');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/idatainput.as=======1100000100.000000
	LAYABOX.interface('iflash.utils.IDataInput');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/idynamicpropertyoutput.as=======1100000100.000000
	LAYABOX.interface('iflash.net.IDynamicPropertyOutput');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/typesetting/itypesetting.as=======1100000100.000000
	LAYABOX.interface('iflash.laya.typesetting.ITypesetting');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/ieventdispatcher.as=======1100000100.000000
	LAYABOX.interface('iflash.events.IEventDispatcher');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/xml/ixmlelement.as=======1100000100.000000
	LAYABOX.interface('iflash.xml.IXMLElement');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/igraphicspath.as=======1100000100.000000
	LAYABOX.interface('iflash.display.IGraphicsPath');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/igraphicsstroke.as=======1100000100.000000
	LAYABOX.interface('iflash.display.IGraphicsStroke');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/igraphicsfill.as=======1100000100.000000
	LAYABOX.interface('iflash.display.IGraphicsFill');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/igraphicsdata.as=======1100000100.000000
	LAYABOX.interface('iflash.display.IGraphicsData');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/system/iobject.as=======1100000100.000000
	LAYABOX.interface('iflash.laya.system.IObject');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/idynamicpropertywriter.as=======1100000100.000000
	LAYABOX.interface('iflash.net.IDynamicPropertyWriter');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/iexternalizable.as=======1100000100.000000
	LAYABOX.interface('iflash.utils.IExternalizable');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/ibitmapdrawable.as=======1100000100.000000
	LAYABOX.interface('iflash.display.IBitmapDrawable');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/xml/ixmlnode.as=======1100000100.000000
	LAYABOX.interface('iflash.laya.xml.IXMLNode');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/idataoutput.jas=======1100000000.000000
	LAYABOX.interface('iflash.utils.IDataOutput');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/idatainput.jas=======1100000000.000000
	LAYABOX.interface('iflash.utils.IDataInput');
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/browser.as=======100000199.999984
	var Browser=(function(){
		function Browser(){};
		REGCLASS$(Browser,'Browser',true,true);
		Browser._$GET_frameRate=function(){
			return Browser._driver_.frameRate;
		}

		Browser._$SET_frameRate=function(num){
			Browser._driver_.frameRate=num;
		}

		Object.defineProperty(Browser,'frameRate',{get:Browser._$GET_frameRate,set:Browser._$SET_frameRate,enumerable:false});
		Browser.__init__=function(sprite){
			/*__JS__ */Browser._driver_=new iflash.laya.driver.Driver(sprite);
		}

		Browser.__start__=function(){
			Browser._driver_.start();
			Browser._driver_.regEvent();
		}

		Browser.eval=function(str,target){
			target=target || Browser.window;
			/*__JS__ */return target.eval(str);
		}

		Browser.err=function(e){
			trace("err:"+e);
		}

		Browser._createTextWord_=function(){
			return Browser._driver_.createTextWord();
		}

		Browser._createRootCanvas_=function(){
			var canvas=Browser._driver_.getRootCanvas ();
			canvas.size(Browser.window.innerWidth,Browser.window.innerHeight);
			if (Laya.HTMLVER){
				Browser.document.body.appendChild(canvas);
				/*__JS__ */if(!Laya.CONCHVER){canvas.style.position='absolute';canvas.style.left=canvas.style.top=0;};
			}
			return canvas;
		}

		Browser._debugger_=function(){
			/*__JS__ */debugger;
		}

		Browser.alert=function(e){
			/*__JS__ */alert(e);
		}

		Browser._createModle_=function(type,id,node){
			return Browser._driver_.createModle(type,id,node);
		}

		Browser.createHttpRequest=function(){
			return Browser._driver_.createHttpRequest();
		}

		Browser.setCursor=function(cursor){
			Browser._driver_.cursor(cursor);
			Browser._cursors_.push(cursor);
		}

		Browser.restoreCursor=function(){
			if (Browser._cursors_.length==0)return;
			Browser._cursors_.pop();
			Browser._driver_.cursor(Browser._cursors_.length>0?Browser._cursors_[Browser._cursors_.length-1]:"default");
		}

		Browser.hideSystemLoading=function(){
			if (Laya.CONCHVER){
				Browser.window.conchMarket&&Browser.window.conchMarket.sendMessageToPlatform('{"type":"ge_load_game_end"}',function(){});
				/*__JS__ */conch.showLoadingView(false);
			}
		}

		Browser.refresh=function(){
			Browser.location.reload();
		}

		Browser.window=null;
		Browser.document=null;
		Browser.location=null;;
		Browser.navigator=null;;
		Browser.input=null;;
		Browser._driver_=null;;
		Browser._cursors_=[];
		Browser.__init$__=function(){
			/*__JS__ */window.Browser=Browser;
		}

		return Browser;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/sorton.as=======100000199.999714
	var SortOn=iflash.method.SortOn=(function(){
		function SortOn(){}
		REGCLASS$(SortOn,'iflash.method.SortOn',true,true);
		SortOn.sortOn=function(array,name,options){
			return array.sortOn(name,options);
		}

		SortOn.CASEINSENSITIVE=1;
		SortOn.DESCENDING=2;
		SortOn.NUMERIC=16;
		SortOn.RETURNINDEXEDARRAY=8;
		SortOn.UNIQUESORT=4;
		return SortOn;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/clearinterval.as=======100000000.000000
	iflash.utils.clearInterval=function(id){
		SetIntervalTimer.clearInterval(id);
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/getaliasname.as=======100000000.000000
	iflash.utils.getAliasName=function(param1){
		Log.unfinished("getAliasName","");
		return "";
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/getdefinitionbyname.as=======100000000.000000
	iflash.utils.getDefinitionByName=function(param1){
		return /*__JS__ */LAYABOX.classmap[param1];
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/getqualifiedclassname.as=======100000000.000000
	iflash.utils.getQualifiedClassName=function(value){
		if((typeof value=='string'))
			return "String";
		else if((value instanceof Array))
		return "Array";
		else
		return /*__JS__ */value.__className__?value.__className__:LAYABOX.systemclass[(typeof value)];
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/getdefinitionbyname2.as=======100000000.000000
	iflash.utils.getDefinitionByName2=function(param1){
		return /*__JS__ */LAYABOX.classmap[param1];
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/getqualifiedsuperclassname.as=======100000000.000000
	iflash.utils.getQualifiedSuperclassName=function(value){
		/*__JS__ */return iflash.utils.getQualifiedClassName(value.__super__);
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/byteat.as=======100000000.000000
	iflash.method.byteAt=function(byteArray,index){
		return byteArray._byteAt_(index);
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/xmllength.as=======100000000.000000
	iflash.method.xmlLength=function(xml){
		return xml.lengths();
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/setinterval.as=======100000000.000000
	iflash.utils.setInterval=function(closure,delay,____){
		var __=[];for(var i=2,sz=arguments.length;i<sz;i++)__.push(arguments[i]);arguments=__;
		return new SetIntervalTimer(closure,delay,true,arguments).id;
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/settimeout.as=======100000000.000000
	iflash.utils.setTimeout=function(closure,delay,____){
		var __=[];for(var i=2,sz=arguments.length;i<sz;i++)__.push(arguments[i]);arguments=__;
		return new SetIntervalTimer(closure,delay,false,arguments).id;
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/regxmlattr.as=======100000000.000000
	iflash.laya.utils.regXmlAttr=function(_class,fndef,set_get,htmlNeed){
		(htmlNeed===void 0)&& (htmlNeed=true);
		DynamicProperties.reg(_class,fndef,set_get,htmlNeed);
		return 1;
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/dickey.as=======100000000.000000
	iflash.method.DICKEY=function(o){
		/*__JS__ */if(typeof o!='string' || o.indexOf('&layadic_')!=0)return o;
		/*__JS__ */return LAYABOX.DICKEYS[o.toString()];
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/typeas.as=======100000000.000000
	iflash.method.typeAs=function(value,type){
		/*__JS__ */return (LAYABOX.typeof(value,type))?value:null;
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/cleartimeout.as=======100000000.000000
	iflash.utils.clearTimeout=function(id){
		SetIntervalTimer.clearInterval(id);
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/importjs.as=======100000000.000000
	iflash.method.importJS=function(jsFile,callback,evalJs){
		(evalJs===void 0)&& (evalJs=true);
		LAYABOX.importsJS=LAYABOX.importsJS || [];
		if ((jsFile instanceof Array)){
			var s=jsFile.length;
			for (var i=0;i < jsFile.length;i++){
				jsFile[i]=Method.formatUrl(jsFile[i]);
				iflash.method.importJS(jsFile[i],function(){
					s--;
					if (s==0){
						for (var j=0;j < jsFile.length;j++){
							LAYABOX.mainModule.eval(new FileRead(jsFile[j]).load());
						}
						callback();
					}
				},false);
			}
			return;
		}

		jsFile=Method.formatUrl(jsFile);
		trace("import JavaScript:"+jsFile);
		if (LAYABOX.importsJS[jsFile]){
			callback();
			return;
		}

		new FileRead(jsFile,{reader:window,onload:function (file){evalJs && LAYABOX.mainModule.eval(file.load());LAYABOX.importsJS[jsFile]=true;callback();}});
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/regclass.as=======100000000.000000
	iflash.utils.regClass=function(name,_class){
		/*__JS__ */LAYABOX.classmap[name]=_class;
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/formatstring.as=======100000000.000000
	iflash.utils.formatString=function(format,__args){
		var args=[];for(var i=1,sz=arguments.length;i<sz;i++)args.push(arguments[i]);
		for (var i=0;i<args.length;++i)
		format=format.replace(new RegExp("\\{"+i+"\\}","g"),args[i]);
		return format;
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/getclassbyalias.as=======100000000.000000
	iflash.net.getClassByAlias=function(aliasName){
		return iflash.net.getClassByAlias(aliasName);
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/gettimer.as=======100000000.000000
	iflash.utils.getTimer=function(){
		return (/*__JS__ */Date.now()-Timer.__STARTTIME__)*Timer.__SPEED__;
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/navigatetourl.as=======100000000.000000
	iflash.net.navigateToURL=function(request,_window){
		/*__JS__ */window.open(request.url,_window?_window:'_blank');
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/registerclassalias.as=======100000000.000000
	iflash.net.registerClassAlias=function(aliasName,classObject){}
		
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/bind.as=======100000000.000000
	iflash.method.bind=function(context,fun,nothing){
		(nothing===void 0)&& (nothing=false);
		return (fun==null)?null:fun.BIND$(context);
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/dic.as=======100000000.000000
	iflash.method.DIC=function(o){
		/*__JS__ */if(!o || o.__DICKEY__)return o;
		/*__JS__ */if(typeof o=='string' || typeof o=='number')return o;
		/*__JS__ */o.toString=LAYABOX.toStringForDic;
		/*__JS__ */o.toString();return o;
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/method/byteset.as=======100000000.000000
	iflash.method.byteSet=function(byteArray,index,value){
		byteArray._byteSet_(index,value);
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/fscommand.as=======100000000.000000
	iflash.system.fscommand=function(command,args){
		(args===void 0)&& (args="");
	}


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/sendtourl.as=======100000000.000000
	iflash.net.sendToURL=function(request){}
		
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/eventdispatcher.as=======1000199.999994
	var EventDispatcher=iflash.events.EventDispatcher=(function(){
		function EventDispatcher(target){
			this._eventListener_=null;
			this._type_=0;
			this.hidden=2;
			this._repaint_=0;
			this._modle_=null;
			this._private_={};
			this._id_=(++EventDispatcher.__LASTID__);
		}

		REGCLASS$(EventDispatcher,'iflash.events.EventDispatcher',true,true);
		var __proto__=EventDispatcher.prototype;
		LAYABOX.implements(__proto__,{"iflash.events.IEventDispatcher":true,"iflash.laya.system.IObject":true})
		__proto__.checkType=function(type){
			return (this._type_ & type)!=0;
		}

		__proto__.addType=function(type){
			this._type_ |=type;
		}

		__proto__.removeType=function(type){
			this._type_ &=(~type);
		}

		__proto__.lyAddEventListener=function(type,listener,useCapture,priority,useWeakReference){
			(useCapture===void 0)&& (useCapture=false);
			(priority===void 0)&& (priority=0);
			(useWeakReference===void 0)&& (useWeakReference=false);
			if(listener==null){
				return null;
			}
			if (this!=Laya.window && type==/*iflash.events.Event.ENTER_FRAME*/"enterFrame"){
				var l=Laya.window.lyAddEventListener (type,listener,useCapture,priority,useWeakReference);
				l._target_=this;
				return l;
			}
			listener=Method.jsToEventFun(listener);
			if (this._eventListener_==null)this._eventListener_=[];
			var thisType=this._eventListener_[type];
			if (!thisType)
				thisType=this._eventListener_[type]=[];
			else{
				if (thisType.length > 0){
					for (var i=0,sz=thisType.length;i < sz;i++){
						if (thisType[i] && thisType[i].listener==listener)return thisType[i];
					}
				}
			};
			var e=EventListener.__create__(listener,useCapture,priority,useWeakReference,this);
			thisType.push(e);
			return e;
		}

		__proto__.addEventListener=function(type,listener,useCapture,priority,useWeakReference){
			(useCapture===void 0)&& (useCapture=false);
			(priority===void 0)&& (priority=0);
			(useWeakReference===void 0)&& (useWeakReference=false);
			this.lyAddEventListener(type,listener,useCapture,priority,useWeakReference);
		}

		__proto__.dispatchEvent=function(event){
			if(event.bubbles&&(this._type_& /*iflash.laya.dom.Node.TYPE_IFLASH*/0x400000)){
				var target=this;
				var ret=false;
				event._currentTarget_=this;
				while(target){
					if(target.lyDispatchEvent(event))
					{ret=true;}
					target=target.parent;
				}
				return ret;
			}
			else return this.lyDispatchEvent2(event);
		}

		__proto__.addOneEventListener=function(type,listener){
			if (this._eventListener_==null)this._eventListener_=[];
			var thisType=this._eventListener_[type];
			if (!thisType)thisType=this._eventListener_[type]=[];
			thisType.push(listener);
		}

		__proto__.lyDispatchEvent=function(event){
			if (this._eventListener_==null)return false;
			var thisType;
			if ((typeof event=='string')){
				thisType=this._eventListener_[ event];
				if (!thisType)return false;
				event=new Event(event);
			}
			else {
				thisType=this._eventListener_[event.type];
				if (!thisType)return false;
			}
			(thisType[-1]==null)&& (thisType[-1]=0);
			thisType[-1]++;
			var sz=thisType.length+0,bremove=false;
			(event.target==null)&& (event._lytarget=this);
			(event.currentTarget==null)&& (event._currentTarget_=this);
			for (var i=0;i < sz;i++){
				if (!thisType[i] || thisType[i].run(this,event)==false)
					bremove=true;
			}
			if (bremove && thisType[-1]==1){
				var tsz=0;
				for (i=0,sz=thisType.length;i < sz;i++){
					var oe=thisType[i];
					if (oe==null || oe._deleted_)continue ;
					thisType[tsz]=thisType[i];
					tsz++;
				}
				thisType.length=tsz;
				if (thisType.length==0)this._eventListener_[event.type]=null;
			}
			thisType[-1]--;
			return true;
		}

		__proto__.lyDispatchEvent2=function(event){
			if (this._eventListener_==null)return false;
			var thisType;
			if ((typeof event=='string')){
				thisType=this._eventListener_[ event];
				if (!thisType)return false;
				event=new Event(event);
			}
			else {
				thisType=this._eventListener_[event.type];
				if (!thisType)return false;
			}
			(thisType[-1]==null)&& (thisType[-1]=0);
			thisType[-1]++;
			var sz=thisType.length+0,bremove=false;
			event._lytarget=this;
			event._currentTarget_=this;
			for (var i=0;i < sz;i++){
				if (!thisType[i] || thisType[i].run(this,event)==false)
					bremove=true;
			}
			if (bremove && thisType[-1]==1){
				var tsz=0;
				for (i=0,sz=thisType.length;i < sz;i++){
					var oe=thisType[i];
					if (oe==null || oe._deleted_)continue ;
					thisType[tsz]=thisType[i];
					tsz++;
				}
				thisType.length=tsz;
				if (thisType.length==0)this._eventListener_[event.type]=null;
			}
			thisType[-1]--;
			return true;
		}

		__proto__.hasEventListener=function(type){
			return this._eventListener_ && this._eventListener_[type]!=null && this._eventListener_[type].length>0;
		}

		__proto__.removeEventListener=function(type,listener,useCapture){
			(useCapture===void 0)&& (useCapture=false);
			var thisType;
			if (type==/*iflash.events.Event.ENTER_FRAME*/"enterFrame" && this!=Laya.window){
				Laya.window.removeEventListener (type,listener,useCapture);
				return;
			}
			if (this._eventListener_ !=null && (thisType=this._eventListener_[type])){
				for (var i=0,sz=thisType.length;i < sz;i++){
					var oe=thisType[i];
					oe && (oe.listener==listener)&& (oe.destroy(),thisType[i]=null);
				}
			}
		}

		__proto__.willTrigger=function(type){
			return false;
		}

		__proto__.evalEvent=function(event){
			var listeners=this._eventListener_ ?this._eventListener_[event.type] :null;
			var numListeners=listeners==null ? 0 :listeners.length;
			if (numListeners){
				for (var i=0;i<numListeners;++i){
					var listener=listeners[i];
					if(!listener)continue ;
					event._currentTarget_=listener._ower_;
					listener.run(this,event);
					if (event.stopsImmediatePropagation)return true;
				}
				return event.stopsPropagation;
			}else return false;
		}

		__proto__._removeEvents_=function(){
			(this._eventListener_)&&(this._eventListener_.length=0);
		}

		DEFUNENUMPTY$(__proto__,'_$get_deleted',function(){
			return (this._type_&0x1)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_deleted',function(b){
			if ((this._type_ & 0x1)==0){
				this._type_ |=0x1;
				this._eventListener_=null;
			}
		});

		Object.defineProperty(__proto__,'deleted',{get:__proto__._$get_deleted,set:__proto__._$set_deleted,enumerable:false});
		EventDispatcher.TYPE_DELETED=0x1;
		EventDispatcher.document=null;;
		EventDispatcher.window=null;;
		EventDispatcher.__NULLARRAY__=[];
		EventDispatcher.__LASTID__=0;
		return EventDispatcher;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/bytearray.jas=======1000199.999990
	var ByteArray=iflash.utils.ByteArray=(function(){
		function ByteArray(){
			this._length=0;
			this._objectEncoding_=0;
			this._position_=0;
			this._allocated_=8;
			this._data_=null;
			this._littleEndian_=false;
			this._byteView_=null;
			this._strTable=[];
			this._objTable=[];
			this._traitsTable=[];
			/*__JS__ */this.___resizeBuffer(this._allocated_);
		}

		REGCLASS$(ByteArray,'iflash.utils.ByteArray',true,false);
		var __proto__=ByteArray.prototype;
		__proto__.clear=function(){
			this._strTable=[];
			this._objTable=[];
			this._traitsTable=[];
			this._position_=0;
			this.length=0;
		}

		__proto__.ensureWrite=function(lengthToEnsure){
			if (this._length < lengthToEnsure)this.length=lengthToEnsure;
		}

		__proto__.readBoolean=function(){
			return (this.readByte ()!=0);
		}

		__proto__.readByte=function(){
			return this._data_.getUint8 (this._position_++);
		}

		__proto__.readBytes=function(bytes,offset,length){
			(offset===void 0)&& (offset=0);
			(length===void 0)&& (length=0);
			if (offset < 0 || length < 0){
				throw "Read error - Out of bounds";
			}
			if (length==0)length=this._length-this._position_;
			bytes.ensureWrite (offset+length);
			bytes._byteView_.set (this._byteView_.subarray(this._position_,this._position_+length),offset);
			bytes.position=offset;
			this._position_+=length;
			if (bytes.position+length > bytes.length)bytes.length=bytes.position+length;
		}

		__proto__.readDouble=function(){
			var double=this._data_.getFloat64 (this._position_,this._littleEndian_);
			this._position_+=8;
			return double;
		}

		__proto__.readFloat=function(){
			var float=this._data_.getFloat32 (this._position_,this._littleEndian_);
			this._position_+=4;
			return float;
		}

		__proto__.readFullBytes=function(bytes,pos,len){
			this.ensureWrite (len);
			for(var i=pos;i < pos+len;i++){
				this._data_.setInt8 (this._position_++,bytes.get(i));
			}
		}

		__proto__.readInt=function(){
			var tInt=this._data_.getInt32 (this._position_,this._littleEndian_);
			this._position_+=4;
			return tInt;
		}

		__proto__.readShort=function(){
			var short=this._data_.getInt16 (this._position_,this._littleEndian_);
			this._position_+=2;
			return short;
		}

		__proto__.readUnsignedByte=function(){
			return this._data_.getUint8 (this._position_++);
		}

		__proto__.readUnsignedInt=function(){
			var uInt=this._data_.getUint32 (this._position_,this._littleEndian_);
			this._position_+=4;
			return uInt;
		}

		__proto__.readUnsignedShort=function(){
			var uShort=this._data_.getUint16 (this._position_,this._littleEndian_);
			this._position_+=2;
			return uShort;
		}

		__proto__.readUTF=function(){
			return this.readUTFBytes (this.readUnsignedShort ());
		}

		__proto__.readUnicode=function(length){
			var value="";
			var max=this._position_+length;
			var c1=0,c2=0;
			while (this._position_ < max){
				c2=this._byteView_[this._position_++];
				c1=this._byteView_[this._position_++];
				value+=String.fromCharCode(c1<<8 | c2);
			}
			return value;
		}

		__proto__.readMultiByte=function(length,charSet){
			if(charSet=="UNICODE" || charSet=="unicode"){
				return this.readUnicode(length);
			}
			return this.readUTFBytes (length);
		}

		__proto__.readUTFBytes=function(len){
			var value="";
			var max=this._position_+len;
			var c=0,c2=0,c3=0;
			while (this._position_ < max){
				c=this._data_.getUint8 (this._position_++);
				if (c < 0x80){
					if (c==0)break ;
					value+=String.fromCharCode (c);
					}else if (c < 0xE0){
					value+=String.fromCharCode (((c & 0x3F)<< 6)| (this._data_.getUint8 (this._position_++)& 0x7F));
					}else if (c < 0xF0){
					c2=this._data_.getUint8 (this._position_++);
					value+=String.fromCharCode (((c & 0x1F)<< 12)| ((c2 & 0x7F)<< 6)| (this._data_.getUint8 (this._position_++)& 0x7F));
					}else {
					c2=this._data_.getUint8 (this._position_++);
					c3=this._data_.getUint8 (this._position_++);
					value+=String.fromCharCode (((c & 0x0F)<< 18)| ((c2 & 0x7F)<< 12)| ((c3 << 6)& 0x7F)| (this._data_.getUint8 (this._position_++)& 0x7F));
				}
			}
			return value;
		}

		__proto__.toString=function(){
			var cachePosition=this._position_;
			this._position_=0;
			var value=this.readUTFBytes (this.length);
			this._position_=cachePosition;
			return value;
		}

		__proto__.writeBoolean=function(value){
			this.writeByte (value ? 1 :0);
		}

		__proto__.writeByte=function(value){
			this.ensureWrite (this._position_+1);
			this._data_.setInt8 (this._position_,value);
			this._position_+=1;
		}

		__proto__.writeBytes=function(bytes,offset,length){
			(offset===void 0)&& (offset=0);
			(length===void 0)&& (length=0);
			if (offset < 0 || length < 0)throw "writeBytes error - Out of bounds";
			if(length==0)length=bytes.length-offset;
			this.ensureWrite (this._position_+length);
			/*__JS__ */this._byteView_.set(bytes._byteView_.subarray (offset,offset+length),this._position_);
			this._position_+=length;
		}

		__proto__.writeArrayBuffer=function(arraybuffer,offset,length){
			(offset===void 0)&& (offset=0);
			(length===void 0)&& (length=0);
			if (offset < 0 || length < 0)throw "writeArrayBuffer error - Out of bounds";
			if(length==0)length=arraybuffer.byteLength-offset;
			this.ensureWrite (this._position_+length);
			var uint8array=/*__JS__ */new Uint8Array(arraybuffer);
			/*__JS__ */this._byteView_.set(uint8array.subarray (offset,offset+length),this._position_);
			this._position_+=length;
		}

		__proto__.writeDouble=function(x){
			this.ensureWrite (this._position_+8);
			this._data_.setFloat64 (this._position_,x,this._littleEndian_);
			this._position_+=8;
		}

		__proto__.writeFloat=function(x){
			this.ensureWrite (this._position_+4);
			this._data_.setFloat32 (this._position_,x,this._littleEndian_);
			this._position_+=4;
		}

		__proto__.writeInt=function(value){
			/*__JS__ */this.ensureWrite (this._position_+4);
			/*__JS__ */this._data_.setInt32 (this._position_,value,this._littleEndian_);
			this._position_+=4;
		}

		__proto__.writeShort=function(value){
			this.ensureWrite (this._position_+2);
			this._data_.setInt16 (this._position_,value,this._littleEndian_);
			this._position_+=2;
		}

		__proto__.writeUnsignedInt=function(value){
			this.ensureWrite (this._position_+4);
			this._data_.setUint32 (this._position_,value,this._littleEndian_);
			this._position_+=4;
		}

		__proto__.writeUnsignedShort=function(value){
			this.ensureWrite (this._position_+2);
			this._data_.setUint16 (this._position_,value,this._littleEndian_);
			this._position_+=2;
		}

		__proto__.writeUTF=function(value){
			value=value+"";
			this.writeUnsignedShort (this._getUTFBytesCount(value));this.writeUTFBytes (value);
		}

		__proto__.writeUnicode=function(value){
			value=value+"";
			this.ensureWrite (this._position_+value.length*2);
			var c=0;
			for(var i=0,sz=value.length;i<sz;i++){
				c=value.charCodeAt(i);
				this._byteView_[this._position_++]=c&0xff;
				this._byteView_[this._position_++]=c>>8;
			}
		}

		__proto__.writeMultiByte=function(value,charSet){
			value=value+"";
			if(charSet=="UNICODE" || charSet=="unicode"){
				return this.writeUnicode(value);
			}
			this.writeUTFBytes(value);
		}

		__proto__.writeUTFBytes=function(value){
			value=value+"";
			for (var i=0,sz=value.length;i < sz;i++){
				var c=value.charCodeAt(i);
				if (c <=0x7F){
					this.writeByte (c);
					}else if (c <=0x7FF){
					this.writeByte (0xC0 | (c >> 6));
					this.writeByte (0x80 | (c & 63));
					}else if (c <=0xFFFF){
					this.writeByte(0xE0 | (c >> 12));
					this.writeByte(0x80 | ((c >> 6)& 63));
					this.writeByte(0x80 | (c & 63));
					}else {
					this.writeByte(0xF0 | (c >> 18));
					this.writeByte(0x80 | ((c >> 12)& 63));
					this.writeByte(0x80 | ((c >> 6)& 63));
					this.writeByte(0x80 | (c & 63));
				}
			}
		}

		__proto__.__fromBytes=function(inBytes){
			this._byteView_=/*__JS__ */new Uint8Array(inBytes.getData ());
			this.length=this._byteView_.length;
			this._allocated_=this.length;
		}

		__proto__.__get=function(pos){
			return this._data_.getUint8(pos);
		}

		__proto__._getUTFBytesCount=function(value){
			var count=0;
			value=value+"";
			for (var i=0,sz=value.length;i < sz;i++){
				var c=value.charCodeAt(i);
				if (c <=0x7F){
					count+=1;
					}else if (c <=0x7FF){
					count+=2;
					}else if (c <=0xFFFF){
					count+=3;
					}else {
					count+=4;
				}
			}
			return count;
		}

		__proto__._byteAt_=function(index){
			return this._byteView_[index];
		}

		__proto__._byteSet_=function(index,value){
			this.ensureWrite (index+1);
			this._byteView_[index]=value;
		}

		__proto__.uncompress=function(algorithm){
			(algorithm===void 0)&& (algorithm="zlib");
			/*__JS__ */var inflate=new Zlib.Inflate(this._byteView_);
			/*__JS__ */this._byteView_=inflate.decompress();
			/*__JS__ */this._data_=new DataView(this._byteView_ .buffer);;
			this._allocated_=this._length=this._byteView_.byteLength;
			this._position_=0;
		}

		__proto__.compress=function(algorithm){
			(algorithm===void 0)&& (algorithm="zlib");
			/*__JS__ */var deflate=new Zlib.Deflate(this._byteView_);
			/*__JS__ */this._byteView_=deflate.compress();
			/*__JS__ */this._data_=new DataView(this._byteView_.buffer);;
			this._position_=this._allocated_=this._length=this._byteView_.byteLength;
		}

		__proto__.___resizeBuffer=function(len){
			try{
				var newByteView=/*__JS__ */new Uint8Array(len);
				if (this._byteView_!=null){
					if (this._byteView_.length <=len)newByteView.set (this._byteView_);
					else newByteView.set (this._byteView_.subarray (0,len));
				}
				this._byteView_=newByteView;
				this._data_=/*__JS__ */new DataView(newByteView.buffer);
			}
			catch (err){
				throw "___resizeBuffer err:"+len;
			}
		}

		__proto__.__getBuffer=function(){
			this._data_.buffer.byteLength=this.length;
			return this._data_.buffer;
		}

		__proto__.__set=function(pos,v){
			this._data_.setUint8 (pos,v);
		}

		__proto__.setUint8Array=function(data){
			this._byteView_=data;
			this._data_=/*__JS__ */new DataView(data.buffer);
			this._length=data.byteLength;
			this._position_=0;
		}

		__proto__.readObject=function(){
			this._strTable=[];
			this._objTable=[];
			this._traitsTable=[];
			return this.readObject2();
		}

		__proto__.readObject2=function(){
			var type=this.readByte();
			return this.readObjectValue(type);
		}

		__proto__.readObjectValue=function(type){
			var value;
			switch (type){
				case 1:
					break ;
				case 6:
					value=this.__readString();
					break ;
				case 4:
					value=this.readInterger();
					break ;
				case 2:
					value=false;
					break ;
				case 3:
					value=true;
					break ;
				case 10:
					value=this.readScriptObject();
					break ;
				case 9:
					value=this.readArray();
					break ;
				case 5:
					value=this.readDouble();
					break ;
				default :
					trace("Unknown object type tag!!!"+type);
				}
			return value;
		}

		__proto__.readInterger=function(){
			var i=this.readUInt29();
			i=(i << 3)>> 3;
			return int(i);
		}

		__proto__.getStrRef=function(ref){
			return this._strTable[ref];
		}

		__proto__.getObjRef=function(ref){
			return this._objTable[ref];
		}

		__proto__.__readString=function(){
			var ref=this.readUInt29();
			if ((ref & 1)==0){
				return this.getStrRef(ref >> 1);
			};
			var len=(ref >> 1);
			if (0==len){
				return "";
			};
			var str=this.readUTFBytes(len);
			this._strTable.push(str);
			return str;
		}

		__proto__.readTraits=function(ref){
			var ti;
			if ((ref & 3)==1){
				ti=this.getTraitReference(ref >> 2);
				return ti.propoties?ti:{obj:{}};
			}
			else{
				var externalizable=((ref & 4)==4);
				var isDynamic=((ref & 8)==8);
				var count=(ref >> 4);
				var className=this.__readString();
				ti={};
				ti.className=className;
				ti.propoties=[];
				ti.dynamic=isDynamic;
				ti.externalizable=externalizable;
				if(count>0){
					for(var i=0;i<count;i++){
						var propName=this.__readString();
						ti.propoties.push(propName);
					}
				}
				this._traitsTable.push(ti);
				return ti;
			}
		}

		__proto__.readScriptObject=function(){
			var ref=this.readUInt29();
			if ((ref & 1)==0){
				return this.getObjRef(ref >> 1);
			}
			else{
				var objref=this.readTraits(ref);
				var className=objref.className;
				var externalizable=objref.externalizable;
				var obj={};
				var objectId=this._objTable.length;
				this._objTable.push(obj);
				var propName;
				var pros=objref.propoties;
				if(pros){
					for(var d=0;d<pros.length;d++){
						obj[pros[d]]=this.readObject2();
					}
				}
				if(objref.dynamic){
					for (;;){
						propName=this.__readString();
						if (propName==null || propName.length==0)break ;
						obj[propName]=this.readObject2();
					}
				}
				return obj;
			}
		}

		__proto__.readArray=function(){
			var ref=this.readUInt29();
			if ((ref & 1)==0){
				return this.getObjRef(ref >> 1);
			};
			var obj=null;
			var count=(ref >> 1);
			var propName;
			for (;;){
				propName=this.__readString();
				if (propName==null || propName.length==0)break ;
				if (obj==null){
					obj={};
				}
				obj[propName]=this.readObject2();
			}
			if (obj==null){
				obj=[];
				for (var i=0;i < count;i++){
					obj.push(this.readObject2());
				}
				}else {
				for (var i=0;i < count;i++){
					obj[i.toString()]=this.readObject2();
				}
			}
			this._objTable.push(obj);
			return obj;
		}

		__proto__.readUInt29=function(){
			var value=0;
			var b=this.readByte()& 0xFF;
			if (b < 128){
				return b;
			}
			value=(b & 0x7F)<< 7;
			b=this.readByte()& 0xFF;
			if (b < 128){
				return (value | b);
			}
			value=(value | (b & 0x7F))<< 7;
			b=this.readByte()& 0xFF;
			if (b < 128){
				return (value | b);
			}
			value=(value | (b & 0x7F))<< 8;
			b=this.readByte()& 0xFF;
			return (value | b);
		}

		__proto__.writeObject=function(o){
			if ((typeof o=='string')){
				this.writeAMFString(o);
				}else if (((typeof o=='number')&& Math.floor(o)==o)){
				this.writeAMFInt(o);
				}else if ((typeof o=='boolean')){
				this.writeAMFBoolean(o);
				}else if ((o instanceof Array)){
				this.writeArray(o);
				}else {
				this.writeCustomObject(o);
			}
		}

		__proto__.writeAMFString=function(s){
			this.writeByte(6);
			this.writeStringWithoutType(s);
		}

		__proto__.writeStringWithoutType=function(s){
			if (s.length==0){
				this.writeUInt29(1);
				return;
			};
			var utflen=this._getUTFBytesCount(s);
			this.writeUInt29((utflen << 1)| 1);
			this.writeUTFBytes(s);
		}

		__proto__.writeAMFInt=function(i){
			if (i >=ByteArray.INT28_MIN_VALUE && i <=0x0FFFFFFF){
				i=i & 0x1FFFFFFF;
				this.writeByte(4);
				this.writeUInt29(i);
			}else {}
		}

		__proto__.writeAMFBoolean=function(b){
			if (b)
				this.writeByte(3);
			else
			this.writeByte(2);
		}

		__proto__.writeCustomObject=function(o){
			this.writeByte(10);
			var count=0;
			for (var key in o){
				count++;
			}
			this.writeUInt29(0x0B);
			this.writeStringWithoutType("");
			for (var key in o){
				this.writeStringWithoutType(key);
				this.writeObject(o[key]);
			}
			this.writeStringWithoutType("");
		}

		__proto__.writeArray=function(value){
			this.writeByte(9);
			var len=value.length;
			this.writeUInt29((len << 1)| 1);
			this.writeStringWithoutType("");
			for (var i=0;i < len;i++){
				this.writeObject(value[i]);
			}
		}

		__proto__.writeMapAsECMAArray=function(o){
			this.writeByte(9);
			this.writeUInt29((0 << 1)| 1);
			var count=0;
			for (var key in o){
				count++;
			}
			for (var key in o){
				this.writeStringWithoutType(key);
				this.writeObject(o[key]);
			}
			this.writeStringWithoutType("");
		}

		__proto__.writeUInt29=function(ref){
			if (ref < 0x80){
				this.writeByte(ref);
				}else if (ref < 0x4000){
				this.writeByte(((ref >> 7)& 0x7F)| 0x80);
				this.writeByte(ref & 0x7F);
				}else if (ref < 0x200000){
				this.writeByte(((ref >> 14)& 0x7F)| 0x80);
				this.writeByte(((ref >> 7)& 0x7F)| 0x80);
				this.writeByte(ref & 0x7F);
				}else if (ref < 0x40000000){
				this.writeByte(((ref >> 22)& 0x7F)| 0x80);
				this.writeByte(((ref >> 15)& 0x7F)| 0x80);
				this.writeByte(((ref >> 8)& 0x7F)| 0x80);
				this.writeByte(ref & 0xFF);
				}else {
				trace("Integer out of range: "+ref);
			}
		}

		__proto__.getTraitReference=function(ref){
			return this._traitsTable[ref];
		}

		DEFUNENUMPTY$(__proto__,'_$get_bytesAvailable',function(){
			return this.length-this._position_;
		});

		Object.defineProperty(__proto__,'bytesAvailable',{get:__proto__._$get_bytesAvailable,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_length',function(){
			return this._length;
		});

		DEFUNENUMPTY$(__proto__,'_$set_length',function(value){
			if (this._allocated_ < value)
				this.___resizeBuffer (this._allocated_=Math.floor (Math.max (value,this._allocated_ *2)));
			else if (this._allocated_ > value)
			this.___resizeBuffer (this._allocated_=value);
			this._length=value;
		});

		Object.defineProperty(__proto__,'length',{get:__proto__._$get_length,set:__proto__._$set_length,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_endian',function(){
			return this._littleEndian_ ? "littleEndian" :"bigEndian";
		});

		DEFUNENUMPTY$(__proto__,'_$set_endian',function(endianStr){
			this._littleEndian_=(endianStr=="littleEndian");
		});

		Object.defineProperty(__proto__,'endian',{get:__proto__._$get_endian,set:__proto__._$set_endian,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_position',function(){
			return this._position_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_position',function(pos){
			if (pos < this._length)
				this._position_=pos < 0?0:pos;
			else{
				this._position_=pos;
				this.length=pos;
			}
		});

		Object.defineProperty(__proto__,'position',{get:__proto__._$get_position,set:__proto__._$set_position,enumerable:false});
		ByteArray.__ofBuffer=function(buffer){
			var bytes=/*__JS__ */new ByteArray ();
			bytes.length=bytes.allocated=buffer.byteLength;
			bytes.data=/*__JS__ */new DataView(buffer);
			bytes.byteView=/*__JS__ */new Uint8Array(buffer);
			return bytes;
		}

		ByteArray.BIG_ENDIAN="bigEndian";
		ByteArray.LITTLE_ENDIAN="littleEndian";
		ByteArray.UNDEFINED_TYPE=0;
		ByteArray.NULL_TYPE=1;
		ByteArray.FALSE_TYPE=2;
		ByteArray.TRUE_TYPE=3;
		ByteArray.INTEGER_TYPE=4;
		ByteArray.DOUBLE_TYPE=5;
		ByteArray.STRING_TYPE=6;
		ByteArray.XML_TYPE=7;
		ByteArray.DATE_TYPE=8;
		ByteArray.ARRAY_TYPE=9;
		ByteArray.OBJECT_TYPE=10;
		ByteArray.AVMPLUSXML_TYPE=11;
		ByteArray.BYTEARRAY_TYPE=12;
		ByteArray.EMPTY_STRING="";
		ByteArray.UINT29_MASK=0x1FFFFFFF;
		ByteArray.INT28_MAX_VALUE=0x0FFFFFFF;
		ByteArray.INT28_MIN_VALUE=-268435456;
		return ByteArray;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/int.jas=======1000199.999987
	var int=(function(){
		function int(value){
			(value===void 0)&& (value=0);
			if(value==true)return 1;
			return !value?0:int.safe_int(LAYABOX.parseInt(value));
		}

		REGCLASS$(int,'int',true,false);
		var __proto__=int.prototype;
		__proto__.toString=function(radix){
			(radix===void 0)&& (radix=10);
			return Number(this).toString(radix);
		}

		__proto__.valueOf=function(){
			return this;
		}

		__proto__.toExponential=function(p){
			(p===void 0)&& (p=0);
			return Number(this).toExponential(p);
		}

		__proto__.toPrecision=function(p){
			(p===void 0)&& (p=0);
			return Number(this).toPrecision(p);
		}

		__proto__.toFixed=function(p){
			(p===void 0)&& (p=0);
			return Number(this).toFixed(p);
		}

		int.safe_int=function(x){
			var lsw=(x & 0xFFFF);
			var msw=(x >> 16)+(lsw >> 16);
			return (msw << 16)| (lsw & 0xFFFF);
		}

		int.MIN_VALUE=-2147483648;
		int.MAX_VALUE=2147483647;
		int.length=1;
		return int;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/event.as=======1000199.999891
	var Event=iflash.events.Event=(function(){
		function Event(type,bubbles,cancelable,_d){
			this.type=null;
			this.lytime=null;
			this._lytarget=null;
			this._currentTarget_=null;
			this.touchPhase=null;
			this._type_=0;
			this._lyData=null;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			this._type_=0;
			this.bubbles=bubbles;
			this.type=type;
			this.cancelable=cancelable;
			!this._lyData&&(this._lyData=_d);
		}

		REGCLASS$(Event,'iflash.events.Event',true,false);
		var __proto__=Event.prototype;
		__proto__._lysetTarget=function(obj){
			this._lytarget=obj;
		}

		__proto__.clone=function(){
			return new Event(this.type,this.bubbles,this.cancelable,this._lyData);
		}

		__proto__.stopPropagation=function(){
			this.stopsPropagation=this.returnValue=true;
		}

		__proto__.stopImmediatePropagation=function(){
			this.stopsImmediatePropagation=true;
		}

		__proto__.formatToString=function(className,__rest){
			var rest=[];for(var i=1,sz=arguments.length;i<sz;i++)rest.push(arguments[i]);
			return null;}
		__proto__.isDefaultPrevented=function(){return false;}
		__proto__.preventDefault=function(){}
		__proto__.toString=function(){
			return "event:"+this._type_;
		}

		__proto__.checkType=function(type){
			return (this._type_ & type)!=0;
		}

		__proto__.addType=function(type){
			this._type_ |=type;
		}

		__proto__.removeType=function(type){
			(this._type_ &=~ type);
		}

		DEFUNENUMPTY$(__proto__,'_$get_eventPhase',function(){return 0;});
		Object.defineProperty(__proto__,'eventPhase',{get:__proto__._$get_eventPhase,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_stopsPropagation',function(){
			return (this._type_&=0x10)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_stopsPropagation',function(value){
			if(value)
				this._type_|=0x10;
			else
			this._type_&=~0x10;
		});

		Object.defineProperty(__proto__,'stopsPropagation',{get:__proto__._$get_stopsPropagation,set:__proto__._$set_stopsPropagation,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_returnValue',function(){
			return this.checkType(0x4);
		});

		DEFUNENUMPTY$(__proto__,'_$set_returnValue',function(b){
			if (b)this.addType(0x4);
			else this.removeType(0x4);
		});

		Object.defineProperty(__proto__,'returnValue',{get:__proto__._$get_returnValue,set:__proto__._$set_returnValue,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_stopsImmediatePropagation',function(){
			return (this._type_&=0x8)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_stopsImmediatePropagation',function(value){
			if(value)
				this._type_|=0x8;
			else
			this._type_&=~0x8;
		});

		Object.defineProperty(__proto__,'stopsImmediatePropagation',{get:__proto__._$get_stopsImmediatePropagation,set:__proto__._$set_stopsImmediatePropagation,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_currentTarget',function(){
			return this._currentTarget_;
		});

		Object.defineProperty(__proto__,'currentTarget',{get:__proto__._$get_currentTarget,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_target',function(){
			return this._lytarget;
		});

		Object.defineProperty(__proto__,'target',{get:__proto__._$get_target,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bubbles',function(){
			return this.checkType(0x1);
		});

		DEFUNENUMPTY$(__proto__,'_$set_bubbles',function(b){
			if (b)this.addType(0x1);
			else this.removeType(0x1);
		});

		Object.defineProperty(__proto__,'bubbles',{get:__proto__._$get_bubbles,set:__proto__._$set_bubbles,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_cancelable',function(){
			return this.checkType(0x2);
		});

		DEFUNENUMPTY$(__proto__,'_$set_cancelable',function(b){
			if (b)this.addType(0x2);
			else this.removeType(0x2);
		});

		Object.defineProperty(__proto__,'cancelable',{get:__proto__._$get_cancelable,set:__proto__._$set_cancelable,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_lyData',function(){
			return this._lyData;
		});

		DEFUNENUMPTY$(__proto__,'_$set_lyData',function(value){
			this._lyData=value;
		});

		Object.defineProperty(__proto__,'lyData',{get:__proto__._$get_lyData,set:__proto__._$set_lyData,enumerable:false});
		Event.ACTIVATE="activate";
		Event.ADDED="added";
		Event.ADDED_TO_STAGE="addedToStage";
		Event.CANCEL="cancel";
		Event.CHANGE="change";
		Event.DESTROY="destroy";
		Event.CLEAR="clear";
		Event.CLOSE="close";
		Event.COMPLETE="complete";
		Event.CONNECT="connect";
		Event.CONTEXT3D_CREATE="context3DCreate";
		Event.COPY="copy";
		Event.CUT="cut";
		Event.DEACTIVATE="deactivate";
		Event.ENTER_FRAME="enterFrame";
		Event.EXIT_FRAME="exitFrame";
		Event.FRAME_CONSTRUCTED="frameConstructed";
		Event.FULLSCREEN="fullScreen";
		Event.ID3="id3";
		Event.INIT="init";
		Event.MOUSE_LEAVE="mouseLeave";
		Event.OPEN="open";
		Event.LOADED="loaded";
		Event.PASTE="paste";
		Event.ONRESHOW="onreshow";
		Event.REMOVED="removed";
		Event.REMOVED_FROM_STAGE="removedFromStage";
		Event.RENDER="render";
		Event.RESIZE="resize";
		Event.REPOS="repos";
		Event.SCROLL="scroll";
		Event.SCROLLSIZE="scrollsize";
		Event.SELECT="select";
		Event.SELECT_ALL="selectAll";
		Event.SOUND_COMPLETE="soundComplete";
		Event.TAB_CHILDREN_CHANGE="tabChildrenChange";
		Event.TAB_ENABLED_CHANGE="tabEnabledChange";
		Event.TAB_INDEX_CHANGE="tabIndexChange";
		Event.TEXT_INTERACTION_MODE_CHANGE="textInteractionModeChange";
		Event.UNLOAD="unload";
		Event.ONPARENT="onparent";
		Event.TODOCUMENT="todocument";
		Event.ERROR="error";
		Event.MESSAGE="message";
		Event.TYPE_BUBBLES=0x1;
		Event.TYPE_CANCELABLE=0x2;
		Event.TYPE_RETURNVALUE=0x4;
		Event.TYPE_STOPSIMMEDIATEPROPAGATION=0x8;
		Event.TYPE_STOPSPROPAGATION=0x10;
		return Event;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/draglisterner.as=======1000199.999885
	var DragListerner=iflash.events.DragListerner=(function(){
		function DragListerner(element,type){
			this._startNodeLeft=null;
			this._startNodeTop=null;
			this._startMouseLeft=null;
			this._startMouseTop=null;
			this._deleted=false;
			this.element=null;
			this.father=null;
			this.dragType=0;
			this.type=null;
			this.stepX=1.001;
			this.stepY=1.001;
			this._lastSpeed=null;
			this.element=element;
			this.father=element.parent;
			this.type=type;
			this.dragType=0;
			this._deleted=false;
		}

		REGCLASS$(DragListerner,'iflash.events.DragListerner',true,true);
		var __proto__=DragListerner.prototype;
		LAYABOX.implements(__proto__,{"iflash.laya.system.IObject":true})
		__proto__.ondrag=function(event){
			var dx=(this.stepX==0)?0:(event.clientX-this._startMouseLeft);
			var dy=(this.stepY==0)?0:(event.clientY-this._startMouseTop);
			switch(this.type){
				case 'default':
					event.stopPropagation();
					break ;
				case 'move':
					this.element._style_.pos(this._startNodeLeft+dx,this._startNodeTop+dy);
					event.stopPropagation();
					break ;
				case 'move-in':
					this.element._style_.pos(BerthManager.getNum(this._startNodeLeft+dx,0,this.father._style_._width_-this.element._style_._width_),
					BerthManager.getNum(this._startNodeTop+dy,0,this.father._style_._height_-this.element._style_._height_));
					event.stopPropagation();
					break ;
				case 'move-view':
					this.element._style_.pos(BerthManager.getNum(this._startNodeLeft+dx,-this.element._style_._width_,this.father._style_._width_),
					BerthManager.getNum(this._startNodeTop+dy,-this.element._style_._height_,this.father._style_._height_));
					event.stopPropagation();
					break ;
				case 'scroll':
					this.element.scrollTo(this._startNodeLeft+dx,this._startNodeTop+dy);
					break ;
				}
		}

		__proto__.onEvent=function(event){
			var x,y;
			switch(event.type){
				case /*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown":
					if (this.dragType!=0)return true;
					this._startMouseLeft=event.clientX;
					this._startMouseTop=event.clientY;
					EventManager.mgr.addToPriority(this.element);
					if (this.type=="scroll"){
						this._startNodeLeft=this.element.scrollLeft;
						this._startNodeTop=this.element.scrollTop;
					}
					else{
						this._startNodeLeft=this.element.left;
						this._startNodeTop=this.element.top;
					}
					this.dragType=1;
					break ;
				case /*iflash.events.MouseEvent.MOUSE_UP*/"mouseup":
					if (this.dragType==0)return true;
					if (this.dragType==2){
						event.type=/*iflash.events.MouseEvent.MOUSE_DRAG_END*/"dragend";
						this.element.lyDispatchEvent(event);
						event.type=/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup";
						event.stopPropagation();
						if (this.type=="scroll")
							BerthManager.addBerth(this.element,null,event.touchId,1,this.stepX,this.stepY,this._startNodeLeft,this._startNodeTop);
					}
					this.dragType=0;
					EventManager.mgr.removeFromePriority(this.element);
					break ;
				case /*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove":
					if (this.dragType==0)return true;
					if (this.dragType==1){
						x=event.clientX-this._startMouseLeft;
						y=event.clientY-this._startMouseTop;
						if ((Math.abs(x)+Math.abs(y))>6){
							this.dragType=2;
							event.type=/*iflash.events.MouseEvent.MOUSE_DRAG_START*/"dragstart";
							this.element.lyDispatchEvent(event);
							event.type=/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove";
						}
					}
					if (this.dragType==2){
						event.type=/*iflash.events.MouseEvent.MOUSE_DRAG*/"drag";
						this.element.lyDispatchEvent(event);
						this.ondrag(event);
						event.type=/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove";
						event.stopPropagation();
					}
					break ;
				}
			return true;
		}

		DEFUNENUMPTY$(__proto__,'_$get_deleted',function(){
			return this._deleted || this.element.deleted;
		});

		DEFUNENUMPTY$(__proto__,'_$set_deleted',function(b){
			this._deleted=b;
		});

		Object.defineProperty(__proto__,'deleted',{get:__proto__._$get_deleted,set:__proto__._$set_deleted,enumerable:false});
		return DragListerner;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/eventlistener.as=======1000199.999884
	var EventListener=iflash.events.EventListener=(function(){
		function EventListener(listener,useCapture,priority,useWeakReference,ower){
			this.listener=null;
			this.useCapture=false;
			this.priority=0;
			this.useWeakReference=false;
			this._ower_=null;
			this._deleted_=false;
			this.data=null;
			this._target_=null;
			this.reset(listener,useCapture,priority,useWeakReference ,ower);
		}

		REGCLASS$(EventListener,'iflash.events.EventListener',true,true);
		var __proto__=EventListener.prototype;
		__proto__.setOwer=function(o){
			this._ower_=o;
		}

		__proto__.run=function(o,event){
			if ((this._ower_ && this._ower_.deleted)|| this.listener==null){
				this.destroy();
				return false;
			};
			var isfalse=true;
			if (this._target_){
				event._lytarget=this._target_;
				event._currentTarget_=this._target_;
				isfalse=this.listener.call(this._ower_,event)==false;
				event._lytarget=o;
			}
			else isfalse=this.listener.call(this._ower_,event)==false;
			if(isfalse)this.destroy();
			return !isfalse;
		}

		__proto__.reset=function(listener,useCapture,priority,useWeakReference,ower){
			this.listener=listener;
			this.useCapture=useCapture;
			this.priority=priority;
			this.useWeakReference=useWeakReference;
			this._ower_=ower;
			this._deleted_=false;
			this.data=null;
		}

		__proto__.destroy=function(){
			if (!this._deleted_){
				this._ower_=null;
				this.listener=null;
				this._target_=null;
				this._deleted_=true;
				this.data=null;
				EventListener.__DisabledEventListener__.push(this);
			}
		}

		EventListener.__create__=function(listener,useCapture,priority,useWeakReference,ower){
			return new EventListener(listener,useCapture,priority,useWeakReference ,ower);
		}

		EventListener.__DisabledEventListener__=[];
		return EventListener;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/eventmanager.as=======1000199.999883
	var EventManager=iflash.events.EventManager=(function(){
		function EventManager(){
			this._curid_=0;
			this._mouseOverNodes_=[];
			this._mousePriorityNodes_=[];
			this._mouseEvents_=[];
			this._keyEvents_=[];
			this._mouseSpeed_=[];
			this._mouseSpeedpast_=[];
			this._currentTouches_=[];
			this.updatedTouches=[];
			this._elapsedTime_=0.0;
			this._preTime_=null;
			this._multitapDistance_=25;
			this._shiftDown_=false;
			this._ctrlDown_=false;
			this._lastTaps_=[];
			this._speedMouse=null;
			this._multitapTime_=10;
		}

		REGCLASS$(EventManager,'iflash.events.EventManager',true,true);
		var __proto__=EventManager.prototype;
		__proto__.addToPriority=function(element){
			this._mousePriorityNodes_.push(element);
		}

		__proto__._makeMatrix_=function(element){
			var cos=1,sin=0,translatex=0,translatey=0,sx,sy,r;
			if (element.rotate % 360 !=0){
				r=element.rotate *Math.PI / 180;
				cos=Math.cos(r);
				sin=Math.sin(r);
			};
			var m=element._mouseEventMatrix_,style=element._style_;
			m?(m.identity()):(m=element._mouseEventMatrix_=new Matrix());
			sx=style.scaleX;
			sy=style.scaleY;
			if (style._transform_ !=null){
				translatex=style._transform_.translate.x;
				translatey=style._transform_.translate.y;
			}
			m.setTransform(cos *sx,sin *sy,-sin *sx,cos *sy,element.offsetLeft+translatex,element.offsetTop+translatey);
			if(translatex!=0||translatey!=0)m.translate(-translatex,-translatey);
			return true;
		}

		__proto__.removeFromePriority=function(element){
			Method.removeFromeArray(this._mousePriorityNodes_,element);
		}

		__proto__._childAcceptMouseEvent=function(element,e,type){
			var childs=element._childs_,i=childs.length,clength=childs.length,child;
			var mouseenable=false;
			while (i--){
				child=childs[i];
				if (child==null || child.hidden !=0)continue ;
				if ((child._type_ & /*iflash.laya.dom.Node.TYPE_ENABLE_MOUSE*/0x100)==0){
					continue ;
				}
				if(child.getStyle()){
					var temp=this.nodeAcceptMouseEvent(child,e,type);
					if(temp==0)return 0;
				}
				if (e.returnValue)
					return-2;
			}
			if(mouseenable){
				return 0;
			}
			return 0;
		}

		__proto__._hitTestDocSize_=function(element,e,type){
			if ((element._style_.transform==null || !element._style_.transform.transformUse)){
				if (!element._hitTestByMatrixNoTransform_(e,true)){
					return 0;
				}
			}
			else{
				this._makeMatrix_(element);
				if (!element._hitTestByMatrix_(e,true)){
					return 0;
				}
			}
			return 1;
		}

		__proto__._dispatchMouseEvent_=function(element,e){
			e._currentTarget_=element;
			!e.target&&e._lysetTarget(element);
			var activeELement=Laya.document.activeElement;
			var hasEventListener=element.hasEventListener(e.type)|| (e.type==/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup" && element.hasEventListener(/*iflash.events.MouseEvent.CLICK*/"click"));
			var bOutEvent=e.bubbles && hasEventListener;
			element._private_.curmouseid=this._curid_;
			switch(e.type){
				case /*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown":
					bOutEvent && element.lyDispatchEvent(e);
					element._private_.ismousedowning=this._curid_;
					if (e.button==/*iflash.events.MouseEvent.MOUSE_DOWN_LEFT*/0)element.addType(/*iflash.laya.dom.Node.TYPE_MOUSE_DOWN*/0x1000);
					if(Laya.document.activeElement!=null && activeELement==Laya.document.activeElement && activeELement._private_.ismousedowning!=this._curid_){
						Laya.document.activeElement.blur();
					}
					break ;
				case /*iflash.events.MouseEvent.MOUSE_UP*/"mouseup":
					bOutEvent && element.lyDispatchEvent(e);
					if (element.checkType(/*iflash.laya.dom.Node.TYPE_MOUSE_DOWN*/0x1000)){
						e.type=/*iflash.events.MouseEvent.CLICK*/"click";
						bOutEvent && element.lyDispatchEvent(e);
						e.type=/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup";
					}
					element.removeType(/*iflash.laya.dom.Node.TYPE_MOUSE_DOWN*/0x1000);
					break ;
				case /*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove":
					hasEventListener && element.lyDispatchEvent(e);
					if (!element.checkType(/*iflash.laya.dom.Node.TYPE_MOUSE_OVER*/0x800)&&
						(element.hasEventListener(/*iflash.events.MouseEvent.MOUSE_OVER*/"mouseover")|| element.hasEventListener(/*iflash.events.MouseEvent.ROLL_OVER*/"mouseover")
					||element.hasEventListener(/*iflash.events.MouseEvent.MOUSE_OUT*/"mouseout")||element.hasEventListener(/*iflash.events.MouseEvent.ROLL_OUT*/"mouseout"))){
						element.addType(/*iflash.laya.dom.Node.TYPE_MOUSE_OVER*/0x800);
						e.type=/*iflash.events.MouseEvent.MOUSE_OVER*/"mouseover";
						element.lyDispatchEvent(e);
						e.type=/*iflash.events.MouseEvent.ROLL_OVER*/"mouseover";
						element.lyDispatchEvent(e);
						e.type=/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove";
						this._mouseOverNodes_.push(element);
					}
					break ;
				}
			element.cancelBubble && (e.returnValue=true);
		}

		__proto__.nodeAcceptMouseEvent=function(element,e,type){
			var _type_=element._type_,x,y;
			if ((_type_ & /*iflash.laya.dom.Node.TYPE_ENABLE_MOUSE*/0x100)==0){
				return-1;
			}
			if (e.type==/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove" && (_type_ & /*iflash.laya.dom.Node.TYPE_ENABLE_MOUSE_MOVE*/0x200)==0){
				return-1;
			}
			x=e.offsetX;
			y=e.offsetY;
			if (!this._hitTestDocSize_(element,e,type)){
				e.offsetX=x;
				e.offsetY=y;
				return-1;
			};
			var tmp=0;
			if(element._childs_.length>0 && element.mouseChildren&&element.mouseEnabled){
				tmp=this._childAcceptMouseEvent(element,e,type)
				if (tmp==-2){
					e.offsetX=x;
					e.offsetY=y;
					return-2;
				}
				else if(tmp==-1){
					e.offsetX=x;
					e.offsetY=y;
					return-1;
				}
			}
			if (!element.mouseEnabled){
				element.cancelBubble && (e.returnValue=true);
				e.offsetX=x;
				e.offsetY=y;
				return e.returnValue?-2:-1;
			}
			this._dispatchMouseEvent_(element,e);
			e.offsetX=x;
			e.offsetY=y;
			return tmp;
		}

		__proto__.acceptSystemKeyEvent=function(event){
			this._keyEvents_.push(event);
		}

		__proto__._dispatchOnMouseEvent_=function(e){
			var i=0,sz=0,element,x=e.offsetX,y=e.offsetY;
			Laya.window.event=e;
			if (Laya.document.adapter.screenRotate==90){
				x=y;
				y=Laya.window.innerHeight-e.offsetX;
			}
			e.clientX=x/Laya.window.scale.x-Laya.document.body.left/Laya.window.scale.x;e.clientY=y/Laya.window.scale.y-Laya.document.body.top/Laya.window.scale.y;
			Laya.document.mouseX=e.clientX;
			Laya.document.mouseY=e.clientY;
			e.offsetX=Laya.window.mouseX=x;
			e.offsetY=Laya.window.mouseY=y;
			Laya.document.lyDispatchEvent(e);
			if (e.returnValue)return;
			for (i=0;i < this._mousePriorityNodes_.length;i++){
				element=this._mousePriorityNodes_[i];
				var point=element.localToGlobal(new Point(0,0));
				e.offsetX-=point.x;
				e.offsetY-=point.y;
				e._currentTarget_=element;
				e._lysetTarget(element);
				element.lyDispatchEvent(e);
				if (e.returnValue)return;
				e.offsetX=x;
				e.offsetY=y;
			}
			e._currentTarget_=null;
			this.nodeAcceptMouseEvent(Laya.document.body,e,true);
			if (e.type !=/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove")return;
			sz=this._mouseOverNodes_.length;
			e.type=/*iflash.events.MouseEvent.MOUSE_OUT*/"mouseout";
			for (i=0;i < sz;i++){
				if ((element=this._mouseOverNodes_[i])._private_.curmouseid !=this._curid_){
					e._currentTarget_=element;
					element.removeType(/*iflash.laya.dom.Node.TYPE_MOUSE_OVER*/0x800);
					element.lyDispatchEvent(e);
					e.type=/*iflash.events.MouseEvent.ROLL_OUT*/"mouseout";
					element.lyDispatchEvent(e)
					e.type=/*iflash.events.MouseEvent.MOUSE_OUT*/"mouseout";
					this._mouseOverNodes_.splice(i,1);
					sz--;
				}
			}
		}

		__proto__._dispatchKeyEvent_=function(event){
			switch(event.type){
				case /*iflash.events.KeyboardEvent.KEY_DOWN*/"keyDown":
					Laya.document.onkeydown && Laya.document.onkeydown(event);
					break ;
				case /*iflash.events.KeyboardEvent.KEY_UP*/"keyUp":
					Laya.document.onkeyup&&Laya.document.onkeyup(event);
				}
			event.currentTarget && event.currentTarget.lyDispatchEvent(event);
			event._currentTarget_=Laya.document.activeElement;
			Laya.document.lyDispatchEvent(event);
		}

		__proto__.dispatchSystemEvent=function(delay){
			(delay===void 0)&& (delay=0);
			var i=0,touch,len=this._lastTaps_.length,eLen=this._mouseEvents_.length,flag=false;
			this._elapsedTime_+=delay;
			this.updatedTouches.length=0;
			if (len > 0){
				for (i=len-1;i>=0;--i)
				if (this._elapsedTime_-this._lastTaps_[i]._timestamp_ > this._multitapTime_)
					this._lastTaps_.splice(i,1),len=this._lastTaps_.length;
			}
			while (eLen > 0){
				len=this._currentTouches_.length;
				for(i=0;i<len;++i)if(this._currentTouches_[i]._phase_==/*iflash.events.TouchPhase.BEGAN*/"began" || this._currentTouches_[i]._phase_==/*iflash.events.TouchPhase.MOVED*/"moved")this._currentTouches_[i]._phase_=/*iflash.events.TouchPhase.STATIONARY*/"stationary";
				while (eLen&&!this.containsWithID(this.updatedTouches,this._mouseEvents_[eLen-1].touchId)){
					var touchArgs=this._mouseEvents_.pop();eLen=this._mouseEvents_.length;var x=touchArgs.offsetX,y=touchArgs.offsetY;
					if (Laya.document.adapter.screenRotate==90){
						x=y;
						y=Laya.window.innerHeight-touchArgs.clientX;
					}
					touchArgs.stageX=touchArgs.clientX=x/Laya.window.scale.x-Laya.document.body.left/Laya.window.scale.x;touchArgs.stageY=touchArgs.clientY=y/Laya.window.scale.y-Laya.document.body.top/Laya.window.scale.y;
					touch=this.createOrUpdateTouch(touchArgs.touchId,touchArgs.touchPhase,touchArgs.type,touchArgs.clientX,touchArgs.clientY);
					this.updatedTouches[this.updatedTouches.length]=touch;
				}
				this.processTouches(this.updatedTouches,this._shiftDown_,this._ctrlDown_);
				for (i=len-1;i>=0;--i)
				{if(this._currentTouches_[i]._phase_==/*iflash.events.TouchPhase.ENDED*/"ended")
					this._currentTouches_.splice(i,1);
				}
				this.updatedTouches.length=0;
			}
			if(!this._keyEvents_.length)return;
			var ks=this._keyEvents_,sz=ks.length;this._keyEvents_=[];
			for (i=0;i < sz;i++){
				var keyevent=new KeyboardEvent(ks[i].type);
				keyevent.changeEvent(ks[i])
				EventManager.stage.lyDispatchEvent(keyevent);
			}
		}

		__proto__.createOrUpdateTouch=function(touchID,phase,touchType,globalX,globalY,pressure,width,height){
			(pressure===void 0)&& (pressure=1.0);
			(width===void 0)&& (width=1.0);
			(height===void 0)&& (height=1.0);
			var touch=this.getCurrentTouch(touchID);
			if (touch==null){
				touch=new Touch(touchID);
				this.addCurrentTouch(touch);
			}
			touch.globalX=globalX;
			touch.globalY=globalY;
			touch._phase_=phase;
			touch._timestamp_=this._elapsedTime_;
			touch._pressure_=pressure;
			touch._width_=width;
			touch._height_=height;
			touch.touchType=touchType;
			if (phase==/*iflash.events.TouchPhase.BEGAN*/"began")this.updateTapCount(touch);
			return touch;
		}

		__proto__.getCurrentTouch=function(touchID){
			var i=0,len=this._currentTouches_.length;
			for(i=0;i<len;++i)
			{if(this._currentTouches_[i].id==touchID)return this._currentTouches_ [i];}
			return null;
		}

		__proto__.containsWithID=function(touches,touchID){
			var len=touches.length;
			for(var i=0;i<len;++i)
			if (touches[i].id==touchID)return true;
			return false;
		}

		__proto__.processTouches=function(touches,shiftDown,ctrlDown){
			EventManager.hoveringTouchData.length=0;
			var touchEvent=new MouseEvent(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",true,false);
			touchEvent.lyData=this._currentTouches_;
			var touch;
			var $each_touch;
			/*for each*/for($each_touch in touches){
				touch=touches[$each_touch];
				if ((touch._phase_==/*iflash.events.TouchPhase.ENDED*/"ended"||touch._phase_==/*iflash.events.TouchPhase.HOVER*/"hover")&& touch.target)
					EventManager.hoveringTouchData[EventManager.hoveringTouchData.length]={touch:touch,target:touch.target,bubbleChain:touch.bubbleChain};
				if (touch._phase_==/*iflash.events.TouchPhase.HOVER*/"hover" || touch._phase_==/*iflash.events.TouchPhase.BEGAN*/"began"){
					EventManager.HELPER_POINT.setTo(touch.globalX,touch.globalY);
					touch.target=Stage.stage._hitTest_(EventManager.HELPER_POINT.x,EventManager.HELPER_POINT.y,true,touch._phase_==/*iflash.events.TouchPhase.BEGAN*/"began");
				}
			}
			var touchData;
			/*for each*/for(var $each_touchData in EventManager.hoveringTouchData){
				touchData=EventManager.hoveringTouchData[$each_touchData];
				if (touchData.touch.target !=touchData.target&&touch._phase_ !=/*iflash.events.TouchPhase.ENDED*/"ended"){
					touchEvent.type="mouseout";
					if(touch.target){
						touch.getLocation(touch.target,EventManager.HELPER_POINT);
					}else EventManager.HELPER_POINT.identity();
					touchEvent.localX=EventManager.HELPER_POINT.x;
					touchEvent.localY=EventManager.HELPER_POINT.y;
					touchEvent.stageX=touch.globalX;
					touchEvent.stageY=touch.globalY;
					touchEvent.dispatch(touchData.bubbleChain);
				}
				else if(touchData.touch.target==touchData.target&&touch._phase_==/*iflash.events.TouchPhase.ENDED*/"ended"){
					touchData.touch.touchType;
					if(touchData.touch.touchType!="mouseup")continue ;
					touchEvent.type="mouseup"
					if(touch.target){
						touch.getLocation(touch.target,EventManager.HELPER_POINT);
					}else EventManager.HELPER_POINT.identity();
					touchEvent.localX=EventManager.HELPER_POINT.x;
					touchEvent.localY=EventManager.HELPER_POINT.y;
					touchEvent.stageX=touch.globalX;
					touchEvent.stageY=touch.globalY;
					touchEvent.dispatch(touchData.bubbleChain,false);
					touchEvent.type="click"
					touchEvent.bubbles=true;
					touchEvent.dispatch(touchData.bubbleChain,false);
					touches.length=0;
				}
			}
			var $each_touch;
			/*for each*/for($each_touch in touches){
				touch=touches[$each_touch];
				touchEvent.type=(touch._phase_==/*iflash.events.TouchPhase.HOVER*/"hover"?"mouseover":touch.touchType);
				if(touch.target){
					touch.getLocation(touch.target,EventManager.HELPER_POINT);
					if(touch.touchType=="mousedown")
						if(Laya.document.activeElement)
					{Laya.document.activeElement.blur();Laya.document.activeElement=null;}
				}else EventManager.HELPER_POINT.identity();
				touchEvent.localX=EventManager.HELPER_POINT.x;
				touchEvent.localY=EventManager.HELPER_POINT.y;
				touchEvent.stageX=touch.globalX;
				touchEvent.stageY=touch.globalY;
				Laya.document.mouseX=touch.globalX;
				Laya.document.mouseY=touch.globalY;
				touch.dispatchEvent(touchEvent);
			}
		}

		__proto__.addCurrentTouch=function(touch){
			for (var i=this._currentTouches_.length-1;i>=0;--i)
			{if (this._currentTouches_[i].id==touch.id)this._currentTouches_.splice(i,1);}
			this._currentTouches_.push(touch);
		}

		__proto__.updateTapCount=function(touch){
			var near=null;
			var minDist=(this._multitapDistance_ *this._multitapDistance_),len=this._lastTaps_.length;
			for(var i=0;i<len;++i){
				var tap=this._lastTaps_[i];
				var sqDist=Math.pow(tap.globalX-touch.globalX,2)+Math.pow(tap.globalY-touch.globalY,2);
				if (sqDist <=minDist){near=tap;break ;}
					}
			if(near){
				touch._tapCount_=near._tapCount_+1;this._lastTaps_.splice(this._lastTaps_.indexOf(near),1);
			}else touch._tapCount_=1;
			this._lastTaps_.push(touch.clone());
		}

		__proto__.acceptSystemMouseEvent=function(event){
			var i=0,len=this._lastTaps_.length;
			if (len > 0){
				for (i=len-1;i>=0;--i)
				if (this._elapsedTime_-this._lastTaps_[i]._timestamp_ > this._multitapTime_)
					this._lastTaps_.splice(i,1),len=this._lastTaps_.length;
			};
			var phase;
			switch(event.type){
				case /*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown":
					phase=/*iflash.events.TouchPhase.BEGAN*/"began";
					break ;
				case /*iflash.events.MouseEvent.MOUSE_UP*/"mouseup":
					phase=/*iflash.events.TouchPhase.ENDED*/"ended";
					break ;
				case /*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove":
					phase=event.buttonDown? /*iflash.events.TouchPhase.MOVED*/"moved":/*iflash.events.TouchPhase.HOVER*/"hover";
					break ;
				}
			event.touchId=0;
			event.touchPhase=phase;
			event.offsetX=event.clientX;
			event.offsetY=event.clientY;
			this._mouseEvents_.push(event);
		}

		EventManager._martix_=null;;
		EventManager.updatedTouches=[];
		EventManager.hoveringTouchData=[];
		EventManager.stage=null;
		EventManager.EVENT=null;
		REGSTATICATTR$(EventManager,
		['mgr',function(){return this.mgr=new EventManager();
			},'HELPER_POINT',function(){return this.HELPER_POINT=new Point();
		}

		]);
		return EventManager;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/eventphase.as=======1000199.999882
	var EventPhase=iflash.events.EventPhase=(function(){
		function EventPhase(){}
		REGCLASS$(EventPhase,'iflash.events.EventPhase',true,true);
		EventPhase.AT_TARGET=2;
		EventPhase.BUBBLING_PHASE=3;
		EventPhase.CAPTURING_PHASE=1;
		return EventPhase;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/throttletype.as=======1000199.999864
	var ThrottleType=iflash.events.ThrottleType=(function(){
		function ThrottleType(){};
		REGCLASS$(ThrottleType,'iflash.events.ThrottleType',true,true);
		ThrottleType.PAUSE="pause";
		ThrottleType.RESUME="resume";
		ThrottleType.THROTTLE="throttle";
		return ThrottleType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/touch.as=======1000199.999862
	var Touch=iflash.events.Touch=(function(){
		function Touch(id){
			this._id_=0;
			this._globalX_=null;
			this._globalY_=null;
			this._previousGlobalX_=null;
			this._previousGlobalY_=null;
			this._tapCount_=0;
			this._phase_=null;
			this._target_=null;
			this._timestamp_=null;
			this._pressure_=null;
			this._width_=null;
			this._height_=null;
			this._bubbleChain_=null;
			this.touchType=null;
			this._id_=id;
			this._tapCount_=0;
			this._phase_=/*iflash.events.TouchPhase.HOVER*/"hover";
			this._pressure_=this._width_=this._height_=1.0;
			this._bubbleChain_=/*new vector.<>*/[];
		}

		REGCLASS$(Touch,'iflash.events.Touch',true,false);
		var __proto__=Touch.prototype;
		__proto__.getLocation=function(space,resultPoint){
			Touch.SHELPER_POINT.setTo(this._globalX_,this._globalY_);
			space.globalToLocal(Touch.SHELPER_POINT,resultPoint);
			return resultPoint;
		}

		__proto__.getPreviousLocation=function(space,resultPoint){
			Touch.SHELPER_POINT.setTo(this._previousGlobalX_,this._previousGlobalY_);
			return space.globalToLocal(Touch.SHELPER_POINT,resultPoint);
		}

		__proto__.getMovement=function(space,resultPoint){
			if (resultPoint==null)resultPoint=new Point();
			this.getLocation(space,resultPoint);
			var x=resultPoint.x;
			var y=resultPoint.y;
			this.getPreviousLocation(space,resultPoint);
			resultPoint.setTo(x-resultPoint.x,y-resultPoint.y);
			return resultPoint;
		}

		__proto__.isTouching=function(target){
			return this._bubbleChain_.indexOf(target)!=-1;
		}

		__proto__.toString=function(){
			return iflash.utils.formatString("Touch {0}: globalX={1}, globalY={2}, phase={3}",this._id_,this._globalX_,this._globalY_,this._phase_);
		}

		__proto__.clone=function(){
			var result=new Touch(this._id_);
			result._globalX_=this._globalX_;
			result._globalY_=this._globalY_;
			result._previousGlobalX_=this._previousGlobalX_;
			result._previousGlobalY_=this._previousGlobalY_;
			result._phase_=this._phase_;
			result._tapCount_=this._tapCount_;
			result._timestamp_=this._timestamp_;
			result._pressure_=this._pressure_;
			result._width_=this._width_;
			result._height_=this._height_;
			result.target=this._target_;
			result.touchType=this.touchType;
			return result;
		}

		__proto__.updateBubbleChain=function(){
			if (this._target_){
				var length=1;
				var element=this._target_;
				this._bubbleChain_.length=1;
				this._bubbleChain_[0]=element;
				while ((element=element.parent)!=null)
				this._bubbleChain_[int(length++)]=element;
			}else this._bubbleChain_.length=0;
		}

		__proto__.dispatchEvent=function(event){this._target_&&event.dispatch(this._bubbleChain_);}
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){return this._id_;});
		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_previousGlobalX',function(){return this._previousGlobalX_;});
		Object.defineProperty(__proto__,'previousGlobalX',{get:__proto__._$get_previousGlobalX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_previousGlobalY',function(){return this._previousGlobalY_;});
		Object.defineProperty(__proto__,'previousGlobalY',{get:__proto__._$get_previousGlobalY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_globalX',function(){return this._globalX_;});
		DEFUNENUMPTY$(__proto__,'_$set_globalX',function(value){
			this._previousGlobalX_=this._globalX_ !=this._globalX_ ? value :this._globalX_;
			this._globalX_=value;
		});

		Object.defineProperty(__proto__,'globalX',{get:__proto__._$get_globalX,set:__proto__._$set_globalX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_globalY',function(){return this._globalY_;});
		DEFUNENUMPTY$(__proto__,'_$set_globalY',function(value){
			this._previousGlobalY_=this._globalY_ !=this._globalY_ ? value :this._globalY_;
			this._globalY_=value;
		});

		Object.defineProperty(__proto__,'globalY',{get:__proto__._$get_globalY,set:__proto__._$set_globalY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_target',function(){return this._target_;});
		DEFUNENUMPTY$(__proto__,'_$set_target',function(value){
			if (this._target_ !=value){
				this._target_=value;
				this.updateBubbleChain();
			}
		});

		Object.defineProperty(__proto__,'target',{get:__proto__._$get_target,set:__proto__._$set_target,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bubbleChain',function(){return this._bubbleChain_.concat();});
		Object.defineProperty(__proto__,'bubbleChain',{get:__proto__._$get_bubbleChain,enumerable:false});
		REGSTATICATTR$(Touch,
		['SHELPER_MATRIX',function(){return this.SHELPER_MATRIX=new Matrix();
		},'SHELPER_POINT',function(){return this.SHELPER_POINT=new Point();}

		]);
		return Touch;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/touchphase.as=======1000199.999860
	var TouchPhase=iflash.events.TouchPhase=(function(){
		function TouchPhase(){};
		REGCLASS$(TouchPhase,'iflash.events.TouchPhase',true,true);
		TouchPhase.HOVER="hover";
		TouchPhase.BEGAN="began";
		TouchPhase.MOVED="moved";
		TouchPhase.STATIONARY="stationary";
		TouchPhase.ENDED="ended";
		return TouchPhase;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/berthmanager.as=======1000199.999742
	var BerthManager=iflash.laya.utils.BerthManager=(function(){
		function BerthManager(){};
		REGCLASS$(BerthManager,'iflash.laya.utils.BerthManager',true,true);
		BerthManager.addMouseSpeed=function(_tid,_x,_y){
			var ms=BerthManager.mouseSpeeds[_tid];
			if (ms==null)
				BerthManager.mouseSpeeds[_tid]=new MouseSpeed(10);
			ms=BerthManager.mouseSpeeds[_tid];
			ms.clear();
			ms.state=true;
			ms.addMouseFrame(_x,_y);
		}

		BerthManager.updataMouseSpeed=function(_tid,_x,_y){
			var ms=BerthManager.mouseSpeeds[_tid];
			if (ms==null)
				return;
			ms.addMouseFrame(_x,_y);
		}

		BerthManager.setMouseEvent=function(_e){
			if (_e.type==/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown"){
				BerthManager.addMouseSpeed(_e.touchId,_e.clientX,_e.clientY);
			}
			else if (_e.type==/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove"){
				BerthManager.updataMouseSpeed(_e.touchId,_e.clientX,_e.clientY);
			}
		}

		BerthManager.addBerth=function(element,callback,_tid,_sp,stepX,stepY,startX,startY){
			var _xsp,_ysp,targetX=0,targetY=0,_time2=100;
			var _tempX=0,_tempY=0,x=0,y=0;
			var ms=BerthManager.mouseSpeeds[_tid];
			if (ms==null)
				return;
			_xsp=ms.curSpeed().x;
			_ysp=ms.curSpeed().y;
			x=element.scrollLeft;
			y=element.scrollTop;
			if (stepX > 0 && stepX <=1)stepX=int(stepX *element.width);
			if (stepY > 0 && stepY <=1)stepY=int(stepY *element.height);
			var _time=Math.max(Math.abs(_xsp)/ _sp,Math.abs(_ysp)/ _sp);
			if (_xsp !=0)
				targetX=(_xsp < 0)? x-_sp *_time *_time :x+_sp *_time *_time;
			if (_ysp !=0)
				targetY=(_ysp < 0)? y+_sp *_time *_time :y+_sp *_time *_time;
			if(stepX==0)targetX *=stepX;
			if (stepY==0)targetY *=stepY;
			var fx=x < startX?0:0;
			var fy=y < startY?0:0;
			if (stepX > 0)x=Math.round((x+fx*stepX)/ stepX)*stepX;
			if (stepY > 0)y=Math.round((y+fy*stepY)/ stepY)*stepY;
			_tempX=BerthManager.getNum(x,element.width-element.scrollWidth,0);
			_tempY=BerthManager.getNum(y,element.height-element.scrollHeight,0);
			if (stepX==0)_tempX=0;
			if (stepY==0)_tempY=0;
			var tween=new Tween(element,null,{ease:Easing.ease_in,time:_time+_time2,onComplete:function (){
					callback&&callback.call();
			}});
			tween.addPercent(0,{"scrollLeft":element.scrollLeft,"scrollTop":element.scrollTop});
			tween.addPercent(_time / (_time+_time2)*100,{"scrollLeft":targetX,"scrollTop":targetY});
			tween.addPercent(100,{"scrollLeft":_tempX,"scrollTop":_tempY});
			tween.start();
		}

		BerthManager.getNum=function(s,begin,end){
			if (s < begin)return begin;
			else if (s > end)return end;
			else return s;
		}

		BerthManager.mouseSpeeds=[];
		return BerthManager;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/documentadapter.as=======1000199.999741
	var DocumentAdapter=iflash.laya.utils.DocumentAdapter=(function(){
		function DocumentAdapter(){
			this.autoScaleDifference=0;
			this.autoScale=true;
			this.isEaqual=true;
			this._screenRotate_=0;
			this._autorotate_="";
			Laya.window.lyAddEventListener(/*iflash.events.Event.RESIZE*/"resize",BIND$(this,this.onResize));
		}

		REGCLASS$(DocumentAdapter,'iflash.laya.utils.DocumentAdapter',true,true);
		var __proto__=DocumentAdapter.prototype;
		__proto__.onResize=function(__args){
			var args=arguments;
			var body=Laya.document.body;
			var window=Laya.window;
			var sx=window.innerWidth / body.width;
			var sy=window.innerHeight / body.height;
			if (!body._style_._sizebeset_()){
				var type=body._style_._type_;
				body.setSize(window.innerWidth,window.innerHeight);
				body._style_._type_=type;
				return;
			}
			if (Math.abs(sx-1)< 0.02)sx=1;
			if (Math.abs(sy-1)< 0.02)sy=1;
			if (Math.abs(sx-sy)> this.autoScaleDifference&&this.isEaqual){
				if (sx > sy){
					sx=sy;
				}
				else{
					sy=sx;
				}
			}
			window.scale.x=sx;
			window.scale.y=sy;
			body.style.scale(sx,sy);
			body.pos(Math.floor(window.innerWidth-body.width *sx)/ 2,Math.floor(window.innerHeight-body.height *sy)/ 2);
		}

		DEFUNENUMPTY$(__proto__,'_$get_autorotate',function(){
			return this._autorotate_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_autorotate',function(type){
			this._autorotate_=type.toLowerCase();
			Laya.window.lyDispatchEvent(/*iflash.events.Event.RESIZE*/"resize");
		});

		Object.defineProperty(__proto__,'autorotate',{get:__proto__._$get_autorotate,set:__proto__._$set_autorotate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_screenRotate',function(){
			return this._screenRotate_;
		});

		Object.defineProperty(__proto__,'screenRotate',{get:__proto__._$get_screenRotate,enumerable:false});
		return DocumentAdapter;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/dynamicproperties.as=======1000199.999739
	var DynamicProperties=iflash.laya.utils.DynamicProperties=(function(){
		function DynamicProperties(_class,fndef,set_get,htmlNeed){
			this.nameWith=null;
			this.valueTo=null;
			this.htmlNeed=false;
			(htmlNeed===void 0)&& (htmlNeed=true);
			this.htmlNeed=htmlNeed;
			if (_class==null)return;
			var strs=DynamicProperties._regProperties.exec(fndef);
			var name=strs[2];
			this.valueTo=strs[4]?DynamicProperties.__CALCULATORTYPE__[strs[4]]:StringMethod.strToStr;
			this.nameWith=set_get==null?name:(set_get);
			_class.prototype["??"+name]=this;
		}

		REGCLASS$(DynamicProperties,'iflash.laya.utils.DynamicProperties',true,true);
		var __proto__=DynamicProperties.prototype;
		__proto__.setValue=function(obj,data){
			obj[this.nameWith]=this.valueTo(data);
		}

		__proto__.getValue=function(obj){
			if(!((obj instanceof iflash.laya.dom.HTMLAudioElement ))&&this.nameWith=="autoplay")
				return null;
			return obj[this.nameWith];
		}

		__proto__.toHTML=function(){
			return this.htmlNeed;
		}

		DynamicProperties.reg=function(_class,fndef,set_get,htmlNeed){
			(htmlNeed===void 0)&& (htmlNeed=true);
			if (fndef.indexOf('(')<0)return new DynamicProperties(_class,fndef,set_get,htmlNeed);
			else return new DynamicMethods(_class,fndef,set_get,htmlNeed);
		}

		REGSTATICATTR$(DynamicProperties,
		['__CALCULATORTYPE__',function(){return this.__CALCULATORTYPE__={'s':StringMethod.strToStr,'i':StringMethod.toInt,'I':StringMethod.strToBigInt,'d':StringMethod.toFloat,'b':StringMethod.toBool,'t':StringMethod.strToTime};
		},'_regProperties',function(){return this._regProperties=new RegExp("(\\s*)([\\w-]+)\\s*(=\\s*(\\w))?");}

		]);
		return DynamicProperties;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/log.as=======1000199.999738
	var Log=iflash.laya.utils.Log=(function(){
		function Log(){}
		REGCLASS$(Log,'iflash.laya.utils.Log',true,true);
		Log.log=function(str){
			if(Log.isLog)trace("[layaLog]:"+str);
		}

		Log.error=function(str){
			if(!Log.isError)trace("[error]:"+str);
		}

		Log.warming=function(str){
			if(!Log.isWarMing)trace("[warming]:"+str);
		}

		Log.unfinished=function(className,functionName){
			if(Log.isOpen)trace("[unfinished]:"+className+"---"+functionName+"暂未实现---");
		}

		Log.isOpen=false;;
		Log.isLog=false;;
		Log.isWarMing=false;;
		Log.isError=false
		return Log;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/matrixutil.as=======1000199.999737
	var MatrixUtil=iflash.laya.utils.MatrixUtil=(function(){
		function MatrixUtil(){throw new Error("can not new MatrixUtil");}
		REGCLASS$(MatrixUtil,'iflash.laya.utils.MatrixUtil',true,true);
		MatrixUtil.transformPoint=function(matrix,point,resultPoint){
			return MatrixUtil.transformCoords(matrix,point.x,point.y,resultPoint);
		}

		MatrixUtil.transformCoords=function(matrix,x,y,resultPoint){
			if (resultPoint==null)resultPoint=new Point();
			resultPoint.x=matrix.a *x+matrix.c *y+matrix.tx;
			resultPoint.y=matrix.d *y+matrix.b *x+matrix.ty;
			return resultPoint;
		}

		MatrixUtil.skew=function(matrix,skewX,skewY){
			var sinX=Math.sin(skewX);
			var cosX=Math.cos(skewX);
			var sinY=Math.sin(skewY);
			var cosY=Math.cos(skewY);
			matrix.setTransform(matrix.a *cosY-matrix.b *sinX,
			matrix.a *sinY+matrix.b *cosX,
			matrix.c *cosY-matrix.d *sinX,
			matrix.c *sinY+matrix.d *cosX,
			matrix.tx *cosY-matrix.ty *sinX,
			matrix.tx *sinY+matrix.ty *cosX);
		}

		MatrixUtil.prependMatrix=function(base,prep){
			base.setTransform(base.a *prep.a+base.c *prep.b,
			base.b *prep.a+base.d *prep.b,
			base.a *prep.c+base.c *prep.d,
			base.b *prep.c+base.d *prep.d,
			base.tx+base.a *prep.tx+base.c *prep.ty,
			base.ty+base.b *prep.tx+base.d *prep.ty);
		}

		MatrixUtil.prependTranslation=function(matrix,tx,ty){
			matrix.tx+=matrix.a *tx+matrix.c *ty;
			matrix.ty+=matrix.b *tx+matrix.d *ty;
		}

		MatrixUtil.prependScale=function(matrix,sx,sy){
			matrix.setTransform(matrix.a *sx,matrix.b *sx,
			matrix.c *sy,matrix.d *sy,
			matrix.tx,matrix.ty);
		}

		MatrixUtil.prependRotation=function(matrix,angle){
			var sin=Math.sin(angle);
			var cos=Math.cos(angle);
			matrix.setTransform(matrix.a *cos+matrix.c *sin,matrix.b *cos+matrix.d *sin,
			matrix.c *cos-matrix.a *sin,matrix.d *cos-matrix.b *sin,
			matrix.tx,matrix.ty);
		}

		MatrixUtil.prependSkew=function(matrix,skewX,skewY){
			var sinX=Math.sin(skewX);
			var cosX=Math.cos(skewX);
			var sinY=Math.sin(skewY);
			var cosY=Math.cos(skewY);
			matrix.setTransform(matrix.a *cosY+matrix.c *sinY,
			matrix.b *cosY+matrix.d *sinY,
			matrix.c *cosX-matrix.a *sinX,
			matrix.d *cosX-matrix.b *sinX,
			matrix.tx,matrix.ty);
		}

		REGSTATICATTR$(MatrixUtil,
		['sRawData',function(){return this.sRawData=
			/*new vector.<>*/[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
		},'sRawData2',function(){return this.sRawData2=new Array(16);}

		]);
		return MatrixUtil;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/method.as=======1000199.999736
	var Method=iflash.laya.utils.Method=(function(){
		function Method(){}
		REGCLASS$(Method,'iflash.laya.utils.Method',true,true);
		Method.getPath=function(url){
			if(url==null || url=="")return "";
			var index=url.indexOf("?");
			if(index<0)index=url.indexOf("#");
			index=url.lastIndexOf("/");
			if (index >=0)url=url.substring(0,index+1);
			else url="/";
			if (url.charAt(0)=='/')url="file://"+url;
			return url;
		}

		Method.formatUrl=function(fileName,basePath){
			if (Laya.config.urlToLower)fileName=fileName.toLowerCase();
			var urlcache=Method.__urlCache__[fileName];
			if (urlcache !=null)return urlcache;
			if (fileName==null){
				return "";
			}
			if ((fileName.charAt(1)==':' && fileName.charAt(2)=='/'))
				fileName="file://"+fileName;
			if (fileName.charAt(0)=="/"){
				return Laya.window.location.fullPath+fileName.substring(1,fileName.length);
			}
			if (basePath==null)basePath=Laya.window.location.fullPath;
			var urlfull=basePath+"/"+fileName;
			urlcache=Method.__urlCache__[urlfull];
			if (urlcache !=null)return urlcache;
			if (fileName.indexOf("://")< 0)
				fileName=basePath+"/"+fileName;
			var urls=fileName.split("/");
			urls[1]="";
			var str,i=2,size=urls.length;
			while (i < size){
				str=urls[i];
				if (str==null)break ;
				if (str=='' || str=='.'){
					urls.splice(i,1);
					continue ;
				}
				if (str==".."){
					urls.splice(i-1,2);
					i-=1;
					continue ;
				}
				i+=1;
			}
			fileName=urls.join("/");
			Method.__urlCache__[fileName]=fileName;
			Method.__urlCache__[urlfull]=fileName;
			return fileName;
		}

		Method.removeFromeArray=function(array,o){
			var index=array.indexOf(o);
			if (index >=0)array.splice(index);
		}

		Method.InitAttributesToHTML=function(initTxt,_class){
			var i=0,sz=0,def,strs,onestrs,out=[],j=0,str;
			strs=initTxt.split(';');
			for (i=0,sz=strs.length;i < sz;i++){
				onestrs=strs[i].split(':');
				if (onestrs[0].length < 1)continue ;
				def={name:onestrs[0],defaultv:onestrs[1],namenew:onestrs[2] };
				if (def.namenew==null)def.namenew=def.name;
				out.push(def);
				if (_class!=null && def.namenew !=def.name)
					iflash.laya.utils.regXmlAttr(_class,def.namenew,def.name);
			}
			return out;
		}

		Method.jsonParse=function(txt,reviver){
			try{
				return JSON.parse(txt,reviver);
			}
			catch(e){
				trace("parse json err:"+e+"\n"+txt);
			}
			return null;
		}

		Method.JsFunctionErr=function(){
			Log.log("flash no script function");
		}

		Method.jsToEventFun=function(s){
			return (((typeof s=='string'))?Browser.eval("(function(event){"+s+";})"):s);
		}

		Method.simpleJsonParse=function(txt,reviver){
			return HTMLStyleElement.getListArry(txt,true);
		}

		Method.insert=function(arr,index,c){
			if (index < 0)throw "insert less than 0";
			if (index>=arr.length){
				arr.push(c);
				return;
			}
			else if (index==0){
				arr.unshift(c);
				return;
			};
			var len=arr.length;
			for (var i=len;i > index;i--){
				arr[i]=arr[i-1];
			}
			arr[index]=c;
		}

		Method.forseInsert=function(arr,index,c){
			if (index < 0)throw "insert less than 0";
			if (index >=arr.length){
				arr.length=index+1;
			}
			arr[index]=c;
		}

		Method.execScript=function(str,url){
			if (Laya.CONCHVER){
				Browser.eval(str,null);
				return;
			}
			try {
				Log.log("execScript:"+url);
				var a=Browser.document.createElement ("script");
				a.type="text/javascript";
				a.text=str;
				var o=Browser.document.getElementsByTagName("head");
				o[0].appendChild(a);
			}
			catch (err){
				/*__JS__ */debugger;
				trace("file eval err:"+err+" url="+url+"\\n"+str);
			}
		}

		Method._JpgToPng=function(img){
			var src=Canvas.create();
			var w=img.width,h=int((img.height-1)/2);
			src.size(w,h);
			src.context.drawImage(img,0,0,w,h,0,0,w,h);
			var imageDataSrc=src.context.getImageData(0,0,w,h);
			var pixelsSrc=imageDataSrc.data;
			if (pixelsSrc==null)Browser.alert("JpgToPng err:"+img.src);
			if (Method.__tmpCanvas__==null)Method.__tmpCanvas__=Canvas.create();
			Method.__tmpCanvas__.active();
			var alpha=Method.__tmpCanvas__;
			alpha.size(w,h);
			alpha.context.drawImage(img,0,h+2,w,h,0,0,w,h);
			var imageDataAlpha=alpha.context.getImageData(0,0,w,h);
			var pixelsAlpha=imageDataAlpha.data;
			var i=0,x=0;
			for (var y=0;y < h;y++){
				i=(y *w)<< 2;
				x=0;
				while (x < w){
					i+=4;
					x++;
					pixelsSrc[i+3]=pixelsAlpha[i];
				}
			}
			src.context.putImageData(imageDataSrc,0,0);
			return src;
		}

		Method.formatUrlType=function(url){
			var question=url.split ("?").length <=1;
			if(!question){
			};
			var _formatUrlType_="";
			var extension="";
			var parts=url.split (".");
			if (parts.length > 0){
				extension=parts[parts.length-1].toLowerCase ();
			}
			return extension;
		}

		Method.__tmpCanvas__=null;
		Method._TEMP_FUN_=null;;
		Method.__urlCache__=[];
		return Method;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/mousespeed.as=======1000199.999735
	var MouseSpeed=iflash.laya.utils.MouseSpeed=(function(){
		function MouseSpeed(_s){
			this._speedPoint=null;
			this._seedLen=0;
			this._timedis=null;
			this._state=false;
			this._cache=null;
			this._seedLen=_s;
			this._speedPoint=[];
		}

		REGCLASS$(MouseSpeed,'iflash.laya.utils.MouseSpeed',true,true);
		var __proto__=MouseSpeed.prototype;
		__proto__.addMouseFrame=function(_x,_y){
			if(!this._state)return;
			if(this._speedPoint.length > this._seedLen-1){
				this._cache=this._speedPoint.shift();
			}
			if(this._cache !=null){
				this._cache["x"]=_x;
				this._cache["y"]=_y;
				this._cache["time"]=iflash.utils.getTimer();
				this._speedPoint.push(this._cache);
				this._cache=null;
			}
			else{
				this._speedPoint.push({"x":_x,"y":_y,"time":iflash.utils.getTimer()});
			}
		}

		__proto__.curSpeed=function(){
			var _x=0;
			var _y=0;
			if(this._speedPoint.length <=1){
				return new Point(_x,_y);
			}
			this._timedis=(this._speedPoint[this._speedPoint.length-1]["time"]-this._speedPoint[0]["time"]);
			_x=(Math.abs(this._speedPoint[this._speedPoint.length-1]["x"])-Math.abs(this._speedPoint[0]["x"]))/ this._timedis;
			_y=(Math.abs(this._speedPoint[this._speedPoint.length-1]["y"])-Math.abs(this._speedPoint[0]["y"]))/ this._timedis;
			return new Point(_x,_y);
		}

		__proto__.clear=function(){
			this.state=false;
			this._speedPoint.length=0;
		}

		DEFUNENUMPTY$(__proto__,'_$get_state',function(){
			return this._state;
		});

		DEFUNENUMPTY$(__proto__,'_$set_state',function(value){
			this._state=value;
		});

		Object.defineProperty(__proto__,'state',{get:__proto__._$get_state,set:__proto__._$set_state,enumerable:false});
		return MouseSpeed;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/stringmethod.as=======1000199.999734
	var StringMethod=iflash.laya.utils.StringMethod=(function(){
		function StringMethod(){}
		REGCLASS$(StringMethod,'iflash.laya.utils.StringMethod',true,true);
		StringMethod.nChar=function(chr,n){
			if (n < 1)return "";
			var str="";
			for (var i=0;i < n;i++)str+=chr;
			return str;
		}

		StringMethod.strToStr=function(value){
			return value;
		}

		StringMethod.toInt=function(d){
			return ((typeof d=='string'))?LAYABOX.parseInt(d):(d);
		}

		StringMethod.toFloat=function(d){
			return ((typeof d=='string'))?parseFloat(d):(d);
		}

		StringMethod.toBool=function(str){
			return (str==true || str=='true');
		}

		StringMethod.strToBigInt=function(value){
			if (value=="infinite")return /*int.MAX_VALUE*/2147483647;
			else return LAYABOX.parseInt(value);
		}

		StringMethod.strToTime=function(tm){
			if (tm==null)return 0;
			var n=1,sz=tm.length;
			if (tm.charAt(sz-1)=='s'){
				if (tm.substring(0,sz-2)=='ms')
					sz-=2;
				else{
					sz--;
					n=1000;
				}
			}
			return Math.floor(parseFloat(tm.substring(0,sz))*n);
		}

		StringMethod.strTrim=function(str){
			return str.replace(StringMethod._string_Trim_,"");
		}

		StringMethod.replaceBlankChar=function(str,dec){
			return str.replace(StringMethod._string_Trim_,'').replace(StringMethod._removeBlankChar_,dec?dec:' ');
		}

		StringMethod.subString=function(str,headstr,endstr,nullrtn,pos){
			if(str==null)return nullrtn;
			var b=str.indexOf(headstr),e=0;
			if(b<0)return nullrtn;
			b+=headstr.length;
			if (endstr==null)return str.substring(b,str.length);
			((e=str.indexOf(endstr,b))< 0)&& (e=str.length);
			if (pos !=null){
				pos.x=b;
				pos.y=e;
			}
			return str.substring(b,e);
		}

		StringMethod.getWordSize=function(font,txt,sz){
			if (sz==null)sz=new Point();
			var w=1,h=font.getFontSize();
			if (txt=='\n'){
				sz.x=w;
				sz.y=h;
				return sz;
			}
			if (font.getPassword())txt='*';
			var canvas=Laya.document.canvas,ctx;
			if(canvas!=null){
				var _fontTxt_=font._toText_();
				var isHZ=false;
				var svw=isHZ?StringMethod._WORDSIZEMAP_[_fontTxt_+" !!!!HZ"]:StringMethod._WORDSIZEMAP_[_fontTxt_+" text="+txt];
				if (isNaN(svw)){
					ctx=canvas.context;
					ctx.save();
					ctx.font=_fontTxt_;
					var metrics=ctx.measureText(txt);
					w=metrics.width;
					StringMethod._WORDSIZEMAP_[_fontTxt_+(isHZ?" !!!!HZ":(" text="+txt))]=w;
					ctx.restore();
				}
				else{
					w=svw;
				}
			}
			if(w<1)
				w=Math.floor(font.size/4)+1;
			if (txt=='\t')w *=8;
			if (font.textBorder !=null){
				w+=font.textBorder.size*2;
				h+=font.textBorder.size*2;
			}
			if (font.getTextDecorationi()==/*iflash.laya.css.Font.DECORATION_UNDERLINE*/0x100000)
				h++;
			sz.x=w;
			sz.y=h;
			return sz;
		}

		StringMethod._WORDSIZEMAP_=[];
		REGSTATICATTR$(StringMethod,
		['_string_Trim_',function(){return this._string_Trim_=new RegExp("(^\\s*)|(\\s*$)","g");
			},'_string_LTrim_',function(){return this._string_LTrim_=new RegExp("(^\\s*)","g");
			},'_string_RTrim_',function(){return this._string_RTrim_=new RegExp("(\\s*$)","g");
			},'_removeBlankChar_',function(){return this._removeBlankChar_=new RegExp("\\s+","g");
		}

		]);
		return StringMethod;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/timerobject.as=======1000199.999733
	var TimerObject=iflash.laya.utils.TimerObject=(function(){
		function TimerObject(time,listener,owner,delay,repeatCount){
			this._listener_=null;
			this.owner=null;
			this.isdel=false;
			this.startTime=null;
			this.nextTime=null;
			this.delay=null;
			this.repeatCount=null;
			this.runCount=null;
			this.data=null;
			(delay===void 0)&& (delay=0);
			(repeatCount===void 0)&& (repeatCount=0);
			this.isdel=false;
			this.delay=delay;
			this.repeatCount=repeatCount;
			this._reset_(time,listener,owner);
		}

		REGCLASS$(TimerObject,'iflash.laya.utils.TimerObject',true,true);
		var __proto__=TimerObject.prototype;
		LAYABOX.implements(__proto__,{"iflash.laya.system.IObject":true})
		__proto__._reset_=function(time,listener,owner){
			this.data=null;
			this._listener_=listener;
			this.owner=owner;
			this.startTime=time;
			this.isdel=false;
			this.runCount=0;
			this.nextTime=this.startTime+this.delay;
			return this;
		}

		__proto__.run=function(time){
			if (this.isdel)return false;
			if (this.delay==0)
				return !(this.deleted=((this.owner && this.owner.deleted)|| (this._listener_&&this._listener_.call(this.owner,time,time-this.startTime,this))==false));
			if (this.nextTime==time)return true;
			while (this.nextTime <=time){
				if (this.owner && this.owner.deleted)return !(this.deleted=true);
				if (this._listener_ !=null && (this._listener_.call(this.owner,time,time-this.startTime,this)==false))return !(this.deleted=true);
				this.nextTime+=this.delay;
				this.runCount++;
				if(this.repeatCount>0 && this.runCount>=this.repeatCount)return !(this.deleted=true);
			}
			return true;
		}

		DEFUNENUMPTY$(__proto__,'_$get_listener',function(){
			return this._listener_;
		});

		Object.defineProperty(__proto__,'listener',{get:__proto__._$get_listener,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_deleted',function(){
			return this.isdel;
		});

		DEFUNENUMPTY$(__proto__,'_$set_deleted',function(b){
			this.isdel=b;
			if (b){
				this._listener_=null;
				this.owner=null;
				this.data=null;
			}
		});

		Object.defineProperty(__proto__,'deleted',{get:__proto__._$get_deleted,set:__proto__._$set_deleted,enumerable:false});
		return TimerObject;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/uri.as=======1000199.999732
	var URI=iflash.laya.utils.URI=(function(){
		function URI(_url){
			this.url=null;
			this.path=null;
			this.url=_url;
			this.path=Method.getPath(_url);
		}

		REGCLASS$(URI,'iflash.laya.utils.URI',true,false);
		var __proto__=URI.prototype;
		__proto__.toString=function(){
			return this.url;
		}

		return URI;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/_systemmethod_.as=======1000199.999731
	var _SystemMethod_=iflash.laya.utils._SystemMethod_=(function(){
		function _SystemMethod_(){}
		REGCLASS$(_SystemMethod_,'iflash.laya.utils._SystemMethod_',true,true);
		_SystemMethod_.mouseEnableTo=function(element,type,bMove){
			element._type_ |=type;
			if (element==Laya.document.body)
				return;
			var p=element._parent_;
			if (p==null && element !=Laya.document.body){
				element.addEventListener(/*iflash.events.Event.ONPARENT*/"onparent",function(e){
					_SystemMethod_.mouseEnableTo(element,type,bMove);
					return false;
				});
			}
			if (p==null)return;
			if ((p._type_ & /*iflash.laya.dom.Node.TYPE_ENABLE_MOUSE*/0x100)!=0){
				if(bMove && (p._type_ & /*iflash.laya.dom.Node.TYPE_ENABLE_MOUSE_MOVE*/0x200)!=0)return;
			}
			_SystemMethod_.mouseEnableTo(p,type,bMove);
		}

		_SystemMethod_.childsMustRepaintTellParent=function(e){
			var childs=e._childs_;
			if (childs.length < 1)return;
			var c;
			for (var i=0,sz=childs.length;i < sz;i++){
				c=childs[i];
				if (!(c._type2_ & /*iflash.laya.dom.Node.TYPE2_REPAINTTOPARENT*/0x200000)){
					c._type2_ |=/*iflash.laya.dom.Node.TYPE2_REPAINTTOPARENT*/0x200000;
					_SystemMethod_.childsMustRepaintTellParent(c);
				}
			}
		}

		_SystemMethod_._release_=function(){
			var __node_deleted_list_=Node.__node_deleted_list_;
			var len=__node_deleted_list_.length;
			for (var i=0;i<len;i++){
				var node=__node_deleted_list_.pop();
				if (node !=null)_SystemMethod_._destroy_(node);
				if (i > 100)break ;
			}
		}

		_SystemMethod_._destroy_=function(node){
			if (node._private_==null)return;
			var p=node._parent_;
			p && p.removeChild(node);
			node._modle_=null;
			node._private_=null;
			node._tmctr_=null;
			node._parent_=null;
		}

		REGSTATICATTR$(_SystemMethod_,
		['__MOUSEEVENT__',function(){return this.__MOUSEEVENT__={
				"mousedown":true,
				"mouseup":true,
				"click":true,
				"doubleClick":true,
				"mouseover":true,
				"mouseout":true,
				"drag":true,
				"mousemove":true,
				"rollOver":true,
				"rollOut":true};}
		]);
		return _SystemMethod_;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/biginteger.as=======1000199.999640
	var BigInteger=iflash.utils.BigInteger=(function(){
		function BigInteger(a,b,c){
			this.t=0;
			this.s=0;
			this.am=this.am3;
			if (a !=null){
				if ((typeof a=='number'))
					this.fromNumber(a,b,c);
				else if (b==null && "string" !=typeof a)
				this.fromString(a,256);
				else
				this.fromString(a,b);
			}
		}

		REGCLASS$(BigInteger,'iflash.utils.BigInteger',true,false);
		var __proto__=BigInteger.prototype;
		__proto__.int2char=function(n){
			return BigInteger.BI_RM.charAt(n);
		}

		__proto__.intAt=function(s,i){
			BigInteger.BI_RC.length==0 && BigInteger._bigIntegerInit_();
			var c=BigInteger.BI_RC[s.charCodeAt(i)];
			return (c==null)?-1 :c;
		}

		__proto__.am2=function(i,x,w,j,c,n){
			var xl=x & 0x7fff,xh=x >> 15;
			while (--n >=0){
				var l=this[i] & 0x7fff;
				var h=this[i++] >> 15;
				var m=xh *l+h *xl;
				l=xl *l+((m & 0x7fff)<< 15)+w[j]+(c & 0x3fffffff);
				c=(l >>> 30)+(m >>> 15)+xh *h+(c >>> 30);
				w[j++]=l & 0x3fffffff;
			}
			return c;
		}

		__proto__.am3=function(i,x,w,j,c,n){
			var xl=x & 0x3fff,xh=x >> 14;
			while (--n >=0){
				var l=this[i] & 0x3fff;
				var h=this[i++] >> 14;
				var m=xh *l+h *xl;
				l=xl *l+((m & 0x3fff)<< 14)+w[j]+c;
				c=(l >> 28)+(m >> 14)+xh *h;
				w[j++]=l & 0xfffffff;
			}
			return c;
		}

		__proto__.fromInt=function(x){
			this.t=1;
			this.s=(x < 0)?-1 :0;
			if (x > 0)
				this[0]=x;
			else if (x <-1)
			this[0]=x+BigInteger.DV;
			else
			this.t=0;
		}

		__proto__.nbits=function(x){
			var r=1,t=0;
			if ((t=x >>> 16)!=0){
				x=t;
				r+=16;
			}
			if ((t=x >> 8)!=0){
				x=t;
				r+=8;
			}
			if ((t=x >> 4)!=0){
				x=t;
				r+=4;
			}
			if ((t=x >> 2)!=0){
				x=t;
				r+=2;
			}
			if ((t=x >> 1)!=0){
				x=t;
				r+=1;
			}
			return r;
		}

		__proto__.bitLength=function(){
			if (this.t <=0)
				return 0;
			return BigInteger.DB *(this.t-1)+this.nbits(this[this.t-1] ^ (this.s & BigInteger.DM));
		}

		__proto__.bitwiseTo=function(a,op,r){
			var i=0,f=0,m=Math.min(a.t,this.t);
			for (i=0;i < m;++i)
			r[i]=op(this[i],a[i]);
			if (a.t < this.t){
				f=a.s & this.DM;
				for (i=m;i < this.t;++i)
				r[i]=op(this[i],f);
				r.t=this.t;
			}
			else{
				f=this.s & BigInteger.DM;
				for (i=m;i < a.t;++i)
				r[i]=op(f,a[i]);
				r.t=a.t;
			}
			r.s=op(this.s,a.s);
			r.clamp();
		}

		__proto__.fromNumber=function(a,b,c){
			if ((typeof b=='number')){
				if (a < 2)
					this.fromInt(1);
				else{
					this.fromNumber(a,c);
					if (!this.testBit(a-1))
						this.bitwiseTo(iflash.utils.BigInteger.ONE.shiftLeft(a-1),BigInteger.op_or,this);
					if (this.isEven())
						this.dAddOffset(1,0);
					while (!this.isProbablePrime(b)){
						this.dAddOffset(2,0);
						if (this.bitLength()> a)
							this.subTo(iflash.utils.BigInteger.ONE.shiftLeft(a-1),this);
					}
				}
			}
			else{
				var x=new Array(),t=a & 7;
				x.length=(a >> 3)+1;
				b.nextBytes(x);
				if (t > 0)
					x[0] &=((1 << t)-1);
				else
				x[0]=0;
				this.fromString(x,256);
			}
		}

		__proto__.signum=function(){
			if (this.s < 0)
				return-1;
			else if (this.t <=0 || (this.t==1 && this[0] <=0))
			return 0;
			else
			return 1;
		}

		__proto__.dMultiply=function(n){
			this[this.t]=this.am(0,n-1,this,0,0,this.t);
			++this.t;
			this.clamp();
		}

		__proto__.clamp=function(){
			var c=this.s & BigInteger.DM;
			while (this.t > 0 && this[this.t-1]==c)
			--this.t;
		}

		__proto__.dAddOffset=function(n,w){
			if (n==0)
				return;
			while (this.t <=w)
			this[this.t++]=0;
			this[w]+=n;
			while (this[w] >=BigInteger.DV){
				this[w]-=BigInteger.DV;
				if (++w >=this.t)
					this[this.t++]=0;
				++this[w];
			}
		}

		__proto__.fromRadix=function(s,b){
			this.fromInt(0);
			if (b==null)
				b=10;
			var cs=this.chunkSize(b);
			var d=Math.pow(b,cs),mi=false,j=0,w=0;
			for (var i=0;i < s.length;++i){
				var x=this.intAt(s,i);
				if (x < 0){
					if (s.charAt(i)=="-" && this.signum()==0)
						mi=true;
					continue ;
				}
				w=b *w+x;
				if (++j >=cs){
					this.dMultiply(d);
					this.dAddOffset(w,0);
					j=0;
					w=0;
				}
			}
			if (j > 0){
				this.dMultiply(Math.pow(b,j));
				this.dAddOffset(w,0);
			}
			if (mi)
				BigInteger.ZERO.subTo(this,this);
		}

		__proto__.subTo=function(a,r){
			var i=0,c=0,m=Math.min(a.t,this.t);
			while (i < m){
				c+=this[i]-a[i];
				r[i++]=c & BigInteger.DM;
				c >>=BigInteger.DB;
			}
			if (a.t < this.t){
				c-=a.s;
				while (i < this.t){
					c+=this[i];
					r[i++]=c & BigInteger.DM;
					c >>=BigInteger.DB;
				}
				c+=this.s;
			}
			else{
				c+=this.s;
				while (i < a.t){
					c-=a[i];
					r[i++]=c & BigInteger.DM;
					c >>=BigInteger.DB;
				}
				c-=a.s;
			}
			r.s=(c < 0)?-1 :0;
			if (c <-1)
				r[i++]=this.DV+c;
			else if (c > 0)
			r[i++]=c;
			r.t=i;
			r.clamp();
		}

		__proto__.addTo=function(a,r){
			var i=0,c=0,m=Math.min(a.t,this.t);
			while (i < m){
				c+=this[i]+a[i];
				r[i++]=c & BigInteger.DM;
				c >>=BigInteger.DB;
			}
			if (a.t < this.t){
				c+=a.s;
				while (i < this.t){
					c+=this[i];
					r[i++]=c & BigInteger.DM;
					c >>=BigInteger.DB;
				}
				c+=this.s;
			}
			else{
				c+=this.s;
				while (i < a.t){
					c+=a[i];
					r[i++]=c & BigInteger.DM;
					c >>=BigInteger.DB;
				}
				c+=a.s;
			}
			r.s=(c < 0)?-1 :0;
			if (c > 0)
				r[i++]=c;
			else if (c <-1)
			r[i++]=BigInteger.DV+c;
			r.t=i;
			r.clamp();
		}

		__proto__.multiplyTo=function(a,r){
			var x=this.abs(),y=a.abs();
			var i=x.t;
			r.t=i+y.t;
			while(--i >=0)r[i]=0;
			for(i=0;i < y.t;++i)r[i+x.t]=x.am(0,y[i],r,i,0,x.t);
			r.s=0;
			r.clamp();
			if(this.s !=a.s)iflash.utils.BigInteger.ZERO.subTo(r,r);
		}

		__proto__.add=function(a){
			var r=BigInteger.nbi();
			this.addTo(a,r);
			return r;
		}

		__proto__.subtract=function(a){
			var r=BigInteger.nbi();
			this.subTo(a,r);
			return r;
		}

		__proto__.multiply=function(a){
			var r=BigInteger.nbi();
			this.multiplyTo(a,r);
			return r;
		}

		__proto__.chunkSize=function(r){
			return Math.floor(Math.LN2 *BigInteger.DB / Math.log(r));
		}

		__proto__.copyTo=function(r){
			for (var i=this.t-1;i >=0;--i)
			r[i]=this[i];
			r.t=this.t;
			r.s=this.s;
		}

		__proto__.fromString=function(s,b){
			var k=0;
			if (b==16)
				k=4;
			else if (b==8)
			k=3;
			else if (b==256)
			k=8;
			else if (b==2)
			k=1;
			else if (b==32)
			k=5;
			else if (b==4)
			k=2;
			else{
				this.fromRadix(s,b);
				return;
			}
			this.t=0;
			this.s=0;
			var i=s.length,mi=false,sh=0;
			while (--i >=0){
				var x=(k==8)? s[i] & 0xff :this.intAt(s,i);
				if (x < 0){
					if (s.charAt(i)=="-")
						mi=true;
					continue ;
				}
				mi=false;
				if (sh==0)
					this[this.t++]=x;
				else if (sh+k > BigInteger.DB){
					this[this.t-1] |=(x & ((1 << (BigInteger.DB-sh))-1))<< sh;
					this[this.t++]=(x >> (BigInteger.DB-sh));
				}
				else
				this[this.t-1] |=x << sh;
				sh+=k;
				if (sh >=BigInteger.DB)
					sh-=BigInteger.DB;
			}
			if (k==8 && (s[0] & 0x80)!=0){
				this.s=-1;
				if (sh > 0)
					this[this.t-1] |=((1 << (BigInteger.DB-sh))-1)<< sh;
			}
			this.clamp();
			if (mi)
				BigInteger.ZERO.subTo(this,this);
		}

		__proto__.and=function(a){
			var r=BigInteger.nbi();
			this.bitwiseTo(a,BigInteger.op_and,r);
			return r;
		}

		__proto__.or=function(a){
			var r=BigInteger.nbi();
			this.bitwiseTo(a,BigInteger.op_or,r);
			return r;
		}

		__proto__.xor=function(a){
			var r=BigInteger.nbi();
			this.bitwiseTo(a,BigInteger.op_xor,r);
			return r;
		}

		__proto__.andNot=function(a){
			var r=BigInteger.nbi();
			this.bitwiseTo(a,BigInteger.op_andnot,r);
			return r;
		}

		__proto__.bnNot=function(){
			var r=BigInteger.nbi();
			for (var i=0;i < this.t;++i)
			r[i]=BigInteger.DM & ~this[i];
			r.t=this.t;
			r.s=~this.s;
			return r;
		}

		__proto__.shiftLeft=function(n){
			var r=BigInteger.nbi();
			if (n < 0)
				this.rShiftTo(-n,r);
			else
			this.lShiftTo(n,r);
			return r;
		}

		__proto__.rShiftTo=function(n,r){
			r.s=this.s;
			var ds=Math.floor(n / BigInteger.DB);
			if (ds >=this.t){
				r.t=0;
				return;
			};
			var bs=n % BigInteger.DB;
			var cbs=BigInteger.DB-bs;
			var bm=(1 << bs)-1;
			r[0]=this[ds] >> bs;
			for (var i=ds+1;i < this.t;++i){
				r[i-ds-1] |=(this[i] & bm)<< cbs;
				r[i-ds]=this[i] >> bs;
			}
			if (bs > 0)
				r[this.t-ds-1] |=(this.s & bm)<< cbs;
			r.t=this.t-ds;
			r.clamp();
		}

		__proto__.lShiftTo=function(n,r){
			var bs=n % BigInteger.DB;
			var cbs=BigInteger.DB-bs;
			var bm=(1 << cbs)-1;
			var ds=Math.floor(n / BigInteger.DB),c=(this.s << bs)& this.DM,i;
			for (i=this.t-1;i >=0;--i){
				r[i+ds+1]=(this[i] >> cbs)| c;
				c=(this[i] & bm)<< bs;
			}
			for (i=ds-1;i >=0;--i)
			r[i]=0;
			r[ds]=c;
			r.t=this.t+ds+1;
			r.s=this.s;
			r.clamp();
		}

		__proto__.dlShiftTo=function(n,r){
			var i;
			for (i=this.t-1;i >=0;--i)
			r[i+n]=this[i];
			for (i=n-1;i >=0;--i)
			r[i]=0;
			r.t=this.t+n;
			r.s=this.s;
		}

		__proto__.drShiftTo=function(n,r){
			for (var i=n;i < this.t;++i)
			r[i-n]=this[i];
			r.t=Math.max(this.t-n,0);
			r.s=this.s;
		}

		__proto__.negate=function(){
			var r=BigInteger.nbi();
			BigInteger.ZERO.subTo(this,r);
			return r;
		}

		__proto__.toRadix=function(b){
			(b===void 0)&& (b=10);
			if (b==null)
				b=10;
			if (this.signum()==0 || b < 2 || b > 36)
				return "0";
			var cs=this.chunkSize(b);
			var a=Math.pow(b,cs);
			var d=BigInteger.nbv(a),y=BigInteger.nbi(),z=BigInteger.nbi(),r="";
			this.divRemTo(d,y,z);
			while (y.signum()> 0){
				r=(a+z.intValue()).toString(b).substr(1)+r;
				y.divRemTo(d,y,z);
			}
			return z.intValue().toString(b)+r;
		}

		__proto__.divRemTo=function(m,q,r){
			var pm=m.abs();
			if (pm.t <=0)
				return;
			var pt=this.abs();
			if (pt.t < pm.t){
				if (q !=null)
					q.fromInt(0);
				if (r !=null)
					this.copyTo(r);
				return;
			}
			if (r==null)
				r=BigInteger.nbi();
			var y=BigInteger.nbi(),ts=this.s,ms=m.s;
			var nsh=BigInteger.DB-this.nbits(pm[pm.t-1]);
			if (nsh > 0){
				pm.lShiftTo(nsh,y);
				pt.lShiftTo(nsh,r);
			}
			else{
				pm.copyTo(y);
				pt.copyTo(r);
			};
			var ys=y.t;
			var y0=y[ys-1];
			if (y0==0)
				return;
			var yt=y0 *(1 << BigInteger.F1)+((ys > 1)? y[ys-2] >> BigInteger.F2 :0);
			var d1=BigInteger.FV / yt,d2=(1 << BigInteger.F1)/ yt,e=1 << BigInteger.F2;
			var i=r.t,j=i-ys,t=(q==null)? BigInteger.nbi():q;
			y.dlShiftTo(j,t);
			if (r.compareTo(t)>=0){
				r[r.t++]=1;
				r.subTo(t,r);
			}
			iflash.utils.BigInteger.ONE.dlShiftTo(ys,t);
			t.subTo(y,y);
			while (y.t < ys)
			y[y.t++]=0;
			while (--j >=0){
				var qd=(r[--i]==y0)? BigInteger.DM :Math.floor(r[i] *d1+(r[i-1]+e)*d2);
				if ((r[i]+=y.am(0,qd,r,j,0,ys))< qd){
					y.dlShiftTo(j,t);
					r.subTo(t,r);
					while (r[i] <--qd)
					r.subTo(t,r);
				}
			}
			if (q !=null){
				r.drShiftTo(ys,q);
				if (ts !=ms)
					iflash.utils.BigInteger.ZERO.subTo(q,q);
			}
			r.t=ys;
			r.clamp();
			if (nsh > 0)
				r.rShiftTo(nsh,r);
			if (ts < 0)
				iflash.utils.BigInteger.ZERO.subTo(r,r);
		}

		__proto__.mod=function(a){
			var r=BigInteger.nbi();
			this.abs().divRemTo(a,null,r);
			if (this.s < 0 && r.compareTo(iflash.utils.BigInteger.ZERO)> 0)
				a.subTo(r,r);
			return r;
		}

		__proto__.abs=function(){
			return (this.s < 0)? this.negate():this;
		}

		__proto__.compareTo=function(a){
			var r=this.s-a.s;
			if (r !=0)
				return r;
			var i=this.t;
			r=i-a.t;
			if (r !=0)
				return (this.s < 0)?-r :r;
			while (--i >=0)
			if ((r=this[i]-a[i])!=0)
				return r;
			return 0;
		}

		__proto__.toString=function(b){
			if (this.s < 0)
				return "-"+this.negate().toString(b);
			var k=0;
			if (b==16)
				k=4;
			else if (b==8)
			k=3;
			else if (b==2)
			k=1;
			else if (b==32)
			k=5;
			else if (b==4)
			k=2;
			else
			return this.toRadix(b);
			var km=(1 << k)-1,d,m=false,r="",i=this.t;
			var p=BigInteger.DB-(i *BigInteger.DB)% k;
			if (i--> 0){
				if (p < BigInteger.DB && (d=this[i] >> p)> 0){
					m=true;
					r=this.int2char(d);
				}
				while (i >=0){
					if (p < k){
						d=(this[i] & ((1 << p)-1))<< (k-p);
						d |=this[--i] >> (p+=BigInteger.DB-k);
					}
					else{
						d=(this[i] >> (p-=k))& km;
						if (p <=0){
							p+=BigInteger.DB;
							--i;
						}
					}
					if (d > 0)
						m=true;
					if (m)
						r+=this.int2char(d);
				}
			}
			return m ? r :"0";
		}

		__proto__.bnClone=function(){
			var r=BigInteger.nbi();
			this.copyTo(r);
			return r;
		}

		__proto__.intValue=function(){
			if (this.s < 0){
				if (this.t==1)
					return this[0]-BigInteger.DV;
				else if (this.t==0)
				return-1;
			}
			else if (this.t==1)
			return this[0];
			else if (this.t==0)
			return 0;
			return ((this[1] & ((1 << (32-BigInteger.DB))-1))<< BigInteger.DB)| this[0];
		}

		__proto__.bnByteValue=function(){
			return (this.t==0)? this.s :(this[0] << 24)>> 24;
		}

		__proto__.shortValue=function(){
			return (this.t==0)? this.s :(this[0] << 16)>> 16;
		}

		BigInteger.nbv=function(i){
			var r=BigInteger.nbi();
			r.fromInt(i);
			return r;
		}

		BigInteger._bigIntegerInit_=function(){
			var rr=0,vv=0;
			rr="0".charCodeAt(0);
			for (vv=0;vv <=9;++vv)
			BigInteger.BI_RC[rr++]=vv;
			rr="a".charCodeAt(0);
			for (vv=10;vv < 36;++vv)
			BigInteger.BI_RC[rr++]=vv;
			rr="A".charCodeAt(0);
			for (vv=10;vv < 36;++vv)
			BigInteger.BI_RC[rr++]=vv;
			return true;
		}

		BigInteger.nbi=function(){
			return new BigInteger(null);
		}

		BigInteger.op_and=function(x,y){
			return x & y;
		}

		BigInteger.op_or=function(x,y){
			return x | y;
		}

		BigInteger.op_xor=function(x,y){
			return x ^ y;
		}

		BigInteger.op_andnot=function(x,y){
			return x & ~y;
		}

		BigInteger.dbits=28;
		BigInteger.dbits=28;
		BigInteger.canary=0xdeadbeefcafe;
		BigInteger.BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";
		BigInteger.BI_FP=52;
		REGSTATICATTR$(BigInteger,
		['j_lm',function(){return this.j_lm=((BigInteger.canary & 0xffffff)==0xefcafe);
			},'BI_RC',function(){return this.BI_RC=new Array();
			},'DB',function(){return this.DB=BigInteger.dbits;
			},'DV',function(){return this.DV=(1 << BigInteger.DB);
			},'DM',function(){return this.DM=BigInteger.DV-1;
			},'FV',function(){return this.FV=Math.pow(2,BigInteger.BI_FP);
			},'F1',function(){return this.F1=BigInteger.BI_FP-BigInteger.DB;
			},'F2',function(){return this.F2=2 *BigInteger.DB-BigInteger.BI_FP;
			},'isInit',function(){return this.isInit=BigInteger._bigIntegerInit_();
			},'ZERO',function(){return this.ZERO=BigInteger.nbv(0);
		},'ONE',function(){return this.ONE=BigInteger.nbv(1);}

		]);
		return BigInteger;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/datas.as=======1000199.999639
	var Datas=iflash.utils.Datas=(function(){
		function Datas(){}
		REGCLASS$(Datas,'iflash.utils.Datas',true,true);
		Datas.DICKEY=0;
		Datas.DICKEYS=[];
		return Datas;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/endian.as=======1000199.999638
	var Endian=iflash.utils.Endian=(function(){
		function Endian(){};
		REGCLASS$(Endian,'iflash.utils.Endian',true,true);
		Endian.BIG_ENDIAN="bigEndian";
		Endian.LITTLE_ENDIAN="littleEndian";
		return Endian;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/fileparse.as=======1000199.999637
	var FileParse=iflash.utils.FileParse=(function(){
		function FileParse(){}
		REGCLASS$(FileParse,'iflash.utils.FileParse',true,true);
		FileParse.getFile=function(url){
			return FileParse.fileContentObj[url];
		}

		FileParse.parse=function(bytes){
			var len=0;
			for(var i=0;;i++){
				if(bytes[i]==0){
					len=i;
					break ;
				}
			};
			var header=bytes.readUTFBytes(len);
			var fileArr=header.split('\n');
			var dataOfs=len+1;
			var bytesTmp;
			var filename;
			var filesize=0;
			var fileBody;
			bytes.position=len+1;
			for(var ii=0;ii<fileArr.length;ii+=2){
				filename=fileArr[ii];
				filesize=LAYABOX.parseInt(fileArr[ii+1]);
				bytesTmp=new ByteArray();
				bytes.readBytes(bytesTmp,0,filesize);
				FileParse.fileContentObj[filename]=bytesTmp;
				dataOfs+=filesize;
				bytesTmp=null;
			}
		}

		FileParse.fileContentObj={};
		return FileParse;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/proxy.as=======1000199.999633
	var Proxy=iflash.utils.Proxy=(function(){
		function Proxy(){}
		REGCLASS$(Proxy,'iflash.utils.Proxy',true,true);
		var __proto__=Proxy.prototype;
		__proto__.getProperty=function(name){
			Error.throwError(IllegalOperationError,2088);
			return null;
		}

		__proto__.setProperty=function(name,value){
			Error.throwError(IllegalOperationError,2089);
		}

		__proto__.callProperty=function(name,__rest){
			var rest=[];for(var i=1,sz=arguments.length;i<sz;i++)rest.push(arguments[i]);
			Error.throwError(IllegalOperationError,2090);
			return null;
		}

		__proto__.hasProperty=function(name){
			Error.throwError(IllegalOperationError,2091);
			return false;
		}

		__proto__.deleteProperty=function(name){
			Error.throwError(IllegalOperationError,2092);
			return false;
		}

		__proto__.getDescendants=function(name){
			Error.throwError(IllegalOperationError,2093);
			return false;
		}

		__proto__.nextNameIndex=function(index){
			Error.throwError(IllegalOperationError,2105);
			return 0;
		}

		__proto__.nextName=function(index){
			Error.throwError(IllegalOperationError,2106);
			return null;
		}

		__proto__.nextValue=function(index){
			Error.throwError(IllegalOperationError,2107);
			return null;
		}

		__proto__.isAttribute=function(param1){
			return false;
		}

		return Proxy;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/toolutils.as=======1000199.999630
	var ToolUtils=iflash.utils.ToolUtils=(function(){
		function ToolUtils(){}
		REGCLASS$(ToolUtils,'iflash.utils.ToolUtils',true,true);
		ToolUtils.formatUrlType=function(url){
			var question=url.split ("?").length <=1;
			if(!question){
				url=((url.split ("?"))[0]).toString();
			};
			var _formatUrlType_="";
			var extension="";
			var parts=url.split (".");
			if (parts.length > 0){
				extension=parts[parts.length-1].toLowerCase ();
			}
			return extension;
		}

		return ToolUtils;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/laya.as=======1000199.999623
	var Laya=(function(){
		function Laya(sprite){}
		REGCLASS$(Laya,'Laya',true,true);
		Laya.Main=function(sprite){
			if ((typeof sprite=='function')){
				Laya._startCallBack_=sprite;
				sprite=null;
			}
			if (Laya.config)return;
			/*__JS__ */window.Laya=Laya;
			Laya.config=new Config();
			Laya.root=sprite;
			Browser.__init__(sprite);
			if(Laya.CONCHVER){
				Laya.RENDERBYCANVAS=false;
			}
			else{
				Laya.RENDERBYCANVAS=/*__JS__ */!LAYABOX.runOnlyPlayer;
			}
			Node.TYPE2DEFAULT=Laya.RENDERBYCANVAS?0:/*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
			(Laya.process==null)&& Laya.onConchReady();
		}

		Laya.onConchReady=function(){
			Laya.process && Laya.process.active();
			Laya.window=new Window1();
			Browser.__start__();
			if (Laya._startCallBack_)Laya._startCallBack_();
			Laya.ilaya.onStart();
		}

		Laya.setIf=function(name,value){
			Laya.ifdef[name]=value;
		}

		Laya.getIfdef=function(name){
			return Laya.ifdef[name] !=null;
		}

		Laya.window=null;;
		Laya.document=null;;
		Laya.root=null;;
		Laya.config=null;;
		Laya.ifdef={};
		Laya.NULLFLOAT=NaN;;
		Laya.SHOW_FPS=true;
		Laya.conch=null;;
		Laya.process=null;;
		Laya.ilaya=null;
		Laya._startCallBack_=null;;
		Laya.RENDERBYCANVAS=false;;
		Laya.FLASHVER=0;
		REGSTATICATTR$(Laya,
		['ENABLE3D',function(){return this.ENABLE3D=/*__JS__ */LAYABOX.ENABLE3D;
			},'CONCHVER',function(){return this.CONCHVER=/*__JS__ */window.conch?1:0;
			},'HTMLVER',function(){return this.HTMLVER=/*__JS__ */1;
		}

		]);
		return Laya;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/uncaughterrorevents.as=======1000098.999851
	var UncaughtErrorEvents=iflash.events.UncaughtErrorEvents=(function(_super){
		function UncaughtErrorEvents(target){
			_super.call(this,target);
		}

		REGCLASS$(UncaughtErrorEvents,'iflash.events.UncaughtErrorEvents',true,false,_super);
		return UncaughtErrorEvents;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/activityevent.as=======1000098.999783
	var ActivityEvent=iflash.events.ActivityEvent=(function(_super){
		function ActivityEvent(type,bubbles,cancelable,_d){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type,bubbles,cancelable,_d);
		}

		REGCLASS$(ActivityEvent,'iflash.events.ActivityEvent',true,false,_super);
		var __proto__=ActivityEvent.prototype;
		__proto__.toString=function(){
			Log.unfinished("ActivityEvent","toString");
			return ""
		}

		DEFUNENUMPTY$(__proto__,'_$get_activating',function(){
			Log.unfinished("ActivityEvent","activating");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_activating',function(value){
			Log.unfinished("ActivityEvent","activating");
		});

		Object.defineProperty(__proto__,'activating',{get:__proto__._$get_activating,set:__proto__._$set_activating,enumerable:false});
		ActivityEvent.ACTIVITY="activity";
		return ActivityEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/textevent.as=======1000098.999779
	var TextEvent=iflash.events.TextEvent=(function(_super){
		function TextEvent(type,bubbles,cancelable,text){
			this.m_text=null;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(text===void 0)&& (text="");
			_super.call(this,type,bubbles,cancelable);
			this.m_text=text;
		}

		REGCLASS$(TextEvent,'iflash.events.TextEvent',true,false,_super);
		var __proto__=TextEvent.prototype;
		__proto__.clone=function(){
			var te=new TextEvent(this.type,this.bubbles,this.cancelable,this.m_text);
			te.copyNativeData(this);
			return te;
		}

		__proto__.toString=function(){
			return this.formatToString("TextEvent","type","bubbles","cancelable","eventPhase","text");
		}

		__proto__.copyNativeData=function(param1){}
		DEFUNENUMPTY$(__proto__,'_$get_text',function(){
			return this.m_text;
		});

		DEFUNENUMPTY$(__proto__,'_$set_text',function(value){
			this.m_text=value;
		});

		Object.defineProperty(__proto__,'text',{get:__proto__._$get_text,set:__proto__._$set_text,enumerable:false});
		TextEvent.LINK="link";
		TextEvent.TEXT_INPUT="textInput";
		return TextEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/contextmenuevent.as=======1000098.999778
	var ContextMenuEvent=iflash.events.ContextMenuEvent=(function(_super){
		function ContextMenuEvent(type,bubbles,cancelable,_d){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type,bubbles,cancelable,_d);
		}

		REGCLASS$(ContextMenuEvent,'iflash.events.ContextMenuEvent',true,false,_super);
		var __proto__=ContextMenuEvent.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_contextMenuOwner',function(){
			Log.unfinished("ContextMenuEvent","contextMenuOwner");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_contextMenuOwner',function(value){
			Log.unfinished("ContextMenuEvent","contextMenuOwner");;
		});

		Object.defineProperty(__proto__,'contextMenuOwner',{get:__proto__._$get_contextMenuOwner,set:__proto__._$set_contextMenuOwner,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_isMouseTargetInaccessible',function(){
			Log.unfinished("ContextMenuEvent","isMouseTargetInaccessible");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_isMouseTargetInaccessible',function(value){
			Log.unfinished("ContextMenuEvent","isMouseTargetInaccessible");
		});

		Object.defineProperty(__proto__,'isMouseTargetInaccessible',{get:__proto__._$get_isMouseTargetInaccessible,set:__proto__._$set_isMouseTargetInaccessible,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mouseTarget',function(){
			Log.unfinished("ContextMenuEvent","mouseTarget");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mouseTarget',function(value){
			Log.unfinished("ContextMenuEvent","mouseTarget");
		});

		Object.defineProperty(__proto__,'mouseTarget',{get:__proto__._$get_mouseTarget,set:__proto__._$set_mouseTarget,enumerable:false});
		ContextMenuEvent.MENU_ITEM_SELECT="menuItemSelect";
		ContextMenuEvent.MENU_SELECT="menuSelect";
		return ContextMenuEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/focusevent.as=======1000098.999772
	var FocusEvent=iflash.events.FocusEvent=(function(_super){
		function FocusEvent(type,bubbles,cancelable,relatedObject,shiftKey,keyCode){
			this._keyCode=0;
			this._shiftKey=false;
			(bubbles===void 0)&& (bubbles=true);
			(cancelable===void 0)&& (cancelable=false);
			(shiftKey===void 0)&& (shiftKey=false);
			(keyCode===void 0)&& (keyCode=0);
			_super.call(this,type,bubbles,cancelable,relatedObject);
			this._shiftKey=shiftKey;
			this._keyCode=keyCode;
		}

		REGCLASS$(FocusEvent,'iflash.events.FocusEvent',true,false,_super);
		var __proto__=FocusEvent.prototype;
		__proto__.clone=function(){
			return this;
		}

		__proto__.toString=function(){
			return this.toString();
		}

		DEFUNENUMPTY$(__proto__,'_$get_isRelatedObjectInaccessible',function(){
			Log.unfinished("FocusEvent","isRelatedObjectInaccessible");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_isRelatedObjectInaccessible',function(value){
			Log.unfinished("FocusEvent","isRelatedObjectInaccessible");
		});

		Object.defineProperty(__proto__,'isRelatedObjectInaccessible',{get:__proto__._$get_isRelatedObjectInaccessible,set:__proto__._$set_isRelatedObjectInaccessible,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_keyCode',function(){
			return this._keyCode;
		});

		DEFUNENUMPTY$(__proto__,'_$set_keyCode',function(value){
			this._keyCode=value;
		});

		Object.defineProperty(__proto__,'keyCode',{get:__proto__._$get_keyCode,set:__proto__._$set_keyCode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_relatedObject',function(){
			Log.unfinished("FocusEvent","relatedObject");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_relatedObject',function(value){
			Log.unfinished("FocusEvent","relatedObject");
		});

		Object.defineProperty(__proto__,'relatedObject',{get:__proto__._$get_relatedObject,set:__proto__._$set_relatedObject,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_shiftKey',function(){
			return this._shiftKey;
		});

		DEFUNENUMPTY$(__proto__,'_$set_shiftKey',function(value){
			this._shiftKey=value;
		});

		Object.defineProperty(__proto__,'shiftKey',{get:__proto__._$get_shiftKey,set:__proto__._$set_shiftKey,enumerable:false});
		FocusEvent.FOCUS_IN="focusIn";
		FocusEvent.FOCUS_OUT="focusOut";
		FocusEvent.KEY_FOCUS_CHANGE="keyFocusChange";
		FocusEvent.MOUSE_FOCUS_CHANGE="mouseFocusChange";
		return FocusEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/gestureevent.as=======1000098.999770
	var GestureEvent=iflash.events.GestureEvent=(function(_super){
		function GestureEvent(type,bubbles,cancelable,_d){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type,bubbles,cancelable,_d);
		}

		REGCLASS$(GestureEvent,'iflash.events.GestureEvent',true,false,_super);
		GestureEvent.GESTURE_TWO_FINGER_TAP="gestureTwoFingerTap";
		return GestureEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/httpstatusevent.as=======1000098.999769
	var HTTPStatusEvent=iflash.events.HTTPStatusEvent=(function(_super){
		function HTTPStatusEvent(type,bubbles,cancelable,_d){
			this.m_responseHeaders=null;
			this.m_responseURL=null;
			this.m_status=0;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type,bubbles,cancelable,_d);
		}

		REGCLASS$(HTTPStatusEvent,'iflash.events.HTTPStatusEvent',true,false,_super);
		var __proto__=HTTPStatusEvent.prototype;
		__proto__.toString=function(){
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_responseHeaders',function(){
			return this.m_responseHeaders;
		});

		DEFUNENUMPTY$(__proto__,'_$set_responseHeaders',function(value){
			this.m_responseHeaders=value;
		});

		Object.defineProperty(__proto__,'responseHeaders',{get:__proto__._$get_responseHeaders,set:__proto__._$set_responseHeaders,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_responseURL',function(){
			return this.m_responseURL;
		});

		DEFUNENUMPTY$(__proto__,'_$set_responseURL',function(value){
			this.m_responseURL=value;
		});

		Object.defineProperty(__proto__,'responseURL',{get:__proto__._$get_responseURL,set:__proto__._$set_responseURL,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_status',function(){
			return this.m_status;
		});

		Object.defineProperty(__proto__,'status',{get:__proto__._$get_status,enumerable:false});
		HTTPStatusEvent.HTTP_RESPONSE_STATUS="httpResponseStatus";
		HTTPStatusEvent.HTTP_STATUS="httpStatus";
		return HTTPStatusEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/keyboardevent.as=======1000098.999765
	var KeyboardEvent=iflash.events.KeyboardEvent=(function(_super){
		function KeyboardEvent(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue){
			this._altKey=false;
			this._charCode=0;
			this._ctrlKey=false;
			this._keyCode=0;
			this._keyLocation=0;
			this._shiftKey=false;
			(bubbles===void 0)&& (bubbles=true);
			(cancelable===void 0)&& (cancelable=false);
			(charCodeValue===void 0)&& (charCodeValue=0);
			(keyCodeValue===void 0)&& (keyCodeValue=0);
			(keyLocationValue===void 0)&& (keyLocationValue=0);
			(ctrlKeyValue===void 0)&& (ctrlKeyValue=false);
			(altKeyValue===void 0)&& (altKeyValue=false);
			(shiftKeyValue===void 0)&& (shiftKeyValue=false);
			_super.call(this,type,bubbles,cancelable);
		}

		REGCLASS$(KeyboardEvent,'iflash.events.KeyboardEvent',true,false,_super);
		var __proto__=KeyboardEvent.prototype;
		__proto__.clone=function(){return null;}
		__proto__.toString=function(){return null;}
		__proto__.updateAfterEvent=function(){}
		__proto__.changeEvent=function(e){
			this._currentTarget_=e._currentTarget_;
			this.keyCode=e.keyCode;
			this._type_=e._type_;
			this._lytarget=e._lytarget;
			this.cancelable=e.cancelable;
			this.charCode=e.charCode;
			this.ctrlKey=e.ctrlKey;
			this.altKey=e.altKey;
			this.shiftKey=e.shiftKey;
		}

		DEFUNENUMPTY$(__proto__,'_$get_altKey',function(){
			return this._altKey;
		});

		DEFUNENUMPTY$(__proto__,'_$set_altKey',function(value){
			this._altKey=value;
		});

		Object.defineProperty(__proto__,'altKey',{get:__proto__._$get_altKey,set:__proto__._$set_altKey,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_charCode',function(){
			return this._charCode;
		});

		DEFUNENUMPTY$(__proto__,'_$set_charCode',function(value){
			this._charCode=value;
		});

		Object.defineProperty(__proto__,'charCode',{get:__proto__._$get_charCode,set:__proto__._$set_charCode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_ctrlKey',function(){
			return this._ctrlKey;
		});

		DEFUNENUMPTY$(__proto__,'_$set_ctrlKey',function(value){
			this._ctrlKey=value;
		});

		Object.defineProperty(__proto__,'ctrlKey',{get:__proto__._$get_ctrlKey,set:__proto__._$set_ctrlKey,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_keyLocation',function(){
			return this._keyLocation;
		});

		DEFUNENUMPTY$(__proto__,'_$set_keyLocation',function(value){
			this._keyLocation=value;
		});

		Object.defineProperty(__proto__,'keyLocation',{get:__proto__._$get_keyLocation,set:__proto__._$set_keyLocation,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_keyCode',function(){
			return this._keyCode;
		});

		DEFUNENUMPTY$(__proto__,'_$set_keyCode',function(value){
			this._keyCode=value;
		});

		Object.defineProperty(__proto__,'keyCode',{get:__proto__._$get_keyCode,set:__proto__._$set_keyCode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_shiftKey',function(){
			return this._shiftKey;
		});

		DEFUNENUMPTY$(__proto__,'_$set_shiftKey',function(value){
			this._shiftKey=value;
		});

		Object.defineProperty(__proto__,'shiftKey',{get:__proto__._$get_shiftKey,set:__proto__._$set_shiftKey,enumerable:false});
		KeyboardEvent.KEY_DOWN="keyDown";
		KeyboardEvent.KEY_UP="keyUp";
		return KeyboardEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/mouseevent.as=======1000098.999764
	var MouseEvent=iflash.events.MouseEvent=(function(_super){
		function MouseEvent(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta){
			this.mShiftKey=false;
			this.mCtrlKey=false;
			this._buttonDown=false;
			this._timestamp_=null;
			this.mAltKey=false;
			this._visitedObjects_=null;
			this.localX=0;
			this.localY=0;
			this.stageX=0;
			this.stageY=0;
			this._delta=0;
			this.clientX=null;
			this.clientY=null;
			this.offsetX=null;
			this.offsetY=null;
			this.touchId=null;
			this.button=0;
			(bubbles===void 0)&& (bubbles=true);
			(cancelable===void 0)&& (cancelable=false);
			(localX===void 0)&& (localX=NaN);
			(localY===void 0)&& (localY=NaN);
			(ctrlKey===void 0)&& (ctrlKey=false);
			(altKey===void 0)&& (altKey=false);
			(shiftKey===void 0)&& (shiftKey=false);
			(buttonDown===void 0)&& (buttonDown=false);
			(delta===void 0)&& (delta=0);
			_super.call(this,type,bubbles);
			this._timestamp_=-1.0;
			this.mShiftKey=shiftKey;
			this.mCtrlKey=ctrlKey;
			this._buttonDown=buttonDown;
			this._visitedObjects_=/*new vector.<>*/[];
			this._type_|=/*iflash.laya.dom.Node.TYPE_IFLASH*/0x400000;
		}

		REGCLASS$(MouseEvent,'iflash.events.MouseEvent',true,false,_super);
		var __proto__=MouseEvent.prototype;
		__proto__.getTouches=function(target,phase,result){
			if (result==null)result=/*new vector.<>*/[];
			var allTouches=this.lyData;
			var numTouches=allTouches.length;
			for (var i=0;i<numTouches;++i){
				var touch=allTouches [i];
				var correctTarget=touch.isTouching(target);
				var correctPhase=(phase==null || phase==touch._phase_);
				if (correctTarget && correctPhase)result[result.length]=touch;
			}
			return result;
		}

		__proto__.getTouch=function(target,phase,id){
			(id===void 0)&& (id=-1);
			this.getTouches(target,phase,MouseEvent.sTouches);
			var numTouches=MouseEvent.sTouches.length;
			if (numTouches > 0){
				var touch=null;
				if (id < 0)touch=MouseEvent.sTouches[0];
				else{
					for (var i=0;i<numTouches;++i)
					if (MouseEvent.sTouches[i].id==id){touch=MouseEvent.sTouches[i];break ;}
						}
				MouseEvent.sTouches.length=0;
				return touch;
			}
			else return null;
		}

		__proto__.interactsWith=function(target){
			var result=false;
			this.getTouches(target,null,MouseEvent.sTouches);
			for (var i=MouseEvent.sTouches.length-1;i>=0;--i)
			{if (MouseEvent.sTouches[i]._phase_ !=/*iflash.events.TouchPhase.ENDED*/"ended"){result=true;break ;}}
			MouseEvent.sTouches.length=0;
			return result;
		}

		__proto__.dispatch=function(chain,addToVisited){
			(addToVisited===void 0)&& (addToVisited=true);
			if (chain && chain.length){
				var chainLength=this.bubbles ? chain.length :1;
				var previousTarget=this.target;
				this._lysetTarget(chain [0]);
				for (var i=0;i<chainLength;++i){
					var chainElement=chain [i];
					if (this._visitedObjects_.indexOf(chainElement)==-1){
						var stopPropagation=chainElement.evalEvent(this);
						if(addToVisited)this._visitedObjects_[this._visitedObjects_.length]=chainElement;if(this.stopsImmediatePropagation)return;if(stopPropagation&&addToVisited)break ;
					}
				}
				if(this.stopsImmediatePropagation)return;
				this._lysetTarget(previousTarget);
			}
		}

		__proto__.updateAfterEvent=function(){}
		__proto__.clone=function(){
			var e=new MouseEvent(this.type,this.bubbles,this.cancelable,this.localX,this.localY,null,this.ctrlKey,this.altKey,this.shiftKey);
			e.clientX=this.clientX;
			e.clientY=this.clientY;
			e.offsetX=this.offsetX;
			e.offsetY=this.offsetY;
			return e;
		}

		DEFUNENUMPTY$(__proto__,'_$get_buttonDown',function(){
			return this._buttonDown;
		});

		DEFUNENUMPTY$(__proto__,'_$set_buttonDown',function(value){
			this._buttonDown=value;
		});

		Object.defineProperty(__proto__,'buttonDown',{get:__proto__._$get_buttonDown,set:__proto__._$set_buttonDown,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_delta',function(){
			return this._delta;
		});

		DEFUNENUMPTY$(__proto__,'_$set_delta',function(value){
			this._delta=value;
		});

		Object.defineProperty(__proto__,'delta',{get:__proto__._$get_delta,set:__proto__._$set_delta,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_lyData',function(value){
			_super.prototype._$set_lyData.call(this,value);
			if(!value)return;
			var numTouches=this._lyData.length;
			for (var i=0;i<numTouches;++i)
			if (this._lyData[i]._timestamp_ > this._timestamp_)
				this._timestamp_=this._lyData[i]._timestamp_;
		});

		Object.defineProperty(__proto__,'lyData',{get:_super.prototype._$get_lyData,set:__proto__._$set_lyData,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_shiftKey',function(){return this.mShiftKey;});
		Object.defineProperty(__proto__,'shiftKey',{get:__proto__._$get_shiftKey,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_touches',function(){return (this.lyData).concat();});
		Object.defineProperty(__proto__,'touches',{get:__proto__._$get_touches,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_timestamp',function(){return this._timestamp_;});
		Object.defineProperty(__proto__,'timestamp',{get:__proto__._$get_timestamp,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_altKey',function(){return this.mAltKey;});
		Object.defineProperty(__proto__,'altKey',{get:__proto__._$get_altKey,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_ctrlKey',function(){return this.mCtrlKey;});
		Object.defineProperty(__proto__,'ctrlKey',{get:__proto__._$get_ctrlKey,enumerable:false});
		MouseEvent.TOUCHINGCOUNT=NaN;;
		MouseEvent.CLICK="click";
		MouseEvent.DOUBLE_CLICK="doubleClick";
		MouseEvent.MOUSE_DOWN="mousedown";
		MouseEvent.MOUSE_MOVE="mousemove";
		MouseEvent.MOUSE_OUT="mouseout";
		MouseEvent.MOUSE_OVER="mouseover";
		MouseEvent.MOUSE_UP="mouseup";
		MouseEvent.MOUSE_WHEEL="mousewheel";
		MouseEvent.ROLL_OUT="mouseout";
		MouseEvent.ROLL_OVER="mouseover";
		MouseEvent.MIDDLE_CLICK="middleClick";
		MouseEvent.MIDDLE_MOUSE_DOWN="middleMouseDown";
		MouseEvent.MIDDLE_MOUSE_UP="middleMouseUp";
		MouseEvent.RIGHT_CLICK="rightClick";
		MouseEvent.RIGHT_MOUSE_DOWN="rightMouseDown";
		MouseEvent.RIGHT_MOUSE_UP="rightMouseUp";
		MouseEvent.FOCUS="focus";
		MouseEvent.BLUR="blur";
		MouseEvent.MOUSE_DRAG="drag";
		MouseEvent.MOUSE_DRAG_START="dragstart";
		MouseEvent.MOUSE_DRAG_END="dragend";
		MouseEvent.MOUSE_DOWN_LEFT=0;
		MouseEvent.MOUSE_DOWN_MID=1;
		MouseEvent.MOUSE_DOWN_RIGHT=2;
		MouseEvent.TOUCH="touch";
		REGSTATICATTR$(MouseEvent,
		['sTouches',function(){return this.sTouches=/*new vector.<>*/[];}
		]);
		return MouseEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/netstatusevent.as=======1000098.999763
	var NetStatusEvent=iflash.events.NetStatusEvent=(function(_super){
		function NetStatusEvent(type,bubbles,cancelable,info){
			this.info=null;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			this.info=info;
			_super.call(this,type,bubbles,cancelable);
		}

		REGCLASS$(NetStatusEvent,'iflash.events.NetStatusEvent',true,false,_super);
		NetStatusEvent.NET_STATUS="netStatus";
		return NetStatusEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/progressevent.as=======1000098.999762
	var ProgressEvent=iflash.events.ProgressEvent=(function(_super){
		function ProgressEvent(type,bubbles,cancelable,bytesLoaded,bytesTotal){
			this._bytesLoaded=null;
			this._bytesTotal=null;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(bytesLoaded===void 0)&& (bytesLoaded=0);
			(bytesTotal===void 0)&& (bytesTotal=0);
			_super.call(this,type,bubbles,cancelable);
			this._bytesLoaded=bytesLoaded;
			this._bytesTotal=bytesTotal;
		}

		REGCLASS$(ProgressEvent,'iflash.events.ProgressEvent',true,false,_super);
		var __proto__=ProgressEvent.prototype;
		__proto__.toString=function(){
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_bytesLoaded',function(){
			return this._bytesLoaded;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bytesLoaded',function(value){
			this._bytesLoaded=value;
		});

		Object.defineProperty(__proto__,'bytesLoaded',{get:__proto__._$get_bytesLoaded,set:__proto__._$set_bytesLoaded,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytesTotal',function(){
			return this._bytesTotal;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bytesTotal',function(value){
			this._bytesTotal=value;
		});

		Object.defineProperty(__proto__,'bytesTotal',{get:__proto__._$get_bytesTotal,set:__proto__._$set_bytesTotal,enumerable:false});
		ProgressEvent.PROGRESS="progress";
		ProgressEvent.SOCKET_DATA="socketData";
		return ProgressEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/sampledataevent.as=======1000098.999761
	var SampleDataEvent=iflash.events.SampleDataEvent=(function(_super){
		function SampleDataEvent(type,bubbles,cancelable,theposition,thedata){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(theposition===void 0)&& (theposition=0);
			_super.call(this,type,bubbles);
		}

		REGCLASS$(SampleDataEvent,'iflash.events.SampleDataEvent',true,false,_super);
		var __proto__=SampleDataEvent.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_data',function(){
			Log.unfinished("SampleDataEvent","data");
			return null
		});

		DEFUNENUMPTY$(__proto__,'_$set_data',function(thedata){
			Log.unfinished("SampleDataEvent","data");
		});

		Object.defineProperty(__proto__,'data',{get:__proto__._$get_data,set:__proto__._$set_data,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_position',function(){
			Log.unfinished("SampleDataEvent","position");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_position',function(theposition){
			Log.unfinished("SampleDataEvent","position");
		});

		Object.defineProperty(__proto__,'position',{get:__proto__._$get_position,set:__proto__._$set_position,enumerable:false});
		SampleDataEvent.SAMPLE_DATA="sampleData";
		return SampleDataEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/shaderevent.as=======1000098.999759
	var ShaderEvent=iflash.events.ShaderEvent=(function(_super){
		function ShaderEvent(type,bubbles,cancelable,bitmap,array,vector){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type);
		}

		REGCLASS$(ShaderEvent,'iflash.events.ShaderEvent',true,false,_super);
		var __proto__=ShaderEvent.prototype;
		__proto__.clone=function(){
			Log.unfinished("ShaderEvent","bitmapData");
			return null;
		}

		__proto__.toString=function(){
			Log.unfinished("ShaderEvent","toString");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_bitmapData',function(){
			Log.unfinished("ShaderEvent","bitmapData");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bitmapData',function(bmpData){
			Log.unfinished("ShaderEvent","bitmapData");
		});

		Object.defineProperty(__proto__,'bitmapData',{get:__proto__._$get_bitmapData,set:__proto__._$set_bitmapData,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_byteArray',function(){
			Log.unfinished("ShaderEvent","byteArray");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_byteArray',function(bArray){
			Log.unfinished("ShaderEvent","byteArray");
		});

		Object.defineProperty(__proto__,'byteArray',{get:__proto__._$get_byteArray,set:__proto__._$set_byteArray,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_vector',function(){
			Log.unfinished("ShaderEvent","bitmapData");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_vector',function(v){
			Log.unfinished("ShaderEvent","bitmapData");
		});

		Object.defineProperty(__proto__,'vector',{get:__proto__._$get_vector,set:__proto__._$set_vector,enumerable:false});
		ShaderEvent.COMPLETE="complete";
		return ShaderEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/statusevent.as=======1000098.999758
	var StatusEvent=iflash.events.StatusEvent=(function(_super){
		function StatusEvent(type,bubbles,cancelable,code,level){
			this._code=null;
			this._level=null;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(level===void 0)&& (level="");
			_super.call(this,type,bubbles,cancelable);
			this._code=code;
			this._level=level;
		}

		REGCLASS$(StatusEvent,'iflash.events.StatusEvent',true,false,_super);
		var __proto__=StatusEvent.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_code',function(){
			Log.unfinished("StatusEvent","code");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_code',function(value){
			Log.unfinished("StatusEvent","code");
		});

		Object.defineProperty(__proto__,'code',{get:__proto__._$get_code,set:__proto__._$set_code,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_level',function(){
			Log.unfinished("StatusEvent","level");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_level',function(value){
			Log.unfinished("StatusEvent","level");
		});

		Object.defineProperty(__proto__,'level',{get:__proto__._$get_level,set:__proto__._$set_level,enumerable:false});
		StatusEvent.STATUS="status";
		return StatusEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/syncevent.as=======1000098.999757
	var SyncEvent=iflash.events.SyncEvent=(function(_super){
		function SyncEvent(type,bubbles,cancelable,_d){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type,bubbles,cancelable,_d);
		}

		REGCLASS$(SyncEvent,'iflash.events.SyncEvent',true,false,_super);
		var __proto__=SyncEvent.prototype;
		__proto__.clone=function(){
			return null;
		}

		__proto__.toString=function(){
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_changeList',function(){
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_changeList',function(value){;
		});

		Object.defineProperty(__proto__,'changeList',{get:__proto__._$get_changeList,set:__proto__._$set_changeList,enumerable:false});
		SyncEvent.SYNC="sync";
		return SyncEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/throttleevent.as=======1000098.999756
	var ThrottleEvent=iflash.events.ThrottleEvent=(function(_super){
		function ThrottleEvent(type,bubbles,cancelable,state,targetFrameRate){
			this._targetFrameRate=0.0
			this._state=/*iflash.events.ThrottleType.RESUME*/"resume";
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(targetFrameRate===void 0)&& (targetFrameRate=0);
			_super.call(this,type,bubbles,cancelable);
			this._state=state;
			this._targetFrameRate=targetFrameRate;
		}

		REGCLASS$(ThrottleEvent,'iflash.events.ThrottleEvent',true,false,_super);
		var __proto__=ThrottleEvent.prototype;
		__proto__.clone=function(){
			return new ThrottleEvent(/*iflash.events.ThrottleType.THROTTLE*/"throttle")
		}

		__proto__.toString=function(){
			return "[ThrottleEvent type="+this.type+" bubbles="+this.bubbles+" cancelable="+this.cancelable+" state="+this._state+" targetFrameRate="+this._targetFrameRate+"]";
		}

		DEFUNENUMPTY$(__proto__,'_$get_state',function(){
			return this._state;
		});

		Object.defineProperty(__proto__,'state',{get:__proto__._$get_state,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_targetFrameRate',function(){
			if (this._state==/*iflash.events.ThrottleType.PAUSE*/"pause")
				return 0.0
			else if (this._state==/*iflash.events.ThrottleType.THROTTLE*/"throttle")
			return 2.0;
			else
			return this._targetFrameRate
		});

		Object.defineProperty(__proto__,'targetFrameRate',{get:__proto__._$get_targetFrameRate,enumerable:false});
		ThrottleEvent.THROTTLE="throttle";
		return ThrottleEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/timerevent.as=======1000098.999754
	var TimerEvent=iflash.events.TimerEvent=(function(_super){
		function TimerEvent(type,bubbles,cancelable){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type,bubbles,cancelable);
		}

		REGCLASS$(TimerEvent,'iflash.events.TimerEvent',true,false,_super);
		var __proto__=TimerEvent.prototype;
		__proto__.clone=function(){return null;}
		__proto__.toString=function(){return null;}
		__proto__.updateAfterEvent=function(){}
		TimerEvent.TIMER="timer";
		TimerEvent.TIMER_COMPLETE="timerComplete";
		return TimerEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/touchevent.as=======1000098.999752
	var TouchEvent=iflash.events.TouchEvent=(function(_super){
		function TouchEvent(type,bubbles,cancelable,_d){
			this.altKey=false;
			this.commandKey=false;
			this.controlKey=false;
			this.ctrlKey=false;
			this.shiftKey=false;
			this.isPrimaryTouchPoint=false;
			this.localX=0.0;
			this.localY=0.0;
			this.sizeX=0.0;
			this.sizeY=0.0;
			this.stageX=0.0;
			this.stageY=0.0;
			this.pressure=0.0;
			this.touchPointID=0;
			this.relatedObject=null;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type,bubbles,cancelable,_d);
		}

		REGCLASS$(TouchEvent,'iflash.events.TouchEvent',true,false,_super);
		TouchEvent.TOUCH_BEGIN="touchBegin";
		TouchEvent.TOUCH_END="touchEnd";
		TouchEvent.TOUCH_MOVE="touchMove";
		TouchEvent.TOUCH_OUT="touchOut";
		TouchEvent.TOUCH_OVER="touchOver";
		TouchEvent.TOUCH_ROLL_OUT="touchRollOut";
		TouchEvent.TOUCH_ROLL_OVER="touchRollOver";
		TouchEvent.TOUCH_TAP="touchTap";
		return TouchEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/transformgestureevent.as=======1000098.999750
	var TransformGestureEvent=iflash.events.TransformGestureEvent=(function(_super){
		function TransformGestureEvent(type,bubbles,cancelable,_d){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			_super.call(this,type,bubbles,cancelable,_d);
		}

		REGCLASS$(TransformGestureEvent,'iflash.events.TransformGestureEvent',true,false,_super);
		TransformGestureEvent.GESTURE_PAN="gesturePan";
		TransformGestureEvent.GESTURE_ROTATE="gestureRotate";
		TransformGestureEvent.GESTURE_SWIPE="gestureSwipe";
		TransformGestureEvent.GESTURE_ZOOM="gestureZoom";
		return TransformGestureEvent;
	})(Event)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/timer.as=======1000098.999625
	var Timer=iflash.utils.Timer=(function(_super){
		function Timer(delay,repeatCount){
			this._timeobj=null;
			this._delay=null;
			this._repeatCount=0;
			this._running=false;
			_super.apply(this,arguments);
			(repeatCount===void 0)&& (repeatCount=0);
			this.delay=delay;
			this.repeatCount=repeatCount;
			this._running=false;
		}

		REGCLASS$(Timer,'iflash.utils.Timer',true,false,_super);
		var __proto__=Timer.prototype;
		__proto__._ontimer_=function(tm,m,obj){
			this.lyDispatchEvent(new TimerEvent(/*iflash.events.TimerEvent.TIMER*/"timer"));
			if (this.currentCount >=this.repeatCount && this._running==true){
				this._running=false;
				if(this.repeatCount!=0)
					this.lyDispatchEvent(new TimerEvent(/*iflash.events.TimerEvent.TIMER_COMPLETE*/"timerComplete"));
			}
		}

		__proto__.reset=function(){
			if (this._timeobj !=null){
				if(this._timeobj.runCount<(this.repeatCount-1))
					this._timeobj.runCount=0;
				else{
					this.stop();
				}
			}
		}

		__proto__.start=function(){
			this.stop();
			this._timeobj=this._timeobj || TimerCtrl.__DEFAULT__.addTimer(this,BIND$(this,this._ontimer_),this.delay,this.repeatCount);
			this._running=true;
		}

		__proto__.stop=function(){
			if (this._timeobj !=null){
				this._timeobj.deleted=true;
				this._timeobj=null;
			}
			this._running=false;
		}

		DEFUNENUMPTY$(__proto__,'_$get_currentCount',function(){
			if(this._timeobj!=null)
				return this._timeobj.runCount+1;
			return 0;
		});

		Object.defineProperty(__proto__,'currentCount',{get:__proto__._$get_currentCount,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_delay',function(){
			return this._delay;
		});

		DEFUNENUMPTY$(__proto__,'_$set_delay',function(value){
			this._delay=value;
			if(this.running){
				this.stop();
				this.start();
			}
		});

		Object.defineProperty(__proto__,'delay',{get:__proto__._$get_delay,set:__proto__._$set_delay,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_repeatCount',function(){
			return this._repeatCount;
		});

		DEFUNENUMPTY$(__proto__,'_$set_repeatCount',function(value){
			this._repeatCount=value;
		});

		Object.defineProperty(__proto__,'repeatCount',{get:__proto__._$get_repeatCount,set:__proto__._$set_repeatCount,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_running',function(){
			return this._running;
		});

		Object.defineProperty(__proto__,'running',{get:__proto__._$get_running,enumerable:false});
		Timer.__SPEED__=1;
		REGSTATICATTR$(Timer,
		['__STARTTIME__',function(){return this.__STARTTIME__=/*__JS__ */Date.now();
		}

		]);
		return Timer;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/utils/dynamicmethods.as=======1000098.999479
	var DynamicMethods=iflash.laya.utils.DynamicMethods=(function(_super){
		function DynamicMethods(_class,fndef,set_get,htmlNeed){
			this.args=null;
			this.setName=null;
			this.getName=null;
			this.argsClipChr=null;
			(htmlNeed===void 0)&& (htmlNeed=true);
			_super.call(this,null,null,set_get,htmlNeed);
			var strs=DynamicMethods._regMethoed.exec(fndef);
			this.setName=this.getName=strs[2];
			if (set_get){
				if ((typeof set_get=='string'))this.setName=this.getName=set_get;
				else {
					this.setName=set_get['set'];
					this.getName=set_get['get'];
				}
			}
			strs[3]=strs[3].replace(DynamicMethods._string_Trim_,'');
			var str=strs[3].split(DynamicMethods._argsClip);
			this.args=[];
			for (var i=0;i < str.length;i++){
				this.args.push(DynamicProperties.__CALCULATORTYPE__[str[i]]);
			}
			_class.prototype["??"+strs[2]]=this;
		}

		REGCLASS$(DynamicMethods,'iflash.laya.utils.DynamicMethods',true,false,_super);
		var __proto__=DynamicMethods.prototype;
		__proto__.setValue=function(obj,data){
			data=data.replace(DynamicMethods._string_Trim_,'');
			var strs=data.split(DynamicMethods._argsClip);
			var max=this.args.length>strs.length?this.args.length:strs.length;
			var min=this.args.length+strs.length-max;
			for (var i=0,sz=min;i < sz;i++)
			strs[i]=this.args[i](strs[i]);
			strs.splice(i,max-min);
			obj[this.setName].apply(obj,strs);
		}

		__proto__.getValue=function(obj){
			return obj[this.getName].call(obj);
		}

		__proto__.toHTML=function(){
			return false;
		}

		REGSTATICATTR$(DynamicMethods,
		['_regMethoed',function(){return this._regMethoed=new RegExp("(\\s*)([\\w-]+)\\s*[(]\\s*((\\w\\s*)+)[)]");
			},'_argsClip',function(){return this._argsClip=new RegExp("\\s+");
		},'_string_Trim_',function(){return this._string_Trim_=new RegExp("(^\\s*)|(\\s*$)","g");}

		]);
		return DynamicMethods;
	})(DynamicProperties)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/errorevent.as=======1000097.999668
	var ErrorEvent=iflash.events.ErrorEvent=(function(_super){
		function ErrorEvent(type,bubbles,cancelable,text,id){
			this.m_errorID=0;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(text===void 0)&& (text="");
			(id===void 0)&& (id=0);
			_super.call(this,type,bubbles,cancelable,text);
			this.m_errorID=id;
		}

		REGCLASS$(ErrorEvent,'iflash.events.ErrorEvent',true,false,_super);
		var __proto__=ErrorEvent.prototype;
		__proto__.clone=function(){
			return new ErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.m_errorID);
		}

		__proto__.toString=function(){
			return this.formatToString("ErrorEvent","type","bubbles","cancelable","eventPhase","text","errorID");
		}

		DEFUNENUMPTY$(__proto__,'_$get_errorID',function(){
			return this.m_errorID;
		});

		Object.defineProperty(__proto__,'errorID',{get:__proto__._$get_errorID,enumerable:false});
		ErrorEvent.ERROR="error";
		return ErrorEvent;
	})(TextEvent)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/dataevent.as=======1000097.999665
	var DataEvent=iflash.events.DataEvent=(function(_super){
		function DataEvent(type,bubbles,cancelable,data){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(data===void 0)&& (data="");
			_super.call(this,type,bubbles,cancelable);
			Log.unfinished("DataEvent","DataEvent");
		}

		REGCLASS$(DataEvent,'iflash.events.DataEvent',true,false,_super);
		var __proto__=DataEvent.prototype;
		__proto__.toString=function(){
			Log.unfinished("DataEvent","toString");
			return "";
		}

		DEFUNENUMPTY$(__proto__,'_$get_data',function(){
			Log.unfinished("DataEvent","data");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_data',function(value){
			Log.unfinished("DataEvent","data");
		});

		Object.defineProperty(__proto__,'data',{get:__proto__._$get_data,set:__proto__._$set_data,enumerable:false});
		DataEvent.DATA="data";
		DataEvent.UPLOAD_COMPLETE_DATA="uploadCompleteData";
		return DataEvent;
	})(TextEvent)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/fullscreenevent.as=======1000097.999663
	var FullScreenEvent=iflash.events.FullScreenEvent=(function(_super){
		function FullScreenEvent(type,bubbles,cancelable,activating){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(activating===void 0)&& (activating=false);
			_super.call(this,type,bubbles,cancelable,activating);
		}

		REGCLASS$(FullScreenEvent,'iflash.events.FullScreenEvent',true,false,_super);
		var __proto__=FullScreenEvent.prototype;
		__proto__.toString=function(){
			Log.unfinished("FullScreenEvent","toString")
			return ""
		}

		DEFUNENUMPTY$(__proto__,'_$get_fullScreen',function(){
			Log.unfinished("FullScreenEvent","fullScreen")
			return false;
		});

		Object.defineProperty(__proto__,'fullScreen',{get:__proto__._$get_fullScreen,enumerable:false});
		FullScreenEvent.FULL_SCREEN="fullScreen";
		return FullScreenEvent;
	})(ActivityEvent)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/imeevent.as=======1000097.999655
	var IMEEvent=iflash.events.IMEEvent=(function(_super){
		function IMEEvent(type,bubbles,cancelable,text){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(text===void 0)&& (text="");
			_super.call(this,type,bubbles,cancelable,text);
		}

		REGCLASS$(IMEEvent,'iflash.events.IMEEvent',true,false,_super);
		var __proto__=IMEEvent.prototype;
		__proto__.clone=function(){
			return null;
		}

		__proto__.toString=function(){
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_imeClient',function(){
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_imeClient',function(value){;
		});

		Object.defineProperty(__proto__,'imeClient',{get:__proto__._$get_imeClient,set:__proto__._$set_imeClient,enumerable:false});
		IMEEvent.IME_COMPOSITION="imeComposition";
		IMEEvent.IME_START_COMPOSITION="imeStartComposition";
		return IMEEvent;
	})(TextEvent)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/utils/setintervaltimer.as=======1000097.999257
	var SetIntervalTimer=iflash.utils.SetIntervalTimer=(function(_super){
		function SetIntervalTimer(closure,delay,repeats,rest){
			this.id=0;
			this.closure=null;
			this.rest=null;
			_super.call(this,delay,repeats?0:1);
			this.closure=closure;
			this.rest=rest;
			this.addEventListener(repeats? /*iflash.events.TimerEvent.TIMER*/"timer":/*iflash.events.TimerEvent.TIMER_COMPLETE*/"timerComplete",BIND$(this,this.onTimer));
			this.start();
			this.id=SetIntervalTimer.intervals.length+1;
			SetIntervalTimer.intervals.push(this);
		}

		REGCLASS$(SetIntervalTimer,'iflash.utils.SetIntervalTimer',true,false,_super);
		var __proto__=SetIntervalTimer.prototype;
		__proto__.onTimer=function(event){
			this.closure.apply(null,this.rest);
			if(this.repeatCount==1){
				if(SetIntervalTimer.intervals[this.id-1]==this){
					delete SetIntervalTimer.intervals[this.id-1];
					true;
				}
			}
		}

		SetIntervalTimer.clearInterval=function(id_to_clear){
			id_to_clear--;
			if(((SetIntervalTimer.intervals[id_to_clear])instanceof iflash.utils.SetIntervalTimer )){
				SetIntervalTimer.intervals[id_to_clear].stop();
				delete SetIntervalTimer.intervals[id_to_clear];
				true;
			}
		}

		SetIntervalTimer.intervals=[];
		return SetIntervalTimer;
	})(Timer)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/asyncerrorevent.as=======1000096.999558
	var AsyncErrorEvent=iflash.events.AsyncErrorEvent=(function(_super){
		function AsyncErrorEvent(type,bubbles,cancelable,text,error){
			this.error=null;
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(text===void 0)&& (text="");
			_super.call(this,type,bubbles,cancelable,text);
		}

		REGCLASS$(AsyncErrorEvent,'iflash.events.AsyncErrorEvent',true,false,_super);
		var __proto__=AsyncErrorEvent.prototype;
		__proto__.clone=function(){
			Log.unfinished("AsyncErrorEvent","clone");
			return null;
		}

		__proto__.toString=function(){
			return _super.prototype.toString.call(this);
		}

		AsyncErrorEvent.ASYNC_ERROR="asyncError";
		return AsyncErrorEvent;
	})(ErrorEvent)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/ioerrorevent.as=======1000096.999543
	var IOErrorEvent=iflash.events.IOErrorEvent=(function(_super){
		function IOErrorEvent(type,bubbles,cancelable,text,id){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(text===void 0)&& (text="");
			(id===void 0)&& (id=0);
			_super.call(this,type,bubbles,cancelable,text,id);
		}

		REGCLASS$(IOErrorEvent,'iflash.events.IOErrorEvent',true,false,_super);
		IOErrorEvent.DISK_ERROR="disk_error";
		IOErrorEvent.IO_ERROR="ioError";
		IOErrorEvent.NETWORK_ERROR="network_error";
		IOErrorEvent.VERIFY_ERROR="verify_error";
		return IOErrorEvent;
	})(ErrorEvent)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/securityerrorevent.as=======1000096.999537
	var SecurityErrorEvent=iflash.events.SecurityErrorEvent=(function(_super){
		function SecurityErrorEvent(type,bubbles,cancelable,text,id){
			(bubbles===void 0)&& (bubbles=false);
			(cancelable===void 0)&& (cancelable=false);
			(text===void 0)&& (text="");
			(id===void 0)&& (id=0);
			_super.call(this,type,bubbles,cancelable,text,id);
		}

		REGCLASS$(SecurityErrorEvent,'iflash.events.SecurityErrorEvent',true,false,_super);
		var __proto__=SecurityErrorEvent.prototype;
		__proto__.toString=function(){
			return null;
		}

		SecurityErrorEvent.SECURITY_ERROR="securityError";
		return SecurityErrorEvent;
	})(ErrorEvent)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/events/uncaughterrorevent.as=======1000096.999526
	var UncaughtErrorEvent=iflash.events.UncaughtErrorEvent=(function(_super){
		function UncaughtErrorEvent(type,bubbles,cancelable,error_in,id){
			(type===void 0)&& (type="uncaughtError");
			(bubbles===void 0)&& (bubbles=true);
			(cancelable===void 0)&& (cancelable=true);
			(id===void 0)&& (id=0);
			_super.call(this,type,bubbles,cancelable,error_in,id);
		}

		REGCLASS$(UncaughtErrorEvent,'iflash.events.UncaughtErrorEvent',true,false,_super);
		var __proto__=UncaughtErrorEvent.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_error',function(){
			throw Log.unfinished("UncaughtErrorEvent","error");
		});

		Object.defineProperty(__proto__,'error',{get:__proto__._$get_error,enumerable:false});
		UncaughtErrorEvent.UNCAUGHT_ERROR="uncaughtError";
		return UncaughtErrorEvent;
	})(ErrorEvent)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/xml/xmlnode.as=======10199.999991
	var XMLNode=iflash.laya.xml.XMLNode=(function(){
		function XMLNode(type,value){
			this._nodeName=null;
			this._nodeType=0;
			this._index=0;
			this._nodeValue=null;
			this._parentNode=null;
			this._id=null;
			this._attributes=null;
			this._childNodes=null;
			this._nodeType=type;
			this._childNodes=[];
			this._attributes=[];
		}

		REGCLASS$(XMLNode,'iflash.laya.xml.XMLNode',true,false);
		var __proto__=XMLNode.prototype;
		LAYABOX.implements(__proto__,{"iflash.laya.xml.IXMLNode":true})
		__proto__.name=function(){
			return this.nodeName;
		}

		__proto__.attributes=function(){
			return this._attributes;
		}

		__proto__.attribute=function(name){
			if (name=="*"){
				var r=[];
				var i;
				/*for each*/for(var $each_i in this._attributes){
					i=this._attributes[$each_i];
					r.push(i);
				}
				return r;
			};
			var value=this._attributes["@"+name];
			return value?value.nodeValue:"";
		}

		__proto__._select_=function(name,value){
			value=value+"";
			var r=[];
			if(this._attributes["@"+name]){
				r.push(this);
			};
			var n;
			for (var i=0,sz=this._childNodes.length;i < sz;i++){
				n=this._childNodes[i]._attributes["@"+name];
				if (n && n.nodeValue==value){
					r.push(this._childNodes[i]);
				}
			}
			return r.length>1 ? r :r[0];
		}

		__proto__._elements=function(name,out){
			if (this.nodeName==name||name=="*"){
				out.push(this);
			}
			if (this._childNodes !=null){
				for (var i=0,sz=this._childNodes.length;i < sz;i++){
					this._childNodes[i]._elements(name,out);
				}
			}
			return out;
		}

		__proto__.elements=function(name){
			return this._elements(name,[]);
		}

		__proto__.setAttribute=function(name,value){
			value=HTMLDocument.decodeHtml(value);
			if (name=="ly_cdata"){
				this._nodeValue=HTMLDocument.getTextFromeCache(value);
				return;
			};
			var node=new XMLNode(0,null);
			node.nodeName=name;
			node.nodeValue=value;
			this._attributes["@"+name]=node;
		}

		__proto__.localName=function(){
			return this._nodeName;
		}

		__proto__.hasComplexContent=function(){
			return (this._childNodes && this._childNodes.length > 0);
		}

		__proto__.appendChild=function(node){
			this.childNodes.push(node);
			node.parentNode=this;
			var pre=this[node.nodeName];
			if (pre){
				if (!((pre instanceof Array))){
					this[node.nodeName]=[];
					if (!((pre instanceof iflash.laya.xml.XMLNode ))){
						trace("!!!!!!!!!!!xml nodeName err:"+node.nodeName);
					}
					else this[node.nodeName].push(pre);
				}
				this[node.nodeName].push(node);
				if((node instanceof Array)){
					this[node.nodeName]
				}
				return node;
			}
			this[node.nodeName]=node;
			return node;
		}

		__proto__.lyappendChild=function(node,name){
			this.childNodes.push(node);
			if((node instanceof Array))this[name]=node;
			if((typeof node=='string'))this[name]=[],this[name].push(node);
			return node;
		}

		__proto__.copy=function(){
			var temp
			if((this instanceof iflash.laya.xml.XMLDocument )){
				temp=new XMLDocument(this._text_);
				}else{
				trace("递归获取(未处理)");
			}
			return temp || null;
		}

		__proto__.removeNode=function(){}
		__proto__.toXMLString=function(){
			return this.nodeValue;
		}

		__proto__.toString=function(){
			return this.nodeValue;
		}

		__proto__._setId_=function(text){
			this._id=text;
		}

		__proto__._getId_=function(){
			return this._id;
		}

		__proto__.setAttributesStart=function(){}
		__proto__.setAttributesEnd=function(){}
		__proto__.children=function(){
			return this._childNodes;
		}

		DEFUNENUMPTY$(__proto__,'_$get_nodeName',function(){
			return this._nodeName;
		});

		DEFUNENUMPTY$(__proto__,'_$set_nodeName',function(name){
			this._nodeName=name;
		});

		Object.defineProperty(__proto__,'nodeName',{get:__proto__._$get_nodeName,set:__proto__._$set_nodeName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_childNodes',function(){
			return this._childNodes;
		});

		Object.defineProperty(__proto__,'childNodes',{get:__proto__._$get_childNodes,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeValue',function(){
			return this._nodeValue;
		});

		DEFUNENUMPTY$(__proto__,'_$set_nodeValue',function(name){
			this._nodeValue=name;
		});

		Object.defineProperty(__proto__,'nodeValue',{get:__proto__._$get_nodeValue,set:__proto__._$set_nodeValue,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parentNode',function(){
			return this._parentNode;
		});

		DEFUNENUMPTY$(__proto__,'_$set_parentNode',function(p){
			this._parentNode=p;
		});

		Object.defineProperty(__proto__,'parentNode',{get:__proto__._$get_parentNode,set:__proto__._$set_parentNode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_index',function(){
			return this._index;
		});

		DEFUNENUMPTY$(__proto__,'_$set_index',function(i){
			this._index=i;
		});

		Object.defineProperty(__proto__,'index',{get:__proto__._$get_index,set:__proto__._$set_index,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_baseURI',function(){
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_baseURI',function(uri){
		});

		Object.defineProperty(__proto__,'baseURI',{get:__proto__._$get_baseURI,set:__proto__._$set_baseURI,enumerable:false});
		XMLNode.find=function(xml,name,value){
			if (xml==null)return null;
			else if ((xml instanceof Array)){
				var n;
				for (var i=0,sz=xml.length;i < sz;i++){
					n=xml[i]._attributes["@"+name];
					if (n && n.nodeValue==value)return xml[i];
				}
				return null;
			}
			else
			return xml._select_(name,value);
		}

		XMLNode.arraySelect=function(arry,name,value){
			if((arry instanceof Array)){
				var r=[],n;
				for (var i=0,sz=arry.length;i < sz;i++){
					n=arry[i]._attributes["@"+name];
					if (n && n.nodeValue==value){
						r.push(arry[i]);
					}
				}
				return r;
			}
			else
			return arry._select_(name,value);
		}

		XMLNode.xmlInfoList=function(xml,child,childValue,value){
			var tmpXml;
			var tmpXmlList=xml.elements(child);
			var sz=tmpXmlList.length
			for (var key=0;key < sz;key++){
				if(tmpXmlList[key].attribute(childValue)==value){
					tmpXml=tmpXmlList[key];
				}
			}
			return tmpXml;
		}

		XMLNode.getAttribute=function(value){
			if (value._childNodes.length==0){
				return value;
			}
			return value;
		}

		return XMLNode;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/accessibility/accessibilityimplementation.as=======10199.999983
	var AccessibilityImplementation=iflash.accessibility.AccessibilityImplementation=(function(){
		function AccessibilityImplementation(){
			this.errno=0;
			this.stub=false;
		}

		REGCLASS$(AccessibilityImplementation,'iflash.accessibility.AccessibilityImplementation',true,true);
		var __proto__=AccessibilityImplementation.prototype;
		__proto__.accDoDefaultAction=function(childID){
			Log.unfinished("AccessibilityImplementation","accDoDefaultAction");
		}

		__proto__.accLocation=function(childID){
			Log.unfinished("AccessibilityImplementation","accLocation");
			return null;
		}

		__proto__.accSelect=function(operation,childID){
			Log.unfinished("AccessibilityImplementation","accSelect");
		}

		__proto__.get_accDefaultAction=function(childID){
			Log.unfinished("AccessibilityImplementation","get_accDefaultAction");
			return "";
		}

		__proto__.get_accFocus=function(){
			Log.unfinished("AccessibilityImplementation","get_accFocus");
			return 0;
		}

		__proto__.get_accName=function(childID){
			Log.unfinished("AccessibilityImplementation","get_accName");
			return "";
		}

		__proto__.get_accRole=function(childID){
			Log.unfinished("AccessibilityImplementation","get_accRole");
			return 0;
		}

		__proto__.get_accSelection=function(){
			Log.unfinished("AccessibilityImplementation","get_accSelection");
			return [];
		}

		__proto__.get_accState=function(childID){
			Log.unfinished("AccessibilityImplementation","get_accState");
			return 0;
		}

		__proto__.get_accValue=function(childID){
			Log.unfinished("AccessibilityImplementation","get_accValue");
			return "";
		}

		__proto__.getChildIDArray=function(){
			Log.unfinished("AccessibilityImplementation","getChildIDArray");
			return [];
		}

		__proto__.isLabeledBy=function(labelBounds){
			Log.unfinished("AccessibilityImplementation","isLabeledBy");
			return false;
		}

		return AccessibilityImplementation;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/bitmapdata.as=======10199.999980
	var BitmapData=iflash.display.BitmapData=(function(){
		function BitmapData(w,h,transparent,color){
			this.paint=null;
			this._canvas_=null;
			this._type_=0;
			this._context_=null;
			this._width_=null;
			this._height_=null;
			this.transparent=false;
			this.__newcontext__=null;
			this._preNewPaintArr_=[null,null];
			this.original=null;
			this._url=null;
			this._rect_=new Rectangle();
			(w===void 0)&& (w=0);
			(h===void 0)&& (h=0);
			(transparent===void 0)&& (transparent=true);
			(color===void 0)&& (color=0xFFFFFFFF);
			this.transparent=transparent;
			this._rect_.x=this._rect_.y=0;
			this._rect_.width=this._width_=w;
			this._rect_.height=this._height_=h;
			this.setType(2)
			if (!this.transparent){
				this.fillRect(new Rectangle(0,0,w,h),color);
			}
		}

		REGCLASS$(BitmapData,'iflash.display.BitmapData',true,true);
		var __proto__=BitmapData.prototype;
		__proto__.paintCanvas=function(ctx,x,y,w,h){
			if(ctx.width !=0 && ctx.height !=0 && this._canvas_ && this._canvas_.width !=0 && this._canvas_.height !=0){
				this._canvas_&&ctx.drawImage(this._canvas_,0,0,this._canvas_.width,this._canvas_.height,x,y,w,h);
			}
		}

		__proto__.paintCmd=function(ctx,x,y,w,h){
			this._canvas_ && this._canvas_.paint(ctx,x,y,w,h);
		}

		__proto__.setType=function(value){
			this._type_=value;
			this.paint=this._type_==1 ? this.paintCanvas:this.paintCmd;
		}

		__proto__.clone=function(){
			return this.copyTo(new BitmapData());
		}

		__proto__.size=function(w,h){
			this._width_=w;
			this._height_=h;
		}

		__proto__.copyTo=function(dec){
			dec._height_=this._height_;
			dec._width_=this._width_;
			dec._rect_=this._rect_.clone();
			this._canvas_&&(dec._canvas_=this._canvas_.clone());
			dec._context_=dec.type==1?dec._canvas_.getContext("2d"):dec._canvas_;
			return dec;
		}

		__proto__.initBitmapdata=function(src){
			var __image=Browser.document.createElement("image");
			__image.onload=function (){
				this.setImage(__image);
			};
			__image.src=src;
			if(Laya.RENDERBYCANVAS)DisplayUnit._insertUnit_(this,DrawBitmapData._DEFAULT_);
			return false;
		}

		__proto__.destroy=function(){
			this._canvas_=null;
			this._context_=null;
		}

		__proto__.setCanvas=function(data){
			this._canvas_=data;
			this._context_=this._canvas_.getContext('2d');
			if(this._width_==0||this._height_==0){
				this._width_=data.width;
				this._height_=data.height;
			}
		}

		__proto__.setImage=function(data){
			if(this._width_==0||this._height_==0){
				this._width_=data.width;
				this._height_=data.height;
			}
			if (!this._canvas_){
				if (this._type_==2){
					this._canvas_=this._canvas_||Browser.document.createElement("virtualBitmap");
					this._canvas_.setImage(data);
					this._canvas_.size(this._width_,this._height_);
				}
				else{
					this._canvas_=this._canvas_||Canvas.create();
					this._canvas_.size(this._width_,this._height_);
					this._context_=this._canvas_.getContext("2d");
					this._context_.drawImage(data,0,0);
				}
			}
			else{
				if (this._type_==2)
					this._canvas_.changeImage(data);
				else
				this._context_.drawImage(data,0,0);
			}
		}

		__proto__.fillRect=function(rect,color){
			this._createCMD_();
			if(color==0){
				this._context_.clearRect(rect.left,rect.top,rect.width,rect.height);
			}
			else{
				this._context_.save();
				var s=color.toString(16).toUpperCase();
				var len=6-s.length,str="";
				if(s.length<6){
					for(var i=0;i<len;i++){
						str+=0;
					}
				}
				s=str+s;
				this._context_.fillStyle="#"+s;
				this._context_.fillRect(rect.left,rect.top,rect.width,rect.height);
				this._context_.restore();
			}
		}

		__proto__._createCMD_=function(){
			if (this._canvas_)return this._canvas_;
			this._canvas_=this._type_==2? Browser.document.createElement("virtualBitmap"):Canvas.create();
			this._context_=this.type==1? this._canvas_.getContext("2d"):this._canvas_;
			this._canvas_.size(this.width,this.height);
			return this._canvas_;
		}

		__proto__.draw=function(source,matrix,colorTransform,blendMode,clipRect,smoothing){
			(smoothing===void 0)&& (smoothing=false);
			matrix==null && (matrix=Matrix.__DEFAULT__);
			if (clipRect==null)clipRect=new Rectangle(0,0,this.width,this.height);
			var tempCanvas;
			if (!((source instanceof iflash.display.BitmapData ))){
				this.setType(1);
				tempCanvas=Canvas.create();
				tempCanvas.size(clipRect.width,clipRect.height);
				var tempContext=tempCanvas.getContext("2d");
				this.width=source.width;
				this.height=source.height;
				source._lyPaint_(tempContext,0,0);
			}
			this._createCMD_();
			var o=tempCanvas||source._canvas_;
			if(!o)return;
			if(Laya.CONCHVER||((o instanceof iflash.laya.display.VirtualBitmap ))|| (o.height&&o.width)){
				this._context_.drawImage(o,
				(clipRect.x-matrix.tx)/ matrix.a,
				(clipRect.y-matrix.ty)/matrix.d,
				clipRect.width/matrix.a,
				clipRect.height/matrix.d,
				clipRect.x,
				clipRect.y,
				clipRect.width,
				clipRect.height);
			}
		}

		__proto__.scroll=function(x,y){
			Log.unfinished("BitmapData","scroll");
		}

		__proto__.dispose=function(){
			this._canvas_=null;
			this._context_=null;
		}

		__proto__.isReady=function(){
			return this._canvas_!=null;
		}

		__proto__.setPixels=function(rect,inputData,url){
			this._width_=rect.width;
			this._height_=rect.height;
			var imgdata={};
			imgdata.data=inputData;
			imgdata.width=rect.width;
			imgdata.height=rect.height;
			if (Laya.CONCHVER || Laya.FLASHVER){
				var img=Browser.document.createElement('img');
				this.setImage(img);
				img.putImageData(url,imgdata,0,0,null);
			}
			this._url=url;
			return;
		}

		__proto__.getPixel=function(x,y){
			Log.unfinished("BitmapData","getPixel");
			return 1;
		}

		__proto__.clear=function(){
			this._context_ && this._context_.clearRect(0,0,this._width_,this._height_);
		}

		__proto__._checkBitmap=function(b){
			if (b._type_==2){
				return (b._canvas_ && b._canvas_.isComplicated());
			}
			else
			return false;
		}

		__proto__.copyPixels=function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha){
			(mergeAlpha===void 0)&& (mergeAlpha=false);
			if (this._type_==2 && this._checkBitmap(sourceBitmapData)){
				if (!this._canvas_||this._canvas_.isEmpty()){
					this.setType(1);
					this._canvas_=null;
				}
				else{
					Log.log("多条指令,copyPixels多条指令");
				}
			};
			var w=this._width_;
			var h=this._height_;
			destPoint=destPoint || Point.__DEFAULT__;
			if (this._canvas_==null){this.size(w||sourceRect.width,h||sourceRect.height);this._createCMD_();}
				if(this._context_==null)this._context_=this.type==1? this._canvas_.getContext("2d"):this._canvas_;
			!mergeAlpha && this._context_.clearRect(destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
			this._context_.drawImage(this._type_==1?sourceBitmapData.getCanvas():sourceBitmapData._canvas_,sourceRect.left,sourceRect.top,Math.min(sourceRect.width,this._width_),Math.min(this._height_,sourceRect.height),destPoint.x,destPoint.y,Math.min(sourceRect.width,this._width_),Math.min(this._height_,sourceRect.height));
		}

		__proto__.getPixel32=function(x,y){
			return 0xff9900;;
		}

		__proto__.lock=function(){
			Log.unfinished("BitmapData","lock");
		}

		__proto__.unlock=function(){
			Log.unfinished("BitmapData","unlock");
		}

		__proto__.setPixel=function(x,y,color){
			Log.unfinished("BitmapData","setPixel");
		}

		__proto__.getCanvas=function(){
			if (this._type_==1)return this._canvas_;
			else{
				if (this._canvas_.isNormal())
					return this._canvas_.getImage();
				var canvas=Canvas.create();
				canvas.size(this._width_,this._height_);
				var context=canvas.getContext("2d");this.__newcontext__=context;
				this.paintCmd(context,0,0,this._width_,this._height_);
				return canvas;
			}
		}

		__proto__.newPaint=function(){
			if(!this._preNewPaintArr_)return;
			if(this._preNewPaintArr_[0]!=this._width_||this._preNewPaintArr_[1]!=this._height_){
				if(!this.__newcontext__)return;
				this.__newcontext__.clearRect(0,0,this._width_,this._height_);
				this.paintCmd(this.__newcontext__,0,0,this._width_,this._height_);
				var xx=this._canvas_._cmd_[0].args[0].image;
				if(xx.src.indexOf("small.png")==-1){
					this._preNewPaintArr_[0]=this._width_;
					this._preNewPaintArr_[1]=this._height_;
				}
			}
		}

		__proto__.getColorBoundsRect=function(mask,color,findColor){
			(findColor===void 0)&& (findColor=true);
			Log.unfinished("BitmapData","getColorBoundsRect");
			return this.rect;
		}

		__proto__.copyChannel=function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel){
			Log.unfinished("BitmapData","copyChannel");
		}

		__proto__.colorTransform=function(rect,colorTransform){
			Log.unfinished("BitmapData","colorTransform");
		}

		__proto__.applyFilter=function(sourceBitmapData,sourceRect,destPoint,filter){
			Log.unfinished("BitmapData","applyFilter");
		}

		__proto__.setPixel32=function(x,y,color){
			Log.unfinished("BitmapData","setPixel32");
		}

		__proto__.threshold=function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource){
			(color===void 0)&& (color=0);
			(mask===void 0)&& (mask=0xFFFFFFFF);
			(copySource===void 0)&& (copySource=false);
			Log.unfinished("BitmapData","thresh");
			return 0
		}

		__proto__.getPixels=function(rect){
			Log.unfinished("BitmapData","getPixels");
			return null
		}

		__proto__.histogram=function(hRect){
			Log.unfinished("BitmapData","histogram");
			return new Array
		}

		__proto__.hitTest=function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold){
			(secondAlphaThreshold===void 0)&& (secondAlphaThreshold=1);
			Log.unfinished("BitmapData","hitTest");
			return false;
		}

		__proto__.compare=function(otherBitmapData){
			Log.unfinished("BitmapData","compare");
			return null;
		}

		__proto__.generateFilterRect=function(sourceRect,filter){
			Log.unfinished("BitmapData","generateFilterRect");
			return sourceRect;
		}

		DEFUNENUMPTY$(__proto__,'_$get_type',function(){
			return this._type_;
		});

		Object.defineProperty(__proto__,'type',{get:__proto__._$get_type,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._width_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			this.size(w,this._height_);
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rect',function(){
			this._rect_.width=this._width_;
			this._rect_.height=this._height_;
			return this._rect_;
		});

		Object.defineProperty(__proto__,'rect',{get:__proto__._$get_rect,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._height_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			this.size(this._width_,h);
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_url',function(){
			return this._url;
		});

		Object.defineProperty(__proto__,'url',{get:__proto__._$get_url,enumerable:false});
		BitmapData.CANVAS=1;
		BitmapData.CMD=2;
		return BitmapData;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/bitmapdatachannel.as=======10199.999979
	var BitmapDataChannel=iflash.display.BitmapDataChannel=(function(){
		function BitmapDataChannel(){}
		REGCLASS$(BitmapDataChannel,'iflash.display.BitmapDataChannel',true,true);
		BitmapDataChannel.ALPHA=8;
		BitmapDataChannel.BLUE=4;
		BitmapDataChannel.GREEN=2;
		BitmapDataChannel.RED=1;
		return BitmapDataChannel;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/blendmode.as=======10199.999978
	var BlendMode=iflash.display.BlendMode=(function(){
		function BlendMode(){
			;
		}

		REGCLASS$(BlendMode,'iflash.display.BlendMode',true,true);
		BlendMode.NORMAL="normal";
		BlendMode.LAYER="layer";
		BlendMode.MULTIPLY="multiply";
		BlendMode.SCREEN="screen";
		BlendMode.LIGHTEN="lighten";
		BlendMode.DARKEN="darken";
		BlendMode.ADD="add";
		BlendMode.SUBTRACT="subtract";
		BlendMode.DIFFERENCE="difference";
		BlendMode.INVERT="invert";
		BlendMode.OVERLAY="overlay";
		BlendMode.HARDLIGHT="hardlight";
		BlendMode.ALPHA="alpha";
		BlendMode.ERASE="erase";
		BlendMode.SHADER="shader";
		return BlendMode;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/capsstyle.as=======10199.999977
	var CapsStyle=iflash.display.CapsStyle=(function(){
		function CapsStyle(){}
		REGCLASS$(CapsStyle,'iflash.display.CapsStyle',true,true);
		CapsStyle.ROUND="round";
		CapsStyle.NONE="none";
		CapsStyle.SQUARE="square";
		return CapsStyle;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/framelabel.as=======10199.999976
	var FrameLabel=iflash.display.FrameLabel=(function(){
		function FrameLabel(){
			;
		}

		REGCLASS$(FrameLabel,'iflash.display.FrameLabel',true,true);
		var __proto__=FrameLabel.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_frame',function(){
			Log.unfinished("FrameLabel","frame");
			return 0;
		});

		Object.defineProperty(__proto__,'frame',{get:__proto__._$get_frame,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_name',function(){
			Log.unfinished("FrameLabel","name");
			return "";
		});

		Object.defineProperty(__proto__,'name',{get:__proto__._$get_name,enumerable:false});
		return FrameLabel;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/gradienttype.as=======10199.999975
	var GradientType=iflash.display.GradientType=(function(){
		function GradientType(){}
		REGCLASS$(GradientType,'iflash.display.GradientType',true,true);
		GradientType.LINEAR="linear";
		GradientType.RADIAL="radial";
		return GradientType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/graphics.as=======10199.999974
	var Graphics=iflash.display.Graphics=(function(){
		function Graphics(ower){
			this.ower=null;
			this._canvas_=null;
			this._context_=null;
			this._rendercomds_=[];
			this._rendercomdsOffset_=0;
			this.width=0;
			this.height=0;
			this.bitmapFlag=false;
			this.x=0;
			this.y=0;
			this._tmFun_=[];
			this.isFill=false;
			this._beginPos=null;
			this.prefill=null;
			this.lythickness=0;
			this.lystorkeStyle=false;
			this.lystroke=false;
			this._minX=0;
			this._minY=0;
			this._maxX=0;
			this._maxY=0;
			this._lastX=0;
			this._lastY=0;
			this.ower=ower;
			this._createCanvas_();
		}

		REGCLASS$(Graphics,'iflash.display.Graphics',true,true);
		var __proto__=Graphics.prototype;
		__proto__._createCanvas_=function(){
			if(!this._canvas_){
				this._canvas_=Canvas.create();
				this._context_=this._canvas_.getContext("2d");
			}
		}

		__proto__.hasUse=function(){
			return this._rendercomds_.length > 0;
		}

		__proto__._expandSize_=function(w,h){
			if (this.width >=w && this.height >=h)return;
			this.width=Math.max(w,this.width);
			this.height=Math.max(h,this.height);
		}

		__proto__.beginRender=function(){
			var len=this._tmFun_.length;
			for(var j=0;j<len;++j){
				this._tmFun_[j]();
			}
			if (this._rendercomds_.length <=this._rendercomdsOffset_)return;
			if (!this.lystroke){
				this._canvas_.size(this.width+this.x,this.height+this.y);
				this._rendercomdsOffset_=0;
			}
			this.ower._modle_.size(this.ower.width,this.ower.height);
			for(var i=this._rendercomdsOffset_;i<this._rendercomds_.length;i++){
				if (this._rendercomds_[i][1]==0)
					this._context_[this._rendercomds_[i][0]]=this._rendercomds_[i][2];
				else if(this._rendercomds_[i][1]==1)
				this._rendercomds_[i][0].apply(this._context_,this._rendercomds_[i][2]);
			}
			if (this.lystroke){
				this._context_.stroke();
			}
			this._rendercomdsOffset_=this._rendercomds_.length;
		}

		__proto__.isReady=function(){
			return this._canvas_&&((this.width>0&&this.height>0)||this.lystroke);
		}

		__proto__.beginBitmapFill=function(bitmap,matrix,repeat,smooth){
			(repeat===void 0)&& (repeat=true);
			(smooth===void 0)&& (smooth=false);
			this._rendercomds_.push([null,3,[bitmap,matrix,repeat,smooth]]);
			this.bitmapFlag=true;
		}

		__proto__.beginFill=function(color,alpha){
			(alpha===void 0)&& (alpha=1);
			this.isFill=true;
			var s=color.toString(16).toUpperCase();
			var len=6-s.length,str="";
			if(s.length<6){
				for(var i=0;i<len;i++){
					str+=0;
				}
			}
			s=str+s;
			this._rendercomds_.push(["fillStyle",0,("#"+s)]);
			this.bitmapFlag=false;
			this._rendercomds_.push(["globalAlpha",0,alpha]);
		}

		__proto__.beginGradientFill=function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio){
			(spreadMethod===void 0)&& (spreadMethod="pad");
			(interpolationMethod===void 0)&& (interpolationMethod="rgb");
			(focalPointRatio===void 0)&& (focalPointRatio=0);
		}

		__proto__.beginShaderFill=function(shader,matrix){}
		__proto__.clear=function(){
			this.width=this.height=this.x=this.y=0;
			this.lystroke=this.isFill=false;
			this._minX=0;
			this._minY=0;
			this._maxX=0;
			this._maxY=0;
			this._rendercomds_.length=0;
			this._rendercomdsOffset_=0;
			this._canvas_&&this._canvas_.context.clearRect(0,0,this._canvas_.width,this._canvas_.height);
			this._tmFun_=[];
		}

		__proto__.copyFrom=function(sourceGraphics){
			Log.unfinished("Graphics","copyFrom");
		}

		__proto__.cubicCurveTo=function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY){
			Log.unfinished("Graphics","cubicCurveTo");
		}

		__proto__.curveTo=function(controlX,controlY,anchorX,anchorY){
			this.checkPoint(controlX,controlY);
			this.checkPoint(anchorX,anchorY);
		}

		__proto__.drawCircle=function(x,y,r){
			var w=x+r;
			var h=y+r;
			this._addplug_();
			this.x=x;
			this.y=y;
			this._expandSize_(w,h);
			this._rendercomds_.push([this._context_.arc,1,[x,y,r,0,Math.PI*2,true]]);
			if(this.lystorkeStyle)this._rendercomds_.push([this._context_.stroke,1,[]]);
			if(this.isFill)this._rendercomds_.push([this._context_.fill,1,[]]);
		}

		__proto__.drawEllipse=function(x,y,width,height){
			this.checkRect(x-width,y-height,2 *width,2 *height);
		}

		__proto__.drawGraphicsData=function(graphicsData){
			Log.unfinished("Graphics","drawGraphicsData");
		}

		__proto__.drawPath=function(commands,data,winding){
			(winding===void 0)&& (winding="evenOdd");
			Log.unfinished("Graphics","drawPath");
		}

		__proto__._addplug_=function(){
			if(Laya.RENDERBYCANVAS)
				DisplayUnit._insertUnit_(this.ower,DrawGraphics._DEFAULT_);
			else{
				this.ower._modle_.image(this._canvas_);
			}
		}

		__proto__.drawRect=function(x,y,w,h){
			this._addplug_();
			if (w < 0){
				x=x+w;
				w=-w;
			}
			if (h < 0){
				y=y+h;
				h=-h;
			}
			this.x=x;
			this.y=y;
			!this._beginPos && (this._beginPos=new Point());
			this._beginPos.x=x;
			this._beginPos.y=y;
			this._expandSize_(w,h);
			if (!this.bitmapFlag){
				if (this.lystorkeStyle){
					this.width+=2 *this.lythickness;
					this.height+=2 *this.lythickness;
					if(this.isFill)this._rendercomds_.push([this._context_.fillRect,1,[x,y,w,h]]);
					this._rendercomds_.push([this._context_.strokeRect,1,[x+0.5,y+0.5,w,h]]);
				}
				else
				this._rendercomds_.push([this._context_.fillRect,1,[x,y,w,h]]);
			}
			else{
				if(this._rendercomds_[this._rendercomds_.length-1][1]==3){
					var arr=this._rendercomds_.pop();
					var m=arr[2] [1];
					var canvas=arr[2][0].getCanvas();
					this._tmFun_.push(arr[2][0].newPaint);
					this._rendercomds_.push([this._context_.drawImage,1,[canvas,(x-m.tx)/m.a,(y-m.ty)/m.d,w/m.a,h/m.d,x,y,w,h]]);
					this.prefill=[this._context_.drawImage,canvas];
				}
				else if(this.prefill){
					this._rendercomds_.push([this.prefill[0],1,[this.prefill[1],x,y,w,h,x,y,w,h]]);
				}
			}
			this.beginRender();
		}

		__proto__.drawRoundRect=function(x,y,width,height,ellipseWidth,ellipseHeight){
			(ellipseHeight===void 0)&& (ellipseHeight=0);
			this.checkRect(x,y,width,height);
			this.drawRect(x,y,width,height);
		}

		__proto__.drawRoundRectComplex=function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius){
			Log.unfinished("Graphics","drawRoundRectComplex");
		}

		__proto__.drawTriangles=function(vertices,indices,uvtData,culling){
			(culling===void 0)&& (culling="none");
			Log.unfinished("Graphics","drawTriangles");
		}

		__proto__.endFill=function(){}
		__proto__.lineBitmapStyle=function(bitmap,matrix,repeat,smooth){
			(repeat===void 0)&& (repeat=true);
			(smooth===void 0)&& (smooth=false);
			Log.unfinished("Graphics","lineBitmapStyle");
		}

		__proto__.lineGradientStyle=function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio){
			(spreadMethod===void 0)&& (spreadMethod="pad");
			(interpolationMethod===void 0)&& (interpolationMethod="rgb");
			(focalPointRatio===void 0)&& (focalPointRatio=0);
			Log.unfinished("Graphics","lineGradientStyle");
		}

		__proto__.lineShaderStyle=function(shader,matrix){
			Log.unfinished("Graphics","lineShaderStyle");
		}

		__proto__.lineStyle=function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit){
			(thickness===void 0)&& (thickness=0);
			(color===void 0)&& (color=0);
			(alpha===void 0)&& (alpha=1);
			(pixelHinting===void 0)&& (pixelHinting=false);
			(scaleMode===void 0)&& (scaleMode="normal");
			(miterLimit===void 0)&& (miterLimit=3);
			this.bitmapFlag=false;
			this.lystorkeStyle=true;
			this.lythickness=thickness;
			var co=color.toString(16).toUpperCase();
			if(co.length==5)co=0+co
				if(co.length==4)co="00"+co;
			this._rendercomds_.push(["lineWidth",0,thickness]);
			this._rendercomds_.push(["strokeStyle",0,("#"+co)]);
			this._rendercomds_.push(["lineCap",0,"round"]);
			this._rendercomds_.push(["lineJoin",0,"round"]);
		}

		__proto__.lineTo=function(x,y){
			this._addplug_();
			this._expandSize_(x,y);
			this._rendercomds_.push([this._context_.lineTo,1,[x,y]]);
		}

		__proto__.moveTo=function(x,y){
			this._addplug_();
			this.lystroke=true;
			this._expandSize_(x,y);
			this._rendercomds_.push([this._context_.beginPath,1,null]);
			this._rendercomds_.push([this._context_.moveTo,1,[x,y]]);
		}

		__proto__.checkRect=function(x,y,w,h){
			this._minX=Math.min(this._minX,x);
			this._minY=Math.min(this._minY,y);
			this._maxX=Math.max(this._maxX,x+w);
			this._maxY=Math.max(this._maxY,y+h);
		}

		__proto__.checkPoint=function(x,y){
			this._minX=Math.min(this._minX,x);
			this._minY=Math.min(this._minY,y);
			this._maxX=Math.max(this._maxX,x);
			this._maxY=Math.max(this._maxY,y);
			this._lastX=x;
			this._lastY=y;
		}

		__proto__.getBounds=function(targetSpace){
			return this._getBounds_(targetSpace);
		}

		__proto__._getBounds_=function(targetSpace,resultRect){
			if(!resultRect)
				resultRect=new Rectangle();
			if(targetSpace==this.ower){
				resultRect.setTo(this.x,this.y,this.width,this.height);
			}
			else{
				var p=targetSpace.globalToLocal(this.ower.localToGlobal(new Point(this.x,this.y)));
				resultRect.setTo(p.x,p.y,this.width,this.height);
			}
			return resultRect;
		}

		DEFUNENUMPTY$(__proto__,'_$get_beginPos',function(){
			return this._beginPos;
		});

		Object.defineProperty(__proto__,'beginPos',{get:__proto__._$get_beginPos,enumerable:false});
		return Graphics;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/graphicsendfill.as=======10199.999973
	var GraphicsEndFill=iflash.display.GraphicsEndFill=(function(){
		function GraphicsEndFill(){
			;
		}

		REGCLASS$(GraphicsEndFill,'iflash.display.GraphicsEndFill',true,true);
		var __proto__=GraphicsEndFill.prototype;
		LAYABOX.implements(__proto__,{"iflash.display.IGraphicsFill":true,"iflash.display.IGraphicsData":true})
		return GraphicsEndFill;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/graphicsgradientfill.as=======10199.999972
	var GraphicsGradientFill=iflash.display.GraphicsGradientFill=(function(){
		function GraphicsGradientFill(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio){
			this.alphas=null;
			this.colors=null;
			this.focalPointRatio=null;
			this.matrix=null;
			this.ratios=null;
			(type===void 0)&& (type="linear");
			(spreadMethod===void 0)&& (spreadMethod="pad");
			(interpolationMethod===void 0)&& (interpolationMethod="rgb");
			(focalPointRatio===void 0)&& (focalPointRatio=0);
		}

		REGCLASS$(GraphicsGradientFill,'iflash.display.GraphicsGradientFill',true,true);
		var __proto__=GraphicsGradientFill.prototype;
		LAYABOX.implements(__proto__,{"iflash.display.IGraphicsFill":true,"iflash.display.IGraphicsData":true})
		DEFUNENUMPTY$(__proto__,'_$get_interpolationMethod',function(){
			Log.unfinished("GraphicsGradientFill","interpolationMethod");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_interpolationMethod',function(value){
			Log.unfinished("GraphicsGradientFill","interpolationMethod");
		});

		Object.defineProperty(__proto__,'interpolationMethod',{get:__proto__._$get_interpolationMethod,set:__proto__._$set_interpolationMethod,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_spreadMethod',function(){
			Log.unfinished("GraphicsGradientFill","spreadMethod");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_spreadMethod',function(value){
			Log.unfinished("GraphicsGradientFill","spreadMethod");
		});

		Object.defineProperty(__proto__,'spreadMethod',{get:__proto__._$get_spreadMethod,set:__proto__._$set_spreadMethod,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_type',function(){
			Log.unfinished("GraphicsGradientFill","type");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_type',function(value){
			Log.unfinished("GraphicsGradientFill","type");
		});

		Object.defineProperty(__proto__,'type',{get:__proto__._$get_type,set:__proto__._$set_type,enumerable:false});
		return GraphicsGradientFill;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/graphicspath.as=======10199.999971
	var GraphicsPath=iflash.display.GraphicsPath=(function(){
		function GraphicsPath(commands,data,winding){
			this.commands=null;
			this.data=null;
			(winding===void 0)&& (winding="evenOdd");
		}

		REGCLASS$(GraphicsPath,'iflash.display.GraphicsPath',true,true);
		var __proto__=GraphicsPath.prototype;
		LAYABOX.implements(__proto__,{"iflash.display.IGraphicsPath":true,"iflash.display.IGraphicsData":true})
		__proto__.cubicCurveTo=function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY){}
		__proto__.curveTo=function(controlX,controlY,anchorX,anchorY){
			Log.unfinished("GraphicsPath","curveTo");
		}

		__proto__.lineTo=function(x,y){
			Log.unfinished("GraphicsPath","lineTo");
		}

		__proto__.moveTo=function(x,y){
			Log.unfinished("GraphicsPath","moveTo");
		}

		__proto__.wideLineTo=function(x,y){
			Log.unfinished("GraphicsPath","wideLineTo");
		}

		__proto__.wideMoveTo=function(x,y){
			Log.unfinished("GraphicsPath","wideMoveTo");
		}

		DEFUNENUMPTY$(__proto__,'_$get_winding',function(){
			Log.unfinished("GraphicsPath","winding");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_winding',function(value){
			Log.unfinished("GraphicsPath","winding");
		});

		Object.defineProperty(__proto__,'winding',{get:__proto__._$get_winding,set:__proto__._$set_winding,enumerable:false});
		return GraphicsPath;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/graphicspathcommand.as=======10199.999970
	var GraphicsPathCommand=iflash.display.GraphicsPathCommand=(function(){
		function GraphicsPathCommand(){}
		REGCLASS$(GraphicsPathCommand,'iflash.display.GraphicsPathCommand',true,true);
		GraphicsPathCommand.CUBIC_CURVE_TO=0;
		GraphicsPathCommand.CURVE_TO=3;
		GraphicsPathCommand.LINE_TO=2;
		GraphicsPathCommand.MOVE_TO=1;
		GraphicsPathCommand.NO_OP=0;
		GraphicsPathCommand.WIDE_LINE_TO=5;
		GraphicsPathCommand.WIDE_MOVE_TO=4;
		return GraphicsPathCommand;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/graphicssolidfill.as=======10199.999969
	var GraphicsSolidFill=iflash.display.GraphicsSolidFill=(function(){
		function GraphicsSolidFill(color,alpha){
			this.alpha=null;
			this.color=0;
			(color===void 0)&& (color=0);
			(alpha===void 0)&& (alpha=1);
		}

		REGCLASS$(GraphicsSolidFill,'iflash.display.GraphicsSolidFill',true,true);
		var __proto__=GraphicsSolidFill.prototype;
		LAYABOX.implements(__proto__,{"iflash.display.IGraphicsFill":true,"iflash.display.IGraphicsData":true})
		return GraphicsSolidFill;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/graphicsstroke.as=======10199.999968
	var GraphicsStroke=iflash.display.GraphicsStroke=(function(){
		function GraphicsStroke(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill){
			this.fill=null;
			this.miterLimit=null;
			this.pixelHinting=false;
			this.thickness=null;
			(thickness===void 0)&& (thickness=NaN);
			(pixelHinting===void 0)&& (pixelHinting=false);
			(scaleMode===void 0)&& (scaleMode="normal");
			(caps===void 0)&& (caps="none");
			(joints===void 0)&& (joints="round");
			(miterLimit===void 0)&& (miterLimit=3);
		}

		REGCLASS$(GraphicsStroke,'iflash.display.GraphicsStroke',true,true);
		var __proto__=GraphicsStroke.prototype;
		LAYABOX.implements(__proto__,{"iflash.display.IGraphicsStroke":true,"iflash.display.IGraphicsData":true})
		DEFUNENUMPTY$(__proto__,'_$get_caps',function(){
			Log.unfinished("GraphicsStroke","caps");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_caps',function(value){
			Log.unfinished("GraphicsStroke","caps");
		});

		Object.defineProperty(__proto__,'caps',{get:__proto__._$get_caps,set:__proto__._$set_caps,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_joints',function(){
			Log.unfinished("GraphicsStroke","joints");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_joints',function(value){
			Log.unfinished("GraphicsStroke","joints");
		});

		Object.defineProperty(__proto__,'joints',{get:__proto__._$get_joints,set:__proto__._$set_joints,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleMode',function(){
			Log.unfinished("GraphicsStroke","scaleMode");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleMode',function(value){
			Log.unfinished("GraphicsStroke","scaleMode");
		});

		Object.defineProperty(__proto__,'scaleMode',{get:__proto__._$get_scaleMode,set:__proto__._$set_scaleMode,enumerable:false});
		return GraphicsStroke;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/interpolationmethod.as=======10199.999962
	var InterpolationMethod=iflash.display.InterpolationMethod=(function(){
		function InterpolationMethod(){}
		REGCLASS$(InterpolationMethod,'iflash.display.InterpolationMethod',true,true);
		InterpolationMethod.LINEAR_RGB="linearRGB";
		InterpolationMethod.RGB="rgb";
		return InterpolationMethod;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/jointstyle.as=======10199.999961
	var JointStyle=iflash.display.JointStyle=(function(){
		function JointStyle(){
			;
		}

		REGCLASS$(JointStyle,'iflash.display.JointStyle',true,true);
		JointStyle.ROUND="round";
		JointStyle.BEVEL="bevel";
		JointStyle.MITER="miter";
		return JointStyle;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/linescalemode.as=======10199.999960
	var LineScaleMode=iflash.display.LineScaleMode=(function(){
		function LineScaleMode(){}
		REGCLASS$(LineScaleMode,'iflash.display.LineScaleMode',true,true);
		LineScaleMode.HORIZONTAL="horizontal";
		LineScaleMode.NONE="none";
		LineScaleMode.NORMAL="normal";
		LineScaleMode.VERTICAL="vertical";
		return LineScaleMode;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/pixelsnapping.as=======10199.999953
	var PixelSnapping=iflash.display.PixelSnapping=(function(){
		function PixelSnapping(){}
		REGCLASS$(PixelSnapping,'iflash.display.PixelSnapping',true,true);
		PixelSnapping.ALWAYS="always";
		PixelSnapping.AUTO="auto";
		PixelSnapping.NEVER="never";
		return PixelSnapping;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/displayunit.as=======10199.999951
	var DisplayUnit=iflash.laya.display.unit.DisplayUnit=(function(){
		function DisplayUnit(){
			this.next=null;
			this.pre=null;
		}

		REGCLASS$(DisplayUnit,'iflash.laya.display.unit.DisplayUnit',true,true);
		var __proto__=DisplayUnit.prototype;
		__proto__.clone=function(node){
			return null;
		}

		__proto__.destroy=function(){
			Log.unfinished("DisplayUnit","destroy");
		}

		__proto__.paint=function(context,x,y,node,w,h){
			if (this.next)this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return-1;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return-1;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DisplayUnit._insertUnit_=function(node,tempt){
			if (!Laya.RENDERBYCANVAS)return null;
			if (node._firstDisplayUnit_==null){
				return node._firstDisplayUnit_=tempt.clone(node);
			};
			var _pre=node._firstDisplayUnit_,last;
			var _place=tempt.place,_id=tempt.id;
			do{
				last=_pre;
				if (_pre.id==_id)return _pre;
				if (_pre.place >=_place)
					break ;
				_pre=_pre.next;
			}
			while (_pre);
			if (last.place==_place){
				_pre=tempt.clone(node);
				_pre.pre=last.pre;
				_pre.next=last.next;
				(_pre.pre==null)&& (node._firstDisplayUnit_=_pre);
				last.destroy();
				return _pre;
			}
			if (last.place < _place){
				_pre=last.next;
				last.next=tempt.clone(node);
				last.next.pre=last;
				last.next.next=_pre;
				return last.next;
			}
			_pre=tempt.clone(node);
			last.pre && (last.pre.next=_pre);
			_pre.pre=last.pre;
			_pre.next=last;
			last.pre=_pre;
			(_pre.pre==null)&& (node._firstDisplayUnit_=_pre);
			return _pre;
		}

		DisplayUnit.removeUnit=function(node,unit){
			if (unit.pre)
				unit.pre.next=unit.next;
			if (unit.next)
				unit.next.pre=unit.pre;
			unit.destroy();
		}

		REGSTATICATTR$(DisplayUnit,
		['_DEFAULT_',function(){return this._DEFAULT_=new DisplayUnit();}
		]);
		return DisplayUnit;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/scene.as=======10199.999941
	var Scene=iflash.display.Scene=(function(){
		function Scene(name,labels,numFrames){}
		REGCLASS$(Scene,'iflash.display.Scene',true,true);
		var __proto__=Scene.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_labels',function(){
			Log.unfinished("Scene","labels");
			return null;
		});

		Object.defineProperty(__proto__,'labels',{get:__proto__._$get_labels,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_name',function(){
			Log.unfinished("Scene","name");
			return null;
		});

		Object.defineProperty(__proto__,'name',{get:__proto__._$get_name,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_numFrames',function(){
			Log.unfinished("Scene","numFrames");
			return 0;
		});

		Object.defineProperty(__proto__,'numFrames',{get:__proto__._$get_numFrames,enumerable:false});
		return Scene;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/shader.as=======10199.999940
	var Shader=iflash.display.Shader=(function(){
		function Shader(code){
			this._data
			;
			if(code){
				this.byteCode=code;
			}
		}

		REGCLASS$(Shader,'iflash.display.Shader',true,true);
		var __proto__=Shader.prototype;
		DEFUNENUMPTY$(__proto__,'_$set_byteCode',function(code){
			this.data=new ShaderData(code);
		});

		Object.defineProperty(__proto__,'byteCode',{set:__proto__._$set_byteCode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_data',function(){return this._data});
		DEFUNENUMPTY$(__proto__,'_$set_data',function(value){this._data=value});
		Object.defineProperty(__proto__,'data',{get:__proto__._$get_data,set:__proto__._$set_data,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_precisionHint',function(){return ""});
		DEFUNENUMPTY$(__proto__,'_$set_precisionHint',function(value){});
		Object.defineProperty(__proto__,'precisionHint',{get:__proto__._$get_precisionHint,set:__proto__._$set_precisionHint,enumerable:false});
		return Shader;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/shaderdata.as=======10199.999939
	var ShaderData=iflash.display.ShaderData=(function(){
		function ShaderData(byteCode){
			;
		}

		REGCLASS$(ShaderData,'iflash.display.ShaderData',true,true);
		return ShaderData;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/spreadmethod.as=======10199.999935
	var SpreadMethod=iflash.display.SpreadMethod=(function(){
		function SpreadMethod(){
			;
		}

		REGCLASS$(SpreadMethod,'iflash.display.SpreadMethod',true,true);
		SpreadMethod.PAD="pad";
		SpreadMethod.REFLECT="reflect";
		SpreadMethod.REPEAT="repeat";
		return SpreadMethod;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/stagealign.as=======10199.999932
	var StageAlign=iflash.display.StageAlign=(function(){
		function StageAlign(){}
		REGCLASS$(StageAlign,'iflash.display.StageAlign',true,true);
		StageAlign.BOTTOM="B";
		StageAlign.BOTTOM_LEFT="BL";
		StageAlign.BOTTOM_RIGHT="BR";
		StageAlign.LEFT="L";
		StageAlign.RIGHT="R";
		StageAlign.TOP="T";
		StageAlign.TOP_LEFT="TL";
		StageAlign.TOP_RIGHT="TR";
		return StageAlign;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/stagedisplaystate.as=======10199.999931
	var StageDisplayState=iflash.display.StageDisplayState=(function(){
		function StageDisplayState(){
			;
		}

		REGCLASS$(StageDisplayState,'iflash.display.StageDisplayState',true,true);
		StageDisplayState.FULL_SCREEN="fullScreen";
		StageDisplayState.FULL_SCREEN_INTERACTIVE="fullScreenInteractive";
		StageDisplayState.NORMAL="normal";
		return StageDisplayState;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/stagequality.as=======10199.999930
	var StageQuality=iflash.display.StageQuality=(function(){
		function StageQuality(){
			;
		}

		REGCLASS$(StageQuality,'iflash.display.StageQuality',true,true);
		StageQuality.LOW="low";
		StageQuality.MEDIUM="medium";
		StageQuality.HIGH="high";
		StageQuality.BEST="best";
		return StageQuality;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/stagescalemode.as=======10199.999929
	var StageScaleMode=iflash.display.StageScaleMode=(function(){
		function StageScaleMode(){
			;
		}

		REGCLASS$(StageScaleMode,'iflash.display.StageScaleMode',true,true);
		StageScaleMode.SHOW_ALL="showAll";
		StageScaleMode.EXACT_FIT="exactFit";
		StageScaleMode.NO_BORDER="noBorder";
		StageScaleMode.NO_SCALE="noScale";
		return StageScaleMode;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/swfversion.as=======10199.999925
	var SWFVersion=iflash.display.SWFVersion=(function(){
		function SWFVersion(){}
		REGCLASS$(SWFVersion,'iflash.display.SWFVersion',true,true);
		SWFVersion.FLASH1=1;
		SWFVersion.FLASH10=10;
		SWFVersion.FLASH11=11;
		SWFVersion.FLASH12=0;
		SWFVersion.FLASH2=2;
		SWFVersion.FLASH3=3;
		SWFVersion.FLASH4=4;
		SWFVersion.FLASH5=5;
		SWFVersion.FLASH6=6;
		SWFVersion.FLASH7=7;
		SWFVersion.FLASH8=8;
		SWFVersion.FLASH9=9;
		return SWFVersion;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/utils/filters.as=======10199.999923
	var Filters=iflash.display.utils.Filters=(function(){
		function Filters(){
			this._alpha_=1;
			this.key=0;
		}

		REGCLASS$(Filters,'iflash.display.utils.Filters',true,true);
		var __proto__=Filters.prototype;
		__proto__.alpha=function(d,value){
			Laya.RENDERBYCANVAS && UseFilter.insertUnit(d);
			this._alpha_=value;
			d._modle_.alpha(value);
		}

		REGSTATICATTR$(Filters,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Filters();}
		]);
		return Filters;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/utils/point3d.as=======10199.999922
	var Point3d=iflash.display.utils.Point3d=(function(){
		function Point3d(_x,_y,_z){
			this.x=null;
			this.y=null;
			this.z=null;
			this.x=_x;
			this.y=_y;
			this.z=_z;
		}

		REGCLASS$(Point3d,'iflash.display.utils.Point3d',true,true);
		return Point3d;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/external/externalinterface.as=======10199.999856
	var ExternalInterface=iflash.external.ExternalInterface=(function(){
		function ExternalInterface(){}
		REGCLASS$(ExternalInterface,'iflash.external.ExternalInterface',true,true);
		ExternalInterface._$GET_available=function(){
			Log.unfinished("ExternalInterface","available");
			return false;
		}

		Object.defineProperty(ExternalInterface,'available',{get:ExternalInterface._$GET_available,enumerable:false});
		ExternalInterface._$GET_objectID=function(){
			Log.unfinished("ExternalInterface","objectID");
			return "";
		}

		Object.defineProperty(ExternalInterface,'objectID',{get:ExternalInterface._$GET_objectID,enumerable:false});
		ExternalInterface.addCallback=function(functionName,closure){
			Log.unfinished("ExternalInterface","addCallback");
		}

		ExternalInterface.call=function(functionName,__rest){
			var rest=[];for(var i=1,sz=arguments.length;i<sz;i++)rest.push(arguments[i]);
			Log.unfinished("ExternalInterface","call");
			return null;
		}

		ExternalInterface.marshallExceptions=false
		return ExternalInterface;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filesystem/filemode.as=======10199.999853
	var FileMode=iflash.filesystem.FileMode=(function(){
		function FileMode(){};
		REGCLASS$(FileMode,'iflash.filesystem.FileMode',true,true);
		FileMode.APPEND="append";
		FileMode.READ="read";
		FileMode.UPDATE="update";
		FileMode.WRITE="write";
		return FileMode;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/bitmapfilter.as=======10199.999850
	var BitmapFilter=iflash.filters.BitmapFilter=(function(){
		function BitmapFilter(inType){
			this._mType=null;
			this.___cached=false;
			this.passes=0;
			this._mType=inType;
		}

		REGCLASS$(BitmapFilter,'iflash.filters.BitmapFilter',true,true);
		var __proto__=BitmapFilter.prototype;
		__proto__.clone=function(){
			return new BitmapFilter(this._mType);
		}

		__proto__.__preApplyFilter=function(dec){}
		__proto__.__applyFilter=function(dec){}
		return BitmapFilter;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/bitmapfilterquality.as=======10199.999849
	var BitmapFilterQuality=iflash.filters.BitmapFilterQuality=(function(){
		function BitmapFilterQuality(){
			;
		}

		REGCLASS$(BitmapFilterQuality,'iflash.filters.BitmapFilterQuality',true,true);
		BitmapFilterQuality.HIGH=3;
		BitmapFilterQuality.LOW=1;
		BitmapFilterQuality.MEDIUM=2;
		return BitmapFilterQuality;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/bitmapfiltertype.as=======10199.999848
	var BitmapFilterType=iflash.filters.BitmapFilterType=(function(){
		function BitmapFilterType(){};
		REGCLASS$(BitmapFilterType,'iflash.filters.BitmapFilterType',true,true);
		BitmapFilterType.FULL="full";
		BitmapFilterType.INNER="inner";
		BitmapFilterType.OUTER="outer";
		return BitmapFilterType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/displacementmapfiltermode.as=======10199.999843
	var DisplacementMapFilterMode=iflash.filters.DisplacementMapFilterMode=(function(){
		function DisplacementMapFilterMode(){
			this.CLAMP=null;
			this.COLOR=null;
			this.IGNORE=null;
			this.WRAP=null;
		}

		REGCLASS$(DisplacementMapFilterMode,'iflash.filters.DisplacementMapFilterMode',true,true);
		return DisplacementMapFilterMode;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/geom/colortransform.as=======10199.999838
	var ColorTransform=iflash.geom.ColorTransform=(function(){
		function ColorTransform(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset){
			this.redMultiplier=null;
			this.greenMultiplier=null;
			this.blueMultiplier=null;
			this.alphaMultiplier=null;
			this.redOffset=null;
			this.greenOffset=null;
			this.blueOffset=null;
			this.alphaOffset=null;
			(redMultiplier===void 0)&& (redMultiplier=1.0);
			(greenMultiplier===void 0)&& (greenMultiplier=1.0);
			(blueMultiplier===void 0)&& (blueMultiplier=1.0);
			(alphaMultiplier===void 0)&& (alphaMultiplier=1.0);
			(redOffset===void 0)&& (redOffset=0);
			(greenOffset===void 0)&& (greenOffset=0);
			(blueOffset===void 0)&& (blueOffset=0);
			(alphaOffset===void 0)&& (alphaOffset=0);
			;
			this.redMultiplier=redMultiplier;
			this.greenMultiplier=greenMultiplier;
			this.blueMultiplier=blueMultiplier;
			this.alphaMultiplier=alphaMultiplier;
			this.redOffset=redOffset;
			this.greenOffset=greenOffset;
			this.blueOffset=blueOffset;
			this.alphaOffset=alphaOffset;
		}

		REGCLASS$(ColorTransform,'iflash.geom.ColorTransform',true,false);
		var __proto__=ColorTransform.prototype;
		__proto__.concat=function(second){
			this.alphaOffset=this.alphaOffset+this.alphaMultiplier *second.alphaOffset;
			this.alphaMultiplier=this.alphaMultiplier *second.alphaMultiplier;
			this.redOffset=this.redOffset+this.redMultiplier *second.redOffset;
			this.redMultiplier=this.redMultiplier *second.redMultiplier;
			this.greenOffset=this.greenOffset+this.greenMultiplier *second.greenOffset;
			this.greenMultiplier=this.greenMultiplier *second.greenMultiplier;
			this.blueOffset=this.blueOffset+this.blueMultiplier *second.blueOffset;
			this.blueMultiplier=this.blueMultiplier *second.blueMultiplier;
		}

		__proto__.toString=function(){
			return "(redMultiplier="+this.redMultiplier+", greenMultiplier="+this.greenMultiplier+", blueMultiplier="+this.blueMultiplier+", alphaMultiplier="+this.alphaMultiplier+", redOffset="+this.redOffset+", greenOffset="+this.greenOffset+", blueOffset="+this.blueOffset+", alphaOffset="+this.alphaOffset+")";
		}

		DEFUNENUMPTY$(__proto__,'_$get_color',function(){
			return this.redOffset << 16 | this.greenOffset << 8 | this.blueOffset;
		});

		DEFUNENUMPTY$(__proto__,'_$set_color',function(newColor){
			this.redMultiplier=this.greenMultiplier=this.blueMultiplier=0;
			this.redOffset=newColor >> 16 & 255;
			this.greenOffset=newColor >> 8 & 255;
			this.blueOffset=newColor & 255;
		});

		Object.defineProperty(__proto__,'color',{get:__proto__._$get_color,set:__proto__._$set_color,enumerable:false});
		REGSTATICATTR$(ColorTransform,
		['_DEFAULT_',function(){return this._DEFAULT_=new ColorTransform();}
		]);
		return ColorTransform;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/geom/matrix.as=======10199.999837
	var Matrix=iflash.geom.Matrix=(function(){
		function Matrix(a,b,c,d,tx,ty){
			this.a=null;
			this.b=null;
			this.c=null;
			this.d=null;
			this.tx=null;
			this.ty=null;
			(a===void 0)&& (a=1);
			(b===void 0)&& (b=0);
			(c===void 0)&& (c=0);
			(d===void 0)&& (d=1);
			(tx===void 0)&& (tx=0);
			(ty===void 0)&& (ty=0);
			this.a=a;
			this.b=b;
			this.c=c;
			this.d=d;
			this.tx=tx;
			this.ty=ty;
		}

		REGCLASS$(Matrix,'iflash.geom.Matrix',true,true);
		var __proto__=Matrix.prototype;
		__proto__.isTransform=function(){
			return this.a !=1 || this.b !=0 || this.c !=0 || this.d !=1;
		}

		__proto__.clone=function(){
			return new Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		}

		__proto__.createGradientBox=function(in_width,in_height,rotation,in_tx,in_ty){
			(rotation===void 0)&& (rotation=0);
			(in_tx===void 0)&& (in_tx=0);
			(in_ty===void 0)&& (in_ty=0);
			this.a=in_width / 1638.4;
			this.d=in_height / 1638.4;
			if (rotation !=0 && rotation !=0.0){
				var cos=Math.cos(rotation);
				var sin=Math.sin(rotation);
				this.b=sin *this.d;
				this.c=-sin *this.a;
				this.a*=cos;
				this.d*=cos;
			}
			else{
				this.b=0;
				this.c=0;
			}
			this.tx=(in_tx !=0 ? in_tx+in_width / 2 :in_width / 2);
			this.ty=(in_ty !=0 ? in_ty+in_height / 2 :in_height / 2);
		}

		__proto__.transformPoint=function(point){
			return new Point(this.a *point.x+this.c *point.y+this.tx,this.d *point.y+this.b *point.x+this.ty);
		}

		__proto__.identity=function(){
			this.a=this.d=1;
			this.b=this.c=this.tx=this.ty=0;
		}

		__proto__.copy=function(src){
			this.a=src.a;
			this.b=src.b;
			this.c=src.c;
			this.d=src.d;
			this.tx=src.tx;
			this.ty=src.ty;
			return this;
		}

		__proto__.copyFrom=function(src){
			this.a=src.a;
			this.b=src.b;
			this.c=src.c;
			this.d=src.d;
			this.tx=src.tx;
			this.ty=src.ty;
		}

		__proto__.IsEqual=function(p_pOther){
			if (this.a !=p_pOther.a || this.b !=p_pOther.b || this.c !=p_pOther.c || this.d !=p_pOther.d || this.tx !=p_pOther.tx || this.ty !=p_pOther.ty){
				return false;
			}
			return true;
		}

		__proto__.translate=function(x,y){
			this.tx=x+this.tx;
			this.ty=y+this.ty;
		}

		__proto__.rotate=function(angle){
			if (angle==0)
				return;
			var rm11=Math.cos(angle);
			var rm12=Math.sin(angle);
			var rm21=-Math.sin(angle);
			var rm22=Math.cos(angle);
			var tm11=rm11 *this.a+rm12 *this.c;
			var tm12=rm11 *this.b+rm12 *this.d;
			var tm21=rm21 *this.a+rm22 *this.c;
			var tm22=rm21 *this.b+rm22 *this.d;
			this.a=tm11;
			this.b=tm12;
			this.c=tm21;
			this.d=tm22;
		}

		__proto__.scale=function(sx,sy){
			if (sx==1 && sy==1)
				return;
			this.a*=sx;
			this.b*=sx;
			this.c*=sy;
			this.d*=sy;
		}

		__proto__.setTransform=function(n11,n12,n21,n22,n31,n32){
			this.a=n11;
			this.b=n12;
			this.c=n21;
			this.d=n22;
			this.tx=n31;
			this.ty=n32;
		}

		__proto__.transform=function(n11,n12,n21,n22,n31,n32){
			var k11=n11 *this.a+n12 *this.c+0 *this.tx;
			var k12=n11 *this.b+n12 *this.d+0 *this.ty;
			var k21=n21 *this.a+n22 *this.c+0 *this.tx;
			var k22=n21 *this.b+n22 *this.d+0 *this.ty;
			var k31=n31 *this.a+n32 *this.c+1 *this.tx;
			var k32=n31 *this.b+n32 *this.d+1 *this.ty;
			this.a=k11;
			this.b=k12;
			this.c=k21;
			this.d=k22;
			this.tx=k31;
			this.ty=k32;
		}

		__proto__.invert=function(){
			var a=this.a;
			var b=this.b;
			var c=this.c;
			var d=this.d;
			var tx=this.tx;
			var i=a *d-b *c;
			this.a=d / i;
			this.b=-b / i;
			this.c=-c / i;
			this.d=a / i;
			this.tx=(c *this.ty-d *tx)/ i;
			this.ty=-(a *this.ty-b *tx)/ i;
		}

		__proto__.concat=function(mtx){
			var a=this.a;
			var c=this.c;
			var tx=this.tx;
			this.a=a *mtx.a+this.b *mtx.c;
			this.b=a *mtx.b+this.b *mtx.d;
			this.c=c *mtx.a+this.d *mtx.c;
			this.d=c *mtx.b+this.d *mtx.d;
			this.tx=tx *mtx.a+this.ty *mtx.c+mtx.tx;
			this.ty=tx *mtx.b+this.ty *mtx.d+mtx.ty;
		}

		__proto__.concatSix=function(a1,b1,c1,d1,tx1,ty1){
			var a=this.a;
			var c=this.c;
			var tx=this.tx;
			this.a=a *a1+this.b *c1;
			this.b=a *b1+this.b *d1;
			this.c=c *a1+this.d *c1;
			this.d=c *b1+this.d *d1;
			this.tx=tx *a1+this.ty *c1+tx1;
			this.ty=tx *b1+this.ty *d1+ty1;
		}

		__proto__.deltaTransformPoint=function(point){
			return new Point(point.x *this.a+point.y *this.c,point.x *this.b+point.y *this.d);
		}

		__proto__.createBox=function(scaleX,scaleY,rotation,tx,ty){
			(rotation===void 0)&& (rotation=0);
			(tx===void 0)&& (tx=0);
			(ty===void 0)&& (ty=0);
			this.a=scaleX;
			this.d=scaleY;
			this.b=rotation;
			this.tx=tx;
			this.ty=ty;
		}

		__proto__.setTo=function(a1,b1,c1,d1,tx1,ty1){
			this.a=a1;
			this.b=b1;
			this.c=c1;
			this.d=d1;
			this.tx=tx1;
			this.ty=ty1;
		}

		Matrix.lerp=function(mo,m1,m2,f){
			mo.a=m1.a+(m2.a-m1.a)*f;
			mo.b=m1.b+(m2.b-m1.b)*f;
			mo.c=m1.c+(m2.c-m1.c)*f;
			mo.d=m1.d+(m2.d-m1.d)*f;
			mo.tx=m1.tx+(m2.tx-m1.tx)*f;
			mo.ty=m1.ty+(m2.ty-m1.ty)*f;
		}

		Matrix.lerp1=function(mo,m1,m2,f){
			mo.a=m1[0]+(m2[0]-m1[0])*f;
			mo.b=m1[1]+(m2[1]-m1[1])*f;
			mo.c=m1[2]+(m2[2]-m1[2])*f;
			mo.d=m1[3]+(m2[3]-m1[3])*f;
			mo.tx=m1[4]+(m2[4]-m1[4])*f;
			mo.ty=m1[5]+(m2[5]-m1[5])*f;
		}

		Matrix.fromSRT=function(mo,sx,sy,r,tx,ty){
			var st=Math.sin(r);
			var ct=Math.cos(r);
			mo.a=sx *ct;
			mo.b=sx *st;
			mo.c=-sy *st;
			mo.d=sy *ct;
			mo.tx=tx;
			mo.ty=ty;
		}

		Matrix.fromRST=function(mo,sx,sy,r,tx,ty){
			var st=Math.sin(r);
			var ct=Math.cos(r);
			mo.a=sx *ct;
			mo.b=sy *st;
			mo.c=-sx *st;
			mo.d=sy *ct;
			mo.tx=tx;
			mo.ty=ty;
		}

		Matrix.fromTransformInfo=function(mo,sx,sy,sr,r,tx,ty){
			if (sr==0.0)
				Matrix.fromSRT(mo,sx,sy,r,tx,ty);
			else if (Math.abs(sr-r)< 0.0001)
			Matrix.fromRST(mo,sx,sy,r,tx,ty);
			else{
				var st=Math.sin(sr);
				var ct=Math.cos(sr);
				mo.a=sx *ct;
				mo.b=sy *st;
				mo.c=-sx *st;
				mo.d=sy *ct;
				mo.tx=0;
				mo.ty=0;
				var mt=new Matrix();
				mt.a=ct;
				mt.b=-st;
				mt.c=st;
				mt.d=ct;
				mt.tx=0;
				mt.ty=0;
				Matrix.mul(mo,mo,mt);
				st=Math.sin(r);
				ct=Math.cos(r);
				mt.a=ct;
				mt.b=st;
				mt.c=-st;
				mt.d=ct;
				mt.tx=0;
				mt.ty=0;
				Matrix.mul(mo,mo,mt);
				mo.tx=tx;
				mo.ty=ty;
			}
		}

		Matrix.mul=function(mo,m1,m2){
			var aa=m1.a,ab=m1.b,ac=m1.c,ad=m1.d,atx=m1.tx,aty=m1.ty,ba=m2.a,bb=m2.b,bc=m2.c,bd=m2.d,btx=m2.tx,bty=m2.ty;
			mo.a=aa *ba+ab *bc;
			mo.b=aa *bb+ab *bd;
			mo.c=ac *ba+ad *bc;
			mo.d=ac *bb+ad *bd;
			mo.tx=ba *atx+bc *aty+btx;
			mo.ty=bb *atx+bd *aty+bty;
		}

		REGSTATICATTR$(Matrix,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Matrix();
		},'__SMALL__',function(){return this.__SMALL__=new Matrix(0.00001,0,0,0.000001,0,0);}

		]);
		return Matrix;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/geom/matrix3d.as=======10199.999836
	var Matrix3D=iflash.geom.Matrix3D=(function(){
		function Matrix3D(v){
			this.$vec=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
			this.$transposeTransform=[0,4,8,12,1,5,9,13,2,6,10,14,3,7,11,15];
			if (v !=null){
				if (v.length !=this.$vec.length){
					throw new Error("Not equal length!");
				}
				for (var i=0;i < this.$vec.length;i++){
					this.$vec[i]=v[i];
				}
			}
		}

		REGCLASS$(Matrix3D,'iflash.geom.Matrix3D',true,true);
		var __proto__=Matrix3D.prototype;
		__proto__.append=function(lhs){
			var ma=lhs.rawData,mb=this.$vec;
			var ma11=ma[0],ma12=ma[4],ma13=ma[8],ma14=ma[12];
			var ma21=ma[1],ma22=ma[5],ma23=ma[9],ma24=ma[13];
			var ma31=ma[2],ma32=ma[6],ma33=ma[10],ma34=ma[14];
			var ma41=ma[3],ma42=ma[7],ma43=ma[11],ma44=ma[15];
			var mb11=mb[0],mb12=mb[4],mb13=mb[8],mb14=mb[12];
			var mb21=mb[1],mb22=mb[5],mb23=mb[9],mb24=mb[13];
			var mb31=mb[2],mb32=mb[6],mb33=mb[10],mb34=mb[14];
			var mb41=mb[3],mb42=mb[7],mb43=mb[11],mb44=mb[15];
			this.$vec[0]=ma11 *mb11+ma12 *mb21+ma13 *mb31+ma14 *mb41;
			this.$vec[1]=ma21 *mb11+ma22 *mb21+ma23 *mb31+ma24 *mb41;
			this.$vec[2]=ma31 *mb11+ma32 *mb21+ma33 *mb31+ma34 *mb41;
			this.$vec[3]=ma41 *mb11+ma42 *mb21+ma43 *mb31+ma44 *mb41;
			this.$vec[4]=ma11 *mb12+ma12 *mb22+ma13 *mb32+ma14 *mb42;
			this.$vec[5]=ma21 *mb12+ma22 *mb22+ma23 *mb32+ma24 *mb42;
			this.$vec[6]=ma31 *mb12+ma32 *mb22+ma33 *mb32+ma34 *mb42;
			this.$vec[7]=ma41 *mb12+ma42 *mb22+ma43 *mb32+ma44 *mb42;
			this.$vec[8]=ma11 *mb13+ma12 *mb23+ma13 *mb33+ma14 *mb43;
			this.$vec[9]=ma21 *mb13+ma22 *mb23+ma23 *mb33+ma24 *mb43;
			this.$vec[10]=ma31 *mb13+ma32 *mb23+ma33 *mb33+ma34 *mb43;
			this.$vec[11]=ma41 *mb13+ma42 *mb23+ma43 *mb33+ma44 *mb43;
			this.$vec[12]=ma11 *mb14+ma12 *mb24+ma13 *mb34+ma14 *mb44;
			this.$vec[13]=ma21 *mb14+ma22 *mb24+ma23 *mb34+ma24 *mb44;
			this.$vec[14]=ma31 *mb14+ma32 *mb24+ma33 *mb34+ma34 *mb44;
			this.$vec[15]=ma41 *mb14+ma42 *mb24+ma43 *mb34+ma44 *mb44;
		}

		__proto__.appendRotation=function(degrees,axis,pivotPoint){
			this.append(this.getRotationMatrix(degrees / 180 *Math.PI,axis.x,axis.y,axis.z,pivotPoint ? pivotPoint.x :0,pivotPoint ? pivotPoint.y :0,pivotPoint ? pivotPoint.z :0));
		}

		__proto__.appendScale=function(xScale,yScale,zScale){
			this.$vec[0]*=xScale;
			this.$vec[1]*=yScale;
			this.$vec[2]*=zScale;
			this.$vec[4]*=xScale;
			this.$vec[5]*=yScale;
			this.$vec[6]*=zScale;
			this.$vec[8]*=xScale;
			this.$vec[9]*=yScale;
			this.$vec[10]*=zScale;
			this.$vec[12]*=xScale;
			this.$vec[13]*=yScale;
			this.$vec[14]*=zScale;
		}

		__proto__.appendTranslation=function(x,y,z){
			var m=this.$vec;
			var m41=m[3],m42=m[7],m43=m[11],m44=m[15];
			m[0]+=x *m41;
			m[1]+=y *m41;
			m[2]+=z *m41;
			m[4]+=x *m42;
			m[5]+=y *m42;
			m[6]+=z *m42;
			m[8]+=x *m43;
			m[9]+=y *m43;
			m[10]+=z *m43;
			m[12]+=x *m44;
			m[13]+=y *m44;
			m[14]+=z *m44;
		}

		__proto__.clone=function(){
			return new Matrix3D(this.$vec);
		}

		__proto__.copyColumnFrom=function(column,vector3D){
			if (column > 3)
				throw new Error("column number too bigger");
			var offset=column << 2;
			this.$vec[offset]=vector3D.x;
			this.$vec[offset+1]=vector3D.y;
			this.$vec[offset+2]=vector3D.z;
			this.$vec[offset+3]=vector3D.w;
		}

		__proto__.copyColumnTo=function(column,vector3D){
			if (column > 3)
				throw new Error("column number too bigger");
			var offset=column << 2;
			vector3D.x=this.$vec[offset];
			vector3D.y=this.$vec[offset+1];
			vector3D.z=this.$vec[offset+2];
			vector3D.w=this.$vec[offset+3];
		}

		__proto__.copyFrom=function(sourceMatrix3D){
			for (var i=0;i < this.$vec.length;i++){
				this.$vec[i]=sourceMatrix3D.$vec[i];
			}
		}

		__proto__.copyRawDataFrom=function(vector,index,transpose){
			(index===void 0)&& (index=0);
			(transpose===void 0)&& (transpose=false);
			var i=0,j=index | 0
			if (transpose){
				for (;i < 16;i++,j++){
					this.$vec[this.$transposeTransform[i]]=vector[j] || 0;
				}
			}
			else{
				for (;i < 16;i++,j++){
					this.$vec[i]=vector[j] || 0;
				}
			}
		}

		__proto__.copyRawDataTo=function(vector,index,transpose){
			(index===void 0)&& (index=0);
			(transpose===void 0)&& (transpose=false);
			var i=0,j=index | 0;
			if (transpose){
				for (;i < 16;i++,j++){
					vector[j]=this.$vec[this.$transposeTransform[i]];
				}
			}
			else{
				for (;i < 16;i++,j++){
					vector[j]=this.$vec[i];
				}
			}
		}

		__proto__.copyRowFrom=function(row,vector3D){
			if (row > 3)
				throw new Error("row number too bigger",0);
			var offset=row | 0;
			this.$vec[offset]=vector3D.x;
			this.$vec[offset+4]=vector3D.y;
			this.$vec[offset+8]=vector3D.z;
			this.$vec[offset+12]=vector3D.w;
		}

		__proto__.copyRowTo=function(row,vector3D){
			var offset=row | 0;
			vector3D.x=this.$vec[offset];
			vector3D.y=this.$vec[offset+4];
			vector3D.z=this.$vec[offset+8];
			vector3D.w=this.$vec[offset+12];
		}

		__proto__.copyToMatrix3D=function(dest){
			for (var i=0;i < 16;i++){
				dest.rawData[i]=this.$vec[i];
			}
		}

		__proto__.decompose=function(orientationStyle){
			(orientationStyle===void 0)&& (orientationStyle="eulerAngles");
			throw new Error("decompose");
			var t_mat=this.original;
			var t_vec3D=t_mat.decompose(orientationStyle);
			var t_resVec=new Array(t_vec3D.length);
			for (var i=0;i < t_resVec.length;i++){
				t_resVec[i].x=t_vec3D[i].x;
				t_resVec[i].y=t_vec3D[i].y;
				t_resVec[i].z=t_vec3D[i].z;
				t_resVec[i].w=t_vec3D[i].w;
			}
			return t_resVec;
		}

		__proto__.deltaTransformVector=function(v){
			var x=v.x,y=v.y,z=v.z;
			return new Vector3D(this.$vec[0] *x+this.$vec[4] *y+this.$vec[8] *z,this.$vec[1] *x+this.$vec[5] *y+this.$vec[9] *z,this.$vec[2] *x+this.$vec[6] *y+this.$vec[10] *z);
		}

		__proto__.identity=function(){
			this.$vec[0]=this.$vec[5]=this.$vec[10]=this.$vec[15]=1;
			this.$vec[1]=this.$vec[2]=this.$vec[3]=this.$vec[4]=this.$vec[6]=this.$vec[7]=this.$vec[8]=this.$vec[9]=this.$vec[11]=this.$vec[12]=this.$vec[13]=this.$vec[14]=0;
		}

		__proto__.interpolateTo=function(toMat,percent){
			throw new Error("NOT REAL FUNCTION!!!",0);
		}

		__proto__.invert=function(){
			var m=this.$vec;
			var m00=m[0],m01=m[4],m02=m[8],m03=m[12];
			var m10=m[1],m11=m[5],m12=m[9],m13=m[13];
			var m20=m[2],m21=m[6],m22=m[10],m23=m[14];
			var m30=m[3],m31=m[7],m32=m[11],m33=m[15];
			var v0=m20 *m31-m21 *m30;
			var v1=m20 *m32-m22 *m30;
			var v2=m20 *m33-m23 *m30;
			var v3=m21 *m32-m22 *m31;
			var v4=m21 *m33-m23 *m31;
			var v5=m22 *m33-m23 *m32;
			var t00=+(v5 *m11-v4 *m12+v3 *m13);
			var t10=-(v5 *m10-v2 *m12+v1 *m13);
			var t20=+(v4 *m10-v2 *m11+v0 *m13);
			var t30=-(v3 *m10-v1 *m11+v0 *m12);
			var invDet=1 / (t00 *m00+t10 *m01+t20 *m02+t30 *m03);
			var d00=t00 *invDet;
			var d10=t10 *invDet;
			var d20=t20 *invDet;
			var d30=t30 *invDet;
			var d01=-(v5 *m01-v4 *m02+v3 *m03)*invDet;
			var d11=+(v5 *m00-v2 *m02+v1 *m03)*invDet;
			var d21=-(v4 *m00-v2 *m01+v0 *m03)*invDet;
			var d31=+(v3 *m00-v1 *m01+v0 *m02)*invDet;
			v0=m10 *m31-m11 *m30;
			v1=m10 *m32-m12 *m30;
			v2=m10 *m33-m13 *m30;
			v3=m11 *m32-m12 *m31;
			v4=m11 *m33-m13 *m31;
			v5=m12 *m33-m13 *m32;
			var d02=+(v5 *m01-v4 *m02+v3 *m03)*invDet;
			var d12=-(v5 *m00-v2 *m02+v1 *m03)*invDet;
			var d22=+(v4 *m00-v2 *m01+v0 *m03)*invDet;
			var d32=-(v3 *m00-v1 *m01+v0 *m02)*invDet;
			v0=m21 *m10-m20 *m11;
			v1=m22 *m10-m20 *m12;
			v2=m23 *m10-m20 *m13;
			v3=m22 *m11-m21 *m12;
			v4=m23 *m11-m21 *m13;
			v5=m23 *m12-m22 *m13;
			var d03=-(v5 *m01-v4 *m02+v3 *m03)*invDet;
			var d13=+(v5 *m00-v2 *m02+v1 *m03)*invDet;
			var d23=-(v4 *m00-v2 *m01+v0 *m03)*invDet;
			var d33=+(v3 *m00-v1 *m01+v0 *m02)*invDet;
			var mat3D=new Matrix3D([d00,d01,d02,d03,d10,d11,d12,d13,d20,d21,d22,d23,d30,d31,d32,d33]);
			if (Math.abs(mat3D.determinant)< 0.000001)
				return false;
			else{
				for (var i=0;i < this.$vec.length;i++){
					this.$vec[i]=mat3D.rawData[i];
				}
				return true;
			}
		}

		__proto__.pointAt=function(pos,at,up){
			throw new Error("NOT REAL FUNCTION!!!",0);
		}

		__proto__.prepend=function(rhs){
			var ma=this.$vec,mb=rhs.rawData;
			var ma11=ma[0],ma12=ma[4],ma13=ma[8],ma14=ma[12];
			var ma21=ma[1],ma22=ma[5],ma23=ma[9],ma24=ma[13];
			var ma31=ma[2],ma32=ma[6],ma33=ma[10],ma34=ma[14];
			var ma41=ma[3],ma42=ma[7],ma43=ma[11],ma44=ma[15];
			var mb11=mb[0],mb12=mb[4],mb13=mb[8],mb14=mb[12];
			var mb21=mb[1],mb22=mb[5],mb23=mb[9],mb24=mb[13];
			var mb31=mb[2],mb32=mb[6],mb33=mb[10],mb34=mb[14];
			var mb41=mb[3],mb42=mb[7],mb43=mb[11],mb44=mb[15];
			this.$vec[0]=ma11 *mb11+ma12 *mb21+ma13 *mb31+ma14 *mb41;
			this.$vec[1]=ma21 *mb11+ma22 *mb21+ma23 *mb31+ma24 *mb41;
			this.$vec[2]=ma31 *mb11+ma32 *mb21+ma33 *mb31+ma34 *mb41;
			this.$vec[3]=ma41 *mb11+ma42 *mb21+ma43 *mb31+ma44 *mb41;
			this.$vec[4]=ma11 *mb12+ma12 *mb22+ma13 *mb32+ma14 *mb42;
			this.$vec[5]=ma21 *mb12+ma22 *mb22+ma23 *mb32+ma24 *mb42;
			this.$vec[6]=ma31 *mb12+ma32 *mb22+ma33 *mb32+ma34 *mb42;
			this.$vec[7]=ma41 *mb12+ma42 *mb22+ma43 *mb32+ma44 *mb42;
			this.$vec[8]=ma11 *mb13+ma12 *mb23+ma13 *mb33+ma14 *mb43;
			this.$vec[9]=ma21 *mb13+ma22 *mb23+ma23 *mb33+ma24 *mb43;
			this.$vec[10]=ma31 *mb13+ma32 *mb23+ma33 *mb33+ma34 *mb43;
			this.$vec[11]=ma41 *mb13+ma42 *mb23+ma43 *mb33+ma44 *mb43;
			this.$vec[12]=ma11 *mb14+ma12 *mb24+ma13 *mb34+ma14 *mb44;
			this.$vec[13]=ma21 *mb14+ma22 *mb24+ma23 *mb34+ma24 *mb44;
			this.$vec[14]=ma31 *mb14+ma32 *mb24+ma33 *mb34+ma34 *mb44;
			this.$vec[15]=ma41 *mb14+ma42 *mb24+ma43 *mb34+ma44 *mb44;
		}

		__proto__.prependRotation=function(degrees,axis,pivotPoint){
			this.prepend(this.getRotationMatrix(degrees / 180 *Math.PI,axis.x,axis.y,axis.z,pivotPoint ? pivotPoint.x :0,pivotPoint ? pivotPoint.y :0,pivotPoint ? pivotPoint.z :0));
		}

		__proto__.prependScale=function(xScale,yScale,zScale){
			this.$vec[0]*=xScale;
			this.$vec[1]*=xScale;
			this.$vec[2]*=xScale;
			this.$vec[3]*=xScale;
			this.$vec[4]*=yScale;
			this.$vec[5]*=yScale;
			this.$vec[6]*=yScale;
			this.$vec[7]*=yScale;
			this.$vec[8]*=zScale;
			this.$vec[9]*=zScale;
			this.$vec[10]*=zScale;
			this.$vec[11]*=zScale;
		}

		__proto__.prependTranslation=function(x,y,z){
			var m=this.$vec;
			var m11=m[0],m12=m[4],m13=m[8];
			var m21=m[1],m22=m[5],m23=m[9];
			var m31=m[2],m32=m[6],m33=m[10];
			var m41=m[3],m42=m[7],m43=m[11];
			m[12]+=m11 *x+m12 *y+m13 *z;
			m[13]+=m21 *x+m22 *y+m23 *z;
			m[14]+=m31 *x+m32 *y+m33 *z;
			m[15]+=m41 *x+m42 *y+m43 *z;
		}

		__proto__.recompose=function(components,orientationStyle){
			(orientationStyle===void 0)&& (orientationStyle="eulerAngles");
			throw new Error("NOT REAL FUNCTION!!!",0);
			return false;
		}

		__proto__.transformVector=function(v){
			var x=v.x,y=v.y,z=v.z;
			return new Vector3D(this.$vec[0] *x+this.$vec[4] *y+this.$vec[8] *z+this.$vec[12],this.$vec[1] *x+this.$vec[5] *y+this.$vec[9] *z+this.$vec[13],this.$vec[2] *x+this.$vec[6] *y+this.$vec[10] *z+this.$vec[14]);
		}

		__proto__.transformVectors=function(vin,vout){
			var m11=this.$vec[0],m12=this.$vec[4],m13=this.$vec[8],m14=this.$vec[12];
			var m21=this.$vec[1],m22=this.$vec[5],m23=this.$vec[9],m24=this.$vec[13];
			var m31=this.$vec[2],m32=this.$vec[6],m33=this.$vec[10],m34=this.$vec[14];
			var m41=this.$vec[3],m42=this.$vec[7],m43=this.$vec[11],m44=this.$vec[15];
			for (var i=0;i < vin.length-2;i+=3){
				var x=vin[i],y=vin[i+1],z=vin[i+2];
				vout[i]=m11 *x+m12 *y+m13 *z+m14;
				vout[i+1]=m21 *x+m22 *y+m23 *z+m24;
				vout[i+2]=m31 *x+m32 *y+m33 *z+m34;
			}
		}

		__proto__.transpose=function(){
			var tmp;
			tmp=this.$vec[1];
			this.$vec[1]=this.$vec[4];
			this.$vec[4]=tmp;
			tmp=this.$vec[2];
			this.$vec[2]=this.$vec[8];
			this.$vec[5]=tmp;
			tmp=this.$vec[3];
			this.$vec[3]=this.$vec[12];
			this.$vec[12]=tmp;
			tmp=this.$vec[6];
			this.$vec[6]=this.$vec[9];
			this.$vec[9]=tmp;
			tmp=this.$vec[7];
			this.$vec[7]=this.$vec[13];
			this.$vec[13]=tmp;
			tmp=this.$vec[11];
			this.$vec[11]=this.$vec[14];
			this.$vec[14]=tmp;
		}

		__proto__.getRotationMatrix=function(theta,u,v,w,a,b,c){
			var u2=u *u,v2=v *v,w2=w *w;
			var L2=u2+v2+w2,L=Math.sqrt(L2);
			u/=L;
			v/=L;
			w/=L;
			u2/=L2;
			v2/=L2;
			w2/=L2;
			var cos=Math.cos(theta),sin=Math.sin(theta);
			var vec=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ,1];
			vec[0]=u2+(v2+w2)*cos;
			vec[1]=u *v *(1-cos)+w *sin;
			vec[2]=u *w *(1-cos)-v *sin;
			vec[3]=0;
			vec[4]=u *v *(1-cos)-w *sin;
			vec[5]=v2+(u2+w2)*cos;
			vec[6]=v *w *(1-cos)+u *sin;
			vec[7]=0;
			vec[8]=u *w *(1-cos)+v *sin;
			vec[9]=v *w *(1-cos)-u *sin;
			vec[10]=w2+(u2+v2)*cos;
			vec[11]=0;
			vec[12]=(a *(v2+w2)-u *(b *v+c *w))*(1-cos)+(b *w-c *v)*sin;
			vec[13]=(b *(u2+w2)-v *(a *u+c *w))*(1-cos)+(c *u-a *w)*sin;
			vec[14]=(c *(u2+v2)-w *(a *u+b *v))*(1-cos)+(a *v-b *u)*sin;
			return new Matrix3D(vec);
		}

		DEFUNENUMPTY$(__proto__,'_$get_determinant',function(){
			var m11=this.$vec[0],m12=this.$vec[4],m13=this.$vec[8],m14=this.$vec[12];
			var m21=this.$vec[1],m22=this.$vec[5],m23=this.$vec[9],m24=this.$vec[13];
			var m31=this.$vec[2],m32=this.$vec[6],m33=this.$vec[10],m34=this.$vec[14];
			var m41=this.$vec[3],m42=this.$vec[7],m43=this.$vec[11],m44=this.$vec[15];
			return m11 *(m22 *(m33 *m44-m43 *m34)-m32 *(m23 *m44-m43 *m24)+m42 *(m23 *m34-m33 *m24))-m21 *(m12 *(m33 *m44-m43 *m34)-m32 *(m13 *m44-m43 *m14)+m42 *(m13 *m34-m33 *m14))+m31 *(m12 *(m23 *m44-m43 *m24)-m22 *(m13 *m44-m43 *m14)+m42 *(m13 *m24-m23 *m14))-m41 *(m12 *(m23 *m34-m33 *m24)-m22 *(m13 *m34-m33 *m14)+m32 *(m13 *m24-m23 *m14));
		});

		Object.defineProperty(__proto__,'determinant',{get:__proto__._$get_determinant,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_position',function(){
			return new Vector3D(this.$vec[12],this.$vec[13],this.$vec[14]);
		});

		DEFUNENUMPTY$(__proto__,'_$set_position',function(pos){
			this.$vec[12]=pos.x;
			this.$vec[13]=pos.y;
			this.$vec[14]=pos.z;
		});

		Object.defineProperty(__proto__,'position',{get:__proto__._$get_position,set:__proto__._$set_position,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rawData',function(){
			return this.$vec;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rawData',function(v){
			if (v.length !=this.$vec.length){
				throw new Error("Data Error");
			}
			for (var i=0;i < v.length;i++){
				this.$vec[i]=v[i];
			}
		});

		Object.defineProperty(__proto__,'rawData',{get:__proto__._$get_rawData,set:__proto__._$set_rawData,enumerable:false});
		Matrix3D.interpolate=function(thisMat,toMat,percent){
			throw new Error("NOT REAL FUNCTION!!!",0);
			return null;
		}

		return Matrix3D;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/geom/perspectiveprojection.as=======10199.999835
	var PerspectiveProjection=iflash.geom.PerspectiveProjection=(function(){
		function PerspectiveProjection(){}
		REGCLASS$(PerspectiveProjection,'iflash.geom.PerspectiveProjection',true,true);
		var __proto__=PerspectiveProjection.prototype;
		__proto__.toMatrix3D=function(){
			Log.unfinished("PerspectiveProjection","toMatrix3D");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_fieldOfView',function(){
			Log.unfinished("PerspectiveProjection","fieldOfView");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_fieldOfView',function(fieldOfViewAngleInDegrees){
			Log.unfinished("PerspectiveProjection","fieldOfView");
		});

		Object.defineProperty(__proto__,'fieldOfView',{get:__proto__._$get_fieldOfView,set:__proto__._$set_fieldOfView,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_focalLength',function(){
			Log.unfinished("PerspectiveProjection","focalLength");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_focalLength',function(value){
			Log.unfinished("PerspectiveProjection","focalLength");
		});

		Object.defineProperty(__proto__,'focalLength',{get:__proto__._$get_focalLength,set:__proto__._$set_focalLength,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_projectionCenter',function(){
			Log.unfinished("PerspectiveProjection","projectionCenter");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_projectionCenter',function(p){
			Log.unfinished("PerspectiveProjection","projectionCenter");
		});

		Object.defineProperty(__proto__,'projectionCenter',{get:__proto__._$get_projectionCenter,set:__proto__._$set_projectionCenter,enumerable:false});
		return PerspectiveProjection;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/geom/point.as=======10199.999834
	var Point=iflash.geom.Point=(function(){
		function Point(x,y){
			this.x=null;
			this.y=null;
			(x===void 0)&& (x=0);
			(y===void 0)&& (y=0);
			this.x=x*1;
			this.y=y*1;
		}

		REGCLASS$(Point,'iflash.geom.Point',true,false);
		var __proto__=Point.prototype;
		__proto__.add=function(v){
			var result=new Point();
			result.x=this.x+v.x;
			result.y=this.y+v.y;
			return result;
		}

		__proto__.clone=function(){
			var result=new Point();
			result.x=this.x;
			result.y=this.y;
			return result;
		}

		__proto__.copyFrom=function(sourcePoint){
			this.x=sourcePoint.x;
			this.y=sourcePoint.y;
		}

		__proto__.equals=function(toCompare){
			if (toCompare==null)
				return false;
			else{
				if (toCompare.x==this.x && toCompare.y==this.y)
					return true;
				return false;
			}
		}

		__proto__.normalize=function(thickness){
			var rate=thickness / this.length;
			this.x=rate *this.x;
			this.y=rate *this.y;
		}

		__proto__.offset=function(dx,dy){
			this.x+=dx;
			this.y+=dy;
		}

		__proto__.setTo=function(xa,ya){
			this.x=xa;
			this.y=ya;
			return this;
		}

		__proto__.subtract=function(v){
			var result=new Point();
			result.x=this.x-v.x;
			result.y=this.y-v.y;
			return result;
		}

		__proto__.identity=function(){
			this.x=this.y=0.0;
		}

		__proto__.toString=function(){
			return "(x="+this.x+", y="+this.y+")";
		}

		DEFUNENUMPTY$(__proto__,'_$get_length',function(){
			return Math.sqrt(Math.pow(this.x ,2)+Math.pow(this.y,2));
		});

		Object.defineProperty(__proto__,'length',{get:__proto__._$get_length,enumerable:false});
		Point.distance=function(pt1,pt2){
			return Math.sqrt(Math.pow((pt2.x-pt1.x),2)+Math.pow((pt2.y-pt1.y),2));
		}

		Point.interpolate=function(pt1,pt2,f){
			var result=new Point();
			result.x=(pt1.x+pt2.x)*f;
			result.y=(pt1.y+pt2.y)*f;
			return result;
		}

		Point.polar=function(len,angle){
			var result=new Point();
			result.x=len *Math.cos(angle);
			result.y=len *Math.sin(angle);
			return result;
		}

		REGSTATICATTR$(Point,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Point();}
		]);
		return Point;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/geom/rectangle.as=======10199.999833
	var Rectangle=iflash.geom.Rectangle=(function(){
		function Rectangle(x,y,width,height){
			this.height=null;
			this.width=null;
			this.x=null;
			this.y=null;
			(x===void 0)&& (x=0);
			(y===void 0)&& (y=0);
			(width===void 0)&& (width=0);
			(height===void 0)&& (height=0);
			this.x=Number(x);
			this.y=Number(y);
			this.width=Number(width);
			this.height=Number(height);
		}

		REGCLASS$(Rectangle,'iflash.geom.Rectangle',true,false);
		var __proto__=Rectangle.prototype;
		__proto__.clone=function(){
			return new Rectangle(this.x,this.y,this.width,this.height);
		}

		__proto__.contains=function(_x,_y){
			if(this.width<0&&this.height<0){
				return-_x>this.x &&-_x<(this.x-this.width)&&-_y>this.y &&-_y<(this.y-this.height);
			}
			if(this.width<0&&this.height>0){
				return-_x>this.x &&-_x<(this.x-this.width)&& _y>this.y && _y<(this.y+this.height);
			}
			if(this.width>0&&this.height<0){
				return _x>this.x && _x<(this.width+this.x)&&-_y>this.y &&-_y<(this.y-this.height);
			}
			return _x>this.x && _x<(this.width+this.x)&& _y>this.y && _y<(this.y+this.height);
		}

		__proto__.containsPoint=function(point){
			return this.contains(point.x,point.y);
		}

		__proto__.containsRect=function(rect){
			return this.contains(rect.x,rect.y)&& this.contains(rect.x+rect.width,rect.y+rect.height);
		}

		__proto__.copyFrom=function(sourceRect){
			this.x=sourceRect.x;
			this.y=sourceRect.y;
			this.width=sourceRect.width;
			this.height=sourceRect.height;
		}

		__proto__.equals=function(toCompare){
			return this.x==toCompare.x && this.y==toCompare.y && this.width==toCompare.width && this.height==toCompare.height;
		}

		__proto__.inflate=function(dx,dy){
			this.x+=dx;
			this.y+=dy;
			this.width+=dx;
			this.height+=dy;
		}

		__proto__.inflatePoint=function(point){
			this.inflate(point.x,point.y);
		}

		__proto__.intersection=function(toIntersect){
			var minr=Math.min(this.x+this.width,toIntersect.right);
			var minb=Math.min(this.y+this.height,toIntersect.bottom);
			var maxx=Math.max(this.x,toIntersect.x);
			var maxy=Math.max(this.y,toIntersect.y);
			return new Rectangle(maxx,maxy,minr-maxx,minb-maxy);
		}

		__proto__.intersectionThis=function(toIntersect){
			var minr=Math.min(this.x+this.width,toIntersect.right);
			var minb=Math.min(this.y+this.height,toIntersect.bottom);
			this.x=Math.max(this.x,toIntersect.x);
			this.y=Math.max(this.y,toIntersect.y);
			this.width=minr-this.x;
			this.height=minb-this.y;
		}

		__proto__.intersects=function(toIntersect){
			var minr=Math.min(this.x+this.width,toIntersect.right);
			var minb=Math.min(this.y+this.height,toIntersect.bottom);
			var maxx=Math.max(this.x,toIntersect.x);
			var maxy=Math.max(this.y,toIntersect.y);
			return minr > maxx && minb > maxy;
		}

		__proto__.isEmpty=function(){
			return this.width<1 || this.height<1;
		}

		__proto__.offset=function(dx,dy){
			this.x+=dx;
			this.y+=dy;
		}

		__proto__.offsetPoint=function(point){
			this.x+=point.x;
			this.y+=point.y;
		}

		__proto__.setEmpty=function(){
			this.x=this.y=this.width=this.height=0;
		}

		__proto__.setTo=function(xa,ya,widtha,heighta){
			this.x=xa;
			this.y=ya;
			this.width=widtha;
			this.height=heighta;
			return this;
		}

		__proto__.toString=function(){
			return "(x="+this.x+", y="+this.y+", w="+this.width+", h="+this.height+")";
		}

		__proto__.union=function(toUnion){
			var maxr=Math.max(this.x+this.width,toUnion.right);
			var maxb=Math.max(this.y+this.height,toUnion.bottom);
			var minx=Math.min(this.x,toUnion.x);
			var miny=Math.min(this.y,toUnion.y);
			return this.setTo(minx,miny,maxr-minx,maxb-miny);
		}

		DEFUNENUMPTY$(__proto__,'_$get_bottom',function(){
			return this.height+this.y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bottom',function(value){
			this.height=value-this.y;
		});

		Object.defineProperty(__proto__,'bottom',{get:__proto__._$get_bottom,set:__proto__._$set_bottom,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_top',function(){
			return this.y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_top',function(value){
			this.height-=value-this.y;
			this.y=value;
		});

		Object.defineProperty(__proto__,'top',{get:__proto__._$get_top,set:__proto__._$set_top,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bottomRight',function(){
			return new Point(this.x+this.width,this.height+this.y);
		});

		DEFUNENUMPTY$(__proto__,'_$set_bottomRight',function(value){
			this.width=value.x-this.x;
			this.height=value.y-this.y;
		});

		Object.defineProperty(__proto__,'bottomRight',{get:__proto__._$get_bottomRight,set:__proto__._$set_bottomRight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_left',function(){
			return this.x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_left',function(value){
			this.width-=value-this.x;
			this.x=value;
		});

		Object.defineProperty(__proto__,'left',{get:__proto__._$get_left,set:__proto__._$set_left,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_right',function(){
			return this.x+this.width;
		});

		DEFUNENUMPTY$(__proto__,'_$set_right',function(value){
			this.width=value-this.x;
		});

		Object.defineProperty(__proto__,'right',{get:__proto__._$get_right,set:__proto__._$set_right,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_size',function(){
			return new Point(this.width,this.height);
		});

		DEFUNENUMPTY$(__proto__,'_$set_size',function(value){
			this.width=value.x;
			this.height=value.y;
		});

		Object.defineProperty(__proto__,'size',{get:__proto__._$get_size,set:__proto__._$set_size,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_topLeft',function(){
			return new Point(this.x,this.y);
		});

		DEFUNENUMPTY$(__proto__,'_$set_topLeft',function(value){
			this.y=value.x;
			this.x=value.y;
		});

		Object.defineProperty(__proto__,'topLeft',{get:__proto__._$get_topLeft,set:__proto__._$set_topLeft,enumerable:false});
		REGSTATICATTR$(Rectangle,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Rectangle;}
		]);
		return Rectangle;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/geom/transform.as=======10199.999832
	var Transform=iflash.geom.Transform=(function(){
		function Transform(){
			this._colorTransform_=null;
			this._rotate_=0;
			this.__node__=null;
			this._scale_=Transform.__SCALE__;
			this._skew_=Point.__DEFAULT__;
			this._matrix_=new Matrix();
		}

		REGCLASS$(Transform,'iflash.geom.Transform',true,true);
		var __proto__=Transform.prototype;
		__proto__._setNode_=function(d){
			this.__node__=d;
			this._colorTransform_=ColorTransform._DEFAULT_;
			Laya.RENDERBYCANVAS && d && DrawTransform.insertUnit(d);
			return this;
		}

		__proto__._setRotation_=function(value){
			if (value==this._rotate_)
				return;
			this._rotate_=value;
			this.__node__._type_ |=/*iflash.display.DisplayObject.TYPE_MATRIX_CHG*/0x10000;
			this.__node__._modle_.rotate2d(value);
		}

		__proto__._setScaleX_=function(value){
			if (value==this._scale_.x)
				return;
			(this._scale_ !=Transform.__SCALE__)?(this._scale_.x=value):(this._scale_=new Point(value,1));
			this.__node__._type_ |=/*iflash.display.DisplayObject.TYPE_MATRIX_CHG*/0x10000;
			this.__node__._modle_.scale2dEx(this._scale_.x,this._scale_.y);
		}

		__proto__._setScaleY_=function(value){
			if (value==this._scale_.y)return;
			(this._scale_ !=Transform.__SCALE__)?(this._scale_.y=value):(this._scale_=new Point(1,value));
			this.__node__._type_ |=/*iflash.display.DisplayObject.TYPE_MATRIX_CHG*/0x10000;
			this.__node__._modle_.scale2dEx(this._scale_.x,this._scale_.y);
		}

		__proto__._setSkewX_=function(value){
			if (value==this._skew_.x)
				return;
			(this._skew_ !=Point.__DEFAULT__)?(this._skew_.x=value):(this._skew_=new Point(value,0));
			this.__node__._type_ |=/*iflash.display.DisplayObject.TYPE_MATRIX_CHG*/0x10000;
		}

		__proto__._setSkewY_=function(value){
			if (value==this._skew_.y)
				return;
			(this._skew_ !=Point.__DEFAULT__)?(this._skew_.y=value):(this._skew_=new Point(0,value));
			this.__node__._type_ |=/*iflash.display.DisplayObject.TYPE_MATRIX_CHG*/0x10000;
		}

		DEFUNENUMPTY$(__proto__,'_$get_matrix',function(){
			if ((this.__node__._type_ & /*iflash.display.DisplayObject.TYPE_MATRIX_CHG*/0x10000)==0)return this._matrix_;
			this.__node__._type_ &=~ /*iflash.display.DisplayObject.TYPE_MATRIX_CHG*/0x10000;
			if (this._skew_.x==0.0 && this._skew_.y==0.0){
				if (this._rotate_==0.0){
					this._matrix_.setTo(this._scale_.x,0.0,0.0,this._scale_.y,this.__node__._left_,this.__node__._top_);
				}
				else{
					var cos=Math.cos(this._rotate_*Transform.ATOR);
					var sin=Math.sin(this._rotate_*Transform.ATOR);
					this._matrix_.a=this._scale_.x *cos;
					this._matrix_.b=this._scale_.x *sin;
					this._matrix_.c=this._scale_.y *-sin;
					this._matrix_.d=this._scale_.y *cos;
					this._matrix_.tx=this.__node__._left_;
					this._matrix_.ty=this.__node__._top_;
				}
			}
			else{
				this._matrix_.identity();
				this._matrix_.a=this._scale_.x;
				this._matrix_.d=this._scale_.y;
				Transform.__skew__(this._matrix_,this._skew_.x,this._skew_.y);
				this._matrix_.translate(this.__node__._left_,this.__node__._top_);
			}
			return this._matrix_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_matrix',function(value){
			if(this._matrix_.IsEqual(value))return;
			this._matrix_.copy(value);
			this.__node__.x=this._matrix_.tx;
			this.__node__.y=this._matrix_.ty;
			this._skew_=(this._skew_!=Point.__DEFAULT__)?this._skew_:new Point();
			this._skew_.x=Math.atan(-this._matrix_.c / this._matrix_.d);
			this._skew_.y=Math.atan(this._matrix_.b / this._matrix_.a);
			if (this._skew_.x !=this._skew_.x)this._skew_.x=0.0;
			if (this._skew_.y !=this._skew_.y)this._skew_.y=0.0;
			this._scale_=(this._scale_!=Transform.__SCALE__)?this._scale_:new Point();
			this._scale_.y=(this._skew_.x >-Transform.PI_4 && this._skew_.x < Transform.PI_4)? this._matrix_.d / Math.cos(this._skew_.x)
			:-this._matrix_.c / Math.sin(this._skew_.y);
			this._scale_.x=(this._skew_.y >-Transform.PI_4 && this._skew_.y < Transform.PI_4)? this._matrix_.a / Math.cos(this._skew_.y)
			:this._matrix_.b / Math.sin(this._skew_.y);
			if ((this._skew_.x-0.0001 < this._skew_.y)&& (this._skew_.x+0.0001 > this._skew_.y)){
				this._rotate_=this._skew_.x*Transform.RTOA;
				this._skew_.x=this._skew_.y=0.0;
			}
			else this._rotate_=0.0;
			this.__node__._modle_.matrix(value.a,value.b,value.c,value.d,0,0);
		});

		Object.defineProperty(__proto__,'matrix',{get:__proto__._$get_matrix,set:__proto__._$set_matrix,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_colorTransform',function(){
			return this._colorTransform_==null?(this._colorTransform_=new ColorTransform()):this._colorTransform_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_colorTransform',function(value){
			this._colorTransform_=value;
		});

		Object.defineProperty(__proto__,'colorTransform',{get:__proto__._$get_colorTransform,set:__proto__._$set_colorTransform,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_concatenatedMatrix',function(){
			return null;
		});

		Object.defineProperty(__proto__,'concatenatedMatrix',{get:__proto__._$get_concatenatedMatrix,enumerable:false});
		Transform.__skew__=function(matrix,skewX,skewY){
			var sinX=Math.sin(skewX);
			var cosX=Math.cos(skewX);
			var sinY=Math.sin(skewY);
			var cosY=Math.cos(skewY);
			matrix.setTransform(
			matrix.a *cosY-matrix.b *sinX,
			matrix.a *sinY+matrix.b *cosX,
			matrix.c *cosY-matrix.d *sinX,
			matrix.c *sinY+matrix.d *cosX,
			matrix.tx *cosY-matrix.ty *sinX,
			matrix.tx *sinY+matrix.ty *cosX);
			matrix;
		}

		REGSTATICATTR$(Transform,
		['__SCALE__',function(){return this.__SCALE__=new Point(1,1);
			},'__DEFAULT__',function(){return this.__DEFAULT__=new Transform();
			},'PI2',function(){return this.PI2=(Math.PI*2);
			},'PI_4',function(){return this.PI_4=(Math.PI/4);
			},'RTOA',function(){return this.RTOA=(180/Math.PI);
		},'ATOR',function(){return this.ATOR=(Math.PI/180);}

		]);
		return Transform;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/geom/vector3d.as=======10199.999831
	var Vector3D=iflash.geom.Vector3D=(function(){
		function Vector3D(x,y,z,w){
			this.$x=0;
			this.$y=0;
			this.$z=0;
			this.$w=0;
			(x===void 0)&& (x=0);
			(y===void 0)&& (y=0);
			(z===void 0)&& (z=0);
			(w===void 0)&& (w=0);
			this.$x=x;
			this.$y=y;
			this.$z=z;
			this.$w=w;
		}

		REGCLASS$(Vector3D,'iflash.geom.Vector3D',true,false);
		var __proto__=Vector3D.prototype;
		__proto__.add=function(a){
			return new Vector3D(this.$x+a.x,this.$y+a.y,this.$z+a.z);
		}

		__proto__.clone=function(){
			return new Vector3D(this.$x,this.$y,this.$z,this.$w);
		}

		__proto__.copyFrom=function(sourceVector3D){
			this.$x=sourceVector3D.x;
			this.$y=sourceVector3D.y;
			this.$z=sourceVector3D.z;
		}

		__proto__.crossProduct=function(a){
			return new Vector3D(this.$y *a.z-this.$z *a.y,this.$z *a.x-this.$x *a.z,this.$x *a.y-this.$y *a.x,1.0);
		}

		__proto__.decrementBy=function(a){
			this.$x-=a.x;
			this.$y-=a.y;
			this.$z-=a.z;
		}

		__proto__.dotProduct=function(a){
			return (this.$x *a.x+this.$y *a.y+this.$z *a.z);
		}

		__proto__.equals=function(toCompare,allFour){
			(allFour===void 0)&& (allFour=false);
			return (this.$x==toCompare.x)&& (this.$y==toCompare.y)&& (this.$z==toCompare.z)&& (!allFour || (this.$w==toCompare.w));
		}

		__proto__.incrementBy=function(a){
			this.$x+=a.x;
			this.$y+=a.y;
			this.$z+=a.z;
		}

		__proto__.nearEquals=function(toCompare,tolerance,allFour){
			(allFour===void 0)&& (allFour=false);
			return (Math.abs(this.$x-toCompare.x)< tolerance)&& (Math.abs(this.$y-toCompare.y)< tolerance)&& (Math.abs(this.$z-toCompare.z)< tolerance)&& (!allFour || (Math.abs(this.$w-toCompare.w)< tolerance));
		}

		__proto__.negate=function(){
			this.$x=-this.$x;
			this.$y=-this.$y;
			this.$z=-this.$z;
		}

		__proto__.normalize=function(){
			var length=length;
			if (length !==0){
				this.$x/=length;
				this.$y/=length;
				this.$z/=length;
			}
			else{
				this.$x=this.$y=this.$z=0;
			}
			return length;
		}

		__proto__.project=function(){
			this.$x/=this.$w;
			this.$y/=this.$w;
			this.$z/=this.$w;
		}

		__proto__.scaleBy=function(s){
			this.$x*=s;
			this.$y*=s;
			this.$z*=s;
		}

		__proto__.setTo=function(xa,ya,za){
			this.$x=xa;
			this.$y=ya;
			this.$z=za;
		}

		__proto__.subtract=function(a){
			return new Vector3D(this.$x-a.x,this.$y-a.y,this.$z-a.z);
		}

		__proto__.toString=function(){
			return "Vector3D("+this.$x+", "+this.$y+", "+this.$z+")";
		}

		DEFUNENUMPTY$(__proto__,'_$get_x',function(){
			return this.$x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_x',function(val){
			this.$x=val;
		});

		Object.defineProperty(__proto__,'x',{get:__proto__._$get_x,set:__proto__._$set_x,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_y',function(){
			return this.$y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_y',function(val){
			this.$y=val;
		});

		Object.defineProperty(__proto__,'y',{get:__proto__._$get_y,set:__proto__._$set_y,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_z',function(){
			return this.$z;
		});

		DEFUNENUMPTY$(__proto__,'_$set_z',function(val){
			this.$z=val;
		});

		Object.defineProperty(__proto__,'z',{get:__proto__._$get_z,set:__proto__._$set_z,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_w',function(){
			return this.$w;
		});

		DEFUNENUMPTY$(__proto__,'_$set_w',function(val){
			this.$w=val;
		});

		Object.defineProperty(__proto__,'w',{get:__proto__._$get_w,set:__proto__._$set_w,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_length',function(){
			return Math.sqrt(this.lengthSquared);
		});

		Object.defineProperty(__proto__,'length',{get:__proto__._$get_length,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_lengthSquared',function(){
			return (this.$x *this.$x+this.$y *this.$y+this.$z *this.$z);
		});

		Object.defineProperty(__proto__,'lengthSquared',{get:__proto__._$get_lengthSquared,enumerable:false});
		Vector3D.angleBetween=function(a,b){
			return Math.acos(a.dotProduct(b)/ (a.length *b.length));
		}

		Vector3D.distance=function(pt1,pt2){
			return pt1.subtract(pt2).length;
		}

		REGSTATICATTR$(Vector3D,
		['X_AXIS',function(){return this.X_AXIS=new Vector3D(1,0,0)
			},'Y_AXIS',function(){return this.Y_AXIS=new Vector3D(0,1,0)
		},'Z_AXIS',function(){return this.Z_AXIS=new Vector3D(0,0,1)}

		]);
		return Vector3D;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/automation/easing.as=======10199.999830
	var Easing=iflash.laya.automation.Easing=(function(){
		function Easing(){
			this.param=null;
			this.fn=null;
		}

		REGCLASS$(Easing,'iflash.laya.automation.Easing',true,true);
		Easing.linear=function(time,intepretorParam){
			return time;
		}

		Easing.ease_in=function(time,intepretorParam){
			return Math.pow(time,intepretorParam==0?2:intepretorParam);
		}

		Easing.ease_out=function(time,intepretorParam){
			return Math.pow(time,1.0/(intepretorParam==0?0.5:intepretorParam));
		}

		Easing.ease_in_out=function(time,intepretorParam){
			if (intepretorParam==0)intepretorParam=2;
			var newTime=time *2.0;
			if (newTime < 1.0){
				return 0.5 *Math.pow(newTime,intepretorParam);
			}
			else{
				return 1.0-0.5 *Math.pow(2.0-newTime,intepretorParam);
			}
		}

		Easing.ease_exp_in=function(time,intepretorParam){
			return (time==0.0?0.0:Math.pow(2.0,10.0 *(time / 1.0-1.0))-1.0 *0.001);
		}

		Easing.ease_exp_out=function(time,intepretorParam){
			return (time==1.0?1.0:(1.0-Math.pow(2.0,-10.0 *time/1.0)));
		}

		Easing.ease_exp_in_out=function(time,intepretorParam){
			var newTime=time *2.0;
			if (newTime < 1.0){
				return 0.5 *Math.pow(2.0,10.0 *(newTime-1.0));
			}
			else{
				return 0.5 *(2.0-Math.pow(2.0,-10.0 *(newTime-1.0)));
			}
		}

		Easing.ease_sin_in=function(time,intepretorParam){
			return 1.0-1.0 *Math.cos(time *Math.PI *2.0);
		}

		Easing.ease_sin_out=function(time,intepretorParam){
			return Math.sin(time *Math.PI *2.0);
		}

		Easing.ease_sin_in_out=function(time,intepretorParam){
			return-0.5 *(Math.cos(Math.PI *time)-1.0);
		}

		Easing.ease_elastic_in=function(time,intepretorParam){
			var newT=0.0;
			if (time==0.0 || time==1.0){
				return time;
			}
			else{
				if (intepretorParam==0)intepretorParam=0.5;
				var s=intepretorParam / 4.0;
				newT=time-1.0;
				return-Math.pow(2.0,10.0 *newT)*Math.sin((newT-s)*Math.PI*2.0 / intepretorParam);
			}
		}

		Easing.ease_elastic_out=function(time,intepretorParam){
			var newT=0.0;
			if (time==0.0 || time==1.0){
				return time;
			}
			else{
				if (intepretorParam==0)intepretorParam=0.5;
				var s=intepretorParam / 4.0;
				return Math.pow(2.0,-10.0 *time)*Math.sin((time-s)*Math.PI*2 / intepretorParam)+1.0;
			}
		}

		Easing.ease_elastic_in_out=function(time,intepretorParam){
			if (time==0.0 || time==1.0){
				return time;
			}
			else{
				if (intepretorParam==0)intepretorParam=0.5;
				var period=intepretorParam;
				var newT=time *2.0;
				if (period==0.0){
					period=0.3 *1.5;
				};
				var s=period / 4.0;
				newT=newT-1.0;
				if (newT < 0.0){
					return-0.5 *Math.pow(2.0,10.0 *newT)*Math.sin((newT-s)*Math.PI*2.0 / period);
				}
				else{
					return Math.pow(2.0,-10.0 *newT)*Math.sin((newT-s)*Math.PI*2.0 / period)*0.5+1.0;
				}
			}
		}

		Easing.bounceTime=function(time){
			if (time < 1.0 / 2.75){
				return 7.5625 *time *time;
			}
			else if (time < 2.0 / 2.75){
				time-=1.5 / 2.75;
				return 7.5625 *time *time+0.75;
			}
			else if(time < 2.5 / 2.75){
				time-=2.25 / 2.75;
				return 7.5625 *time *time+0.9375;
			}
			time-=2.625 / 2.75;
			return 7.5625 *time *time+0.984375;
		}

		Easing.ease_bounce_in=function(time,intepretorParam){
			return (1.0-Easing.bounceTime(1.0-time));
		}

		Easing.ease_bounce_out=function(time,intepretorParam){
			return Easing.bounceTime(time);
		}

		Easing.ease_bounce_in_out=function(time,intepretorParam){
			if (time < 0.5){
				return (1.0-Easing.bounceTime(1.0-time *2.0))*0.5;
			}
			else{
				return Easing.bounceTime(time *2.0-1.0)*0.5+0.5;
			}
		}

		Easing.ease_back_in=function(time,intepretorParam){
			var overshoot=1.70158;
			return time *time *((overshoot+1.0)*time-overshoot);
		}

		Easing.ease_back_out=function(time,intepretorParam){
			var overshoot=1.70158;
			var newT=time-1.0;
			return newT *newT *((overshoot+1.0)*newT+overshoot)+1.0;
		}

		Easing.ease_back_in_out=function(time,intepretorParam){
			var overshoot=1.70158 *1.525;
			var newT=time *2.0;
			if (newT < 1.0){
				return (newT *newT *((overshoot+1.0)*newT-overshoot))/ 2.0;
			}
			else{
				newT=newT-2;
				return (newT *newT *((overshoot+1.0)*newT+overshoot))/ 2.0+1.0;
			}
		}

		Easing._TMP_=null;;
		REGSTATICATTR$(Easing,
		['__fnsmap__',function(){return this.__fnsmap__={
				"linear":Easing.linear,
				"ease-in":Easing.ease_in,
				"ease-out":Easing.ease_out,
				"ease-in-out":Easing.ease_in_out,
				"ease-exp-in":Easing.ease_exp_in,
				"ease-exp-out":Easing.ease_exp_out,
				"ease-exp-in-out":Easing.ease_exp_in_out,
				"ease-sin-in":Easing.ease_sin_in,
				"ease-sin-out":Easing.ease_sin_out,
				"ease-sin-in-out":Easing.ease_sin_in_out,
				"ease-elastic-in":Easing.ease_elastic_in,
				"ease-elastic-out":Easing.ease_elastic_out,
				"ease-elastic-in-out":Easing.ease_elastic_in_out,
				"ease-bounce-in":Easing.ease_bounce_in,
				"ease-bounce-out":Easing.ease_bounce_out,
				"ease-bounce-in-out":Easing.ease_bounce_in_out,
				"ease-back-in":Easing.ease_back_in,
				"ease-back-out":Easing.ease_back_out,
				"ease-back-in-out":Easing.ease_back_in_out
		};}

		]);
		return Easing;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/automation/tween.as=======10199.999829
	var Tween=iflash.laya.automation.Tween=(function(){
		function Tween(target,newProps,params){
			this.timectrl=null;
			this.target=null;
			this.time=null;
			this.delay=null;
			this.interval=null;
			this.paused=false;
			this.loop=false;
			this.reverse=false;
			this.next=null;
			this.ease=null;
			this.intepretorParam=null;
			this.count=null;
			this.deleted=false;
			this.onStart=null;
			this.onUpdate=null;
			this.onComplete=null;
			this._deltaProps=null;
			this._reverseFlag=null;
			this._frameTotal=null;
			this._frameCount=null;
			this._newProps=null;
			this._oldProps=null;
			this._startTime=null;
			this._lastTime=null;
			this._pausedTime=null;
			this._pausedStartTime=null;
			this._listProps=null;
			this._precents=null;
			this._dpre=1;
			this._index=1;
			this._plength=null;
			this.target=target;
			this.time=0;
			this.delay=0;
			this.paused=false;
			this.loop=false;
			this.reverse=false;
			this.interval=0;
			this.ease=Easing.linear;
			this.intepretorParam=0;
			this.next=null;
			this.timectrl=target._tmctr_;
			this.onStart=null;
			this.onUpdate=null;
			this.onComplete=null;
			this.count=1;
			this._oldProps={};
			this._newProps={};
			this._deltaProps={};
			this._startTime=0;
			this._lastTime=0;
			this._pausedTime=0;
			this._pausedStartTime=0;
			this._reverseFlag=1;
			this._frameTotal=0;
			this._frameCount=0;
			var i,oldVal,newVal;
			for (i in newProps){
				oldVal=target.getAttribute(i);
				newVal=newProps[i]*1;
				if (oldVal !=null){
					if ((typeof oldVal=='number')&& (typeof newVal=='number')){
						this._oldProps[i]=oldVal;
						this._newProps[i]=newVal;
						this._deltaProps[i]=newVal-oldVal;
					}
				}
			}
			for (i in params){
				this[i]=params[i];
			}
			this._precents=[];
			this._listProps=[];
		}

		REGCLASS$(Tween,'iflash.laya.automation.Tween',true,true);
		var __proto__=Tween.prototype;
		__proto__.setProps=function(oldProps,newProps){
			for (var i in oldProps){
				this.target.setAttribute(i,this._oldProps[i]=oldProps[i]*1);
			}
			for (var j in newProps){
				this._newProps[j]=newProps[j]*1;
				this._deltaProps[j]=newProps[j]-this.target[j];
			}
		}

		__proto__._init=function(){
			this._startTime=iflash.utils.getTimer()+this.delay;
			this._pausedTime=0;
			if (this.interval > 0)this._frameTotal=Math.round(this.time / this.interval);
			if(this.timectrl){
				this.timectrl.addFrameTimer(BIND$(this,this._update),this.target);this.eval(0);
			}
			else
			trace("请设置target");
		}

		__proto__._percentinit=function(){
			this._plength=this._precents.length;
			if (this._precents !=null &&this._plength > 1){
				this._index=this._precents.length-1;
				this._dpre=this._precents[1]-this._precents[0];
				this.setProps(this._listProps[0],this._listProps[1]);
			}
		}

		__proto__.start=function(){
			this.deleted=false;
			this._percentinit();
			this._init();
			this.paused=false;
		}

		__proto__.stop=function(){
			this.deleted=true;
		}

		__proto__.pause=function(){
			this.paused=true;
			this._pausedStartTime=iflash.utils.getTimer();
		}

		__proto__.resume=function(){
			this.paused=false;
			this._pausedTime+=iflash.utils.getTimer()-this._pausedStartTime;
		}

		__proto__.addPercent=function(percent,params){
			if (percent >=0 && percent <=100){
				this._precents.push(percent/100);
				this._listProps.push(params);
			}
		}

		__proto__.addKeyframes=function(name){
			var temp=Laya.document.styleSheets[name];
			if(temp!=null&&temp.length>0){
				for(var i=0;i<temp.length;i++){
					this.addPercent(temp[i]["percent"],temp[i]["value"]);
				}
			}
		}

		__proto__._update=function(tm,m,obj){
			if (this.paused)return true;
			if(this.deleted)return false;
			var now=iflash.utils.getTimer();
			var elapsed=now-this._startTime-this._pausedTime;
			if (elapsed < 0)return true;
			if (this._lastTime==0 && this.onStart !=null)this.onStart(this);
			this._lastTime=now;
			var ratio=this._frameTotal > 0 ? (++this._frameCount / this._frameTotal):(elapsed / (this.time*this._dpre));
			if (ratio > 1)ratio=1;
			var value=this.ease(ratio,this.intepretorParam);
			for (var p in this._oldProps){
				this.target.setAttribute(p,this._oldProps[p]+this._deltaProps[p] *this._reverseFlag *value);
			}
			if (this.onUpdate !=null)this.onUpdate(this,value);
			if (ratio >=1){
				if (this._index > 1){
					this._index--;
					this._dpre=this._precents[this._plength-this._index]-this._precents[this._plength-this._index-1];
					this.eval(this._plength-this._index-1);
					this.setProps(this._newProps,this._listProps[this._plength-this._index]);
					this._startTime=iflash.utils.getTimer();
					this._frameCount=0;
					return true;
				}
				else if (this.reverse){
					var tmp=this._oldProps;
					this._oldProps=this._newProps;
					this._newProps=tmp;
					this._startTime=iflash.utils.getTimer();
					this._frameCount=0;
					this._reverseFlag *=-1;
					if (!this.loop)this.reverse=false;
				}
				else if (this.loop)this.restart();
				else{
					var next=this.next;
					var nextTween;
					if (next !=null){
						if ((next instanceof iflash.laya.automation.Tween )){
							nextTween=next;
							next=null;
						}
						else{
							nextTween=next.shift();
						}
						if (nextTween !=null){
							nextTween.next=next;
							nextTween.start();
						}
						return false;
					}
				}
				if(this._index<=2){
					this.count--;
					this.eval(this._listProps.length-1);
					if(this.count>0)this.restart();
					else{
						this.onComplete&&this.onComplete(this);
						return false;
					}
				}
				if (this.onComplete !=null&&this._index<=2)
					this.onComplete(this);
			}
			return true;
		}

		__proto__.eval=function(i){
			this._listProps[i]&&this._listProps[i]["script"] && Browser.eval(this._listProps[i]["script"]);
		}

		__proto__.restart=function(){
			for (var i in this._oldProps){
				this.target.setAttribute(i,this._oldProps[i]);
			}
			this._percentinit();
			this._startTime=iflash.utils.getTimer();
			this._frameCount=0;
		}

		Tween.to=function(target,toProps,params){
			var tween=new Tween(target,toProps,params);
			tween._init();
			return tween;
		}

		Tween.from=function(target,fromProps,params){
			var tween=new Tween(target,fromProps,params);
			var tmp=tween._oldProps;
			tween._oldProps=tween._newProps;
			tween._newProps=tmp;
			tween._reverseFlag=-1;
			tween._init();
			return tween;
		}

		Tween._tweens=[];
		return Tween;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/background.as=======10199.999828
	var Background=iflash.laya.css.Background=(function(){
		function Background(style){
			this.color=null;
			this.bgImg=null;
			this.nRepeat=0;
			this.pos=null;
			this.nRepeat=0;
			this.pos=Point.__DEFAULT__;
			Laya.RENDERBYCANVAS && DrawBackground1.insertUnit(style.node);
		}

		REGCLASS$(Background,'iflash.laya.css.Background',true,true);
		var __proto__=Background.prototype;
		__proto__.setColor=function(rgb){
			if (!this.color)this.color=new Color(rgb);
			else this.color.setColor(rgb);
		}

		__proto__.setBgImg=function(element,url,_repeat){
			this.bgImg=null;
			if (url=='none'){
				return;
			}
			this.nRepeat=0;
			switch(_repeat){
				case null:this.nRepeat=11;break ;
				case 'repeat':this.nRepeat=11;break
				case "no-repeat":this.nRepeat=0;break
				default :
					if (_repeat.indexOf('repeat-x')>=0)this.nRepeat=1;
					if (_repeat.indexOf('repeat-y')>=0)this.nRepeat+=10;
				};
			var _nRepeat=this.nRepeat;
			var withimg=Laya.document.getElementById(url);
			if (withimg !=null && ((withimg instanceof iflash.laya.dom.HTMLImageElement ))){
				this.bgImg=(withimg).cloneImage();
				element._modle_.bgimg(this.bgImg,_nRepeat);
				return;
			}
			this.bgImg=Browser.document.createElement('image');
			this.bgImg.onload=iflash.method.bind(this,function(){
				element._modle_.bgimg(this.bgImg,_nRepeat);
			});
			this.bgImg.src=url;
		}

		__proto__.setUnnow=function(str){
			Log.unfinished("Background","setUnnow")
		}

		DEFUNENUMPTY$(__proto__,'_$get_repeat',function(){
			switch(this.nRepeat){
				case 11:return "repeat";
				case 10:return "repeat-x";
				case 01:return "repeat-y";
				}
			return "no-repeat";
		});

		Object.defineProperty(__proto__,'repeat',{get:__proto__._$get_repeat,enumerable:false});
		return Background;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/border.as=======10199.999827
	var Border=iflash.laya.css.Border=(function(){
		function Border(style){
			this.color=null;
			this.size=0;
			this.style=null;
			this.size=0;
			DrawBorder.insertUnit(style.node);
		}

		REGCLASS$(Border,'iflash.laya.css.Border',true,false);
		var __proto__=Border.prototype;
		__proto__.setBorder=function(str){
			if (str=='none'){
				this.size=0;
				return;
			};
			var strs=str.split(' ');
			if (strs.length==1){
				this.size=1;
				this.style="solid";
				this.color=new Color(strs[0]);
				return;
			}
			else if (strs.length==3){
				this.size=isNaN(LAYABOX.parseInt(strs[0]))?0:LAYABOX.parseInt(strs[0]);
				this.style=strs[1];
				this.color=new Color(strs[2]);
				return;
			}
			else{
				trace("border参数设置错误");
			}
		}

		__proto__.toString=function(){
			if (this.size==0 || this.color==null)return "none";
			return this.color.toString();
		}

		return Border;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/color.as=======10199.999826
	var Color=iflash.laya.css.Color=(function(){
		function Color(d){
			this.text=null;
			this.rgb=null;
			if (d !=null)this.setColor(d);
		}

		REGCLASS$(Color,'iflash.laya.css.Color',true,false);
		var __proto__=Color.prototype;
		__proto__.setColor=function(name){
			this.rgb !=null && (this.rgb=null);
			if((typeof name=='string')){
				var c=Color._colorMap_!=null?Color._colorMap_[name]:null;
				if (c !=null){
					this.text=c;
					return;
				}
				this.text=name;
				if (this.text.substring(0,2)=="0x"){
					this.text="#"+this.text.substr(2);
					return;
				}
				if (Laya.CONCHVER)return;
				if (name.length==9){
					var color=LAYABOX.parseInt("0x"+name.substring(1,name.length));
					this.text="rgba("+((color >> 16)& 0xFF)+","+((color >> 8)& 0xFF)+","+((color)& 0xFF)+","+(((((color >> 24)& 0xFF)/ 255 *100)| 0)/ 100)+")";
					return;
				}
				else if (name.length < 7){
					this.text=Color._dColor_.substring(0,8-name.length)+name.substring(1);
				}
			}
			else if(((typeof name=='number')&& Math.floor(name)==name)){
				this.text="#"+(name).toString(16);
			}
			else
			if((name instanceof iflash.laya.css.Color )){
				this.text=(name).text;
			}
		}

		__proto__.toRgb=function(){
			if (this.rgb !=null)return this.rgb;
			this.rgb=Color.colortoArray(this.text);
			return this.rgb;
		}

		__proto__.isrgba=function(){
			return this.text.indexOf("rgba")==0;
		}

		__proto__.toString=function(){
			return this.text;
		}

		Color.regColor=function(name,color){
			Color._colorMap_[name]=color;
		}

		Color.colortoArray=function(c){
			var result=[];
			var temp;
			c=c.toLowerCase();
			var i=0,s=0;
			if (c.charAt(0)!='#'){
				if (c.indexOf("rgba(")!=-1){
					temp=c.substring(c.indexOf("rgba(")+5,c.indexOf(")"));
					var r=temp.split(",");
					i=0;s=r.length;
					while (i < s){result[i]=LAYABOX.parseInt(r[i]);i++;}
				}
			}
			else{
				temp=c.substring(1,c.length);
				if (temp.length==3 || temp.length==4){
					i=0;s=temp.length;
					while(i<s){
						result.push(LAYABOX.parseInt("0x"+temp.charAt(i)+""+temp.charAt(i)));
						i++;
					}
				}
				else if (temp.length==6 || temp.length==8){
					i=0;s=temp.length;
					while(i<s){
						result.push(LAYABOX.parseInt("0x"+temp.substring(i ,i+2)));
						i+=2;
					}
				}
			}
			if (result.length==3)result.push(255);
			return result;
		}

		Color._dColor_="#000000";
		REGSTATICATTR$(Color,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Color("#000000");
			},'_colorMap_',function(){return this._colorMap_={"white":'#FFFFFF',"red":'#FF0000',"green":'#00FF00',
				"blue":'#0000FF',"black":'#000000',
				"yellow":'#FFFF00','gray':'#AAAAAA'};
		}

		]);
		return Color;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/cssstyle.as=======10199.999825
	var CSSStyle=iflash.laya.css.CSSStyle=(function(){
		function CSSStyle(e){
			this.node=null;
			this._left_=null;
			this._top_=null;
			this._width_=null;
			this._height_=null;
			this._transform_=null;
			this._font_=null;
			this._filter_=null;
			this._type_=0;
			this._styleex_=null;
			this._zIndex_=null;
			this._margin_=null;
			this.node=e;
			this._left_=this._top_=this._width_=this._height_=this._zIndex_=0;
			this._styleex_=StyleEx.__DEFAULT__;
			this._font_=Font.__DEFAULT__;
			this._margin_=Margin.__DEFAULT__;
		}

		REGCLASS$(CSSStyle,'iflash.laya.css.CSSStyle',true,true);
		var __proto__=CSSStyle.prototype;
		__proto__.addType=function(type){
			this._type_ |=type;
		}

		__proto__.removeType=function(type){
			((this._type_ & type)==type)&& (this._type_ &=~type);
		}

		__proto__.checkType=function(type){
			return (this._type_ & type)!=0;
		}

		__proto__.pos=function(x,y){
			if (this._left_ !=x || this._top_ !=y){
				this._left_=x;
				this._top_=y;
				this.node.lyDispatchEvent(/*iflash.events.Event.REPOS*/"repos");
				var p=this.node._parent_;
				if (p !=null){
					p._type_|=/*iflash.laya.dom.Node.TYPE_SCROLLSZCHG*/0x80000;
					p.repaint();
					p.onChildRepos(this.node);
				}
				this.node._modle_.pos(x,y);
				return true;
			}
			return false;
		}

		__proto__.size=function(w,h){
			if (isNaN(w)|| isNaN(h)){
				throw "style size must Number"+w+"/"+h;
				return false;
			}
			w=(0.5+w)| 0;
			h=(0.5+h)| 0;
			if (this._width_ !=w || this._height_ !=h){
				var prew=this._width_,preh=this._height_;
				var n=this.node;
				var maxMinSize=this._styleex_.maxMinSize;
				if (this._width_ !=w){
					(w < maxMinSize.minSize.x)&& (w=maxMinSize.minSize.x);
					(w > maxMinSize.maxSize.x)&& (w=maxMinSize.maxSize.x);
					this._width_=w;
					(this._type_ & 0x80)==0 && (this._type_ |=0x8000);
				}
				if (this._height_ !=h){
					(h < maxMinSize.minSize.y)&& (h=maxMinSize.minSize.y);
					(h > maxMinSize.maxSize.y)&& (h=maxMinSize.maxSize.y);
					this._height_=h;
					(this._type_ & 0x100)==0 && (this._type_ |=0x10000);
				}
				if (this._width_ !=prew || this._height_ !=preh){
					n.lyonResize();
					n.lyDispatchEvent(/*iflash.events.Event.RESIZE*/"resize");
					n._checkNeedTypeset(false);
					if (n._parent_){
						n._parent_._type_ |=/*iflash.laya.dom.Node.TYPE_SCROLLSZCHG*/0x80000;
						n._parent_.onChildResize(this.node);
					}
					n.repaint();
					n._modle_.size(this._width_,this._height_);
					return true;
				}
			}
			return false;
		}

		__proto__._widthbeset_=function(){
			return (this._type_ & 0x8000)!=0;
		}

		__proto__._heightbeset_=function(){
			return (this._type_ & 0x10000)!=0;
		}

		__proto__._sizebeset_=function(){
			return (this._type_ & 0x8000)!=0 || (this._type_ & 0x10000)!=0;
		}

		__proto__._sizebeset_and_auto=function(){
			return (this._type_ & 0x8000)!=0 || (this._type_ & 0x400000)!=0 || (this._type_ & 0x10000)!=0 || (this._type_ & 0x800000)!=0;
		}

		__proto__.marginPos=function(x,y){
			this._margin_.setData(this,y,Laya.NULLFLOAT,0,x);
		}

		__proto__.setLight=function(r,g,b){
			this._filter_=this._filter_ || (new Filter(this));
			var _light=this._filter_.light;
			if (r==1 && g==1 && b==1){
				this._filter_.light=null;
			}
			else{
				if (_light==null)
					this._filter_.light=_light=new Rgba(r,g,b);
				else{
					_light.r=r;
					_light.g=g;
					_light.b=b;
				}
			}
			this._filter_.check();
			this._filter_.light ? this.node._modle_.filter(this._filter_.light.r,this._filter_.light.g,this._filter_.light.b,this._filter_.gray):this.node._modle_.filter(1,1,1,this._filter_.gray);
			this.node.repaint();
		}

		__proto__.setBackgroundImage=function(url,repeat){
			var _$this=this;
			if (url=='none'){
				this.node._modle_.bgimg(null,0);
				this._styleex_ !=StyleEx.__DEFAULT__ && this._styleex_.background && (this._styleex_.background.setBgImg(this.node,'none',null));
				return;
			}
			if (url.charAt(0)!='/' && !this.node.checkType(/*iflash.laya.dom.Node.TYPE_INDOCUMENT*/0x8000)){
				this.node.addEventListener(/*iflash.events.Event.TODOCUMENT*/"todocument",function(){
					_$this.setBackgroundImage(url,repeat);
					return false;
				});
			};
			var bg;
			(this._styleex_==StyleEx.__DEFAULT__)&& (this._styleex_=new StyleEx());
			(!(bg=this._styleex_.background))&& (bg=this._styleex_.background=new Background(this));
			url=this.node.formatUrl(StringMethod.subString(url,"url(",")",url));
			bg.setBgImg(this.node,url,repeat);
			this.node.repaint();
		}

		__proto__.scalexy=function(x){
			this.scale(x,x);
		}

		__proto__.scale=function(x,y){
			(!this._transform_)&& (this._transform_=new Transform1(this));
			this._transform_.setScale(this,x,y);
			this.node.repaintParent();
		}

		__proto__.setclip=function(x,y){
			if (x)this.addType(0x20000000);
			else this.removeType(0x20000000);
			if (y)this.addType(0x80000000);
			else this.removeType(0x80000000);
		}

		__proto__._addDynamicData_=function(name,value,x_y){
			var _$this=this;
			if (!this.node._private_._styleDynamicData_)
				this.node._private_._styleDynamicData_={};
			var param=this.node._private_._styleDynamicData_[name]={};
			var words=value.split('%');
			if (words[words.length-1]=='')
				words.length-=1;
			param.name=name;
			param.ratioOfSelf=0;
			param.correction=0;
			param.x_y=x_y;
			switch (words.length){
				case 1:
					param.ratioOfParent=parseFloat(words[0]);
					break ;
				case 2:
					param.ratioOfParent=parseFloat(words[0]);
					if (value.charAt(value.length-1)=='%')
						param.ratioOfSelf=parseFloat(words[1]);
					else
					param.correction=parseFloat(words[1]);
					break ;
				case 3:
					param.ratioOfParent=parseFloat(words[0]);
					param.ratioOfSelf=parseFloat(words[1]);
					param.correction=parseFloat(words[2]);
					break ;
				}
			if (this.node._private_._styleDynamicData_.type==1){
				this.node._parent_ && this._updateDynamicDataOne_(name,2);
				return;
			}
			this.node._private_._styleDynamicData_.type=1;
			var fn1=function (e){
				return _$this._updateDynamicData_(1);
			};
			var fn2=function (e){
				return _$this._updateDynamicData_(2);
			}
			if (!this.node._parent_){
				this.node.addEventListener(/*iflash.events.Event.ONPARENT*/"onparent",function(e){
					_$this.node.addEventListener(/*iflash.events.Event.RESIZE*/"resize",fn1);
					_$this.node._parent_.lyAddEventListener(/*iflash.events.Event.RESIZE*/"resize",fn2);
					_$this._updateDynamicData_(2);
					return false;
				});
				return;
			}
			this.node.addEventListener(/*iflash.events.Event.RESIZE*/"resize",BIND$(this,fn1));
			this.node._parent_.lyAddEventListener(/*iflash.events.Event.RESIZE*/"resize",BIND$(this,fn2));
			this._updateDynamicDataOne_(name,2);
		}

		__proto__._updateDynamicDataOne_=function(name,type){
			if (this.node.deleted)
				return false;
			var data=this.node._private_._styleDynamicData_[name];
			if ((typeof data=='number'))
				return false;
			var p=this.node._parent_,r;
			if (type==1 && data.ratioOfSelf==0)
				return false;
			if (data.x_y==0){
				r=p.width *data.ratioOfParent / 100+this._width_ *data.ratioOfSelf / 100+data.correction;
			}
			else{
				r=p.height *data.ratioOfParent / 100+this._height_ *data.ratioOfSelf / 100+data.correction;
			}
			this[name]=r;
			return true;
		}

		__proto__._updateDynamicData_=function(type){
			if (this.node.deleted)
				return false;
			var datas=this.node._private_._styleDynamicData_;
			for (var i in datas)
			this._updateDynamicDataOne_(i,type);
			return true;
		}

		__proto__.getVerticalAlign=function(){
			if (this.checkType(0x10))
				return 0x10;
			if (this.checkType(0x20))
				return 0x20;
			return 0;
		}

		__proto__.inheritFont=function(srcStyle){
			(srcStyle !=null)&& (this._font_=(this._font_.cssStyle==null ? srcStyle._font_ :this._font_.create(this,srcStyle._font_)));
		}

		__proto__._sendfont_=function(bCreate){
			bCreate && this._font_.create(this,this._font_);
			this.node._modle_.font(this._font_._toText_());
			this.node._type2_ |=/*iflash.laya.dom.Node.TYPE2_MODEL_FONTSET*/0x1000;
			this.node.repaint();
		}

		__proto__.setFont=function(style,weight,size_lineHeigt,family){
			this._font_.create(this,this._font_).setFont(style,weight,size_lineHeigt,family);
		}

		__proto__.getFont=function(){
			return this._font_;
		}

		__proto__.getCssFloat=function(){
			if (this.checkType(0x2))
				return 0x2;
			if (this.checkType(0x4))
				return 0x4;
			return 0;
		}

		__proto__.setAttribute=function(name,value){
			this["??"+name] ? this["??"+name].setValue(this,value):this[name]=value;
		}

		__proto__.getAttribute=function(name){
			return this["??"+name] ? this["??"+name].getValue(this):this[name];
		}

		__proto__.setAttributes=function(attrs){
			if (attrs !=null){
				for (var i=0,sz=attrs.length;i < sz;i++){
					this.setAttribute(attrs[i].name,attrs[i].value);
				}
			}
		}

		__proto__.action=function(toProps,params){
			((typeof toProps=='string'))&& (toProps=Method.simpleJsonParse(toProps));
			((typeof params=='string'))&& (params=Method.simpleJsonParse(params));
			return Tween.to(this,toProps,params);
		}

		__proto__.setPassWord=function(b){
			this._font_.create(this,this._font_).setPassword(b);
		}

		__proto__.animation=function(keyframe,duration,timingFunction,delay,count){
			(delay===void 0)&& (delay=0);
			(count===void 0)&& (count=0);
			var parms={};
			parms["delay"]=delay;
			if (timingFunction !=null && (typeof timingFunction=='string'))
				var ofs=timingFunction.indexOf("(");
			if (ofs !=-1){
				var intepretorParam=parseFloat(timingFunction.substring(ofs+1,timingFunction.length-1));
				parms["intepretorParam"]=isNaN(intepretorParam)? 0 :intepretorParam;
				timingFunction=timingFunction.substring(0,ofs);
			}
			parms["ease"]=Easing.__fnsmap__[timingFunction];
			parms["time"]=duration;
			parms["count"]=count;
			var tween=new Tween(this.node,null,parms);
			tween.addKeyframes(keyframe);
			tween.start();
		}

		__proto__.attributesToHTML=function(){
			var i=0,sz=0,str="",param,def;
			for (i=0,sz=CSSStyle.__ATTRIBUTES__.length;i < sz;i++){
				def=CSSStyle.__ATTRIBUTES__[i];
				param=""+this[def.name];
				if (param=="" || param=="undefined" || param=='null' || param=='NaN' || def.defaultv==param)
					continue ;
				str+=def.namenew+":"+param+";";
			}
			if (this.node._parent_ && (this.node._parent_.getStyle()==null || this._font_==(this.node._parent_)._style_.getFont())){
			}
			else
			str+="font:"+this._font_._toText_();
			return str.length > 1 ? ('style="'+str+'"'):str;
		}

		DEFUNENUMPTY$(__proto__,'_$get_block',function(){
			return (this._type_ & 0x4000)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_block',function(b){
			b ? this.addType(0x4000 | 0x1000000):this.removeType(0x4000);
		});

		Object.defineProperty(__proto__,'block',{get:__proto__._$get_block,set:__proto__._$set_block,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_margin',function(){
			return this._margin_.toString();
		});

		DEFUNENUMPTY$(__proto__,'_$set_margin',function(num){
			var nums=num.split(' ');
			this._margin_.setData(this,parseFloat(nums[0]),parseFloat(nums[1]),parseFloat(nums[2]),parseFloat(nums[3]));
		});

		Object.defineProperty(__proto__,'margin',{get:__proto__._$get_margin,set:__proto__._$set_margin,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_isRect',function(){
			return (this._type_ & 0x1000000)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_isRect',function(b){
			(b)? (this._type_ |=0x1000000):this.removeType(0x1000000);
		});

		Object.defineProperty(__proto__,'isRect',{get:__proto__._$get_isRect,set:__proto__._$set_isRect,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_minWidth',function(){
			return this._styleex_.maxMinSize.minSize.x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_minWidth',function(w){
			this._styleex_.createkMaxMin(this).minSize.x=w;
		});

		Object.defineProperty(__proto__,'minWidth',{get:__proto__._$get_minWidth,set:__proto__._$set_minWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_border',function(){
			return this._styleex_.border ? this._styleex_.border.toString():"none";
		});

		DEFUNENUMPTY$(__proto__,'_$set_border',function(txt){
			(this._styleex_==StyleEx.__DEFAULT__)&& (this._styleex_=new StyleEx());
			if (!this._styleex_.border){
				if (txt=='none')
					return;
				this._styleex_.border=new Border(this);
			}
			this._styleex_.border.setBorder(txt);
			this.node._modle_.border(this._styleex_.border.toString());
		});

		Object.defineProperty(__proto__,'border',{get:__proto__._$get_border,set:__proto__._$set_border,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_embedFonts',function(){
			return this._font_.embedFonts;
		});

		DEFUNENUMPTY$(__proto__,'_$set_embedFonts',function(value){
			this._font_.embedFonts=value;
		});

		Object.defineProperty(__proto__,'embedFonts',{get:__proto__._$get_embedFonts,set:__proto__._$set_embedFonts,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_left',function(){
			return this._left_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_left',function(x){
			if ((typeof x=='string')){
				if (x=="center"){
					this._addDynamicData_('left',"50%-50%",0);
					return;
				}
				if (x.indexOf('%')> 0){
					this._addDynamicData_('left',x,0);
					return;
				}
				x=LAYABOX.parseInt(x);
			}
			x !=this._left_ && this.pos(x,this._top_);
		});

		Object.defineProperty(__proto__,'left',{get:__proto__._$get_left,set:__proto__._$set_left,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_center',function(d){
			this.left="50%-50%"+(d ? d :"");
		});

		Object.defineProperty(__proto__,'center',{set:__proto__._$set_center,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_family',function(s){
			this._font_.create(this,this._font_).fontName=StringMethod.strTrim(s);
		});

		Object.defineProperty(__proto__,'family',{set:__proto__._$set_family,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_middle',function(d){
			this.top="50%-50%"+(d ? d :"");
		});

		Object.defineProperty(__proto__,'middle',{set:__proto__._$set_middle,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_right',function(d){
			this.left="100%-100%"+(d ? d :"");
		});

		Object.defineProperty(__proto__,'right',{set:__proto__._$set_right,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_bottom',function(d){
			this.top="100%-100%"+(d ? d :"");
		});

		Object.defineProperty(__proto__,'bottom',{set:__proto__._$set_bottom,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_light',function(){
			if (this._filter_==null || this._filter_.light==null)
				return 'none';
			return this._filter_.light.r+' '+this._filter_.light.g+' '+this._filter_.light.b;
		});

		DEFUNENUMPTY$(__proto__,'_$set_light',function(d){
			if (d=='none'){
				(this._filter_)&& (this._filter_.light=null);
				this.node._modle_.filter(this._filter_.light !=null ? this._filter_.light.r :1,this._filter_.light !=null ? this._filter_.light.g :1,this._filter_.light !=null ? this._filter_.light.b :1,this._filter_.gray);
				this.node.repaint();
			}
			else{
				var ds=d.split(' ');
				this.setLight(parseFloat(ds[0]),parseFloat(ds[1]),parseFloat(ds[2]));
			}
		});

		Object.defineProperty(__proto__,'light',{get:__proto__._$get_light,set:__proto__._$set_light,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rotate',function(){
			return this._transform_ ? this._transform_.rotate :0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rotate',function(r){
			if ((typeof r=='string'))
				r=parseFloat(r);
			(!this._transform_)&& (this._transform_=new Transform1(this));
			this._transform_.setRotate(this,r);
			this.node._modle_.rotate2d(r);
			this.node.repaintParent();
		});

		Object.defineProperty(__proto__,'rotate',{get:__proto__._$get_rotate,set:__proto__._$set_rotate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_position',function(){
			return ((this._type_ & 0x20000)!=0)? "absolute" :"none";
		});

		DEFUNENUMPTY$(__proto__,'_$set_position',function(type){
			(this.positioni=(type=='none')? 0 :(type=="fixed"?2:1))&& (this._type_ |=0x4000);
		});

		Object.defineProperty(__proto__,'position',{get:__proto__._$get_position,set:__proto__._$set_position,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_top',function(){
			return this._top_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_top',function(y){
			if ((typeof y=='string')){
				if (y=="center"){
					this._addDynamicData_('top',"50%-50%",1);
					return;
				}
				if (y.indexOf('%')> 0){
					this._addDynamicData_('top',y,1);
					return;
				}
				y=LAYABOX.parseInt(y);
			}
			y !=this._top_ && this.pos(this._left_,y);
		});

		Object.defineProperty(__proto__,'top',{get:__proto__._$get_top,set:__proto__._$set_top,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_positioni',function(){
			return ((this._type_ & 0x20000)!=0)? 1 :0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_positioni',function(type){
			var _$this=this;
			switch(type){
				case 0:
					return;
				case 1:
					if ((this._type_ & 0x20000)!=0)return;
					this._type_ &=~0x40000;
					this._type_ |=0x20000 | 0x4000 | 0x1000000;
					this.node._private_.__position_fixe && (this.node._private_.__position_fixe.deleted=true);
					break ;
				case 2:
					if ((this._type_ & 0x40000)!=0)return;
					this._type_ |=0x40000 | 0x4000 | 0x1000000;
					this._type_ &=~0x20000;
					this.node._private_.__position_fixe=this.node.parent.lyAddEventListener(/*iflash.events.Event.SCROLL*/"scroll",function(e){
						_$this.marginPos(-_$this.node.parent.scrollLeft,-_$this.node.parent.scrollTop);
					});
				}
			this.node._sort_d_=-1;
			this.node._modle_.position(1);
		});

		Object.defineProperty(__proto__,'positioni',{get:__proto__._$get_positioni,set:__proto__._$set_positioni,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_verticalAlign',function(){
			if (this.checkType(0x10))
				return 'middle';
			if (this.checkType(0x20))
				return 'bottom';
			return 'top';
		});

		DEFUNENUMPTY$(__proto__,'_$set_verticalAlign',function(s){
			this.removeType(0x10 | 0x20);
			switch (s){
				case 'middle':
					this._type_ |=0x10;
				case 'bottom':
					this._type_ |=0x20;
				}
		});

		Object.defineProperty(__proto__,'verticalAlign',{get:__proto__._$get_verticalAlign,set:__proto__._$set_verticalAlign,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_transformOrigin',function(){
			return this._transform_ && this._transform_.translate ? this._transform_.translate.getOrigin():"none";
		});

		DEFUNENUMPTY$(__proto__,'_$set_transformOrigin',function(o){
			(!this._transform_)&& (this._transform_=new Transform1(this));
			if (this._transform_.translate==Translate.__DEFAULT__)
				this._transform_.translate=new Translate(null,-1,-1);
			this._transform_.translate.setOrigin(this,o);
			this.node.repaintParent();
		});

		Object.defineProperty(__proto__,'transformOrigin',{get:__proto__._$get_transformOrigin,set:__proto__._$set_transformOrigin,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_visibility',function(){
			return this.node.hidden==1 ? "hidden" :"visibility";
		});

		DEFUNENUMPTY$(__proto__,'_$set_visibility',function(d){
			var h=this.node.hidden,p;
			if (d=="visible"){
				this.node.hidden=0;
			}
			if (d=="hidden"){
				this.node.hidden=/*iflash.laya.dom.Node.HIDDEN_TRUE*/1;
			}
			p=this.node._parent_;
			if (h !=this.node.hidden && p && p.getStyle()!=null){
				p.addType(/*iflash.laya.dom.Node.TYPE_SCROLLSZCHG*/0x80000);
				this.node._checkNeedTypeset(false);
				p.repaint();
				this.node.lyDispatchEvent(/*iflash.events.Event.ONRESHOW*/"onreshow");
			}
			this.node._modle_.show(this.node.hidden==0);
		});

		Object.defineProperty(__proto__,'visibility',{get:__proto__._$get_visibility,set:__proto__._$set_visibility,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_whiteSpace',function(){
			return this._font_.getWhiteSpace();
		});

		DEFUNENUMPTY$(__proto__,'_$set_whiteSpace',function(s){
			this._font_.create(this,this._font_).setWhiteSpace(s);
		});

		Object.defineProperty(__proto__,'whiteSpace',{get:__proto__._$get_whiteSpace,set:__proto__._$set_whiteSpace,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_display',function(){
			if (this.node.hidden==/*iflash.laya.dom.Node.HIDDEN_DISPLAYNONE*/2)
				return "none";
			if (!this.checkType(0x80000))
				return "";
			if (this.checkType(0x4000))
				return "block";
			if (this.checkType(0x200000))
				return "break";
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_display',function(d){
			var h=this.node.hidden,p;
			switch (d){
				case "":
					break ;
				case "none":
					this.node.hidden=/*iflash.laya.dom.Node.HIDDEN_DISPLAYNONE*/2;
					break ;
				case "block":
					this._type_ |=0x4000 | 0x80000;
					break ;
				case "break":
					this._type_ |=0x200000 | 0x80000;
					break ;
				case "inline":
					this.removeType(0x80000 | 0x4000);
					break ;
				}
			this.node.hidden=(d !='none' && this.node.hidden==/*iflash.laya.dom.Node.HIDDEN_DISPLAYNONE*/2)? 0 :this.node.hidden;
			p=this.node._parent_;
			if (h !=this.node.hidden && p && p.getStyle()!=null){
				p.addType(/*iflash.laya.dom.Node.TYPE_SCROLLSZCHG*/0x80000);
				this.node._checkNeedTypeset(false);
				p.repaint();
				this.node.lyDispatchEvent(/*iflash.events.Event.ONRESHOW*/"onreshow");
				this.node._modle_.show(this.node.hidden==0);
			}
		});

		Object.defineProperty(__proto__,'display',{get:__proto__._$get_display,set:__proto__._$set_display,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_overflowY',function(str){
			this.node.repaint();
			if (str=='hidden'){
				this.addType(0x1);
				this.node._modle_.clip(true);
				this.node._private_.draggable && (this.node._private_.draggable.stepY=0);
				return;
			}
			if (str.indexOf('scroll')==0){
				this.addType(0x1);
				this.node.draggable=str;
				this.node._modle_.clip(true);
				return;
			}
		});

		Object.defineProperty(__proto__,'overflowY',{set:__proto__._$set_overflowY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._width_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			if ((typeof w=='string')){
				if (w=='auto'){
					this._width_=0;
					this.addType(0x400000);
					this.removeType(0x8000);
					return;
				}
				if (w.indexOf('%')> 0){
					this._addDynamicData_('width',w,0);
					return;
				}
				w=LAYABOX.parseInt(w);
			}
			this.removeType(0x400000);
			w !=this._width_ && this.size(w,this._height_);
			return;
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._height_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			if ((typeof h=='string')){
				if (h=='auto'){
					this._height_=0;
					this.addType(0x800000);
					this.removeType(0x10000);
					return;
				}
				if (h.indexOf('%')> 0){
					this._addDynamicData_('height',h,1);
					return;
				}
				h=LAYABOX.parseInt(h);
			}
			this.removeType(0x800000);
			h !=this._height_ && this.size(this._width_,h);
			return;
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxWidth',function(){
			return this._styleex_.maxMinSize.maxSize.x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_maxWidth',function(w){
			this._styleex_.createkMaxMin(this).maxSize.x=w;
		});

		Object.defineProperty(__proto__,'maxWidth',{get:__proto__._$get_maxWidth,set:__proto__._$set_maxWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textIndent',function(){
			return this._font_.exdata.textIndent;
		});

		DEFUNENUMPTY$(__proto__,'_$set_textIndent',function(d){
			if ((typeof d=='string'))
				d=LAYABOX.parseInt(d);
			this._font_.create(this,this._font_).setTextIndent(d);
		});

		Object.defineProperty(__proto__,'textIndent',{get:__proto__._$get_textIndent,set:__proto__._$set_textIndent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxHeight',function(){
			return this._styleex_.maxMinSize.maxSize.y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_maxHeight',function(h){
			this._styleex_.createkMaxMin(this).maxSize.y=h;
		});

		Object.defineProperty(__proto__,'maxHeight',{get:__proto__._$get_maxHeight,set:__proto__._$set_maxHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_minHeight',function(){
			return this._styleex_.maxMinSize.minSize.y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_minHeight',function(h){
			this._styleex_.createkMaxMin(this).minSize.y=h;
		});

		Object.defineProperty(__proto__,'minHeight',{get:__proto__._$get_minHeight,set:__proto__._$set_minHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_padding',function(){
			return this._styleex_.padding.toString();
		});

		DEFUNENUMPTY$(__proto__,'_$set_padding',function(num){
			var nums=num.split(' ');
			this._styleex_.padding.setData(this,parseFloat(nums[0]),parseFloat(nums[1]),parseFloat(nums[2]),parseFloat(nums[3]));
		});

		Object.defineProperty(__proto__,'padding',{get:__proto__._$get_padding,set:__proto__._$set_padding,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_paddingRight',function(){
			return this._styleex_.padding.right;
		});

		DEFUNENUMPTY$(__proto__,'_$set_paddingRight',function(d){
			this._styleex_.padding.setData2(this,Laya.NULLFLOAT,d,Laya.NULLFLOAT,Laya.NULLFLOAT);
		});

		Object.defineProperty(__proto__,'paddingRight',{get:__proto__._$get_paddingRight,set:__proto__._$set_paddingRight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_paddingTop',function(){
			return this._styleex_.padding.top;
		});

		DEFUNENUMPTY$(__proto__,'_$set_paddingTop',function(d){
			this._styleex_.padding.setData2(this,d,Laya.NULLFLOAT,Laya.NULLFLOAT,Laya.NULLFLOAT);
		});

		Object.defineProperty(__proto__,'paddingTop',{get:__proto__._$get_paddingTop,set:__proto__._$set_paddingTop,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleX',function(){
			return this._transform_ ? this._transform_.scale.x :1;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleX',function(x){
			if ((typeof x=='string'))
				x=parseFloat(x);
			(!this._transform_)&& (this._transform_=new Transform1(this));
			this._transform_.setScale(this,x,this._transform_.scale.y);
			this.node.repaintParent();
		});

		Object.defineProperty(__proto__,'scaleX',{get:__proto__._$get_scaleX,set:__proto__._$set_scaleX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_paddingBottom',function(){
			return this._styleex_.padding.bottom;
		});

		DEFUNENUMPTY$(__proto__,'_$set_paddingBottom',function(d){
			this._styleex_.padding.setData2(this,Laya.NULLFLOAT,Laya.NULLFLOAT,d,Laya.NULLFLOAT);
		});

		Object.defineProperty(__proto__,'paddingBottom',{get:__proto__._$get_paddingBottom,set:__proto__._$set_paddingBottom,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textAlign',function(){
			return this._font_.getTextAlign();
		});

		DEFUNENUMPTY$(__proto__,'_$set_textAlign',function(s){
			this._font_.create(this,this._font_).setTextAlign(s);
		});

		Object.defineProperty(__proto__,'textAlign',{get:__proto__._$get_textAlign,set:__proto__._$set_textAlign,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_background',function(value){
			if (value.indexOf('url')>=0){
				var e=value.indexOf(')');
				this.setBackgroundImage(value.substring(0,e+1),value.substring(e+1,value.length));
				return;
			}
			this.backgroundColor=value;
		});

		Object.defineProperty(__proto__,'background',{set:__proto__._$set_background,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontText',function(){
			return this._font_._toText_();
		});

		Object.defineProperty(__proto__,'fontText',{get:__proto__._$get_fontText,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_paddingLeft',function(){
			return this._styleex_.padding.left;
		});

		DEFUNENUMPTY$(__proto__,'_$set_paddingLeft',function(d){
			this._styleex_.padding.setData2(this,Laya.NULLFLOAT,Laya.NULLFLOAT,Laya.NULLFLOAT,d);
		});

		Object.defineProperty(__proto__,'paddingLeft',{get:__proto__._$get_paddingLeft,set:__proto__._$set_paddingLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleFullParent',function(){
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleFullParent',function(type){
			var _$this=this;
			if (type==null || type=='none'){
				if (this.node._private_.fullparent_event !=null){
					this.node._private_.fullparent_event.deleted=true;
					this.node._private_.fullparent_event=null;
				}
				return;
			};
			var p=this.node._parent_;
			var cx=p.width / this.width,cy=p.height / this.height;
			switch (type){
				case 'equal':
					if (cx > cy)
						cx=cy;
					else
					cy=cx;
					break ;
				case 'largeequal':
					if (cx > cy)
						cy=cx;
					else
					cx=cy;
					break ;
				case 'width':
					cy=cx;
					break ;
				case 'height':
					cx=cy;
					break ;
				}
			this.scale(cx,cy);
			this.node.lyDispatchEvent(/*iflash.events.Event.RESIZE*/"resize");
			if (this.node._private_.fullparent_event==null){
				this.node._private_.fullparent_event=p.attachEvent(/*iflash.events.Event.RESIZE*/"resize",function(){
					_$this.node.scaleFullParent(type);
				},this.node);
			}
		});

		Object.defineProperty(__proto__,'scaleFullParent',{get:__proto__._$get_scaleFullParent,set:__proto__._$set_scaleFullParent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_marginTop',function(){
			return this._margin_.top;
		});

		DEFUNENUMPTY$(__proto__,'_$set_marginTop',function(d){
			this._margin_.setData2(this,d,Laya.NULLFLOAT,Laya.NULLFLOAT,Laya.NULLFLOAT);
		});

		Object.defineProperty(__proto__,'marginTop',{get:__proto__._$get_marginTop,set:__proto__._$set_marginTop,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_marginRight',function(){
			return this._margin_.right;
		});

		DEFUNENUMPTY$(__proto__,'_$set_marginRight',function(d){
			this._margin_.setData2(this,Laya.NULLFLOAT,d,Laya.NULLFLOAT,Laya.NULLFLOAT);
		});

		Object.defineProperty(__proto__,'marginRight',{get:__proto__._$get_marginRight,set:__proto__._$set_marginRight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_overflowX',function(str){
			this.node.repaint();
			if (str=='hidden'){
				this.addType(0x1);
				this.node._modle_.clip(true);
				this.node._private_.draggable && (this.node._private_.draggable.stepX=0);
				return;
			}
			if (str.indexOf('scroll')==0){
				this.addType(0x1);
				this.node.draggable=str;
				this.node._modle_.clip(true);
				return;
			}
		});

		Object.defineProperty(__proto__,'overflowX',{set:__proto__._$set_overflowX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_clip',function(){
			return (this._type_ & 0x1)==0x1;
		});

		Object.defineProperty(__proto__,'clip',{get:__proto__._$get_clip,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_marginBottom',function(){
			return this._margin_.bottom;
		});

		DEFUNENUMPTY$(__proto__,'_$set_marginBottom',function(d){
			this._margin_.setData2(this,Laya.NULLFLOAT,Laya.NULLFLOAT,d,Laya.NULLFLOAT);
		});

		Object.defineProperty(__proto__,'marginBottom',{get:__proto__._$get_marginBottom,set:__proto__._$set_marginBottom,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_cssFloat',function(){
			if (this.checkType(0x2))
				return "left";
			if (this.checkType(0x4))
				return "right";
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_cssFloat',function(s){
			this.removeType(0x4 | 0x2);
			switch (s){
				case 'left':
					this._type_ |=0x2;
					break ;
				case 'right':
					this._type_ |=0x4;
				}
		});

		Object.defineProperty(__proto__,'cssFloat',{get:__proto__._$get_cssFloat,set:__proto__._$set_cssFloat,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_lineHeight',function(){
			return this._font_.exdata.lineHeight;
		});

		DEFUNENUMPTY$(__proto__,'_$set_lineHeight',function(d){
			if ((typeof d=='string'))
				d=parseFloat(d);
			this._font_.create(this,this._font_).setLineHeight(d);
		});

		Object.defineProperty(__proto__,'lineHeight',{get:__proto__._$get_lineHeight,set:__proto__._$set_lineHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textBorder',function(){
			return this._font_.getTextBorder();
		});

		DEFUNENUMPTY$(__proto__,'_$set_textBorder',function(def){
			this._font_.create(this,this._font_).setTextBorder(def);
		});

		Object.defineProperty(__proto__,'textBorder',{get:__proto__._$get_textBorder,set:__proto__._$set_textBorder,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_marginLeft',function(){
			return this._margin_.left;
		});

		DEFUNENUMPTY$(__proto__,'_$set_marginLeft',function(d){
			this._margin_.setData2(this,Laya.NULLFLOAT,Laya.NULLFLOAT,Laya.NULLFLOAT,d);
		});

		Object.defineProperty(__proto__,'marginLeft',{get:__proto__._$get_marginLeft,set:__proto__._$set_marginLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_matrix',function(){
			return this._transform_==null ? null :this._transform_._matrix_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_matrix',function(m){
			(!this._transform_)&& (this._transform_=new Transform1(this));
			this._transform_.matrix=m;
			this.node.repaintParent();
		});

		Object.defineProperty(__proto__,'matrix',{get:__proto__._$get_matrix,set:__proto__._$set_matrix,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_stepY',function(y){
			var temp;
			if (y.indexOf("%")!=-1)
				temp=parseFloat(y.substring(0,y.indexOf("%")))/100;
			else
			temp=parseFloat(y);
			this.node._private_.draggable&&(this.node._private_.draggable.stepY=temp);
		});

		Object.defineProperty(__proto__,'stepY',{set:__proto__._$set_stepY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_gray',function(){
			return this._filter_ ? this._filter_.gray :0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_gray',function(d){
			if (d==0 || d==null || d=='' || d=='none'){
				(this._filter_ !=null)&& (this._filter_.gray=0);
			}
			else{
				(this._filter_==null)&& (this._filter_=new Filter(this));
				this._filter_.gray=((typeof d=='string'))? parseFloat(d):(d);
			}
			this._filter_.check();
			this.node._modle_.filter(this._filter_.light !=null ? this._filter_.light.r :1,this._filter_.light !=null ? this._filter_.light.g :1,this._filter_.light !=null ? this._filter_.light.b :1,this._filter_.gray);
			this.node.repaint();
		});

		Object.defineProperty(__proto__,'gray',{get:__proto__._$get_gray,set:__proto__._$set_gray,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_stepX',function(x){
			var temp;
			if (x.indexOf("%")!=-1)
				temp=parseFloat(x.substring(0,x.indexOf("%")))/100;
			else
			temp=parseFloat(x);
			this.node._private_.draggable&&(this.node._private_.draggable.stepX=temp);
		});

		Object.defineProperty(__proto__,'stepX',{set:__proto__._$set_stepX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_alpha',function(){
			return this._filter_ ? this._filter_.alpha :1;
		});

		DEFUNENUMPTY$(__proto__,'_$set_alpha',function(d){
			d=parseFloat(d);
			(this._filter_==null)&& (this._filter_=new Filter(this));
			if (this._filter_.alpha !=d){
				this._filter_.alpha=d;
				(this.node._parent_ !=null)&& (this.node._parent_.repaint());
				this.node._modle_.alpha(d);
			}
		});

		Object.defineProperty(__proto__,'alpha',{get:__proto__._$get_alpha,set:__proto__._$set_alpha,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_backgroundColor',function(){
			return this._styleex_.background && this._styleex_.background.color ? this._styleex_.background.color.text :"";
		});

		DEFUNENUMPTY$(__proto__,'_$set_backgroundColor',function(color){
			(this._styleex_==StyleEx.__DEFAULT__)&& (this._styleex_=new StyleEx());
			if (!this._styleex_.background){
				if (color=='none'){
					this.node._modle_.bgcolor(color);
					return;
				}
				this._styleex_.background=new Background(this);
			}
			this._styleex_.background.setColor(color);
			this.node._modle_.bgcolor(this._styleex_.background.color.text);
			this.node.repaint();
		});

		Object.defineProperty(__proto__,'backgroundColor',{get:__proto__._$get_backgroundColor,set:__proto__._$set_backgroundColor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_transform',function(){
			return this._transform_ || (this._transform_=new Transform1(this));
		});

		DEFUNENUMPTY$(__proto__,'_$set_transform',function(value){
			(!this._transform_)&& (this._transform_=new Transform1(this));
			(value._matrix_)&&(this._transform_.matrix=value._matrix_);
			this.node.repaintParent();
		});

		Object.defineProperty(__proto__,'transform',{get:__proto__._$get_transform,set:__proto__._$set_transform,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleY',function(){
			return this._transform_ ? this._transform_.scale.y :1;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleY',function(y){
			if ((typeof y=='string'))
				y=parseFloat(y);
			(!this._transform_)&& (this._transform_=new Transform1(this));
			this._transform_.setScale(this,this._transform_.scale.x,y);
			this.node.repaintParent();
		});

		Object.defineProperty(__proto__,'scaleY',{get:__proto__._$get_scaleY,set:__proto__._$set_scaleY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_flip',function(){
			return this._transform_ ? this._transform_.toFlipString():"none";
		});

		DEFUNENUMPTY$(__proto__,'_$set_flip',function(r){
			if ((typeof r=='string'))
				r=LAYABOX.parseInt(r);
			(!this._transform_)&& (this._transform_=new Transform1(this));
			this._transform_.setFlip(this,r);
			this.node.repaintParent();
			this.node._modle_.flip(r);
		});

		Object.defineProperty(__proto__,'flip',{get:__proto__._$get_flip,set:__proto__._$set_flip,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_clipMode',function(){
			return (this.checkType(0x20000000)?0x10:0)| (this.checkType(0x80000000)?0x01:0);
		});

		Object.defineProperty(__proto__,'clipMode',{get:__proto__._$get_clipMode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_overflow',function(str){
			this.node.repaint();
			if (str=='none'){
				this.removeType(0x1);
				this.node._modle_.clip(false);
				return;
			}
			if (str=='hidden'){
				this.addType(0x1);
				this.node._modle_.clip(true);
				return;
			}
			if (str.indexOf('scroll')==0){
				this.addType(0x1);
				this.node.draggable=str;
				this.node._modle_.clip(true);
				return;
			}
		});

		Object.defineProperty(__proto__,'overflow',{set:__proto__._$set_overflow,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_zIndex',function(){
			return this._zIndex_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_zIndex',function(d){
			if (this._zIndex_ !=d){
				this._zIndex_=d;
				var n=this.node;
				if (n._parent_){
					n._parent_.addType(/*iflash.laya.dom.Node.TYPE_WIISORT*/0x2);
					n._parent_.repaint();
				}
				n._sort_d_=-1;
				this.node._modle_.zIndex(d);
			}
		});

		Object.defineProperty(__proto__,'zIndex',{get:__proto__._$get_zIndex,set:__proto__._$set_zIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_letterSpacing',function(){
			return this._font_.exdata.letterSpacing;
		});

		DEFUNENUMPTY$(__proto__,'_$set_letterSpacing',function(d){
			if ((typeof d=='string'))
				d=LAYABOX.parseInt(d);
			this._font_.create(this,this._font_).setLetterSpacing(d);
		});

		Object.defineProperty(__proto__,'letterSpacing',{get:__proto__._$get_letterSpacing,set:__proto__._$set_letterSpacing,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontSize',function(){
			return this._font_.size;
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontSize',function(d){
			if ((typeof d=='string'))
				d=LAYABOX.parseInt(d);
			this._font_.create(this,this._font_).setFontSize(d);
		});

		Object.defineProperty(__proto__,'fontSize',{get:__proto__._$get_fontSize,set:__proto__._$set_fontSize,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_lineSpacing',function(){
			return this._font_.exdata.lineSpacing;
		});

		DEFUNENUMPTY$(__proto__,'_$set_lineSpacing',function(d){
			if ((typeof d=='string'))
				d=LAYABOX.parseInt(d);
			this._font_.create(this,this._font_).setLineSpacing(d);
		});

		Object.defineProperty(__proto__,'lineSpacing',{get:__proto__._$get_lineSpacing,set:__proto__._$set_lineSpacing,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_color',function(){
			return this._font_.color.toString();
		});

		DEFUNENUMPTY$(__proto__,'_$set_color',function(s){
			this._font_.create(this,this._font_).setColor(s);
		});

		Object.defineProperty(__proto__,'color',{get:__proto__._$get_color,set:__proto__._$set_color,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_cssText',function(text){
			Font.__fontsetref__++;
			var arr=[];
			while ((arr=CSSStyle._STYLEATTRIBUTESREGEXP_.exec(text))!=null){
				this.setAttribute(arr[1],arr[2] || arr[3] || arr[4] || arr[5]);
			}
			Font.__fontsetref__--;
			this._font_._onFontSetEnd_();
		});

		Object.defineProperty(__proto__,'cssText',{set:__proto__._$set_cssText,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_fontWeight',function(s){
			this._font_.create(this,this._font_).setWeight(s);
		});

		Object.defineProperty(__proto__,'fontWeight',{set:__proto__._$set_fontWeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_textDecoration',function(text){
			var nums=text.split(' ');
			this._font_.setTextDecoration(nums[0],nums[1]);
		});

		Object.defineProperty(__proto__,'textDecoration',{set:__proto__._$set_textDecoration,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_globalCompositeOperation',function(){
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_globalCompositeOperation',function(s){
			var nType=1;
			switch (s){
				case 'lighter':
					nType=2;
					break ;
				case 'dark':
					nType=3;
					break ;
				}
			this.node._modle_.globalCompositeOperation(nType);
			this.node.repaint();
		});

		Object.defineProperty(__proto__,'globalCompositeOperation',{get:__proto__._$get_globalCompositeOperation,set:__proto__._$set_globalCompositeOperation,enumerable:false});
		CSSStyle._setFontface_=function(fontFamily,src,type){
			(type===void 0)&& (type="truetype");
			return "font-family:'"+fontFamily+"';src: url('"+src+"') format('"+type+"');";
		}

		CSSStyle.fontFace=function(fontFamily,src,type){
			(type===void 0)&& (type="truetype");
			if (Laya.HTMLVER&&!Laya.CONCHVER){
				var s=CSSStyle._Style_ || Browser.document.createElement("style");
				!CSSStyle._Style_ && Browser.document.head.appendChild(s);
				CSSStyle._Style_=s;
				var temp="@font-face{"+CSSStyle._setFontface_(fontFamily,src,type)+"}";
				s.innerText=temp;
				CSSStyle.fontfaces[fontFamily]=true;
			}
			else{
			}
		}

		CSSStyle.CSS_CLIP=0x1;
		CSSStyle.CSS_FLOAT_LEFT=0x2;
		CSSStyle.CSS_FLOAT_RIGHT=0x4;
		CSSStyle.VERTICALALIGN_TOP=0x8;
		CSSStyle.VERTICALALIGN_MIDDLE=0x10;
		CSSStyle.VERTICALALIGN_BOTTOM=0x20;
		CSSStyle.FONT_SETING=0x40;
		CSSStyle.CSS_WIDTH_NOSET=0x80;
		CSSStyle.CSS_HEIGHT_NOSET=0x100;
		CSSStyle.CSS_FIX_RATIO_W=0x1000;
		CSSStyle.CSS_FIX_RATIO_H=0x2000;
		CSSStyle.CSS_BLOCK=0x4000;
		CSSStyle.CSS_WIDTH=0x8000;
		CSSStyle.CSS_HEIGHT=0x10000;
		CSSStyle.CSS_POSIOTION_A=0x20000;
		CSSStyle.CSS_POSIOTION_FIXE=0x40000;
		CSSStyle.CSS_DISPLAY_SET=0x80000;
		CSSStyle.CSS_LIGHT=0x100000;
		CSSStyle.CSS_BREAK=0x200000;
		CSSStyle.CSS_WIDTH_AUTO=0x400000;
		CSSStyle.CSS_HEIGHT_AUTO=0x800000;
		CSSStyle.CSS_ISBOX=0x1000000;
		CSSStyle.CSS_WIDTH_D=0x2000000;
		CSSStyle.CSS_HEIGHT_D=0x4000000;
		CSSStyle.CSS_LEFT_D=0x8000000;
		CSSStyle.CSS_TOP_D=0x10000000;
		CSSStyle.CSS_MAX=0x40000000;
		CSSStyle.CSS_CLIP_X=0x20000000;
		CSSStyle.CSS_CLIP_Y=0x80000000;
		CSSStyle._Style_=null;;
		CSSStyle.fontfaces=[];
		REGSTATICATTR$(CSSStyle,
		['_STYLEATTRIBUTESREGEXP_',function(){return this._STYLEATTRIBUTESREGEXP_=new RegExp("([\\w-]+)\\s*:\\s*(?:\"([^\"]*)\"|'([^']*)'|(?:((?:[^;}])+);|((?:[^;}])+)))","g");
		},'__ATTRIBUTES__',function(){return this.__ATTRIBUTES__=Method.InitAttributesToHTML("position:none;left:0;top:0;width:0;height:0;zIndex:0:z-index;"+"color:#000000;backgroundColor::background-color;border:none;"+"display;visibility:visibility;"+"gray:0;light:none;alpha:1;"+"textBorder:null:text-border;cssFloat::float;whiteSpace::white-space;"+"textIndent:0:text-indent;textAlign:left:text-align;lineHeight:0:line-height;lineSpacing:0:line-spacing;"+"letterSpacing:0:letter-spacing;verticalAlign:top:vertical-align;"+"pageWidth:0:page-width;minHeight:0:min-height;minWidth:0:min-width;maxHeight:100000000:max-height;maxWidth:1000000000:max-width;flip:none;sound;"+"transformOrigin:none:transform-origin;"+"scaleFullParent::scale-full-parent;padding;margin;",CSSStyle);}

		]);
		CSSStyle.__init$__=function(){
			;;;
			iflash.laya.utils.regXmlAttr(CSSStyle,"font(s s s s)","setFont");
			iflash.laya.utils.regXmlAttr(CSSStyle,"font(s s s s)","setFont");
			iflash.laya.utils.regXmlAttr(CSSStyle,"font-size","fontSize",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"font-weight","fontWeight");
			iflash.laya.utils.regXmlAttr(CSSStyle,"font-family","family",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"overflow-x","overflowX",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"overflow-y","overflowY",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"step-x","stepX",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"step-y","stepY",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"padding-left=i","paddingLeft",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"padding-top=i","paddingTop",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"padding-bottom=i","paddingBottom",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"padding-right=i","paddingRight",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"margin-left=i","marginLeft",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"margin-top=i","marginTop",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"margin-bottom=i","marginBottom",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"margin-right=i","marginRight",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"text-decoration","textDecoration",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"text-border","textBorder",true);
			iflash.laya.utils.regXmlAttr(CSSStyle,"globalcompositeoperation","globalCompositeOperation",true);
			iflash.laya.utils.regXmlAttr(CSSStyle,"filter(d d d)","setLight",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"background-image(s s)","setBackgroundImage",false);
			iflash.laya.utils.regXmlAttr(CSSStyle,"animation(s t s t I)");
			iflash.laya.utils.regXmlAttr(CSSStyle,"scale(d d)");
			iflash.laya.utils.regXmlAttr(CSSStyle,"scalex=d","scaleX");
			iflash.laya.utils.regXmlAttr(CSSStyle,"scaley=d","scaleY");
			iflash.laya.utils.regXmlAttr(CSSStyle,"scalexy(d)");
			iflash.laya.utils.regXmlAttr(CSSStyle,"transform-origin=s","transformOrigin");
		}

		return CSSStyle;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/filter.as=======10199.999824
	var Filter=iflash.laya.css.Filter=(function(){
		function Filter(style){
			this.light=null;
			this.gray=null;
			this.alpha=null;
			this.key=0;
			Laya.RENDERBYCANVAS && UseFilter1.insertUnit(style.node);
			this.alpha=1;
			this.light=null;
			this.gray=0;
			this.key=0;
		}

		REGCLASS$(Filter,'iflash.laya.css.Filter',true,true);
		var __proto__=Filter.prototype;
		__proto__.check=function(){
			this.key=(this.light !=null || this.gray !=0)?(Filter.__LASTKEY__++):0;
		}

		Filter.__LASTKEY__=1;
		return Filter;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/font.as=======10199.999823
	var Font=iflash.laya.css.Font=(function(){
		function Font(css,src){
			this._fontName="Arial";
			this._type_=0;
			this.textDecorationColor=null;
			this.size=12;
			this.color=null;
			this.textBorder=null;
			this.text=null;
			this.exdata=null;
			this.cssStyle=null;
			this._embedFonts=false;
			this._type_=0;
			this.cssStyle=css;
			this.color=Color.__DEFAULT__;
			this.exdata=FontExData.__DEFAULT_?FontExData.__DEFAULT_:new FontExData(this);
			src && this._copyWith_(src);
		}

		REGCLASS$(Font,'iflash.laya.css.Font',true,true);
		var __proto__=Font.prototype;
		__proto__._onFontSetEnd_=function(){
			if (Font.__fontsetref__ > 0 || !this._checkType_(0x40000000))return;
			if (this._checkType_(0x10000000)&& this._checkType_(0x20000000))
				this.cssStyle.node._onModifyText_(true);
			else{
				if (this._checkType_(0x20000000))this.cssStyle.node._onModifyText_(false);
				if (this._checkType_(0x10000000))this.cssStyle.node._checkNeedTypeset(true);
			}
			if (this._checkType_(0x8000000))this.cssStyle._sendfont_(false);
			this._removeType_(0x8000000 | 0x10000000 | 0x20000000|0x40000000);
		}

		__proto__.create=function(css,inheritFont){
			return (this.cssStyle==css)?this._copyWith_(inheritFont):(css._font_=new Font(css,inheritFont==null?this:inheritFont));
		}

		__proto__._copyWith_=function(srcfont){
			if (srcfont==null || srcfont==this)return this;
			Font.__fontsetref__++;
			this.text=null;
			(!this._checkType_(0x10))&& (this.size=srcfont.size);
			(!this._checkType_(0x8))&& (this.color=srcfont.color);
			(!this._checkType_(0x2))&& (this._fontName=srcfont._fontName);
			(!this._checkType_(0x4))&& (this.textBorder=srcfont.textBorder);
			if (!this._checkType_(0x200)){
				(srcfont._checkType_(0x40000))&& (this._type_ |=0x40000);
				(srcfont._checkType_(0x80000))&& (this._type_ |=0x80000);
			}
			if (!this._checkType_(0x20)){
				(srcfont._checkType_(0x100000))&& (this._type_ |=0x100000);
				(srcfont._checkType_(0x200000))&& (this._type_ |=0x200000);
				(srcfont._checkType_(0x400000))&& (this._type_ |=0x400000);
				(srcfont.textDecorationColor!=null)&& (this.textDecorationColor=srcfont.textDecorationColor);
			}
			if (!this._checkType_(0x1)){
				(srcfont._checkType_(0x2000000))&& (this._type_ |=0x2000000);
				(srcfont._checkType_(0x4000000))&& (this._type_ |=0x4000000);
			}
			if (srcfont.exdata==FontExData.__DEFAULT_){
				Font.__fontsetref__--;
				this._type_ |=0x8000000|0x40000000;
				this._onFontSetEnd_();
				return this;
			}
			if (this.exdata==FontExData.__DEFAULT_){
				this.exdata=srcfont.exdata;
				Font.__fontsetref__--;
				this._type_ |=0x8000000|0x40000000;
				this._onFontSetEnd_();
				return this;
			}
			this._createExData_();
			var srcexdata=srcfont.exdata;
			(!this._checkType_(0x80))&& (this.exdata.weight=srcexdata.weight);
			(!this._checkType_(0x40))&& (this.exdata.variant=srcexdata.variant);
			(!this._checkType_(0x8000))&& (this.exdata.lineHeight=srcexdata.lineHeight);
			(!this._checkType_(0x400))&& (this.exdata.lineSpacing=srcexdata.lineSpacing);
			(!this._checkType_(0x1000))&& (this.exdata.letterSpacing=srcexdata.letterSpacing);
			(!this._checkType_(0x100))&& (this.exdata.textIndent=srcexdata.textIndent);
			Font.__fontsetref__--;
			this._type_ |=0x8000000|0x40000000;
			this._onFontSetEnd_();
			return this;
		}

		__proto__._checkType_=function(d){
			return (this._type_ & d)!=0;
		}

		__proto__._removeType_=function(d){
			this._type_ &=(~d);
		}

		__proto__.setLetterSpacing=function(d){
			if (this.exdata.letterSpacing==d)return;
			this._type_ |=0x1000 |0x10000000|0x40000000;
			this._createExData_().letterSpacing=d;
			this._onFontSetEnd_();
		}

		__proto__.setTextIndent=function(d){
			if (this.exdata.textIndent==d)return;
			this._type_ |=0x100 | 0x10000000|0x40000000;
			this._createExData_().textIndent=d;
			this._onFontSetEnd_();
		}

		__proto__.getPassword=function(){
			return this._checkType_(0x10000);
		}

		__proto__.setPassword=function(b){
			if (b)this._type_ |=0x10000;
			else this._removeType_(0x10000);
			this._createExData_();
			this._type_ |=0x8000000 | 0x20000000 | 0x10000000|0x40000000;
			this._onFontSetEnd_();
		}

		__proto__.setLineSpacing=function(d){
			if (this.exdata.lineSpacing==d)return;
			this._type_ |=0x1000|0x40000000;
			this._createExData_().lineSpacing=d;
			this._type_ |=0x10000000;
			this._onFontSetEnd_();
		}

		__proto__.setLineHeight=function(d){
			if (this.exdata.lineHeight==d)return;
			this._type_ |=0x8000;
			this._createExData_().lineHeight=d;
			this._type_ |=0x10000000;
		}

		__proto__.setFontSize=function(d){
			if (this.size==d)return;
			this._type_ |=0x10;
			this.size=d;
			this.text=null;
			this._type_ |=0x8000000 | 0x20000000 | 0x10000000|0x40000000;
			this._onFontSetEnd_();
		}

		__proto__.getFontSize=function(){
			return this.size;
		}

		__proto__.setTextAlign=function(s){
			var preType=this._type_;
			this._type_ |=0x200;
			this._removeType_(0x40000|0x80000);
			switch(s){
				case 'center':
					this._type_ |=0x40000;
					break ;
				case 'right':
					this._type_ |=0x80000;
					break ;
				}
			if (preType==this._type_)return;
			this._type_ |=0x10000000|0x40000000;
			this._onFontSetEnd_();
		}

		__proto__.getTextAlign=function(){
			if (this._checkType_(0x40000))return 'center';
			if (this._checkType_(0x80000))return 'right';
			return "left";
		}

		__proto__.getTextAligni=function(){
			if (this._checkType_(0x40000))return 0x40000;
			if (this._checkType_(0x80000))return 0x80000;
			return 0;
		}

		__proto__.setWhiteSpace=function(type){
			var preType=this._type_;
			this._type_ |=0x2000;
			switch(type){
				case "nowrap":
					this._type_ |=0x800000;break ;
				case "none":
					this._type_&=~0x800000;break ;
				}
			if (preType==this._type_)return;
			this._type_ |=0x10000000|0x40000000;
			this._onFontSetEnd_();
		}

		__proto__.getWhiteSpace=function(){
			return this._checkType_(0x800000)? "nowrap" :"";
		}

		__proto__.isWhiteSpace=function(){
			return this._checkType_(0x800000);
		}

		__proto__.setWeight=function(w){
			this._type_ |=0x80;
			var i=0;
			switch(w){
				case 'normal':break ;
				case 'bold':i=700;break ;
				case 'bolder':i=800;break ;
				case 'lighter':i=100;break ;
				default :i=LAYABOX.parseInt(w);
				}
			if (this.exdata.weight==i)return;
			this._createExData_().weight=i;
			this._type_ |=0x8000000 | 0x20000000 | 0x10000000|0x40000000;
			this._onFontSetEnd_();
		}

		__proto__.getTextDecorationi=function(){
			if (this._checkType_(0x100000))return 0x100000;
			if (this._checkType_(0x200000))return 0x200000;
			if (this._checkType_(0x400000))return 0x400000;
			return 0;
		}

		__proto__.setTextDecoration=function(type,color){
			var preType=this._type_;
			this._type_ |=0x20;
			this._removeType_(0x100000|0x200000|0x400000);
			switch(type){
				case 'underline':
				case '_':
					this._type_ |=0x100000;
					break ;
				case 'line-through':
				case '-':
					this._type_ |=0x200000;
					break ;
				case 'overline':
					this._type_ |=0x400000;
					break ;
				}
			if (color !=null && color !='')this.textDecorationColor=new Color(color);
			if (preType==this._type_)return;
			this._type_ |=0x8000000 | 0x20000000|0x40000000;
			this._onFontSetEnd_();
		}

		__proto__.setTextBorder=function(def){
			if (def=='none' || def==''){
				this._removeType_(0x4);
				this.textBorder=null;
				return;
			}
			this._type_ |=0x4;
			var strs=def.split(' ');
			this.textBorder=new TextBorder();
			switch (strs.length){
				case 1:this.textBorder.color=new Color(strs[0]);break ;
				case 2:this.textBorder.size=LAYABOX.parseInt(strs[0]);this.textBorder.color=new Color(strs[1]);break ;
				case 3:this.textBorder.size=LAYABOX.parseInt(strs[0]);this.textBorder.color=new Color(strs[2]);break ;
				}
			this.text=null;
			this._type_ |=0x8000000 | 0x20000000 | 0x10000000|0x40000000;
			this._onFontSetEnd_();
		}

		__proto__.getTextBorder=function(){
			if (this.textBorder==null)return null;
			return (this.textBorder.size==1?'':(this.textBorder.size+' '))+this.textBorder.color.toString();
		}

		__proto__.setColor=function(s){
			var c=new Color(s);
			if (c.text==this.color.text&&this._checkType_(0x8))return;
			this.color=c;
			this._type_ |=0x8;
			this.cssStyle.node._modle_.color(this.color.text);
			this._type_ |=0x8000000 | 0x20000000|0x40000000;
			this._onFontSetEnd_();
		}

		__proto__.setFont=function(style,weight,size_lineHeigt,family){
			Font.__fontsetref__++;
			this.fontStyle=style;
			if (weight !=null)weight=weight;
			if (size_lineHeigt !=null){
				var sz=size_lineHeigt.split('/');
				if (sz[0] !=null)this.setFontSize(LAYABOX.parseInt(sz[0]));
				if (sz[1] !=null)this.setLineHeight(LAYABOX.parseInt(sz[1]));
			}
			if (family !=null)this.fontName=family;
			this.text=null;
			this._type_ |=0x8000000|0x40000000;
			Font.__fontsetref__--;
			this._onFontSetEnd_();
		}

		__proto__._createExData_=function(){
			if (this.exdata._cssfont_==this)return this.exdata;
			return this.exdata=new FontExData(this);
		}

		__proto__._toText_=function(){
			if (this.text !=null)return this.text;
			var fName=this._fontName+"";
			this.text=this.fontStyle+' '+(this.exdata.weight !=0?(this.exdata.weight+" "):"100 ")+this.size+"px "+(fName?fName:"");
			if (!Laya.HTMLVER){
				if (this.textBorder !=null){
					this.text+=' '+this.textBorder.size+' '+this.textBorder.color.toString();
				}
			}
			return this.text;
		}

		DEFUNENUMPTY$(__proto__,'_$get_fontType',function(){
			Log.unfinished("Font","fontType")
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontType',function(value){
			Log.unfinished("Font","fontType")
		});

		Object.defineProperty(__proto__,'fontType',{get:__proto__._$get_fontType,set:__proto__._$set_fontType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontStyle',function(){
			if (this._checkType_(0x2000000))return 'italic';
			if (this._checkType_(0x4000000))return 'oblique';
			return "normal";
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontStyle',function(s){
			var preType=this._type_;
			this._type_ |=0x1;
			this._removeType_(0x2000000|0x4000000);
			switch(s){
				case 'italic':
					this._type_ |=0x2000000;
					break ;
				case 'oblique':
					this._type_ |=0x4000000;
					break ;
				}
			if (preType==this._type_)return;
			this._type_ |=0x8000000 | 0x20000000 | 0x10000000|0x40000000;
			this._onFontSetEnd_();
		});

		Object.defineProperty(__proto__,'fontStyle',{get:__proto__._$get_fontStyle,set:__proto__._$set_fontStyle,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_embedFonts',function(){
			return this._embedFonts;
		});

		DEFUNENUMPTY$(__proto__,'_$set_embedFonts',function(value){
			this._embedFonts=value;
		});

		Object.defineProperty(__proto__,'embedFonts',{get:__proto__._$get_embedFonts,set:__proto__._$set_embedFonts,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontName',function(){
			return this._fontName;
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontName',function(name){
			this._type_ |=0x2;
			if (name==this._fontName)return;
			this._fontName=name;
			this.text=null;
			this._type_ |=0x8000000 | 0x20000000 | 0x10000000|0x40000000;
			this._onFontSetEnd_();
		});

		Object.defineProperty(__proto__,'fontName',{get:__proto__._$get_fontName,set:__proto__._$set_fontName,enumerable:false});
		Font.enumerateFonts=function(enumerateDeviceFonts){
			(enumerateDeviceFonts===void 0)&& (enumerateDeviceFonts=false);
			Log.unfinished("Font","enumerateFonts")
			return null;
		}

		Font.__FONTIDMAP__=[];
		Font.__FONTMAXID__=1;
		Font.__fontsetref__=0;
		Font.SET_STYLE=0x1;
		Font.SET_FAMILY=0x2;
		Font.SET_TEXTBORDER=0x4;
		Font.SET_COLOR=0x8;
		Font.SET_SIZE=0x10;
		Font.SET_TEXTDECORATION=0x20;
		Font.SET_VARIANT=0x40;
		Font.SET_WEIGHT=0x80;
		Font.SET_TEXTINDENT=0x100;
		Font.SET_TEXTALIGN=0x200;
		Font.SET_LINESPACING=0x400;
		Font.SET_WORDSPACING=0x800;
		Font.SET_LETTERSPACING=0x1000;
		Font.SET_WHITESPACE=0x2000;
		Font.SET_IMGIDSPRE=0x4000;
		Font.SET_LINEHEIGHT=0x8000;
		Font.SET_PASSWORD=0x10000;
		Font.TEXT_ALIGN_LEFT=0x20000;
		Font.TEXT_ALIGN_CENTER=0x40000;
		Font.TEXT_ALIGN_RIGHT=0x80000;
		Font.DECORATION_UNDERLINE=0x100000;
		Font.DECORATION_LINE_THROUGH=0x200000;
		Font.DECORATION_OVERLINE=0x400000;
		Font.WHITE_SPACE_NOWARP=0x800000;
		Font.STYLE_NORMAL=0x1000000;
		Font.STYLE_ITALIC=0x2000000;
		Font.STYLE_OBLIQUE=0x4000000;
		Font.STYLE_FONTTOMODEL=0x8000000;
		Font.STYLE_TYPESET=0x10000000;
		Font.STYLE_RESETTEXT=0x20000000;
		Font.STYLE_FONTCHG=0x40000000;
		REGSTATICATTR$(Font,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Font(null);
		}

		]);
		return Font;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/fontexdata.as=======10199.999822
	var FontExData=iflash.laya.css.FontExData=(function(){
		function FontExData(cssfont){
			this._cssfont_=null;
			this.variant=0;
			this.weight=0;
			this.textIndent=0;
			this.lineSpacing=0;
			this.wordSpacing=0;
			this.letterSpacing=0;
			this.whiteSpace=0;
			this.lineHeight=0;
			this._cssfont_=cssfont;
		}

		REGCLASS$(FontExData,'iflash.laya.css.FontExData',true,true);
		REGSTATICATTR$(FontExData,
		['__DEFAULT_',function(){return this.__DEFAULT_=new FontExData(null);}
		]);
		return FontExData;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/padding.as=======10199.999820
	var Padding=iflash.laya.css.Padding=(function(){
		function Padding(){
			this.left=0;
			this.top=0;
			this.right=0;
			this.bottom=0;
			this.width=0;
			this.height=0;
		}

		REGCLASS$(Padding,'iflash.laya.css.Padding',true,false);
		var __proto__=Padding.prototype;
		__proto__.check=function(style){
			(style._styleex_==StyleEx.__DEFAULT__)&& (style._styleex_=new StyleEx());
			return (style._styleex_.padding==iflash.laya.css.Padding.__DEFAULT__)?
			(style._styleex_.padding=new Padding()):
			(style._styleex_.padding);
		}

		__proto__.toModel=function(style){
			style.node._modle_.padding(this.left,this.top,this.right,this.bottom);
		}

		__proto__.setData2=function(style,top,right,bottom,left){
			if (this.check(style)!=this)return this.check(style).setData2(style,top,right,bottom,left);
			(!isNaN(top))&& (this.top=top);
			(!isNaN(right))&& (this.right=right);
			(!isNaN(bottom))&& (this.bottom=bottom);
			(!isNaN(left))&& (this.left=left);
			this.width=this.left+this.right;
			this.height=this.top+this.bottom;
			this.toModel(style);
			return true;
		}

		__proto__.setData=function(style,top,right,bottom,left){
			if (arguments.length==2)
				right=bottom=left=top;
			this.setData2(style,top,right,bottom,left);
		}

		__proto__.toString=function(){
			if (this.width==0 && this.height==0)return "";
			return ""+this.top+" "+this.right+" "+this.bottom+" "+this.left;
		}

		REGSTATICATTR$(Padding,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Padding();}
		]);
		return Padding;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/maxminsize.as=======10199.999819
	var MaxMinSize=iflash.laya.css.MaxMinSize=(function(){
		function MaxMinSize(){
			this.maxSize=null;
			this.minSize=null;
			this.maxSize=new Point(1000000000,100000000);
			this.minSize=new Point(0,0);
		}

		REGCLASS$(MaxMinSize,'iflash.laya.css.MaxMinSize',true,true);
		REGSTATICATTR$(MaxMinSize,
		['__DEFAULT_',function(){return this.__DEFAULT_=new MaxMinSize();}
		]);
		return MaxMinSize;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/rgba.as=======10199.999818
	var Rgba=iflash.laya.css.Rgba=(function(){
		function Rgba(_r,_g,_b){
			this.r=null;
			this.g=null;
			this.b=null;
			this.r=_r;
			this.g=_g;
			this.b=_b;
		}

		REGCLASS$(Rgba,'iflash.laya.css.Rgba',true,true);
		return Rgba;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/styleex.as=======10199.999817
	var StyleEx=iflash.laya.css.StyleEx=(function(){
		function StyleEx(){
			this.background=null;
			this.border=null;
			this.padding=null;
			this.maxMinSize=null;
			this.padding=Padding.__DEFAULT__;
			this.maxMinSize=MaxMinSize.__DEFAULT_;
			this.background=null;
			this.border=null;
		}

		REGCLASS$(StyleEx,'iflash.laya.css.StyleEx',true,true);
		var __proto__=StyleEx.prototype;
		__proto__.createkMaxMin=function(style){
			(this==StyleEx.__DEFAULT__)&& (style._styleex_=new StyleEx());
			return (style._styleex_.maxMinSize==MaxMinSize.__DEFAULT_)?((style._styleex_.maxMinSize=new MaxMinSize())):style._styleex_.maxMinSize;
		}

		REGSTATICATTR$(StyleEx,
		['__DEFAULT__',function(){return this.__DEFAULT__=new StyleEx();}
		]);
		return StyleEx;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/textborder.as=======10199.999816
	var TextBorder=iflash.laya.css.TextBorder=(function(){
		function TextBorder(){
			this.color=null;
			this.size=0;
			this.size=1;
		}

		REGCLASS$(TextBorder,'iflash.laya.css.TextBorder',true,true);
		return TextBorder;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/transform.as=======10199.999815
	var Transform1=iflash.laya.css.Transform=(function(){
		function Transform(style){
			this.scale=null;
			this.rotate=null;
			this.translate=null;
			this._matrix_=null;
			this._colorTransform_=null;
			this._type_=0;
			this._style_=null;
			this._style_=style;
			this._matrix_=null;
			this.rotate=this._type_=0;
			this.scale=Transform._DEFAULTPOINT_;
			this.translate=Translate.__DEFAULT__;
			Laya.RENDERBYCANVAS && style && DrawTransform1.insertUnit(style.node);
		}

		REGCLASS$(Transform,'iflash.laya.css.Transform',true,true,null,'Transform1');
		var __proto__=Transform.prototype;
		__proto__.setScale=function(style,x,y){
			if (this.scale==Transform._DEFAULTPOINT_)this.scale=new Point(x,y);
			else {
				this.scale.x=x;
				this.scale.y=y;
			}
			style.node._modle_.scale2dEx(x,y);
			this._type_ |=0x1000000;
			(x==1 && y==1)&& this._checkuse_();
		}

		__proto__.setRotate=function(style,r){
			this.rotate=r;
			this._type_ |=0x1000000;
			(r==0)&& this._checkuse_();
		}

		__proto__.setFlip=function(style,f){
			this.removeType(0x10 | 0x100 | 0x1000 | 0x10000);
			if ((f & 1)==10)this._type_ |=0x10;
			else if ((f & 20)==20)this._type_ |=0x100;
			if ((f & 1)==1)this._type_ |=0x1000;
			else if ((f & 2)==2)this._type_ |=0x10000;
		}

		__proto__.removeType=function(type){
			((this._type_ & type)==type)&&(this._type_ &=~ type);
		}

		__proto__._checkuse_=function(){
			(this.scale.x==1 && this.scale.y==1 && this.rotate==0 && (this._type_ & 0x1)==0 && (this._matrix_==null))?
			(this.removeType(0x1000000)):
			(this._type_ |=0x1000000);
		}

		__proto__.isFlip=function(){
			return (this._type_ & 0x1)!=0;
		}

		__proto__.toFlipString=function(){
			return !this.isFlip()?"none":(""+this.getFlipX()+this.getFlipY());
		}

		__proto__.getFlipX=function(){
			if ((this._type_ & 0x10)!=0)return 1;
			if ((this._type_ & 0x100)!=0)return 2;
			return 0;
		}

		__proto__.getFlipY=function(){
			if ((this._type_ & 0x1000)!=0)return 1;
			if ((this._type_ & 0x10000)!=0)return 2;
			return 0;
		}

		DEFUNENUMPTY$(__proto__,'_$get_matrix',function(){
			return this._matrix_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_matrix',function(m){
			this._matrix_=m;
			this._style_.node._modle_.matrix(m.a,m.b,m.c,m.d,m.tx,m.ty);
			this._type_ |=0x1000000;
		});

		Object.defineProperty(__proto__,'matrix',{get:__proto__._$get_matrix,set:__proto__._$set_matrix,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_colorTransform',function(){
			return this._colorTransform_ || (this._colorTransform_=new ColorTransform());
		});

		DEFUNENUMPTY$(__proto__,'_$set_colorTransform',function(value){
			this._colorTransform_=value;
		});

		Object.defineProperty(__proto__,'colorTransform',{get:__proto__._$get_colorTransform,set:__proto__._$set_colorTransform,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_concatenatedMatrix',function(){
			Log.unfinished("Transform","concatenatedMatrix")
			return null;
		});

		Object.defineProperty(__proto__,'concatenatedMatrix',{get:__proto__._$get_concatenatedMatrix,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_transformUse',function(){
			return (this._type_ & 0x1000000)!=0;
		});

		Object.defineProperty(__proto__,'transformUse',{get:__proto__._$get_transformUse,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_perspectiveProjection',function(){
			Log.unfinished("Transform","perspectiveProjection");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_perspectiveProjection',function(pm){
			Log.unfinished("Transform","perspectiveProjection");
		});

		Object.defineProperty(__proto__,'perspectiveProjection',{get:__proto__._$get_perspectiveProjection,set:__proto__._$set_perspectiveProjection,enumerable:false});
		Transform.TRANSFORM_FLIP=0x1;
		Transform.TRANSFORM_FLIPX1=0x10;
		Transform.TRANSFORM_FLIPX2=0x100;
		Transform.TRANSFORM_FLIPY1=0x1000;
		Transform.TRANSFORM_FLIPY2=0x10000;
		Transform.TRANSFORM_USE=0x1000000;
		REGSTATICATTR$(Transform,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Transform(null);
			},'_DEFAULTPOINT_',function(){return this._DEFAULTPOINT_=new Point(1,1);
		}

		]);
		return Transform;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/translate.as=======10199.999814
	var Translate=iflash.laya.css.Translate=(function(){
		function Translate(style,tx,ty){
			this.x=null;
			this.y=null;
			this.typeX=0;
			this.typeY=0;
			this.x=this.y=0;
			this.typeX=tx;
			this.typeY=ty;
			(style && (this.typeX!=0 || this.typeY!=0))&& style.node._modle_.setOrigin(0,0,tx,ty);
		}

		REGCLASS$(Translate,'iflash.laya.css.Translate',true,true);
		var __proto__=Translate.prototype;
		__proto__.setOrigin=function(style,s){
			if (s=='none' || s=="left top"){
				if (this.typeX==0 && this.typeY==0 && this.x==0 && this.y==0)return;
				this.typeX=this.typeY=0;
				this.x=this.y=0;
				style.node._modle_.setOrigin(0,0,0,0);
				return;
			};
			var d=s.split(" ");
			if (d.length < 2){
				trace("set_transform_origin 参数不足2个 param = "+s);
				return;
			}
			switch(d[0]){
				case 'left':this.typeX=0;break ;
				case 'center':this.typeX=1;break ;
				case 'right':this.typeX=2;break ;
				default :
					this.typeX=0;
					this.x=parseFloat(d[0]);
				}
			switch(d[1]){
				case 'top':this.typeY=0;break ;
				case 'center':this.typeY=1;break ;
				case 'bottom':this.typeY=2;break ;
				default :
					this.typeY=0;
					this.x=parseFloat(d[0]);
				}
			style.node._modle_.setOrigin(this.x,this.y,this.typeX,this.typeY);
		}

		__proto__.getOrigin=function(){
			if (this.typeX==0 && this.typeY==0)return "none";
			var str;
			switch(this.typeX){
				case 0:str+="left ";break ;
				case 1:str+="center ";break ;
				case 2:str+="right ";break ;
				}
			switch(this.typeY){
				case 0:str+="top";break ;
				case 1:str+="center";break ;
				case 2:str+="bottom";break ;
				}
			return str;
		}

		__proto__.calculate=function(style){
			if (this.typeX <1 && this.typeY <1)return;
			if (this.typeX !=0){
				switch(this.typeX){
					case 1:this.x=style._width_ / 2;break ;
					case 2:this.x=style._width_;
					}
			}
			if (this.typeY !=0){
				switch(this.typeY){
					case 1:this.y=style._height_ / 2;break ;
					case 2:this.y=style._height_;
					}
			}
		}

		Translate.__ID__=1;
		REGSTATICATTR$(Translate,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Translate(null,0,0);
		}

		]);
		return Translate;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/bitmapdatacontent.as=======10199.999813
	var BitmapdataContent=iflash.laya.display.BitmapdataContent=(function(){
		function BitmapdataContent(){
			this.data=null;
			this.type=0;
			this.left=0;
			this.top=0;
			this.width=0;
			this.height=0;
		}

		REGCLASS$(BitmapdataContent,'iflash.laya.display.BitmapdataContent',true,true);
		var __proto__=BitmapdataContent.prototype;
		__proto__.setImage=function(data){
			this.type=2;
			this.data=data;
			this.width=data.width;
			this.height=data.height;
		}

		__proto__.setCanvas=function(data){
			this.type=1;
			this.data=data;
			this.width=data.width;
			this.height=data.height;
		}

		__proto__.rect=function(x,y,w,h){
			this.left=x;
			this.top=y;
			this.width=w;
			this.height=h;
			if (this.type==2 && Laya.HTMLVER==0){
				this.left=this.top=0;
				this.data.rect(x,y,w,h);
			}
		}

		BitmapdataContent.CANVAS=1;
		BitmapdataContent.IMAGE=2;
		return BitmapdataContent;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/canvas.as=======10199.999812
	var Canvas=iflash.laya.display.Canvas=(function(){
		function Canvas(){
			this.context=null;
			this.context3D=null;
			this.activTime=null;
			this._active_=0;
			this.decX=0;
			this.decY=0;
			this._width_=0;
			this._height_=0;
			this.left=0;
			this.top=0;
			this.style=null;
		}

		REGCLASS$(Canvas,'iflash.laya.display.Canvas',true,true);
		var __proto__=Canvas.prototype;
		__proto__.getContext=function(type,vars){
			switch(type){
				case '2d':
					return this.context;
				case "experimental-webgl":
					return this.context3D;
				}
		}

		__proto__.size=function(w,h){
			if (w !=this._width_ || h !=this._height_){
				this._width_=w;
				this._height_=h;
				this.width=w;
				this.height=h;
				if(this.context){
					this.context.widthMe=w;
					this.context.heightMe=h;
				}
			}
		}

		__proto__.active=function(){
			this.activTime=Laya.window.updateTime;
			if (this._active_ > 0)return true;
			Canvas.enable(this);
			return false;
		}

		__proto__.reset=function(){
			this.context.filter=null;
			this.context.textAlign="left";
			this.context.textBaseline="middle";
		}

		__proto__._getType_=function(){
			return 3;
		}

		__proto__.isReady=function(){
			return true;
		}

		__proto__.getContent=function(){
			return this;
		}

		__proto__.clone=function(){
			var canvas=Canvas.create();
			canvas.context=canvas.getContext("2d");
			canvas.size(this.width,this.height);
			canvas.context.drawImage(this,0,0,this.width,this.height);
			return canvas;
		}

		__proto__.setCanvasType=function(type){
			Log.unfinished("Canvas","setCanvasType")
		}

		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._width_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			if (w !=this._width_)this.size(w,this._height_);
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._height_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			if (h !=this._height_)this.size(this._width_,h);
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		Canvas.getTempCanvas=function(){
			return Canvas._TEMP_=Canvas._TEMP_ || Canvas.create();
		}

		Canvas.create=function(){
			return Browser.document.createElement ('canvas');
		}

		Canvas.__on_new__=function(c){
			if (!c.size){
				c.size=Canvas._DEFAULT_.size;
				c.active=Canvas._DEFAULT_.active;
				c.isReady=Canvas._DEFAULT_.isReady;
				c._getType_=Canvas._DEFAULT_._getType_;
				c.left=Canvas._DEFAULT_.left;
				c.top=Canvas._DEFAULT_.top;
				c.decX=c.decY=0;
				c.getContent=Canvas._DEFAULT_.getContent;
				c.clone=Canvas._DEFAULT_.clone;
			}
			/*__JS__ */if(LAYABOX.ENABLE3D)this.enable3D(c);else this.enable(c);
		}

		Canvas.enableTimeoutRelease=function(c,b){
			if (b)c._active_=c._active_<0?c._active_:1;
			else c._active_=Canvas._DISABLETIMEOUTRELEASE_;
		}

		Canvas.disable=function(c){
			if (c.context){
				c.context.canvas=null;
				c.context=null;
			}
		}

		Canvas.destroy=function(c){
			Canvas.disable(c);
		}

		Canvas.enable=function(c){
			c.context=c.getContext('2d');
			c.context.canvas=c;
		}

		Canvas.enable3D=function(c){
			c.context3D=c.getContext("webgl",{alpha:false,stencil:true})|| c.getContext("experimental-webgl",{alpha:false,stencil:true});
			c.context3D && (c.context3D.canvas=c);
		}

		Canvas._DISABLETIMEOUTRELEASE_=10000;
		Canvas._TEMP_=null
		REGSTATICATTR$(Canvas,
		['_DEFAULT_',function(){return this._DEFAULT_=new Canvas();
		}

		]);
		return Canvas;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/context.as=======10199.999811
	var Context=iflash.laya.display.Context=(function(){
		function Context(){}
		REGCLASS$(Context,'iflash.laya.display.Context',true,true);
		var __proto__=Context.prototype;
		__proto__.getBitMap=function(){
			return null;
		}

		return Context;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/displaymethod.as=======10199.999810
	var DisplayMethod=iflash.laya.display.DisplayMethod=(function(){
		function DisplayMethod(){}
		REGCLASS$(DisplayMethod,'iflash.laya.display.DisplayMethod',true,true);
		DisplayMethod.JpgToPng=function(img){
			var i=0,x=0,y=0,w=0,h=0,imageDataSrc,pixelsSrc,imageDataAlpha,pixelsAlpha,alpha;
			var src=Canvas.create();
			w=img.width;
			h=Math.floor((img.height-1)/ 2);
			src.size(w,h);
			src.context.drawImage(img,0,0,w,h,0,0,w,h);
			imageDataSrc=src.context.getImageData(0,0,w,h);
			pixelsSrc=imageDataSrc.data;
			alpha=Canvas.getTempCanvas();;
			alpha.active();
			alpha.size(w,h);
			alpha.context.drawImage(img,0,h+2,w,h,0,0,w,h);
			imageDataAlpha=alpha.context.getImageData(0,0,w,h);
			pixelsAlpha=imageDataAlpha.data;
			for (y=0;y < h;y++){
				i=(y *w)<< 2;
				x=0;
				while (x < w){
					i+=4;
					x++;
					pixelsSrc[i+3]=pixelsAlpha[i];
				}
			}
			src.context.putImageData(imageDataSrc,0,0);
			return src;
		}

		DisplayMethod.createFilterCanvase=function(ctxt,img){
			var filter=ctxt._filter_,imageData,pixels,fr=1,fg=1,fb=1,c;
			var i=0,x=0,y=0,w=0,h=0,r=0,b=0,g=0,gray;;
			img._filterkey_=filter.key;
			img._filter_img_=Canvas.create();
			c=img._filter_img_;
			w=img.width;
			h=img.height;
			c.size(w,h);
			img.drawImage(c.context,0,0,w,h);
			imageData=c.context.getImageData(0,0,w,h);
			pixels=imageData.data;
			if (filter.light){
				fr=filter.light.r;
				fg=filter.light.g;
				fb=filter.light.b;
			}
			if (filter.gray==-1 || filter.gray<0.01){
				for (y=0;y < h;y++){
					i=(y *w)<< 2;
					x=0;
					while (x < w){
						pixels[i] *=fr;
						pixels[i+1] *=fg;
						pixels[i+2] *=fb;
						i+=4;
						x++;
					}
				}
			}
			else{
				var fgray=filter.gray,fgray0=1-fgray;
				for (y=0;y < h;y++){
					i=(y *w)<< 2;
					x=0;
					while (x < w){
						r=pixels[i];
						g=pixels[i+1];
						b=pixels[i+2];
						gray=(r+g+b)/ 3;
						pixels[i]=(r*fr)*fgray0+gray*fgray;
						pixels[i+1]=(g*fg)*fgray0+gray*fgray;
						pixels[i+2]=(b *fb)*fgray0+gray *fgray;
						i+=4;
						x++;
					}
				}
			}
			c.context.putImageData(imageData,0,0);
			return c;
		}

		return DisplayMethod;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/imodel.as=======10199.999809
	var IModel=iflash.laya.display.IModel=(function(){
		function IModel(n){
			this.jnode=null;
			this.jnode=n;}
		REGCLASS$(IModel,'iflash.laya.display.IModel',true,true);
		var __proto__=IModel.prototype;
		__proto__.setHideText=function(b){}
		__proto__.reset=function(id,jnode){}
		__proto__.pos=function(x,y){}
		__proto__.zIndex=function(d){}
		__proto__.size=function(w,h){}
		__proto__.scale2d=function(x,y){}
		__proto__.scale2dEx=function(x,y){}
		__proto__.rotate2d=function(r){}
		__proto__.bgcolor=function(rgb){}
		__proto__.bgimg=function(_img,repeat){}
		__proto__.position=function(type){}
		__proto__.image=function(img,b){
			(b===void 0)&& (b=false);
		}

		__proto__.bitmapdataContent=function(bitmapdataContent){}
		__proto__.border=function(type){}
		__proto__.font=function(f){}
		__proto__.text=function(txt){}
		__proto__.clip=function(b){}
		__proto__.insert=function(c,index,sz){}
		__proto__.forceInsert=function(c,index){}
		__proto__.forceRemoveAt=function(index){}
		__proto__.flip=function(f){}
		__proto__.padding=function(l,t,r,b){}
		__proto__.margin=function(l,t,r,b){}
		__proto__.scroll=function(x,y){}
		__proto__.alpha=function(a){}
		__proto__.filter=function(r,g,b,gray){}
		__proto__.globalCompositeOperation=function(nType){}
		__proto__.show=function(b){}
		__proto__.destroy=function(){}
		__proto__.destroyAllChild=function(){}
		__proto__.swap=function(frome,to){}
		__proto__.removeAt=function(i,c,sz){}
		__proto__.setOrigin=function(x,y,xtype,ytype){}
		__proto__.color=function(rgb){}
		__proto__.setToCanvas=function(canvas){}
		__proto__.quote=function(m){}
		__proto__.matrix=function(a,b,c,d,tx,ty){}
		__proto__.virtualBitmap=function(virtualBitmap){}
		__proto__.drawImage9=function(img,sx,sy,sw,sh,dx,dy,dw,dh){}
		__proto__.drawImage3=function(img,x,y){}
		__proto__.flashClip=function(x,y,w,h){}
		__proto__.removeClip=function(){}
		REGSTATICATTR$(IModel,
		['__DEFAULT__',function(){return this.__DEFAULT__=new IModel(null);}
		]);
		return IModel;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/vbitmapcmd.as=======10199.999799
	var VBitmapCmd=iflash.laya.display.VBitmapCmd=(function(){
		function VBitmapCmd(f,args){
			this.fun=null;
			this.args=null;
			this.isBase=false;
			this.conMatrix=null;
			this.fun=f;
			this.args=args
		}

		REGCLASS$(VBitmapCmd,'iflash.laya.display.VBitmapCmd',true,true);
		return VBitmapCmd;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/vbitmapimageinfo.as=======10199.999798
	var VBitmapImageInfo=iflash.laya.display.VBitmapImageInfo=(function(){
		function VBitmapImageInfo(img){
			this.image=null;
			this.martix=null;
			this.width=0;
			this.height=0;
			this.image=img;
			this.width=img.width;
			this.height=img.height;
		}

		REGCLASS$(VBitmapImageInfo,'iflash.laya.display.VBitmapImageInfo',true,true);
		var __proto__=VBitmapImageInfo.prototype;
		__proto__.clone=function(){
			var result;
			result=new VBitmapImageInfo(this.image);
			this.martix && (result.martix=this.martix.clone());
			return result;
		}

		return VBitmapImageInfo;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/virtualbitmap.as=======10199.999797
	var VirtualBitmap=iflash.laya.display.VirtualBitmap=(function(){
		function VirtualBitmap(img){
			this._cmd_=null;
			this._paint_=null;
			this._isInitPaint_=false;
			this.imageObj=null;
			this.imageNum=0;
			this.offsetX=null;
			this.offsetY=null;
			this.widthScale=null;
			this.heightScale=null;
			this.width=0;
			this.height=0;
			img&&(this.imageObj=new VBitmapImageInfo(img));
			this._cmd_=new Array();
		}

		REGCLASS$(VirtualBitmap,'iflash.laya.display.VirtualBitmap',true,true);
		var __proto__=VirtualBitmap.prototype;
		__proto__.setImage=function(img){
			this.imageObj=new VBitmapImageInfo(img);
		}

		__proto__.size=function(w,h){
			this.width=w;
			this.height=h;
		}

		__proto__.save=function(){
			this._cmd_.push(new VBitmapCmd("_savePaint_",null));
		}

		__proto__.restore=function(){
			this._cmd_.push(new VBitmapCmd("_restorePaint_",null));
		}

		__proto__.fillRect=function(x,y,w,h){
			this._cmd_.push(new VBitmapCmd("_fillRectPaint_",[x,y,w,h]));
		}

		__proto__.clearRect=function(x,y,w,h){
			if (0==x && 0==y && this.width==w && this.height==h){
				this.imageObj=null;
				this._cmd_.length=0;
			};
			var cmd1;
			var ex=x+w,ey=y+h;
			for (var i=0,sz=this._cmd_.length;i < sz;i++){
				var cmd=this._cmd_[i];
				if (cmd.fun=="_drawImagePaint_" && (cmd1=cmd.args)[5] >=x && cmd1[6] >=y && (cmd1[5]+cmd1[7])<=ex && (cmd1[6]+cmd1[8])<=ey){
					this._cmd_.splice(i,1);
					this._isInitPaint_=true;
					i--;
					this.imageNum--;
					sz--;
				}
			}
			this._isInitPaint_ && this._initPaint_();
		}

		__proto__.isNormal=function(){
			return this.imageObj&&this.imageObj.image && this._cmd_.length==0;
		}

		__proto__.getImage=function(){
			return this.imageObj?this.imageObj.image:null;
		}

		__proto__.drawImage=function(__args){
			var args=arguments;
			var args0=args[0];
			if (args0==null)return;
			if (((args0)instanceof iflash.laya.display.VirtualBitmap )){
				if (args0.isEmpty())return;
				else if (args0.imageObj && args0.cmdLength()==0){
					args[0]=args0.imageObj.clone();
					var imageWidthScale=args0.width /args[0].image.width;
					var imageHeightScale=args0.height / args[0].image.height;
					if (this.widthScale !=1 || this.heightScale !=1){
						args[1]=args[1] / imageWidthScale;
						args[2]=args[2] / imageHeightScale;
						args[3]=args[3] / imageWidthScale;
						args[4]=args[4] / imageHeightScale;
					}
					args[0].martix=this.getMartix.apply(this,args);
					var cmdTemp=new VBitmapCmd("_drawImagePaint_",args);
					cmdTemp.conMatrix=args[0].martix;
					cmdTemp.isBase=true;
					this._cmd_.push(cmdTemp);
				}
				else{
					if (args0.imageNum==1&&args0.cmdLength()==1){
						var cmd0=args0._cmd_[0];
						var temp=cmd0.args;
						if (!cmd0.conMatrix){
							cmd0.conMatrix=this.getMartix.apply(this,temp);
						}
						if (cmd0.conMatrix !=temp[0].martix){
							var martix=cmd0.conMatrix;
							args[1]=(args[1]-martix.tx)/ martix.a;
							args[2]=(args[2]-martix.ty)/ martix.d;
							args[3]=args[3] / martix.a;
							args[4]=args[4] / martix.d;
						}
						args.martix=temp[0].martix;
						args[0]=temp[0];
						this._cmd_.push(new VBitmapCmd("_drawImagePaint_",args));
					}
					else{
						Log.log("");
					}
				}
			}
			else{
				this._cmd_.push(new VBitmapCmd("drawCanvas",args));
			}
			this.imageNum++;
			this._isInitPaint_ && this._initPaint_();
		}

		__proto__.clone=function(){
			var result=Browser.document.createElement ("virtualBitmap");
			result.imageObj=this.imageObj;
			for (var i=0,n=this._cmd_.length;i < n;i++){
				result._cmd_.push(this._cmd_[i]);
			}
			result.width=this.width;
			result.height=this.height;
			result.imageNum=this.imageNum;
			result._isInitPaint_=this._isInitPaint_;
			return result;
		}

		__proto__.changeImage=function(image){
			if (this.imageObj){
				this.imageObj.image=image;
			}
			else if (this.imageNum==1 && this._cmd_.length==1){
				var arr=this._cmd_[0].args;
				arr[0].image=image;
				arr[1]=arr[2]=0;
				arr[3]=image.width;
				arr[4]=image.height;
				var martix=this.getMartix.apply(this,this._cmd_[0].args);
				arr[0].martix && arr[0].martix.copy(martix);
			}
			else{
				Log.log("");
			}
		}

		__proto__.paint=function(ctx,x,y,w,h){
			if(this.isEmpty())return;
			(!this._isInitPaint_)&& this._initPaint_();
			this._paint_&&this._initRect_(x,y,w,h)&&this._paint_.call(this,ctx);
		}

		__proto__._savePaint_=function(context,arg){
			context.save();
		}

		__proto__._translate_=function(context,arg){
			context.translate(arg[0],arg[1]);
		}

		__proto__._scale_=function(context,arg){
			context.scale(arg[0],arg[1]);
		}

		__proto__.translate=function(x,y){
			this._cmd_.push(new VBitmapCmd("_translate_",[x,y]));
		}

		__proto__.scale=function(x,y){
			this._cmd_.push(new VBitmapCmd("_scale_",[x,y]));
		}

		__proto__._restorePaint_=function(context,arg){
			context.restore();
		}

		__proto__._fillStylePaint__=function(context,arg){
			context.fillStyle=arg[0];
		}

		__proto__._fillRectPaint_=function(context,arg){
			context.fillRect(arg[0]+this.offsetX,arg[1]+this.offsetY,arg[2],arg[3]);
		}

		__proto__._clearRectEx_=function(context,arg){
			context.clearRect(arg[0]+this.offsetX,arg[1]+this.offsetY,arg[2],arg[3]);
		}

		__proto__._repaint_=function(){}
		__proto__._initPaint_=function(){
			this._isInitPaint_=true;
			if (this.imageObj){
				switch (this._cmd_.length){
					case 0:this._paint_=iflash.method.bind(this,this.paintNormal);break ;
					case 1:
						this._paint_=iflash.method.bind(this,this.paintImageOne);
						break ;
					default :
						this._paint_=iflash.method.bind(this,this.paintImageMore);
					}
			}
			else{
				if (this._cmd_.length==0)
					return;
				else if (this._cmd_.length==1&&this.imageNum==1){
					this._paint_=iflash.method.bind(this,this.paintNoImageOne);
				}
				else{
					this._paint_=iflash.method.bind(this,this.paintMore);
				}
			}
		}

		__proto__.paintNormal=function(context){
			if(this.imageObj.width>0)
				context.drawImage(this.imageObj.image,0,0,this.imageObj.width,this.imageObj.height,this.offsetX,this.offsetY,this.width *this.widthScale,this.height *this.heightScale);
			else context.drawImage(this.imageObj.image,0,0,this.imageObj.image.width,this.imageObj.image.height,this.offsetX,this.offsetY,this.width *this.widthScale,this.height *this.heightScale);
		}

		__proto__.paintNoImageOne=function(context){
			var temp=this._cmd_[0];
			this[temp.fun].call(this,context,temp.args);
		}

		__proto__.paintImageOne=function(context){
			context.drawImage(this.imageObj.image,0,0,this.width,this.height,this.offsetX,this.offsetY,this.width,this.height);
			var args=this._cmd_[0];
			this[args.fun].call(this,context,args.args);
		}

		__proto__.paintImageMore=function(context){
			context.drawImage(this.imageObj.image,0,0,this.width,this.height,this.offsetX,this.offsetY,this.width,this.height);
			this.paintMore(context);
		}

		__proto__.paintMore=function(context){
			var acmd;
			for(var i=0,sz=this._cmd_.length;i<sz;i++){
				acmd=this._cmd_[i];
				this[acmd.fun].call(this,context,acmd.args);
			}
		}

		__proto__.getMartix=function(pre,sx,sy,sw,sh,dx,dy,dw,dh){
			var result=new Matrix();
			result.a=dw /sw;
			result.d=dh /sh;
			result.tx=dx-sx *result.a;
			result.ty=dy-sy *result.d;
			return result;
		}

		__proto__.isEmpty=function(){
			return this.imageObj==null&&this._cmd_.length==0;
		}

		__proto__.isComplicated=function(){
			return (this._cmd_.length > 1 || (this._cmd_.length==1 && this.imageObj && this.imageObj.image));
		}

		__proto__.cmdLength=function(){
			return this._cmd_.length;
		}

		__proto__.drawCanvas=function(context,args){
			args[0] && context.drawImage.call(context,args[0],args[1],args[2],args[3],args[4],args[5]+this.offsetX,args[6]+this.offsetY,args[7],args[8]);
		}

		__proto__._drawImagePaint_=function(context,args){
			var martix=args.martix;
			if (martix){
				args[0].image && context.drawImage.call(context,args[0].image,
				(args[1]-martix.tx)/martix.a,
				(args[2]-martix.ty)/martix.d,
				args[3] / martix.a,
				args[4] / martix.d,
				args[5]*this.widthScale+this.offsetX,args[6]*this.heightScale+this.offsetY,args[7]*this.widthScale,args[8]*this.heightScale);
			}
			else{
				args[0].image && context.drawImage.call(context,args[0].image,args[1],args[2],args[3],args[4],args[5]*this.widthScale+this.offsetX,args[6]*this.heightScale+this.offsetY,args[7]*this.widthScale,args[8]*this.heightScale);
			}
		}

		__proto__._initRect_=function(x,y,w,h){
			this.offsetX=x;
			this.offsetY=y;
			this.widthScale=w / this.width;
			this.heightScale=h / this.height;
			return true;
		}

		DEFUNENUMPTY$(__proto__,'_$set_fillStyle',function(s){
			this._cmd_.push(new VBitmapCmd("_fillStylePaint__",[s]));
		});

		Object.defineProperty(__proto__,'fillStyle',{set:__proto__._$set_fillStyle,enumerable:false});
		return VirtualBitmap;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/driver/document.as=======10199.999773
	var Document1=iflash.laya.driver.Document=(function(){
		function Document(){
			this.body=null;
			this.head=null;
			this.onselectstart=null;
			this.ontouchmove=null;
			this.onmousewheel=null;
			this.onscroll=null;
			this._addEventListener_=null;
			this._createElement_=null;
		}

		REGCLASS$(Document,'iflash.laya.driver.Document',true,true,null,'Document1');
		var __proto__=Document.prototype;
		__proto__.addEventListener=function(type,callBack,useCapture){
			if(this._addEventListener_!=null)
				this._addEventListener_.call(this,type,callBack,useCapture);
			else
			this.attachEvent("on"+type,callBack);
		}

		__proto__.getElementsByTagName=function(value){
			return null;
		}

		__proto__.attachEvent=function(type,callBack){}
		__proto__.createElement=function(tagName){
			var _$this=this;
			switch(tagName){
				case 'virtualBitmap':
					return (Laya.CONCHVER&&!Laya.RENDERBYCANVAS)?/*__JS__ */new ConchVirtualBitmap():new VirtualBitmap();
				case 'canvas':;
					var o=this._createElement_.call(this,tagName);
					Canvas.__on_new__(o);
					return o;
				case 'img':
				case 'image':;
					var img=this._createElement_.call(this,"img");
					img.left=img.top=0;
					if (img._getType_==null){
						img._getType_=function (){return 1;};
						img.getContent=function (){return this;};
						img.isReady=function (){return this.width > 0;};
						img.rect=function (x,y,w,h){
							this.left=x;
							this.top=y;
							this.width=w;
							this.height=h;
						}
						if (!img.clone){
							var _this=this;
							img.clone=function (){
								var nimg=_$this.createElement("img");
								nimg.width=this.width;
								nimg.height=this.height;
								nimg.left=this.left;
								nimg.top=this.top;
								nimg.src=this.src;
								return nimg;
							}
						}
					}
					return img;
				}
			return this._createElement_.call(this,tagName);
		}

		DEFUNENUMPTY$(__proto__,'_$set_title',function(t){
		});

		Object.defineProperty(__proto__,'title',{set:__proto__._$set_title,enumerable:false});
		Document.__init__=function(doc){
			doc._addEventListener_=doc.addEventListener;
			doc.addEventListener=Document.__TMP__.addEventListener;
			doc._createElement_=doc.createElement;
			doc.createElement=Document.__TMP__.createElement;
		}

		REGSTATICATTR$(Document,
		['__TMP__',function(){return this.__TMP__=new Document;}
		]);
		return Document;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/driver/driver.as=======10199.999772
	var Driver=iflash.laya.driver.Driver=(function(){
		function Driver(sprite){
			this._frameRate_=null;
			this.buttonDown=false;
			this.create(sprite);
			this._init_(sprite);
			Browser.input=Driver._input_;
		}

		REGCLASS$(Driver,'iflash.laya.driver.Driver',true,true);
		var __proto__=Driver.prototype;
		__proto__.create=function(sprite){
			Browser.document=/*__JS__ */document;
			Browser.window=/*__JS__ */window;
			Browser.location=/*__JS__ */location;
			Browser.navigator=/*__JS__ */navigator;
			Document1.__init__(Browser.document);
		}

		__proto__._init_=function(sprite){
			if (Driver._input_)return;
			Driver._input_=Browser.document.createElement("input");
			if (Laya.CONCHVER==0){
				Driver._input_.setPos=function (x,y){
					Driver._input_.style.left=x+"px";
					Driver._input_.style.top=y+"px";
				};
				Driver._input_.setSize=function (w,h){
					Driver._input_.style.width=w+"px";
					Driver._input_.style.height=h+"px";
				};
				Driver._input_.setStyle=function (style){
					Driver._input_.style.cssText=style;
				}
				Driver._input_.setFont=function (fontInfo){
				};
				Driver._input_.setColor=function (color){
					Driver._input_.style.color=color;
				};
				Driver._input_.setOpacity=function (opacity){
					Driver._input_.style.opacity=opacity;
				};
				Driver._input_.setFontSize=function (sz){
					Driver._input_.style.fontSize=sz+"px";
				};
				Driver._input_.setScale=function (scalex,scaley){
					Driver._input_.style.webkitTransform="scale("+scalex+','+scaley+')';
					Driver._input_.style.mozTransform="scale("+scalex+','+scaley+')';
					Driver._input_.style.oTransform="scale("+scalex+','+scaley+')';
					Driver._input_.style.msTransform="scale("+scalex+','+scaley+')';
				};
				Driver._input_.setRotate=function (s){
					Driver._input_.style.webkitTransform+="rotate("+s+'deg)';
					Driver._input_.style.mozTransform+="rotate("+s+'deg)';
					Driver._input_.style.oTransform+="rotate("+s+'deg)';
					Driver._input_.style.msTransform+="rotate("+s+'deg)';
				};
				Driver._input_.setRegular=function (value){
					Driver._input_.onkeyup=value;
				};
			}
			Driver._input_.setStyle("-webkit-transform-origin:left top;-moz-transform-origin:left top;transform-origin:left top;-ms-transform-origin:left top;TEXT-DECORATION:none;outline:none;border:none;background:none;position:absolute;left:-3px;top:-200px;z-index:999999999;width:2px;height:2px");
			Driver._input_.setOpacity(1);
			Browser.document.body.appendChild(Driver._input_);
			Driver._input_.setPos(-10000,-10000);
			Driver._input_.setSize(0,0);
		}

		__proto__.err=function(e){
			trace("err:"+e);
		}

		__proto__.alert=function(e){
			/*__JS__ */alert(e);
		}

		__proto__.onEnterFrame=function(evt){
			if (Laya.window==null)return;
			var wnd=Browser.window;
			if (Laya.window !=null){
				Laya.window.resizeTo(wnd.innerWidth,wnd.innerHeight);
				Laya.window.enterFrame();
				Laya.RENDERBYCANVAS&&this.onDomRender();
			}
		}

		__proto__.onDomRender=function(){
			(Laya.window !=null)&& Laya.document.render();
		}

		__proto__.onResize=function(){}
		__proto__.start=function(){
			if (Laya.HTMLVER){
				Browser.document.body.style.cssText+='overflow:hidden;margin:0;padding:0'
				Browser.document.body.ontouchstart=Browser.document.onselectstart=Browser.document.ontouchmove=function (event){event.preventDefault();};
				this.frameRate=60;
			}
		}

		__proto__._debugger_=function(){
			/*__JS__ */debugger;
		}

		__proto__.eval=function(str,target){
			target=target || Browser.window;
			target.eval(str);
		}

		__proto__.getRootCanvas=function(){
			return Browser.document.createElement("canvas");
		}

		__proto__.createModle=function(type,id,node){
			if (Driver.__DOMCACHE__.length > 0){
				var o=Driver.__DOMCACHE__.pop();
				o.reset(id,node);
				return o;
			}
			return (Laya.CONCHVER&&!Laya.RENDERBYCANVAS)?/*__JS__ */new ConchNode():IModel.__DEFAULT__;
		}

		__proto__.createTextWord=function(){
			if (Laya.CONCHVER && !Laya.RENDERBYCANVAS)
				return /*__JS__ */new ConchTextWord();
			return new TextWord();
		}

		__proto__.attachBrowserMouseEvent=function(name,fn,type){
			var _$this=this;
			var fnnew=function (event){
				event=event || Browser.window.event;
				var mouseEvent=new MouseEvent(type?type:event.type);
				var touches=event.changedTouches;
				if (touches!=null){
					if (touches[0]==null)return;
					for (var i=0;i < touches.length;i++){
						fnnew(touches[i]);
					}
					return;
				}
				mouseEvent.touchId=Driver.__ID__;
				if (mouseEvent.type==/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown"){
					mouseEvent.touchId=++Driver.__ID__;
					_$this.buttonDown=true;
				}
				else if(mouseEvent.type==/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup"){
					_$this.buttonDown=false;
				}
				mouseEvent.clientX=event.clientX;
				mouseEvent.clientY=event.clientY;
				mouseEvent.button=event.button || 0;
				mouseEvent.buttonDown=_$this.buttonDown;
				if(event.pageX!=null || event.pageY!=null){
					mouseEvent.clientX=event.pageX;
					mouseEvent.clientY=event.pageY;
				}
				mouseEvent.touchId=event.identifier==null?Driver.__ID__:event.identifier;
				fn(mouseEvent);
			};
			name=name.toLowerCase();
			Browser.document.addEventListener(name.substring(2,name.length),BIND$(this,fnnew),false);
		}

		__proto__.attachBrowserKeyEvent=function(name,fn){
			var fnnew=function (event){
				var keyboaderEvent=new KeyboardEvent(name.substring(2));
				keyboaderEvent.keyCode=event.keyCode;
				keyboaderEvent.shiftKey=event.shiftKey;
				keyboaderEvent.ctrlKey=event.ctrlKey;
				fn(keyboaderEvent);
			};
			Browser.document[ name.toLowerCase()]=fnnew;
		}

		__proto__.createHttpRequest=function(){
			return new HttpRequest();
		}

		__proto__.regEvent=function(){
			var esys=EventManager.mgr;
			if (Driver.enableTouch()){
				var isTouching=false;
				this.attachBrowserMouseEvent("ontouchstart",function(e){isTouching=true;esys.acceptSystemMouseEvent(e);},/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown");
				this.attachBrowserMouseEvent("ontouchmove",function(e){esys.acceptSystemMouseEvent(e);},/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove");
				this.attachBrowserMouseEvent("ontouchend",function(e){if(isTouching){isTouching=false;esys.acceptSystemMouseEvent(e);}},/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup");
				this.attachBrowserMouseEvent("ontouchcancel",function(e){if(isTouching){isTouching=false;esys.acceptSystemMouseEvent(e);}},/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup");
			}
			else{
				this.attachBrowserMouseEvent("onmouseDown",function(e){esys.acceptSystemMouseEvent(e);});
				this.attachBrowserMouseEvent("onmouseMove",function(e){esys.acceptSystemMouseEvent(e);});
				this.attachBrowserMouseEvent("onmouseUp",function(e){esys.acceptSystemMouseEvent(e);});
			}
			this.attachBrowserKeyEvent("onkeyDown",function(e){esys.acceptSystemKeyEvent(e);});
			this.attachBrowserKeyEvent("onkeyUp",function(e){esys.acceptSystemKeyEvent(e);});
			Browser.window.onmousewheel=Browser.document.onmousewheel=function (e){esys.acceptSystemMouseEvent(e);};
		}

		__proto__.cursor=function(cursor){
			Browser.document.body.style.cursor=cursor;
		}

		DEFUNENUMPTY$(__proto__,'_$get_frameRate',function(){
			return this._frameRate_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_frameRate',function(num){
			this._frameRate_=num;
			if (Laya.HTMLVER){
				Driver.interval && Browser.window.clearInterval(Driver.interval);
				var _this=this;
				Driver.interval=Browser.window.setInterval(function(){_this.onEnterFrame()},1000/num);
			}
		});

		Object.defineProperty(__proto__,'frameRate',{get:__proto__._$get_frameRate,set:__proto__._$set_frameRate,enumerable:false});
		Driver.enableTouch=function(){
			if (!Laya.CONCHVER)
				/*__JS__ */return ('ontouchstart' in window)|| window.DocumentTouch && (document instanceof DocumentTouch);
			else
			/*__JS__ */return window.enableTouch;;
			return false;
		}

		Driver.__DOMCACHE__=[];
		Driver.__ID__=0;
		Driver.interval=0;
		Driver._input_=null
		return Driver;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/driver/location.as=======10199.999771
	var Location=iflash.laya.driver.Location=(function(){
		function Location(){
			this.href=null;
		}

		REGCLASS$(Location,'iflash.laya.driver.Location',true,true);
		var __proto__=Location.prototype;
		__proto__.reload=function(){}
		return Location;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/driver/navigator.as=======10199.999770
	var Navigator=iflash.laya.driver.Navigator=(function(){
		function Navigator(){}
		REGCLASS$(Navigator,'iflash.laya.driver.Navigator',true,true);
		return Navigator;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/driver/window.as=======10199.999769
	var Window=iflash.laya.driver.Window=(function(){
		function Window(){
			this.innerWidth=0;
			this.innerHeight=0;
			this.XMLHttpRequest=null;
			this.ActiveXObject=null;
			this.onmousewheel=null;
			this._title_=null;
			this.event=null;
			this.onscroll=null;
			this.scrollTop=0;
			this.scrollLeft=0;
			this.conchConfig=null;
			this.conchMarket=null;
		}

		REGCLASS$(Window,'iflash.laya.driver.Window',true,true);
		var __proto__=Window.prototype;
		__proto__.eval=function(str){
			return null;
		}

		__proto__.setTimeout=function(fn,delay){}
		__proto__.clearInterval=function(id){}
		__proto__.setInterval=function(fn,d){
			return 0;
		}

		DEFUNENUMPTY$(__proto__,'_$get_title',function(){
			return this._title_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_title',function(str){
			this._title_=str;
		});

		Object.defineProperty(__proto__,'title',{get:__proto__._$get_title,set:__proto__._$set_title,enumerable:false});
		return Window;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/ilaya.as=======10199.999768
	var ILaya=iflash.laya.ILaya=(function(){
		function ILaya(sprite,htmlUrl){
			this._html_=null;
			Laya.ilaya=this;
			Laya.Main(sprite);
			this._html_=htmlUrl;
			if (!this._html_ && Laya.CONCHVER && Browser.location && Browser.location.href)
				this._html_=Browser.location.href;
		}

		REGCLASS$(ILaya,'iflash.laya.ILaya',true,true);
		var __proto__=ILaya.prototype;
		__proto__._onInit_=function(){}
		__proto__.onStart=function(){
			Browser.hideSystemLoading();
			return;
		}

		return ILaya;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/net/ajax.as=======10199.999767
	var Ajax=iflash.laya.net.Ajax=(function(){
		function Ajax(){}
		REGCLASS$(Ajax,'iflash.laya.net.Ajax',true,true);
		Ajax.onJSONDone=function(callbackFn,response,onerr){
			if (response==null){
				onerr();
				return;
			}
			callbackFn(response);
		}

		Ajax.GetJSONInBrowser=function(url,callbackFn,splitChar,onerr){
			(splitChar===void 0)&& (splitChar='&');
			var response;
			var jsoncb=function (args){
				response=args;
			};
			var tm='';
			if (callbackFn !=null){
				tm=iflash.utils.getTimer()+"";
				Browser.window['layacallback'+tm]=jsoncb;
			};
			var script=Browser.document.createElement('script');
			script.type="text/javascript";
			if (onerr !=null){
				script.onerror=onerr;
				}else{
				script.onerror=callbackFn;
			}
			script.onload=script.onreadystatechange=function (e,isAbort){
				var reg=new RegExp("loaded|complete");
				if (isAbort || !script.readyState || reg.test(script.readyState+"")){
					script.onload=script.onreadystatechange=null;
					if (script.parentNode !=null){}
						if (!isAbort){
						Ajax.onJSONDone(callbackFn,response,script.onerror);
					}
				}
			};
			script.src=url+(tm!=''?(splitChar+'callback=layacallback'+tm):'');
			Browser.document.getElementsByTagName('head')[0].appendChild(script);
		}

		Ajax.GetJSONInApp=function(url,callbackFn,splitChar,onerr){
			(splitChar===void 0)&& (splitChar='&');
			var response="";
			var tm="";
			if(callbackFn !=null){
				tm=iflash.utils.getTimer()+"";
				Browser.window["layacallback"+tm]=function (args){response=args;};
			};
			var nurl=url+(tm !=""?(splitChar+"callback=layacallback"+tm):"");
			Browser.window["downloadfile"](nurl,true,function(data){
				trace('getJson onload:'+data);
				Browser.eval(data);
				Ajax.onJSONDone(callbackFn,response,null);
				},function(){
				trace('getjson error');
				Ajax.onJSONDone(null,null,onerr !=null?onerr:callbackFn);
			});
		}

		Ajax.GetJSON=function(url,callbackFn,splitChar,onerr){
			(splitChar===void 0)&& (splitChar='&');
			if (!Laya.CONCHVER)
				return Ajax.GetJSONInBrowser(url,callbackFn,splitChar,onerr);
			else
			return Ajax.GetJSONInApp(url,callbackFn,splitChar,onerr);
		}

		return Ajax;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/net/cookie.as=======10199.999766
	var Cookie=iflash.laya.net.Cookie=(function(){
		function Cookie(name){
			this._name=null;
			this._data=null;
			this._name=name;
		}

		REGCLASS$(Cookie,'iflash.laya.net.Cookie',true,true);
		var __proto__=Cookie.prototype;
		__proto__.clear=function(){
			this._data={};
			/*__JS__ */localStorage.removeItem(this._name);
		}

		__proto__.close=function(){
			Log.unfinished("SharedObject","close");
		}

		__proto__.flush=function(minDiskSpace){
			(minDiskSpace===void 0)&& (minDiskSpace=0);
			/*__JS__ */localStorage.setItem(this._name,window.JSON.stringify(this._data));
			return this._name;
		}

		__proto__.send=function(__rest){
			var rest=arguments;
			Log.unfinished("SharedObject","send");
		}

		__proto__.setDirty=function(propertyName){
			Log.unfinished("SharedObject","setDirty");
		}

		__proto__.setProperty=function(propertyName,value){
			this._data.propertyName=value;
		}

		DEFUNENUMPTY$(__proto__,'_$get_data',function(){
			return this._data;
		});

		Object.defineProperty(__proto__,'data',{get:__proto__._$get_data,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_objectEncoding',function(){
			Log.unfinished("SharedObject","objectEncoding");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_objectEncoding',function(version){
			Log.unfinished("SharedObject","objectEncoding");
		});

		Object.defineProperty(__proto__,'objectEncoding',{get:__proto__._$get_objectEncoding,set:__proto__._$set_objectEncoding,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_fps',function(updatesPerSecond){
			Log.unfinished("SharedObject","fps");
		});

		Object.defineProperty(__proto__,'fps',{set:__proto__._$set_fps,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_client',function(){
			Log.unfinished("SharedObject","client");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_client',function(object){
			Log.unfinished("SharedObject","client");
		});

		Object.defineProperty(__proto__,'client',{get:__proto__._$get_client,set:__proto__._$set_client,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_size',function(){
			Log.unfinished("SharedObject","size");
			return 0;
		});

		Object.defineProperty(__proto__,'size',{get:__proto__._$get_size,enumerable:false});
		Cookie._$GET_defaultObjectEncoding=function(){
			Log.unfinished("SharedObject","defaultObjectEncoding");
			return 0;
		}

		Cookie._$SET_defaultObjectEncoding=function(version){
			Log.unfinished("SharedObject","defaultObjectEncoding");
		}

		Object.defineProperty(Cookie,'defaultObjectEncoding',{get:Cookie._$GET_defaultObjectEncoding,set:Cookie._$SET_defaultObjectEncoding,enumerable:false});
		Cookie.deleteAll=function(url){
			Log.unfinished("SharedObject","deleteAll");
			return 0;
		}

		Cookie.getDiskUsage=function(url){
			Log.unfinished("SharedObject","getDiskUsage");
			return 0;
		}

		Cookie.getLocal=function(name,localPath,secure){
			(secure===void 0)&& (secure=false);
			var result=new Cookie(name);
			result._data=/*__JS__ */localStorage.getItem(name)?window.JSON.parse(localStorage.getItem(name)):{};
			return result;
		}

		Cookie.getRemote=function(name,remotePath,persistence,secure){
			(persistence===void 0)&& (persistence=false);
			(secure===void 0)&& (secure=false);
			Log.unfinished("SharedObject","getRemote");
			return null;
		}

		return Cookie;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/net/filedata.as=======10199.999765
	var FileData=iflash.laya.net.FileData=(function(){
		function FileData(url,type,mirroringWith){
			this.contentType=null;
			this.contentdata=null;
			this.quoteFile=null;
			this.state=0;
			this._fileRead_=null;
			this._type_=null;
			this.baseURI=null;
			this.state=0;
			this._type_=type || FileData.TYPE_TEXT;
			this.baseURI=new URI(Method.formatUrl(url));
			if (mirroringWith){
				if ((typeof mirroringWith=='string'))mirroringWith=FileData.getFileData(mirroringWith);
				this.quoteFile=mirroringWith;
				this.contentdata=mirroringWith.contentdata;
			}
			FileData._files[this.baseURI.url]=this;
			this._fileRead_=[];
		}

		REGCLASS$(FileData,'iflash.laya.net.FileData',true,true);
		var __proto__=FileData.prototype;
		__proto__.unload=function(){
			this.contentdata=null;
			FileData._files[this.baseURI.url]=null;
			this._fileRead_=[];
		}

		__proto__.addFileRead=function(file){
			if (this.state==3)
				file.onload(this.contentdata);
			else this._fileRead_.push(file);
		}

		__proto__.onload=function(value){
			if (FileData._files[this.baseURI.url]){
				if (Laya.HTMLVER && this._type_==FileData.TYPE_ARRAYBUFFER){
					/*__JS__ */if(!value)return;;
					var b=new ByteArray();
					b.endian=value.endian;
					/*__JS__ */b.writeArrayBuffer(value);
					b.position=0;
					value=b;
				}
				this.contentdata=value;
				this.state=3;
				this._disposeLoaded_();
			}
		}

		__proto__.onerror=function(e){
			delete FileData._files[this.baseURI.url];
			this.state=FileData.LOAD_STATE_ERR;
			this.onerrorLoaded();
		}

		__proto__.setAttributes=function(attrs){
			if (attrs==null)return;
			if ((typeof attrs=='string'))attrs=Method.simpleJsonParse(attrs);
			for (var i in attrs)
			this["set_"+i]=attrs[i];
		}

		__proto__.getData=function(urlrequest){
			if (this.state==3)return this.contentdata;
			if (this.quoteFile){
				if (this.quoteFile.state==3)
					return this.onload(this.quoteFile.getData());
				this.quoteFile.addFileRead(this);
				return null;
			}
			if (this.state==0 || this.state==FileData.LOAD_STATE_ERR){
				this.state=2;
				var request=Browser.createHttpRequest();
				var _this=this;
				request.onload=function (d){
					_this.onload(d);
				}
				request.onerror=function (d){
					_this.onerror(d);
				}
				if (this._type_=="binary" && Laya.HTMLVER)this._type_=FileData.TYPE_ARRAYBUFFER;
				if (this._type_=="binary" && Laya.FLASHVER){
					if(urlrequest)request.open(this.baseURI.url,this._type_,null,true,urlrequest.method,urlrequest.data);
					else {
						request.open(this.baseURI.url,this._type_);
					}
				}
				else{
					if(urlrequest)
						request.open(this.baseURI.url,this._type_==FileData.TYPE_ARRAYBUFFER?FileData.TYPE_ARRAYBUFFER:null,null,true,urlrequest.method,urlrequest.data);
					else {
						request.open(this.baseURI.url,this._type_==FileData.TYPE_ARRAYBUFFER?FileData.TYPE_ARRAYBUFFER:null);
					}
				}
				return null;
			}
		}

		__proto__.onerrorLoaded=function(){
			this.state=3;
			for (var i=0,sz=this._fileRead_.length;i < sz;i++){
				this._fileRead_[i].loadError(this.contentdata);
			}
			this._fileRead_.length=0;
		}

		__proto__._disposeLoaded_=function(){
			this.state=3;
			for (var i=0,sz=this._fileRead_.length;i < sz;i++){
				this._fileRead_[i].onload(this.contentdata);
			}
			this._fileRead_.length=0;
		}

		FileData.setFileIsLoaded=function(url,file){
			url=Method.formatUrl(url);
			FileData._files[url]=file;
		}

		FileData.fileIsLoaded=function(url){
			url=Method.formatUrl(url);
			return FileData._files[url]!=null;
		}

		FileData.getFileData=function(url){
			url=Method.formatUrl(url);
			return FileData._files[url];
		}

		FileData._files=[];
		FileData.LOAD_STATE_ERR=-1;
		FileData.LOAD_STATE_NO=0;
		FileData.LOAD_STATE_RELEASE=1;
		FileData.LOAD_STATE_LOADING=2;
		FileData.LOAD_STATE_LOADED=3;
		FileData.TYPE_IMAGE="image";
		FileData.TYPE_TEXT="text";
		FileData.TYPE_ARRAYBUFFER="arraybuffer";
		return FileData;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/net/fileread.as=======10199.999764
	var FileRead=iflash.laya.net.FileRead=(function(){
		function FileRead(url,callback,type,urlRequest){
			this.data=null;
			this._callBack_=null;
			this._contentType_=null;
			this._callBack_=callback;
			if(URLLoader.isCatchfile){
				this.data=FileData.getFileData(url);
			}
			(this.data==null)?
			this._createFileData_(url,type):
			this.data.addFileRead(this);
			this.data.getData(urlRequest);
		}

		REGCLASS$(FileRead,'iflash.laya.net.FileRead',true,true);
		var __proto__=FileRead.prototype;
		__proto__._createFileData_=function(url,type){
			!this.data && (this.data=new FileData(url,type,null),this.data.contentType=Method.formatUrlType(url));
			this.data.addFileRead(this);
		}

		__proto__.onload=function(value){
			if (this._callBack_){
				this._callBack_.onload.call(this._callBack_.reader,this);
				this._callBack_=null;
			}
		}

		__proto__.loadError=function(value){
			if (this._callBack_){
				this._callBack_.unOnload.call(this._callBack_.reader,this);
				this._callBack_=null;
			}
		}

		__proto__.unload=function(){
			this.data && this.data.unload();
		}

		__proto__.load=function(){
			return this.data.getData();
		}

		__proto__.reload=function(){
			return this.data.getData();
		}

		DEFUNENUMPTY$(__proto__,'_$get_baseURI',function(){
			return this.data.baseURI;
		});

		Object.defineProperty(__proto__,'baseURI',{get:__proto__._$get_baseURI,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_contentType',function(){
			if(this.data)
				return this.data.contentType;
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_contentType',function(type){
			this.data&&(this.data.contentType=type);
		});

		Object.defineProperty(__proto__,'contentType',{get:__proto__._$get_contentType,set:__proto__._$set_contentType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_loaded',function(){
			return this.data.state==/*iflash.laya.net.FileData.LOAD_STATE_LOADED*/3;
		});

		Object.defineProperty(__proto__,'loaded',{get:__proto__._$get_loaded,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_url',function(){
			return this.data.baseURI.url;
		});

		Object.defineProperty(__proto__,'url',{get:__proto__._$get_url,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_contentdata',function(){
			this.data.getData();
			return this.data.contentdata;
		});

		Object.defineProperty(__proto__,'contentdata',{get:__proto__._$get_contentdata,enumerable:false});
		return FileRead;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/net/location.as=======10199.999762
	var Location1=iflash.laya.net.Location=(function(){
		function Location(){
			this._href_=null;
			this._fullPath_=null;
			Laya.window.location=this;
			this.href=Browser.location.href;
		}

		REGCLASS$(Location,'iflash.laya.net.Location',true,true,null,'Location1');
		var __proto__=Location.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_href',function(){
			return this._href_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_href',function(url){
			this._href_=url;
			this._fullPath_=Method.getPath(this._href_);
		});

		Object.defineProperty(__proto__,'href',{get:__proto__._$get_href,set:__proto__._$set_href,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fullPath',function(){
			return this._fullPath_;
		});

		Object.defineProperty(__proto__,'fullPath',{get:__proto__._$get_fullPath,enumerable:false});
		return Location;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/datatype.as=======10199.999761
	var DataType=iflash.laya.runner.DataType=(function(){
		function DataType(){};
		REGCLASS$(DataType,'iflash.laya.runner.DataType',true,true);
		DataType.initKeyMap=function(){
			DataType.MAP=[];
			var arr=["NULL","ID","CHAR","SHORT","FLOAT","STRING","INT","BYTE",
			"CURRENT","HOST","TEMPLATE_ID","ARRAY","MATRIX","BOOL","RESOURCE",
			"TEMPLET","FRAME","INTERPOLATION","NEWID","END","FRAME_END","POP",
			"PUSH","SYMBOL_CLASS","LYIMAGELEMENT","SHAPE","BITMAPDATA","BITMAP",
			"SPRITE","MOVIECLIP","TEXTFIELD","BUTTON","REMOVE_ALL","SET_INSTANCE_NAME",
			"REMOVE_INSTANCE_NAME","NEW_OBJECT","ADD_CHILD","REMOVE_CHILD","SET_TRANSFORM",
			"POS","EMPTY","SET_ALPHA","SET_VISIBLE","INIT_LYIMAGELEMENT_CMD","INIT_SHAPE_CMD",
			"INIT_MOVIECLIP_CMD","INIT_TEXTFIELD_CMD","INIT_BUTTON_CMD"];
			var i;
			/*for each*/for(var $each_i in arr){
				i=arr[$each_i];
				DataType.MAP[DataType[i]]=i;
			}
			return DataType.MAP;
		}

		DataType.NULL=0;
		DataType.ID=1;
		DataType.CHAR=3;
		DataType.SHORT=4;
		DataType.FLOAT=5;
		DataType.STRING=6;
		DataType.INT=7;
		DataType.BYTE=8;
		DataType.CURRENT=9;
		DataType.HOST=10;
		DataType.TEMPLATE_ID=11;
		DataType.ARRAY=12;
		DataType.MATRIX=13;
		DataType.BOOL=14;
		DataType.RESOURCE=21;
		DataType.TEMPLET=22;
		DataType.FRAME=23;
		DataType.INTERPOLATION=24;
		DataType.NEWID=25;
		DataType.END=26;
		DataType.FRAME_END=27;
		DataType.POP=28;
		DataType.PUSH=29;
		DataType.SYMBOL_CLASS=30;
		DataType.LYIMAGELEMENT=51;
		DataType.SHAPE=52;
		DataType.BITMAPDATA=53;
		DataType.BITMAP=54;
		DataType.SPRITE=55;
		DataType.MOVIECLIP=56;
		DataType.TEXTFIELD=57;
		DataType.BUTTON=58;
		DataType.REMOVE_ALL=151;
		DataType.SET_INSTANCE_NAME=152;
		DataType.REMOVE_INSTANCE_NAME=153;
		DataType.NEW_OBJECT=154;
		DataType.ADD_CHILD=155;
		DataType.REMOVE_CHILD=156;
		DataType.SET_TRANSFORM=157;
		DataType.POS=158;
		DataType.EMPTY=159;
		DataType.SET_ALPHA=160;
		DataType.SET_VISIBLE=161;
		DataType.INIT_LYIMAGELEMENT_CMD=162;
		DataType.INIT_SHAPE_CMD=163;
		DataType.INIT_MOVIECLIP_CMD=164;
		DataType.INIT_TEXTFIELD_CMD=165;
		DataType.INIT_BUTTON_CMD=166;
		DataType.MAP=null
		return DataType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/defines/animationcreate.as=======10199.999760
	var AnimationCreate=iflash.laya.runner.defines.AnimationCreate=(function(){
		function AnimationCreate(){
			this.commands={};
		}

		REGCLASS$(AnimationCreate,'iflash.laya.runner.defines.AnimationCreate',true,true);
		AnimationCreate.removeAll=function(target,key){
			(key===void 0)&& (key=0);
			for(var k in (target._animData_.objes))
			{target._animData_.objes[k].visible=false;}
		}

		AnimationCreate.setInstanceName=function(target,key,name){
			var obj=target._animData_.objes[key];
			try{obj.name=name;target[name]=obj;}catch(e){}
		}

		AnimationCreate.removeInstanceName=function(target,key,name){}
		AnimationCreate.newObject=function(target,key,characterID,symblName){
			var res;
			if (target._animData_.objes[key])
			{target._animData_.objes[key].visible=true;return;}
			if(symblName){
				var c=iflash.utils.getDefinitionByName (symblName);
				if(!c){
					res=target.loaderInfo.applicationDomain.newInstance(symblName);
					if((res instanceof iflash.display.BitmapData )){
						res=new Bitmap(res);
						target._animData_.objes[key]=res;
						return;
					}
					res&&(target._animData_.objes[key]=res);
					return;
				};
				var cc=new c();
				if((cc instanceof iflash.display.BitmapData )){
					var b=new Bitmap(cc);
					target._animData_.objes[key]=b;
					}else{
					target._animData_.objes[key]=cc;
				}
				}else{
				res=target.loaderInfo.getResource(String(characterID));
				res&&(target._animData_.objes[key]=res.lyclone());
			}
		}

		AnimationCreate.addChild=function(target,key,depth){
			if(target._animData_.objes[key]&&target._animData_.objes[key].parent)return;
			if(!target._animData_.objes[key])return;
			target.addChild(target._animData_.objes[key]);
			target._animData_.objes[key].zIndex=depth;
		}

		AnimationCreate.removeChild=function(target,key){
			(key===void 0)&& (key=0);
			if(target._animData_.objes[key]){
				target._animData_.objes[key].visible=false;
			}
			return;
		}

		AnimationCreate.setTransform=function(target,key,x,y,scaleX,scaleY,rotation,skewX,skewY){
			(skewX===void 0)&& (skewX=0.0);
			(skewY===void 0)&& (skewY=0.0);
			var obj=target._animData_.objes[key];
			obj&&(obj.x=x,obj.y=y,obj.scaleX=scaleX,obj.scaleY=scaleY,obj.skewX=skewX,obj.skewY=skewY,obj.rotation=rotation)
		}

		AnimationCreate.pos=function(target,key,x,y){
			var obj=target._animData_.objes[key];
			obj&&(obj.x=x,obj.y=y);
		}

		AnimationCreate.empty=function(target,key){
			(key===void 0)&& (key=0);
		}

		AnimationCreate.setAlpha=function(target,key,value){
			var o=target._animData_.objes[key];
			o&&(o.alpha=value);
		}

		AnimationCreate.setVisible=function(target,key,value){
			if(target._animData_.objes[key])target._animData_.objes[key].visible=value;
		}

		AnimationCreate.getCurrentKey=function(target){return target._animData_.baseKey;}
		AnimationCreate.getKey=function(target){return++(target._animData_.baseKey);}
		AnimationCreate.initLyImage=function(target,src,w,h){
			target.width=w;
			target.height=h;
			target.src=target.loaderInfo.__imageUrl__+String(src)+".png";
			var len=target.loaderInfo.temp.length;
			target.loaderInfo.temp[len]=target;
			return target;
		}

		AnimationCreate.initShap=function(target,image,matrix){
			target._init_({data:image,matrix:matrix});
			return target;
		}

		AnimationCreate.initText=function(target,x,y,posx,posy,w,h,wordWrap,multiline,readOnly,align,textColor,fontHeight,initialText){
			target.width=w;
			target.height=h;
			target.x=x;
			target.y=y;
			target.multiline=multiline;
			target.wordWrap=wordWrap;
			target.__text__.pos(posx,posy);
			(!readOnly)&&(target.type="input");
			var tf=new TextFormat();
			tf.size=fontHeight/20;
			if(align==2){tf.align="center";}
				target.defaultTextFormat=tf;
			target.__text__.textColor=textColor;
			if (initialText){
				if(initialText.indexOf("<p")==-1){
					target.text=initialText;
					}else{
					target.htmlText=initialText;
				}
			}
		}

		AnimationCreate.initButton=function(target,runner,w,h,totalFrame,labs){
			var aniData=new AnimationData(),len=labs.length,labData={};
			for(var i=0;i<len;i+=2)
			{labData[labs[i]]=labs[i+1];}
			aniData.totalFrame=totalFrame;
			aniData.labs=labData;
			target._animData_=aniData;
			target._interval_=60;
			target.runner=runner;
			target.width=w;
			target.height=h;
			target._type_|=/*iflash.display.DisplayObject.TYPE_CREATE_FROM_TAG*/0x10;
			return target;
		}

		AnimationCreate.initMovie=function(target,runner,w,h,totalFrame,labs){
			var aniData=new AnimationData(),len=labs?labs.length:0,labData={};
			for(var i=0;i<len;i+=2)
			{labData[labs[i]]=labs[i+1];}
			aniData.totalFrame=totalFrame;
			aniData.labs=labData;
			target._animData_=aniData;
			target._interval_=60;
			target.runner=runner;
			target.width=w;
			target.height=h;
			target._type_|=/*iflash.display.DisplayObject.TYPE_CREATE_FROM_TAG*/0x10;
			return target;
		}

		return AnimationCreate;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/defines/iflashcmd.as=======10199.999759
	var IFLASHCMD=iflash.laya.runner.defines.IFLASHCMD=(function(){
		function IFLASHCMD(){};
		REGCLASS$(IFLASHCMD,'iflash.laya.runner.defines.IFLASHCMD',true,true);
		IFLASHCMD.getDefine=function(id){
			return IFLASHCMD.assets[id];
		}

		IFLASHCMD.newObj=function(id){
			return new (Register._class_[id]);
		}

		IFLASHCMD.getResClass=function(id){
			return Register._class_[id];
		}

		IFLASHCMD.newDefine=function(){}
		IFLASHCMD.setTransform=function(obj,x,y,scaleX,scaleY,rotation,skewX,skewY){
			(skewX===void 0)&& (skewX=0.0);
			(skewY===void 0)&& (skewY=0.0);
			obj&&(obj.x=x,obj.y=y,obj.scaleX=scaleX,obj.scaleY=scaleY,obj.skewX=skewX,obj.skewY=skewY,obj.rotation=rotation)
		}

		IFLASHCMD.pos=function(target,x,y){
			target.x=x;
			target.y=y;
		}

		IFLASHCMD.addChild=function(target,obj){
			target.addChild(obj);
			return obj;
		}

		IFLASHCMD.removeChid=function(target,obj){
			target.removeChild(obj);
			return obj;
		}

		IFLASHCMD.setAlpha=function(target,value){
			target.alpha=value;
		}

		IFLASHCMD.setProperty=function(target,proName,value){
			target[proName]=value;
		}

		IFLASHCMD.initLyImage=function(target,src,w,h){
			target.width=w;
			target.height=h;
			target.src=src;
			return target;
		}

		IFLASHCMD.initShap=function(target,image,matrix){
			target._init_({data:image,matrix:matrix});
			return target;
		}

		IFLASHCMD.initMovie=function(target,runner,w,h,totalFrame,labs){
			var aniData=new AnimationData();
			aniData.totalFrame=totalFrame;
			var len=labs.length,labData={};
			for(var i=0;i<len;i+=2){
				labData[labs[i]]=labs[i+1];
			}
			aniData.labs=labData;
			target._animData_=aniData;
			target._interval_=60;
			target.runner=runner;
			target.width=w;
			target.height=h;
			return target;
			return null;
		}

		IFLASHCMD.assets=[];
		IFLASHCMD.template=[];
		return IFLASHCMD;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/onecmddata.as=======10199.999758
	var OneCmdData=iflash.laya.runner.OneCmdData=(function(){
		function OneCmdData(){
			this.oneFun=null;
			this.args=null;
		}

		REGCLASS$(OneCmdData,'iflash.laya.runner.OneCmdData',true,true);
		var __proto__=OneCmdData.prototype;
		__proto__.applyTo=function(who,one){
			return this.oneFun._fun_.apply(who,this.args);
		}

		OneCmdData.CreateOneCmdData=function(ctype,data,infoId){
			var fnid=ctype;
			var oneFun=Register._functions_[fnid];
			if(!oneFun){
				throw new Error("此函数未注册id("+fnid+"),ctype("+ctype+")");
			};
			var onecmddata;
			if (oneFun.useID){
				onecmddata=new OneCmdDataUseId();
				(onecmddata).id=data.readUnsignedByte();
			}
			else onecmddata=new OneCmdData();
			onecmddata.oneFun=oneFun;
			onecmddata.args=oneFun.readParams(data,infoId);
			return onecmddata;
		}

		return OneCmdData;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/onefunction.as=======10199.999756
	var OneFunction=iflash.laya.runner.OneFunction=(function(){
		function OneFunction(fun,argCount,_useID,paramTypes){
			this._fun_=null;
			this._argsType_=[];
			this.useID=false;
			this.argCount=0;
			this._fun_=fun;
			this._argsType_=paramTypes;
			this.useID=_useID;
		}

		REGCLASS$(OneFunction,'iflash.laya.runner.OneFunction',true,true);
		var __proto__=OneFunction.prototype;
		__proto__.readParams=function(data,infoid){
			var args=[],len=this._argsType_.length;
			for (var i=0;i < len;i++){
				args.push(OneFunction.readParam(this._argsType_[i],data,infoid));
			}
			return args;
		}

		OneFunction.readParam=function(type,data,infoid){
			var value;
			var id=0;
			var i=0;
			var arr;
			var len=0;
			switch(type){
				case /*iflash.laya.runner.DataType.BYTE*/8:
				case /*iflash.laya.runner.DataType.CHAR*/3:
					value=data.readByte();
					break ;
				case /*iflash.laya.runner.DataType.FLOAT*/5:
					value=data.readFloat();
					break ;
				case /*iflash.laya.runner.DataType.INT*/7:
					value=data.readInt();
					break ;
				case /*iflash.laya.runner.DataType.SHORT*/4:
					value=data.readShort();
					break ;
				case /*iflash.laya.runner.DataType.BOOL*/14:
					value=data.readBoolean();
					break ;
				case /*iflash.laya.runner.DataType.STRING*/6:
					value=data.readUTF();
					break ;
				case /*iflash.laya.runner.DataType.CURRENT*/9:
					value=Runnner.getCurrentObj();
					break ;
				case /*iflash.laya.runner.DataType.ID*/1:
					id=data.readShort();
					value=LoaderInfo.getLoaderInfo(infoid).getResource(id.toString());
					break ;
				case /*iflash.laya.runner.DataType.HOST*/10:
					value="HOST";
					break ;
				case /*iflash.laya.runner.DataType.NULL*/0:
					value=null;
					break ;
				case /*iflash.laya.runner.DataType.TEMPLATE_ID*/11:
					id=data.readShort();
					value=Runnner.template[id];
					break ;
				case /*iflash.laya.runner.DataType.ARRAY*/12:
					len=data.readByte();
					if(!len)
					{value=[];break };
					var type=data.readByte();
					arr=[];
					for(i=0;i<len;i++){
						arr.push(OneFunction.readParam(type,data,infoid));
					}
					value=arr;
					break ;
				case /*iflash.laya.runner.DataType.MATRIX*/13:
					len=data.readShort();
					arr=[null,null,null,null,null,null];
					for(i=0;i<len;i++){
						arr[i]=OneFunction.readParam(/*iflash.laya.runner.DataType.FLOAT*/5,data,infoid);
					}
					value=new Matrix(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]);
					break ;
				}
			return value;
		}

		OneFunction.loaderId=0;
		return OneFunction;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/recordtype.as=======10199.999755
	var RecordType=iflash.laya.runner.RecordType=(function(){
		function RecordType(){};
		REGCLASS$(RecordType,'iflash.laya.runner.RecordType',true,true);
		RecordType.CMD=0;
		RecordType.CMDLIST=1;
		RecordType.CMDS=2;
		return RecordType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/register.as=======10199.999754
	var Register=iflash.laya.runner.Register=(function(){
		function Register(){}
		REGCLASS$(Register,'iflash.laya.runner.Register',true,true);
		Register.regFunction=function(id,fun,argCount,useID,__args){
			var args=[];for(var i=4,sz=arguments.length;i<sz;i++)args.push(arguments[i]);
			if (id < 10)throw "regFunction id must>10,id:"+id;
			Register._functions_[id]=new OneFunction(fun,argCount,useID,args);
		}

		Register.regClass=function(id,clazz){
			if (id < 10)throw "regClass id must>10,id:"+id;
			Register._class_[id]=clazz;
		}

		Register._functions_=[];
		Register._class_=[];
		Register._id_=0;
		return Register;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/runnner.as=======10199.999753
	var Runnner=iflash.laya.runner.Runnner=(function(){
		function Runnner(p,id){
			this.parent=null;
			this._comm_=[];
			this._functions_=[];
			this._id_=-1;
			(id===void 0)&& (id=-1);
			this.parent=p;
			this._id_=id;
		}

		REGCLASS$(Runnner,'iflash.laya.runner.Runnner',true,true);
		var __proto__=Runnner.prototype;
		__proto__.interpolation=function(data){
			var findex=data.readUnsignedShort();
			var index=data.readUnsignedShort();
			var selfindex=this._comm_.length;
			this._comm_.push(null);
		}

		__proto__.compile=function(data,info){
			Runnner._info=info;
			var stack={save:this._comm_,pre:null };
			while (data.bytesAvailable){
				var ctype=data.readUnsignedByte()
				var n,resId
				switch(ctype){
					case 0:continue ;
					case DataType.RESOURCE:
						resId=data.readShort();
						var cid=data.readByte();
						this.res(resId,cid);
						n=new Runnner(this,resId);
						n.compile(data,info);
						n.run(Runnner.getCurrentObj(),new RunOne());
						break ;
					case DataType.TEMPLET:
						resId=data.readShort();
						n=new Runnner(this,resId);
						iflash.laya.runner.Runnner.template[resId]=n;
						n.compile(data,info);
						break ;
					case DataType.END:
						return 0;
					case DataType.FRAME:
						n=new Runnner(this,-1);
						this._comm_.push(n);
						n.compile(data,info);
						break ;
					case DataType.INTERPOLATION:
						this.interpolation(data);
						break ;
					case DataType.FRAME_END:
						return 0;
						break ;
					case /*iflash.laya.runner.DataType.SYMBOL_CLASS*/30:;
						var tagId=data.readShort();
						if(tagId==0){
							tagId=32767;
						};
						var name=data.readUTF();
						info.pushResource(info.getResource(tagId.toString()),name);
						iflash.laya.runner.Runnner.symbolClass.push({tagId:tagId,name:name,loadInfo:"infoId"});
						break ;
					default :
						this._comm_.push(OneCmdData.CreateOneCmdData(ctype,data,info.__id__));
					}
			}
			return-1;
		}

		__proto__.res=function(id,classId){
			var obj=new (Register._class_[classId]);
			obj.__id__=Runnner._info.__id__;
			Runnner._info.pushResource(obj,id.toString());
			Runnner.currentObj=obj;
		}

		__proto__.run=function(who,one){
			for (var i=0,sz=this._comm_.length;i < sz;i++){
				this._comm_[i] && this._comm_[i].applyTo(who,one);
			}
			return-1;
		}

		__proto__.run2=function(who){
			for (var i=0,sz=this._comm_.length;i < sz;i++){
				this._comm_[i] && (this._comm_[i].args[0]=who,this._comm_[i].applyTo(who));
			}
		}

		__proto__.runCMDList=function(who,one,index){
			return-1;
		}

		__proto__.newObject=function(index,runId){
			(runId===void 0)&& (runId=-1);
			var o=new (Register._class_[index]);
			if(runId>0)
				o.runner=this._comm_[runId];
			return o;
		}

		__proto__.getPreRes=function(info){
			for (var i=0;i < this._comm_.length;i++){
				var obj=this._comm_[i];
				for (var j=0;j < obj._comm_.length;j++){
					var o=obj._comm_[j];
					if((o instanceof iflash.laya.runner.OneCmdData )){
						if(o.oneFun._fun_==AnimationCreate.newObject){
							var res=info.getResource(o.args[2]+"");
							if((res instanceof iflash.display.MovieClip )){
								res.runner.getPreRes(info);
							}
							if((res instanceof iflash.display.Shape )&& Runnner.preResCollection.indexOf(res)<0){
								Runnner.preResCollection.push(res);
							}
						}
					}
				}
			}
		}

		__proto__.clone=function(){
			var runner=new Runnner();
			runner._comm_=this._comm_.concat();
			runner._functions_=this._functions_;
			return runner;
		}

		__proto__.gotoAndStop=function(frameNum,target){target._animData_.isStop=true;this._goto(frameNum,target);}
		__proto__.gotoAndPlay=function(frameNum,target){target._animData_.isStop=false;this._goto(frameNum,target);}
		__proto__.play=function(target){target._animData_.isStop=false;}
		__proto__.stop=function(target){target._animData_.isStop=true;}
		__proto__._updata_=function(target){
			if (target._animData_.isStop)return;
			var frame=target._animData_.currentFrame+1;
			if(frame>target._animData_.totalFrame||frame<0)frame=0;
			this.tick(frame,target);
			if (target._animData_.totalFrame==1)this.stop(target);
		}

		__proto__.tick=function(frameNum,target){
			if(target._animData_.isStop)return;
			target._animData_.currentFrame=int(frameNum);
			if (target==null)return;
			if(target._animData_.totalFrame<1)return;
			var cmd=this._comm_[frameNum];
			if(!cmd)return;
			cmd.run2(target);
		}

		__proto__._goto=function(frame,target){
			var frameNum=0;
			if((typeof frame=='string'))frameNum=target._animData_.labs[frame];
			else frameNum=frame;
			if(frameNum>=target._animData_.totalFrame)frameNum=0;
			if(frameNum==target._animData_.currentFrame)return;
			var i=target._animData_.currentFrame;
			if(target._animData_.currentFrame>frameNum)i=0;(i<0)&&(i=0);
			for(i;i<=frameNum;++i){
				var cmd=this._comm_[i];
				cmd&&(cmd.run2(target));
				if(!cmd)continue ;
			}
			target._animData_.currentFrame=int(frameNum);
		}

		__proto__.getSysbomData=function(info){
			for(var i=0;i<iflash.laya.runner.Runnner.symbolClass.length;i++){
				var res=info.getResource(iflash.laya.runner.Runnner.symbolClass[i].name);
				if (!res)continue ;
				if ((res instanceof iflash.display.MovieClip )){
					this.regclass(iflash.laya.runner.Runnner.symbolClass[i].name,res,info.applicationDomain);
				}
				else if ((res instanceof iflash.display.LyImageElement )){
					this.regclass(iflash.laya.runner.Runnner.symbolClass[i].name,res,info.applicationDomain);
				}
				else info.applicationDomain._resMapDic_[iflash.laya.runner.Runnner.symbolClass[i].name]=res,res.__id__=info.__id__;
			}
		}

		__proto__.regclass=function(name,data,dom){
			var _class;
			if (Laya.FLASHVER){
			}
			else{
				_class=
				function (){
					if((data instanceof iflash.display.LyImageElement )){
						if(!data.miniBitmapData._canvas_)data.miniBitmapData.draw(LoaderInfo.minibitmapData,Matrix.__SMALL__,null,null,new Rectangle(0,0,data.width,data.height));
						data._init_();data._lyToBody_();data.miniBitmapData._canvas_.size(data.width,data.height);
						data.miniBitmapData.width=data.width;
						data.miniBitmapData.height=data.height;
						return data.miniBitmapData;
					}
					return data.lyclone();
				}
				dom._resMapDic_[name]=_class;
			}
			_class&&(_class.__id__=data.__id__);
		}

		Runnner.getCurrentObj=function(){
			return Runnner.currentObj;
		}

		Runnner.createRunerForClass=function(classId){
			var runner=new Runnner();
			Runnner.specialRunners[classId]=runner;
			return runner;
		}

		Runnner.preResCollection=[];
		Runnner.runSpace=[];
		Runnner.specialRunners=[];
		Runnner.symbolClass=[];
		Runnner.template=[];
		Runnner.currentObj=null;;
		Runnner._info=null
		return Runnner;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/runone.as=======10199.999752
	var RunOne=iflash.laya.runner.RunOne=(function(){
		function RunOne(){
			this.ids=[];
		}

		REGCLASS$(RunOne,'iflash.laya.runner.RunOne',true,true);
		return RunOne;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/system/config.as=======10199.999751
	var Config=iflash.laya.system.Config=(function(){
		function Config(){
			this.urlToLower=false;
			this.showInfo=false;
			this.urlToLower=false;
			this.showInfo=true;
		}

		REGCLASS$(Config,'iflash.laya.system.Config',true,true);
		return Config;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/system/timerctrl.as=======10199.999749
	var TimerCtrl=iflash.laya.system.TimerCtrl=(function(){
		function TimerCtrl(){
			this._nowTime_=null;
			this._frameTimer_=null;
			this.ids=0;
			this._timers_=null;
			this._frameTimer_=[];
			this.ids=1;
			this._timers_=[];
			this._nowTime_=iflash.utils.getTimer();
		}

		REGCLASS$(TimerCtrl,'iflash.laya.system.TimerCtrl',true,true);
		var __proto__=TimerCtrl.prototype;
		__proto__.addFrameTimer=function(listener,owner){
			var o;
			for (var i=0,sz=this._frameTimer_.length;i < sz;i++){
				o=this._frameTimer_[i];
				if (o.deleted){
					return o._reset_(this._nowTime_,listener,owner);
				}
			}
			o=new TimerObject(this._nowTime_,listener,owner);
			this._frameTimer_.push(o);
			return o;
		}

		__proto__.removeFrameTimer=function(listener,owner){
			var o;
			for (var i=0,sz=this._frameTimer_.length;i < sz;i++){
				o=this._frameTimer_[i];
				if (o.listener==listener){
					this._frameTimer_.splice(i,1);
					o.deleted=true;
					return;
				}
			}
		}

		__proto__.addTimer=function(ower,fn,delay,repeartCount){
			var timer;
			if ((typeof fn=='string')){
			}
			else{
				timer=new TimerObject(this._nowTime_,fn,ower,delay,repeartCount);
			}
			this._timers_.push(timer);
			return timer;
		}

		__proto__._update_=function(tm){
			this._nowTime_=tm;
			this._updateFrameTimer_(tm);
			this._updateTimer_(tm);
		}

		__proto__._updateFrameTimer_=function(time){
			for (var i=0;i <this._frameTimer_.length;i++){
				if (!this._frameTimer_[i].run(time)){this._frameTimer_.splice(i,1)};
			}
		}

		__proto__._updateTimer_=function(time){
			var hasDeleted=false,i=0;
			for (i=0;i < this._timers_.length;i++){
				if (!this._timers_[i].run(time)){
					hasDeleted=true;
					this._timers_.splice(i,1);
				};
			}
			if (!hasDeleted)return;
			var tsz=0;
			for (i=0;i < this._timers_.length;i++){
				if (this._timers_[i].deleted){
					continue ;
				}
				this._timers_[tsz]=this._timers_[i];
				tsz++;
			}
			this._timers_.length=tsz;
		}

		REGSTATICATTR$(TimerCtrl,
		['__DEFAULT__',function(){return this.__DEFAULT__=new TimerCtrl();}
		]);
		return TimerCtrl;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/typesetting/typesettingline.as=======10199.999745
	var TypesettingLine=iflash.laya.typesetting.TypesettingLine=(function(){
		function TypesettingLine(){
			this.nodes=null;
			this.width=null;
			this.right=null;
			this.height=null;
			this.floatRightCount=0;
			this.nodes=[];
			this.width=this.height=this.right=0;
			this.floatRightCount=0;
		}

		REGCLASS$(TypesettingLine,'iflash.laya.typesetting.TypesettingLine',true,true);
		var __proto__=TypesettingLine.prototype;
		__proto__.preTypeset=function(){
			return this.nodes;
		}

		__proto__.adjustPos=function(element,dy,textAligni,verticalAlign,maxwidth){
			var i=0,sz=this.nodes.length,o,style,c;
			if (sz < 1)return;
			var dx=0;
			(textAligni==/*iflash.laya.css.Font.TEXT_ALIGN_CENTER*/0x40000)&& (dx=(maxwidth-this.right)/ 2);
			(textAligni==/*iflash.laya.css.Font.TEXT_ALIGN_RIGHT*/0x80000)&& (dx=(maxwidth-this.right));
			dx=Math.floor(dx);
			(dx < 0)&& (dx=0);
			for (i=0;i < sz;i++){
				o=this.nodes[i];
				switch(verticalAlign){
					case /*iflash.laya.css.CSSStyle.VERTICALALIGN_MIDDLE*/0x10:
						o.top+=dy+(this.height-o.height)/2;
						break ;
					case /*iflash.laya.css.CSSStyle.VERTICALALIGN_BOTTOM*/0x20:
						o.top+=dy+(this.height-o.height);
						break ;
					default :
						o.top+=dy;
					}
				(dx)&& (o.left+=dx);
			}
			if (this.floatRightCount>0){
				maxwidth-=dx;
				while(sz--){
					o=this.nodes[sz];
					if (!o.isWord()&& (c=(o))._style_.getCssFloat()==/*iflash.laya.css.CSSStyle.CSS_FLOAT_RIGHT*/0x4){
						style=c._style_;
						maxwidth-=style._width_+style._margin_.right;
						style.left=maxwidth;
						maxwidth-=style._margin_.left;
						c._modle_.pos(style._left_,style._top_);
					}
				}
			}
		}

		return TypesettingLine;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/typesetting/textword.as=======10199.999744
	var TextWord=iflash.laya.typesetting.TextWord=(function(){
		function TextWord(){
			this.x=null;
			this.y=null;
			this.w=null;
			this.h=null;
			this.lineIndex=0;
			this.text=null;
			this.image=null;
			this.fontSize=0;
			this.x=this.y=this.w=this.h=0;
			this._lineIndex_=-1;
			this.image=null;
		}

		REGCLASS$(TextWord,'iflash.laya.typesetting.TextWord',true,true);
		var __proto__=TextWord.prototype;
		LAYABOX.implements(__proto__,{"iflash.laya.typesetting.ITypesetting":true})
		__proto__.setImage=function(img){
			this.image=img;
		}

		__proto__.getRight=function(){
			return this.x+this.w;
		}

		__proto__.getBottom=function(){
			return this.y+this.h;
		}

		__proto__.isWord=function(){
			return true;
		}

		DEFUNENUMPTY$(__proto__,'_$get__lineIndex_',function(){
			return this.lineIndex;
		});

		DEFUNENUMPTY$(__proto__,'_$set__lineIndex_',function(i){
			this.lineIndex=i;
		});

		Object.defineProperty(__proto__,'_lineIndex_',{get:__proto__._$get__lineIndex_,set:__proto__._$set__lineIndex_,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_left',function(){
			return this.x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_left',function(x){
			this.x=x;
		});

		Object.defineProperty(__proto__,'left',{get:__proto__._$get_left,set:__proto__._$set_left,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_top',function(){
			return this.y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_top',function(y){
			this.y=y;
		});

		Object.defineProperty(__proto__,'top',{get:__proto__._$get_top,set:__proto__._$set_top,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this.w;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			this.w=w;
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this.h;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			this.h=h;
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		return TextWord;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/typesetting/typesetting.as=======10199.999743
	var Typesetting=iflash.laya.typesetting.Typesetting=(function(){
		function Typesetting(){}
		REGCLASS$(Typesetting,'iflash.laya.typesetting.Typesetting',true,true);
		Typesetting.push=function(element){
			if ((element._type2_ & /*iflash.laya.dom.Node.TYPE2_DISABLE_TYPESET*/0x2000)!=0)return;
			Typesetting._willTypesettingElement_.push(element);
		}

		Typesetting.pushTell=function(element){
			Typesetting._tellParentTypeset_.push(element);
			element.addType(/*iflash.laya.dom.Node.TYPE_PUSHTOTYPESETTELL*/0x10000);
		}

		Typesetting.tellParentTypeset=function(element){
			var parent=element._parent_;
			if (!parent || (parent._type2_ & /*iflash.laya.dom.Node.TYPE2_DISABLE_TYPESET*/0x2000)!=0)return;
			parent._style_.block && Typesetting.push(parent);
			(!parent._style_.positioni)&& (Typesetting.tellParentTypeset(parent));
		}

		Typesetting.update=function(){
			if (Typesetting._tellParentTypeset_.length < 1 && Typesetting._willTypesettingElement_.length < 1)return;
			var i=0,sz=0,k=4,element,es;
			for (i=0,sz=Typesetting._tellParentTypeset_.length;i < sz;i++){
				element=Typesetting._tellParentTypeset_[i];
				element.removeType(/*iflash.laya.dom.Node.TYPE_PUSHTOTYPESETTELL*/0x10000);
				if (element.deleted || element._style_.positioni)continue ;
				Typesetting.tellParentTypeset(element);
			}
			(sz>0)&& (Typesetting._tellParentTypeset_.length=0);
			while(k--){
				sz=Typesetting._willTypesettingElement_.length;
				if (sz < 1)
					return;
				es=Typesetting._willTypesettingElement_;
				Typesetting._willTypesettingElement_=[];
				for (i=0;i < sz;i++){
					element=es[i];
					!element.deleted && element._style_.block && Typesetting.typesettingElement(element);
				}
			}
		}

		Typesetting.__getAllowWidth__=function(node){
			if(node._parent_==null)return Typesetting.__getAllowWidth__2(node);
			if (node._style_.checkType(/*iflash.laya.css.CSSStyle.CSS_WIDTH_AUTO*/0x400000)|| !node._parent_)return 100000;
			if (node._style_._widthbeset_()|| node._style_.clip)return node.width;
			return Typesetting.__getAllowWidth__(node._parent_);
		}

		Typesetting.__getAllowWidth__2=function(node){
			if (node._style_._sizebeset_())return node.__owner__.width;
			return 100000;
		}

		Typesetting.__getMaxElementWidth__=function(childs){
			var sz=childs.length,maxw=0;
			if (sz > 0){
				while(sz--)maxw=Math.max(childs[sz].width,maxw);
			}
			return maxw;
		}

		Typesetting.typesettingElement=function(element){
			if ((element._type2_ & /*iflash.laya.dom.Node.TYPE2_DISABLE_TYPESET*/0x2000)!=0)return;
			if (element._childs_.length < 1){
				if (element.text==null || element.text.length < 1)
					return;
				var textField=element.getTextTypeset();
				textField.preTypeset();
				textField.lines=Typesetting.toTypesetting(element,textField.nodes,textField.getWordMaxWidth());
				return;
			};
			var typesets=Typesetting.collection(element,[]);
			(typesets.length < 0)? element.removeType(/*iflash.laya.dom.Node.TYPE_NEEDTYPESET*/0x20000):
			Typesetting.toTypesetting(element,typesets,-1);
		}

		Typesetting.collection=function(element,out){
			var i=0,sz=0,o;
			(out==null)&& (out=[]);
			(element.text && element.text.length >=1)&& element.getTextTypeset()&& (out=out.concat(element.getTextTypeset().preTypeset()));
			for (i=0,sz=element._childs_.length;i < sz;i++){
				if (element._childs_[i]==null)continue ;
				if (element._childs_[i].deleted || element._childs_[i].hidden==/*iflash.laya.dom.Node.HIDDEN_DISPLAYNONE*/2)continue ;
				o=element._childs_[i];
				if (o._style_.positioni)continue ;
				(o._style_.isRect)? (out.push(o)):(out=Typesetting.collection(o,out));
			}
			return out;
		}

		Typesetting._setNodeSize_=function(node,style,w,h){
			var bclip=style.clip,xauto=style.checkType(/*iflash.laya.css.CSSStyle.CSS_WIDTH_AUTO*/0x400000),yauto=style.checkType(/*iflash.laya.css.CSSStyle.CSS_HEIGHT_AUTO*/0x800000);
			if(bclip && !xauto && !yauto)return;
			var maxMinSize=style._styleex_.maxMinSize,w0=style._width_,h0=style._height_;
			(w < maxMinSize.minSize.x)&& (w=maxMinSize.minSize.x);
			(w > maxMinSize.maxSize.x)&& (w=maxMinSize.maxSize.x);
			(h < maxMinSize.minSize.y)&& (h=maxMinSize.minSize.y);
			(h > maxMinSize.maxSize.y)&& (h=maxMinSize.maxSize.y);
			(xauto || (!bclip && !style._widthbeset_()))&& (style._width_=Math.floor(w));
			(yauto || (!bclip && !style._heightbeset_()))&& (style._height_=Math.floor(h));
			var textFiled=node.getTextTypeset();
			if (textFiled!=null){
				textFiled.textWidth=w;
				textFiled.textHeight=h;
			}
			if (style._width_==w0 && style._height_==h0)return;
			node._modle_.size(style._width_,style._height_);
			node.lyonResize();
			node.lyDispatchEvent(/*iflash.events.Event.RESIZE*/"resize");
			node.repaint();
			node._checkNeedTypeset(true);
		}

		Typesetting.toTypesetting=function(element,typesets,maxElementWidth){
			if (element.deleted)return null;
			element.addType(/*iflash.laya.dom.Node.TYPE_NEEDTYPESET*/0x20000);
			if (typesets.length < 1)return null;
			element.getTextTypeset()&& element.getTextTypeset()._resetCanvas_();
			var style=element._style_,style2;
			var styledata=style._styleex_,styleEx;
			var font=style.getFont();
			var letterSpacing=font.exdata.letterSpacing;
			var nowrap=font.isWhiteSpace();
			var lineSpacing=font.exdata.lineSpacing;
			var lineHeight=font.exdata.lineHeight;
			var padding=styledata.padding;
			var allowWidth=Typesetting.__getAllowWidth__(element);
			allowWidth-=styledata.padding.width;
			if (maxElementWidth < 0)
				maxElementWidth=Typesetting.__getMaxElementWidth__(typesets);
			var maxContentWidth=0;
			var i=0,sz=typesets.length,preIsFloat=0,typesetObj,outWidth,outHeight;
			var breakType=0,isBlock,isWord,child,lines=[],curLine=new TypesettingLine();
			var cssFload=0,left=font.exdata.textIndent,top=0,floatElementCount=0;
			var dy ,verticalAlign=0,contentHeight=0,fontBottom=0;
			var textLineHeightPer=1;
			lines.push(curLine);
			curLine.height=lineHeight;
			for (i=0;i < sz;i++){
				typesetObj=typesets[i];
				outWidth=typesetObj.width+letterSpacing;
				outHeight=typesetObj.height;
				isWord=typesetObj.isWord();
				if (isWord){
					breakType=(typesetObj).text=='\n'?2:0;
					isBlock=false;
					cssFload=0;
					breakType==0 && ((left+outWidth)> allowWidth)&&(breakType=1);
					textLineHeightPer=1.14;
					outHeight+=typesetObj.height *0.08+2;
				}
				else{
					child=typesetObj;
					style2=child._style_;
					styleEx=style2._styleex_;
					isBlock=i > 0 ? style2.block :false;
					outWidth+=styleEx.padding.width+(styleEx.border?styleEx.border.size*2:0)+style2._margin_.width;
					outHeight+=styleEx.padding.height+(styleEx.border?styleEx.border.size*2:0)+style2._margin_.height;
					if ((cssFload=style2.getCssFloat())!=0){
						breakType=0;
						if (cssFload==/*iflash.laya.css.CSSStyle.CSS_FLOAT_RIGHT*/0x4){
							floatElementCount++;
							curLine.floatRightCount++;
						}
					}
					else breakType=style2.checkType(/*iflash.laya.css.CSSStyle.CSS_BREAK*/0x200000)?1:0;
					(i>0)&& (breakType!=0)&&((curLine.nodes.length > 0 && isBlock && cssFload==0 && preIsFloat==0)|| (left+outWidth *style2.scaleX)> allowWidth)&& (breakType=1);
				}
				if ((!nowrap && breakType>0)|| breakType==2){
					top+=textLineHeightPer *curLine.height+lineSpacing;
					curLine=new TypesettingLine();
					lines.push(curLine);
					curLine.height=lineHeight;
					left=0;
					preIsFloat=0;
					textLineHeightPer=1;
					fontBottom=0;
				}
				curLine.nodes.push(typesetObj);
				curLine.height=curLine.height > outHeight ? curLine.height :outHeight;
				curLine.width+=outWidth;
				(contentHeight < (top+outHeight))&& (contentHeight=top+outHeight);
				if (isWord){
					typesetObj.left=left;
					fontBottom=typesetObj.height *0.08+2;
					typesetObj.top=top+fontBottom;
					typesetObj._lineIndex_=lines.length-1;
				}
				else{
					style2._left_=left;
					style2._top_=top;
					child._modle_.pos(left,top);
				}
				preIsFloat=cssFload;
				left+=outWidth+letterSpacing;
				curLine.right=left;
				if (left > maxContentWidth)
					maxContentWidth=left;
			}
			contentHeight+=padding.height+fontBottom;
			Typesetting._setNodeSize_(element,style,maxContentWidth+padding.width,contentHeight);
			maxContentWidth=Math.max(maxContentWidth,element.width);
			if (style.getVerticalAlign()==0 && font.getTextAligni()==0 && lineHeight==0){
				element.addType(/*iflash.laya.dom.Node.TYPE_SCROLLSZCHG*/0x80000);
				element.repaint();
				if (floatElementCount > 0){
					for (i=0,sz=lines.length;i < sz;i++)
					(lines[i].floatRightCount>0)&& (lines[i].adjustPos(element,0,0,0,maxContentWidth));
				}
				return lines;
			}
			dy=0;
			verticalAlign=style.getVerticalAlign();
			(verticalAlign==/*iflash.laya.css.CSSStyle.VERTICALALIGN_MIDDLE*/0x10 || lineHeight)&& (dy=Math.floor((style._height_-contentHeight)/ 2));
			(verticalAlign==/*iflash.laya.css.CSSStyle.VERTICALALIGN_BOTTOM*/0x20)&& (dy=Math.floor(style._height_-contentHeight));
			if (dy < 0)dy=0;
			for (i=0,sz=lines.length;i < sz;i++)
			lines[i].adjustPos(element,dy,font.getTextAligni(),style.getVerticalAlign(),maxContentWidth);
			element.addType(/*iflash.laya.dom.Node.TYPE_SCROLLSZCHG*/0x80000);
			element.repaint();
			return lines;
		}

		Typesetting._willTypesettingElement_=[];
		Typesetting._tellParentTypeset_=[];
		Typesetting.MAX_WIDTH=100000;
		return Typesetting;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/xml/htmllink.as=======10199.999726
	var HTMLLink=iflash.laya.xml.HTMLLink=(function(){
		function HTMLLink(url,parent,onParseed){
			this.parent=null;
			this.onParseed=null;
			this.onParseed=onParseed;
			this.parent=parent?parent:Laya.document.body;
			url=this.parent.formatUrl(url);
			new FileRead(url,{onload:BIND$(this,this.onload),reader:this });
		}

		REGCLASS$(HTMLLink,'iflash.laya.xml.HTMLLink',true,true);
		var __proto__=HTMLLink.prototype;
		__proto__.onload=function(file){
			new HTMLDocument(file.contentdata,this.parent,file.baseURI,this.onParseed);
		}

		return HTMLLink;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/id3info.as=======10199.999722
	var ID3Info=iflash.media.ID3Info=(function(){
		function ID3Info(){
			this.album=null;
			this.artist=null;
			this.comment=null;
			this.genre=null;
			this.songName=null;
			this.track=null;
			this.year=null;
		}

		REGCLASS$(ID3Info,'iflash.media.ID3Info',true,true);
		return ID3Info;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/soundloadercontext.as=======10199.999718
	var SoundLoaderContext=iflash.media.SoundLoaderContext=(function(){
		function SoundLoaderContext(bufferTime,checkPolicyFile){
			this.bufferTime=null;
			this.checkPolicyFile=false;
			(bufferTime===void 0)&& (bufferTime=1000);
			(checkPolicyFile===void 0)&& (checkPolicyFile=false);
		}

		REGCLASS$(SoundLoaderContext,'iflash.media.SoundLoaderContext',true,true);
		return SoundLoaderContext;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/soundmixer.as=======10199.999717
	var SoundMixer=iflash.media.SoundMixer=(function(){
		function SoundMixer(){};
		REGCLASS$(SoundMixer,'iflash.media.SoundMixer',true,true);
		SoundMixer.areSoundsInaccessible=function(){
			return false;
		}

		SoundMixer.computeSpectrum=function(outputArray,FFTMode,stretchFactor){
			(FFTMode===void 0)&& (FFTMode=false);
			(stretchFactor===void 0)&& (stretchFactor=0);
		}

		SoundMixer.stopAll=function(){}
		SoundMixer.bufferTime=0;;
		SoundMixer.soundTransform=null;
		return SoundMixer;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/soundtransform.as=======10199.999716
	var SoundTransform=iflash.media.SoundTransform=(function(){
		function SoundTransform(vol,panning){
			this._sound_=null;
			this._volume_=null;
			(vol===void 0)&& (vol=1);
			(panning===void 0)&& (panning=0);
			this.volume=vol;
		}

		REGCLASS$(SoundTransform,'iflash.media.SoundTransform',true,true);
		var __proto__=SoundTransform.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_leftToLeft',function(){
			Log.unfinished("SoundChannel","leftToLeft");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_leftToLeft',function(leftToLeft){
			Log.unfinished("SoundChannel","leftToLeft");
		});

		Object.defineProperty(__proto__,'leftToLeft',{get:__proto__._$get_leftToLeft,set:__proto__._$set_leftToLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_leftToRight',function(){
			Log.unfinished("SoundChannel","leftToRight");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_leftToRight',function(leftToRight){
			Log.unfinished("SoundChannel","leftToRight");
		});

		Object.defineProperty(__proto__,'leftToRight',{get:__proto__._$get_leftToRight,set:__proto__._$set_leftToRight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_pan',function(){
			Log.unfinished("SoundChannel","pan");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_pan',function(panning){
			Log.unfinished("SoundChannel","pan");
		});

		Object.defineProperty(__proto__,'pan',{get:__proto__._$get_pan,set:__proto__._$set_pan,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rightToLeft',function(){
			Log.unfinished("SoundChannel","rightToLeft");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rightToLeft',function(rightToLeft){
			Log.unfinished("SoundChannel","rightToLeft");
		});

		Object.defineProperty(__proto__,'rightToLeft',{get:__proto__._$get_rightToLeft,set:__proto__._$set_rightToLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rightToRight',function(){
			Log.unfinished("SoundChannel","rightToRight");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rightToRight',function(rightToRight){
			Log.unfinished("SoundChannel","rightToRight");
		});

		Object.defineProperty(__proto__,'rightToRight',{get:__proto__._$get_rightToRight,set:__proto__._$set_rightToRight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_volume',function(){
			return this._volume_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_volume',function(vol){
			this._sound_ && (this._sound_.volume=vol);
			this._volume_=vol;
		});

		Object.defineProperty(__proto__,'volume',{get:__proto__._$get_volume,set:__proto__._$set_volume,enumerable:false});
		return SoundTransform;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/filefilter.as=======10199.999713
	var FileFilter=iflash.net.FileFilter=(function(){
		function FileFilter(description,extension,macType){}
		REGCLASS$(FileFilter,'iflash.net.FileFilter',true,true);
		var __proto__=FileFilter.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_description',function(){
			Log.unfinished("FileFilter","description");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_description',function(value){
			Log.unfinished("FileFilter","description");
		});

		Object.defineProperty(__proto__,'description',{get:__proto__._$get_description,set:__proto__._$set_description,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_extension',function(){
			Log.unfinished("FileFilter","extension");
			return ""
		});

		DEFUNENUMPTY$(__proto__,'_$set_extension',function(value){
			Log.unfinished("FileFilter","extension");
		});

		Object.defineProperty(__proto__,'extension',{get:__proto__._$get_extension,set:__proto__._$set_extension,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_macType',function(){
			Log.unfinished("FileFilter","macType");
			return ""
		});

		DEFUNENUMPTY$(__proto__,'_$set_macType',function(value){
			Log.unfinished("FileFilter","macType");
		});

		Object.defineProperty(__proto__,'macType',{get:__proto__._$get_macType,set:__proto__._$set_macType,enumerable:false});
		return FileFilter;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/objectencoding.as=======10199.999707
	var ObjectEncoding=iflash.net.ObjectEncoding=(function(){
		function ObjectEncoding(){}
		REGCLASS$(ObjectEncoding,'iflash.net.ObjectEncoding',true,true);
		ObjectEncoding._$GET_dynamicPropertyWriter=function(){
			Log.unfinished("ObjectEncoding","dynamicPropertyWriter");
			return null;
		}

		ObjectEncoding._$SET_dynamicPropertyWriter=function(object){
			Log.unfinished("ObjectEncoding","ObjectEncoding");
		}

		Object.defineProperty(ObjectEncoding,'dynamicPropertyWriter',{get:ObjectEncoding._$GET_dynamicPropertyWriter,set:ObjectEncoding._$SET_dynamicPropertyWriter,enumerable:false});
		ObjectEncoding.AMF0=0;
		ObjectEncoding.AMF3=3;
		ObjectEncoding.DEFAULT=3;
		return ObjectEncoding;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/responder.as=======10199.999706
	var Responder=iflash.net.Responder=(function(){
		function Responder(result,status){
			this._resp=null;
			this._resp=new Responder(result,status);
		}

		REGCLASS$(Responder,'iflash.net.Responder',true,true);
		var __proto__=Responder.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_resp',function(){
			return this._resp;
		});

		Object.defineProperty(__proto__,'resp',{get:__proto__._$get_resp,enumerable:false});
		return Responder;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/securitypanel.as=======10199.999705
	var SecurityPanel=iflash.net.SecurityPanel=(function(){
		function SecurityPanel(){}
		REGCLASS$(SecurityPanel,'iflash.net.SecurityPanel',true,true);
		SecurityPanel.CAMERA="camera";
		SecurityPanel.DEFAULT="default";
		SecurityPanel.DISPLAY="display";
		SecurityPanel.LOCAL_STORAGE="localStorage";
		SecurityPanel.MICROPHONE="microphone";
		SecurityPanel.PRIVACY="privacy";
		SecurityPanel.SETTINGS_MANAGER="settingsManager";
		return SecurityPanel;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/sharedobjectflushstatus.as=======10199.999703
	var SharedObjectFlushStatus=iflash.net.SharedObjectFlushStatus=(function(){
		function SharedObjectFlushStatus(){}
		REGCLASS$(SharedObjectFlushStatus,'iflash.net.SharedObjectFlushStatus',true,true);
		SharedObjectFlushStatus.FLUSHED="flushed";
		SharedObjectFlushStatus.PENDING="pending";
		return SharedObjectFlushStatus;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/urlloaderdataformat.as=======10199.999700
	var URLLoaderDataFormat=iflash.net.URLLoaderDataFormat=(function(){
		function URLLoaderDataFormat(){}
		REGCLASS$(URLLoaderDataFormat,'iflash.net.URLLoaderDataFormat',true,true);
		URLLoaderDataFormat.BINARY="binary";
		URLLoaderDataFormat.TEXT="text";
		URLLoaderDataFormat.VARIABLES="variables";
		return URLLoaderDataFormat;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/urlrequest.as=======10199.999699
	var URLRequest=iflash.net.URLRequest=(function(){
		function URLRequest(url){
			this._contentType=null;
			this._data=null;
			this._digest=null;
			this._requestHeaders=[];
			this._url=null;
			this._method=/*iflash.net.URLLoaderDataFormat.TEXT*/"text";
			this._url=url;
		}

		REGCLASS$(URLRequest,'iflash.net.URLRequest',true,true);
		var __proto__=URLRequest.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_contentType',function(){
			return this._contentType;
		});

		DEFUNENUMPTY$(__proto__,'_$set_contentType',function(value){
			this._contentType=value;
		});

		Object.defineProperty(__proto__,'contentType',{get:__proto__._$get_contentType,set:__proto__._$set_contentType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_data',function(){
			return this._data;
		});

		DEFUNENUMPTY$(__proto__,'_$set_data',function(value){
			this._data=value;
		});

		Object.defineProperty(__proto__,'data',{get:__proto__._$get_data,set:__proto__._$set_data,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_url',function(){
			return this._url;
		});

		DEFUNENUMPTY$(__proto__,'_$set_url',function(value){
			this._url=value;
		});

		Object.defineProperty(__proto__,'url',{get:__proto__._$get_url,set:__proto__._$set_url,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_digest',function(){
			return this._digest;
		});

		DEFUNENUMPTY$(__proto__,'_$set_digest',function(value){
			this._digest=value;
		});

		Object.defineProperty(__proto__,'digest',{get:__proto__._$get_digest,set:__proto__._$set_digest,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_method',function(){
			return this._method;
		});

		DEFUNENUMPTY$(__proto__,'_$set_method',function(value){
			this._method=value;
		});

		Object.defineProperty(__proto__,'method',{get:__proto__._$get_method,set:__proto__._$set_method,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_requestHeaders',function(){
			return this._requestHeaders;
		});

		DEFUNENUMPTY$(__proto__,'_$set_requestHeaders',function(value){
			this._requestHeaders=value;
		});

		Object.defineProperty(__proto__,'requestHeaders',{get:__proto__._$get_requestHeaders,set:__proto__._$set_requestHeaders,enumerable:false});
		return URLRequest;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/urlrequestheader.as=======10199.999698
	var URLRequestHeader=iflash.net.URLRequestHeader=(function(){
		function URLRequestHeader(name,value){
			this.name=null;
			this.value=null;
			(name===void 0)&& (name="");
			(value===void 0)&& (value="");
			;
		}

		REGCLASS$(URLRequestHeader,'iflash.net.URLRequestHeader',true,true);
		return URLRequestHeader;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/urlrequestmethod.as=======10199.999697
	var URLRequestMethod=iflash.net.URLRequestMethod=(function(){
		function URLRequestMethod(){}
		REGCLASS$(URLRequestMethod,'iflash.net.URLRequestMethod',true,true);
		URLRequestMethod.DELETE="DELETE";
		URLRequestMethod.GET="GET";
		URLRequestMethod.HEAD="HEAD";
		URLRequestMethod.OPTIONS="OPTIONS";
		URLRequestMethod.POST="POST";
		URLRequestMethod.PUT="PUT";
		return URLRequestMethod;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/urlvariables.as=======10199.999695
	var URLVariables=iflash.net.URLVariables=(function(){
		function URLVariables(source){
			this.variables=null;
			this.__decodeRegExp__=new RegExp("[?&]?([^=]+)=([^&]*)","g");
			source !=null && this.decode(source);
		}

		REGCLASS$(URLVariables,'iflash.net.URLVariables',true,false);
		var __proto__=URLVariables.prototype;
		__proto__.decode=function(source){
			if(!source)return;
			if(!this.variables){
				this.variables={};
			}
			source=source.split("+").join(" ");
			var tokens,re=this.__decodeRegExp__;
			while (tokens=re.exec(source)){
				Log.unfinished("URLVariables","decode");
				this.variables[tokens[1]]=tokens[2];
			}
		}

		__proto__.toString=function(){
			if(!this.variables){
				return "";
			};
			var variables=this.variables;
			var str="";
			var isFirst=true;
			for(var key in variables){
				if(isFirst){
					isFirst=false;
				}
				else{
					str+="&";
				}
				str+=key+"="+variables[key];
			}
			return str;
		}

		return URLVariables;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/swf/animation/animationdata.as=======10199.999694
	var AnimationData=iflash.swf.animation.AnimationData=(function(){
		function AnimationData(){
			this.objes={};
			this._parent=null;
			this.baseKey=-1;
			this.currentFrame=-1;
			this.labs={};
			this.isStop=false;
			this.totalFrame=0;
		}

		REGCLASS$(AnimationData,'iflash.swf.animation.AnimationData',true,true);
		var __proto__=AnimationData.prototype;
		__proto__.lyclone=function(){
			var ani=new AnimationData()
			ani.totalFrame=this.totalFrame;
			ani.labs=this.labs;
			return ani;
		}

		return AnimationData;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/swf/utils/swftools.as=======10199.999693
	var SWFTools=iflash.swf.utils.SWFTools=(function(){
		function SWFTools(){}
		REGCLASS$(SWFTools,'iflash.swf.utils.SWFTools',true,true);
		SWFTools.initClass=function(cla,obj,sourceMc){
			var ob=ApplicationDomain.currentDomain;
			var b;
			if ((obj instanceof iflash.display.BitmapData )){
				b=ApplicationDomain.currentDomain.newInstance (iflash.utils.getQualifiedClassName(obj));
				obj._canvas_=b._canvas_;
				obj.width=b.width;
				obj.height=b.height;
				return;
			}
			if((obj instanceof iflash.display.Bitmap )){
				b=ApplicationDomain.currentDomain.newInstance (iflash.utils.getQualifiedClassName(obj));
				obj.bitmapData=new BitmapData(b.width,b.height);
				obj.bitmapData._canvas_=b._canvas_.clone();
				obj._modle_.virtualBitmap(obj.bitmapData._canvas_);
				obj.bitmapData.width=b.width;
				obj.bitmapData.height=b.height;
				obj.width=b.width;
				obj.height=b.height;
				return;
			};
			var mc
			if(cla!=null){
				var cName=iflash.utils.getQualifiedClassName(obj);
				mc=ApplicationDomain.currentDomain.newDefinition(cName);
			}else mc=sourceMc;
			if((obj instanceof iflash.display.MovieClip )){
				obj._interval_=mc._interval_=60;
				obj._animData_=mc._animData_.lyclone();
				obj.runner=mc.runner;
				obj._type_|=/*iflash.display.DisplayObject.TYPE_CREATE_FROM_TAG*/0x10;
				obj.__id__=mc.__id__;
				obj._type_|=/*iflash.display.DisplayObject.TYPE_CREATE_FROM_TAG*/0x10;
				if((obj instanceof iflash.display.SimpleButton ))obj.gotoAndStop(1);
				else obj._gotoAndPlay_(1);
				return
			}
			else if(((obj instanceof iflash.display.Sprite ))&&mc){
				var arrar=mc._childs_.concat();
				for(var j=0;j<arrar.length;j++){
					obj.addChild(arrar[j]);
				}
				for(var i in mc){
					if(i !='_childs_')obj[i]=mc[i];
				}
				mc=null;
			}
		}

		return SWFTools;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/applicationdomain.as=======10199.999692
	var ApplicationDomain=iflash.system.ApplicationDomain=(function(){
		function ApplicationDomain(parentDomain){
			this._domainMemory=null;
			this._parentDomain_=null;
			this._resMapDic_=[];
			this._id__=0;
			this._parentDomain_=parentDomain;
		}

		REGCLASS$(ApplicationDomain,'iflash.system.ApplicationDomain',true,true);
		var __proto__=ApplicationDomain.prototype;
		__proto__.getDefinition=function(name){
			var result=this._resMapDic_[name];
			if(result==null){
				result=iflash.utils.getDefinitionByName2(name);
			}
			return result;
		}

		__proto__.newDefinition=function(name){
			var ret;
			var cls=(this._resMapDic_[name]);
			if(!cls){
				var info;
				/*for each*/for(var $each_info in LoaderInfo._loaderInfos_){
					info=LoaderInfo._loaderInfos_[$each_info];
					if(info.applicationDomain==this)continue ;
					cls=(info.applicationDomain._resMapDic_[name]);
					if(cls)break ;
				}
			}
			if(cls){ret=new cls();ret.__id__=cls.__id__}
				return ret;
		}

		__proto__.newInstance=function(name){
			var result=this._resMapDic_[name];
			if(result==null)return null;
			result=new result();
			return result;
		}

		__proto__.hasDefinition=function(name){
			var boolean=false;
			this.getDefinition(name)? boolean=true :boolean=false;
			if(!boolean){
				try{
					var obj=iflash.utils.getDefinitionByName(name);
					obj && (boolean=true);
				}catch(error){boolean=false;}
			}
			return boolean;
		}

		__proto__.addResToMap=function(name,data){
			this._resMapDic_[name]=data;return;
			if(this._resMapDic_[name])return
				else this._resMapDic_[name]=data;
		}

		DEFUNENUMPTY$(__proto__,'_$get___id__',function(){
			return this._id__;
		});

		DEFUNENUMPTY$(__proto__,'_$set___id__',function(value){
			this._id__=value;
		});

		Object.defineProperty(__proto__,'__id__',{get:__proto__._$get___id__,set:__proto__._$set___id__,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_currentDomain',function(value){
			ApplicationDomain._currentDomain=value;
		});

		Object.defineProperty(__proto__,'currentDomain',{set:__proto__._$set_currentDomain,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_domainMemory',function(){
			return this._domainMemory;
		});

		DEFUNENUMPTY$(__proto__,'_$set_domainMemory',function(mem){
			this._domainMemory=mem;
		});

		Object.defineProperty(__proto__,'domainMemory',{get:__proto__._$get_domainMemory,set:__proto__._$set_domainMemory,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parentDomain',function(){
			return this._parentDomain_;
		});

		Object.defineProperty(__proto__,'parentDomain',{get:__proto__._$get_parentDomain,enumerable:false});
		ApplicationDomain._$GET_currentDomain=function(){
			if(ApplicationDomain._currentDomain==null){
				ApplicationDomain._currentDomain=new ApplicationDomain();
			}
			return ApplicationDomain._currentDomain;
		}

		Object.defineProperty(ApplicationDomain,'currentDomain',{get:ApplicationDomain._$GET_currentDomain,enumerable:false});
		ApplicationDomain._$GET_MIN_DOMAIN_MEMORY_LENGTH=function(){
			return 0;
		}

		Object.defineProperty(ApplicationDomain,'MIN_DOMAIN_MEMORY_LENGTH',{get:ApplicationDomain._$GET_MIN_DOMAIN_MEMORY_LENGTH,enumerable:false});
		ApplicationDomain._currentDomain=null;
		return ApplicationDomain;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/capabilities.as=======10199.999691
	var Capabilities=iflash.system.Capabilities=(function(){
		function Capabilities(){}
		REGCLASS$(Capabilities,'iflash.system.Capabilities',true,true);
		Capabilities._$GET_language=function(){
			return Laya.FLASHVER ? Capabilities.language :/*__JS__ */window.navigator.language;
		}

		Object.defineProperty(Capabilities,'language',{get:Capabilities._$GET_language,enumerable:false});
		Capabilities._$GET_serverString=function(){
			return "";
		}

		Object.defineProperty(Capabilities,'serverString',{get:Capabilities._$GET_serverString,enumerable:false});
		Capabilities._$GET_isDebugger=function(){
			return Laya.FLASHVER ? Capabilities.isDebugger :"false";
		}

		Object.defineProperty(Capabilities,'isDebugger',{get:Capabilities._$GET_isDebugger,enumerable:false});
		Capabilities._$GET_playerType=function(){
			return null;
		}

		Object.defineProperty(Capabilities,'playerType',{get:Capabilities._$GET_playerType,enumerable:false});
		Capabilities._$GET_version=function(){
			return "";
		}

		Object.defineProperty(Capabilities,'version',{get:Capabilities._$GET_version,enumerable:false});
		Capabilities._$GET_screenResolutionX=function(){
			return Laya.document.body.width;
		}

		Object.defineProperty(Capabilities,'screenResolutionX',{get:Capabilities._$GET_screenResolutionX,enumerable:false});
		Capabilities._$GET_screenResolutionY=function(){
			return Laya.document.body.width;
		}

		Object.defineProperty(Capabilities,'screenResolutionY',{get:Capabilities._$GET_screenResolutionY,enumerable:false});
		return Capabilities;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/imagedecodingpolicy.as=======10199.999690
	var ImageDecodingPolicy=iflash.system.ImageDecodingPolicy=(function(){
		function ImageDecodingPolicy(){}
		REGCLASS$(ImageDecodingPolicy,'iflash.system.ImageDecodingPolicy',true,true);
		ImageDecodingPolicy.ON_DEMAND="onDemand";
		ImageDecodingPolicy.ON_LOAD="onLoad";
		return ImageDecodingPolicy;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/loadercontext.as=======10199.999688
	var LoaderContext=iflash.system.LoaderContext=(function(){
		function LoaderContext(checkPolicyFile,applicationDomain,securityDomain){
			this.applicationDomain=null;
			this.securityDomain=null;
			this.checkPolicyFile=false;
			this.allowCodeImport=false;
			this.imageDecodingPolicy=/*iflash.system.ImageDecodingPolicy.ON_LOAD*/"onLoad";
			(checkPolicyFile===void 0)&& (checkPolicyFile=false);
			this.applicationDomain=applicationDomain;
		}

		REGCLASS$(LoaderContext,'iflash.system.LoaderContext',true,true);
		var __proto__=LoaderContext.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_allowLoadBytesCodeExecution',function(){
			Log.unfinished("LoaderContext","allowLoadBytesCodeExecution");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_allowLoadBytesCodeExecution',function(allow){
			Log.unfinished("LoaderContext","allowLoadBytesCodeExecution");
		});

		Object.defineProperty(__proto__,'allowLoadBytesCodeExecution',{get:__proto__._$get_allowLoadBytesCodeExecution,set:__proto__._$set_allowLoadBytesCodeExecution,enumerable:false});
		return LoaderContext;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/security.as=======10199.999687
	var Security=iflash.system.Security=(function(){
		function Security(){};
		REGCLASS$(Security,'iflash.system.Security',true,true);
		Security._$GET_sandboxType=function(){
			Log.unfinished("Security","sandboxType");
			return "";
		}

		Object.defineProperty(Security,'sandboxType',{get:Security._$GET_sandboxType,enumerable:false});
		Security.allowDomain=function(__rest){
			var rest=arguments;
			Log.unfinished("Security","allowDomain");
		}

		Security.allowInsecureDomain=function(__rest){
			var rest=arguments;
			Log.unfinished("Security","allowInsecureDomai");
		}

		Security.loadPolicyFile=function(url){
			Log.unfinished("Security","loadPolicyFile");
		}

		Security.showSettings=function(panel){
			(panel===void 0)&& (panel="default");
			Log.unfinished("Security","showSettings");
		}

		Security.disableAVM1Loading=false;;
		Security.exactSettings=false;;
		Security.APPLICATION="application";
		Security.LOCAL_TRUSTED="localTrusted";
		Security.LOCAL_WITH_FILE="localWithFile";
		Security.LOCAL_WITH_NETWORK="localWithNetwork";
		Security.REMOTE="remote";
		return Security;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/securitydomain.as=======10199.999686
	var SecurityDomain=iflash.system.SecurityDomain=(function(){
		function SecurityDomain(){}
		REGCLASS$(SecurityDomain,'iflash.system.SecurityDomain',true,true);
		SecurityDomain._$GET_currentDomain=function(){
			Log.unfinished("SecurityDomain","currentDomain")
			return new SecurityDomain();
		}

		Object.defineProperty(SecurityDomain,'currentDomain',{get:SecurityDomain._$GET_currentDomain,enumerable:false});
		return SecurityDomain;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/system.as=======10199.999685
	var System=iflash.system.System=(function(){
		function System(){}
		REGCLASS$(System,'iflash.system.System',true,true);
		System._$GET_freeMemory=function(){
			Log.unfinished("System","freeMemory");
			return 0;
		}

		Object.defineProperty(System,'freeMemory',{get:System._$GET_freeMemory,enumerable:false});
		System._$GET_privateMemory=function(){
			Log.unfinished("System","privateMemory");
			return 0;
		}

		Object.defineProperty(System,'privateMemory',{get:System._$GET_privateMemory,enumerable:false});
		System._$GET_totalMemory=function(){
			return 0;
		}

		Object.defineProperty(System,'totalMemory',{get:System._$GET_totalMemory,enumerable:false});
		System._$GET_totalMemoryNumber=function(){
			Log.unfinished("System","totalMemoryNumber");
			return 0;
		}

		Object.defineProperty(System,'totalMemoryNumber',{get:System._$GET_totalMemoryNumber,enumerable:false});
		System._$GET_useCodePage=function(){
			return System._useCodePage;
		}

		System._$SET_useCodePage=function(value){
			System._useCodePage=value;
		}

		Object.defineProperty(System,'useCodePage',{get:System._$GET_useCodePage,set:System._$SET_useCodePage,enumerable:false});
		System._$GET_vmVersion=function(){
			return "ilaya-hello";
		}

		Object.defineProperty(System,'vmVersion',{get:System._$GET_vmVersion,enumerable:false});
		System.disposeXML=function(node){
			if(!((node instanceof iflash.xml.XMLElement ))){}
				}
		System.exit=function(code){
			Log.unfinished("System","exit");
		}

		System.gc=function(){
			Log.unfinished("System","gc");
		}

		System.nativeConstructionOnly=function(object){
			Log.unfinished("System","nativeConstructionOnly");
		}

		System.pause=function(){
			Log.unfinished("System","pause");
		}

		System.pauseForGCIfCollectionImminent=function(imminence){
			(imminence===void 0)&& (imminence=0.75);
		}

		System.resume=function(){
			Log.unfinished("System","resume");
		}

		System.setClipboard=function(string){
			Log.unfinished("System","setClipboard");
		}

		System._useCodePage=false;
		return System;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/antialiastype.as=======10199.999684
	var AntiAliasType=iflash.text.AntiAliasType=(function(){
		function AntiAliasType(){}
		REGCLASS$(AntiAliasType,'iflash.text.AntiAliasType',true,true);
		AntiAliasType.ADVANCED="advanced";
		AntiAliasType.NORMAL="normal";
		return AntiAliasType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/contentelement.as=======10199.999683
	var ContentElement=iflash.text.engine.ContentElement=(function(){
		function ContentElement(elementFormat,eventMirror,textRotation){
			this.userData=null;
			(textRotation===void 0)&& (textRotation="rotate0");
		}

		REGCLASS$(ContentElement,'iflash.text.engine.ContentElement',true,true);
		var __proto__=ContentElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_elementFormat',function(){
			Log.unfinished("ContentElement","elementFormat");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_elementFormat',function(value){
			Log.unfinished("ContentElement","elementFormat");
		});

		Object.defineProperty(__proto__,'elementFormat',{get:__proto__._$get_elementFormat,set:__proto__._$set_elementFormat,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_eventMirror',function(){
			Log.unfinished("ContentElement","eventMirror");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_eventMirror',function(value){
			Log.unfinished("ContentElement","eventMirror");
		});

		Object.defineProperty(__proto__,'eventMirror',{get:__proto__._$get_eventMirror,set:__proto__._$set_eventMirror,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textBlock',function(){
			Log.unfinished("ContentElement","textBlock");
			return null;
		});

		Object.defineProperty(__proto__,'textBlock',{get:__proto__._$get_textBlock,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_groupElement',function(){
			Log.unfinished("ContentElement","groupElement");
			return null;
		});

		Object.defineProperty(__proto__,'groupElement',{get:__proto__._$get_groupElement,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rawText',function(){
			Log.unfinished("ContentElement","rawText");
			return "";
		});

		Object.defineProperty(__proto__,'rawText',{get:__proto__._$get_rawText,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_text',function(){
			Log.unfinished("ContentElement","text");
			return "";
		});

		Object.defineProperty(__proto__,'text',{get:__proto__._$get_text,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textBlockBeginIndex',function(){
			Log.unfinished("ContentElement","textBlockBeginIndex");
			return 0;
		});

		Object.defineProperty(__proto__,'textBlockBeginIndex',{get:__proto__._$get_textBlockBeginIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textRotation',function(){
			Log.unfinished("ContentElement","textRotation");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_textRotation',function(value){
			Log.unfinished("ContentElement","textRotation");
		});

		Object.defineProperty(__proto__,'textRotation',{get:__proto__._$get_textRotation,set:__proto__._$set_textRotation,enumerable:false});
		ContentElement.GRAPHIC_ELEMENT=0xFDEF;
		return ContentElement;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/elementformat.as=======10199.999682
	var ElementFormat=iflash.text.engine.ElementFormat=(function(){
		function ElementFormat(fontDescription,fontSize,color,alpha,textRotation,dominantBaseline,alignmentBaseline,baselineShift,kerning,trackingRight,trackingLeft,locale,breakOpportunity,digitCase,digitWidth,ligatureLevel,typographicCase){
			(fontSize===void 0)&& (fontSize=12);
			(color===void 0)&& (color=0);
			(alpha===void 0)&& (alpha=1);
			(textRotation===void 0)&& (textRotation="auto");
			(dominantBaseline===void 0)&& (dominantBaseline="roman");
			(alignmentBaseline===void 0)&& (alignmentBaseline="useDominantBaseline");
			(baselineShift===void 0)&& (baselineShift=0);
			(kerning===void 0)&& (kerning="on");
			(trackingRight===void 0)&& (trackingRight=0);
			(trackingLeft===void 0)&& (trackingLeft=0);
			(locale===void 0)&& (locale="en");
			(breakOpportunity===void 0)&& (breakOpportunity="auto");
			(digitCase===void 0)&& (digitCase="default");
			(digitWidth===void 0)&& (digitWidth="default");
			(ligatureLevel===void 0)&& (ligatureLevel="common");
			(typographicCase===void 0)&& (typographicCase="default");
			Log.unfinished("ElementFormat","ElementFormat");
		}

		REGCLASS$(ElementFormat,'iflash.text.engine.ElementFormat',true,true);
		var __proto__=ElementFormat.prototype;
		__proto__.clone=function(){
			Log.unfinished("ElementFormat","clone");
			return null;
		}

		__proto__.getFontMetrics=function(){
			Log.unfinished("ElementFormat","getFontMetrics");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_alignmentBaseline',function(){
			Log.unfinished("ElementFormat","alignmentBaseline");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_alignmentBaseline',function(alignmentBaseline){
			Log.unfinished("ElementFormat","alignmentBaseline");
		});

		Object.defineProperty(__proto__,'alignmentBaseline',{get:__proto__._$get_alignmentBaseline,set:__proto__._$set_alignmentBaseline,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_alpha',function(){
			Log.unfinished("ElementFormat","alpha");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_alpha',function(value){
			Log.unfinished("ElementFormat","alpha");
		});

		Object.defineProperty(__proto__,'alpha',{get:__proto__._$get_alpha,set:__proto__._$set_alpha,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_dominantBaseline',function(){
			Log.unfinished("ElementFormat","dominantBaseline");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_dominantBaseline',function(dominantBaseline){
			Log.unfinished("ElementFormat","dominantBaseline");
		});

		Object.defineProperty(__proto__,'dominantBaseline',{get:__proto__._$get_dominantBaseline,set:__proto__._$set_dominantBaseline,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_baselineShift',function(){
			Log.unfinished("ElementFormat","baselineShift");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_baselineShift',function(value){
			Log.unfinished("ElementFormat","baselineShift");
		});

		Object.defineProperty(__proto__,'baselineShift',{get:__proto__._$get_baselineShift,set:__proto__._$set_baselineShift,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_breakOpportunity',function(){
			Log.unfinished("ElementFormat","breakOpportunity");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_breakOpportunity',function(opportunityType){
			Log.unfinished("ElementFormat","breakOpportunity");
		});

		Object.defineProperty(__proto__,'breakOpportunity',{get:__proto__._$get_breakOpportunity,set:__proto__._$set_breakOpportunity,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_color',function(){
			Log.unfinished("ElementFormat","color");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_color',function(value){
			Log.unfinished("ElementFormat","color");
		});

		Object.defineProperty(__proto__,'color',{get:__proto__._$get_color,set:__proto__._$set_color,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_locked',function(){
			Log.unfinished("ElementFormat","locked");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_locked',function(value){
			Log.unfinished("ElementFormat","locked");
		});

		Object.defineProperty(__proto__,'locked',{get:__proto__._$get_locked,set:__proto__._$set_locked,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_digitCase',function(){
			Log.unfinished("ElementFormat","digitCase");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_digitCase',function(digitCaseType){
			Log.unfinished("ElementFormat","digitCase");
		});

		Object.defineProperty(__proto__,'digitCase',{get:__proto__._$get_digitCase,set:__proto__._$set_digitCase,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_digitWidth',function(){
			Log.unfinished("ElementFormat","digitWidth");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_digitWidth',function(digitWidthType){
			Log.unfinished("ElementFormat","digitWidth");
		});

		Object.defineProperty(__proto__,'digitWidth',{get:__proto__._$get_digitWidth,set:__proto__._$set_digitWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontDescription',function(){
			Log.unfinished("ElementFormat","fontDescription");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontDescription',function(value){
			Log.unfinished("ElementFormat","fontDescription");
		});

		Object.defineProperty(__proto__,'fontDescription',{get:__proto__._$get_fontDescription,set:__proto__._$set_fontDescription,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontSize',function(){
			Log.unfinished("ElementFormat","fontSize");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontSize',function(value){
			Log.unfinished("ElementFormat","fontSize");
		});

		Object.defineProperty(__proto__,'fontSize',{get:__proto__._$get_fontSize,set:__proto__._$set_fontSize,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_kerning',function(){
			Log.unfinished("ElementFormat","kerning");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_kerning',function(value){
			Log.unfinished("ElementFormat","kerning");
		});

		Object.defineProperty(__proto__,'kerning',{get:__proto__._$get_kerning,set:__proto__._$set_kerning,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_ligatureLevel',function(){
			Log.unfinished("ElementFormat","ligatureLevel");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_ligatureLevel',function(ligatureLevelType){
			Log.unfinished("ElementFormat","ligatureLevel");
		});

		Object.defineProperty(__proto__,'ligatureLevel',{get:__proto__._$get_ligatureLevel,set:__proto__._$set_ligatureLevel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_locale',function(){
			Log.unfinished("ElementFormat","locale");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_locale',function(value){
			Log.unfinished("ElementFormat","locale");
		});

		Object.defineProperty(__proto__,'locale',{get:__proto__._$get_locale,set:__proto__._$set_locale,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textRotation',function(){
			Log.unfinished("ElementFormat","textRotation");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_textRotation',function(value){
			Log.unfinished("ElementFormat","textRotation");
		});

		Object.defineProperty(__proto__,'textRotation',{get:__proto__._$get_textRotation,set:__proto__._$set_textRotation,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_trackingLeft',function(){
			Log.unfinished("ElementFormat","trackingLeft");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_trackingLeft',function(value){
			Log.unfinished("ElementFormat","trackingLeft");
		});

		Object.defineProperty(__proto__,'trackingLeft',{get:__proto__._$get_trackingLeft,set:__proto__._$set_trackingLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_trackingRight',function(){
			Log.unfinished("ElementFormat","trackingRight");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_trackingRight',function(value){
			Log.unfinished("ElementFormat","trackingRight");
		});

		Object.defineProperty(__proto__,'trackingRight',{get:__proto__._$get_trackingRight,set:__proto__._$set_trackingRight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_typographicCase',function(){
			Log.unfinished("ElementFormat","typographicCase");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_typographicCase',function(typographicCaseType){
			Log.unfinished("ElementFormat","typographicCase");
		});

		Object.defineProperty(__proto__,'typographicCase',{get:__proto__._$get_typographicCase,set:__proto__._$set_typographicCase,enumerable:false});
		return ElementFormat;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/fontdescription.as=======10199.999681
	var FontDescription=iflash.text.engine.FontDescription=(function(){
		function FontDescription(fontName,fontWeight,fontPosture,fontLookup,renderingMode,cffHinting){
			(fontName===void 0)&& (fontName="_serif");
			(fontWeight===void 0)&& (fontWeight="normal");
			(fontPosture===void 0)&& (fontPosture="normal");
			(fontLookup===void 0)&& (fontLookup="device");
			(renderingMode===void 0)&& (renderingMode="cff");
			(cffHinting===void 0)&& (cffHinting="horizontalStem");
			Log.unfinished("FontDescription","FontDescription");
		}

		REGCLASS$(FontDescription,'iflash.text.engine.FontDescription',true,true);
		var __proto__=FontDescription.prototype;
		__proto__.clone=function(){
			Log.unfinished("FontDescription","clone");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_cffHinting',function(){
			Log.unfinished("FontDescription","cffHinting");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_cffHinting',function(value){
			Log.unfinished("FontDescription","cffHinting");
		});

		Object.defineProperty(__proto__,'cffHinting',{get:__proto__._$get_cffHinting,set:__proto__._$set_cffHinting,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontLookup',function(){
			Log.unfinished("FontDescription","fontLookup");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontLookup',function(value){
			Log.unfinished("FontDescription","fontLookup");
		});

		Object.defineProperty(__proto__,'fontLookup',{get:__proto__._$get_fontLookup,set:__proto__._$set_fontLookup,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontName',function(){
			Log.unfinished("FontDescription","fontName");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontName',function(value){
			Log.unfinished("FontDescription","fontName");
		});

		Object.defineProperty(__proto__,'fontName',{get:__proto__._$get_fontName,set:__proto__._$set_fontName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontPosture',function(){
			Log.unfinished("FontDescription","fontPosture");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontPosture',function(value){
			Log.unfinished("FontDescription","fontPosture");
		});

		Object.defineProperty(__proto__,'fontPosture',{get:__proto__._$get_fontPosture,set:__proto__._$set_fontPosture,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontWeight',function(){
			Log.unfinished("FontDescription","fontWeight");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_fontWeight',function(value){
			Log.unfinished("FontDescription","fontWeight");
		});

		Object.defineProperty(__proto__,'fontWeight',{get:__proto__._$get_fontWeight,set:__proto__._$set_fontWeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_locked',function(){
			Log.unfinished("FontDescription","locked");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_locked',function(value){
			Log.unfinished("FontDescription","locked");
		});

		Object.defineProperty(__proto__,'locked',{get:__proto__._$get_locked,set:__proto__._$set_locked,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_renderingMode',function(){
			Log.unfinished("FontDescription","renderingMode");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_renderingMode',function(value){
			Log.unfinished("FontDescription","renderingMode");
		});

		Object.defineProperty(__proto__,'renderingMode',{get:__proto__._$get_renderingMode,set:__proto__._$set_renderingMode,enumerable:false});
		FontDescription.isDeviceFontCompatible=function(fontName,fontWeight,fontPosture){
			Log.unfinished("FontDescription","isDeviceFontCompatible");
			return false;
		}

		FontDescription.isFontCompatible=function(fontName,fontWeight,fontPosture){
			Log.unfinished("FontDescription","isFontCompatible");
			return false;
		}

		return FontDescription;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/fontlookup.as=======10199.999680
	var FontLookup=iflash.text.engine.FontLookup=(function(){
		function FontLookup(){}
		REGCLASS$(FontLookup,'iflash.text.engine.FontLookup',true,true);
		FontLookup.DEVICE="device";
		FontLookup.EMBEDDED_CFF="embeddedCFF";
		return FontLookup;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/fontmetrics.as=======10199.999679
	var FontMetrics=iflash.text.engine.FontMetrics=(function(){
		function FontMetrics(emBox,strikethroughOffset,strikethroughThickness,underlineOffset,underlineThickness,subscriptOffset,subscriptScale,superscriptOffset,superscriptScale,lineGap){
			this.emBox=null;
			this.lineGap=null;
			this.strikethroughOffset=null;
			this.strikethroughThickness=null;
			this.subscriptOffset=null;
			this.subscriptScale=null;
			this.superscriptOffset=null;
			this.superscriptScale=null;
			this.underlineOffset=null;
			this.underlineThickness=null;
			(lineGap===void 0)&& (lineGap=0);
			Log.unfinished("FontMetrics","FontMetrics");
		}

		REGCLASS$(FontMetrics,'iflash.text.engine.FontMetrics',true,true);
		return FontMetrics;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/textjustifier.as=======10199.999675
	var TextJustifier=iflash.text.engine.TextJustifier=(function(){
		function TextJustifier(locale,lineJustification){}
		REGCLASS$(TextJustifier,'iflash.text.engine.TextJustifier',true,true);
		var __proto__=TextJustifier.prototype;
		__proto__.clone=function(){
			Log.unfinished("TextJustifier","clone");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_lineJustification',function(){
			Log.unfinished("TextJustifier","lineJustification");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_lineJustification',function(value){
			Log.unfinished("TextJustifier","lineJustification");
		});

		Object.defineProperty(__proto__,'lineJustification',{get:__proto__._$get_lineJustification,set:__proto__._$set_lineJustification,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_locale',function(){
			Log.unfinished("TextJustifier","locale");
			return "";
		});

		Object.defineProperty(__proto__,'locale',{get:__proto__._$get_locale,enumerable:false});
		TextJustifier.getJustifierForLocale=function(locale){
			Log.unfinished("TextJustifier","getJustifierForLocale");
			return null;
		}

		return TextJustifier;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/tabstop.as=======10199.999674
	var TabStop=iflash.text.engine.TabStop=(function(){
		function TabStop(alignment,position,decimalAlignmentToken){
			(alignment===void 0)&& (alignment="start");
			(position===void 0)&& (position=0);
			(decimalAlignmentToken===void 0)&& (decimalAlignmentToken="");
			Log.unfinished("TabStop","TabStop");
		}

		REGCLASS$(TabStop,'iflash.text.engine.TabStop',true,true);
		var __proto__=TabStop.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_alignment',function(){
			Log.unfinished("TabStop","alignment");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_alignment',function(value){
			Log.unfinished("TabStop","alignment");
		});

		Object.defineProperty(__proto__,'alignment',{get:__proto__._$get_alignment,set:__proto__._$set_alignment,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_position',function(){
			Log.unfinished("TabStop","position");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_position',function(value){
			Log.unfinished("TabStop","position");
		});

		Object.defineProperty(__proto__,'position',{get:__proto__._$get_position,set:__proto__._$set_position,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_decimalAlignmentToken',function(){
			Log.unfinished("TabStop","decimalAlignmentToken");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_decimalAlignmentToken',function(value){
			Log.unfinished("TabStop","decimalAlignmentToken");
		});

		Object.defineProperty(__proto__,'decimalAlignmentToken',{get:__proto__._$get_decimalAlignmentToken,set:__proto__._$set_decimalAlignmentToken,enumerable:false});
		return TabStop;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/textbaseline.as=======10199.999673
	var TextBaseline=iflash.text.engine.TextBaseline=(function(){
		function TextBaseline(){}
		REGCLASS$(TextBaseline,'iflash.text.engine.TextBaseline',true,true);
		TextBaseline.ASCENT="ascent";
		TextBaseline.DESCENT="descent";
		TextBaseline.IDEOGRAPHIC_BOTTOM="ideographicBottom";
		TextBaseline.IDEOGRAPHIC_CENTER="ideographicCenter";
		TextBaseline.IDEOGRAPHIC_TOP="ideographicTop";
		TextBaseline.ROMAN="roman";
		TextBaseline.USE_DOMINANT_BASELINE="useDominantBaseline";
		return TextBaseline;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/textblock.as=======10199.999672
	var TextBlock=iflash.text.engine.TextBlock=(function(){
		function TextBlock(content,tabStops,textJustifier,lineRotation,baselineZero,bidiLevel,applyNonLinearFontScaling,baselineFontDescription,baselineFontSize){
			this.userData=null;
			(lineRotation===void 0)&& (lineRotation="rotate0");
			(baselineZero===void 0)&& (baselineZero="roman");
			(bidiLevel===void 0)&& (bidiLevel=0);
			(applyNonLinearFontScaling===void 0)&& (applyNonLinearFontScaling=true);
			(baselineFontSize===void 0)&& (baselineFontSize=12);
			Log.unfinished("TextBlock","TextBlock");
		}

		REGCLASS$(TextBlock,'iflash.text.engine.TextBlock',true,true);
		var __proto__=TextBlock.prototype;
		__proto__.createTextLine=function(previousLine,width,lineOffset,fitSomething){
			(width===void 0)&& (width=1000000);
			(lineOffset===void 0)&& (lineOffset=0);
			(fitSomething===void 0)&& (fitSomething=false);
			Log.unfinished("TextBlock","createTextLine");
			return null;
		}

		__proto__.dump=function(){
			Log.unfinished("TextBlock","dump");
			return "";
		}

		__proto__.findNextAtomBoundary=function(afterCharIndex){
			Log.unfinished("TextBlock","findNextAtomBoundary");
			return 0;
		}

		__proto__.findNextWordBoundary=function(afterCharIndex){
			Log.unfinished("TextBlock","findNextWordBoundary");
			return 0;
		}

		__proto__.findPreviousAtomBoundary=function(beforeCharIndex){
			Log.unfinished("TextBlock","findPreviousAtomBoundary");
			return 0;
		}

		__proto__.findPreviousWordBoundary=function(beforeCharIndex){
			Log.unfinished("TextBlock","findPreviousWordBoundary");
			return 0;
		}

		__proto__.getTextLineAtCharIndex=function(charIndex){
			Log.unfinished("TextBlock","getTextLineAtCharIndex");
			return null;
		}

		__proto__.recreateTextLine=function(textLine,previousLine,width,lineOffset,fitSomething){
			(width===void 0)&& (width=1000000);
			(lineOffset===void 0)&& (lineOffset=0);
			(fitSomething===void 0)&& (fitSomething=false);
			Log.unfinished("TextBlock","recreateTextLine");
			return null;
		}

		__proto__.releaseLineCreationData=function(){
			Log.unfinished("TextBlock","releaseLineCreationData");
		}

		__proto__.releaseLines=function(firstLine,lastLine){
			Log.unfinished("TextBlock","releaseLines");
		}

		DEFUNENUMPTY$(__proto__,'_$get_applyNonLinearFontScaling',function(){
			Log.unfinished("TextBlock","applyNonLinearFontScaling");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_applyNonLinearFontScaling',function(value){
			Log.unfinished("TextBlock","applyNonLinearFontScaling");
		});

		Object.defineProperty(__proto__,'applyNonLinearFontScaling',{get:__proto__._$get_applyNonLinearFontScaling,set:__proto__._$set_applyNonLinearFontScaling,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_content',function(){
			Log.unfinished("TextBlock","content");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_content',function(value){
			Log.unfinished("TextBlock","content");
		});

		Object.defineProperty(__proto__,'content',{get:__proto__._$get_content,set:__proto__._$set_content,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_firstInvalidLine',function(){
			Log.unfinished("TextBlock","firstInvalidLine");
			return null;
		});

		Object.defineProperty(__proto__,'firstInvalidLine',{get:__proto__._$get_firstInvalidLine,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_baselineFontDescription',function(){
			Log.unfinished("TextBlock","baselineFontDescription");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_baselineFontDescription',function(value){
			Log.unfinished("TextBlock","baselineFontDescription");
		});

		Object.defineProperty(__proto__,'baselineFontDescription',{get:__proto__._$get_baselineFontDescription,set:__proto__._$set_baselineFontDescription,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_baselineFontSize',function(){
			Log.unfinished("TextBlock","baselineFontSize");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_baselineFontSize',function(value){
			Log.unfinished("TextBlock","baselineFontSize");
		});

		Object.defineProperty(__proto__,'baselineFontSize',{get:__proto__._$get_baselineFontSize,set:__proto__._$set_baselineFontSize,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_baselineZero',function(){
			Log.unfinished("TextBlock","baselineZero");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_baselineZero',function(value){
			Log.unfinished("TextBlock","baselineZero");
		});

		Object.defineProperty(__proto__,'baselineZero',{get:__proto__._$get_baselineZero,set:__proto__._$set_baselineZero,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bidiLevel',function(){
			Log.unfinished("TextBlock","bidiLevel");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bidiLevel',function(value){
			Log.unfinished("TextBlock","bidiLevel");
		});

		Object.defineProperty(__proto__,'bidiLevel',{get:__proto__._$get_bidiLevel,set:__proto__._$set_bidiLevel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_firstLine',function(){
			Log.unfinished("TextBlock","firstLine");
			return null;
		});

		Object.defineProperty(__proto__,'firstLine',{get:__proto__._$get_firstLine,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_lastLine',function(){
			Log.unfinished("TextBlock","lastLine");
			return null;
		});

		Object.defineProperty(__proto__,'lastLine',{get:__proto__._$get_lastLine,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_lineRotation',function(){
			Log.unfinished("TextBlock","lineRotation");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_lineRotation',function(value){
			Log.unfinished("TextBlock","lineRotation");
		});

		Object.defineProperty(__proto__,'lineRotation',{get:__proto__._$get_lineRotation,set:__proto__._$set_lineRotation,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_tabStops',function(){
			Log.unfinished("TextBlock","tabStops");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_tabStops',function(value){
			Log.unfinished("TextBlock","tabStops");
		});

		Object.defineProperty(__proto__,'tabStops',{get:__proto__._$get_tabStops,set:__proto__._$set_tabStops,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textLineCreationResult',function(){
			Log.unfinished("TextBlock","textLineCreationResult");
			return "";
		});

		Object.defineProperty(__proto__,'textLineCreationResult',{get:__proto__._$get_textLineCreationResult,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textJustifier',function(){
			Log.unfinished("TextBlock","textJustifier");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_textJustifier',function(value){
			Log.unfinished("TextBlock","textJustifier");
		});

		Object.defineProperty(__proto__,'textJustifier',{get:__proto__._$get_textJustifier,set:__proto__._$set_textJustifier,enumerable:false});
		return TextBlock;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/textlinemirrorregion.as=======10199.999669
	var TextLineMirrorRegion=iflash.text.engine.TextLineMirrorRegion=(function(){
		function TextLineMirrorRegion(){
			Log.unfinished("TextLineMirrorRegion","TextLineMirrorRegion");
		}

		REGCLASS$(TextLineMirrorRegion,'iflash.text.engine.TextLineMirrorRegion',true,true);
		var __proto__=TextLineMirrorRegion.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_bounds',function(){
			Log.unfinished("TextLineMirrorRegion","bounds");
			return null;
		});

		Object.defineProperty(__proto__,'bounds',{get:__proto__._$get_bounds,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_element',function(){
			Log.unfinished("TextLineMirrorRegion","element");
			return null;
		});

		Object.defineProperty(__proto__,'element',{get:__proto__._$get_element,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mirror',function(){
			Log.unfinished("TextLineMirrorRegion","mirror");
			return null;
		});

		Object.defineProperty(__proto__,'mirror',{get:__proto__._$get_mirror,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_previousRegion',function(){
			Log.unfinished("TextLineMirrorRegion","nextRegion");
			return null;
		});

		Object.defineProperty(__proto__,'previousRegion',{get:__proto__._$get_previousRegion,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nextRegion',function(){
			Log.unfinished("TextLineMirrorRegion","nextRegion");
			return null;
		});

		Object.defineProperty(__proto__,'nextRegion',{get:__proto__._$get_nextRegion,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textLine',function(){
			Log.unfinished("TextLineMirrorRegion","textLine");
			return null;
		});

		Object.defineProperty(__proto__,'textLine',{get:__proto__._$get_textLine,enumerable:false});
		return TextLineMirrorRegion;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/font.as=======10199.999668
	var Font1=iflash.text.Font=(function(){
		function Font(){}
		REGCLASS$(Font,'iflash.text.Font',true,true,null,'Font1');
		var __proto__=Font.prototype;
		__proto__.hasGlyphs=function(str){
			Log.unfinished("Font","hasGlyphs");
			return false;
		}

		DEFUNENUMPTY$(__proto__,'_$get_fontName',function(){
			Log.unfinished("Font","fontName");
			return "";
		});

		Object.defineProperty(__proto__,'fontName',{get:__proto__._$get_fontName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontStyle',function(){
			Log.unfinished("Font","fontStyle");
			return "";
		});

		Object.defineProperty(__proto__,'fontStyle',{get:__proto__._$get_fontStyle,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fontType',function(){
			Log.unfinished("Font","fontStyle");
			return "";
		});

		Object.defineProperty(__proto__,'fontType',{get:__proto__._$get_fontType,enumerable:false});
		Font.enumerateFonts=function(enumerateDeviceFonts){
			(enumerateDeviceFonts===void 0)&& (enumerateDeviceFonts=false);
			Log.unfinished("Font","enumerateFonts");
			return [];
		}

		Font.registerFont=function(font){
			Log.unfinished("Font","registerFont");
		}

		return Font;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/fonttype.as=======10199.999667
	var FontType=iflash.text.FontType=(function(){
		function FontType(){}
		REGCLASS$(FontType,'iflash.text.FontType',true,true);
		FontType.DEVICE="device";
		FontType.EMBEDDED="embedded";
		FontType.EMBEDDED_CFF="embeddedCFF";
		return FontType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/gridfittype.as=======10199.999666
	var GridFitType=iflash.text.GridFitType=(function(){
		function GridFitType(){;
		}

		REGCLASS$(GridFitType,'iflash.text.GridFitType',true,true);
		GridFitType.NONE="none";
		GridFitType.PIXEL="pixel";
		GridFitType.SUBPIXEL="subpixel";
		return GridFitType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textcolortype.as=======10199.999662
	var TextColorType=iflash.text.TextColorType=(function(){
		function TextColorType(){}
		REGCLASS$(TextColorType,'iflash.text.TextColorType',true,true);
		TextColorType.DARK_COLOR="dark";
		TextColorType.LIGHT_COLOR="light";
		return TextColorType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textfieldautosize.as=======10199.999660
	var TextFieldAutoSize=iflash.text.TextFieldAutoSize=(function(){
		function TextFieldAutoSize(){
			;
		}

		REGCLASS$(TextFieldAutoSize,'iflash.text.TextFieldAutoSize',true,true);
		TextFieldAutoSize.NONE="none";
		TextFieldAutoSize.LEFT="left";
		TextFieldAutoSize.CENTER="center";
		TextFieldAutoSize.RIGHT="right";
		return TextFieldAutoSize;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textfieldtype.as=======10199.999659
	var TextFieldType=iflash.text.TextFieldType=(function(){
		function TextFieldType(){
			;
		}

		REGCLASS$(TextFieldType,'iflash.text.TextFieldType',true,true);
		TextFieldType.INPUT="input";
		TextFieldType.DYNAMIC="dynamic";
		return TextFieldType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textformat/fontstyle.as=======10199.999658
	var FontStyle=iflash.text.textformat.FontStyle=(function(){
		function FontStyle(){}
		REGCLASS$(FontStyle,'iflash.text.textformat.FontStyle',true,true);
		return FontStyle;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textformat/imgtext.as=======10199.999657
	var ImgText=iflash.text.textformat.ImgText=(function(){
		function ImgText(){}
		REGCLASS$(ImgText,'iflash.text.textformat.ImgText',true,true);
		var __proto__=ImgText.prototype;
		__proto__.getInstance=function(){
			if(iflash.text.textformat.ImgText.instance==null)
				iflash.text.textformat.ImgText.instance=new ImgText();
			return iflash.text.textformat.ImgText.instance;
		}

		__proto__.formatFont=function(text,textFontObj){
			var textRect=new Rectangle();
			if(text.length <=0)
				return textRect;
			Log.log("-----王松你这里写的有问题-----")
			return null
		}

		ImgText.instance=null
		return ImgText;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textformat.as=======10199.999656
	var TextFormat=iflash.text.TextFormat=(function(){
		function TextFormat(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading){
			this._blockIndent=0;
			this._bold=false;
			this._bullet=false;
			this._color=0x000000;
			this._font="Arial";
			this._indent=null;
			this._italic=null;
			this._kerning=null;
			this._leading=null;
			this._leftMargin=null;
			this._letterSpacing=null;
			this._rightMargin=null;
			this._size=12;
			this._tabStops=null;
			this._target=null;
			this._underline=null;
			this._url=null;
			this._align=/*iflash.text.TextFieldAutoSize.LEFT*/"left";
			this._font=font;
			this._size=size;
			this._color=color;
			this._bold=bold;
			this._italic=italic;
			this._underline=underline;
			this._url=url;
			this._target=target;
			this._align=align;
			this._leftMargin=leftMargin;
			this._rightMargin=rightMargin;
			this._indent=indent;
			this._leading=leading;
		}

		REGCLASS$(TextFormat,'iflash.text.TextFormat',true,true);
		var __proto__=TextFormat.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_align',function(){
			return this._align;
		});

		DEFUNENUMPTY$(__proto__,'_$set_align',function(value){
			this._align=value;
		});

		Object.defineProperty(__proto__,'align',{get:__proto__._$get_align,set:__proto__._$set_align,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bold',function(){
			return this._bold;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bold',function(value){
			this._bold=value;
		});

		Object.defineProperty(__proto__,'bold',{get:__proto__._$get_bold,set:__proto__._$set_bold,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_blockIndent',function(){
			return this._blockIndent;
		});

		DEFUNENUMPTY$(__proto__,'_$set_blockIndent',function(value){
			this._blockIndent=value;
		});

		Object.defineProperty(__proto__,'blockIndent',{get:__proto__._$get_blockIndent,set:__proto__._$set_blockIndent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bullet',function(){
			return this._bullet;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bullet',function(value){
			this._bullet=value;
		});

		Object.defineProperty(__proto__,'bullet',{get:__proto__._$get_bullet,set:__proto__._$set_bullet,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_color',function(){
			return this._color;
		});

		DEFUNENUMPTY$(__proto__,'_$set_color',function(value){
			this._color=value;
		});

		Object.defineProperty(__proto__,'color',{get:__proto__._$get_color,set:__proto__._$set_color,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_kerning',function(){
			return this._kerning;
		});

		DEFUNENUMPTY$(__proto__,'_$set_kerning',function(value){
			this._kerning=value;
		});

		Object.defineProperty(__proto__,'kerning',{get:__proto__._$get_kerning,set:__proto__._$set_kerning,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_font',function(){
			return this._font;
		});

		DEFUNENUMPTY$(__proto__,'_$set_font',function(value){
			this._font=value;
		});

		Object.defineProperty(__proto__,'font',{get:__proto__._$get_font,set:__proto__._$set_font,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_indent',function(){
			return this._indent;
		});

		DEFUNENUMPTY$(__proto__,'_$set_indent',function(value){
			this._indent=value;
		});

		Object.defineProperty(__proto__,'indent',{get:__proto__._$get_indent,set:__proto__._$set_indent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_italic',function(){
			return this._italic;
		});

		DEFUNENUMPTY$(__proto__,'_$set_italic',function(value){
			this._italic=value;
		});

		Object.defineProperty(__proto__,'italic',{get:__proto__._$get_italic,set:__proto__._$set_italic,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_leading',function(){
			return this._leading;
		});

		DEFUNENUMPTY$(__proto__,'_$set_leading',function(value){
			this._leading=value;
		});

		Object.defineProperty(__proto__,'leading',{get:__proto__._$get_leading,set:__proto__._$set_leading,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_leftMargin',function(){
			return this._leftMargin;
		});

		DEFUNENUMPTY$(__proto__,'_$set_leftMargin',function(value){
			this._leftMargin=value;
		});

		Object.defineProperty(__proto__,'leftMargin',{get:__proto__._$get_leftMargin,set:__proto__._$set_leftMargin,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_letterSpacing',function(){
			return this._letterSpacing;
		});

		DEFUNENUMPTY$(__proto__,'_$set_letterSpacing',function(value){
			this._letterSpacing=value;
		});

		Object.defineProperty(__proto__,'letterSpacing',{get:__proto__._$get_letterSpacing,set:__proto__._$set_letterSpacing,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rightMargin',function(){
			return this._rightMargin;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rightMargin',function(value){
			this._rightMargin=value;
		});

		Object.defineProperty(__proto__,'rightMargin',{get:__proto__._$get_rightMargin,set:__proto__._$set_rightMargin,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_size',function(){
			return this._size;
		});

		DEFUNENUMPTY$(__proto__,'_$set_size',function(value){
			this._size=value;
		});

		Object.defineProperty(__proto__,'size',{get:__proto__._$get_size,set:__proto__._$set_size,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_tabStops',function(){
			return this._tabStops;
		});

		DEFUNENUMPTY$(__proto__,'_$set_tabStops',function(value){
			this._tabStops=value;
		});

		Object.defineProperty(__proto__,'tabStops',{get:__proto__._$get_tabStops,set:__proto__._$set_tabStops,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_target',function(){
			return this._target;
		});

		DEFUNENUMPTY$(__proto__,'_$set_target',function(value){
			this._target=value;
		});

		Object.defineProperty(__proto__,'target',{get:__proto__._$get_target,set:__proto__._$set_target,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_underline',function(){
			return this._underline;
		});

		DEFUNENUMPTY$(__proto__,'_$set_underline',function(value){
			this._underline=value;
		});

		Object.defineProperty(__proto__,'underline',{get:__proto__._$get_underline,set:__proto__._$set_underline,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_url',function(){
			return this._url;
		});

		DEFUNENUMPTY$(__proto__,'_$set_url',function(value){
			this._url=value;
		});

		Object.defineProperty(__proto__,'url',{get:__proto__._$get_url,set:__proto__._$set_url,enumerable:false});
		return TextFormat;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textformatalign.as=======10199.999655
	var TextFormatAlign=iflash.text.TextFormatAlign=(function(){
		function TextFormatAlign(){}
		REGCLASS$(TextFormatAlign,'iflash.text.TextFormatAlign',true,true);
		TextFormatAlign.CENTER="center";
		TextFormatAlign.JUSTIFY="justify";
		TextFormatAlign.LEFT="left";
		TextFormatAlign.RIGHT="right";
		return TextFormatAlign;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textlinemetrics.as=======10199.999654
	var TextLineMetrics=iflash.text.TextLineMetrics=(function(){
		function TextLineMetrics(x,width,height,ascent,descent,leading){
			this.ascent=null;
			this.descent=null;
			this.height=null;
			this.leading=null;
			this.width=null;
			this.x=null;
			this.x=x;
			this.width=width;
			this.height=height;
			this.ascent=ascent;
			this.descent=descent;
			this.leading=leading;
		}

		REGCLASS$(TextLineMetrics,'iflash.text.TextLineMetrics',true,true);
		return TextLineMetrics;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textsnapshot.as=======10199.999653
	var TextSnapshot=iflash.text.TextSnapshot=(function(){
		function TextSnapshot(){}
		REGCLASS$(TextSnapshot,'iflash.text.TextSnapshot',true,true);
		var __proto__=TextSnapshot.prototype;
		__proto__.findText=function(beginIndex,textToFind,caseSensitive){
			Log.unfinished("TextSnapshot","findText");
			return 0;
		}

		__proto__.getSelected=function(beginIndex,endIndex){
			Log.unfinished("TextSnapshot","getSelected");
			return false;
		}

		__proto__.getSelectedText=function(includeLineEndings){
			(includeLineEndings===void 0)&& (includeLineEndings=false);
			Log.unfinished("TextSnapshot","getSelectedText");
			return null;
		}

		__proto__.getText=function(beginIndex,endIndex,includeLineEndings){
			(includeLineEndings===void 0)&& (includeLineEndings=false);
			Log.unfinished("TextSnapshot","getText");
			return null;
		}

		__proto__.getTextRunInfo=function(beginIndex,endIndex){
			Log.unfinished("TextSnapshot","getTextRunInfo");
			return null;
		}

		__proto__.hitTestTextNearPos=function(x,y,maxDistance){
			(maxDistance===void 0)&& (maxDistance=0);
			Log.unfinished("TextSnapshot","hitTestTextNearPos");
			return 0;
		}

		__proto__.setSelectColor=function(hexColor){
			(hexColor===void 0)&& (hexColor=16776960);
			Log.unfinished("TextSnapshot","setSelectColor");
		}

		__proto__.setSelected=function(beginIndex,endIndex,select){
			Log.unfinished("TextSnapshot","setSelected");
		}

		DEFUNENUMPTY$(__proto__,'_$get_charCount',function(){
			Log.unfinished("TextSnapshot","charCount");
			return 0;
		});

		Object.defineProperty(__proto__,'charCount',{get:__proto__._$get_charCount,enumerable:false});
		return TextSnapshot;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/contextmenubuiltinitems.as=======10199.999651
	var ContextMenuBuiltInItems=iflash.ui.ContextMenuBuiltInItems=(function(){
		function ContextMenuBuiltInItems(){}
		REGCLASS$(ContextMenuBuiltInItems,'iflash.ui.ContextMenuBuiltInItems',true,true);
		var __proto__=ContextMenuBuiltInItems.prototype;
		__proto__.clone=function(){
			return new ContextMenuBuiltInItems();
		}

		DEFUNENUMPTY$(__proto__,'_$get_forwardAndBack',function(){
			("ContextMenuBuiltInItems","forwardAndBack");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_forwardAndBack',function(val){
			("ContextMenuBuiltInItems","forwardAndBack");
		});

		Object.defineProperty(__proto__,'forwardAndBack',{get:__proto__._$get_forwardAndBack,set:__proto__._$set_forwardAndBack,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_loop',function(){
			("ContextMenuBuiltInItems","loop");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_loop',function(val){
			("ContextMenuBuiltInItems","loop");
		});

		Object.defineProperty(__proto__,'loop',{get:__proto__._$get_loop,set:__proto__._$set_loop,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_zoom',function(){
			("ContextMenuBuiltInItems","zoom");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_zoom',function(val){
			("ContextMenuBuiltInItems","zoom");
		});

		Object.defineProperty(__proto__,'zoom',{get:__proto__._$get_zoom,set:__proto__._$set_zoom,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_play',function(){
			("ContextMenuBuiltInItems","play");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_play',function(val){
			("ContextMenuBuiltInItems","play");
		});

		Object.defineProperty(__proto__,'play',{get:__proto__._$get_play,set:__proto__._$set_play,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_print',function(){
			("ContextMenuBuiltInItems","print");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_print',function(val){
			("ContextMenuBuiltInItems","print");
		});

		Object.defineProperty(__proto__,'print',{get:__proto__._$get_print,set:__proto__._$set_print,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_quality',function(){
			("ContextMenuBuiltInItems","quality");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_quality',function(val){
			("ContextMenuBuiltInItems","quality");
		});

		Object.defineProperty(__proto__,'quality',{get:__proto__._$get_quality,set:__proto__._$set_quality,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rewind',function(){
			("ContextMenuBuiltInItems","rewind");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rewind',function(val){
			("ContextMenuBuiltInItems","rewind");
		});

		Object.defineProperty(__proto__,'rewind',{get:__proto__._$get_rewind,set:__proto__._$set_rewind,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_save',function(){
			("ContextMenuBuiltInItems","save");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_save',function(val){
			("ContextMenuBuiltInItems","save");
		});

		Object.defineProperty(__proto__,'save',{get:__proto__._$get_save,set:__proto__._$set_save,enumerable:false});
		return ContextMenuBuiltInItems;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/contextmenuclipboarditems.as=======10199.999650
	var ContextMenuClipboardItems=iflash.ui.ContextMenuClipboardItems=(function(){
		function ContextMenuClipboardItems(){}
		REGCLASS$(ContextMenuClipboardItems,'iflash.ui.ContextMenuClipboardItems',true,true);
		var __proto__=ContextMenuClipboardItems.prototype;
		__proto__.clone=function(){
			return new ContextMenuClipboardItems();
		}

		DEFUNENUMPTY$(__proto__,'_$get_clear',function(){
			Log.unfinished("ContextMenuClipboardItems","clear");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_clear',function(val){
			Log.unfinished("ContextMenuClipboardItems","clear");
		});

		Object.defineProperty(__proto__,'clear',{get:__proto__._$get_clear,set:__proto__._$set_clear,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_copy',function(){
			Log.unfinished("ContextMenuClipboardItems","copy");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_copy',function(val){
			Log.unfinished("ContextMenuClipboardItems","copy");
		});

		Object.defineProperty(__proto__,'copy',{get:__proto__._$get_copy,set:__proto__._$set_copy,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_selectAll',function(){
			Log.unfinished("ContextMenuClipboardItems","selectAll");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_selectAll',function(val){
			Log.unfinished("ContextMenuClipboardItems","selectAll");
		});

		Object.defineProperty(__proto__,'selectAll',{get:__proto__._$get_selectAll,set:__proto__._$set_selectAll,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_cut',function(){
			Log.unfinished("ContextMenuClipboardItems","cut");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_cut',function(val){
			Log.unfinished("ContextMenuClipboardItems","cut");
		});

		Object.defineProperty(__proto__,'cut',{get:__proto__._$get_cut,set:__proto__._$set_cut,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_paste',function(){
			Log.unfinished("ContextMenuClipboardItems","paste");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_paste',function(val){
			Log.unfinished("ContextMenuClipboardItems","paste");
		});

		Object.defineProperty(__proto__,'paste',{get:__proto__._$get_paste,set:__proto__._$set_paste,enumerable:false});
		return ContextMenuClipboardItems;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/keyboard.as=======10199.999648
	var Keyboard=iflash.ui.Keyboard=(function(){
		function Keyboard(){
			;
		}

		REGCLASS$(Keyboard,'iflash.ui.Keyboard',true,true);
		Keyboard._$GET_capsLock=function(){return false}
		Object.defineProperty(Keyboard,'capsLock',{get:Keyboard._$GET_capsLock,enumerable:false});
		Keyboard._$GET_physicalKeyboardType=function(){return ""}
		Object.defineProperty(Keyboard,'physicalKeyboardType',{get:Keyboard._$GET_physicalKeyboardType,enumerable:false});
		Keyboard._$GET_numLock=function(){return false}
		Object.defineProperty(Keyboard,'numLock',{get:Keyboard._$GET_numLock,enumerable:false});
		Keyboard._$GET_hasVirtualKeyboard=function(){return false}
		Object.defineProperty(Keyboard,'hasVirtualKeyboard',{get:Keyboard._$GET_hasVirtualKeyboard,enumerable:false});
		Keyboard.isAccessible=function(){return false}
		Keyboard.KEYNAME_UPARROW="Up";
		Keyboard.KEYNAME_DOWNARROW="Down";
		Keyboard.KEYNAME_LEFTARROW="Left";
		Keyboard.KEYNAME_RIGHTARROW="Right";
		Keyboard.KEYNAME_F1="F1";
		Keyboard.KEYNAME_F2="F2";
		Keyboard.KEYNAME_F3="F3";
		Keyboard.KEYNAME_F4="F4";
		Keyboard.KEYNAME_F5="F5";
		Keyboard.KEYNAME_F6="F6";
		Keyboard.KEYNAME_F7="F7";
		Keyboard.KEYNAME_F8="F8";
		Keyboard.KEYNAME_F9="F9";
		Keyboard.KEYNAME_F10="F10";
		Keyboard.KEYNAME_F11="F11";
		Keyboard.KEYNAME_F12="F12";
		Keyboard.KEYNAME_F13="F13";
		Keyboard.KEYNAME_F14="F14";
		Keyboard.KEYNAME_F15="F15";
		Keyboard.KEYNAME_F16="F16";
		Keyboard.KEYNAME_F17="F17";
		Keyboard.KEYNAME_F18="F18";
		Keyboard.KEYNAME_F19="F19";
		Keyboard.KEYNAME_F20="F20";
		Keyboard.KEYNAME_F21="F21";
		Keyboard.KEYNAME_F22="F22";
		Keyboard.KEYNAME_F23="F23";
		Keyboard.KEYNAME_F24="F24";
		Keyboard.KEYNAME_F25="F25";
		Keyboard.KEYNAME_F26="F26";
		Keyboard.KEYNAME_F27="F27";
		Keyboard.KEYNAME_F28="F28";
		Keyboard.KEYNAME_F29="F29";
		Keyboard.KEYNAME_F30="F30";
		Keyboard.KEYNAME_F31="F31";
		Keyboard.KEYNAME_F32="F32";
		Keyboard.KEYNAME_F33="F33";
		Keyboard.KEYNAME_F34="F34";
		Keyboard.KEYNAME_F35="F35";
		Keyboard.KEYNAME_INSERT="Insert";
		Keyboard.KEYNAME_DELETE="Delete";
		Keyboard.KEYNAME_HOME="Home";
		Keyboard.KEYNAME_BEGIN="Begin";
		Keyboard.KEYNAME_END="End";
		Keyboard.KEYNAME_PAGEUP="PgUp";
		Keyboard.KEYNAME_PAGEDOWN="PgDn";
		Keyboard.KEYNAME_PRINTSCREEN="PrntScrn";
		Keyboard.KEYNAME_SCROLLLOCK="ScrlLck";
		Keyboard.KEYNAME_PAUSE="Pause";
		Keyboard.KEYNAME_SYSREQ="SysReq";
		Keyboard.KEYNAME_BREAK="Break";
		Keyboard.KEYNAME_RESET="Reset";
		Keyboard.KEYNAME_STOP="Stop";
		Keyboard.KEYNAME_MENU="Menu";
		Keyboard.KEYNAME_USER="User";
		Keyboard.KEYNAME_SYSTEM="Sys";
		Keyboard.KEYNAME_PRINT="Print";
		Keyboard.KEYNAME_CLEARLINE="ClrLn";
		Keyboard.KEYNAME_CLEARDISPLAY="ClrDsp";
		Keyboard.KEYNAME_INSERTLINE="InsLn";
		Keyboard.KEYNAME_DELETELINE="DelLn";
		Keyboard.KEYNAME_INSERTCHAR="InsChr";
		Keyboard.KEYNAME_DELETECHAR="DelChr";
		Keyboard.KEYNAME_PREV="Prev";
		Keyboard.KEYNAME_NEXT="Next";
		Keyboard.KEYNAME_SELECT="Select";
		Keyboard.KEYNAME_EXECUTE="Exec";
		Keyboard.KEYNAME_UNDO="Undo";
		Keyboard.KEYNAME_REDO="Redo";
		Keyboard.KEYNAME_FIND="Find";
		Keyboard.KEYNAME_HELP="Help";
		Keyboard.KEYNAME_MODESWITCH="ModeSw";
		Keyboard.STRING_UPARROW="?";
		Keyboard.STRING_DOWNARROW="?";
		Keyboard.STRING_LEFTARROW="?";
		Keyboard.STRING_RIGHTARROW="?";
		Keyboard.STRING_F1="?";
		Keyboard.STRING_F2="?";
		Keyboard.STRING_F3="?";
		Keyboard.STRING_F4="?";
		Keyboard.STRING_F5="?";
		Keyboard.STRING_F6="?";
		Keyboard.STRING_F7="?";
		Keyboard.STRING_F8="?";
		Keyboard.STRING_F9="?";
		Keyboard.STRING_F10="?";
		Keyboard.STRING_F11="?";
		Keyboard.STRING_F12="?";
		Keyboard.STRING_F13="?";
		Keyboard.STRING_F14="?";
		Keyboard.STRING_F15="?";
		Keyboard.STRING_F16="?";
		Keyboard.STRING_F17="?";
		Keyboard.STRING_F18="?";
		Keyboard.STRING_F19="?";
		Keyboard.STRING_F20="?";
		Keyboard.STRING_F21="?";
		Keyboard.STRING_F22="?";
		Keyboard.STRING_F23="?";
		Keyboard.STRING_F24="?";
		Keyboard.STRING_F25="?";
		Keyboard.STRING_F26="?";
		Keyboard.STRING_F27="?";
		Keyboard.STRING_F28="?";
		Keyboard.STRING_F29="?";
		Keyboard.STRING_F30="?";
		Keyboard.STRING_F31="?";
		Keyboard.STRING_F32="?";
		Keyboard.STRING_F33="?";
		Keyboard.STRING_F34="?";
		Keyboard.STRING_F35="?";
		Keyboard.STRING_INSERT="?";
		Keyboard.STRING_DELETE="?";
		Keyboard.STRING_HOME="?";
		Keyboard.STRING_BEGIN="?";
		Keyboard.STRING_END="?";
		Keyboard.STRING_PAGEUP="?";
		Keyboard.STRING_PAGEDOWN="?";
		Keyboard.STRING_PRINTSCREEN="?";
		Keyboard.STRING_SCROLLLOCK="?";
		Keyboard.STRING_PAUSE="?";
		Keyboard.STRING_SYSREQ="?";
		Keyboard.STRING_BREAK="?";
		Keyboard.STRING_RESET="?";
		Keyboard.STRING_STOP="?";
		Keyboard.STRING_MENU="?";
		Keyboard.STRING_USER="?";
		Keyboard.STRING_SYSTEM="?";
		Keyboard.STRING_PRINT="?";
		Keyboard.STRING_CLEARLINE="?";
		Keyboard.STRING_CLEARDISPLAY="?";
		Keyboard.STRING_INSERTLINE="?";
		Keyboard.STRING_DELETELINE="?";
		Keyboard.STRING_INSERTCHAR="?";
		Keyboard.STRING_DELETECHAR="?";
		Keyboard.STRING_PREV="?";
		Keyboard.STRING_NEXT="?";
		Keyboard.STRING_SELECT="?";
		Keyboard.STRING_EXECUTE="?";
		Keyboard.STRING_UNDO="?";
		Keyboard.STRING_REDO="?";
		Keyboard.STRING_FIND="?";
		Keyboard.STRING_HELP="?";
		Keyboard.STRING_MODESWITCH="?";
		Keyboard.NUMBER_0=48;
		Keyboard.NUMBER_1=49;
		Keyboard.NUMBER_2=50;
		Keyboard.NUMBER_3=51;
		Keyboard.NUMBER_4=52;
		Keyboard.NUMBER_5=53;
		Keyboard.NUMBER_6=54;
		Keyboard.NUMBER_7=55;
		Keyboard.NUMBER_8=56;
		Keyboard.NUMBER_9=57;
		Keyboard.A=65;
		Keyboard.B=66;
		Keyboard.C=67;
		Keyboard.D=68;
		Keyboard.E=69;
		Keyboard.F=70;
		Keyboard.G=71;
		Keyboard.H=72;
		Keyboard.I=73;
		Keyboard.J=74;
		Keyboard.K=75;
		Keyboard.L=76;
		Keyboard.M=77;
		Keyboard.N=78;
		Keyboard.O=79;
		Keyboard.P=80;
		Keyboard.Q=81;
		Keyboard.R=82;
		Keyboard.S=83;
		Keyboard.T=84;
		Keyboard.U=85;
		Keyboard.V=86;
		Keyboard.W=87;
		Keyboard.X=88;
		Keyboard.Y=89;
		Keyboard.Z=90;
		Keyboard.SEMICOLON=186;
		Keyboard.EQUAL=187;
		Keyboard.COMMA=188;
		Keyboard.MINUS=189;
		Keyboard.PERIOD=190;
		Keyboard.SLASH=191;
		Keyboard.BACKQUOTE=192;
		Keyboard.LEFTBRACKET=219;
		Keyboard.BACKSLASH=220;
		Keyboard.RIGHTBRACKET=221;
		Keyboard.QUOTE=222;
		Keyboard.ALTERNATE=18;
		Keyboard.BACKSPACE=8;
		Keyboard.CAPS_LOCK=20;
		Keyboard.COMMAND=15;
		Keyboard.CONTROL=17;
		Keyboard.DELETE=46;
		Keyboard.DOWN=40;
		Keyboard.END=35;
		Keyboard.ENTER=13;
		Keyboard.ESCAPE=27;
		Keyboard.F1=112;
		Keyboard.F2=113;
		Keyboard.F3=114;
		Keyboard.F4=115;
		Keyboard.F5=116;
		Keyboard.F6=117;
		Keyboard.F7=118;
		Keyboard.F8=119;
		Keyboard.F9=120;
		Keyboard.F10=121;
		Keyboard.F11=122;
		Keyboard.F12=123;
		Keyboard.F13=124;
		Keyboard.F14=125;
		Keyboard.F15=126;
		Keyboard.HOME=36;
		Keyboard.INSERT=45;
		Keyboard.LEFT=37;
		Keyboard.NUMPAD=21;
		Keyboard.NUMPAD_0=96;
		Keyboard.NUMPAD_1=97;
		Keyboard.NUMPAD_2=98;
		Keyboard.NUMPAD_3=99;
		Keyboard.NUMPAD_4=100;
		Keyboard.NUMPAD_5=101;
		Keyboard.NUMPAD_6=102;
		Keyboard.NUMPAD_7=103;
		Keyboard.NUMPAD_8=104;
		Keyboard.NUMPAD_9=105;
		Keyboard.NUMPAD_ADD=107;
		Keyboard.NUMPAD_DECIMAL=110;
		Keyboard.NUMPAD_DIVIDE=111;
		Keyboard.NUMPAD_ENTER=108;
		Keyboard.NUMPAD_MULTIPLY=106;
		Keyboard.NUMPAD_SUBTRACT=109;
		Keyboard.PAGE_DOWN=34;
		Keyboard.PAGE_UP=33;
		Keyboard.RIGHT=39;
		Keyboard.SHIFT=16;
		Keyboard.SPACE=32;
		Keyboard.TAB=9;
		Keyboard.UP=38;
		Keyboard.RED=16777216;
		Keyboard.GREEN=16777217;
		Keyboard.YELLOW=16777218;
		Keyboard.BLUE=16777219;
		Keyboard.CHANNEL_UP=16777220;
		Keyboard.CHANNEL_DOWN=16777221;
		Keyboard.RECORD=16777222;
		Keyboard.PLAY=16777223;
		Keyboard.PAUSE=16777224;
		Keyboard.STOP=16777225;
		Keyboard.FAST_FORWARD=16777226;
		Keyboard.REWIND=16777227;
		Keyboard.SKIP_FORWARD=16777228;
		Keyboard.SKIP_BACKWARD=16777229;
		Keyboard.NEXT=16777230;
		Keyboard.PREVIOUS=16777231;
		Keyboard.LIVE=16777232;
		Keyboard.LAST=16777233;
		Keyboard.MENU=16777234;
		Keyboard.INFO=16777235;
		Keyboard.GUIDE=16777236;
		Keyboard.EXIT=16777237;
		Keyboard.BACK=16777238;
		Keyboard.AUDIO=16777239;
		Keyboard.SUBTITLE=16777240;
		Keyboard.DVR=16777241;
		Keyboard.VOD=16777242;
		Keyboard.INPUT=16777243;
		Keyboard.SETUP=16777244;
		Keyboard.HELP=16777245;
		Keyboard.MASTER_SHELL=16777246;
		Keyboard.SEARCH=16777247;
		REGSTATICATTR$(Keyboard,
		['CharCodeStrings',function(){return this.CharCodeStrings=["Up","Down","Left","Right","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","F25","F26","F27","F28","F29","F30","F31","F32","F33","F34","F35","Insert","Delete","Home","Begin","End","PgUp","PgDn","PrntScrn","ScrlLck","Pause","SysReq","Break","Reset","Stop","Menu","User","Sys","Print","ClrLn","ClrDsp","InsLn","DelLn","InsChr","DelChr","Prev","Next","Select","Exec","Undo","Redo","Find","Help","ModeSw"];
		}

		]);
		return Keyboard;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/keyboardtype.as=======10199.999647
	var KeyboardType=iflash.ui.KeyboardType=(function(){
		function KeyboardType(){
			;
		}

		REGCLASS$(KeyboardType,'iflash.ui.KeyboardType',true,true);
		KeyboardType.ALPHANUMERIC="alphanumeric";
		KeyboardType.KEYPAD="keypad";
		KeyboardType.NONE="none";
		return KeyboardType;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/keylocation.as=======10199.999646
	var KeyLocation=iflash.ui.KeyLocation=(function(){
		function KeyLocation(){
			;
		}

		REGCLASS$(KeyLocation,'iflash.ui.KeyLocation',true,true);
		KeyLocation.STANDARD=0;
		KeyLocation.LEFT=1;
		KeyLocation.RIGHT=2;
		KeyLocation.NUM_PAD=3;
		KeyLocation.D_PAD=4;
		return KeyLocation;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/mouse.as=======10199.999645
	var Mouse=iflash.ui.Mouse=(function(){
		function Mouse(){
			;
		}

		REGCLASS$(Mouse,'iflash.ui.Mouse',true,true);
		Mouse._$GET_supportsCursor=function(){return false}
		Object.defineProperty(Mouse,'supportsCursor',{get:Mouse._$GET_supportsCursor,enumerable:false});
		Mouse._$GET_cursor=function(){return ""}
		Mouse._$SET_cursor=function(value){}
		Object.defineProperty(Mouse,'cursor',{get:Mouse._$GET_cursor,set:Mouse._$SET_cursor,enumerable:false});
		Mouse._$GET_supportsNativeCursor=function(){return false}
		Object.defineProperty(Mouse,'supportsNativeCursor',{get:Mouse._$GET_supportsNativeCursor,enumerable:false});
		Mouse.hide=function(){}
		Mouse.show=function(){}
		Mouse.registerCursor=function(value,cursorData){}
		Mouse.unregisterCursor=function(param1){}
		return Mouse;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/mousecursor.as=======10199.999644
	var MouseCursor=iflash.ui.MouseCursor=(function(){
		function MouseCursor(){}
		REGCLASS$(MouseCursor,'iflash.ui.MouseCursor',true,true);
		MouseCursor.ARROW="arrow";
		MouseCursor.AUTO="auto";
		MouseCursor.BUTTON="button";
		MouseCursor.HAND="hand";
		MouseCursor.IBEAM="ibeam";
		return MouseCursor;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/mousecursordata.as=======10199.999643
	var MouseCursorData=iflash.ui.MouseCursorData=(function(){
		function MouseCursorData(){
			;
		}

		REGCLASS$(MouseCursorData,'iflash.ui.MouseCursorData',true,true);
		var __proto__=MouseCursorData.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_data',function(){return null});
		DEFUNENUMPTY$(__proto__,'_$set_data',function(param1){});
		Object.defineProperty(__proto__,'data',{get:__proto__._$get_data,set:__proto__._$set_data,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_hotSpot',function(){return null});
		DEFUNENUMPTY$(__proto__,'_$set_hotSpot',function(param1){});
		Object.defineProperty(__proto__,'hotSpot',{get:__proto__._$get_hotSpot,set:__proto__._$set_hotSpot,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_frameRate',function(){return 0});
		DEFUNENUMPTY$(__proto__,'_$set_frameRate',function(param1){});
		Object.defineProperty(__proto__,'frameRate',{get:__proto__._$get_frameRate,set:__proto__._$set_frameRate,enumerable:false});
		return MouseCursorData;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/multitouch.as=======10199.999642
	var Multitouch=iflash.ui.Multitouch=(function(){
		function Multitouch(){};
		REGCLASS$(Multitouch,'iflash.ui.Multitouch',true,true);
		Multitouch._$GET_inputMode=function(){
			return Multitouch.$inputMode;
		}

		Multitouch._$SET_inputMode=function(value){
			Multitouch.$inputMode=value;
		}

		Object.defineProperty(Multitouch,'inputMode',{get:Multitouch._$GET_inputMode,set:Multitouch._$SET_inputMode,enumerable:false});
		Multitouch._$GET_isSupportTouch=function(){
			var doc=Browser.document;
			var canvas=doc.getElementsByTagName("canvas")[0]
			canvas.addEventListener("touchstart",function(e){trace("touchstart");});
			canvas.addEventListener("touchend",function(e){trace("touchend");});
			canvas.addEventListener("touchcancel",function(e){trace("touchcancel");});
			canvas.addEventListener("touchleave",function(e){trace("touchleave");});
			canvas.addEventListener("touchmove",function(e){trace("touchmove");});
			var isSupportTouch="ontouchend" in doc ? true :false;
			return isSupportTouch;
		}

		Object.defineProperty(Multitouch,'isSupportTouch',{get:Multitouch._$GET_isSupportTouch,enumerable:false});
		Multitouch._$GET_maxTouchPoints=function(){
			Multitouch._$maxTouchPoints=3;
			return Multitouch._$maxTouchPoints;
		}

		Multitouch._$SET_maxTouchPoints=function(value){
			Multitouch._$maxTouchPoints=value;
		}

		Object.defineProperty(Multitouch,'maxTouchPoints',{get:Multitouch._$GET_maxTouchPoints,set:Multitouch._$SET_maxTouchPoints,enumerable:false});
		Multitouch._$GET_supportedGestures=function(){
			Multitouch._$supportedGestures=new Array();
			if(Multitouch.isSupportTouch){
				Multitouch._$supportedGestures.push(/*iflash.events.TransformGestureEvent.GESTURE_PAN*/"gesturePan");
				Multitouch._$supportedGestures.push(/*iflash.events.TransformGestureEvent.GESTURE_ROTATE*/"gestureRotate");
				Multitouch._$supportedGestures.push(/*iflash.events.TransformGestureEvent.GESTURE_SWIPE*/"gestureSwipe");
				Multitouch._$supportedGestures.push(/*iflash.events.TransformGestureEvent.GESTURE_ZOOM*/"gestureZoom");
				Multitouch._$supportedGestures.push(/*iflash.events.GestureEvent.GESTURE_TWO_FINGER_TAP*/"gestureTwoFingerTap");
			}
			return Multitouch._$supportedGestures;
		}

		Object.defineProperty(Multitouch,'supportedGestures',{get:Multitouch._$GET_supportedGestures,enumerable:false});
		Multitouch._$GET_supportsTouchEvents=function(){
			Multitouch._$supportsTouchEvents=Multitouch.isSupportTouch;
			return Multitouch._$supportsTouchEvents;
		}

		Object.defineProperty(Multitouch,'supportsTouchEvents',{get:Multitouch._$GET_supportsTouchEvents,enumerable:false});
		Multitouch._$GET_mapTouchToMouse=function(){
			Multitouch._$mapTouchToMouse=Multitouch.isSupportTouch;
			return Multitouch._$mapTouchToMouse;
		}

		Object.defineProperty(Multitouch,'mapTouchToMouse',{get:Multitouch._$GET_mapTouchToMouse,enumerable:false});
		Multitouch._$GET_supportsGestureEvents=function(){
			Multitouch._$supportsGestureEvents=Multitouch.isSupportTouch;
			return Multitouch._$supportsGestureEvents;
		}

		Object.defineProperty(Multitouch,'supportsGestureEvents',{get:Multitouch._$GET_supportsGestureEvents,enumerable:false});
		Multitouch.$inputMode=null;;
		Multitouch._$mapTouchToMouse=false;;
		Multitouch._$maxTouchPoints=0;;
		Multitouch._$supportedGestures=null;;
		Multitouch._$supportsGestureEvents=false;;
		Multitouch._$supportsTouchEvents=false
		return Multitouch;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/multitouchinputmode.as=======10199.999641
	var MultitouchInputMode=iflash.ui.MultitouchInputMode=(function(){
		function MultitouchInputMode(){};
		REGCLASS$(MultitouchInputMode,'iflash.ui.MultitouchInputMode',true,true);
		MultitouchInputMode.GESTURE="gesture";
		MultitouchInputMode.NONE="none";
		MultitouchInputMode.TOUCH_POINT="touchPoint";
		return MultitouchInputMode;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/xml/xmlattribute.as=======10199.999628
	var XMLAttribute=iflash.xml.XMLAttribute=(function(){
		function XMLAttribute(){
			this._name=null;
			this._value=null;
		}

		REGCLASS$(XMLAttribute,'iflash.xml.XMLAttribute',true,false);
		var __proto__=XMLAttribute.prototype;
		LAYABOX.implements(__proto__,{"iflash.xml.IXMLElement":true})
		__proto__.getAttribute=function(aName){
			return null;
		}

		__proto__.attribute=function(aName){
			return null;
		}

		__proto__.setChildByName=function(nName,value){
			return null;
		}

		__proto__.getChildByAttribute=function(attribute,value){
			return null;
		}

		__proto__.getChildByName=function(nName){
			return null;
		}

		__proto__.setAttribute=function(name,value){
			return null;
		}

		__proto__.getAttributes=function(){
			return null;
		}

		__proto__.attributes=function(){
			return null;
		}

		__proto__.getChildAt=function(index){
			return null;
		}

		__proto__.children=function(){
			return null;
		}

		__proto__.elements=function(name){
			(name===void 0)&& (name="*");
			return null;
		}

		__proto__.setName=function(str){
			this._name=str;
		}

		__proto__.lengths=function(){
			return 0;
		}

		__proto__.name=function(){
			return this._name;
		}

		__proto__.appendChild=function(value){
			return null;
		}

		__proto__.toString=function(){
			return this._value;
		}

		__proto__.toXMLString=function(){
			return null;
		}

		__proto__.hasSimpleContent=function(){return false}
		__proto__.hasComplexContent=function(){return false}
		__proto__.hasOwnProperty=function(pName){
			return false;
		}

		__proto__.copy=function(){
			var xa=new XMLAttribute();
			xa._name=this._name;
			xa._value=this._value;
			return xa;
		}

		__proto__.copyFrom=function(source){
			if((source instanceof iflash.xml.XMLAttribute )){
				var value=source;
				this._name=value._name;
				this._value=value._value;
				return this;
			}
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_localName',function(){
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_localName',function(str){
			this._name=str;
		});

		Object.defineProperty(__proto__,'localName',{get:__proto__._$get_localName,set:__proto__._$set_localName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeType',function(){
			return "attribute";
		});

		Object.defineProperty(__proto__,'nodeType',{get:__proto__._$get_nodeType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_value',function(){
			return this._value;
		});

		DEFUNENUMPTY$(__proto__,'_$set_value',function(str){
			this._value=str;
		});

		Object.defineProperty(__proto__,'value',{get:__proto__._$get_value,set:__proto__._$set_value,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_childNodes',function(){
			return null;
		});

		Object.defineProperty(__proto__,'childNodes',{get:__proto__._$get_childNodes,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parent',function(){return null;});
		Object.defineProperty(__proto__,'parent',{get:__proto__._$get_parent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeName',function(){
			return null;
		});

		Object.defineProperty(__proto__,'nodeName',{get:__proto__._$get_nodeName,enumerable:false});
		XMLAttribute.create=function(name,value){
			var xa=new XMLAttribute();
			xa._name=name;xa._value=value;
			return xa;
		}

		return XMLAttribute;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/xml/xmlelement.as=======10199.999627
	var XMLElement=iflash.xml.XMLElement=(function(){
		function XMLElement(value){
			this._nodeName=null;
			this._nodeType=null;
			this._nodeValue=null;
			this._parentNode=null;
			this._attributes={};
			this._childNodes=[];
			this._nestCount=0;
			DEFSOMEUNENUMPTY$(this,['_nodeName','_childNodes','_nodeType','_nodeValue','_parentNode','_attributes','_nestCount']);
			if(value){
				if(value && value['_data_']){value=value.toString();}
					if(value){XMLElement.create(value,this)}
			}
		}

		REGCLASS$(XMLElement,'iflash.xml.XMLElement',true,false);
		var __proto__=XMLElement.prototype;
		LAYABOX.implements(__proto__,{"iflash.xml.IXMLElement":true})
		__proto__.getAttributes=function(){
			return this._attributes;
		}

		__proto__.setAttribute=function(name,value){
			return this._attributes[name]=value;
		}

		__proto__.attributes=function(){
			if(this.name()==""||this.name()==null)return null;
			var arr=[]
			for(var s in this._attributes){
				var xmla=XMLAttribute.create(s,this._attributes[s]);
				arr.push(xmla);
			}
			return arr;
		}

		__proto__.getAllAttribute=function(name){
			var arr=new Array();
			this._getAllAttribute_(arr,this,name);
			return arr;
		}

		__proto__._getAllAttribute_=function(arr,xml,name){
			var len=xml._childNodes?xml._childNodes.length:0;
			for(var i=0;i<len;i++){
				var node=xml._childNodes [i];
				var body=node._attributes[name];
				if(body){
					arr.push(body.toString());
				}
				this._getAllAttribute_(arr,node,name);
			}
		}

		__proto__.getAttribute=function(name){
			if(name==""||name==null)return null;
			if(name=="*")return this._attributes;
			return this._attributes[name];
		}

		__proto__.attribute=function(name){
			return this.getAttribute(name);
		}

		__proto__.getChildByName=function(name){return this.child(name);}
		__proto__.getAllChildByName=function(name){
			var arr=[];
			this._getAllChildByName_(arr,this,name);
			return XMLElementList.create(arr);
		}

		__proto__._getAllChildByName_=function(arr,xml,name){
			var len=xml._childNodes?xml._childNodes.length:0;
			for(var i=0;i<len;i++){
				var node=xml._childNodes [i];
				if(node._nodeName==name){
					arr.push(node);
				}
				this._getAllChildByName_(arr,node,name);
			}
		}

		__proto__.getChildByAttribute=function(attribute,value){
			if(attribute==""||attribute==null)return null;
			if(value==""||value==null)return null;
			var ar=[],len=this._childNodes?this._childNodes.length:0;
			for(var i=0;i<len;i++){
				var n=this._childNodes [i];
				if(n._attributes[attribute]==value){ar.push(n);}
					}
			return XMLElementList.create(ar);
		}

		__proto__.children=function(){
			return XMLElementList.create(this._childNodes.concat());
		}

		__proto__.getChildAt=function(index){
			if(!this._childNodes||index>this._childNodes.length)return null;
			return this._childNodes[index];
		}

		__proto__.elements=function(name){
			(name===void 0)&& (name="*");
			if(name=='*')return XMLElementList.create(this._childNodes.concat());
			return this.child(name);
		}

		__proto__.appendChild=function(value){
			if((typeof value=='string'))
				value=iflash.xml.XMLElement.create(String(value));
			var n;
			if((value instanceof iflash.xml.XMLElement )){
				n=value._nodeName;
				var x=this[n];
				if((x instanceof iflash.xml.XMLElementList )){
					x.__addChild__(value);
				}
				if((x instanceof iflash.xml.XMLElement )){
					var tmp=x;
					x=this[n]=new XMLElementList();
					x.__addChild__(tmp);
					x.__addChild__(value);
				}
				if(!x)this[n]=value;
				this._childNodes.push(value);
			}
			else if((value instanceof iflash.xml.XMLElementList )){
				var len=value.lengths();
				for(var i=0;i<len;i++){
					var node=value._childNodes[i];
					this.appendChild(node);
				}
			}
			return value;
		}

		__proto__.setChildByName=function(nName,value){
			var c=this.getChildByName(nName);
			if(!c)return null;
			c.copyFrom(value);
			return c;
		}

		__proto__.copy=function(){
			var xe=new XMLElement();
			var o={};
			for(var key in this._attributes){
				o[key]=this._attributes[key];
			}
			xe._attributes=o;
			xe._childNodes=this._childNodes.concat();
			xe._nodeName=this._nodeName;
			xe._parentNode=null;
			xe._nodeValue=this._nodeValue;
			return xe;
		}

		__proto__.copyFrom=function(source){
			if((source instanceof iflash.xml.XMLElement )){
				var value=source;
				this._nodeName=value._nodeName;
				this._nodeValue=value._nodeValue;
				this._attributes=value._attributes;
				this._childNodes=value._childNodes;
				return this;
			}
			return null;
		}

		__proto__.setName=function(str){
			this._nodeName=str;
		}

		__proto__.hasOwnProperty=function(pName){
			var len=this._childNodes.length;
			for(var i=0;i<len;i++){
				if(this._childNodes[i]._nodeName==pName)return true;
			}
			return false;
		}

		__proto__.hasSimpleContent=function(){return this._nodeValue!=null}
		__proto__.hasComplexContent=function(){return this._childNodes.length>0}
		__proto__.lengths=function(){return 1}
		__proto__.name=function(){return this._nodeName;}
		__proto__.toString=function(){
			var str="";
			if(this._childNodes.length){
				str=this.toXMLString();
			}
			else str=this._nodeValue;
			return str;
		}

		__proto__.getString=function(){
			var str="";
			str=this.toXMLString();
			return str;
		}

		__proto__.toXMLString=function(){
			if (!XMLElement._callee)
				XMLElement._callee=this;
			var str="";
			if (this._nodeName){
				str+="<"+this._nodeName;
				for (var key in this._attributes){
					str+=" "+key+'="'+this._attributes[key]+'"'
				}
				str+=">";
			}
			str+=(this._childNodes.length ? "\n" :this._nodeValue);
			this._nestCount=(this._childNodes.length)? this._nestCount+1 :this._nestCount;
			for (var i=0;i < this._childNodes.length;i++){
				this._childNodes[i]._nestCount=this._nestCount;
				for (var j=0;j < this._nestCount;j++){
					str+="   ";
				}
				str+=this._childNodes[i].toXMLString();
				for (j=0;j < this._nestCount-1;j++){
					str+="   ";
				}
			}
			if (this._nodeName)
				str+="</"+this._nodeName+">";
			if(XMLElement._callee !=this)
				str+="\n";
			else
			XMLElement._callee=null;
			return str;
		}

		__proto__.child=function(nName){
			if(nName==""||nName==null)return null;
			var ar=[],len=this._childNodes?this._childNodes.length:0;
			for(var i=0;i<len;i++){
				var n=this._childNodes [i];
				if(n.localName==nName){ar.push(n);}
					}
			return XMLElementList.create(ar);
		}

		DEFUNENUMPTY$(__proto__,'_$get_localName',function(){return this._nodeName;});
		DEFUNENUMPTY$(__proto__,'_$set_localName',function(str){
			this._nodeName=str;
		});

		Object.defineProperty(__proto__,'localName',{get:__proto__._$get_localName,set:__proto__._$set_localName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeType',function(){
			return this._nodeType;
		});

		Object.defineProperty(__proto__,'nodeType',{get:__proto__._$get_nodeType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_childNodes',function(){
			return this._childNodes;
		});

		Object.defineProperty(__proto__,'childNodes',{get:__proto__._$get_childNodes,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parent',function(){return this._parentNode;});
		Object.defineProperty(__proto__,'parent',{get:__proto__._$get_parent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeName',function(){
			return this._nodeName;
		});

		Object.defineProperty(__proto__,'nodeName',{get:__proto__._$get_nodeName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_value',function(){return this._nodeValue;});
		DEFUNENUMPTY$(__proto__,'_$set_value',function(str){
			this._nodeValue=str;
		});

		Object.defineProperty(__proto__,'value',{get:__proto__._$get_value,set:__proto__._$set_value,enumerable:false});
		DEFSOMEUNENUMPTY$(__proto__,['getAttributes','setAttribute','attributes','getAllAttribute','_getAllAttribute_','getAttribute','attribute','getChildByName','getAllChildByName','_getAllChildByName_','getChildByAttribute','children','getChildAt','elements','appendChild','setChildByName','copy','copyFrom','setName','hasOwnProperty','hasSimpleContent','hasComplexContent','lengths','name','toString','toXMLString','child']);
		XMLElement.create=function(xml,nod){
			nod=nod?nod:new XMLElement();var xmld;
			if(Laya.CONCHVER && !((typeof xml=='string'))){
				xmld=xml;xmld=xmld.childNodes[0];
				}else{
				/*__JS__ */xmld=(new DOMParser()).parseFromString(xml,'text/xml');var t_i=0;var t_xmld=null;do{t_xmld=xmld.childNodes[t_i++];if(t_xmld.nodeName !='#comment' ){xmld=t_xmld;break;}}while(t_i<xmld.childNodes.length);;
			};
			var nodes=xmld.childNodes;
			var nodeValue;
			nodeValue=xmld.nodeValue;
			nod._nodeName=xmld.nodeName;
			nod._nodeValue=nodeValue==null? xmld.textContent:nodeValue;
			var attribs=xmld.attributes,len=attribs?attribs.length:0;
			for(var j=0;j<len;j++){
				var nv=attribs[j];
				var o=nod._attributes;o[nv.nodeName]=nv.nodeValue;
			}
			for(var i=0;i<nodes.length;i++){
				var n=nodes[i];
				var nodeName=n.nodeName;
				nodeValue=n.nodeValue;
				if(nodeName!="#text"&&nodeName!="#comment"){
					if(nodeName=="#cdata-section" || nodeName==""){nod._nodeValue=nodeValue==null ? n.textContent:nodeValue;continue ;}
						XMLElement.setXmlNode(n,nod);
				}
			}
			return nod;
		}

		XMLElement.setXmlNode=function(data,parent){
			var nod=new XMLElement(null);
			nod._parentNode=parent;
			if(!parent._childNodes){parent._childNodes=[]};
			var nodeValue=data.nodeValue;
			nod._nodeName=data.nodeName;
			nod._nodeValue=nodeValue==null? data.textContent:nodeValue;
			var attribs=data.attributes,len=attribs.length;
			for(var j=0;j<len;j++){
				var nv=attribs[j];
				var o=nod._attributes;o[nv.nodeName]=nv.nodeValue;
			};
			var nodes=data.childNodes;
			for(var i=0;i<nodes.length;i++){
				var n=nodes[i];
				var nodeName=n.nodeName;
				if(nodeName!="#text"&&nodeName!="#comment")
				{if(nodeName=="#cdata-section" || nodeName==""){nod._nodeValue=n.nodeValue==null ? n.textContent:n.nodeValue;continue ;};XMLElement.setXmlNode(n,nod);}
			}
			parent.appendChild(nod);
		}

		XMLElement._callee=null
		return XMLElement;
	})()


	var XML=$lmodule.XML=iflash.xml.XMLElement;
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/mx/core/soundasset.as=======10199.999621
	var SoundAsset=mx.core.SoundAsset=(function(){
		function SoundAsset(){}
		REGCLASS$(SoundAsset,'mx.core.SoundAsset',true,true);
		return SoundAsset;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/errors/illegaloperationerror.as=======10099.999894
	var IllegalOperationError=iflash.errors.IllegalOperationError=(function(_super){
		function IllegalOperationError(message,id){
			(message===void 0)&& (message="");
			(id===void 0)&& (id=0);
			_super.call(this,message,id);
		}

		REGCLASS$(IllegalOperationError,'iflash.errors.IllegalOperationError',true,true);
		return IllegalOperationError;
	})(Error)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/errors/ioerror.as=======10099.999893
	var IOError=iflash.errors.IOError=(function(_super){
		function IOError(message,id){
			(message===void 0)&& (message="");
			(id===void 0)&& (id=0);
			_super.call(this,message,id);
		}

		REGCLASS$(IOError,'iflash.errors.IOError',true,true);
		return IOError;
	})(Error)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/xml/xmlelementlist.as=======10099.999626
	var XMLElementList=iflash.xml.XMLElementList=(function(_super){
		function XMLElementList(){
			this._childNodes=[];
			this._value="";
			_super.apply(this,arguments);
			DEFSOMEUNENUMPTY$(this,['_childNodes','_value']);
			/*__JS__ */Object.defineProperty(this,'length',{value:this.length,writable:true,enumerable:false,configurable:false});
		}

		REGCLASS$(XMLElementList,'iflash.xml.XMLElementList',true,true,Array);
		var __proto__=XMLElementList.prototype;
		LAYABOX.implements(__proto__,{"iflash.xml.IXMLElement":true})
		__proto__.getAttributes=function(){return null;}
		__proto__.attributes=function(){return null;}
		__proto__.getAttribute=function(name){
			if(!this._childNodes)return new XMLElementList();
			var arr=[],len=this._childNodes.length;
			for(var i=0;i<len;i++){
				var value=this._childNodes[i]._attributes[name];
				arr.push(value?value:"");
			}
			return arr;
		}

		__proto__.attribute=function(name){
			return this.getAttribute(name);
		}

		__proto__.setAttribute=function(name,value){
			if(this._childNodes.length==1){
				this._childNodes[0]._attribute
				return value;
			}
			return null;
		}

		__proto__.getChildByName=function(name){
			if(!this._childNodes)return new XMLElementList();
			var arr=[],len=this._childNodes.length;
			for(var i=0;i<len;i++){
				var nodes=this._childNodes[i].getChildByName(name)._childNodes;
				(nodes&&nodes.length)&&(arr=arr.concat(this._childNodes[i].getChildByName(name)._childNodes));
			}
			return XMLElementList.create(arr);
		}

		__proto__.getChildByAttribute=function(attribute,value){
			if(attribute==""||attribute==null)return null;
			if(value==""||value==null)return null;
			var ar=[],len=this._childNodes?this._childNodes.length:0;
			for(var i=0;i<len;i++){
				var n=this._childNodes [i];
				if(n._attributes[attribute]==value){ar.push(n);}
					}
			return iflash.xml.XMLElementList.create(ar);
		}

		__proto__.getChildAt=function(index){
			if(!this._childNodes||index>this._childNodes.length)return null;
			return this._childNodes[index];
		}

		__proto__.children=function(){
			var xl=new XMLElementList();
			var ar=[],len=this._childNodes.length;
			for(var i=0;i<len;i++){
				ar=ar.concat(this._childNodes[i]._childNodes);
			}
			xl._childNodes=ar;
			return xl;
		}

		__proto__.elements=function(name){
			(name===void 0)&& (name="*");
			if(!this._childNodes)return new XMLElementList();
			if(name=="*")return XMLElementList.create(this._childNodes);
			var arr=[],len=this._childNodes.length;
			for(var i=0;i<len;i++){
				var nodes=this._childNodes[i].getChildByName(name)._childNodes;
				(nodes&&nodes.length)&&(arr=arr.concat(this._childNodes[i].getChildByName(name)._childNodes));
			}
			return XMLElementList.create(arr);
		}

		__proto__.appendChild=function(value){
			if(this.lengths()==1){
				if((value instanceof iflash.xml.XMLElement )){
					this._childNodes[0].appendChild(value);
				}
				else if((value instanceof iflash.xml.XMLElementList )){
					var len=/*if err,please use iflash.method.xmlLength()*/value.length();
					for(var i=0;i<len;i++){
						var n=value._childNodes[i];
						this._childNodes[0].appendChild(n);
					}
				}
				else{
					this._childNodes[0].appendChild(XMLElement.create(String(value)));
				}
			}
			else{
				return null;
			}
			return value;
		}

		__proto__.__addChild__=function(value){
			if((value instanceof iflash.xml.XMLElement )){
				var ixl=value.children(),len=ixl._childNodes.length;
				for(var i=0;i<len;i++){
					this.__doAdd__(ixl._childNodes[i]);
				}
				this._childNodes.push(value);
				this.push(value);
			}
			else if((value instanceof iflash.xml.XMLElementList )){
				len=value.lengths();
				for(i=0;i<len;i++){
					var nd=value._childNodes[i];
					this.__addChild__(nd);
				}
			}
		}

		__proto__.__doAdd__=function(value){
			if(this._childNodes.indexOf(value)!=-1)return;
			var n=value._nodeName;
			var x=this[n];
			if((x instanceof iflash.xml.XMLElementList )){
				x.__doAdd__(value);
			}
			if((x instanceof iflash.xml.XMLElement )){
				var tmp=x;
				x=this[n]=new XMLElementList();
				x.__addChild__(tmp);
				x.__addChild__(value);
			}
			if(!x)this[n]=value;
		}

		__proto__.setName=function(str){
			if(this._childNodes.length==1){
				this._childNodes[0]._nodeName=str;
			}
		}

		__proto__.copyFrom=function(source){
			if(this.lengths()>1)return null;
			var il=((source instanceof iflash.xml.XMLElementList ));
			if(il&&source.lengths()>1)return null;
			if(il)
				this._childNodes[0].copyFrom(source.getChildAt(0));
			else
			this._childNodes[0].copyFrom(source);
			return this._childNodes [0];
		}

		__proto__.hasOwnProperty=function(pName){
			if(this._childNodes.length==0){
				return this._childNodes[0].hasOwnProperty(pName);
			}
			return false;
		}

		__proto__.setChildByName=function(nName,value){
			var c=this.getChildByName(nName)
			if(!c)return null;
			if(c.lengths()==1){
				c.childNodes[0].setChildByName(nName,value);
				return c;
			}
			return null;
		}

		__proto__.hasComplexContent=function(){if (this._childNodes.length==0){return this._childNodes[0].length > 0 }return false }
		__proto__.hasSimpleContent=function(){var len=this._childNodes.length;for (var i=0;i < len;i++){if (this._childNodes._nodeValue !=null){return true }};return false }
		__proto__.name=function(){return null }
		__proto__.lengths=function(){return this._childNodes?this._childNodes.length:0;}
		__proto__.toString=function(){
			var str="";
			if (this._childNodes){
				for(var i=0;i<this._childNodes.length;i++){
					if(this._childNodes.length > 1)
						str+=this._childNodes[i].getString();
					else if (this._childNodes.length==1)
					str+=this._childNodes[i].toString();
				}
			}
			return str;
		}

		__proto__.toXMLString=function(){
			var str="";
			for(var i=0;i<this._childNodes.length;i++){
				str+=this._childNodes[i].toXMLString();
			}
			return str;
		}

		__proto__.copy=function(){
			var xel=new XMLElementList();
			xel._value=this._value;
			xel._childNodes=this._childNodes.concat();
			return xel;
		}

		DEFUNENUMPTY$(__proto__,'_$get_localName',function(){return null });
		DEFUNENUMPTY$(__proto__,'_$set_localName',function(str){
			if(this._childNodes.length==1){
				this._childNodes[0]._nodeName=str;
			}
		});

		Object.defineProperty(__proto__,'localName',{get:__proto__._$get_localName,set:__proto__._$set_localName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeType',function(){
			return "*";
		});

		Object.defineProperty(__proto__,'nodeType',{get:__proto__._$get_nodeType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_value',function(){
			if(this._childNodes.length==1){
				return this._childNodes[0]._nodeValue;
			}
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_value',function(str){
			if(this._childNodes.length==1){
				this._childNodes[0]._nodeValue=str;
			}
		});

		Object.defineProperty(__proto__,'value',{get:__proto__._$get_value,set:__proto__._$set_value,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_childNodes',function(){
			return this._childNodes;
		});

		Object.defineProperty(__proto__,'childNodes',{get:__proto__._$get_childNodes,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parent',function(){
			if(this._childNodes.length==0){
				return this._childNodes[0].parent;
			}
			return null;
		});

		Object.defineProperty(__proto__,'parent',{get:__proto__._$get_parent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeName',function(){
			return null;
		});

		Object.defineProperty(__proto__,'nodeName',{get:__proto__._$get_nodeName,enumerable:false});
		DEFSOMEUNENUMPTY$(__proto__,['getAttributes','attributes','getAttribute','attribute','setAttribute','getChildByName','getChildByAttribute','getChildAt','children','elements','appendChild','__addChild__','__doAdd__','setName','copyFrom','hasOwnProperty','setChildByName','hasComplexContent','hasSimpleContent','name','lengths','toString','toXMLString','copy']);
		XMLElementList.create=function(arr){
			var xl=new XMLElementList();
			xl._childNodes=arr;
			for(var i=0;i<arr.length;i++){
				xl[i]=arr[i];
			}
			return xl;
		}

		return XMLElementList;
	})(Array)


	var XMLList=$lmodule.XMLList=iflash.xml.XMLElementList;
	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/displayobject.as=======10098.999989
	var DisplayObject=iflash.display.DisplayObject=(function(_super){
		function DisplayObject(){
			this._parent_=null;
			this._firstDisplayUnit_=null;
			this._left_=0;
			this._top_=0;
			this._width_=0;
			this._height_=0;
			this._zIndex_=0;
			this._sort_d_=-1;
			this._mouseX_=null;
			this._mouseY_=null;
			this.__id__=0;
			this._mask_=null;
			_super.apply(this,arguments);
			this._Filters_=Filters.__DEFAULT__;
			this._transform_=Transform.__DEFAULT__;
			this._modle_=Browser._createModle_(2,this._id_,this);this._type_|=0x40;
			this._type_ |=0x400 | /*iflash.laya.dom.Node.TYPE_IFLASH*/0x400000;
		}

		REGCLASS$(DisplayObject,'iflash.display.DisplayObject',true,false,_super);
		var __proto__=DisplayObject.prototype;
		__proto__._lyPaint_=function(context,x,y){
			++EventDispatcher.document.drawObjectCount;
			this._firstDisplayUnit_ && (this._firstDisplayUnit_.paint(context,x+this._left_ ,y+this._top_ ,this,this._width_,this._height_)|| (this._repaint_=0));
		}

		__proto__.lySize=function(w,h){
			if (w !=this._width_ || h !=this._height_){
				this._width_=w;
				this._height_=h;
				this._modle_.size(w,h);
			}
		}

		__proto__._lyPos_=function(x,y){
			if (this._left_ !=x || this._top_ !=y){
				this._left_=x;
				this._top_=y;
				this._modle_.pos(x,y);
				this._type_ |=0x10000;
			}
		}

		__proto__.localToGlobal=function(localPoint,goalPoint){
			this.getTransformMatrix(this.root,DisplayObject.HELPER_MATRIX_ALT);
			return MatrixUtil.transformPoint(DisplayObject.HELPER_MATRIX_ALT,localPoint,goalPoint);
		}

		__proto__.globalToLocal=function(globalPoint,goalPoint){
			this.getTransformMatrix(this.root,DisplayObject.HELPER_MATRIX_ALT);
			DisplayObject.HELPER_MATRIX_ALT.invert();
			return MatrixUtil.transformPoint(DisplayObject.HELPER_MATRIX_ALT,globalPoint,goalPoint);
		}

		__proto__.hitTestPoint=function(x,y,shapeFlag,stageSpace){
			(shapeFlag===void 0)&& (shapeFlag=false);
			(stageSpace===void 0)&& (stageSpace=true);
			if (!this.visible)return false;
			var p
			if(stageSpace)
				p=this.stage;
			else
			p=this.parent;
			if (this._getBounds_(p,DisplayObject.HELPER_RECTANGLET).containsPoint(DisplayObject.HELPER_POINT.setTo(x,y)))return true;
			else return false;
			return false;
		}

		__proto__._hitTest_=function(_x,_y,forTouch,mouseDown){
			(forTouch===void 0)&& (forTouch=false);
			(mouseDown===void 0)&& (mouseDown=false);
			if (!this.visible)return null;
			if (this._getBounds_(this,DisplayObject.HELPER_RECTANGLET).containsPoint(DisplayObject.HELPER_POINT.setTo(_x,_y)))return this;
			else return null;
		}

		__proto__.hitTestObject=function(value){
			if (this.visible && this.parent !=null && value !=null && value.parent !=null){
				var currentBounds=this._getBounds_(Stage.stage);
				var targetBounds=value._getBounds_(Stage.stage,new Rectangle());
				return currentBounds.intersects(targetBounds);
			}
			return false;
		}

		__proto__.getRect=function(value){
			return this._getBounds_(value);
		}

		__proto__._getBounds_=function(targetSpace,resultRect){
			if(!resultRect)
				resultRect=DisplayObject.HELPER_RECTANGLET;
			DisplayObject.HELPER_POINT.identity();
			targetSpace.globalToLocal(this.localToGlobal(DisplayObject.HELPER_POINT),DisplayObject.HELPER_POINT);
			return resultRect.setTo(DisplayObject.HELPER_POINT.x,DisplayObject.HELPER_POINT.y,this._width_*this.scaleX,this._height_*this.scaleY);
		}

		__proto__.getBounds=function(targetSpace){
			return this._getBounds_(targetSpace,new Rectangle());
		}

		__proto__.getTransformMatrix=function(targetSpace,resultMatrix){
			var commonParent;
			var currentObject;
			if (resultMatrix)resultMatrix.identity();
			else resultMatrix=new Matrix();
			if (targetSpace==this){
				return resultMatrix;
			}
			else if (targetSpace==this.parent || (targetSpace==null && this.parent==null)){
				if (this._transform_==Transform.__DEFAULT__){
					resultMatrix.identity();
					resultMatrix.tx=this._left_;
					resultMatrix.ty=this._top_;
				}
				else resultMatrix.copy(this.matrix);
				return resultMatrix;
			}
			else if (targetSpace==null || targetSpace==this.root){
				currentObject=this;
				while (currentObject !=targetSpace){
					if (currentObject._transform_ !=Transform.__DEFAULT__)resultMatrix.concat(currentObject.matrix);
					else{
						resultMatrix.tx+=currentObject._left_;
						resultMatrix.ty+=currentObject._top_;
					}
					currentObject=currentObject.parent;
				}
				return resultMatrix;
			}
			else if (targetSpace.parent==this){
				targetSpace.getTransformMatrix(this,resultMatrix);
				resultMatrix.invert();
				return resultMatrix;
			}
			commonParent=this.findCommonParent(this,targetSpace);
			currentObject=this;
			while (currentObject !=commonParent){
				resultMatrix.concat(currentObject.matrix);
				currentObject=currentObject.parent;
			}
			if (commonParent==targetSpace)
				return resultMatrix;
			DisplayObject.HELPER_MATRIX.identity();
			currentObject=targetSpace;
			while (currentObject !=commonParent){
				DisplayObject.HELPER_MATRIX.concat(currentObject.matrix);
				currentObject=currentObject.parent;
			}
			DisplayObject.HELPER_MATRIX.invert();
			resultMatrix.concat(DisplayObject.HELPER_MATRIX);
			return resultMatrix;
		}

		__proto__.findCommonParent=function(object1,object2){
			var currentObject=object1;
			while (currentObject){
				DisplayObject.ancestors[DisplayObject.ancestors.length]=currentObject;
				currentObject=currentObject.parent;
			}
			currentObject=object2;
			while (currentObject && DisplayObject.ancestors.indexOf(currentObject)==-1)
			currentObject=currentObject.parent;
			DisplayObject.ancestors.length=0;
			return currentObject;
		}

		__proto__._lyToBody_=function(){
			this.dispatchEvent(new Event(/*iflash.events.Event.ADDED_TO_STAGE*/"addedToStage"));
			this.dispatchEvent(new Event(/*iflash.events.Event.ADDED*/"added"));
		}

		__proto__._lyUnToBody_=function(){
			this.dispatchEvent(new Event(/*iflash.events.Event.REMOVED_FROM_STAGE*/"removedFromStage"));
			this.dispatchEvent(new Event(/*iflash.events.Event.REMOVED*/"removed"));
		}

		__proto__.__dispatchEnterFrame__=function(e){
			e._currentTarget_=this;
			e._lytarget=this;
			this.dispatchEvent(e);
		}

		__proto__.lyclone=function(){}
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._getBounds_(this,DisplayObject.HELPER_RECTANGLET).height;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			if(this._height_==h)
				return;
			this.scaleY=1.0;
			var oldH=this.height;
			oldH &&(this.scaleY=h / oldH);
			(this._height_ !=h)&& this.lySize(this._width_,h);
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_skewX',function(){
			return this._transform_._skew_.x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_skewX',function(value){
			if (this._transform_==Transform.__DEFAULT__){
				if (value==0)return;
				this._transform_=new Transform()._setNode_(this);
			}
			this._transform_._setSkewX_(value);
		});

		Object.defineProperty(__proto__,'skewX',{get:__proto__._$get_skewX,set:__proto__._$set_skewX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._getBounds_(this,DisplayObject.HELPER_RECTANGLET).width;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			if(this._width_==w)
				return;
			this.scaleX=1.0;
			var oldW=this.width;
			oldW &&(this.scaleX=w / oldW);
			(this._width_ !=w)&& this.lySize(w,this._height_);
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_blendMode',function(){
			Log.unfinished("DisplayObject","blendMode");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_blendMode',function(param1){
			Log.unfinished("DisplayObject","blendMode");
		});

		Object.defineProperty(__proto__,'blendMode',{get:__proto__._$get_blendMode,set:__proto__._$set_blendMode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_skewY',function(){
			return this._transform_._skew_.y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_skewY',function(value){
			if (this._transform_==Transform.__DEFAULT__){
				if (value==0)return;
				this._transform_=new Transform()._setNode_(this);
			}
			this._transform_._setSkewY_(value);
		});

		Object.defineProperty(__proto__,'skewY',{get:__proto__._$get_skewY,set:__proto__._$set_skewY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_name',function(){
			return this._private_._name_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_name',function(_name){
			this._private_._name_=_name;
		});

		Object.defineProperty(__proto__,'name',{get:__proto__._$get_name,set:__proto__._$set_name,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parent',function(){
			return this._parent_;
		});

		Object.defineProperty(__proto__,'parent',{get:__proto__._$get_parent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rotation',function(){
			return this._transform_._rotate_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rotation',function(value){
			if (this._transform_==Transform.__DEFAULT__){
				if (value==0)return;
				this._transform_=new Transform()._setNode_(this);
			}
			this._transform_._setRotation_(value);
		});

		Object.defineProperty(__proto__,'rotation',{get:__proto__._$get_rotation,set:__proto__._$set_rotation,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleY',function(){
			return this._transform_._scale_.y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleY',function(value){
			if (this._transform_==Transform.__DEFAULT__){
				if (value==1)return;
				this._transform_=new Transform()._setNode_(this);
			}
			this._transform_._setScaleY_(value);
		});

		Object.defineProperty(__proto__,'scaleY',{get:__proto__._$get_scaleY,set:__proto__._$set_scaleY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rotationX',function(){return 0});
		DEFUNENUMPTY$(__proto__,'_$set_rotationX',function(value){});
		Object.defineProperty(__proto__,'rotationX',{get:__proto__._$get_rotationX,set:__proto__._$set_rotationX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_transform',function(){
			return this._transform_==Transform.__DEFAULT__?(this._transform_=new Transform()._setNode_(this)):this._transform_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_transform',function(value){
			(this._transform_=value)._setNode_(this);
		});

		Object.defineProperty(__proto__,'transform',{get:__proto__._$get_transform,set:__proto__._$set_transform,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rotationY',function(){return 0});
		DEFUNENUMPTY$(__proto__,'_$set_rotationY',function(value){});
		Object.defineProperty(__proto__,'rotationY',{get:__proto__._$get_rotationY,set:__proto__._$set_rotationY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rotationZ',function(){
			return this.rotation;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rotationZ',function(value){
			this.rotation=value;
		});

		Object.defineProperty(__proto__,'rotationZ',{get:__proto__._$get_rotationZ,set:__proto__._$set_rotationZ,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleX',function(){
			return this._transform_._scale_.x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleX',function(value){
			if (this._transform_==Transform.__DEFAULT__){
				if (value==1)return;
				this._transform_=new Transform()._setNode_(this);
			}
			this._transform_._setScaleX_(value);
		});

		Object.defineProperty(__proto__,'scaleX',{get:__proto__._$get_scaleX,set:__proto__._$set_scaleX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleZ',function(){
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleZ',function(value){
		});

		Object.defineProperty(__proto__,'scaleZ',{get:__proto__._$get_scaleZ,set:__proto__._$set_scaleZ,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_matrix',function(){
			return this._transform_!=Transform.__DEFAULT__?this._transform_.matrix:((this._transform_=new Transform())._setNode_(this)).matrix;
		});

		DEFUNENUMPTY$(__proto__,'_$set_matrix',function(value){
			if (this._transform_==Transform.__DEFAULT__){
				if (!value.isTransform()){
					this._lyPos_(value.tx,value.ty);
					return;
				}
				this._transform_=new Transform()._setNode_(this);
			}
			this._transform_.matrix=value;
		});

		Object.defineProperty(__proto__,'matrix',{get:__proto__._$get_matrix,set:__proto__._$set_matrix,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_visible',function(){
			return (this._type_&0x400)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_visible',function(value){
			if(value)
				this._type_|=0x400;
			else
			this._type_ &=~0x400;
			this._modle_.show(value);
		});

		Object.defineProperty(__proto__,'visible',{get:__proto__._$get_visible,set:__proto__._$set_visible,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_x',function(){
			return this._left_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_x',function(value){
			this._lyPos_(value,this._top_);
		});

		Object.defineProperty(__proto__,'x',{get:__proto__._$get_x,set:__proto__._$set_x,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_y',function(){
			return this._top_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_y',function(value){
			this._lyPos_(this._left_,value);
		});

		Object.defineProperty(__proto__,'y',{get:__proto__._$get_y,set:__proto__._$set_y,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_z',function(){
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_z',function(value){
		});

		Object.defineProperty(__proto__,'z',{get:__proto__._$get_z,set:__proto__._$set_z,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_alpha',function(){
			return this._Filters_._alpha_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_alpha',function(value){
			if(this._Filters_._alpha_ !=value){
				this._Filters_ !=Filters.__DEFAULT__?(this._Filters_.alpha(this,value)):(this._Filters_=new Filters).alpha(this,value);
			}
		});

		Object.defineProperty(__proto__,'alpha',{get:__proto__._$get_alpha,set:__proto__._$set_alpha,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mouseX',function(){
			DisplayObject.HELPER_POINT.setTo(Laya.document.mouseX,0);
			this.globalToLocal(DisplayObject.HELPER_POINT,DisplayObject.HELPER_POINT_ALT);
			return DisplayObject.HELPER_POINT_ALT.x;
		});

		Object.defineProperty(__proto__,'mouseX',{get:__proto__._$get_mouseX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mouseY',function(){
			DisplayObject.HELPER_POINT.setTo(0,Laya.document.mouseY);
			this.globalToLocal(DisplayObject.HELPER_POINT,DisplayObject.HELPER_POINT_ALT);
			return DisplayObject.HELPER_POINT_ALT.y;
		});

		Object.defineProperty(__proto__,'mouseY',{get:__proto__._$get_mouseY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_loaderInfo',function(){
			return LoaderInfo.getLoaderInfo(this.__id__);
		});

		Object.defineProperty(__proto__,'loaderInfo',{get:__proto__._$get_loaderInfo,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_root',function(){
			var currentObject=this;
			while (currentObject&&currentObject.parent)currentObject=currentObject.parent;
			return currentObject;
		});

		Object.defineProperty(__proto__,'root',{get:__proto__._$get_root,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_stage',function(){
			if(this.root==Stage.stage)return Stage.stage;
			return null;
		});

		Object.defineProperty(__proto__,'stage',{get:__proto__._$get_stage,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollRect',function(){
			return this._private_._scrollRect_|| (this._private_._scrollRect_=new Rectangle());
		});

		DEFUNENUMPTY$(__proto__,'_$set_scrollRect',function(value){
			if(!value){
				this._private_._scrollRect_=null;
				return;
			}
			this._private_._scrollRect_=this._private_._scrollRect_|| new Rectangle();
			this._private_._scrollRect_.setTo(value.x,value.y,value.width,value.height);
			((this._type_&0x2)==0)&&(DrawClip.insertUnit(this),this._type_|=0x2);
		});

		Object.defineProperty(__proto__,'scrollRect',{get:__proto__._$get_scrollRect,set:__proto__._$set_scrollRect,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scale9Grid',function(){
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scale9Grid',function(value){
		});

		Object.defineProperty(__proto__,'scale9Grid',{get:__proto__._$get_scale9Grid,set:__proto__._$set_scale9Grid,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_filters',function(){
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_filters',function(param1){});
		Object.defineProperty(__proto__,'filters',{get:__proto__._$get_filters,set:__proto__._$set_filters,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mask',function(){
			return this._mask_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mask',function(value){
			if(!value){
				if(this._mask_)this._mask_.visible=true;this._mask_=null;this._type_|=~0x8000;
				return;
			}
			this._mask_=value;this._mask_.visible=false;
			((this._type_&0x8000)==0)&&(DrawMask.insertUnit(this),this._type_|=0x8000);
		});

		Object.defineProperty(__proto__,'mask',{get:__proto__._$get_mask,set:__proto__._$set_mask,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get__to_sort_d',function(){
			return this._sort_d_=this.zIndex / 100000;
		});

		Object.defineProperty(__proto__,'_to_sort_d',{get:__proto__._$get__to_sort_d,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_zIndex',function(){
			return this._zIndex_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_zIndex',function(value){
			this._zIndex_=value;
			this._modle_.zIndex(value);
		});

		Object.defineProperty(__proto__,'zIndex',{get:__proto__._$get_zIndex,set:__proto__._$set_zIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_cacheAsBitmap',function(){return false});
		DEFUNENUMPTY$(__proto__,'_$set_cacheAsBitmap',function(value){});
		Object.defineProperty(__proto__,'cacheAsBitmap',{get:__proto__._$get_cacheAsBitmap,set:__proto__._$set_cacheAsBitmap,enumerable:false});
		DisplayObject.TYPE_CLIP=0x2;
		DisplayObject.TYPE_DRAWSHAP=0x4;
		DisplayObject.TYPE_DRAWCHILD=0x8;
		DisplayObject.TYPE_CREATE_FROM_TAG=0x10;
		DisplayObject.TYPE_MOUSE_CHILDREN=0x20;
		DisplayObject.TYPE_MOUSE_ENABLE=0x40;
		DisplayObject.TYPE_USEHANDCURSOR=0x80;
		DisplayObject.TYPE_MOUSE_DBCLICK_ENABLE=0x100;
		DisplayObject.TYPE_IS_RECT_CHANGE=0x200;
		DisplayObject.TYPE_IS_VISIBLE=0x400;
		DisplayObject.TYPE_IS_LOAD=0x800;
		DisplayObject.TYPE_DRAW_BIMAP_DATA=0x1000;
		DisplayObject.TYPE_DRAW_IMAGEELEMENT=0x2000;
		DisplayObject.TYPE_CHILDREN_SORT=0x4000;
		DisplayObject.TYPE_MASK=0x8000;
		DisplayObject.TYPE_MATRIX_CHG=0x10000;
		REGSTATICATTR$(DisplayObject,
		['HELPER_MATRIX',function(){return this.HELPER_MATRIX=new Matrix();
			},'HELPER_MATRIX_ALT',function(){return this.HELPER_MATRIX_ALT=new Matrix();
			},'HELPER_POINT',function(){return this.HELPER_POINT=new Point();
			},'HELPER_POINT_ALT',function(){return this.HELPER_POINT_ALT=new Point();
			},'HELPER_RECTANGLET',function(){return this.HELPER_RECTANGLET=new Rectangle();
			},'HELPER_RECTANGLET_ALT',function(){return this.HELPER_RECTANGLET_ALT=new Rectangle();
		},'ancestors',function(){return this.ancestors=/*new vector.<>*/[];}

		]);
		return DisplayObject;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/xml/xmllist.jas=======10098.999983
	iflash.laya.xml.XMLList=(function(_super){
		function XMLList(type,value){
			_super.call(this,type,value);
		}

		REGCLASS$(XMLList,'iflash.laya.xml.XMLList',true,false,_super);
		return XMLList;
	})(XMLNode)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/loaderinfo.as=======10098.999952
	var LoaderInfo=iflash.display.LoaderInfo=(function(_super){
		function LoaderInfo(){
			this._actionScriptVersion_=1;
			this._sameDomain_=false;
			this._contentType="";
			this._applicationDomain=null;
			this._bytes=null;
			this._bytesLoaded=0;
			this._bytesTotal=0;
			this._childAllowsParent=false;
			this.__content__=null;
			this._frameRate=0;
			this._height=0;
			this._isURLInaccessible=false;
			this._loader=null;
			this._loaderURL=null;
			this._lyurl="";
			this._parameters=null;
			this._parentAllowsChild=false;
			this._swfVersion=0;
			this._width=0;
			this.objInfo=null;
			this._resourceDic_=null;
			this._reDomain_=null;
			this.__id__=0;
			this.__imageUrl__="";
			this.__fileurl="";
			this._nextid_=0;
			this.onload=null;
			this.onerror=null;
			this._uncaughtErrorEvents=null;
			this.temp=[];
			this.pr=0
			_super.apply(this,arguments);
			this.fontNamesDic=new Dictionary();
			this.classNameDic=new Dictionary();
			this._resourceDic_=[];this.objInfo=[];
			this._applicationDomain=new ApplicationDomain();
			this._applicationDomain._parentDomain_=ApplicationDomain.currentDomain;
		}

		REGCLASS$(LoaderInfo,'iflash.display.LoaderInfo',true,false,_super);
		var __proto__=LoaderInfo.prototype;
		__proto__.pushSymbolClass=function(_name,tag){
			this._resourceDic_[_name]=tag;
		}

		__proto__.pushResource=function(r,_name){
			this._resourceDic_[_name]=r;
		}

		__proto__.getResource=function(_name){return this._resourceDic_[_name];}
		__proto__.cloneByName=function(_name){
			var dec=this.getResource(_name).data.clone();
			return dec;
		}

		__proto__.getBitmapData=function(_name,rect,rectSmall,format){
			var img=new LyImageElement();
			return img;
		}

		__proto__.setUrl=function(url){
			this.lyurl=url=Method.formatUrl(url);
			if(this.lyurl.lastIndexOf(".swf")!=-1){
				this.__imageUrl__=this.lyurl.substr(0,this.lyurl.lastIndexOf(".swf"))+"/image/"
				}else{
				this.__imageUrl__=this.lyurl+"/image/";
			}
		}

		__proto__.saveObjInfo=function(characterId,data){
			if(characterId)
			{this.objInfo[characterId]=data;}
		}

		__proto__.getObjInfo=function(characterId){
			if(characterId)
			{return this.objInfo[characterId]
			}else return null;
		}

		__proto__._getEvents_=function(obj){
			this._eventListener_=obj._eventListener_;
		}

		__proto__._comp_=function(){}
		__proto__.readversion=function(data){
			data.readByte();
			data.readByte();
			data.readByte();
			data.readByte();
		}

		__proto__.setByteArray=function(data){
			this.readversion(data);
			var runner=new Runnner();
			runner.compile(data,this);
			runner.getSysbomData(this);
			this.complete();
		}

		__proto__.complete=function(){
			this.putResInDomain();
			Runnner.symbolClass.length=0;
			var mainTime=this.getResource ("32767");
			mainTime&&mainTime.gotoAndStop(1);
			this.__content__=mainTime;
			if(Loader.preSwf.indexOf(this.__fileurl)!=-1){
				var ly;
				for(var i=0;i<this.temp.length;i++){
					ly=this.temp[i];
					ly.checkImg();
					ly._image_.onload=iflash.method.bind(this,this.onPreComplete);
					ly._image_.onerror=iflash.method.bind(this,this.onPreComplete);
					ly._image_.src=ly.src;
				}
				}else{
				iflash.utils.setTimeout(BIND$(this,this.__finish),0.001);
			}
		}

		__proto__.onPreComplete=function(e){
			this.pr++;
			if(this.pr>=this.temp.length){
				this.__finish();
				this.temp.length=0;
			}
		}

		__proto__.__finish=function(){
			this.onload && this.onload();
		}

		__proto__.putResInDomain=function(){
			if(this._reDomain_){
				for(var key in this.applicationDomain._resMapDic_){
					this._reDomain_.addResToMap(key,this.applicationDomain._resMapDic_[key]);
				}
			}
		}

		DEFUNENUMPTY$(__proto__,'_$get_actionScriptVersion',function(){
			return this._actionScriptVersion_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_actionScriptVersion',function(value){
			this._actionScriptVersion_=value;
		});

		Object.defineProperty(__proto__,'actionScriptVersion',{get:__proto__._$get_actionScriptVersion,set:__proto__._$set_actionScriptVersion,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytesLoaded',function(){
			return this._bytesLoaded;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bytesLoaded',function(value){
			this._bytesLoaded=value;
		});

		Object.defineProperty(__proto__,'bytesLoaded',{get:__proto__._$get_bytesLoaded,set:__proto__._$set_bytesLoaded,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._width;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(value){
			this._width=value;
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_applicationDomain',function(){
			if(!this.__id__)return ApplicationDomain.currentDomain;
			return this._applicationDomain;
		});

		Object.defineProperty(__proto__,'applicationDomain',{get:__proto__._$get_applicationDomain,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytes',function(){
			return this._bytes;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bytes',function(value){
			this._bytes=value
		});

		Object.defineProperty(__proto__,'bytes',{get:__proto__._$get_bytes,set:__proto__._$set_bytes,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_content',function(){
			return this.__content__;
		});

		Object.defineProperty(__proto__,'content',{get:__proto__._$get_content,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytesTotal',function(){
			return this._bytesTotal;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bytesTotal',function(value){
			this._bytesTotal=value;
		});

		Object.defineProperty(__proto__,'bytesTotal',{get:__proto__._$get_bytesTotal,set:__proto__._$set_bytesTotal,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_childAllowsParent',function(){
			return this._childAllowsParent;
		});

		DEFUNENUMPTY$(__proto__,'_$set_childAllowsParent',function(value){
			this._childAllowsParent=value;
		});

		Object.defineProperty(__proto__,'childAllowsParent',{get:__proto__._$get_childAllowsParent,set:__proto__._$set_childAllowsParent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_contentType',function(){
			return this._contentType;
		});

		Object.defineProperty(__proto__,'contentType',{get:__proto__._$get_contentType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_frameRate',function(){
			return this._frameRate;
		});

		DEFUNENUMPTY$(__proto__,'_$set_frameRate',function(value){
			this._frameRate=value;
		});

		Object.defineProperty(__proto__,'frameRate',{get:__proto__._$get_frameRate,set:__proto__._$set_frameRate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._height;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(value){
			this._height=value;
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_isURLInaccessible',function(){
			return this._isURLInaccessible;
		});

		DEFUNENUMPTY$(__proto__,'_$set_isURLInaccessible',function(value){
			this._isURLInaccessible=value;
		});

		Object.defineProperty(__proto__,'isURLInaccessible',{get:__proto__._$get_isURLInaccessible,set:__proto__._$set_isURLInaccessible,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_loader',function(){
			if(this._loader==null){
				this._loader=new Loader();
			}
			return this._loader;
		});

		DEFUNENUMPTY$(__proto__,'_$set_loader',function(value){
			this._loader=value;
		});

		Object.defineProperty(__proto__,'loader',{get:__proto__._$get_loader,set:__proto__._$set_loader,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_sharedEvents',function(){
			return null;
		});

		Object.defineProperty(__proto__,'sharedEvents',{get:__proto__._$get_sharedEvents,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_loaderURL',function(){
			return this._loaderURL;
		});

		DEFUNENUMPTY$(__proto__,'_$set_loaderURL',function(value){
			this._loaderURL=value;
		});

		Object.defineProperty(__proto__,'loaderURL',{get:__proto__._$get_loaderURL,set:__proto__._$set_loaderURL,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parameters',function(){
			return this._parameters;
		});

		DEFUNENUMPTY$(__proto__,'_$set_parameters',function(value){
			this._parameters=value;
		});

		Object.defineProperty(__proto__,'parameters',{get:__proto__._$get_parameters,set:__proto__._$set_parameters,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parentAllowsChild',function(){
			return this._parentAllowsChild;
		});

		DEFUNENUMPTY$(__proto__,'_$set_parentAllowsChild',function(value){
			this._parentAllowsChild=value;
		});

		Object.defineProperty(__proto__,'parentAllowsChild',{get:__proto__._$get_parentAllowsChild,set:__proto__._$set_parentAllowsChild,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_sameDomain',function(){
			return this._sameDomain_;
		});

		Object.defineProperty(__proto__,'sameDomain',{get:__proto__._$get_sameDomain,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_swfVersion',function(){
			return this._swfVersion;
		});

		DEFUNENUMPTY$(__proto__,'_$set_swfVersion',function(value){
			this._swfVersion=value;
		});

		Object.defineProperty(__proto__,'swfVersion',{get:__proto__._$get_swfVersion,set:__proto__._$set_swfVersion,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_lyurl',function(){
			return this._lyurl;
		});

		DEFUNENUMPTY$(__proto__,'_$set_lyurl',function(value){
			this._lyurl=value;
		});

		Object.defineProperty(__proto__,'lyurl',{get:__proto__._$get_lyurl,set:__proto__._$set_lyurl,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_url',function(){
			return this.lyurl;
		});

		Object.defineProperty(__proto__,'url',{get:__proto__._$get_url,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_src',function(){
			return this.lyurl;
		});

		DEFUNENUMPTY$(__proto__,'_$set_src',function(url){
			var _$this=this;
			this.lyurl=url=Method.formatUrl(url,Laya.document.baseURI.path);
			if(this.lyurl.lastIndexOf(".swf")!=-1){
				this.__imageUrl__=this.lyurl.substr(0,this.lyurl.lastIndexOf(".swf"))+"/image/"
			};
			var _urlLoad=new URLLoader();
			_urlLoad.dataFormat=/*iflash.net.URLLoaderDataFormat.BINARY*/"binary";
			_urlLoad.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",
			function(event){
				var source=event.target.data;
				source.position=0;
				var temp=new ByteArray();
				source.readBytes(temp,0,0);
				_$this.setByteArray(temp);
			});
			_urlLoad.addEventListener(/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError",
			function(e){Log.log(e.toString());});
			_urlLoad.load(new URLRequest(url));
		});

		Object.defineProperty(__proto__,'src',{get:__proto__._$get_src,set:__proto__._$set_src,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_uncaughtErrorEvents',function(){
			return this._uncaughtErrorEvents=this._uncaughtErrorEvents|| new UncaughtErrorEvents();
		});

		Object.defineProperty(__proto__,'uncaughtErrorEvents',{get:__proto__._$get_uncaughtErrorEvents,enumerable:false});
		LoaderInfo._$GET_currentLoadInfo=function(){
			if(!LoaderInfo.__currentLoaderInfo__)
				LoaderInfo.__currentLoaderInfo__=new LoaderInfo();
			return LoaderInfo.__currentLoaderInfo__;
		}

		Object.defineProperty(LoaderInfo,'currentLoadInfo',{get:LoaderInfo._$GET_currentLoadInfo,set:iflash.events.EventDispatcher._$SET_currentLoadInfo,enumerable:false});
		LoaderInfo.getLoaderInfoByDefinition=function(object){
			return object;
		}

		LoaderInfo.create=function(id){
			var li=new LoaderInfo();li.__id__=id;
			li.applicationDomain.__id__=id;
			return LoaderInfo._loaderInfos_[id]=li;
		}

		LoaderInfo.getLoaderInfo=function(id){
			if(id==0)return LoaderInfo.currentLoadInfo;
			return LoaderInfo._loaderInfos_[id];
		}

		LoaderInfo.__currentLoaderInfo__=null;;
		LoaderInfo._loaderInfos_=[];
		LoaderInfo.minibitmapData=null;
		return LoaderInfo;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/nativemenu.as=======10098.999949
	var NativeMenu=iflash.display.NativeMenu=(function(_super){
		function NativeMenu(){
			_super.apply(this,arguments);
		}

		REGCLASS$(NativeMenu,'iflash.display.NativeMenu',true,false,_super);
		return NativeMenu;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/nativemenuitem.as=======10098.999948
	var NativeMenuItem=iflash.display.NativeMenuItem=(function(_super){
		function NativeMenuItem(){
			_super.apply(this,arguments);
		}

		REGCLASS$(NativeMenuItem,'iflash.display.NativeMenuItem',true,false,_super);
		var __proto__=NativeMenuItem.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_enabled',function(){
			Log.unfinished("NativeMenuItem","enabled");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_enabled',function(isSeparator){
			Log.unfinished("NativeMenuItem","enabled");
		});

		Object.defineProperty(__proto__,'enabled',{get:__proto__._$get_enabled,set:__proto__._$set_enabled,enumerable:false});
		return NativeMenuItem;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/stage3d.as=======10098.999927
	var Stage3D=iflash.display.Stage3D=(function(_super){
		function Stage3D(){
			this.context3D=null;
			this._x=0;
			this._y=0;
			this._visible=true;
			_super.apply(this,arguments);
		}

		REGCLASS$(Stage3D,'iflash.display.Stage3D',true,false,_super);
		var __proto__=Stage3D.prototype;
		__proto__.requestContext3D=function(context3DRenderMode,profile){
			(context3DRenderMode===void 0)&& (context3DRenderMode="auto");
			(profile===void 0)&& (profile="baseline");
			iflash.utils.setTimeout(BIND$(this,this.onCreateContext),1000)
				}
		__proto__.onCreateContext=function(evt){
			this.context3D=new Context3D();
			this.context3D.webglContext=Laya.document.canvas.context3D;
			var event=new Event(/*iflash.events.Event.CONTEXT3D_CREATE*/"context3DCreate");
			this.context3D.webglContext.enableErrorChecking=true;
			this.dispatchEvent(event);
		}

		DEFUNENUMPTY$(__proto__,'_$get_visible',function(){
			return this._visible;
		});

		DEFUNENUMPTY$(__proto__,'_$set_visible',function(value){
			this._visible=value;
		});

		Object.defineProperty(__proto__,'visible',{get:__proto__._$get_visible,set:__proto__._$set_visible,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_x',function(){
			return this._x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_x',function(value){
			this._x=value;
		});

		Object.defineProperty(__proto__,'x',{get:__proto__._$get_x,set:__proto__._$set_x,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_y',function(){
			return this._y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_y',function(value){
			this._y=value;
		});

		Object.defineProperty(__proto__,'y',{get:__proto__._$get_y,set:__proto__._$set_y,enumerable:false});
		return Stage3D;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/swf/classs/bdbs.as=======10098.999908
	var BDBS=iflash.display.swf.classs.BDBS=(function(_super){
		function BDBS(width,height,transparent,fillColor){
			(width===void 0)&& (width=0);
			(height===void 0)&& (height=0);
			(transparent===void 0)&& (transparent=true);
			(fillColor===void 0)&& (fillColor=4.294967295E9);
			var ly=this["__data__"];
			var bitmapdata=ly.miniBitmapData;
			_super.call(this,ly?ly.width:1,ly?ly.height:1,transparent,fillColor);
			if (ly){
				if(!bitmapdata._canvas_)bitmapdata.draw(LoaderInfo.minibitmapData,Matrix.__DEFAULT__,null,null,new Rectangle(0,0,ly.width,ly.height));
				this._canvas_=bitmapdata._canvas_.clone();
				ly._init_();ly._lyToBody_();
				this.width=ly.width;
				this.height=ly.height;
				this._canvas_.size(ly.width,ly.height);
			}
		}

		REGCLASS$(BDBS,'iflash.display.swf.classs.BDBS',true,false,_super);
		return BDBS;
	})(BitmapData)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawbackground.as=======10098.999903
	var DrawBackground=iflash.display.plug.DrawBackground=(function(_super){
		function DrawBackground(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawBackground,'iflash.display.plug.DrawBackground',true,false,_super);
		var __proto__=DrawBackground.prototype;
		__proto__.clone=function(node){
			return new DrawBackground(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			++Laya.document.drawCount;
			var fillStyle="#ff0000";
			context.save();
			context.fillStyle=fillStyle;
			context.fillRect(x,y,w,h);
			context.restore();
			this.next && this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_BACKGROUND*/0x20;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_BACKGROUND*/0x20;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawBackground.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawBackground._DEFAULT_);
		}

		REGSTATICATTR$(DrawBackground,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawBackground(null);}
		]);
		return DrawBackground;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawchilds.as=======10098.999901
	var DrawChilds=iflash.display.plug.DrawChilds=(function(_super){
		function DrawChilds(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawChilds,'iflash.display.plug.DrawChilds',true,false,_super);
		var __proto__=DrawChilds.prototype;
		__proto__.clone=function(node){
			return new DrawChilds(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			node._type_& /*iflash.display.DisplayObject.TYPE_CREATE_FROM_TAG*/0x10&&node.sortChildsByZIndex();
			var sz=0,i=0;
			var c,childs;
			if ((sz=(childs=node._childs_).length)> 0){
				for (i=0;i < sz;i++){
					if ((c=childs[i])==null || !(c._type_& /*iflash.display.DisplayObject.TYPE_IS_VISIBLE*/0x400)||!c.alpha)continue ;
					c._lyPaint_(context,x,y);
				}
			}
			this.next && this.next.paint(context,x,y,node,w,h);
		}

		__proto__.paintClip=function(context,node,child,mode,x,y,w,h){
			var c,style;
			var left=-node.scrollLeft;
			var top=-node.scrollTop;
			var right=node.offsetWidth+left;
			var bottom=node.offsetHeight+top;
			var i=0,len=node._childs_.length;
			while (i < len){
				i++;
				if ((c=child[i-1])==null || c.hidden !=0)continue ;
				style=c.style;
				if (style.block){
					if (style._left_ >=right){
						if (mode==0x10)break ;
						continue ;
					}
					if (style._top_ >=bottom){
						if (mode==0x01)break ;
						continue ;
					}
					if ((style._left_+style._width_)< left)continue ;
					if ((style._top_+style._height_)< top)continue ;
				}
				c.paint(context,x,y);
			}
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawChilds.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawChilds._DEFAULT_);
		}

		REGSTATICATTR$(DrawChilds,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawChilds(null);}
		]);
		return DrawChilds;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawclip.as=======10098.999900
	var DrawClip=iflash.display.plug.DrawClip=(function(_super){
		function DrawClip(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawClip,'iflash.display.plug.DrawClip',true,false,_super);
		var __proto__=DrawClip.prototype;
		__proto__.clone=function(node){
			return new DrawClip(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			if (!node._private_._scrollRect_){
				this.next && this.next.paint(context,x,y,node,w,h);
				return;
			};
			var rect=node._private_._scrollRect_;
			context.save();
			context.beginPath();
			context.rect(x,y,rect.width,rect.height);
			context.clip();
			this.next && this.next.paint(context,x-rect.x,y-rect.y,node,w,h);
			context.restore();
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CLIP*/0x100;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CLIP*/0x100;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawClip.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawClip._DEFAULT_);
		}

		REGSTATICATTR$(DrawClip,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawClip(null);}
		]);
		return DrawClip;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawgraphics.as=======10098.999899
	var DrawGraphics=iflash.display.plug.DrawGraphics=(function(_super){
		function DrawGraphics(){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawGraphics,'iflash.display.plug.DrawGraphics',true,false,_super);
		var __proto__=DrawGraphics.prototype;
		__proto__.clone=function(node){
			var temp=new DrawGraphics();
			return temp;
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var grapics=node["graphics"];
			if(grapics.isReady()){
				grapics.beginRender();
				grapics._canvas_&&context.drawImage(grapics._canvas_,x,y);
			}
			if (this.next)this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return 0x300;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return 0x300;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		REGSTATICATTR$(DrawGraphics,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawGraphics();}
		]);
		return DrawGraphics;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawimageelement.as=======10098.999898
	var DrawImageElement=iflash.display.plug.DrawImageElement=(function(_super){
		function DrawImageElement(imgelement){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawImageElement,'iflash.display.plug.DrawImageElement',true,false,_super);
		var __proto__=DrawImageElement.prototype;
		__proto__.clone=function(node){
			return new DrawImageElement(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var bitmapdata=node.miniBitmapData;
			bitmapdata && bitmapdata.paint && bitmapdata.paint.call(bitmapdata,context,x,y,w,h);
			++Laya.document.drawCount;
			this.next && this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawImageElement.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawImageElement._DEFAULT_);
		}

		REGSTATICATTR$(DrawImageElement,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawImageElement(null);}
		]);
		return DrawImageElement;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawmask.as=======10098.999897
	var DrawMask=iflash.display.plug.DrawMask=(function(_super){
		function DrawMask(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawMask,'iflash.display.plug.DrawMask',true,false,_super);
		var __proto__=DrawMask.prototype;
		__proto__.clone=function(node){
			return new DrawMask(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			if (!node.parent||!node._mask_){
				this.next && this.next.paint(context,x,y,node,w,h);
				return;
			};
			var m=node._mask_;
			var rect=m.getBounds(m.parent);
			context.save();
			context.beginPath();
			context.rect(rect.x,rect.y,rect.width,rect.height);
			context.clip();
			this.next && this.next.paint(context,x,y,node,w,h);
			context.restore();
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_MASK*/0x200;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CLIP*/0x100;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawMask.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawMask._DEFAULT_);
		}

		REGSTATICATTR$(DrawMask,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawMask(null);}
		]);
		return DrawMask;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawshape.as=======10098.999896
	var DrawShape=iflash.display.plug.DrawShape=(function(_super){
		function DrawShape(shape){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawShape,'iflash.display.plug.DrawShape',true,false,_super);
		var __proto__=DrawShape.prototype;
		__proto__.clone=function(node){
			return new DrawShape(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var data=node._image_;
			data&&(data._lyPaint_(context,x,y));
			this.next && this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawShape.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawShape._DEFAULT_);
		}

		REGSTATICATTR$(DrawShape,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawShape(null);}
		]);
		return DrawShape;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawtext.as=======10098.999895
	var DrawText=iflash.display.plug.DrawText=(function(_super){
		function DrawText(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawText,'iflash.display.plug.DrawText',true,false,_super);
		var __proto__=DrawText.prototype;
		__proto__.clone=function(node){
			return new DrawText(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var data=node.__text__;
			data._lyPaint_(context,x,y);
			this.next && this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawText.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawText._DEFAULT_);
		}

		REGSTATICATTR$(DrawText,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawText(null);}
		]);
		return DrawText;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/drawtransform.as=======10098.999894
	var DrawTransform=iflash.display.plug.DrawTransform=(function(_super){
		function DrawTransform(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawTransform,'iflash.display.plug.DrawTransform',true,false,_super);
		var __proto__=DrawTransform.prototype;
		__proto__.clone=function(node){
			return new DrawTransform(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var m=node._transform_.matrix;
			if (!m || !m.isTransform()){
				this.next && this.next.paint(context,x,y,node,w,h);
				return;
			}
			context.save();
			x-=node._left_;
			y-=node._top_;
			if (x !=0 || y !=0){
				context.translate(x,y);
				context.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
				context.translate(-x,-y);
			}
			else {
				context.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
			}
			this.next && this.next.paint(context,x,y,node,w,h);
			context.restore();
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_TANSFORM*/0x1;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_TANSFORM*/0x1;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawTransform.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawTransform._DEFAULT_);
		}

		REGSTATICATTR$(DrawTransform,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawTransform(null);}
		]);
		return DrawTransform;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/plug/usefilter.as=======10098.999893
	var UseFilter=iflash.display.plug.UseFilter=(function(_super){
		function UseFilter(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(UseFilter,'iflash.display.plug.UseFilter',true,false,_super);
		var __proto__=UseFilter.prototype;
		__proto__.clone=function(node){
			return new UseFilter(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var filter=node._Filters_,preFilter;
			var pre;
			if ((filter._alpha_ < 0.01 && filter.key==0)|| !this.next)return;
			if (filter._alpha_==1){
				this.next.paint(context,x,y,node,w,h);
				return;
			}
			pre=context.globalAlpha;
			context.globalAlpha=filter._alpha_;
			this.next.paint(context,x,y,node,w,h);
			context.globalAlpha=pre;
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_FILTER*/0x2;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_FILTER*/0x2;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		UseFilter.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,UseFilter._DEFAULT_);
		}

		REGSTATICATTR$(UseFilter,
		['_DEFAULT_',function(){return this._DEFAULT_=new UseFilter(null);}
		]);
		return UseFilter;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/unit/drawgraphics.as=======10098.999875
	var DrawGraphics1=iflash.display.unit.DrawGraphics=(function(_super){
		function DrawGraphics(){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawGraphics,'iflash.display.unit.DrawGraphics',true,false,_super,'DrawGraphics1');
		var __proto__=DrawGraphics.prototype;
		__proto__.clone=function(node){
			var temp=new DrawGraphics();
			return temp;
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var grapics=node["graphics"];
			if(grapics.isReady()){
				grapics.beginRender();
				grapics._canvas_&&context.drawImage(grapics._canvas_,x,y);
			}
			if (this.next)this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return 30;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return 30;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		REGSTATICATTR$(DrawGraphics,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawGraphics();}
		]);
		return DrawGraphics;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/filereference.as=======10098.999848
	var FileReference=iflash.net.FileReference=(function(_super){
		function FileReference(){
			_super.apply(this,arguments);
		}

		REGCLASS$(FileReference,'iflash.net.FileReference',true,false,_super);
		var __proto__=FileReference.prototype;
		__proto__.browse=function(typeFilter){
			Log.unfinished("FileReference","browse");
			return false;
		}

		__proto__.cancel=function(){
			Log.unfinished("FileReference","cancel");
		}

		__proto__.download=function(request,defaultFileName){
			Log.unfinished("FileReference","download");
		}

		__proto__.load=function(){
			Log.unfinished("FileReference","load");
		}

		__proto__.save=function(data,defaultFileName){
			Log.unfinished("FileReference","save");
		}

		__proto__.upload=function(request,uploadDataFieldName,testUpload){
			(uploadDataFieldName===void 0)&& (uploadDataFieldName="Filedata");
			(testUpload===void 0)&& (testUpload=false);
			Log.unfinished("FileReference","upload");
		}

		DEFUNENUMPTY$(__proto__,'_$get_creationDate',function(){
			Log.unfinished("FileReference","creationDate");
			return null;
		});

		Object.defineProperty(__proto__,'creationDate',{get:__proto__._$get_creationDate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_name',function(){
			Log.unfinished("FileReference","name");
			return "";
		});

		Object.defineProperty(__proto__,'name',{get:__proto__._$get_name,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_size',function(){
			Log.unfinished("FileReference","size");
			return 0;
		});

		Object.defineProperty(__proto__,'size',{get:__proto__._$get_size,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_creator',function(){
			Log.unfinished("FileReference","creator");
			return "";
		});

		Object.defineProperty(__proto__,'creator',{get:__proto__._$get_creator,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_modificationDate',function(){
			Log.unfinished("FileReference","modificationDate");
			return null;
		});

		Object.defineProperty(__proto__,'modificationDate',{get:__proto__._$get_modificationDate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_data',function(){
			Log.unfinished("FileReference","data");
			return null;
		});

		Object.defineProperty(__proto__,'data',{get:__proto__._$get_data,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_type',function(){
			Log.unfinished("FileReference","type");
			return "";
		});

		Object.defineProperty(__proto__,'type',{get:__proto__._$get_type,enumerable:false});
		return FileReference;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filesystem/filestream.as=======10098.999846
	var FileStream=iflash.filesystem.FileStream=(function(_super){
		function FileStream(){
			this._endian=null;
			this._objectEncoding=0;
			this._position=null;
			this._readAhead=null;
			this.urlLoader=null;
			this.fileBytes=null;
			_super.apply(this,arguments);
		}

		REGCLASS$(FileStream,'iflash.filesystem.FileStream',true,false,_super);
		var __proto__=FileStream.prototype;
		__proto__.open=function(file,fileMode){
			this.urlLoader=new URLLoader();
			this.urlLoader.dataFormat=/*iflash.net.URLLoaderDataFormat.BINARY*/"binary";
			this.urlLoader.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",BIND$(this,this.onLoadComplete));
			this.urlLoader.addEventListener(/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError",BIND$(this,this.onIOError));
			this.urlLoader.addEventListener(/*iflash.events.ProgressEvent.PROGRESS*/"progress",BIND$(this,this.onLoadProgress));
			this.urlLoader.load(new URLRequest(file.url));
		}

		__proto__.close=function(){}
		__proto__.openAsync=function(file,fileMode){
			this.urlLoader=new URLLoader();
			this.urlLoader.dataFormat=/*iflash.net.URLLoaderDataFormat.BINARY*/"binary";
			this.urlLoader.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",BIND$(this,this.onLoadComplete));
			this.urlLoader.addEventListener(/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError",BIND$(this,this.onIOError));
			this.urlLoader.addEventListener(/*iflash.events.ProgressEvent.PROGRESS*/"progress",BIND$(this,this.onLoadProgress));
			this.urlLoader.load(new URLRequest(file.url));
		}

		__proto__.onIOError=function(evt){
			this.dispatchEvent(evt);
		}

		__proto__.onLoadComplete=function(evt){
			if ((this.urlLoader.data instanceof iflash.utils.ByteArray )){
				this.fileBytes=new ByteArray();
				this.fileBytes.writeBytes(this.urlLoader.data,0,this.urlLoader.data.bytesAvailable)
			};
			var event=new Event(/*iflash.events.Event.COMPLETE*/"complete");
			event._currentTarget_=evt._currentTarget_;
			event._lytarget=evt._lytarget;
			this.dispatchEvent(event);
		}

		__proto__.onLoadProgress=function(evt){
			this.dispatchEvent(evt);
		}

		DEFUNENUMPTY$(__proto__,'_$get_bytesAvailable',function(){
			return this.fileBytes ? this.fileBytes.bytesAvailable :0;
		});

		Object.defineProperty(__proto__,'bytesAvailable',{get:__proto__._$get_bytesAvailable,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_readAhead',function(){
			return this._readAhead;
		});

		DEFUNENUMPTY$(__proto__,'_$set_readAhead',function(value){
			this._readAhead=value;
		});

		Object.defineProperty(__proto__,'readAhead',{get:__proto__._$get_readAhead,set:__proto__._$set_readAhead,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_position',function(){
			return this.fileBytes.position;
		});

		DEFUNENUMPTY$(__proto__,'_$set_position',function(value){
			this.fileBytes.position=value;
		});

		Object.defineProperty(__proto__,'position',{get:__proto__._$get_position,set:__proto__._$set_position,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_endian',function(){
			return this._endian;
		});

		DEFUNENUMPTY$(__proto__,'_$set_endian',function(value){
			this._endian=value;
		});

		Object.defineProperty(__proto__,'endian',{get:__proto__._$get_endian,set:__proto__._$set_endian,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_objectEncoding',function(){
			return this._objectEncoding;
		});

		DEFUNENUMPTY$(__proto__,'_$set_objectEncoding',function(value){
			this._objectEncoding=value;
		});

		Object.defineProperty(__proto__,'objectEncoding',{get:__proto__._$get_objectEncoding,set:__proto__._$set_objectEncoding,enumerable:false});
		return FileStream;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/node.as=======10098.999789
	var Node=iflash.laya.dom.Node=(function(_super){
		function Node(){
			this._baseURI_=null;
			this._tempinnerHtml=null;
			this._childs_=null;
			this._parent_=null;
			this._type2_=0;
			this._tmctr_=null;
			this._sort_d_=null;
			_super.apply(this,arguments);
			this._type2_=Node.TYPE2DEFAULT;
			this._type_=Node.DEFAULTTYPE;
			this._childs_=EventDispatcher.__NULLARRAY__;
			this._sort_d_=-1;
		}

		REGCLASS$(Node,'iflash.laya.dom.Node',true,false,_super);
		var __proto__=Node.prototype;
		LAYABOX.implements(__proto__,{"iflash.laya.xml.IXMLNode":true})
		__proto__._setId_=function(text){
			this.id=text;
		}

		__proto__._getId_=function(){
			return this._private_._id_;
		}

		__proto__.getElementById=function(id){
			if (id=='parent')return this._parent_;
			if (id=='group')return this.group;
			return Laya.document.getElementById(id);
		}

		__proto__.getStyle=function(){
			return null;
		}

		__proto__.getElementsByNodeName=function(name){
			return this.select(function(o){return o.nodeName==name;});
		}

		__proto__.some=function(callback,thisObject,depth){
			(depth===void 0)&& (depth=1);
			depth--;
			var cs=this._childs_,sz=this._childs_.length;
			for (var i=0;i < sz;i++){
				var c=cs[i];
				if (c==null || c.deleted)continue ;
				if (depth > 0 && c.childNodes.length > 0){
					if (!callback.call(thisObject,c,i,cs))return false;
					if (!c.some(callback,thisObject,depth))return false;
					continue ;
				}
				else if (!callback.call(thisObject,c,i,cs))
				return false;
			}
			return true;
		}

		__proto__.select=function(fn,depth,resultSet){
			(depth===void 0)&& (depth=99999);
			if(resultSet==null)resultSet=[];
			depth--;
			var cs=this._childs_,sz=cs.length,r=0,c;
			for (var i=0;i < sz;i++){
				c=cs[i];
				if(c.deleted)continue ;
				r=fn.call(c,c);
				if(r==Node.NODE_SELECT_BREAK)continue ;
				if (r !=Node.NODE_SELECT_IS_NOT_MATCH)resultSet.push(c);
				if(r==Node.NODE_SELECT_BREAK_CHILD)continue ;
				if(depth>-1 && c._childs_.length>0)
					c.select(fn,depth,resultSet);
			}
			return resultSet;
		}

		__proto__.repaint=function(){
			if (this._repaint_==0){
				this._repaint_=1;
				((this._type2_ & 0x200000)!=0 && this._parent_)?this._parent_.repaint():(Laya.document._repaint_=1);
			}
		}

		__proto__.isRepaint=function(){
			return this._repaint_>0;
		}

		__proto__.repaintParent=function(){
			this._parent_ && this._parent_.repaint();
			return this;
		}

		__proto__.swapAt=function(frome,to){
			if (frome >=0 && to >=0 && frome!=to){
				var fromeNode=this._childs_[frome];
				var toNone=this._childs_[to];
				this._childs_[frome]=toNone;
				this._childs_[to]=fromeNode;
				var tmp=toNone._id_;
				toNone._id_=fromeNode._id_;
				fromeNode._id_=tmp;
				this._modle_ && this._modle_.swap(fromeNode._modle_,toNone._modle_);
			}
		}

		__proto__.swap=function(frome,to){
			this.swapAt(this.childIndexOf(frome),this.childIndexOf(to));
		}

		__proto__.insert=function(c,index){
			if (c.deleted==true)return;
			if(c._parent_!=null){
				if (c._parent_==this){
					var pre=this.childIndexOf(c);
					if (index==pre)return;
					this.lyRemoveChildAt(pre);
				}
				else{
					c._parent_.addType(0x80000);
					c._parent_.removeChild(c);
				}
			}
			this._childs_==EventDispatcher.__NULLARRAY__ && (this._childs_=[]);
			Method.insert(this._childs_,index,c);
			this._type_ |=0x2;
			c._parent_=this;
			c._baseURI_=this._baseURI_
			this._type_ |=0x80000;
			c.lyDispatchEvent(/*iflash.events.Event.ONPARENT*/"onparent");
			if (this.checkType(0x8000)&& !c.checkType(0x8000)){
				c.onAddDocument();
				c.lyToBody();
				c.lyDispatchEvent(/*iflash.events.Event.TODOCUMENT*/"todocument");
			}
			c._modle_ && this._modle_ && this._modle_.insert(c._modle_,index,this.childNodes.length);
		}

		__proto__.onAddDocument=function(){
			var p=this._parent_,i=0,sz=0,c;
			if (p._tmctr_ !=this._tmctr_){
				this._tmctr_=p._tmctr_;
				(this._private_.onupdate)&& (this.onupdate=this._private_.onupdate.listener);
			}
			this.repaint();
			this._type_ |=0x8000;
			(p._type2_ & 0x200000)&& (this._type2_ |=0x200000);
			((p._type_ & 0x8)==0)&& this.removeType(0x8);
			(this._type_ & 0x100)&& (p._type_ |=0x100);
			(this._type_ & 0x200)&& (p._type_ |=0x200);
			this._baseURI_=this._baseURI_ || p._baseURI_;
			if (this._childs_.length > 0){
				for (i=0,sz=this._childs_.length;i < sz;i++){
					(c=this._childs_[i])&&(c.onAddDocument(),c.lyToBody(),c.lyDispatchEvent(/*iflash.events.Event.TODOCUMENT*/"todocument"));
				}
			}
		}

		__proto__.isInDocument=function(){
			return this.checkType(0x8000);
		}

		__proto__._parentsHasThisTag_=function(name){
			if (this.nodeName==name)return true;
			return this.parent?this.parent._parentsHasThisTag_(name):false;
		}

		__proto__.appendChild=function(c){
			if (this.deleted)return null;
			if ((typeof c=='string'))
				c=Laya.document.createElement(c);
			else{
			}
			if (c._private_ !=null){
				if (c._parent_==this)return c;
				this.addType(0x10);
				this.insert(c,this._childs_.length);
				return c;
			}
			for (var i=0,sz=c.length;i < sz;i++)
			this.appendChild(c[i]);
			return this;
		}

		__proto__.lyRemoveChildAt=function(index){
			if (index < 0)return this;
			var c=this._childs_[index];
			c.removeFrameTimer();
			c._parent_=null;
			this._childs_.splice(index,1);
			this._modle_ && this._modle_.removeAt(index,c._modle_,this._childs_.length);
			c.removeType(iflash.laya.dom.Node.TYPE_INDOCUMENT);
			this.lyDispatchEvent(/*iflash.events.Event.REMOVED*/"removed");
			c.lyDispatchEvent(/*iflash.events.Event.REMOVED_FROM_STAGE*/"removedFromStage");
			this._type_ |=0x80000;
			this.repaint();
			return c;
		}

		__proto__.removeChild=function(c){
			return this.lyRemoveChildAt(this.childIndexOf(c));
		}

		__proto__.childIndexOf=function(child){
			return this._childs_.indexOf(child);
		}

		__proto__.onParent=function(parent){}
		__proto__.destroy=function(){
			if ((this._type_ & 0x1)!=0)return false;
			this._type_ |=0x1;
			this.lyDispatchEvent(/*iflash.events.Event.DESTROY*/"destroy");
			this.hidden=1;
			this.deleted=true;
			this.complete=true;
			var p=this._parent_,childs,i=0,sz=0,_pr;
			if ((p!=null && !p.deleted)){
				p.repaint();
				(i=p.childIndexOf(this))>=0 && (p._childs_.splice(i,1));
			}
			if (this.checkType(0x10)){
				_pr=this._private_;
				(p !=null)&& (_pr._name_ !=null)&& (p._private_["?name_"+this.name]=null);
				(_pr._gname_)&& (this.group._private_["?gname_"+this.gname]=null);
				(_pr._id_!=null)&& Laya.document.all[this.id]==this && (Laya.document.all[this.id]=null);
				if ((childs=this._childs_).length > 0){
					this._childs_=EventDispatcher.__NULLARRAY__;
					for (i=0,sz=childs.length;i < sz;i++)(p=childs[i])&& p.destroy();
				}
			}
			Node.__node_deleted_list_.push(this);
			this._modle_&&this._modle_.destroy();
			return true;
		}

		__proto__.destroyAllChild=function(){
			this.nodeValue=null;
			this._modle_.destroyAllChild();
			if (this._childs_.length >0){
				var cs=this._childs_;
				this._childs_=EventDispatcher.__NULLARRAY__;
				for (var i=0,sz=cs.length;i < sz;i++)cs[i].destroy();
				this.repaint();
			}
		}

		__proto__._lyPaint_=function(context,x,y){}
		__proto__.addFrameTimer=function(fn){
			return this._tmctr_.addFrameTimer(fn,this);
		}

		__proto__.removeFrameTimer=function(){
			if(!this._private_.onupdate)
				return;
			var t=this._private_.onupdate;
			t.deleted=true;
		}

		__proto__.addTimer=function(fn,delay,repeartCount){
			(repeartCount===void 0)&& (repeartCount=0);
			return this._tmctr_.addTimer(this,fn,delay,repeartCount);
		}

		__proto__.addTimerOut=function(fn,delay){
			return this._tmctr_.addTimer(this,fn,delay,1);
		}

		__proto__.formatUrl=function(url){
			return Method.formatUrl(url,this._baseURI_?this._baseURI_.path:Laya.document.baseURI.path);
		}

		__proto__.sortChildren=function(keyOrFunction){
			var f=keyOrFunction,key;
			if (typeof (f)=="string"){
				key=f;
				f=function (a,b){
					return b[key]-a[key];
				};
			}
			this._childs_.sort(f);
		}

		__proto__.setAttribute=function(name,value){
			name=name.toLowerCase();
			this["??"+name] ? this["??"+name].setValue(this,value):
			this[name]=value;
		}

		__proto__.getAttribute=function(name){
			return this["??"+name] ? this["??"+name].getValue(this):
			this[name];
		}

		__proto__.toHtmlString=function(){
			return this.nodeName+" "+this.attributesToHTML();
		}

		__proto__._checkAllComplete_=function(){
			if (!this.complete)return false;
			if(this.deleted)return false;
			var childs=this._childs_,node,sz=childs.length,i=0;
			for (i=0;i < sz;i++){
				node=childs[i];
				if(!node.deleted && !node.complete)return false;
			}
			this._private_.onComplete && this._private_.onComplete();
			return true;
		}

		__proto__.importHTML=function(url){
			new HTMLLink(this.formatUrl(url),this);
		}

		__proto__.appendHTML=function(txt){
			new HTMLDocument(txt,this,this.baseURI);
		}

		__proto__.attributesToHTML=function(){
			var i=0,sz=0,str="",param,def;
			for (i=0,sz=Node.__ATTRIBUTES__.length;i <sz;i++){
				def=Node.__ATTRIBUTES__[i];
				param=""+this[def.name];
				if (param=="" || param=='null' || param=='NaN' || param=='undefined' || def.defaultv==param)continue ;
				str+=def.namenew+'="'+param+'" ';
			}
			for (var k in this){
				if (k.substr(0,2)!='??')continue ;
				var d=this [k];
				if (!d.toHTML())continue ;
				param=""+d.getValue(this);
				if (param=="" || param=='null' || param=='NaN' || param=='undefined')continue ;
				str+=k.substr(2)+'="'+param+'" ';
			}
			return str;
		}

		__proto__.lastChildNode=function(){
			return this.childNodes==null || this.childNodes.length==0?null:this.childNodes[this.childNodes.length-1];
		}

		__proto__.onChildRepos=function(child){}
		__proto__.onChildResize=function(child){}
		__proto__.clone=function(){
			return new Node();
		}

		__proto__.hasQuote=function(){
			return false;
		}

		__proto__.setAttributesStart=function(){}
		__proto__.setAttributesEnd=function(){}
		__proto__.lyToBody=function(){}
		DEFUNENUMPTY$(__proto__,'_$get_basePath',function(){
			return this._baseURI_!=null?this._baseURI_.path:null;
		});

		Object.defineProperty(__proto__,'basePath',{get:__proto__._$get_basePath,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_complete',function(){
			return (this._type_ & 0x4)==0x4;
		});

		DEFUNENUMPTY$(__proto__,'_$set_complete',function(b){
			(b)?(this._type_ |=0x4):
			(this._type_ &=~ 0x4);
		});

		Object.defineProperty(__proto__,'complete',{get:__proto__._$get_complete,set:__proto__._$set_complete,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_deleted',function(b){
			this.destroy();
		});

		Object.defineProperty(__proto__,'deleted',{get:_super.prototype._$get_deleted,set:__proto__._$set_deleted,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return this._private_._id_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_id',function(id){
			var p=this._private_;
			if (p._id_==id)return;
			var all=Laya.window.document.all;
			if (p._id_ !=null && all[p._id_]==this)all[p._id_]=null;
			p._id_=id;
			if (id !=null){
				this.addType(0x10);
				all[id]=this;
			}
			return;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,set:__proto__._$set_id,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_name',function(){
			return this._private_._name_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_name',function(_name){
			this._private_._name_=_name;
		});

		Object.defineProperty(__proto__,'name',{get:__proto__._$get_name,set:__proto__._$set_name,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parent',function(){
			return this._parent_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_parent',function(p){
			if (p==null)return;
			var pnode;
			if ((typeof p=='string')){
				pnode=Laya.document.getElementById(p);
				if (pnode==null){
					trace("setParent err:"+p);
					return;
				}
			}
			else pnode=p;
			if (this._parent_ !=pnode)pnode.appendChild(this);
			return;
		});

		Object.defineProperty(__proto__,'parent',{get:__proto__._$get_parent,set:__proto__._$set_parent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_group',function(){
			if ((this._type_ & 0x40000)!=0)return this;
			return this._parent_?(this._parent_).group:null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_group',function(b){
			this._type_ |=0x40000 | 0x10;
		});

		Object.defineProperty(__proto__,'group',{get:__proto__._$get_group,set:__proto__._$set_group,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_gname',function(){
			return this._private_._gname_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_gname',function(_name){
			var g=this.group;
			(this._private_._gname_)&& (g._private_["?gname_"+this.gname]=null);
			this._private_._gname_=_name;
			g._private_[this.gname]=this;
		});

		Object.defineProperty(__proto__,'gname',{get:__proto__._$get_gname,set:__proto__._$set_gname,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_disabled',function(){
			return this.checkType(0x40);
		});

		DEFUNENUMPTY$(__proto__,'_$set_disabled',function(b){
			(StringMethod.toBool(b))? this.addType(0x40):
			this.removeType(0x40);
		});

		Object.defineProperty(__proto__,'disabled',{get:__proto__._$get_disabled,set:__proto__._$set_disabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_onupdate',function(){
			return (this._private_.onupdate?this._private_.onupdate.listener:null);
		});

		DEFUNENUMPTY$(__proto__,'_$set_onupdate',function(fn){
			if(this._private_.onupdate)(this._private_.onupdate.deleted=true);
			this._private_.onupdate=this.addFrameTimer(fn);
		});

		Object.defineProperty(__proto__,'onupdate',{get:__proto__._$get_onupdate,set:__proto__._$set_onupdate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_baseURI',function(){
			return this._baseURI_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_baseURI',function(uri){
			this._baseURI_=uri;
		});

		Object.defineProperty(__proto__,'baseURI',{get:__proto__._$get_baseURI,set:__proto__._$set_baseURI,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get__to_sort_d',function(){
			return this._sort_d_=this._id_ / 100000;
		});

		Object.defineProperty(__proto__,'_to_sort_d',{get:__proto__._$get__to_sort_d,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_innerHTML',function(){
			return this._tempinnerHtml;
		});

		DEFUNENUMPTY$(__proto__,'_$set_innerHTML',function(txt){
			this.destroyAllChild();
			this._tempinnerHtml=txt;
			new HTMLDocument(txt,this,this.baseURI);
		});

		Object.defineProperty(__proto__,'innerHTML',{get:__proto__._$get_innerHTML,set:__proto__._$set_innerHTML,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeName',function(){
			return this._private_._nodeName_==null?this.defaultNodeName:this._private_._nodeName_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_nodeName',function(name){
			this._private_._nodeName_=name;
		});

		Object.defineProperty(__proto__,'nodeName',{get:__proto__._$get_nodeName,set:__proto__._$set_nodeName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeValue',function(){
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_nodeValue',function(value){
		});

		Object.defineProperty(__proto__,'nodeValue',{get:__proto__._$get_nodeValue,set:__proto__._$set_nodeValue,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_childNodes',function(){
			return this._childs_;
		});

		Object.defineProperty(__proto__,'childNodes',{get:__proto__._$get_childNodes,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_parentNode',function(){
			return this._parent_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_parentNode',function(p){
			this._parent_=p;
		});

		Object.defineProperty(__proto__,'parentNode',{get:__proto__._$get_parentNode,set:__proto__._$set_parentNode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_onComplete',function(fn){
			this._private_.onComplete=fn;
		});

		Object.defineProperty(__proto__,'onComplete',{set:__proto__._$set_onComplete,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_defaultNodeName',function(){
			return "node";
		});

		Object.defineProperty(__proto__,'defaultNodeName',{get:__proto__._$get_defaultNodeName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_outerHTML',function(){
			return (HTMLDocument.toHTML(this,true)).join('');
		});

		DEFUNENUMPTY$(__proto__,'_$set_outerHTML',function(txt){
			var p=this._parent_;
			this.destroy();
			p.appendHTML(txt);
		});

		Object.defineProperty(__proto__,'outerHTML',{get:__proto__._$get_outerHTML,set:__proto__._$set_outerHTML,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_style',function(){
			return null;
		});

		Object.defineProperty(__proto__,'style',{get:__proto__._$get_style,enumerable:false});
		Node.NODE_SELECT_IS_MATCH=1;
		Node.NODE_SELECT_IS_NOT_MATCH=0;
		Node.NODE_SELECT_BREAK=-1;
		Node.NODE_SELECT_BREAK_CHILD=-2;
		Node.__node_deleted_list_=[];
		Node.TYPE_WIISORT=0x2;
		Node.TYPE_COMPLETE=0x4;
		Node.TYPE_VIEW=0x8;
		Node.TYPE_DELEX=0x10;
		Node.TYPE_DOMEX=0x20;
		Node.TYPE_DISABLED=0x40;
		Node.TYPE_ENABLE_EVENT=0x80;
		Node.TYPE_ENABLE_MOUSE=0x100;
		Node.TYPE_ENABLE_MOUSE_MOVE=0x200;
		Node.TYPE_CANCELBUBBLE=0x400;
		Node.TYPE_MOUSE_OVER=0x800;
		Node.TYPE_MOUSE_DOWN=0x1000;
		Node.TYPE_MOUSE_NO_CHECK_BORDER=0x2000;
		Node.TYPE_ENABLE_REPAINT=0x4000;
		Node.TYPE_INDOCUMENT=0x8000;
		Node.TYPE_PUSHTOTYPESETTELL=0x10000;
		Node.TYPE_NEEDTYPESET=0x20000;
		Node.TYPE_ISGROUP=0x40000;
		Node.TYPE_SCROLLSZCHG=0x80000;
		Node.TYPE_NO_INHERITING_FONT=0x100000;
		Node.TYPE_RITHTNOW_TYPESETTING=0x200000;
		Node.TYPE_IFLASH=0x400000;
		Node.TYPE2_DRAW_TANSFORM=0x1;
		Node.TYPE2_DRAW_FILTER=0x2;
		Node.TYPE2_DRAW_FILTEREX=0x4;
		Node.TYPE2_DRAW_CANVAS=0x8;
		Node.TYPE2_DRAW_BACKGROUND=0x20;
		Node.TYPE2_DRAW_BORDER=0x40;
		Node.TYPE2_DRAW_IMG=0x80;
		Node.TYPE2_DRAW_MOVIE=0x100;
		Node.TYPE2_DRAW_CLIP=0x100;
		Node.TYPE2_DRAW_MASK=0x200;
		Node.TYPE2_DRAW_CHILDS=0x800;
		Node.TYPE2_MODEL_FONTSET=0x1000;
		Node.TYPE2_DISABLE_TYPESET=0x2000;
		Node.TYPE2_MOUSEEVENTDISABLECHILDS=0x4000;
		Node.TYPE2_MOUSEEVENTDISABLESELF=0x20000;
		Node.TYPE2_ENABLEBUBBLES=0x40000;
		Node.TYPE2_HIDETEXT=0x100000;
		Node.TYPE2_REPAINTTOPARENT=0x200000;
		Node.TYPE2_CHECKDOC=0x400000;
		Node.TYPE2_CENTER=0x800000;
		Node.TYPE2_IS_EMBED=0x4000000;
		Node.TYPE2_PROGRAM_VISIBLE=0x8000000;
		Node.HIDDEN_TRUE=1;
		Node.HIDDEN_DISPLAYNONE=2;
		Node.TYPE2DEFAULT=0;
		REGSTATICATTR$(Node,
		['DEFAULTTYPE',function(){return this.DEFAULTTYPE=(0x4 | 0x8 | 0x80000);
		},'__ATTRIBUTES__',function(){return this.__ATTRIBUTES__=Method.InitAttributesToHTML("id;name;gname;draggable:none;",null);}

		]);
		return Node;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/drawbackground.as=======10098.999759
	var DrawBackground1=iflash.laya.display.unit.DrawBackground=(function(_super){
		function DrawBackground(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawBackground,'iflash.laya.display.unit.DrawBackground',true,false,_super,'DrawBackground1');
		var __proto__=DrawBackground.prototype;
		__proto__.clone=function(node){
			return new DrawBackground(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var bg=node._style_._styleex_.background;
			if (bg.bgImg && bg.bgImg.isReady()){
				Laya.document.drawCount++;
				var image=bg.bgImg;
				var pos=bg.pos;
				if (bg.nRepeat==0 || (w<image.width && h<image.height)){
					DrawBackground.fillNoRepeat(node,context,image,pos.x,pos.y,w,h,x,y);
				}
				else{
					var pattern=context.createPattern(image,bg.repeat);
					x+=pos.x;
					y+=pos.y;
					context.save();
					context.fillStyle=pattern;
					if (x !=0 || y !=0){
						context.translate(x,y);
						context.fillRect(-pos.x,-pos.y,w,h);
						context.translate(-x,-y);
					}
					else context.fillRect(-pos.x,-pos.y,w,h);
					context.restore();
				}
			}
			else{
				var color=bg.color;
				if (color !=null){
					Laya.document.drawCount++;
					var fillStyle=color.text;
					if (fillStyle=='clear'){
						context.clearRect(x,y,w,h);
					}
					else{
						context.save();
						context.fillStyle=fillStyle;
						context.fillRect(x,y,w,h);
						context.restore();
					}
				}
			}
			this.next && this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_BACKGROUND*/0x20;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_BACKGROUND*/0x20;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawBackground.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawBackground._DEFAULT_);
		}

		DrawBackground.fillNoRepeat=function(node,context,image,x,y,cw,ch,bx,by){
			if(x>cw || y>ch)return;
			var ex=x+image.width,ey=y+image.height,dx=0,dy=0;
			if(x<0){
				dx=-x;
				x=0;
			}
			if(y<0){
				dy=-y;
				y=0;
			}
			if(ex>cw)ex=cw;
			if(ey>ch)ey=ch;
			cw=ex-x;
			ch=ey-y;
			(cw>1 && ch>1)&& context.drawImage(image,dx,dy,cw,ch,x+bx,y+by,cw,ch);
		}

		REGSTATICATTR$(DrawBackground,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawBackground(null);}
		]);
		return DrawBackground;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/drawbitmapdata.as=======10098.999758
	var DrawBitmapData=iflash.laya.display.unit.DrawBitmapData=(function(_super){
		function DrawBitmapData(){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawBitmapData,'iflash.laya.display.unit.DrawBitmapData',true,false,_super);
		var __proto__=DrawBitmapData.prototype;
		__proto__.clone=function(node){
			return new DrawBitmapData();
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var bitmapdata=node.bitmapData;
			bitmapdata && bitmapdata.paint && bitmapdata.paint.call(bitmapdata,context,x,y,w,h);
			if (this.next)this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return 30;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return 30;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawBitmapData._cache_=[];
		REGSTATICATTR$(DrawBitmapData,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawBitmapData();
		}

		]);
		return DrawBitmapData;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/net/httprequest.as=======10098.999757
	var HttpRequest=iflash.laya.net.HttpRequest=(function(_super){
		function HttpRequest(){
			this.onload=null;
			this.onerror=null;
			this._req=null;
			this._callBackFunc=null;
			this._responseType_=null;
			_super.apply(this,arguments);
			if (Browser.window.XMLHttpRequest){
				this._req=/*__JS__ */new XMLHttpRequest();
			}
			else if (Browser.window.ActiveXObject){
				this._req=/*__JS__ */new ActiveXObject('Microsoft.XMLHTTP');
			}
		}

		REGCLASS$(HttpRequest,'iflash.laya.net.HttpRequest',true,false,_super);
		var __proto__=HttpRequest.prototype;
		__proto__.onRequestHandler=function(_req){
			if (_req.readyState !=4)return;
			if (_req.status==200 || _req.status==0){
				var data=this._responseType_?_req.response:_req.responseText;
				if (this._callBackFunc !=null)
					this._callBackFunc(data);
				if (this.onload !=null)
					this.onload(data);
			}
			else if (_req.status==404){
				if(this.onerror!=null)this.onerror(_req.status);
			}
			else{
				if(this.onerror!=null)this.onerror(_req.status);
			}
		}

		__proto__.open=function(url,format,callBackFunc,isAsync,requestType,data){
			var _$this=this;
			(isAsync===void 0)&& (isAsync=true);
			(requestType===void 0)&& (requestType="get");
			this._callBackFunc=callBackFunc;
			if (this._req==null)return false;
			try{
				this._req.onreadystatechange=function (_req){
					_$this.onRequestHandler(this);
				}
				if(requestType=="text"){
					requestType='get';
				};
				var r=this._req.open(requestType,url,isAsync);
				format && (this._responseType_=this._req.responseType=format);
				if (requestType.toLowerCase()=='get')this._req.send();
				else if (requestType.toLowerCase()=='post'){
					if(Laya.CONCHVER){
						if(data["_byteView_"])
							this._req.send(data._byteView_.buffer.slice(0,data._length));
						else
						this._req.send(data);
						}else{
						if(data["_byteView_"])
							throw ("目前不支持二进制数据post传输");
						else
						this._req.send(data);
					}
				}
				else Log.log("*************no get");
			}
			catch(err){
				Log.log("*************HttpRemote open err:"+err);
				if(this.onerror!=null)this.onerror(-1);
				return false;
			}
			return true;
		}

		return HttpRequest;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/drawborder.as=======10098.999757
	var DrawBorder=iflash.laya.display.unit.DrawBorder=(function(_super){
		function DrawBorder(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawBorder,'iflash.laya.display.unit.DrawBorder',true,false,_super);
		var __proto__=DrawBorder.prototype;
		__proto__.clone=function(node){
			return new DrawBorder(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var bd=node._style_._styleex_.border;
			if (bd.size==0 || bd.color==null)return;
			context.save();
			var color=bd.color;
			context.lineWidth=bd.size;
			context.strokeStyle=bd.color.toString();
			context.strokeRect(x+0.5,y+0.5,w,h);
			context.restore();
			Laya.document.drawCount++;
			(this.next)&& (this.next.paint(context,x,y,node,w,h));
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_BORDER*/0x40;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_BORDER*/0x40;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawBorder.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawBorder._DEFAULT_);
		}

		REGSTATICATTR$(DrawBorder,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawBorder(null);}
		]);
		return DrawBorder;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/drawcanvas.as=======10098.999756
	var DrawCanvas=iflash.laya.display.unit.DrawCanvas=(function(_super){
		function DrawCanvas(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawCanvas,'iflash.laya.display.unit.DrawCanvas',true,false,_super);
		var __proto__=DrawCanvas.prototype;
		__proto__.clone=function(node){
			return new DrawCanvas(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			if (!this.next)return;
			var c=node._getCanvas_();
			var filters;
			if (c){
				Laya.document.drawCount++;
				if (node.isRepaint()){
					filters=node._private_._filters_;
					if (filters){
						var ctx=c.context;
						var i=0,sz=filters.length;
						ctx.clearRect(0,0,c.width,c.height);
						ctx.save();
						for (i=0;i < sz;i++){
							filters[i].__preApplyFilter(ctx);
						}
						this.next.paint(ctx,20,20,node,w,h);
						ctx.restore();
						for (i=0;i < sz;i++){
							filters[i].__applyFilter(c);
						}
					}
					else{
						c.context.clearRect(0,0,c.width,c.height);
						this.next.paint(c.context,20,20,node,w,h);
					}
				}
				context.drawImage(c,x-20,y-20);
			}
			else this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CANVAS*/0x8;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CANVAS*/0x8;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawCanvas.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawCanvas._DEFAULT_);
		}

		REGSTATICATTR$(DrawCanvas,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawCanvas(null);}
		]);
		return DrawCanvas;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/drawchilds.as=======10098.999755
	var DrawChilds1=iflash.laya.display.unit.DrawChilds=(function(_super){
		function DrawChilds(node){
			_super.apply(this,arguments);
			node && (node._type2_ |=/*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800);
		}

		REGCLASS$(DrawChilds,'iflash.laya.display.unit.DrawChilds',true,false,_super,'DrawChilds1');
		var __proto__=DrawChilds.prototype;
		__proto__.clone=function(node){
			return new DrawChilds(node);
		}

		__proto__._paintText_=function(context,x,y,node,style){
			var text=node.getTextTypeset(),words,i=0,sz=0,word,ispwd,oneword;
			if (text==null)return;
			if (text.nodes.length > 0&&!node._private_.hidetext){
				words=text.nodes;
				sz=words.length;
				context.font=style.fontText;
				var h=Math.floor(style._font_.size / 2+0.5);
				context.textBaseline="middle";
				context.textAlign="left";
				context.fillStyle=style.color;
				if (style._font_.getPassword())
					ispwd=true;
				for (i=0;i < sz;i++){
					word=words[i];
					oneword=ispwd?"*":word.text;
					if (word.image==null){
						context.fillText(oneword,x+word.left,y+word.top+h);
					}
					else context.drawImage(word.image,0,0,word.width,word.height,x+word.left,y+word.top,word.width,word.height);
				}
			}
		}

		__proto__.paint=function(context,x,y,node,w,h){
			node.sortChildsByZIndex();
			var style=node._style_,padding=style._styleex_.padding,bsave=false,i=0,sz=0,childs,c;
			if (style.clip){
				bsave=true;
				context.save();
				context.beginPath();
				context.rect(x+padding.left,y+padding.top,w-padding.width,h-padding.height);
				context.clip();
			}
			x+=node.scrollLeft+padding.left;
			y+=node.scrollTop+padding.top;
			(node._type2_ & /*iflash.laya.dom.Node.TYPE2_HIDETEXT*/0x100000)==0 && node.getTextTypeset()&& node.getTextTypeset().paintText(context,x,y);
			var mode=node.style.clipMode;
			if (mode !=0){
				this.paintClip(context,node,node._childs_,mode,x,y,w,h);
				bsave && context.restore();
				this.next && this.next.paint(context,x,y,node,w,h);
				return;
			}
			if ((sz=(childs=node._childs_).length)> 0){
				for (i=0;i < sz;i++){
					if ((c=childs[i])==null || c.hidden!=0)continue ;
					(c)._lyPaint_(context,x,y);
				}
			}
			bsave && context.restore();
			this.next && this.next.paint(context,x,y,node,w,h);
		}

		__proto__.paintClip=function(context,node,child,mode,x,y,w,h){
			var c,style;
			var left=-node.scrollLeft;
			var top=-node.scrollTop;
			var right=node.offsetWidth+left;
			var bottom=node.offsetHeight+top;
			var i=0,len=node._childs_.length;
			while (i < len){
				i++;
				if ((c=child[i-1])==null || c.hidden !=0)continue ;
				style=c.style;
				if (style.block){
					if (style._left_ >=right){
						if (mode==0x10)break ;
						continue ;
					}
					if (style._top_ >=bottom){
						if (mode==0x01)break ;
						continue ;
					}
					if ((style._left_+style._width_)< left)continue ;
					if ((style._top_+style._height_)< top)continue ;
				}
				(c).paint(context,x,y);
			}
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_CHILDS*/0x800;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawChilds.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawChilds._DEFAULT_);
		}

		REGSTATICATTR$(DrawChilds,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawChilds(null);}
		]);
		return DrawChilds;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/drawimg.as=======10098.999754
	var DrawImg=iflash.laya.display.unit.DrawImg=(function(_super){
		function DrawImg(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawImg,'iflash.laya.display.unit.DrawImg',true,false,_super);
		var __proto__=DrawImg.prototype;
		__proto__.clone=function(node){
			return new DrawImg(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var data=(node).image;
			data && context.drawImage(data,Laya.HTMLVER==1?data.left:0,Laya.HTMLVER==1?data.top:0,data.width,data.height,x,y,w,h);
			Laya.document.drawCount++;
			this.next && this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_IMG*/0x80;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_IMG*/0x80;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawImg.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawImg._DEFAULT_);
		}

		REGSTATICATTR$(DrawImg,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawImg(null);}
		]);
		return DrawImg;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/drawquote.as=======10098.999753
	var DrawQuote=iflash.laya.display.unit.DrawQuote=(function(_super){
		function DrawQuote(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawQuote,'iflash.laya.display.unit.DrawQuote',true,false,_super);
		var __proto__=DrawQuote.prototype;
		__proto__.clone=function(node){
			return new DrawQuote(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var quote=node;
			var _quoteElement_=quote.quote;
			_quoteElement_&&_quoteElement_.hidden==0 && _quoteElement_._lyPaint_(context,x,y);
			(this.next)&& this.next.paint(context,x,y,node,w,h);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_IMG*/0x80;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_IMG*/0x80;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawQuote.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawQuote._DEFAULT_);
		}

		REGSTATICATTR$(DrawQuote,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawQuote(null);}
		]);
		return DrawQuote;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/drawtransform.as=======10098.999752
	var DrawTransform1=iflash.laya.display.unit.DrawTransform=(function(_super){
		function DrawTransform(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(DrawTransform,'iflash.laya.display.unit.DrawTransform',true,false,_super,'DrawTransform1');
		var __proto__=DrawTransform.prototype;
		__proto__.clone=function(node){
			return new DrawTransform(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var style=node._style_;
			var translate;
			var tran=style._transform_;
			if (!tran.transformUse){
				this.next && this.next.paint(context,x,y,node,w,h);
				return;
			}
			translate=tran.translate;
			context.save();
			translate.calculate(style);
			if (x !=-translate.x || y !=-translate.y){
				context.translate(x+translate.x,y+translate.y);
			}
			if (tran.scale.x !=1 || tran.scale.y !=1)context.scale(tran.scale.x,tran.scale.y);
			if (tran.rotate !=0)context.rotate(Math.PI *tran.rotate / 180);
			x=-translate.x;
			y=-translate.y;
			if (tran.matrix){
				var m=tran.matrix;
				context.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
			}
			this.next && this.next.paint(context,x,y,node,w,h);
			context.restore();
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_TANSFORM*/0x1;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_TANSFORM*/0x1;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		DrawTransform.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,DrawTransform._DEFAULT_);
		}

		REGSTATICATTR$(DrawTransform,
		['_DEFAULT_',function(){return this._DEFAULT_=new DrawTransform(null);}
		]);
		return DrawTransform;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/display/unit/usefilter.as=======10098.999751
	var UseFilter1=iflash.laya.display.unit.UseFilter=(function(_super){
		function UseFilter(node){
			_super.apply(this,arguments);
		}

		REGCLASS$(UseFilter,'iflash.laya.display.unit.UseFilter',true,false,_super,'UseFilter1');
		var __proto__=UseFilter.prototype;
		__proto__.clone=function(node){
			return new UseFilter(node);
		}

		__proto__.paint=function(context,x,y,node,w,h){
			var filter=node._style_._filter_,preFilter;
			var pre;
			if ((filter.alpha < 0.01 && filter.key==0)|| !this.next)return;
			if (filter.key!=0){
				preFilter=context.filter;
				context.filter=filter;
				if(Laya.FLASHVER)context.setFilter(filter.light.r,filter.light.g,filter.light.b,filter.gray);
			}
			if (filter.alpha==1){
				this.next.paint(context,x,y,node,w,h);
				(preFilter!=null)&& (context.filter=preFilter);
				return;
			}
			pre=context.globalAlpha;
			context.globalAlpha=filter.alpha;
			this.next.paint(context,x,y,node,w,h);
			context.globalAlpha=pre;
			(preFilter!=null)&& (context.filter=preFilter);
		}

		DEFUNENUMPTY$(__proto__,'_$get_place',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_FILTER*/0x2;
		});

		Object.defineProperty(__proto__,'place',{get:__proto__._$get_place,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id',function(){
			return /*iflash.laya.dom.Node.TYPE2_DRAW_FILTER*/0x2;
		});

		Object.defineProperty(__proto__,'id',{get:__proto__._$get_id,enumerable:false});
		UseFilter.insertUnit=function(node){
			return DisplayUnit._insertUnit_ (node,UseFilter._DEFAULT_);
		}

		REGSTATICATTR$(UseFilter,
		['_DEFAULT_',function(){return this._DEFAULT_=new UseFilter(null);}
		]);
		return UseFilter;
	})(DisplayUnit)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/window.as=======10098.999724
	var Window1=iflash.laya.Window=(function(_super){
		function Window(){
			this.onScroll=null;
			this.updateTime=null;
			this._width=0;
			this._height=0;
			this.event=null;
			this.scale=null;
			this.mouseX=0;
			this.mouseY=0;
			this.left=0;
			this.top=0;
			this.disableMouse=false;
			this.document=null;
			this.location=null;
			this.fps=0;
			this.delay=null;
			this.updatecount=0;
			this.preUpdateTime=0;
			_super.apply(this,arguments);
			this.scale=new Point(1,1);
			Laya.window=EventDispatcher.window=this;
			this.location=new Location1();
			this.document=Laya.document=new Document();
			this.init();
			this.resizeTo(Browser.window.innerWidth,Browser.window.innerHeight);
			this.updatecount=0;
			this.delay=[];
			this.updateTime=this.preUpdateTime=iflash.utils.getTimer();
		}

		REGCLASS$(Window,'iflash.laya.Window',true,false,_super,'Window1');
		var __proto__=Window.prototype;
		__proto__.init=function(){
			this.document.init();
		}

		__proto__.enterFrame=function(){
			Stage.stage.sendRender();
			this.updateTime=iflash.utils.getTimer();
			this.delay[0]=this.updateTime-this.preUpdateTime;
			this.preUpdateTime=this.updateTime;
			this.lyDispatchEvent(/*iflash.events.Event.ENTER_FRAME*/"enterFrame");
			TimerCtrl.__DEFAULT__._update_(this.updateTime);
			(this.updatecount % 60==0)&& _SystemMethod_._release_();
			EventManager.mgr.dispatchSystemEvent(this.delay[0]);
			Typesetting.update();
			this.updatecount++;
		}

		__proto__.resizeTo=function(w,h,forceUpdate){
			(forceUpdate===void 0)&& (forceUpdate=false);
			var body=this.document.body;
			if(!forceUpdate){
				if ((this.document.adapter._screenRotate_==0 &&this._width==w && this._height==h)|| (this.document.adapter._screenRotate_==90 &&this._height==w && this._width==h))
					return;
			}
			this._width=w;
			this._height=h;
			if (Laya.HTMLVER){
				this.document.adapter._screenRotate_=0;
				if (this.document.adapter.autorotate=="rotator" && this._width < this._height){
					this.document.adapter._screenRotate_=90;
					this._width=h;
					this._height=w;
				}
				else{
					if (this.document.adapter.autorotate=="portrait" && this._width > this._height){
						this.document.adapter._screenRotate_=90;
						this._width=h;
						this._height=w;
					}
				}
			}
			if (body._style_._width_==0){
				var type=body._style_._type_;
				body.setSize(w,h);
				body._style_._type_=type;
			}
			this.lyDispatchEvent(/*iflash.events.Event.RESIZE*/"resize");
		}

		DEFUNENUMPTY$(__proto__,'_$get_innerWidth',function(){
			return this._width;
		});

		DEFUNENUMPTY$(__proto__,'_$set_innerWidth',function(w){
			this.resizeTo(w,this._height);
		});

		Object.defineProperty(__proto__,'innerWidth',{get:__proto__._$get_innerWidth,set:__proto__._$set_innerWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_innerHeight',function(){
			return this._height;
		});

		DEFUNENUMPTY$(__proto__,'_$set_innerHeight',function(h){
			this.resizeTo(this._width,h);
		});

		Object.defineProperty(__proto__,'innerHeight',{get:__proto__._$get_innerHeight,set:__proto__._$set_innerHeight,enumerable:false});
		return Window;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/xml/xmldocument.as=======10098.999719
	var XMLDocument=iflash.laya.xml.XMLDocument=(function(_super){
		function XMLDocument(source,parent,uri){
			this.uri=null;
			this._text_=null;
			this._xml=new RegExp("<(/|)([\\w.]+)(?: +|)([\\s\\S]*?)(/|)>","g");
			this._attributesReg=new RegExp("(\\w+)\\s*=\\s*(\"[^\"]*\"|'[^']*')","g");
			_super.call(this,0,"root");
			this._text_=(!source || ((typeof source=='string')))?source:source.toString();
			parent=parent==null?this:parent;
			this.uri=uri?uri:parent.baseURI;
			if (source !=null)
				this.parseXML(source,parent);
		}

		REGCLASS$(XMLDocument,'iflash.laya.xml.XMLDocument',true,false,_super);
		var __proto__=XMLDocument.prototype;
		__proto__.toString=function(){
			return this.nodeValue || this._text_ || "";
		}

		__proto__.toXMLString=function(){
			return this._text_ || "";
		}

		__proto__.createElement=function(name,type,value,parent){
			if (type==0){
				this.nodeName=name;
				return this
			};
			var node=new XMLNode(type,value);
			node.nodeName=name;
			return node;
		}

		__proto__._getElementByNodeName_=function(name,parent){
			if (parent==null)
				return null;
			if (parent.nodeName==name)
				return parent;
			var childs=parent.childNodes;
			if (childs==null)
				return null;
			var i=0,len=childs.length,o;
			for (i=0;i < len;i++){
				o=childs[i];
				if (o.nodeName==name)
					return o;
			}
			for (i=0;i < len;i++){
				o=this._getElementByNodeName_(name,childs[i]);
				if (o !=null)
					return o;
			}
			return null;
		}

		__proto__.getElementByNodeName=function(name){
			return this._getElementByNodeName_(name,this);
		}

		__proto__.to_node=function(id,parent){
			switch(id){
				case 'this':return parent;break ;
				case 'parent':return parent.parentNode;break ;
				}
			return Laya.document.getElementById(id);
		}

		__proto__.htmlToDomAttributes=function(node,txt){
			if (txt==null)return;
			var arr;
			while ((arr=this._attributesReg.exec(txt))!=null){
				node.setAttribute(arr[1],arr[2].substring(1,arr[2].length-1));
			}
		}

		__proto__._setNodeValue_=function(node,value){
			node.nodeValue=value;
		}

		__proto__.predo=function(source){
			var temp,tempStr;
			var tempSource=source;
			var templen=0;
			var i=0;
			while ((temp=XMLDocument.cData.exec(source))!=null){
				tempStr="<to.this ly_cdata='"+HTMLDocument.pushTextToCahce(temp[1])+"'/>";
				tempSource=tempSource.substring(0,temp.index-templen)+tempStr+source.substring(XMLDocument.cData.lastIndex);
				templen=source.length-tempSource.length;
			}
			return tempSource;
		}

		__proto__.parseXML=function(source,parent){
			if(!source)return false;
			if(!((typeof source=='string')))source=source.toString();
			source=this.predo(source);
			var tm=iflash.utils.getTimer();
			var temp=[],arr,attrs,node=parent?parent:this,toIndex=-1;
			var tempNode=this,prelenth=0,preindex=0,txt;
			var popNode;
			if(!source)return false;
			source=source.replace(HTMLDocument._comments,"");
			var isfirst=0;
			var preType=-1;
			while ((arr=this._xml.exec(source))!=null){
				var isPre=(arr[1] !="/");
				if ((preType==-2&&isPre)||(preType==1&&!isPre)||preType==0){
					if ((arr["index"]-preindex-prelenth !=0)){
						var tempStr=source.substring(preindex+prelenth,arr["index"]);
						tempStr=tempStr.replace(XMLDocument.tnrs,"");
						if (tempStr.length !=0){
							Log.log("标签内有东西");
							if((node instanceof iflash.laya.dom.Node ))node.appendChild("span").nodeValue=tempStr;
						}
					}
				}
				if (isPre){
					prelenth=arr[0].length;
					toIndex=arr[2].indexOf("to.");
					if (toIndex==-1){
						tempNode=this.createElement(arr[2],isfirst,null,node);
						isfirst=1;
					}
					else{
						var elementid=arr[2].substring(3);
						if(elementid=="this")tempNode=node;
						else tempNode=Laya.document.getElementById(arr[2].substring(3));
						if(tempNode==null){trace(arr[2]+"木有找到该元素");return false}
							}
					preindex=arr["index"];
					if(toIndex==-1)
						node !=tempNode && node.appendChild(tempNode);
					if (tempNode.nodeName=="wait"){
						tempNode.nodeValue=source.substring(preindex+arr[0].length,source.lastIndexOf("</wait>"));
						this._xml.lastIndex=source.lastIndexOf("</wait>")-1;
					}
					if (arr[4]!="/"){
						if(tempNode.nodeName!="br"){
							temp.push(tempNode);
							node=tempNode;
							preType=-2;
						}
					}
					else{
						preType=0;
					}
					if (arr[3].length>0){
						tempNode.setAttributesStart();
						while ((attrs=this._attributesReg.exec(arr[3]))!=null){
							tempNode.setAttribute(attrs[1],attrs[2].substring(1,attrs[2].length-1));
						}
						tempNode.setAttributesEnd();
					}
				}
				else{
					if (temp.length==0){
						return false;
					}
					popNode=temp.pop();
					if (popNode.nodeName !=arr[2]&&"to."+popNode._getId_()!=arr[2]&&popNode!=temp[temp.length-1]){
						trace("xml错误："+tempNode.nodeName+"标签没有闭合");
						return false;
					}
					else{
						if (popNode==tempNode&&tempNode.nodeName!="wait"){
							txt=source.substring(preindex+prelenth,arr["index"]);
							txt=StringMethod.replaceBlankChar(txt,'');
							if (txt.length > 0)this._setNodeValue_(tempNode,txt);
						}
						if(temp.length!=0)
							node=temp[temp.length-1];
						else
						node=parent?parent:this;
						preindex=arr["index"];
						prelenth=arr[0].length;
						preType=1;
					}
				}
			}
			if (temp && temp.length > 0){Log.log("xml错误...有"+temp.length+"个标签没闭合");}
				Log.log((iflash.utils.getTimer()-tm)+"..................");
			return true;
		}

		XMLDocument.toXmlList=function(result){
			return (!result||((result instanceof Array)))?result:[result];
		}

		REGSTATICATTR$(XMLDocument,
		['tnrs',function(){return this.tnrs=new RegExp("[\\t\\n\\r\\\s]+","g");
		},'cData',function(){return this.cData=new RegExp("<!\\[CDATA\\[(.*?)\\]\\]>","g");}

		]);
		return XMLDocument;
	})(XMLNode)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/camera.as=======10098.999717
	var Camera=iflash.media.Camera=(function(_super){
		function Camera(){
			this._camera=null;
			_super.apply(this,arguments);
		}

		REGCLASS$(Camera,'iflash.media.Camera',true,false,_super);
		var __proto__=Camera.prototype;
		__proto__.setCamera=function(camera){
			this._camera=camera;
			return this;
		}

		__proto__.setCursor=function(value){
			this._camera.setCursor(value);
		}

		__proto__.setKeyFrameInterval=function(keyFrameInterval){
			this._camera.setKeyFrameInterval (keyFrameInterval);
		}

		__proto__.setLoopback=function(compress){
			(compress===void 0)&& (compress=false);
			this._camera.setLoopback(compress);
		}

		__proto__.setMode=function(width,height,fps,favorArea){
			(favorArea===void 0)&& (favorArea=true);
			this._camera.setMode(width,height,fps,favorArea);
		}

		__proto__.setMotionLevel=function(motionLevel,timeout){
			(timeout===void 0)&& (timeout=2000);
			this._camera.setMotionLevel(motionLevel,timeout);
		}

		__proto__.setQuality=function(bandwidth,quality){
			this._camera.setQuality(bandwidth,quality);
		}

		DEFUNENUMPTY$(__proto__,'_$get_activityLevel',function(){
			return this._camera.activityLevel;
		});

		Object.defineProperty(__proto__,'activityLevel',{get:__proto__._$get_activityLevel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bandwidth',function(){
			return this._camera.bandwidth;
		});

		Object.defineProperty(__proto__,'bandwidth',{get:__proto__._$get_bandwidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_currentFPS',function(){
			return this._camera.currentFPS;
		});

		Object.defineProperty(__proto__,'currentFPS',{get:__proto__._$get_currentFPS,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_fps',function(){
			return this._camera.fps;
		});

		Object.defineProperty(__proto__,'fps',{get:__proto__._$get_fps,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_keyFrameInterval',function(){
			return this._camera.keyFrameInterval;
		});

		Object.defineProperty(__proto__,'keyFrameInterval',{get:__proto__._$get_keyFrameInterval,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_quality',function(){
			return this._camera.quality;
		});

		Object.defineProperty(__proto__,'quality',{get:__proto__._$get_quality,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_motionLevel',function(){
			return this._camera.motionLevel;
		});

		Object.defineProperty(__proto__,'motionLevel',{get:__proto__._$get_motionLevel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._camera.height;
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_index',function(){
			return this._camera.index;
		});

		Object.defineProperty(__proto__,'index',{get:__proto__._$get_index,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_loopback',function(){
			return this._camera.loopback;
		});

		Object.defineProperty(__proto__,'loopback',{get:__proto__._$get_loopback,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_motionTimeout',function(){
			return this._camera.motionTimeout;
		});

		Object.defineProperty(__proto__,'motionTimeout',{get:__proto__._$get_motionTimeout,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_muted',function(){
			return this._camera.muted;
		});

		Object.defineProperty(__proto__,'muted',{get:__proto__._$get_muted,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_name',function(){
			return this._camera.name;
		});

		Object.defineProperty(__proto__,'name',{get:__proto__._$get_name,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._camera.width;
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,enumerable:false});
		Camera._$GET_isSupported=function(){
			return iflash.media.Camera.isSupported;
		}

		Object.defineProperty(Camera,'isSupported',{get:Camera._$GET_isSupported,set:iflash.events.EventDispatcher._$SET_isSupported,enumerable:false});
		Camera._$GET_names=function(){
			var result=[];
			var key;
			/*for each*/for(var $each_key in Camera._cameras){
				key=Camera._cameras[$each_key];
				result.push(key);
			}
			return result;
		}

		Object.defineProperty(Camera,'names',{get:Camera._$GET_names,set:iflash.events.EventDispatcher._$SET_names,enumerable:false});
		Camera._scanHardware=function(){}
		Camera.getCamera=function(name){
			if (Camera._cameras[name])return Camera._cameras[name];
			var result=new Camera();
			Camera._cameras[name]=result;
			return result.setCamera(iflash.media.Camera.getCamera(name));
		}

		REGSTATICATTR$(Camera,
		['_cameras',function(){return this._cameras=new Dictionary;}
		]);
		return Camera;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/xml/xmlcompilenode.as=======10098.999715
	var XMLCompileNode=iflash.laya.xml.XMLCompileNode=(function(_super){
		function XMLCompileNode(htmlCompile,type,value){
			this.allAttributeScript=null;
			_super.call(this,type,value);
		}

		REGCLASS$(XMLCompileNode,'iflash.laya.xml.XMLCompileNode',true,false,_super);
		var __proto__=XMLCompileNode.prototype;
		__proto__.setAttribute=function(name,value){
			Log.log("....:"+name+"="+value);
		}

		return XMLCompileNode;
	})(XMLNode)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/microphone.as=======10098.999715
	var Microphone=iflash.media.Microphone=(function(_super){
		function Microphone(){
			this._mic=null;
			_super.apply(this,arguments);
		}

		REGCLASS$(Microphone,'iflash.media.Microphone',true,false,_super);
		var __proto__=Microphone.prototype;
		__proto__.setMicrophone=function(mic){
			this._mic=mic;
			return this;
		}

		__proto__.setLoopBack=function(state){
			(state===void 0)&& (state=true);
			this._mic.setLoopBack=state;
		}

		__proto__.setSilenceLevel=function(silenceLevel,timeout){
			(timeout===void 0)&& (timeout=-1);
			this._mic.setSilenceLevel(silenceLevel,timeout);
		}

		__proto__.setUseEchoSuppression=function(useEchoSuppression){
			this._mic.setUseEchoSuppression(useEchoSuppression);
		}

		DEFUNENUMPTY$(__proto__,'_$get_activityLevel',function(){
			return this._mic.activityLevel;
		});

		Object.defineProperty(__proto__,'activityLevel',{get:__proto__._$get_activityLevel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_enableVAD',function(){
			return this._mic.enableVAD;
		});

		DEFUNENUMPTY$(__proto__,'_$set_enableVAD',function(enable){
			this._mic.enableVAD=enable;
		});

		Object.defineProperty(__proto__,'enableVAD',{get:__proto__._$get_enableVAD,set:__proto__._$set_enableVAD,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_name',function(){
			return this._mic.activityLevel;
		});

		Object.defineProperty(__proto__,'name',{get:__proto__._$get_name,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_codec',function(){
			return this._mic.codec;
		});

		DEFUNENUMPTY$(__proto__,'_$set_codec',function(codec){
			this._mic.codec=codec;
		});

		Object.defineProperty(__proto__,'codec',{get:__proto__._$get_codec,set:__proto__._$set_codec,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_gain',function(){
			return this._mic.gain;
		});

		DEFUNENUMPTY$(__proto__,'_$set_gain',function(gain){
			this._mic.gain=gain;
		});

		Object.defineProperty(__proto__,'gain',{get:__proto__._$get_gain,set:__proto__._$set_gain,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_silenceLevel',function(){
			return this._mic.activityLevel;
		});

		Object.defineProperty(__proto__,'silenceLevel',{get:__proto__._$get_silenceLevel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_encodeQuality',function(){
			return this._mic.encodeQuality;
		});

		DEFUNENUMPTY$(__proto__,'_$set_encodeQuality',function(quality){
			this._mic.encodeQuality=quality;
		});

		Object.defineProperty(__proto__,'encodeQuality',{get:__proto__._$get_encodeQuality,set:__proto__._$set_encodeQuality,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_framesPerPacket',function(){
			return this._mic.framesPerPacket;
		});

		DEFUNENUMPTY$(__proto__,'_$set_framesPerPacket',function(frames){
			this._mic.framesPerPacket=frames;
		});

		Object.defineProperty(__proto__,'framesPerPacket',{get:__proto__._$get_framesPerPacket,set:__proto__._$set_framesPerPacket,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_index',function(){
			return this._mic.activityLevel;
		});

		Object.defineProperty(__proto__,'index',{get:__proto__._$get_index,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_muted',function(){
			return this._mic.activityLevel;
		});

		Object.defineProperty(__proto__,'muted',{get:__proto__._$get_muted,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_noiseSuppressionLevel',function(){
			return this._mic.noiseSuppressionLevel;
		});

		DEFUNENUMPTY$(__proto__,'_$set_noiseSuppressionLevel',function(level){
			this._mic.noiseSuppressionLevel=level;
		});

		Object.defineProperty(__proto__,'noiseSuppressionLevel',{get:__proto__._$get_noiseSuppressionLevel,set:__proto__._$set_noiseSuppressionLevel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rate',function(){
			return this._mic.rate;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rate',function(rate){
			this._mic.rate=rate;
		});

		Object.defineProperty(__proto__,'rate',{get:__proto__._$get_rate,set:__proto__._$set_rate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_silenceTimeout',function(){
			return this._mic.activityLevel;
		});

		Object.defineProperty(__proto__,'silenceTimeout',{get:__proto__._$get_silenceTimeout,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_soundTransform',function(){
			return this._mic.soundTransform;
		});

		DEFUNENUMPTY$(__proto__,'_$set_soundTransform',function(sndTransform){
			this._mic.soundTransform=sndTransform;
		});

		Object.defineProperty(__proto__,'soundTransform',{get:__proto__._$get_soundTransform,set:__proto__._$set_soundTransform,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_useEchoSuppression',function(){
			return this._mic.activityLevel;
		});

		Object.defineProperty(__proto__,'useEchoSuppression',{get:__proto__._$get_useEchoSuppression,enumerable:false});
		Microphone._$GET_isSupported=function(){
			return iflash.media.Microphone.isSupported;
		}

		Object.defineProperty(Microphone,'isSupported',{get:Microphone._$GET_isSupported,set:iflash.events.EventDispatcher._$SET_isSupported,enumerable:false});
		Microphone._$GET_names=function(){
			var result=[];
			var mic;
			/*for each*/for(var $each_mic in Microphone._mics){
				mic=Microphone._mics[$each_mic];
				result.push(mic.name);
			}
			return result;
		}

		Object.defineProperty(Microphone,'names',{get:Microphone._$GET_names,set:iflash.events.EventDispatcher._$SET_names,enumerable:false});
		Microphone.getMicrophone=function(index){
			(index===void 0)&& (index=-1);
			if (Microphone._mics[index])return Microphone._mics[index];
			var result=new Microphone();
			Microphone._mics[index]=result;
			return result.setMicrophone(iflash.media.Microphone.getMicrophone(index));
		}

		REGSTATICATTR$(Microphone,
		['_mics',function(){return this._mics=new Dictionary;}
		]);
		return Microphone;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/sound.as=======10098.999714
	var Sound=iflash.media.Sound=(function(_super){
		function Sound(stream,context){
			this._soundChannel_=null;
			this.audio=null;
			_super.apply(this,arguments);
			this.audio=new HTMLAudioElement();
			var _this=this;
			this.audio.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",function(__args){
				var args=arguments;
				_this.lyDispatchEvent(/*iflash.events.Event.COMPLETE*/"complete");
			});
			Laya.document.body.appendChild(this.audio);
			stream && this.load(stream,context);
		}

		REGCLASS$(Sound,'iflash.media.Sound',true,false,_super);
		var __proto__=Sound.prototype;
		__proto__.close=function(){
			this.audio&&this.audio.pause();
		}

		__proto__.extract=function(target,length,startPosition){
			(startPosition===void 0)&& (startPosition=-1);
			Log.unfinished("Sound","extract");
			return 0;
		}

		__proto__.load=function(stream,context){
			this.audio.src=stream.url;
			this.audio.lyDispatchEvent(/*iflash.events.Event.COMPLETE*/"complete");
		}

		__proto__.play=function(startTime,loops,sndTransform){
			var _$this=this;
			(startTime===void 0)&& (startTime=0);
			(loops===void 0)&& (loops=0);
			if(loops==/*int.MAX_VALUE*/2147483647){
				this.audio.loop=true;
			}
			else if (loops !=0){
				this.audio.loops=loops;
			}
			this.audio.restart();
			!this._soundChannel_ && (this._soundChannel_=new SoundChannel());
			this._soundChannel_._sound_=this.audio;
			this.audio.addEventListener(/*iflash.events.Event.SOUND_COMPLETE*/"soundComplete",function(__args){
				var args=arguments;_$this._soundChannel_.dispatchEvent(new Event(/*iflash.events.Event.SOUND_COMPLETE*/"soundComplete"));});
			return this._soundChannel_;
		}

		__proto__.loadCompressedDataFromByteArray=function(bytes,length){}
		DEFUNENUMPTY$(__proto__,'_$get_bytesLoaded',function(){
			Log.unfinished("Sound","bytesLoaded");
			return 0;
		});

		Object.defineProperty(__proto__,'bytesLoaded',{get:__proto__._$get_bytesLoaded,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_isURLInaccessible',function(){
			Log.unfinished("Sound","isURLInaccessible");
			return false;
		});

		Object.defineProperty(__proto__,'isURLInaccessible',{get:__proto__._$get_isURLInaccessible,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytesTotal',function(){
			Log.unfinished("Sound","bytesTotal");
			return 0;
		});

		Object.defineProperty(__proto__,'bytesTotal',{get:__proto__._$get_bytesTotal,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_isBuffering',function(){
			Log.unfinished("Sound","isBuffering");
			return false;
		});

		Object.defineProperty(__proto__,'isBuffering',{get:__proto__._$get_isBuffering,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_id3',function(){
			Log.unfinished("Sound","id3");
			return null;
		});

		Object.defineProperty(__proto__,'id3',{get:__proto__._$get_id3,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_length',function(){
			return 0;
		});

		Object.defineProperty(__proto__,'length',{get:__proto__._$get_length,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_url',function(){
			Log.unfinished("Sound","url");
			return "";
		});

		Object.defineProperty(__proto__,'url',{get:__proto__._$get_url,enumerable:false});
		return Sound;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/soundchannel.as=======10098.999713
	var SoundChannel=iflash.media.SoundChannel=(function(_super){
		function SoundChannel(){
			this._sound_=null;
			this._soundTransform_=null;
			_super.apply(this,arguments);
		}

		REGCLASS$(SoundChannel,'iflash.media.SoundChannel',true,false,_super);
		var __proto__=SoundChannel.prototype;
		__proto__.stop=function(){
			this._sound_ && this._sound_.pause();
		}

		DEFUNENUMPTY$(__proto__,'_$get_leftPeak',function(){
			Log.unfinished("SoundChannel","leftPeak");
			return 0;
		});

		Object.defineProperty(__proto__,'leftPeak',{get:__proto__._$get_leftPeak,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_soundTransform',function(){
			return this._soundTransform_?this._soundTransform_:this._soundTransform_=new SoundTransform();
		});

		DEFUNENUMPTY$(__proto__,'_$set_soundTransform',function(sndTransform){
			this._soundTransform_=sndTransform;
			if (!isNaN(this._soundTransform_.volume)){
				if(this._sound_==null)return;
				this._sound_.volume=this._soundTransform_.volume;
			}
			this._soundTransform_._sound_=this._sound_;
		});

		Object.defineProperty(__proto__,'soundTransform',{get:__proto__._$get_soundTransform,set:__proto__._$set_soundTransform,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_position',function(){
			return 0;
		});

		Object.defineProperty(__proto__,'position',{get:__proto__._$get_position,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rightPeak',function(){
			Log.unfinished("SoundChannel","rightPeak");
			return 0;
		});

		Object.defineProperty(__proto__,'rightPeak',{get:__proto__._$get_rightPeak,enumerable:false});
		return SoundChannel;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/localconnection.as=======10098.999704
	var LocalConnection=iflash.net.LocalConnection=(function(_super){
		function LocalConnection(){
			_super.apply(this,arguments);
		}

		REGCLASS$(LocalConnection,'iflash.net.LocalConnection',true,false,_super);
		var __proto__=LocalConnection.prototype;
		__proto__.allowDomain=function(__rest){
			var rest=arguments;
			Log.unfinished("LocalConnection","allowDomain");
		}

		__proto__.allowInsecureDomain=function(__rest){
			var rest=arguments;
			Log.unfinished("LocalConnection","allowInsecureDomain");
		}

		__proto__.close=function(){
			Log.unfinished("LocalConnection","close");
		}

		__proto__.connect=function(connectionName){
			Log.unfinished("LocalConnection","connect");
		}

		__proto__.send=function(connectionName,methodName,__rest){
			var rest=[];for(var i=2,sz=arguments.length;i<sz;i++)rest.push(arguments[i]);
			Log.unfinished("LocalConnection","send");
		}

		DEFUNENUMPTY$(__proto__,'_$get_client',function(){
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_client',function(client){
		});

		Object.defineProperty(__proto__,'client',{get:__proto__._$get_client,set:__proto__._$set_client,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_domain',function(){
			Log.unfinished("LocalConnection","domain");
			return "";
		});

		Object.defineProperty(__proto__,'domain',{get:__proto__._$get_domain,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_isPerUser',function(){
			Log.unfinished("LocalConnection","isPerUser");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_isPerUser',function(newValue){
			Log.unfinished("LocalConnection","isPerUser");
		});

		Object.defineProperty(__proto__,'isPerUser',{get:__proto__._$get_isPerUser,set:__proto__._$set_isPerUser,enumerable:false});
		LocalConnection._$GET_isSupported=function(){
			Log.unfinished("LocalConnection","isSupported");
			return false;
		}

		Object.defineProperty(LocalConnection,'isSupported',{get:LocalConnection._$GET_isSupported,set:iflash.events.EventDispatcher._$SET_isSupported,enumerable:false});
		return LocalConnection;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/netconnection.as=======10098.999703
	var NetConnection=iflash.net.NetConnection=(function(_super){
		function NetConnection(){
			this._version=0;
			this._netConnection=null;
			_super.apply(this,arguments);
			Log.error("NetConnection no");
			if(this._netConnection==null){
			}
		}

		REGCLASS$(NetConnection,'iflash.net.NetConnection',true,false,_super);
		var __proto__=NetConnection.prototype;
		__proto__.addHeader=function(operation,mustUnderstand,param){
			(mustUnderstand===void 0)&& (mustUnderstand=false);
			Log.unfinished("NetConnection","addHeader");
			this._netConnection.addHeader(operation,mustUnderstand,param);
		}

		__proto__.call=function(command,responder,__rest){
			var rest=[];for(var i=2,sz=arguments.length;i<sz;i++)rest.push(arguments[i]);
			var args=[command,responder.resp];
			rest && rest.length>0 && (args=args.concat(rest));
			this._netConnection.call.apply(this._netConnection,args);
		}

		__proto__.close=function(){
			Log.unfinished("NetConnection","close");
			this._netConnection.close();
		}

		__proto__.connect=function(command,__rest){
			var rest=[];for(var i=1,sz=arguments.length;i<sz;i++)rest.push(arguments[i]);
			if (command==null){
				Log.error("Error: Can only connect in \"HTTP streaming\" mode");
			}
			this._netConnection.connect(command,rest);
		}

		DEFUNENUMPTY$(__proto__,'_$get_client',function(){
			Log.unfinished("NetConnection","client");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_client',function(object){
			Log.unfinished("NetConnection","client");
		});

		Object.defineProperty(__proto__,'client',{get:__proto__._$get_client,set:__proto__._$set_client,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxPeerConnections',function(){
			Log.unfinished("NetConnection","maxPeerConnections");
			return 8;
		});

		DEFUNENUMPTY$(__proto__,'_$set_maxPeerConnections',function(maxPeers){
			Log.unfinished("NetConnection","maxPeerConnections");
		});

		Object.defineProperty(__proto__,'maxPeerConnections',{get:__proto__._$get_maxPeerConnections,set:__proto__._$set_maxPeerConnections,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_connected',function(){
			Log.unfinished("NetConnection","connected");
			return true;
		});

		Object.defineProperty(__proto__,'connected',{get:__proto__._$get_connected,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_objectEncoding',function(){
			return this._version
		});

		DEFUNENUMPTY$(__proto__,'_$set_objectEncoding',function(version){
			this._version=version;
		});

		Object.defineProperty(__proto__,'objectEncoding',{get:__proto__._$get_objectEncoding,set:__proto__._$set_objectEncoding,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_connectedProxyType',function(){
			Log.unfinished("NetConnection","connectedProxyType");
			return "";
		});

		Object.defineProperty(__proto__,'connectedProxyType',{get:__proto__._$get_connectedProxyType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_farID',function(){
			Log.unfinished("NetConnection","farID");
			return "";
		});

		Object.defineProperty(__proto__,'farID',{get:__proto__._$get_farID,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nearID',function(){
			Log.unfinished("NetConnection","nearID");
			return "";
		});

		Object.defineProperty(__proto__,'nearID',{get:__proto__._$get_nearID,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nearNonce',function(){
			Log.unfinished("NetConnection","nearNonce");
			return "";
		});

		Object.defineProperty(__proto__,'nearNonce',{get:__proto__._$get_nearNonce,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_unconnectedPeerStreams',function(){
			Log.unfinished("NetConnection","unconnectedPeerStreams");
			return [];
		});

		Object.defineProperty(__proto__,'unconnectedPeerStreams',{get:__proto__._$get_unconnectedPeerStreams,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_farNonce',function(){
			Log.unfinished("NetConnection","farNonce");
			return "";
		});

		Object.defineProperty(__proto__,'farNonce',{get:__proto__._$get_farNonce,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_uri',function(){
			Log.unfinished("NetConnection","uri");
			return "";
		});

		Object.defineProperty(__proto__,'uri',{get:__proto__._$get_uri,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_protocol',function(){
			Log.unfinished("NetConnection","protocol");
			return "";
		});

		Object.defineProperty(__proto__,'protocol',{get:__proto__._$get_protocol,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_proxyType',function(){
			Log.unfinished("NetConnection","proxyType");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_proxyType',function(ptype){
			Log.unfinished("NetConnection","proxyType");
		});

		Object.defineProperty(__proto__,'proxyType',{get:__proto__._$get_proxyType,set:__proto__._$set_proxyType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_usingTLS',function(){
			Log.unfinished("NetConnection","usingTLS");
			return false;
		});

		Object.defineProperty(__proto__,'usingTLS',{get:__proto__._$get_usingTLS,enumerable:false});
		NetConnection._$GET_defaultObjectEncoding=function(){
			Log.unfinished("NetConnection","defaultObjectEncoding");
			return 0;
		}

		NetConnection._$SET_defaultObjectEncoding=function(version){
			Log.unfinished("NetConnection","defaultObjectEncoding");
		}

		Object.defineProperty(NetConnection,'defaultObjectEncoding',{get:NetConnection._$GET_defaultObjectEncoding,set:NetConnection._$SET_defaultObjectEncoding,enumerable:false});
		NetConnection.CONNECT_SUCCESS="connectSuccess";
		return NetConnection;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/netstream.as=======10098.999702
	var NetStream=iflash.net.NetStream=(function(_super){
		function NetStream(connection,peerID){
			_super.apply(this,arguments);
			(peerID===void 0)&& (peerID="connectToFMS");
			Log.unfinished("NetStream","")
		}

		REGCLASS$(NetStream,'iflash.net.NetStream',true,false,_super);
		var __proto__=NetStream.prototype;
		__proto__.close=function(){
			Log.unfinished("NetStream","close");
		}

		__proto__.pause=function(){
			Log.unfinished("NetStream","pause");
		}

		__proto__.play=function(__rest){
			var rest=arguments;
			Log.unfinished("NetStream","play");
		}

		__proto__.seek=function(offset){
			Log.unfinished("NetStream","seek");
		}

		DEFUNENUMPTY$(__proto__,'_$get_bufferLength',function(){
			Log.unfinished("NetStream","bufferLength");
			return 0;
		});

		Object.defineProperty(__proto__,'bufferLength',{get:__proto__._$get_bufferLength,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_client',function(){
			Log.unfinished("NetStream","client");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_client',function(object){
			Log.unfinished("NetStream","client");
		});

		Object.defineProperty(__proto__,'client',{get:__proto__._$get_client,set:__proto__._$set_client,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytesLoaded',function(){
			Log.unfinished("NetStream","bytesLoaded");
			return 0;
		});

		Object.defineProperty(__proto__,'bytesLoaded',{get:__proto__._$get_bytesLoaded,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytesTotal',function(){
			Log.unfinished("NetStream","bytesTotal");
			return 0;
		});

		Object.defineProperty(__proto__,'bytesTotal',{get:__proto__._$get_bytesTotal,enumerable:false});
		return NetStream;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/bevelfilter.as=======10098.999701
	var BevelFilter=iflash.filters.BevelFilter=(function(_super){
		function BevelFilter(distance,angle,highlightColor,highlightAlpha,shadowColor,shadowAlpha,blurX,blurY,strength,quality,type,knockout){
			this.angle=null;
			this.blurX=null;
			this.blurY=null;
			this.distance=null;
			this.highlightAlpha=null;
			this.highlightColor=0;
			this.knockout=false;
			this.quality=0;
			this.shadowAlpha=null;
			this.shadowColor=0;
			this.strength=null;
			this.type=null;
			(distance===void 0)&& (distance=0);
			(angle===void 0)&& (angle=0);
			(highlightColor===void 0)&& (highlightColor=0xFF);
			(highlightAlpha===void 0)&& (highlightAlpha=1);
			(shadowColor===void 0)&& (shadowColor=0);
			(shadowAlpha===void 0)&& (shadowAlpha=1);
			(blurX===void 0)&& (blurX=4);
			(blurY===void 0)&& (blurY=4);
			(strength===void 0)&& (strength=1);
			(quality===void 0)&& (quality=1);
			(type===void 0)&& (type="full");
			(knockout===void 0)&& (knockout=false);
			_super.call(this,"BevelFilter");
			this.distance=distance;
			this.angle=angle;
			this.highlightColor=highlightColor;
			this.highlightAlpha=highlightAlpha;
			this.shadowColor=shadowColor;
			this.shadowAlpha=shadowAlpha;
			this.blurX=blurX;
			this.blurY=blurY;
			this.strength=strength;
			this.quality=quality;
			this.type=type;
			this.knockout=knockout;
		}

		REGCLASS$(BevelFilter,'iflash.filters.BevelFilter',true,false,_super);
		return BevelFilter;
	})(BitmapFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/sharedobject.as=======10098.999698
	var SharedObject=iflash.net.SharedObject=(function(_super){
		function SharedObject(){
			this.cookie=null;
			_super.apply(this,arguments);
		}

		REGCLASS$(SharedObject,'iflash.net.SharedObject',true,false,_super);
		var __proto__=SharedObject.prototype;
		__proto__.clear=function(){
			this.cookie.clear();
		}

		__proto__.close=function(){
			Log.unfinished("SharedObject","close");
		}

		__proto__.flush=function(minDiskSpace){
			(minDiskSpace===void 0)&& (minDiskSpace=0);
			return this.cookie.flush(minDiskSpace);
		}

		__proto__.send=function(__rest){
			var rest=arguments;
			Log.unfinished("SharedObject","send");
		}

		__proto__.setDirty=function(propertyName){
			Log.unfinished("SharedObject","setDirty");
		}

		__proto__.setProperty=function(propertyName,value){
			this.cookie.setProperty(propertyName,value);
		}

		__proto__.setCookie=function(value){
			this.cookie=value;
			return this;
		}

		DEFUNENUMPTY$(__proto__,'_$get_client',function(){
			Log.unfinished("SharedObject","client");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_client',function(object){
			Log.unfinished("SharedObject","client");
		});

		Object.defineProperty(__proto__,'client',{get:__proto__._$get_client,set:__proto__._$set_client,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_data',function(){
			return this.cookie.data;
		});

		Object.defineProperty(__proto__,'data',{get:__proto__._$get_data,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_objectEncoding',function(){
			Log.unfinished("SharedObject","objectEncoding");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_objectEncoding',function(version){
			Log.unfinished("SharedObject","objectEncoding");
		});

		Object.defineProperty(__proto__,'objectEncoding',{get:__proto__._$get_objectEncoding,set:__proto__._$set_objectEncoding,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_fps',function(updatesPerSecond){
			Log.unfinished("SharedObject","fps");
		});

		Object.defineProperty(__proto__,'fps',{set:__proto__._$set_fps,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_size',function(){
			if(this.data==null)return 0;
			return JSON.stringify(this.data).length;
		});

		Object.defineProperty(__proto__,'size',{get:__proto__._$get_size,enumerable:false});
		SharedObject._$GET_defaultObjectEncoding=function(){
			Log.unfinished("SharedObject","defaultObjectEncoding");
			return 0;
		}

		SharedObject._$SET_defaultObjectEncoding=function(version){
			Log.unfinished("SharedObject","defaultObjectEncoding");
		}

		Object.defineProperty(SharedObject,'defaultObjectEncoding',{get:SharedObject._$GET_defaultObjectEncoding,set:SharedObject._$SET_defaultObjectEncoding,enumerable:false});
		SharedObject.deleteAll=function(url){
			Log.unfinished("SharedObject","deleteAll");
			return 0;
		}

		SharedObject.getDiskUsage=function(url){
			Log.unfinished("SharedObject","getDiskUsage");
			return 0;
		}

		SharedObject.getLocal=function(name,localPath,secure){
			(secure===void 0)&& (secure=false);
			if (SharedObject._cookies_[name])return SharedObject._cookies_[name];
			var result=new SharedObject();
			SharedObject._cookies_[name]=result;
			return result.setCookie(Cookie.getLocal(name,localPath,secure));
		}

		SharedObject.getRemote=function(name,remotePath,persistence,secure){
			(persistence===void 0)&& (persistence=false);
			(secure===void 0)&& (secure=false);
			Log.unfinished("SharedObject","getRemote");
			return null;
		}

		SharedObject._cookies_=[];
		return SharedObject;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/blurfilter.as=======10098.999697
	var BlurFilter=iflash.filters.BlurFilter=(function(_super){
		function BlurFilter(inBlurX,inBlurY,inQuality){
			this.blurX=null;
			this.blurY=null;
			this.quality=0;
			this.MAX_BLUR_WIDTH=0;
			this.MAX_BLUR_HEIGHT=0;
			this.__bG=null;
			this.__kernel=null;
			(inBlurX===void 0)&& (inBlurX=4);
			(inBlurY===void 0)&& (inBlurY=4);
			(inQuality===void 0)&& (inQuality=1);
			_super .call(this,"BlurFilter");
			this.blurX=(inBlurX ? inBlurX :4.0);
			this.blurY=(inBlurY ? inBlurY :4.0);
			this.MAX_BLUR_WIDTH=Laya.window.innerWidth;
			this.MAX_BLUR_HEIGHT=Laya.window.innerHeight;
			this.quality=(inQuality ? inQuality :1);
		}

		REGCLASS$(BlurFilter,'iflash.filters.BlurFilter',true,false,_super);
		var __proto__=BlurFilter.prototype;
		__proto__.applyFilter=function(inBitmapData,inRect,inPoint,inBitmapFilter){}
		__proto__.clone=function(){
			return new BlurFilter (this.blurX,this.blurY,this.quality);
		}

		__proto__.__applyFilter=function(surface){
			var ctx=surface.context;
			this.__kernel=new Array;
			if (surface.width==0 || surface.height==0)return;
			var width=(surface.width > this.MAX_BLUR_WIDTH)? this.MAX_BLUR_WIDTH :surface.width;
			var height=(surface.height > this.MAX_BLUR_HEIGHT)? this.MAX_BLUR_HEIGHT :surface.height;
		}

		__proto__.__buildKernel=function(src,srcW,srcH,dst){
			var i=0,j=0,tot=[],maxW=srcW *4;
			for (var y=0;y < srcH;y++){
				for (var x=0;x < srcW;x++){
					tot[0]=src[j];
					tot[1]=src[j+1];
					tot[2]=src[j+2];
					tot[3]=src[j+3];
					if (x > 0){
						tot[0]+=dst[i-4];
						tot[1]+=dst[i-3];
						tot[2]+=dst[i-2];
						tot[3]+=dst[i-1];
					}
					if (y > 0){
						tot[0]+=dst[i-maxW];
						tot[1]+=dst[i+1-maxW];
						tot[2]+=dst[i+2-maxW];
						tot[3]+=dst[i+3-maxW];
					}
					if (x > 0 && y > 0){
						tot[0]-=dst[i-maxW-4];
						tot[1]-=dst[i-maxW-3];
						tot[2]-=dst[i-maxW-2];
						tot[3]-=dst[i-maxW-1];
					}
					dst[i]=tot[0];
					dst[i+1]=tot[1];
					dst[i+2]=tot[2];
					dst[i+3]=tot[3];
					i+=4;
					j+=4;
				}
			}
		}

		__proto__.__boxBlur=function(dst,srcW,srcH,p,boxW,boxH){
			var mul1=1.0 / ((boxW *2+1)*(boxH *2+1)),i=0,tot=[],h1=0,l1=0,h2=0,l2=0;
			var mul2=1.7 / ((boxW *2+1)*(boxH *2+1));
			for (var y=0;y < srcH;y++){
				for (var x=0;x < srcW;x++){
					if (x+boxW >=srcW)h1=srcW-1;else h1=(x+boxW);
					if (y+boxH >=srcH)l1=srcH-1;else l1=(y+boxH);
					if (x-boxW < 0)h2=0;else h2=(x-boxW);
					if (y-boxH < 0)l2=0;else l2=(y-boxH);
					tot[0]=p[(h1+l1 *srcW)*4]+p[(h2+l2 *srcW)*4]-p[(h2+l1 *srcW)*4]-p[(h1+l2 *srcW)*4];
					tot[1]=p[(h1+l1 *srcW)*4+1]+p[(h2+l2 *srcW)*4+1]-p[(h2+l1 *srcW)*4+1]-p[(h1+l2 *srcW)*4+1];
					tot[2]=p[(h1+l1 *srcW)*4+2]+p[(h2+l2 *srcW)*4+2]-p[(h2+l1 *srcW)*4+2]-p[(h1+l2 *srcW)*4+2];
					tot[3]=p[(h1+l1 *srcW)*4+3]+p[(h2+l2 *srcW)*4+3]-p[(h2+l1 *srcW)*4+3]-p[(h1+l2 *srcW)*4+3];
					dst[i]=Math.floor (Math.abs((255-this.__bG[0])-tot[0] *mul1));
					dst[i+1]=Math.floor (Math.abs((255-this.__bG[1])-tot[1] *mul1));
					dst[i+2]=Math.floor (Math.abs((255-this.__bG[2])-tot[2] *mul1));
					dst[i+3]=Math.floor (tot[3] *mul2);
					i+=4;
				}
			}
		}

		return BlurFilter;
	})(BitmapFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/socket.as=======10098.999696
	var Socket=iflash.net.Socket=(function(_super){
		function Socket(host,port){
			this._stamp=null;
			this._socket=null;
			this._connected=false;
			this._host=null;
			this._port=0;
			this._addInputPosition=0;
			this._input=null;
			this._output=null;
			this._bytes=null;
			this.timeout=0;
			this.objectEncoding=0;
			this._endian=null;
			(port===void 0)&& (port=0);
			_super.call(this);
			this._endian="bigEndian";
			this.timeout=20000;
			this._addInputPosition=0;
			if(port > 0 && port < 65535)
				this.connect(host,port);
		}

		REGCLASS$(Socket,'iflash.net.Socket',true,false,_super);
		var __proto__=Socket.prototype;
		__proto__.connect=function(host,port){
			if(this._socket !=null)
				this.close();
			if(port < 0 || port > 65535)
				throw new Error("Invalid socket port number specified."+port);
			var url="ws://"+host+":"+port;
			this._host=host;
			this._port=port;
			this._socket=/*__JS__ */new WebSocket(url);
			this._socket.binaryType="arraybuffer";
			this._stamp=iflash.utils.getTimer();
			this._output=new ByteArray();
			this._output.endian=this.endian;
			this._input=new ByteArray();
			this._input.endian=this.endian;
			this._socket.onopen=iflash.method.bind(this,this.onOpenHandler);
			this._socket.onmessage=iflash.method.bind(this,this.onMessageHandler);
			this._socket.onclose=iflash.method.bind(this,this.onCloseHandler);
			this._socket.onerror=iflash.method.bind(this,this.onErrorHandler);
			this._socket.binaryType="arraybuffer";
		}

		__proto__.cleanSocket=function(){
			try {
				this._socket.close();
				}catch (e){
				Log.log("cleanSocket err:"+e);
			}
			this._socket=null;
		}

		__proto__.close=function(){
			if(this._socket!=null){
				this.cleanSocket();
				}else{
				throw"Operation attempted on invalid socket.";
			}
		}

		__proto__.readBoolean=function(){
			if (this._socket==null)
				throw"Operation attempted on invalid socket.";
			return this._input.readBoolean();
		}

		__proto__.readByte=function(){
			if (this._socket==null)
				throw"Operation attempted on invalid socket.";
			return this._input.readByte();
		}

		__proto__.readDouble=function(){
			if (this._socket==null)
				throw"Operation attempted on invalid socket.";
			return this._input.readDouble();
		}

		__proto__.readFloat=function(){
			if (this._socket==null)
				throw"Operation attempted on invalid socket.";
			return this._input.readFloat();
		}

		__proto__.readInt=function(){
			if (this._socket==null)
				throw"Operation attempted on invalid socket.";
			return this._input.readInt();
		}

		__proto__.readMultiByte=function(length,charSet){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			return this._input.readMultiByte(length,charSet);
		}

		__proto__.readObject=function(){
			return this._input.readObject();
		}

		__proto__.readShort=function(){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			return this._input.readShort();
		}

		__proto__.readUnsignedByte=function(){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			return this._input.readUnsignedByte();
		}

		__proto__.readUnsignedInt=function(){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			return this._input.readUnsignedInt();
		}

		__proto__.readUnsignedShort=function(){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			return this._input.readUnsignedShort();
		}

		__proto__.readUTF=function(){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			return this._input.readUTF();
		}

		__proto__.readUTFBytes=function(length){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			return this._input.readUTFBytes(length);
		}

		__proto__.readBytes=function(bytes,offset,length){
			(offset===void 0)&& (offset=0);
			(length===void 0)&& (length=0);
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			/*__JS__ */this._input.readBytes(bytes,offset,length);
		}

		__proto__.writeBoolean=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeBoolean(value);
		}

		__proto__.writeByte=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeByte(value);
		}

		__proto__.writeDouble=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeDouble(value);
		}

		__proto__.writeFloat=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeFloat(value);
		}

		__proto__.writeInt=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeInt(value);
		}

		__proto__.writeMultiByte=function(value,charSet){
			(charSet===void 0)&& (charSet="UTF-8");
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeMultiByte(value,charSet);
		}

		__proto__.writeShort=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeShort(value);
		}

		__proto__.writeUTF=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeUTF(value);
		}

		__proto__.writeUTFBytes=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeUTFBytes(value);
		}

		__proto__.writeUnsignedInt=function(value){
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			this._output.writeUnsignedInt(value);
		}

		__proto__.writeBytes=function(bytes,offset,length){
			(offset===void 0)&& (offset=0);
			(length===void 0)&& (length=0);
			if (this._socket==null)
				throw "Operation attempted on invalid socket.";
			/*__JS__ */this._output.writeBytes(bytes,offset,length);
		}

		__proto__.onOpenHandler=function(__args){
			var args=arguments;
			this._connected=true;
			this.dispatchEvent (new Event(/*iflash.events.Event.CONNECT*/"connect"));
		}

		__proto__.onMessageHandler=function(msg){
			if (this._input.length>0 && this._input.bytesAvailable<1){
				this._input.clear();
				this._addInputPosition=0;
			};
			var pre=this._input.position;
			!this._addInputPosition && (this._addInputPosition=0);
			this._input.position=this._addInputPosition;
			if(msg && (typeof msg.data=='string'))this._input.writeUTF(msg.data);
			this._input.writeArrayBuffer(msg.data);
			this._addInputPosition=this._input.position;
			this._input.position=pre;
			this.dispatchEvent(new Event(/*iflash.events.ProgressEvent.SOCKET_DATA*/"socketData"));
		}

		__proto__.onflashMessage=function(evt){
			this.dispatchEvent(new ProgressEvent(/*iflash.events.ProgressEvent.SOCKET_DATA*/"socketData"));
		}

		__proto__.onCloseHandler=function(__args){
			var args=arguments;
			Log.log("-----------------websocket--------------close------------------");
			this.dispatchEvent (new Event(/*iflash.events.Event.CLOSE*/"close"));
		}

		__proto__.onErrorHandler=function(__args){
			var args=arguments;
			this.dispatchEvent (new IOErrorEvent (/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError"));
		}

		__proto__.flush=function(){
			if(this._socket==null)
				throw "Operation attempted on invalid socket.";
			if(this._output && this._output.length > 0){
				try {
					this._socket && this._socket.send(this._output.__getBuffer());
					this._output.endian=this.endian;
					this._output.clear();
					}catch (e){
					throw "Operation attempted on invalid socket.";
				}
			}
		}

		DEFUNENUMPTY$(__proto__,'_$get_connected',function(){
			return this._connected;
		});

		Object.defineProperty(__proto__,'connected',{get:__proto__._$get_connected,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_endian',function(){
			return this._endian;
		});

		DEFUNENUMPTY$(__proto__,'_$set_endian',function(value){
			this._endian=value;
			if(this._input !=null)this._input.endian=value;
			if (this._output !=null)this._output.endian=value;
		});

		Object.defineProperty(__proto__,'endian',{get:__proto__._$get_endian,set:__proto__._$set_endian,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytesAvailable',function(){
			return this._input.bytesAvailable;
		});

		Object.defineProperty(__proto__,'bytesAvailable',{get:__proto__._$get_bytesAvailable,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bytesPending',function(){
			return this._output.length;
		});

		Object.defineProperty(__proto__,'bytesPending',{get:__proto__._$get_bytesPending,enumerable:false});
		Socket.LITTLE_ENDIAN="littleEndian";
		Socket.BIG_ENDIAN="bigEndian";
		return Socket;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/colormatrixfilter.as=======10098.999696
	var ColorMatrixFilter=iflash.filters.ColorMatrixFilter=(function(_super){
		function ColorMatrixFilter(matrix){
			this.matrix=null;
			_super.call(this,"ColorMatrixFilter");
			this.matrix=matrix;
		}

		REGCLASS$(ColorMatrixFilter,'iflash.filters.ColorMatrixFilter',true,false,_super);
		var __proto__=ColorMatrixFilter.prototype;
		__proto__.clone=function(){
			return new ColorMatrixFilter(this.matrix);
		}

		__proto__.__applyFilter=function(src){
			Log.unfinished("ColorMatrixFilter","__applyFilter");
			return;
			var ctx=src.context;
			var imagedata=ctx.getImageData(0,0,src.width,src.height);
			var offsetX=0;
			for (var i=0,sz=imagedata.data.length >> 2;i < sz;i++){
				offsetX=i *4;
				var srcR=imagedata.data[offsetX];
				var srcG=imagedata.data[offsetX+1];
				var srcB=imagedata.data[offsetX+2];
				var srcA=imagedata.data[offsetX+3];
				imagedata.data[offsetX]=int((this.matrix[0] *srcR)+(this.matrix[1] *srcG)+(this.matrix[2] *srcB)+(this.matrix[3] *srcA)+this.matrix[4]);
				imagedata.data[offsetX+1]=int((this.matrix[5] *srcR)+(this.matrix[6] *srcG)+(this.matrix[7] *srcB)+(this.matrix[8] *srcA)+this.matrix[9]);
				imagedata.data[offsetX+2]=int((this.matrix[10] *srcR)+(this.matrix[11] *srcG)+(this.matrix[12] *srcB)+(this.matrix[13] *srcA)+this.matrix[14]);
				imagedata.data[offsetX+3]=int((this.matrix[15] *srcR)+(this.matrix[16] *srcG)+(this.matrix[17] *srcB)+(this.matrix[18] *srcA)+this.matrix[19]);
			}
			ctx.putImageData(imagedata,0,0);
		}

		return ColorMatrixFilter;
	})(BitmapFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/urlloader.as=======10098.999695
	var URLLoader=iflash.net.URLLoader=(function(_super){
		function URLLoader(request){
			this.bytesLoaded=0;
			this.bytesTotal=0;
			this.data=null;
			this.fileData=null;
			this.crossDomain=false;
			this.file=null;
			this._bitmapData=null;
			this.http=null;
			_super.apply(this,arguments);
			this.dataFormat=/*iflash.net.URLLoaderDataFormat.TEXT*/"text";
			this.http=Browser.createHttpRequest();
			if(request !=null){
				this.load(request);
			}
		}

		REGCLASS$(URLLoader,'iflash.net.URLLoader',true,false,_super);
		var __proto__=URLLoader.prototype;
		__proto__.close=function(){
			Log.unfinished("URLLoader","close");
		}

		__proto__.load=function(request){
			var _$this=this;
			var contentType=Method.formatUrlType(request.url);
			if(this.dataFormat==/*iflash.net.URLLoaderDataFormat.TEXT*/"text"){
				if(contentType=="xml"){
					if(Laya.CONCHVER){
						/*__JS__ */var domparser=new DOMParser();
						/*__JS__ */domparser.onload=function(xmlData){;
							/*__JS__ */_$this.data=domparser.getResult();;
							/*__JS__ */_$this.dispatchEvent(new Event(Event.COMPLETE));};
						/*__JS__ */domparser.src=Method.formatUrl(request.url);
					}
					else{
						this.file=new FileRead(request.url,{onload:BIND$(this,this._Loader),unOnload:BIND$(this,this._LoaderError)},null,request);
						this.file.contentType=contentType;
					}
				}
				else if(contentType=="fnt"){
					this.file=new FileRead(request.url,{onload:BIND$(this,this._Loader),unOnload:BIND$(this,this._LoaderError)},null,request);
					this.file.contentType=contentType;
				}
				else if(request.url.indexOf("?")>-1 && Laya.HTMLVER && this.crossDomain){
					var _this=this;
					var f=function (d){
						var e=new Event(/*iflash.events.Event.COMPLETE*/"complete");
						_this.data=e.lyData=d;
						_this.dispatchEvent(e);
					}
					Ajax.GetJSON(request.url,BIND$(this,f));
				}
				else{
					this.file=new FileRead(request.url,{onload:BIND$(this,this._Loader),unOnload:BIND$(this,this._LoaderError)},null,request);
					this.file.contentType=contentType;
				}
				}else if(this.dataFormat==/*iflash.net.URLLoaderDataFormat.BINARY*/"binary"){
				if (["jpg","gif","png"].indexOf(contentType)!=-1){
					if (this._bitmapData==null)this._bitmapData=new BitmapData();
					this.data=Browser.document.createElement("image");
					this.data.onload=function (__args){
						var args=arguments;
						if ("tagName" in this){
							}else {
							this.tagName="IMG";
						}
						_$this._bitmapData.setImage(this);
						_$this.dispatchEvent(new Event(/*iflash.events.Event.COMPLETE*/"complete"));
					};
					this.data.onerror=function (){
						_$this.dispatchEvent(new IOErrorEvent(/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError",false,false,"ioError"));
					}
					this.data.src=Method.formatUrl(request.url);
				}
				else{
					this.file=new FileRead(request.url,{onload:BIND$(this,this._Loader),unOnload:BIND$(this,this._LoaderError)},/*iflash.net.URLLoaderDataFormat.BINARY*/"binary",request);
					this.file.contentType=Method.formatUrlType(request.url);
				}
				}else{
			}
		}

		__proto__._LoaderError=function(fileread){
			this.dispatchEvent(new IOErrorEvent(/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError"));
		}

		__proto__._Loader=function(fileread){
			if(fileread.contentType=="swf"||fileread.contentType=="swp"||fileread.contentType=="cvt"){
				var bytes=new ByteArray();
				bytes.endian=fileread.contentdata.endian;
				this.fileData={};
				this.fileData.url=(fileread.url);
				this.fileData.type=(fileread.contentType);
				fileread.contentdata.position=0;
				fileread.contentdata.readBytes(bytes,bytes.position);
				bytes.position=0;
				this.data=bytes;
				bytes=null;
				}else{
				this.data=fileread.contentdata;
			}
			this.dispatchEvent(new Event(/*iflash.events.Event.COMPLETE*/"complete"));
		}

		DEFUNENUMPTY$(__proto__,'_$get_bitmapdata',function(){
			return this._bitmapData;
		});

		Object.defineProperty(__proto__,'bitmapdata',{get:__proto__._$get_bitmapdata,enumerable:false});
		URLLoader.isCatchfile=false;
		return URLLoader;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/convolutionfilter.as=======10098.999695
	var ConvolutionFilter=iflash.filters.ConvolutionFilter=(function(_super){
		function ConvolutionFilter(matrixX,matrixY,matrix,divisor,bias,preserveAlpha,clamp,color,alpha){
			this.alpha=null;
			this.bias=null;
			this.clamp=false;
			this.color=0;
			this.divisor=null;
			this.matrix=null;
			this.matrixX=null;
			this.matrixY=null;
			this.preserveAlpha=false;
			(matrixX===void 0)&& (matrixX=0);
			(matrixY===void 0)&& (matrixY=0);
			(divisor===void 0)&& (divisor=1);
			(bias===void 0)&& (bias=0);
			(preserveAlpha===void 0)&& (preserveAlpha=true);
			(clamp===void 0)&& (clamp=true);
			(color===void 0)&& (color=0);
			(alpha===void 0)&& (alpha=0);
			_super.call(this,"ConvolutionFilter");
			this.matrixX=matrixX;
			this.matrixY=matrixY;
			this.matrix=matrix;
			this.divisor=divisor;
			this.preserveAlpha=preserveAlpha;
			this.clamp=clamp;
			this.color=color;
			this.alpha=alpha;
		}

		REGCLASS$(ConvolutionFilter,'iflash.filters.ConvolutionFilter',true,false,_super);
		return ConvolutionFilter;
	})(BitmapFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/displacementmapfilter.as=======10098.999694
	var DisplacementMapFilter=iflash.filters.DisplacementMapFilter=(function(_super){
		function DisplacementMapFilter(mapBitmap,mapPoint,componentX,componentY,scaleX,scaleY,mode,color,alpha){
			this.alpha=null;
			this.color=0;
			this.componentX=0;
			this.componentY=0;
			this.mapBitmap=null;
			this.mapPoint=null;
			this.mode=null;
			this.scaleX=null;
			this.scaleY=null;
			(componentX===void 0)&& (componentX=0);
			(componentY===void 0)&& (componentY=0);
			(scaleX===void 0)&& (scaleX=0);
			(scaleY===void 0)&& (scaleY=0);
			(color===void 0)&& (color=0);
			(alpha===void 0)&& (alpha=0);
			_super.call(this,"DisplacementMapFilter");
			this.mapBitmap=mapBitmap;
			this.mapPoint=mapPoint;
			this.componentY=componentY;
			this.scaleX=scaleX;
			this.scaleY=scaleY;
			this.mode=mode;
			this.color=color;
			this.alpha=alpha;
		}

		REGCLASS$(DisplacementMapFilter,'iflash.filters.DisplacementMapFilter',true,false,_super);
		return DisplacementMapFilter;
	})(BitmapFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/dropshadowfilter.as=======10098.999692
	var DropShadowFilter=iflash.filters.DropShadowFilter=(function(_super){
		function DropShadowFilter(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject){
			this.alpha=null;
			this.angle=null;
			this.blurX=null;
			this.blurY=null;
			this.color=0;
			this.distance=null;
			this.hideObject=false;
			this.inner=false;
			this.knockout=false;
			this.quality=0;
			this.strength=null;
			(in_distance===void 0)&& (in_distance=4.0);
			(in_angle===void 0)&& (in_angle=45.0);
			(in_color===void 0)&& (in_color=0);
			(in_alpha===void 0)&& (in_alpha=1.0);
			(in_blurX===void 0)&& (in_blurX=4.0);
			(in_blurY===void 0)&& (in_blurY=4.0);
			(in_strength===void 0)&& (in_strength=1.0);
			(in_quality===void 0)&& (in_quality=1);
			(in_inner===void 0)&& (in_inner=false);
			(in_knockout===void 0)&& (in_knockout=false);
			(in_hideObject===void 0)&& (in_hideObject=false);
			_super.call(this,"DropShadowFilter");
			this.distance=in_distance;
			this.angle=in_angle;
			this.color=in_color;
			this.alpha=in_alpha;
			this.blurX=in_blurX;
			this.blurY=in_blurX;
			this.strength=in_strength;
			this.quality=in_quality;
			this.inner=in_inner;
			this.knockout=in_knockout;
			this.hideObject=in_hideObject;
		}

		REGCLASS$(DropShadowFilter,'iflash.filters.DropShadowFilter',true,false,_super);
		var __proto__=DropShadowFilter.prototype;
		__proto__.clone=function(){
			return new DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
		}

		__proto__.__preApplyFilter=function(dec){
			var distanceX=this.distance *Math.sin(2 *Math.PI *this.angle / 360.0);
			var distanceY=this.distance *Math.cos(2 *Math.PI *this.angle / 360.0);
			var blurRadius=Math.max(this.blurX,this.blurY,this.strength);
			dec.shadowOffsetX=distanceX;
			dec.shadowOffsetY=distanceY;
			dec.shadowBlur=blurRadius;
			dec.shadowColor="rgba("+((this.color >> 16)& 0xFF)+","+((this.color >> 8)& 0xFF)+","+(this.color & 0xFF)+","+this.alpha+")";
		}

		DropShadowFilter.DEGREES_FULL_RADIUS=360.0;
		return DropShadowFilter;
	})(BitmapFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/gradientbevelfilter.as=======10098.999690
	var GradientBevelFilter=iflash.filters.GradientBevelFilter=(function(_super){
		function GradientBevelFilter(distance,angle,colors,alphas,ratios,blurX,blurY,strength,quality,type,knockout){
			this.alphas=null;
			this.angle=null;
			this.blurX=null;
			this.blurY=null;
			this.colors=null;
			this.distance=null;
			this.knockout=false;
			this.quality=0;
			this.ratios=null;
			this.strength=null;
			this.type=null;
			(distance===void 0)&& (distance=4);
			(angle===void 0)&& (angle=45);
			(blurX===void 0)&& (blurX=4);
			(blurY===void 0)&& (blurY=4);
			(strength===void 0)&& (strength=1);
			(quality===void 0)&& (quality=1);
			(type===void 0)&& (type="inner");
			(knockout===void 0)&& (knockout=false);
			_super.call(this,"GradientBevelFilter");
			this.distance=distance;
			this.angle=angle;
			this.colors=colors;
			this.alphas=alphas;
			this.ratios=ratios;
			this.blurX=blurX;
			this.blurY=blurY;
			this.strength=strength;
			this.quality=quality;
			this.type=type;
			this.knockout=knockout;
		}

		REGCLASS$(GradientBevelFilter,'iflash.filters.GradientBevelFilter',true,false,_super);
		return GradientBevelFilter;
	})(BitmapFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/net/urlstream.as=======10098.999690
	var URLStream=iflash.net.URLStream=(function(_super){
		function URLStream(){
			this._input=null;
			this.fileData=null;
			this.file=null;
			_super.apply(this,arguments);
			this._input==null && (this._input=new ByteArray());
		}

		REGCLASS$(URLStream,'iflash.net.URLStream',true,false,_super);
		var __proto__=URLStream.prototype;
		__proto__.close=function(){
			Log.unfinished("URLStream","close");
		}

		__proto__.load=function(request){
			var index=(request.url).lastIndexOf("?");
			var contentType=Method.formatUrlType(request.url);
			this.file=new FileRead(request.url,{onload:BIND$(this,this._Loader),unOnload:BIND$(this,this._LoaderError)},/*iflash.net.URLLoaderDataFormat.BINARY*/"binary",request);
			this.file.contentType=Method.formatUrlType(request.url);
		}

		__proto__._LoaderError=function(fileread){
			this.dispatchEvent(new IOErrorEvent(/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError"));
		}

		__proto__._Loader=function(fileread){
			if(fileread.contentType=="swf"||fileread.contentType=="swp"||fileread.contentType=="cvt"){
				var bytes=new ByteArray();
				bytes.endian=fileread.contentdata.endian;
				this.fileData={};
				this.fileData.url=fileread.url;
				this.fileData.type=fileread.contentType;
				fileread.contentdata.position=0;
				fileread.contentdata.readBytes(bytes,bytes.position);
				bytes.position=0;
				this._input=bytes;
				bytes=null;
				}else{
				fileread.contentdata.position=0;
				this._input=fileread.contentdata;
			}
			this.dispatchEvent(new Event(/*iflash.events.Event.COMPLETE*/"complete"));
		}

		__proto__.readBoolean=function(){
			return this._input.readBoolean();
		}

		__proto__.readByte=function(){
			return this._input.readByte();
		}

		__proto__.readBytes=function(bytes,offset,length){
			(offset===void 0)&& (offset=0);
			(length===void 0)&& (length=0);
			return this._input.readBytes(bytes);
		}

		__proto__.readDouble=function(){
			return this._input.readDouble();
		}

		__proto__.readFloat=function(){
			return this._input.readFloat();
		}

		__proto__.readInt=function(){
			return this._input.readInt();
		}

		__proto__.readMultiByte=function(length,charSet){
			return this._input.readMultiByte(length,charSet);
		}

		__proto__.readObject=function(){
			return this._input.readObject();
		}

		__proto__.readShort=function(){
			return this._input.readShort();
		}

		__proto__.readUnsignedByte=function(){
			return this._input.readUnsignedByte();
		}

		__proto__.readUnsignedInt=function(){
			return this._input.readUnsignedInt();
		}

		__proto__.readUnsignedShort=function(){
			return this._input.readUnsignedShort();
		}

		__proto__.readUTF=function(){
			return this._input.readUTF();
		}

		__proto__.readUTFBytes=function(length){
			return this._input.readUTFBytes(length);
		}

		DEFUNENUMPTY$(__proto__,'_$get_bytesAvailable',function(){
			if(this._input.bytesAvailable==0){
				this._input.position=0;
			}
			return this._input.bytesAvailable;
		});

		Object.defineProperty(__proto__,'bytesAvailable',{get:__proto__._$get_bytesAvailable,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_connected',function(){
			Log.unfinished("URLStream","connected");
			return false;
		});

		Object.defineProperty(__proto__,'connected',{get:__proto__._$get_connected,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_endian',function(){
			return this._input.endian;
		});

		DEFUNENUMPTY$(__proto__,'_$set_endian',function(type){
			this._input.endian=type;
		});

		Object.defineProperty(__proto__,'endian',{get:__proto__._$get_endian,set:__proto__._$set_endian,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_objectEncoding',function(){
			return this._input.objectEncoding;
		});

		DEFUNENUMPTY$(__proto__,'_$set_objectEncoding',function(version){
			this._input.objectEncoding=version;
		});

		Object.defineProperty(__proto__,'objectEncoding',{get:__proto__._$get_objectEncoding,set:__proto__._$set_objectEncoding,enumerable:false});
		return URLStream;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/gradientglowfilter.as=======10098.999689
	var GradientGlowFilter=iflash.filters.GradientGlowFilter=(function(_super){
		function GradientGlowFilter(distance,angle,colors,alphas,ratios,blurX,blurY,strength,quality,type,knockout){
			this.alphas=null;
			this.angle=null;
			this.blurX=null;
			this.blurY=null;
			this.colors=null;
			this.distance=null;
			this.knockout=false;
			this.quality=0;
			this.ratios=null;
			this.strength=null;
			this.type=null;
			(distance===void 0)&& (distance=4);
			(angle===void 0)&& (angle=45);
			(blurX===void 0)&& (blurX=4);
			(blurY===void 0)&& (blurY=4);
			(strength===void 0)&& (strength=1);
			(quality===void 0)&& (quality=1);
			(type===void 0)&& (type="inner");
			(knockout===void 0)&& (knockout=false);
			_super.call(this,"GradientGlowFilter");
			this.distance=distance;
			this.colors=colors;
			this.alphas=alphas;
			this.ratios=ratios;
			this.blurX=blurX;
			this.blurY=blurY;
			this.strength=strength;
			this.quality=quality;
			this.type=type;
			this.knockout=knockout;
		}

		REGCLASS$(GradientGlowFilter,'iflash.filters.GradientGlowFilter',true,false,_super);
		return GradientGlowFilter;
	})(BitmapFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/system/ime.as=======10098.999683
	var IME=iflash.system.IME=(function(_super){
		function IME(target){
			_super.call(this,target);
		}

		REGCLASS$(IME,'iflash.system.IME',true,false,_super);
		IME._$GET_conversionMode=function(){
			return "";
		}

		IME._$SET_conversionMode=function(mode){}
		Object.defineProperty(IME,'conversionMode',{get:IME._$GET_conversionMode,set:IME._$SET_conversionMode,enumerable:false});
		IME._$GET_enabled=function(){
			return false;
		}

		IME._$SET_enabled=function(enabled){}
		Object.defineProperty(IME,'enabled',{get:IME._$GET_enabled,set:IME._$SET_enabled,enumerable:false});
		IME._$GET_isSupported=function(){
			return false;
		}

		Object.defineProperty(IME,'isSupported',{get:IME._$GET_isSupported,set:iflash.events.EventDispatcher._$SET_isSupported,enumerable:false});
		return IME;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/stylesheet.as=======10098.999658
	var StyleSheet=iflash.text.StyleSheet=(function(_super){
		function StyleSheet(){
			_super.apply(this,arguments);
		}

		REGCLASS$(StyleSheet,'iflash.text.StyleSheet',true,false,_super);
		var __proto__=StyleSheet.prototype;
		__proto__.clear=function(){
			Log.unfinished("StyleSheet","clear");
		}

		__proto__.getStyle=function(styleName){
			Log.unfinished("StyleSheet","getStyle");
			return null;
		}

		__proto__.parseCSS=function(CSSText){
			Log.unfinished("StyleSheet","parseCSS");
		}

		__proto__.setStyle=function(styleName,styleObject){
			Log.unfinished("StyleSheet","setStyle");
		}

		__proto__.transform=function(formatObject){
			Log.unfinished("StyleSheet","transform");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_styleNames',function(){
			Log.unfinished("StyleSheet","styleNames");
			return null;
		});

		Object.defineProperty(__proto__,'styleNames',{get:__proto__._$get_styleNames,enumerable:false});
		return StyleSheet;
	})(EventDispatcher)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/css/margin.as=======10098.999641
	var Margin=iflash.laya.css.Margin=(function(_super){
		function Margin(){
			_super.call(this);
		}

		REGCLASS$(Margin,'iflash.laya.css.Margin',true,false,_super);
		var __proto__=Margin.prototype;
		__proto__.toModel=function(style){
			style.node._modle_.margin(this.left,this.top,this.right,this.bottom);
		}

		__proto__.check=function(style){
			return (style._margin_==iflash.laya.css.Margin.__DEFAULT__)?(style._margin_=new Margin()):style._margin_;
		}

		REGSTATICATTR$(Margin,
		['__DEFAULT__',function(){return this.__DEFAULT__=new Margin();}
		]);
		return Margin;
	})(Padding)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/mx/core/bytearrayasset.as=======10098.999612
	var ByteArrayAsset=mx.core.ByteArrayAsset=(function(_super){
		function ByteArrayAsset(){
			_super.apply(this,arguments);
			trace("ByteArrayAsset");
		}

		REGCLASS$(ByteArrayAsset,'mx.core.ByteArrayAsset',true,false,_super);
		return ByteArrayAsset;
	})(ByteArray)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/runner/onecmddatauseid.as=======10098.999515
	var OneCmdDataUseId=iflash.laya.runner.OneCmdDataUseId=(function(_super){
		function OneCmdDataUseId(){
			this.id=null;
			_super.call(this);
		}

		REGCLASS$(OneCmdDataUseId,'iflash.laya.runner.OneCmdDataUseId',true,false,_super);
		var __proto__=OneCmdDataUseId.prototype;
		__proto__.applyTo=function(who,one){
			return this.oneFun._fun_.apply(one.ids[this.id],this.args);
		}

		return OneCmdDataUseId;
	})(OneCmdData)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/typesetting/textfield.as=======10098.999492
	var TextField=iflash.laya.typesetting.TextField=(function(_super){
		var TextCanvas;
		function TextField(element){
			this.parent=null;
			this.maxWordWidth=0;
			this.lines=null;
			this.text=null;
			this.textWidth=0;
			this.textHeight=0;
			this.canvasLines=null;
			this._cnodes_=null;
			_super.apply(this,arguments);
			this.parent=element;
			this.maxWordWidth=0;
			Laya.RENDERBYCANVAS && DrawChilds1.insertUnit(element);
		}

		REGCLASS$(TextField,'iflash.laya.typesetting.TextField',true,false,_super);
		var __proto__=TextField.prototype;
		__proto__.getWordMaxWidth=function(){
			return this.maxWordWidth;
		}

		__proto__.preTypeset=function(){
			this._resetCanvas_();
			return this.nodes;
		}

		__proto__.paintText=function(context,x,y){
			if (this.nodes.length < 1)return;
			if (this.canvasLines==null || this.canvasLines.length==0)
				this._toCanvas_();
			var ctx;
			var textCanvas;
			var i=0,sz=0;
			for (i=0,sz=this.canvasLines.length;i < sz;i++){
				textCanvas=this.canvasLines[i];
				ctx=textCanvas.canvas.context;
				context.drawImage(textCanvas.canvas,Math.floor(x+textCanvas.x),Math.floor(y+textCanvas.y));
			}
			Laya.document.drawCount+=sz;
		}

		__proto__._toCanvas_=function(){
			var lineStartIndex=0;
			var lineIndex=0;
			var fontText=this.parent._style_.fontText;
			var color=this.parent._style_.color;
			var ispwd=this.parent._style_._font_.getPassword();
			var word,oneword;
			var startX,startY,maxHeight=0;
			this.canvasLines=this.canvasLines || (new Array());
			this.canvasLines.length=0;
			if (!TextField.isDownLoad(this.parent._style_._font_.fontName))return;
			var h=Math.floor(this.parent._style_._font_.size / 2+0.5);
			maxHeight=Math.max(this.nodes[0].height+this.nodes[0].top);
			for (var i=0,sz=this.nodes.length;i < sz;i++){
				if ((this.nodes[i]._lineIndex_ !=lineIndex &&i!=0)||(i+1)==sz){
					var textCanvas=new TextCanvas();
					this.canvasLines.push(textCanvas);
					textCanvas.canvas=Canvas.create();
					var ctx=textCanvas.canvas.getContext("2d");
					textCanvas.x=startX=Math.floor(this.nodes[lineStartIndex].left);
					textCanvas.y=startY=Math.floor(this.nodes[lineStartIndex].top);
					if ((i+1)==sz)i++;
					textCanvas.canvas.size(Math.floor(this.nodes[i-1].left+this.nodes[i-1].width-textCanvas.x+1),Math.floor(maxHeight+h/2));
					ctx.font=fontText;
					ctx.textBaseline="middle";
					ctx.textAlign="left";
					ctx.fillStyle=color;
					for (var k=lineStartIndex;k < i;k++){
						word=this.nodes[k];
						oneword=ispwd?"*":word.text;
						if (word.image==null){
							ctx.fillText(oneword,Math.floor(word.left-startX),word.top+h-startY);
						}
						else ctx.drawImage(word.image,0,0,word.width,word.height,Math.floor(word.left-startX),Math.floor(word.top-startY),word.width,word.height);
					}
					if (i==sz)break ;
					lineStartIndex=k;
					lineIndex=this.nodes[i]._lineIndex_;
					maxHeight=0;
				}
				maxHeight=Math.max(this.nodes[i].height);
			}
		}

		__proto__._resetCanvas_=function(){
			this.canvasLines && (this.canvasLines.length=0);
		}

		__proto__.onModifyText=function(){
			var i=0,sz=0,word,wordsz,font,url;
			this.maxWordWidth=0;
			this.canvasLines && (this.canvasLines.length=0);
			if (!this.text){
				this.nodes.length=0;
				this._cnodes_&&(this._cnodes_.length=0);
				return;
			}
			if (Laya.CONCHVER&&!Laya.RENDERBYCANVAS)this._cnodes_=this._cnodes_|| /*__JS__ */new ConchTextWordArrary();
			var isChange=false;
			sz=this.text.length;
			font=this.parent._style_.getFont();
			wordsz=new Point();
			this.textWidth=this.textHeight=0;
			for (i=0;i < sz;i++){
				if (!this.nodes[i]){
					word=Browser._createTextWord_();
					this.nodes.push(word);
					this._cnodes_ && this._cnodes_.push(word);
					isChange=true;
				}
				else
				word=this.nodes[i];
				word.text=this.text.charAt(i);
				word.fontSize=font.size;
				StringMethod.getWordSize(font,word.text,wordsz);
				url="font://"+font.fontName+"("+word.text+")";
				word.width=wordsz.x;
				word.height=wordsz.y;
				this.maxWordWidth=Math.max(this.maxWordWidth,word.width);
				this.textWidth+=word.width;
				this.textHeight=Math.max(this.textHeight,word.height);
			}
			this.nodes.length=sz;
			if(Laya.CONCHVER&&this._cnodes_&&this._cnodes_.length!=sz){
				this._cnodes_.length=sz;
				isChange=true;
			}
			if ((this.parent._type2_ & /*iflash.laya.dom.Node.TYPE2_MODEL_FONTSET*/0x1000)==0){
				this.parent.style._sendfont_(true);
			}
			isChange&&this.parent._modle_.text(this._cnodes_?this._cnodes_:this.nodes);
		}

		__proto__.setText=function(txt){
			this.text=txt;
		}

		DEFUNENUMPTY$(__proto__,'_$get_displayAsPassword',function(){
			return this.parent.style._font_.getPassword();
		});

		DEFUNENUMPTY$(__proto__,'_$set_displayAsPassword',function(b){
			this.parent.style.setPassWord(b);
		});

		Object.defineProperty(__proto__,'displayAsPassword',{get:__proto__._$get_displayAsPassword,set:__proto__._$set_displayAsPassword,enumerable:false});
		TextField.isDownLoad=function(font){
			if (CSSStyle.fontfaces[font]){
				var obj=TextField.normals[font]=TextField.normals[font] || {};
				if (obj.trueWith)return true;
				var canvas=Canvas.getTempCanvas();
				canvas.context.font="normal 100 34px "+font;
				var s=canvas.context.measureText("1");
				obj.normal=obj.normal || s.width;
				if (obj.normal!=s.width){
					obj.trueWith=s.width;
					return true;
				}
				return false;
			}
			else{
				return true;
			}
		}

		TextField.normals=[];
		TextField.__init$__=function(){
			TextCanvas=(function(){
				function TextCanvas(){
					this.canvas=null;
					this.x=null;
					this.y=null;
				}
				REGCLASS$(TextCanvas,'TextCanvas',true,true);
				return TextCanvas;
			})()
		}

		return TextField;
	})(TypesettingLine)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/graphicelement.as=======10098.999361
	var GraphicElement=iflash.text.engine.GraphicElement=(function(_super){
		function GraphicElement(graphic,elementWidth,elementHeight,elementFormat,eventMirror,textRotation){
			_super.apply(this,arguments);
			(elementWidth===void 0)&& (elementWidth=15);
			(elementHeight===void 0)&& (elementHeight=15);
			(textRotation===void 0)&& (textRotation="rotate0");
			Log.unfinished("GraphicElement","GraphicElement");
		}

		REGCLASS$(GraphicElement,'iflash.text.engine.GraphicElement',true,false,_super);
		var __proto__=GraphicElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_elementHeight',function(){
			Log.unfinished("GraphicElement","elementHeight");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_elementHeight',function(value){
			Log.unfinished("GraphicElement","elementHeight");
		});

		Object.defineProperty(__proto__,'elementHeight',{get:__proto__._$get_elementHeight,set:__proto__._$set_elementHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_elementWidth',function(){
			Log.unfinished("GraphicElement","elementWidth");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_elementWidth',function(value){
			Log.unfinished("GraphicElement","elementWidth");
		});

		Object.defineProperty(__proto__,'elementWidth',{get:__proto__._$get_elementWidth,set:__proto__._$set_elementWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_graphic',function(){
			Log.unfinished("GraphicElement","graphic");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_graphic',function(value){
			Log.unfinished("GraphicElement","graphic");
		});

		Object.defineProperty(__proto__,'graphic',{get:__proto__._$get_graphic,set:__proto__._$set_graphic,enumerable:false});
		return GraphicElement;
	})(ContentElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/groupelement.as=======10098.999360
	var GroupElement=iflash.text.engine.GroupElement=(function(_super){
		function GroupElement(elements,elementFormat,eventMirror,textRotation){
			_super.apply(this,arguments);
			(textRotation===void 0)&& (textRotation="rotate0");
			Log.unfinished("GroupElement","GroupElement");
		}

		REGCLASS$(GroupElement,'iflash.text.engine.GroupElement',true,false,_super);
		var __proto__=GroupElement.prototype;
		__proto__.getElementAt=function(index){
			Log.unfinished("GroupElement","getElementAt");
			return null;
		}

		__proto__.getElementAtCharIndex=function(charIndex){
			Log.unfinished("GroupElement","getElementAtCharIndex");
			return null;
		}

		__proto__.getElementIndex=function(element){
			Log.unfinished("GroupElement","getElementIndex");
			return 0;
		}

		__proto__.groupElements=function(beginIndex,endIndex){
			Log.unfinished("GroupElement","groupElements");
			return null;
		}

		__proto__.mergeTextElements=function(beginIndex,endIndex){
			Log.unfinished("GroupElement","mergeTextElements");
			return null;
		}

		__proto__.replaceElements=function(beginIndex,endIndex,newElements){
			Log.unfinished("GroupElement","replaceElements");
			return null;
		}

		__proto__.setElements=function(value){
			Log.unfinished("GroupElement","setElements");
		}

		__proto__.splitTextElement=function(elementIndex,splitIndex){
			Log.unfinished("GroupElement","splitTextElement");
			return null;
		}

		__proto__.ungroupElements=function(groupIndex){
			Log.unfinished("GroupElement","ungroupElements");
		}

		DEFUNENUMPTY$(__proto__,'_$get_elementCount',function(){
			Log.unfinished("GroupElement","elementCount");
			return 0;
		});

		Object.defineProperty(__proto__,'elementCount',{get:__proto__._$get_elementCount,enumerable:false});
		return GroupElement;
	})(ContentElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/textelement.as=======10098.999354
	var TextElement=iflash.text.engine.TextElement=(function(_super){
		function TextElement(text,elementFormat,eventMirror,textRotation){
			_super.apply(this,arguments);
			(textRotation===void 0)&& (textRotation="rotate0");
			Log.unfinished("TextElement","TextElement");
		}

		REGCLASS$(TextElement,'iflash.text.engine.TextElement',true,false,_super);
		var __proto__=TextElement.prototype;
		__proto__.replaceText=function(beginIndex,endIndex,newText){
			Log.unfinished("TextElement","replaceText");
		}

		DEFUNENUMPTY$(__proto__,'_$set_text',function(value){
			Log.unfinished("TextElement","text");
		});

		Object.defineProperty(__proto__,'text',{get:_super.prototype._$get_text,set:__proto__._$set_text,enumerable:false});
		return TextElement;
	})(ContentElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/spacejustifier.as=======10098.999351
	var SpaceJustifier=iflash.text.engine.SpaceJustifier=(function(_super){
		function SpaceJustifier(locale,lineJustification,letterSpacing){
			(locale===void 0)&& (locale="en");
			(lineJustification===void 0)&& (lineJustification="unjustified");
			(letterSpacing===void 0)&& (letterSpacing=false);
			_super.call(this,locale,lineJustification);
		}

		REGCLASS$(SpaceJustifier,'iflash.text.engine.SpaceJustifier',true,false,_super);
		var __proto__=SpaceJustifier.prototype;
		__proto__.clone=function(){
			Log.unfinished("SpaceJustifier","clone");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_letterSpacing',function(){
			Log.unfinished("SpaceJustifier","letterSpacing");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_letterSpacing',function(value){
			Log.unfinished("SpaceJustifier","letterSpacing");
		});

		Object.defineProperty(__proto__,'letterSpacing',{get:__proto__._$get_letterSpacing,set:__proto__._$set_letterSpacing,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maximumSpacing',function(){
			Log.unfinished("SpaceJustifier","maximumSpacing");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_maximumSpacing',function(value){
			Log.unfinished("SpaceJustifier","maximumSpacing");
		});

		Object.defineProperty(__proto__,'maximumSpacing',{get:__proto__._$get_maximumSpacing,set:__proto__._$set_maximumSpacing,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_minimumSpacing',function(){
			Log.unfinished("SpaceJustifier","minimumSpacing");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_minimumSpacing',function(value){
			Log.unfinished("SpaceJustifier","minimumSpacing");
		});

		Object.defineProperty(__proto__,'minimumSpacing',{get:__proto__._$get_minimumSpacing,set:__proto__._$set_minimumSpacing,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_optimumSpacing',function(){
			Log.unfinished("SpaceJustifier","optimumSpacing");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_optimumSpacing',function(value){
			Log.unfinished("SpaceJustifier","optimumSpacing");
		});

		Object.defineProperty(__proto__,'optimumSpacing',{get:__proto__._$get_optimumSpacing,set:__proto__._$set_optimumSpacing,enumerable:false});
		return SpaceJustifier;
	})(TextJustifier)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/interactiveobject.as=======10097.999985
	var InteractiveObject=iflash.display.InteractiveObject=(function(_super){
		function InteractiveObject(){
			_super.call(this);
		}

		REGCLASS$(InteractiveObject,'iflash.display.InteractiveObject',true,false,_super);
		var __proto__=InteractiveObject.prototype;
		__proto__.changeFocus=function(){
			if(this.stage==null)return;
			if(this.stage.focus!=this){
				this.repaint();
			}
		}

		__proto__.repaint=function(){
			if((this instanceof iflash.text.TextField )){
				if(((this).__text__).focus)return;
				((this).__text__).focus=true;
				this.dispatchEvent(new FocusEvent(/*iflash.events.FocusEvent.FOCUS_IN*/"focusIn"));
			}
		}

		DEFUNENUMPTY$(__proto__,'_$get_mouseEnabled',function(){
			return (this._type_&0x40)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mouseEnabled',function(value){
			if(value)
				this._type_|=0x40;
			else
			this._type_&=~0x40;
		});

		Object.defineProperty(__proto__,'mouseEnabled',{get:__proto__._$get_mouseEnabled,set:__proto__._$set_mouseEnabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_tabIndex',function(){
			Log.unfinished("InteractiveObject","contextMenu");
			return 1;
		});

		DEFUNENUMPTY$(__proto__,'_$set_tabIndex',function(param1){
			Log.unfinished("InteractiveObject","contextMenu");
		});

		Object.defineProperty(__proto__,'tabIndex',{get:__proto__._$get_tabIndex,set:__proto__._$set_tabIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_doubleClickEnabled',function(){
			return (this._type_&0x100)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_doubleClickEnabled',function(value){
			if(value)
				this._type_|=0x100;
			else
			this._type_&=~0x100;
		});

		Object.defineProperty(__proto__,'doubleClickEnabled',{get:__proto__._$get_doubleClickEnabled,set:__proto__._$set_doubleClickEnabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_tabEnabled',function(){return false});
		DEFUNENUMPTY$(__proto__,'_$set_tabEnabled',function(value){});
		Object.defineProperty(__proto__,'tabEnabled',{get:__proto__._$get_tabEnabled,set:__proto__._$set_tabEnabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_contextMenu',function(){
			Log.unfinished("InteractiveObject","contextMenu");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_contextMenu',function(cm){
			Log.unfinished("InteractiveObject","contextMenu");
		});

		Object.defineProperty(__proto__,'contextMenu',{get:__proto__._$get_contextMenu,set:__proto__._$set_contextMenu,enumerable:false});
		return InteractiveObject;
	})(DisplayObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/avm1movie.as=======10097.999971
	var AVM1Movie=iflash.display.AVM1Movie=(function(_super){
		function AVM1Movie(){
			_super.apply(this,arguments);
			Log.unfinished("AVM1Movie","");
		}

		REGCLASS$(AVM1Movie,'iflash.display.AVM1Movie',true,false,_super);
		var __proto__=AVM1Movie.prototype;
		__proto__.addCallback=function(functionName,closure){
			Log.unfinished("AVM1Movie","addCallback");
		}

		__proto__.call=function(functionName,__rest){
			var rest=[];for(var i=1,sz=arguments.length;i<sz;i++)rest.push(arguments[i]);
			Log.unfinished("AVM1Movie","call");
		}

		return AVM1Movie;
	})(DisplayObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/bitmap.as=======10097.999970
	var Bitmap=iflash.display.Bitmap=(function(_super){
		function Bitmap(bitmapData,pixelSnapping,smoothing){
			this._bitmapData_=null;
			this._setDraw_=false;
			this._scaleY_=1;
			this._scaleX_=1;
			(pixelSnapping===void 0)&& (pixelSnapping="auto");
			(smoothing===void 0)&& (smoothing=false);
			_super.call(this);
			bitmapData&&(this.bitmapData=bitmapData);
		}

		REGCLASS$(Bitmap,'iflash.display.Bitmap',true,false,_super);
		var __proto__=Bitmap.prototype;
		__proto__.lyclone=function(){
			var b=new Bitmap(this._bitmapData_);
			return b;
		}

		DEFUNENUMPTY$(__proto__,'_$get_bitmapData',function(){
			return this._bitmapData_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bitmapData',function(value){
			if(value){
				this._bitmapData_=value;
				this._width_=Math.abs(this._bitmapData_.width*this._scaleX_);
				this._height_=Math.abs(this._bitmapData_.height *this._scaleY_);
				this._modle_.size(this._width_ ,this._height_);
				if (Laya.RENDERBYCANVAS && !this._setDraw_){
					this._setDraw_=true;
					DisplayUnit._insertUnit_(this,DrawBitmapData._DEFAULT_);
				}
				else if (!Laya.RENDERBYCANVAS){
					this.bitmapData._createCMD_();
					if(this.bitmapData.type==/*iflash.display.BitmapData.CANVAS*/1){
						this._modle_.virtualBitmap(null);
						this._modle_.image(this.bitmapData._canvas_,true)
					}
					else{
						this._modle_.image(null);
						this._modle_.virtualBitmap(this.bitmapData._canvas_);
					}
				}
			}
			else if(this._bitmapData_){
				this._bitmapData_=value;
				if(!Laya.RENDERBYCANVAS){
					this._modle_.virtualBitmap(null);
				}
			}
		});

		Object.defineProperty(__proto__,'bitmapData',{get:__proto__._$get_bitmapData,set:__proto__._$set_bitmapData,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._width_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			if(this._width_==w)return;
			var oldW=this._width_/this._scaleX_;
			if(this._width_*this._scaleX_==0&&this.bitmapData)oldW=this.bitmapData.width;
			oldW &&(this._scaleX_=w / oldW);
			this._width_=Math.abs(w);
			this._modle_.size(this._width_,this._height_);
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._height_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			if(this._height_==h)
				return;
			var oldH;
			if(this._height_*this._scaleY_==0&&this.bitmapData)oldH=this.bitmapData.height;
			else oldH=this._height_/this._scaleY_;
			oldH &&(this._scaleY_=h / oldH);
			this._height_=Math.abs(h);
			this._modle_.size(this._width_,this._height_);
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_pixelSnapping',function(){
			Log.unfinished("Bitmap","pixelSnapping");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_pixelSnapping',function(value){
			Log.unfinished("Bitmap","pixelSnapping");
		});

		Object.defineProperty(__proto__,'pixelSnapping',{get:__proto__._$get_pixelSnapping,set:__proto__._$set_pixelSnapping,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleX',function(){
			return this._scaleX_
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleX',function(value){
			var oldW;
			if(this._width_*this._scaleX_==0&&this.bitmapData)oldW=this.bitmapData.width;
			else oldW=this._width_/this._scaleX_;
			this._scaleX_=value;
			this._width_=Math.abs(oldW *value);
			this._modle_.scale2d(this._scaleX_,this._scaleY_);
			_super.prototype._$set_scaleX.call(this,this._scaleX_>0?1:-1);
		});

		Object.defineProperty(__proto__,'scaleX',{get:__proto__._$get_scaleX,set:__proto__._$set_scaleX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleY',function(){
			return this._scaleY_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleY',function(value){
			var oldH
			if(this._height_*this._scaleY_==0&&this.bitmapData)oldH=this.bitmapData.height;
			else oldH=this._height_/this._scaleY_;
			this._scaleY_=value;
			this._height_=Math.abs(oldH *value);
			this._modle_.scale2d(this._scaleX_,this._scaleY_);
			_super.prototype._$set_scaleY.call(this,this._scaleY_>0?1:-1);
		});

		Object.defineProperty(__proto__,'scaleY',{get:__proto__._$get_scaleY,set:__proto__._$set_scaleY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_smoothing',function(){
			Log.unfinished("Bitmap","smoothing");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_smoothing',function(value){
		});

		Object.defineProperty(__proto__,'smoothing',{get:__proto__._$get_smoothing,set:__proto__._$set_smoothing,enumerable:false});
		return Bitmap;
	})(DisplayObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/lyimageelement.as=======10097.999946
	var LyImageElement=iflash.display.LyImageElement=(function(_super){
		function LyImageElement(){
			this.src=null;
			this._image_=null
			this._content_=null;
			this.miniBitmapData=new BitmapData();
			_super.call(this);}
		REGCLASS$(LyImageElement,'iflash.display.LyImageElement',true,false,_super);
		var __proto__=LyImageElement.prototype;
		__proto__.checkImg=function(){
			if (!this._image_)this._image_=Browser.document.createElement("image");
		}

		__proto__._init_=function(){
			if (!this._image_)this._image_=Browser.document.createElement("image");
			if ((this._type_ & 0x2000)!=0)return;
			if (Laya.RENDERBYCANVAS){
				DrawImageElement.insertUnit(this);
			}
			else{
				this._modle_.size(this._width_,this._height_);
			}
			this._type_|=0x2000;
		}

		__proto__.onLoad=function(__args){
			var args=arguments;
			this.miniBitmapData&&this.miniBitmapData.setImage(this._image_);
			this._modle_.virtualBitmap(this.miniBitmapData._canvas_);
			this._type_|=0x800;
		}

		__proto__._lyToBody_=function(){
			if(!(this._image_.isReady())){
				this._image_.onload=iflash.method.bind(this,this.onLoad);
			}
			else
			this.miniBitmapData&&this.miniBitmapData.setImage(this._image_);
			if(!(this._image_.isReady()))this._image_.src=this.src;
		}

		__proto__._lyUnToBody_=function(){}
		__proto__.__preload__=function(){
			this._lyToBody_();
		}

		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._width_
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			this._width_=w;
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._height_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			this._height_=h;
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		return LyImageElement;
	})(DisplayObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/shape.as=======10097.999926
	var Shape=iflash.display.Shape=(function(_super){
		function Shape(){
			this._image_=null;
			this._content_=null;
			this._graphics
			_super.call(this);
		}

		REGCLASS$(Shape,'iflash.display.Shape',true,false,_super);
		var __proto__=Shape.prototype;
		__proto__._init_=function(content){
			if(!content)return;
			this._content_=content;
			this._image_=content.data;
			this._modle_.quote(this._image_._modle_);
			this._image_._init_();
			this._image_.matrix=content.matrix;
			this.width=content.data.width;
			this.height=content.data.height;
			Laya.RENDERBYCANVAS&&((this._type_&0x4)==0)&&(DrawShape.insertUnit(this),this._type_|=0x4);
		}

		__proto__._getBounds_=function(targetSpace,resultRect){
			if(!targetSpace)targetSpace=this;
			if(!resultRect)
				resultRect=DisplayObject.HELPER_RECTANGLET;
			if(!this._image_){resultRect.setTo(0,0,0,0);DisplayObject.HELPER_POINT.setTo(0,0);resultRect.setTo(0,0,0,0);}
				else{DisplayObject.HELPER_POINT.setTo(this._image_.x,this._image_.y);resultRect.setTo(DisplayObject.HELPER_POINT.x,DisplayObject.HELPER_POINT.y,this._image_._width_*this.scaleX,this._image_._height_*this.scaleY);};
			if(this._graphics){
				DisplayObject.HELPER_RECTANGLET_ALT.setTo(this._graphics.x,this._graphics.y,this._graphics.width,this._graphics.height);
				resultRect.union(DisplayObject.HELPER_RECTANGLET_ALT);
			}
			return resultRect;
		}

		__proto__._lyToBody_=function(){
			this._image_&&this._image_._lyToBody_();
			_super.prototype._lyToBody_.call(this);
		}

		__proto__._lyUnToBody_=function(){
			this._image_&&(this._image_._lyUnToBody_());
			_super.prototype._lyUnToBody_.call(this);
		}

		__proto__.lyclone=function(){
			var s=new Shape();
			s._init_(this._content_);
			return s;
		}

		DEFUNENUMPTY$(__proto__,'_$get_graphics',function(){if(!this._graphics)this._graphics=new Graphics(this);
			return this._graphics;
		});

		Object.defineProperty(__proto__,'graphics',{get:__proto__._$get_graphics,enumerable:false});
		return Shape;
	})(DisplayObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/media/video.as=======10097.999704
	var Video=iflash.media.Video=(function(_super){
		function Video(width,height){
			(width===void 0)&& (width=320);
			(height===void 0)&& (height=240);
			_super.call(this);
			Log.unfinished("Video","");
		}

		REGCLASS$(Video,'iflash.media.Video',true,false,_super);
		var __proto__=Video.prototype;
		__proto__.attachCamera=function(camera){
			Log.unfinished("Video","attachCamera");
		}

		__proto__.attachNetStream=function(netStream){
			Log.unfinished("Video","attachNetStream");
		}

		__proto__.clear=function(){
			Log.unfinished("Video","clear");
		}

		DEFUNENUMPTY$(__proto__,'_$get_deblocking',function(){
			Log.unfinished("Video","deblocking");
			return 0
		});

		DEFUNENUMPTY$(__proto__,'_$set_deblocking',function(value){
			Log.unfinished("Video","deblocking");
		});

		Object.defineProperty(__proto__,'deblocking',{get:__proto__._$get_deblocking,set:__proto__._$set_deblocking,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_smoothing',function(){
			Log.unfinished("Video","smoothing");
			return false
		});

		DEFUNENUMPTY$(__proto__,'_$set_smoothing',function(value){
			Log.unfinished("Video","smoothing");
		});

		Object.defineProperty(__proto__,'smoothing',{get:__proto__._$get_smoothing,set:__proto__._$set_smoothing,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_videoHeight',function(){
			Log.unfinished("Video","videoHeight");
			return 0
		});

		Object.defineProperty(__proto__,'videoHeight',{get:__proto__._$get_videoHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_videoWidth',function(){
			Log.unfinished("Video","videoWidth");
			return 0
		});

		Object.defineProperty(__proto__,'videoWidth',{get:__proto__._$get_videoWidth,enumerable:false});
		return Video;
	})(DisplayObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filesystem/file.as=======10097.999703
	var File=iflash.filesystem.File=(function(_super){
		function File(path){
			this.applicationStorageDirectory=null;
			this.desktopDirectory=null;
			this.documentsDirectory=null;
			this.downloaded=false;
			this.exists=false;
			this.isDirectory=false;
			this.isHidden=false;
			this.isPackage=false;
			this.isSymbolicLink=false;
			this.lineEnding=null;
			this.nativePath=null;
			this.parent=null;
			this.separator=null;
			this.spaceAvailable=null;
			this.systemCharset=null;
			this._url=null;
			this.userDirectory=null;
			_super.apply(this,arguments);
		}

		REGCLASS$(File,'iflash.filesystem.File',true,false,_super);
		var __proto__=File.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_url',function(){
			return this._url;
		});

		DEFUNENUMPTY$(__proto__,'_$set_url',function(value){
			if (value.indexOf("file://")==0){
				this._url=value;
			}
		});

		Object.defineProperty(__proto__,'url',{get:__proto__._$get_url,set:__proto__._$set_url,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_type',function(){
			return this._url.substr(this._url.lastIndexOf("."));
		});

		Object.defineProperty(__proto__,'type',{get:__proto__._$get_type,enumerable:false});
		File.applicationDirectory=null
		return File;
	})(FileReference)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/statictext.as=======10097.999654
	var StaticText=iflash.text.StaticText=(function(_super){
		function StaticText(){
			_super.apply(this,arguments);
			Log.unfinished("StaticText","StaticText");
		}

		REGCLASS$(StaticText,'iflash.text.StaticText',true,false,_super);
		var __proto__=StaticText.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_text',function(){
			Log.unfinished("StaticText","text");
			return "";
		});

		Object.defineProperty(__proto__,'text',{get:__proto__._$get_text,enumerable:false});
		return StaticText;
	})(DisplayObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/contextmenu.as=======10097.999601
	var ContextMenu=iflash.ui.ContextMenu=(function(_super){
		function ContextMenu(){
			_super.apply(this,arguments);
		}

		REGCLASS$(ContextMenu,'iflash.ui.ContextMenu',true,false,_super);
		var __proto__=ContextMenu.prototype;
		__proto__.clone=function(){
			return new NativeMenu();
		}

		__proto__.hideBuiltInItems=function(){
			Log.unfinished("ContextMenu","hideBuiltInItems");
		}

		DEFUNENUMPTY$(__proto__,'_$get_builtInItems',function(){
			Log.unfinished("ContextMenu","builtInItems");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_builtInItems',function(value){
			Log.unfinished("ContextMenu","builtInItems");
		});

		Object.defineProperty(__proto__,'builtInItems',{get:__proto__._$get_builtInItems,set:__proto__._$set_builtInItems,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_clipboardItems',function(){
			Log.unfinished("ContextMenu","clipboardItems");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_clipboardItems',function(value){
			Log.unfinished("ContextMenu","clipboardItems");
		});

		Object.defineProperty(__proto__,'clipboardItems',{get:__proto__._$get_clipboardItems,set:__proto__._$set_clipboardItems,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_clipboardMenu',function(){
			Log.unfinished("ContextMenu","clipboardMenu");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_clipboardMenu',function(value){
			Log.unfinished("ContextMenu","clipboardMenu");
		});

		Object.defineProperty(__proto__,'clipboardMenu',{get:__proto__._$get_clipboardMenu,set:__proto__._$set_clipboardMenu,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_customItems',function(){
			Log.unfinished("ContextMenu","customItems");
			return [];
		});

		DEFUNENUMPTY$(__proto__,'_$set_customItems',function(value){
			Log.unfinished("ContextMenu","customItems");
		});

		Object.defineProperty(__proto__,'customItems',{get:__proto__._$get_customItems,set:__proto__._$set_customItems,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_link',function(){
			Log.unfinished("ContextMenu","link");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_link',function(value){
			Log.unfinished("ContextMenu","link");
		});

		Object.defineProperty(__proto__,'link',{get:__proto__._$get_link,set:__proto__._$set_link,enumerable:false});
		ContextMenu._$GET_isSupported=function(){
			Log.unfinished("ContextMenu","isSupported");
			return false;
		}

		Object.defineProperty(ContextMenu,'isSupported',{get:ContextMenu._$GET_isSupported,set:iflash.display.NativeMenu._$SET_isSupported,enumerable:false});
		return ContextMenu;
	})(NativeMenu)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/ui/contextmenuitem.as=======10097.999597
	var ContextMenuItem=iflash.ui.ContextMenuItem=(function(_super){
		function ContextMenuItem(caption,separatorBefore,enabled,visible){
			(separatorBefore===void 0)&& (separatorBefore=false);
			(enabled===void 0)&& (enabled=true);
			(visible===void 0)&& (visible=true);
			_super.call(this);
		}

		REGCLASS$(ContextMenuItem,'iflash.ui.ContextMenuItem',true,false,_super);
		var __proto__=ContextMenuItem.prototype;
		__proto__.clone=function(){
			Log.unfinished("NativeMenuItem","clone");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_caption',function(){
			Log.unfinished("NativeMenuItem","caption");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_caption',function(value){
			Log.unfinished("NativeMenuItem","caption");;
		});

		Object.defineProperty(__proto__,'caption',{get:__proto__._$get_caption,set:__proto__._$set_caption,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_separatorBefore',function(){
			Log.unfinished("NativeMenuItem","separatorBefore");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_separatorBefore',function(value){
			Log.unfinished("NativeMenuItem","separatorBefore");
		});

		Object.defineProperty(__proto__,'separatorBefore',{get:__proto__._$get_separatorBefore,set:__proto__._$set_separatorBefore,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_visible',function(){
			Log.unfinished("NativeMenuItem","visible");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_visible',function(value){
			Log.unfinished("NativeMenuItem","visible");
		});

		Object.defineProperty(__proto__,'visible',{get:__proto__._$get_visible,set:__proto__._$set_visible,enumerable:false});
		return ContextMenuItem;
	})(NativeMenuItem)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/document.as=======10097.999585
	var Document=iflash.laya.dom.Document=(function(_super){
		function Document(){
			this._element_class_map_=[];
			this._text_id_=[];
			this.canvas=null;
			this.styleSheets=[];
			this.activeElement=null;
			this.all=null;
			this.body=null;
			this.documentElement=null;
			this.head=null;
			this.mouseX=null;
			this.mouseY=null;
			this.onkeydown=null;
			this.onkeyup=null;
			this.drawCount=0;
			this.drawObjectCount=0;
			this.flashContainer=null;
			this.adapter=null;
			this._strDebugMsg_="";
			_super.apply(this,arguments);
			var _$this=this;
			this.mouseY=this.mouseX=0;
			Laya.document=Laya.window.document=EventDispatcher.document=this;
			if (Laya.CONCHVER > 0){
				/*__JS__ */window.document=Laya.document;
			}
			this.canvas=Browser._createRootCanvas_();
			this.all=[];
			this.baseURI=new URI(EventDispatcher.window.location.href);
			EventDispatcher.window.lyAddEventListener(/*iflash.events.Event.RESIZE*/"resize",function(__args){
				var args=arguments;
				_$this.repaint();
				if (EventDispatcher.document.adapter.screenRotate==90){
					_$this.canvas && _$this.canvas.size(EventDispatcher.window.innerHeight,EventDispatcher.window.innerWidth);
				}
				else{
					_$this.canvas && _$this.canvas.size(EventDispatcher.window.innerWidth,EventDispatcher.window.innerHeight);
				}
			});
		}

		REGCLASS$(Document,'iflash.laya.dom.Document',true,false,_super);
		var __proto__=Document.prototype;
		__proto__.render=function(){
			if(!this.canvas.context)
				return;
			this.repaint();
			if (!this.canvas || !this.isRepaint())return;
			this._repaint_=this.drawCount=this.drawObjectCount=0;
			this.canvas.context.clearRect(0,0,this.canvas.context.width,this.canvas.context.height);
			this.canvas.context.save();
			if (this.adapter.screenRotate !=0){
				this.canvas.context.translate(EventDispatcher.window.innerHeight,0);
				this.canvas.context.rotate(this.adapter.screenRotate *Math.PI / 180);
			}
			if(Laya.RENDERBYCANVAS){
				this.body._lyPaint_(this.canvas.context,0,0);
			}
			if (EventDispatcher.window.updatecount % 6==0)
				EventDispatcher.window.fps=LAYABOX.parseInt(1000 / EventDispatcher.window.delay[0] *10+"")/ 10;
			if (Laya.FLASHVER > 1 || !Laya.config.showInfo || Laya.CONCHVER){
				this.canvas.context.restore();
				return;
			};
			var ctx=this.canvas.context;
			ctx.font="normal 100 12px Arial";
			if (EventDispatcher.window.updatecount % 1==0){
				this._strDebugMsg_="FPS:"+EventDispatcher.window.fps+"/"+Browser.frameRate+" draw:"+this.drawObjectCount+"/"+this.drawCount+" "+EventDispatcher.window.updatecount+" "+Browser.window.innerWidth+"/"+Browser.window.innerHeight;
			}
			ctx.fillStyle="#000000";
			ctx.fillText(this._strDebugMsg_,this.body.left+9,this.body.top+17);
			ctx.fillStyle="#000000";
			ctx.fillText(this._strDebugMsg_,this.body.left+11,this.body.top+19);
			ctx.fillStyle="#FFFF00";
			ctx.fillText(this._strDebugMsg_,this.body.left+10,this.body.top+18);
			this.canvas.context.restore();
		}

		__proto__.setOrientationEx=function(type){
			if (((typeof type=='number')&& Math.floor(type)==type)){
				type=type==0?'portrait':'rotator';
			}
			if (Laya.CONCHVER){
				Browser.window.conchConfig.setScreenOrientation(type=='portrait'?1:0);
				return;
			}
			this.adapter.autorotate=type;
			EventDispatcher.window.resizeTo(EventDispatcher.window.innerWidth ,EventDispatcher.window.innerHeight,true);
		}

		__proto__.init=function(){
			this.documentElement=this.body=new HTMLBodyElement();
			this.head=new HTMLHeadElement();
			this.adapter=new DocumentAdapter();
			this._regHtmlElement_();
			if(Laya.CONCHVER==0||Laya.RENDERBYCANVAS)
				(Laya.process !=null)&& (Laya.process.setRootNode(this.body._modle_));
			else
			/*__JS__ */conch.setRootNode(this.body._modle_);
		}

		__proto__.getElementById=function(id){
			if(id=="body")return Laya.document.body;
			return this.all[id];
		}

		__proto__.createTextNode=function(value){
			var span=new HTMLSpanElement();
			span.innerText=value;
			return span;
		}

		__proto__.regNodeClass=function(name,_class_,clone){
			(clone==null)&& (clone=function(parent){return new _class_;});
			this._element_class_map_[name.toLowerCase()]={
				CLASS:_class_,
				clone:clone
			}
		}

		__proto__.size=function(w,h){
			this.body._style_._width_=-1;
			this.body.setSize(w,h);
			EventDispatcher.window.lyDispatchEvent(/*iflash.events.Event.RESIZE*/"resize");
		}

		__proto__.createElement=function(nodeName,parent){
			var map=this._element_class_map_,_classmk_,node,nname;
			if ((_classmk_=map[nodeName])==null){
				nname=nodeName.toLowerCase();
				((_classmk_=map[nname])!=null)&& (map[nodeName]=_classmk_);
			}
			(_classmk_==null)&&(map[nodeName]=_classmk_=map['div']);
			node=_classmk_.clone(parent);
			node.nodeName=nodeName;
			return node;
		}

		__proto__._regHtmlElement_=function(){
			this.regNodeClass("this",Node,function(p){return p;});
			this.regNodeClass("parent",Node,function(p){return (p._parent_);});
			this.regNodeClass("group",Node,function(p){return p.group;});
			this.regNodeClass("node",Node);
			this.regNodeClass("head",HTMLHeadElement);
			this.regNodeClass("div",HTMLDivElement);
			this.regNodeClass("span",HTMLSpanElement);
			this.regNodeClass("element",HTMLElement);
			this.regNodeClass("img",HTMLImageElement);
			this.regNodeClass("image",HTMLImageElement);
			this.regNodeClass("link",HTMLLinkElement);
			this.regNodeClass("style",HTMLStyleElement);
			this.regNodeClass("quote",HTMLQuoteElement);
			this.regNodeClass("title",HTMLTitleElement);
			this.regNodeClass("canvas",HTMLCanvasElement);
			this.regNodeClass("flashdisplay",FlashDisplay);
			this.regNodeClass("input",HTMLInputElement);
			this.regNodeClass("audio",HTMLAudioElement);
			this.regNodeClass("font",SWFFont);
			this.regNodeClass("b",SWFB);
			this.regNodeClass("p",SWFP);
			this.regNodeClass("textformat",SWFTEXTFORMAT);
		}

		__proto__.getNodeRegClass=function(nodeName){
			return this._element_class_map_[nodeName.toLowerCase()];
		}

		__proto__.regTextWithId=function(id,text){
			this._text_id_[id]=text;
		}

		__proto__.getTextById=function(id){
			return this._text_id_[id];
		}

		DEFUNENUMPTY$(__proto__,'_$get_scrollWidth',function(){
			return this.body.scrollWidth;
		});

		Object.defineProperty(__proto__,'scrollWidth',{get:__proto__._$get_scrollWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollHeight',function(){
			return this.body.scrollHeight;
		});

		Object.defineProperty(__proto__,'scrollHeight',{get:__proto__._$get_scrollHeight,enumerable:false});
		return Document;
	})(Node)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/documentfragment.as=======10097.999583
	var DocumentFragment=iflash.laya.dom.DocumentFragment=(function(_super){
		function DocumentFragment(){
			_super.call(this);
		}

		REGCLASS$(DocumentFragment,'iflash.laya.dom.DocumentFragment',true,false,_super);
		var __proto__=DocumentFragment.prototype;
		__proto__.appendChild=function(c){
			this._childs_==EventDispatcher.__NULLARRAY__ && (this._childs_=[]);
			if ((typeof c=='string'))c=Laya.document.createElement(c);
			this._childs_.push(c);
			return c;
		}

		DEFUNENUMPTY$(__proto__,'_$set_parent',function(p){
			for (var i=0,sz=this._childs_.length;i < sz;i++){
				p.appendChild(this._childs_[i]);
			}
		});

		Object.defineProperty(__proto__,'parent',{get:_super.prototype._$get_parent,set:__proto__._$set_parent,enumerable:false});
		return DocumentFragment;
	})(Node)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlelement.as=======10097.999581
	var HTMLElement=iflash.laya.dom.HTMLElement=(function(_super){
		function HTMLElement(){
			this.firstDisplayUnit_=null;
			this._style_=null;
			this._mouseEventMatrix_=null;
			this._docSize_=null;
			this._bound_rect_=null;
			this._scroll_=null;
			this._text_=null;
			_super.apply(this,arguments);
			this._style_=new CSSStyle(this);
			this._scroll_=HTMLElement.__SCROLLDEFAULT__;
			this._modle_=Browser._createModle_(2,this._id_,this);
			this.hidden=0;
		}

		REGCLASS$(HTMLElement,'iflash.laya.dom.HTMLElement',true,false,_super);
		var __proto__=HTMLElement.prototype;
		LAYABOX.implements(__proto__,{"iflash.laya.typesetting.ITypesetting":true})
		__proto__.createModle=function(){
			this._modle_=Browser._createModle_(2,this._id_,this);
		}

		__proto__.setSize=function(w,h){
			this._style_.size(w,h);
		}

		__proto__.rect=function(x,y,w,h){
			this.pos(x,y);
			this._style_.size(w,h);
		}

		__proto__.setAttributesStart=function(){
			Font.__fontsetref__++;
		}

		__proto__.setAttributesEnd=function(){
			Font.__fontsetref__--;
			this._style_._font_._onFontSetEnd_();
		}

		__proto__._onModifyText_=function(bNeedTypeset){
			if (!this._text_)
				return;
			if (bNeedTypeset){
				this._text_.onModifyText();
				if (this._type_ & 0x200000)
					this.typesetting();
				else{
					this._type_ |=0x20000;
					this._checkNeedTypeset(false);
				}
			}
			else{
				this._text_._resetCanvas_();
			}
		}

		__proto__.getTextTypeset=function(){
			return this._text_;
		}

		__proto__.isWord=function(){
			return false;
		}

		__proto__.scrollTo=function(x,y){
			if (this._scroll_.x==x && this._scroll_.y==y)
				return;
			(this._scroll_==Rectangle.__DEFAULT__)&& (this._scroll_=new Rectangle());
			this._scroll_.x=x;
			this._scroll_.y=y;
			this._modle_.scroll(x,y);
			this.lyDispatchEvent(/*iflash.events.Event.SCROLL*/"scroll");
			this.repaint();
		}

		__proto__.reCalculateScrollSize=function(){
			if ((this._type_ & 0x80000)!=0x80000)
				return;
			this._type_ &=~0x80000;
			var maxw=this.width,maxh=this.height,w,h,o;
			var i=0,sz=this._childs_.length,bx=this.blankLeft,by=this.blankTop,word,words;
			for (i=0;i < sz;i++){
				o=this._childs_ [i];
				if (o.hidden==2)
					continue ;
				maxw=Math.max(maxw,bx+o.offsetLeft+o.offsetWidth);
				maxh=Math.max(maxh,by+o.offsetTop+o.offsetHeight);
			}
			if (this._text_ !=null){
				words=this._text_.nodes;
				if ((sz=words.length)> 0){
					while (sz--){
						word=words[sz];
						if (word)
							continue ;
						maxw=Math.max(maxw,bx+word.getRight());
						maxh=Math.max(maxh,by+word.getBottom());
					}
				}
			}
			if (this._scroll_.width !=maxw || this._scroll_.height !=maxh){
				this._scroll_.width=maxw;
				this._scroll_.height=maxh;
				this.lyDispatchEvent(/*iflash.events.Event.SCROLLSIZE*/"scrollsize");
			}
		}

		__proto__.lyaction=function(toProps,params){
			((typeof toProps=='string'))&& (toProps=Method.simpleJsonParse(toProps));
			((typeof params=='string'))&& (params=Method.simpleJsonParse(params));
			return Tween.to(this,toProps,params);
		}

		__proto__.moveto=function(tox,toy,time,params){
			var toProps={left:tox,top:toy};
			params=params==null ? {}:params;
			((typeof params=='string'))&& (params=Method.simpleJsonParse(params));
			params.time=time;
			return Tween.to(this,toProps,params);
		}

		__proto__.pos=function(x,y){
			((this._style_._type_ & /*iflash.laya.css.CSSStyle.CSS_POSIOTION_A*/0x20000)!=/*iflash.laya.css.CSSStyle.CSS_POSIOTION_A*/0x20000)&& (this._style_.positioni=1);
			this._style_.pos(x,y);
		}

		__proto__.insert=function(c,index){
			_super.prototype.insert.call(this,c,index);
			if (c.getStyle()){
				((this._type2_ & 0x800)==0)&& Laya.RENDERBYCANVAS && DrawChilds1.insertUnit(this);
				((this._type2_ & 0x2000)==0)&& Typesetting.pushTell(c);
				this._style_.block && (this._type_ |=0x20000);
				((this._type_ & 0x100000)!=0x100000)&& (c)._style_.inheritFont(this._style_);
				this.onChildResize(c);
			}
		}

		__proto__._checkNeedTypeset=function(onlyParent){
			if ((this._type2_ & 0x2000)!=0){
				return;
			}
			if (this._style_.block){
				if (!onlyParent){
					Typesetting.push(this);
					return;
				}
			}
			((this._type_ & 0x10000)!=0x10000)&& Typesetting.pushTell(this);
		}

		__proto__._lyPaint_=function(context,x,y){
			var s;
			++EventDispatcher.document.drawObjectCount;
			this._firstDisplayUnit_ && (s=this._style_)&& (this._firstDisplayUnit_.paint(context,x+s._left_+s._margin_.left,y+s._top_+s._margin_.top,this,s._width_,s._height_)|| (this._repaint_=0));
		}

		__proto__.__scale__=function(x,y){
			this._style_.scale(x,y);
		}

		__proto__._scale_=function(x,y){
			this.__scale__(x,y);
		}

		__proto__.setScale=function(x,y){
			this.__scale__(x,y);
		}

		__proto__.hitTest=function(x,y){
			if (!this._style_._sizebeset_and_auto())
				return true;
			var lx,ly,rx,ry;
			lx=this.clientLeft,ly=this.clientTop;
			if (this._style_._transform_ !=null){
				lx=this.clientLeft+this._style_._transform_.translate.x *(this._style_.scaleX-1);
				ly=this.clientTop+this._style_._transform_.translate.y *(this._style_.scaleY-1);
			}
			rx=lx+this.clientWidth,ry=ly+this.clientHeight;
			return x >=lx && y >=ly && x <=rx && y <=ry;
		}

		__proto__.hitTestDoc=function(w,h,userDoc){
			if(this._type2_ &0x800000)
				return(w >-1/2*this.width && w <=1/2*this.width && h >-1/2*this.height && h <=1/2*this.height);
			if (userDoc && (this._type2_ & 0x400000))return true;
			if (userDoc && this._docSize_)
				return (w > this._docSize_.x && w <=Math.max(this._docSize_.width,this.width)&& h > this._docSize_.y && h <=Math.max(this._docSize_.height,this.height));
			return (w > 0 && w <=this.width-this._scroll_.x && h > 0 && h <=this.height-this._scroll_.y);
		}

		__proto__.sortChildsByZIndex=function(){
			if (!this.checkType(0x2))
				return;
			this.removeType(0x2);
			this.sortChildren(BIND$(this,this._sort_));
		}

		__proto__._sortChildsByZIndex_=function(){
			this.sortChildren(BIND$(this,this._sort_));
		}

		__proto__._sort_=function(a,b){
			return a._to_sort_d-b._to_sort_d;
		}

		__proto__.lyAddEventListener=function(type,listener,useCapture,priority,useWeakReference){
			(useCapture===void 0)&& (useCapture=false);
			(priority===void 0)&& (priority=0);
			(useWeakReference===void 0)&& (useWeakReference=false);
			this._type_ |=0x80;
			if (_SystemMethod_.__MOUSEEVENT__[type]){
				switch (type){
					case /*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown":
					case /*iflash.events.MouseEvent.MOUSE_UP*/"mouseup":
					case /*iflash.events.MouseEvent.CLICK*/"click":
					case /*iflash.events.MouseEvent.DOUBLE_CLICK*/"doubleClick":
						_SystemMethod_.mouseEnableTo(this,0x100,false);
						break ;
					case /*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove":
					case /*iflash.events.MouseEvent.MOUSE_OVER*/"mouseover":
					case /*iflash.events.MouseEvent.MOUSE_OUT*/"mouseout":
					case /*iflash.events.MouseEvent.ROLL_OUT*/"mouseout":
					case /*iflash.events.MouseEvent.ROLL_OVER*/"mouseover":
					case /*iflash.events.MouseEvent.MOUSE_DRAG*/"drag":
						_SystemMethod_.mouseEnableTo(this,0x100 | 0x200,true);
						break ;
					}
			};
			var e=iflash.events.EventDispatcher.prototype.lyAddEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
			e && e.setOwer(this);
			return e;
		}

		__proto__.addEventListener=function(type,listener,useCapture,priority,useWeakReference){
			(useCapture===void 0)&& (useCapture=false);
			(priority===void 0)&& (priority=0);
			(useWeakReference===void 0)&& (useWeakReference=false);
			this.lyAddEventListener(type,listener,useCapture,priority,useWeakReference);
		}

		__proto__.localToGlobal=function(point){
			var cm=this.getConcatenatedMatrix(Laya.document.body);
			return cm.transformPoint(point);
		}

		__proto__.globalToLocal=function(point){
			var cm=this.getConcatenatedMatrix(Laya.document.body);
			cm.invert();
			return cm.transformPoint(point);
		}

		__proto__.getElementsByClassName=function(name){
			return this.select(function(o){return o._private_.className==name;});
		}

		__proto__.getStyle=function(){
			return this._style_;
		}

		__proto__.attributesToHTML=function(){
			return _super.prototype.attributesToHTML.call(this)+this._style_.attributesToHTML();
		}

		__proto__.blur=function(){
			if (Laya.document.activeElement !=this)return;
			Laya.document.activeElement=null;
			this.lyDispatchEvent(/*iflash.events.MouseEvent.BLUR*/"blur");
		}

		__proto__.getConcatenatedMatrix=function(ancestor){
			var cos=1,sin=0,r,o,sx,sy,translatex=0,translatey=0;
			var mtx=new Matrix();
			if (ancestor==this)
				return mtx;
			for (o=this;o.parent !=null && o !=ancestor;o=o.parent){
				cos=1;sin=0;
				if (o.rotate % 360 !=0){
					r=o.rotate *Math.PI / 180;
					cos=Math.cos(r);
					sin=Math.sin(r);
				}
				sx=o._style_.scaleX;
				sy=o._style_.scaleY;
				if (o._style_._transform_ !=null){
					translatex=o._style_._transform_.translate.x;
					translatey=o._style_._transform_.translate.y;
				}
				if (translatex !=0)
					mtx.tx-=translatex;
				if (translatey !=0)
					mtx.ty-=translatey;
				mtx.concatSix(cos *sx,sin *sy,-sin *sx,cos *sy,o.left+translatex,o.top+translatey);
			}
			return mtx;
		}

		__proto__.animation=function(keyframe,duration,timingFunction,delay,count){
			(delay===void 0)&& (delay=0);
			(count===void 0)&& (count=0);
			this._style_.animation(keyframe,duration,timingFunction,delay,count);
		}

		__proto__.typesetting=function(){
			Typesetting.typesettingElement(this);
		}

		__proto__.disableTypesetting=function(){
			this._type2_ |=0x2000;
		}

		__proto__.lyonResize=function(e){
			if ((this._type_ & 0x80000)==0)
				this._type_ |=0x80000;
		}

		__proto__.onChildRepos=function(child){}
		__proto__.getChildMaxSize=function(){
			var p=new Point(),s,childs=this.childNodes;
			for (var i=0,sz=childs.length;i < sz;i++){
				if (childs[i]==null || (s=childs[i].getStyle())==null)
					continue ;
				(s._width_ > p.x)&& (p.x=s._width_);
				(s._height_ > p.y)&& (p.y=s._height_);
			}
			if (p.x==0)p.x=this.width;
			if (p.y==0)p.y=this.height;
			return p;
		}

		__proto__.setScrollFlag=function(){
			if ((this._type_ & 0x80000)==0)
				this._type_ |=0x80000;
		}

		__proto__.onChildResize=function(child){
			this.setScrollFlag();
		}

		__proto__._getCanvas_=function(){
			return this._private_._canvas_;
		}

		__proto__.setMatrix=function(a,b,c,d,tx,ty){
			this._style_.matrix=new Matrix(a,b,c,d,tx,ty);
		}

		__proto__._hitTestByMatrix_=function(e,useDoc){
			var x=e.offsetX,y=e.offsetY;
			var w,h,m=this._mouseEventMatrix_;
			if (m&&m.isTransform()){
				HTMLElement.__tempMatrix__.copy(m);
				m.invert();
				w=m.a *x+m.c *y+m.tx;
				h=m.d *y+m.b *x+m.ty;
				m.copy(HTMLElement.__tempMatrix__);
			}
			else{
				w=x-this.offsetLeft;
				h=y-this.offsetTop;
			}
			e.offsetX=w;e.offsetY=h;
			if (!this._style_._sizebeset_and_auto())
				return true;
			return this.hitTestDoc(w,h,useDoc);
		}

		__proto__._hitTestByMatrixNoTransform_=function(e,useDoc){
			var x=e.offsetX,y=e.offsetY;
			var w=x-this.offsetLeft,h=y-this.offsetTop;
			e.offsetX=w;e.offsetY=h;
			if (!this._style_._sizebeset_and_auto())
				return true;
			return this.hitTestDoc(w,h,useDoc);
		}

		__proto__.hitAlways=function(){
			return false;
		}

		__proto__.appendChild=function(c){
			return _super.prototype.appendChild.call(this,c);
		}

		__proto__._getAllText=function(){
			var temp;
			temp=this.text || "";
			for (var i=0,sz=this._childs_.length;i < sz;i++){
				temp+=this._childs_[i]._getAllText();
			}
			return temp;
		}

		DEFUNENUMPTY$(__proto__,'_$get__firstDisplayUnit_',function(){
			return this.firstDisplayUnit_;
		});

		DEFUNENUMPTY$(__proto__,'_$set__firstDisplayUnit_',function(value){
			this.firstDisplayUnit_=value;
		});

		Object.defineProperty(__proto__,'_firstDisplayUnit_',{get:__proto__._$get__firstDisplayUnit_,set:__proto__._$set__firstDisplayUnit_,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_offsetWidth',function(){
			var w=this._style_._width_+this._style_._styleex_.padding.width;
			return this._style_._transform_ ? w *this._style_._transform_.scale.x :w;
		});

		Object.defineProperty(__proto__,'offsetWidth',{get:__proto__._$get_offsetWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_onmouseup',function(s){
			this._private_.mouse_onmoueup && this._private_.mouse_onmoueup.destroy();
			this._private_.mouse_onmoueup=this.lyAddEventListener(/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup",Method.jsToEventFun(s));
		});

		Object.defineProperty(__proto__,'onmouseup',{set:__proto__._$set_onmouseup,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_style',function(){
			return this._style_;
		});

		Object.defineProperty(__proto__,'style',{get:__proto__._$get_style,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_defaultNodeName',function(){
			return "element";
		});

		Object.defineProperty(__proto__,'defaultNodeName',{get:__proto__._$get_defaultNodeName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollLeft',function(){
			return this._scroll_.x;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scrollLeft',function(x){
			this.scrollTo(x,this._scroll_.y);
		});

		Object.defineProperty(__proto__,'scrollLeft',{get:__proto__._$get_scrollLeft,set:__proto__._$set_scrollLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_offsetTop',function(){
			return this._style_._top_+this._style_._styleex_.padding.top+this._style_._margin_.top+this._scroll_.y;
		});

		Object.defineProperty(__proto__,'offsetTop',{get:__proto__._$get_offsetTop,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_onblur',function(s){
			this._private_.mouse_onblur && this._private_.mouse_onblur.destroy();
			this._private_.mouse_onblur=this.lyAddEventListener(/*iflash.events.MouseEvent.BLUR*/"blur",Method.jsToEventFun(s));
		});

		Object.defineProperty(__proto__,'onblur',{set:__proto__._$set_onblur,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this._style_.width;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			this._style_.width=w;
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this._style_.height;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			this._style_.height=h;
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bgcolor',function(){
			return this._style_.backgroundColor;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bgcolor',function(rgb){
			this._style_.backgroundColor=rgb;
		});

		Object.defineProperty(__proto__,'bgcolor',{get:__proto__._$get_bgcolor,set:__proto__._$set_bgcolor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_clientTop',function(){
			return this._style_._top_;
		});

		Object.defineProperty(__proto__,'clientTop',{get:__proto__._$get_clientTop,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_innerText',function(){
			return this._text_ ? this._text_.text :null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_innerText',function(value){
			value=value !=null ? (""+value):null;
			if (this._text_ && this._text_.text==value)
				return;
			(this._text_==null)&& (this._text_=new TextField(this));
			this._text_.setText(value);
			this._onModifyText_(true);
		});

		Object.defineProperty(__proto__,'innerText',{get:__proto__._$get_innerText,set:__proto__._$set_innerText,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set__lineIndex_',function(i){
			Log.unfinished("HTMLElement","_lineIndex_")
		});

		Object.defineProperty(__proto__,'_lineIndex_',{set:__proto__._$set__lineIndex_,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_left',function(){
			return this._style_.left;
		});

		DEFUNENUMPTY$(__proto__,'_$set_left',function(x){
			this._style_.left=x;
		});

		Object.defineProperty(__proto__,'left',{get:__proto__._$get_left,set:__proto__._$set_left,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_text',function(){
			return this.innerText;
		});

		DEFUNENUMPTY$(__proto__,'_$set_text',function(value){
			this.innerText=value;
		});

		Object.defineProperty(__proto__,'text',{get:__proto__._$get_text,set:__proto__._$set_text,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollTop',function(){
			return this._scroll_.y;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scrollTop',function(y){
			this.scrollTo(this._scroll_.x,y);
		});

		Object.defineProperty(__proto__,'scrollTop',{get:__proto__._$get_scrollTop,set:__proto__._$set_scrollTop,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollWidth',function(){
			this.reCalculateScrollSize();
			return this._scroll_.width;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scrollWidth',function(i){
			this._scroll_.width=i;
		});

		Object.defineProperty(__proto__,'scrollWidth',{get:__proto__._$get_scrollWidth,set:__proto__._$set_scrollWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get__to_sort_d',function(){
			if (this._sort_d_ >=0)
				return this._sort_d_;
			var z=this._style_._zIndex_;
			return this._sort_d_=this._id_ / 100000+((this._style_.positioni==0)? 0 :100000)+(isNaN(z)? 0 :z *10);
		});

		Object.defineProperty(__proto__,'_to_sort_d',{get:__proto__._$get__to_sort_d,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scale',function(){
			return this._style_.scaleX;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scale',function(x){
			this.__scale__(x,x);
		});

		Object.defineProperty(__proto__,'scale',{get:__proto__._$get_scale,set:__proto__._$set_scale,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollHeight',function(){
			this.reCalculateScrollSize();
			return this._scroll_.height;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scrollHeight',function(i){
			this._scroll_.height=i;
		});

		Object.defineProperty(__proto__,'scrollHeight',{get:__proto__._$get_scrollHeight,set:__proto__._$set_scrollHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_blankLeft',function(){
			return this._style_._styleex_.padding.left;
		});

		Object.defineProperty(__proto__,'blankLeft',{get:__proto__._$get_blankLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_blankTop',function(){
			return this._style_._styleex_.padding.top;
		});

		Object.defineProperty(__proto__,'blankTop',{get:__proto__._$get_blankTop,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bubbles',function(){
			return (this._type2_ & 0x40000)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_bubbles',function(b){
			b?(this._type2_ |=0x40000):
			(this._type2_ &=(~0x40000));
			b && _SystemMethod_.mouseEnableTo(this,0x100,false);
		});

		Object.defineProperty(__proto__,'bubbles',{get:__proto__._$get_bubbles,set:__proto__._$set_bubbles,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_top',function(){
			return this._style_.top;
		});

		DEFUNENUMPTY$(__proto__,'_$set_top',function(y){
			this._style_.top=y;
		});

		Object.defineProperty(__proto__,'top',{get:__proto__._$get_top,set:__proto__._$set_top,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_alpha',function(){
			return this._style_.alpha;
		});

		DEFUNENUMPTY$(__proto__,'_$set_alpha',function(d){
			this._style_.alpha=d;
		});

		Object.defineProperty(__proto__,'alpha',{get:__proto__._$get_alpha,set:__proto__._$set_alpha,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_draggable',function(){
			return this._private_.draggable ? this._private_.draggable.type :"none"
		});

		DEFUNENUMPTY$(__proto__,'_$set_draggable',function(type){
			this._private_.draggable && ((this._private_.draggable.deleted=true)|| (this._private_.draggable=null));
			if (type=='none')
				return;
			this._style_.position="absolute";
			this._private_.draggable=new DragListerner(this,type);
			var e=EventListener.__create__(this._private_.draggable.onEvent,true,0,true,this._private_.draggable);
			this.addOneEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",e);
			this.addOneEventListener(/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove",e);
			this.addOneEventListener(/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup",e);
			_SystemMethod_.mouseEnableTo(this,0x100 | 0x200,true);
			this.cancelBubble=true;
		});

		Object.defineProperty(__proto__,'draggable',{get:__proto__._$get_draggable,set:__proto__._$set_draggable,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_isVisible',function(){
			return this.hidden==0;
		});

		Object.defineProperty(__proto__,'isVisible',{get:__proto__._$get_isVisible,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_bgimg',function(url){
			this._style_.setBackgroundImage(url,null);
		});

		Object.defineProperty(__proto__,'bgimg',{set:__proto__._$set_bgimg,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleX',function(){
			return this._style_.scaleX;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleX',function(value){
			this._style_.scaleX=value;
		});

		Object.defineProperty(__proto__,'scaleX',{get:__proto__._$get_scaleX,set:__proto__._$set_scaleX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleY',function(){
			return this._style_.scaleY;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleY',function(value){
			this._style_.scaleY=value;
		});

		Object.defineProperty(__proto__,'scaleY',{get:__proto__._$get_scaleY,set:__proto__._$set_scaleY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rotate',function(){
			return this._style_.rotate;
		});

		DEFUNENUMPTY$(__proto__,'_$set_rotate',function(r){
			this._style_.rotate=r;
		});

		Object.defineProperty(__proto__,'rotate',{get:__proto__._$get_rotate,set:__proto__._$set_rotate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_clientLeft',function(){
			return this._style_._left_;
		});

		Object.defineProperty(__proto__,'clientLeft',{get:__proto__._$get_clientLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_clientWidth',function(){
			return this._style_._transform_ ? this._style_._width_ *this._style_._transform_.scale.x :this._style_._width_;
		});

		Object.defineProperty(__proto__,'clientWidth',{get:__proto__._$get_clientWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_onfocus',function(s){
			this._private_.mouse_onfocus && this._private_.mouse_onfocus.destroy();
			this._private_.mouse_onfocus=this.lyAddEventListener(/*iflash.events.MouseEvent.FOCUS*/"focus",Method.jsToEventFun(s));
		});

		Object.defineProperty(__proto__,'onfocus',{set:__proto__._$set_onfocus,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_clientHeight',function(){
			return this._style_._transform_ ? this._style_._height_ *this._style_._transform_.scale.y :this._style_._height_;
		});

		Object.defineProperty(__proto__,'clientHeight',{get:__proto__._$get_clientHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_onclick',function(s){
			this._private_.mouse_onclick && this._private_.mouse_onclick.destroy();
			this._private_.mouse_onclick=this.lyAddEventListener(/*iflash.events.MouseEvent.CLICK*/"click",Method.jsToEventFun(s));
		});

		Object.defineProperty(__proto__,'onclick',{set:__proto__._$set_onclick,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_offsetLeft',function(){
			return this._style_._left_+this._style_._styleex_.padding.left+this._style_._margin_.left+this._scroll_.x;
		});

		Object.defineProperty(__proto__,'offsetLeft',{get:__proto__._$get_offsetLeft,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_offsetHeight',function(){
			var h=this._style_._height_+this._style_._styleex_.padding.height;
			return this._style_._transform_ ? h *this._style_._transform_.scale.y :h;
		});

		Object.defineProperty(__proto__,'offsetHeight',{get:__proto__._$get_offsetHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_outWidth',function(){
			var e=this._style_._styleex_;
			return this._style_._width_+e.padding.width+(e.border ? e.border.size *2 :0)+this._style_.margin_.width;
		});

		Object.defineProperty(__proto__,'outWidth',{get:__proto__._$get_outWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nodeValue',function(){
			return this._text_ ? this._text_.text :null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_nodeValue',function(value){
			this.text=value;
		});

		Object.defineProperty(__proto__,'nodeValue',{get:__proto__._$get_nodeValue,set:__proto__._$set_nodeValue,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_outHeight',function(){
			var e=this._style_._styleex_;
			return this._style_._height_+e.padding.height+(e.border ? e.border.size *2 :0)+this._style_.margin_.height;
		});

		Object.defineProperty(__proto__,'outHeight',{get:__proto__._$get_outHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_htmlBorder',function(){
			return this._style_.border;
		});

		DEFUNENUMPTY$(__proto__,'_$set_htmlBorder',function(txt){
			this._style_.border=txt;
		});

		Object.defineProperty(__proto__,'htmlBorder',{get:__proto__._$get_htmlBorder,set:__proto__._$set_htmlBorder,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mouseEnabled',function(){
			return (this._type2_ &0x20000)==0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mouseEnabled',function(b){
			if (b)
				this._type2_ &=~0x20000;
			else
			this._type2_ |=0x20000;
		});

		Object.defineProperty(__proto__,'mouseEnabled',{get:__proto__._$get_mouseEnabled,set:__proto__._$set_mouseEnabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_cancelBubble',function(){
			return (this._type_ & 0x400)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_cancelBubble',function(b){
			if (b){
				this.addType(0x400);
			}
			else{
				this.removeType(0x400);
			}
		});

		Object.defineProperty(__proto__,'cancelBubble',{get:__proto__._$get_cancelBubble,set:__proto__._$set_cancelBubble,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_onmousedown',function(s){
			this._private_.mouse_onmouedown && this._private_.mouse_onmouedown.destroy();
			this._private_.mouse_onmouedown=this.lyAddEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",Method.jsToEventFun(s));
		});

		Object.defineProperty(__proto__,'onmousedown',{set:__proto__._$set_onmousedown,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_onmouseover',function(s){
			this._private_.mouse_onmouseover && this._private_.mouse_onmouseover.destroy();
			this._private_.mouse_onmouseover=this.lyAddEventListener(/*iflash.events.MouseEvent.MOUSE_OVER*/"mouseover",Method.jsToEventFun(s));
		});

		Object.defineProperty(__proto__,'onmouseover',{set:__proto__._$set_onmouseover,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_onmouseout',function(s){
			this._private_.mouse_onmouseout && this._private_.mouse_onmouseout.destroy();
			this._private_.mouse_onmouseout=this.lyAddEventListener(/*iflash.events.MouseEvent.MOUSE_OUT*/"mouseout",Method.jsToEventFun(s));
		});

		Object.defineProperty(__proto__,'onmouseout',{set:__proto__._$set_onmouseout,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_className',function(){
			return this._private_._className_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_className',function(name){
			if (name.indexOf(' ')> 0){
				var names=name.split(' ');
				for (var i=0,sz=names.length;i < sz;i++)
				this._style_.setAttributes(Laya.document.styleSheets[names[i]]);
			}
			else
			this._style_.setAttributes(Laya.document.styleSheets[name]);
			this._private_._className_=name;
		});

		Object.defineProperty(__proto__,'className',{get:__proto__._$get_className,set:__proto__._$set_className,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_cssText',function(text){
			this._style_.cssText=text;
		});

		Object.defineProperty(__proto__,'cssText',{set:__proto__._$set_cssText,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_focus',function(){
			return Laya.document.activeElement==this;
		});

		DEFUNENUMPTY$(__proto__,'_$set_focus',function(b){
			if (b==false){
				this.blur();
				return;
			}
			if (Laya.document.activeElement==this){
				this.lyDispatchEvent(/*iflash.events.MouseEvent.FOCUS*/"focus");
				return;
			}
			if (Laya.document.activeElement !=null)
				Laya.document.activeElement.blur();
			Laya.document.activeElement=this;
			this.lyDispatchEvent(/*iflash.events.MouseEvent.FOCUS*/"focus");
		});

		Object.defineProperty(__proto__,'focus',{get:__proto__._$get_focus,set:__proto__._$set_focus,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mouseChildren',function(){
			return (this._type2_ & 0x4000)==0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mouseChildren',function(enable){
			enable ? (this._type2_ &=~0x4000):(this._type2_ |=0x4000);
		});

		Object.defineProperty(__proto__,'mouseChildren',{get:__proto__._$get_mouseChildren,set:__proto__._$set_mouseChildren,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_filters',function(){
			return this._private_._filters_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_filters',function(value){
		});

		Object.defineProperty(__proto__,'filters',{get:__proto__._$get_filters,set:__proto__._$set_filters,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mask',function(){
			return this._private_.__mask;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mask',function(inValue){
			(this._private_.__mask !=null)&& (this._private_.__mask._private_.__maskingObj=null);
			this._private_.__mask=inValue;
			(inValue !=null)&& (inValue._private_.__maskingObj=this);
		});

		Object.defineProperty(__proto__,'mask',{get:__proto__._$get_mask,set:__proto__._$set_mask,enumerable:false});
		REGSTATICATTR$(HTMLElement,
		['__SCROLLDEFAULT__',function(){return this.__SCROLLDEFAULT__=new Rectangle;
		},'__tempMatrix__',function(){return this.__tempMatrix__=new Matrix();}

		]);
		HTMLElement.__init$__=function(){
			;
			iflash.laya.utils.regXmlAttr(HTMLElement,"cacheasbitmap=b","cacheAsBitmap",false);
			iflash.laya.utils.regXmlAttr(HTMLElement,"border","htmlBorder",false);
			iflash.laya.utils.regXmlAttr(HTMLElement,"class","className");
			iflash.laya.utils.regXmlAttr(HTMLElement,"style","cssText",false);
			iflash.laya.utils.regXmlAttr(HTMLElement,"pos( d d )");
			iflash.laya.utils.regXmlAttr(HTMLElement,"size(d d)","setSize");
			iflash.laya.utils.regXmlAttr(HTMLElement,"rect(d d d d)","rect");
			iflash.laya.utils.regXmlAttr(HTMLElement,"action(s s)","lyaction",false);
			iflash.laya.utils.regXmlAttr(HTMLElement,"animation(s t s t I)");
			iflash.laya.utils.regXmlAttr(HTMLElement,"moveto(i i s s)");
			iflash.laya.utils.regXmlAttr(HTMLElement,"matrix(d d d d d d)","setMatrix");
			iflash.laya.utils.regXmlAttr(HTMLElement,"scalex=d","scaleX",false);
			iflash.laya.utils.regXmlAttr(HTMLElement,"focus=b",null,false);
			iflash.laya.utils.regXmlAttr(HTMLElement,"scaley=d","scaleY",false);
			iflash.laya.utils.regXmlAttr(HTMLElement,"scale(d d)","setScale",false);
			iflash.laya.utils.regXmlAttr(HTMLElement,"size(d d)","setSize",false);
		}

		return HTMLElement;
	})(Node)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlaudioelement.as=======10097.999580
	var HTMLAudioElement=iflash.laya.dom.HTMLAudioElement=(function(_super){
		function HTMLAudioElement(){
			this._soundNode_=null;
			this._paramex_=0;
			this._enddel_=true;
			this._sound_type_=0;
			this._url_=null;
			this._volume_=1;
			this.onload=null;
			this.onerror=null;
			this.loops=0;
			this._onceLoad_=false;
			_super.call(this);
			HTMLAudioElement._activeAudios_.push(this);
		}

		REGCLASS$(HTMLAudioElement,'iflash.laya.dom.HTMLAudioElement',true,false,_super);
		var __proto__=HTMLAudioElement.prototype;
		__proto__.onAddDocument=function(){
			_super.prototype.onAddDocument.call(this);
			if (this._url_ !=null){
				var d=this._url_;
				this._url_=null;
				this.src=d;
			}
		}

		__proto__.play=function(){
			Log.log("play....."+this._url_+"time"+iflash.utils.getTimer());
			if (this.deleted)return;
			if (this._soundNode_ !=null){
			}
		}

		__proto__.restart=function(){
			if (this.deleted)return;
			if (this._soundNode_ !=null){
				try{
					/*__JS__ */this._soundNode_.currentTime=0;
				}
				catch (e){
					/*__JS__ */this._soundNode_.src=this._url_;
				}
				this._soundNode_.play();
			}
		}

		__proto__.pause=function(){
			if (this.deleted)return;
			if (this._soundNode_ !=null){
				/*__JS__ */ this._soundNode_.pause();
			}
		}

		__proto__.muted=function(b){
			if (this._soundNode_ !=null)this._soundNode_.muted=b;
		}

		__proto__.onEnded=function(){
			if(this.loops > 1){
				this.loops--;
				this.loop=true;
				}else{
				this.loop=false;
			}
			if (this.loop){
				this.restart();
			}
			else{
				HTMLAudioElement._pushSoundToCache_(this.src,this._soundNode_);
				this.lyDispatchEvent(/*iflash.events.Event.SOUND_COMPLETE*/"soundComplete");
			}
		}

		__proto__.onTimeUpdate=function(){}
		__proto__._setevent_=function(){
			this._soundNode_.addEventListener("canplaythrough",BIND$(this,this.onloadComplete));
			this._soundNode_.addEventListener("ended",BIND$(this,this.onEnded));
			this._soundNode_.addEventListener("timeupdate",BIND$(this,this.onTimeUpdate));
		}

		__proto__.onloadComplete=function(__args){
			var args=arguments;
			!this._onceLoad_&&this.lyDispatchEvent(/*iflash.events.Event.COMPLETE*/"complete");
			this._onceLoad_=true;
		}

		__proto__._getBounds_=function(targetSpace,resultRect){
			return new Rectangle();
		}

		__proto__.load=function(){
			this._soundNode_.load();
		}

		DEFUNENUMPTY$(__proto__,'_$get_src',function(){
			return this._url_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_src',function(url){
			if (this.deleted)return;
			if (HTMLAudioElement._muted_==true){
				if ((this._paramex_ & 0x8)!=0){
					this.destroy();
					return;
				}
			}
			if (url.charAt(0)=='/' || this.baseURI){
				this._url_=this.formatUrl(url);
				var audioType=this._url_.substring(this._url_.lastIndexOf(".")+1,this._url_.length);
				if(audioType=="mp3"){
					this._soundNode_=Browser.document.createElement("audio");
				}
				else{
					this._soundNode_=HTMLAudioElement._popSoundFromeCache_(this._url_);
					this._soundNode_=this._soundNode_|| Browser.document.createElement("audio");
				}
				this._setevent_();
				this.muted(HTMLAudioElement._muted_);
				this._soundNode_.src=this._url_;
				if (this.autoplay){
					this._soundNode_.play();
				}
				else{
					this._paramex_ |=0x10;
				}
				}else{
				this._url_=url;
			}
		});

		Object.defineProperty(__proto__,'src',{get:__proto__._$get_src,set:__proto__._$set_src,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_autoplay',function(){
			return (this._paramex_ & 0x1)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_autoplay',function(b){
			if (b){
				this._paramex_ |=0x1;
				if (this._soundNode_ !=null && (this._paramex_ & 0x10)!=0){
					this._soundNode_.play();
				}
			}
			else this._paramex_&=~0x1;
		});

		Object.defineProperty(__proto__,'autoplay',{get:__proto__._$get_autoplay,set:__proto__._$set_autoplay,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_loop',function(){
			return (this._paramex_ & 0x2)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_loop',function(b){
			if (b){
				this._paramex_ |=0x2;
			}
			else this._paramex_&=~0x2;
			this._soundNode_.loop=b;
		});

		Object.defineProperty(__proto__,'loop',{get:__proto__._$get_loop,set:__proto__._$set_loop,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_volume',function(){
			return this._volume_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_volume',function(num){
			this._soundNode_ && (this._soundNode_.volume=num);
			this._volume_=num;
		});

		Object.defineProperty(__proto__,'volume',{get:__proto__._$get_volume,set:__proto__._$set_volume,enumerable:false});
		HTMLAudioElement._pushSoundToCache_=function(src,sound){
			var o=HTMLAudioElement._cacheAudios_[src];
			if (o==null){
				o=[];
				HTMLAudioElement._cacheAudios_[src]=o;
			}
			sound.pause();
			o.push(sound);
		}

		HTMLAudioElement._popSoundFromeCache_=function(src){
			var o=HTMLAudioElement._cacheAudios_[src];
			if (o==null || o.length < 1)return null;
			return o.pop();
		}

		HTMLAudioElement._muted_=false;
		HTMLAudioElement._musicmuted_=false;
		HTMLAudioElement._music_=null;
		HTMLAudioElement._activeAudios_=[];
		HTMLAudioElement._cacheAudios_=[];
		HTMLAudioElement._AUTOPLAY_=0x1;
		HTMLAudioElement._LOOP_=0x2;
		HTMLAudioElement._PRELOAD_=0x4;
		HTMLAudioElement._MUSIC_=0x8;
		HTMLAudioElement._ISPLAY_=0x10;
		REGSTATICATTR$(HTMLAudioElement,
		['_LOOPPARM_',function(){return this._LOOPPARM_=iflash.laya.utils.regXmlAttr(HTMLAudioElement,"loop=b","loop");
		},'_AUTOPLAYPARM_',function(){return this._AUTOPLAYPARM_=iflash.laya.utils.regXmlAttr(HTMLAudioElement,"autoplay=b","autoplay");}

		]);
		return HTMLAudioElement;
	})(Node)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlheadelement.as=======10097.999574
	var HTMLHeadElement=iflash.laya.dom.HTMLHeadElement=(function(_super){
		function HTMLHeadElement(){
			_super.call(this);
		}

		REGCLASS$(HTMLHeadElement,'iflash.laya.dom.HTMLHeadElement',true,false,_super);
		var __proto__=HTMLHeadElement.prototype;
		__proto__._checkAllComplete_=function(){
			if (!this.complete)return false;
			if(this.deleted)return false;
			var childs=this._childs_,node,sz=childs.length,i=0;
			for (i=0;i < sz;i++){
				node=childs[i];
				if (!node.deleted && !node.complete)return false;
				node._private_.onComplete && node._private_.onComplete();
			}
			this._private_.onComplete && this._private_.onComplete();
			this._private_.onComplete=null;
			return true;
		}

		return HTMLHeadElement;
	})(Node)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmllinkelement.as=======10097.999571
	var HTMLLinkElement=iflash.laya.dom.HTMLLinkElement=(function(_super){
		function HTMLLinkElement(){
			this.rel="body";
			this.type="text";
			this._order_="true";
			this._lockfile_=false;
			this._url_=null;
			this.attrs=null;
			this.withurl=null;
			this.includeonce=null;
			_super.apply(this,arguments);
			this.complete=false;
			this.onComplete=iflash.method.bind(this,this._onComplete_);
		}

		REGCLASS$(HTMLLinkElement,'iflash.laya.dom.HTMLLinkElement',true,false,_super);
		var __proto__=HTMLLinkElement.prototype;
		__proto__._onComplete_=function(){
			if (this._private_.onComplete==null)return;
			this._private_.onComplete=null;
			if (this.rel=="prefetch")return;
			if (this.includeonce=='true'){
				if (HTMLLinkElement._linkfiles_[this.src])return;
				HTMLLinkElement._linkfiles_[this.src]=this;
				return;
			}
			switch(this.type){
				case 'image':
					return;
				case 'text/css':
					this.src&&HTMLStyleElement.parseStyle((new FileRead(this.src)).load(),this.baseURI);
					return;
				case 'text/laya','text/html':;
					var parent=Laya.document.getElementById(this.rel);
					if(parent==null){
						Log.log("link file err:"+this.src+" parent:"+this.rel);
						return;
					}
					new HTMLLink(this.src,parent);
					return;
				case 'text/javascript':
				case 'text/script':
					this.src && Method.execScript((new FileRead(this.src)).load(),this.src);
					return;
				}
		}

		__proto__._onload_=function(__args){
			var args=arguments;
			this.complete=true;
			if (!this._parent_)return;
			Log.log("load ok:"+this.src);
			if(this._parent_._parentsHasThisTag_('head'))
				this._parent_._checkAllComplete_();
			else this._onComplete_();
		}

		DEFUNENUMPTY$(__proto__,'_$set_href',function(url){
			this.src=url;
		});

		Object.defineProperty(__proto__,'href',{set:__proto__._$set_href,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_src',function(){
			return this._url_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_src',function(url){
			this.complete=false;
			if (url.charAt(0)=='/' || this._parent_){
				url=this.formatUrl(url);
				if (this._url_==url)return;{
					this._url_=url;
					if (this.type=="image"){
						var img=Browser.document.createElement('image');
						img.onload=iflash.method.bind(this,this._onload_);
						img.src=url;
					}
					else new FileRead(url,{onload:BIND$(this,this._onload_),reader:this });
				}
			}
			else{
				trace("err:link must use parent!!!");
			}
		});

		Object.defineProperty(__proto__,'src',{get:__proto__._$get_src,set:__proto__._$set_src,enumerable:false});
		HTMLLinkElement._linkfiles_=[];
		return HTMLLinkElement;
	})(Node)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmltitleelement.as=======10097.999567
	var HTMLTitleElement=iflash.laya.dom.HTMLTitleElement=(function(_super){
		function HTMLTitleElement(){
			_super.apply(this,arguments);
		}

		REGCLASS$(HTMLTitleElement,'iflash.laya.dom.HTMLTitleElement',true,false,_super);
		var __proto__=HTMLTitleElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$set_nodeValue',function(value){
			Browser.window.title=value;
		});

		Object.defineProperty(__proto__,'nodeValue',{get:_super.prototype._$get_nodeValue,set:__proto__._$set_nodeValue,enumerable:false});
		return HTMLTitleElement;
	})(Node)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/filters/glowfilter.as=======10097.999533
	var GlowFilter=iflash.filters.GlowFilter=(function(_super){
		function GlowFilter(in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout){
			(in_color===void 0)&& (in_color=0);
			(in_alpha===void 0)&& (in_alpha=1.0);
			(in_blurX===void 0)&& (in_blurX=6.0);
			(in_blurY===void 0)&& (in_blurY=6.0);
			(in_strength===void 0)&& (in_strength=1.0);
			(in_quality===void 0)&& (in_quality=1);
			(in_inner===void 0)&& (in_inner=false);
			(in_knockout===void 0)&& (in_knockout=false);
			_super.call(this,0,0,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,false);
		}

		REGCLASS$(GlowFilter,'iflash.filters.GlowFilter',true,false,_super);
		return GlowFilter;
	})(DropShadowFilter)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/xml/htmlcompile.as=======10097.999448
	var HTMLCompile=iflash.laya.xml.HTMLCompile=(function(_super){
		function HTMLCompile(source,parent,uri){
			_super.call(this,source,parent,uri);
		}

		REGCLASS$(HTMLCompile,'iflash.laya.xml.HTMLCompile',true,false,_super);
		var __proto__=HTMLCompile.prototype;
		__proto__.createElement=function(name,type,value,parent){
			return new XMLCompileNode(this,type,value);
		}

		return HTMLCompile;
	})(XMLDocument)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/xml/htmldocument.as=======10097.999446
	var HTMLDocument=iflash.laya.xml.HTMLDocument=(function(_super){
		function HTMLDocument(source,parent,uri,onParseed){
			this.onParseed=null;
			this.parent=null;
			var _$this=this;
			this.parent=parent?parent:Laya.document.body;
			uri=uri==null?this.parent.baseURI:uri;
			this.parent.baseURI=uri;
			_super.call(this,null,null,uri);
			if (source==null)return;
			this.onParseed=onParseed;
			source=HTMLDocument.pretreatmentXMl(source);
			if (source.substring(0,5)!="<html"){
				this.parseXML(source,parent);
				if (onParseed!=null)onParseed.call(this);
				return;
			};
			var bodyHTML=StringMethod.subString(source,"<body","</body>");
			if (bodyHTML !=null){
				var offse=bodyHTML.indexOf('>');
				if (offse > 1){
					bodyHTML="<to.body "+bodyHTML.substring(0,offse)+"/>"+bodyHTML.substring(offse+1,bodyHTML.length);
				}
				else bodyHTML=bodyHTML.substring(offse+1,bodyHTML.length);
			};
			var headHTML=StringMethod.subString(source,"<head>","</head>");
			if(headHTML!=null){
				var head=Laya.document.head.appendChild ("head");
				head.baseURI=uri;
				head.onComplete=function (){
					_$this._parseBody_(bodyHTML);
					bodyHTML=null;
				}
				head.complete=false;
				this.parseXML(headHTML,head);
				head.complete=true;
				head._checkAllComplete_();
				headHTML=null;
			}
			else this._parseBody_(bodyHTML);
			return;
		}

		REGCLASS$(HTMLDocument,'iflash.laya.xml.HTMLDocument',true,false,_super);
		var __proto__=HTMLDocument.prototype;
		__proto__.createElement=function(name,type,value,parent){
			return Laya.document.createElement(name);
		}

		__proto__._parseBody_=function(source){
			this.parseXML(source,this.parent);
			if (this.onParseed !=null)this.onParseed();
		}

		__proto__._setNodeValue_=function(node,value){
			value=HTMLDocument.decodeHtml(value);
			node.nodeValue=value;
		}

		HTMLDocument.decodeHtml=function(html){
			return html.replace(HTMLDocument.regHtmlDecode,function(__args){
				var args=arguments;
				var c=HTMLDocument._htmlDeCode_[args[0]];
				if (c==null){
					if (!isNaN(args[1]))c=String.fromCharCode((args[1]==160)?32:args[1]);
					else c=args[0];
				}
				return c;
			});
		}

		HTMLDocument.pushTextToCahce=function(txt){
			HTMLDocument.__cacheText__[""+HTMLDocument.__cacheTextLastId__]=txt;
			return HTMLDocument.__cacheTextLastId__++;
		}

		HTMLDocument.getTextFromeCache=function(id){
			return HTMLDocument.__cacheText__[id];
		}

		HTMLDocument.pretreatmentXMl=function(text){
			text=StringMethod.strTrim(text);
			var ftxt=[],i=0,eindex=0;
			var arr,tempifdef;
			while ((arr=HTMLDocument._ifdef.exec(text))!=null){
				tempifdef="<ifdef condition='"+arr[1]+"' valuewithsid='"+HTMLDocument.pushTextToCahce(arr[2])+"'></ifdef>";
				text=text.substring(0,arr["index"])+tempifdef+text.substring(HTMLDocument._ifdef.lastIndex);
				HTMLDocument._ifdef.lastIndex=arr["index"]+tempifdef.length;
			}
			if (text==null || text=="")return "";
			text=text.replace(HTMLDocument._comments,"");
			var xtext=text,data="",type="",estr="";
			while(true){
				if ((i=xtext.search(HTMLDocument.__htmlFormat__))< 0)break ;
				type=xtext.substring(i,i+4);
				estr=HTMLDocument.__htmlendwords__[type];
				eindex=xtext.indexOf(estr,i+4);
				if (eindex < 0)eindex=xtext.length;
				i=xtext.indexOf('>',i+4);
				data=xtext.substring(i+1,eindex);
				if(data.length>0){
					if (StringMethod.replaceBlankChar(data,'')!=""){
						ftxt.push(xtext.substring(0,i));
						ftxt.push(" valuewithsid='"+HTMLDocument.pushTextToCahce(data)+"'/>");
					}
					else ftxt.push(xtext.substring(0,eindex));
				}
				else
				ftxt.push(xtext.substring(0,eindex-1)+"/>");
				if (eindex==xtext.length){
					break ;
				}
				xtext=xtext.substring(eindex+estr.length,xtext.length);
			}
			ftxt.push(xtext);
			return ftxt.join("");
		}

		HTMLDocument.toHTML=function(parent,inlcudeSelf,marginCount,strs){
			(marginCount===void 0)&& (marginCount=0);
			var spaceStr=StringMethod.nChar('\t',marginCount),childs=parent.childNodes,node,i=0,sz=0;
			strs=strs==null?[]:strs;
			if (inlcudeSelf){
				strs.push(spaceStr+"<"+parent.toHtmlString());
				if(childs.length==0){
					if (parent.nodeValue && parent.nodeValue.length>0){
						strs.push(">"+parent.nodeValue+"</"+parent.nodeName+">\n");
					}
					else strs.push("/>\n");
					return strs;
				}
				strs.push(">");
				if (parent.nodeValue)strs.push(parent.nodeValue);
				strs.push("\n");
			}
			for (i=0,sz=childs.length;i < sz;i++){
				node=childs [i];
				if (node==null || node.deleted)continue ;
				HTMLDocument.toHTML(node,true,marginCount+1,strs);
			}
			inlcudeSelf && (strs.push(spaceStr+"</"+parent.nodeName+">\n"));
			return strs;
		}

		HTMLDocument.__cacheText__=[];
		HTMLDocument.__cacheTextLastId__=1;
		REGSTATICATTR$(HTMLDocument,
		['_comments',function(){return this._comments=new RegExp("<!--[\\s\\S]*?-->","g");
			},'__regexArray__',function(){return this.__regexArray__=["<script","<style","<code","<assembly","<loop","<ifdef","<importonce"].join(")|(");
			},'__htmlFormat__',function(){return this.__htmlFormat__=new RegExp("("+HTMLDocument.__regexArray__+")",'g');
			},'__htmlendwords__',function(){return this.__htmlendwords__={"<scr":"</script>","<sty":"</style>","<!--":"-->",
				"<cod":"</code>","<ass":"</assembly>",
				"<loo":"</loop>","<ifd":"</ifdef>","<imp":"</importonce>"
			};
			},'_htmlDeCode_',function(){return this._htmlDeCode_={
				"&lt;":"<",
				"&gt;":">",
				"&nbsp;":" ",
				"&amp;":"&",
				"&quot;":"\"",
				"&copy;":"?"
			};
			},'regHtmlDecode',function(){return this.regHtmlDecode=new RegExp("&\\w+;|&#(\\d+);","g");
			},'regHtmlEncode',function(){return this.regHtmlEncode=new RegExp("\"|&|'|<|>|[\\x00-\\x20]|[\\x7F-\\xFF]|[\\u0100-\\u2700]","g");
		},'_ifdef',function(){return this._ifdef=new RegExp("<!--\\s*\\[if\\s+(\\w+)\\s*\\]\\s*>([\\s\\S]*?)<!\\[endif\\]\\s*-->","g");}

		]);
		return HTMLDocument;
	})(XMLDocument)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/displayobjectcontainer.as=======10096.999982
	var DisplayObjectContainer=iflash.display.DisplayObjectContainer=(function(_super){
		function DisplayObjectContainer(){
			this._childs_=EventDispatcher.__NULLARRAY__;
			_super.call(this);this._type_|=0x20;
		}

		REGCLASS$(DisplayObjectContainer,'iflash.display.DisplayObjectContainer',true,false,_super);
		var __proto__=DisplayObjectContainer.prototype;
		__proto__.addChild=function(c){
			if(c==null)
				throw new Error("添加的显示对象不能为空");
			if(c._parent_!=null){
				if (c._parent_==this){
					var pre=this.childIndexOf(c);
					this.lyRemoveChildAt(pre);
				}
				else c._parent_.removeChild(c);
			}
			this._childs_==EventDispatcher.__NULLARRAY__ && (this._childs_=[],Laya.RENDERBYCANVAS && (this._type_&0x8)==0 && DrawChilds.insertUnit(this),this._type_|=0x8);
			Method.insert(this._childs_,this._childs_.length,c);
			this._modle_ && this._modle_.insert(c._modle_,this._childs_.length-1,this._childs_.length);
			c._parent_=this;
			if(this.root==Stage.stage)c._lyToBody_();
			this._type_|=0x4000;
			return c;
		}

		__proto__.swapAt=function(frome,to){
			if (frome >=0 && to >=0 && frome!=to){
				var fromeNode=this._childs_[frome];
				var toNone=this._childs_[to];
				this._childs_[frome]=toNone;
				this._childs_[to]=fromeNode;
				var tmp=toNone._id_;
				toNone._id_=fromeNode._id_;
				fromeNode._id_=tmp;
				this._modle_ && this._modle_.swap(fromeNode._modle_,toNone._modle_);
			}
		}

		__proto__.childIndexOf=function(child){
			return this._childs_.indexOf(child);
		}

		__proto__.addChildAt=function(c,index){
			if(!c)return null;
			if (c.deleted==true)return c;
			if(c._parent_!=null){
				if (c._parent_==this){
					var pre=this.childIndexOf(c);
					if (index==pre)return c;
					this.lyRemoveChildAt(pre);
				}else c._parent_.removeChild(c);
			}
			this._childs_==EventDispatcher.__NULLARRAY__ && (this._childs_=[],Laya.RENDERBYCANVAS && (this._type_&0x8)==0 && DrawChilds.insertUnit(this),this._type_|=0x8);
			Method.insert(this._childs_,index,c);this._firstDisplayUnit_
			c._parent_=this;
			if(this.root==Stage.stage)c._lyToBody_();
			c._modle_ && this._modle_ && this._modle_.insert(c._modle_,index,this._childs_.length);
			this._type_|=0x4000;
			return c;
		}

		__proto__.getObjectsUnderPoint=function(point){
			Log.unfinished("DisplayObjectContainer","getObjectsUnderPoint");
			return null;
		}

		__proto__.removeChildAt=function(index){
			return this.lyRemoveChildAt (index);
		}

		__proto__.lyRemoveChildAt=function(index){
			if (index < 0)return this;
			var c=this._childs_[index];
			if(this.root==Stage.stage)c._lyUnToBody_();
			c._parent_=null;
			this._childs_.splice(index,1);
			this._modle_ && this._modle_.removeAt(index,c._modle_,this._childs_.length);
			if(Laya.document.activeElement&&Laya.document.activeElement.__owner__.root!=this.stage)
			{Laya.document.activeElement.blur();Laya.document.activeElement=null;}
			return c;
		}

		__proto__.removeChild=function(c){
			this._type_|=0x4000;
			return this.lyRemoveChildAt(this.childIndexOf(c));
		}

		__proto__.getChildAt=function(index){
			return this._childs_[index];
		}

		__proto__.sortChildsByZIndex=function(){
			this.sortChildren(BIND$(this,this._sort_));
		}

		__proto__._getBounds_=function(targetSpace,resultRect){
			if(!targetSpace)targetSpace=this;
			var p=DisplayObject.HELPER_POINT;
			if (resultRect==null)resultRect=new Rectangle();
			var numChildren=this._childs_.length;
			if (numChildren==0){
				DisplayObject.HELPER_MATRIX.identity();
				DisplayObject.HELPER_POINT.identity();
				this.getTransformMatrix(this,DisplayObject.HELPER_MATRIX);
				MatrixUtil.transformCoords(DisplayObject.HELPER_MATRIX,0.0,0.0,DisplayObject.HELPER_POINT);
				resultRect.setTo(DisplayObject.HELPER_POINT.x,DisplayObject.HELPER_POINT.y,0,0);
			}
			else if (numChildren==1){
				var child=this._childs_[0];
				if(child.visible){
					child._getBounds_(this,resultRect);
					resultRect.setTo(resultRect.x,resultRect.y,resultRect.width,resultRect.height);
				}
				else resultRect.setTo(0,0,0,0);
			}
			else{
				var minX=Number.MAX_VALUE,maxX=-Number.MAX_VALUE;
				var minY=Number.MAX_VALUE,maxY=-Number.MAX_VALUE;
				for (var i=0;i<numChildren;++i){
					child=(this._childs_[i]);
					var r=DisplayObject.HELPER_RECTANGLET.setTo(0,0,0,0);
					if(child.visible)
						child._getBounds_(this,r);
					else continue ;
					if (minX > r.x)minX=r.x;
					if (maxX < r.right)maxX=r.right;
					if (minY > r.y)minY=r.y;
					if (maxY < r.bottom)maxY=r.bottom;
				}
				resultRect.setTo(minX,minY,maxX-minX,maxY-minY);
			}
			p=targetSpace.globalToLocal(this.localToGlobal(new Point(resultRect.x,resultRect.y)));
			resultRect.setTo(p.x,p.y,resultRect.width,resultRect.height);
			if(resultRect.width<0){
				resultRect.x-=resultRect.width;
				resultRect.width=Math.abs(resultRect.width);
			}
			if(resultRect.height<0){
				resultRect.y-=resultRect.height;
				resultRect.height=Math.abs(resultRect.height);
			}
			return resultRect;
		}

		__proto__._hitTest_=function(x,y,forTouch,mouseDown){
			(forTouch===void 0)&& (forTouch=false);
			(mouseDown===void 0)&& (mouseDown=false);
			if (forTouch && (!this.visible || !this.mouseEnabled))return null;
			var target=null,shpas=[],i=0,child,numChildren=this._childs_.length;
			for (i=numChildren-1;i>=0;--i){
				child=this._childs_[i];
				if((child instanceof iflash.display.Shape )){shpas.push(child);continue ;}
					this.getTransformMatrix(child,DisplayObject.HELPER_MATRIX);
				MatrixUtil.transformCoords(DisplayObject.HELPER_MATRIX,x,y,DisplayObject.HELPER_POINT);
				target=child._hitTest_(DisplayObject.HELPER_POINT.x,DisplayObject.HELPER_POINT.y,forTouch,mouseDown);
				if(target)break ;
			}
			if(target)return (forTouch && !this.mouseChildren)||(!this.mouseEnabled)? this :target;
			numChildren=shpas.length;
			for(i=0;i<numChildren;++i){
				child=shpas[i];
				this.getTransformMatrix(child,DisplayObject.HELPER_MATRIX);
				MatrixUtil.transformCoords(DisplayObject.HELPER_MATRIX,x,y,DisplayObject.HELPER_POINT);
				target=child._hitTest_(DisplayObject.HELPER_POINT.x,DisplayObject.HELPER_POINT.y,forTouch,mouseDown);
				if(target)return this;
			}
			return null;
		}

		__proto__.setChildIndex=function(child,index){this.addChildAt(child,index);}
		__proto__.getChildIndex=function(child){return this._childs_.indexOf(child);}
		__proto__._sort_=function(a,b){
			return a._to_sort_d-b._to_sort_d;
		}

		__proto__.getChildByName=function(value){
			var child;
			/*for each*/for(var $each_child in this._childs_){
				child=this._childs_[$each_child];
				if(child.name==value)return child;
			}
			return null;
		}

		__proto__.sortChildren=function(keyOrFunction){
			if((this._type_&0x4000)==0)return;
			var f=keyOrFunction,key;
			if (typeof (f)=="string"){
				key=f;
				f=function (a,b){
					return b[key]-a[key];
				};
			}
			this._childs_.sort(f);
			this._type_&=~0x4000
		}

		__proto__.swapChildrenAt=function(index1,index2){
			var c=this._childs_[index1];
			this._childs_[index1]=this._childs_[index2];
			this._childs_[index2]=c;
			this._type_|=0x4000;
		}

		__proto__.swapChildren=function(child1,child2){
			var index1=this._childs_.indexOf(child1);
			var index2=this._childs_.indexOf(child2);
			this.swapChildrenAt(index1,index2);
		}

		__proto__._lyToBody_=function(){
			this.dispatchAdd(this);
			iflash.display.DisplayObject.prototype._lyToBody_.call(this);
		}

		__proto__.dispatchAdd=function(child){
			var len=child._childs_.length;
			var i=0;
			while(i<len)
			{child._childs_[i]._lyToBody_();i++;}
		}

		__proto__._lyUnToBody_=function(){
			this.dispatchUnAdd(this);
			iflash.display.DisplayObject.prototype._lyUnToBody_.call(this);
		}

		__proto__.dispatchUnAdd=function(child){
			var len=child._childs_.length;
			var i=0;
			while(i<len)
			{child._childs_[i]._lyUnToBody_();i++;}
		}

		__proto__.contains=function(child){
			if(this._childs_==null){
				return false;
			};
			var result={flag:false};
			this.checkContainsByChild(this,child,result);
			return result.flag;
		}

		__proto__.checkContainsByChild=function(display,child,result){
			if(display==child){
				result.flag=true;
				return;
			}
			if((display instanceof iflash.display.DisplayObjectContainer )){
				var box=display;
				for (var i=0,n=box._childs_.length;i <n;i++){
					this.checkContainsByChild(box._childs_[i],child,result);
				}
			}
		}

		__proto__.removeChildren=function(beginIndex,endIndex){
			(beginIndex===void 0)&& (beginIndex=0);
			(endIndex===void 0)&& (endIndex=2147483647);
			while(endIndex>=beginIndex){
				this.lyRemoveChildAt(endIndex);
				endIndex--;
			}
		}

		DEFUNENUMPTY$(__proto__,'_$get_numChildren',function(){
			return this._childs_.length;
		});

		Object.defineProperty(__proto__,'numChildren',{get:__proto__._$get_numChildren,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_tabChildren',function(){return false});
		DEFUNENUMPTY$(__proto__,'_$set_tabChildren',function(param1){});
		Object.defineProperty(__proto__,'tabChildren',{get:__proto__._$get_tabChildren,set:__proto__._$set_tabChildren,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mouseChildren',function(){
			return (this._type_&0x20)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mouseChildren',function(value){
			if(value)
				this._type_|=0x20;
			else
			this._type_&=~0x20;
		});

		Object.defineProperty(__proto__,'mouseChildren',{get:__proto__._$get_mouseChildren,set:__proto__._$set_mouseChildren,enumerable:false});
		return DisplayObjectContainer;
	})(InteractiveObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/textfield.as=======10096.999646
	var TextField1=iflash.text.TextField=(function(_super){
		function TextField(){
			this._selectAble_=false;
			this.__text__=null;
			this._maxChars_=0;
			this._useRichTextClipboard=false;
			_super.call(this);
			this.__text__=new Text(this);
			this._modle_.insert(this.__text__._modle_,0,1);
			Laya.RENDERBYCANVAS && DrawText.insertUnit(this);
			this._selectAble_=false;
			this.__text__.typesetting();
			this.width=this.height=100;
			this.mouseEnabled=true;
		}

		REGCLASS$(TextField,'iflash.text.TextField',true,false,_super,'TextField1');
		var __proto__=TextField.prototype;
		__proto__.appendText=function(newText){this.__text__.appendText(newText);}
		__proto__.inputChange=function(e){
			this.dispatchEvent(new TextEvent(/*iflash.events.TextEvent.TEXT_INPUT*/"textInput" ,true,true,Browser.input.value));
			this.dispatchEvent(new Event(/*iflash.events.Event.CHANGE*/"change",true,true));
		}

		__proto__._onmousedown_=function(e){
			if(this.__text__.focus)return;
			this.__text__.focus=true;
			if(this.stage.focus==this)return;
			if((this.stage.focus instanceof iflash.text.TextField )){
				(this.stage.focus).dispatchEvent(new FocusEvent(/*iflash.events.FocusEvent.MOUSE_FOCUS_CHANGE*/"mouseFocusChange"));
				(this.stage.focus).dispatchEvent(new FocusEvent(/*iflash.events.FocusEvent.FOCUS_OUT*/"focusOut"));
				this.stage.removeEventListener(/*iflash.events.KeyboardEvent.KEY_DOWN*/"keyDown",BIND$(this,this._onkeydown_));
			}
			this.stage.addEventListener(/*iflash.events.KeyboardEvent.KEY_DOWN*/"keyDown",BIND$(this,this._onkeydown_));
			this.dispatchEvent(new FocusEvent(/*iflash.events.FocusEvent.FOCUS_IN*/"focusIn"));
			this.stage.focus=this;
		}

		__proto__._onkeydown_=function(e){
			if(e.keyCode !=/*iflash.ui.Keyboard.TAB*/9)return;
			var nextText=this.findNextTextField();
			nextText.__text__.focus=true;
			if((this.stage.focus instanceof iflash.text.TextField )){
				(this.stage.focus).dispatchEvent(new FocusEvent(/*iflash.events.FocusEvent.KEY_FOCUS_CHANGE*/"keyFocusChange"));
				(this.stage.focus).dispatchEvent(new FocusEvent(/*iflash.events.FocusEvent.FOCUS_OUT*/"focusOut"));
				this.stage.removeEventListener(/*iflash.events.KeyboardEvent.KEY_DOWN*/"keyDown",BIND$(this,this._onkeydown_));
			}
			this.stage.addEventListener(/*iflash.events.KeyboardEvent.KEY_DOWN*/"keyDown",BIND$(this,this._onkeydown_));
			nextText.dispatchEvent(new FocusEvent(/*iflash.events.FocusEvent.FOCUS_IN*/"focusIn"));
			this.stage.focus=nextText;
		}

		__proto__.findNextTextField=function(){
			var parentTexts=[];
			for (var i=0;i < this.parent.numChildren;i++){
				var isText=this.parent.getChildAt(i);
				if((isText instanceof iflash.text.TextField ))
					parentTexts.push(isText);
			}
			SortOn.sortOn(parentTexts,"x",/*iflash.method.SortOn.NUMERIC*/16);
			SortOn.sortOn(parentTexts,"y",/*iflash.method.SortOn.NUMERIC*/16);
			var chooseText=null;
			for (var j=0;j < parentTexts.length;j++){
				if(parentTexts[j].y==this.stage.focus.y && parentTexts[j].x>this.stage.focus.x){
					chooseText=parentTexts[j];
					break ;
					}else if(parentTexts[j].y > this.stage.focus.y){
					chooseText=parentTexts[j];
					break ;
				}
			}
			if(chooseText==null)
				chooseText=parentTexts[0];
			return chooseText
		}

		__proto__.setTextFormat=function(value,beginIndex,endIndex){
			(beginIndex===void 0)&& (beginIndex=-1);
			(endIndex===void 0)&& (endIndex=-1);
			this.__text__.setTextFormat(value);
		}

		__proto__.getTextFormat=function(beginIndex,endIndex){
			(beginIndex===void 0)&& (beginIndex=-1);
			(endIndex===void 0)&& (endIndex=-1);
			return this.__text__.getTextFormat();
		}

		__proto__._hitTest_=function(_x,_y,forTouch,mouseDown){
			(forTouch===void 0)&& (forTouch=false);
			(mouseDown===void 0)&& (mouseDown=false);
			return iflash.display.DisplayObject.prototype._hitTest_.call(this,_x,_y,forTouch,mouseDown);
		}

		__proto__.setSelection=function(param1,param2){}
		__proto__.lyclone=function(){
			var result=new TextField();
			result.wordWrap=this.wordWrap;
			result.multiline=this.multiline;
			result.height=this.height;
			result.width=this.width;
			result.textColor=0xff0000;
			result.type=this.type;
			result.__text__.tmpBounds=this.__text__.tmpBounds;
			result.type=this.type;
			result.__text__.pos(this.x,this.y);
			result.autoSize=this.autoSize;
			result.defaultTextFormat=this.defaultTextFormat;
			if(this.htmlText){
				result.htmlText=this.htmlText;
				}else{
				result.text=this.text;
			}
			result.__text__.size=this.__text__.size;
			result.__text__.textColor=this.__text__.textColor;
			return result;
		}

		__proto__.getCharBoundaries=function(charIndex){
			return null;
		}

		__proto__.getLineMetrics=function(lineIndex){
			return this.__text__.getLineMetrics(lineIndex);
		}

		__proto__.getLineIndexOfChar=function(charIndex){
			return 0;
		}

		__proto__.replaceText=function(beginIndex,endIndex,newText){
			var te=this.text;
			this.text=te.slice(0,beginIndex)+newText+te.slice(endIndex);
		}

		__proto__.getLineOffset=function(param1){
			this.__text__.getLineOffset(param1);
			return 0;
		}

		__proto__.getLineLength=function(param1){
			this.__text__.getLineLength(param1);
			return 0;
		}

		__proto__.getCharIndexAtPoint=function(param1,param2){
			return this.__text__.getCharIndexAtPoint(param1,param2);
		}

		__proto__.getLineText=function(param1){
			return this.__text__.getLineText(param1);
		}

		DEFUNENUMPTY$(__proto__,'_$get_border',function(){return false});
		DEFUNENUMPTY$(__proto__,'_$set_border',function(value){value?this.__text__.htmlBorder="black":this.__text__.htmlBorder="none"});
		Object.defineProperty(__proto__,'border',{get:__proto__._$get_border,set:__proto__._$set_border,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_embedFonts',function(){return this.__text__.embedFonts;});
		DEFUNENUMPTY$(__proto__,'_$set_embedFonts',function(value){this.__text__.embedFonts=value;});
		Object.defineProperty(__proto__,'embedFonts',{get:__proto__._$get_embedFonts,set:__proto__._$set_embedFonts,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_text',function(){return this.__text__.text;});
		DEFUNENUMPTY$(__proto__,'_$set_text',function(value){if(value!=this.__text__.text)this.__text__.text=value;});
		Object.defineProperty(__proto__,'text',{get:__proto__._$get_text,set:__proto__._$set_text,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textWidth',function(){return this.__text__.textWidth});
		Object.defineProperty(__proto__,'textWidth',{get:__proto__._$get_textWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_htmlText',function(){return this.__text__.htmlText;});
		DEFUNENUMPTY$(__proto__,'_$set_htmlText',function(value){this.__text__.htmlText=value;});
		Object.defineProperty(__proto__,'htmlText',{get:__proto__._$get_htmlText,set:__proto__._$set_htmlText,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textColor',function(){return uint(this.__text__.textColor)});
		DEFUNENUMPTY$(__proto__,'_$set_textColor',function(value){this.__text__.textColor=value});
		Object.defineProperty(__proto__,'textColor',{get:__proto__._$get_textColor,set:__proto__._$set_textColor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_wordWrap',function(){return this.__text__.wordWrap});
		DEFUNENUMPTY$(__proto__,'_$set_wordWrap',function(value){this.__text__.wordWrap=value});
		Object.defineProperty(__proto__,'wordWrap',{get:__proto__._$get_wordWrap,set:__proto__._$set_wordWrap,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_autoSize',function(){return this.__text__.autoSize});
		DEFUNENUMPTY$(__proto__,'_$set_autoSize',function(value){this.__text__.autoSize=value});
		Object.defineProperty(__proto__,'autoSize',{get:__proto__._$get_autoSize,set:__proto__._$set_autoSize,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_displayAsPassword',function(){return false});
		DEFUNENUMPTY$(__proto__,'_$set_displayAsPassword',function(value){this.__text__.displayAsPassword=value});
		Object.defineProperty(__proto__,'displayAsPassword',{get:__proto__._$get_displayAsPassword,set:__proto__._$set_displayAsPassword,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_multiline',function(){return this.__text__.multiline});
		DEFUNENUMPTY$(__proto__,'_$set_multiline',function(value){this.__text__.multiline=value});
		Object.defineProperty(__proto__,'multiline',{get:__proto__._$get_multiline,set:__proto__._$set_multiline,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textHeight',function(){return this.__text__.textHeight});
		Object.defineProperty(__proto__,'textHeight',{get:__proto__._$get_textHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_type',function(){return this.__text__.type});
		DEFUNENUMPTY$(__proto__,'_$set_type',function(value){
			switch(value){
				case /*iflash.text.TextFieldType.INPUT*/"input":
					this.addEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",BIND$(this,this._onmousedown_));
					if(!Laya.CONCHVER){
						Browser.input.addEventListener(/*iflash.events.TextEvent.TEXT_INPUT*/"textInput",BIND$(this,this.inputChange),false);
					}
					break ;
				default :
					if (this.__text__.type==/*iflash.text.TextFieldType.INPUT*/"input"){
						this.removeEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",BIND$(this,this._onmousedown_));
					}
				}
			this.__text__.type=value;
		});

		Object.defineProperty(__proto__,'type',{get:__proto__._$get_type,set:__proto__._$set_type,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_width',function(){
			return this.__text__.autoSize!=/*iflash.text.TextFieldAutoSize.NONE*/"none"?this.__text__.width:this._width_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			if(this.__text__.autoSize!=/*iflash.text.TextFieldAutoSize.NONE*/"none")
			{return;}
			_super.prototype._$set_width.call(this,this.__text__.width=this._width_=w);
		});

		Object.defineProperty(__proto__,'width',{get:__proto__._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_height',function(){
			return this.__text__.autoSize!=/*iflash.text.TextFieldAutoSize.NONE*/"none"?this.__text__.height:this._height_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			if(this.__text__.autoSize!=/*iflash.text.TextFieldAutoSize.NONE*/"none")
			{return;}
			_super.prototype._$set_height.call(this,this.__text__.height=this._height_=h);
		});

		Object.defineProperty(__proto__,'height',{get:__proto__._$get_height,set:__proto__._$set_height,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_selectable',function(){return this._selectAble_;});
		DEFUNENUMPTY$(__proto__,'_$set_selectable',function(value){this._selectAble_=value});
		Object.defineProperty(__proto__,'selectable',{get:__proto__._$get_selectable,set:__proto__._$set_selectable,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_defaultTextFormat',function(){return this.__text__.defaultTextFormat});
		DEFUNENUMPTY$(__proto__,'_$set_defaultTextFormat',function(value){this.__text__.defaultTextFormat=value});
		Object.defineProperty(__proto__,'defaultTextFormat',{get:__proto__._$get_defaultTextFormat,set:__proto__._$set_defaultTextFormat,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_borderColor',function(){return 0});
		DEFUNENUMPTY$(__proto__,'_$set_borderColor',function(value){});
		Object.defineProperty(__proto__,'borderColor',{get:__proto__._$get_borderColor,set:__proto__._$set_borderColor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollH',function(){return 1});
		DEFUNENUMPTY$(__proto__,'_$set_scrollH',function(value){});
		Object.defineProperty(__proto__,'scrollH',{get:__proto__._$get_scrollH,set:__proto__._$set_scrollH,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollV',function(){return 1});
		DEFUNENUMPTY$(__proto__,'_$set_scrollV',function(value){});
		Object.defineProperty(__proto__,'scrollV',{get:__proto__._$get_scrollV,set:__proto__._$set_scrollV,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_useRichTextClipboard',function(){
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_useRichTextClipboard',function(value){
			value=this._useRichTextClipboard;
		});

		Object.defineProperty(__proto__,'useRichTextClipboard',{get:__proto__._$get_useRichTextClipboard,set:__proto__._$set_useRichTextClipboard,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxScrollH',function(){return-1});
		Object.defineProperty(__proto__,'maxScrollH',{get:__proto__._$get_maxScrollH,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxScrollV',function(){return-1});
		Object.defineProperty(__proto__,'maxScrollV',{get:__proto__._$get_maxScrollV,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_antiAliasType',function(){return ""});
		DEFUNENUMPTY$(__proto__,'_$set_antiAliasType',function(value){});
		Object.defineProperty(__proto__,'antiAliasType',{get:__proto__._$get_antiAliasType,set:__proto__._$set_antiAliasType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_background',function(){return false});
		DEFUNENUMPTY$(__proto__,'_$set_background',function(value){this.__text__.background=value});
		Object.defineProperty(__proto__,'background',{get:__proto__._$get_background,set:__proto__._$set_background,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_backgroundColor',function(){return 0});
		DEFUNENUMPTY$(__proto__,'_$set_backgroundColor',function(value){this.__text__.backgroundColor=value});
		Object.defineProperty(__proto__,'backgroundColor',{get:__proto__._$get_backgroundColor,set:__proto__._$set_backgroundColor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_caretIndex',function(){
			return 0;
		});

		Object.defineProperty(__proto__,'caretIndex',{get:__proto__._$get_caretIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_restrict',function(){
			return this.__text__.restrict;
		});

		DEFUNENUMPTY$(__proto__,'_$set_restrict',function(value){
			this.__text__.restrict=value;
		});

		Object.defineProperty(__proto__,'restrict',{get:__proto__._$get_restrict,set:__proto__._$set_restrict,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxChars',function(){
			return this._maxChars_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_maxChars',function(value){
			Browser.input.maxLength=value;
			this._maxChars_=value;
		});

		Object.defineProperty(__proto__,'maxChars',{get:__proto__._$get_maxChars,set:__proto__._$set_maxChars,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_numLines',function(){return this.__text__.numLines});
		Object.defineProperty(__proto__,'numLines',{get:__proto__._$get_numLines,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_length',function(){return 1});
		Object.defineProperty(__proto__,'length',{get:__proto__._$get_length,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_selectionBeginIndex',function(){
			return 0;
		});

		Object.defineProperty(__proto__,'selectionBeginIndex',{get:__proto__._$get_selectionBeginIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_selectionEndIndex',function(){
			return 0;
		});

		Object.defineProperty(__proto__,'selectionEndIndex',{get:__proto__._$get_selectionEndIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bottomScrollV',function(){
			return this.__text__.bottomScrollV;
		});

		Object.defineProperty(__proto__,'bottomScrollV',{get:__proto__._$get_bottomScrollV,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mouseWheelEnabled',function(){
			return this.__text__.mouseWheelEnabled;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mouseWheelEnabled',function(param1){
			this.__text__.mouseWheelEnabled=param1;
		});

		Object.defineProperty(__proto__,'mouseWheelEnabled',{get:__proto__._$get_mouseWheelEnabled,set:__proto__._$set_mouseWheelEnabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_styleSheet',function(){
			return this.__text__.styleSheet;
		});

		DEFUNENUMPTY$(__proto__,'_$set_styleSheet',function(param1){
			this.__text__.styleSheet=param1;
		});

		Object.defineProperty(__proto__,'styleSheet',{get:__proto__._$get_styleSheet,set:__proto__._$set_styleSheet,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_condenseWhite',function(){
			return this.__text__.condenseWhite;
		});

		DEFUNENUMPTY$(__proto__,'_$set_condenseWhite',function(param1){
			this.__text__.condenseWhite=param1;
		});

		Object.defineProperty(__proto__,'condenseWhite',{get:__proto__._$get_condenseWhite,set:__proto__._$set_condenseWhite,enumerable:false});
		REGSTATICATTR$(TextField,
		['richTextFields',function(){return this.richTextFields=["font","size","color","bold","italic","underline","url","target","align","leftMargin","rightMargin","indent","leading","blockIndent","kerning","letterSpacing","display"];}
		]);
		return TextField;
	})(InteractiveObject)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/flashdisplay.as=======10096.999374
	var FlashDisplay=iflash.laya.dom.FlashDisplay=(function(_super){
		function FlashDisplay(){
			this._displayobjectcontainer_=null;
			_super.call(this);
			this._style_.block=true;
			this._style_._type_ |=/*iflash.laya.css.CSSStyle.CSS_BREAK*/0x200000;
		}

		REGCLASS$(FlashDisplay,'iflash.laya.dom.FlashDisplay',true,false,_super);
		var __proto__=FlashDisplay.prototype;
		__proto__._lyPaint_=function(context,x,y){
			var s;
			++EventDispatcher.document.drawObjectCount;
			(s=this._style_)
			this._displayobjectcontainer_._lyPaint_(context,x+s._left_+s._margin_.left,y+s._top_+s._margin_.top);
		}

		DEFUNENUMPTY$(__proto__,'_$get_displayobjectcontainer',function(){
			return this._displayobjectcontainer_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_displayobjectcontainer',function(o){
			if (this._displayobjectcontainer_ !=o){
				this._displayobjectcontainer_=o;
				this._modle_.destroyAllChild();
				this._modle_.insert(o._modle_,0,1);
			}
		});

		Object.defineProperty(__proto__,'displayobjectcontainer',{get:__proto__._$get_displayobjectcontainer,set:__proto__._$set_displayobjectcontainer,enumerable:false});
		return FlashDisplay;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmldivelement.as=======10096.999370
	var HTMLDivElement=iflash.laya.dom.HTMLDivElement=(function(_super){
		function HTMLDivElement(){
			this._bitmapData_=null;
			_super.apply(this,arguments);
			this._style_.block=true;
			this._style_._type_|=/*iflash.laya.css.CSSStyle.CSS_BREAK*/0x200000;
		}

		REGCLASS$(HTMLDivElement,'iflash.laya.dom.HTMLDivElement',true,false,_super);
		var __proto__=HTMLDivElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_defaultNodeName',function(){
			return "div";
		});

		Object.defineProperty(__proto__,'defaultNodeName',{get:__proto__._$get_defaultNodeName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bitmapData',function(){
			return this._bitmapData_;
		});

		Object.defineProperty(__proto__,'bitmapData',{get:__proto__._$get_bitmapData,enumerable:false});
		return HTMLDivElement;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlcanvaselement.as=======10096.999369
	var HTMLCanvasElement=iflash.laya.dom.HTMLCanvasElement=(function(_super){
		function HTMLCanvasElement(){
			this._canvasType=null;
			_super.call(this);
		}

		REGCLASS$(HTMLCanvasElement,'iflash.laya.dom.HTMLCanvasElement',true,false,_super);
		var __proto__=HTMLCanvasElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_defaultNodeName',function(){
			return "canvas";
		});

		Object.defineProperty(__proto__,'defaultNodeName',{get:__proto__._$get_defaultNodeName,enumerable:false});
		return HTMLCanvasElement;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlcolorelement.as=======10096.999368
	var HTMLColorElement=iflash.laya.dom.HTMLColorElement=(function(_super){
		function HTMLColorElement(){
			_super.call(this);
		}

		REGCLASS$(HTMLColorElement,'iflash.laya.dom.HTMLColorElement',true,false,_super);
		var __proto__=HTMLColorElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_nodeValue',function(){
			return this.style.color;
		});

		DEFUNENUMPTY$(__proto__,'_$set_nodeValue',function(value){
			this.style.color=value;
		});

		Object.defineProperty(__proto__,'nodeValue',{get:__proto__._$get_nodeValue,set:__proto__._$set_nodeValue,enumerable:false});
		return HTMLColorElement;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlfontelement.as=======10096.999367
	var HTMLFontElement=iflash.laya.dom.HTMLFontElement=(function(_super){
		function HTMLFontElement(){
			_super.call(this);
		}

		REGCLASS$(HTMLFontElement,'iflash.laya.dom.HTMLFontElement',true,false,_super);
		var __proto__=HTMLFontElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_nodeValue',function(){
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_nodeValue',function(value){
		});

		Object.defineProperty(__proto__,'nodeValue',{get:__proto__._$get_nodeValue,set:__proto__._$set_nodeValue,enumerable:false});
		return HTMLFontElement;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlimageelement.as=======10096.999365
	var HTMLImageElement=iflash.laya.dom.HTMLImageElement=(function(_super){
		function HTMLImageElement(){
			this._image_=null;
			this._url_=null;
			_super.call(this);
			this._style_.isRect=true;
		}

		REGCLASS$(HTMLImageElement,'iflash.laya.dom.HTMLImageElement',true,false,_super);
		var __proto__=HTMLImageElement.prototype;
		__proto__._onload_=function(__args){
			var args=arguments;
			this.complete=true;
			if (Laya.HTMLVER&&!Laya.CONCHVER&&this._url_.indexOf(".jng")!=-1){
				this._image_=Method._JpgToPng(this._image_);
			}
			if (!this.style._sizebeset_()){
				var type=this._style_._type_;
				this._style_._type_|=/*iflash.laya.css.CSSStyle.CSS_WIDTH_NOSET*/0x80 | /*iflash.laya.css.CSSStyle.CSS_HEIGHT_NOSET*/0x100;
				this._style_.size(this.style._widthbeset_()?this._style_._width_:this._image_.width,this._style_._heightbeset_()?this._style_._height_:this._image_.height);
				this._style_._type_=type;
			}
			if (!this._parent_ || (this._parent_&&this._parent_.getStyle())){
				Laya.RENDERBYCANVAS ?DrawImg.insertUnit(this):this._modle_.image(this._image_.getContent());
			}
			else{
				this._parent_&&this._parent_._checkAllComplete_();
			}
			this.lyDispatchEvent(/*iflash.events.Event.COMPLETE*/"complete");
			this.repaint();
		}

		__proto__.onAddDocument=function(){
			iflash.laya.dom.Node.prototype.onAddDocument.call(this);
			if (!this._image_ && this._url_ && this._url_.length > 0){
				var url=this._url_;
				this._url_="";
				this.src=url;
			}
		}

		__proto__.cloneImage=function(){
			if (!this._image_)return;
			var newimg=this._image_.clone();
			if (this.style._sizebeset_()&& newimg._getType_()==1){
				newimg.rect(this.left,this.top,this.width,this.height);
			}
			return newimg;
		}

		__proto__.clone=function(){
			var img=new HTMLImageElement();
			img.image=this.image;
			img.style._width_=this.width;
			img.style._height_=this.height;
			if (!this.complete){
				this.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",iflash.method.bind(img._onload_,img));
			}
			else img._onload_();
			return img;
		}

		DEFUNENUMPTY$(__proto__,'_$get_defaultNodeName',function(){
			return "image";
		});

		Object.defineProperty(__proto__,'defaultNodeName',{get:__proto__._$get_defaultNodeName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_image',function(){
			return this._image_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_image',function(d){
			this._image_=d;
			this.complete=d.isReady();
			if (this.complete||d._getType_()==3){
				this._onload_();
			}
			else{
				d.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",BIND$(this,this._onload_));
			}
		});

		Object.defineProperty(__proto__,'image',{get:__proto__._$get_image,set:__proto__._$set_image,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_src',function(){
			return this._url_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_src',function(url){
			this.complete=false;
			if(url==null)return;
			if ((typeof url=='string')){
				if (url.charAt(0)=='/' || this.baseURI || url.indexOf('://')>0){
					url=this.formatUrl(url);
					if (this._url_==url)return;
					this._url_=url;
					var withimg=this.getElementById(url);
					if (withimg !=null && ((withimg instanceof iflash.laya.dom.HTMLImageElement ))){
						this.image=(withimg).cloneImage();
						if (!withimg.complete){
							withimg.lyAddEventListener(/*iflash.events.Event.COMPLETE*/"complete",BIND$(this,this._onload_));
						}
						else this._onload_();
						return;
					}
					this._image_=Browser.document.createElement('image');
					this._image_.onload=iflash.method.bind(this,this._onload_);
					this._image_.src=url;
				}
				else{
					this._url_=url;
					this._image_=null;
				}
			}
			else{
				this.image=url;
			}
		});

		Object.defineProperty(__proto__,'src',{get:__proto__._$get_src,set:__proto__._$set_src,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_srcbyid',function(id){
			this.src=Laya.document.getTextById(id);
		});

		Object.defineProperty(__proto__,'srcbyid',{set:__proto__._$set_srcbyid,enumerable:false});
		return HTMLImageElement;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlinputelement.as=======10096.999364
	var HTMLInputElement=iflash.laya.dom.HTMLInputElement=(function(_super){
		function HTMLInputElement(){
			this._readonly_=false;
			this._maxLength_=2147483647;
			this._wordType_=0;
			this._textType_="text";
			_super.call(this);
			this.addEventListener(/*iflash.events.MouseEvent.FOCUS*/"focus",BIND$(this,this._onfocus_));
			this.addEventListener(/*iflash.events.MouseEvent.BLUR*/"blur",BIND$(this,this._onblur_));
			this.addEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",BIND$(this,this._onmousedown_));
			this._style_.whiteSpace="nowrap";
			this._style_.overflow="hidden";
			this.addEventListener(/*iflash.events.KeyboardEvent.KEY_DOWN*/"keyDown",BIND$(this,this._keydown_));
		}

		REGCLASS$(HTMLInputElement,'iflash.laya.dom.HTMLInputElement',true,false,_super);
		var __proto__=HTMLInputElement.prototype;
		__proto__._keydown_=function(e){
			if (this.focus){
				this.text=Browser.input.value;
			}
		}

		__proto__._onfocus_=function(e){
			!this._readonly_&&HTMLInputElement.focusSystemInput(this,this._textType_,BIND$(this,this.inputRepos));
		}

		__proto__.getvalue=function(){
			return this._text_ ? this._text_.text :null;
		}

		__proto__.inputRepos=function(__args){
			var args=arguments;
			this.focus&&!this._readonly_&&this.inputRepos(this);
		}

		__proto__._onblur_=function(e){
			if (!this._readonly_){
				Browser.input.setPos(-10000,-10000);
				this.text=Browser.input.value;
				this._type2_ &=~0x100000;
				this._modle_.setHideText(false);
				this.repaint();
				Browser.input.value="";
			}
		}

		__proto__._onmousedown_=function(e){
			if(!this.focus)
				this.focus=true;
		}

		DEFUNENUMPTY$(__proto__,'_$set_text',function(txt){
			if (this._wordType_==HTMLInputElement.__INPUT_WORDTYPE_NUMBERS__){
				txt=parseFloat(txt);
				if(isNaN(txt))txt="0";
			}
			_super.prototype._$set_text.call(this,txt);
		});

		Object.defineProperty(__proto__,'text',{get:_super.prototype._$get_text,set:__proto__._$set_text,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_numberOnly',function(){
			return this._wordType_==HTMLInputElement.__INPUT_WORDTYPE_NUMBERS__;
		});

		DEFUNENUMPTY$(__proto__,'_$set_numberOnly',function(b){
			if (b)
				this._wordType_=HTMLInputElement.__INPUT_WORDTYPE_NUMBERS__;
		});

		Object.defineProperty(__proto__,'numberOnly',{get:__proto__._$get_numberOnly,set:__proto__._$set_numberOnly,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_type',function(){
			return this._textType_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_type',function(s){
			this._textType_=s;
			if (s=="password")
				this.style.setPassWord(true);
		});

		Object.defineProperty(__proto__,'type',{get:__proto__._$get_type,set:__proto__._$set_type,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxLength',function(){
			return this._maxLength_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_maxLength',function(len){
			this._maxLength_=len;
		});

		Object.defineProperty(__proto__,'maxLength',{get:__proto__._$get_maxLength,set:__proto__._$set_maxLength,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_readOnly',function(){
			return this._readonly_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_readOnly',function(b){
			this._readonly_=b;
			this.repaint();
		});

		Object.defineProperty(__proto__,'readOnly',{get:__proto__._$get_readOnly,set:__proto__._$set_readOnly,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_value',function(value){
			this.text=value;
		});

		Object.defineProperty(__proto__,'value',{set:__proto__._$set_value,enumerable:false});
		HTMLInputElement.inputRepos=function(textField){
			var pos=textField.localToGlobal(new Point(0,0));
			if (Laya.document.adapter._screenRotate_==90)
				Browser.input.setPos(Laya.window.innerHeight-(pos.y *EventDispatcher.window.scale.y+Laya.document.body.top),(pos.x *EventDispatcher.window.scale.x+Laya.document.body.left));
			else
			Browser.input.setPos(pos.x *EventDispatcher.window.scale.x+Laya.document.body.left,pos.y *EventDispatcher.window.scale.y+Laya.document.body.top);
			Browser.input.setScale(textField.scaleX*EventDispatcher.window.scale.x,textField.scaleY*EventDispatcher.window.scale.y);
		}

		HTMLInputElement.focusSystemInput=function(textField,type,inputRepos){
			var style=textField._style_;
			if(Laya.CONCHVER){
				Browser.input.setRegular(textField.lyreg||".*");
				}else{
				Browser.input.setRegular(textField.lyreg);
			}
			Browser.input.setSize(style._width_,style._height_);
			Browser.input.setColor(style.color);
			Browser.input.setFontSize(style.fontSize);
			Browser.input.setFont(style.fontText);
			Browser.input.align=(textField.defaultTextFormat.align);
			var pos;
			if(textField.__owner__)
				pos=textField.__owner__.localToGlobal(new Point(0,0));
			else
			pos=textField.localToGlobal(new Point(0,0));
			EventDispatcher.window.lyAddEventListener(/*iflash.events.Event.RESIZE*/"resize",inputRepos);
			Browser.input.setScale(style.scaleX *EventDispatcher.window.scale.x,style.scaleY *EventDispatcher.window.scale.y);
			if (Laya.document.adapter._screenRotate_==90){
				if (Laya.HTMLVER && !Laya.CONCHVER){
					Browser.input.setPos(Laya.window.innerHeight-(pos.y *EventDispatcher.window.scale.y+Laya.document.body.top),(pos.x *EventDispatcher.window.scale.x+Laya.document.body.left));
					Browser.input.setRotate(90);
				}
			}
			else{
				Browser.input.setPos(pos.x *EventDispatcher.window.scale.x+Laya.document.body.left,pos.y *EventDispatcher.window.scale.y+Laya.document.body.top);
			}
			Browser.input.type=type;
			Browser.input.value=textField.text || "";
			textField._type2_ |=/*iflash.laya.dom.Node.TYPE2_HIDETEXT*/0x100000;
			textField._modle_.setHideText(true);
			textField.repaint();
			Browser.input.focus();
		}

		HTMLInputElement.__INPUT_WORDTYPE_NUMBERS__=0x10;
		REGSTATICATTR$(HTMLInputElement,
		['_READONLY_',function(){return this._READONLY_=iflash.laya.utils.regXmlAttr(HTMLInputElement,"readonly=b","readOnly");
			},'_NUMBERONLY_',function(){return this._NUMBERONLY_=iflash.laya.utils.regXmlAttr(HTMLInputElement,"numberonly=b","numberOnly");
		},'_MAXLENGTH_',function(){return this._MAXLENGTH_=iflash.laya.utils.regXmlAttr(HTMLInputElement,"maxlength=i","maxLength");}

		]);
		return HTMLInputElement;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlquoteelement.as=======10096.999362
	var HTMLQuoteElement=iflash.laya.dom.HTMLQuoteElement=(function(_super){
		function HTMLQuoteElement(){
			this._quoteElement_=null;
			_super.call(this);
			Laya.RENDERBYCANVAS && DrawQuote.insertUnit(this);
			this._type2_ |=0x400000;
		}

		REGCLASS$(HTMLQuoteElement,'iflash.laya.dom.HTMLQuoteElement',true,false,_super);
		var __proto__=HTMLQuoteElement.prototype;
		__proto__.toHtmlString=function(){
			if (this._quoteElement_)
				return this.nodeName+" "+this.attributesToHTML()+"\n"+(HTMLDocument.toHTML(this._quoteElement_,true)).join('');
			return this.nodeName+" "+this.attributesToHTML();
		}

		__proto__.lyToBody=function(){
			if(this.quote&&!this.quote.checkType(0x8000)){
				this.quote._tmctr_=this._tmctr_;
				this.quote.lyToBody();
			}
		}

		__proto__.clone=function(){
			var result=new HTMLQuoteElement();
			result.pos(this.left,this.top);
			result._style_.scale(this.scaleX,this.scaleY);
			result.setSize(this.width,this.height);
			result.quote=this.quote;
			return result;
		}

		__proto__.hasQuote=function(){
			return this._quoteElement_!=null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_quote',function(){
			return this._quoteElement_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_quote',function(obj){
			var _$this=this;
			this._quoteElement_=(((typeof obj=='string'))? this.getElementById(obj):obj);
			if (this._quoteElement_==null)
				return;
			this.repaint();
			if (!this.checkType(0x100)&& this.quote.checkType(0x100)){
				_SystemMethod_.mouseEnableTo(this,0x100 | 0x200,true);
			}
			if (this.checkType(0x8000)&&!this._quoteElement_.checkType(0x8000)){
				this._quoteElement_.lyToBody();
			}
			!Laya.RENDERBYCANVAS && this._modle_.quote(this._quoteElement_._modle_);
			if (!this.style._sizebeset_()){
				if (!this._quoteElement_.complete){
					this._quoteElement_.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",function(__args){
						var args=arguments;
						if (!_$this.style._sizebeset_())
							_$this.style.size(_$this._quoteElement_.width,_$this._quoteElement_.height);
					});
				}
				else this.style.size(this._quoteElement_.width,this._quoteElement_.height);
			}
		});

		Object.defineProperty(__proto__,'quote',{get:__proto__._$get_quote,set:__proto__._$set_quote,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_defaultNodeName',function(){
			return "quote";
		});

		Object.defineProperty(__proto__,'defaultNodeName',{get:__proto__._$get_defaultNodeName,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_outerHTML',function(){
			return (HTMLDocument.toHTML(this._quoteElement_,true)).join('');
		});

		Object.defineProperty(__proto__,'outerHTML',{get:__proto__._$get_outerHTML,set:_super.prototype._$set_outerHTML,enumerable:false});
		return HTMLQuoteElement;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlspanelement.as=======10096.999361
	var HTMLSpanElement=iflash.laya.dom.HTMLSpanElement=(function(_super){
		function HTMLSpanElement(){
			_super.call(this);
		}

		REGCLASS$(HTMLSpanElement,'iflash.laya.dom.HTMLSpanElement',true,false,_super);
		var __proto__=HTMLSpanElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$get_defaultNodeName',function(){
			return "span";
		});

		Object.defineProperty(__proto__,'defaultNodeName',{get:__proto__._$get_defaultNodeName,enumerable:false});
		return HTMLSpanElement;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/swfb.as=======10096.999358
	var SWFB=iflash.laya.dom.SWFB=(function(_super){
		function SWFB(){
			_super.call(this);
			this._style_.fontWeight="bold";
		}

		REGCLASS$(SWFB,'iflash.laya.dom.SWFB',true,false,_super);
		return SWFB;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/swffont.as=======10096.999357
	var SWFFont=iflash.laya.dom.SWFFont=(function(_super){
		function SWFFont(){
			_super.apply(this,arguments);
		}

		REGCLASS$(SWFFont,'iflash.laya.dom.SWFFont',true,false,_super);
		var __proto__=SWFFont.prototype;
		DEFUNENUMPTY$(__proto__,'_$set_face',function(family){
			this._style_.family=family;
		});

		Object.defineProperty(__proto__,'face',{set:__proto__._$set_face,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_color',function(s){
			this._style_.color=s;
		});

		Object.defineProperty(__proto__,'color',{set:__proto__._$set_color,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_kerning',function(s){
		});

		Object.defineProperty(__proto__,'kerning',{set:__proto__._$set_kerning,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_nodeValue',function(value){
			this.text=value;
		});

		Object.defineProperty(__proto__,'nodeValue',{get:_super.prototype._$get_nodeValue,set:__proto__._$set_nodeValue,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_letterSpacing',function(lp){
			this._style_.letterSpacing=lp;
		});

		Object.defineProperty(__proto__,'letterSpacing',{set:__proto__._$set_letterSpacing,enumerable:false});
		SWFFont.__init$__=function(){
			iflash.laya.utils.regXmlAttr(SWFFont,"size=d","size");
			iflash.laya.utils.regXmlAttr(SWFFont,"letterspacing=d","letterSpacing",false);
			iflash.laya.utils.regXmlAttr(SWFFont,"kerning=d","kerning",false);
		}

		return SWFFont;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/swfp.as=======10096.999356
	var SWFP=iflash.laya.dom.SWFP=(function(_super){
		function SWFP(){
			_super.apply(this,arguments);
		}

		REGCLASS$(SWFP,'iflash.laya.dom.SWFP',true,false,_super);
		var __proto__=SWFP.prototype;
		DEFUNENUMPTY$(__proto__,'_$set_align',function(value){
			Log.log("dd");
			this._style_.textAlign=value;
		});

		Object.defineProperty(__proto__,'align',{set:__proto__._$set_align,enumerable:false});
		SWFP.__init$__=function(){
			iflash.laya.utils.regXmlAttr(SWFP,"align=d","align",false);
		}

		return SWFP;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/swftextformat.as=======10096.999355
	var SWFTEXTFORMAT=iflash.laya.dom.SWFTEXTFORMAT=(function(_super){
		function SWFTEXTFORMAT(){
			_super.call(this);
			this.addType(0x200000);
		}

		REGCLASS$(SWFTEXTFORMAT,'iflash.laya.dom.SWFTEXTFORMAT',true,false,_super);
		var __proto__=SWFTEXTFORMAT.prototype;
		DEFUNENUMPTY$(__proto__,'_$set_leading',function(value){
			this._style_.lineSpacing=value;
		});

		Object.defineProperty(__proto__,'leading',{set:__proto__._$set_leading,enumerable:false});
		return SWFTEXTFORMAT;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlstyleelement.as=======10096.999350
	var HTMLStyleElement=iflash.laya.dom.HTMLStyleElement=(function(_super){
		function HTMLStyleElement(){
			_super.call(this);
			this.type="text/css";
		}

		REGCLASS$(HTMLStyleElement,'iflash.laya.dom.HTMLStyleElement',true,false,_super);
		var __proto__=HTMLStyleElement.prototype;
		DEFUNENUMPTY$(__proto__,'_$set_valuewithsid',function(id){
			iflash.laya.dom.HTMLStyleElement.parseStyle(HTMLDocument.getTextFromeCache(id),this.baseURI);
			this.complete=true;
			this._parent_ && this._parent_._checkAllComplete_();
		});

		Object.defineProperty(__proto__,'valuewithsid',{set:__proto__._$set_valuewithsid,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_value',function(value){
			iflash.laya.dom.HTMLStyleElement.parseStyle(value,this.baseURI);
		});

		Object.defineProperty(__proto__,'value',{set:__proto__._$set_value,enumerable:false});
		HTMLStyleElement.parseStyle=function(text,uri){
			var r=[],arr=[],temp,preindex=-1,prekeyframe=false,lastname;
			var preName;
			while((arr=HTMLStyleElement._cuttingStyle.exec(text))!=null){
				if(preindex!=-1){
					temp=text.substring(preindex,arr["index"]);
					if(prekeyframe)
						HTMLStyleElement.parseKeyframe(lastname,temp.substring(0,temp.lastIndexOf("}")));
					else
					Laya.document.styleSheets[preName]=HTMLStyleElement.getListArry(temp.substring(0,temp.lastIndexOf("}")),false,uri.path);
				}
				preindex=arr["index"]+arr[0].length;
				lastname=arr[3];
				prekeyframe=arr[2].indexOf("@keyframes")!=-1;
				preName=arr[1];
			}
			if(preindex!=-1){
				temp=text.substring(preindex);
				if(prekeyframe)
					HTMLStyleElement.parseKeyframe(lastname,temp.substring(0,temp.lastIndexOf("}")));
				else
				Laya.document.styleSheets[preName]=HTMLStyleElement.getListArry(temp.substring(0,temp.lastIndexOf("}")));
			}
			return r;
		}

		HTMLStyleElement.getListArry=function(text,isObject,basePath){
			(isObject===void 0)&& (isObject=false);
			var arr=[],r=[],o={},temp,robj={},indexs=[];
			var script=HTMLStyleElement._scriptReg.exec(text);
			while((arr=CSSStyle._STYLEATTRIBUTESREGEXP_.exec(text))!=null){
				o={};
				o.name=arr[1];if (o.name=="script")continue ;
				indexs.push(arr["index"]);
				o.value=arr[2]||arr[3]||arr[4]||arr[5];
				r.push(o);
				var url=StringMethod.subString(o.value,"url(",")");
				if (url)o.value=o.value.replace(url,Method.formatUrl(url,basePath));
				robj[o.name]=o.value;
			};
			var i=indexs.length;
			for (var j=0;j < i;j++){
				if(script!=null&&(indexs[j]>script["index"]||j+1==i)){
					if (script["index"] > indexs[j])indexs[j]=text.length-1;
					o={};
					o.name="script";
					temp=text.substring(script["index"]+script[0].length,indexs[j]);
					o.value=temp.substring(0,temp.lastIndexOf("}"));
					r.push(o);
					robj["script"]=temp.substring(0,temp.lastIndexOf("}"));
					break ;
				}
			}
			if(isObject)return robj;
			return r;
		}

		HTMLStyleElement.parseKeyframe=function(name,text){
			var arr,r=[],o,preindex=-1,preName,temp;
			while((arr=HTMLStyleElement._keyframes.exec(text))!=null){
				if(preindex!=-1){
					o={};
					o.percent=preName;
					temp=text.substring(preindex,arr["index"]);
					o.value=HTMLStyleElement.getListArry(temp.substring(0,temp.lastIndexOf("}")),true);
					r.push(o);
				}
				preindex=arr["index"]+arr[0].length;
				preName=arr[3];
			}
			if(preindex!=-1){
				o={};
				o.percent=preName;
				temp=text.substring(preindex);
				o.value=HTMLStyleElement.getListArry(temp.substring(0,temp.lastIndexOf("}")),true);
				r.push(o);
			}
			Laya.document.styleSheets[name]=r;
		}

		REGSTATICATTR$(HTMLStyleElement,
		['_keyframes',function(){return this._keyframes=new RegExp("(((\\d+)%))[\\t\\n\\r\\\s]*{","g");
			},'_cuttingStyle',function(){return this._cuttingStyle=new RegExp("((@keyframes[\\s\\t]+|)(\\w+))[\\t\\n\\r\\\s]*{","g");
		},'_scriptReg',function(){return this._scriptReg=new RegExp("script[\\s\\t]*:[\\s\\t\\n\\r]*{","");}

		]);
		return HTMLStyleElement;
	})(HTMLLinkElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/text.as=======10096.999244
	var Text=iflash.text.Text=(function(_super){
		function Text(owner){
			this.tmpBounds={x:0,y:0};
			this._alwaysShowSelection=false;
			this._antiAliasType=null;
			this._bottomScrollV=null;
			this._caretIndex=null;
			this._condenseWhite=false;
			this._gridFitType=false;
			this._htmlText=null;
			this._bold=null;
			this._color=null;
			this._italic=null;
			this._size=null;
			this._restrict=null;
			this._scrollH=0;
			this._scrollV=0;
			this.mSelEnd=0;
			this.mSelStart=0;
			this._sharpness=null;
			this.__owner__=null;
			this._background=true;
			this._backgroundColor=0x000000;
			this._border=true;
			this._borderColor=0;
			this._textFormat=null;
			this._maxChars=0;
			this._multiline=false;
			this.lyreg=null;
			this._selectable=false;
			this._wordWrap=false;
			this._autoSize=/*iflash.text.TextFieldAutoSize.NONE*/"none";
			this._type=/*iflash.text.TextFieldType.DYNAMIC*/"dynamic";
			_super.call(this);
			this.style.block=true;
			this.style.position="absolute";
			this.__owner__=owner;
			this.mouseChildren=false;
			this._type2_ &=~0x2000;
			if (!Text._isinitTab_){
				Laya.document.addEventListener(/*iflash.events.KeyboardEvent.KEY_DOWN*/"keyDown",Text.tab);
				Text._isinitTab_=true;
			}
			this.addType(0x200000);
			this.nodeName="textfield";
			this.mSelStart=-1;
			this.mSelEnd=-1;
			this._scrollH=0;
			this._scrollV=1;
			this._color=0x000000;
			this._borderColor=0x000000;
			this._border=false;
			this._backgroundColor=0xffffff;
			this._background=false;
			this._sharpness=0;
			this._italic=null;
			this._bold=null;
			this.autoSize=/*iflash.text.TextFieldAutoSize.NONE*/"none";
			this.style._width_=100;
			this.style.height=100;
			this.wordWrap=false;
			(this._text_==null)&& (this._text_=new TextField(this));
		}

		REGCLASS$(Text,'iflash.text.Text',true,false,_super);
		var __proto__=Text.prototype;
		__proto__.pos=function(x,y){
			_super.prototype.pos.call(this,x+this.tmpBounds.x/20,y+this.tmpBounds.y/20);
		}

		__proto__._lyPaint_=function(context,x,y){
			_super.prototype._lyPaint_.call(this,context,x,y);
		}

		__proto__.decodeColour=function(col){
			return uint("0x"+col.substr(1));
		}

		__proto__.getHtml=function(){
			return '<P ALIGN="'+this.defaultTextFormat.align+'"><FONT FACE = '+'"'+this.style._font_.fontName+'" SIZE ="'+this.style._font_.size+'" COLOR="'+this.textColor+'"'+' LETTERSPACING="0" KERNING="0">'+this.text+'</FONT></P>';
		}

		__proto__._onModifyText_=function(bNeedTypeset){
			_super.prototype._onModifyText_.call(this,bNeedTypeset);
			if(this.autoSize!=/*iflash.text.TextFieldAutoSize.NONE*/"none"){
				this.style._width_=this._text_.textWidth;
				this.style._height_=this._text_.textHeight;
			}
		}

		__proto__._getAllText=function(){
			var temp;
			temp=_super.prototype._$get_text.call(this)|| "";
			for (var i=0,sz=this.childNodes.length;i < sz;i++){
				temp+=this.childNodes[i]._getAllText();
			}
			return temp;
		}

		__proto__._getRestric_=function(r){
			var temp="[",a=r.split(" ");
			for (var i=0;i < a.length;i++){
				if (a[i][0]=="^")
					temp+=" "+a[i].substring(1,a[i].length-1);
				else
				temp+="^"+a[i]+" ";
			}
			temp+="]+";
			return new RegExp(temp);
		}

		__proto__.appendText=function(newText){
			this.text=(this._text_.text || "")+newText;
			this.repaint();
		}

		__proto__.copyRichText=function(){
			Log.unfinished("TextField","copyRichText");
			return null;
		}

		__proto__.getCharBoundaries=function(charIndex){
			Log.unfinished("TextField","getCharBoundaries");
			return null;
		}

		__proto__.getCharIndexAtPoint=function(x,y){
			Log.unfinished("TextField","getCharIndexAtPoint");
			return 0;
		}

		__proto__.getFirstCharInParagraph=function(charIndex){
			Log.unfinished("TextField","getFirstCharInParagraph");
			return 0;
		}

		__proto__.getImageReference=function(id){
			Log.unfinished("TextField","getImageReference");
			return null;
		}

		__proto__.getLineIndexAtPoint=function(x,y){
			Log.unfinished("TextField","getLineIndexAtPoint");
			return 0;
		}

		__proto__.getLineIndexOfChar=function(charIndex){
			Log.unfinished("TextField","getLineIndexOfChar");
			return 0;
		}

		__proto__.getLineLength=function(lineIndex){
			Log.unfinished("TextField","getLineLength");
			return 0;
		}

		__proto__.getLineMetrics=function(lineIndex){
			var _ascent=0;
			var _descent=0;
			var _height=0;
			var _leading=0;
			var _width=0;
			var _x=0;
			var arr=this.getTextTypeset().lines[lineIndex].nodes;
			var str="";
			var len=arr.length;
			_x=arr[0].left;
			_height=arr[0].height;
			for(var i=0;i<len;i++){
				if(arr[i].height>_height)
					_height=arr[i].height;
				_width+=arr[i].width;
			}
			return new TextLineMetrics(_x,_width,_height,_ascent,_descent,_leading);
		}

		__proto__.getLineOffset=function(lineIndex){
			Log.unfinished("TextField","getLineOffset");
			return 0;
		}

		__proto__.getLineText=function(lineIndex){
			var arr=this.getTextTypeset().lines[lineIndex].nodes;
			var str="";
			var len=arr.length;
			for(var i=0;i<len;i++){
				str+=arr[i].text;
			}
			return str;
		}

		__proto__.getParagraphLength=function(charIndex){
			Log.unfinished("TextField","getParagraphLength");
			return 0;
		}

		__proto__.getRawText=function(){
			Log.unfinished("TextField","getRawText");
			return null;
		}

		__proto__.getTextFormat=function(beginIndex,endIndex){
			(beginIndex===void 0)&& (beginIndex=-1);
			(endIndex===void 0)&& (endIndex=-1);
			return null;
		}

		__proto__.getTextRuns=function(beginIndex,endIndex){
			(beginIndex===void 0)&& (beginIndex=0);
			(endIndex===void 0)&& (endIndex=2147483647);
			Log.unfinished("TextField","getTextRuns");
			return null;
		}

		__proto__.getXMLText=function(beginIndex,endIndex){
			(beginIndex===void 0)&& (beginIndex=0);
			(endIndex===void 0)&& (endIndex=2147483647);
			Log.unfinished("TextField","getXMLText");
			return null;
		}

		__proto__.insertXMLText=function(beginIndex,endIndex,richText,pasting){
			(pasting===void 0)&& (pasting=false);
			Log.unfinished("TextField","insertXMLText");
		}

		__proto__.pasteRichText=function(richText){
			Log.unfinished("TextField","pasteRichText");
			return false;
		}

		__proto__.replaceSelectedText=function(value){
			Log.unfinished("TextField","replaceSelectedText");
		}

		__proto__.replaceText=function(beginIndex,endIndex,newText){
			var te=this.text;
			this.text=te.slice(0,beginIndex)+newText+te.slice(endIndex);
		}

		__proto__.setSelection=function(beginIndex,endIndex){}
		__proto__.setTextFormat=function(format,beginIndex,endIndex){
			(beginIndex===void 0)&& (beginIndex=-1);
			(endIndex===void 0)&& (endIndex=-1);
			this.defaultTextFormat=format;
			Log.unfinished("TextField","setSelection");
		}

		__proto__._onfocus_=function(e){
			HTMLInputElement.focusSystemInput(this,this.displayAsPassword?"password":this.type,BIND$(this,this.inputRepos));
		}

		__proto__.inputRepos=function(__args){
			var args=arguments;
			this.focus&&HTMLInputElement.inputRepos(this);
		}

		__proto__._onblur_=function(e){
			Browser.input.setPos(-10000,-10000);
			this.text=Browser.input.value;
			this._type2_ &=~0x100000;
			this._modle_.setHideText(false);
			this.repaint();
			Browser.input.value="";
			this.dispatchEvent (new Event(/*iflash.events.Event.CHANGE*/"change"));
		}

		__proto__._onmousedown_=function(e){
			if (!this.focus)
				this.focus=true;
		}

		DEFUNENUMPTY$(__proto__,'_$get_alwaysShowSelection',function(){
			return this._alwaysShowSelection;
		});

		DEFUNENUMPTY$(__proto__,'_$set_alwaysShowSelection',function(value){
			this._alwaysShowSelection=value;
		});

		Object.defineProperty(__proto__,'alwaysShowSelection',{get:__proto__._$get_alwaysShowSelection,set:__proto__._$set_alwaysShowSelection,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_background',function(){
			return this._background;
		});

		DEFUNENUMPTY$(__proto__,'_$set_background',function(value){
			if(!value)this.style.backgroundColor="#FFFFFF";
			this._background=value;
		});

		Object.defineProperty(__proto__,'background',{get:__proto__._$get_background,set:__proto__._$set_background,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_antiAliasType',function(){
			return this._antiAliasType;
		});

		DEFUNENUMPTY$(__proto__,'_$set_antiAliasType',function(antiAliasType){
			Log.unfinished("TextField","antiAliasType");
			this._antiAliasType=antiAliasType;
		});

		Object.defineProperty(__proto__,'antiAliasType',{get:__proto__._$get_antiAliasType,set:__proto__._$set_antiAliasType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_autoSize',function(){
			return this._autoSize;
		});

		DEFUNENUMPTY$(__proto__,'_$set_autoSize',function(value){
			this._autoSize=value;
			if(!this.wordWrap&&!this._style_._sizebeset_()){
				this._style_.width="auto";
				this._style_.textAlign=value;
			}
			this._onModifyText_(true);
		});

		Object.defineProperty(__proto__,'autoSize',{get:__proto__._$get_autoSize,set:__proto__._$set_autoSize,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_displayAsPassword',function(){
			return this._text_.displayAsPassword;
		});

		DEFUNENUMPTY$(__proto__,'_$set_displayAsPassword',function(value){
			this._text_.displayAsPassword=value;
		});

		Object.defineProperty(__proto__,'displayAsPassword',{get:__proto__._$get_displayAsPassword,set:__proto__._$set_displayAsPassword,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_backgroundColor',function(){
			return this._backgroundColor;
		});

		DEFUNENUMPTY$(__proto__,'_$set_backgroundColor',function(value){
			this._background && (this.style.backgroundColor="#"+value.toString(16).toUpperCase());
			this._backgroundColor=value;
			this.repaint();
		});

		Object.defineProperty(__proto__,'backgroundColor',{get:__proto__._$get_backgroundColor,set:__proto__._$set_backgroundColor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_caretIndex',function(){
			return 0;
		});

		Object.defineProperty(__proto__,'caretIndex',{get:__proto__._$get_caretIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_border',function(){
			return this._border;
		});

		DEFUNENUMPTY$(__proto__,'_$set_border',function(value){
			this._border=value;
		});

		Object.defineProperty(__proto__,'border',{get:__proto__._$get_border,set:__proto__._$set_border,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_embedFonts',function(){
			return (this._type2_&0x4000000)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_embedFonts',function(value){
			value?(this._type2_|=0x4000000):(this._type2_&=~0x4000000);
			(this._type2_&0x4000000)&&this._textFormat&& (this.style.family=this._textFormat.font);
			this._style_.getFont().embedFonts=value;
		});

		Object.defineProperty(__proto__,'embedFonts',{get:__proto__._$get_embedFonts,set:__proto__._$set_embedFonts,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_text',function(){
			return this._getAllText();
		});

		DEFUNENUMPTY$(__proto__,'_$set_text',function(value){
			if(this.type=="input"){
				Browser.input.value=value;
			}
			if(value){
				this.destroyAllChild();
			}
			_super.prototype._$set_text.call(this,value);
			this._onModifyText_(true);
			this.repaint();
		});

		Object.defineProperty(__proto__,'text',{get:__proto__._$get_text,set:__proto__._$set_text,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textFieldPosX',function(){
			if(this._textFormat){
				if(this._textFormat.align==/*iflash.text.TextFieldAutoSize.CENTER*/"center"){
					}else if(this._textFormat.align==/*iflash.text.TextFieldAutoSize.RIGHT*/"right"){
				}
				return this._textFormat.indent+this._textFormat.letterSpacing;
			}
			Log.unfinished("TextField","textFieldPosX");
			return 0;
		});

		Object.defineProperty(__proto__,'textFieldPosX',{get:__proto__._$get_textFieldPosX,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_borderColor',function(){
			return this._borderColor;
		});

		DEFUNENUMPTY$(__proto__,'_$set_borderColor',function(value){
			this._border&&(this.style.border="#"+value.toString(16));
			this.repaint();
		});

		Object.defineProperty(__proto__,'borderColor',{get:__proto__._$get_borderColor,set:__proto__._$set_borderColor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollH',function(){
			Log.unfinished("TextField","scrollH");
			return this._scrollH;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scrollH',function(value){
			Log.unfinished("TextField","scrollH");
			this._scrollH=value;
		});

		Object.defineProperty(__proto__,'scrollH',{get:__proto__._$get_scrollH,set:__proto__._$set_scrollH,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_bottomScrollV',function(){
			Log.unfinished("TextField","bottomScrollV");
			return 0;
		});

		Object.defineProperty(__proto__,'bottomScrollV',{get:__proto__._$get_bottomScrollV,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_condenseWhite',function(){
			Log.unfinished("TextField","condenseWhite");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_condenseWhite',function(value){
			Log.unfinished("TextField","condenseWhite");
		});

		Object.defineProperty(__proto__,'condenseWhite',{get:__proto__._$get_condenseWhite,set:__proto__._$set_condenseWhite,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_selectedText',function(){
			Log.unfinished("TextField","selectedText");
			return null;
		});

		Object.defineProperty(__proto__,'selectedText',{get:__proto__._$get_selectedText,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_defaultTextFormat',function(){
			if(this._textFormat==null){
				this._textFormat=new TextFormat(this.style._font_.fontName,this.style.fontSize,this.textColor,false);
				this._textFormat.align="left";
				return this._textFormat;
			}
			return this._textFormat;
		});

		DEFUNENUMPTY$(__proto__,'_$set_defaultTextFormat',function(format){
			if(format){
				format.color!=null && (this.style.color=format.color);
				format.size && (this.style.fontSize=format.size);
				format.align && (this.style.textAlign=format.align);
				format.letterSpacing && (this.style.letterSpacing=format.letterSpacing);
				format.indent && (this.style.textIndent=format.indent);
				this.embedFonts && format.font && (this.style.family=format.font);
				format.bold && (this.style.fontWeight="bold");
				format.leading && (this.style.lineSpacing=format.leading);
				format.underline=true;
				(this.style.textDecoration="line-through");
			}
			this._textFormat=format;
		});

		Object.defineProperty(__proto__,'defaultTextFormat',{get:__proto__._$get_defaultTextFormat,set:__proto__._$set_defaultTextFormat,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_gridFitType',function(){
			Log.unfinished("TextField","gridFitType");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_gridFitType',function(gridFitType){
			Log.unfinished("TextField","gridFitType");
		});

		Object.defineProperty(__proto__,'gridFitType',{get:__proto__._$get_gridFitType,set:__proto__._$set_gridFitType,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_htmlText',function(){
			if(this.innerHTML){
				return this.innerHTML;
				}else{
				if(!this.text)return "";
				else return this.getHtml();
			}
		});

		DEFUNENUMPTY$(__proto__,'_$set_htmlText',function(value){
			if (value==null)return;
			if (value.charAt(0)!="<")
				value="<span>"+value+"</span>";
			this.destroyAllChild();
			this.innerHTML=value;
			this.typesetting();
			this.repaint();
		});

		Object.defineProperty(__proto__,'htmlText',{get:__proto__._$get_htmlText,set:__proto__._$set_htmlText,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_length',function(){
			if(this._text_&&this._text_.text)
				return this._text_.text.length;
			return 0;
		});

		Object.defineProperty(__proto__,'length',{get:__proto__._$get_length,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxChars',function(){
			return this._maxChars;
		});

		DEFUNENUMPTY$(__proto__,'_$set_maxChars',function(value){
			Browser.input.maxLength=value;
			this._maxChars=value;
		});

		Object.defineProperty(__proto__,'maxChars',{get:__proto__._$get_maxChars,set:__proto__._$set_maxChars,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxScrollH',function(){
			Log.unfinished("TextField","maxScrollH");
			return-1;
		});

		Object.defineProperty(__proto__,'maxScrollH',{get:__proto__._$get_maxScrollH,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_maxScrollV',function(){
			Log.unfinished("TextField","maxScrollV");
			return-1;
		});

		Object.defineProperty(__proto__,'maxScrollV',{get:__proto__._$get_maxScrollV,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mouseWheelEnabled',function(){
			Log.unfinished("TextField","mouseWheelEnabled");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_mouseWheelEnabled',function(value){
			Log.unfinished("TextField","mouseWheelEnabled");
		});

		Object.defineProperty(__proto__,'mouseWheelEnabled',{get:__proto__._$get_mouseWheelEnabled,set:__proto__._$set_mouseWheelEnabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_multiline',function(){return this._multiline;});
		DEFUNENUMPTY$(__proto__,'_$set_multiline',function(value){
			this._multiline=value;
		});

		Object.defineProperty(__proto__,'multiline',{get:__proto__._$get_multiline,set:__proto__._$set_multiline,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_numLines',function(){
			this.getTextTypeset();
			if(this.getTextTypeset().lines){
				return this.getTextTypeset().lines.length;
			}
			return 0;
		});

		Object.defineProperty(__proto__,'numLines',{get:__proto__._$get_numLines,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_restrict',function(){
			return this._restrict;
		});

		DEFUNENUMPTY$(__proto__,'_$set_restrict',function(value){
			if (this._restrict !=value){
				this._restrict=value;
				if (Laya.HTMLVER && !Laya.CONCHVER){
					if (this._restrict==null)
						this.lyreg=null;
					else{
						var tmreg=this._getRestric_(this._restrict);
						this.lyreg=function (e){
							this.value=this.value.replace(tmreg,"");
						};
					}
				}
				else{
					this.lyreg=this._restrict;
				}
			}
		});

		Object.defineProperty(__proto__,'restrict',{get:__proto__._$get_restrict,set:__proto__._$set_restrict,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scrollV',function(){
			Log.unfinished("TextField","scrollV");
			return this._scrollV;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scrollV',function(value){
			Log.unfinished("TextField","scrollV");
			this._scrollV=value;
		});

		Object.defineProperty(__proto__,'scrollV',{get:__proto__._$get_scrollV,set:__proto__._$set_scrollV,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_useRichTextClipboard',function(){
			Log.unfinished("TextField","useRichTextClipboard");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_useRichTextClipboard',function(value){
			Log.unfinished("TextField","useRichTextClipboard");
		});

		Object.defineProperty(__proto__,'useRichTextClipboard',{get:__proto__._$get_useRichTextClipboard,set:__proto__._$set_useRichTextClipboard,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_selectable',function(){
			return this._selectable;
		});

		DEFUNENUMPTY$(__proto__,'_$set_selectable',function(value){
			this._selectable=value;
		});

		Object.defineProperty(__proto__,'selectable',{get:__proto__._$get_selectable,set:__proto__._$set_selectable,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textFieldPosY',function(){
			Log.unfinished("TextField","textFieldPosX");
			return 0;
		});

		Object.defineProperty(__proto__,'textFieldPosY',{get:__proto__._$get_textFieldPosY,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_selectionBeginIndex',function(){
			Log.unfinished("TextField","selectionBeginIndex");
			return 0;
		});

		Object.defineProperty(__proto__,'selectionBeginIndex',{get:__proto__._$get_selectionBeginIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_selectionEndIndex',function(){
			Log.unfinished("TextField","selectionBeginIndex");
			return 0;
		});

		Object.defineProperty(__proto__,'selectionEndIndex',{get:__proto__._$get_selectionEndIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_sharpness',function(){
			Log.unfinished("TextField","sharpness");
			return this._sharpness;
		});

		DEFUNENUMPTY$(__proto__,'_$set_sharpness',function(value){
			Log.unfinished("TextField","sharpness");
			this._sharpness=value;
		});

		Object.defineProperty(__proto__,'sharpness',{get:__proto__._$get_sharpness,set:__proto__._$set_sharpness,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_styleSheet',function(){
			Log.unfinished("TextField","sharpness");
			return null;
		});

		DEFUNENUMPTY$(__proto__,'_$set_styleSheet',function(value){
			Log.unfinished("TextField","styleSheet");
		});

		Object.defineProperty(__proto__,'styleSheet',{get:__proto__._$get_styleSheet,set:__proto__._$set_styleSheet,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textColor',function(){
			return this.style.color;
		});

		DEFUNENUMPTY$(__proto__,'_$set_textColor',function(value){
			this.style.color=value;
		});

		Object.defineProperty(__proto__,'textColor',{get:__proto__._$get_textColor,set:__proto__._$set_textColor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textHeight',function(){
			return this._text_.textHeight;
		});

		Object.defineProperty(__proto__,'textHeight',{get:__proto__._$get_textHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_thickness',function(){
			Log.unfinished("TextField","styleSheet");
			return 0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_thickness',function(value){
			Log.unfinished("TextField","thickness");
		});

		Object.defineProperty(__proto__,'thickness',{get:__proto__._$get_thickness,set:__proto__._$set_thickness,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textInteractionMode',function(){return null;});
		Object.defineProperty(__proto__,'textInteractionMode',{get:__proto__._$get_textInteractionMode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textWidth',function(){
			return this._text_.textWidth;
		});

		Object.defineProperty(__proto__,'textWidth',{get:__proto__._$get_textWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_type',function(){
			return this._type;
		});

		DEFUNENUMPTY$(__proto__,'_$set_type',function(value){
			switch(value){
				case /*iflash.text.TextFieldType.INPUT*/"input":
					this.addEventListener(/*iflash.events.MouseEvent.FOCUS*/"focus",BIND$(this,this._onfocus_));
					this.addEventListener(/*iflash.events.MouseEvent.BLUR*/"blur",BIND$(this,this._onblur_));
					Text._tabTotal.push(this);
					break ;
				default :
					if (this._type==/*iflash.text.TextFieldType.INPUT*/"input"){
						this.removeEventListener(/*iflash.events.MouseEvent.FOCUS*/"focus",BIND$(this,this._onfocus_));
						this.removeEventListener(/*iflash.events.MouseEvent.BLUR*/"blur",BIND$(this,this._onblur_));
					}
				}
			this._type=value;
			this.repaint();
		});

		Object.defineProperty(__proto__,'type',{get:__proto__._$get_type,set:__proto__._$set_type,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_wordWrap',function(){
			return this._wordWrap;
		});

		DEFUNENUMPTY$(__proto__,'_$set_wordWrap',function(value){
			value ? this.style.whiteSpace="none" :this.style.whiteSpace="nowrap",this._wordWrap=value;
			this.repaint();
		});

		Object.defineProperty(__proto__,'wordWrap',{get:__proto__._$get_wordWrap,set:__proto__._$set_wordWrap,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_width',function(w){
			_super.prototype._$set_width.call(this,w);
			this._onModifyText_(true);
		});

		Object.defineProperty(__proto__,'width',{get:_super.prototype._$get_width,set:__proto__._$set_width,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_height',function(h){
			_super.prototype._$set_height.call(this,h);
			this._onModifyText_(true);
		});

		Object.defineProperty(__proto__,'height',{get:_super.prototype._$get_height,set:__proto__._$set_height,enumerable:false});
		Text.isFontCompatible=function(fontName,fontStyle){
			Log.unfinished("TextField","isFontCompatible");
			return false;
		}

		Text.tab=function(e){
			if (e.keyCode==/*iflash.ui.Keyboard.TAB*/9){
				if (!Laya.document.activeElement)
					(Text._tabTotal.length > 0)&& (Text._tabTotal[0].focus=true);
				else{
					var sz=Text._tabTotal.length;
					for (var i=0;i < sz;i++){
						if (Laya.document.activeElement==Text._tabTotal[i]){
							if (i < sz-1)
								Text._tabTotal[i+1].focus=true;
							else
							Text._tabTotal[0].focus=true;
							break ;
						}
					}
				}
			}
		}

		Text._tabTotal=[];
		Text._isinitTab_=false
		return Text;
	})(HTMLElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/sprite.as=======10095.999980
	var Sprite=iflash.display.Sprite=(function(_super){
		function Sprite(){
			this._graphics=null;
			this._dragRect_=null;
			this._prelocationX_=0;
			this._prelocationY_=0;
			this._hitArea=null;
			_super.call(this);
		}

		REGCLASS$(Sprite,'iflash.display.Sprite',true,false,_super);
		var __proto__=Sprite.prototype;
		__proto__.startDrag=function(lockCenter,bounds){
			(lockCenter===void 0)&& (lockCenter=false);
			this._dragRect_=bounds;
			this.addEventListener(/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove",BIND$(this,this.__drag__));
			if(lockCenter){
				this._prelocationX_=0;
				this._prelocationY_=0;
				}else{
				this._prelocationX_=this.mouseX;
				this._prelocationY_=this.mouseY;
			}
			Sprite._startedDrag_=true;
			this.__drag__(null);
		}

		__proto__.stopDrag=function(){
			this.removeEventListener(/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove",BIND$(this,this.__drag__));
			this._dragRect_=null;
			Sprite._startedDrag_=false;
		}

		__proto__.__drag__=function(e){
			if(!Sprite._startedDrag_)return;
			this.x=this.parent.mouseX-this._prelocationX_;
			this.y=this.parent.mouseY-this._prelocationY_;
			if(this._dragRect_){
				if(this.x>this._dragRect_.width+this._dragRect_.x)
					this.x=this._dragRect_.width+this._dragRect_.x;
				if(this.y>this._dragRect_.height+this._dragRect_.y)
					this.y=this._dragRect_.height+this._dragRect_.y;
				if(this.x<this._dragRect_.x)
					this.x=this._dragRect_.x;
				if(this.y<this._dragRect_.y)
					this.y=this._dragRect_.y;
			}
		}

		__proto__._hitTest_=function(x,y,forTouch,mouseDown){
			(forTouch===void 0)&& (forTouch=false);
			(mouseDown===void 0)&& (mouseDown=false);
			if (forTouch && (!this.visible || !this.mouseEnabled))return null;
			var t=_super.prototype._hitTest_.call(this,x,y,forTouch,mouseDown);
			if(t){return t;}
				if(this._graphics){
				DisplayObject.HELPER_RECTANGLET.setTo(this._graphics.x,this._graphics.y,this._graphics.width*this.scaleX,this._graphics.height*this.scaleY);
				if(DisplayObject.HELPER_RECTANGLET.contains(x,y))
					return this;
			}
			return null;
		}

		__proto__.hitAreaMouseHandler=function(event){
			this.dispatchEvent(new MouseEvent(event.type));
		}

		__proto__._getBounds_=function(targetSpace,resultRect){
			if(!resultRect)
				resultRect=new Rectangle();
			_super.prototype._getBounds_.call(this,targetSpace,resultRect);
			if(this._graphics){
				DisplayObject.HELPER_RECTANGLET_ALT.setTo(this._graphics.x,this._graphics.y,this._graphics.width,this._graphics.height);
				if(DisplayObject.HELPER_RECTANGLET_ALT.width&&DisplayObject.HELPER_RECTANGLET_ALT.height){
					if(this.numChildren)
						resultRect.union(DisplayObject.HELPER_RECTANGLET_ALT);
					else
					resultRect.setTo(DisplayObject.HELPER_RECTANGLET_ALT.x,DisplayObject.HELPER_RECTANGLET_ALT.y,DisplayObject.HELPER_RECTANGLET_ALT.width,DisplayObject.HELPER_RECTANGLET_ALT.height);
				}
			}
			return resultRect;
		}

		DEFUNENUMPTY$(__proto__,'_$get_graphics',function(){if(!this._graphics)this._graphics=new Graphics(this);
			return this._graphics;
		});

		Object.defineProperty(__proto__,'graphics',{get:__proto__._$get_graphics,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_buttonMode',function(){
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_buttonMode',function(value){});
		Object.defineProperty(__proto__,'buttonMode',{get:__proto__._$get_buttonMode,set:__proto__._$set_buttonMode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_useHandCursor',function(){
			return (this._type_&0x80)!=0;
		});

		DEFUNENUMPTY$(__proto__,'_$set_useHandCursor',function(value){
			if(value)
				this._type_|=0x80;
			else
			this._type_&=~0x80;
		});

		Object.defineProperty(__proto__,'useHandCursor',{get:__proto__._$get_useHandCursor,set:__proto__._$set_useHandCursor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_dropTarget',function(){return null});
		Object.defineProperty(__proto__,'dropTarget',{get:__proto__._$get_dropTarget,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_hitArea',function(){
			return this._hitArea;
		});

		DEFUNENUMPTY$(__proto__,'_$set_hitArea',function(value){
			if (this._hitArea){
				this._hitArea.removeEventListener(/*iflash.events.MouseEvent.CLICK*/"click",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.removeEventListener(/*iflash.events.MouseEvent.DOUBLE_CLICK*/"doubleClick",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.removeEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.removeEventListener(/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.removeEventListener(/*iflash.events.MouseEvent.MOUSE_OUT*/"mouseout",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.removeEventListener(/*iflash.events.MouseEvent.MOUSE_OVER*/"mouseover",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.removeEventListener(/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup",BIND$(this,this.hitAreaMouseHandler));
			}
			this._hitArea=value;
			this.mouseEnabled=this._hitArea !=null ? false :true;
			if (this._hitArea){
				this._hitArea.addEventListener(/*iflash.events.MouseEvent.CLICK*/"click",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.addEventListener(/*iflash.events.MouseEvent.DOUBLE_CLICK*/"doubleClick",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.addEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.addEventListener(/*iflash.events.MouseEvent.MOUSE_MOVE*/"mousemove",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.addEventListener(/*iflash.events.MouseEvent.MOUSE_OUT*/"mouseout",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.addEventListener(/*iflash.events.MouseEvent.MOUSE_OVER*/"mouseover",BIND$(this,this.hitAreaMouseHandler));
				this._hitArea.addEventListener(/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup",BIND$(this,this.hitAreaMouseHandler));
			}
		});

		Object.defineProperty(__proto__,'hitArea',{get:__proto__._$get_hitArea,set:__proto__._$set_hitArea,enumerable:false});
		Sprite._startedDrag_=false;
		return Sprite;
	})(DisplayObjectContainer)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/loader.as=======10095.999941
	var Loader=iflash.display.Loader=(function(_super){
		function Loader(){
			this._contentLoaderInfo=null;
			this.__content__=null;
			this.__element__=null;
			this._bitmapData=null;
			this._resUrl="";
			this.shapeRes=null;
			this.preIndex=0;
			this.preLoader=[];
			_super.apply(this,arguments);
			this._contentLoaderInfo=LoaderInfo.create(this._getID_);
			this._contentLoaderInfo.loader=this;
		}

		REGCLASS$(Loader,'iflash.display.Loader',true,false,_super);
		var __proto__=Loader.prototype;
		__proto__.onSetResUrlHandler=function(evt){
			this._resUrl=evt.lyData.url;
		}

		__proto__.load=function(request,context){
			var _$this=this;
			this._checkloaderInfo();
			var index=(request.url).lastIndexOf("?");
			this._contentLoaderInfo.lyurl=request.url;
			this._contentLoaderInfo.__fileurl=request.url;
			var urlStr=Method.formatUrlType(request.url);
			request.url=Method.formatUrl(request.url);
			context&&(this._contentLoaderInfo._reDomain_=context.applicationDomain);
			this.contains(this.__content__)&&this.removeChild(this.__content__);
			switch (urlStr){
				case "jpg":
				case "png":
				case "gif":
				case "jng":
					this._bitmapData=new BitmapData();
					var data=Browser.document.createElement("image");
					data.onload=function (__args){
						var args=arguments;
						if (Laya.HTMLVER&&!Laya.CONCHVER&&urlStr=="jng"){
							data=Method._JpgToPng(data);
							_$this._bitmapData.setType(/*iflash.display.BitmapData.CANVAS*/1);
							_$this._bitmapData.setCanvas(data);
						}else _$this._bitmapData.setImage(data);
						_$this.__content__=new Bitmap(_$this._bitmapData);
						_$this._contentLoaderInfo.__content__=_$this.__content__;
						_$this._contentLoaderInfo.height=_$this.__content__.height;
						_$this._contentLoaderInfo.width=_$this.__content__.width;
						_$this.addChild(_$this.__content__);
						_$this.__element__=data;
						_$this.contentLoaderInfo.dispatchEvent(new Event(/*iflash.events.Event.COMPLETE*/"complete",false,false,_$this.__content__));
						_$this.dispatchEvent(new Event(/*iflash.events.Event.COMPLETE*/"complete"));
					};
					data.onerror=function (__args){
						var args=arguments;
						/*__JS__ */alert(arguments[0]);
					};
					data.src=request.url;
					break ;
				case "swf":
				case "swp":
				case "cvt":
					Stage.USE_SMALL ? this.loadSwf_Small(request.url,urlStr):this.loadSwf(request.url);
					break ;
				default :
					this.contentLoaderInfo.dispatchEvent(new IOErrorEvent(/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError"));
					break ;
				}
		}

		__proto__.close=function(){}
		__proto__.unload=function(){
			if(this.__content__){
				this.removeChild(this.__content__);
				this.__content__._removeEvents_();
				this.__content__=null;
			}
			if(this.parent){
				this.parent._type_|=0x4000;
				this.parent.lyRemoveChildAt(this.childIndexOf(this));
			}
		}

		__proto__._checkloaderInfo=function(){
			var t=this._contentLoaderInfo;
			this._contentLoaderInfo=LoaderInfo.create(this._getID_);
			this._contentLoaderInfo.loader=this;
			this._contentLoaderInfo._getEvents_(t);
			t=null;
		}

		__proto__.loadBytes=function(data,context,temp){
			this._checkloaderInfo();
			var _this=this;
			this.contains(this.__content__)&&this.removeChild(this.__content__);
			if((data instanceof Array)){
			}
			else if((data instanceof iflash.utils.ByteArray )){
				data.position=0;
				var fileHeadType=this.getFileType(data);
				var tmpBytes=new ByteArray();
				if(fileHeadType !="unknown"){
				}
				else{
					context&&(this._contentLoaderInfo._reDomain_=context.applicationDomain);
					var fileUrl=temp.url;
					var filetype=temp.type
					data.position=0;
					data.readBytes(tmpBytes,0,tmpBytes.bytesAvailable);
					Stage.USE_SMALL ? this.loadSwf_Small(fileUrl,filetype,tmpBytes):this.loadSwf(fileUrl.substring(0,fileUrl.lastIndexOf("."+filetype)),tmpBytes);
				}
			}
			else{
				this._bitmapData=new BitmapData();
				this._bitmapData.setImage(data);
				this.__content__=this.contentLoaderInfo.__content__=new Bitmap(this._bitmapData);
				this.addChild(this.__content__);
				this.addEventListener(/*iflash.events.Event.ENTER_FRAME*/"enterFrame",BIND$(this,this.onEnterFrame));
			}
		}

		__proto__.getFileType=function(fileData){
			var b0=fileData.readUnsignedByte();
			var b1=fileData.readUnsignedByte();
			var fileType="unknown";
			if(b0==66 && b1==77){
				fileType="BMP";
			}
			else if(b0==255 && b1==216){
				fileType="JPG";
				}else if(b0==137 && b1==80){
				fileType="PNG";
				}else if(b0==71 && b1==73){
				fileType="GIF";
			}
			return fileType;
		}

		__proto__._buildLoaderContext=function(context){
			if(context==null){
				context=new LoaderContext();
			}
			if(context.applicationDomain==null){
				context.applicationDomain=new ApplicationDomain(ApplicationDomain.currentDomain);
			}
			return context;
		}

		__proto__.onEnterFrame=function(evt){
			this.contentLoaderInfo.dispatchEvent(new Event(/*iflash.events.Event.COMPLETE*/"complete",false,false));
			return false;
		}

		__proto__.unloadAndStop=function(gc){
			(gc===void 0)&& (gc=true);
			this.unload();
		}

		__proto__.deleteKey=function(arr){
			for(var i in arr){
				delete arr[i];
			}
			arr.length=0;
		}

		__proto__.loadSwf=function(url,tmpBytes){
			this._contentLoaderInfo.onload=iflash.method.bind(this,this.onLoadeComplete);
			if(tmpBytes){
				this._contentLoaderInfo.setUrl(url);
				this._contentLoaderInfo.setByteArray(tmpBytes);
			}else
			this._contentLoaderInfo.src=url;
		}

		__proto__.loadSwf_Small=function(url,urltype,tmpBytes){
			var _$this=this;
			var $this=this;
			if(!Loader.imgLoader){
				Loader.imgLoader=Browser.document.createElement("image");
			}
			else{
				this._contentLoaderInfo.onload=iflash.method.bind($this,this.onLoadeComplete);
				LoaderInfo.minibitmapData=new BitmapData();
				LoaderInfo.minibitmapData.setImage(Loader.imgLoader);
				if(tmpBytes){
					this._contentLoaderInfo.setUrl(url.substring(0,url.lastIndexOf("."+urltype)));
					this._contentLoaderInfo.setByteArray(tmpBytes);
				}else
				this._contentLoaderInfo.src=url;
				return;
			}
			Loader.imgLoader.onload=function (){
				_$this._contentLoaderInfo.onload=iflash.method.bind($this,_$this.onLoadeComplete);
				LoaderInfo.minibitmapData=new BitmapData();
				LoaderInfo.minibitmapData.setImage(Loader.imgLoader);
				if(tmpBytes){
					_$this._contentLoaderInfo.setUrl(url.substring(0,url.lastIndexOf("."+urltype)));
					_$this._contentLoaderInfo.setByteArray(tmpBytes);
				}else
				_$this._contentLoaderInfo.src=url;
			};
			Loader.imgLoader.onerror=function (){
				_$this.contentLoaderInfo.dispatchEvent(new IOErrorEvent(/*iflash.events.IOErrorEvent.IO_ERROR*/"ioError"));
			};
			var charIndex=url.lastIndexOf("."+urltype);
			Loader.imgLoader.src=url.substring(0,charIndex)+"/small.png";
		}

		__proto__.onLoadeComplete=function(__args){
			var args=arguments;
			this.addChild(this._contentLoaderInfo.__content__);
			this.__content__=this.contentLoaderInfo.__content__;
			if(this.preLoader.length>0)
				this.onPreLoader();
			else
			this.contentLoaderInfo.dispatchEvent(new Event(/*iflash.events.Event.COMPLETE*/"complete"));
		}

		__proto__.onPreLoader=function(){
			Runnner.preResCollection=[];
			for (var i=0;i < this.preLoader.length;i++){
				var obj=this.contentLoaderInfo.applicationDomain.newInstance(this.preLoader[i]);
				if((obj instanceof iflash.display.MovieClip )){
					obj.runner.getPreRes(this.contentLoaderInfo);
				}
				if((obj instanceof iflash.display.Shape )){
					Runnner.preResCollection.push(res);
				}
				if((obj instanceof iflash.display.LyImageElement )){
					Runnner.preResCollection.push(res);
				}
			};
			var arr=Runnner.preResCollection;
			this.preIndex=0;
			while(Runnner.preResCollection.length>0){
				var res=Runnner.preResCollection.pop();
				if((res instanceof iflash.display.Shape )){
					this.preIndex++;
					res._image_._image_.onload=iflash.method.bind(this,this.onPreComplete);
					res._image_._image_.src=res._image_.src;
				}
				if((res instanceof iflash.display.LyImageElement )){
					this.preIndex++;
					res._image_.onload=iflash.method.bind(this,this.onPreComplete);
					res._image_.src=res._image_.src;
				}
			}
		}

		__proto__.onPreComplete=function(obj){
			this.preIndex--;
			if(this.preIndex <=0){
				this.contentLoaderInfo.dispatchEvent(new Event(/*iflash.events.Event.COMPLETE*/"complete"));
			}
		}

		DEFUNENUMPTY$(__proto__,'_$get_contentLoaderInfo',function(){
			return this._contentLoaderInfo;
		});

		Object.defineProperty(__proto__,'contentLoaderInfo',{get:__proto__._$get_contentLoaderInfo,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get__getID_',function(){
			return++Loader.__ID__;
		});

		Object.defineProperty(__proto__,'_getID_',{get:__proto__._$get__getID_,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_content',function(){
			return this.__content__;
		});

		Object.defineProperty(__proto__,'content',{get:__proto__._$get_content,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_element',function(){
			return this.__element__;
		});

		Object.defineProperty(__proto__,'element',{get:__proto__._$get_element,enumerable:false});
		Loader.removeNameChar=function(fileName){
			var urls=fileName.split("/");
			var str,i=1,size=urls.length;
			while (i < size){
				str=urls[i];
				if (str==null)break ;
				if (str==''){
					urls.splice(i,1);
					continue ;
				}
				i+=1;
			}
			fileName=urls.join("/");
			return fileName;
		}

		Loader.preswfAsset=function(arr){
			Loader.preSwf=Loader.preSwf.concat(arr);
		}

		Loader.__isPNG=function(bytes){
			bytes.position=0;
			return (bytes.readByte ()==0x89 && bytes.readByte ()==0x50 && bytes.readByte ()==0x4E && bytes.readByte ()==0x47 && bytes.readByte ()==0x0D && bytes.readByte ()==0x0A && bytes.readByte ()==0x1A && bytes.readByte ()==0x0A);
		}

		Loader.__ID__=0;
		Loader.preSwf=[];
		Loader.imgLoader=null;
		return Loader;
	})(DisplayObjectContainer)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/stage.as=======10095.999916
	var Stage=iflash.display.Stage=(function(_super){
		function Stage(){
			this._infoFlag=true;
			this._scaleMode_="noScale";
			this.currentFocus=null;
			this._isInvalidate=false;
			this.stage3Ds=([new Stage3D(),new Stage3D(),new Stage3D(),new Stage3D()]);
			_super.call(this);
			this.scaleMode=this._scaleMode_;
		}

		REGCLASS$(Stage,'iflash.display.Stage',true,false,_super);
		var __proto__=Stage.prototype;
		__proto__.setSize=function(w,h){
			Laya.document.size(w,h);
		}

		__proto__.invalidate=function(){
			this._isInvalidate=true;
		}

		__proto__.size=function(width,height){
			Laya.document.size(width,height);
		}

		__proto__.setOrientationEx=function(value){
			Laya.document.setOrientationEx(value);
		}

		__proto__._hitTest_=function(x,y,forTouch,mouseDown){
			(forTouch===void 0)&& (forTouch=false);
			(mouseDown===void 0)&& (mouseDown=false);
			var target=_super.prototype._hitTest_.call(this,x,y,forTouch,mouseDown);
			if (!target)
				target=this;
			return target;
		}

		__proto__.sendRender=function(){
			if(this._isInvalidate){
				this._isInvalidate=false;
				this.lyDispatchEvent(/*iflash.events.Event.RENDER*/"render");
			}
		}

		DEFUNENUMPTY$(__proto__,'_$get_displayState',function(){
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_displayState',function(val){
		});

		Object.defineProperty(__proto__,'displayState',{get:__proto__._$get_displayState,set:__proto__._$set_displayState,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_focus',function(){
			return this.currentFocus
		});

		DEFUNENUMPTY$(__proto__,'_$set_focus',function(val){
			this.currentFocus=val;
		});

		Object.defineProperty(__proto__,'focus',{get:__proto__._$get_focus,set:__proto__._$set_focus,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_showDefaultContextMenu',function(){
			return false
		});

		DEFUNENUMPTY$(__proto__,'_$set_showDefaultContextMenu',function(val){
		});

		Object.defineProperty(__proto__,'showDefaultContextMenu',{get:__proto__._$get_showDefaultContextMenu,set:__proto__._$set_showDefaultContextMenu,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_stageWidth',function(){
			return Laya.document.body.width;
		});

		Object.defineProperty(__proto__,'stageWidth',{get:__proto__._$get_stageWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_allowsFullScreen',function(){
			return false;
		});

		Object.defineProperty(__proto__,'allowsFullScreen',{get:__proto__._$get_allowsFullScreen,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_allowsFullScreenInteractive',function(){
			return false;
		});

		Object.defineProperty(__proto__,'allowsFullScreenInteractive',{get:__proto__._$get_allowsFullScreenInteractive,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_showInfo',function(value){
			if (value !=this._infoFlag){
				Laya.config.showInfo=value;
				Laya.SHOW_FPS=value;
				Laya.conch && Laya.conch.ShowFPS(value,Laya.conch.m_pFps);
			}
		});

		Object.defineProperty(__proto__,'showInfo',{set:__proto__._$set_showInfo,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_isEaqual',function(value){
			Laya.document.adapter.isEaqual=value;
		});

		Object.defineProperty(__proto__,'isEaqual',{set:__proto__._$set_isEaqual,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_stageHeight',function(){
			return Laya.document.body.height;
		});

		Object.defineProperty(__proto__,'stageHeight',{get:__proto__._$get_stageHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scaleMode',function(){
			return this._scaleMode_;
		});

		DEFUNENUMPTY$(__proto__,'_$set_scaleMode',function(value){
			this._scaleMode_=value;
			switch (value){
				case /*iflash.display.StageScaleMode.SHOW_ALL*/"showAll":
					Laya.document.adapter.isEaqual=true;
					Laya.document.adapter.autoScaleDifference=0;
					break ;
				case /*iflash.display.StageScaleMode.NO_SCALE*/"noScale":
					break ;
				case /*iflash.display.StageScaleMode.NO_BORDER*/"noBorder":
					Laya.document.adapter.isEaqual=false;
					Laya.document.adapter.autoScaleDifference=0.9;
					break ;
				}
		});

		Object.defineProperty(__proto__,'scaleMode',{get:__proto__._$get_scaleMode,set:__proto__._$set_scaleMode,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_color',function(){
			return LAYABOX.parseInt(Laya.document.body.bgcolor.replace("#","0x"),16);
		});

		DEFUNENUMPTY$(__proto__,'_$set_color',function(value){
			var s=value.toString(16);
			for (var i=s.length;i < 6;i++){
				s="0"+s;
			}
			Laya.document.body.bgcolor="#"+s;
		});

		Object.defineProperty(__proto__,'color',{get:__proto__._$get_color,set:__proto__._$set_color,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_bgcolor',function(value){
			Laya.document.body.bgcolor=value;
		});

		Object.defineProperty(__proto__,'bgcolor',{set:__proto__._$set_bgcolor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_autoScaleDifference',function(value){
			Laya.document.adapter.autoScaleDifference=value;
		});

		Object.defineProperty(__proto__,'autoScaleDifference',{set:__proto__._$set_autoScaleDifference,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_frameRate',function(){
			return Stage.__frameRate__
		});

		DEFUNENUMPTY$(__proto__,'_$set_frameRate',function(value){
			Stage.__frameRate__=1000/value;
		});

		Object.defineProperty(__proto__,'frameRate',{get:__proto__._$get_frameRate,set:__proto__._$set_frameRate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_align',function(){
			return ""
		});

		DEFUNENUMPTY$(__proto__,'_$set_align',function(value){
		});

		Object.defineProperty(__proto__,'align',{get:__proto__._$get_align,set:__proto__._$set_align,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_autorotate',function(){
			return Laya.document.adapter.autorotate;
		});

		DEFUNENUMPTY$(__proto__,'_$set_autorotate',function(type){
			Laya.document.adapter.autorotate=type;
		});

		Object.defineProperty(__proto__,'autorotate',{get:__proto__._$get_autorotate,set:__proto__._$set_autorotate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_stageFocusRect',function(){
			Log.unfinished("Stage","stageFocusRect");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_stageFocusRect',function(param1){
			Log.unfinished("Stage","stageFocusRect");
		});

		Object.defineProperty(__proto__,'stageFocusRect',{get:__proto__._$get_stageFocusRect,set:__proto__._$set_stageFocusRect,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_quality',function(){
			Log.unfinished("Stage","quality");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_quality',function(value){
			Log.unfinished("Stage","quality");
		});

		Object.defineProperty(__proto__,'quality',{get:__proto__._$get_quality,set:__proto__._$set_quality,enumerable:false});
		Stage._$GET_stage=function(){
			return Stage._stage ? Stage._stage :(Stage._stage=new Stage());
		}

		Object.defineProperty(Stage,'stage',{get:Stage._$GET_stage,set:iflash.display.DisplayObjectContainer._$SET_stage,enumerable:false});
		Stage.USE_SMALL=true;
		Stage.__frameRate__=16;
		Stage._stage=null;
		return Stage;
	})(DisplayObjectContainer)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/text/engine/textline.as=======10095.999652
	var TextLine=iflash.text.engine.TextLine=(function(_super){
		function TextLine(){
			this.userData=null;
			_super.apply(this,arguments);
			Log.unfinished("TextLine","TextLine");
		}

		REGCLASS$(TextLine,'iflash.text.engine.TextLine',true,false,_super);
		var __proto__=TextLine.prototype;
		__proto__.dump=function(){
			Log.unfinished("TextLine","dump");
			return "";
		}

		__proto__.flushAtomData=function(){
			Log.unfinished("TextLine","flushAtomData");
		}

		__proto__.getAtomBidiLevel=function(atomIndex){
			Log.unfinished("TextLine","getAtomBidiLevel");
			return 0;
		}

		__proto__.getAtomBounds=function(atomIndex){
			Log.unfinished("TextLine","getAtomBounds");
			return null;
		}

		__proto__.getAtomCenter=function(atomIndex){
			Log.unfinished("TextLine","getAtomCenter");
			return 0;
		}

		__proto__.getAtomGraphic=function(atomIndex){
			Log.unfinished("TextLine","getAtomGraphic");
			return null;
		}

		__proto__.getAtomIndexAtCharIndex=function(charIndex){
			Log.unfinished("TextLine","getAtomIndexAtCharIndex");
			return 0;
		}

		__proto__.getAtomIndexAtPoint=function(stageX,stageY){
			Log.unfinished("TextLine","getAtomIndexAtPoint");
			return 0;
		}

		__proto__.getAtomTextBlockBeginIndex=function(atomIndex){
			Log.unfinished("TextLine","getAtomTextBlockBeginIndex");
			return 0;
		}

		__proto__.getAtomTextBlockEndIndex=function(atomIndex){
			Log.unfinished("TextLine","getAtomTextBlockEndIndex");
			return 0;
		}

		__proto__.getAtomTextRotation=function(atomIndex){
			Log.unfinished("TextLine","getAtomTextRotation");
			return "";
		}

		__proto__.getAtomWordBoundaryOnLeft=function(atomIndex){
			Log.unfinished("TextLine","getAtomWordBoundaryOnLeft");
			return false;
		}

		__proto__.getBaselinePosition=function(baseline){
			Log.unfinished("TextLine","getBaselinePosition");
			return 0;
		}

		__proto__.getMirrorRegion=function(mirror){
			Log.unfinished("TextLine","getMirrorRegion");
			return null;
		}

		DEFUNENUMPTY$(__proto__,'_$get_ascent',function(){
			Log.unfinished("TextLine","ascent");
			return 0;
		});

		Object.defineProperty(__proto__,'ascent',{get:__proto__._$get_ascent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_atomCount',function(){
			Log.unfinished("TextLine","atomCount");
			return 0;
		});

		Object.defineProperty(__proto__,'atomCount',{get:__proto__._$get_atomCount,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_focusRect',function(focusRect){
			Log.unfinished("TextLine","focusRect");
		});

		Object.defineProperty(__proto__,'focusRect',{set:__proto__._$set_focusRect,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_contextMenu',function(value){
			Log.unfinished("TextLine","contextMenu");
		});

		Object.defineProperty(__proto__,'contextMenu',{get:_super.prototype._$get_contextMenu,set:__proto__._$set_contextMenu,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textBlockBeginIndex',function(){
			Log.unfinished("TextLine","textBlockBeginIndex");
			return 0;
		});

		Object.defineProperty(__proto__,'textBlockBeginIndex',{get:__proto__._$get_textBlockBeginIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_hasTabs',function(){
			Log.unfinished("TextLine","hasTabs");
			return false;
		});

		Object.defineProperty(__proto__,'hasTabs',{get:__proto__._$get_hasTabs,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_descent',function(){
			Log.unfinished("TextLine","descent");
			return 0;
		});

		Object.defineProperty(__proto__,'descent',{get:__proto__._$get_descent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_mirrorRegions',function(){
			Log.unfinished("TextLine","mirrorRegions");
			return null;
		});

		Object.defineProperty(__proto__,'mirrorRegions',{get:__proto__._$get_mirrorRegions,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_totalAscent',function(){
			Log.unfinished("TextLine","totalAscent");
			return 0;
		});

		Object.defineProperty(__proto__,'totalAscent',{get:__proto__._$get_totalAscent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_hasGraphicElement',function(){
			Log.unfinished("TextLine","hasGraphicElement");
			return false;
		});

		Object.defineProperty(__proto__,'hasGraphicElement',{get:__proto__._$get_hasGraphicElement,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_nextLine',function(){
			Log.unfinished("TextLine","nextLine");
			return null;
		});

		Object.defineProperty(__proto__,'nextLine',{get:__proto__._$get_nextLine,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_previousLine',function(){
			Log.unfinished("TextLine","previousLine");
			return null;
		});

		Object.defineProperty(__proto__,'previousLine',{get:__proto__._$get_previousLine,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_rawTextLength',function(){
			Log.unfinished("TextLine","rawTextLength");
			return 0;
		});

		Object.defineProperty(__proto__,'rawTextLength',{get:__proto__._$get_rawTextLength,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_specifiedWidth',function(){
			Log.unfinished("TextLine","specifiedWidth");
			return 0;
		});

		Object.defineProperty(__proto__,'specifiedWidth',{get:__proto__._$get_specifiedWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_tabChildren',function(enable){
			Log.unfinished("TextLine","tabChildren");
		});

		Object.defineProperty(__proto__,'tabChildren',{get:_super.prototype._$get_tabChildren,set:__proto__._$set_tabChildren,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_tabEnabled',function(enabled){
			Log.unfinished("TextLine","tabChildren");
		});

		Object.defineProperty(__proto__,'tabEnabled',{get:_super.prototype._$get_tabEnabled,set:__proto__._$set_tabEnabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$set_tabIndex',function(index){
			Log.unfinished("TextLine","tabIndex");
		});

		Object.defineProperty(__proto__,'tabIndex',{get:_super.prototype._$get_tabIndex,set:__proto__._$set_tabIndex,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textBlock',function(){
			Log.unfinished("TextLine","textBlock");
			return null;
		});

		Object.defineProperty(__proto__,'textBlock',{get:__proto__._$get_textBlock,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textHeight',function(){
			Log.unfinished("TextLine","textHeight");
			return 0;
		});

		Object.defineProperty(__proto__,'textHeight',{get:__proto__._$get_textHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_textWidth',function(){
			Log.unfinished("TextLine","textWidth");
			return 0;
		});

		Object.defineProperty(__proto__,'textWidth',{get:__proto__._$get_textWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_totalDescent',function(){
			Log.unfinished("TextLine","totalDescent");
			return 0;
		});

		Object.defineProperty(__proto__,'totalDescent',{get:__proto__._$get_totalDescent,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_totalHeight',function(){
			Log.unfinished("TextLine","totalHeight");
			return 0;
		});

		Object.defineProperty(__proto__,'totalHeight',{get:__proto__._$get_totalHeight,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_unjustifiedTextWidth',function(){
			Log.unfinished("TextLine","unjustifiedTextWidth");
			return 0;
		});

		Object.defineProperty(__proto__,'unjustifiedTextWidth',{get:__proto__._$get_unjustifiedTextWidth,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_validity',function(){
			Log.unfinished("TextLine","validity");
			return "";
		});

		DEFUNENUMPTY$(__proto__,'_$set_validity',function(value){
			Log.unfinished("TextLine","validity");
		});

		Object.defineProperty(__proto__,'validity',{get:__proto__._$get_validity,set:__proto__._$set_validity,enumerable:false});
		TextLine.MAX_LINE_WIDTH=1000000;
		return TextLine;
	})(DisplayObjectContainer)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/laya/dom/htmlbodyelement.as=======10095.999160
	var HTMLBodyElement=iflash.laya.dom.HTMLBodyElement=(function(_super){
		function HTMLBodyElement(){
			_super.call(this);
			this._type2_=0;
			this.group=true;
			this._tmctr_=TimerCtrl.__DEFAULT__;
			this.baseURI=new URI(EventDispatcher.window.location.href);
			this.addType(0x8000 | 0x40000);
			this.pos(0,0);
			this.nodeName="body";
			this.id="body";
			this.style.overflow="hidden";
			this.style.fontSize="12";
			this.bgcolor="black";
			EventDispatcher.document.body=this;
		}

		REGCLASS$(HTMLBodyElement,'iflash.laya.dom.HTMLBodyElement',true,false,_super);
		var __proto__=HTMLBodyElement.prototype;
		__proto__.lyonResize=function(e){
			EventDispatcher.document.adapter.onResize(e);
		}

		__proto__.onChildRepos=function(child){
			Log.unfinished("HTMLBodyElement","onChildRepos");
		}

		__proto__.onChildResize=function(child){
			Log.unfinished("HTMLBodyElement","onChildResize");
		}

		__proto__.scrollTo=function(x,y){
			if (this._scroll_.x==x && this._scroll_.y==y)
				return;
			iflash.laya.dom.HTMLElement.prototype.scrollTo.call(this,x,y);
			EventDispatcher.window.onScroll && EventDispatcher.window.onScroll();
		}

		return HTMLBodyElement;
	})(HTMLDivElement)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/movieclip.as=======10094.999936
	var MovieClip=iflash.display.MovieClip=(function(_super){
		function MovieClip(){
			this._interval_=60;
			this._preFrame_=0;
			this._preTime_=0;
			this.__running__=false;
			this.runner=null;
			this._scriptList_=[];
			this._animData_=new AnimationData();
			_super.call(this);}
		REGCLASS$(MovieClip,'iflash.display.MovieClip',true,false,_super);
		var __proto__=MovieClip.prototype;
		__proto__._onupdate_=function(tm,tmgo,o){
			if(this.isPlaying){
				if ((tm-this._preTime_)>=this.interval){
					this.runner._updata_(this);
					this._scriptList_[this.currentFrame] && this._scriptList_[this.currentFrame].call(this);
					this._preTime_=tm;
				}
			}
			return this.__running__;
		}

		__proto__.addFrameScript=function(__rest){
			var rest=arguments;
			for (var i=0,sz=rest.length;i < sz;i+=2){
				this._addFrameScript_(rest[i],rest[i+1]);
			}
		}

		__proto__._addFrameScript_=function(index,fn){
			this._scriptList_[index+1]=fn;
		}

		__proto__.gotoAndPlay=function(frame,scene){
			this._gotoAndPlay_(frame,scene);
			this._animData_.isStop=false;
		}

		__proto__._gotoAndPlay_=function(frame,scene){
			if((typeof frame=='string')){
				this.runner.gotoAndPlay(frame,this);
				this._scriptList_[frame] && this._scriptList_[frame].call(this);
				return;
			}
			this.runner.gotoAndPlay(frame-1,this);
			this._scriptList_[this.currentFrame] && this._scriptList_[this.currentFrame].call(this);
		}

		__proto__.gotoAndStop=function(frame,scene){
			if(this.runner==null)return;
			if((typeof frame=='string')){
				this.runner.gotoAndStop(frame,this);
				this._scriptList_[frame] && this._scriptList_[frame].call(this);
				return;
			}
			this.runner.gotoAndStop(frame-1,this);
			this._scriptList_[this.currentFrame] && this._scriptList_[this.currentFrame].call(this);
		}

		__proto__.nextFrame=function(){
			this.runner.gotoAndStop(this._animData_.currentFrame+1,this);
		}

		__proto__.play=function(){
			this.runner.play(this);
		}

		__proto__.stop=function(){
			if(this.runner)
				this.runner.stop(this);
		}

		__proto__.prevScene=function(){
			Log.unfinished("MovieClip","prevScene");
		}

		__proto__.nextScene=function(){
			Log.unfinished("MovieClip","nextScene");
		}

		__proto__.addFrameTimer=function(fn){
			return Laya.document.body._tmctr_.addFrameTimer(fn,this);
		}

		__proto__.addChild=function(child){
			if(this._type_&0x10&&this.numChildren){
				this.sortChildsByZIndex();
				var disp=this.getChildAt(this.numChildren-1);
				child.zIndex=disp.zIndex+1;
			}
			return iflash.display.DisplayObjectContainer.prototype.addChild.call(this,child);
		}

		__proto__.addChildAt=function(child,index){
			if(this._type_&0x10&&this.numChildren){
				this.sortChildsByZIndex();
				var disp=this.getChildAt(index);
				child.zIndex=disp.zIndex-1;
				if(index>0){
					if(child.zIndex<this.getChildAt(index-1).zIndex){
						var i=0;
						while(i<index-1)
						{this.getChildAt(i).zIndex--;i++;}
					}
				}
			}
			return iflash.display.DisplayObjectContainer.prototype.addChildAt.call(this,child,index);
		}

		__proto__._lyToBody_=function(){
			iflash.display.DisplayObjectContainer.prototype._lyToBody_.call(this);
			this._preTime_=0;
			if(this.runner)
				this.onupdate=this._onupdate_;
			this.__running__=true;
		}

		__proto__._lyUnToBody_=function(){
			this.__running__=false;
			iflash.display.DisplayObjectContainer.prototype._lyUnToBody_.call(this);
			if(this._private_.onupdate){this._private_.onupdate.deleted=true;this._private_.onupdate=null};
		}

		__proto__.stopAll=function(mc){
			var i=mc.numChildren;
			while(i){
				var m=mc.getChildAt (i-1);
				m&&(m.stop(),this.stopAll(m));
				i--;
			}
		}

		__proto__.lyclone=function(){
			var movie=new MovieClip();
			movie._animData_=this._animData_.lyclone();
			movie.runner=this.runner;
			movie._interval_=this._interval_;
			movie.__id__=this.__id__;
			movie.width=this.width;
			movie.height=this.height;
			movie.characterId=this.characterId;
			movie._type_|=(this._type_&0x10);
			movie.gotoAndPlay(1);
			return movie;
		}

		DEFUNENUMPTY$(__proto__,'_$set_onupdate',function(fn){
			if(this._private_.onupdate)(this._private_.onupdate.deleted=true);
			this._private_.onupdate=this.addFrameTimer(fn);
		});

		Object.defineProperty(__proto__,'onupdate',{set:__proto__._$set_onupdate,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_interval',function(){
			return Stage.__frameRate__;
		});

		DEFUNENUMPTY$(__proto__,'_$set_interval',function(value){
			this._interval_=value;
		});

		Object.defineProperty(__proto__,'interval',{get:__proto__._$get_interval,set:__proto__._$set_interval,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_currentFrame',function(){
			var value=this._animData_.currentFrame+1;
			return value<1?1:value;
		});

		Object.defineProperty(__proto__,'currentFrame',{get:__proto__._$get_currentFrame,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_enabled',function(){return true;});
		DEFUNENUMPTY$(__proto__,'_$set_enabled',function(value){
			Log.unfinished("MovieClip","enabled");
		});

		Object.defineProperty(__proto__,'enabled',{get:__proto__._$get_enabled,set:__proto__._$set_enabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_totalFrames',function(){
			return this._animData_.totalFrame;
		});

		Object.defineProperty(__proto__,'totalFrames',{get:__proto__._$get_totalFrames,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_currentLabel',function(){
			Log.unfinished("MovieClip","currentLabel");
			return "";
		});

		Object.defineProperty(__proto__,'currentLabel',{get:__proto__._$get_currentLabel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_isPlaying',function(){
			return !this._animData_.isStop;
		});

		Object.defineProperty(__proto__,'isPlaying',{get:__proto__._$get_isPlaying,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_framesLoaded',function(){
			Log.unfinished("MovieClip","framesLoaded");
			return 0;
		});

		Object.defineProperty(__proto__,'framesLoaded',{get:__proto__._$get_framesLoaded,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_currentFrameLabel',function(){
			Log.unfinished("MovieClip","currentFrameLabel");
			return "";
		});

		Object.defineProperty(__proto__,'currentFrameLabel',{get:__proto__._$get_currentFrameLabel,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_currentScene',function(){
			Log.unfinished("MovieClip","currentScene");
			return null;
		});

		Object.defineProperty(__proto__,'currentScene',{get:__proto__._$get_currentScene,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_currentLabels',function(){
			Log.unfinished("MovieClip","currentLabels");
			return null;
		});

		Object.defineProperty(__proto__,'currentLabels',{get:__proto__._$get_currentLabels,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_scenes',function(){
			Log.unfinished("MovieClip","scenes");
			return null;
		});

		Object.defineProperty(__proto__,'scenes',{get:__proto__._$get_scenes,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_trackAsMenu',function(){
			Log.unfinished("MovieClip","trackAsMenu");
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_trackAsMenu',function(value){
			Log.unfinished("MovieClip","trackAsMenu");
		});

		Object.defineProperty(__proto__,'trackAsMenu',{get:__proto__._$get_trackAsMenu,set:__proto__._$set_trackAsMenu,enumerable:false});
		MovieClip.USE_LINK_CLASS=true;
		return MovieClip;
	})(Sprite)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/shaderjob.as=======10094.999918
	var ShaderJob=iflash.display.ShaderJob=(function(_super){
		function ShaderJob(shader,target,width,height){
			_super.apply(this,arguments);
			(width===void 0)&& (width=0);
			(height===void 0)&& (height=0);
		}

		REGCLASS$(ShaderJob,'iflash.display.ShaderJob',true,false,_super);
		var __proto__=ShaderJob.prototype;
		__proto__.start=function(waitForCompletion){
			(waitForCompletion===void 0)&& (waitForCompletion=false);
		}

		return ShaderJob;
	})(Sprite)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/simplebutton.as=======10093.999872
	var SimpleButton=iflash.display.SimpleButton=(function(_super){
		function SimpleButton(upState,overState,downState,hitTestState){
			this._enabled=true;
			_super.call(this);
			this.addEventListener(/*iflash.events.MouseEvent.MOUSE_OUT*/"mouseout",BIND$(this,this._onmouseOut_));
			this.addEventListener(/*iflash.events.MouseEvent.MOUSE_OVER*/"mouseover",BIND$(this,this._onmouseOver_));
			this.addEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",BIND$(this,this._onmouseDown_));
			this.addEventListener(/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup",BIND$(this,this._onmouseUp_));
			this.mouseChildren=false;
		}

		REGCLASS$(SimpleButton,'iflash.display.SimpleButton',true,false,_super);
		var __proto__=SimpleButton.prototype;
		__proto__._onmouseOut_=function(e){this.gotoAndStop(1);}
		__proto__.switchState=function(state){this.gotoAndStop(state);}
		__proto__._onmouseUp_=function(e){this.gotoAndStop(1);}
		__proto__._onmouseDown_=function(e){this.gotoAndStop(3);}
		__proto__._onmouseOver_=function(e){this.gotoAndStop(2);}
		__proto__.lyclone=function(){
			var movie=new SimpleButton();
			movie._animData_=this._animData_.lyclone();
			movie.runner=this.runner;
			movie.__id__=this.__id__;
			movie._interval_=this._interval_;
			movie.width=this.width;
			movie.height=this.height;
			movie._type_|=0x10;
			movie.gotoAndStop(1);
			return movie;
		}

		DEFUNENUMPTY$(__proto__,'_$get_trackAsMenu',function(){
			return false;
		});

		DEFUNENUMPTY$(__proto__,'_$set_trackAsMenu',function(param1){
		});

		Object.defineProperty(__proto__,'trackAsMenu',{get:__proto__._$get_trackAsMenu,set:__proto__._$set_trackAsMenu,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_useHandCursor',function(){return false;});
		DEFUNENUMPTY$(__proto__,'_$set_useHandCursor',function(param1){
		});

		Object.defineProperty(__proto__,'useHandCursor',{get:__proto__._$get_useHandCursor,set:__proto__._$set_useHandCursor,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_downState',function(){return null;});
		DEFUNENUMPTY$(__proto__,'_$set_downState',function(param1){
		});

		Object.defineProperty(__proto__,'downState',{get:__proto__._$get_downState,set:__proto__._$set_downState,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_enabled',function(){return this._enabled;});
		DEFUNENUMPTY$(__proto__,'_$set_enabled',function(param1){
			this._enabled=param1;
		});

		Object.defineProperty(__proto__,'enabled',{get:__proto__._$get_enabled,set:__proto__._$set_enabled,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_upState',function(){return null;});
		DEFUNENUMPTY$(__proto__,'_$set_upState',function(param1){
		});

		Object.defineProperty(__proto__,'upState',{get:__proto__._$get_upState,set:__proto__._$set_upState,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_overState',function(){return null;});
		DEFUNENUMPTY$(__proto__,'_$set_overState',function(param1){
		});

		Object.defineProperty(__proto__,'overState',{get:__proto__._$get_overState,set:__proto__._$set_overState,enumerable:false});
		DEFUNENUMPTY$(__proto__,'_$get_hitTestState',function(){return null;});
		DEFUNENUMPTY$(__proto__,'_$set_hitTestState',function(param1){
		});

		Object.defineProperty(__proto__,'hitTestState',{get:__proto__._$get_hitTestState,set:__proto__._$set_hitTestState,enumerable:false});
		return SimpleButton;
	})(MovieClip)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/swf/classs/mc.as=======10093.999863
	iflash.display.swf.classs.MC=(function(_super){
		function MC(){
			_super.apply(this,arguments);
			var movieClip=this["__data__"];
			this._animData_=movieClip._animData_.lyclone();
			this.runner=movieClip.runner;
			this._interval_=movieClip._interval_;
			this._type_|=0x10;
			this.__id__=movieClip.__id__;
			this.gotoAndPlay(1);
		}

		REGCLASS$(MC,'iflash.display.swf.classs.MC',true,false,_super);
		return MC;
	})(MovieClip)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash/display/swf/classs/sb.as=======10092.999798
	var SB=iflash.display.swf.classs.SB=(function(_super){
		function SB(upState,overState,downState,hitTestState){
			_super.apply(this,arguments);
			var movieClip=this["__data__"];
			this._animData_=movieClip._animData_.lyclone();
			this.runner=movieClip.runner;
			this.runner=movieClip.runner;
			this._interval_=movieClip._interval_;
			this._type_|=0x10;
			this.__id__=movieClip.__id__;
			this.gotoAndStop(1);
		}

		REGCLASS$(SB,'iflash.display.swf.classs.SB',true,false,_super);
		return SB;
	})(SimpleButton)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/uint.jas=======199.999985
	var uint=(function(){
		function uint(value,offset){
			(value===void 0)&& (value=0);
			(offset===void 0)&& (offset=0);
			if(!value)return 0;
			if((value instanceof iflash.utils.BigInteger )){
				if (value.compareTo(uint._CIRCLE)>=0 && value.compareTo(uint.ZERO)< 0)
					return value.add(uint.CIRCLE);
				else if (value.compareTo(uint._CIRCLE)< 0){
					return uint(value.mod(uint.CIRCLE));
				}
				else if (value.compareTo(4294967295)> 0){
					value=value.mod(uint.CIRCLE);
				}
				return value;
			}
			else{
				value=LAYABOX.parseInt(value);
				if(value>=-4294967295-1&&value<0)
					return value+4294967295+1+offset;
				else if(value<-4294967295-1)
				return uint(value%(4294967295+1))+offset
				else if(value>4294967295)
				value=value%(4294967295+1)+offset;
				return value;
			}
		}

		REGCLASS$(uint,'uint',true,false);
		var __proto__=uint.prototype;
		__proto__.toString=function(radix){
			(radix===void 0)&& (radix=10);
			return Number(this).toString(radix);
		}

		__proto__.valueOf=function(){
			return this;
		}

		__proto__.toExponential=function(p){
			(p===void 0)&& (p=0);
			return Number(this).toExponential(p);
		}

		__proto__.toPrecision=function(p){
			(p===void 0)&& (p=0);
			return Number(this).toPrecision(p);
		}

		__proto__.toFixed=function(p){
			(p===void 0)&& (p=0);
			return Number(this).toFixed(p);
		}

		uint.MAX_VALUE=2147483647;
		uint.MAX_UINT=4294967295;
		uint.length=1;
		REGSTATICATTR$(uint,
		['_MAX_UINT',function(){return this._MAX_UINT=new BigInteger("-4294967295");
			},'ZERO',function(){return this.ZERO=new BigInteger("0");
			},'CIRCLE',function(){return this.CIRCLE=new BigInteger("4294967296");
			},'_CIRCLE',function(){return this._CIRCLE=new BigInteger("-4294967296");
		}

		]);
		return uint;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/mx/utils/stringutil.as=======199.999620
	var StringUtil=mx.utils.StringUtil=(function(){
		function StringUtil(){};
		REGCLASS$(StringUtil,'mx.utils.StringUtil',true,true);
		StringUtil.trim=function(str){
			if (str==null){
				return '';
			};
			var startIndex=0;
			while (StringUtil.isWhitespace(str.charAt(startIndex))){
				++startIndex;
			};
			var endIndex=str.length-1;
			while (StringUtil.isWhitespace(str.charAt(endIndex))){
				--endIndex;
			}
			if (endIndex >=startIndex){
				return str.slice(startIndex,endIndex+1);
			}
			else{
				return "";
			}
		}

		StringUtil.trimArrayElements=function(value,delimiter){
			if (value !="" && value !=null){
				var items=value.split(delimiter);
				var len=items.length;
				for (var i=0;i < len;i++){
					items[i]=mx.utils.StringUtil.trim(items[i]);
				}
				if (len > 0){
					value=items.join(delimiter);
				}
			}
			return value;
		}

		StringUtil.isWhitespace=function(character){
			switch (character){
				case " " :
				case "\t" :
				case "\r" :
				case "\n" :
				case "\f" :
					return true;
				default :
					return false;
				}
		}

		StringUtil.substitute=function(str,__rest){
			var rest=[];for(var i=1,sz=arguments.length;i<sz;i++)rest.push(arguments[i]);
			if (str==null){
				return '';
			};
			var len=rest.length;
			var args;
			if (len==1 && ((rest[0])instanceof Array)){
				args=rest [0];
				len=args.length;
			}
			else{
				args=rest;
			}
			for (var i=0;i < len;i++){
				str=str.replace(new RegExp("\\{"+i+"\\}","g"),args[i]);
			}
			return str;
		}

		return StringUtil;
	})()


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/argumenterror.jas=======99.999993
	var ArgumentError=(function(_super){
		function ArgumentError(message){
			_super.apply(this,arguments);
			(message===void 0)&& (message="");
		}

		REGCLASS$(ArgumentError,'ArgumentError',true,true);
		return ArgumentError;
	})(Error)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/rangeerror.jas=======99.999986
	var RangeError=(function(_super){
		function RangeError(message){
			_super.apply(this,arguments);
			(message===void 0)&& (message="");
		}

		REGCLASS$(RangeError,'RangeError',true,true);
		return RangeError;
	})(Error)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflash.as=======98.999393
	var IFlash=(function(_super){
		function IFlash(sprite){
			this.stage=null;
			IFlash._sprite_=sprite;
			_super.call(this,sprite);
		}

		REGCLASS$(IFlash,'IFlash',true,false,_super);
		var __proto__=IFlash.prototype;
		__proto__._onInit_=function(){
			Laya.document.flashContainer.displayobjectcontainer=EventManager.stage=this.stage=Stage.stage;
			var fn=IFlash.__beforInit__;
			(fn!=null)&&fn();
			if (IFlash.__width__ > 0 && IFlash.__height__ > 0)Laya.document.size(IFlash.__width__,IFlash.__height__);
			IFlash.Start();
			Laya.document.flashContainer.displayobjectcontainer=EventManager.stage=this.stage=Stage.stage;
			Laya.document.regNodeClass("ani",MovieClip);
			Laya.window.addEventListener(/*iflash.events.Event.RESIZE*/"resize",BIND$(this,this._resize_));
			this.stage.bgcolor=IFlash.__bgColor;
			this.stage.setOrientationEx(IFlash.__setOrientationEx);
			this.stage.showInfo=IFlash.__showInfo;
			IFlash._sprite_=IFlash._sprite_ || (new IFlashMain());
			if (IFlash._sprite_ && !IFlash._sprite_.parent && IFlash.__loadResource__==null){
				this.stage.addChild(IFlash._sprite_);
			}
			IFlash.__loadResource__ && IFlash.__StartLoadResource__();
		}

		__proto__._resize_=function(e){
			e._lysetTarget(this.stage);
			this.stage.dispatchEvent(e);
		}

		IFlash._$GET_isRuningOnAccelerator=function(){
			return Laya.CONCHVER;
		}

		Object.defineProperty(IFlash,'isRuningOnAccelerator',{get:IFlash._$GET_isRuningOnAccelerator,set:iflash.laya.ILaya._$SET_isRuningOnAccelerator,enumerable:false});
		IFlash.preSwfAssets=function(assets){
			Loader.preswfAsset(assets);
		}

		IFlash.setSize=function(width,height){
			IFlash.__width__=width;
			IFlash.__height__=height;
			if(Stage.stage){
				Stage.stage.size(IFlash.__width__,IFlash.__height__);
			}
		}

		IFlash.regBeforInit=function(callback){
			IFlash.__beforInit__=callback;
		}

		IFlash.setBgcolor=function(value){
			IFlash.__bgColor=value;
			if(Stage.stage){
				Stage.stage.bgcolor=value;
			}
		}

		IFlash.setOrientationEx=function(value){
			IFlash.__setOrientationEx=value;
			if(Stage.stage){
				Stage.stage.setOrientationEx(value);
			}
		}

		IFlash.showInfo=function(value){
			IFlash.__showInfo=value;
			if(Stage.stage){
				Stage.stage.showInfo=value;
			}
		}

		IFlash.Start=function(){
			if (Laya.document.flashContainer)return;
			Laya.document.flashContainer=Laya.document.body.appendChild ("flashdisplay");
			Laya.document.flashContainer.rect(0,0,Laya.document.body.width,Laya.document.body.height);
			Register.regClass(/*iflash.laya.runner.DataType.LYIMAGELEMENT*/51,LyImageElement);
			Register.regClass(/*iflash.laya.runner.DataType.SHAPE*/52,Shape);
			Register.regClass(/*iflash.laya.runner.DataType.BITMAPDATA*/53,BitmapData);
			Register.regClass(/*iflash.laya.runner.DataType.BITMAP*/54,Bitmap);
			Register.regClass(/*iflash.laya.runner.DataType.SPRITE*/55,Sprite);
			Register.regClass(/*iflash.laya.runner.DataType.MOVIECLIP*/56,MovieClip);
			Register.regClass(/*iflash.laya.runner.DataType.BUTTON*/58,SimpleButton);
			Register.regClass(/*iflash.laya.runner.DataType.TEXTFIELD*/57,TextField1);
			Register.regFunction(/*iflash.laya.runner.DataType.REMOVE_ALL*/151,AnimationCreate.removeAll,2,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.NULL*/0);
			Register.regFunction(/*iflash.laya.runner.DataType.SET_INSTANCE_NAME*/152,AnimationCreate.setInstanceName,3,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.STRING*/6);
			Register.regFunction(/*iflash.laya.runner.DataType.REMOVE_INSTANCE_NAME*/153,AnimationCreate.removeInstanceName,3,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.STRING*/6);
			Register.regFunction(/*iflash.laya.runner.DataType.NEW_OBJECT*/154,AnimationCreate.newObject,4,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.STRING*/6);
			Register.regFunction(/*iflash.laya.runner.DataType.ADD_CHILD*/155,AnimationCreate.addChild,3,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.SHORT*/4);
			Register.regFunction(/*iflash.laya.runner.DataType.REMOVE_CHILD*/156,AnimationCreate.removeChild,2,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.SHORT*/4);
			Register.regFunction(/*iflash.laya.runner.DataType.SET_TRANSFORM*/157,AnimationCreate.setTransform,9,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5);
			Register.regFunction(/*iflash.laya.runner.DataType.POS*/158,AnimationCreate.pos,4,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5);
			Register.regFunction(/*iflash.laya.runner.DataType.EMPTY*/159,AnimationCreate.empty,2,false,/*iflash.laya.runner.DataType.NULL*/0,/*iflash.laya.runner.DataType.NULL*/0);
			Register.regFunction(/*iflash.laya.runner.DataType.SET_ALPHA*/160,AnimationCreate.setAlpha,3,false,/*iflash.laya.runner.DataType.CURRENT*/9,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.FLOAT*/5);
			Register.regFunction(/*iflash.laya.runner.DataType.SET_VISIBLE*/161,AnimationCreate.setVisible,3,false,/*iflash.laya.runner.DataType.CURRENT*/9,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.BOOL*/14);
			Register.regFunction(/*iflash.laya.runner.DataType.INIT_LYIMAGELEMENT_CMD*/162,AnimationCreate.initLyImage,4,false,/*iflash.laya.runner.DataType.CURRENT*/9,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5);
			Register.regFunction(/*iflash.laya.runner.DataType.INIT_SHAPE_CMD*/163,AnimationCreate.initShap,3,false,/*iflash.laya.runner.DataType.CURRENT*/9,/*iflash.laya.runner.DataType.ID*/1,/*iflash.laya.runner.DataType.MATRIX*/13);
			Register.regFunction(/*iflash.laya.runner.DataType.INIT_MOVIECLIP_CMD*/164,AnimationCreate.initMovie,6,false,/*iflash.laya.runner.DataType.CURRENT*/9,/*iflash.laya.runner.DataType.TEMPLATE_ID*/11,/*iflash.laya.runner.DataType.BYTE*/8,/*iflash.laya.runner.DataType.BYTE*/8,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.ARRAY*/12);
			Register.regFunction(/*iflash.laya.runner.DataType.INIT_BUTTON_CMD*/166,AnimationCreate.initButton,6,false,/*iflash.laya.runner.DataType.CURRENT*/9,/*iflash.laya.runner.DataType.TEMPLATE_ID*/11,/*iflash.laya.runner.DataType.BYTE*/8,/*iflash.laya.runner.DataType.BYTE*/8,/*iflash.laya.runner.DataType.SHORT*/4,/*iflash.laya.runner.DataType.ARRAY*/12);
			Register.regFunction(/*iflash.laya.runner.DataType.INIT_TEXTFIELD_CMD*/165,AnimationCreate.initText,14,false,/*iflash.laya.runner.DataType.CURRENT*/9,
			/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.FLOAT*/5,
			/*iflash.laya.runner.DataType.BOOL*/14,/*iflash.laya.runner.DataType.BOOL*/14,/*iflash.laya.runner.DataType.BOOL*/14,
			/*iflash.laya.runner.DataType.BYTE*/8,/*iflash.laya.runner.DataType.STRING*/6,/*iflash.laya.runner.DataType.FLOAT*/5,/*iflash.laya.runner.DataType.STRING*/6);
		}

		IFlash.__StartLoadResource__=function(){
			var len=IFlash.__loadResource__.length;
			for(var i=0;i<len;i++){
				var loader=new Loader();
				loader.contentLoaderInfo.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",IFlash.__onLoad__);
				loader.load(new URLRequest(IFlash.__loadResource__[i]),new LoaderContext(false,ApplicationDomain.currentDomain));
			}
		}

		IFlash.__onLoad__=function(e){
			IFlash.__resourceCount__++;
			if(IFlash.__loadResource__.length==IFlash.__resourceCount__){
				IFlash.__resourceCount__=0;
				IFlash.__loadResource__=null;
				Stage.stage.addChild(IFlash._sprite_);
			}
		}

		IFlash.LoadResource=function(files){
			IFlash.__loadResource__=files;
		}

		IFlash.Run=function(sprite,w,h){
			if(IFlash.__width__ <=0){
				IFlash.__width__=w;
			}
			if(IFlash.__height__ <=0){
				IFlash.__height__=h;
			}
			new IFlash(sprite);
			Laya.ilaya._onInit_();
		}

		IFlash._sprite_=null;;
		IFlash.__loadResource__=null;
		IFlash.__width__=-1;
		IFlash.__height__=-1;
		IFlash.__beforInit__=null;;
		IFlash.IS_3D=false;
		IFlash.__bgColor="#000";
		IFlash.__setOrientationEx=1;
		IFlash.__showInfo=true;
		IFlash.__resourceCount__=0;
		return IFlash;
	})(ILaya)


	//=======file:///d:/mykanbox/caipiao/h5test/src/h5test.as=======94.999979
	var H5Test=(function(_super){
		function H5Test(){
			this.loader=null;
			this.disX=null;
			this.disY=null;
			this.randArr=[3,6,7];
			this.loaderArr=null;
			this.index=0;
			_super.apply(this,arguments);
			if (this.stage)this.init();
			else this.addEventListener(/*iflash.events.Event.ADDED_TO_STAGE*/"addedToStage",BIND$(this,this.init));
		}

		REGCLASS$(H5Test,'H5Test',true,false,_super);
		var __proto__=H5Test.prototype;
		__proto__.init=function(evt){
			this.removeEventListener(/*iflash.events.Event.ADDED_TO_STAGE*/"addedToStage",BIND$(this,this.init));
			IFlash.setSize(1024,768);
			IFlash.setBgcolor("#ffffff");
			IFlash.setOrientationEx(1);
			IFlash.showInfo(false);
			this.initStage();
			this.initData();
			this.initView();
		}

		__proto__.initStage=function(){
			this.stage.align=/*iflash.display.StageAlign.TOP_LEFT*/"TL";
			this.stage.scaleMode=/*iflash.display.StageScaleMode.NO_SCALE*/"noScale";
		}

		__proto__.initData=function(){
			this.loaderArr=new Array();
		}

		__proto__.initView=function(){
			var context=new LoaderContext(false,ApplicationDomain.currentDomain)
			for(var i=1;i <=9;i++){
				if(i==this.randArr[0] || i==this.randArr[1] || i==this.randArr[2])
					continue ;
				var loader=new Loader();
				loader.load(new URLRequest("png/"+i+".png"),context);
				this.addChild(loader);
				loader.x=256*((i-1)%3);
				loader.y=192*int((i-1)/3);
			}
			for(var j=0;j < 3;j++){
				loader=new Loader();
				loader.load(new URLRequest("png/"+this.randArr[j]+".png"),context);
				loader.contentLoaderInfo.addEventListener(/*iflash.events.Event.COMPLETE*/"complete",BIND$(this,this.onLoadComplete));
				loader.x=256*3;
				loader.y=192*j;
				loader.name=""+this.randArr[j];
			}
		}

		__proto__.initListener=function(){
			for(var i=0;i < 3;i++){
				this.loaderArr[i].addEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",BIND$(this,this.onLoaderMouseDown));
				this.loaderArr[i].addEventListener(/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup",BIND$(this,this.onLoaderMouseUp));
			}
		}

		__proto__.removeListener=function(){
			for(var i=0;i < 3;i++){
				this.loaderArr[i].removeEventListener(/*iflash.events.MouseEvent.MOUSE_DOWN*/"mousedown",BIND$(this,this.onLoaderMouseDown));
				this.loaderArr[i].removeEventListener(/*iflash.events.MouseEvent.MOUSE_UP*/"mouseup",BIND$(this,this.onLoaderMouseUp));
			}
		}

		__proto__.onLoadComplete=function(evt){
			var bitmp1=(evt.target).content;
			var bpMc=new MovieClip();
			bpMc.addChild(bitmp1);
			bpMc.x=256*3;
			bpMc.y=192*this.index;
			this.addChild(bpMc);
			this.loaderArr.push(bpMc);
			this.index++;
			if(this.index==3){
				this.initListener();
			}
		}

		__proto__.onLoaderMouseDown=function(evt){
			this.loader=evt.target;
			this.loader.startDrag();
		}

		__proto__.onLoaderMouseUp=function(evt){
			this.loader.stopDrag();
			var num=0;
			for(var i=0;i<3;i++){
				if(Math.sqrt((this.loader.x-256*((this.randArr[i]-1)%3))*(this.loader.x-256*((this.randArr[i]-1)%3))+(this.loader.y-192*int((this.randArr[i]-1)/3))*(this.loader.y-192*int((this.randArr[i]-1)/3)))< 20){
					this.loader.x=((this.randArr[i]-1)%3)*256;
					this.loader.y=int((this.randArr[i]-1)/3)*192;
				}
				if(this.loaderArr[i].x==((this.randArr[i]-1)%3)*256 && this.loaderArr[i].y==int((this.randArr[i]-1)/3)*192){
					num++;
				}
			}
			if(num==3){
				this.removeListener();
				var txt=new TextField1();
				txt.text="游戏结束";
				txt.defaultTextFormat=new TextFormat("宋体",20);
				this.addChild(txt);
				txt.x=(this.stage.stageWidth-txt.width)/2;
				txt.y=(this.stage.stageHeight-txt.height)/2;
			}
		}

		return H5Test;
	})(Sprite)


	//=======file:///c:/program files/layabox/layaflash/laya/libs/iflash/src/iflashmain.as=======94.999604
	var IFlashMain=(function(_super){
		function IFlashMain(){
			_super.apply(this,arguments);
			if (this.stage)this.init();
			else this.addEventListener(/*iflash.events.Event.ADDED_TO_STAGE*/"addedToStage",BIND$(this,this.init));
		}

		REGCLASS$(IFlashMain,'IFlashMain',true,false,_super);
		var __proto__=IFlashMain.prototype;
		__proto__.init=function(e){
			this.removeEventListener(/*iflash.events.Event.ADDED_TO_STAGE*/"addedToStage",BIND$(this,this.init));
		}

		return IFlashMain;
	})(Sprite)


iflash.utils.flash_proxy;
	LAYABOX.initClass([Browser,CSSStyle,TextField,HTMLElement,SWFFont,SWFP]);
	Laya.Main(function(){IFlash.Start();IFlash.Run(new H5Test(),-1,-1);});

})(window,document,window.layaModule);