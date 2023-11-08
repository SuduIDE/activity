"use strict";
(function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes
=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len
+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,
new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),
new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz)
{return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz)
{return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),
buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),
buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,
binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache
=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache
=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if
($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace
==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if
(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),
dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),
arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length
===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),
arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i
=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value)
{if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)
===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr
=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i
=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,
p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i)
{javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if
(typeof $rt_globals.BigInt!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,
true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,
true);};}function $rt_floatToRawIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "
+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj)
{var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta
?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if
(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,
val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length)
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eR=f;}
function $rt_cls(cls){return ABg(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GZ(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.ca.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AMW(t);}
function $rt_throwableCause(t){return AM3(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(ASk());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return ASl(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(ASm());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BB=$rt_compare;var ASn=$rt_nullCheck;var E=$rt_cls;var P=$rt_createArray;var Ib=$rt_isInstance;var ASo=$rt_nativeThread;var ASp=$rt_suspending;var ASq=$rt_resuming;var ASr=$rt_invalidPointer;var C=$rt_s;var Bi=$rt_eraseClinit;var T=$rt_imul;var E5=$rt_wrapException;var ASs=$rt_checkBounds;var ASt=$rt_checkUpperBound;var ASu=$rt_checkLowerBound;var ASv=$rt_wrapFunction0;var ASw=$rt_wrapFunction1;var ASx=$rt_wrapFunction2;var ASy=$rt_wrapFunction3;var ASz=$rt_wrapFunction4;var F=$rt_classWithoutFields;var G
=$rt_createArrayFromData;var AQ0=$rt_createCharArrayFromData;var ASA=$rt_createByteArrayFromData;var ASB=$rt_createShortArrayFromData;var G7=$rt_createIntArrayFromData;var ASC=$rt_createBooleanArrayFromData;var ASD=$rt_createFloatArrayFromData;var ASE=$rt_createDoubleArrayFromData;var AFH=$rt_createLongArrayFromData;var ASj=$rt_createBooleanArray;var En=$rt_createByteArray;var ASF=$rt_createShortArray;var BY=$rt_createCharArray;var BD=$rt_createIntArray;var ASG=$rt_createLongArray;var ADY=$rt_createFloatArray;var ASH
=$rt_createDoubleArray;var BB=$rt_compare;var ASI=$rt_castToClass;var ASJ=$rt_castToInterface;var ASK=Long_toNumber;var BM=Long_fromInt;var ASL=Long_fromNumber;var Dl=Long_create;var AB9=Long_ZERO;var ASM=Long_hi;var Zc=Long_lo;
function B(){this.$id$=0;}
function ASN(){var a=new B();ACr(a);return a;}
function ACr(a){}
function By(a){return ABg(a.constructor);}
function AJ$(a,b){return a!==b?0:1;}
function AFw(a){var b,c,d,e,f,g,h,i,j;b=IA(a);if(!b)c=C(0);else{d=(((32-Nv(b)|0)+4|0)-1|0)/4|0;e=BY(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=GU((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GZ(e);}j=new R;U(j);L(L(j,C(1)),c);return S(j);}
function IA(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AJx(a){var b,c,d;if(!Ib(a,DO)&&a.constructor.$meta.item===null){b=new UF;X(b);K(b);}b=AD6(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
var Z7=F(0);
function AQQ(b){ACo();XS();ZN();AAR();AAA();ABM();ADD();AAO();Zg();ACs();X0();AAZ();ACS();XO();ABF();ABy();AAj();Zn();ZS();ABw();Yd();ADr();$rt_globals.editorFactory=Bn(new Ty,"create");$rt_globals.modelFactory=Bn(new Tx,"create");$rt_globals.diffFactory=Bn(new Tc,"create");}
var MQ=F(0);
var Mg=F(0);
function Vv(){var a=this;B.call(a);a.j8=null;a.fN=null;}
function ABg(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Vv;c.fN=b;d=c;b.classObject=d;}return c;}
function Ho(a){return a.fN.$meta.primitive?1:0;}
function HN(a){return ABg(a.fN.$meta.item);}
var YO=F();
function Bn(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Dm(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Yv=F();
function AD6(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ABm(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ABm(d[e],c))return 1;e=e+1|0;}return 0;}
function Gb(){var a=this;B.call(a);a.lq=null;a.qh=null;a.lk=0;a.l_=0;}
function ASO(){var a=new Gb();X(a);return a;}
function ASP(a){var b=new Gb();Bm(b,a);return b;}
function X(a){a.lk=1;a.l_=1;}
function Bm(a,b){a.lk=1;a.l_=1;a.lq=b;}
function AHh(a){return a;}
function AMW(a){return a.lq;}
function AM3(a){var b;b=a.qh;if(b===a)b=null;return b;}
var DN=F(Gb);
function ASQ(a){var b=new DN();XD(b,a);return b;}
function XD(a,b){Bm(a,b);}
var Br=F(DN);
function ASl(a){var b=new Br();AOO(b,a);return b;}
function AOO(a,b){Bm(a,b);}
var AAn=F(Br);
var Cx=F(0);
var Cq=F(0);
var Ik=F(0);
function Bt(){var a=this;B.call(a);a.ca=null;a.hA=0;}
var ASR=null;var ASS=null;var AST=null;function Gd(){Gd=Bi(Bt);AOo();}
function AH$(){var a=new Bt();XI(a);return a;}
function GZ(a){var b=new Bt();IN(b,a);return b;}
function Ek(a,b,c){var d=new Bt();L2(d,a,b,c);return d;}
function XI(a){Gd();a.ca=ASR;}
function IN(a,b){Gd();L2(a,b,0,b.data.length);}
function L2(a,b,c,d){var e;Gd();e=BY(d);a.ca=e;C$(b,c,e,0,d);}
function LV(b){var c;Gd();c=AH$();c.ca=b;return c;}
function I(a,b){var c,d;if(b>=0){c=a.ca.data;if(b<c.length)return c[b];}d=new GR;X(d);K(d);}
function H(a){return a.ca.data.length;}
function E3(a){return a.ca.data.length?0:1;}
function PY(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=H(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C$(a.ca,b,d,e,c);return;}}g=new BS;X(g);K(g);}
function Th(a,b,c){var d,e,f;if((c+H(b)|0)>H(a))return 0;d=0;while(d<H(b)){e=I(b,d);f=c+1|0;if(e!=I(a,c))return 0;d=d+1|0;c=f;}return 1;}
function J0(a,b){if(a===b)return 1;return Th(a,b,0);}
function DF(a,b){var c,d,e,f;if(a===b)return 1;if(H(b)>H(a))return 0;c=0;d=H(a)-H(b)|0;while(d<H(a)){e=I(a,d);f=c+1|0;if(e!=I(b,c))return 0;d=d+1|0;c=f;}return 1;}
function HU(a,b,c){var d,e,f,g,h;d=Z(0,c);if(b<65536){e=b&65535;while(true){f=a.ca.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=J_(b);h=Ls(b);while(true){f=a.ca.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function FF(a,b,c){var d,e,f,g,h;d=Bb(c,H(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.ca.data[d]==e)break;d=d+(-1)|0;}return d;}f=J_(b);g=Ls(b);while(true){if(d<1)return (-1);h=a.ca.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Y$(a,b,c){var d,e,f;d=Z(0,c);e=H(a)-H(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=H(b))break a;if(I(a,d+f|0)!=I(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function PW(a,b,c){var d,e;d=Bb(c,H(a)-H(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=H(b))break a;if(I(a,d+e|0)!=I(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function B8(a,b,c){var d,e;d=BB(b,c);if(d>0){e=new BS;X(e);K(e);}if(!d){Gd();return ASS;}if(!b&&c==H(a))return a;return Ek(a.ca,b,c-b|0);}
function DI(a,b){return B8(a,b,H(a));}
function P2(a,b,c){return B8(a,b,c);}
function Hh(a,b){var c,d,e,f,g,h;if(E3(b))return a;if(E3(a))return b;c=BY(H(a)+H(b)|0);d=c.data;e=0;f=0;while(f<H(a)){g=e+1|0;d[e]=I(a,f);f=f+1|0;e=g;}g=0;while(g<H(b)){h=e+1|0;d[e]=I(b,g);g=g+1|0;e=h;}return LV(c);}
function T$(a,b,c){var d,e,f,g;d=new R;U(d);e=H(a)-H(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=H(b)){L(d,c);f=f+(H(b)-1|0)|0;break a;}if(I(a,f+g|0)!=I(b,g))break;g=g+1|0;}BV(d,I(a,f));}f=f+1|0;}L(d,DI(a,f));return S(d);}
function Rs(a){var b,c;b=0;c=H(a)-1|0;a:{while(b<=c){if(I(a,b)>32)break a;b=b+1|0;}}while(b<=c&&I(a,c)<=32){c=c+(-1)|0;}return B8(a,b,c+1|0);}
function AFu(a){return a;}
function E4(a){var b,c,d,e,f;b=a.ca.data;c=BY(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function D5(b){var c;Gd();c=new R;U(c);return S(Bj(c,b));}
function Bs(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bt))return 0;c=b;if(H(c)!=H(a))return 0;d=0;while(d<H(c)){if(I(a,d)!=I(c,d))return 0;d=d+1|0;}return 1;}
function Gm(a){var b,c,d,e;a:{if(!a.hA){b=a.ca.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hA=(31*a.hA|0)+e|0;d=d+1|0;}}}return a.hA;}
function Lx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gj;Bm(b,C(2));K(b);}ASU=1;d=new QT;d.jW=P(CA,10);d.gd=(-1);d.eD=(-1);d.bo=(-1);e=new Gn;e.ez=1;e.bD=b;e.Z=BY(H(b)+2|0);C$(E4(b),0,e.Z,0,H(b));f=e.Z.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.rr=g;e.fT=0;EO(e);EO(e);d.g=e;d.dp=0;d.kR=WS(d,(-1),0,null);if(!C0(d.g)){b=new If;h=d.g;IR(b,C(3),h.bD,h.c1);K(b);}if(d.ni)d.kR.ec();b=BC();h=new RW;h.h9=(-1);h.kb=(-1);h.we=d;h.tT=d.kR;h.iv=a;h.h9=0;g=H(a);h.kb=g;e=new Ud;i=h.h9;j=d.gd;k=d.eD+1|0;l=d.bo+1|0;e.hi
=(-1);m=j+1|0;e.ok=m;e.dF=BD(m*2|0);f=BD(l);e.jc=f;G5(f,(-1));if(k>0)e.kJ=BD(k);G5(e.dF,(-1));WN(e,a,i,g);h.cm=e;e.fd=1;n=0;m=0;if(!H(a)){f=P(Bt,1);f.data[0]=C(3);}else{while(true){l=H(h.iv);if(!XW(h))l=h.kb;e=h.cm;if(e.d8>=0&&ZG(e)==1){e=h.cm;e.d8=Iy(e);if(Iy(h.cm)==ABL(h.cm)){e=h.cm;e.d8=e.d8+1|0;}g=h.cm.d8;g=g<=l&&Mm(h,g)?1:0;}else g=Mm(h,h.h9);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bv(b,P2(a,m,ADg(h)));m=Zj(h);n=g;}a:{Bv(b,P2(a,m,H(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(H(Bq(b,g)))break a;Fi(b,
g);}}if(g<0)g=0;f=Hi(b,P(Bt,g));}return f;}
function AHt(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bb(H(a),H(b));e=0;while(true){if(e>=d){c=H(a)-H(b)|0;break a;}c=I(a,e)-I(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AOo(){ASR=BY(0);ASS=AH$();AST=new Sj;}
var F8=F(Gb);
var GV=F(F8);
var Z3=F(GV);
var Em=F();
function FW(){Em.call(this);this.bq=0;}
var ASV=null;var ASW=null;function AN9(a){var b=new FW();Y6(b,a);return b;}
function Y6(a,b){a.bq=b;}
function KW(b){return (M_(AR7(20),b,10)).cw();}
function I1(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new CX;Bm(b,C(4));K(b);}d=H(b);if(0==d){b=new CX;Bm(b,C(5));K(b);}if(c>=2&&c<=36){a:{e=0;switch(I(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new CX;X(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=O5(I(b,f));if(i<0){j=new CX;k=B8(b,0,d);b=new R;U(b);L(L(b,C(6)),k);Bm(j,S(b));K(j);}if(i>=c){j=new CX;l=B8(b,0,d);b=new R;U(b);L(L(Bj(L(b,C(7)),c),C(8)),l);Bm(j,S(b));K(j);}g=T(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new CX;k=B8(b,0,d);b=new R;U(b);L(L(b,C(9)),k);Bm(j,S(b));K(j);}b=new CX;j=new R;U(j);Bj(L(j,C(10)),c);Bm(b,S(j));K(b);}
function CG(b){var c,d;if(b>=(-128)&&b<=127){a:{if(ASW===null){ASW=P(FW,256);c=0;while(true){d=ASW.data;if(c>=d.length)break a;d[c]=AN9(c-128|0);c=c+1|0;}}}return ASW.data[b+128|0];}return AN9(b);}
function APq(a,b){if(a===b)return 1;return b instanceof FW&&b.bq==a.bq?1:0;}
function Nv(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function HW(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AJs(a,b){b=b;return BB(a.bq,b.bq);}
function ACo(){ASV=E($rt_intcls());}
function F0(){var a=this;B.call(a);a.N=null;a.H=0;}
function ASX(){var a=new F0();U(a);return a;}
function AR7(a){var b=new F0();FD(b,a);return b;}
function U(a){FD(a,16);}
function FD(a,b){a.N=BY(b);}
function M_(a,b,c){return AAc(a,a.H,b,c);}
function AAc(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ct(a,b,b+1|0);else{Ct(a,b,b+2|0);f=a.N.data;g=b+1|0;f[b]=45;b=g;}a.N.data[b]=GU(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=T(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ct(a,b,b+i|0);if(e)e=b;else{f=a.N.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.N.data;b=e+1|0;f[e]=GU($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AA$(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BB(c,0.0);if(!d){if(1.0/c===Infinity){Ct(a,b,b+3|0);e=a.N.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ct(a,b,b+4|0);e=a.N.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ct(a,b,b+3|0);e=a.N.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ct(a,b,b+8|0);d=b;}else{Ct(a,b,b+9|0);e=a.N.data;d=b+1|0;e[b]=45;}e=a.N.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ASY;AA0(c,f);d=f.kh;g=f.j2;h=f.nB;i=1;j=1;if(h)j=2;k=9;l=ANU(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Z(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ct(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.N.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.N.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.N.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.N.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ANU(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function BV(a,b){return a.lN(a.H,b);}
function WE(a,b,c){Ct(a,b,b+1|0);a.N.data[b]=c;return a;}
function I5(a,b){var c,d;c=a.N.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.N=XY(a.N,d);}
function S(a){return Ek(a.N,0,a.H);}
function ZV(a){return a.H;}
function Wj(a,b,c,d){return a.lg(a.H,b,c,d);}
function MK(a,b,c,d,e){var f,g,h,i;Ct(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.N.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function HZ(a,b){return a.ko(b,0,b.data.length);}
function Ct(a,b,c){var d,e,f,g;d=a.H;e=d-b|0;a.ht((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.N.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.H=a.H+(c-b|0)|0;}
var Hv=F(0);
var R=F(F0);
function L(a,b){LX(a,a.H,b===null?C(11):b.cw());return a;}
function CU(a,b){LX(a,a.H,b);return a;}
function Bj(a,b){M_(a,b,10);return a;}
function F1(a,b){var c,d,e,f,g,h,i,j;c=a.H;d=1;if(AQC(b,AB9)){d=0;b=ARk(b);}a:{if(HT(b,BM(10))<0){if(d)Ct(a,c,c+1|0);else{Ct(a,c,c+2|0);e=a.N.data;f=c+1|0;e[c]=45;c=f;}a.N.data[c]=GU(Zc(b),10);}else{g=1;h=BM(1);i=Ll(BM(-1),BM(10));b:{while(true){j=AKO(h,BM(10));if(HT(j,b)>0){j=h;break b;}g=g+1|0;if(HT(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ct(a,c,c+g|0);if(d)f=c;else{e=a.N.data;f=c+1|0;e[c]=45;}while(true){if(AGK(j,AB9))break a;e=a.N.data;c=f+1|0;e[f]=GU(Zc((Ll(b,j))),10);b=XV(b,j);j=Ll(j,BM(10));f=c;}}}return a;}
function XE(a,b){BV(a,b);return a;}
function G4(a,b){LX(a,a.H,!b?C(12):C(13));return a;}
function AC5(a,b,c){var d,e,f,g,h,i;d=BB(b,c);if(d<=0){e=a.H;if(b<=e){if(d){f=e-c|0;a.H=e-(c-b|0)|0;g=0;while(g<f){h=a.N.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new GR;X(i);K(i);}
function Va(a,b){var c,d,e,f;if(b>=0){c=a.H;if(b<c){c=c-1|0;a.H=c;while(b<c){d=a.N.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new GR;X(f);K(f);}
function AJo(a,b,c,d,e){MK(a,b,c,d,e);return a;}
function AGE(a,b,c,d){Wj(a,b,c,d);return a;}
function Ye(a){return a.H;}
function G8(a){return S(a);}
function AJv(a,b){I5(a,b);}
function AJU(a,b,c){WE(a,b,c);return a;}
function LX(a,b,c){var d,e,f;if(b>=0&&b<=a.H){a:{if(c===null)c=C(11);else if(E3(c))break a;I5(a,a.H+H(c)|0);d=a.H-1|0;while(d>=b){a.N.data[d+H(c)|0]=a.N.data[d];d=d+(-1)|0;}a.H=a.H+H(c)|0;d=0;while(d<H(c)){e=a.N.data;f=b+1|0;e[b]=I(c,d);d=d+1|0;b=f;}}return a;}c=new GR;X(c);K(c);}
var Fl=F(GV);
var ABs=F(Fl);
function ASZ(a){var b=new ABs();AFE(b,a);return b;}
function AFE(a,b){Bm(a,b);}
var ZL=F(Fl);
function AS0(a){var b=new ZL();AFV(b,a);return b;}
function AFV(a,b){Bm(a,b);}
var Bh=F(0);
var Rk=F(0);
var Ty=F();
function AHQ(a,b){var c;if(!XR())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new TD;c.nu=b;b=new $rt_globals.Promise(Bn(c,"f"));}return b;}
var AA1=F();
var OD=F(0);
var Tx=F();
function AJ7(a,b,c,d){var e,f,g;e=new ET;f=ACt(b,10);b=GP(c,null);g=AQy(f,b,ABq(d));e.dS=g;g.kU=e;e.kE=c;e.jZ=d;return e;}
var AAg=F();
var Sm=F(0);
var Tc=F();
function AJp(a,b){var c;if(!XR())b=$rt_globals.Promise.reject(new $rt_globals.Error("This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled"));else{c=new W_;c.mL=b;b=new $rt_globals.Promise(Bn(c,"f"));}return b;}
var Y7=F();
var KV=F();
var AS1=null;var AS2=null;function Eh(){if(AS1===null)AS1=AKK(AS3,0);return AS1;}
function ED(){if(AS2===null)AS2=AKK(AS4,0);return AS2;}
function ARd(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=K1(b)&&(e+f|0)<=K1(d)){a:{b:{if(b!==d){g=HN(By(b));h=HN(By(d));if(g!==null&&h!==null){if(g===h)break b;if(!Ho(g)&&!Ho(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fN;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ABm(n.constructor,o)?1:0)){J2(b,c,d,e,j);b=new Ie;X(b);K(b);}j=j+1|0;k=m;}J2(b,c,d,e,f);return;}if(!Ho(g))break a;if(Ho(h))break b;else break a;}b=new Ie;X(b);K(b);}}J2(b,c,
d,e,f);return;}b=new Ie;X(b);K(b);}b=new BS;X(b);K(b);}d=new Gj;Bm(d,C(14));K(d);}
function C$(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=K1(b)&&(e+f|0)<=K1(d)){J2(b,c,d,e,f);return;}b=new BS;X(b);K(b);}
function J2(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function D_(){return Long_fromNumber(new Date().getTime());}
var AB_=F();
var GQ=F(0);
var Sj=F();
var BS=F(Br);
var AA7=F();
function K1(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AS5());}return b.data.length;}
function ABK(b,c){if(b===null){b=new Gj;X(b);K(b);}if(b===E($rt_voidcls())){b=new Bu;X(b);K(b);}if(c>=0)return AO1(b.fN,c);b=new Xk;X(b);K(b);}
function AO1(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gj=F(Br);
var Ie=F(Br);
var CP=F();
var AS6=null;var AS7=null;var AS8=null;var AS9=null;var AS$=null;var AS_=null;var ATa=null;var ATb=null;var ATc=null;var ATd=null;function V_(b){var c,d;c=new Bt;d=BY(1);d.data[0]=b;IN(c,d);return c;}
function LA(b){return b>=65536&&b<=1114111?1:0;}
function Cr(b){return (b&64512)!=55296?0:1;}
function CN(b){return (b&64512)!=56320?0:1;}
function Wo(b){return !Cr(b)&&!CN(b)?0:1;}
function G1(b,c){return Cr(b)&&CN(c)?1:0;}
function Ec(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function J_(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ls(b){return (56320|b&1023)&65535;}
function EG(b){return Gi(b)&65535;}
function Gi(b){if(AS9===null){if(ATa===null)ATa=ABE();AS9=ZW((ATa.value!==null?$rt_str(ATa.value):null));}return R6(AS9,b);}
function Ee(b){return Ge(b)&65535;}
function Ge(b){if(AS8===null){if(ATb===null)ATb=ACp();AS8=ZW((ATb.value!==null?$rt_str(ATb.value):null));}return R6(AS8,b);}
function R6(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BB(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function TF(b,c){if(c>=2&&c<=36){b=O5(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function O5(b){var c,d,e,f,g,h,i,j,k,l;if(AS7===null){if(ATc===null)ATc=Z5();c=(ATc.value!==null?$rt_str(ATc.value):null);d=AM4(E4(c));e=Jd(d);f=BD(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+MR(d)|0;j=j+MR(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AS7=f;}g=AS7.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BB(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function GU(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function F$(b){var c;if(b<65536){c=BY(1);c.data[0]=b&65535;return c;}return AQ0([J_(b),Ls(b)]);}
function Cf(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Wo(b&65535))return 19;if(AS$===null){if(ATd===null)ATd=ADv();d=(ATd.value!==null?$rt_str(ATd.value):null);e=P(M5,16384);f=e.data;g=En(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<H(d)){m=J1(I(d,l));if(m==64){l=l+1|0;m=J1(I(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|T(c,J1(I(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=J1(I(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AHp(k,k+i|0,AC2(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AHp(k,k+i|0,AC2(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AS$=C1(e,j);}e=AS$.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.ra)o=p+1|0;else{c=d.o1;if(b>=c)return d.pd.data[b-c|0];c=p-1|0;}}return 0;}
function IZ(b){a:{switch(Cf(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function F4(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cf(b)!=16?0:1;}
function Pz(b){switch(Cf(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function QV(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Pz(b);}return 1;}
function XS(){AS6=E($rt_charcls());AS_=P(CP,128);}
function ABE(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ACp(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function Z5(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function ADv(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A\'G)FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
+" F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
+"L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F)A$J+Y(^+G*^*Y# G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
+"FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0G."
+"H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y"
+"&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#A&!# # #!#!#A9E$!#&E##F(\'F"
+"$\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#"
+"F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#Aeb&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@ FK G#5A#F#AmG$F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+"
+"A\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+AWF<A#G$I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W$ F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF("
+" F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+b 7! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0b K` b&(* b Z\'#b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AK&A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =*!GOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) "
+"B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b G, F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^#Apb=5& A"
+"-^/A#^.A$^*A(^O ^(A)^/A%^*A(^*A(b=4#  ^XAFJ+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
var GR=F(BS);
var H7=F(0);
function FT(b){var c;BT(b);c=new UH;c.mj=b;return c;}
var Q9=F(0);
function Pt(){var a=this;B.call(a);a.wd=null;a.fZ=null;a.bG=null;}
function Nn(a){return a.fZ.d9;}
function Qy(a,b){var c,d;a:{c=Nn(a);b=Ch(b);d=(-1);switch(Gm(b)){case 3075958:if(!Bs(b,C(15)))break a;d=2;break a;case 102970646:if(!Bs(b,C(16)))break a;d=0;break a;case 1441429116:if(!Bs(b,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LO(c);break b;case 2:FX(c);break b;default:c=new R;U(c);L(L(c,C(18)),b);$rt_globals.console.info($rt_ustr(S(c)));break b;}J4(c);}}
function VM(b,c,d){var e,f,g,h,i,j,k;if(!((b?true:false)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lf(d,C(19));else{e=P(Jh,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new Jh;k=ABq(i.uri);j.f6=new L0;j.g6=k;Xt(i.range,j.f6);f[g]=j;g=g+1|0;}c.i(e);}}
function P3(a,b){var c,d,e,f;c=a.bG;b=b-1|0;if(b>0){d=b-1|0;e=c.C;d=T(d,e);f=c.bc;if(d<f)DQ(c,T(b-2|0,e));else if((d-f|0)>=Cz(c))DQ(c,b>Ca(c.e.f)?FQ(c):T(b+1|0,c.C)-Cz(c)|0);}}
function TR(a,b){a.bG.dy=Yg(b);}
function AA2(){$rt_globals.console.info("FATAL: WebGL is not enabled in the browser");}
function AKI(a,b,c){var d,e,f,g,h;b=Ch(b);if(c===null)d=null;else{d=P(Bt,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];e[f]=Ch(h===null?null:!(h instanceof $rt_objcls())?h:DC(h));f=f+1|0;}}c=new RN;c.qN=a;c.qP=b;c.qQ=d;return new $rt_globals.Promise(Bn(c,"f"));}
function APl(a,b){var c,d;c=a.bG.cA.lz;d=new Pq;d.t0=a;d.t1=b;return FT(Fe(c,d));}
function AGd(a,b,c){var d,e;d=new Ks;e=Jj(b);b=new MH;b.tK=c;KG(d,e);d.qr=b;return FT(Fe(a.bG.cA.jH,d));}
function AD_(a,b){var c;c=ACt(b,10);b=a.bG;HY(b,AQI(c,b.e.dE));}
function AGa(a,b){var c,d;c=a.bG;d=b.column-1|0;Ci(c,b.lineNumber-1|0,d,0);}
function AOf(a){T_(a.fZ);}
function AJ1(a,b){P3(a,b);}
function AKq(a){var b;b=DX(a.bG.e.f);return AA6(a.fZ.ku,b);}
function AFy(a){var b;b=a.bG;return HC(b.s,b.p);}
function AEy(a,b){Qy(a,b);}
function AGA(a,b,c){var d,e;d=new FZ;e=Jj(b);b=new OF;b.qS=c;WX(d,e,b);return FT(Fe(a.bG.cA.l8,d));}
function APv(a,b,c){var d,e;d=new JC;e=Jj(b);b=new Ws;b.n1=c;KG(d,e);d.uv=b;return FT(Fe(a.bG.cA.lQ,d));}
function AFS(a){return E8(a.bG.e);}
function AIJ(a,b){var c;c=a.bG;b=Ch(b);return $rt_ustr(B6(c.lU,b));}
function AMF(a,b){var c;c=b;b=a.bG;c=c-1|0;if(c>0)DQ(b,T(b.C,(c-(Cz(b)/(b.C*2|0)|0)|0)-1|0));}
function ANq(a){var b,c,d,e,f,g,h,i;b=a.fZ;c=b.kB;if(c){$rt_globals.cancelAnimationFrame(c);b.kB=0;}d=$rt_globals.window;e=b.jJ;d.removeEventListener("resize",Bn(e,"handleEvent"));b.lJ.disconnect();f=b.fc;e=f.ib;if(e!==null){e.hF=KZ(e,e.hF);e.ji=KZ(e,e.ji);e.i9=KZ(e,e.i9);e.lX=0;e.k9=0;f.ib=null;}Is(f.c0);f=b.g_;if(f!==null){e=f.kS;if(e!==null){g=e.oG.data;c=g.length;h=0;while(h<c){e=g[h];d=e.nH;i=e.nJ;e=e.nI;d.removeEventListener($rt_ustr(i),Bn(e,"handleEvent"));h=h+1|0;}f.kS=null;}b.g_=null;}b.kF.terminate();}
function AEd(a,b){var c;b=Dm(b,"f");c=new Mu;c.rv=b;return FT(Fe(a.bG.cA.lD,c));}
function AE1(a,b){Dx(a.bG,Ch(b),a.bG.dX);}
function ALa(a,b){var c;c=b;b=a.bG;Dx(b,b.ft,c);}
function ALg(a,b){var c;if(b instanceof ET){HY(a.bG,b.dS);return;}c=new Bu;Bm(c,C(20));K(c);}
function ALm(a,b,c){var d,e;d=new FZ;e=Jj(b);b=new VR;b.te=c;WX(d,e,b);return FT(Fe(a.bG.cA.kf,d));}
function AGp(a,b){P3(a,b.lineNumber);}
function AO4(a,b){TR(a,b);}
var Ql=F(0);
function ET(){var a=this;B.call(a);a.dS=null;a.jZ=null;a.kE=null;}
function E8(b){var c;c=b.kU;if(c!==null)return c;c=new ET;c.dS=b;b.kU=c;c.jZ=null;c.kE=null;return c;}
function APK(a){var b;b=a.jZ;if(b===null)b=J6(a.dS.dE);return b;}
function AJh(a){var b;b=a.dS.f;FK(b.fh);Er(b.cX);Er(b.cP);b.f4=0;b.ck=0;b.cC=KT(b);}
function AKQ(a){var b;b=a.kE;if(b===null)b=$rt_ustr(a.dS.ha);return b;}
function APz(a,b){var c;c=b;return AEo(Jt(a.dS.f,c));}
function AOM(a,b){var c,d,e,f,g,h;c=a.dS.f;d=b.lineNumber-1|0;e=b.column-1|0;f=0;g=0;a:{while(g<d){h=c.v.data;f=f+h[g].A|0;g=g+1|0;if(g>=h.length)break a;f=f+1|0;}}return f+e|0;}
var RP=F(0);
function U_(){var a=this;B.call(a);a.dg=null;a.xO=null;a.pc=null;}
function PJ(a,b){var c,d,e;a:{c=Ch(b);d=(-1);switch(Gm(c)){case 3075958:if(!Bs(c,C(15)))break a;d=2;break a;case 102970646:if(!Bs(c,C(16)))break a;d=0;break a;case 1441429116:if(!Bs(c,C(17)))break a;d=1;break a;default:}}b:{switch(d){case 0:break;case 1:LO(a.dg);break b;case 2:FX(a.dg);break b;default:e=new R;U(e);L(L(e,C(18)),b);$rt_globals.console.info($rt_ustr(S(e)));break b;}J4(a.dg);}}
function P5(a,b){var c,d;c=a.dg;d=Yg(b);c.y.dy=d;c.x.dy=d;}
function AOI(a){return E8(a.dg.x.e);}
function ALz(a){T_(a.pc);}
function AKA(a,b){var c;if(!(b instanceof ET)){c=new Bu;Bm(c,C(20));K(c);}c=a.dg;b=b.dS;HY(c.x,b);}
function AGn(a,b){var c,d;c=a.dg;b=Ch(b);d=c.y;Dx(d,b,d.dX);c=c.x;Dx(c,b,c.dX);}
function AHj(a,b){PJ(a,b);}
function ANI(a,b){var c,d;c=b;b=a.dg;d=b.y;Dx(d,d.ft,c);b=b.x;Dx(b,b.ft,c);}
function AKy(a,b){var c;if(!(b instanceof ET)){c=new Bu;Bm(c,C(20));K(c);}c=a.dg;b=b.dS;HY(c.y,b);}
function AH8(a){return E8(a.dg.y.e);}
function AG0(a,b){P5(a,b);}
var SK=F(0);
var CR=F(0);
function Cy(b,c){if(b!==null)b.e4();return c;}
var O0=F(0);
function H$(){var a=this;B.call(a);a.lp=0;a.kD=0;}
var ATe=0;function Is(a){ATe=ATe-1|0;}
function J$(a,b,c){return GD(a,b)+c|0;}
function Rc(){var a=this;H$.call(a);a.jp=null;a.de=null;a.mC=null;}
function Fu(a){var b,c,d;b=a.de;c=a.lp;d=a.kD;b.clearRect(0.0,0.0,c,d);}
function RE(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.de;d="center";c.textAlign=d;break a;case 2:c=a.de;d="right";c.textAlign=d;break a;default:break a;}d=a.de;c="left";d.textAlign=c;}}
function CK(a,b){MT(a,DC(b.mV));}
function MT(a,b){var c;if(!(a.mC==b?1:0)){c=a.de;a.mC=b;c.font=b;}}
function Et(a,b,c,d){var e,f,g;e=a.de;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function GD(a,b){var c;c=$rt_ustr(b);return a.de.measureText(c).width;}
function XR(){var b;b=(X5()).getContext("2d").measureText("");return ("fontBoundingBoxAscent" in b?1:0)&&("fontBoundingBoxDescent" in b?1:0)?1:0;}
var AAb=F();
var Hp=F(0);
function TD(){B.call(this);this.nu=null;}
function AHG(a,b,c){var d,e;b=Dm(b,"f");c=Dm(c,"f");d=a.nu;e=new Px;e.ny=b;e.nz=d;ABi(e,c,AB7(d));}
var AA8=F(0);
function ACt(b,c){var d,e,f,g,h,i,j,k,l,m,n;d=P(Bt,8);e=BY(16);f=0;g=0;h=b.length;i=0;while(true){j=BB(i,h);if(j>0)break;k=j>=0?c:b.charCodeAt(i)&65535;if(k!=c){j=e.data.length;if(j==f)e=XY(e,j*2|0);l=e.data;j=f+1|0;l[f]=k;f=j;}else{l=d.data;m=Ek(e,0,f);j=g+1|0;n=l.length;if(n==g)d=C1(d,n*2|0);d.data[g]=m;d=d;f=0;g=j;}i=i+1|0;}return YR(d,g);}
var Zl=F();
function X5(){return (Fq()).createElement("canvas");}
function GP(b,c){if((b?true:false)?1:0)c=Ch(b);return c;}
function ALs(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function LK(){var a=this;B.call(a);a.dE=null;a.f=null;a.kU=null;a.ha=null;a.tb=null;}
function AQI(a,b){var c=new LK();ABr(c,a,b);return c;}
function AQy(a,b,c){var d=new LK();ADj(d,a,b,c);return d;}
function ABr(a,b,c){ADj(a,b,null,c);}
function ADj(a,b,c,d){var e,f,g,h,i,j;a.dE=d;a.ha=c;if(d===null)c=null;else{c=d.eM;c=c===null?null:!DF(c,C(21))&&!DF(c,C(22))&&!DF(c,C(23))&&!DF(c,C(24))&&!DF(c,C(25))&&!DF(c,C(26))?(DF(c,C(27))?C(28):DF(c,C(29))?C(30):!DF(c,C(31))?null:C(32)):C(33);}e=b.data;a.tb=c;c=new JW;f=e.length;if(!f)g=S8(C(3));else{g=P(Cl,f);h=g.data;i=0;while(i<f){j=new Cl;b=P(B1,1);b.data[0]=PM(e[i]);Hr(j,b);h[i]=j;i=i+1|0;}}b=g.data;c.cX=Gf();c.cP=Gf();c.fh=BC();if(!b.length){c=new Bu;X(c);K(c);}c.v=g;c.f4=0;c.ck=0;c.cC=KT(c);c.dC
=AMU();a.f=c;}
function Dt(a){var b;b=a.ha;if(b===null)b=a.tb;return b;}
function FP(a){var b;b=a.dE;return b===null?null:b.gQ;}
var XQ=F();
function J6(b){var c,d,e;if(b===null)return null;c=b.tR;if(c!==null)return DC(c);c=b.gQ;d=b.h3;e=b.eM;b=DC(b);return AOq($rt_ustr(c),$rt_ustr(d),$rt_ustr(e),b);}
function ABq(b){var c;if(!((b?true:false)?1:0))return null;c=b.javaPeer;if(c instanceof UD)return c;return AFt(GP(b.scheme,null),GP(b.authority,null),GP(b.path,null),HH(b));}
function AOq(b,c,d,e){return {scheme:b,authority:c,path:d,javaPeer:e};}
function W_(){B.call(this);this.mL=null;}
function AHA(a,b,c){var d,e;b=Dm(b,"f");c=Dm(c,"f");d=a.mL;e=new QF;e.uj=b;e.uk=d;ABi(e,c,AB7(d));}
var ADC=F();
var ACd=F(0);
function UM(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C1(b,f+g|0);C$(c,0,d,f,g);return d;}
function Ko(b,c,d){C$(b,c,d,0,d.data.length);return d;}
function Q5(b,c,d){var e;if(c>0)C$(b,0,d,0,c);e=d.data.length;if(c<e)C$(b,c+1|0,d,c,e-c|0);return d;}
function ZT(b,c,d,e){var f;if(c>0)C$(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C$(b,d,e,c,f-d|0);}return e;}
function Iu(b){var c;c=new UW;c.q8=b;return c;}
function YR(b,c){if(b.data.length!=c)b=C1(b,c);return b;}
var X8=F();
function XY(b,c){var d,e,f,g;b=b.data;d=BY(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AC2(b,c){var d,e,f,g;b=b.data;d=En(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function LL(b,c){var d,e,f,g;b=b.data;d=BD(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C1(b,c){var d,e,f,g;d=b.data;e=ABK(HN(By(b)),c);f=Bb(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function YV(b){var c,d,e;if(b===null)return C(11);c=new R;U(c);CU(c,C(34));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)CU(c,C(35));L(c,e[d]);d=d+1|0;}CU(c,C(36));return S(c);}
function G5(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Bu;X(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function YB(b,c,d,e){var f,g;if(c>d){e=new Bu;X(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Zh(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=ATf;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bb(j,h+f|0);l=h+(2*f|0)|0;m=Bb(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.uV(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AA_(b,c){return S0(b,0,b.data.length,c);}
function S0(b,c,d,e){var f,g,h,i,j;f=BB(c,d);if(f>0){g=new Bu;X(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var ACv=F();
function Ch(b){return $rt_str(b);}
function UD(){var a=this;B.call(a);a.gQ=null;a.h3=null;a.eM=null;a.tR=null;}
function AFt(a,b,c,d){var e=new UD();AEr(e,a,b,c,d);return e;}
function AEr(a,b,c,d,e){a.gQ=b;a.h3=c;a.eM=d;a.tR=e;}
function AGb(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BN(a.gQ,c.gQ)&&BN(a.h3,c.h3)&&BN(a.eM,c.eM)?1:0;}return 0;}
function D$(){B.call(this);this.sc=null;}
var ATg=null;var ATh=null;var ATi=null;var ATj=null;var ATk=null;var ATl=null;function JS(){JS=Bi(D$);AFT();}
function MA(a){var b=new D$();AAT(b,a);return b;}
function AAT(a,b){JS();a.sc=b;}
function HH(b){var c,d,e,f,g,h;JS();if(b===null)return null;a:{c=b;if(ATh!==null){d=$rt_str(typeof c);if(!Bs(d,C(37))&&!Bs(d,C(38))){if(Bs(d,C(39))){e=ATi.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=MA(c);h=g;ATi.set(c,new $rt_globals.WeakRef(h));Nm(ATk,h,c);return g;}if(!Bs(d,C(40)))break a;else{e=ATj.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=MA(c);h=g;ATj.set(c,new $rt_globals.WeakRef(h));Nm(ATl,
h,c);return g;}}e=ATh.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=MA(c);ATh.set(c,new $rt_globals.WeakRef(g));return g;}}return MA(c);}
function DC(b){JS();if(b===null)return null;return b.sc;}
function Ve(b){JS();if(b===null)return null;return b instanceof $rt_objcls()&&b instanceof D$?DC(b):b;}
function R_(b){JS();if(b===null)return null;return b instanceof $rt_objcls()?b:HH(b);}
function AFT(){ATg=new $rt_globals.WeakMap();ATh=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();ATi=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATj=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();ATk=ATi===null?null:new $rt_globals.FinalizationRegistry(Bn(new OV,"accept"));ATl=ATj===null?null:new $rt_globals.FinalizationRegistry(Bn(new OW,"accept"));}
function Nm(b,c,d){return b.register(c,d);}
var Yx=F(0);
function Z2(b){var c;a:{switch(b){case 0:break;case 1:c=C(28);break a;case 2:c=C(33);break a;case 3:c=C(30);break a;case 4:c=C(32);break a;default:c=null;break a;}c=C(41);}return c;}
function JW(){var a=this;B.call(a);a.v=null;a.cC=null;a.dC=null;a.cX=null;a.cP=null;a.fh=null;a.fV=null;a.ck=0;a.f4=0;a.r1=0.0;}
function KT(a){var b;b=Ui(a);return AC9(AFi(I9(0,b,0),null,null));}
function BG(a,b){return a.v.data[b];}
function Ca(a){return a.v.data.length;}
function Ui(a){return Ey(a,Ca(a));}
function Fk(a,b){return a.v.data[b].A;}
function KH(a,b){var c,d,e,f,g,h,i;c=a.v.data;d=c[b];e=c[b+1|0];f=Do(UM(d.l,e.l));g=a.v;h=g.data.length;if(b<h&&b>=0){i=P(Cl,h-1|0);c=i.data;Q5(g,b,i);c[b]=f;a.v=i;return;}d=new Br;X(d);K(d);}
function My(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.v.data;if(!(c<d[b].A?0:1)){d=(BG(a,b)).l.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<H(h.r)){f=I(h.r,g);break a;}g=g-H(h.r)|0;f=f+1|0;}f=0;}Gd();h=new Bt;d=BY(1);d.data[0]=f;IN(h,d);E_(a,b,c,1,h);h=a.v.data[b];i=h.l;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=H(d[j].r);if(c<b)break;c=c-b|0;j=j+1|0;}}if(H(d[j].r)==1)h.l=Q5(i,j,P(B1,e-1|0));else{k=d[j];if(c<=0)l=C8(DI(k.r,1),k.cq,k.bY);else if(c>=(H(k.r)-1|0)){l=new B1;m=k.r;SP(l,B8(m,0,H(m)-
1|0),k.cq,k.bY);}else{i=BY(H(k.r)-1|0);n=i.data;b=0;while(b<c){n[b]=I(k.r,b);b=b+1|0;}b=n.length;while(c<b){m=k.r;e=c+1|0;n[c]=I(m,e);c=e;}l=C8(GZ(i),k.cq,k.bY);}d[j]=l;}h.A=h.A-1|0;D8(h);}else if(b!=(d.length-1|0)){E_(a,b,c,1,C(42));KH(a,b);}}
function Xd(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){RK(a.v.data[b],c,e[0]);return;}g=f-1|0;h=Hu(a.v.data[b],c);d=a.v;i=C1(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.l.data;m=l.length;c=!m?0:H(l[m-1|0].r);L4(j,j.l.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(E3(e[m]))j=Do(P(B1,0));else{j=new Cl;l=P(B1,1);l.data[0]=C8(e[m],0,0);Hr(j,l);}d[b+m|0]=j;m=m+1|0;}L4(h[1],0,0,e[g]);d[b+g|0]=h[1];a.v
=i;}
function U9(a,b){var c,d,e,f,g,h,i;c=Dy(b);d=Fa(b);e=c.K;if(e==d.K)return B8(EI(a.v.data[e]),c.Y,d.Y);f=new R;U(f);b=a.v.data[c.K];e=c.Y;BV(CU(f,DI(EI(b),e)),10);g=a.v.data;e=c.K+1|0;h=d.K;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;XE(CU(f,EI(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.v.data[d.K];h=d.Y;CU(f,B8(EI(b),0,h));return S(f);}b=new VL;X(b);K(b);}
function ML(a,b,c){var d;Vx(a,b);d=Dy(b);E_(a,d.K,d.Y,1,c);}
function Vx(a,b){var c,d,e,f,g,h,i;a:{c=Dy(b);d=Fa(b);e=c.K;if(e==d.K)F2(a.v.data[e],c.Y,d.Y);else{b=a.v.data[e];F2(b,c.Y,b.A);F2(a.v.data[d.K],0,d.Y);e=c.K+1|0;f=d.K;g=a.v;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(Cl,(h-f|0)+e|0);ZT(g,e,f,i);a.v=i;KH(a,c.K);break a;}b=new Br;X(b);K(b);}b=new Br;X(b);K(b);}}}
function Fj(a,b,c){return C6(b,FB(BG(a,b),c));}
function V5(a,b){var c,d,e;c=0;d=0;while(true){e=a.v.data.length;if(c>=e)break;if((d+(BG(a,c)).A|0)>=b)return Cp(c,b-d|0);d=d+((BG(a,c)).A+1|0)|0;c=c+1|0;}return Cp(e,0);}
function Ey(a,b){var c,d,e;c=0;d=a.v.data.length;e=0;while(e<b){c=c+Fk(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Lc(a,b){return Lt(BG(a,b.be),b.bi);}
function DX(a){var b,c,d,e,f,g,h,i,j;b=BY(Ui(a));c=b.data;d=a.v.data.length;e=0;f=0;while(e<d){g=a.v.data[e].l.data;h=g.length;i=0;while(i<h){j=g[i].r;PY(j,0,H(j),b,f);f=f+H(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function E_(a,b,c,d,e){var f,g,h,i,j,k;a:{a.ck=a.ck+1|0;f=a.fh;g=P(Gs,1);h=new Gs;h.dQ=b;h.dY=c;i=Lx(e,C(42),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=Cp(b,c+H(i[0])|0);break a;}k=Cp((b+j|0)-1|0,H(i[j-1|0]));break a;}}k=Cp(b,c);}i=g.data;h.kI=k;h.lK=d;h.fx=e;i[0]=h;Bv(f,g);JE(a,b,c,d,e);}
function JE(a,b,c,d,e){var f;f=Ey(a,b)+c|0;if(!d){OJ(a.cC,f,H(e));TB(a.dC,f,H(e));}else{P6(a.cC,f,H(e));M8(a.dC,f,H(e));}}
function MZ(a,b){var c,d,e;c=Lx(b.fx,C(42),(-1));if(b.lK){Xd(a,b.dQ,b.dY,c);OJ(a.cC,Ey(a,b.dQ)+b.dY|0,H(b.fx));TB(a.dC,Ey(a,b.dQ)+b.dY|0,H(b.fx));}else{c=c.data;d=AE0();BX(d.bO,b.dQ,b.dY);e=c.length;if(e==1)BX(d.bw,b.dQ,b.dY+H(c[0])|0);else BX(d.bw,(b.dQ+e|0)-1|0,H(c[e-1|0]));Vx(a,d);P6(a.cC,Ey(a,b.dQ)+b.dY|0,H(b.fx));M8(a.dC,Ey(a,b.dQ)+b.dY|0,H(b.fx));}return b.kI;}
function IW(a){a.f4=a.ck;}
function Jt(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.v.data;f=e.length;if(d>=f)break;g=e[d].A;if(b<=(c+g|0))return C6(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return C6(f,0);}
function Pu(a){var b,c,d;a.fV=BD(a.v.data.length+1|0);b=0;while(b<a.v.data.length){c=a.fV.data;d=b+1|0;c[d]=(c[b]+(BG(a,b)).A|0)+1|0;b=d;}}
var Ma=F(0);
var R5=F(0);
var D3=F(0);
var ACG=F(0);
function Fq(){return $rt_globals.window.document;}
var Z_=F();
function Bb(b,c){if(b<c)c=b;return c;}
function Z(b,c){if(b>c)c=b;return c;}
function Cl(){var a=this;B.call(a);a.l=null;a.A=0;a.fv=null;a.eh=null;a.dc=null;a.gz=null;a.fH=0;a.hN=0;a.gZ=0;}
var ATm=0;var ATn=0;var ATo=0;function Do(a){var b=new Cl();Hr(b,a);return b;}
function Hr(a,b){var c,d,e,f;c=b.data;a.l=b;d=0;e=c.length;f=0;while(f<e){d=d+H(c[f].r)|0;f=f+1|0;}a.A=d;D8(a);}
function Ky(a,b){return a.l.data[b];}
function FB(a,b){return Rj(a,GO(a,b));}
function Rj(a,b){return b<=0?0:a.dc.data[b-1|0];}
function GO(a,b){var c,d,e,f;c=a.l.data.length;if(!c)return (-1);if(!(a.dc!==null&&!a.gZ)){V6(a);d=0;e=0;f=a.l.data.length;while(d<f){e=e+H(a.l.data[d].r)|0;a.dc.data[d]=e;d=d+1|0;}a.gZ=0;}d=S0(a.dc,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Lt(a,b){var c;c=a.l.data;if(!c.length)return null;return c[GO(a,b)];}
function F2(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.A){a.l=P(B1,0);D8(a);a.A=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.l.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=H(g[e].r);i=H(a.l.data[f].r);j=BB(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.l.data[f];if(!b&&c==H(k.r)?1:0){g=a.l;a.l=Q5(g,e,P(B1,g.data.length-1|0));a.A=a.A-d|0;D8(a);return;}a.l.data[e]=C8(Hh(B8(k.r,0,b),DI(k.r,c)),k.cq,k.bY);}else{g=a.l.data;l=g[e];m=g[f];if(b){if(b!=
H(l.r))a.l.data[e]=C8(B8(l.r,0,b),l.cq,l.bY);e=e+1|0;}if(c==H(m.r))f=f+1|0;else if(c)a.l.data[f]=C8(DI(m.r,c),m.cq,m.bY);g=a.l;a.l=ZT(g,e,f,P(B1,(g.data.length-f|0)+e|0));}a.A=a.A-d|0;D8(a);}
function Hu(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return G(Cl,[Do(P(B1,0)),a]);if(b>=a.A)return G(Cl,[a,Do(P(B1,0))]);c=a.l;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=H(e[d].r);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return G(Cl,[Do(Ko(c,0,P(B1,d))),Do(Ko(c,d,P(B1,f-d|0)))]);h=e[d];e=Ko(c,0,P(B1,d+1|0));i=e.data;j=Ko(c,d,P(B1,f-d|0));c=j.data;i[d]=C8(B8(h.r,0,b),h.cq,h.bY);c[0]=C8(DI(h.r,b),h.cq,h.bY);return G(Cl,[Do(e),Do(j)]);}
function RK(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.l.data;if(e>=f.length)break a;g=H(f[d].r);if(b<=g)break;b=b-g|0;d=e;}}L4(a,d,b,c);}
function L4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.l;f=e.data;g=f.length;if(!g){h=P(B1,1);h.data[0]=PM(d);a.l=h;}else if(!b&&!c){i=P(B1,g+1|0);h=i.data;C$(e,0,i,1,g);h[0]=PM(d);a.l=i;}else{j=f[b];if(c<=0)k=C8(Hh(d,j.r),j.cq,j.bY);else if(c>=H(j.r))k=C8(Hh(j.r,d),j.cq,j.bY);else{l=H(d);m=l+c|0;n=H(j.r)-c|0;h=BY(H(j.r)+l|0);i=h.data;o=0;while(o<c){i[o]=I(j.r,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=I(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=I(j.r,g+c|0);g=g+1|0;}k=C8(GZ(h),j.cq,j.bY);}f[b]=k;}a.A=a.A+H(d)|0;D8(a);}
function Na(a){var b,c,d,e,f,g;b=0;c=a.l.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Lq(f)){if(I(f.r,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function JY(a,b,c){var d,e,f,g,h,i,j;d=a.l.data.length;e=a.fv;if(!(e!==null&&e.data.length>=d)){a.fv=ADY(d);a.eh=BD(d);a.fH=1;}V6(a);if(!a.fH)ATn=ATn+1|0;else{f=0;g=0.0;ATm=ATm+1|0;h=0;while(h<d){i=c.data;j=a.l.data[h];f=f+H(j.r)|0;a.dc.data[h]=f;CK(b,i[j.bY]);g=g+GD(b,j.r);a.fv.data[h]=g;a.eh.data[h]=g+0.5|0;h=h+1|0;}a.A=f;a.fH=0;a.gZ=0;}}
function V6(a){var b;b=a.dc;if(!(b!==null&&b.data.length>=a.l.data.length)){a.dc=BD(a.l.data.length);a.gZ=1;}}
function D8(a){a.fH=1;a.hN=1;a.gZ=1;a.gz=null;}
function RD(a,b,c,d){var e,f,g,h,i,j,k;if(a.gz===null)a.gz=P($rt_arraycls($rt_intcls()),a.l.data.length);e=a.gz.data[d];if(e===null){e=c.data;f=a.l.data[d];CK(b,e[f.bY]);f=f.r;e=BD(H(f)-1|0);c=E4(f);g=!d?0.0:a.fv.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bt;k=i+1|0;L2(f,c,0,k);h[i]=g+GD(b,f)+0.5|0;i=k;}a.gz.data[d]=e;}return e;}
function F9(a,b,c,d){var e,f,g,h,i;if(a.l.data.length&&b){if(!(!a.fH&&a.eh!==null))JY(a,c,d);if(b>=a.A)return a.eh.data[a.l.data.length-1|0];e=0;f=0;a:{while(true){g=a.l.data;if(f>=g.length)break a;h=e+H(g[f].r)|0;i=BB(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eh.data[f];}return (RD(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Ez(a){var b,c,d;a:{b=a.l.data.length;if(b){c=a.eh.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Go(a,b){var c;if(b>=a.A)return b+1|0;c=GO(a,b);return a.dc.data[c];}
function EI(a){var b,c,d,e;b=new R;FD(b,a.A);c=a.l.data;d=c.length;e=0;while(e<d){CU(b,c[e].r);e=e+1|0;}return S(b);}
function S8(b){var c,d,e,f;c=P(Cl,1);d=c.data;e=new Cl;f=P(B1,1);f.data[0]=PM(b);Hr(e,f);d[0]=e;return c;}
function ZN(){ATo=0;}
var Pm=F(0);
var Q_=F(0);
var QZ=F(0);
var SI=F(0);
var Wn=F(0);
var TG=F(0);
var OH=F(0);
var Jl=F(0);
var XX=F();
function ALl(a,b){return Ve(a.f9(b));}
function ANB(a,b,c){a.Es($rt_str(b),Dm(c,"handleEvent"));}
function AM6(a,b,c){a.Bf($rt_str(b),Dm(c,"handleEvent"));}
function ALh(a,b,c,d){a.zj($rt_str(b),Dm(c,"handleEvent"),d?1:0);}
function AOL(a,b){return !!a.Ez(b);}
function AFN(a){return a.sp();}
function AD5(a,b,c,d){a.CY($rt_str(b),Dm(c,"handleEvent"),d?1:0);}
var ADd=F();
var ZF=F();
var ADy=F();
var Jn=F(0);
var OV=F();
function AFK(a,b){var c;b=R_(b);c=ATi;b=DC(b);c.delete(b);}
var Z1=F();
var OW=F();
function AD7(a,b){var c;b=R_(b);c=ATj;b=DC(b);c.delete(b);}
function B1(){var a=this;B.call(a);a.r=null;a.cq=0;a.bY=0;}
function PM(a){var b=new B1();AGX(b,a);return b;}
function C8(a,b,c){var d=new B1();SP(d,a,b,c);return d;}
function AGX(a,b){SP(a,b,0,0);}
function SP(a,b,c,d){a.r=b;a.cq=c;a.bY=d;}
function GX(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Lq(a){return H(a.r);}
var Kr=F(0);
function Qm(a,b,c){var d;d=B6(a,b);if(d===null)d=EJ(a,b,c);return d;}
function DA(){var a=this;B.call(a);a.j4=null;a.j_=null;}
var DO=F(0);
function JZ(){var a=this;DA.call(a);a.cF=0;a.bX=null;a.cD=0;a.vy=0.0;a.kx=0;}
function Gf(){var a=new JZ();PO(a);return a;}
function AH5(a,b){return P(Gk,b);}
function PO(a){var b;b=AC$(16);a.cF=0;a.bX=P(Gk,b);a.vy=0.75;TH(a);}
function AC$(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Er(a){var b;if(a.cF>0){a.cF=0;b=a.bX;YB(b,0,b.data.length,null);a.cD=a.cD+1|0;}}
function TH(a){a.kx=a.bX.data.length*a.vy|0;}
function FG(a,b){return Sr(a,b)===null?0:1;}
function T5(a){var b;b=new TI;b.qx=a;return b;}
function B6(a,b){var c;c=Sr(a,b);if(c===null)return null;return c.cJ;}
function Sr(a,b){var c,d;if(b===null)c=RH(a);else{d=b.lu();c=Qf(a,b,d&(a.bX.data.length-1|0),d);}return c;}
function Qf(a,b,c,d){var e;e=a.bX.data[c];while(e!==null&&!(e.iK==d&&X1(b,e.cs))){e=e.cy;}return e;}
function RH(a){var b;b=a.bX.data[0];while(b!==null&&b.cs!==null){b=b.cy;}return b;}
function Jp(a){var b;if(a.j4===null){b=new Pe;b.gD=a;a.j4=b;}return a.j4;}
function EJ(a,b,c){var d,e,f,g;if(b===null){d=RH(a);if(d===null){a.cD=a.cD+1|0;d=Tz(a,null,0,0);e=a.cF+1|0;a.cF=e;if(e>a.kx)TT(a);}}else{e=b.lu();f=e&(a.bX.data.length-1|0);d=Qf(a,b,f,e);if(d===null){a.cD=a.cD+1|0;d=Tz(a,b,f,e);e=a.cF+1|0;a.cF=e;if(e>a.kx)TT(a);}}g=d.cJ;d.cJ=c;return g;}
function Tz(a,b,c,d){var e,f;e=new Gk;W7(e,b,null);e.iK=d;f=a.bX.data;e.cy=f[c];f[c]=e;return e;}
function ZJ(a,b){var c,d,e,f,g,h,i,j;c=AC$(!b?1:b<<1);d=P(Gk,c);e=d.data;f=0;b=c-1|0;while(true){g=a.bX.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.iK&b;j=h.cy;h.cy=e[i];e[i]=h;h=j;}f=f+1|0;}a.bX=d;TH(a);}
function TT(a){ZJ(a,a.bX.data.length);}
function X1(b,c){return b!==c&&!b.bC(c)?0:1;}
var Vb=F(0);
function ADH(a,b){var c;c=a.bj();while(c.bv()){b.i(c.bg());}}
var G3=F(0);
function AI_(a,b){var c,d;c=a.bj();d=0;while(c.bv()){if(b.b9(c.bg())){c.pU();d=1;}}return d;}
var Ex=F();
function De(a){return a.cG()?0:1;}
function Hi(a,b){var c,d,e,f,g,h;c=b.data;d=a.k;e=c.length;if(e<d)b=ABK(HN(By(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BI(a);while(BJ(f)){g=b.data;h=e+1|0;g[e]=BL(f);e=h;}return b;}
function SY(a,b){var c,d;c=0;d=BI(b);while(BJ(d)){if(!a.rM(BL(d)))continue;c=1;}return c;}
var Rt=F(0);
var IJ=F(0);
function FM(){Ex.call(this);this.co=0;}
function AMy(a,b){a.l9(a.cG(),b);return 1;}
function BI(a){var b;b=new Ni;b.gC=a;b.lT=a.co;b.ip=a.cG();b.f7=(-1);return b;}
function ALN(a,b,c){var d,e;if(b>=0&&b<=a.cG()){if(c.dW())return 0;d=c.bj();while(d.bv()){e=b+1|0;a.l9(b,d.bg());b=e;}return 1;}c=new Bu;X(c);K(c);}
function AN$(a,b,c){c=new D0;X(c);K(c);}
function JJ(a,b){var c,d;c=a.cG();d=0;while(true){if(d>=c)return (-1);if(BN(b,a.f9(d)))break;d=d+1|0;}return d;}
function AKM(a,b){var c,d;if(!Ib(b,IJ))return 0;c=b;if(a.k!=c.k)return 0;d=0;while(d<c.k){if(!BN(Bq(a,d),Bq(c,d)))return 0;d=d+1|0;}return 1;}
var KU=F(0);
function Ya(){var a=this;FM.call(a);a.cl=null;a.k=0;}
function BC(){var a=new Ya();AHC(a);return a;}
function AHC(a){a.cl=P(B,10);}
function IS(a,b){var c,d;c=a.cl.data.length;if(c<b){d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.cl=C1(a.cl,d);}}
function Bq(a,b){IH(a,b);return a.cl.data[b];}
function ALv(a){return a.k;}
function Bv(a,b){var c,d;IS(a,a.k+1|0);c=a.cl.data;d=a.k;a.k=d+1|0;c[d]=b;a.co=a.co+1|0;return 1;}
function Rd(a,b,c){var d,e,f;Pp(a,b);IS(a,a.k+1|0);d=a.k;e=d;while(e>b){f=a.cl.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cl.data[b]=c;a.k=d+1|0;a.co=a.co+1|0;}
function Fi(a,b){var c,d,e,f;IH(a,b);c=a.cl.data;d=c[b];e=a.k-1|0;a.k=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.co=a.co+1|0;return d;}
function UV(a,b){var c;c=JJ(a,b);if(c<0)return 0;Fi(a,c);return 1;}
function FK(a){YB(a.cl,0,a.k,null);a.k=0;a.co=a.co+1|0;}
function YC(a,b,c){var d,e,f,g,h,i;Pp(a,b);if(c.dW())return 0;IS(a,a.k+c.cG()|0);d=c.cG();e=a.k;f=e-1|0;while(f>=b){g=a.cl.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.k=e+d|0;h=c.bj();i=0;while(i<d){g=a.cl.data;e=b+1|0;g[b]=h.bg();i=i+1|0;b=e;}a.co=a.co+1|0;return 1;}
function IH(a,b){var c;if(b>=0&&b<a.k)return;c=new BS;X(c);K(c);}
function Pp(a,b){var c;if(b>=0&&b<=a.k)return;c=new BS;X(c);K(c);}
function DW(a,b){var c;c=0;while(c<a.k){b.i(a.cl.data[c]);c=c+1|0;}}
function YY(){var a=this;B.call(a);a.ej=null;a.dk=null;}
function AMU(){var a=new YY();AD8(a);return a;}
function AF5(a,b){var c=new YY();AHN(c,a,b);return c;}
function AD8(a){var b;b=new Kk;PO(b);a.dk=b;}
function AHN(a,b,c){a.ej=b;a.dk=c;}
function Sp(a,b,c){var d;d=new Mv;d.u_=c;d.u$=b;ACY(b,d);b=b.ce;d=new Mw;d.ms=a;d.mr=c;b.ep(d);}
function TB(a,b,c){var d;d=a.ej;if(d===null)return;QB(a,d,b,c);}
function M8(a,b,c){var d;d=a.ej;if(d===null)return;S6(a,d,b,c);}
function QB(a,b,c,d){var e,f,g,h;e=b.c5.bj();while(e.bv()){WU(a,e.bg(),c,d);}e=b.dV.bj();while(e.bv()){f=e.bg();g=new Uj;g.sf=a;DT(a,g,f,c,d);}h=b.es.bj();while(h.bv()){e=h.bg();WU(a,e.e6,c,d);f=new Uh;f.oB=a;DT(a,f,e.hh,c,d);}b=b.ce.bj();while(b.bv()){QB(a,b.bg(),c,d);}}
function WU(a,b,c,d){I4(a,b.cQ,c,d);}
function DT(a,b,c,d,e){var f,g;a:{if(c instanceof EX){f=c.i3;g=new Nc;g.p9=a;g.p$=b;g.p_=d;g.qa=e;DW(f,g);}else{if(!(c instanceof Fm)){if(!(c instanceof Fx))break a;f=c;DT(a,b,f.fl,d,e);DT(a,b,f.fC,d,e);return;}g=c.eT;f=new Nd;f.ub=a;f.t9=b;f.t$=d;f.t_=e;DW(g,f);}}if(c!==null){c=c.dm;if(c!==null)b.iD(c,CG(d),CG(e));}}
function I4(a,b,c,d){var e;e=b.cg;if(e>=c)b.cg=e+d|0;}
function S6(a,b,c,d){var e,f,g,h;e=b.c5.bj();while(e.bv()){HQ(a,(e.bg()).cQ,c,d);}e=b.dV.bj();while(e.bv()){f=e.bg();g=new R3;g.vJ=a;DT(a,g,f,c,d);}h=b.es.bj();while(h.bv()){e=h.bg();HQ(a,e.e6.cQ,c,d);f=new RZ;f.mo=a;DT(a,f,e.hh,c,d);}b.c5.k7(new R1);b.dV.k7(new R0);b=b.ce.bj();while(b.bv()){S6(a,b.bg(),c,d);}}
function HQ(a,b,c,d){var e;e=b.cg;if(e>=c)b.cg=e-d|0;}
var Bu=F(Br);
var Xk=F(Br);
function MX(){var a=this;B.call(a);a.dx=null;a.ed=0;}
var ATp=null;function AC9(a){var b=new MX();Y3(b,a);return b;}
function Y3(a,b){a.ed=0;a.dx=b;}
function T3(a,b){var c;if(b.eo)return b;b=BI(b.bh);while(true){if(!BJ(b))return null;c=T3(a,BL(b));if(c!==null)break;}return c;}
function TK(a,b,c){var d,e,f,g;d=Jo(a,a.dx,b);if(d===null)return;e=c.c8.ce;f=c.bh;if(d===a.dx){b=Bq(f,0);a.dx=b;b.c8=e.f9(0);return;}if(!De(f)){b=d.g9;if(b!==null){c=new Ut;c.ow=b;DW(f,c);g=JJ(b.bh,d);Fi(b.bh,g);YC(b.bh,g,f);}}b=d.c8.ff;c=new VY;c.mA=b;e.ep(c);g=JJ(b.ce,d.c8);if(g!=(-1)){b.ce.lY(g);b.ce.ss(g,e);}}
function Jo(a,b,c){var d,e,f,g;d=b.bL;if(d.bN==c.bN&&d.bQ==c.bQ?1:0){d=BI(b.bh);while(BJ(d)){e=Jo(a,BL(d),c);if(e!==null)return e;}return b;}b=BI(b.bh);while(true){if(!BJ(b))return null;d=BL(b);f=c.bN;g=c.bQ;e=d.bL;if(e.bN<=f&&g<=e.bQ?1:0){e=Jo(a,d,c);if(e!==null)break;}}return e;}
function L8(a,b,c){Bv(c,b.bL);b=BI(b.bh);while(BJ(b)){L8(a,BL(b),c);}}
function OJ(a,b,c){a.ed=0;Kh(a,a.dx,b,c);}
function Kh(a,b,c,d){var e;if(CM(b)<c)return;a:{if(CF(b)>c){LF(b,d);Gc(b,d);b=BI(b.bh);while(BJ(b)){Kh(a,BL(b),c,d);}}else{if(!KJ(b,c)){if(a.ed)break a;if(CM(b)!=c)break a;}Gc(b,d);if(CF(b)==c&&a.ed)LF(b,d);e=BI(b.bh);while(BJ(e)){Kh(a,BL(e),c,d);}if(!a.ed){b.eo=1;a.ed=1;}}}}
function P6(a,b,c){a.ed=0;Je(a,a.dx,b,c);}
function Je(a,b,c,d){var e,f,g,h,i,j;if(CM(b)<c)return;e=CF(b);f=c+d|0;if(e>f){e= -d|0;LF(b,e);Gc(b,e);g=BI(b.bh);while(BJ(g)){Je(a,BL(g),c,d);}b.bh=Wq(a,b.bh);}else{g=b.bL;if(c<=g.bN&&g.bQ<=f?1:0){if(b!==a.dx){K3(b,(-1));Jv(b,(-1));}else{K3(b,0);Jv(b,0);}FK(b.bh);b=b.c8;if(b!==null)b.ce.hK();}else{e=KJ(b,c);f=KJ(b,f);if(e&&f)Gc(b, -d|0);else if(e)Jv(b,c);else{if(!f)return;K3(b,c);Gc(b, -d|0);}g=BI(b.bh);while(BJ(g)){Je(a,BL(g),c,d);}g=b.bh;h=null;i=OU(0);while(true){d=0;a:{while(true){if(h===null)h=BI(g);if
(!BJ(h))c=0;else{j=BL(h);i=OU(!ZP(i)&&!j.eo?0:1);c=1;d=1;}if(!c){c=0;break a;}if(!d)break;}c=1;}if(!c)break;}if(!i.l2&&!a.ed)b.eo=1;else a.ed=1;b.bh=Wq(a,b.bh);}}}
function Wq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BC();d=null;e=ATp;f=b.cl;g=b.k;if(e===null)e=ATf;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}Zh(h,e);j=0;while(j<g){f.data[j]=i[j-0|0];j=j+1|0;}b.co=b.co+1|0;b=BI(b);while(BJ(b)){l=BL(b);if(CF(l)==CM(l))continue;if(!l.eo){if(d!==null){Bv(c,d);d=null;}Bv(c,l);}else if(d===null)d=l;else{j=Bb(CF(d),CF(l));m=Z(CM(d),CM(l));e=d.c8;if(e===null)e=l.c8;n=AFi(I9(j,m,d.bL.eH),d.g9,e);n.eo=1;d=n;}}if(d!==null)Bv(c,d);return c;}
function Wa(a,b,c,d){var e,f,g,h,i;if((CM(c)-CF(c)|0)<43)e=B8(d,CF(c),CM(c));else{e=B8(d,CF(c),CF(c)+20|0);f=B8(d,CM(c)-20|0,CM(c));g=new R;U(g);L(L(L(g,e),C(43)),f);e=S(g);}e=T$(e,C(42),C(44));f=Eh();g=new R;U(g);h=Bj(g,b);BV(h,32);h=L(h,c);BV(h,9);L(h,e);Cn(f,S(g));c=BI(c.bh);i=b+1|0;while(BJ(c)){Wa(a,i,BL(c),d);}}
function AAR(){ATp=new RR;}
var Kk=F(JZ);
function Lp(a,b,c){var d;if(b!==null&&c!==null){if(!FG(a,b)){c=new Bu;d=new R;U(d);L(L(d,C(45)),b);Bm(c,S(d));K(c);}if(!FG(a,c)){b=new Bu;d=new R;U(d);L(L(d,C(45)),c);Bm(b,S(d));K(b);}if(Bs(b,c))return 1;c=BI(B6(a,c));while(BJ(c)){if(Lp(a,b,BL(c)))return 1;}return 0;}return 1;}
function ADc(){var a=this;B.call(a);a.bN=0;a.bQ=0;a.eH=0;}
function I9(a,b,c){var d=new ADc();AGR(d,a,b,c);return d;}
function AGR(a,b,c,d){a.bN=b;a.bQ=c;a.eH=d;}
function ANC(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return a.bN==c.bN&&a.bQ==c.bQ&&a.eH==c.eH?1:0;}return 0;}
function AFD(a,b){var c;b=b;c=BB(a.bN,b.bN);if(!c)c=BB(b.bQ,a.bQ);return c;}
var RR=F();
function AOk(a,b,c){var d;b=b;c=c;b=b.bL;c=c.bL;d=BB(b.bN,c.bN);if(!d)d=BB(c.bQ,b.bQ);return d;}
function Us(){var a=this;B.call(a);a.bL=null;a.g9=null;a.bh=null;a.c8=null;a.eo=0;}
function AFi(a,b,c){var d=new Us();ACQ(d,a,b,c);return d;}
function ACQ(a,b,c,d){a.eo=0;a.bL=b;a.g9=c;a.bh=BC();a.c8=d;}
function Yr(b){return Xm(b,null);}
function Xm(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=W(b);e=W(b);f=W(b);g=W(b);h=W(b);i=I9(d,e,f);j=new Us;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}ACQ(j,i,null,l);m=0;while(m<g){l=Xm(b,c);l.g9=j;Bv(j.bh,l);m=m+1|0;}return j;}
function ABd(b,c,d){var e,f,g,h,i;a:{e=b.bL;f=b.bh;g=e.bN;h=e.bQ;i=e.eH;Bl(c,g);Gg(c,h,i);Bl(c,f.k);if(d!==null){e=b.c8;if(e!==null&&U4(d,e)){g=(Lz(d,b.c8)).bq;break a;}}g=(-1);}Bl(c,g);b=BI(f);while(BJ(b)){ABd(BL(b),c,d);}}
function CF(a){return a.bL.bN;}
function CM(a){return a.bL.bQ;}
function K3(a,b){a.bL.bN=b;}
function Jv(a,b){a.bL.bQ=b;}
function LF(a,b){var c;c=a.bL;c.bN=c.bN+b|0;}
function Gc(a,b){var c;c=a.bL;c.bQ=c.bQ+b|0;}
function KJ(a,b){return CF(a)<=b&&b<CM(a)?1:0;}
function AIz(a){var b,c,d,e,f;b=a.bL;c=b.bN;d=b.bQ;e=b.eH;b=new R;U(b);BV(b,40);BV(Bj(L(Bj(L(Bj(b,c),C(35)),d),C(35)),e),41);b=S(b);c=a.eo;f=new R;U(f);G4(L(L(f,b),C(35)),c);return S(f);}
function AMY(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BN(a.bL,c.bL)&&BN(a.bh,c.bh)?1:0;}return 0;}
var GY=F(0);
function F_(){var a=this;B.call(a);a.cs=null;a.cJ=null;}
function ATq(a,b){var c=new F_();W7(c,a,b);return c;}
function W7(a,b,c){a.cs=b;a.cJ=c;}
function AGm(a,b){var c,d;if(a===b)return 1;if(!Ib(b,GY))return 0;a:{b:{c:{d:{c=b;b=a.cs;if(b!==null){if(!b.bC(c.cs))break c;else break d;}if(c.cs!==null)break c;}b=a.cJ;if(b!==null){if(!b.bC(c.cJ))break c;else break b;}if(c.cJ===null)break b;}d=0;break a;}d=1;}return d;}
function Gk(){var a=this;F_.call(a);a.iK=0;a.cy=null;}
function RN(){var a=this;B.call(a);a.qN=null;a.qP=null;a.qQ=null;}
function ANS(a,b,c){var d,e,f;b=Dm(b,"f");Dm(c,"f");c=a.qN;d=a.qP;e=a.qQ;c=c.fZ;f=new Xj;f.r3=b;DL(c,f,d,e);}
function Wu(){var a=this;B.call(a);a.kf=null;a.l8=null;a.jH=null;a.lQ=null;a.lD=null;a.lz=null;}
function LB(a,b,c){return QO(a,Cd(a.kf),b,c);}
function Qw(a,b,c){return QO(a,Cd(a.l8),b,c);}
function QO(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(Jz(g,c,d))return g.qW;f=f+1|0;}return null;}
function Tb(a,b,c){var d,e,f,g;d=(Cd(a.jH)).data;e=d.length;f=0;while(f<e){g=d[f];if(Jz(g,b,c))return g.qr;f=f+1|0;}return null;}
var Ki=F(0);
function Pq(){var a=this;B.call(a);a.t0=null;a.t1=null;}
function EN(){B.call(this);this.oz=null;}
function ATr(a){var b=new EN();KG(b,a);return b;}
function KG(a,b){a.oz=b;}
function Jz(a,b,c){var d,e,f,g;d=a.oz.data;e=d.length;f=0;while(f<e){g=d[f];if(ABl(b,g.qB)&&ABl(c,g.py)?1:0)return 1;f=f+1|0;}return 0;}
function Ks(){EN.call(this);this.qr=null;}
var ACC=F();
function Jj(b){var c,d,e,f;if(!($rt_globals.Array.isArray(b)?1:0)){c=P(Hs,1);c.data[0]=Zy(b);return c;}d=b.length;c=P(Hs,d);e=c.data;f=0;while(f<d){e[f]=Zy(b[f]);f=f+1|0;}return c;}
function Zy(b){var c,d,e;c=typeof b==='string'?1:0;d=c?Ch(b):GP(b.language,null);e=c?null:GP(b.scheme,null);b=new Hs;b.qB=d;b.py=e;return b;}
var OG=F(0);
function AAP(){var a=this;B.call(a);a.ku=null;a.rG=null;a.l$=null;a.mM=null;a.db=null;a.lJ=null;a.jJ=null;a.g_=null;a.fc=null;a.ic=0;a.kB=0;a.q6=null;a.d9=null;a.kF=null;a.lF=null;a.sz=0;}
function AHz(a,b,c,d){var e=new AAP();ANO(e,a,b,c,d);return e;}
function ANO(a,b,c,d,e){var f,g,h,i,j;a.ku=new $rt_globals.TextDecoder("utf-16");f=new UE;f.oN=a;a.rG=f;f=new UB;f.vi=a;a.l$=f;g=new UC;g.rx=a;a.lJ=new $rt_globals.ResizeObserver(Bn(g,"f"));f=new Uz;f.n$=a;a.jJ=f;a.ic=1;g=new O9;g.xz=null;g.jj=ATf;a.lF=g;a.kF=e;g=new UA;g.ud=a;f=Bn(g,"f");e.onmessage=f;f=AAi();e.postMessage(f);a.mM=(Fq()).getElementById($rt_ustr(d));e=X5();d=0;e.tabIndex=d;g=e.style;g.setProperty("width","100%");g.setProperty("height","100%");g.setProperty("outline","none");a.db=e;a.mM.appendChild(e);d
=a.db;f=ALs(!!0,!!0,!!1,!!1);d=d.getContext("webgl2",f);if(d===null)c.w();else{c=new Pv;e=a.db;f=a.l$;c.dB=null;c.gX=e;c.cb=ARw(f);g=$rt_globals.window;h=P(CR,14);i=h.data;j=new VB;j.nd=c;i[0]=CD(c,e,C(46),j);j=new VC;j.r_=c;i[1]=CD(c,e,C(47),j);j=new VD;j.oA=c;i[2]=CD(c,e,C(48),j);j=new VE;j.vf=c;i[3]=CD(c,e,C(49),j);j=new VF;j.rq=c;i[4]=CD(c,e,C(50),j);j=new VG;j.nK=c;i[5]=CD(c,e,C(51),j);j=new VH;j.vt=c;i[6]=CD(c,e,C(52),j);j=new VI;j.rB=c;i[7]=CD(c,e,C(53),j);j=new VJ;j.nX=c;i[8]=CD(c,e,C(54),j);j=new VK;j.un
=c;i[9]=CD(c,e,C(55),j);j=new W2;j.tF=c;i[10]=CD(c,e,C(56),j);j=new W3;j.sq=c;g.addEventListener("paste",Bn(j,"handleEvent"),!!1);i[11]=V0(c,g,C(57),j);j=new W4;j.mx=c;i[12]=CD(c,g,C(58),j);j=new W5;j.uN=c;i[13]=CD(c,g,C(59),j);f=new Qk;f.oG=h;c.kS=f;Zz(c,e);a.g_=c;a.fc=AQU(d,a.l$);AKn(a.lJ,a.db);e=$rt_globals.window;d=a.jJ;e.addEventListener("resize",Bn(d,"handleEvent"));a.d9=b.mb(Zp(a));Sw(a);}}
function T_(a){a.db.focus();}
function Zp(a){var b,c,d;b=new Mb;c=a.fc;d=a.g_.cb;b.jy=c;b.bm=d;b.iP=a;return b;}
function Sw(a){a.kB=$rt_globals.requestAnimationFrame(Bn(a.rG,"onAnimationFrame"));}
function FJ(a){a.ic=1;}
function Su(a,b,c){var d,e,f,g,h,i,j;a.g_.dB=Cp(b,c);d=a.db;e=b;d.width=e;d=a.db;e=c;d.height=e;f=$rt_globals.window.devicePixelRatio;g=(0.03125+b)/f;h=(0.03125+c)/f;ALp(a.db.style,g,h);e=a.fc;Bd(e.dP,b,c);d=e.bF;e=e.dP;i=e.a;j=e.b;d.viewport(0,0,i,j);a.d9.iL(a.fc.dP,J3(a));a.d9.fg();}
function HD(a,b){var c,d,e;c=a.q6;d=a.db;if(BN(b,c))b=c;else{e=d.style;if(b!==null&&H(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.q6=b;}
function No(a){return $rt_globals.performance.now()/1000.0;}
function J3(a){return $rt_globals.window.devicePixelRatio;}
function Vs(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADb(b,0);else{c=new WD;d=$rt_globals.window.showOpenFilePicker();e=new WC;e.pK=b;e.pJ=c;d.then(Bn(e,"f"),Bn(c,"f"));}}
function DL(a,b,c,d){var e,f,g,h,i,j,k;d=d.data;e=a.sz+1|0;a.sz=e;f=a.lF;g=CG(e);f.hw=LC(f,f.hw,g);g=TO(f,g);Mc(g,b);Mc(g,b);f.jo=f.jo+1|0;b=a.kF;h=d.length;i=new $rt_globals.Array(h+2|0);f=e;0;i[0]=f;c=$rt_ustr(c);1;i[1]=c;f=new $rt_globals.Array();j=0;while(j<h){c=d[j];if(c instanceof Bt)c=$rt_ustr(c);else if(Ib(c,$rt_arraycls($rt_bytecls())))c=c.data.buffer;else if(Ib(c,$rt_arraycls($rt_charcls())))c=c.data.buffer;else if(Ib(c,$rt_arraycls($rt_intcls())))c=c.data.buffer;else{if(!(c instanceof Kv)){b=new Bu;c
=By(c);if(c.j8===null)c.j8=$rt_str(c.fN.$meta.name);g=c.j8;c=new R;U(c);L(L(c,C(60)),g);Bm(b,S(c));K(b);}g=c;c=g.hH;if(c===null)c=g.fU;}k=j+2|0;k;i[k]=c;if(c instanceof $rt_globals.ArrayBuffer?1:0)f.push(c);j=j+1|0;}b.postMessage(i,f);}
function ADz(b){var c;c=new Wk;c.nv=b;return c;}
function ALp(b,c,d){b.width=c+'px';b.height=d+'px';}
var Z8=F();
function AA6(b,c){var d;d=c.data;return b.decode(d);}
var AAx=F();
function AEo(b){var c,d;c=b.bi+1|0;d=b.be+1|0;return Yz(c,d);}
function HC(b,c){var d;d=b+1|0;b=c+1|0;return Yz(d,b);}
function Yz(b,c){return {column:b,lineNumber:c};}
function FZ(){EN.call(this);this.qW=null;}
function ATs(a,b){var c=new FZ();WX(c,a,b);return c;}
function WX(a,b,c){KG(a,b);a.qW=c;}
function JC(){EN.call(this);this.uv=null;}
var Zx=F();
function Yg(b){return b?1:0;}
var G$=F(0);
function AK$(a){}
function AHw(a){}
var ES=F(0);
var Jy=F(0);
function Zv(){var a=this;B.call(a);a.V=null;a.ch=null;a.cn=null;a.O=null;a.eG=null;a.vv=0;a.l5=null;a.cL=null;a.p=0;a.s=0;a.hb=0;a.k8=0;a.dX=0;a.ft=null;a.fe=null;a.cr=null;a.C=0;a.e=null;a.ea=null;a.cA=null;a.o=null;a.gs=null;a.dz=null;a.ju=null;a.gr=null;a.tJ=0;a.ry=0;a.cE=0;a.b3=0;a.cc=0;a.eV=null;a.eN=null;a.eP=null;a.bc=0;a.c$=0;a.gR=0;a.hC=0;a.hL=0;a.x1=0;a.v5=0;a.jh=0;a.iG=0;a.dJ=0;a.cV=null;a.i_=0;a.hS=0;a.eF=null;a.dy=0;a.bB=0;a.g4=null;a.fA=null;a.jz=null;a.hy=null;a.qy=null;a.su=null;a.h_=null;a.lU
=null;a.km=0;a.vD=null;a.eU=AB9;a.n3=null;a.tt=null;}
function ZM(a,b){var c=new Zv();AMt(c,a,b);return c;}
function AMt(a,b,c){var d,e,f,g;a.V=new Bk;a.ch=new Bk;a.vv=0;a.l5=P(Bo,10);d=new PK;e=new Im;e.bI=new Bk;e.P=new Bk;e.cv=new B5;e.dr=new B5;Vw(e,0,0,2,20);d.d$=e;d.jY=0.5;d.gW=0.0;Jr(187,187,187,255,e.cv);a.cL=d;a.dX=16;a.ft=C(61);a.cr=P(Kw,4);d=new LK;e=new JW;e.cX=Gf();e.cP=Gf();e.fh=BC();e.v=S8(C(3));e.f4=0;e.ck=0;e.cC=KT(e);e.dC=AMU();d.f=e;d.ha=C(41);d.dE=null;a.e=d;f=new Wu;f.kf=Cv(P(FZ,0));f.l8=Cv(P(FZ,0));f.jH=Cv(P(Ks,0));f.lQ=Cv(P(JC,0));f.lD=Cv(P(EF,0));f.lz=Cv(P(Ki,0));a.cA=f;a.o=AE0();e=new Tk;e.ex
=P(Kn,16);e.er=0;e.da=(-1);a.gs=e;a.gr=P(Eo,0);a.eV=Cp(1,0);a.eN=Uq();a.eP=Uq();a.bc=0;a.c$=0;a.gR=0;a.hL=1;a.jh=1;a.iG=1;a.dJ=3;a.cV=AOW();a.eF=C(62);a.dy=0;a.bB=0;a.g4=null;a.fA=BC();e=ED();BT(e);f=new NE;f.so=e;a.hy=f;a.lU=Gf();a.vD=new B5;e=new ND;e.mt=a;a.n3=e;e=new NC;e.qw=a;a.tt=e;a.cn=b;a.O=b.dL;a.eG=c;g=a.l5.data;b=new NB;b.tU=a;g[0]=b;b=new NI;b.nU=a;g[1]=b;b=new NH;b.rS=a;g[2]=b;b=new NG;b.vA=a;g[3]=b;b=new NF;b.nD=a;g[4]=b;b=new NA;b.q5=a;g[5]=b;AEb();a.hC=ATt===ATu?0:1;}
function IK(a,b,c,d){Cu(a.V,b);Cu(a.ch,c);Sf(a,b,c,d);}
function Vy(a,b,c){a.qy=b;a.su=c;}
function Sf(a,b,c,d){var e,f,g,h;a.cE=Co(80.0,d);a.b3=Co(1.0,d);a.cc=Co(10.0,d);if(!a.bB)Cu(a.cn.dl,a.V);else Bd(a.cn.dl,(b.a+c.a|0)-ID(a)|0,b.b);b=a.cV;e=a.cn.dl;f=ID(a);g=c.b;h=d;Cu(b.fj,e);Bd(b.eE,f,g);b.ig=h;b=a.cL;f=Co(2.0,d);b.d$.P.a=f;QM(a,a.ft,a.dX);TE(a);}
function AHm(a){a.k8=1;KY(a);}
function AEF(a){a.k8=0;}
function KY(a){var b;b=a.cL;b.gW=No(Ce(a))+b.jY*1.25;b.fY=1;}
function JB(a,b){var c,d;a.dz=b;c=a.cL;d=b.bZ.vr;CC(c.d$.cv,d);c=a.eN;d=b.bZ;Gy(c,d.kA,d.kK);c=a.eP;b=b.bZ;Gy(c,b.kA,b.kK);}
function Nl(a){Dx(a,a.fe.lV,a.dX+1|0);}
function WZ(a){var b;b=a.dX;if(b<=7)return;Dx(a,a.fe.lV,b-1|0);}
function N6(a,b){Dx(a,b,a.dX);}
function Dx(a,b,c){if(a.cn.b2!==0.0){QM(a,b,c);FJ(Ce(a));}a.dX=c;a.ft=b;}
function QM(a,b,c){var d,e,f,g,h,i;d=Co(c,a.cn.b2);e=a.fe;f=e!==null?e.oS:0;if(!(d==f&&BN(b,a.ft))){OX(a.cV);g=a.gr.data;c=g.length;f=0;while(f<c){WO(g[f]);f=f+1|0;}g=a.e.f.v.data;c=g.length;f=0;while(f<c){D8(g[f]);f=f+1|0;}g=a.cr.data;c=GX(0,0);e=a.O;h=d;g[c]=Gx(e,b,h,400,0);a.cr.data[GX(0,1)]=Gx(a.O,b,h,400,2);a.cr.data[GX(1,0)]=Gx(a.O,b,h,700,0);a.cr.data[GX(1,1)]=Gx(a.O,b,h,700,2);e=a.cr.data[GX(0,0)];a.fe=e;c=Fw(e);a.C=DE(c*1.25);a.cL.d$.P.b=Fw(a.fe);a.ju=Cy(a.ju,EY(a.O,1024,a.C));f=a.C;i=Wb(a.cL);e=new R;U(e);b
=L(L(e,C(63)),b);BV(b,32);Bj(L(Bj(L(Bj(L(Bj(b,d),C(64)),c),C(65)),f),C(66)),i);$rt_globals.console.info($rt_ustr(S(e)));if(ATv){c=Kb(a.fe,a.C);b=new R;U(b);Bj(L(b,C(67)),c);$rt_globals.console.info($rt_ustr(S(b)));}a.hb=F9(E9(a),a.s,a.O.c0,a.cr);GB(a);TE(a);}}
function L9(a){return T(Ca(a.e.f)+5|0,a.C);}
function FQ(a){return Z(L9(a)-a.ch.b|0,0);}
function Sz(a){return Z(a.gR-CY(a)|0,0);}
function CY(a){var b;b=!a.bB?0:CO(a)+a.cc|0;return Z(1,(a.ch.a-a.cE|0)-b|0);}
function ID(a){return a.bB?a.cE:a.cE-a.cc|0;}
function Cz(a){return a.ch.b;}
function KA(a,b){var c,d,e,f,g;c=a.e.f;d=c.f4;e=c.ck;d=d!=e&&b-c.r1>0.03125?1:0;if(d&&a.km!=e){a.km=e;Q$(a);}d=KR((a.bc+a.x1|0)-a.v5|0,FQ(a));e=a.bc==d?0:1;if(e)DQ(a,d);a:{c=a.cL;f=c.fY;if(b>c.gW)while(true){g=c.gW+c.jY;c.gW=g;c.fY=c.fY?0:1;if(b>g)continue;else break a;}}d=c.fY==f?0:1;return !d&&!e&&!a.vv?0:1;}
function DQ(a,b){var c,d;c=KR(b,FQ(a));if(c!=a.bc){a.bc=c;d=a.su;if(d!==null)d.hR(c);}}
function Id(a,b){var c,d;c=KR(b,Sz(a));if(c!=a.c$){a.c$=c;d=a.qy;if(d!==null)d.hR(c);}}
function Ix(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=Ia(a.ch.b,a.C)+7|0;c=a.gr;if(c.data.length<b)a.gr=Zm(b,c,a.tJ,a.ry,a.e.f);DY(a.O,0);Rl(a.O,a.V,a.ch);d=(a.C-Wb(a.cL)|0)/2|0;e=(a.hb-(St(a.cL)/2|0)|0)-a.c$|0;f=!a.bB?a.cE:(a.b3+a.cc|0)+CO(a)|0;g=a.cL;b=f+e|0;d=(d+T(a.p,a.C)|0)-a.bc|0;Bd(g.d$.bI,b,d);h=Ca(a.e.f);i=Fh(a);j=Gv(a);a.tJ=i;a.ry=j;k=a.cn.dl;Bd(k,CY(a),a.C);l=!a.bB?a.V.a+a.cE|0:((a.V.a+a.b3|0)+a.cc|0)+CO(a)|0;m=i;while(m<=j&&m<h){n=BG(a.e.f,m);g=UG(a,m);Yy(g,n,a.ju,a.cr,a.O,a.C,CY(a),
a.c$);o=g.bS;a.gR=Z(a.gR,Ez(n)+(40.0*a.cn.b2|0)|0);p=T(a.C,m)-a.bc|0;c=a.ea;q=c===null?null:c.data[m];b=a.V.b+p|0;n=a.O;r=a.vD;s=!a.hC?0.0:0.5;d=CY(a);f=a.C;t=a.c$;u=a.dz;v=ABj(a.o,m);if(v!==null){if(v.b==(-1))v.b=o.A;v.a=F9(o,v.a,a.O.c0,a.cr);v.b=F9(o,v.b,a.O.c0,a.cr);}ABT(g,b,l,n,r,k,s,d,f,t,u,v,a.g4,a.fA,a.p!=m?0:1,a.ea===null?0:1,q);m=m+1|0;}m=i;while(m<=j&&m<h&&a.jh){g=UG(a,m);p=T(a.C,m)-a.bc|0;w=ACl(a.o,m);n=a.dz;q=n.bZ;r=q.pS;x=a.p==m&&a.ea===null?1:0;a:{if(w)r=q.lZ;else{c=a.ea;if(c!==null){c=c.data;if
(m<c.length&&c[m]!==null){r=HX(n.dw,n,c[m].fO);break a;}}if(x)r=q.hZ;}}YJ(g,a.O,l,a.V.b+p|0,a.C,k,a.c$,CY(a),r);m=m+1|0;}if(a.hL){t=Bb(j+1|0,h);AAy(a,T(a.C,t)-a.bc|0);}ABG(a);AAN(a,i,j);if(a.iG)ADl(a,i,j,h);if(a.k8&&e>=(( -St(a.cL)|0)/2|0)){g=a.cL;n=a.ch;if(Ys(g.d$.bI,0,0,n))ABU(a.cL,a.O,a.V);}ABe(a);AAh(a);Ld(a.O);}
function ADl(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.ea;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dz;h=HX(h.dw,h,g.fO);}else h=e!==null?a.dz.bZ.fm:a.dz.bZ.hZ;if(!(a.p!=b&&g===null)){a.eV.a=!a.bB?(a.cc-a.b3|0)-a.dJ|0:((a.cc+CO(a)|0)+a.b3|0)-a.dJ|0;i=a.eV;j=a.C;i.b=j;k=a.bB?0:(a.cE-a.cc|0)+a.b3|0;j=T(j,b)-a.bc|0;g=a.O;l=a.V;Bz(g,l.a+k|0,l.b+j|0,i,h);}b=b+1|0;}}
function AAN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb;d=a.ch.b;e=Bb(d,T(Ca(a.e.f),a.C)-a.bc|0);f=a.cV;g=a.bc;h=a.ea===null?a.p:(-1);i=a.O;j=a.dz;Rl(i,f.fj,f.eE);Ss(f,i,b,d);k=f.fo;if(b!=k){l=f.ct.k;m=l*20|0;if(k<b){n=k/20|0;k=b/20|0;}else{k=Z(0,(k-1|0)/20|0);n=Z(0,(b-1|0)/20|0);}a:{if((k-n|0)>=l){Rb(f,b);f.fo=b;}else{if(f.fo>=b)while(true){if(k<n)break a;f.fo=Nh(Bq(f.ct,k%l|0),f.el,f.fq,f.fo,b,m,f.ig);k=k+(-1)|0;}while(n<=k){f.fo=Nh(Bq(f.ct,n%l|0),f.el,f.fq,f.fo,b,m,f.ig);n=n+1|0;}}}}o
=BI(f.ct);while(BJ(o)){p=BL(o);q=f.fj;r=T(f.ct.k,f.iM);s=f.jB;t=p.eC.b;u=((p.je.b-(g%r|0)|0)+r|0)%r|0;v=j.gA;w=g+u|0;l=p.J;x=w/l|0;y=u+t|0;w=BB(y,e);if(w<=0){k=t/l|0;m=0;n=0;z=0;while(n<k){l=x+n|0;if(Lw(p,s,z,l,j,v)){w=T((n-m|0)+1|0,p.J);Bd(p.du,Cg(p.bf),w);Ck(p.ef,0.0,T(m,p.J),Cg(p.bf),w);l=z;}else{ba=Fv(j,s,z,v);Eq(p,i,u+T(m,p.J)|0,q,v.eZ,ba);Bd(p.du,Cg(p.bf),p.J);Ck(p.ef,0.0,T(n,p.J),Cg(p.bf),p.J);m=n;}n=n+1|0;z=l;}ba=Fv(j,s,z,v);Eq(p,i,u+T(m,p.J)|0,q,v.eZ,ba);}else{if(w>0&&u<e){w=Z(e-u|0,0);l=p.J;k=w/l|
0;if(w%l|0)k=k+1|0;m=0;n=0;z=0;while(n<k){l=x+n|0;if(Lw(p,s,z,l,j,v)){w=T((n-m|0)+1|0,p.J);Bd(p.du,Cg(p.bf),w);Ck(p.ef,0.0,T(m,p.J),Cg(p.bf),w);l=z;}else{ba=Fv(j,s,z,v);Eq(p,i,u+T(m,p.J)|0,q,v.eZ,ba);Bd(p.du,Cg(p.bf),p.J);Ck(p.ef,0.0,T(n,p.J),Cg(p.bf),p.J);m=n;}n=n+1|0;z=l;}ba=Fv(j,s,z,v);Eq(p,i,u+T(m,p.J)|0,q,v.eZ,ba);}if(y>r)AAv(p,q,e,g,r,j,s,i,t,u,v);}}ba=j.gA;if(e<d){bb=f.fj;Bz(i,bb.a,bb.b+e|0,Cp(f.eE.a,d-e|0),ba.gw);}if(b<=h&&h<=c)ABO(f,g,h,j.gA,i);Ld(i);}
function Fh(a){return Bb(a.bc/a.C|0,Ca(a.e.f)-1|0);}
function Gv(a){return Bb(((a.bc+Cz(a)|0)-1|0)/a.C|0,Ca(a.e.f)-1|0);}
function TE(a){var b,c,d,e,f;b=a.cV;c=a.cr.data[0];d=a.C;e=a.O;b.h6=c;b.lC=d;f=d*20|0;b.iM=f;c=Cy(b.el,EY(e,b.eE.a,f));b.el=c;CK(c,b.h6);RE(b.el,2);c=Cy(b.fq,EY(e,b.eE.a,d));b.fq=c;CK(c,b.h6);RE(b.fq,2);Ss(a.cV,a.O,Fh(a),Cz(a));}
function UG(a,b){var c;c=a.gr.data;return c[b%c.length|0];}
function ADh(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!C2(a.o))C7(a,a.eF);else{b=Dy(a.o);c=Fa(a.o);d=c.K;e=b.K;f=(d-e|0)+1|0;g=BD(f);h=g.data;i=P(Bt,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eF;e=e+1|0;k=f;}l=C6(a.p,a.s);m=new V9;m.ml=a;Ob(a,g,0,0,i,l,m);b.Y=b.Y+H(a.eF)|0;c.Y=c.Y+H(a.eF)|0;Lh(a,a.s+H(a.eF)|0,0);DP(a);}return 1;}
function Xw(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!C2(a.o)){b=BG(a.e.f,a.p);if(b.l.data.length>0){c=Vu(a,b);if(c===null)return 1;d=a.e.f;e=a.p;f=C6(e,a.s);d.ck=d.ck+1|0;g=d.fh;h=P(Gs,1);h.data[0]=AN4(e,0,1,c,f.be,f.bi);Bv(g,h);JE(d,e,0,1,c);F2(b,0,H(c));Lh(a,a.s-H(c)|0,0);}}else{f=Dy(a.o);c=Fa(a.o);i=c.K;j=f.K;i=(i-j|0)+1|0;k=BD(i);h=k.data;l=P(Bt,i);m=l.data;e=a.s;n=a.p;o=0;while(j<=c.K){b=BG(a.e.f,j);if(b.l.data.length>0){b=Vu(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=LL(k,o);h=C1(l,o);i=
0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.K)f.Y=Z(0,f.Y-H(b)|0);if(j==c.K){c.Y=Z(0,c.Y-H(b)|0);Lh(a,a.s-H(b)|0,0);}i=i+1|0;}f=C6(n,e);b=new Vg;b.tC=a;Ob(a,p,0,1,h,f,b);}DP(a);return 1;}
function Vu(a,b){var c,d,e,f;c=Ft(0,H(a.eF),Na(b));if(!c)b=null;else{b=C(68);if(c<0){b=new Bu;X(b);K(b);}if(c!=1){d=b.ca.data.length;if(d&&c){e=BY(T(d,c));d=0;f=0;while(f<c){PY(b,0,H(b),e,d);d=d+H(b)|0;f=f+1|0;}b=LV(e);}else b=ASS;}}return b;}
function Ob(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BD(i);k=ASj(i).data;G5(j,c);c=0;l=k.length;if(c>l){f=new Bu;X(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.ck=o.ck+1|0;p=P(Gs,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AN4(h[m],n[m],k[m],b[m],f.be,f.bi);m=m+1|0;}Bv(o.fh,p);c=0;while(c<i){b=e.data;JE(o,h[c],n[c],k[c],b[c]);g.vm(CG(h[c]),b[c]);c=c+1|0;}}
function ACD(a){var b,c,d,e,f,g,h,i;if(C2(a.o))F5(a);D8(BG(a.e.f,a.p));b=a.e.f;c=a.p;d=a.s;e=b.v;f=e.data;g=f[c];e=C1(e,f.length+1|0);f=e.data;b.v=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=Do(P(B1,0));b.v.data[c+1|0]=g;}else if(d==g.A){f[c]=g;f[c+1|0]=Do(P(B1,0));}else{f=(Hu(g,d)).data;e=b.v.data;e[c]=f[0];e[c+1|0]=f[1];}E_(b,c,d,0,C(42));DP(a);return Ci(a,a.p+1|0,0,0);}
function ADs(a){if(C2(a.o))F5(a);else My(a.e.f,a.p,a.s);GB(a);DP(a);return 1;}
function AAa(a){var b,c,d;if(C2(a.o)){F5(a);return 1;}b=a.s;if(!b&&!a.p)return 1;if(b){c=a.p;b=b-1|0;My(a.e.f,c,b);}else{c=a.p-1|0;b=Fk(a.e.f,c);d=a.e.f;KH(d,c);E_(d,c,Fk(d,c),1,C(42));}DP(a);return Ci(a,c,b,0);}
function C7(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.dy)return 0;if(C2(a.o))F5(a);c=Lx(T$(b,C(69),C(3)),C(42),(-1));d=c.data;b=a.e.f;e=a.p;f=a.s;Xd(b,e,f,c);g=d.length;if(!g)h=ASS;else{i=0;j=0;while(j<g){i=i+H(d[j])|0;j=j+1|0;}k=BY(i+T(g-1|0,H(C(42)))|0);c=k.data;l=0;h=d[0];j=0;while(j<H(h)){m=l+1|0;c[l]=I(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<H(C(42))){m=l+1|0;c[l]=I(C(42),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<H(h)){m=l+1|0;c[l]=I(h,j);j=j+1|0;l=m;}n=n+1|0;}h=LV(k);}E_(b,e,f,0,h);e=a.p;m=(e+g|0)-1|0;Ci(a,
m,m!=e?H(d[g-1|0]):a.s+H(d[0])|0,0);Ff(a);DP(a);return 1;}
function F5(a){var b,c,d;b=Dy(a.o);c=a.e.f;d=a.o;ML(c,d,U9(c,d));Ci(a,b.K,b.Y,0);Ff(a);DP(a);}
function Ff(a){var b;b=a.o;b.c2=0;BX(b.bO,a.p,a.s);BX(a.o.bw,a.p,a.s);}
function CO(a){return a.fe.lG|0;}
function AAy(a,b){var c,d;c=a.ch.b;if(b<c){d=a.cn.dl;d.b=c-b|0;d.a=!a.bB?CY(a)+a.dJ|0:CY(a)+a.b3|0;c=!a.bB?(a.V.a+a.cE|0)-a.dJ|0:(((a.V.a+a.cc|0)+CO(a)|0)+a.b3|0)-a.dJ|0;Bz(a.O,c,a.V.b+b|0,d,a.dz.bZ.fm);}}
function ABe(a){var b;b=a.bB?a.V.a+CO(a)|0:a.V.a+a.ch.a|0;WF(a.eN,a.bc,a.V.b,Cz(a),L9(a),b,CO(a));b=!a.bB?a.V.a+a.cE|0:((a.V.a+a.b3|0)+a.cc|0)+CO(a)|0;QA(a.eP,a.c$,b,CY(a),a.gR,a.V.b+Cz(a)|0,CO(a));}
function AAh(a){var b,c;b=QQ(a.eN);c=QQ(a.eP);if(!(!b&&!c)){DY(a.O,1);if(b)HB(a.eN,a.O);if(c)HB(a.eP,a.O);if(b)HM(a.eN,a.O);if(c)HM(a.eP,a.O);}}
function ABG(a){var b,c,d,e;b=a.eV;c=a.ch;b.b=c.b;b.a=a.b3;d=!a.bB?a.cE-a.cc|0:(c.a-ID(a)|0)-a.b3|0;b=a.O;c=a.V;Bz(b,c.a+d|0,c.b,a.eV,a.dz.bZ.sC);a.eV.a=!a.bB?(a.cc-a.b3|0)-a.dJ|0:((a.cc+CO(a)|0)+a.b3|0)-a.dJ|0;e=a.bB?0:(a.cE-a.cc|0)+a.b3|0;b=a.O;c=a.V;Bz(b,c.a+e|0,c.b,a.eV,a.dz.bZ.fm);}
function KR(b,c){return Bb(Z(0,b),c);}
function HO(a,b){var c,d,e,f,g,h,i;b=b.data;$rt_globals.console.info("onFileParsed");a.i_=1;a.hS=1;c=Ds(b[0]);d=Ed(b[1]);e=(Ds(b[2])).data[0];if(e==4){f=GZ(Ed(b[3]));EJ(a.lU,C(70),f);T8(a.e.f,c,d);}else if(b.length<5)T8(a.e.f,c,d);else{g=Ds(b[3]);h=Ed(b[4]);Yb(a.e.f,c,d,g,h,0);Hm(a);}TM(a,Z2(e));HD(Ce(a),ATw);FJ(Ce(a));i=JR(D_(),a.eU);f=new R;U(f);L(F1(L(f,C(71)),i),C(72));$rt_globals.console.info($rt_ustr(S(f)));f=a.h_;if(f!==null)f.i(a);}
function Hm(a){var b,c,d,e,f,g;b=D_();c=a.e.f;if(c.fV===null)Pu(c);c=a.e.f;d=c.dC;BT(c);e=new T4;e.p3=c;f=d.ej;if(f!==null){c=new NO;c.hz=d;c.np=e;Sp(d,f,c);}g=D_();c=Eh();b=JR(g,b);d=new R;U(d);L(F1(L(d,C(73)),b),C(74));Cn(c,S(d));}
function TM(a,b){var c,d;c=Dt(a.e);if(!BN(c,b)){d=new R;U(d);L(L(L(L(d,C(75)),c),C(76)),b);$rt_globals.console.info($rt_ustr(S(d)));a.e.ha=b;}}
function Ce(a){return a.cn.h2;}
function IC(a,b){var c,d,e,f,g,h;c=Eg(b);d=new R;U(d);L(L(d,C(77)),c);$rt_globals.console.info($rt_ustr(S(d)));Ce(a);c=Eg(b);d=Fq();c=$rt_ustr(c);d.title=c;Ci(a,0,0,0);a.eU=D_();a.i_=0;a.hS=0;a.ea=null;K4(a.cV,null);e=new LK;f=P(Bt,1);f.data[0]=C(3);ABr(e,f,AFt(C(3),C(3),Eg(b),null));a.e=e;Ci(a,0,0,0);c=Eg(b);g=FF(c,46,H(c)-1|0);if(g!=(-1))c=DI(c,g);h=!Bs(c,C(27))?5120:10240;c=new RO;c.oJ=a;c.oK=h;c.oL=b;d=b.fU;if(d!==null)KQ(c,I8(b,d.size));else{d=b.hH.getFile();e=new SE;e.md=b;e.me=c;b=new SF;b.uQ=c;d.then(Bn(e,
"f"),Bn(b,"f"));}}
function Hf(a,b,c,d,e){if(Ht(a,e))return 1;if(c&&d)return 1;if(c)DQ(a,a.bc+((T(b,a.C)*12|0)/10|0)|0);else if(!d){G0(a,a.p+b|0,e);S9(a);}return 1;}
function Ry(a,b,c,d){var e,f,g;if(Ht(a,d))return 1;e=E9(a);if(!c)f=a.s+b|0;else if(b>=0)f=Go(e,a.s);else{f=a.s;if(!f)f=(-1);else{c=GO(e,f);if(c>0&&e.dc.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.dc.data[c-1|0];}}if(f>e.A){if((a.p+1|0)<Ca(a.e.f))Ci(a,a.p+1|0,0,d);}else if(f>=0)CV(a,f,d);else{b=a.p;if(b>0){g=(BG(a.e.f,b-1|0)).A;Ci(a,a.p-1|0,g,d);}}UU(a);return 1;}
function Ht(a,b){if(C2(a.o)&&!b){Ff(a);GB(a);return 1;}if(!(b&&C2(a.o)))Ff(a);return 0;}
function Ci(a,b,c,d){a.s=c;return G0(a,b,d);}
function G0(a,b,c){a.p=Ft(0,b,Ca(a.e.f)-1|0);return CV(a,a.s,c);}
function CV(a,b,c){a.s=Ft(0,b,(E9(a)).A);a.hb=a.cn.b2===0.0?0:F9(E9(a),a.s,a.O.c0,a.cr);KY(a);GB(a);if(c)a.o.c2=1;K0(a.o,a.p,a.s);a.o.c2=0;return 1;}
function Lh(a,b,c){var d;d=Ph(a.o);CV(a,b,c);a.o=d;}
function GB(a){S9(a);UU(a);}
function S9(a){var b,c,d,e,f;b=a.bc;c=b+Cz(a)|0;d=a.p;e=a.C;d=T(d,e);f=d+e|0;if(d<(b+e|0))DQ(a,d-e|0);else if(f>(c-e|0))DQ(a,(f-Cz(a)|0)+a.C|0);}
function UU(a){var b,c,d,e,f;b=DE(a.cn.b2*30.0);c=a.c$;d=c+CY(a)|0;e=a.hb;f=e+b|0;if(e<(c+b|0))Id(a,e-b|0);else if(f>(d-b|0))Id(a,(f-CY(a)|0)+b|0);}
function W$(a){var b;KD(a,C6(a.p,a.s),Fj(a.e.f,a.p,a.s));if(!(a.g4!==null&&!De(a.fA))){b=a.s;if(b>0)KD(a,C6(a.p,b-1|0),Fj(a.e.f,a.p,a.s-1|0));}}
function KD(a,b,c){var d,e,f,g,h,i,j,k,l;Kt(a);d=a.e.f;e=B6(d.cX,c);if(e!==null)c=e;a:{f=B6(d.cP,c);if(f!==null){a.g4=Lc(d,c);c=BI(f);while(true){if(!BJ(c))break a;g=BL(c);Bv(a.fA,Lc(d,g));}}}h=b.be;i=b.bi;c=a.cA;d=Dt(a.e);b=FP(a.e);j=(Cd(c.lQ)).data;k=j.length;l=0;b:{while(l<k){c=j[l];if(Jz(c,d,b)){b=c.uv;break b;}l=l+1|0;}b=null;}if(b!==null){c=a.e;g=new Mr;g.qs=a;g.qt=c;g.qp=h;g.qq=i;d=a.hy;b=b.n1;c=E8(c);f=HC(i,h);e=JF();b=b.provideDocumentHighlights(c,f,e);c=new So;c.rA=g;c.rz=d;LM(b,c,d);}}
function ADm(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;Kt(a);b=a.jz;c=a.e.f;d=a.fA;e=Ca(c);f=b.oj.data;g=f.length;h=0;while(h<g){i=f[h];b=i.gP;j=b.e_;k=b.i6;l=j;while(true){m=BB(l,k);if(m>0)break;if(l>=e)break;a:{b=BG(c,l);if(b.l.data.length){n=l>j?0:Z(i.gP.fL,0);o=m<0?b.A:Bb(i.gP.ij,b.A);while(true){if(n>=o)break a;p=GO(b,n);q=Rj(b,p);m=p>=b.l.data.length?b.A:b.dc.data[p];r=Ky(b,p);if(q==n&&m<=o)Bv(d,r);else{r=ED();s=new R;U(s);t=Bj(L(s,C(78)),l);BV(t,58);L(Bj(t,n),C(79));Cn(r,S(s));}n=m;}}}l=l+1|0;}h=h
+1|0;}}
function HJ(a,b){var c;Ci(a,b.be,b.bi,0);c=Go(E9(a),a.s);BX(a.o.bw,a.p,c);BX(a.o.bO,a.p,a.s);}
function D1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.V;e=c-d.a|0;f=Ft(0,((b.b-d.b|0)+a.bc|0)/a.C|0,Ca(a.e.f)-1|0);g=!a.bB?a.cE:(a.b3+a.cc|0)+CO(a)|0;h=Z(0,(e-g|0)+a.c$|0);b=BG(a.e.f,f);d=a.O.c0;i=a.cr;if(!(b.eh!==null&&!b.fH))JY(b,d,i);j=b.eh;e=b.l.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.A;else{c=S0(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.l.data.length)k=b.A;else{j=RD(b,d,i,c);k=0;e=0;while(e<c){k=k+H(b.l.data[e].r)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(ATo){d=new R;U(d);Bj(L(Bj(L(Bj(L(d,C(80)),e),C(81)),h),C(82)),c);$rt_globals.console.info($rt_ustr(S(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return C6(f,k);}
function WQ(a,b){var c;c=b.be;a.p=c;a.s=b.bi;a.hb=F9(BG(a.e.f,c),a.s,a.O.c0,a.cr);KY(a);}
function Vo(a,b,c,d){var e;a:{e=c.data;switch(e.length){case 0:break;case 1:RG(a,e[0]);break a;default:Q3(a.eG,b,c,a,d);break a;}J8(a.eG,b,a);}}
function RG(a,b){var c,d,e,f,g;if(BN(b.g6,a.e.dE)){b=b.f6;Ci(a,b.e_,b.fL,0);BX(a.o.bO,b.e_,b.fL);BX(a.o.bw,b.i6,b.ij);}else{c=(Cd(a.cA.lz)).data;d=c.length;e=0;a:{while(true){if(e>=d){f=null;break a;}f=c[e];if(f!==null)break;e=e+1|0;}}if(f!==null){Ce(a);g=new NX;g.pq=f;g.pr=b;BT(g);b=new Ra;b.tv=g;$rt_globals.setTimeout(Bn(b,"onTimer"),0);}}}
function E9(a){return BG(a.e.f,a.p);}
function Jg(a,b,c){var d,e;d=DE((a.C*4|0)*c/150.0);e=DE(b);if(d)DQ(a,a.bc+d|0);if(e)Id(a,a.c$+e|0);return 1;}
function Sy(a,b,c){a.o.c2=0;return 1;}
function Mp(a,b,c){var d,e,f;if(c)return null;d=HR(a.eN,b.n,a.n3,1);if(d!==null)return d;d=HR(a.eP,b.n,a.tt,0);if(d!==null)return d;Ih(a);e=D1(a,b.n);f=Fj(a.e.f,e.be,e.bi);WQ(a,e);KD(a,e,f);if(!b.bE){b=a.o;if(!b.c2)BX(b.bO,a.p,a.s);}b=a.o;b.c2=1;K0(b,a.p,a.s);b=new Wh;b.tH=a;return b;}
function MC(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cj){b=b.n;e=D1(a,b);f=Fj(a.e.f,e.be,e.bi);g=Ku(a,f);h=LB(a.cA,Dt(a.e),FP(a.e));if(h!==null){f=a.e;c=e.be;d=e.bi;e=new VP;e.p1=a;e.p2=b;e.p0=g;h.k3(f,c,d,e,a.hy);}else{e=B6(a.e.f.cX,f);if(e!==null){HJ(a,e);c=1;}else{e=B6(a.e.f.cP,f);if(e!==null&&!De(e)){if(e.k!=1){QN(a.eG,b,e,a,g);c=1;}else{HJ(a,Bq(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(D1(a,b.n)).be;e=BG(a.e.f,c);c=FB(e,a.s);d=Go(e,a.s);b=Lt(e,c);if((d-1|0)==e.A){BX(a.o.bO,a.p,Na(e));BX(a.o.bw,
a.p,e.A);}else{if(b!==null){b=b.r;i=0;c:{while(true){j=b.ca.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.s;if(c==i){c=FB(e,c-1|0);d=Go(e,c);}else{if(d!=i){PH(a.o,a.p);break b;}c=FB(e,d+1|0);d=Go(e,c);}}}BX(a.o.bO,a.p,c);a.o.c2=1;Ci(a,a.p,d,0);a.o.c2=0;Ih(a);}}break a;case 3:break;default:break a;}PH(a.o,a.p);Ri(a.gs);Ih(a);}}return 1;}
function NL(a,b){var c,d,e,f,g,h,i,j,k;c=a.cn.df;if(H6(a.eN,b.n,c))return 1;if(H6(a.eP,b.n,c))return 1;d=a.cV;if(FN(b.n,d.fj,d.eE)&&Fz(c)?1:0)return 1;e=b.n;f=!a.bB?a.V.a+a.cE|0:((a.V.a+a.cc|0)+a.b3|0)+CO(a)|0;a:{g=a.V.b;h=CY(a);i=Cz(a);j=e.a;if(f<=j&&j<(f+h|0)){k=e.b;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Fz(c);if(b.cj){e=D1(a,b.n);e.bi=FB(BG(a.e.f,e.be),e.bi);b=a.e.f;if(!FG(b.cX,e)&&!FG(b.cP,e)?0:1)return DD(c,C(83));}return DD(c,C(41));}
function AO_(a,b){var c,d,e,f;c=b.cj;if(c&&b.bK==65){c=Ca(a.e.f)-1|0;d=Fk(a.e.f,c);BX(a.o.bO,0,0);BX(a.o.bw,Ca(a.e.f)-1|0,d);return 1;}if(c&&b.bK==80){GS(a);return 1;}if(!a.dy&&c&&b.bK==90){if(C2(a.o))Ff(a);b=a.e.f;b.ck=b.ck+1|0;e=b.fh;d=e.k;if(!d)e=null;else{f=(Fi(e,d-1|0)).data;e=MZ(b,f[0]);c=1;while(c<f.length){MZ(b,f[c]);c=c+1|0;}}if(e!==null){Ci(a,e.a,e.b,0);DP(a);}return 1;}if(!c&&!b.cU){if(Bs(b.d6,C(84))){C7(a,C(85));CV(a,a.s-1|0,0);c=1;}else if(Bs(b.d6,C(86))){C7(a,C(87));CV(a,a.s-1|0,0);c=1;}else if
(Bs(b.d6,C(34))){C7(a,C(88));CV(a,a.s-1|0,0);c=1;}else if(Bs(b.d6,C(89))){C7(a,C(90));CV(a,a.s-1|0,0);c=1;}else if(Bs(b.d6,C(91))){C7(a,C(92));CV(a,a.s-1|0,0);c=1;}else if(!Bs(b.d6,C(93)))c=0;else{C7(a,C(94));CV(a,a.s-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.cU&&!b.cj)){d=b.bK;if(d>=48&&d<=57){c=d-48|0;e=a.l5.data[c];if(e!==null)e.w();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bK){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(AAe(a,b))return 1;if(a.dy)c=0;else c:{switch(b.bK){case 8:break;case 9:c=!b.bE?ADh(a):Xw(a);break c;case 13:c=ACD(a);break c;case 46:c=ADs(a);break c;default:c=0;break c;}c=AAa(a);}if(c)return 1;if(b.cj&&b.bK==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AIp(b.bK)&&b.bK!=27){if(!b.cj&&!b.cU&&!b.iC)return H(b.d6)>0&&C7(a,b.d6)?1:0;return 0;}return 0;}
function Sq(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bs(C(28),Dt(a.e))){b=Ce(a);c=new NT;c.sF=a;d=P(B,3);e=d.data;e[0]=DX(a.e.f);f=Fh(a);g=Gv(a);h=Z(0,f-100|0);f=Bb(Ca(a.e.f)-1|0,g+100|0);i=BD(3);j=i.data;j[0]=Ey(a.e.f,h);k=a.e.f;l=0;f=Bb(f+1|0,k.v.data.length);m=0;while(m<f){l=l+Fk(k,m)|0;if(m!=(k.v.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.cC;k=BC();L8(n,n.dx,k);i=BD(3*k.k|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bq(k,m);h=p+1|0;o[p]=q.bN;l=h+1|0;o[h]=q.bQ;p=l+1|0;o[l]=q.eH;m=m+1|
0;}e[2]=i;DL(b,c,C(95),d);}}
function GS(a){var b,c,d,e;b=YW(Dt(a.e));if(b===null){b=a.h_;if(b!==null)b.i(a);}else{a.eU=D_();c=Ce(a);d=new TS;d.n2=a;e=P(B,1);e.data[0]=DX(a.e.f);DL(c,d,b,e);}}
function Q$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=Dt(a.e);if(b!==null&&!Bs(C(41),b)){if(Bs(C(32),b)){GS(a);IW(a.e.f);}else{c=a.e.f.cC;d=T3(c,c.dx);if(d===null){Hm(a);return;}a:{e=G7([CF(d),CM(d),d.bL.eH]);f=DX(a.e.f);g=BD(1);h=(-1);switch(Gm(b)){case -1655966961:if(!Bs(b,C(32)))break a;h=4;break a;case 3401:if(!Bs(b,C(30)))break a;h=3;break a;case 98723:if(!Bs(b,C(33)))break a;h=2;break a;case 3254818:if(!Bs(b,C(28)))break a;h=1;break a;case 3556653:if(!Bs(b,C(41)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h
=1;break b;case 2:h=2;break b;case 3:h=3;break b;case 4:h=4;break b;default:h=(-1);break b;}h=0;}g.data[0]=h;c=a.e.f.dC;if(c.ej===null){i=BD(0);j=BY(0);}else{c:{k=AF5(d.c8,c.dk);l=new Wr;l.d4=k;l.ng=d;l.bH=AFp();b=new R;U(b);l.g5=b;l.eQ=Gf();b=new R$;m=ACJ(16);b.fn=0;b.dq=P(He,m);b.oh=0.75;UP(b);l.fu=b;b=new UT;c=l.bH;k=l.g5;d=l.eQ;b.di=c;b.jv=k;b.pZ=d;l.kW=b;b=new UK;b.cB=c;b.kw=k;b.oU=d;l.k4=b;n=Jp(l.d4.dk);b=n.gD;if(b.cF>0){h=b.cD;o=0;d:while(true){i=n.gD.bX.data;if(o>=i.length)break c;b=i[o];while(b!==null)
{c=b.cs;if(FG(l.eQ,c))B6(l.eQ,c);else{k=l.eQ;EJ(k,c,CG(k.cF));}b=b.cy;if(h!=n.gD.cD)break d;}o=o+1|0;}b=new GE;X(b);K(b);}}b=l.d4.ej;if(b!==null)Q4(l,b);Bl(l.bH,l.d4.dk.cF);b=RQ(Jp(l.d4.dk));while(EP(b)){c=O2(b);Gg(l.bH,ZV(l.g5),H(c));CU(l.g5,c);}AAw(l);ZO(l);ZB(l);l.pE=P1(l.bH);j=E4(G8(l.g5));l.yb=j;i=l.pE;}DL(Ce(a),AQe(a),C(96),G(B,[f,g,e,i,j]));}}else IW(a.e.f);}
function Gz(a,b,c){var d,e,f,g,h,i;if(c&&a.dy)return 0;d=Dy(a.o);e=d.K;if(C2(a.o)){f=a.e.f;g=a.o;h=U9(f,g);if(c)ML(f,g,h);if(c){Ci(a,d.K,d.Y,0);Ff(a);DP(a);}}else{h=Hh(EI(a.e.f.v.data[e]),C(42));i=Bb(Ca(a.e.f)-1|0,e);BX(a.o.bw,i,0);if(e>=(Ca(a.e.f)-1|0))BX(a.o.bw,i,Fk(a.e.f,i));else BX(a.o.bO,i+1|0,0);if(c)F5(a);else Ci(a,e,0,0);}b.i(h);return 1;}
function AAe(a,b){var c,d,e,f;a:{switch(b.bK){case 33:c=b.cj?G0(a,Ia(a.bc,a.C),b.bE):Hf(a,2-Vj(Cz(a),a.C)|0,0,b.cU,b.bE);break a;case 34:c=!b.cj?Hf(a,Vj(Cz(a),a.C)-2|0,0,b.cU,b.bE):G0(a,((a.bc+Cz(a)|0)/a.C|0)-1|0,b.bE);break a;case 35:if(!Ht(a,b.bE)&&!CV(a,(E9(a)).A,b.bE)){c=0;break a;}c=1;break a;case 36:if(!Ht(a,b.bE)&&!CV(a,0,b.bE)){c=0;break a;}c=1;break a;case 37:c=b.cj;if(c&&b.cU){Ih(a);d=a.gs;e=d.da;if(e<=0)d=null;else{f=d.ex.data;c=e-1|0;d.da=c;d=f[c];}if(d===null)c=1;else{Ci(a,Li(d),I7(d),0);a.o=Ph(d.jC);c
=1;}break a;}c=Ry(a,(-1),c,b.bE);break a;case 38:c=Hf(a,(-1),b.cj,b.cU,b.bE);break a;case 39:c=b.cj;if(c&&b.cU){d=a.gs;c=d.da;if(c==(d.er-1|0))d=null;else{f=d.ex.data;c=c+1|0;d.da=c;d=f[c];}if(d===null)c=1;else{Ci(a,Li(d),I7(d),0);a.o=Ph(d.jC);c=1;}break a;}c=Ry(a,1,c,b.bE);break a;case 40:c=Hf(a,1,b.cj,b.cU,b.bE);break a;default:}c=0;}if(c&&b.bE)BX(a.o.bw,a.p,a.s);if(c)W$(a);return c;}
function Ih(a){var b,c,d,e,f,g,h;b=a.gs;c=b.da;b=c<0?null:b.ex.data[c];if(b!==null&&a.p==Li(b)&&a.s==I7(b))return;d=a.gs;b=new Kn;c=a.p;e=a.s;f=a.o;b.kP=C6(c,e);g=Ph(f);b.jC=g;g.c2=0;e=d.da;h=d.er;if(e==(h-1|0))UJ(d,b);else{c=e+1|0;while(c<h){Ri(d);c=c+1|0;}UJ(d,b);}d.da=d.da+1|0;}
function DP(a){a.e.f.r1=No(Ce(a));}
function HY(a,b){var c,d,e,f,g,h,i;a.jz=null;Kt(a);c=a.e;a.e=b;a.eU=D_();d=YW(Dt(a.e));if(d!==null){e=Ce(a);f=new Se;f.qO=a;g=P(B,1);g.data[0]=DX(a.e.f);DL(e,f,d,g);}g=(Cd(a.cA.lD)).data;h=g.length;i=0;while(i<h){e=g[i].rv;f=ALL(J6(c.dE),J6(b.dE));e.f(f);i=i+1|0;}}
function Kt(a){a.g4=null;FK(a.fA);}
function YW(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Gm(b)){case -1655966961:if(!Bs(b,C(32)))break a;c=3;break a;case 3401:if(!Bs(b,C(30)))break a;c=2;break a;case 98723:if(!Bs(b,C(33)))break a;c=1;break a;case 3254818:if(!Bs(b,C(28)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=C(97);break b;case 2:b=C(98);break b;case 3:b=C(99);break b;default:b=null;break b;}b=C(100);}}return b;}
function Ku(a,b){var c;c=Lc(a.e.f,b);if(c===null)return C(3);return c.r;}
function Dn(a,b){return FN(b,a.V,a.ch);}
function Ji(a,b){var c,d,e,f,g;a.ea=b;Cn(Eh(),C(101));b=a.ea;if(b===null){Cn(Eh(),C(102));K4(a.cV,null);}else{b=b.data;c=En(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fO<<24>>24;e=e+1|0;}K4(a.cV,c);}}
var ACf=F();
function AC4(){var a=this;B.call(a);a.f1=null;a.g0=null;a.e$=0;}
function Cv(a){var b=new AC4();AIn(b,a);return b;}
function AIn(a,b){a.f1=b;}
function BW(a,b){var c,d,e;c=a.e$;d=a.f1;if(c==d.data.length)a.f1=C1(d,c+4|0);d=a.f1.data;e=a.e$;a.e$=e+1|0;d[e]=b;a.g0=null;}
function Fe(a,b){var c;BW(a,b);c=new Uk;c.rN=a;c.rP=b;return c;}
function Cd(a){var b;b=a.g0;if(!(b!==null&&b.data.length==a.e$))a.g0=C1(a.f1,a.e$);return a.g0;}
var ACH=F();
function BN(b,c){if(b===c)return 1;return b!==null?b.bC(c):c!==null?0:1;}
function BT(b){if(b!==null)return b;b=new Gj;Bm(b,C(3));K(b);}
function UH(){B.call(this);this.mj=null;}
function AIV(a){var b,c,d,e,f,g;b=a.mj;c=b.rN;b=b.rP;d=0;while(true){e=c.f1.data;f=e.length;if(d>=f)break;if(e[d]===b){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.e$=c.e$-1|0;c.g0=null;}d=d+1|0;}}
var UO=F(0);
var AAo=F();
function AId(a,b){return a.Ak(b);}
function AJ8(a){return a.sp();}
function Hs(){var a=this;B.call(a);a.qB=null;a.py=null;}
function ABl(b,c){return c!==null&&b!==null&&!Bs(c,b)?0:1;}
var Sd=F(0);
function MH(){B.call(this);this.tK=null;}
var YK=F();
function Lk(){B.call(this);this.kp=null;}
function F3(){var a=this;Lk.call(a);a.nc=null;a.bu=null;}
function U0(a,b){var c,d,e;a.kp=b;a.nc=Jr(0,0,64,255,new B5);c=new Tr;c.cN=new Bk;c.j6=Cv(P(Ii,0));c.dl=new Bk;c.tI=new Bk;c.vL=new B5;c.vM=new B5;c.dL=b.jy;d=b.iP;c.h2=d;e=new Rp;e.t6=d;c.df=e;d=b.bm.j0;e=new P$;e.rl=c;BW(d,e);d=b.bm.l3;e=new P8;e.va=c;BW(d,e);a.bu=c;BW(b.bm.eu,new RB);b=b.bm.eu;c=a.bu;BT(c);d=new RA;d.nQ=c;BW(b,d);}
function S5(a){var b,c,d,e,f,g,h;b=a.kp.jy;c=a.nc;d=b.bF;e=c.by;f=c.b0;g=c.bl;h=c.b7;d.clearColor(e,f,g,h);b.bF.clear(16384);}
function R7(a,b,c){var d,e,f,g,h;a:{d=a.bu;Cu(d.cN,b);if(d.b2!==c){d.b2=c;e=(Cd(d.j6)).data;f=e.length;g=0;while(true){if(g>=f)break a;b=e[g];b.iZ=Io(b.cM,b.iz);d=BI(b.cp);while(BJ(d)){h=BL(d);Qi(h,b.iZ);Lm(h,b.cM);}g=g+1|0;}}}}
var OE=F(0);
var Jw=F(0);
function LO(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HK;c=new H9;d=new Ij;ACB();Jk(d,ATx);LU(c,d,BE(ATy),BE(ATz),BE(ATA),BE(ATy),BE(ATB),BE(ATC),BE(ATD),BE(ATE),BE(ATF),BE(ATG));Za();e=(ATH.eR()).data;f=e.length;g=P(Ir,f);h=g.data;i=0;while(i<f){h[i]=e[i].ls;i=i+1|0;}j=ABx(O(C(103)),O(C(104)),O(C(105)),O(C(106)));k=new HP;l=new H0;AKx();m=ATI;LY(l,m,ATJ,ATK,ATL,ATM,m);K8(k,l,AC6(),ADe(O(C(107)),O(C(108)),O(C(109))),AC6(),Xr(1,0.125),ATN,ATO);Iz(b,c,g,j,k,XH(O(C(110)),O(C(111)),O(C(112)),O(C(113))));a.il(b);}
function FX(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HK;c=new H9;d=new Ij;AHk();Jk(d,ATP);LU(c,d,BE(ATQ),BE(ATR),BE(ATS),BE(ATQ),BE(ATT),BE(ATU),BE(ATV),BE(ATW),BE(ATX),BE(ATY));ABZ();e=(ATZ.eR()).data;f=e.length;g=P(Ir,f);h=g.data;i=0;while(i<f){h[i]=e[i].jK;i=i+1|0;}j=ABx(O(C(114)),O(C(115)),O(C(116)),O(C(117)));k=new HP;l=new H0;AEl();m=AT0;LY(l,m,AT1,AT2,AT3,AT4,m);K8(k,l,ACw(),ADe(O(C(118)),O(C(108)),O(C(109))),ACw(),Xr(1,0.17499999701976776),AT5,AT6);Iz(b,c,g,j,k,XH(O(C(110)),O(C(111)),O(C(112)),O(C(119))));a.il(b);}
function J4(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new HK;c=new H9;d=new Ij;ACi();Jk(d,AT7);LU(c,d,BE(AT8),BE(AT9),BE(AT$),BE(AT8),BE(AT_),BE(AUa),BE(AUb),BE(AUc),BE(AUd),BE(AUe));ABt();e=(AUf.eR()).data;f=e.length;g=P(Ir,f);h=g.data;i=0;while(i<f){h[i]=e[i].kH;i=i+1|0;}j=ABx(O(C(120)),O(C(121)),O(C(122)),O(C(123)));k=new HP;l=new H0;AEz();m=AUg;LY(l,m,AUh,AUi,AUj,AUk,m);K8(k,l,ACX(),ADe(O(C(124)),O(C(125)),HF(0)),ACX(),Xr(1,0.07500000298023224),AUl,AUm);Iz(b,c,g,j,k,XH(O(C(126)),O(C(127)),O(C(128)),O(C(129))));a.il(b);}
function Mi(){var a=this;F3.call(a);a.cK=null;a.gl=null;}
function ANT(a,b){return KA(a.cK,b);}
function AIe(a){S5(a);Ix(a.cK);W1(a.gl);}
function ADP(a,b,c){R7(a,b,c);IK(a.cK,new Bk,b,c);}
function AGM(a,b){BT(b);MD(a.gl,b);JB(a.cK,b);}
var Kf=F(0);
function OF(){B.call(this);this.qS=null;}
function AL_(a,b,c,d,e,f){var g,h,i,j;g=a.qS;h=E8(b);i=HC(d,c);j=JF();g=g.provideDeclaration(h,i,j);b=new Me;b.tk=e;b.tj=f;LM(g,b,f);}
var WL=F(0);
function Ws(){B.call(this);this.n1=null;}
var EF=F(0);
function Mu(){B.call(this);this.rv=null;}
function VR(){B.call(this);this.te=null;}
function AGu(a,b,c,d,e,f){var g,h,i,j;g=a.te;h=E8(b);i=HC(d,c);j=JF();g=g.provideDefinition(h,i,j);b=new QH;b.r5=e;b.r4=f;LM(g,b,f);}
function U5(){var a=this;B.call(a);a.be=0;a.bi=0;}
function C6(a,b){var c=new U5();AAB(c,a,b);return c;}
function AAB(a,b,c){a.be=b;a.bi=c;}
function AEh(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return a.be==c.be&&a.bi==c.bi?1:0;}return 0;}
function AMC(a){var b,c,d,e;b=P(B,2).data;b[0]=CG(a.be);b[1]=CG(a.bi);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bq)|0;d=d+1|0;}return c;}
function AMh(a,b){var c;b=b;c=BB(a.be,b.be);if(!c)c=BB(a.bi,b.bi);return c;}
var Gh=F(0);
var HE=F(0);
var Ew=F(0);
var G9=F(0);
function N7(){var a=this;F3.call(a);a.y=null;a.x=null;a.d5=null;a.gL=0;a.fB=null;a.h$=null;a.vc=null;}
function Xg(a,b){var c,d,e,f,g;if(a.y===b)a.gL=a.gL|1;if(a.x===b)a.gL=a.gL|2;if((a.gL&3)==3){Cn(Eh(),C(130));b=a.y.e;c=a.x.e;d=DX(b.f);e=DX(c.f);f=YD(b.f);g=YD(c.f);b=a.kp.iP;c=new W6;c.ro=a;DL(b,c,C(131),G(B,[d,f,e,g]));}}
function AO2(a,b,c){if(DG(a.bu,a.y))return Gz(a.y,b,c);if(!DG(a.bu,a.x))return 0;return Gz(a.x,b,c);}
function WW(a,b){var c;c=new T6;c.p4=b;return c;}
function UN(a,b,c){var d,e,f,g,h,i,j;d=a.fB;if(d!==null&&d.fJ!==null){e=b!==a.y?0:1;f=Fh(b);g=(Gv(b)+f|0)/2|0;h=g-f|0;d=a.fB;d=d.fJ.data[FI(d,g,e)];i=g-(!e?d.hm:d.hn)|0;j=b.bc-T(f,b.C)|0;c.bc=KR(T(((!e?d.hn:d.hm)+i|0)-h|0,c.C)+j|0,FQ(c));return;}}
function AMD(a,b){var c,d;c=KA(a.y,b);d=KA(a.x,b);return !c&&!d?0:1;}
function AKb(a){S5(a);Ix(a.y);Ix(a.x);ADp(a.h$,a.fB,a.bu,a.y,a.x,a.vc,a.d5.T);W1(a.d5);}
function Q0(a){return ADn(0);}
function ANj(a){Nl(a.y);Nl(a.x);}
function AJ4(a){WZ(a.y);WZ(a.x);}
function AOe(a,b){N6(a.y,b);N6(a.x,b);}
function AJy(a,b,c){var d,e,f,g,h,i;R7(a,b,c);d=new Bk;e=Co(20.0,c);f=new Bk;g=b.a/2|0;h=e/2|0;PG(f,g-h|0,b.b);IK(a.y,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;IK(a.x,d,f,c);Bd(a.h$.cZ,f.a,d.b);Bd(a.h$.eq,d.a-f.a|0,f.b);}
function AEB(a,b){BT(b);MD(a.d5,b);JB(a.y,b);JB(a.x,b);}
function ALU(a,b){var c,d;c=Dn(a.y,b.n)&&NL(a.y,b)?1:0;d=Dn(a.x,b.n)&&NL(a.x,b)?1:0;return !c&&!d?0:1;}
function AIF(a,b,c,d){var e,f;e=Dn(a.y,b.n)&&MC(a.y,b,c,d)?1:0;f=Dn(a.x,b.n)&&MC(a.x,b,c,d)?1:0;return !e&&!f?0:1;}
function AKm(a,b,c){var d,e,f,g,h,i,j,k;d=Dn(a.y,b.n);e=Dn(a.x,b.n);f=a.bu;g=f.d3;h=g!==null?0:1;i=a.y;j=g!==i?0:1;k=g!==a.x?0:1;if(d&&!(!h&&!k))Fo(f,i);if(e&&!(!h&&!j))Fo(a.bu,a.x);if(d){i=Mp(a.y,b,c);if(i!==null)return i;}return !e?null:Mp(a.x,b,c);}
function AMw(a,b,c){var d,e,f,g;d=Dn(a.y,b.n);e=Dn(a.x,b.n);f=d&&Sy(a.y,b,c)?1:0;g=e&&Sy(a.x,b,c)?1:0;return !f&&!g?0:1;}
function AL$(a,b,c,d){var e,f,g,h;e=Dn(a.y,b.n);f=Dn(a.x,b.n);g=e&&Jg(a.y,c,d)?1:0;h=f&&Jg(a.x,c,d)?1:0;return !g&&!h?0:1;}
function AJn(a){return DG(a.bu,a.y)?WW(a,a.y):!DG(a.bu,a.x)?null:WW(a,a.x);}
var Zk=F();
var Ba=F(0);
function Px(){var a=this;B.call(a);a.ny=null;a.nz=null;}
function AK7(a,b){var c,d,e;b=DC(b);c=a.ny;d=a.nz;e=new Pt;e.wd=d;e.fZ=AHz(new Xn,new Xo,Ch(d.containerId),b);e.bG=(Nn(e)).cK;if(ACn(d))Qy(e,d.theme);if(ACc(d))TR(e,d.readonly);c.f(e);}
var AAK=F(0);
function ACn(b){return "theme" in b?1:0;}
function ACc(b){return "readonly" in b?1:0;}
function AB7(b){return !("workerUrl" in b?1:0)?"worker.js":b.workerUrl;}
var AAu=F();
function ABi(b,c,d){var e;e=new $rt_globals.Worker(d);d=new Nz;d.o3=e;d.o4=b;d.o5=c;b=Bn(d,"f");e.onmessage=b;}
function QF(){var a=this;B.call(a);a.uj=null;a.uk=null;}
function AD4(a,b){var c,d,e,f;b=DC(b);c=a.uj;d=a.uk;e=new U_;e.xO=d;f=AHz(new Ub,new Uc,Ch(d.containerId),b);e.pc=f;e.dg=f.d9;if(ACn(d))PJ(e,d.theme);if(ACc(d))P5(e,d.readonly);c.f(e);}
var B0=F(0);
function Nz(){var a=this;B.call(a);a.o3=null;a.o4=null;a.o5=null;}
function AMc(a,b){var c,d,e;c=a.o3;d=a.o4;e=a.o5;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;d.i(HH(c));}}
function Xj(){B.call(this);this.r3=null;}
function AIr(a,b){var c,d,e,f,g;c=b.data;b=a.r3;d=c.length;e=P(Bt,d).data;f=0;while(f<d){e[f]=c[f].cw();f=f+1|0;}d=e.length;g=new $rt_globals.Array(d);f=0;while(f<d){c=$rt_ustr(e[f]);f;g[f]=c;f=f+1|0;}b.f(g);}
var Y8=F();
function AAi(){return "ping";}
var E2=F(0);
var Xn=F();
function AI5(a,b){var c,d,e,f,g;c=new Mi;U0(c,b);d=ANt(c.bu);c.gl=d;e=ZM(c.bu,d);c.cK=e;NJ(c.bu,e);BW(b.bm.d2,c.gl);BW(b.bm.f_,c.gl);BW(b.bm.d2,c.cK);d=b.bm.eu;e=new PE;e.wm=c;BW(d,e);d=b.bm.eu;e=new JV;f=c.cK;BT(f);g=new PB;g.uB=f;MJ(e,b,g);BW(d,e);d=b.bm.i$;e=c.cK;BT(e);f=new PC;f.oo=e;BW(d,f);d=b.bm.ir;e=new NM;e.pf=c;BW(d,e);d=b.bm.f_;e=new NN;e.vq=c;BW(d,e);b=b.bm.ie;d=new NK;d.mY=c;BW(b,d);FX(c);return c;}
var Bo=F(0);
var Xo=F();
function AH0(a){AA2();}
var Ub=F();
function AMq(a,b){var c,d,e,f;c=new N7;U0(c,b);d=new P9;d.cZ=new Bk;d.eq=new Bk;d.hX=new Bk;d.hY=new Bk;d.hU=new Bk;d.hV=new Bk;c.h$=d;c.vc=AAG();d=ANt(c.bu);c.d5=d;c.y=ZM(c.bu,d);c.x=ZM(c.bu,c.d5);d=c.y;d.bB=1;e=new TY;e.uu=c;f=new TZ;f.qc=c;Vy(d,e,e);Vy(c.x,f,f);d=c.y;e=new T0;e.mU=c;d.h_=e;e=c.x;f=new TU;f.tr=c;e.h_=f;NJ(c.bu,d);BW(b.bm.d2,c.d5);BW(b.bm.f_,c.d5);BW(b.bm.f_,c);BW(b.bm.d2,c);d=b.bm.eu;e=new TV;e.wN=c;BW(d,e);d=b.bm.eu;e=new JV;f=new TW;f.mD=c;MJ(e,b,f);BW(d,e);BW(b.bm.i$,c);BW(b.bm.ir,c);b
=b.bm.ie;d=new TX;d.r0=c;BW(b,d);FX(c);return c;}
var Uc=F();
function APL(a){AA2();}
var Q6=F(0);
function UE(){B.call(this);this.oN=null;}
function AII(a,b){var c,d;c=b;b=a.oN;if(!(!b.d9.lh(c/1000.0)&&!b.ic)){d=b.fc.dP;if(T(d.a,d.b)){b.ic=0;b.d9.fg();}}Sw(b);}
function UB(){B.call(this);this.vi=null;}
function CZ(a){FJ(a.vi);}
var Qd=F(0);
function UC(){B.call(this);this.rx=null;}
function AGT(a,b,c){var d,e,f,g;c=a.rx;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.db){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=J3(c);Su(c,Iw(f.width*g),Iw(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Su(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var ACN=F();
function AKn(b,c){AMu(b,c,AEc());}
function AEc(){return {box:'device-pixel-content-box'};}
function AMu(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cb=F(0);
function Uz(){B.call(this);this.n$=null;}
function AMj(a,b){b=a.n$;b.d9.iL(b.fc.dP,J3(b));b.d9.fg();}
var WK=F(0);
var MP=F(0);
function O9(){var a=this;DA.call(a);a.hw=null;a.jj=null;a.xz=null;a.jo=0;}
function TO(a,b){var c,d;c=a.hw;while(true){if(c===null)return null;d=I0(a.jj,b,c.iI);if(!d)break;c=d>=0?c.bV:c.bJ;}return c;}
function LC(a,b,c){var d,e;if(b===null){b=new IX;d=null;b.iI=c;b.ih=d;b.fp=1;b.fz=1;return b;}e=I0(a.jj,c,b.iI);if(!e)return b;if(e>=0)b.bV=LC(a,b.bV,c);else b.bJ=LC(a,b.bJ,c);D4(b);return Jc(b);}
function JD(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=I0(a.jj,c,b.iI);if(d<0)b.bJ=JD(a,b.bJ,c);else if(d>0)b.bV=JD(a,b.bV,c);else{e=b.bV;if(e===null)return b.bJ;f=b.bJ;g=P(IX,e.fp).data;h=0;while(true){b=e.bJ;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.bV;while(h>0){h=h+(-1)|0;j=g[h];j.bJ=b;D4(j);b=Jc(j);}e.bV=b;e.bJ=f;D4(e);b=e;}D4(b);return Jc(b);}
function UA(){B.call(this);this.ud=null;}
function ANo(a,b){var c,d,e,f,g,h,i,j,k;c=a.ud.lF;b=b.data;if(!(b===AAi()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new Bu;X(b);K(b);}if(b.length<1){b=new Bu;X(b);K(b);}d=CG(b[0]);e=TO(c,d);if(e===null)c=null;else{c.hw=JD(c,c.hw,d);c.jo=c.jo+1|0;c=e.ih;}f=P(B,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=Ch(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Sc;ACr(e);e.iQ=k;}else e=(k instanceof $rt_globals.File?1:0)?ABb(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ABb(k,null);g[h]=e;h=j;}c.i(f);}}
function Pv(){var a=this;B.call(a);a.cb=null;a.gX=null;a.kS=null;a.dB=null;}
function MM(){return (Fq()).activeElement;}
function CD(a,b,c,d){b.addEventListener($rt_ustr(c),Bn(d,"handleEvent"));return V0(a,b,c,d);}
function V0(a,b,c,d){var e;e=new Qa;e.nH=b;e.nJ=c;e.nI=d;return e;}
function SR(a,b){var c;c=new TQ;c.ve=b;return c;}
function El(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.gX.getBoundingClientRect();e=Cp(Iw((b.clientX-d.left)*c),Iw((b.clientY-d.top)*c));f=new Bk;g=a.dB;f.a=g.a;f.b=g.b;d=new L$;Tl(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n=e;d.vQ=f;return d;}
function W9(a,b,c){var d,e,f,g;d=new O4;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Tl(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.jQ=0;d.d6=e;d.bK=f;d.sV=c;d.w4=g;return d;}
function Dp(a,b){b.stopPropagation();b.preventDefault();}
function Zz(a,b){var c;c=new WI;c.pm=b;b.onpointerdown=Bn(c,"f");c=new WJ;c.od=b;b.onpointerup=Bn(c,"f");}
function KI(){var a=this;B.call(a);a.q3=null;a.c0=null;a.bF=null;a.s2=null;a.wt=0;a.xi=0;a.jr=null;a.xN=null;a.xw=null;a.wL=null;a.ga=null;a.xn=null;a.gy=null;a.xE=null;a.ib=null;a.dP=null;a.uW=null;a.lc=0;a.jL=0;a.lO=0;a.lw=0;a.h0=0;a.lL=null;}
function EY(a,b,c){return Mj(a.q3,b,c);}
function DY(a,b){var c;if(b==a.jL)return b;if(!b)a.bF.disable(3042);else{a.bF.enable(3042);a.bF.blendFuncSeparate(770,771,1,1);}c=a.jL;a.jL=b;return c;}
function Rl(a,b,c){T1(a,b.a,b.b,c);}
function T1(a,b,c,d){var e,f;e=d.a;f=d.b;a.lw=1;a.h0=1;d=a.lL;d.rf=b;d.rh=c;d.re=e;d.rd=f;Tm(a);}
function Ld(a){a.lw=0;a.h0=0;Tm(a);}
function Tm(a){var b,c,d,e,f,g;b=a.lO;c=a.lw;if(b!=c){a.lO=c;if(!c)a.bF.disable(3089);else a.bF.enable(3089);}if(a.lO&&a.h0){a.h0=0;d=a.bF;e=a.lL;b=e.rf;c=a.dP.b-e.rh|0;f=e.rd;c=c-f|0;g=e.re;d.scissor(b,c,g,f);}}
function Kp(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ib;c=a.lc;d=b.gm.sl;e=b.dR;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.dR;h=b.hF;e.bindBuffer(34962,h);i=b.gm.mf.data;g=i.length;j=0;while(j<g){k=i[j];l=b.dR;m=k.g3;n=k.e9;o=b.gm.kl*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.e9|0;j=j+1|0;}a:{e=b.ji;if(e!==null){c=0;b.dR.bindBuffer(34962,e);i=b.gm.q1.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.dR;j=e.g3;p=e.e9;m=e.oX;n=b.gm.pg;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.e9|0;g=g+1|0;}}}q=b.i9;if(q===null){c=b.k9;if(c>0)b.dR.drawArrays(4,0,c);}else{b.dR.bindBuffer(34963,q);k=b.dR;g=b.lX;k.drawElements(4,g,5123,0);}a.lc=d;}
function Bz(a,b,c,d,e){KC(a,a.jr);LP(a.jr,a.bF,b,c,d,a.dP);d=a.jr;KF(a.bF,d.uc,e);Kp(a);}
function Es(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p;KC(a,a.ga);LP(a.ga,a.bF,b,c,d,a.dP);d=a.ga;j=a.bF;d=d.rn;j.uniform1i(d,0);j.activeTexture(33984);k=f.eY;j.bindTexture(3553,k);d=a.ga;l=a.bF;f=f.fs;b=f.a;c=f.b;m=e.by;n=b;m=m/n;o=e.b0;p=c;o=o/p;n=e.bl/n;p=e.b7/p;d=d.tG;l.uniform4f(d,m,o,n,p);d=a.ga;e=a.bF;KF(e,d.pv,g);KF(e,d.nm,h);d=d.oH;e.uniform2f(d,i,0.0);Kp(a);}
function GW(a){var b,c;b=new IV;c=a.s2;b.fs=new Bk;b.ev=c;b.eY=c.dU.createTexture();AUn=AUn+1|0;return b;}
function KC(a,b){var c,d;if(b!==a.uW){c=a.bF;d=b.bR;c.useProgram(d);a.uW=b;}}
function ACg(){var a=this;KI.call(a);a.w1=null;a.xx=null;}
function AQU(a,b){var c=new ACg();AIW(c,a,b);return c;}
function AIW(a,b,c){var d,e,f,g,h,i,j,k,l;d=new To;a.dP=new Bk;a.lc=0;a.lL=new VN;a.q3=d;e=$rt_str(b.getParameter(7938));f=new R;U(f);L(L(f,C(132)),e);$rt_globals.console.info($rt_ustr(S(f)));a.bF=b;a.c0=Mj(d,4,4);g=ADY(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BY(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new Qb;Ja();k=AUo;f.dR=b;f.gm=k;f.k9=h.length/k.kl|0;f.lX
=j.length;k=b.createBuffer();f.hF=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.ji=null;k=b.createBuffer();f.i9=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.ib=f;a.xi=J0(e,C(133));f=new Qc;f.dU=b;a.s2=f;l=b.getParameter(3379);a.wt=l;f=new R;U(f);Bj(L(f,C(134)),l);$rt_globals.console.info($rt_ustr(S(f)));g=P(C_,7);i=g.data;d=new Vc;H8(d,b,C(135),C(136),AUo);f=d.bR;d.uc=b.getUniformLocation(f,"uColor");a.jr
=d;i[0]=d;f=AQo(b,C(137));a.xN=f;i[1]=f;f=ARm(b);a.xw=f;i[2]=f;f=ARL(b);a.wL=f;i[3]=f;f=AQV(b);a.ga=f;i[4]=f;f=ARW(b);a.xn=f;i[5]=f;f=ARI(b);a.gy=f;i[6]=f;a.xE=g;ADa(b,C(138));a.xx=new Tn;a.w1=c;}
function Gx(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;a:{f=a.c0;switch(e){case 1:break;case 2:g='italic ';break a;default:g='';break a;}g='oblique ';}h=g+d+' '+c+'px '+$rt_ustr(b);MT(f,h);g=f.de.measureText("W");i=g.fontBoundingBoxAscent;j=g.fontBoundingBoxDescent;k=g.width;l=GD(f,C(68));m=GD(f,C(139));g=new Kw;h=HH(h);g.lV=b;g.wb=c;n=c|0;if(n!==c){b=new R;U(b);f=L(b,C(140));AA$(f,f.H,c);$rt_globals.console.info($rt_ustr(S(b)));}g.oS=n;g.wj=d;g.wJ=e;g.eW=i;g.en=j;g.v_=l;g.lG=k;g.mV=h;g.qU=DE(i);g.xp=DE(g.en);d=m*32.0
|0;n=l*32.0|0;o=k*32.0|0;d=n==d&&n==o?1:0;b:{g.wg=d;switch(e){case 1:break;case 2:b=C(141);break b;default:b=C(142);break b;}b=C(143);}g.v3=b;return g;}
var IF=F();
var ATf=null;function I0(a,b,c){return b.jq(c);}
function AAA(){ATf=new IF;}
function Zd(){var a=this;B.call(a);a.eu=null;a.vx=null;a.d2=null;a.f_=null;a.ie=null;a.i$=null;a.ir=null;a.l3=null;a.j0=null;a.cW=null;a.he=null;a.n8=0;}
function ARw(a){var b=new Zd();ALT(b,a);return b;}
function ALT(a,b){a.eu=Cv(P(D6,0));a.vx=Cv(P(D6,0));a.d2=Cv(P(ES,0));a.f_=Cv(P(Gh,0));a.ie=Cv(P(Iv,0));a.i$=Cv(P(HE,0));a.ir=Cv(P(G9,0));a.l3=Cv(P(Bo,0));a.j0=Cv(P(Bo,0));a.cW=b;}
function S2(a,b){var c,d,e,f;CZ(a.cW);c=(Cd(!b.sV?a.vx:a.eu)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].b9(b);if(f)break;if(b.jQ)break;e=e+1|0;}return f;}
function QL(a,b,c){var d,e,f;CZ(a.cW);d=(Cd(a.i$)).data;e=d.length;f=0;while(f<e){if(d[f].lW(b,c))return 1;f=f+1|0;}return 0;}
function VB(){B.call(this);this.nd=null;}
function ALP(a,b){var c;c=a.nd;if(S2(c.cb,W9(c,b,1)))Dp(c,b);}
function VC(){B.call(this);this.r_=null;}
function AL2(a,b){var c;c=a.r_;if(S2(c.cb,W9(c,b,0)))Dp(c,b);}
function VD(){B.call(this);this.oA=null;}
function AKo(a,b){var c,d,e,f,g,h,i;c=a.oA;if(c.dB!==null){a:{b:{d=El(c,b);e=c.cb;CZ(e.cW);f=e.he;if(f!==null)f.i(d);else{g=(Cd(e.d2)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].gk(d))break a;i=i+1|0;}}}}Dp(c,b);}}
function VE(){B.call(this);this.vf=null;}
function AJR(a,b){var c,d,e,f,g,h;c=a.vf;b.button;if(c.dB!==null)a:{d=El(c,b);c=c.cb;e=b.button;CZ(c.cW);if(c.he===null){f=(Cd(c.d2)).data;g=f.length;h=0;while(h<g){b=f[h].f8(d,e);if(b!==null){c.he=b;c.n8=e;break a;}h=h+1|0;}}}}
function VF(){B.call(this);this.rq=null;}
function AKe(a,b){var c,d,e,f,g,h,i;c=a.rq;b.button;if(c.dB!==null){d=El(c,b);e=c.cb;f=b.button;CZ(e.cW);if(f==e.n8&&e.he!==null)e.he=null;g=(Cd(e.d2)).data;h=g.length;i=0;a:{while(i<h){if(g[i].gj(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Dp(c,b);}}
function VG(){B.call(this);this.nK=null;}
function AMr(a,b){var c,d,e,f,g,h,i,j,k;c=a.nK;if(c.dB!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cb;f=El(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;CZ(e.cW);i=(Cd(e.f_)).data;j=i.length;k=0;b:{while(k<j){if(i[k].gb(f,d,h))break b;k=k+1|0;}}Dp(c,b);}}
function VH(){B.call(this);this.vt=null;}
function AIu(a,b){var c,d,e,f,g,h,i,j;c=a.vt;if(c.dB!==null){d=El(c,b);e=c.cb;f=b.button;g=b.detail;CZ(e.cW);h=(Cd(e.d2)).data;i=h.length;j=0;a:{while(j<i){if(h[j].fR(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Dp(c,b);}}
function VI(){B.call(this);this.rB=null;}
function APO(a,b){var c,d,e,f,g,h,i;c=a.rB;if(c.dB!==null){d=El(c,b);e=c.cb;CZ(e.cW);f=(Cd(e.ie)).data;g=f.length;h=0;a:{while(h<g){if(f[h].b9(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Dp(c,b);}}
function VJ(){B.call(this);this.nX=null;}
function AHF(a,b){var c,d,e;b=a.nX.cb;c=(Cd(b.j0)).data;d=c.length;e=0;while(e<d){c[e].w();e=e+1|0;}CZ(b.cW);}
function VK(){B.call(this);this.un=null;}
function ANv(a,b){var c,d,e;b=a.un.cb;c=(Cd(b.l3)).data;d=c.length;e=0;while(e<d){c[e].w();e=e+1|0;}CZ(b.cW);}
function W2(){B.call(this);this.tF=null;}
function APo(a,b){var c;c=a.tF;if(c.dB!==null)El(c,b);}
function W3(){B.call(this);this.sq=null;}
function AJ6(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sq;if(MM()===c.gX){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cd(c.cb.ir)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].eg();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cb.cW;m=new Ns;m.uC=k;m.uE=l;g.getAsString(Bn(m,"accept"));Dp(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new R;U(l);L(L(L(L(l,C(144)),k),C(145)),g);$rt_globals.console.info($rt_ustr(S(l)));}e=e
+1|0;}}}
function W4(){B.call(this);this.mx=null;}
function AKv(a,b){var c;c=a.mx;if(MM()===c.gX&&QL(c.cb,SR(c,b),0))Dp(c,b);}
function W5(){B.call(this);this.uN=null;}
function AMd(a,b){var c;c=a.uN;if(MM()===c.gX&&QL(c.cb,SR(c,b),1))Dp(c,b);}
var S$=F(0);
var To=F();
function Mj(a,b,c){var d,e,f;d=new Rc;ATe=ATe+1|0;d.lp=b;d.kD=c;e=(Fq()).createElement("canvas");d.jp=e;f=b;e.width=f;e=d.jp;f=c;e.height=f;d.de=d.jp.getContext("2d");return d;}
var Tn=F();
function AJd(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Mb(){var a=this;B.call(a);a.jy=null;a.bm=null;a.iP=null;}
var DR=F(0);
var D6=F(0);
var Iv=F(0);
function Qk(){B.call(this);this.oG=null;}
function Bk(){var a=this;B.call(a);a.a=0;a.b=0;}
function Cp(a,b){var c=new Bk();PG(c,a,b);return c;}
function PG(a,b,c){a.a=b;a.b=c;}
function Cu(a,b){a.a=b.a;a.b=b.b;}
function Bd(a,b,c){a.a=b;a.b=c;}
function KB(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function VN(){var a=this;B.call(a);a.rf=0;a.rh=0;a.re=0;a.rd=0;}
var Yq=F(0);
function Qc(){B.call(this);this.dU=null;}
function K_(){var a=this;B.call(a);a.bR=null;a.xr=null;}
function ABa(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(146):C(147);g=$rt_str(b.getShaderInfoLog(e));h=new R;U(h);L(L(h,f),g);g=S(h);b.deleteShader(e);Cn(Eh(),g);Cn(ED(),C(148));Cn(ED(),d);Cn(ED(),C(148));b=new Br;Bm(b,g);K(b);}
function C_(){var a=this;K_.call(a);a.nW=null;a.ps=null;a.lj=null;}
function AUp(a,b,c,d){var e=new C_();H8(e,a,b,c,d);return e;}
function H8(a,b,c,d,e){var f,g,h,i,j,k;a.xr=e;f=ABa(b,35633,c);d=ABa(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bR=g;h=e.rY.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bR;k=c.g3;c=c.pB;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bR;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADa(b,C(149));a.lj=new Bk;c=a.bR;a.nW=b.getUniformLocation(c,"uResolution");c=a.bR;a.ps=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Br;c=new R;U(c);L(L(c,C(150)),d);Bm(b,S(c));K(b);}
function Zf(a,b,c){var d,e,f;if(!KB(a.lj,c)){Cu(a.lj,c);d=a.nW;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function LP(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.ps;b.uniform4f(e,i,l,h,j);Zf(a,b,f);}
function Vc(){C_.call(this);this.uc=null;}
function Ej(){C_.call(this);this.rn=null;}
function AQo(a,b){var c=new Ej();SX(c,a,b);return c;}
function AUq(a,b,c){var d=new Ej();S3(d,a,b,c);return d;}
function SX(a,b,c){S3(a,b,C(135),c);}
function S3(a,b,c,d){Ja();H8(a,b,c,d,AUo);c=a.bR;a.rn=b.getUniformLocation(c,"sDiffuse");}
var ZY=F(C_);
function ARm(a){var b=new ZY();AOX(b,a);return b;}
function AOX(a,b){Ja();H8(a,b,C(135),C(151),AUo);}
function ABY(){Ej.call(this);this.ww=null;}
function ARL(a){var b=new ABY();AHL(b,a);return b;}
function AHL(a,b){var c;SX(a,b,C(152));c=a.bR;a.ww=b.getUniformLocation(c,"uContrast");}
function ABv(){var a=this;Ej.call(a);a.tG=null;a.pv=null;a.nm=null;a.oH=null;}
function AQV(a){var b=new ABv();AMn(b,a);return b;}
function AMn(a,b){var c;S3(a,b,C(153),C(154));c=a.bR;a.tG=b.getUniformLocation(c,"uTexTransform");c=a.bR;a.pv=b.getUniformLocation(c,"uColor");c=a.bR;a.nm=b.getUniformLocation(c,"uBgColor");c=a.bR;a.oH=b.getUniformLocation(c,"uContrast");}
function YN(){var a=this;Ej.call(a);a.x7=null;a.x6=null;a.wM=null;}
function ARW(a){var b=new YN();AG5(b,a);return b;}
function AG5(a,b){var c,d;SX(a,b,C(155));c=a.bR;a.x7=b.getUniformLocation(c,"uColorB");d=a.bR;a.x6=b.getUniformLocation(d,"uColorF");d=a.bR;a.wM=b.getUniformLocation(d,"uContrast");}
function ABu(){var a=this;C_.call(a);a.nG=null;a.mi=null;a.mh=null;}
function ARI(a){var b=new ABu();AG7(b,a);return b;}
function AG7(a,b){var c;Ja();H8(a,b,C(135),C(156),AUo);c=a.bR;a.nG=b.getUniformLocation(c,"uColor");c=a.bR;a.mi=b.getUniformLocation(c,"uPoints1");c=a.bR;a.mh=b.getUniformLocation(c,"uPoints2");}
var Rw=F(0);
var ADA=F(0);
function KF(b,c,d){var e,f,g,h;e=d.by;f=d.b0;g=d.bl;h=d.b7;b.uniform4f(c,e,f,g,h);}
function ADa(b,c){var d,e;d=b.getError();if(d){b=Eh();e=new R;U(e);Bj(L(e,c),d);Cn(b,S(e));}}
function Qa(){var a=this;B.call(a);a.nH=null;a.nJ=null;a.nI=null;}
function Qb(){var a=this;B.call(a);a.dR=null;a.gm=null;a.hF=null;a.ji=null;a.i9=null;a.k9=0;a.lX=0;}
function KZ(a,b){if(b!==null)a.dR.deleteBuffer(b);return null;}
function B_(){var a=this;B.call(a);a.v1=null;a.dN=0;}
function CS(a,b,c){a.v1=b;a.dN=c;}
function Gr(){var a=this;B_.call(a);a.rY=null;a.mf=null;a.q1=null;a.kl=0;a.pg=0;a.sl=0;}
var AUo=null;var AUr=null;function Ja(){Ja=Bi(Gr);AIP();}
function AIP(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Gr;c=P(DJ,2);d=c.data;AOG();d[0]=AUs;d[1]=AUt;Ja();CS(b,C(157),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];AEH();switch(AUu.data[l.lB.dN]){case 1:f=f+l.e9|0;h=h+1|0;break a;case 2:e=e+l.e9|0;g=g+1|0;break a;default:}}i=i|1<<l.g3;k=k+1|0;}b.rY=c;b.kl=e;b.pg=f;b.sl=i;c=P(DJ,g);m=c.data;b.mf=c;c=P(DJ,h);n=c.data;b.q1=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];AEH();switch(AUu.data[l.lB.dN]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AUo=b;c=P(Gr,1);c.data[0]=b;AUr=c;}
var LN=F(0);
var SA=F(0);
var TA=F(0);
var F6=F();
function IU(){F6.call(this);this.vH=null;}
function ZI(){var a=this;IU.call(a);a.xe=0;a.ky=0;a.iq=null;a.j3=null;a.sR=null;}
function AKK(a,b){var c=new ZI();AOr(c,a,b);return c;}
function AOr(a,b,c){a.vH=b;b=new R;U(b);a.iq=b;a.j3=BY(32);a.xe=c;AHu();a.sR=AUv;}
function SG(a,b,c,d){var e,$$je;e=a.vH;if(e===null)a.ky=1;if(!(a.ky?0:1))return;a:{try{e.jX(b,c,d);break a;}catch($$e){$$je=E5($$e);if($$je instanceof Tj){}else{throw $$e;}}a.ky=1;}}
function NY(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$$je;e=b.data;d=d-c|0;f=new Q1;g=e.length;d=c+d|0;U2(f,g);f.cx=c;f.ek=d;f.tV=0;f.x9=0;f.qC=b;e=En(Z(16,Bb(g,1024)));d=e.data.length;h=new V3;i=0+d|0;U2(h,d);AIU();h.wT=AUw;h.pR=0;h.r6=e;h.cx=0;h.ek=i;h.wV=0;h.mK=0;j=a.sR;k=new Ps;b=En(1);l=b.data;l[0]=63;AON();m=AUx;k.ln=m;k.kG=m;c=l.length;if(c&&c>=k.mg){k.vY=j;k.pz=b.eR();k.w_=2.0;k.mg=4.0;k.oW=BY(512);k.nE=En(512);j=AUy;if(j===null){m=new Bu;Bm(m,C(158));K(m);}k.ln=j;k.kG=j;while(k.im!=3){k.im=2;a:{while(true)
{try{j=X9(k,f,h);}catch($$e){$$je=E5($$e);if($$je instanceof Br){j=$$je;m=new SS;m.lk=1;m.l_=1;m.qh=j;K(m);}else{throw $$e;}}if(j.ho?0:1){c=EH(f);if(c<=0)break a;j=KO(c);}else if(Lv(j))break;m=!V1(j)?k.ln:k.kG;b:{if(m!==AUy){if(m===AUz)break b;else break a;}c=EH(h);b=k.pz;d=b.data.length;if(c<d){j=AUA;break a;}V4(h,b,0,d);}n=f.cx;c=j.ho!=2?0:1;if(!(!c&&!V1(j)?0:1)){j=new D0;X(j);K(j);}RS(f,n+j.nM|0);}}n=Lv(j);SG(a,e,0,h.cx);NV(h);if(!n){while(true){d=k.im;if(d!=2&&d!=4){j=new C5;X(j);K(j);}j=AUB;if(j===j)k.im
=3;n=Lv(j);SG(a,e,0,h.cx);NV(h);if(!n)break;}return;}}j=new C5;X(j);K(j);}m=new Bu;XD(m,C(159));K(m);}
function Cn(a,b){var c,d,e,f,g,h,i,j;BV(CU(a.iq,b),10);b=a.iq;c=b.H;d=a.j3;if(c>d.data.length)d=BY(c);e=0;f=0;if(e>c){b=new BS;Bm(b,C(160));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.N.data;j=e+1|0;g[f]=i[e];f=h;e=j;}NY(a,d,0,c);a.iq.H=0;}
function FV(){F6.call(this);this.w3=null;}
function Xc(a){a.w3=En(1);}
var KS=F(FV);
var AS3=null;function AI7(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ABM(){var b;b=new KS;Xc(b);AS3=b;}
function DJ(){var a=this;B_.call(a);a.pB=null;a.lB=null;a.e9=0;a.oX=0;a.g3=0;}
var AUs=null;var AUt=null;var AUC=null;function AOG(){AOG=Bi(DJ);AH_();}
function AQ_(a,b,c,d,e,f,g){var h=new DJ();U6(h,a,b,c,d,e,f,g);return h;}
function U6(a,b,c,d,e,f,g,h){AOG();CS(a,b,c);a.pB=d;a.lB=e;a.e9=f;a.oX=g;a.g3=h;}
function AH_(){var b;b=new DJ;AAV();U6(b,C(161),0,C(162),AUD,2,0,0);AUs=b;b=AQ_(C(163),1,C(164),AUD,2,0,1);AUt=b;AUC=G(DJ,[AUs,b]);}
function IO(){var a=this;B.call(a);a.vP=null;a.wy=null;}
function AB3(b){var c,d;if(E3(b))K(ZC(b));if(!AB5(I(b,0)))K(ZC(b));c=1;while(c<H(b)){a:{d=I(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AB5(d))break a;else K(ZC(b));}}c=c+1|0;}}
function AB5(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var LT=F(IO);
var AUv=null;function AHu(){AHu=Bi(LT);AG4();}
function AG4(){var b,c,d,e,f;b=new LT;AHu();c=P(Bt,0);d=c.data;AB3(C(165));e=d.length;f=0;while(f<e){AB3(d[f]);f=f+1|0;}b.vP=C(165);b.wy=c.eR();AUv=b;}
var JP=F();
var AUE=null;var AUu=null;function AEH(){AEH=Bi(JP);ALB();}
function ALB(){var b,c;AAV();b=BD((AUF.eR()).data.length);c=b.data;AUu=b;c[AUG.dN]=1;c[AUD.dN]=2;AKs();c=BD((AUH.eR()).data.length);b=c.data;AUE=c;b[AUI.dN]=1;b[AUJ.dN]=2;}
var Gw=F(B_);
var AUG=null;var AUD=null;var AUF=null;function AAV(){AAV=Bi(Gw);AGD();}
function AGZ(a,b){var c=new Gw();ACj(c,a,b);return c;}
function ACj(a,b,c){AAV();CS(a,b,c);}
function AGD(){var b;AUG=AGZ(C(166),0);b=AGZ(C(167),1);AUD=b;AUF=G(Gw,[AUG,b]);}
var FY=F(B_);
var AUI=null;var AUJ=null;var AUH=null;function AKs(){AKs=Bi(FY);AHa();}
function APV(a,b){var c=new FY();YA(c,a,b);return c;}
function YA(a,b,c){AKs();CS(a,b,c);}
function AHa(){var b;AUI=APV(C(168),0);b=APV(C(169),1);AUJ=b;AUH=G(FY,[AUI,b]);}
var J5=F(FV);
var AS4=null;function AHc(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function ADD(){var b;b=new J5;Xc(b);AS4=b;}
var UF=F(DN);
function AB$(){Bu.call(this);this.v0=null;}
function ZC(a){var b=new AB$();AN0(b,a);return b;}
function AN0(a,b){X(a);a.v0=b;}
var LR=F(0);
function WI(){B.call(this);this.pm=null;}
function AM5(a,b){a.pm.setPointerCapture(b.pointerId);}
function WJ(){B.call(this);this.od=null;}
function AFo(a,b){a.od.releasePointerCapture(b.pointerId);}
var ABf=F();
function P9(){var a=this;B.call(a);a.cZ=null;a.eq=null;a.hX=null;a.hY=null;a.hU=null;a.hV=null;}
function ADp(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;h=c.dL;i=a.cZ;Bz(h,i.a,i.b,a.eq,g.bZ.fm);if(b!==null&&b.fJ!==null){j=Cm(c,2.0);k=FI(b,Fh(d),1);l=FI(b,Gv(d),1);m=FI(b,Fh(e),0);n=FI(b,Gv(e),0);o=Bb(k,m);p=Z(l,n);k=BB(o,p);if(k<=0)DY(h,1);while(o<=p){q=b.fJ.data[o];if(q.jV){r=d.C;s=T(r,q.hn)-d.bc|0;t=s+T(q.lS,r)|0;l=e.C;u=T(l,q.hm)-e.bc|0;v=u+T(q.lR,l)|0;Bd(a.hX,a.cZ.a,s);Bd(a.hU,a.cZ.a,t);Bd(a.hY,a.cZ.a+a.eq.a|0,u);Bd(a.hV,a.cZ.a+a.eq.a|0,v);r=Z(Bb(s,u),a.cZ.b);w=
Bb(Z(t,v),a.cZ.b+a.eq.b|0);Vw(f,a.cZ.a,r,a.eq.a,w-r|0);CC(f.dr,g.gA.gw);CC(f.cv,HX(g.dw,g,q.jV));if(s==t){x=c.dl;Bd(x,a.cZ.a-d.V.a|0,j);if(u>=s){i=a.hU;Bd(i,i.a,i.b+j|0);r=s;}else{r=s-j|0;i=a.hX;Bd(i,i.a,i.b-j|0);}Bz(h,d.V.a,r,x,f.cv);}if(u==v){x=c.dl;Bd(x,e.ch.a,j);if(s>=u){i=a.hV;Bd(i,i.a,i.b+j|0);}else{u=u-j|0;i=a.hY;Bd(i,i.a,i.b-j|0);}Bz(h,a.cZ.a+a.eq.a|0,u,x,f.cv);}i=f.bI;r=i.a;w=i.b;y=f.P;z=a.hX;ba=a.hY;bb=a.hU;bc=a.hV;bd=f.cv;KC(h,h.gy);LP(h.gy,h.bF,r,w,y,h.dP);i=h.gy;x=h.bF;q=i.mi;be=z.a;bf=z.b;bg=ba.a;bh
=ba.b;x.uniform4f(q,be,bf,bg,bh);i=i.mh;be=bb.a;bf=bb.b;bg=bc.a;bh=bc.b;x.uniform4f(i,be,bf,bg,bh);i=h.gy;KF(h.bF,i.nG,bd);Kp(h);}o=o+1|0;}if(k<=0)DY(h,0);return;}}
function Im(){var a=this;B.call(a);a.bI=null;a.P=null;a.cv=null;a.dr=null;}
function AAG(){var a=new Im();ABW(a);return a;}
function ABW(a){a.bI=new Bk;a.P=new Bk;a.cv=new B5;a.dr=new B5;}
function Vw(a,b,c,d,e){Bd(a.bI,b,c);Bd(a.P,d,e);}
function SC(a){Bd(a.P,0,0);}
function JK(a){var b;b=a.P;return T(b.a,b.b)?0:1;}
function F7(a,b){return FN(b,a.bI,a.P);}
function AAf(){var a=this;B.call(a);a.d_=null;a.ee=null;a.c3=null;a.b1=null;a.T=null;}
function ANt(a){var b=new AAf();AL7(b,a);return b;}
function AL7(a,b){var c;c=new Wi;c.dI=BC();a.ee=c;a.d_=b;c=new UZ;c.cp=BC();c.jg=AUK;c.cM=b;BW(b.j6,c);a.b1=c;}
function MD(a,b){var c,d;a.T=b;c=a.c3;if(c!==null)c.f0=b.S;c=a.b1;d=b.S;c.iz=b.up;c.lx=d;b=BI(c.cp);while(BJ(b)){Qv(BL(b),c.lx);}}
function W1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.ee;c=a.d_.dL;d=b.dI.k-1|0;while(d>=0){e=Bq(b.dI,d);e.U.ka(c);f=e.Q;g=e.f0.hD;if(!JX(f)){if(!Vt(f)&&!(!f.it&&f.dh!==null)){f.it=0;Ul(f);h=f.eI;i=(h.eW+h.en+5.0)/10.0;j=Cm(f.gS,f.iV);h=c.c0;k=f.eI;l=f.gE;m=i*2.0;CK(h,k);n=j+J$(h,l,m)|0;f.hW=n;n=Ft(0,n,f.q.a);if(n){h=EY(c,n,f.q.b);CK(h,f.eI);k=f.gE;m=j;i=m+i;l=f.eI;o=l.eW;Et(h,k,i,m+o-(o+l.en)/16.0);k=f.dh;if(k===null){k=GW(c);f.dh=k;}Ev(k,h);Is(h);Ck(f.jP,0.0,0.0,Cg(f.dh),K9(f.dh));}}h=g.rL;k=f.dh;if(k===
null)PA(f,c,0,f.q.a,h);else{j=Cg(k);k=g.ua;g=f.L;n=g.a;p=g.b;g=f.dh;Es(c,n,p,g.fs,f.jP,g,k,h,0.0);n=f.q.a;if(j<n)PA(f,c,j,n-j|0,h);}}DY(c,1);n=Cm(e.bp,2.0);j=JX(e.Q);h=e.bp;q=h.dl;h=h.tI;r=j?0:e.Q.q.b;k=e.U.q;Bd(h,k.a,k.b+r|0);Y4(c,h,!j?e.Q.L:e.U.L,e.f0.hD.kN, -n|0,q);h=e.U;ABh(c,h.q,h.L,n,r,Pb(e.f0.io,e.bp.b2),e.f0.io.lv,q);d=d+(-1)|0;}b=a.b1;if(!De(b.cp)){DY(b.cM.dL,1);j=0;while(true){c=b.cp;if(j>=c.k)break;ACV(Bq(c,j),b.cM);j=j+1|0;}}}
function ALY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.ee;d=0;a:{while(true){e=c.dI;if(d>=e.k)break;b:{f=Bq(e,d);e=b.n;if(Dj(f.Q,e))g=DD(f.bp.df,null);else{h=Cm(f.bp,7.0);i=Cm(f.bp,25.0);if(N2(f,e.a,h)){j=Nw(f,e.a,i);if(Pi(f,e.b,h)){g=DD(f.bp.df,Lj(j,C(170)));break b;}if(Np(f,e.b,h)){g=DD(f.bp.df,Lj( -j|0,C(170)));break b;}}if(VA(f,e.b,h)){g=V7(f,e.b,i);if(W8(f,e.a,h)){g=DD(f.bp.df,Lj(g,C(171)));break b;}if(ME(f,e.a,h)){g=DD(f.bp.df,Lj( -g|0,C(171)));break b;}}g=0;}}c:{d:{if(!g){if(!Dj(f.U,b.n))break d;if(!f.U.gk(b)
&&!DD(f.bp.df,null))break d;}g=1;break c;}g=0;}if(g){g=1;break a;}d=d+1|0;}g=0;}e:{if(!g){c=a.b1;g=0;d=c.cp.k-1|0;f:{while(d>=0){e=Bq(c.cp,d);k=b.n;f=c.cM.df;g=F7(e.b$,k);h=!g?(-1):Nq(e,k);i=e.gO;if(i!=h){if(i>=0){l=e.b6.data[i];T9(l,0);m=e.vO;if(m!==null)m.ys(k,e.gO,l);}if(h>=0){k=e.b6.data[h];l=e.oI;if(l!==null){m=l.ri;n=l.rj;l=l.rk;SO(m,n);if(l!==null)k.j1.w();if(T2(k)){if(k.k1===null)Oa(m,ZQ(k,n),k.is,n);else V2(m,ZQ(k,n),k.is,n,k.k1);}}T9(k,1);}e.gO=h;}g=g&&Fz(f)?1:0;if(g)break f;d=d+(-1)|0;}}if(!g){g=
0;break e;}}g=1;}return g;}
function AOT(a,b,c,d){var e,f,g,h,i;e=a.ee;f=0;a:{while(true){g=e.dI;if(f>=g.k)break;b:{c:{h=Bq(g,f);if(!Dj(h.Q,b.n)){if(!Dj(h.U,b.n))break c;if(!h.U.fR(b,c,d))break c;}i=1;break b;}i=0;}if(i){c=1;break a;}f=f+1|0;}c=0;}d:{if(!c){g=a.b1.cp;d=g.k-1|0;i=1;if(d<0)i=0;else{g=Bq(g,d);c=Nq(g,b.n);if(c>=0){b=g.b6.data[c];if(!T2(b))b.j1.w();}}if(!i){c=0;break d;}}c=1;}return c;}
function AMS(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.b1;e=null;f=d.cp.k-1|0;a:{while(f>=0){e=Bq(d.cp,f);g=b.n;h=F7(e.b$,g);if(!h&&!JK(e.b$)){e=e.tl;if(e!==null)Du(e.r7);}e=!h?null:AUL;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;e=a.ee;h=0;b:{while(true){g=e.dI;if(h>=g.k){g=null;break b;}c:{i=Bq(g,h);if(!c){d:{g=b.n;if(!JX(i.Q)&&Dj(i.Q,g)){d=i.U.L;j=d.a;k=g.a;l=j-k|0;j=d.b;f=g.b;j=j-f|0;g=i.Q.L;m=g.a-k|0;f=g.b-f|0;d=new Bk;g=new Ny;g.m5=i;g.m6=m;g.m7=f;g.m8=d;g.m1=l;g.m3=j;}else{j=Cm(i.bp,7.0);f=Cm(i.bp,
25.0);if(N2(i,g.a,j)){m=Nw(i,g.a,f);if(Pi(i,g.b,j)){g=H3(i,g,m,(-1));break d;}if(Np(i,g.b,j)){g=H3(i,g,m,1);break d;}}if(VA(i,g.b,j)){f=V7(i,g.b,f);if(W8(i,g.a,j)){g=H3(i,g,(-1),f);break d;}if(ME(i,g.a,j)){g=H3(i,g,1,f);break d;}}g=null;}}if(g!==null)break c;}g=Dj(i.Q,b.n)?AUL:i.U.f8(b,c);i=i.U;if(i===null)g=null;else if(g===null)g=!Dj(i,b.n)?null:AUL;}if(g!==null)break;h=h+1|0;}}return g;}
function AJG(a,b,c){var d,e,f,g,h;d=a.ee;e=0;a:{while(true){f=d.dI;if(e>=f.k)break;b:{c:{g=Bq(f,e);if(!Dj(g.Q,b.n)){if(!Dj(g.U,b.n))break c;if(!g.U.gj(b,c))break c;}h=1;break b;}h=0;}if(h){c=1;break a;}e=e+1|0;}c=0;}return !c&&!FE(a.b1)?0:1;}
function QN(a,b,c,d,e){Qe(a,b,d,Wp(c,null,d),e);}
function Q3(a,b,c,d,e){Qe(a,b,d,Wp(null,c,d),e);}
function Qe(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(a.c3!==null)Sv(a);f=new Qn;g=a.d_;h=new Oz;h.ta=a;h.s_=c;La(f);f.cS=new Bk;f.bM=new Bk;f.dA=AAG();f.gt=new Bk;f.bW=AUM;f.dZ=P(H2,0);f.ds=0;f.d7=0;f.fG=0;f.e8=0;f.eS=0;f.d0=AEV(0);f.gU=Gf();f.cf=g;f.h7=h;f.vl=h;Pd(f);SZ(f);f.bW=d;c=a.T;g=c.S;c=c.u5;f.pX=g;f.ti=c;f.dT=null;f.d0=null;f.eA=0;SZ(f);h=new TJ;i=a.d_;h.U=AP6();h.bp=i;c=new UI;La(c);c.jP=new B5;c.gS=i;h.Q=c;a.c3=h;i=new PP;c=a.d_.df;La(i);g=new N9;g.pV=i;i.of=g;g=new N8;g.rm=i;i.s1=g;i.t8=10.0;i.br=f;i.l6
=c;f.gu=i;c=a.T.S;g=c.ou;h=c.nl;i.u3=g;i.uX=h;c=i.cT;if(c!==null)Gy(c,g,h);c=i.cY;if(c!==null)Gy(c,g,h);j=a.c3;c=j.U;g=c.L;h=c.q;c=Cy(c,i);j.U=c;c.ld(g,h,j.bp.b2);g=a.c3;h=new R;U(h);L(L(h,C(172)),e);i=S(h);c=a.T.tE;e=g.Q;k=BN(e.hO,c)?0:1;l=BN(e.gE,i)?0:1;m=4.0===e.iV?0:1;if(k){e.hO=c;e.eI=null;Pk(e,0);}e.it=!k&&!l&&!m?0:1;e.gE=i;e.iV=4.0;e.hW=0;M$(g);c=a.c3;c.f0=a.T.S;Rd(a.ee.dI,0,c);c=a.c3;k=(c.Q.q.b+Cm(c.bp,2.0)|0)+Cm(a.d_,2.0)|0;l=(f.ds+f.d7|0)+f.fG|0;m=Cm(f.cf,5.0);h=Cp(Ft(m,b.a,f.cf.cN.a-l|0),Ft(k,b.b,
f.cf.cN.b-f.cS.b|0));Pw(f);Pg(f);k=(f.ds+f.d7|0)+f.fG|0;b=f.cf;l=(b.cN.a-h.a|0)-Cm(b,5.0)|0;b=f.cf;m=(b.cN.b-h.b|0)-Cm(b,5.0)|0;g=Cp(Bb(k,l),Bb(f.cS.b,m));KE(a.c3,h,g);Fo(a.d_,f);}
function Sv(a){var b,c;b=a.ee;c=a.c3;UV(b.dI,c);b=a.c3;c=b.Q;c.dh=Cy(c.dh,null);b.U=Cy(b.U,null);a.c3=null;}
function J8(a,b,c){var d,e,f,g,h;Du(a.b1);d=a.b1;e=P(D7,1);f=e.data;g=new D7;BT(d);h=new Nb;h.mB=d;ACa(g,h,C(173),a.T.S.uO);f[0]=g;P4(d,b,Iu(e),QC(a,c));}
function QC(a,b){var c;c=new Ro;c.oZ=a;c.o0=b;return c;}
function LG(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;if(!FE(a.b1)){g=a.b1;h=b.n;b=new Sx;b.R=a;b.bt=c;b.nP=f;b.hB=e;b.jn=d;i=AA9();e=b.bt.e;d=Dt(e);e=FP(e);f=b.bt.cA;if(Qw(f,d,e)!==null){j=b.R.T.S.bd;k=new Tf;k.s8=b;k.s9=h;DU(i,C(174),j,k);}if(LB(f,d,e)!==null){j=b.R.T.S.bd;k=new Tg;k.tc=b;k.td=h;DU(i,C(175),j,k);}if(Tb(f,d,e)!==null){e=b.R.T.S.bd;f=new Te;f.rc=b;f.rb=h;DU(i,C(176),e,f);}e=b.R.T.S.bd;f=new Td;f.pG=b;f.pF=h;DU(i,C(177),e,f);if(!b.bt.dy){e=b.R.T.S.bd;f=new SW;f.nL=b;DU(i,C(178),e,f);}e=b.R.T.S.bd;f
=new SU;f.q7=b;DU(i,C(179),e,f);if(!b.bt.dy){HL(b);if("readText" in $rt_globals.navigator.clipboard?1:0){e=b.R.T.S.bd;f=new SV;f.tD=b;DU(i,C(180),e,f);}}l=b.R.T.S.bd;d=AA9();m=b.R.T.S.bd;n=P(D7,3);o=n.data;p=b.jn;BT(p);e=new Vh;e.rO=p;o[0]=Dg(C(181),m,e);p=b.R.T.S.bd;q=b.jn;BT(q);e=new Vf;e.ol=q;o[1]=Dg(C(182),p,e);p=b.R.T.S.bd;q=b.jn;BT(q);e=new Vi;e.pD=q;o[2]=Dg(C(183),p,e);I_(d,C(184),m,Iu(n),AUN);f=b.R.T.S.bd;n=P(D7,2);o=n.data;p=b.hB;BT(p);m=new Wm;m.ue=p;o[0]=Dg(C(185),f,m);j=b.R.T.S.bd;p=b.hB;BT(p);q
=new Wl;q.pM=p;o[1]=Dg(C(186),j,q);HA(d,C(187),f,Iu(n));f=b.R.T.S.bd;j=new NP;j.tg=b;I_(d,C(188),f,j,AUN);HA(i,C(189),l,J9(d));k=b.R.T.S.bd;d=AA9();HA(d,C(190),b.R.T.S.bd,ZZ(b));f=b.R.T.S.bd;m=new Xa;m.om=b;DU(d,C(191),f,m);HA(i,C(192),k,J9(d));P4(g,h,J9(i),QC(a,c));}}
function ANd(a,b,c,d){var e,f,g,h;e=a.ee;f=0;a:{while(true){g=e.dI;if(f>=g.k)break;if((Bq(g,f)).U.gb(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function YM(b){var c;c=new SB;c.ui=b;return c;}
var Hl=F(0);
function TY(){B.call(this);this.uu=null;}
function AJt(a,b){var c;c=a.uu;UN(c,c.y,c.x);}
function TZ(){B.call(this);this.qc=null;}
function AEQ(a,b){var c;c=a.qc;UN(c,c.x,c.y);}
function T0(){B.call(this);this.mU=null;}
function AJF(a,b){Xg(a.mU,b);}
function TU(){B.call(this);this.tr=null;}
function AKr(a,b){Xg(a.tr,b);}
function TV(){B.call(this);this.wN=null;}
function AOA(a,b){return b.bK!=121?0:1;}
function JV(){var a=this;B.call(a);a.m_=null;a.pp=null;a.oM=null;}
function AUO(a,b){var c=new JV();MJ(c,a,b);return c;}
function MJ(a,b,c){var d;d=null;a.m_=b.iP;a.pp=d;a.oM=c;}
function AHB(a,b){var c,d,e,f;if(b.cj&&b.bK==79){c=a.pp;if(c!==null&&b.bE){if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADb(c,1);else{d=new VT;b=$rt_globals.window.showDirectoryPicker();e=new VS;e.o7=c;e.o8=d;b.then(Bn(e,"f"),Bn(d,"f"));}}else Vs(a.m_,a.oM);f=1;}else f=0;return f;}
function TW(){B.call(this);this.mD=null;}
function ANw(a,b){var c,d;c=a.mD;d=DG(c.bu,c.y)?c.y:!DG(c.bu,c.x)?null:c.x;if(d!==null){IC(d,b);c.fB=null;}}
function TX(){B.call(this);this.r0=null;}
function AGz(a,b){var c,d,e,f;b=b;c=a.r0;if(DG(c.bu,c.y)){d=c.d5;e=c.y;f=new ON;f.mp=c;LG(d,b,e,c,c,f);}if(DG(c.bu,c.x)){d=c.d5;e=c.x;f=new OM;f.u7=c;LG(d,b,e,c,c,f);}return 1;}
function GF(){var a=this;B.call(a);a.uR=0;a.cx=0;a.ek=0;a.iO=0;}
function U2(a,b){a.iO=(-1);a.uR=b;a.ek=b;}
function EH(a){return a.ek-a.cx|0;}
function Fn(a){return a.cx>=a.ek?0:1;}
var RL=F(0);
var Kz=F(GF);
function RS(a,b){var c,d,e;if(b>=0&&b<=a.ek){a.cx=b;if(b<a.iO)a.iO=0;return a;}c=new Bu;d=a.ek;e=new R;U(e);BV(Bj(L(Bj(L(e,C(193)),b),C(194)),d),93);Bm(c,S(e));K(c);}
function Jm(){var a=this;GF.call(a);a.pR=0;a.r6=null;a.wT=null;}
function V4(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.mK){e=new WV;X(e);K(e);}if(EH(a)<d){e=new QK;X(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BS;j=new R;U(j);Bj(L(Bj(L(j,C(195)),h),C(196)),g);Bm(i,S(j));K(i);}if(d<0){e=new BS;i=new R;U(i);L(Bj(L(i,C(197)),d),C(198));Bm(e,S(i));K(e);}h=a.cx;k=h+a.pR|0;l=0;while(l<d){b=a.r6.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.cx=h+d|0;return a;}}b=b.data;e=new BS;d=b.length;i=new R;U(i);BV(Bj(L(Bj(L(i,C(199)),c),C(194)),d),41);Bm(e,
S(i));K(e);}
function NV(a){a.cx=0;a.ek=a.uR;a.iO=(-1);return a;}
function Hd(){B.call(this);this.xJ=null;}
var AUz=null;var AUy=null;var AUx=null;function AON(){AON=Bi(Hd);AJ9();}
function AC7(a){var b=new Hd();AB0(b,a);return b;}
function AB0(a,b){AON();a.xJ=b;}
function AJ9(){AUz=AC7(C(200));AUy=AC7(C(201));AUx=AC7(C(202));}
function PE(){B.call(this);this.wm=null;}
function AFd(a,b){return b.bK!=121?0:1;}
function PB(){B.call(this);this.uB=null;}
function AHJ(a,b){IC(a.uB,b);}
function PC(){B.call(this);this.oo=null;}
function AN5(a,b,c){return Gz(a.oo,b,c);}
function NM(){B.call(this);this.pf=null;}
function AL6(a){var b,c;b=a.pf.cK;BT(b);c=new NS;c.nh=b;return c;}
function NN(){B.call(this);this.vq=null;}
function AJc(a,b,c,d){return Jg(a.vq.cK,c,d);}
function NK(){B.call(this);this.mY=null;}
function AJS(a,b){var c,d,e,f;b=b;c=a.mY;if(DG(c.bu,c.cK)){d=c.gl;e=c.cK;f=new R8;f.xb=c;LG(d,b,e,c,e,f);}return 1;}
var AAq=F();
var Tu=F(0);
function Kv(){var a=this;B.call(a);a.hH=null;a.fU=null;a.lE=null;}
function ABb(a,b){var c=new Kv();AIQ(c,a,b);return c;}
function AQk(a,b,c){var d=new Kv();NW(d,a,b,c);return d;}
function XC(b){var c,d,e,f,g,h,i;c=new Kv;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(Bt,0);else{f=P(Bt,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Ch(e[h]);h=h+1|0;}}}else f=P(Bt,0);NW(c,d,b,f);return c;}
function AIQ(a,b,c){NW(a,b,c,P(Bt,0));}
function NW(a,b,c,d){a.hH=b;a.fU=c;a.lE=d;}
function I8(a,b){var c,d,e;c=b|0;if(c===b)return c;d=Eg(a);e=new R;U(e);L(L(e,C(203)),d);$rt_globals.console.info($rt_ustr(S(e))+b);return 0;}
function Eg(a){var b;b=a.hH;return Ch(b!==null?b.name:a.fU.name);}
function AJb(a){var b,c,d,e,f;if(a.fU===null){b=a.lE;c=Eg(a);d=YV(b);e=new R;U(e);L(L(L(e,d),C(204)),c);c=S(e);}else{b=a.lE;c=Eg(a);f=I8(a,a.fU.size);d=YV(b);e=new R;U(e);Bj(L(L(L(L(e,d),C(204)),c),C(205)),f);c=S(e);}return c;}
var Yl=F(0);
function Jr(b,c,d,e,f){Ck(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Tr(){var a=this;B.call(a);a.dL=null;a.h2=null;a.df=null;a.cN=null;a.b2=0.0;a.d3=null;a.j6=null;a.dl=null;a.tI=null;a.vL=null;a.vM=null;}
function I2(a){var b;b=a.d3;if(b!==null)b.sx();}
function JA(a){var b;b=a.d3;if(b!==null)b.vz();}
function NJ(a,b){var c;c=a.h2.db!==(Fq()).activeElement?0:1;if(c)JA(a);a.d3=b;if(c)I2(a);}
function Fo(a,b){JA(a);a.d3=b;I2(a);}
function DG(a,b){return b!==a.d3?0:1;}
function LD(a){return a.dL.c0;}
function Io(a,b){return Gx(a.dL,b.jd,Co(b.hE,a.b2),400,0);}
function Cm(a,b){return Co(b,a.b2);}
var RB=F();
function AIb(a,b){var c,d,e;c=b.cj;d=c&&!b.bE&&!b.cU&&!b.iC?1:0;a:{if(d){d=b.bK;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bE&&!c&&!b.cU&&!b.iC?1:0;d=d&&b.bK==46?1:0;}b:{if(!d){e=b.bK;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.jQ=1;}return 0;}
function RA(){B.call(this);this.nQ=null;}
function AFQ(a,b){var c;c=a.nQ.d3;return c!==null&&c.j9(b)?1:0;}
function B5(){var a=this;B.call(a);a.by=0.0;a.b0=0.0;a.bl=0.0;a.b7=0.0;}
function Ck(a,b,c,d,e){a.by=b;a.b0=c;a.bl=d;a.b7=e;}
function CC(a,b){a.by=b.by;a.b0=b.b0;a.bl=b.bl;a.b7=b.b7;return a;}
function APJ(a,b){if(a===b)return 1;return b!==null&&By(a)===By(b)&&JU(a,b)?1:0;}
function JU(a,b){return b.by===a.by&&b.b0===a.b0&&b.bl===a.bl&&b.b7===a.b7?1:0;}
var Ii=F(0);
function Wi(){B.call(this);this.dI=null;}
function UZ(){var a=this;B.call(a);a.cM=null;a.cp=null;a.iz=null;a.iZ=null;a.lx=null;a.jg=null;}
function P4(a,b,c,d){var e,f;e=a.cM;f=e.cN;if(T(f.a,f.b)&&e.b2!==0.0){if(a.iz!==null&&!FE(a)){a.jg=d;a.iZ=Io(a.cM,a.iz);e=Oa(a,b,c,null);b=new US;b.r7=a;e.tl=b;Fo(a.cM,a);return;}b=new Bu;X(b);K(b);}c=new C5;Bm(c,C(206));K(c);}
function Du(a){var b;if(FE(a)){b=a.cM;if(b.d3===a)b.d3=null;SO(a,null);a.jg.w();a.jg=AUK;}}
function V2(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=new Si;f.b$=AAG();f.eO=new Bk;f.f$=new Bk;f.b6=AUP;f.gO=(-1);f.f3=1;c=c.eg();UL(f);f.b6=c;Qv(f,a.lx);Qi(f,a.iZ);Lm(f,a.cM);if(d===null)g=b.a;else{g=b.a;g=a.cM.cN.a<((g+(ER(d)).a|0)+(ER(f)).a|0)?g-(ER(f)).a|0:(g+(ER(d)).a|0)-d.e7|0;}h=b.b;b=a.cM.cN;i=Z(0,Bb(g,b.a-(ER(f)).a|0));g=Z(0,Bb(h,b.b-(ER(f)).b|0));Bd(f.b$.bI,i,g);h=f.cI+f.e7|0;j=f.b6.data;k=j.length;l=0;m=h;while(l<k){b=j[l].c9;c=b.bI;c.a=i+h|0;c.b=g+m|0;if(!f.f3){if(!b.P.a)XU();h=h+(b.P.a+f.cI|0)|0;}else{if
(!b.P.b)XU();m=m+(b.P.b+f.cI|0)|0;}l=l+1|0;}b=new WT;b.ri=a;b.rj=f;b.rk=e;f.oI=b;Bv(a.cp,f);return f;}
function Oa(a,b,c,d){return V2(a,b,c,d,null);}
function AJW(a,b){var c;if(!FE(a))return 0;a:{switch(b.bK){case 27:Du(a);c=1;break a;default:}c=0;}return c;}
function ZQ(b,c){var d,e,f;d=b.c9;e=c.cI;f=c.e7;b=new Bk;c=d.bI;PG(b,(c.a-(e*3|0)|0)-f|0,(c.b-e|0)-f|0);return b;}
function SO(a,b){var c,d;c=a.cp.k-1|0;a:{while(true){if(c<0)break a;d=Bq(a.cp,c);if(b===d)break;Fi(a.cp,c);d.fP=Cy(d.fP,null);Bd(d.eO,0,0);d.b6=AUP;d.gO=(-1);SC(d.b$);c=c+(-1)|0;}}}
function FE(a){return a.cp.k<=0?0:1;}
function PK(){var a=this;B.call(a);a.d$=null;a.jY=0.0;a.gW=0.0;a.fY=0;}
function Wb(a){return a.d$.P.b;}
function St(a){return a.d$.P.a;}
function ABU(a,b,c){var d,e,f;if(a.fY){d=a.d$;e=c.a;f=c.b;c=d.bI;Bz(b,c.a+e|0,c.b+f|0,d.P,d.cv);}}
function Kw(){var a=this;B.call(a);a.lV=null;a.v3=null;a.wb=0.0;a.oS=0;a.wj=0;a.wJ=0;a.qU=0;a.xp=0;a.eW=0.0;a.en=0.0;a.v_=0.0;a.lG=0.0;a.wg=0;a.mV=null;}
function Fw(a){return DE(a.eW+a.en);}
function PV(a,b){return DE((a.eW+a.en)*b);}
function ACO(){var a=this;B.call(a);a.bO=null;a.bw=null;a.c2=0;}
function AE0(){var a=new ACO();APx(a);return a;}
function Ph(a){var b=new ACO();AKX(b,a);return b;}
function APx(a){a.bO=new GC;a.bw=new GC;}
function AKX(a,b){var c;c=new GC;a.bO=c;a.bw=new GC;Tv(c,b.bO);Tv(a.bw,b.bw);a.c2=b.c2;}
function K0(a,b,c){BX(a.bw,b,c);if(!a.c2)BX(a.bO,b,c);}
function PH(a,b){BX(a.bO,b,0);BX(a.bw,b+1|0,0);}
function Dy(a){if(Rg(a.bO,a.bw)>0)return a.bw;return a.bO;}
function Fa(a){if(Rg(a.bO,a.bw)<0)return a.bw;return a.bO;}
function ABj(a,b){var c,d,e,f;c=Dy(a);d=Fa(a);e=c.K;if(e<=b){f=BB(b,d.K);if(f<=0)return Cp(b<=e?c.Y:0,f>=0?d.Y:(-1));}return null;}
function C2(a){var b,c;b=a.bO;c=a.bw;return (b===c?1:c!==null&&By(b)===By(c)?(b.K==c.K&&b.Y==c.Y?1:0):0)?0:1;}
function ACl(a,b){var c,d;if(!C2(a))return 0;c=Dy(a);d=Fa(a);return c.K<=b&&b<d.K?1:0;}
function Tk(){var a=this;B.call(a);a.ex=null;a.er=0;a.da=0;}
function UJ(a,b){var c,d,e;c=a.er;d=a.ex;if(c==d.data.length)a.ex=C1(d,c+16|0);d=a.ex.data;e=a.er;a.er=e+1|0;d[e]=b;}
function Ri(a){var b,c,d;b=a.da;c=a.er-1|0;if(b==c)a.da=b-1|0;d=a.ex.data;a.er=c;d[c]=null;}
function Eo(){var a=this;B.call(a);a.bU=0;a.bS=null;a.eB=null;a.dG=0;a.c_=0;}
var AUQ=0;var AUR=0;var ATv=0;function Yy(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bS;j=i===b&&!i.hN?0:1;if(j){a.bS=b;JY(b,e.c0,d);}i=a.bS;k=i===null?0:Ez(i)<g?Ia(Ez(a.bS),1024):Ia(g,1024)+1|0;l=k<=a.dG?0:1;if(l)a.dG=k;if(!(!j&&!l)){if(AUQ){m=b.fv;$rt_globals.console.info("fMeasure"+m.data);AUQ=0;}if(!ATv){i=c.de;b="alphabetic";i.textBaseline=b;}else{b=c.de;i="top";b.textBaseline=i;}a.c_=h/1024|0;while(true){i=a.eB;if(i.k>=a.dG)break;Bv(i,GW(e));}k=0;while(k<a.dG){H_(a,c,f,d,a.c_+k|0);k=k+1|0;}a.bS.hN=0;}if(!De(a.eB)
&&h<=Ez(a.bS)){k=h/1024|0;g=a.c_;if(k!=g){g=k-g|0;if(g<0)g= -g|0;if(g>=a.dG){g=0;while(g<a.dG){H_(a,c,f,d,k+g|0);g=g+1|0;}a.c_=k;}else{while(true){h=a.c_;if(h>=k)break;H_(a,c,f,d,h+a.dG|0);a.c_=a.c_+1|0;}while(true){h=a.c_;if(h<=k)break;H_(a,c,f,d,h-1|0);a.c_=a.c_-1|0;}}}}}
function Kb(b,c){return (c-Fw(b)|0)/2|0;}
function MF(b,c){return Kb(b,c)+b.qU|0;}
function H_(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Fu(b);f=a.bS.fv;g=e*1024|0;h=Pa(a,g);if(h>=a.bS.l.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bU;a:{while(true){l=a.bS;if(h>=l.l.data.length)break a;l=Ky(l,h);m=!ATv?MF(d.data[l.bY],c):Kb(d.data[l.bY],c);n=d.data;o=f.data;CK(b,n[l.bY]);Et(b,l.r,k,m);k=o[h]-j+a.bU;if(k>1024.0)break;h=h+1|0;}}Ev(Bq(a.eB,e%a.dG|0),b);}
function ABT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(De(a.eB))return;if(!a.dG)return;if(j>Ez(a.bS))return;r=a.bS;s=r.eh;t=r.l;u=j/1024|0;v=Pa(a,j);w= -a.bU|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Bq(a.eB,u%a.dG|0);bc=y[v];bd=bb[v]+a.bU|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Bb(bh,bd)-j|0;if(bf&&ba)bi=bi+a.bU|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:{if
(!bj){bk=!ba?a.bU:2*a.bU|0;z=l.a;bl=l.b;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.bU:2*a.bU|0;if(j>=l.a&&(j+bi|0)<=(l.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.bZ.hZ;if(bc===m)bo=k.bZ.n5;bp=BI(n);d:{while(BJ(bp)){if(BN(BL(bp),bc)){bj=1;break d;}}bj=0;}if(bj)bo=k.bZ.vu;if(q!==null){y=q.kY;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=Xi(k.dw,k,z,q.fO);}if(!bn&&!bl){l.b=Bb(l.b,Ez(a.bS));bk=j>=l.a?bi:(Bb(bd,bh)-l.a|0)-(!ba?a.bU:0)|0;bh=(j+bi|0)<=(l.b
+(!ba?a.bU:2*a.bU|0)|0)?0:(Bb(bd,bh)-l.b|0)-(!ba?a.bU:0)|0;bm=j-be|0;bl=w+c|0;bq=bm;bj=bi-bk|0;Ck(e,bq,0.0,bj,x);Bd(f,bj,i);Hq(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;Ck(e,bj-bh|0,0.0,bh,x);Bd(f,bh,i);z=bl+bi|0;Hq(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);br=bj-bk|0;bj=bk-bh|0;Ck(e,br,0.0,bj,x);Bd(f,bj,i);Hq(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{Ck(e,j-be|0,0.0,bi,x);Bd(f,bi,i);Hq(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u=bg;}v=v+1|0;}}}
function Hq(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.a&&e.b){if(f.b7!==0.0&&f.bl!==0.0){m=j.si.data[g.cq];if(k)n=j.bZ.lZ;else{g=m.nT;if(g===null)g=j.bZ.fm;if(l===null)l=BT(g);n=l;}g=m.nV;if(AUR)i=0.0;Es(b,c,d,e,f,h,g,n,i);return;}return;}}
function Pa(a,b){var c,d,e,f,g,h,i;c=a.bS;d=c.fv;e=0;f=c.l.data.length;g=b;b=BB(e,f);if(b>0){c=new Bu;X(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BB(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function WO(a){a.bS=null;DW(a.eB,new Vp);FK(a.eB);}
function YJ(a,b,c,d,e,f,g,h,i){var j,k;j=Ez(a.bS);if(j)j=j+a.bU|0;if(!j)j=j-a.bU|0;k=Z( -a.bU|0,j-g|0);if(k>=h)return;Bd(f,h-k|0,e);Bz(b,c+k|0,d,f,i);}
function Zm(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=P(Eo,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=BG(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bS===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new Eo;f.bU=3;f.eB=BC();f.c_=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)WO(o);h=h+1|0;}return g;}
function AAO(){ATv=0;}
function ADf(){var a=this;B.call(a);a.e2=null;a.cR=null;a.d1=null;a.em=null;a.hI=null;a.hJ=null;}
function Uq(){var a=new ADf();AIT(a);return a;}
function AIT(a){a.e2=new Bk;a.cR=new Bk;a.d1=new Bk;a.em=new Bk;a.hI=new B5;a.hJ=new B5;}
function QQ(a){var b;b=a.cR;return !T(b.a,b.b)?0:1;}
function Hk(a,b){return FN(b,a.d1,a.em);}
function HR(a,b,c,d){var e,f,g,h,i;e=Hk(a,b);f=FN(b,a.e2,a.cR);if(!e&&!f)return null;if(!f){if(!d)c.i(Vz(a,b.a-a.d1.a|0));else c.i(PF(a,b.b-a.d1.b|0));}g=!d?a.e2.a+(a.cR.a/2|0)|0:a.e2.b+(a.cR.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new RJ;b.uL=a;b.uM=c;b.uK=i;}else{b=new RI;b.ot=a;b.or=c;b.os=i;}return b;}
function Gy(a,b,c){if(b!==null&&c!==null){CC(a.hI,c);CC(a.hJ,b);return;}}
function Zr(b,c){var d;d=new Tp;d.qX=b;d.vC=c;return d;}
function PF(a,b){var c,d,e;c=a.em.b;d=a.cR.b;e=c-d|0;return Zr(Bb(Z(0,b-(d/2|0)|0),e),e);}
function Vz(a,b){var c,d,e;c=a.em.a;d=a.cR.a;e=c-d|0;return Zr(Bb(Z(0,b-(d/2|0)|0),e),e);}
function WF(a,b,c,d,e,f,g){VU(a,b,c,d,e,f,g,1);}
function QA(a,b,c,d,e,f,g){VU(a,b,c,d,e,f,g,0);}
function VU(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){Bd(a.em,0,0);Bd(a.cR,0,0);}else{i=Bb(g*3|0,d);j=Z(PZ(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PZ(b,i,e):0;if(!h){k=a.e2;k.a=i+c|0;k.b=f-g|0;l=a.cR;l.a=j;l.b=g;l=a.d1;l.a=c;l.b=k.b;k=a.em;k.a=d;k.b=g;}else{k=a.e2;k.a=f-g|0;k.b=i+c|0;l=a.cR;l.a=g;l.b=j;l=a.d1;l.a=k.a;l.b=c;k=a.em;k.a=g;k.b=d;}}}
function HB(a,b){var c;c=a.d1;Bz(b,c.a,c.b,a.em,a.hI);}
function HM(a,b){var c,d;c=a.cR;c.a=c.a-2|0;c.b=c.b-2|0;d=a.e2;Bz(b,d.a+1|0,d.b+1|0,c,a.hJ);b=a.cR;b.a=b.a+2|0;b.b=b.b+2|0;}
function H6(a,b,c){return Hk(a,b)&&Fz(c)?1:0;}
function Y9(){var a=this;B.call(a);a.w5=20;a.fj=null;a.eE=null;a.h6=null;a.lC=0;a.iM=0;a.ig=0.0;a.ct=null;a.jB=null;a.el=null;a.fq=null;a.fo=0;}
function AOW(){var a=new Y9();APe(a);return a;}
function APe(a){a.w5=20;a.fj=new Bk;a.eE=new Bk;a.ct=BC();a.jB=En(0);}
function K4(a,b){if(b===null)b=En(0);a.jB=b;}
function ABO(a,b,c,d,e){var f,g,h,i,j,k;f=c/20|0;g=a.ct;h=Bq(g,f%g.k|0);i=a.fj;j=T(a.ct.k,a.iM);f=h.eC.b;k=((h.je.b-(b%j|0)|0)+j|0)%j|0;if((k+f|0)>j)k= -(b%K9(h.bf)|0)|0;b=c%h.dH|0;f=h.J;k=k+T(b,f)|0;if(k<( -f|0))k=k+j|0;Bd(h.du,h.eC.a,f);g=h.ef;b=c%h.dH|0;c=h.J;Ck(g,0.0,T(b,c),h.eC.a,c);Eq(h,e,k,i,d.n6,d.mw);}
function Ss(a,b,c,d){var e,f,g,h,i,j;e=a.ct.k;while(true){f=a.ct.k;g=T(f,a.iM);if(g>(d+a.lC|0))break;h=Cp(0,g);i=new PN;g=a.eE.a;f=a.lC;j=a.h6;i.du=new Bk;i.ef=new B5;i.je=h;i.dH=20;i.J=f;i.eC=Cp(g,20*f|0);i.go=MF(j,f);if(i.bf===null)i.bf=GW(b);Bv(a.ct,i);}if(f==e)return;Rb(a,c);}
function Rb(a,b){var c,d,e,f,g,h,i,j;c=a.ct;d=c.k;e=T((b/(d*20|0)|0)+1|0,d)*20|0;c=BI(c);while(BJ(c)){f=BL(c);g=a.el;h=a.ig;Fu(g);i=0;while(true){j=f.dH;if(i>=j)break;j=e-T(d,j)|0;if(j<b)j=e;e=j+1|0;FU(f,g,D5(e),T(f.J,i)+f.go|0,h);i=i+1|0;}Ev(f.bf,g);}}
function OX(a){DW(a.ct,new Mh);FK(a.ct);a.el=Cy(a.el,null);a.fq=Cy(a.fq,null);}
function NE(){B.call(this);this.so=null;}
function Lf(a,b){Cn(a.so,b);}
function ND(){B.call(this);this.mt=null;}
function AEZ(a,b){var c;c=a.mt;DQ(c,Ha(b,FQ(c)));}
function NC(){B.call(this);this.qw=null;}
function AEf(a,b){var c;c=a.qw;Id(c,Ha(b,Sz(c)));}
function NB(){B.call(this);this.tU=null;}
function AEe(a){var b,c;b=a.tU;c=b.hC?0:1;b.hC=c;b=new R;U(b);G4(L(b,C(207)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NI(){B.call(this);this.nU=null;}
function AHy(a){var b,c;b=a.nU;c=b.hL?0:1;b.hL=c;b=new R;U(b);G4(L(b,C(208)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NH(){B.call(this);this.rS=null;}
function AP4(a){var b,c;b=a.rS;c=b.jh^1;b.jh=c;b=new R;U(b);G4(L(b,C(209)),c);$rt_globals.console.info($rt_ustr(S(b)));}
function NG(){B.call(this);this.vA=null;}
function AJP(a){var b,c,d,e,f;b=a.vA;c=(b.dJ+3|0)%6|0;b.dJ=c;d=b.gr.data;e=d.length;f=0;while(f<e){b=d[f];b.bU=c;b=b.bS;if(b!==null)b.hN=1;f=f+1|0;}}
function NF(){B.call(this);this.nD=null;}
function ALZ(a){var b;b=a.nD;b.bB=b.bB?0:1;OX(b.cV);b.cV=AOW();Sf(b,b.V,b.ch,b.cn.b2);}
function NA(){B.call(this);this.q5=null;}
function APs(a){var b;b=a.q5;b.iG=b.iG?0:1;}
var E7=F(B_);
var ATt=null;var AUS=null;var ATu=null;var AUT=null;function AEb(){AEb=Bi(E7);AKP();}
function AA3(a,b){var c=new E7();AAM(c,a,b);return c;}
function AAM(a,b,c){AEb();CS(a,b,c);}
function AKP(){var b;ATt=AA3(C(210),0);AUS=AA3(C(211),1);b=AA3(C(212),2);ATu=b;AUT=G(E7,[ATt,AUS,b]);}
var Jx=F(Kz);
function Q1(){var a=this;Jx.call(a);a.x9=0;a.tV=0;a.qC=null;}
function Kg(){var a=this;B.call(a);a.vY=null;a.pz=null;a.w_=0.0;a.mg=0.0;a.ln=null;a.kG=null;a.im=0;}
function Lg(){var a=this;B.call(a);a.ho=0;a.nM=0;}
var AUB=null;var AUA=null;function Yh(a,b){var c=new Lg();YT(c,a,b);return c;}
function YT(a,b,c){a.ho=b;a.nM=c;}
function Lv(a){return a.ho!=1?0:1;}
function V1(a){return a.ho!=3?0:1;}
function KO(b){return Yh(2,b);}
function Zg(){AUB=Yh(0,0);AUA=Yh(1,0);}
function GL(){var a=this;B.call(a);a.bE=0;a.cj=0;a.cU=0;a.iC=0;}
function AUU(a,b,c,d){var e=new GL();Tl(e,a,b,c,d);return e;}
function Tl(a,b,c,d,e){a.bE=d;a.cj=b;a.cU=c;a.iC=e;}
function O4(){var a=this;GL.call(a);a.d6=null;a.bK=0;a.sV=0;a.w4=0;a.jQ=0;}
var ACm=F();
function Vj(b,c){return (b+(c/2|0)|0)/c|0;}
function PZ(b,c,d){if(b<(2147483647/c|0))return Vj(T(b,c),d);return 0.5+c*b/d|0;}
function Ia(b,c){return ((b+c|0)-1|0)/c|0;}
function Iw(b){return b+0.5|0;}
function DE(b){return b+0.5|0;}
function Ft(b,c,d){return Z(b,Bb(c,d));}
function L$(){var a=this;GL.call(a);a.n=null;a.vQ=null;}
var Ta=F(0);
function Ns(){var a=this;B.call(a);a.uC=null;a.uE=null;}
function AJB(a,b){var c,d;c=a.uC;d=a.uE;$rt_globals.console.info("paste plain string "+b);c.i(Ch(b));CZ(d);}
function TQ(){B.call(this);this.ve=null;}
function ANY(a,b){a.ve.clipboardData.setData("text/plain",$rt_ustr(b));}
var L6=F(0);
function Fz(a){return DD(a,null);}
function P$(){B.call(this);this.rl=null;}
function AIs(a){I2(a.rl);}
function P8(){B.call(this);this.va=null;}
function ADW(a){JA(a.va);}
var W0=F(0);
var AUK=null;function ACs(){AUK=new Nt;}
function GC(){var a=this;B.call(a);a.K=0;a.Y=0;}
function BX(a,b,c){a.K=b;a.Y=c;}
function Tv(a,b){a.K=b.K;a.Y=b.Y;}
function Rg(a,b){var c;c=BB(a.K,b.K);if(c)return c;return BB(a.Y,b.Y);}
function Kn(){var a=this;B.call(a);a.kP=null;a.jC=null;}
function Li(a){return a.kP.be;}
function I7(a){return a.kP.bi;}
function V3(){var a=this;Jm.call(a);a.wV=0;a.mK=0;}
function Rp(){B.call(this);this.t6=null;}
function DD(a,b){HD(a.t6,b);return 1;}
var Nt=F();
function APt(a){}
function JN(){B.call(this);this.xc=null;}
var AUw=null;var AUV=null;function AIU(){AIU=Bi(JN);APT();}
function AGS(a){var b=new JN();Xs(b,a);return b;}
function Xs(a,b){AIU();a.xc=b;}
function APT(){AUw=AGS(C(213));AUV=AGS(C(214));}
var U7=F(0);
function Sc(){B.call(this);this.iQ=null;}
function Ed(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iQ));}
function Ds(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iQ));}
function AGk(a){var b,c;b=a.iQ.byteLength;c=new R;U(c);L(Bj(L(c,C(215)),b),C(216));return S(c);}
function HK(){var a=this;B.call(a);a.bZ=null;a.S=null;a.si=null;a.gA=null;a.dw=null;a.tE=null;a.up=null;a.u5=null;}
function AUW(a,b,c,d,e){var f=new HK();Iz(f,a,b,c,d,e);return f;}
function Iz(a,b,c,d,e,f){var g;g=c.data;a.tE=ZX(C(217),16.0);a.up=ZX(C(217),17.0);a.u5=ZX(C(61),15.0);a.bZ=b;a.si=c;a.gA=d;if(g.length>=15){a.S=e;a.dw=f;return;}b=new Bu;X(b);K(b);}
function Uk(){var a=this;B.call(a);a.rN=null;a.rP=null;}
function Kc(){var a=this;Kg.call(a);a.oW=null;a.nE=null;}
function X9(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.oW;e=0;f=0;g=a.nE;a:{b:{while(true){if((e+32|0)>f&&Fn(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=EH(b)+j|0;h=i.length;f=Bb(k,h);e=f-j|0;if(j<0)break b;if(j>h)break b;k=j+e|0;if(k>h){l=new BS;b=new R;U(b);Bj(L(Bj(L(b,C(218)),k),C(196)),h);Bm(l,S(b));K(l);}if(EH(b)<e)break;if(e<0){b=new BS;c=new R;U(c);L(Bj(L(c,C(197)),e),C(198));Bm(b,S(c));K(b);}h=b.cx;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.qC.data[n+b.tV|0];m=m+1|0;j=o;n=k;}b.cx
=h+e|0;e=0;}if(!Fn(c)){l=!Fn(b)&&e>=f?AUB:AUA;break a;}i=g.data;k=Bb(EH(c),i.length);p=new Nr;p.my=b;p.pH=c;l=AAz(a,d,e,f,g,0,k,p);e=p.tz;j=p.u9;if(l===null){if(!Fn(b)&&e>=f)l=AUB;else if(!Fn(c)&&e>=f)l=AUA;}V4(c,g,0,j);if(l!==null)break a;}b=new Vm;X(b);K(b);}p=new BS;l=new R;U(l);BV(Bj(L(Bj(L(l,C(199)),j),C(194)),h),41);Bm(p,S(l));K(p);}RS(b,b.cx-(f-e|0)|0);return l;}
var Ps=F(Kc);
function AAz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Le(h,2))break a;i=AUA;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Wo(l)){if((f+3|0)>g){j=j+(-1)|0;if(Le(h,3))break a;i=AUA;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Cr(l)){i=KO(1);break a;}if
(j>=d){if(Fn(h.my))break a;i=AUB;break a;}c=j+1|0;m=k[j];if(!CN(m)){j=c+(-2)|0;i=KO(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Le(h,4))break a;i=AUA;break a;}k=e.data;o=Ec(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tz=j;h.u9=f;return i;}
var Tj=F(DN);
function H9(){var a=this;B.call(a);a.vr=null;a.fm=null;a.sC=null;a.w8=null;a.pS=null;a.lZ=null;a.n5=null;a.vu=null;a.kK=null;a.kA=null;a.hZ=null;}
function AUX(a,b,c,d,e,f,g,h,i,j,k){var l=new H9();LU(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function LU(a,b,c,d,e,f,g,h,i,j,k,l){a.vr=b;a.fm=c;a.sC=d;a.w8=e;a.pS=f;a.lZ=g;a.n5=h;a.vu=i;a.kK=j;a.kA=k;a.hZ=l;}
var Yk=F(0);
function XF(){var a=this;B.call(a);a.eZ=null;a.gw=null;a.n6=null;a.mw=null;}
function ABx(a,b,c,d){var e=new XF();APy(e,a,b,c,d);return e;}
function APy(a,b,c,d,e){a.eZ=b;a.gw=c;a.n6=d;a.mw=e;}
var AAS=F(0);
function AC6(){var b,c;b=new In;c=O(C(219));AKx();JI(b,c,AUY,AUZ);return b;}
function ACw(){var b,c;b=new In;c=O(C(109));AEl();JI(b,c,AU0,AU1);return b;}
function ACX(){var b,c;b=new In;ACi();c=AU2;AEz();JI(b,c,AU3,AU4);return b;}
function ADo(){var a=this;B.call(a);a.qV=null;a.mc=null;a.s3=null;a.mJ=null;}
function XH(a,b,c,d){var e=new ADo();AES(e,a,b,c,d);return e;}
function AES(a,b,c,d,e){a.qV=b;a.mc=c;a.s3=d;a.mJ=e;}
function Xi(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dw.mc;break a;case 3:if(c!=3){b=b.dw.mJ;break a;}b=b.dw.s3;break a;default:b=b.bZ.fm;break a;}b=b.dw.qV;}return b;}
function HX(a,b,c){return Xi(a,b,0,c);}
function LZ(){var a=this;B.call(a);a.iI=null;a.ih=null;}
function Mc(a,b){var c;c=a.ih;a.ih=b;return c;}
function IX(){var a=this;LZ.call(a);a.bJ=null;a.bV=null;a.fp=0;a.fz=0;}
function Jc(a){var b;b=Kj(a);if(b==2){if(Kj(a.bV)<0)a.bV=MU(a.bV);return OR(a);}if(b!=(-2))return a;if(Kj(a.bJ)>0)a.bJ=OR(a.bJ);return MU(a);}
function Kj(a){var b,c;b=a.bV;c=b===null?0:b.fp;b=a.bJ;return c-(b===null?0:b.fp)|0;}
function MU(a){var b;b=a.bJ;a.bJ=b.bV;b.bV=a;D4(a);D4(b);return b;}
function OR(a){var b;b=a.bV;a.bV=b.bJ;b.bJ=a;D4(a);D4(b);return b;}
function D4(a){var b,c,d;b=a.bV;c=b===null?0:b.fp;b=a.bJ;d=b===null?0:b.fp;a.fp=Z(c,d)+1|0;a.fz=1;b=a.bJ;if(b!==null)a.fz=1+b.fz|0;b=a.bV;if(b!==null)a.fz=a.fz+b.fz|0;}
function Ij(){var a=this;B5.call(a);a.gf=0;a.gi=0;a.gg=0;a.gh=0;}
function HF(a){var b=new Ij();APC(b,a);return b;}
function Di(a,b,c){var d=new Ij();AGC(d,a,b,c);return d;}
function O(a){var b=new Ij();ANx(b,a);return b;}
function E$(a,b,c,d){var e=new Ij();QJ(e,a,b,c,d);return e;}
function BE(a){var b=new Ij();Jk(b,a);return b;}
function APC(a,b){QJ(a,b,b,b,255);}
function AGC(a,b,c,d){QJ(a,b,c,d,255);}
function ANx(a,b){if(!(H(b)!=4&&H(b)!=7&&H(b)!=9)&&I(b,0)==35){if(H(b)==4){a.gf=Ip(I(b,1))*17|0;a.gi=Ip(I(b,2))*17|0;a.gg=Ip(I(b,3))*17|0;a.gh=255;}else{a.gf=K7(I(b,1),I(b,2));a.gi=K7(I(b,3),I(b,4));a.gg=K7(I(b,5),I(b,6));a.gh=H(b)!=9?255:K7(I(b,7),I(b,8));}Jr(a.gf,a.gi,a.gg,a.gh,a);return;}}
function QJ(a,b,c,d,e){a.gf=b;a.gi=c;a.gg=d;a.gh=e;Jr(b,c,d,e,a);}
function Jk(a,b){a.gf=b.gf;a.gi=b.gi;a.gg=b.gg;a.gh=b.gh;CC(a,b);}
function Ip(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function K7(b,c){return (16*Ip(b)|0)+Ip(c)|0;}
var CH=F(0);
var AT7=null;var AU2=null;var AT9=null;var AT8=null;var AT_=null;var AT$=null;var AUb=null;var AUa=null;var AUd=null;var AUc=null;var AUe=null;function ACi(){ACi=Bi(CH);APa();}
function APa(){AT7=HF(0);AU2=Di(0,0,0);AT9=O(C(220));AT8=Di(255,255,255);AT_=Di(166,214,255);AT$=O(C(221));AUb=O(C(222));AUa=O(C(223));AUd=E$(205,205,205,153);AUc=E$(255,255,255,0);AUe=O(C(123));}
function B$(){B_.call(this);this.kH=null;}
var AU5=null;var AU6=null;var AU7=null;var AU8=null;var AU9=null;var AU$=null;var AU_=null;var AVa=null;var AVb=null;var AVc=null;var AVd=null;var AVe=null;var AVf=null;var AVg=null;var AVh=null;var AUf=null;function ABt(){ABt=Bi(B$);APu();}
function Dd(a,b,c){var d=new B$();QS(d,a,b,c);return d;}
function APm(a,b,c,d){var e=new B$();Yp(e,a,b,c,d);return e;}
function QS(a,b,c,d){ABt();CS(a,b,c);a.kH=Hx(d,null);}
function Yp(a,b,c,d,e){ABt();CS(a,b,c);a.kH=Hx(d,e);}
function APu(){var b;b=new B$;ACi();QS(b,C(224),0,AU2);AU5=b;AU6=Dd(C(225),1,Di(0,49,191));AU7=Dd(C(226),2,O(C(227)));AU8=Dd(C(39),3,O(C(228)));AU9=Dd(C(229),4,AU2);AU$=Dd(C(230),5,O(C(231)));AU_=Dd(C(232),6,O(C(233)));AVa=Dd(C(40),7,O(C(234)));AVb=Dd(C(235),8,O(C(236)));AVc=APm(C(237),9,AU2,Di(237,235,252));AVd=APm(C(238),10,O(C(239)),O(C(240)));AVe=Dd(C(241),11,O(C(233)));AVf=Dd(C(242),12,O(C(243)));AVg=Dd(C(244),13,O(C(245)));b=Dd(C(246),14,O(C(247)));AVh=b;AUf=G(B$,[AU5,AU6,AU7,AU8,AU9,AU$,AU_,AVa,AVb,AVc,
AVd,AVe,AVf,AVg,b]);}
function Ir(){var a=this;B.call(a);a.nV=null;a.nT=null;}
function Hx(a,b){var c=new Ir();AKE(c,a,b);return c;}
function AKE(a,b,c){a.nV=b;a.nT=c;}
function HP(){var a=this;B.call(a);a.io=null;a.hD=null;a.u2=null;a.uO=null;a.bd=null;a.ou=null;a.nl=null;}
function AVi(a,b,c,d,e,f,g){var h=new HP();K8(h,a,b,c,d,e,f,g);return h;}
function K8(a,b,c,d,e,f,g,h){a.u2=b;a.uO=c;a.hD=d;a.bd=e;a.io=f;a.ou=g;a.nl=h;}
function AAI(){var a=this;B.call(a);a.lv=null;a.ql=0;}
function Xr(a,b){var c=new AAI();ANu(c,a,b);return c;}
function ANu(a,b,c){var d;d=new B5;a.lv=d;a.ql=b;d.b7=c;}
function Pb(a,b){return Co(a.ql,b);}
var Dc=F(0);
var AUj=null;var AUk=null;var AUg=null;var AUh=null;var AUi=null;var AU3=null;var AU4=null;var AUl=null;var AUm=null;function AEz(){AEz=Bi(Dc);AGF();}
function AGF(){AUj=O(C(121));AUk=O(C(248));AUg=O(C(249));AUh=O(C(250));AUi=O(C(251));AU3=O(C(121));AU4=O(C(248));AUl=E$(205,205,205,153);AUm=Di(247,248,250);}
function Y5(){var a=this;B.call(a);a.jd=null;a.hE=0.0;}
function ZX(a,b){var c=new Y5();ALM(c,a,b);return c;}
function ALM(a,b,c){a.jd=b;a.hE=c;}
function ANn(a,b){if(a===b)return 1;if(b!==null&&By(a)===By(b)){b=b;return a.hE===b.hE&&BN(a.jd,b.jd)?1:0;}return 0;}
var CI=F(0);
var ATx=null;var AVj=null;var ATz=null;var ATy=null;var ATB=null;var ATA=null;var ATD=null;var ATC=null;var ATF=null;var ATE=null;var ATG=null;function ACB(){ACB=Bi(CI);APP();}
function APP(){ATx=HF(187);AVj=O(C(252));ATz=HF(55);ATy=HF(43);ATB=Di(33,66,131);ATA=Di(60,63,65);ATD=O(C(253));ATC=O(C(254));ATF=E$(85,85,85,128);ATE=E$(43,43,43,0);ATG=O(C(106));}
function B7(){B_.call(this);this.ls=null;}
var AVk=null;var AVl=null;var AVm=null;var AVn=null;var AVo=null;var AVp=null;var AVq=null;var AVr=null;var AVs=null;var AVt=null;var AVu=null;var AVv=null;var AVw=null;var AVx=null;var AVy=null;var ATH=null;function Za(){Za=Bi(B7);AIX();}
function Dv(a,b,c){var d=new B7();SN(d,a,b,c);return d;}
function ANy(a,b,c,d){var e=new B7();ACL(e,a,b,c,d);return e;}
function SN(a,b,c,d){Za();CS(a,b,c);a.ls=Hx(d,null);}
function ACL(a,b,c,d,e){Za();CS(a,b,c);a.ls=Hx(d,e);}
function AIX(){var b;b=new B7;ACB();SN(b,C(224),0,AVj);AVk=b;AVl=Dv(C(225),1,O(C(255)));AVm=Dv(C(226),2,O(C(256)));AVn=Dv(C(39),3,O(C(257)));AVo=Dv(C(229),4,O(C(255)));AVp=Dv(C(230),5,Di(188,63,60));AVq=Dv(C(232),6,O(C(258)));AVr=Dv(C(40),7,O(C(259)));AVs=Dv(C(235),8,O(C(260)));AVt=ANy(C(237),9,AVj,Di(52,65,52));AVu=ANy(C(238),10,O(C(239)),O(C(261)));AVv=Dv(C(241),11,O(C(233)));AVw=Dv(C(242),12,O(C(243)));AVx=Dv(C(244),13,AVj);b=Dv(C(246),14,O(C(247)));AVy=b;ATH=G(B7,[AVk,AVl,AVm,AVn,AVo,AVp,AVq,AVr,AVs,AVt,
AVu,AVv,AVw,AVx,b]);}
var Dq=F(0);
var ATL=null;var ATM=null;var ATI=null;var ATJ=null;var ATK=null;var AUY=null;var AUZ=null;var ATN=null;var ATO=null;function AKx(){AKx=Bi(Dq);ALn();}
function ALn(){ATL=O(C(262));ATM=O(C(263));ATI=O(C(219));ATJ=O(C(264));ATK=O(C(252));AUY=O(C(262));AUZ=O(C(263));ATN=E$(118,121,122,128);ATO=Di(63,66,68);}
var CQ=F(0);
var ATP=null;var AVz=null;var ATR=null;var ATQ=null;var ATT=null;var ATS=null;var ATV=null;var ATU=null;var ATX=null;var ATW=null;var ATY=null;function AHk(){AHk=Bi(CQ);ANW();}
function ANW(){ATP=HF(206);AVz=O(C(265));ATR=O(C(266));ATQ=O(C(115));ATT=O(C(267));ATS=O(C(268));ATV=O(C(269));ATU=O(C(270));ATX=E$(107,106,107,128);ATW=E$(30,31,34,0);ATY=O(C(117));}
function B4(){B_.call(this);this.jK=null;}
var AVA=null;var AVB=null;var AVC=null;var AVD=null;var AVE=null;var AVF=null;var AVG=null;var AVH=null;var AVI=null;var AVJ=null;var AVK=null;var AVL=null;var AVM=null;var AVN=null;var AVO=null;var ATZ=null;function ABZ(){ABZ=Bi(B4);AJN();}
function Dw(a,b,c){var d=new B4();Rr(d,a,b,c);return d;}
function AQR(a,b,c,d){var e=new B4();Wc(e,a,b,c,d);return e;}
function Rr(a,b,c,d){ABZ();CS(a,b,c);a.jK=Hx(d,null);}
function Wc(a,b,c,d,e){ABZ();CS(a,b,c);a.jK=Hx(d,e);}
function AJN(){var b,c;b=new B4;AHk();Rr(b,C(224),0,AVz);AVA=b;AVB=Dw(C(225),1,O(C(271)));AVC=Dw(C(226),2,O(C(272)));AVD=Dw(C(39),3,O(C(273)));AVE=Dw(C(229),4,AVz);AVF=Dw(C(230),5,O(C(274)));AVG=Dw(C(232),6,O(C(275)));AVH=Dw(C(40),7,O(C(276)));AVI=Dw(C(235),8,O(C(277)));c=new B4;ACB();Wc(c,C(237),9,AVj,O(C(269)));AVJ=c;AVK=AQR(C(238),10,AVj,O(C(118)));AVL=Dw(C(241),11,O(C(278)));AVM=Dw(C(242),12,O(C(279)));AVN=Dw(C(244),13,AVz);b=Dw(C(246),14,O(C(247)));AVO=b;ATZ=G(B4,[AVA,AVB,AVC,AVD,AVE,AVF,AVG,AVH,AVI,AVJ,
AVK,AVL,AVM,AVN,b]);}
var Dk=F(0);
var AT3=null;var AT4=null;var AT0=null;var AT1=null;var AT2=null;var AU0=null;var AU1=null;var AT5=null;var AT6=null;function AEl(){AEl=Bi(Dk);ALW();}
function ALW(){AT3=O(C(268));AT4=O(C(280));AT0=O(C(109));AT1=O(C(275));AT2=O(C(265));AU0=O(C(268));AU1=O(C(281));AT5=O(C(282));AT6=Di(43,45,48);}
function H0(){var a=this;B.call(a);a.r8=null;a.ne=null;a.oi=null;a.sX=null;a.pL=null;a.hT=null;}
function AVP(a,b,c,d,e,f){var g=new H0();LY(g,a,b,c,d,e,f);return g;}
function LY(a,b,c,d,e,f,g){a.r8=b;a.ne=c;a.oi=d;a.sX=e;a.pL=f;a.hT=g;}
function In(){var a=this;B.call(a);a.j5=null;a.g$=null;a.sS=null;}
function AVQ(a,b,c){var d=new In();JI(d,a,b,c);return d;}
function JI(a,b,c,d){a.j5=b;a.g$=c;a.sS=d;}
function Yt(){var a=this;B.call(a);a.kN=null;a.rL=null;a.ua=null;}
function ADe(a,b,c){var d=new Yt();AOE(d,a,b,c);return d;}
function AOE(a,b,c,d){a.kN=b;a.rL=c;a.ua=d;}
function HG(){var a=this;B.call(a);a.fO=0;a.kY=null;}
function Up(){var a=this;B.call(a);a.xT=null;a.us=null;a.fJ=null;}
function FI(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.fJ.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bb(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hm:i.hn;k=!c?i.lR:i.lS;if(j<=k&&k<(j+k|0))return h;j=BB(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function Ln(){var a=this;B.call(a);a.hn=0;a.lS=0;a.hm=0;a.lR=0;a.jV=0;}
var Yj=F();
function Co(b,c){return DE(b*c);}
var Zw=F();
function Se(){B.call(this);this.qO=null;}
function AM2(a,b){HO(a.qO,b);}
var Vp=F();
function AK4(a,b){ABz(b);}
function IV(){var a=this;B.call(a);a.ev=null;a.eY=null;a.fs=null;}
var AUn=0;function ABz(a){var b;b=a.eY;if(b!==null){AUn=AUn-1|0;a.ev.dU.deleteTexture(b);a.eY=null;}}
function Cg(a){return a.fs.a;}
function K9(a){return a.fs.b;}
function SJ(a,b,c,d){var e;e=a.fs;e.a=b;e.b=c;Ly(a);a.ev.dU.texStorage2D(3553,1,d,b,c);e=a.ev.dU;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Ly(a){var b,c;b=a.ev.dU;c=a.eY;b.bindTexture(3553,c);}
function Ev(a,b){var c,d,e,f,g,h;a:{c=b.lp;d=b.kD;e=a.fs;f=e.a;if(f){g=e.b;if(g){if(f==c&&g==d?1:0){Ly(a);break a;}e=a.ev.dU;h=a.eY;e.deleteTexture(h);a.eY=a.ev.dU.createTexture();SJ(a,c,d,32856);break a;}}SJ(a,c,d,32856);}P0(a,b,0,0);}
function QR(a,b,c,d){Ly(a);P0(a,b,c,d);}
function P0(a,b,c,d){var e;e=a.ev.dU;b=b.jp;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function Wr(){var a=this;B.call(a);a.d4=null;a.ng=null;a.pE=null;a.yb=null;a.bH=null;a.kW=null;a.k4=null;a.eQ=null;a.fu=null;a.g5=null;}
function Q4(a,b){var c,d,e,f,g,h;if(U4(a.fu,b))Lz(a.fu,b);else{c=a.fu;d=CG(c.fn);if(b===null){e=Qj(c);if(e===null){c.i4=c.i4+1|0;e=U8(c,null,0,0);f=c.fn+1|0;c.fn=f;if(f>c.kZ)M9(c);}}else{g=IA(b);h=g&(c.dq.data.length-1|0);e=Ng(c,b,h,g);if(e===null){c.i4=c.i4+1|0;e=U8(c,b,h,g);f=c.fn+1|0;c.fn=f;if(f>c.kZ)M9(c);}}e.cJ=d;}b=b.ce;if(b===null)return;c=new WY;c.oV=a;b.ep(c);}
function AAw(a){var b,c,d,e,f;b=RQ(Jp(a.d4.dk));while(EP(b)){c=O2(b);d=B6(a.d4.dk,c);Bl(a.bH,d.k);c=BI(d);while(BJ(c)){e=BL(c);f=B6(a.eQ,e);Bl(a.bH,f.bq);}}}
function ZO(a){if(a.d4.ej===null){Bl(a.bH,(-1));return;}Bl(a.bH,a.fu.fn);RV(a,a.d4.ej);}
function RV(a,b){var c,d,e,f;c=(Lz(a.fu,b)).bq;Bl(a.bH,c);if(b instanceof Ke)Bl(a.bH,(-1));else if(!(b instanceof Hy))Bl(a.bH,0);else Bl(a.bH,1);d=a.kW;Bl(d.di,b.c5.cG());e=b.c5;f=new L5;f.u6=d;e.ep(f);d=a.k4;Bl(d.cB,b.dV.cG());e=b.dV;f=new Ua;f.sE=d;e.ep(f);d=b.gK;Bl(a.bH,d.cG());e=new Vd;e.tA=a;d.ep(e);d=b.es;Bl(a.bH,d.cG());d=d.bj();while(d.bv()){e=d.bg();MY(a.kW,e.e6);GA(a.k4,e.hh);}d=b.iY;if(d===null)Bl(a.bH,(-1));else Bl(a.bH,(B6(a.eQ,d)).bq);b=b.ce;Bl(a.bH,b.cG());d=new OS;d.mz=a;b.ep(d);}
function ZB(a){ABd(a.ng,a.bH,a.fu);}
function ADq(){B.call(this);this.oq=null;}
function AQe(a){var b=new ADq();AFf(b,a);return b;}
function AFf(a,b){a.oq=b;}
function AG6(a,b){var c,d,e,f,g;c=a.oq;if(c.e.f.ck==c.km){b=b.data;d=Ds(b[0]);e=Ed(b[1]);f=null;g=null;if(b.length>=4){f=Ds(b[2]);g=Ed(b[3]);}XA(c.e.f,d,e,f,g);Er(c.e.f.cP);Er(c.e.f.cX);Pu(c.e.f);Hm(c);IW(c.e.f);W$(c);}}
var XJ=F();
function FN(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function Ys(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function TJ(){var a=this;B.call(a);a.bp=null;a.Q=null;a.U=null;a.f0=null;}
function KE(a,b,c){var d;d=a.U;d.ld(b,c,d.e3);M$(a);}
function M$(a){var b,c,d,e;b=a.Q;c=a.U.q.a;b.q.a=c;d=b.dh;if(d!==null&&c!=Cg(d)&&!(c>=b.hW&&Cg(b.dh)>=b.hW))b.it=1;b=a.Q;b.e3=a.bp.b2;if(Vt(b))c=0;else{b=a.Q;Ul(b);e=Cm(b.gS,b.iV);Pk(b,Fw(b.eI)+(e*2|0)|0);c=b.q.b;}b=a.Q.L;d=a.U.L;Bd(b,d.a,d.b-c|0);}
function Lj(b,c){if(b<0)c=C(283);else if(b>0)c=C(284);return c;}
function W8(a,b,c){var d;d=a.Q.L.a;return (d-c|0)<=b&&b<d?1:0;}
function ME(a,b,c){var d,e;d=a.Q;e=d.L.a+d.q.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Pi(a,b,c){var d;d=a.Q.L.b;return (d-c|0)<=b&&b<d?1:0;}
function Np(a,b,c){var d,e;d=a.U;e=d.L.b+d.q.b|0;return e<=b&&b<(e+c|0)?1:0;}
function VA(a,b,c){var d,e,f;d=a.Q.L.b-c|0;e=a.U;f=(e.L.b+e.q.b|0)+c|0;return d<=b&&b<f?1:0;}
function V7(a,b,c){var d,e;d=a.Q.L.b+c|0;e=a.U;return Z9(b,d,(e.L.b+e.q.b|0)-c|0);}
function N2(a,b,c){var d,e,f;d=a.Q;e=d.L.a;f=e-c|0;e=(e+d.q.a|0)+c|0;return f<=b&&b<e?1:0;}
function Nw(a,b,c){var d,e;d=a.Q;e=d.L.a;return Z9(b,e+c|0,(e+d.q.a|0)-c|0);}
function Z9(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BB(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function H3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bk;f=new Bk;g=b.a;h=b.b;b=a.U;i=b.L;j=i.a;k=i.b;b=b.q;l=b.a;m=b.b;b=new U1;b.sO=a;b.sQ=e;b.sP=f;b.sK=c;b.sJ=g;b.sN=j;b.sL=l;b.sZ=d;b.sY=h;b.s0=k;b.tx=m;return b;}
function Si(){var a=this;B.call(a);a.e1=null;a.b$=null;a.eO=null;a.f$=null;a.lr=null;a.b6=null;a.fP=null;a.cI=0;a.e7=0;a.lP=0;a.gO=0;a.f3=0;a.tl=null;a.oI=null;a.vO=null;}
function Qi(a,b){a.e1=b;UL(a);}
function Qv(a,b){var c,d,e,f,g;a.lr=b.io;c=b.bd.g$;CC(a.b$.cv,c);c=b.hD.kN;CC(a.b$.dr,c);d=0;while(true){e=a.b6.data;if(d>=e.length)break;c=e[d];f=b.bd;c.i8=f;c=c.c9;g=f.j5;f=f.g$;CC(c.cv,g);CC(c.dr,f);d=d+1|0;}}
function Lm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=LD(b);d=b.b2;BT(a.e1);CK(c,a.e1);e=PV(a.e1,1.25);f=0;a.cI=Co(2.0,d);a.e7=Co(3.0,d);a.lP=Co(12.0,d);g=0;h=a.b6.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=J$(c,l.kV,0.875);n=a.lP;o=(n+m|0)+n|0;f=Z(f,o);b=l.c9;l=b.bI;l.a=g;l.b=0;l=b.P;l.a=o;l.b=e;Ck(b.h1,g,0.0,o,k);g=g+o|0;j=j+1|0;}b=a.eO;b.a=g;b.b=e;b=a.b$.P;o=a.f3;if(!o){m=a.cI;m=(g+m|0)+T(m,a.b6.data.length)|0;}else m=(f+(a.cI*2|0)|0)+(a.e7*2|0)|0;b.a=m;if(!o)e=e+(a.cI*2|0)|0;else{o=a.cI;e=(T(e+o|0,a.b6.data.length)
+o|0)+(a.e7*2|0)|0;}b.b=e;}
function XU(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ER(a){var b,c;b=a.eO;if(b.a&&b.b)return a.b$.P;c=new Br;Bm(c,C(285));K(c);}
function UL(a){Bd(a.eO,0,0);}
function ACV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.dL;if(!a.b6.data.length)return;a:{if(a.fP!==null){d=a.eO;if(T(d.a,d.b))break a;}d=a.eO;if(!T(d.a,d.b))Lm(a,b);d=a.eO;e=d.a;f=d.b;if(!T(e,f))return;d=EY(c,e,f);CK(d,a.e1);g=PV(a.e1,0.125);h=a.e1;i=h.eW;g=g+i-(i+h.en)/16.0;j=a.b6.data;e=j.length;f=0;while(f<e){h=j[f];Et(d,h.kV,h.c9.h1.by+a.lP,g);f=f+1|0;}h=Cy(a.fP,GW(c));a.fP=h;Ev(h,d);Is(d);}if(!JK(a.b$)){d=a.b$;Y4(c,d.P,d.bI,d.dr,a.cI,a.f$);d=a.b$;h=d.P;k=d.bI;d=d.cv;e=a.cI;l=a.f$;l.a=(h.a-e|0)-e|0;l.b=(h.b-
e|0)-e|0;Bz(c,k.a+e|0,k.b+e|0,l,d);if(a.f3){d=a.b$;ABh(c,d.P,d.bI,0,0,Pb(a.lr,b.b2),a.lr.lv,a.f$);}}j=a.b6.data;m=j.length;n=0;while(n<m){b=j[n].c9;d=a.fP;h=b.bI;Es(c,h.a+0|0,h.b+0|0,b.P,b.h1,d,b.cv,b.dr,0.0);n=n+1|0;}b:{if(a.f3){j=a.b6.data;m=j.length;n=0;while(true){if(n>=m)break b;h=j[n].c9;k=a.f$;e=(a.b$.P.a-(a.cI*2|0)|0)-(a.e7*2|0)|0;b=h.P;e=e-b.a|0;k.a=e;k.b=b.b;if(e>0){d=h.bI;Bz(c,d.a+b.a|0,d.b,k,h.dr);}n=n+1|0;}}}}
function Nq(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.b6.data;if(c>=d.length)return (-1);e=d[c].c9;if(F7(e,b))return c;if(a.f3){f=e.bI;g=f.a;e=e.P;h=e.a;g=g+h|0;i=f.b;f=a.f$;f.a=(a.b$.P.a-(a.cI*2|0)|0)-h|0;f.b=e.b;if(Ys(b,g,i,f))break;}c=c+1|0;}return c;}
function Wh(){B.call(this);this.tH=null;}
function AD3(a,b){var c;c=a.tH;WQ(c,D1(c,b.n));K0(c.o,c.p,c.s);GB(c);}
var Mh=F();
function ANG(a,b){b=b;b.bf=Cy(b.bf,null);}
function PN(){var a=this;B.call(a);a.bf=null;a.je=null;a.eC=null;a.dH=0;a.J=0;a.du=null;a.ef=null;a.go=0;}
function Nh(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dH;i=T(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Z(i,e))a:{while(true){if(d<=e){j=d;break a;}Fu(c);j=d+(-1)|0;b=D5(d);d=T(j,a.J)%a.eC.b|0;FU(a,c,b,a.go,g);QR(a.bf,c,0,d);if(!(j%a.dH|0))break;d=j;}}else{Fu(b);k=a.dH-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;FU(a,b,D5(j),T(a.J,k)+a.go|0,g);k=k+(-1)|0;j=h;}Ev(a.bf,b);j=Z(i,e);}return j;}k=a.dH;h=T(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bb(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fu(c);b=D5((d+f|0)+1|0);j=d+1|0;d=T(d,
a.J)%a.eC.b|0;FU(a,c,b,a.go,g);QR(a.bf,c,0,d);if(!(j%a.dH|0))break;d=j;}}else{Fu(b);d=0;while(d<a.dH){h=h+1|0;FU(a,b,D5((h>e?h-f|0:h)+f|0),T(a.J,d)+a.go|0,g);d=d+1|0;}Ev(a.bf,b);j=Bb(i,e);}return j;}
function AAv(a,b,c,d,e,f,g,h,i,j,k){var l,m,n,o,p,q;l=d/a.J|0;c=Bb((j+i|0)%e|0,c);Bd(a.du,Cg(a.bf),a.J);e=d%K9(a.bf)|0;i=a.J;m=e/i|0;n=m+(c/i|0)|0;if(c%i|0)n=n+1|0;i=m;e=m;o=l;while(i<n){if(Lw(a,g,o,l+(i-m|0)|0,f,k)){p=T((i-e|0)+1|0,a.J);Bd(a.du,Cg(a.bf),p);Ck(a.ef,0.0,T(e,a.J),Cg(a.bf),p);}else{q=Fv(f,g,o,k);c=e-m|0;e=a.J;Eq(a,h,T(c,e)-(d%e|0)|0,b,k.eZ,q);o=(l+i|0)-m|0;Bd(a.du,Cg(a.bf),a.J);Ck(a.ef,0.0,T(i,a.J),Cg(a.bf),a.J);e=i;}i=i+1|0;}q=Fv(f,g,o,k);c=e-m|0;e=a.J;Eq(a,h,T(c,e)-(d%e|0)|0,b,k.eZ,q);}
function Lw(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fv(e,b,c,f)!==f.gw?0:1;}
function Fv(b,c,d,e){c=c.data;return d<c.length&&c[d]?HX(b.dw,b,c[d]):e.gw;}
function Eq(a,b,c,d,e,f){Es(b,a.je.a+d.a|0,c+d.b|0,a.du,a.ef,a.bf,e,f,0.0);}
function FU(a,b,c,d,e){Et(b,c,a.eC.a-20.0*e,d);}
var ZK=F();
function ACu(){var a=this;B.call(a);a.gM=null;a.k0=0;a.e5=0;}
function AFp(){var a=new ACu();APE(a);return a;}
function APE(a){a.k0=0;a.gM=BD(16);a.e5=0;}
function Gg(a,b,c){Bl(a,b);Bl(a,c);}
function Bl(a,b){var c,d;c=a.gM;d=c.data.length;if(d==a.e5)a.gM=LL(c,d*2|0);c=a.gM.data;d=a.e5;a.e5=d+1|0;c[d]=b;}
function P1(a){var b,c,d,e,f;b=a.k0;if(b&&a.e5!=b){c=ED();b=a.k0;d=a.e5;e=new R;U(e);L(Bj(L(Bj(L(e,C(286)),b),C(287)),d),C(288));Cn(c,S(e));}f=a.gM;b=f.data.length;d=a.e5;if(b!=d)f=LL(f,d);return f;}
function R$(){var a=this;DA.call(a);a.fn=0;a.dq=null;a.i4=0;a.oh=0.0;a.kZ=0;}
function ACJ(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function UP(a){a.kZ=a.dq.data.length*a.oh|0;}
function U4(a,b){return WR(a,b)===null?0:1;}
function Lz(a,b){var c;c=WR(a,b);if(c===null)return null;return c.cJ;}
function WR(a,b){var c,d;if(b===null)c=Qj(a);else{d=IA(b);c=Ng(a,b,d&(a.dq.data.length-1|0),d);}return c;}
function Ng(a,b,c,d){var e;e=a.dq.data[c];while(e!==null&&!(e.kX==d&&(b!==e.cs?0:1))){e=e.gH;}return e;}
function Qj(a){var b;b=a.dq.data[0];while(b!==null&&b.cs!==null){b=b.gH;}return b;}
function U8(a,b,c,d){var e,f;e=new He;W7(e,b,null);e.kX=d;f=a.dq.data;e.gH=f[c];f[c]=e;return e;}
function M9(a){var b,c,d,e,f,g,h,i;b=a.dq.data.length;b=ACJ(!b?1:b<<1);c=P(He,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dq.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.kX&f;i=h.gH;h.gH=d[b];d[b]=h;h=i;}e=e+1|0;}a.dq=c;UP(a);}
function UT(){var a=this;B.call(a);a.di=null;a.jv=null;a.pZ=null;}
function MY(a,b){var c;if(!(b instanceof GM)){Bl(a.di,3);V8(a,b);Bl(a.di,b.fS);}else{c=b;Bl(a.di,5);V8(a,c);Bl(a.di,c.jx);b=c.fw;Bl(a.di,b.k);c=new MO;c.nr=a;DW(b,c);}}
function V8(a,b){var c;c=b.cQ.fa;Gg(a.di,a.jv.H,H(c));Bl(a.di,b.cQ.cg);Md(a,b.eL);CU(a.jv,c);}
function Md(a,b){if(b===null)Bl(a.di,(-1));else Bl(a.di,(B6(a.pZ,b)).bq);}
function UK(){var a=this;B.call(a);a.cB=null;a.kw=null;a.oU=null;}
function GA(a,b){var c,d,e;if(b instanceof EX){c=b;Bl(a.cB,9);PU(a,c.i3);}else if(b instanceof Fm){d=b;Bl(a.cB,3);Qo(a,d);Bl(a.cB,d.jG);PU(a,d.eT);}else if(b instanceof Fx){e=b;Bl(a.cB,4);GA(a,e.fl);GA(a,e.fC);}else if(b===null)Bl(a.cB,(-1));else{Bl(a.cB,5);Qo(a,b);Bl(a.cB,b.iN);}}
function Qo(a,b){var c;c=b.dm.fa;Gg(a.cB,a.kw.H,H(c));Bl(a.cB,b.dm.cg);b=b.dO;if(b===null)Bl(a.cB,(-1));else Bl(a.cB,(B6(a.oU,b)).bq);CU(a.kw,c);}
function PU(a,b){var c;Bl(a.cB,b.k);c=new Xb;c.nA=a;DW(b,c);}
function NS(){B.call(this);this.nh=null;}
function AE_(a,b){C7(a.nh,b);}
var C5=F(Br);
var SS=F(F8);
function TS(){B.call(this);this.n2=null;}
function AHY(a,b){HO(a.n2,b);}
function T4(){B.call(this);this.p3=null;}
function VP(){var a=this;B.call(a);a.p1=null;a.p2=null;a.p0=null;}
function AHe(a,b){Vo(a.p1,a.p2,b,a.p0);}
function RJ(){var a=this;B.call(a);a.uL=null;a.uM=null;a.uK=0;}
function AGW(a,b){var c,d,e;c=a.uL;d=a.uM;e=a.uK;d.i(Vz(c,(b.n.a+e|0)-c.d1.a|0));}
function RI(){var a=this;B.call(a);a.ot=null;a.or=null;a.os=0;}
function AOQ(a,b){var c,d,e;c=a.ot;d=a.or;e=a.os;d.i(PF(c,(b.n.b+e|0)-c.d1.b|0));}
var EB=F(0);
function Ni(){var a=this;B.call(a);a.hp=0;a.lT=0;a.ip=0;a.f7=0;a.gC=null;}
function BJ(a){return a.hp>=a.ip?0:1;}
function BL(a){var b,c;Pc(a);b=a.hp;a.f7=b;c=a.gC;a.hp=b+1|0;return c.f9(b);}
function QP(a){var b,c,d;if(a.f7<0){b=new C5;X(b);K(b);}Pc(a);a.gC.lY(a.f7);a.lT=a.gC.co;c=a.f7;d=a.hp;if(c<d)a.hp=d-1|0;a.ip=a.ip-1|0;a.f7=(-1);}
function Pc(a){var b;if(a.lT>=a.gC.co)return;b=new GE;X(b);K(b);}
function ON(){B.call(this);this.mp=null;}
function AEA(a){return Q0(a.mp);}
function OM(){B.call(this);this.u7=null;}
function AHi(a){return Q0(a.u7);}
function R8(){B.call(this);this.xb=null;}
function ALH(a){return ADn(0);}
function Mr(){var a=this;B.call(a);a.qs=null;a.qt=null;a.qp=0;a.qq=0;}
var AAH=F();
var ABR=F();
function He(){var a=this;F_.call(a);a.kX=0;a.gH=null;}
function T6(){B.call(this);this.p4=null;}
function ALq(a,b){var c;c=a.p4;C7(c,b);Ji(c,null);GS(c);}
var YZ=F();
function T8(b,c,d){ZR(b,c,d,0);}
function ZR(b,c,d,e){Yb(b,c,d,null,null,e);}
function Yb(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u;h=Vl(c);i=W(h);j=W(h);k=W(h);l=Ca(b);m=BD(i+1|0);n=!g?P(Cl,i):YR(b.v,i);c=m.data;b.v=n;o=0;while(o<i){if(g&&o<l){p=4*W(h)|0;h.eX=h.eX+p|0;c[o+1|0]=(c[o]+(BG(b,o)).A|0)+1|0;}else{b.v.data[o]=Do(Zt(h,d,0));c[o+1|0]=(c[o]+(BG(b,o)).A|0)+1|0;}o=o+1|0;}if(j)b.cC=AC9(Yr(h));b.fV=m;Er(b.cX);Er(b.cP);q=b.cX;g=0;while(g<k){EJ(q,C6(W(h),W(h)),C6(W(h),W(h)));g=g+1|0;}r=b.cX;s=b.cP;r=NU(T5(r));while(EP(r)){t=WG(r);q=t.cs;t=t.cJ;Qm(s,t,BC());Bv(B6(s,t),q);}if(s.j_
===null){r=new Pf;r.vh=s;s.j_=r;}r=s.j_;q=new QW;Kl(q,r.vh);while(EP(q)){KX(q);r=q.fX.cJ;t=ATf;c=P(B,r.k);d=c.data;Hi(r,c);Zh(c,t);g=0;u=d.length;while(g<u){t=d[g];IH(r,g);r.cl.data[g]=t;g=g+1|0;}}Qr(h);if(e!==null&&f!==null){r=AKB(e,f);N3(r);b.dC=AF5(r.kz,r.hg);b.cC=AC9(r.k_);}}
function XA(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Vl(c);i=W(h);j=W(h);k=W(h);l=W(h);m=V5(b,i);n=V5(b,j);o=(Hu(BG(b,m.a),m.b)).data[0].l;p=(Hu(BG(b,n.a),n.b)).data[1].l;q=0;r=k-1|0;while(q<k){g=Zt(h,d,i);if(!q)g=UM(o,g);if(q==r)g=UM(g,p);s=m.a+q|0;t=Do(g);b.v.data[s]=t;q=q+1|0;}if(l){u=Yr(h);v=I9(i,j,(-1));TK(b.cC,v,u);}else if(e!==null&&f!==null){t=AKB(e,f);N3(t);v=I9(i,j,(-1));TK(b.cC,v,t.k_);b.dC.dk=t.hg;}Qr(h);}
function Zt(b,c,d){var e,f,g,h,i,j,k,l;e=W(b);f=P(B1,e);g=f.data;h=0;while(h<e){i=W(b);j=W(b);k=W(b);l=W(b);g[h]=C8(Ek(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
var VZ=F(0);
var ATw=null;function X0(){ATw=null;}
var ABc=F();
function ALL(b,c){return {oldModelUrl:b,newModelUrl:c};}
function XT(){B.call(this);this.CJ=null;}
function Tp(){var a=this;B.call(a);a.qX=0;a.vC=0;}
function Ha(a,b){return PZ(a.qX,b,a.vC);}
var ZD=F();
function API(a,b){return Ve(a.f9(b));}
function AFL(a){return a.sp();}
function ABC(){var a=this;B.call(a);a.ii=null;a.eX=0;}
function Vl(a){var b=new ABC();ADZ(b,a);return b;}
function ADZ(a,b){a.ii=b;a.eX=0;}
function W(a){var b,c;b=a.ii.data;c=a.eX;a.eX=c+1|0;return b[c];}
function Qr(a){var b,c,d,e;if(a.eX!=a.ii.data.length){b=ED();c=a.ii.data.length;d=a.eX;e=new R;U(e);L(Bj(L(Bj(L(e,C(286)),c),C(289)),d),C(290));Cn(b,S(e));}}
function E0(){var a=this;B.call(a);a.ff=null;a.ce=null;a.dV=null;a.c5=null;a.es=null;a.gK=null;a.iY=null;}
function AP_(a){var b=new E0();AAW(b,a);return b;}
function AAW(a,b){a.ff=b;a.ce=BC();a.dV=BC();a.c5=BC();a.gK=BC();a.es=BC();}
function ACY(a,b){var c,d,e;c=a.es.bj();while(c.bv()){d=c.bg();e=Wt(b,d.hh);if(e!==null){e=e.eL;if(e!==null)d.e6.eL=e;}}c=a.dV.bj();while(c.bv()){Wt(b,c.bg());}}
function Sb(a,b){var c,d,e,f;c=a.es.bj();while(true){if(!c.bv()){c=a.c5.bj();while(true){if(!c.bv()){c=a.ce.bj();a:while(true){if(!c.bv())return null;d=c.bg();if(!(d instanceof Hy))continue;e=d.c5.bj();while(e.bv()){f=e.bg();if(b.b9(f))break a;}}return f;}e=c.bg();if(b.b9(e))break;}return e;}e=c.bg();if(b.b9(e.e6))break;}return e.e6;}
function WY(){B.call(this);this.oV=null;}
function AHW(a,b){b=b;Q4(a.oV,b);}
var Ke=F(E0);
function Hy(){E0.call(this);this.wB=null;}
var EK=F();
var AVR=null;var AVS=null;var AVT=null;var AVU=null;var AVV=null;var AVW=null;function AAZ(){AVR=new Uy;AVS=new Uw;AVT=new Ux;AVU=new Uu;AVV=new Uv;AVW=new Xf;}
function X7(){var a=this;B.call(a);a.cz=null;a.jO=null;a.ki=null;a.k$=null;a.k5=null;a.kz=null;a.k_=null;a.gx=null;a.hg=null;}
function AKB(a,b){var c=new X7();AOy(c,a,b);return c;}
function AOy(a,b,c){a.cz=Vl(b);a.jO=c;}
function N3(a){var b,c,d,e,f,g,h,i;b=W(a.cz);c=new Kk;PO(c);a.hg=c;a.gx=BC();d=0;while(d<b){e=W(a.cz);f=W(a.cz);g=Ek(a.jO,e,f);EJ(a.hg,g,BC());Bv(a.gx,g);d=d+1|0;}c=NU(T5(a.hg));while(EP(c)){SY((WG(c)).cJ,M6(a));}d=W(a.cz);if(d==(-1))a.kz=null;else{a.ki=P(E0,d);c=new Ms;h=a.cz;i=a.jO;g=a.gx;c.dv=h;c.qJ=i;c.pQ=g;a.k$=c;c=new QU;c.dK=h;c.tB=i;c.t7=g;a.k5=c;a.kz=QE(a,null);}a.k_=Xm(a.cz,a.ki);}
function QE(a,b){var c,d,e,f,g,h,i,j;c=W(a.cz);d=W(a.cz);e=a.k$;f=W(e.dv);g=BC();h=0;while(h<f){Bv(g,Mx(e));h=h+1|0;}a:{switch(d){case -1:e=new Ke;e.ff=b;b=AVT;e.ce=b;e.dV=b;e.c5=b;e.gK=b;e.es=b;break a;case 0:e=AP_(b);break a;case 1:e=new Hy;AAW(e,b);if(De(g)){b=new C5;Bm(b,C(291));K(b);}e.wB=Bq(g,0);SY(e.c5,g);break a;default:}b=new C5;e=new R;U(e);Bj(L(e,C(292)),d);Bm(b,S(e));K(b);}e.c5=g;b=a.k5;d=W(b.dK);g=BC();h=0;while(h<d){Bv(g,FC(b));h=h+1|0;}e.dV=g;e.gK=M6(a);d=W(a.cz);b=BC();h=0;while(h<d){g=Mx(a.k$);i
=FC(a.k5);j=new PQ;j.e6=g;j.hh=i;Bv(b,j);h=h+1|0;}e.es=b;h=W(a.cz);e.iY=h==(-1)?null:Bq(a.gx,h);d=W(a.cz);b=BC();h=0;while(h<d){Bv(b,QE(a,e));h=h+1|0;}e.ce=b;a.ki.data[c]=e;return e;}
function M6(a){var b,c,d,e;b=W(a.cz);c=BC();d=0;while(d<b){e=W(a.cz);Bv(c,Bq(a.gx,e));d=d+1|0;}return c;}
function Vd(){B.call(this);this.tA=null;}
function AEO(a,b){var c;b=b;c=a.tA;Bl(c.bH,(B6(c.eQ,b)).bq);}
function PQ(){var a=this;B.call(a);a.e6=null;a.hh=null;}
function OS(){B.call(this);this.mz=null;}
function AKt(a,b){b=b;RV(a.mz,b);}
var O3=F(0);
var Ep=F(Ex);
var JG=F(Ep);
var Uy=F(JG);
var K2=F(DA);
var Uw=F(K2);
var Lu=F(FM);
function AGo(a){var b;b=new D0;X(b);K(b);}
function AKk(a,b){var c;c=new D0;X(c);K(c);}
function AJe(a,b){b=new D0;X(b);K(b);}
var Ux=F(Lu);
function AKu(a,b){var c;c=new BS;X(c);K(c);}
function AJI(a){return 0;}
function AGQ(a){return AVU;}
function AEE(a){return 1;}
var Uu=F();
function AEn(a){return 0;}
function ALG(a){var b;b=new LW;X(b);K(b);}
function ANb(a){var b;b=new C5;X(b);K(b);}
var Pr=F(0);
var Uv=F();
var Xf=F();
var D0=F(Br);
function Nr(){var a=this;B.call(a);a.my=null;a.pH=null;a.tz=0;a.u9=0;}
function Le(a,b){return EH(a.pH)<b?0:1;}
function NO(){var a=this;B.call(a);a.hz=null;a.np=null;}
function FS(a,b,c){var d,e,f,g,h,i;if(c===null)return null;d=c.iN;if(d!=4&&d!=5){e=KP(a,b,c);if(e!==null){b=e.eL;if(b!==null)c.dO=b;}if(c.iN!=3&&!(c instanceof Fx)&&!(c instanceof EX)){b=a.np.p3;f=c.dm.cg;g=b.fV;if(g===null)c=Jt(b,f);else{d=AA_(g,f);if(d<0)d=( -d|0)-1|0;d=d-1|0;c=C6(d,f-(d<0?0:b.fV.data[d])|0);}h=Lt(BG(b,c.be),c.bi);if(e===null)h.cq=5;else{f=e.fS!=3?0:2;d=!(e instanceof GM)?0:2;i=Jt(b,e.cQ.cg);EJ(b.cX,c,i);Qm(b.cP,i,BC());Bv(B6(b.cP,i),c);h.cq=f;h.bY=d;}}return e;}a:{while(true){if(b===null)
{e=null;break a;}e=b.iY;if(e!==null)break;b=b.ff;}}c.dO=e;return null;}
function KP(a,b,c){var d,e,f;if(c instanceof EX){c=c.i3;d=new Ww;d.qD=a;d.qE=b;DW(c,d);return null;}if(c instanceof Fm){e=c;c=BI(e.eT);while(BJ(c)){FS(a,b,BL(c));}return I3(a,b,e);}if(c instanceof Fx){d=c;FS(a,b,d.fl);b=N$(a,d.fl.dO);return b===null?null:FS(a,b,d.fC);}d=new Nf;d.uZ=a;d.u1=c;f=Sb(b,d);if(f===null){d=new Ne;d.oE=a;f=MI(a,b,c,d);}if(f!==null)return f;b=b.ff;return b===null?null:KP(a,b,c);}
function I3(a,b,c){var d,e;d=new Ue;d.s7=a;d.s6=c;d=Sb(b,d);if(d!==null)return d;d=new Uf;d.na=a;e=MI(a,b,c,d);if(e!==null)return e;b=b.ff;return b===null?null:I3(a,b,c);}
function MI(a,b,c,d){var e,f;b=b.gK.bj();while(true){if(!b.bv())return null;e=N$(a,b.bg());if(e===null)continue;f=d.nt(e,c);if(f!==null)break;}return f;}
function N$(a,b){if(b===null)return null;return O_(a,a.hz.ej,b);}
function O_(a,b,c){var d,e;d=b.iY;if(d!==null&&Bs(d,c))return b;b=b.ce.bj();while(true){if(!b.bv())return null;e=O_(a,b.bg(),c);if(e!==null)break;}return e;}
var ACE=F();
function Ts(b,c,d,e){var f,g;f=b.next();g=new WB;g.mO=b;g.mN=c;g.mQ=d;g.mP=e;f.then(Bn(g,"f"),Bn(d,"f"));}
function X3(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADb(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Fq()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Wy;f.qm=b;f.qn=d;d.addEventListener("change",Bn(f,"handleEvent"));d.click();}
function X_(b,c){var d;if(c.isFile?1:0)b.i(XC(c.file()));else{c=c.createReader();d=new We;d.tN=b;c.readEntries(Bn(d,"f"));}}
function Sx(){var a=this;B.call(a);a.bt=null;a.nP=null;a.hB=null;a.jn=null;a.R=null;}
function HL(a){return a.bt.cn.h2;}
function Xe(a){var b;b=new ST;b.nw=a;return b;}
function ZZ(a){var b,c,d,e,f,g;b=P(D7,5);c=b.data;d=a.R.T.S.bd;e=a.bt;BT(e);f=new Of;f.qA=e;c[0]=Dg(C(293),d,f);d=a.R.T.S.bd;e=a.bt;BT(e);f=new Og;f.uo=e;c[1]=Dg(C(294),d,f);e=a.R.T.S.bd;f=a.bt;BT(f);g=new Oh;g.sA=f;c[2]=Dg(C(295),e,g);e=a.R.T.S.bd;f=a.bt;BT(f);g=new Oc;g.mZ=f;c[3]=Dg(C(296),e,g);e=a.R.T.S.bd;f=a.bt;BT(f);g=new Od;g.vn=f;c[4]=Dg(C(297),e,g);return Iu(b);}
function IY(a,b,c){var d,e,f,g,h,i,j;a:{Du(a.R.b1);d=a.bt.e;e=Dt(d);f=FP(d);g=a.bt.cA;if(c===null)h=null;else{ARv();switch(AVX.data[c.dN]){case 1:h=LB(g,e,f);break a;case 2:h=Qw(g,e,f);break a;default:}b=new Fl;X(b);K(b);}}c=a.bt;f=D1(c,b);e=Fj(c.e.f,f.be,f.bi);g=Ku(c,e);if(h!==null){e=c.e;i=f.be;j=f.bi;f=new SD;f.t4=c;f.t3=b;f.t2=g;h.k3(e,i,j,f,c.hy);}else{f=B6(c.e.f.cX,e);if(f!==null)HJ(c,f);else{f=B6(c.e.f.cP,e);if(f!==null&&!De(f))QN(c.eG,b,f,c,g);else J8(c.eG,b,c);}}}
var Yo=F(0);
function AIp(b){return 112<=b&&b<=123?1:0;}
function S1(){B.call(this);this.GP=null;}
var AUM=null;function Sa(b){var c,d;if(b===null)b=C(3);else{c=b.eM;if(c===null)b=C(3);else{d=PW(c,C(298),H(c));b=d==(-1)?b.eM:DI(b.eM,d+1|0);}}return b;}
function Wp(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=d.e;f=BC();g=c!==null?c.data.length:b.k;h=0;while(h<g){if(c===null){i=(Bq(b,h)).be;j=Rs(EI(BG(e.f,i)));k=Sa(e.dE);}else{l=c.data;i=l[h].f6.e_;j=!BN(e.dE,l[h].g6)?C(3):Rs(EI(BG(e.f,i)));k=Sa(l[h].g6);}if(H(j)>153){m=B8(j,0,150);j=new R;U(j);L(L(j,m),C(43));j=S(j);}if(H(k)>153){k=B8(k,0,150);m=new R;U(m);L(L(m,k),C(43));k=S(m);}n=D5(i+1|0);if(c!==null){l=c.data;o=null;p=l[h];}else{p=null;o=Bq(b,h);}if(c!==null){m=new Wf;m.pt=d;m.pu=p;}else{m=new Wg;m.uH=d;m.uG=
o;}o=new JM;o.rQ=m;o.ik=n;o.ix=j;o.fQ=k;Bv(f,o);h=h+1|0;}return Hi(f,AUM);}
function ACS(){AUM=P(JM,0);}
var GJ=F();
var YS=F(GJ);
var ABV=F(GJ);
function Pe(){Ep.call(this);this.gD=null;}
function RQ(a){var b;b=new Sg;Kl(b,a.gD);return b;}
function L5(){B.call(this);this.u6=null;}
function AG9(a,b){b=b;MY(a.u6,b);}
function Ua(){B.call(this);this.sE=null;}
function AJQ(a,b){b=b;GA(a.sE,b);}
function TI(){Ep.call(this);this.qx=null;}
function NU(a){var b;b=new Tw;Kl(b,a.qx);return b;}
function Pf(){Ex.call(this);this.vh=null;}
function IE(){var a=this;B.call(a);a.cQ=null;a.eL=null;a.fS=0;}
function ARE(a,b,c){var d=new IE();ABN(d,a,b,c);return d;}
function ABN(a,b,c,d){a.cQ=b;a.eL=c;a.fS=d;}
function PD(a,b,c){var d,e,f,g;a:{d=b.dm;if(d!==null){e=a.cQ;if(!Bs(d.fa,e.fa)){f=0;break a;}}f=1;}d=b.dO;g=d!==null&&!Lp(c,a.eL,d)?0:1;if(f&&g){if(a.fS!=1)return 1;b=b.dm;return b!==null&&a.cQ.cg<b.cg?1:0;}return 0;}
function AA4(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BN(a.cQ,c.cQ)&&BN(a.eL,c.eL)&&BN(CG(a.fS),CG(c.fS))?1:0;}return 0;}
function GM(){var a=this;IE.call(a);a.fw=null;a.jx=0;}
function AFe(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){if(!AA4(a,b))return 0;c=b;return BN(a.fw,c.fw);}return 0;}
function Ei(){var a=this;B.call(a);a.dm=null;a.dO=null;a.iN=0;}
function AQw(a,b,c){var d=new Ei();KL(d,a,b,c);return d;}
function KL(a,b,c,d){a.dm=b;a.dO=c;a.iN=d;}
function Yc(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BN(a.dm,c.dm)&&BN(a.dO,c.dO)?1:0;}return 0;}
function EX(){Ei.call(this);this.i3=null;}
function Fm(){var a=this;Ei.call(a);a.eT=null;a.jG=0;}
function AOZ(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){if(!Yc(a,b))return 0;c=b;return BN(a.eT,c.eT);}return 0;}
function Fx(){var a=this;Ei.call(a);a.fl=null;a.fC=null;}
function AEx(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return BN(a.fl,c.fl)&&BN(a.fC,c.fC)?1:0;}return 0;}
var GE=F(Br);
function Mv(){var a=this;B.call(a);a.u_=null;a.u$=null;}
function Wt(a,b){return FS(a.u_,a.u$,b);}
function Mw(){var a=this;B.call(a);a.ms=null;a.mr=null;}
function AIG(a,b){b=b;Sp(a.ms,b,a.mr);}
var WD=F();
function ANi(a,b){X3(b);}
function WC(){var a=this;B.call(a);a.pK=null;a.pJ=null;}
function AGw(a,b){var c,d,e,f,g,h,i;c=a.pK;d=a.pJ;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new P7;i.n0=c;i.nZ=g;h.then(Bn(i,"f"),Bn(d,"f"));e=e+1|0;}}
var VT=F();
function AH4(a,b){X3(b);}
function VS(){var a=this;B.call(a);a.o7=null;a.o8=null;}
function AIO(a,b){var c,d,e,f,g;c=a.o7;d=a.o8;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=P(Bt,1);g.data[0]=Ch(b.name);Ts(f,c,d,g);}
function Ms(){var a=this;B.call(a);a.dv=null;a.qJ=null;a.pQ=null;}
function Mx(a){var b,c,d,e,f,g,h;a:{b=W(a.dv);switch(b){case 3:break;case 5:c=NR(a);d=Lb(a);b=W(a.dv);e=W(a.dv);f=BC();g=0;while(g<e){Bv(f,Lb(a));g=g+1|0;}h=new GM;ABN(h,c,d,4);h.fw=f;h.jx=b;break a;default:c=new C5;d=new R;U(d);Bj(L(d,C(299)),b);Bm(c,S(d));K(c);}h=ARE(NR(a),Lb(a),W(a.dv));}return h;}
function NR(a){var b,c;b=W(a.dv);c=W(a.dv);return AHU(Ek(a.qJ,b,c),W(a.dv));}
function Lb(a){var b;b=W(a.dv);if(b==(-1))return null;return Bq(a.pQ,b);}
function QU(){var a=this;B.call(a);a.dK=null;a.tB=null;a.t7=null;}
function FC(a){var b,c,d,e,f;a:{b:{b=W(a.dK);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=M7(a);d=PX(a);b=W(a.dK);e=RT(a);f=new Fm;KL(f,c,d,2);f.jG=b;f.eT=e;break a;case 4:c=FC(a);d=FC(a);f=new Fx;KL(f,c.dm,c.dO,(-1));f.fl=c;f.fC=d;break a;case 5:f=AQw(M7(a),PX(a),W(a.dK));break a;case 9:c=RT(a);f=new EX;KL(f,null,null,(-1));if(De(c)){c=new Bu;Bm(c,C(300));K(c);}f.i3=c;break a;default:break b;}f=null;break a;}c=new C5;d=new R;U(d);Bj(L(d,C(301)),b);Bm(c,S(d));K(c);}return f;}
function M7(a){var b,c;b=W(a.dK);c=W(a.dK);return AHU(Ek(a.tB,b,c),W(a.dK));}
function PX(a){var b;b=W(a.dK);if(b==(-1))return null;return Bq(a.t7,b);}
function RT(a){var b,c,d;b=W(a.dK);c=BC();d=0;while(d<b){Bv(c,FC(a));d=d+1|0;}return c;}
function Wy(){var a=this;B.call(a);a.qm=null;a.qn=null;}
function AHS(a,b){var c,d,e,f,g,h;b=a.qm;c=a.qn;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new Mn;h.mH=b;h.mG=g;$rt_globals.setTimeout(Bn(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=XC(d.item(f));g=new L_;g.rT=b;g.rU=c;$rt_globals.setTimeout(Bn(g,"onTimer"),0);f=f+1|0;}}
function JM(){var a=this;B.call(a);a.rQ=null;a.ik=null;a.ix=null;a.fQ=null;}
function Jh(){var a=this;B.call(a);a.g6=null;a.f6=null;}
function L0(){var a=this;B.call(a);a.ij=0;a.i6=0;a.fL=0;a.e_=0;}
function Wf(){var a=this;B.call(a);a.pt=null;a.pu=null;}
function AEL(a){RG(a.pt,a.pu);}
function Wg(){var a=this;B.call(a);a.uH=null;a.uG=null;}
function AIw(a){HJ(a.uH,a.uG);}
function AC_(){var a=this;B.call(a);a.fa=null;a.cg=0;}
function AHU(a,b){var c=new AC_();ADO(c,a,b);return c;}
function ADO(a,b,c){a.fa=b;a.cg=c;}
function ALd(a,b){var c;if(a===b)return 1;if(b!==null&&By(a)===By(b)){c=b;return a.cg==c.cg&&BN(a.fa,c.fa)?1:0;}return 0;}
function MO(){B.call(this);this.nr=null;}
function AJO(a,b){b=b;Md(a.nr,b);}
function Xb(){B.call(this);this.nA=null;}
function AP2(a,b){b=b;GA(a.nA,b);}
function EC(){var a=this;B.call(a);a.id=0;a.rW=0;a.hj=null;a.fX=null;a.pl=null;a.iS=null;}
function AVY(a){var b=new EC();Kl(b,a);return b;}
function Kl(a,b){a.iS=b;a.rW=b.cD;a.hj=null;}
function EP(a){var b,c;if(a.hj!==null)return 1;while(true){b=a.id;c=a.iS.bX.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.id=b+1|0;}return 0;}
function Y1(a){var b;if(a.rW==a.iS.cD)return;b=new GE;X(b);K(b);}
function KX(a){var b,c,d,e;Y1(a);if(!EP(a)){b=new LW;X(b);K(b);}b=a.hj;if(b!==null){c=a.fX;if(c!==null)a.pl=c;a.fX=b;a.hj=b.cy;}else{d=a.iS.bX.data;e=a.id;a.id=e+1|0;b=d[e];a.fX=b;a.hj=b.cy;a.pl=null;}}
var Sg=F(EC);
function O2(a){KX(a);return a.fX.cs;}
var Tw=F(EC);
function WG(a){KX(a);return a.fX;}
var QW=F(EC);
var WV=F(D0);
var QK=F(Br);
var Vm=F(Br);
function AC3(){B.call(this);this.yl=null;}
function VQ(){B.call(this);this.l0=null;}
var AUP=null;function AA9(){var a=new VQ();YE(a);return a;}
function YE(a){a.l0=BC();}
function DU(a,b,c,d){OP(a,ABH(d,b,c));}
function Dg(b,c,d){return ABH(d,b,c);}
function HA(a,b,c,d){I_(a,b,c,d,null);}
function I_(a,b,c,d,e){OP(a,ARz(null,b,c,d,e));}
function OP(a,b){Bv(a.l0,b);}
function J9(a){return Iu(Hi(a.l0,AUP));}
function XO(){AUP=P(D7,0);}
function Ro(){var a=this;B.call(a);a.oZ=null;a.o0=null;}
function ALR(a){var b,c;b=a.oZ;c=a.o0;Fo(b.d_,c);}
function US(){B.call(this);this.r7=null;}
function EE(){var a=this;B.call(a);a.L=null;a.q=null;a.e3=0.0;}
function AP6(){var a=new EE();La(a);return a;}
function La(a){a.L=new Bk;a.q=new Bk;}
function AMG(a){}
function ABk(a){return Cp(0,0);}
function Q7(a,b,c,d){var e;if(!KB(a.L,b)){a.oe(b);Cu(a.L,b);}if(!KB(a.q,c)){a.nY(c);Cu(a.q,c);}e=a.e3;if(e!==d){a.e3=d;a.pw(e,d);}}
function Dj(a,b){return FN(b,a.L,a.q);}
function AOC(a,b){var c,d,e,f;c=a.L;d=c.a;e=c.b;f=a.q;AQ2();Bz(b,d,e,f,AVZ);}
function AJV(a,b){}
function APb(a,b){}
function AMR(a,b,c){}
function AIB(a,b,c,d){return 0;}
function AFv(a,b,c){return null;}
function AKL(a,b,c){return 0;}
function AOS(a,b){return 0;}
function AMB(a,b,c,d){return 0;}
function IM(){var a=this;EE.call(a);a.cS=null;a.bM=null;a.gu=null;}
function Um(a,b){a.bM.a=IQ(a,b);}
function Xh(a,b){a.bM.b=Lo(a,b);}
function Lo(a,b){return Z(0,Bb(b,a.cS.b-a.q.b|0));}
function IQ(a,b){return Z(0,Bb(b,a.cS.a-a.q.a|0));}
function Qn(){var a=this;IM.call(a);a.cf=null;a.dA=null;a.gt=null;a.ti=null;a.dT=null;a.bW=null;a.dZ=null;a.fi=null;a.c4=0;a.eA=0;a.vl=null;a.ds=0;a.d7=0;a.fG=0;a.e8=0;a.eS=0;a.cu=0;a.d0=null;a.h7=null;a.pX=null;a.gU=null;}
function Pd(a){a.c4=Co(2.0,a.cf.b2);}
function Wv(a){return a.bW.data.length?0:1;}
function SZ(a){Bd(a.gt,0,0);}
function AOR(a){a.fi=Cy(a.fi,null);Bd(a.gt,0,0);Er(a.gU);a.d0=null;a.bW=AUM;a.dZ=null;a.ds=0;a.d7=0;a.fG=0;SC(a.dA);a.h7=null;}
function AGI(a,b,c){Pw(a);Pd(a);a.dT=null;a.d0=null;a.eA=0;}
function XK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=LD(a.cf);if(Wv(a))return;Jq(a);CK(c,a.dT);d=DK(a);e=XG(c,a.eA);f=Bb(Ia(a.q.b,d),a.bW.data.length)+30|0;g=a.pX.u2;h=a.dZ.data;i=h.length;if(i<f){a:{j=a.e8;k=a.eS;l=a.bW;m=a.d0;n=a.gU;o=P(H2,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.fD!==q){UR(m,t,n);p[r]=IP(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=IP(q,m,e,n);j=j+1|0;}}else if(f>0){p=
o.data;while(true){if(j>k)break a;p[j%p.length|0]=IP(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){UR(m,q,n);h[j]=null;}j=j+1|0;}a.dZ=o;Cu(a.gt,MV(a.d0));PR(a,a.cf.dL);}a.e8=Bb((a.bM.b+a.c4|0)/(DK(a)+a.c4|0)|0,a.bW.data.length-1|0);a.eS=Bb((((a.bM.b+a.dA.P.b|0)-1|0)+a.c4|0)/(DK(a)+a.c4|0)|0,a.bW.data.length-1|0);if(!a.dZ.data.length)return;Xv(a,e);m=a.L;T1(b,m.a,m.b,a.q);t=g.sX;m=a.L;Bz(b,m.a,m.b,a.q,t);m=a.dA.bI;u=m.a;v=m.b;w=Cm(a.cf,2.0);m=a.cf.dl;x=a.e8;j=u+w|0;while(x<=a.eS){n=OQ(a,x);k
=T(x,DK(a));i=x+1|0;y=k+T(i,a.c4)|0;k=j+a.ds|0;r=k+a.d7|0;z=a.cu!=x?0:1;ba=!z?t:g.pL;q=!z?g.r8:g.hT;bb=!z?g.ne:g.hT;bc=!z?g.oi:g.hT;bd=(v+y|0)-a.bM.b|0;Es(b,j,bd,n.gT,n.q2,a.fi,q,ba,0.0);Es(b,k,bd,n.hs,n.hP,a.fi,bb,ba,0.0);Es(b,r,bd,n.gV,n.iX,a.fi,bc,ba,0.0);k=n.gT.a;s=j+k|0;Bd(m,Z(0,a.ds-k|0),n.gT.b);Bz(b,s,bd,m,ba);k=j+a.ds|0;s=n.hs.a;be=k+s|0;Bd(m,Z(0,a.d7-s|0),n.hs.b);Bz(b,be,bd,m,ba);k=n.gV.a;bf=r+k|0;Bd(m,Z(0,(((a.dA.P.a-k|0)-a.d7|0)-a.ds|0)-w|0),n.gV.b);Bz(b,bf,bd,m,ba);bg=(u+a.q.a|0)-w|0;Bd(m,w,DK(a)
+a.c4|0);Bz(b,bg,bd,m,t);x=i;}Ld(b);}
function Xv(a,b){var c,d,e,f,g,h;c=0;d=a.e8;while(d<=a.eS){e=OQ(a,d);if(!(e!==null&&e.fD===a.bW.data[d])){f=a.dZ.data;g=a.bW;e=a.d0;h=a.gU;c=d%f.length|0;if(f[c]!==null)UR(e,f[c],h);f[c]=IP(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cu(a.gt,MV(a.d0));PR(a,a.cf.dL);}}
function PR(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.gt;c=EY(b,c.a+150|0,c.b);CK(c,a.dT);d=a.dT;e=d.eW;f=e-(e+d.en)/16.0;g=a.dZ.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.fD.ik;k=d.hP;Et(c,j,k.by+a.eA,f+k.b0);j=d.fD.ix;d=d.iX;Et(c,j,d.by+a.eA,f+d.b0);}i=i+1|0;}a:{d=a.gU;if(d.cF>0){h=d.cD;i=0;b:while(true){g=d.bX.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cs;l=j.cJ;k=k;l=l.i5;Et(c,k,l.by+a.eA,f+l.b0);j=j.cy;if(h!=d.cD)break b;}i=i+1|0;}b=new GE;X(b);K(b);}}b=Cy(a.fi,GW(b));a.fi=b;Ev(b,c);Is(c);}
function OQ(a,b){var c;c=a.dZ.data;return c[b%c.length|0];}
function AMe(a,b){Cu(a.dA.P,b);}
function ANK(a,b){Cu(a.dA.bI,b);}
function Pg(a){var b,c;Jq(a);b=DK(a);c=a.bW.data.length;b=T(b,c)+T(a.c4,c+1|0)|0;Bd(a.cS,a.q.a,b);}
function Pw(a){var b,c,d,e,f,g,h,i,j;b=LD(a.cf);if(Wv(a))return;Jq(a);CK(b,a.dT);c=XG(b,a.eA);d=a.bW.data;e=d.length;f=0;while(f<e){g=d[f];h=Hz(c,g.fQ);i=Hz(c,g.ik);j=Hz(c,g.ix);a.ds=Z(a.ds,h);a.d7=Z(a.d7,i);a.fG=Z(a.fG,j);f=f+1|0;}}
function UQ(a,b){Jf(a.h7);b.rQ.w();}
function RM(a,b){var c,d,e;if(!a.dZ.data.length)return (-1);c=DK(a);d=(b.b-a.L.b|0)+a.bM.b|0;e=a.c4;e=(d+e|0)/(c+e|0)|0;if(e<a.bW.data.length)return e;return (-1);}
function DK(a){return Fw(a.dT);}
function Jq(a){var b;if(a.dT===null){b=Io(a.cf,a.ti);a.dT=b;a.d0=AEV(Fw(b));a.eA=DE(a.dT.lG);}}
function AN3(a,b){var c,d,e;a:{switch(b.bK){case 13:UQ(a,a.bW.data[a.cu]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cu=a.e8;b=a.gu;c=a.bM;Iq(b,c.a,c.b-(a.q.b/2|0)|0);return 0;case 34:a.cu=a.eS;b=a.gu;c=a.bM;Iq(b,c.a,c.b+(a.q.b/2|0)|0);return 0;case 35:case 39:a.cu=a.bW.data.length-1|0;break a;case 36:case 37:a.cu=0;break a;case 38:d=a.cu;e=a.bW.data.length;a.cu=((d+e
|0)-1|0)%e|0;break a;case 40:a.cu=(a.cu+1|0)%a.bW.data.length|0;break a;default:break a;}Jf(a.h7);return 0;}e=a.cu;if(e<=a.e8)Iq(a.gu,a.bM.a,T(e,DK(a))+T(a.cu,a.c4)|0);else if(e>=a.eS)Iq(a.gu,a.bM.a,(T(e+1|0,DK(a))+T(a.cu+2|0,a.c4)|0)-a.q.b|0);return 0;}
function Oz(){var a=this;B.call(a);a.ta=null;a.s_=null;}
function Jf(a){var b,c;b=a.ta;c=a.s_;Fo(b.d_,c);Sv(b);}
function PP(){var a=this;EE.call(a);a.l6=null;a.of=null;a.s1=null;a.br=null;a.cT=null;a.cY=null;a.t8=0.0;a.u3=null;a.uX=null;}
function ANF(a){var b;b=a.br;b.gu=null;a.br=Cy(b,null);}
function AH3(a,b,c,d){Q7(a,b,c,d);Q7(a.br,b,c,d);if(d!==0.0){Pg(a.br);b=a.br;c=b.bM;c.a=IQ(b,c.a);c=b.bM;c.b=Lo(b,c.b);if(U3(a))H5(a);else a.cY=null;if(Oe(a))G2(a);else a.cT=null;}}
function Iq(a,b,c){var d;d=a.br;d.bM.a=IQ(d,b);d.bM.b=Lo(d,c);if(U3(a))H5(a);if(Oe(a))G2(a);}
function Oe(a){var b;b=a.q.b;return b>0&&a.br.cS.b>b?1:0;}
function U3(a){var b;b=a.q.a;return b>0&&a.br.cS.a>b?1:0;}
function H5(a){var b,c,d,e,f,g;b=a.cY;if(b===null)b=Uq();a.cY=b;QG(a,b);c=a.cY;b=a.br;d=b.bM.a;e=a.L;f=e.a;g=a.q;QA(c,d,f,g.a,b.cS.a,e.b+g.b|0,LH(a));}
function G2(a){var b,c,d,e,f,g;b=a.cT;if(b===null)b=Uq();a.cT=b;QG(a,b);c=a.cT;b=a.br;d=b.bM.b;e=a.L;f=e.b;g=a.q;WF(c,d,f,g.b,b.cS.b,e.a+g.a|0,LH(a));}
function LH(a){return Co(a.t8,a.e3);}
function QG(a,b){var c,d;c=a.u3;d=a.uX;if(!(c!==null&&d!==null?(JU(b.hI,c)&&JU(b.hJ,d)?1:0):0))Gy(b,c,d);}
function AMV(a,b){var c;XK(a.br,b);if(!(a.cT===null&&a.cY===null)){DY(b,1);c=a.cT;if(c!==null)HB(c,b);c=a.cY;if(c!==null)HB(c,b);c=a.cT;if(c!==null)HM(c,b);c=a.cY;if(c!==null)HM(c,b);DY(b,0);}}
function Tq(a,b){var c,d;a:{b:{c=a.cT;if(!(c!==null&&Hk(c,b))){c=a.cY;if(c===null)break b;if(!Hk(c,b))break b;}d=1;break a;}d=0;}return d;}
function AOc(a,b,c,d){var e;if(!Tq(a,b.n)){e=a.br;if(d==1){c=RM(e,b.n);if(c>=0)UQ(e,e.bW.data[c]);}}return 1;}
function ANJ(a,b,c){var d;d=a.cT;if(d!==null){d=HR(d,b.n,a.of,1);if(d!==null)return d;}d=a.cY;if(d!==null){d=HR(d,b.n,a.s1,0);if(d!==null)return d;}d=a.br;if(!F7(d.dA,b.n)&&!JK(d.dA)){b=d.vl;if(b!==null)Jf(b);}return null;}
function AK6(a,b,c){return Tq(a,b.n)?1:0;}
function AKR(a,b){var c,d,e;c=a.cT;d=c!==null&&H6(c,b.n,a.l6)?1:0;c=a.cY;e=c!==null&&H6(c,b.n,a.l6)?1:0;a:{if(!d&&!e){c=a.br;d=RM(c,b.n);if(d>=0)c.cu=d;if(!(F7(c.dA,c.L)&&Fz(c.cf.df)?1:0)){d=0;break a;}}d=1;}return d;}
function AHf(a,b,c,d){var e,f;if(!Dj(a,b.n))return 0;e=Co(d*0.25,a.e3);f=Co(c*0.25,a.e3);if(b.bE){f=f+e|0;e=0;}if(a.cT!==null&&e){b=a.br;Xh(b,b.bM.b+e|0);G2(a);}if(a.cY!==null&&f){b=a.br;Um(b,b.bM.a+f|0);H5(a);}return 1;}
function APp(a){var b,c;b=LH(a);c=ABk(a.br);c.a=Z(c.a,b);c.b=Z(c.b,b);return c;}
function Gs(){var a=this;B.call(a);a.dQ=0;a.dY=0;a.kI=null;a.lK=0;a.fx=null;}
function AN4(a,b,c,d,e,f){var g=new Gs();AJM(g,a,b,c,d,e,f);return g;}
function AJM(a,b,c,d,e,f,g){a.dQ=b;a.dY=c;a.kI=Cp(f,g);a.lK=d;a.fx=e;}
var Yn=F();
function JF(){return {isCancellationRequested:false};}
function So(){var a=this;B.call(a);a.rA=null;a.rz=null;}
function AGV(a,b){var c,d,e,f,g,h,i,j,k;c=a.rA;d=a.rz;if(!((b?true:false)?1:0))$rt_globals.console.info("provider result is undefined");else if(!($rt_globals.Array.isArray(b)?1:0))Lf(d,C(19));else{e=P(I$,b.length);f=e.data;g=0;h=f.length;while(g<h){i=b[g];j=new I$;j.gP=new L0;if("kind" in i?1:0)j.xV=CG(i.kind);Xt(i.range,j.gP);f[g]=j;g=g+1|0;}b=c.qs;d=c.qt;k=c.qp;g=c.qq;if(b.e===d&&b.p==k&&b.s==g){b.jz=ARN(k,g,e);ADm(b);}}}
var AAX=F();
function LM(b,c,d){var e;if(!("then" in b?1:0))c.f(b);else{e=new Sn;e.vs=d;b.then(Bn(c,"f"),Bn(e,"f"));}}
function Me(){var a=this;B.call(a);a.tk=null;a.tj=null;}
function ANm(a,b){VM(b,a.tk,a.tj);}
function QH(){var a=this;B.call(a);a.r5=null;a.r4=null;}
function AG3(a,b){VM(b,a.r5,a.r4);}
var Qz=F(0);
var Nj=F(0);
var GG=F();
function Zu(){var a=this;GG.call(a);a.E$=null;a.G7=0;a.FE=0;a.C8=0;}
function Tf(){var a=this;B.call(a);a.s8=null;a.s9=null;}
function AGq(a){var b,c;b=a.s8;c=a.s9;R4();IY(b,c,AV0);}
function Tg(){var a=this;B.call(a);a.tc=null;a.td=null;}
function ADS(a){var b,c;b=a.tc;c=a.td;R4();IY(b,c,AV1);}
function Td(){var a=this;B.call(a);a.pG=null;a.pF=null;}
function AJj(a){IY(a.pG,a.pF,null);}
function Te(){var a=this;B.call(a);a.rc=null;a.rb=null;}
function AL5(a){var b,c,d,e,f,g,h,i,j;b=a.rc;c=a.rb;d=Dt(b.bt.e);e=FP(b.bt.e);d=Tb(b.bt.cA,d,e);Du(b.R.b1);b=b.bt;e=D1(b,c);if(d!==null){f=b.e;g=e.be;h=e.bi;e=new TL;e.uI=b;e.uJ=c;b=b.hy;c=d.tK;d=E8(f);f=HC(h,g);i=AJE(!!1);j=JF();c=c.provideReferences(d,f,i,j);d=new PS;d.pk=e;d.pj=b;LM(c,d,b);}}
function SU(){B.call(this);this.q7=null;}
function AKp(a){var b;b=a.q7;Du(b.R.b1);Gz(b.bt,Xe(b),0);}
function SW(){B.call(this);this.nL=null;}
function AL4(a){var b;b=a.nL;Du(b.R.b1);Gz(b.bt,Xe(b),1);}
function SV(){B.call(this);this.tD=null;}
function AN_(a){var b,c,d,e;b=a.tD;Du(b.R.b1);HL(b);b=b.bt;BT(b);c=new Nu;c.qz=b;b=YM(C(302));d=$rt_globals.navigator.clipboard.readText();e=new OT;e.tm=c;b=ADz(b);d.then(Bn(e,"f"),Bn(b,"f"));}
var P_=F(0);
var AUN=null;function ABF(){AUN=new Tt;}
function Xa(){B.call(this);this.om=null;}
function AMO(a){var b,c,d;b=a.om;Du(b.R.b1);c=HL(b);b=b.bt;BT(b);d=new OI;d.qL=b;Vs(c,d);}
function H2(){var a=this;B.call(a);a.q2=null;a.hP=null;a.iX=null;a.gT=null;a.hs=null;a.gV=null;a.fD=null;}
function IP(b,c,d,e){var f,g,h;f=new H2;f.gT=new Bk;f.hs=new Bk;f.gV=new Bk;f.fD=b;g=B6(e,b.fQ);if(g!==null)g.hc=g.hc+1|0;else{g=new UX;h=LS(c,b.fQ,d);g.hc=1;g.i5=h;EJ(e,b.fQ,g);}e=g.i5;f.q2=e;Bd(f.gT,e.bl|0,e.b7|0);e=LS(c,b.ik,d);f.hP=e;Bd(f.hs,e.bl|0,e.b7|0);b=LS(c,b.ix,d);f.iX=b;Bd(f.gV,b.bl|0,b.b7|0);return f;}
function UR(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.fD.fQ;f=B6(d,e);g=f.hc-1|0;f.hc=g;if(!g){a:{h=0;i=null;if(e===null){j=d.bX.data[0];while(j!==null){if(j.cs===null)break a;e=j.cy;i=j;j=e;}}else{k=Gm(e);l=d.bX.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.iK==k&&X1(e,j.cs))){m=j.cy;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cy=j.cy;else d.bX.data[h]=j.cy;d.cD=d.cD+1|0;d.cF=d.cF-1|0;}Kx(b,f.i5);}Kx(b,c.hP);Kx(b,c.iX);}
var Q8=F(0);
function XG(b,c){var d;d=new UY;d.oc=b;d.ob=c;return d;}
function XN(){var a=this;B.call(a);a.fF=null;a.gq=0;a.iA=0;a.f2=0;}
function AEV(a){var b=new XN();AHg(b,a);return b;}
function AHg(a,b){a.fF=BC();a.f2=0;a.iA=2048;a.gq=b;}
function LS(a,b,c){var d,e,f,g,h,i,j;d=Hz(c,b);e=a.iA;if(d>e){c=new Br;f=new R;U(f);BV(Bj(L(Bj(L(f,C(303)),d),C(304)),e),41);Bm(c,S(f));K(c);}if(!a.gq){b=new Bu;Bm(b,C(305));K(b);}a:{b=new B5;if(d){b:{c=a.fF;if(c.k>0){c=BI(c);g=d;while(true){if(!BJ(c))break b;f=BL(c);if(f.bl>=g)break;}Ck(b,f.by,f.b0,g,a.gq);f.by=f.by+g;h=f.bl-g;f.bl=h;if(h===0.0)UV(a.fF,f);break a;}}g=a.f2;i=d;Ck(b,0.0,g,i,a.gq);c=a.fF;f=new B5;h=a.f2;g=a.iA-d|0;j=a.gq;f.by=i;f.b0=h;f.bl=g;f.b7=j;Bv(c,f);a.f2=a.f2+a.gq|0;}}return b;}
function Kx(a,b){var c,d,e,f,g,h,i;a:{c=new B5;c.by=b.by;c.b0=b.b0;c.bl=b.bl;c.b7=b.b7;b=a.fF;if(b.k>0){d=BI(b);while(true){if(!BJ(d))break a;e=BL(d);if(e.b0===c.b0){f=e.by;g=e.bl;h=f+g;i=c.by;if(h===i){c.by=f;c.bl=c.bl+g;QP(d);}else{h=c.bl;if(i+h===f){c.bl=h+g;QP(d);}}}}}}Bv(a.fF,c);}
function MV(a){return Cp(a.iA,a.f2);}
function UI(){var a=this;EE.call(a);a.gS=null;a.gE=null;a.hO=null;a.eI=null;a.iV=0.0;a.it=0;a.hW=0;a.dh=null;a.jP=null;}
function JX(a){var b;b=a.q;return b.a&&b.b?0:1;}
function Vt(a){var b,c;a:{if(a.hO!==null){b=a.gE;if(b!==null&&!E3(b)){c=0;break a;}}c=1;}return c;}
function Pk(a,b){a.q.b=b;}
function PA(a,b,c,d,e){var f,g;f=a.gS.dl;Bd(f,d,a.q.b);g=a.L;Bz(b,g.a+c|0,g.b,f,e);}
function Ul(a){if(a.eI===null)a.eI=Io(a.gS,a.hO);}
var Wx=F(Em);
var AV2=null;function ABy(){AV2=E($rt_floatcls());}
var Fd=F();
var AV3=null;var AV4=null;var AV5=null;var AV6=null;var ASY=null;function AAj(){AV3=G7([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AV4=AFH([BM(1),BM(10),BM(100),BM(1000),BM(10000),BM(100000),BM(1000000),BM(10000000),BM(100000000),BM(1000000000),Dl(1410065408, 2),Dl(1215752192, 23),Dl(3567587328, 232),Dl(1316134912, 2328),Dl(276447232, 23283),Dl(2764472320, 232830),Dl(1874919424, 2328306),Dl(1569325056, 23283064),Dl(2808348672, 232830643)]);AV5=AFH([BM(1),BM(10),BM(100),BM(10000),BM(100000000),
Dl(1874919424, 2328306)]);AV6=new S7;ASY=new Ur;}
var Hg=F();
var AV7=0;var AV8=null;var AV9=null;function AA0(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.nB=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kh=0;c.j2=0;return;}if(f)d=e|8388608;else{d=e<<1;while(AGK(Xq(BM(d),BM(8388608)),AB9)){d=d<<1;f=f+(-1)|0;}}g=AA_(AV9,f);if(g<0)g= -g|0;h=AV9.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hb(d,AV8.data[e],i);if(j<AV7){while($rt_ucmp(j,AV7)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=AV9.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Hb(d,
AV8.data[e],i);}e=d<<1;d=e+1|0;h=AV8.data;f=g+1|0;k=h[f];l=i-1|0;m=Hb(d,k,l);n=Hb(e-1|0,AV8.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?T($rt_udiv(j,o),o):q<0?T($rt_udiv(j,k),k)+k|0:T($rt_udiv((j+(k/2|0)|0),k),k);if(HT(BM(d),BM(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.kh=d;c.j2=g-50|0;}
function Hb(b,c,d){return Zc(ARZ(AKO(Xq(BM(b),Dl(4294967295, 0)),Xq(BM(c),Dl(4294967295, 0))),32-d|0));}
function Zn(){AV7=$rt_udiv((-1),10);AV8=G7([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);AV9=G7([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Ur(){var a=this;B.call(a);a.kh=0;a.j2=0;a.nB=0;}
function V9(){B.call(this);this.ml=null;}
function AI8(a,b,c){var d,e;c=a.ml;d=c.e.f;e=b.bq;b=c.eF;RK(d.v.data[e],0,b);}
function Ut(){B.call(this);this.ow=null;}
function AF3(a,b){b.g9=a.ow;}
var VL=F(BS);
function D7(){var a=this;B.call(a);a.c9=null;a.j1=null;a.i8=null;a.is=null;a.k1=null;a.kV=null;}
function ABH(a,b,c){var d=new D7();ACa(d,a,b,c);return d;}
function ARz(a,b,c,d,e){var f=new D7();Yi(f,a,b,c,d,e);return f;}
function ACa(a,b,c,d){Yi(a,b,c,d,null,null);}
function Yi(a,b,c,d,e,f){var g;g=new WH;ABW(g);g.h1=new B5;a.c9=g;a.kV=c;a.i8=d;a.k1=f;a.j1=b;CC(g.cv,d.j5);CC(a.c9.dr,d.g$);a.is=e;}
function T2(a){return a.is===null?0:1;}
function T9(a,b){CC(a.c9.dr,!b?a.i8.g$:a.i8.sS);}
function Vh(){B.call(this);this.rO=null;}
function AFc(a){LO(a.rO);}
function Vf(){B.call(this);this.ol=null;}
function AEm(a){FX(a.ol);}
function Vi(){B.call(this);this.pD=null;}
function AJg(a){J4(a.pD);}
function Wm(){B.call(this);this.ue=null;}
function AMI(a){a.ue.u0();}
function Wl(){B.call(this);this.pM=null;}
function AIt(a){a.pM.vp();}
function NP(){B.call(this);this.tg=null;}
function AN2(a){var b,c,d,e,f,g,h,i;b=a.tg;c=(b.nP.eg()).data;d=P(D7,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new M0;i.tp=b;i.to=h;e[f]=ABH(i,h,b.R.T.S.bd);f=f+1|0;}return d;}
function Of(){B.call(this);this.qA=null;}
function AHr(a){var b,c,d,e,f;b=a.qA.e.f;c=b.ck;d=new R;U(d);Bj(L(d,C(306)),c);$rt_globals.console.info($rt_ustr(S(d)));c=b.f4;d=new R;U(d);Bj(L(d,C(307)),c);$rt_globals.console.info($rt_ustr(S(d)));d=b.cC;e=GZ(DX(b));Wa(d,0,d.dx,e);b=Eh();f=b.j3;f.data[0]=10;NY(b,f,0,1);}
function Og(){B.call(this);this.uo=null;}
function AOV(a){Q$(a.uo);}
function Oh(){B.call(this);this.sA=null;}
function AML(a){Sq(a.sA);}
function Oc(){B.call(this);this.mZ=null;}
function AIa(a){Hm(a.mZ);}
function Od(){B.call(this);this.vn=null;}
function APH(a){GS(a.vn);}
var KM=F(0);
function WT(){var a=this;B.call(a);a.ri=null;a.rj=null;a.rk=null;}
function N9(){B.call(this);this.pV=null;}
function AEv(a,b){var c,d;c=a.pV;d=Ha(b,c.br.cS.b-c.q.b|0);Xh(c.br,d);G2(c);}
function N8(){B.call(this);this.rm=null;}
function AEP(a,b){var c,d;c=a.rm;d=Ha(b,c.br.cS.a-c.q.a|0);Um(c.br,d);H5(c);}
var RC=F(Em);
var AV$=null;function Ll(b,c){return Long_udiv(b, c);}
function XV(b,c){return Long_urem(b, c);}
function HT(b,c){return Long_ucompare(b, c);}
function ZS(){AV$=E($rt_longcls());}
function Vg(){B.call(this);this.tC=null;}
function AKF(a,b,c){F2(BG(a.tC.e.f,b.bq),0,H(c));}
function P7(){var a=this;B.call(a);a.n0=null;a.nZ=null;}
function AGH(a,b){a.n0.i(ABb(a.nZ,b));}
var Il=F(0);
function Mn(){var a=this;B.call(a);a.mH=null;a.mG=null;}
function AIR(a){X_(a.mH,a.mG);}
function L_(){var a=this;B.call(a);a.rT=null;a.rU=null;}
function ADJ(a){a.rT.i(a.rU);}
function Sn(){B.call(this);this.vs=null;}
function AIA(a,b){Lf(a.vs,$rt_str(b.message));}
function UW(){B.call(this);this.q8=null;}
function APB(a){return a.q8;}
var Tt=F();
var S7=F();
function WB(){var a=this;B.call(a);a.mO=null;a.mN=null;a.mQ=null;a.mP=null;}
function AIl(a,b){var c,d,e,f,g,h,i;c=a.mO;d=a.mN;e=a.mQ;f=a.mP;if(!(b.done?1:0)){Ts(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new S_;c.o$=d;c.o_=g;c.pa=f;b.then(Bn(c,"f"),Bn(e,"f"));}else{h=f.data;c=g.values();b=Ch(g.name);i=h.length;f=C1(f,i+1|0);f.data[i]=b;Ts(c,d,e,f);}}}
function WH(){Im.call(this);this.h1=null;}
var LW=F(Br);
var ZH=F();
function QT(){var a=this;B.call(a);a.g=null;a.dp=0;a.jW=null;a.ni=0;a.gd=0;a.eD=0;a.bo=0;a.kR=null;}
function Js(a){return a.g.bD;}
function WS(a,b,c,d){var e,f,g,h,i,j;e=BC();f=a.dp;g=0;if(c!=f)a.dp=c;a:{switch(b){case -1073741784:h=new Rm;c=a.bo+1|0;a.bo=c;E1(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PT;c=a.bo+1|0;a.bo=c;E1(h,c);break a;case -33554392:h=new Sh;c=a.bo+1|0;a.bo=c;E1(h,c);break a;default:c=a.gd+1|0;a.gd=c;if(d!==null)h=ARJ(c);else{h=new Fb;E1(h,0);g=1;}c=a.gd;if(c<=(-1))break a;if(c>=10)break a;a.jW.data[c]=h;break a;}h=new WP;E1(h,(-1));}while(true){if(EL(a.g)&&a.g.h==(-536870788))
{d=AOw(B2(a,2),B2(a,64));while(!C0(a.g)&&EL(a.g)){i=a.g;j=i.h;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cj(d,Be(i));i=a.g;if(i.bb!=(-536870788))continue;Be(i);}i=Ka(a,d);i.M(h);}else if(a.g.bb==(-536870788)){i=Gq(h);Be(a.g);}else{i=O8(a,h);d=a.g;if(d.bb==(-536870788))Be(d);}if(i!==null)Bv(e,i);if(C0(a.g))break;if(a.g.bb==(-536870871))break;}if(a.g.kd==(-536870788))Bv(e,Gq(h));if(a.dp!=f&&!g){a.dp=f;d=a.g;d.fT=f;d.h=d.bb;d.ew=d.eK;j=d.c1;d.t=j+1|0;d.gY=j;EO(d);}switch(b){case -1073741784:break;case -536870872:d
=new Ml;Fc(d,e,h);return d;case -268435416:d=new U$;Fc(d,e,h);return d;case -134217688:d=new QX;Fc(d,e,h);return d;case -67108824:d=new SH;Fc(d,e,h);return d;case -33554392:d=new Dr;Fc(d,e,h);return d;default:switch(e.k){case 0:break;case 1:return ARu(Bq(e,0),h);default:return AQ$(e,h);}return Gq(h);}d=new It;Fc(d,e,h);return d;}
function ACb(a){var b,c,d,e,f,g,h;b=BD(4);c=(-1);d=(-1);if(!C0(a.g)&&EL(a.g)){e=b.data;c=Be(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BY(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bb;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Be(f);f=a.g;g=f.bb;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Be(f);return AOi(e,3);}return AOi(e,2);}if(!B2(a,2))return Y0(b[0]);if(B2(a,64))return AMo(b[0]);return AFI(b[0]);}e=b.data;c=1;while(c<4&&!C0(a.g)&&EL(a.g)){h=c+1|0;e[c]=Be(a.g);c=h;}if(c==1){h=e[0];if(!(AV_.xA(h)==AWa?0:1))return WM(a,e[0]);}if
(!B2(a,2))return ASi(b,c);if(B2(a,64)){f=new WA;NQ(f,b,c);return f;}f=new SQ;NQ(f,b,c);return f;}
function O8(a,b){var c,d,e,f,g,h,i;if(EL(a.g)&&!Jb(a.g)&&JL(a.g.h)){if(B2(a,128)){c=ACb(a);if(!C0(a.g)){d=a.g;e=d.bb;if(!(e==(-536870871)&&!(b instanceof Fb))&&e!=(-536870788)&&!EL(d))c=LI(a,b,c);}}else if(!N1(a.g)&&!Ug(a.g)){f=new N4;U(f);while(!C0(a.g)&&EL(a.g)&&!N1(a.g)&&!Ug(a.g)){if(!(!Jb(a.g)&&!a.g.h)&&!(!Jb(a.g)&&JL(a.g.h))){g=a.g.h;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Be(a.g);if(!LA(e))BV(f,e&65535);else HZ(f,F$(e));}if(!B2(a,2)){c=new Rh;Db(c);c.ci
=S(f);e=f.H;c.bA=e;c.j$=AK1(e);c.kT=AK1(c.bA);h=0;while(h<(c.bA-1|0)){Q2(c.j$,I(c.ci,h),(c.bA-h|0)-1|0);Q2(c.kT,I(c.ci,(c.bA-h|0)-1|0),(c.bA-h|0)-1|0);h=h+1|0;}}else if(B2(a,64))c=ASg(f);else{c=new MW;Db(c);c.g1=S(f);c.bA=f.H;}}else c=LI(a,b,Wz(a,b));}else{d=a.g;if(d.bb!=(-536870871))c=LI(a,b,Wz(a,b));else{if(b instanceof Fb)K(BZ(C(3),d.bD,N0(d)));c=Gq(b);}}a:{if(!C0(a.g)){e=a.g.bb;if(!(e==(-536870871)&&!(b instanceof Fb))&&e!=(-536870788)){f=O8(a,b);if(c instanceof CL&&!(c instanceof EQ)&&!(c instanceof CB)
&&!(c instanceof Ef)){i=c;if(!f.bP(i.F)){c=new Vr;EA(c,i.F,i.d,i.hf);c.F.M(c);}}if((f.hk()&65535)!=43)c.M(f);else c.M(f.F);break a;}}if(c===null)return null;c.M(b);}if((c.hk()&65535)!=43)return c;return c.F;}
function LI(a,b,c){var d,e,f,g,h;d=a.g;e=d.bb;if(c!==null&&!(c instanceof BU)){switch(e){case -2147483606:Be(d);d=new Xl;CW(d,c,b,e);LQ();c.M(AWb);return d;case -2147483605:Be(d);d=new PI;CW(d,c,b,(-2147483606));LQ();c.M(AWb);return d;case -2147483585:Be(d);d=new Pj;CW(d,c,b,(-536870849));LQ();c.M(AWb);return d;case -2147483525:f=new MS;d=EU(d);g=a.eD+1|0;a.eD=g;IG(f,d,c,b,(-536870849),g);LQ();c.M(AWb);return f;case -1073741782:case -1073741781:Be(d);d=new Re;CW(d,c,b,e);c.M(d);return d;case -1073741761:Be(d);d
=new Qt;CW(d,c,b,(-536870849));c.M(b);return d;case -1073741701:h=new TN;d=EU(d);e=a.eD+1|0;a.eD=e;IG(h,d,c,b,(-536870849),e);c.M(h);return h;case -536870870:case -536870869:Be(d);if(c.hk()!=(-2147483602)){d=new CB;CW(d,c,b,e);}else if(B2(a,32)){d=new Rf;CW(d,c,b,e);}else{d=new Oi;f=Pl(a.dp);CW(d,c,b,e);d.kc=f;}c.M(d);return d;case -536870849:Be(d);d=new Fr;CW(d,c,b,(-536870849));c.M(b);return d;case -536870789:h=new EV;d=EU(d);e=a.eD+1|0;a.eD=e;IG(h,d,c,b,(-536870849),e);c.M(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Be(d);d=new Xp;EA(d,f,b,e);f.d=d;return d;case -2147483585:Be(d);c=new Vk;EA(c,f,b,(-2147483585));return c;case -2147483525:c=new O7;RF(c,EU(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Be(d);d=new Qp;EA(d,f,b,e);f.d=d;return d;case -1073741761:Be(d);c=new S4;EA(c,f,b,(-1073741761));return c;case -1073741701:c=new QY;RF(c,EU(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Be(d);d=ARC(f,b,e);f.d=d;return d;case -536870849:Be(d);c
=new Ef;EA(c,f,b,(-536870849));return c;case -536870789:return AQE(EU(d),f,b,(-536870789));default:}return c;}
function Wz(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fb;while(true){a:{e=a.g;f=e.bb;if((f&(-2147418113))==(-2147483608)){Be(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dp=g;else{if(f!=(-1073741784))g=a.dp;c=WS(a,f,g,b);e=a.g;if(e.bb!=(-536870871))K(BZ(C(3),e.bD,e.c1));Be(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Be(e);c
=AN6(0);break a;case -2147483577:Be(e);c=new N_;BK(c);break a;case -2147483558:Be(e);c=new Wd;h=a.bo+1|0;a.bo=h;ACy(c,h);break a;case -2147483550:Be(e);c=AN6(1);break a;case -2147483526:Be(e);c=new VO;BK(c);break a;case -536870876:Be(e);a.bo=a.bo+1|0;if(B2(a,8)){if(B2(a,1)){c=AQW(a.bo);break a;}c=AQj(a.bo);break a;}if(B2(a,1)){c=ARc(a.bo);break a;}c=ARQ(a.bo);break a;case -536870866:Be(e);if(B2(a,32)){c=AR5();break a;}c=ARH(Pl(a.dp));break a;case -536870821:Be(e);i=0;c=a.g;if(c.bb==(-536870818)){i=1;Be(c);}c
=Ka(a,FH(a,i));c.M(b);e=a.g;if(e.bb!=(-536870819))K(BZ(C(3),e.bD,e.c1));OO(e,1);Be(a.g);break a;case -536870818:Be(e);a.bo=a.bo+1|0;if(!B2(a,8)){c=new JQ;BK(c);break a;}c=new M1;e=Pl(a.dp);BK(c);c.qT=e;break a;case 0:j=e.eK;if(j!==null)c=Ka(a,j);else{if(C0(e)){c=Gq(b);break a;}c=Y0(f&65535);}Be(a.g);break a;default:break b;}Be(e);c=new JQ;BK(c);break a;}h=(f&2147483647)-48|0;if(a.gd<h)K(BZ(C(3),EZ(e),N0(a.g)));Be(e);a.bo=a.bo+1|0;c=!B2(a,2)?AQn(h,a.bo):B2(a,64)?AQX(h,a.bo):ASc(h,a.bo);a.jW.data[h].jU=1;a.ni
=1;break a;}if(f>=0&&!Gt(e)){c=WM(a,f);Be(a.g);}else if(f==(-536870788))c=Gq(b);else{if(f!=(-536870871)){b=new If;c=!Gt(a.g)?V_(f&65535):a.g.eK.cw();e=a.g;IR(b,c,e.bD,e.c1);K(b);}if(d){b=new If;e=a.g;IR(b,C(3),e.bD,e.c1);K(b);}c=Gq(b);}}}if(f!=(-16777176))break;}return c;}
function FH(a,b){var c,d,e,f,g,h,i,j,$$je;c=AOw(B2(a,2),B2(a,64));Ea(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(C0(a.g))break a;h=a.g;b=h.bb;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cj(c,d);d=Be(a.g);h=a.g;if(h.bb!=(-536870874)){d=38;break d;}if(h.h==(-536870821)){Be(h);e=1;d=(-1);break d;}Be(h);if(g){c=FH(a,0);break d;}if(a.g.bb==(-536870819))break d;VW(c,FH(a,0));break d;case -536870867:if(!g){b=h.h;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Be(h);h=a.g;i=h.bb;if(Gt(h))break c;if
(i<0){j=a.g.h;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(JL(i))break e;i=i&65535;break e;}catch($$e){$$je=E5($$e);if($$je instanceof DN){break b;}else{throw $$e;}}}try{BQ(c,d,i);}catch($$e){$$je=E5($$e);if($$je instanceof DN){break b;}else{throw $$e;}}Be(a.g);d=(-1);break d;}}if(d>=0)Cj(c,d);d=45;Be(a.g);break d;case -536870821:if(d>=0){Cj(c,d);d=(-1);}Be(a.g);j=0;h=a.g;if(h.bb==(-536870818)){Be(h);j=1;}if(!e)Xz(c,FH(a,j));else VW(c,FH(a,j));e=0;Be(a.g);break d;case -536870819:if(d>=0)Cj(c,
d);d=93;Be(a.g);break d;case -536870818:if(d>=0)Cj(c,d);d=94;Be(a.g);break d;case 0:if(d>=0)Cj(c,d);h=a.g.eK;if(h===null)d=0;else{ADx(c,h);d=(-1);}Be(a.g);break d;default:}if(d>=0)Cj(c,d);d=Be(a.g);}g=0;}K(BZ(C(3),Js(a),a.g.c1));}K(BZ(C(3),Js(a),a.g.c1));}if(!f){if(d>=0)Cj(c,d);return c;}K(BZ(C(3),Js(a),a.g.c1-1|0));}
function WM(a,b){var c,d,e;c=LA(b);if(B2(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AFI(b&65535);}if(B2(a,64)&&b>128){if(c){d=new Mf;Db(d);d.bA=2;d.p8=Gi(Ge(b));return d;}if(OZ(b))return AK8(b&65535);if(!RY(b))return AMo(b&65535);return AIK(b&65535);}}if(!c){if(OZ(b))return AK8(b&65535);if(!RY(b))return Y0(b&65535);return AIK(b&65535);}d=new DB;Db(d);d.bA=2;d.fE=b;e=(F$(b)).data;d.jl=e[0];d.h5=e[1];return d;}
function Ka(a,b){var c,d,e;if(!AAQ(b)){if(!b.I){if(b.gI())return AIh(b);return AN7(b);}if(!b.gI())return AJf(b);c=new II;Ti(c,b);return c;}c=X2(b);d=new Mt;BK(d);d.o2=c;d.vT=c.ba;if(!b.I){if(b.gI())return ABA(AIh(G6(b)),d);return ABA(AN7(G6(b)),d);}if(!b.gI())return ABA(AJf(G6(b)),d);c=new Qh;e=new II;Ti(e,G6(b));ADk(c,e,d);return c;}
function G_(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function B2(a,b){return (a.dp&b)!=b?0:1;}
var X4=F();
function YD(b){var c,d,e,f,g,h,i,j;c=AFp();d=Ca(b);Bl(c,d);e=0;f=0;while(f<d){g=BG(b,f);h=g.l.data.length;Bl(c,h);i=0;while(i<h){j=Ky(g,i);Gg(c,e,Lq(j));e=e+Lq(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return P1(c);}
function X$(b){var c,d,e,f,g,h,i,j,k;c=W(b);d=P(HG,c);e=d.data;f=0;while(f<c){a:{g=W(b);if(g!=(-1)){h=W(b);i=W(b);if(i==(-1)){j=new HG;j.fO=h;e[g]=j;}else{j=new HG;j.fO=h;j.kY=BD(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].kY.data[k]=W(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function W6(){B.call(this);this.ro=null;}
function ALb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.ro;d=Ds(c[0]);c=Vl(d);e=new Up;d=X$(c);f=X$(c);g=W(c);h=P(Ln,g);i=h.data;j=0;while(j<g){k=W(c);l=W(c);m=W(c);n=W(c);o=W(c);p=new Ln;p.hn=k;p.lS=l;p.hm=m;p.lR=n;p.jV=o;i[j]=p;j=j+1|0;}e.xT=d;e.us=f;e.fJ=h;b.fB=e;Ji(b.y,d);Ji(b.x,b.fB.us);}
function VY(){B.call(this);this.mA=null;}
function ALQ(a,b){b.ff=a.mA;}
var ABI=F();
function Y4(b,c,d,e,f,g){g.a=c.a;g.b=f;Bz(b,d.a,d.b,g,e);Bz(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bz(b,d.a,d.b+f|0,g,e);Bz(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ABh(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bz(b,j,k,i,h);Bz(b,j,k,i,h);Bz(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bz(b,l,j,i,h);Bz(b,l,j,i,h);Bz(b,l+g|0,j+g|0,i,h);}
var RU=F(0);
var AUL=null;function ABw(){AUL=new Qs;}
var Gl=F(0);
function Uj(){B.call(this);this.sf=null;}
function AJq(a,b,c,d){I4(a.sf,b,c.bq,d.bq);}
function Uh(){B.call(this);this.oB=null;}
function AE4(a,b,c,d){I4(a.oB,b,c.bq,d.bq);}
function HI(){B.call(this);this.l2=0;}
var AWc=null;var AWd=null;var AWe=null;function ALV(a){var b=new HI();ABD(b,a);return b;}
function ABD(a,b){a.l2=b;}
function ZP(a){return a.l2;}
function OU(b){return !b?AWd:AWc;}
function Yd(){AWc=ALV(1);AWd=ALV(0);AWe=E($rt_booleancls());}
var FL=F(0);
var ACZ=F();
var OC=F(0);
var AC0=F();
function R3(){B.call(this);this.vJ=null;}
function ALI(a,b,c,d){HQ(a.vJ,b,c.bq,d.bq);}
var R1=F();
function AJD(a,b){return b.cQ.cg>=0?0:1;}
var R0=F();
function ANz(a,b){var c;a:{b:{b=b;if(b!==null){b=b.dm;if(b===null)break b;if(b.cg>=0)break b;}c=1;break a;}c=0;}return c;}
function RZ(){B.call(this);this.mo=null;}
function AMa(a,b,c,d){HQ(a.mo,b,c.bq,d.bq);}
function BA(){var a=this;B.call(a);a.d=null;a.b8=0;a.ov=null;a.hf=0;}
var ASU=0;function BK(a){var b;b=ASU;ASU=b+1|0;a.ov=KW(b);}
function J7(a,b){var c;c=ASU;ASU=c+1|0;a.ov=KW(c);a.d=b;}
function Hc(a,b,c,d){var e;e=d.u;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Hn(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AF7(a,b){a.hf=b;}
function AFq(a){return a.hf;}
function ANs(a){return a.d;}
function AOn(a,b){a.d=b;}
function AOm(a,b){return 1;}
function APf(a){return null;}
function IB(a){var b;a.b8=1;b=a.d;if(b!==null){if(!b.b8){b=b.fk();if(b!==null){a.d.b8=1;a.d=b;}a.d.ec();}else if(b instanceof Ga&&b.ei.jU)a.d=b.d;}}
function ADr(){ASU=1;}
var T7=F(0);
function UY(){var a=this;B.call(a);a.oc=null;a.ob=0.0;}
function Hz(a,b){return J$(a.oc,b,a.ob*2.0+0.875);}
function Nc(){var a=this;B.call(a);a.p9=null;a.p$=null;a.p_=0;a.qa=0;}
function AGf(a,b){b=b;DT(a.p9,a.p$,b,a.p_,a.qa);}
function Nd(){var a=this;B.call(a);a.ub=null;a.t9=null;a.t$=0;a.t_=0;}
function ALO(a,b){b=b;DT(a.ub,a.t9,b,a.t$,a.t_);}
var Qs=F();
function AK0(a,b){}
function CA(){var a=this;BA.call(a);a.jU=0;a.dt=0;}
var AWb=null;function LQ(){LQ=Bi(CA);AG_();}
function ARJ(a){var b=new CA();E1(b,a);return b;}
function E1(a,b){LQ();BK(a);a.dt=b;}
function AET(a,b,c,d){var e,f;e=H4(d,a.dt);I6(d,a.dt,b);f=a.d.c(b,c,d);if(f<0)I6(d,a.dt,e);return f;}
function AKa(a){return a.dt;}
function AFa(a,b){return 0;}
function AG_(){var b;b=new N5;BK(b);AWb=b;}
function Gn(){var a=this;B.call(a);a.Z=null;a.fT=0;a.ez=0;a.t5=0;a.kd=0;a.bb=0;a.h=0;a.rr=0;a.eK=null;a.ew=null;a.t=0;a.hu=0;a.c1=0;a.gY=0;a.bD=null;}
var AWf=null;var AV_=null;var AWa=0;function OO(a,b){if(b>0&&b<3)a.ez=b;if(b==1){a.h=a.bb;a.ew=a.eK;a.t=a.gY;a.gY=a.c1;EO(a);}}
function Gt(a){return a.eK===null?0:1;}
function Jb(a){return a.ew===null?0:1;}
function Be(a){EO(a);return a.kd;}
function EU(a){var b;b=a.eK;EO(a);return b;}
function EO(a){var b,c,d,e,f,g,h,$$je;a.kd=a.bb;a.bb=a.h;a.eK=a.ew;a.c1=a.gY;a.gY=a.t;while(true){b=0;c=a.t>=a.Z.data.length?0:K$(a);a.h=c;a.ew=null;if(a.ez==4){if(c!=92)return;c=a.t;d=a.Z.data;c=c>=d.length?0:d[BR(a)];a.h=c;switch(c){case 69:break;default:a.h=92;a.t=a.hu;return;}a.ez=a.t5;a.h=a.t>(a.Z.data.length-2|0)?0:K$(a);}a:{c=a.h;if(c!=92){e=a.ez;if(e==1)switch(c){case 36:a.h=(-536870876);break a;case 40:if(a.Z.data[a.t]!=63){a.h=(-2147483608);break a;}BR(a);c=a.Z.data[a.t];e=0;while(true){b:{if(e){e
=0;switch(c){case 33:break;case 61:a.h=(-134217688);BR(a);break b;default:K(BZ(C(3),EZ(a),a.t));}a.h=(-67108824);BR(a);}else{switch(c){case 33:break;case 60:BR(a);c=a.Z.data[a.t];e=1;break b;case 61:a.h=(-536870872);BR(a);break b;case 62:a.h=(-33554392);BR(a);break b;default:f=ADt(a);a.h=f;if(f<256){a.fT=f;f=f<<16;a.h=f;a.h=(-1073741784)|f;break b;}f=f&255;a.h=f;a.fT=f;f=f<<16;a.h=f;a.h=(-16777176)|f;break b;}a.h=(-268435416);BR(a);}}if(!e)break;}break a;case 41:a.h=(-536870871);break a;case 42:case 43:case 63:e
=a.t;d=a.Z.data;switch(e>=d.length?42:d[e]){case 43:a.h=c|(-2147483648);BR(a);break a;case 63:a.h=c|(-1073741824);BR(a);break a;default:}a.h=c|(-536870912);break a;case 46:a.h=(-536870866);break a;case 91:a.h=(-536870821);OO(a,2);break a;case 93:if(e!=2)break a;a.h=(-536870819);break a;case 94:a.h=(-536870818);break a;case 123:a.ew=AC1(a,c);break a;case 124:a.h=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.h=(-536870874);break a;case 45:a.h=(-536870867);break a;case 91:a.h=(-536870821);break a;case 93:a.h
=(-536870819);break a;case 94:a.h=(-536870818);break a;default:}}else{c=a.t>=(a.Z.data.length-2|0)?(-1):K$(a);c:{a.h=c;switch(c){case -1:K(BZ(C(3),EZ(a),a.t));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.h
=ABn(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.ez!=1)break a;a.h=(-2147483648)|c;break a;case 65:a.h=(-2147483583);break a;case 66:a.h=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(BZ(C(3),EZ(a),a.t));case 68:case 83:case 87:case 100:case 115:case 119:a.ew=Rz(Ek(a.Z,
a.hu,1),0);a.h=0;break a;case 71:a.h=(-2147483577);break a;case 80:case 112:break c;case 81:a.t5=a.ez;a.ez=4;b=1;break a;case 90:a.h=(-2147483558);break a;case 97:a.h=7;break a;case 98:a.h=(-2147483550);break a;case 99:c=a.t;d=a.Z.data;if(c>=(d.length-2|0))K(BZ(C(3),EZ(a),a.t));a.h=d[BR(a)]&31;break a;case 101:a.h=27;break a;case 102:a.h=12;break a;case 110:a.h=10;break a;case 114:a.h=13;break a;case 116:a.h=9;break a;case 117:a.h=PL(a,4);break a;case 120:a.h=PL(a,2);break a;case 122:a.h=(-2147483526);break a;default:}break a;}g
=AA5(a);h=0;if(a.h==80)h=1;try{a.ew=Rz(g,h);}catch($$e){$$je=E5($$e);if($$je instanceof IL){K(BZ(C(3),EZ(a),a.t));}else{throw $$e;}}a.h=0;}}if(b)continue;else break;}}
function AA5(a){var b,c,d,e,f,g;b=new R;FD(b,10);c=a.t;d=a.Z;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ek(d,BR(a),1);f=new R;U(f);L(L(f,C(308)),b);return S(f);}BR(a);c=0;a:{while(true){g=a.t;d=a.Z.data;if(g>=(d.length-2|0))break;c=d[BR(a)];if(c==125)break a;BV(b,c);}}if(c!=125)K(BZ(C(3),a.bD,a.t));}if(!b.H)K(BZ(C(3),a.bD,a.t));f=S(b);if(H(f)==1){b=new R;U(b);L(L(b,C(308)),f);return S(b);}b:{c:{if(H(f)>3){if(J0(f,C(308)))break c;if(J0(f,C(309)))break c;}break b;}f=DI(f,2);}return f;}
function AC1(a,b){var c,d,e,f,g,$$je;c=new R;FD(c,4);d=(-1);e=2147483647;a:{while(true){f=a.t;g=a.Z.data;if(f>=g.length)break a;b=g[BR(a)];if(b==125)break a;if(b==44&&d<0)try{d=I1(G8(c),10);AC5(c,0,Ye(c));continue;}catch($$e){$$je=E5($$e);if($$je instanceof CX){break;}else{throw $$e;}}BV(c,b&65535);}K(BZ(C(3),a.bD,a.t));}if(b!=125)K(BZ(C(3),a.bD,a.t));if(c.H>0)b:{try{e=I1(G8(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E5($$e);if($$je instanceof CX){}else{throw $$e;}}K(BZ(C(3),a.bD,a.t));}else if(d<0)K(BZ(C(3),
a.bD,a.t));if((d|e|(e-d|0))<0)K(BZ(C(3),a.bD,a.t));b=a.t;g=a.Z.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.h=(-2147483525);BR(a);break c;case 63:a.h=(-1073741701);BR(a);break c;default:}a.h=(-536870789);}c=new MG;c.ey=d;c.et=e;return c;}
function EZ(a){return a.bD;}
function C0(a){return !a.bb&&!a.h&&a.t==a.rr&&!Gt(a)?1:0;}
function JL(b){return b<0?0:1;}
function EL(a){return !C0(a)&&!Gt(a)&&JL(a.bb)?1:0;}
function N1(a){var b;b=a.bb;return b<=56319&&b>=55296?1:0;}
function Ug(a){var b;b=a.bb;return b<=57343&&b>=56320?1:0;}
function RY(b){return b<=56319&&b>=55296?1:0;}
function OZ(b){return b<=57343&&b>=56320?1:0;}
function PL(a,b){var c,d,e,f,$$je;c=new R;FD(c,b);d=a.Z.data.length-2|0;e=0;while(true){f=BB(e,b);if(f>=0)break;if(a.t>=d)break;BV(c,a.Z.data[BR(a)]);e=e+1|0;}if(!f)a:{try{b=I1(G8(c),16);}catch($$e){$$je=E5($$e);if($$je instanceof CX){break a;}else{throw $$e;}}return b;}K(BZ(C(3),a.bD,a.t));}
function ABn(a){var b,c,d,e,f,g;b=3;c=1;d=a.Z.data;e=d.length-2|0;f=TF(d[a.t],8);switch(f){case -1:break;default:if(f>3)b=2;BR(a);a:{while(true){if(c>=b)break a;g=a.t;if(g>=e)break a;g=TF(a.Z.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BR(a);c=c+1|0;}}return f;}K(BZ(C(3),a.bD,a.t));}
function ADt(a){var b,c,d,e;b=1;c=a.fT;a:while(true){d=a.t;e=a.Z.data;if(d>=e.length)K(BZ(C(3),a.bD,d));b:{c:{switch(e[d]){case 41:BR(a);return c|256;case 45:if(!b)K(BZ(C(3),a.bD,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BR(a);}BR(a);return c;}
function BR(a){var b,c,d,e,f;b=a.t;a.hu=b;if(!(a.fT&4))a.t=b+1|0;else{c=a.Z.data.length-2|0;a.t=b+1|0;a:while(true){d=a.t;if(d<c&&QV(a.Z.data[d])){a.t=a.t+1|0;continue;}d=a.t;if(d>=c)break;e=a.Z.data;if(e[d]!=35)break;a.t=d+1|0;while(true){f=a.t;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.t=f+1|0;}}}return a.hu;}
function ACM(b){return AWf.CF(b);}
function K$(a){var b,c,d,e;b=a.Z.data[BR(a)];if(Cr(b)){c=a.hu+1|0;d=a.Z.data;if(c<d.length){e=d[c];if(CN(e)){BR(a);return Ec(b,e);}}}return b;}
function N0(a){return a.c1;}
function If(){var a=this;Bu.call(a);a.xj=null;a.wX=null;a.pT=0;}
function BZ(a,b,c){var d=new If();IR(d,a,b,c);return d;}
function IR(a,b,c,d){X(a);a.pT=(-1);a.xj=b;a.wX=c;a.pT=d;}
var ACT=F();
function We(){B.call(this);this.tN=null;}
function ALX(a,b){var c,d;c=a.tN;d=0;while(d<b.length){X_(c,b[d]);d=d+1|0;}}
var AAY=F(0);
function S_(){var a=this;B.call(a);a.o$=null;a.o_=null;a.pa=null;}
function ALx(a,b){a.o$.i(AQk(a.o_,b,a.pa));}
var Rm=F(CA);
function AEq(a,b,c,d){var e;e=a.dt;BF(d,e,b-C3(d,e)|0);return a.d.c(b,c,d);}
function AM1(a,b){return 0;}
var WP=F(CA);
function AF4(a,b,c,d){return b;}
var PT=F(CA);
function AFn(a,b,c,d){if(C3(d,a.dt)!=b)b=(-1);return b;}
function Sh(){CA.call(this);this.m2=0;}
function AEw(a,b,c,d){var e;e=a.dt;BF(d,e,b-C3(d,e)|0);a.m2=b;return b;}
function ALK(a,b){return 0;}
var Fb=F(CA);
function AOD(a,b,c,d){if(d.i2!=1&&b!=d.u)return (-1);d.iw=1;I6(d,0,b);return b;}
function BU(){BA.call(this);this.bA=0;}
function Db(a){BK(a);a.bA=1;}
function APG(a,b,c,d){var e;if((b+a.bT()|0)>d.u){d.dd=1;return (-1);}e=a.bn(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ANR(a){return a.bA;}
function AIY(a,b){return 1;}
var ACx=F(BU);
function Gq(a){var b=new ACx();AKj(b,a);return b;}
function AKj(a,b){J7(a,b);a.bA=1;a.hf=1;a.bA=0;}
function ANl(a,b,c){return 0;}
function AHd(a,b,c,d){var e,f,g;e=d.u;f=d.cH;while(true){g=BB(b,e);if(g>0)return (-1);if(g<0&&CN(I(c,b))&&b>f&&Cr(I(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AFW(a,b,c,d,e){var f,g;f=e.u;g=e.cH;while(true){if(c<b)return (-1);if(c<f&&CN(I(d,c))&&c>g&&Cr(I(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AEu(a,b){return 0;}
function BP(){var a=this;BA.call(a);a.bx=null;a.ei=null;a.W=0;}
function AQ$(a,b){var c=new BP();Fc(c,a,b);return c;}
function Fc(a,b,c){BK(a);a.bx=b;a.ei=c;a.W=c.dt;}
function AHZ(a,b,c,d){var e,f,g,h;if(a.bx===null)return (-1);e=Fg(d,a.W);Da(d,a.W,b);f=a.bx.k;g=0;while(true){if(g>=f){Da(d,a.W,e);return (-1);}h=(Bq(a.bx,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ALA(a,b){a.ei.d=b;}
function AJJ(a,b){var c;a:{c=a.bx;if(c!==null){c=BI(c);while(true){if(!BJ(c))break a;if(!(BL(c)).bP(b))continue;else return 1;}}}return 0;}
function AMg(a,b){return H4(b,a.W)>=0&&Fg(b,a.W)==H4(b,a.W)?0:1;}
function AFR(a){var b,c,d,e;a.b8=1;b=a.ei;if(b!==null&&!b.b8)IB(b);a:{b=a.bx;if(b!==null){c=b.k;d=0;while(true){if(d>=c)break a;b=Bq(a.bx,d);e=b.fk();if(e===null)e=b;else{b.b8=1;Fi(a.bx,d);Rd(a.bx,d,e);}if(!e.b8)e.ec();d=d+1|0;}}}if(a.d!==null)IB(a);}
var It=F(BP);
function ALk(a,b,c,d){var e,f,g,h;e=C3(d,a.W);BF(d,a.W,b);f=a.bx.k;g=0;while(true){if(g>=f){BF(d,a.W,e);return (-1);}h=(Bq(a.bx,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AMx(a,b){return !C3(b,a.W)?0:1;}
var Dr=F(It);
function AGt(a,b,c,d){var e,f,g;e=C3(d,a.W);BF(d,a.W,b);f=a.bx.k;g=0;while(g<f){if((Bq(a.bx,g)).c(b,c,d)>=0)return a.d.c(a.ei.m2,c,d);g=g+1|0;}BF(d,a.W,e);return (-1);}
function AMl(a,b){a.d=b;}
var Ml=F(Dr);
function ALu(a,b,c,d){var e,f;e=a.bx.k;f=0;while(f<e){if((Bq(a.bx,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AOs(a,b){return 0;}
var U$=F(Dr);
function AE7(a,b,c,d){var e,f;e=a.bx.k;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bq(a.bx,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ANX(a,b){return 0;}
var QX=F(Dr);
function AFO(a,b,c,d){var e,f,g,h;e=a.bx.k;f=d.iB?0:d.cH;a:{g=a.d.c(b,c,d);if(g>=0){BF(d,a.W,b);h=0;while(true){if(h>=e)break a;if((Bq(a.bx,h)).cd(f,b,c,d)>=0){BF(d,a.W,(-1));return g;}h=h+1|0;}}}return (-1);}
function AP0(a,b){return 0;}
var SH=F(Dr);
function AD0(a,b,c,d){var e,f;e=a.bx.k;BF(d,a.W,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bq(a.bx,f)).cd(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AMQ(a,b){return 0;}
function Ga(){BP.call(this);this.cO=null;}
function ARu(a,b){var c=new Ga();YQ(c,a,b);return c;}
function YQ(a,b,c){BK(a);a.cO=b;a.ei=c;a.W=c.dt;}
function AEj(a,b,c,d){var e,f;e=Fg(d,a.W);Da(d,a.W,b);f=a.cO.c(b,c,d);if(f>=0)return f;Da(d,a.W,e);return (-1);}
function AJY(a,b,c,d){var e;e=a.cO.b_(b,c,d);if(e>=0)Da(d,a.W,e);return e;}
function AM7(a,b,c,d,e){var f;f=a.cO.cd(b,c,d,e);if(f>=0)Da(e,a.W,f);return f;}
function AJC(a,b){return a.cO.bP(b);}
function ALE(a){var b;b=new MN;YQ(b,a.cO,a.ei);a.d=b;return b;}
function APh(a){var b;a.b8=1;b=a.ei;if(b!==null&&!b.b8)IB(b);b=a.cO;if(b!==null&&!b.b8){b=b.fk();if(b!==null){a.cO.b8=1;a.cO=b;}a.cO.ec();}}
function I$(){var a=this;B.call(a);a.gP=null;a.xV=null;}
var AAk=F();
var ACP=F();
function Xt(b,c){c.fL=b.startColumn-1|0;c.e_=b.startLineNumber-1|0;c.ij=b.endColumn-1|0;c.i6=b.endLineNumber-1|0;}
function ADT(b,c,d,e){return {endColumn:b,endLineNumber:c,startColumn:d,startLineNumber:e};}
var Gp=F();
function Q(){var a=this;Gp.call(a);a.ba=0;a.b5=0;a.G=null;a.i7=null;a.jR=null;a.I=0;}
var AWg=null;function OK(){OK=Bi(Q);AGh();}
function Bp(a){var b;OK();b=new V$;b.z=BD(64);a.G=b;}
function AE9(a){return null;}
function AEJ(a){return a.G;}
function AAQ(a){var b,c,d,e,f;if(!a.b5)b=GT(a.G,0)>=2048?0:1;else{a:{c=a.G;b=0;d=c.bk;if(b<d){e=c.z.data;f=(e[0]^(-1))>>>0|0;if(f)b=HW(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+HW(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AIg(a){return a.I;}
function ANN(a){return a;}
function X2(a){var b,c;if(a.jR===null){b=a.eJ();c=new Vq;c.xG=a;c.ns=b;Bp(c);a.jR=c;Ea(c,a.b5);}return a.jR;}
function G6(a){var b,c;if(a.i7===null){b=a.eJ();c=new Vn;c.xl=a;c.ts=b;c.ul=a;Bp(c);a.i7=c;Ea(c,a.ba);a.i7.I=a.I;}return a.i7;}
function APd(a){return 0;}
function Ea(a,b){var c;c=a.ba;if(c^b){a.ba=c?0:1;a.b5=a.b5?0:1;}if(!a.I)a.I=1;return a;}
function AHl(a){return a.ba;}
function JH(b,c){OK();return b.j(c);}
function HV(b,c){var d,e;OK();if(b.c7()!==null&&c.c7()!==null){b=b.c7();c=c.c7();d=Bb(b.z.data.length,c.z.data.length);e=0;a:{while(e<d){if(b.z.data[e]&c.z.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Rz(b,c){var d,e,f;OK();d=0;while(true){AMN();e=AWh.data;if(d>=e.length){f=new IL;Bm(f,C(3));f.xZ=C(3);f.xK=b;K(f);}e=e[d].data;if(Bs(b,e[0]))break;d=d+1|0;}return AB4(e[1],c);}
function AGh(){var b;b=new GH;AMN();AWg=b;}
function YH(){var a=this;Q.call(a);a.k2=0;a.m0=0;a.ge=0;a.kC=0;a.dM=0;a.fb=0;a.D=null;a.bs=null;}
function C4(){var a=new YH();APR(a);return a;}
function AOw(a,b){var c=new YH();AF6(c,a,b);return c;}
function APR(a){Bp(a);a.D=AP1();}
function AF6(a,b,c){Bp(a);a.D=AP1();a.k2=b;a.m0=c;}
function Cj(a,b){a:{if(a.k2){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dM){L1(a.D,G_(b&65535));break a;}K6(a.D,G_(b&65535));break a;}if(a.m0&&b>128){a.ge=1;b=Gi(Ge(b));}}}if(!(!RY(b)&&!OZ(b))){if(a.kC)L1(a.G,b-55296|0);else K6(a.G,b-55296|0);}if(a.dM)L1(a.D,b);else K6(a.D,b);if(!a.I&&LA(b))a.I=1;return a;}
function ADx(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(a.kC){if(!b.b5)Fs(a.G,b.eJ());else CT(a.G,b.eJ());}else if(!b.b5)Fp(a.G,b.eJ());else{E6(a.G,b.eJ());CT(a.G,b.eJ());a.b5=a.b5?0:1;a.kC=1;}if(!a.fb&&b.c7()!==null){if(a.dM){if(!b.ba)Fs(a.D,b.c7());else CT(a.D,b.c7());}else if(!b.ba)Fp(a.D,b.c7());else{E6(a.D,b.c7());CT(a.D,b.c7());a.ba=a.ba?0:1;a.dM=1;}}else{c=a.ba;d=a.bs;if(d!==null){if(!c){e=new Ox;e.v$=a;e.uU=c;e.tX=d;e.tL=b;Bp(e);a.bs=e;}else{e=new Oy;e.x8=a;e.qH=c;e.qf=d;e.px=b;Bp(e);a.bs=e;}}else{if(c&&!a.dM
&&LE(a.D)){d=new Ou;d.wW=a;d.qu=b;Bp(d);a.bs=d;}else if(!c){d=new Os;d.kj=a;d.jw=c;d.og=b;Bp(d);a.bs=d;}else{d=new Ot;d.le=a;d.jF=c;d.tQ=b;Bp(d);a.bs=d;}a.fb=1;}}return a;}
function BQ(a,b,c){var d,e,f,g,h;if(b>c){d=new Bu;X(d);K(d);}a:{b:{if(!a.k2){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cj(a,b);b=b+1|0;}}if(!a.dM)Hw(a.D,b,c+1|0);else{d=a.D;c=c+1|0;if(b>c){d=new BS;X(d);K(d);}e=d.bk;if(b<e){f=Bb(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.z.data;h[g]=h[g]&(HS(d,b)|Hj(d,f));}else{h=d.z.data;h[g]=h[g]&HS(d,b);e=g+1|0;while(e<c){d.z.data[e]=0;e=e+1|0;}if(f&31){h=d.z.data;h[c]=h[c]&Hj(d,f);}}GK(d);}}}}return a;}
function Xz(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.ge)a.ge=1;c=a.b5;if(!(c^b.b5)){if(!c)Fp(a.G,b.G);else CT(a.G,b.G);}else if(c)Fs(a.G,b.G);else{E6(a.G,b.G);CT(a.G,b.G);a.b5=1;}if(!a.fb&&CE(b)!==null){c=a.ba;if(!(c^b.ba)){if(!c)Fp(a.D,CE(b));else CT(a.D,CE(b));}else if(c)Fs(a.D,CE(b));else{E6(a.D,CE(b));CT(a.D,CE(b));a.ba=1;}}else{c=a.ba;d=a.bs;if(d!==null){if(!c){e=new Om;e.vX=a;e.sI=c;e.tP=d;e.uy=b;Bp(e);a.bs=e;}else{e=new O$;e.wi=a;e.uw=c;e.mF=d;e.m9=b;Bp(e);a.bs=e;}}else{if(!a.dM&&LE(a.D)){if(!c){d=new Ov;d.x$
=a;d.pi=b;Bp(d);a.bs=d;}else{d=new Ow;d.wl=a;d.ug=b;Bp(d);a.bs=d;}}else if(!c){d=new OA;d.sT=a;d.q4=b;d.qi=c;Bp(d);a.bs=d;}else{d=new OB;d.rt=a;d.rK=b;d.rZ=c;Bp(d);a.bs=d;}a.fb=1;}}}
function VW(a,b){var c,d,e;if(!a.I&&b.I)a.I=1;if(b.ge)a.ge=1;c=a.b5;if(!(c^b.b5)){if(!c)CT(a.G,b.G);else Fp(a.G,b.G);}else if(!c)Fs(a.G,b.G);else{E6(a.G,b.G);CT(a.G,b.G);a.b5=0;}if(!a.fb&&CE(b)!==null){c=a.ba;if(!(c^b.ba)){if(!c)CT(a.D,CE(b));else Fp(a.D,CE(b));}else if(!c)Fs(a.D,CE(b));else{E6(a.D,CE(b));CT(a.D,CE(b));a.ba=0;}}else{c=a.ba;d=a.bs;if(d!==null){if(!c){e=new Oo;e.v8=a;e.sW=c;e.nq=d;e.qF=b;Bp(e);a.bs=e;}else{e=new Op;e.wr=a;e.sd=c;e.mv=d;e.sG=b;Bp(e);a.bs=e;}}else{if(!a.dM&&LE(a.D)){if(!c){d=new Ok;d.wn
=a;d.oQ=b;Bp(d);a.bs=d;}else{d=new Ol;d.x4=a;d.oY=b;Bp(d);a.bs=d;}}else if(!c){d=new Oq;d.vG=a;d.uP=b;d.rE=c;Bp(d);a.bs=d;}else{d=new Oj;d.rC=a;d.sm=b;d.qI=c;Bp(d);a.bs=d;}a.fb=1;}}}
function CJ(a,b){var c;c=a.bs;if(c!==null)return a.ba^c.j(b);return a.ba^C9(a.D,b);}
function CE(a){if(!a.fb)return a.D;return null;}
function AG$(a){return a.G;}
function AOd(a){var b,c;if(a.bs!==null)return a;b=CE(a);c=new On;c.vU=a;c.h8=b;Bp(c);return Ea(c,a.ba);}
function AKS(a){var b,c,d;b=new R;U(b);c=GT(a.D,0);while(c>=0){HZ(b,F$(c));BV(b,124);c=GT(a.D,c+1|0);}d=b.H;if(d>0)Va(b,d-1|0);return S(b);}
function AHn(a){return a.ge;}
function IL(){var a=this;Br.call(a);a.xZ=null;a.xK=null;}
function DM(){BA.call(this);this.F=null;}
function CW(a,b,c,d){J7(a,c);a.F=b;a.hf=d;}
function APQ(a){return a.F;}
function AM9(a,b){return !a.F.bP(b)&&!a.d.bP(b)?0:1;}
function AOx(a,b){return 1;}
function AKh(a){var b;a.b8=1;b=a.d;if(b!==null&&!b.b8){b=b.fk();if(b!==null){a.d.b8=1;a.d=b;}a.d.ec();}b=a.F;if(b!==null){if(!b.b8){b=b.fk();if(b!==null){a.F.b8=1;a.F=b;}a.F.ec();}else if(b instanceof Ga&&b.ei.jU)a.F=b.d;}}
function CL(){DM.call(this);this.X=null;}
function ARC(a,b,c){var d=new CL();EA(d,a,b,c);return d;}
function EA(a,b,c,d){CW(a,b,c,d);a.X=b;}
function AD2(a,b,c,d){var e,f;e=0;a:{while((b+a.X.bT()|0)<=d.u){f=a.X.bn(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.X.bT()|0;e=e+(-1)|0;}return f;}
function EQ(){CL.call(this);this.i1=null;}
function AQE(a,b,c,d){var e=new EQ();RF(e,a,b,c,d);return e;}
function RF(a,b,c,d,e){EA(a,c,d,e);a.i1=b;}
function AEW(a,b,c,d){var e,f,g,h,i;e=a.i1;f=e.ey;g=e.et;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.X.bT()|0)>d.u)break a;i=a.X.bn(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.X.bT()|0;h=h+(-1)|0;}return i;}if((b+a.X.bT()|0)>d.u){d.dd=1;return (-1);}i=a.X.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CB=F(DM);
function AEi(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.F.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var Ef=F(CL);
function AJ5(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AP3(a,b){a.d=b;a.F.M(b);}
var Vr=F(CL);
function APA(a,b,c,d){while((b+a.X.bT()|0)<=d.u&&a.X.bn(b,c)>0){b=b+a.X.bT()|0;}return a.d.c(b,c,d);}
function AKN(a,b,c,d){var e,f,g;e=a.d.b_(b,c,d);if(e<0)return (-1);f=e-a.X.bT()|0;while(f>=b&&a.X.bn(f,c)>0){g=f-a.X.bT()|0;e=f;f=g;}return e;}
function V(){var a=this;B.call(a);a.li=null;a.ke=null;}
function AB4(a,b){if(!b&&a.li===null)a.li=a.B();else if(b&&a.ke===null)a.ke=Ea(a.B(),1);if(b)return a.ke;return a.li;}
var CX=F(Bu);
function MG(){var a=this;Gp.call(a);a.ey=0;a.et=0;}
function AKW(a){var b,c,d,e,f;b=a.ey;c=a.et;d=c!=2147483647?KW(c):C(3);e=new R;U(e);BV(e,123);f=Bj(e,b);BV(f,44);BV(L(f,d),125);return S(e);}
var N5=F(BA);
function AJk(a,b,c,d){return b;}
function ALy(a,b){return 0;}
function V$(){var a=this;B.call(a);a.z=null;a.bk=0;}
function AP1(){var a=new V$();AFC(a);return a;}
function AFC(a){a.z=BD(0);}
function K6(a,b){var c,d;c=b/32|0;if(b>=a.bk){H1(a,c+1|0);a.bk=b+1|0;}d=a.z.data;d[c]=d[c]|1<<(b%32|0);}
function Hw(a,b,c){var d,e,f,g,h;d=BB(b,c);if(d>0){e=new BS;X(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bk){H1(a,f+1|0);a.bk=c;}if(d==f){g=a.z.data;g[d]=g[d]|Hj(a,b)&HS(a,c);}else{g=a.z.data;g[d]=g[d]|Hj(a,b);h=d+1|0;while(h<f){a.z.data[h]=(-1);h=h+1|0;}if(c&31){g=a.z.data;g[f]=g[f]|HS(a,c);}}}
function Hj(a,b){return (-1)<<(b%32|0);}
function HS(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function L1(a,b){var c,d,e,f;c=b/32|0;d=a.z.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bk-1|0))GK(a);}}
function C9(a,b){var c,d;c=b/32|0;d=a.z.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function GT(a,b){var c,d,e,f;c=a.bk;if(b>=c)return (-1);d=b/32|0;e=a.z.data;f=e[d]>>>(b%32|0)|0;if(f)return HW(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+HW(e[f])|0;f=f+1|0;}return (-1);}
function H1(a,b){var c;c=a.z.data.length;if(c>=b)return;c=Z((b*3|0)/2|0,(c*2|0)+1|0);a.z=LL(a.z,c);}
function GK(a){var b,c,d;b=(a.bk+31|0)/32|0;a.bk=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Nv(a.z.data[c]);if(d<32)break;c=c+(-1)|0;a.bk=a.bk-32|0;}a.bk=a.bk-d|0;}}
function CT(a,b){var c,d,e,f;c=Bb(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&b.z.data[d];d=d+1|0;}while(true){f=a.z.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bk=Bb(a.bk,b.bk);GK(a);}
function Fs(a,b){var c,d,e;c=Bb(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]&(b.z.data[d]^(-1));d=d+1|0;}GK(a);}
function Fp(a,b){var c,d,e;c=Z(a.bk,b.bk);a.bk=c;H1(a,(c+31|0)/32|0);c=Bb(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]|b.z.data[d];d=d+1|0;}}
function E6(a,b){var c,d,e;c=Z(a.bk,b.bk);a.bk=c;H1(a,(c+31|0)/32|0);c=Bb(a.z.data.length,b.z.data.length);d=0;while(d<c){e=a.z.data;e[d]=e[d]^b.z.data[d];d=d+1|0;}GK(a);}
function LE(a){return a.bk?0:1;}
function Mt(){var a=this;BP.call(a);a.o2=null;a.vT=0;}
function Qh(){var a=this;BP.call(a);a.lH=null;a.lf=null;}
function ABA(a,b){var c=new Qh();ADk(c,a,b);return c;}
function ADk(a,b,c){BK(a);a.lH=b;a.lf=c;}
function AER(a,b,c,d){var e,f,g,h,i;e=a.lH.c(b,c,d);if(e<0)a:{f=a.lf;g=d.cH;e=d.u;h=b+1|0;e=BB(h,e);if(e>0){d.dd=1;e=(-1);}else{i=I(c,b);if(!f.o2.j(i))e=(-1);else{if(Cr(i)){if(e<0&&CN(I(c,h))){e=(-1);break a;}}else if(CN(i)&&b>g&&Cr(I(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ALi(a,b){a.d=b;a.lf.d=b;a.lH.M(b);}
function AFr(a,b){return 1;}
function AE8(a,b){return 1;}
function Dh(){var a=this;BP.call(a);a.dD=null;a.wR=0;}
function AJf(a){var b=new Dh();Ti(b,a);return b;}
function Ti(a,b){BK(a);a.dD=b.iJ();a.wR=b.ba;}
function AG1(a,b,c,d){var e,f,g,h;e=d.u;if(b<e){f=b+1|0;g=I(c,b);if(a.j(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=I(c,f);if(G1(g,f)&&a.j(Ec(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AHD(a,b){return a.dD.j(b);}
function AEN(a,b){if(b instanceof DB)return JH(a.dD,b.fE);if(b instanceof D9)return JH(a.dD,b.c6);if(b instanceof Dh)return HV(a.dD,b.dD);if(!(b instanceof DZ))return 1;return HV(a.dD,b.e0);}
function AI$(a){return a.dD;}
function AND(a,b){a.d=b;}
function AHb(a,b){return 1;}
var II=F(Dh);
function AIZ(a,b){return a.dD.j(Gi(Ge(b)));}
function Yw(){var a=this;BU.call(a);a.pO=null;a.wD=0;}
function AIh(a){var b=new Yw();AK2(b,a);return b;}
function AK2(a,b){Db(a);a.pO=b.iJ();a.wD=b.ba;}
function AJl(a,b,c){return !a.pO.j(EG(Ee(I(c,b))))?(-1):1;}
function DZ(){var a=this;BU.call(a);a.e0=null;a.w7=0;}
function AN7(a){var b=new DZ();AL3(b,a);return b;}
function AL3(a,b){Db(a);a.e0=b.iJ();a.w7=b.ba;}
function L7(a,b,c){return !a.e0.j(I(c,b))?(-1):1;}
function ALD(a,b){if(b instanceof D9)return JH(a.e0,b.c6);if(b instanceof DZ)return HV(a.e0,b.e0);if(!(b instanceof Dh)){if(!(b instanceof DB))return 1;return 0;}return HV(a.e0,b.dD);}
function OL(){var a=this;BP.call(a);a.gv=null;a.lt=null;a.i0=0;}
function AOi(a,b){var c=new OL();AEk(c,a,b);return c;}
function AEk(a,b,c){BK(a);a.gv=b;a.i0=c;}
function AJ3(a,b){a.d=b;}
function Qu(a){if(a.lt===null)a.lt=GZ(a.gv);return a.lt;}
function ADR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.u;f=BD(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=I(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?G7([k,l]):G7([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.i0;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gv.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=I(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=I(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.i0==3){k=f[0];m=a.gv.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.i0==2){b=f[0];m=a.gv.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AFk(a,b){return b instanceof OL&&!Bs(Qu(b),Qu(a))?0:1;}
function AOg(a,b){return 1;}
function D9(){BU.call(this);this.c6=0;}
function Y0(a){var b=new D9();AL8(b,a);return b;}
function AL8(a,b){Db(a);a.c6=b;}
function AI6(a){return 1;}
function AIc(a,b,c){return a.c6!=I(c,b)?(-1):1;}
function AGY(a,b,c,d){var e,f,g;if(!(c instanceof Bt))return Hc(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HU(c,a.c6,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AJa(a,b,c,d,e){var f;if(!(d instanceof Bt))return Hn(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FF(d,a.c6,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AOa(a,b){if(b instanceof D9)return b.c6!=a.c6?0:1;if(!(b instanceof DZ)){if(b instanceof Dh)return b.j(a.c6);if(!(b instanceof DB))return 1;return 0;}return L7(b,0,V_(a.c6))<=0?0:1;}
function AC8(){BU.call(this);this.mm=0;}
function AMo(a){var b=new AC8();AKJ(b,a);return b;}
function AKJ(a,b){Db(a);a.mm=EG(Ee(b));}
function ADK(a,b,c){return a.mm!=EG(Ee(I(c,b)))?(-1):1;}
function XB(){var a=this;BU.call(a);a.uF=0;a.nn=0;}
function AFI(a){var b=new XB();AMK(b,a);return b;}
function AMK(a,b){Db(a);a.uF=b;a.nn=G_(b);}
function AD$(a,b,c){return a.uF!=I(c,b)&&a.nn!=I(c,b)?(-1):1;}
function EW(){var a=this;BP.call(a);a.g8=0;a.j7=null;a.jA=null;a.jt=0;}
function ASi(a,b){var c=new EW();NQ(c,a,b);return c;}
function NQ(a,b,c){BK(a);a.g8=1;a.jA=b;a.jt=c;}
function APg(a,b){a.d=b;}
function ALj(a,b,c,d){var e,f,g,h,i,j,k,l;e=BD(4);f=d.u;if(b>=f)return (-1);g=JT(a,b,c,f);h=b+a.g8|0;i=ACM(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C$(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=JT(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ACM(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.g8|0;if(h>=f){b=k;break a;}g=JT(a,h,c,f);b=k;}}}if(b!=a.jt)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jA.data[g])break;g=g+1|0;}return (-1);}
function VV(a){var b,c;if(a.j7===null){b=new R;U(b);c=0;while(c<a.jt){HZ(b,F$(a.jA.data[c]));c=c+1|0;}a.j7=S(b);}return a.j7;}
function JT(a,b,c,d){var e,f,g;a.g8=1;if(b>=(d-1|0))e=I(c,b);else{d=b+1|0;e=I(c,b);f=I(c,d);if(G1(e,f)){g=BY(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Cr(g[0])&&CN(g[1])?Ec(g[0],g[1]):g[0];a.g8=2;}}return e;}
function AJm(a,b){return b instanceof EW&&!Bs(VV(b),VV(a))?0:1;}
function AMm(a,b){return 1;}
var WA=F(EW);
var SQ=F(EW);
var Xl=F(CB);
function AF_(a,b,c,d){var e;while(true){e=a.F.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var PI=F(CB);
function AKz(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.F.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var Fr=F(CB);
function ANA(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.F.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AOH(a,b){a.d=b;a.F.M(b);}
var Pj=F(Fr);
function AI9(a,b,c,d){var e;e=a.F.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AKY(a,b){a.d=b;}
function EV(){var a=this;CB.call(a);a.fM=null;a.dj=0;}
function AWi(a,b,c,d,e){var f=new EV();IG(f,a,b,c,d,e);return f;}
function IG(a,b,c,d,e,f){CW(a,c,d,e);a.fM=b;a.dj=f;}
function APY(a,b,c,d){var e,f;e=Mz(d,a.dj);if(!a.F.E(d))return a.d.c(b,c,d);if(e>=a.fM.et)return a.d.c(b,c,d);f=a.dj;e=e+1|0;DV(d,f,e);f=a.F.c(b,c,d);if(f>=0){DV(d,a.dj,0);return f;}f=a.dj;e=e+(-1)|0;DV(d,f,e);if(e>=a.fM.ey)return a.d.c(b,c,d);DV(d,a.dj,0);return (-1);}
var MS=F(EV);
function AID(a,b,c,d){var e,f,g;e=0;f=a.fM.et;a:{while(true){g=a.F.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fM.ey)return (-1);return a.d.c(b,c,d);}
var Re=F(CB);
function APn(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.F.c(b,c,d);}
var Qt=F(Fr);
function AFs(a,b,c,d){var e;if(!a.F.E(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.F.c(b,c,d);return e;}
var TN=F(EV);
function AEC(a,b,c,d){var e,f,g;e=Mz(d,a.dj);if(!a.F.E(d))return a.d.c(b,c,d);f=a.fM;if(e>=f.et){DV(d,a.dj,0);return a.d.c(b,c,d);}if(e<f.ey){DV(d,a.dj,e+1|0);g=a.F.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){DV(d,a.dj,0);return g;}DV(d,a.dj,e+1|0);g=a.F.c(b,c,d);}return g;}
var Rf=F(DM);
function APM(a,b,c,d){var e;e=d.u;if(e>b)return a.d.cd(b,e,c,d);return a.d.c(b,c,d);}
function ANP(a,b,c,d){var e;e=d.u;if(a.d.cd(b,e,c,d)>=0)return b;return (-1);}
function Oi(){DM.call(this);this.kc=null;}
function ALF(a,b,c,d){var e,f;e=d.u;f=TP(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cd(b,e,c,d);return a.d.c(b,c,d);}
function ADX(a,b,c,d){var e,f,g,h;e=d.u;f=a.d.b_(b,c,d);if(f<0)return (-1);g=TP(a,f,e,c);if(g>=0)e=g;g=Z(f,a.d.cd(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kc.hd(I(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function TP(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kc.hd(I(d,b)))break;b=b+1|0;}return b;}
var Eu=F();
var AWj=null;var AWk=null;function Pl(b){var c;if(!(b&1)){c=AWk;if(c!==null)return c;c=new Uo;AWk=c;return c;}c=AWj;if(c!==null)return c;c=new Un;AWj=c;return c;}
var Xp=F(CL);
function AED(a,b,c,d){var e;a:{while(true){if((b+a.X.bT()|0)>d.u)break a;e=a.X.bn(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Vk=F(Ef);
function AKw(a,b,c,d){var e;if((b+a.X.bT()|0)<=d.u){e=a.X.bn(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var O7=F(EQ);
function AM$(a,b,c,d){var e,f,g,h,i;e=a.i1;f=e.ey;g=e.et;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.X.bT()|0)>d.u)break a;i=a.X.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.X.bT()|0)>d.u){d.dd=1;return (-1);}i=a.X.bn(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qp=F(CL);
function ALw(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.X.bT()|0)<=d.u){e=a.X.bn(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var S4=F(Ef);
function AEM(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.F.c(b,c,d);}
var QY=F(EQ);
function ANp(a,b,c,d){var e,f,g,h,i,j;e=a.i1;f=e.ey;g=e.et;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.X.bT()|0)<=d.u){i=a.X.bn(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.X.bT()|0)>d.u){d.dd=1;return (-1);}j=a.X.bn(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var JQ=F(BA);
function AJH(a,b,c,d){if(b&&!(d.fd&&b==d.cH))return (-1);return a.d.c(b,c,d);}
function AIN(a,b){return 0;}
function Y_(){BA.call(this);this.tZ=0;}
function AN6(a){var b=new Y_();AI2(b,a);return b;}
function AI2(a,b){BK(a);a.tZ=b;}
function AE6(a,b,c,d){var e,f,g;e=b<d.u?I(c,b):32;f=!b?32:I(c,b-1|0);g=d.iB?0:d.cH;return (e!=32&&!Qx(a,e,b,g,c)?0:1)^(f!=32&&!Qx(a,f,b-1|0,g,c)?0:1)^a.tZ?(-1):a.d.c(b,c,d);}
function AFh(a,b){return 0;}
function Qx(a,b,c,d,e){var f;if(!IZ(b)&&b!=95){a:{if(Cf(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=I(e,c);if(IZ(f))return 0;if(Cf(f)!=6)return 1;}}return 1;}return 0;}
var N_=F(BA);
function AI1(a,b,c,d){if(b!=d.hi)return (-1);return a.d.c(b,c,d);}
function APW(a,b){return 0;}
function Wd(){BA.call(this);this.fW=0;}
function ARQ(a){var b=new Wd();ACy(b,a);return b;}
function ACy(a,b){BK(a);a.fW=b;}
function AMb(a,b,c,d){var e,f,g;e=!d.fd?H(c):d.u;if(b>=e){BF(d,a.fW,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&I(c,b)==13&&I(c,b+1|0)==10){BF(d,a.fW,0);return a.d.c(b,c,d);}a:{if(f==1){g=I(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BF(d,a.fW,0);return a.d.c(b,c,d);}
function AFZ(a,b){var c;c=!C3(b,a.fW)?0:1;BF(b,a.fW,(-1));return c;}
var VO=F(BA);
function ALf(a,b,c,d){if(b<(d.iB?H(c):d.u))return (-1);d.dd=1;d.xu=1;return a.d.c(b,c,d);}
function ADI(a,b){return 0;}
function M1(){BA.call(this);this.qT=null;}
function AFP(a,b,c,d){a:{if(b!=d.u){if(!b)break a;if(d.fd&&b==d.cH)break a;if(a.qT.sh(I(c,b-1|0),I(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AHR(a,b){return 0;}
var ACW=F(BP);
function AR5(){var a=new ACW();AK9(a);return a;}
function AK9(a){BK(a);}
function APr(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.dd=1;return (-1);}g=I(c,b);if(Cr(g)){h=b+2|0;if(h<=e&&G1(g,I(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AFm(a,b){a.d=b;}
function AK3(a){return (-2147483602);}
function AFl(a,b){return 1;}
function YF(){BP.call(this);this.kL=null;}
function ARH(a){var b=new YF();AFX(b,a);return b;}
function AFX(a,b){BK(a);a.kL=b;}
function AK_(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;if(f>e){d.dd=1;return (-1);}g=I(c,b);if(Cr(g)){b=b+2|0;if(b<=e){h=I(c,f);if(G1(g,h))return a.kL.hd(Ec(g,h))?(-1):a.d.c(b,c,d);}}return a.kL.hd(g)?(-1):a.d.c(f,c,d);}
function AMX(a,b){a.d=b;}
function ADF(a){return (-2147483602);}
function APF(a,b){return 1;}
function ACK(){BA.call(this);this.g2=0;}
function ARc(a){var b=new ACK();AHM(b,a);return b;}
function AHM(a,b){BK(a);a.g2=b;}
function AJr(a,b,c,d){var e;e=!d.fd?H(c):d.u;if(b>=e){BF(d,a.g2,0);return a.d.c(b,c,d);}if((e-b|0)==1&&I(c,b)==10){BF(d,a.g2,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AHK(a,b){var c;c=!C3(b,a.g2)?0:1;BF(b,a.g2,(-1));return c;}
function AAU(){BA.call(this);this.g7=0;}
function AQW(a){var b=new AAU();AIi(b,a);return b;}
function AIi(a,b){BK(a);a.g7=b;}
function ALe(a,b,c,d){if((!d.fd?H(c)-b|0:d.u-b|0)<=0){BF(d,a.g7,0);return a.d.c(b,c,d);}if(I(c,b)!=10)return (-1);BF(d,a.g7,1);return a.d.c(b+1|0,c,d);}
function AHx(a,b){var c;c=!C3(b,a.g7)?0:1;BF(b,a.g7,(-1));return c;}
function Xy(){BA.call(this);this.fr=0;}
function AQj(a){var b=new Xy();APZ(b,a);return b;}
function APZ(a,b){BK(a);a.fr=b;}
function AIH(a,b,c,d){var e,f,g;e=!d.fd?H(c)-b|0:d.u-b|0;if(!e){BF(d,a.fr,0);return a.d.c(b,c,d);}if(e<2){f=I(c,b);g=97;}else{f=I(c,b);g=I(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BF(d,a.fr,0);return a.d.c(b,c,d);case 13:if(g!=10){BF(d,a.fr,0);return a.d.c(b,c,d);}BF(d,a.fr,0);return a.d.c(b,c,d);default:}return (-1);}
function AF2(a,b){var c;c=!C3(b,a.fr)?0:1;BF(b,a.fr,(-1));return c;}
function GI(){var a=this;BP.call(a);a.mS=0;a.gp=0;}
function ASc(a,b){var c=new GI();OY(c,a,b);return c;}
function OY(a,b,c){BK(a);a.mS=b;a.gp=c;}
function AEI(a,b,c,d){var e,f,g,h;e=FR(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BF(d,a.gp,H(e));return a.d.c(b+H(e)|0,c,d);}g=I(e,f);h=b+f|0;if(g!=I(c,h)&&G_(I(e,f))!=I(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AMk(a,b){a.d=b;}
function FR(a,b){var c,d;c=a.mS;d=Fg(b,c);c=H4(b,c);return (c|d|(c-d|0))>=0&&c<=H(b.kO)?B8(b.kO,d,c):null;}
function AMz(a,b){var c;c=!C3(b,a.gp)?0:1;BF(b,a.gp,(-1));return c;}
var ACR=F(GI);
function AQn(a,b){var c=new ACR();AOz(c,a,b);return c;}
function AOz(a,b,c){OY(a,b,c);}
function AF$(a,b,c,d){var e,f;e=FR(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=!Th(c,e,b)?(-1):H(e);if(f<0)return (-1);BF(d,a.gp,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AOp(a,b,c,d){var e,f;e=FR(a,d);f=d.cH;if(e!==null&&(b+H(e)|0)<=f){while(true){if(b>f)return (-1);b=Y$(c,e,b);if(b<0)return (-1);if(a.d.c(b+H(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AEs(a,b,c,d,e){var f,g;f=FR(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PW(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+H(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKl(a,b){return 1;}
var Z4=F(GI);
function AQX(a,b){var c=new Z4();AHI(c,a,b);return c;}
function AHI(a,b,c){OY(a,b,c);}
function AJT(a,b,c,d){var e,f;e=FR(a,d);if(e!==null&&(b+H(e)|0)<=d.u){f=0;while(true){if(f>=H(e)){BF(d,a.gp,H(e));return a.d.c(b+H(e)|0,c,d);}if(EG(Ee(I(e,f)))!=EG(Ee(I(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var N4=F(F0);
function AHo(a,b,c,d,e){MK(a,b,c,d,e);return a;}
function AE$(a,b,c,d){Wj(a,b,c,d);return a;}
function AFB(a,b){I5(a,b);}
function ANQ(a,b,c){WE(a,b,c);return a;}
function Rh(){var a=this;BU.call(a);a.ci=null;a.j$=null;a.kT=null;}
function AGr(a,b,c){return !JO(a,c,b)?(-1):a.bA;}
function AE2(a,b,c,d){var e,f,g;e=d.u;while(true){if(b>e)return (-1);f=I(a.ci,a.bA-1|0);a:{while(true){g=a.bA;if(b>(e-g|0)){b=(-1);break a;}g=I(c,(b+g|0)-1|0);if(g==f&&JO(a,c,b))break;b=b+R9(a.j$,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bA|0,c,d)>=0)break;b=b+1|0;}return b;}
function AHO(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=I(a.ci,0);g=(H(d)-c|0)-a.bA|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=I(d,c);if(g==f&&JO(a,d,c))break;c=c-R9(a.kT,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bA|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIm(a,b){var c;if(b instanceof D9)return b.c6!=I(a.ci,0)?0:1;if(b instanceof DZ)return L7(b,0,B8(a.ci,0,1))<=0?0:1;if(!(b instanceof Dh)){if(!(b instanceof DB))return 1;return H(a.ci)>1&&b.fE==Ec(I(a.ci,0),I(a.ci,1))?1:0;}a:{b:{b=b;if(!b.j(I(a.ci,0))){if(H(a.ci)<=1)break b;if(!b.j(Ec(I(a.ci,0),I(a.ci,1))))break b;}c=1;break a;}c=0;}return c;}
function JO(a,b,c){var d;d=0;while(d<a.bA){if(I(b,d+c|0)!=I(a.ci,d))return 0;d=d+1|0;}return 1;}
function Xx(){BU.call(this);this.iE=null;}
function ASg(a){var b=new Xx();AOb(b,a);return b;}
function AOb(a,b){var c,d,e;Db(a);c=new R;U(c);d=0;while(true){e=BB(d,b.H);if(e>=0){a.iE=S(c);a.bA=c.H;return;}if(d<0)break;if(e>=0)break;BV(c,EG(Ee(b.N.data[d])));d=d+1|0;}b=new BS;X(b);K(b);}
function AJ0(a,b,c){var d;d=0;while(true){if(d>=H(a.iE))return H(a.iE);if(I(a.iE,d)!=EG(Ee(I(c,b+d|0))))break;d=d+1|0;}return (-1);}
function MW(){BU.call(this);this.g1=null;}
function ANc(a,b,c){var d,e,f;d=0;while(true){if(d>=H(a.g1))return H(a.g1);e=I(a.g1,d);f=b+d|0;if(e!=I(c,f)&&G_(I(a.g1,d))!=I(c,f))break;d=d+1|0;}return (-1);}
var GH=F();
var AWl=null;var AWm=null;var AWh=null;function AMN(){AMN=Bi(GH);AGL();}
function AGL(){AWl=ARX();AWm=AQ9();AWh=G($rt_arraycls(B),[G(B,[C(310),ASd()]),G(B,[C(311),AQg()]),G(B,[C(312),ARU()]),G(B,[C(313),AR1()]),G(B,[C(314),AWm]),G(B,[C(315),ARh()]),G(B,[C(316),AQ6()]),G(B,[C(317),AQp()]),G(B,[C(318),AQm()]),G(B,[C(319),AQt()]),G(B,[C(320),AQG()]),G(B,[C(321),AQr()]),G(B,[C(322),ARB()]),G(B,[C(323),AP$()]),G(B,[C(324),ARY()]),G(B,[C(325),AQF()]),G(B,[C(326),ARf()]),G(B,[C(327),AQD()]),G(B,[C(328),ARg()]),G(B,[C(329),AQv()]),G(B,[C(330),AR4()]),G(B,[C(331),AQx()]),G(B,[C(332),ARl()]),
G(B,[C(333),ART()]),G(B,[C(334),ARR()]),G(B,[C(335),AR2()]),G(B,[C(336),AQu()]),G(B,[C(337),ARG()]),G(B,[C(338),AWl]),G(B,[C(339),ARr()]),G(B,[C(340),AQq()]),G(B,[C(341),AWl]),G(B,[C(342),AP8()]),G(B,[C(343),AWm]),G(B,[C(344),AQO()]),G(B,[C(345),M(0,127)]),G(B,[C(346),M(128,255)]),G(B,[C(347),M(256,383)]),G(B,[C(348),M(384,591)]),G(B,[C(349),M(592,687)]),G(B,[C(350),M(688,767)]),G(B,[C(351),M(768,879)]),G(B,[C(352),M(880,1023)]),G(B,[C(353),M(1024,1279)]),G(B,[C(354),M(1280,1327)]),G(B,[C(355),M(1328,1423)]),
G(B,[C(356),M(1424,1535)]),G(B,[C(357),M(1536,1791)]),G(B,[C(358),M(1792,1871)]),G(B,[C(359),M(1872,1919)]),G(B,[C(360),M(1920,1983)]),G(B,[C(361),M(2304,2431)]),G(B,[C(362),M(2432,2559)]),G(B,[C(363),M(2560,2687)]),G(B,[C(364),M(2688,2815)]),G(B,[C(365),M(2816,2943)]),G(B,[C(366),M(2944,3071)]),G(B,[C(367),M(3072,3199)]),G(B,[C(368),M(3200,3327)]),G(B,[C(369),M(3328,3455)]),G(B,[C(370),M(3456,3583)]),G(B,[C(371),M(3584,3711)]),G(B,[C(372),M(3712,3839)]),G(B,[C(373),M(3840,4095)]),G(B,[C(374),M(4096,4255)]),
G(B,[C(375),M(4256,4351)]),G(B,[C(376),M(4352,4607)]),G(B,[C(377),M(4608,4991)]),G(B,[C(378),M(4992,5023)]),G(B,[C(379),M(5024,5119)]),G(B,[C(380),M(5120,5759)]),G(B,[C(381),M(5760,5791)]),G(B,[C(382),M(5792,5887)]),G(B,[C(383),M(5888,5919)]),G(B,[C(384),M(5920,5951)]),G(B,[C(385),M(5952,5983)]),G(B,[C(386),M(5984,6015)]),G(B,[C(387),M(6016,6143)]),G(B,[C(388),M(6144,6319)]),G(B,[C(389),M(6400,6479)]),G(B,[C(390),M(6480,6527)]),G(B,[C(391),M(6528,6623)]),G(B,[C(392),M(6624,6655)]),G(B,[C(393),M(6656,6687)]),
G(B,[C(394),M(7424,7551)]),G(B,[C(395),M(7552,7615)]),G(B,[C(396),M(7616,7679)]),G(B,[C(397),M(7680,7935)]),G(B,[C(398),M(7936,8191)]),G(B,[C(399),M(8192,8303)]),G(B,[C(400),M(8304,8351)]),G(B,[C(401),M(8352,8399)]),G(B,[C(402),M(8400,8447)]),G(B,[C(403),M(8448,8527)]),G(B,[C(404),M(8528,8591)]),G(B,[C(405),M(8592,8703)]),G(B,[C(406),M(8704,8959)]),G(B,[C(407),M(8960,9215)]),G(B,[C(408),M(9216,9279)]),G(B,[C(409),M(9280,9311)]),G(B,[C(410),M(9312,9471)]),G(B,[C(411),M(9472,9599)]),G(B,[C(412),M(9600,9631)]),
G(B,[C(413),M(9632,9727)]),G(B,[C(414),M(9728,9983)]),G(B,[C(415),M(9984,10175)]),G(B,[C(416),M(10176,10223)]),G(B,[C(417),M(10224,10239)]),G(B,[C(418),M(10240,10495)]),G(B,[C(419),M(10496,10623)]),G(B,[C(420),M(10624,10751)]),G(B,[C(421),M(10752,11007)]),G(B,[C(422),M(11008,11263)]),G(B,[C(423),M(11264,11359)]),G(B,[C(424),M(11392,11519)]),G(B,[C(425),M(11520,11567)]),G(B,[C(426),M(11568,11647)]),G(B,[C(427),M(11648,11743)]),G(B,[C(428),M(11776,11903)]),G(B,[C(429),M(11904,12031)]),G(B,[C(430),M(12032,12255)]),
G(B,[C(431),M(12272,12287)]),G(B,[C(432),M(12288,12351)]),G(B,[C(433),M(12352,12447)]),G(B,[C(434),M(12448,12543)]),G(B,[C(435),M(12544,12591)]),G(B,[C(436),M(12592,12687)]),G(B,[C(437),M(12688,12703)]),G(B,[C(438),M(12704,12735)]),G(B,[C(439),M(12736,12783)]),G(B,[C(440),M(12784,12799)]),G(B,[C(441),M(12800,13055)]),G(B,[C(442),M(13056,13311)]),G(B,[C(443),M(13312,19893)]),G(B,[C(444),M(19904,19967)]),G(B,[C(445),M(19968,40959)]),G(B,[C(446),M(40960,42127)]),G(B,[C(447),M(42128,42191)]),G(B,[C(448),M(42752,
42783)]),G(B,[C(449),M(43008,43055)]),G(B,[C(450),M(44032,55203)]),G(B,[C(451),M(55296,56191)]),G(B,[C(452),M(56192,56319)]),G(B,[C(453),M(56320,57343)]),G(B,[C(454),M(57344,63743)]),G(B,[C(455),M(63744,64255)]),G(B,[C(456),M(64256,64335)]),G(B,[C(457),M(64336,65023)]),G(B,[C(458),M(65024,65039)]),G(B,[C(459),M(65040,65055)]),G(B,[C(460),M(65056,65071)]),G(B,[C(461),M(65072,65103)]),G(B,[C(462),M(65104,65135)]),G(B,[C(463),M(65136,65279)]),G(B,[C(464),M(65280,65519)]),G(B,[C(465),M(0,1114111)]),G(B,[C(466),
AQs()]),G(B,[C(467),BH(0,1)]),G(B,[C(468),Ig(62,1)]),G(B,[C(469),BH(1,1)]),G(B,[C(470),BH(2,1)]),G(B,[C(471),BH(3,0)]),G(B,[C(472),BH(4,0)]),G(B,[C(473),BH(5,1)]),G(B,[C(474),Ig(448,1)]),G(B,[C(475),BH(6,1)]),G(B,[C(476),BH(7,0)]),G(B,[C(477),BH(8,1)]),G(B,[C(478),Ig(3584,1)]),G(B,[C(479),BH(9,1)]),G(B,[C(480),BH(10,1)]),G(B,[C(481),BH(11,1)]),G(B,[C(482),Ig(28672,0)]),G(B,[C(483),BH(12,0)]),G(B,[C(484),BH(13,0)]),G(B,[C(485),BH(14,0)]),G(B,[C(486),AQ1(983040,1,1)]),G(B,[C(487),BH(15,0)]),G(B,[C(488),BH(16,
1)]),G(B,[C(489),BH(18,1)]),G(B,[C(490),ARb(19,0,1)]),G(B,[C(491),Ig(1643118592,1)]),G(B,[C(492),BH(20,0)]),G(B,[C(493),BH(21,0)]),G(B,[C(494),BH(22,0)]),G(B,[C(495),BH(23,0)]),G(B,[C(496),BH(24,1)]),G(B,[C(497),Ig(2113929216,1)]),G(B,[C(498),BH(25,1)]),G(B,[C(499),BH(26,0)]),G(B,[C(500),BH(27,0)]),G(B,[C(501),BH(28,1)]),G(B,[C(502),BH(29,0)]),G(B,[C(503),BH(30,0)])]);}
function Mf(){BU.call(this);this.p8=0;}
function ANh(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.p8!=Gi(Ge(Ec(e,d)))?(-1):2;}
function Kq(){BP.call(this);this.gc=0;}
function AK8(a){var b=new Kq();AFx(b,a);return b;}
function AFx(a,b){BK(a);a.gc=b;}
function ALt(a,b){a.d=b;}
function AF0(a,b,c,d){var e,f;e=b+1|0;if(e>d.u){d.dd=1;return (-1);}f=I(c,b);if(b>d.cH&&Cr(I(c,b-1|0)))return (-1);if(a.gc!=f)return (-1);return a.d.c(e,c,d);}
function AIk(a,b,c,d){var e,f,g,h;if(!(c instanceof Bt))return Hc(a,b,c,d);e=d.cH;f=d.u;while(true){if(b>=f)return (-1);g=HU(c,a.gc,b);if(g<0)return (-1);if(g>e&&Cr(I(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AGy(a,b,c,d,e){var f,g;if(!(d instanceof Bt))return Hn(a,b,c,d,e);f=e.cH;a:{while(true){if(c<b)return (-1);g=FF(d,a.gc,c);if(g<0)break a;if(g<b)break a;if(g>f&&Cr(I(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AEp(a,b){if(b instanceof D9)return 0;if(b instanceof DZ)return 0;if(b instanceof Dh)return 0;if(b instanceof DB)return 0;if(b instanceof KN)return 0;if(!(b instanceof Kq))return 1;return b.gc!=a.gc?0:1;}
function ANZ(a,b){return 1;}
function KN(){BP.call(this);this.fK=0;}
function AIK(a){var b=new KN();ALc(b,a);return b;}
function ALc(a,b){BK(a);a.fK=b;}
function AFA(a,b){a.d=b;}
function AD1(a,b,c,d){var e,f,g,h;e=d.u;f=b+1|0;g=BB(f,e);if(g>0){d.dd=1;return (-1);}h=I(c,b);if(g<0&&CN(I(c,f)))return (-1);if(a.fK!=h)return (-1);return a.d.c(f,c,d);}
function ALS(a,b,c,d){var e,f;if(!(c instanceof Bt))return Hc(a,b,c,d);e=d.u;while(true){if(b>=e)return (-1);f=HU(c,a.fK,b);if(f<0)return (-1);b=f+1|0;if(b<e&&CN(I(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function ANa(a,b,c,d,e){var f,g;if(!(d instanceof Bt))return Hn(a,b,c,d,e);f=e.u;a:{while(true){if(c<b)return (-1);g=FF(d,a.fK,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&CN(I(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AGs(a,b){if(b instanceof D9)return 0;if(b instanceof DZ)return 0;if(b instanceof Dh)return 0;if(b instanceof DB)return 0;if(b instanceof Kq)return 0;if(!(b instanceof KN))return 1;return b.fK!=a.fK?0:1;}
function AL1(a,b){return 1;}
function DB(){var a=this;BU.call(a);a.jl=0;a.h5=0;a.fE=0;}
function AMA(a,b,c){var d,e;d=b+1|0;e=I(c,b);d=I(c,d);return a.jl==e&&a.h5==d?2:(-1);}
function AKT(a,b,c,d){var e,f;if(!(c instanceof Bt))return Hc(a,b,c,d);e=d.u;while(b<e){b=HU(c,a.jl,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=I(c,b);if(a.h5==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AFz(a,b,c,d,e){var f;if(!(d instanceof Bt))return Hn(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=FF(d,a.h5,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jl==I(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AMp(a,b){if(b instanceof DB)return b.fE!=a.fE?0:1;if(b instanceof Dh)return b.j(a.fE);if(b instanceof D9)return 0;if(!(b instanceof DZ))return 1;return 0;}
var Un=F(Eu);
function AFJ(a,b){return b!=10?0:1;}
function AMv(a,b,c){return b!=10?0:1;}
var Uo=F(Eu);
function ANr(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AO$(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ABP(){var a=this;B.call(a);a.l7=null;a.jE=null;a.gG=0;a.vo=0;}
function AK1(a){var b=new ABP();AI0(b,a);return b;}
function AI0(a,b){var c,d;while(true){c=a.gG;if(b<c)break;a.gG=c<<1|1;}d=c<<1|1;a.gG=d;d=d+1|0;a.l7=BD(d);a.jE=BD(d);a.vo=b;}
function Q2(a,b,c){var d,e,f,g;d=0;e=a.gG;f=b&e;while(true){g=a.l7.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.jE.data[f]=c;}
function R9(a,b){var c,d,e,f;c=a.gG;d=b&c;e=0;while(true){f=a.l7.data[d];if(!f)break;if(f==b)return a.jE.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.vo;}
var XP=F();
var Km=F(V);
function ARX(){var a=new Km();AIE(a);return a;}
function AIE(a){}
function Z$(a){return Cj(BQ(C4(),9,13),32);}
var Ju=F(V);
function AQ9(){var a=new Ju();ANV(a);return a;}
function ANV(a){}
function AAL(a){return BQ(C4(),48,57);}
var ABJ=F(V);
function ASd(){var a=new ABJ();AH1(a);return a;}
function AH1(a){}
function AM0(a){return BQ(C4(),97,122);}
var ACe=F(V);
function AQg(){var a=new ACe();AI4(a);return a;}
function AI4(a){}
function AN1(a){return BQ(C4(),65,90);}
var ACh=F(V);
function ARU(){var a=new ACh();AE3(a);return a;}
function AE3(a){}
function AG2(a){return BQ(C4(),0,127);}
var Kd=F(V);
function AR1(){var a=new Kd();AGc(a);return a;}
function AGc(a){}
function YI(a){return BQ(BQ(C4(),97,122),65,90);}
var K5=F(Kd);
function ARh(){var a=new K5();AIM(a);return a;}
function AIM(a){}
function ZA(a){return BQ(YI(a),48,57);}
var ADw=F(V);
function AQ6(){var a=new ADw();AKC(a);return a;}
function AKC(a){}
function AIj(a){return BQ(BQ(BQ(C4(),33,64),91,96),123,126);}
var L3=F(K5);
function AQp(){var a=new L3();AMf(a);return a;}
function AMf(a){}
function Xu(a){return BQ(BQ(BQ(ZA(a),33,64),91,96),123,126);}
var AAl=F(L3);
function AQm(){var a=new AAl();ANM(a);return a;}
function ANM(a){}
function AKi(a){return Cj(Xu(a),32);}
var AAC=F(V);
function AQt(){var a=new AAC();ANe(a);return a;}
function ANe(a){}
function AGl(a){return Cj(Cj(C4(),32),9);}
var Y2=F(V);
function AQG(){var a=new Y2();AO3(a);return a;}
function AO3(a){}
function AKf(a){return Cj(BQ(C4(),0,31),127);}
var YP=F(V);
function AQr(){var a=new YP();AFg(a);return a;}
function AFg(a){}
function APc(a){return BQ(BQ(BQ(C4(),48,57),97,102),65,70);}
var ACk=F(V);
function ARB(){var a=new ACk();AEU(a);return a;}
function AEU(a){}
function AKZ(a){var b;b=new Sk;b.wQ=a;Bp(b);b.I=1;return b;}
var ADE=F(V);
function AP$(){var a=new ADE();AMs(a);return a;}
function AMs(a){}
function ADU(a){var b;b=new Mq;b.wY=a;Bp(b);b.I=1;return b;}
var ABQ=F(V);
function ARY(){var a=new ABQ();AE5(a);return a;}
function AE5(a){}
function AIL(a){var b;b=new Rv;b.wA=a;Bp(b);return b;}
var ABB=F(V);
function AQF(){var a=new ABB();AKg(a);return a;}
function AKg(a){}
function AMH(a){var b;b=new Ru;b.wp=a;Bp(b);return b;}
var ACz=F(V);
function ARf(){var a=new ACz();AF8(a);return a;}
function AF8(a){}
function AGi(a){var b;b=new VX;b.xB=a;Bp(b);Hw(b.G,0,2048);b.I=1;return b;}
var X6=F(V);
function AQD(){var a=new X6();AFF(a);return a;}
function AFF(a){}
function AGG(a){var b;b=new O1;b.w9=a;Bp(b);b.I=1;return b;}
var XL=F(V);
function ARg(){var a=new XL();AJX(a);return a;}
function AJX(a){}
function AO7(a){var b;b=new NZ;b.x2=a;Bp(b);b.I=1;return b;}
var ABX=F(V);
function AQv(){var a=new ABX();AKD(a);return a;}
function AKD(a){}
function ADL(a){var b;b=new QI;b.wS=a;Bp(b);return b;}
var AB8=F(V);
function AR4(){var a=new AB8();AIv(a);return a;}
function AIv(a){}
function AJu(a){var b;b=new Mk;b.vN=a;Bp(b);b.I=1;return b;}
var Zq=F(V);
function AQx(){var a=new Zq();AEt(a);return a;}
function AEt(a){}
function AGN(a){var b;b=new Mo;b.xa=a;Bp(b);b.I=1;return b;}
var AAJ=F(V);
function ARl(){var a=new AAJ();AFM(a);return a;}
function AFM(a){}
function AHT(a){var b;b=new Nx;b.xy=a;Bp(b);b.I=1;return b;}
var ADi=F(V);
function ART(){var a=new ADi();AJz(a);return a;}
function AJz(a){}
function AJw(a){var b;b=new Pn;b.xP=a;Bp(b);b.I=1;return b;}
var AB6=F(V);
function ARR(){var a=new AB6();AKV(a);return a;}
function AKV(a){}
function AOj(a){var b;b=new Py;b.wC=a;Bp(b);return b;}
var Z0=F(V);
function AR2(){var a=new Z0();AFG(a);return a;}
function AFG(a){}
function AL9(a){var b;b=new SM;b.xh=a;Bp(b);return b;}
var Zo=F(V);
function AQu(){var a=new Zo();AMJ(a);return a;}
function AMJ(a){}
function AKU(a){var b;b=new RX;b.vR=a;Bp(b);b.I=1;return b;}
var ADB=F(V);
function ARG(){var a=new ADB();AIq(a);return a;}
function AIq(a){}
function AMT(a){var b;b=new MB;b.x_=a;Bp(b);b.I=1;return b;}
var IT=F(V);
function ARr(){var a=new IT();AGU(a);return a;}
function AGU(a){}
function AAF(a){return Cj(BQ(BQ(BQ(C4(),97,122),65,90),48,57),95);}
var ACF=F(IT);
function AQq(){var a=new ACF();AIy(a);return a;}
function AIy(a){}
function AKH(a){var b;b=Ea(AAF(a),1);b.I=1;return b;}
var AAp=F(Km);
function AP8(){var a=new AAp();AOJ(a);return a;}
function AOJ(a){}
function AEY(a){var b;b=Ea(Z$(a),1);b.I=1;return b;}
var Zi=F(Ju);
function AQO(){var a=new Zi();AJi(a);return a;}
function AJi(a){}
function AH9(a){var b;b=Ea(AAL(a),1);b.I=1;return b;}
function YU(){var a=this;V.call(a);a.pW=0;a.qK=0;}
function M(a,b){var c=new YU();AO5(c,a,b);return c;}
function AO5(a,b,c){a.pW=b;a.qK=c;}
function AJL(a){return BQ(C4(),a.pW,a.qK);}
var Ze=F(V);
function AQs(){var a=new Ze();APj(a);return a;}
function APj(a){}
function AOU(a){return BQ(BQ(C4(),65279,65279),65520,65533);}
function AAd(){var a=this;V.call(a);a.lA=0;a.js=0;a.ox=0;}
function BH(a,b){var c=new AAd();AF1(c,a,b);return c;}
function ARb(a,b,c){var d=new AAd();AO6(d,a,b,c);return d;}
function AF1(a,b,c){a.js=c;a.lA=b;}
function AO6(a,b,c,d){a.ox=d;a.js=c;a.lA=b;}
function AHs(a){var b;b=AR_(a.lA);if(a.ox)Hw(b.G,0,2048);b.I=a.js;return b;}
function AAm(){var a=this;V.call(a);a.ly=0;a.jI=0;a.m4=0;}
function Ig(a,b){var c=new AAm();AGO(c,a,b);return c;}
function AQ1(a,b,c){var d=new AAm();ADN(d,a,b,c);return d;}
function AGO(a,b,c){a.jI=c;a.ly=b;}
function ADN(a,b,c,d){a.m4=d;a.jI=c;a.ly=b;}
function ADM(a){var b;b=new Rq;ABp(b,a.ly);if(a.m4)Hw(b.G,0,2048);b.I=a.jI;return b;}
var YX=F();
var Yu=F();
function ZW(b){var c,d,e,f,g,h,i;c=AM4(E4(b));d=Jd(c);e=BD(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Jd(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=MR(c);h=h+1|0;}return e;}
function J1(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function M5(){var a=this;B.call(a);a.o1=0;a.ra=0;a.pd=null;}
function AHp(a,b,c){var d=new M5();ANL(d,a,b,c);return d;}
function ANL(a,b,c,d){a.o1=b;a.ra=c;a.pd=d;}
function AB1(){var a=this;B.call(a);a.nS=null;a.p5=0;}
function AM4(a){var b=new AB1();AGv(b,a);return b;}
function AGv(a,b){a.nS=b;}
var ZU=F();
function Jd(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.nS.data;f=b.p5;b.p5=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+T(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function MR(b){var c,d;c=Jd(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function YG(){B.call(this);this.H2=null;}
function AAE(){GG.call(this);this.FN=null;}
var Qq=F(0);
function Vq(){var a=this;Q.call(a);a.ns=null;a.xG=null;}
function AG8(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.b5^C9(a.ns,c):0;}
function Vn(){var a=this;Q.call(a);a.ts=null;a.ul=null;a.xl=null;}
function AEg(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.b5^C9(a.ts,c):0;return a.ul.j(b)&&!d?1:0;}
function On(){var a=this;Q.call(a);a.h8=null;a.vU=null;}
function AJA(a,b){return a.ba^C9(a.h8,b);}
function AHX(a){var b,c,d;b=new R;U(b);c=GT(a.h8,0);while(c>=0){HZ(b,F$(c));BV(b,124);c=GT(a.h8,c+1|0);}d=b.H;if(d>0)Va(b,d-1|0);return S(b);}
function Ou(){var a=this;Q.call(a);a.qu=null;a.wW=null;}
function AME(a,b){return a.qu.j(b);}
function Os(){var a=this;Q.call(a);a.jw=0;a.og=null;a.kj=null;}
function ANg(a,b){return !(a.jw^C9(a.kj.D,b))&&!(a.jw^a.kj.dM^a.og.j(b))?0:1;}
function Ot(){var a=this;Q.call(a);a.jF=0;a.tQ=null;a.le=null;}
function AJZ(a,b){return !(a.jF^C9(a.le.D,b))&&!(a.jF^a.le.dM^a.tQ.j(b))?1:0;}
function Ox(){var a=this;Q.call(a);a.uU=0;a.tX=null;a.tL=null;a.v$=null;}
function AGJ(a,b){return a.uU^(!a.tX.j(b)&&!a.tL.j(b)?0:1);}
function Oy(){var a=this;Q.call(a);a.qH=0;a.qf=null;a.px=null;a.x8=null;}
function ADG(a,b){return a.qH^(!a.qf.j(b)&&!a.px.j(b)?0:1)?0:1;}
function Ov(){var a=this;Q.call(a);a.pi=null;a.x$=null;}
function AH2(a,b){return CJ(a.pi,b);}
function Ow(){var a=this;Q.call(a);a.ug=null;a.wl=null;}
function AJ2(a,b){return CJ(a.ug,b)?0:1;}
function OA(){var a=this;Q.call(a);a.q4=null;a.qi=0;a.sT=null;}
function AOt(a,b){return !CJ(a.q4,b)&&!(a.qi^C9(a.sT.D,b))?0:1;}
function OB(){var a=this;Q.call(a);a.rK=null;a.rZ=0;a.rt=null;}
function AGg(a,b){return !CJ(a.rK,b)&&!(a.rZ^C9(a.rt.D,b))?1:0;}
function Om(){var a=this;Q.call(a);a.sI=0;a.tP=null;a.uy=null;a.vX=null;}
function AP5(a,b){return !(a.sI^a.tP.j(b))&&!CJ(a.uy,b)?0:1;}
function O$(){var a=this;Q.call(a);a.uw=0;a.mF=null;a.m9=null;a.wi=null;}
function AH6(a,b){return !(a.uw^a.mF.j(b))&&!CJ(a.m9,b)?1:0;}
function Ok(){var a=this;Q.call(a);a.oQ=null;a.wn=null;}
function AGe(a,b){return CJ(a.oQ,b);}
function Ol(){var a=this;Q.call(a);a.oY=null;a.x4=null;}
function AHH(a,b){return CJ(a.oY,b)?0:1;}
function Oq(){var a=this;Q.call(a);a.uP=null;a.rE=0;a.vG=null;}
function AI3(a,b){return CJ(a.uP,b)&&a.rE^C9(a.vG.D,b)?1:0;}
function Oj(){var a=this;Q.call(a);a.sm=null;a.qI=0;a.rC=null;}
function AN8(a,b){return CJ(a.sm,b)&&a.qI^C9(a.rC.D,b)?0:1;}
function Oo(){var a=this;Q.call(a);a.sW=0;a.nq=null;a.qF=null;a.v8=null;}
function AFb(a,b){return a.sW^a.nq.j(b)&&CJ(a.qF,b)?1:0;}
function Op(){var a=this;Q.call(a);a.sd=0;a.mv=null;a.sG=null;a.wr=null;}
function AL0(a,b){return a.sd^a.mv.j(b)&&CJ(a.sG,b)?0:1;}
function Nu(){B.call(this);this.qz=null;}
var FA=F(B_);
var AV1=null;var AV0=null;var AWn=null;function R4(){R4=Bi(FA);APN();}
function ANf(a,b){var c=new FA();Z6(c,a,b);return c;}
function Z6(a,b,c){R4();CS(a,b,c);}
function APN(){var b;AV1=ANf(C(504),0);b=ANf(C(505),1);AV0=b;AWn=G(FA,[AV1,b]);}
var Lr=F(0);
function RW(){var a=this;B.call(a);a.we=null;a.tT=null;a.iv=null;a.cm=null;a.h9=0;a.kb=0;}
function Mm(a,b){var c,d,e;c=H(a.iv);if(b>=0&&b<=c){WN(a.cm,null,(-1),(-1));d=a.cm;d.i2=1;d.d8=b;c=d.hi;if(c<0)c=b;d.hi=c;b=a.tT.b_(b,a.iv,d);if(b==(-1))a.cm.dd=1;if(b>=0){d=a.cm;if(d.iw){e=d.dF.data;if(e[0]==(-1)){c=d.d8;e[0]=c;e[1]=c;}d.hi=Iy(d);return 1;}}a.cm.d8=(-1);return 0;}d=new BS;Bm(d,D5(b));K(d);}
function ADg(a){return O6(a.cm,0);}
function Zj(a){return Rx(a.cm,0);}
function XW(a){return a.cm.iB;}
function Ww(){var a=this;B.call(a);a.qD=null;a.qE=null;}
function APU(a,b){b=b;FS(a.qD,a.qE,b);}
function ST(){B.call(this);this.nw=null;}
function AFj(a,b){var c,d,e,f;c=HL(a.nw);d=AUK;e=YM(C(506));f=$rt_globals.navigator.clipboard;b=AA6(c.ku,E4(b));b=f.writeText(b);c=new Sl;c.wP=d;d=ADz(e);b.then(Bn(c,"f"),Bn(d,"f"));}
function SB(){B.call(this);this.ui=null;}
var SL=F();
var AVX=null;function ARv(){ARv=Bi(SL);AEG();}
function AEG(){var b,c;R4();b=BD((AWn.eR()).data.length);c=b.data;AVX=b;c[AV1.dN]=1;c[AV0.dN]=2;}
function Ue(){var a=this;B.call(a);a.s7=null;a.s6=null;}
function AJ_(a,b){var c,d,e,f,g;a:{c=a.s7;d=a.s6;if(b instanceof GM){b:{b=b;c=c.hz.dk;if(d instanceof Fm&&d.jG==b.jx&&PD(b,d,c)){c:{d=d.eT;if(b.fw.k!=d.k)e=0;else{e=0;while(e<b.fw.k){f=Bq(d,e);g=Bq(b.fw,e);if(f!==null){f=f.dO;if(f!==null&&!Lp(c,f,g)){e=0;break c;}}e=e+1|0;}e=1;}}if(e){e=1;break b;}}e=0;}if(e){e=1;break a;}}e=0;}return e;}
function Uf(){B.call(this);this.na=null;}
function ADQ(a,b,c){c=c;return I3(a.na,b,c);}
function Nf(){var a=this;B.call(a);a.uZ=null;a.u1=null;}
function AOY(a,b){var c;c=a.uZ;return PD(b,a.u1,c.hz.dk);}
function Ne(){B.call(this);this.oE=null;}
function AOK(a,b,c){return KP(a.oE,b,c);}
var MN=F(Ga);
function AHv(a,b,c,d){var e,f,g;e=0;f=d.u;a:{while(true){if(b>f){b=e;break a;}g=Fg(d,a.W);Da(d,a.W,b);e=a.cO.c(b,c,d);if(e>=0)break;Da(d,a.W,g);b=b+1|0;}}return b;}
function APX(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Fg(e,a.W);Da(e,a.W,c);f=a.cO.c(c,d,e);if(f>=0)break;Da(e,a.W,g);c=c+(-1)|0;}}return c;}
function AFY(a){return null;}
function AB2(){var a=this;B.call(a);a.Ic=null;a.Ex=null;}
function OI(){B.call(this);this.qL=null;}
function AIC(a,b){IC(a.qL,b);}
function NT(){B.call(this);this.sF=null;}
function AO8(a,b){var c,d,e,f;c=b.data;b=a.sF;d=Ds(c[0]);e=Ed(c[1]);XA(b.e.f,d,e,null,null);HD(Ce(b),ATw);FJ(Ce(b));f=JR(D_(),b.eU);b=new R;U(b);L(F1(L(b,C(507)),f),C(72));$rt_globals.console.info($rt_ustr(S(b)));}
function Zs(){var a=this;B.call(a);a.Bq=null;a.zX=null;}
function OT(){B.call(this);this.tm=null;}
function AF9(a,b){var c;c=a.tm;b=Ch(b);C7(c.qz,b);}
function NX(){var a=this;B.call(a);a.pq=null;a.pr=null;}
function TL(){var a=this;B.call(a);a.uI=null;a.uJ=null;}
function AKd(a,b){var c,d,e,f,g,h,i,j,k;c=b.data;d=a.uI;e=a.uJ;f=BC();g=c.length;h=0;while(h<g){i=c[h];j=new U5;k=i.f6;AAB(j,k.e_,k.fL);Bv(f,j);h=h+1|0;}if(De(f))J8(d.eG,e,d);else{c=D1(d,e);c=Fj(d.e.f,c.be,c.bi);Q3(d.eG,e,b,d,Ku(d,c));}}
function SD(){var a=this;B.call(a);a.t4=null;a.t3=null;a.t2=null;}
function APw(a,b){Vo(a.t4,a.t3,b,a.t2);}
function ACq(){var a=this;B.call(a);a.xM=0;a.w2=0;a.oj=null;}
function ARN(a,b,c){var d=new ACq();AHE(d,a,b,c);return d;}
function AHE(a,b,c,d){a.xM=b;a.w2=c;a.oj=d;}
var XZ=F();
function RO(){var a=this;B.call(a);a.oJ=null;a.oK=0;a.oL=null;}
function KQ(a,b){var c,d,e,f,g,h,i,j,k;c=a.oJ;d=a.oK;e=a.oL;if(b<=d){f=Ce(c);g=new M2;g.nk=c;h=P(B,1);h.data[0]=e;DL(f,g,C(508),h);}else{i=Ce(c);g=new M4;g.ph=c;j=P(B,2);k=j.data;k[0]=e;h=BD(1);h.data[0]=250;k[1]=h;DL(i,g,C(509),j);f=Ce(c);g=new M3;g.vK=c;h=P(B,1);h.data[0]=e;DL(f,g,C(510),h);}}
function Ud(){var a=this;B.call(a);a.dF=null;a.jc=null;a.kJ=null;a.kO=null;a.ok=0;a.iw=0;a.cH=0;a.u=0;a.d8=0;a.iB=0;a.fd=0;a.dd=0;a.xu=0;a.hi=0;a.i2=0;}
function BF(a,b,c){a.jc.data[b]=c;}
function C3(a,b){return a.jc.data[b];}
function Iy(a){return Rx(a,0);}
function Rx(a,b){Rn(a,b);return a.dF.data[(b*2|0)+1|0];}
function Da(a,b,c){a.dF.data[b*2|0]=c;}
function I6(a,b,c){a.dF.data[(b*2|0)+1|0]=c;}
function Fg(a,b){return a.dF.data[b*2|0];}
function H4(a,b){return a.dF.data[(b*2|0)+1|0];}
function ABL(a){return O6(a,0);}
function O6(a,b){Rn(a,b);return a.dF.data[b*2|0];}
function Mz(a,b){return a.kJ.data[b];}
function DV(a,b,c){a.kJ.data[b]=c;}
function Rn(a,b){var c;if(!a.iw){c=new C5;X(c);K(c);}if(b>=0&&b<a.ok)return;c=new BS;Bm(c,D5(b));K(c);}
function WN(a,b,c,d){a.iw=0;a.i2=2;G5(a.dF,(-1));G5(a.jc,(-1));if(b!==null)a.kO=b;if(c>=0){a.cH=c;a.u=d;}a.d8=a.cH;}
function ZG(a){return a.i2;}
function Wk(){B.call(this);this.nv=null;}
function AGB(a,b){var c,d;c=a.nv;d=new Br;Bm(d,$rt_str(b.message));b=c.ui;d=d.lq;c=new R;U(c);L(L(c,b),d);$rt_globals.console.info($rt_ustr(S(c)));}
function Nb(){B.call(this);this.mB=null;}
function ANH(a){Du(a.mB);}
function Ny(){var a=this;B.call(a);a.m5=null;a.m6=0;a.m7=0;a.m8=null;a.m1=0;a.m3=0;}
function AKG(a,b){var c,d,e,f,g,h,i,j;c=a.m5;d=a.m6;e=a.m7;f=a.m8;g=a.m1;h=a.m3;i=Cm(c.bp,5.0);d=Bb((c.bp.cN.a-d|0)-i|0,Z((i-d|0)-c.Q.q.a|0,b.n.a));j=Bb((c.bp.cN.b-e|0)-i|0,Z((i-e|0)-c.Q.q.b|0,b.n.b));Bd(f,d+g|0,j+h|0);KE(c,f,c.U.q);}
function U1(){var a=this;B.call(a);a.sO=null;a.sQ=null;a.sP=null;a.sK=0;a.sJ=0;a.sN=0;a.sL=0;a.sZ=0;a.sY=0;a.s0=0;a.tx=0;}
function AHV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.sO;d=a.sQ;e=a.sP;f=a.sK;g=a.sJ;h=a.sN;i=a.sL;j=a.sZ;k=a.sY;l=a.s0;m=a.tx;n=Cm(c.bp,5.0);o=c.U.rF();Cu(d,c.U.q);Cu(e,c.U.L);switch(f){case -1:f=Bb(h+(b.n.a-g|0)|0,c.bp.cN.a-n|0);g=o.a;h=h+i|0;f=Z(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Z((i+b.n.a|0)-g|0,Z(o.a,n-c.Q.L.a|0));}b:{switch(j){case -1:f=Z(n,Bb(l+(b.n.b-k|0)|0,(c.bp.cN.b+c.Q.q.b|0)-n|0));g=o.b;h=l+m|0;f=Z(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Z((m+b.n.b|0)-k|0,o.b);}KE(c,e,d);}
function Sk(){Q.call(this);this.wQ=null;}
function AOB(a,b){return Cf(b)!=2?0:1;}
function Mq(){Q.call(this);this.wY=null;}
function AEX(a,b){return Cf(b)!=1?0:1;}
function Rv(){Q.call(this);this.wA=null;}
function AEK(a,b){return QV(b);}
function Ru(){Q.call(this);this.wp=null;}
function AHq(a,b){return 0;}
function VX(){Q.call(this);this.xB=null;}
function AIS(a,b){return !Cf(b)?0:1;}
function O1(){Q.call(this);this.w9=null;}
function AOF(a,b){return Cf(b)!=9?0:1;}
function NZ(){Q.call(this);this.x2=null;}
function ALo(a,b){return F4(b);}
function QI(){Q.call(this);this.wS=null;}
function AMM(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Mk(){Q.call(this);this.vN=null;}
function APD(a,b){a:{b:{switch(Cf(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F4(b);}return b;}
function Mo(){Q.call(this);this.xa=null;}
function AGx(a,b){a:{b:{switch(Cf(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=F4(b);}return b;}
function Nx(){Q.call(this);this.xy=null;}
function AOP(a,b){a:{switch(Cf(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pn(){Q.call(this);this.xP=null;}
function AKc(a,b){return IZ(b);}
function Py(){Q.call(this);this.wC=null;}
function AMi(a,b){return Pz(b);}
function SM(){Q.call(this);this.xh=null;}
function AOu(a,b){return Cf(b)!=3?0:1;}
function RX(){Q.call(this);this.vR=null;}
function APk(a,b){a:{b:{switch(Cf(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=F4(b);}return b;}
function MB(){Q.call(this);this.x_=null;}
function AGj(a,b){a:{b:{switch(Cf(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=F4(b);}return b;}
function LJ(){Q.call(this);this.k6=0;}
function AR_(a){var b=new LJ();ABp(b,a);return b;}
function ABp(a,b){Bp(a);a.k6=b;}
function ALr(a,b){return a.ba^(a.k6!=Cf(b&65535)?0:1);}
var Rq=F(LJ);
function ANE(a,b){return a.ba^(!(a.k6>>Cf(b&65535)&1)?0:1);}
function Ym(){var a=this;B.call(a);a.C4=null;a.HM=0;}
var TC=F(0);
var AVZ=null;function AQ2(){AQ2=Bi(TC);APi();}
function APi(){AVZ=O(C(262));}
function Ra(){B.call(this);this.tv=null;}
function ANk(a){var b,c,d,e,f,g,h,i;b=a.tv;c=b.pq;b=b.pr;d=b.g6;b=b.f6;e=c.t0;c=c.t1;d=J6(d);if(b===null)b=void 0;else{f=b.ij+1|0;g=b.i6+1|0;h=b.fL+1|0;i=b.e_+1|0;b=ADT(f,g,h,i);}c.openCodeEditor(e,d,b);}
function SE(){var a=this;B.call(a);a.md=null;a.me=null;}
function AIf(a,b){var c;c=a.md;KQ(a.me,I8(c,b.size));}
function SF(){B.call(this);this.uQ=null;}
function AD9(a,b){var c;c=a.uQ;Cn(ED(),$rt_str(b.message));KQ(c,0);}
function Sl(){B.call(this);this.wP=null;}
function AJK(a,b){}
var XM=F();
function AJE(b){return {includeDeclaration:b};}
function PS(){var a=this;B.call(a);a.pk=null;a.pj=null;}
function AM_(a,b){VM(b,a.pk,a.pj);}
function M0(){var a=this;B.call(a);a.tp=null;a.to=null;}
function AOv(a){var b,c;b=a.tp;c=a.to;b.hB.sM(c);}
function AAr(){var a=this;B.call(a);a.Cg=null;a.Ce=null;a.Cj=0.0;}
function M4(){B.call(this);this.ph=null;}
function AHP(a,b){var c,d,e,f;c=a.ph;if(!c.i_){b=b.data;d=Ds(b[0]);e=Ed(b[1]);T8(c.e.f,d,e);c.hS=1;f=JR(D_(),c.eU);b=new R;U(b);L(F1(L(b,C(511)),f),C(72));$rt_globals.console.info($rt_ustr(S(b)));}}
function M3(){B.call(this);this.vK=null;}
function AOh(a,b){var c,d,e,f,g,h;c=b.data;d=a.vK;e=(Ds(c[2])).data[0];if(e!=1)HO(d,b);else{d.i_=1;f=Ds(c[0]);g=Ed(c[1]);ZR(d.e.f,f,g,d.hS);TM(d,Z2(e));HD(Ce(d),ATw);FJ(Ce(d));h=JR(D_(),d.eU);b=new R;U(b);L(F1(L(b,C(512)),h),C(72));$rt_globals.console.info($rt_ustr(S(b)));Sq(d);GS(d);}}
function M2(){B.call(this);this.nk=null;}
function ADV(a,b){HO(a.nk,b);}
function UX(){var a=this;B.call(a);a.i5=null;a.hc=0;}
var ABS=F(0);
function ADn(b){return !b?G(Bt,[C(61),C(217),C(513)]):G(Bt,[C(61),C(217),C(513),C(514)]);}
var Yf=F();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bC",ASw(AJ$),"cw",ASv(AFw)],Z7,0,B,[],3,3,0,0,0,MQ,0,B,[],3,3,0,0,0,Mg,0,B,[],3,3,0,0,0,Vv,0,B,[MQ,Mg],0,3,0,0,0,YO,0,B,[],4,0,0,0,0,Yv,0,B,[],4,3,0,0,0,Gb,0,B,[],0,3,0,0,0,DN,0,Gb,[],0,3,0,0,0,Br,0,DN,[],0,3,0,0,0,AAn,0,Br,[],0,3,0,0,0,Cx,0,B,[],3,3,0,0,0,Cq,0,B,[],3,3,0,0,0,Ik,0,B,[],3,3,0,0,0,Bt,"String",1,B,[Cx,Cq,Ik],0,3,0,Gd,["cw",ASv(AFu),"bC",ASw(Bs),"lu",ASv(Gm),"jq",ASw(AHt)],F8,0,Gb,[],0,3,0,0,0,GV,0,F8,[],0,3,0,0,0,Z3,0,GV,[],0,3,0,0,0,Em,0,B,[Cx],1,3,0,0,0,FW,0,
Em,[Cq],0,3,0,0,["bC",ASw(APq),"jq",ASw(AJs)],F0,0,B,[Cx,Ik],0,0,0,0,["ht",ASw(I5),"cw",ASv(S)],Hv,0,B,[],3,3,0,0,0,R,0,F0,[Hv],0,3,0,0,["lg",ASz(AJo),"ko",ASy(AGE),"cw",ASv(G8),"ht",ASw(AJv),"lN",ASx(AJU)],Fl,0,GV,[],0,3,0,0,0,ABs,0,Fl,[],0,3,0,0,0,ZL,0,Fl,[],0,3,0,0,0,Bh,0,B,[],3,3,0,0,0,Rk,0,B,[Bh],3,3,0,0,0,Ty,0,B,[Rk],0,3,0,0,["xm",ASw(AHQ)],AA1,0,B,[],0,3,0,0,0,OD,0,B,[Bh],3,3,0,0,0,Tx,0,B,[OD],0,3,0,0,["zN",ASy(AJ7)],AAg,0,B,[],0,3,0,0,0,Sm,0,B,[Bh],3,3,0,0,0,Tc,0,B,[Sm],0,3,0,0,["xm",ASw(AJp)],Y7,0,
B,[],0,3,0,0,0,KV,0,B,[],4,3,0,0,0,AB_,0,B,[],4,3,0,0,0,GQ,0,B,[],3,3,0,0,0,Sj,0,B,[GQ],0,3,0,0,0,BS,0,Br,[],0,3,0,0,0,AA7,0,B,[],4,3,0,0,0,Gj,0,Br,[],0,3,0,0,0,Ie,0,Br,[],0,3,0,0,0,CP,0,B,[Cq],0,3,0,0,0,GR,0,BS,[],0,3,0,0,0,H7,0,B,[Bh],3,3,0,0,0,Q9,0,B,[H7],3,3,0,0,0,Pt,0,B,[Q9],0,3,0,0,["CC",ASx(AKI),"zC",ASw(APl),"E0",ASx(AGd),"Br",ASw(AD_),"CX",ASw(AGa),"DM",ASv(AOf),"yK",ASw(AJ1),"Gj",ASv(AKq),"EJ",ASv(AFy),"HX",ASw(AEy),"Co",ASx(AGA),"F_",ASx(APv),"Gh",ASv(AFS),"EO",ASw(AIJ),"D5",ASw(AMF),"Dn",ASv(ANq),
"z2",ASw(AEd),"zO",ASw(AE1),"A2",ASw(ALa),"Cd",ASw(ALg),"E8",ASx(ALm),"Dh",ASw(AGp),"zm",ASw(AO4)],Ql,0,B,[H7],3,3,0,0,0]);
$rt_metadata([ET,0,B,[Ql],0,3,0,0,["B6",ASv(APK),"zT",ASv(AJh),"Gx",ASv(AKQ),"zV",ASw(APz),"yo",ASw(AOM)],RP,0,B,[Bh],3,3,0,0,0,U_,0,B,[RP],0,3,0,0,["Ir",ASv(AOI),"DD",ASv(ALz),"As",ASw(AKA),"Hf",ASw(AGn),"y0",ASw(AHj),"DF",ASw(ANI),"EZ",ASw(AKy),"E7",ASv(AH8),"yV",ASw(AG0)],SK,0,B,[],3,3,0,0,0,CR,0,B,[],3,3,0,0,0,O0,0,B,[],3,0,0,0,0,H$,0,B,[SK,CR,O0],1,3,0,0,["e4",ASv(Is)],Rc,0,H$,[],0,3,0,0,0,AAb,0,B,[Bh],1,3,0,0,0,Hp,0,B,[Bh],3,3,0,0,0,TD,0,B,[Hp],0,3,0,0,["l4",ASx(AHG)],AA8,0,B,[],3,3,0,0,0,Zl,0,B,[],0,
3,0,0,0,LK,0,B,[],0,3,0,0,0,XQ,0,B,[Bh],1,3,0,0,0,W_,0,B,[Hp],0,3,0,0,["l4",ASx(AHA)],ADC,0,B,[],4,3,0,0,0,ACd,0,B,[],3,3,0,0,0,X8,0,B,[],0,3,0,0,0,ACv,0,B,[Bh],1,3,0,0,0,UD,0,B,[],0,3,0,0,["bC",ASw(AGb)],D$,0,B,[],4,3,0,JS,0,Yx,0,B,[],3,3,0,0,0,JW,0,B,[],0,3,0,0,0,Ma,0,B,[Bh],3,3,0,0,0,R5,0,B,[Ma],3,3,0,0,0,D3,0,B,[Bh],3,3,0,0,0,ACG,0,B,[R5,D3],3,3,0,0,0,Z_,0,B,[],4,3,0,0,0,Cl,0,B,[],0,3,0,0,0,Pm,0,B,[D3],3,3,0,0,0,Q_,0,B,[D3],3,3,0,0,0,QZ,0,B,[D3],3,3,0,0,0,SI,0,B,[D3],3,3,0,0,0,Wn,0,B,[D3],3,3,0,0,0,TG,0,
B,[D3,Pm,Q_,QZ,SI,Wn],3,3,0,0,0,OH,0,B,[],3,3,0,0,0,Jl,0,B,[Bh],3,3,0,0,0,XX,0,B,[Bh,TG,OH,Jl],1,3,0,0,["uD",ASw(ALl),"AC",ASx(ANB),"Hl",ASx(AM6),"DQ",ASy(ALh),"BE",ASw(AOL),"BP",ASv(AFN),"zW",ASy(AD5)],ADd,0,B,[Bh],1,3,0,0,0,ZF,0,B,[Bh],1,3,0,0,0,ADy,0,B,[Bh],1,3,0,0,0,Jn,0,B,[Bh],3,3,0,0,0,OV,0,B,[Jn],0,3,0,0,["vk",ASw(AFK)],Z1,0,B,[Bh],1,3,0,0,0,OW,0,B,[Jn],0,3,0,0,["vk",ASw(AD7)],B1,0,B,[],0,3,0,0,0,Kr,0,B,[],3,3,0,0,0,DA,0,B,[Kr],1,3,0,0,0,DO,0,B,[],3,3,0,0,0]);
$rt_metadata([JZ,0,DA,[DO,Cx],0,3,0,0,0,Vb,0,B,[],3,3,0,0,["ep",ASw(ADH)],G3,0,B,[Vb],3,3,0,0,["ep",ASw(ADH),"k7",ASw(AI_)],Ex,0,B,[G3],1,3,0,0,["ep",ASw(ADH),"k7",ASw(AI_),"dW",ASv(De)],Rt,0,B,[G3],3,3,0,0,["ep",ASw(ADH),"k7",ASw(AI_)],IJ,0,B,[Rt],3,3,0,0,["ep",ASw(ADH),"k7",ASw(AI_)],FM,0,Ex,[IJ],1,3,0,0,["ep",ASw(ADH),"k7",ASw(AI_),"rM",ASw(AMy),"bj",ASv(BI),"ss",ASx(ALN),"l9",ASx(AN$),"bC",ASw(AKM)],KU,0,B,[],3,3,0,0,0,Ya,0,FM,[DO,Cx,KU],0,3,0,0,["k7",ASw(AI_),"f9",ASw(Bq),"cG",ASv(ALv),"rM",ASw(Bv),"l9",
ASx(Rd),"lY",ASw(Fi),"hK",ASv(FK),"ss",ASx(YC),"ep",ASw(DW)],YY,0,B,[],0,3,0,0,0,Bu,0,Br,[],0,3,0,0,0,Xk,0,Br,[],0,3,0,0,0,MX,0,B,[],0,3,0,0,0,Kk,0,JZ,[],0,3,0,0,0,ADc,0,B,[Cq],0,3,0,0,["bC",ASw(ANC),"jq",ASw(AFD)],RR,0,B,[GQ],0,3,0,0,["uV",ASx(AOk)],Us,0,B,[],0,3,0,0,["cw",ASv(AIz),"bC",ASw(AMY)],GY,0,B,[],3,3,0,0,0,F_,0,B,[GY,DO],0,0,0,0,["bC",ASw(AGm)],Gk,0,F_,[],0,0,0,0,0,RN,0,B,[Hp],0,3,0,0,["l4",ASx(ANS)],Wu,0,B,[],0,3,0,0,0,Ki,0,B,[],3,3,0,0,0,Pq,0,B,[Ki],0,3,0,0,0,EN,0,B,[],0,3,0,0,0,Ks,0,EN,[],0,3,
0,0,0,ACC,0,B,[],1,3,0,0,0,OG,0,B,[],3,3,0,0,0,AAP,0,B,[OG],0,3,0,0,0,Z8,0,B,[Bh],1,3,0,0,0,AAx,0,B,[Bh],1,3,0,0,0,FZ,0,EN,[],0,3,0,0,0,JC,0,EN,[],0,3,0,0,0,Zx,0,B,[Bh],1,3,0,0,0,G$,0,B,[],3,3,0,0,["vz",ASv(AK$),"sx",ASv(AHw)],ES,0,B,[],3,3,0,0,0,Jy,0,B,[],3,3,0,0,0,Zv,0,B,[G$,ES,Jy],0,3,0,0,["sx",ASv(AHm),"vz",ASv(AEF),"u0",ASv(Nl),"vp",ASv(WZ),"sM",ASw(N6),"gj",ASx(Sy),"f8",ASx(Mp),"fR",ASy(MC),"gk",ASw(NL),"j9",ASw(AO_)],ACf,0,B,[],0,3,0,0,0,AC4,0,B,[],0,3,0,0,0,ACH,0,B,[],4,3,0,0,0,UH,0,B,[H7],0,3,0,0,["BH",
ASv(AIV)],UO,0,B,[Bh],3,3,0,0,0,AAo,0,B,[UO],1,3,0,0,["uD",ASw(AId),"xL",ASv(AJ8)],Hs,0,B,[],0,3,0,0,0,Sd,0,B,[],3,3,0,0,0,MH,0,B,[Sd],0,3,0,0,0,YK,0,B,[],0,3,0,0,0,Lk,0,B,[CR],1,3,0,0,0,F3,0,Lk,[],1,3,0,0,0]);
$rt_metadata([OE,0,B,[],3,3,0,0,0,Jw,0,B,[OE],3,3,0,0,0,Mi,0,F3,[Jw],0,3,0,0,["lh",ASw(ANT),"fg",ASv(AIe),"iL",ASx(ADP),"il",ASw(AGM)],Kf,0,B,[],3,3,0,0,0,OF,0,B,[Kf],0,3,0,0,["k3",function(b,c,d,e,f){AL_(this,b,c,d,e,f);}],WL,0,B,[],3,3,0,0,0,Ws,0,B,[WL],0,3,0,0,0,EF,0,B,[],3,3,0,0,0,Mu,0,B,[EF],0,3,0,0,0,VR,0,B,[Kf],0,3,0,0,["k3",function(b,c,d,e,f){AGu(this,b,c,d,e,f);}],U5,0,B,[Cq],0,3,0,0,["bC",ASw(AEh),"lu",ASv(AMC),"jq",ASw(AMh)],Gh,0,B,[],3,3,0,0,0,HE,0,B,[],3,3,0,0,0,Ew,0,B,[],3,3,0,0,0,G9,0,B,[Ew],
3,3,0,0,0,N7,0,F3,[ES,Jw,Jy,Gh,HE,G9],0,3,0,0,["lW",ASx(AO2),"lh",ASw(AMD),"fg",ASv(AKb),"u0",ASv(ANj),"vp",ASv(AJ4),"sM",ASw(AOe),"iL",ASx(AJy),"il",ASw(AEB),"gk",ASw(ALU),"fR",ASy(AIF),"f8",ASx(AKm),"gj",ASx(AMw),"gb",ASy(AL$),"eg",ASv(AJn)],Zk,0,B,[Bh],1,3,0,0,0,Ba,0,B,[],3,3,0,0,0,Px,0,B,[Ba],0,3,0,0,["i",ASw(AK7)],AAK,0,B,[Bh],3,3,0,0,0,AAu,0,B,[Bh],1,3,0,0,0,QF,0,B,[Ba],0,3,0,0,["i",ASw(AD4)],B0,0,B,[Bh],3,3,0,0,0,Nz,0,B,[B0],0,3,0,0,["bz",ASw(AMc)],Xj,0,B,[Ba],0,3,0,0,["i",ASw(AIr)],Y8,0,B,[],0,3,0,0,
0,E2,0,B,[],3,3,0,0,0,Xn,0,B,[E2],0,3,0,0,["mb",ASw(AI5)],Bo,0,B,[],3,3,0,0,0,Xo,0,B,[Bo],0,3,0,0,["w",ASv(AH0)],Ub,0,B,[E2],0,3,0,0,["mb",ASw(AMq)],Uc,0,B,[Bo],0,3,0,0,["w",ASv(APL)],Q6,0,B,[Bh],3,3,0,0,0,UE,0,B,[Q6],0,3,0,0,["DV",ASw(AII)],UB,0,B,[Bo],0,3,0,0,0,Qd,0,B,[Bh],3,3,0,0,0,UC,0,B,[Qd],0,3,0,0,["l4",ASx(AGT)],ACN,0,B,[Bh],1,3,0,0,0,Cb,0,B,[Bh],3,3,0,0,0,Uz,0,B,[Cb],0,3,0,0,["b4",ASw(AMj)],WK,0,B,[Kr],3,3,0,0,0,MP,0,B,[WK],3,3,0,0,0,O9,0,DA,[DO,Cx,MP],0,3,0,0,0,UA,0,B,[B0],0,3,0,0,["bz",ASw(ANo)],Pv,
0,B,[],0,3,0,0,0,KI,0,B,[],1,3,0,0,0,ACg,0,KI,[],0,3,0,0,0,IF,0,B,[GQ],0,3,0,0,["uV",ASx(I0)],Zd,0,B,[],0,3,0,0,0,VB,0,B,[Cb],0,3,0,0,["b4",ASw(ALP)]]);
$rt_metadata([VC,0,B,[Cb],0,3,0,0,["b4",ASw(AL2)],VD,0,B,[Cb],0,3,0,0,["b4",ASw(AKo)],VE,0,B,[Cb],0,3,0,0,["b4",ASw(AJR)],VF,0,B,[Cb],0,3,0,0,["b4",ASw(AKe)],VG,0,B,[Cb],0,3,0,0,["b4",ASw(AMr)],VH,0,B,[Cb],0,3,0,0,["b4",ASw(AIu)],VI,0,B,[Cb],0,3,0,0,["b4",ASw(APO)],VJ,0,B,[Cb],0,3,0,0,["b4",ASw(AHF)],VK,0,B,[Cb],0,3,0,0,["b4",ASw(ANv)],W2,0,B,[Cb],0,3,0,0,["b4",ASw(APo)],W3,0,B,[Cb],0,3,0,0,["b4",ASw(AJ6)],W4,0,B,[Cb],0,3,0,0,["b4",ASw(AKv)],W5,0,B,[Cb],0,3,0,0,["b4",ASw(AMd)],S$,0,B,[],3,3,0,0,0,To,0,B,[S$],
0,3,0,0,0,Tn,0,B,[Cb],0,3,0,0,["b4",ASw(AJd)],Mb,0,B,[],0,3,0,0,0,DR,0,B,[],3,3,0,0,0,D6,0,B,[DR],3,3,0,0,0,Iv,0,B,[DR],3,3,0,0,0,Qk,0,B,[CR],0,3,0,0,0,Bk,0,B,[],0,3,0,0,0,VN,0,B,[],0,3,0,0,0,Yq,0,B,[],3,3,0,0,0,Qc,0,B,[],0,3,0,0,0,K_,0,B,[],0,3,0,0,0,C_,0,K_,[],0,3,0,0,0,Vc,0,C_,[],0,3,0,0,0,Ej,0,C_,[],0,3,0,0,0,ZY,0,C_,[],0,3,0,0,0,ABY,0,Ej,[],0,3,0,0,0,ABv,0,Ej,[],0,3,0,0,0,YN,0,Ej,[],0,3,0,0,0,ABu,0,C_,[],0,3,0,0,0,Rw,0,B,[Bh],3,3,0,0,0,ADA,0,B,[Rw],3,3,0,0,0,Qa,0,B,[CR],0,3,0,0,0,Qb,0,B,[],0,3,0,0,0,B_,
0,B,[Cq,Cx],1,3,0,0,0,Gr,0,B_,[],12,3,0,Ja,0,LN,0,B,[],3,3,0,0,0,SA,0,B,[LN],3,3,0,0,0,TA,0,B,[],3,3,0,0,0,F6,0,B,[SA,TA],1,3,0,0,0,IU,0,F6,[],0,3,0,0,0,ZI,0,IU,[],0,3,0,0,0,FV,0,F6,[],1,3,0,0,0,KS,0,FV,[],0,3,0,0,["jX",ASy(AI7)],DJ,0,B_,[],12,3,0,AOG,0,IO,0,B,[Cq],1,3,0,0,0]);
$rt_metadata([LT,0,IO,[],0,3,0,AHu,0,JP,0,B,[],32,0,0,AEH,0,Gw,0,B_,[],12,0,0,AAV,0,FY,0,B_,[],12,0,0,AKs,0,J5,0,FV,[],0,3,0,0,["jX",ASy(AHc)],UF,0,DN,[],0,3,0,0,0,AB$,0,Bu,[],0,3,0,0,0,LR,0,B,[Bh],3,3,0,0,0,WI,0,B,[LR],0,3,0,0,["bz",ASw(AM5)],WJ,0,B,[LR],0,3,0,0,["bz",ASw(AFo)],ABf,0,B,[Bh],1,3,0,0,0,P9,0,B,[],0,3,0,0,0,Im,0,B,[],0,3,0,0,0,AAf,0,B,[ES,Gh],0,0,0,0,["gk",ASw(ALY),"fR",ASy(AOT),"f8",ASx(AMS),"gj",ASx(AJG),"gb",ASy(ANd)],Hl,0,B,[],3,3,0,0,0,TY,0,B,[Hl],0,3,0,0,["hR",ASw(AJt)],TZ,0,B,[Hl],0,3,0,
0,["hR",ASw(AEQ)],T0,0,B,[Ba],0,3,0,0,["i",ASw(AJF)],TU,0,B,[Ba],0,3,0,0,["i",ASw(AKr)],TV,0,B,[D6],0,3,0,0,["b9",ASw(AOA)],JV,0,B,[D6],0,3,0,0,["b9",ASw(AHB)],TW,0,B,[Ba],0,3,0,0,["i",ASw(ANw)],TX,0,B,[Iv],0,3,0,0,["b9",ASw(AGz)],GF,0,B,[],1,3,0,0,0,RL,0,B,[],3,3,0,0,0,Kz,0,GF,[Cq,Hv,Ik,RL],1,3,0,0,0,Jm,0,GF,[Cq],1,3,0,0,0,Hd,0,B,[],0,3,0,AON,0,PE,0,B,[D6],0,3,0,0,["b9",ASw(AFd)],PB,0,B,[Ba],0,3,0,0,["i",ASw(AHJ)],PC,0,B,[HE],0,3,0,0,["lW",ASx(AN5)],NM,0,B,[G9],0,3,0,0,["eg",ASv(AL6)],NN,0,B,[Gh],0,3,0,0,["gb",
ASy(AJc)],NK,0,B,[Iv],0,3,0,0,["b9",ASw(AJS)],AAq,0,B,[Bh],1,3,0,0,0,Tu,0,B,[],3,3,0,0,0,Kv,"JsFileHandle",5,B,[Tu],0,3,0,0,["cw",ASv(AJb)],Yl,0,B,[],3,3,0,0,0,Tr,0,B,[],0,3,0,0,0,RB,0,B,[D6],0,3,0,0,["b9",ASw(AIb)],RA,0,B,[D6],0,3,0,0,["b9",ASw(AFQ)],B5,0,B,[],0,3,0,0,["bC",ASw(APJ)],Ii,0,B,[],3,3,0,0,0,Wi,0,B,[ES,Ii],0,3,0,0,0,UZ,0,B,[Ii,G$],0,3,0,0,["vz",ASv(AK$),"sx",ASv(AHw),"j9",ASw(AJW)],PK,0,B,[],0,3,0,0,0,Kw,0,B,[],0,3,0,0,0,ACO,0,B,[],0,3,0,0,0,Tk,0,B,[],0,3,0,0,0,Eo,0,B,[CR],0,0,0,0,0]);
$rt_metadata([ADf,0,B,[],0,3,0,0,0,Y9,0,B,[CR],0,3,0,0,0,NE,0,B,[Ba],0,3,0,0,0,ND,0,B,[Ba],0,3,0,0,["i",ASw(AEZ)],NC,0,B,[Ba],0,3,0,0,["i",ASw(AEf)],NB,0,B,[Bo],0,3,0,0,["w",ASv(AEe)],NI,0,B,[Bo],0,3,0,0,["w",ASv(AHy)],NH,0,B,[Bo],0,3,0,0,["w",ASv(AP4)],NG,0,B,[Bo],0,3,0,0,["w",ASv(AJP)],NF,0,B,[Bo],0,3,0,0,["w",ASv(ALZ)],NA,0,B,[Bo],0,3,0,0,["w",ASv(APs)],E7,0,B_,[],12,3,0,AEb,0,Jx,0,Kz,[],1,0,0,0,0,Q1,0,Jx,[],0,0,0,0,0,Kg,0,B,[],1,3,0,0,0,Lg,0,B,[],0,3,0,0,0,GL,0,B,[],0,3,0,0,0,O4,0,GL,[],0,3,0,0,0,ACm,0,
B,[],0,3,0,0,0,L$,0,GL,[],0,3,0,0,0,Ta,0,B,[Bh],3,3,0,0,0,Ns,0,B,[Ta],0,3,0,0,["vk",ASw(AJB)],TQ,0,B,[Ba],0,3,0,0,["i",ASw(ANY)],L6,0,B,[],3,3,0,0,0,P$,0,B,[Bo],0,3,0,0,["w",ASv(AIs)],P8,0,B,[Bo],0,3,0,0,["w",ASv(ADW)],W0,0,B,[],3,3,0,0,0,GC,0,B,[Cq],0,3,0,0,0,Kn,0,B,[],0,3,0,0,0,V3,0,Jm,[],0,0,0,0,0,Rp,0,B,[L6],0,3,0,0,0,Nt,0,B,[Bo],0,3,0,0,["w",ASv(APt)],JN,0,B,[],4,3,0,AIU,0,U7,0,B,[],3,3,0,0,0,Sc,0,B,[U7],0,3,0,0,["cw",ASv(AGk)],HK,0,B,[],0,3,0,0,0,Uk,0,B,[CR],0,3,0,0,0,Kc,0,Kg,[],1,3,0,0,0,Ps,0,Kc,[],0,
3,0,0,0,Tj,0,DN,[],0,3,0,0,0,H9,0,B,[],0,3,0,0,0,Yk,0,B,[],3,3,0,0,0,XF,0,B,[],0,3,0,0,0,AAS,0,B,[],3,3,0,0,0,ADo,0,B,[],0,3,0,0,0,LZ,0,B,[GY,Cx],0,3,0,0,0,IX,0,LZ,[],0,0,0,0,0,Ij,0,B5,[],0,3,0,0,0,CH,0,B,[],3,3,0,ACi,0,B$,0,B_,[],12,3,0,ABt,0]);
$rt_metadata([Ir,0,B,[],0,3,0,0,0,HP,0,B,[],0,3,0,0,0,AAI,0,B,[],0,3,0,0,0,Dc,0,B,[],3,3,0,AEz,0,Y5,0,B,[],0,3,0,0,["bC",ASw(ANn)],CI,0,B,[],3,3,0,ACB,0,B7,0,B_,[],12,3,0,Za,0,Dq,0,B,[],3,3,0,AKx,0,CQ,0,B,[],3,3,0,AHk,0,B4,0,B_,[],12,3,0,ABZ,0,Dk,0,B,[],3,3,0,AEl,0,H0,0,B,[],0,3,0,0,0,In,0,B,[],4,3,0,0,0,Yt,0,B,[],0,3,0,0,0,HG,0,B,[],0,3,0,0,0,Up,0,B,[],0,3,0,0,0,Ln,0,B,[],0,3,0,0,0,Yj,0,B,[],0,3,0,0,0,Zw,0,B,[],4,3,0,0,0,Se,0,B,[Ba],0,3,0,0,["i",ASw(AM2)],Vp,0,B,[Ba],0,3,0,0,["i",ASw(AK4)],IV,0,B,[CR],0,3,
0,0,["e4",ASv(ABz)],Wr,0,B,[],0,3,0,0,0,ADq,0,B,[Ba],0,3,0,0,["i",ASw(AG6)],XJ,0,B,[],0,3,0,0,0,TJ,0,B,[],0,3,0,0,0,Si,0,B,[],0,3,0,0,0,Wh,0,B,[Ba],0,3,0,0,["i",ASw(AD3)],Mh,0,B,[Ba],0,3,0,0,["i",ASw(ANG)],PN,0,B,[CR],0,3,0,0,0,ZK,0,B,[Bh],4,3,0,0,0,ACu,0,B,[],0,3,0,0,0,R$,0,DA,[DO,Cx],0,3,0,0,0,UT,0,B,[],0,3,0,0,0,UK,0,B,[],0,3,0,0,0,NS,0,B,[Ba],0,3,0,0,["i",ASw(AE_)],C5,0,Br,[],0,3,0,0,0,SS,0,F8,[],0,3,0,0,0,TS,0,B,[Ba],0,3,0,0,["i",ASw(AHY)],T4,0,B,[EF],0,3,0,0,0,VP,0,B,[Ba],0,3,0,0,["i",ASw(AHe)],RJ,0,B,
[Ba],0,3,0,0,["i",ASw(AGW)],RI,0,B,[Ba],0,3,0,0,["i",ASw(AOQ)],EB,0,B,[],3,3,0,0,0,Ni,0,B,[EB],0,0,0,0,["bv",ASv(BJ),"bg",ASv(BL),"pU",ASv(QP)],ON,0,B,[Ew],0,3,0,0,["eg",ASv(AEA)],OM,0,B,[Ew],0,3,0,0,["eg",ASv(AHi)],R8,0,B,[Ew],0,3,0,0,["eg",ASv(ALH)],Mr,0,B,[Ba],0,3,0,0,0,AAH,0,B,[E2],0,3,0,0,0]);
$rt_metadata([ABR,0,B,[E2],0,3,0,0,0,He,0,F_,[],0,0,0,0,0,T6,0,B,[Ba],0,3,0,0,["i",ASw(ALq)],YZ,0,B,[],1,3,0,0,0,VZ,0,B,[],3,3,0,0,0,ABc,0,B,[Bh],1,3,0,0,0,XT,0,B,[Ba],0,3,0,0,0,Tp,0,B,[],0,3,0,0,0,ZD,0,B,[Jl],1,3,0,0,["uD",ASw(API),"xL",ASv(AFL)],ABC,0,B,[],0,3,0,0,0,E0,0,B,[],0,3,0,0,0,WY,0,B,[Ba],0,3,0,0,["i",ASw(AHW)],Ke,0,E0,[],0,3,0,0,0,Hy,0,E0,[],0,3,0,0,0,EK,0,B,[],0,3,0,0,0,X7,0,B,[],0,3,0,0,0,Vd,0,B,[Ba],0,3,0,0,["i",ASw(AEO)],PQ,0,B,[],0,3,0,0,0,OS,0,B,[Ba],0,3,0,0,["i",ASw(AKt)],O3,0,B,[G3],3,3,
0,0,["ep",ASw(ADH),"k7",ASw(AI_)],Ep,0,Ex,[O3],1,3,0,0,["ep",ASw(ADH),"k7",ASw(AI_)],JG,0,Ep,[],1,0,0,0,["ep",ASw(ADH),"k7",ASw(AI_)],Uy,0,JG,[],0,0,0,0,["ep",ASw(ADH),"k7",ASw(AI_)],K2,0,DA,[],1,0,0,0,0,Uw,0,K2,[],0,0,0,0,0,Lu,0,FM,[KU],1,0,0,0,["ep",ASw(ADH),"hK",ASv(AGo),"lY",ASw(AKk),"k7",ASw(AJe)],Ux,0,Lu,[],0,0,0,0,["ep",ASw(ADH),"f9",ASw(AKu),"cG",ASv(AJI),"bj",ASv(AGQ),"dW",ASv(AEE)],Uu,0,B,[EB],0,0,0,0,["bv",ASv(AEn),"bg",ASv(ALG),"pU",ASv(ANb)],Pr,0,B,[EB],3,3,0,0,0,Uv,0,B,[Pr],0,0,0,0,0,Xf,0,B,[GQ],
0,3,0,0,0,D0,0,Br,[],0,3,0,0,0,Nr,0,B,[],0,3,0,0,0,NO,0,B,[],0,3,0,0,0,ACE,0,B,[],0,3,0,0,0,Sx,0,B,[],0,0,0,0,0,Yo,0,B,[],3,3,0,0,0,S1,0,B,[],0,3,0,0,0,GJ,0,B,[Bh],1,3,0,0,0,YS,0,GJ,[],1,3,0,0,0,ABV,0,GJ,[],1,3,0,0,0,Pe,0,Ep,[],0,0,0,0,["k7",ASw(AI_)],L5,0,B,[Ba],0,3,0,0,["i",ASw(AG9)],Ua,0,B,[Ba],0,3,0,0,["i",ASw(AJQ)],TI,0,Ep,[],0,0,0,0,["ep",ASw(ADH),"k7",ASw(AI_)],Pf,0,Ex,[],0,0,0,0,["ep",ASw(ADH),"k7",ASw(AI_)],IE,0,B,[],0,3,0,0,["bC",ASw(AA4)],GM,0,IE,[],0,3,0,0,["bC",ASw(AFe)],Ei,0,B,[],0,3,0,0,["bC",
ASw(Yc)],EX,0,Ei,[],0,3,0,0,0]);
$rt_metadata([Fm,0,Ei,[],0,3,0,0,["bC",ASw(AOZ)],Fx,0,Ei,[],0,3,0,0,["bC",ASw(AEx)],GE,0,Br,[],0,3,0,0,0,Mv,0,B,[E2],0,3,0,0,0,Mw,0,B,[Ba],0,3,0,0,["i",ASw(AIG)],WD,0,B,[B0],0,3,0,0,["bz",ASw(ANi)],WC,0,B,[B0],0,3,0,0,["bz",ASw(AGw)],VT,0,B,[B0],0,3,0,0,["bz",ASw(AH4)],VS,0,B,[B0],0,3,0,0,["bz",ASw(AIO)],Ms,0,B,[],0,3,0,0,0,QU,0,B,[],0,3,0,0,0,Wy,0,B,[Cb],0,3,0,0,["b4",ASw(AHS)],JM,0,B,[],0,3,0,0,0,Jh,0,B,[],0,3,0,0,0,L0,0,B,[],0,3,0,0,0,Wf,0,B,[Bo],0,3,0,0,["w",ASv(AEL)],Wg,0,B,[Bo],0,3,0,0,["w",ASv(AIw)],AC_,
0,B,[Cq],0,3,0,0,["bC",ASw(ALd)],MO,0,B,[Ba],0,3,0,0,["i",ASw(AJO)],Xb,0,B,[Ba],0,3,0,0,["i",ASw(AP2)],EC,0,B,[],0,0,0,0,0,Sg,0,EC,[EB],0,0,0,0,0,Tw,0,EC,[EB],0,0,0,0,0,QW,0,EC,[EB],0,0,0,0,0,WV,0,D0,[],0,3,0,0,0,QK,0,Br,[],0,3,0,0,0,Vm,0,Br,[],0,3,0,0,0,AC3,0,B,[Ba],0,3,0,0,0,VQ,0,B,[],0,3,0,0,0,Ro,0,B,[Bo],0,3,0,0,["w",ASv(ALR)],US,0,B,[Bo],0,3,0,0,0,EE,0,B,[CR],0,3,0,0,["e4",ASv(AMG),"rF",ASv(ABk),"ld",ASy(Q7),"ka",ASw(AOC),"oe",ASw(AJV),"nY",ASw(APb),"pw",ASx(AMR),"fR",ASy(AIB),"f8",ASx(AFv),"gj",ASx(AKL),
"gk",ASw(AOS),"gb",ASy(AMB)],IM,0,EE,[],0,3,0,0,0,Qn,0,IM,[G$],0,3,0,0,["vz",ASv(AK$),"sx",ASv(AHw),"e4",ASv(AOR),"pw",ASx(AGI),"nY",ASw(AMe),"oe",ASw(ANK),"j9",ASw(AN3)],Oz,0,B,[Bo],0,3,0,0,0,PP,0,EE,[],0,3,0,0,["e4",ASv(ANF),"ld",ASy(AH3),"ka",ASw(AMV),"fR",ASy(AOc),"f8",ASx(ANJ),"gj",ASx(AK6),"gk",ASw(AKR),"gb",ASy(AHf),"rF",ASv(APp)],Gs,0,B,[],0,3,0,0,0,Yn,0,B,[Bh],1,3,0,0,0,So,0,B,[B0],0,3,0,0,["bz",ASw(AGV)],AAX,0,B,[],1,3,0,0,0,Me,0,B,[B0],0,3,0,0,["bz",ASw(ANm)],QH,0,B,[B0],0,3,0,0,["bz",ASw(AG3)],Qz,
0,B,[LN],3,3,0,0,0,Nj,0,B,[Qz],3,3,0,0,0,GG,0,B,[Nj],1,3,0,0,0,Zu,0,GG,[],0,3,0,0,0,Tf,0,B,[Bo],0,3,0,0,["w",ASv(AGq)],Tg,0,B,[Bo],0,3,0,0,["w",ASv(ADS)],Td,0,B,[Bo],0,3,0,0,["w",ASv(AJj)],Te,0,B,[Bo],0,3,0,0,["w",ASv(AL5)]]);
$rt_metadata([SU,0,B,[Bo],0,3,0,0,["w",ASv(AKp)],SW,0,B,[Bo],0,3,0,0,["w",ASv(AL4)],SV,0,B,[Bo],0,3,0,0,["w",ASv(AN_)],P_,0,B,[],3,3,0,0,0,Xa,0,B,[Bo],0,3,0,0,["w",ASv(AMO)],H2,0,B,[],0,3,0,0,0,Q8,0,B,[],3,3,0,0,0,XN,0,B,[Q8],0,3,0,0,0,UI,0,EE,[],0,3,0,0,0,Wx,0,Em,[Cq],0,3,0,0,0,Fd,0,B,[],0,0,0,0,0,Hg,0,B,[],4,3,0,0,0,Ur,0,B,[],0,3,0,0,0,V9,0,B,[EF],0,3,0,0,["vm",ASx(AI8)],Ut,0,B,[Ba],0,3,0,0,["i",ASw(AF3)],VL,0,BS,[],0,3,0,0,0,D7,0,B,[],0,3,0,0,0,Vh,0,B,[Bo],0,3,0,0,["w",ASv(AFc)],Vf,0,B,[Bo],0,3,0,0,["w",
ASv(AEm)],Vi,0,B,[Bo],0,3,0,0,["w",ASv(AJg)],Wm,0,B,[Bo],0,3,0,0,["w",ASv(AMI)],Wl,0,B,[Bo],0,3,0,0,["w",ASv(AIt)],NP,0,B,[Ew],0,3,0,0,["eg",ASv(AN2)],Of,0,B,[Bo],0,3,0,0,["w",ASv(AHr)],Og,0,B,[Bo],0,3,0,0,["w",ASv(AOV)],Oh,0,B,[Bo],0,3,0,0,["w",ASv(AML)],Oc,0,B,[Bo],0,3,0,0,["w",ASv(AIa)],Od,0,B,[Bo],0,3,0,0,["w",ASv(APH)],KM,0,B,[],3,3,0,0,0,WT,0,B,[KM],0,3,0,0,0,N9,0,B,[Ba],0,3,0,0,["i",ASw(AEv)],N8,0,B,[Ba],0,3,0,0,["i",ASw(AEP)],RC,0,Em,[Cq],0,3,0,0,0,Vg,0,B,[EF],0,3,0,0,["vm",ASx(AKF)],P7,0,B,[B0],0,3,
0,0,["bz",ASw(AGH)],Il,0,B,[Bh],3,3,0,0,0,Mn,0,B,[Il],0,3,0,0,["qM",ASv(AIR)],L_,0,B,[Il],0,3,0,0,["qM",ASv(ADJ)],Sn,0,B,[B0],0,3,0,0,["bz",ASw(AIA)],UW,0,B,[Ew],0,3,0,0,["eg",ASv(APB)],Tt,0,B,[KM],0,3,0,0,0,S7,0,B,[],0,3,0,0,0,WB,0,B,[B0],0,3,0,0,["bz",ASw(AIl)],WH,0,Im,[],0,3,0,0,0,LW,0,Br,[],0,3,0,0,0,ZH,0,B,[Bh],1,3,0,0,0,QT,0,B,[Cx],4,3,0,0,0,X4,0,B,[],0,3,0,0,0,W6,0,B,[Ba],0,3,0,0,["i",ASw(ALb)],VY,0,B,[Ba],0,3,0,0,["i",ASw(ALQ)]]);
$rt_metadata([ABI,0,B,[],0,3,0,0,0,RU,0,B,[],3,3,0,0,0,Gl,0,B,[],3,3,0,0,0,Uj,0,B,[Gl],0,3,0,0,["iD",ASy(AJq)],Uh,0,B,[Gl],0,3,0,0,["iD",ASy(AE4)],HI,0,B,[Cx,Cq],0,3,0,0,0,FL,0,B,[],3,3,0,0,0,ACZ,0,B,[FL],0,3,0,0,0,OC,0,B,[FL],3,3,0,0,0,AC0,0,B,[OC],0,3,0,0,0,R3,0,B,[Gl],0,3,0,0,["iD",ASy(ALI)],R1,0,B,[DR],0,3,0,0,["b9",ASw(AJD)],R0,0,B,[DR],0,3,0,0,["b9",ASw(ANz)],RZ,0,B,[Gl],0,3,0,0,["iD",ASy(AMa)],BA,0,B,[],1,0,0,0,["b_",ASy(Hc),"cd",ASz(Hn),"hk",ASv(AFq),"M",ASw(AOn),"bP",ASw(AOm),"fk",ASv(APf),"ec",ASv(IB)],T7,
0,B,[],3,3,0,0,0,UY,0,B,[T7],0,3,0,0,0,Nc,0,B,[Ba],0,3,0,0,["i",ASw(AGf)],Nd,0,B,[Ba],0,3,0,0,["i",ASw(ALO)],Qs,0,B,[Ba],0,3,0,0,["i",ASw(AK0)],CA,0,BA,[],0,0,0,LQ,["c",ASy(AET),"E",ASw(AFa)],Gn,0,B,[],0,0,0,0,0,If,0,Bu,[],0,3,0,0,0,ACT,0,B,[],1,3,0,0,0,We,0,B,[B0],0,3,0,0,["bz",ASw(ALX)],AAY,0,B,[Bh],3,3,0,0,0,S_,0,B,[B0],0,3,0,0,["bz",ASw(ALx)],Rm,0,CA,[],0,0,0,0,["c",ASy(AEq),"E",ASw(AM1)],WP,0,CA,[],0,0,0,0,["c",ASy(AF4)],PT,0,CA,[],0,0,0,0,["c",ASy(AFn)],Sh,0,CA,[],0,0,0,0,["c",ASy(AEw),"E",ASw(ALK)],Fb,
0,CA,[],0,0,0,0,["c",ASy(AOD)],BU,0,BA,[],1,0,0,0,["c",ASy(APG),"bT",ASv(ANR),"E",ASw(AIY)],ACx,0,BU,[],0,0,0,0,["bn",ASx(ANl),"b_",ASy(AHd),"cd",ASz(AFW),"E",ASw(AEu)],BP,0,BA,[],0,0,0,0,["c",ASy(AHZ),"M",ASw(ALA),"bP",ASw(AJJ),"E",ASw(AMg),"ec",ASv(AFR)],It,0,BP,[],0,0,0,0,["c",ASy(ALk),"E",ASw(AMx)],Dr,0,It,[],0,0,0,0,["c",ASy(AGt),"M",ASw(AMl)],Ml,0,Dr,[],0,0,0,0,["c",ASy(ALu),"E",ASw(AOs)],U$,0,Dr,[],0,0,0,0,["c",ASy(AE7),"E",ASw(ANX)],QX,0,Dr,[],0,0,0,0,["c",ASy(AFO),"E",ASw(AP0)],SH,0,Dr,[],0,0,0,0,["c",
ASy(AD0),"E",ASw(AMQ)],Ga,0,BP,[],0,0,0,0,["c",ASy(AEj),"b_",ASy(AJY),"cd",ASz(AM7),"bP",ASw(AJC),"fk",ASv(ALE),"ec",ASv(APh)],I$,0,B,[],0,3,0,0,0,AAk,0,B,[Bh],1,3,0,0,0,ACP,0,B,[Bh],1,3,0,0,0,Gp,0,B,[],1,0,0,0,0,Q,0,Gp,[],1,0,0,OK,["c7",ASv(AE9),"eJ",ASv(AEJ),"iJ",ASv(ANN),"gI",ASv(APd)],YH,0,Q,[],0,0,0,0,["j",ASw(CJ),"c7",ASv(CE),"eJ",ASv(AG$),"iJ",ASv(AOd),"cw",ASv(AKS),"gI",ASv(AHn)],IL,0,Br,[],0,3,0,0,0,DM,0,BA,[],1,0,0,0,["bP",ASw(AM9),"E",ASw(AOx),"ec",ASv(AKh)]]);
$rt_metadata([CL,0,DM,[],0,0,0,0,["c",ASy(AD2)],EQ,0,CL,[],0,0,0,0,["c",ASy(AEW)],CB,0,DM,[],0,0,0,0,["c",ASy(AEi)],Ef,0,CL,[],0,0,0,0,["c",ASy(AJ5),"M",ASw(AP3)],Vr,0,CL,[],0,0,0,0,["c",ASy(APA),"b_",ASy(AKN)],V,0,B,[],1,0,0,0,0,CX,0,Bu,[],0,3,0,0,0,MG,0,Gp,[DO],0,0,0,0,["cw",ASv(AKW)],N5,0,BA,[],0,0,0,0,["c",ASy(AJk),"E",ASw(ALy)],V$,0,B,[DO,Cx],0,3,0,0,0,Mt,0,BP,[],0,0,0,0,0,Qh,0,BP,[],0,0,0,0,["c",ASy(AER),"M",ASw(ALi),"E",ASw(AFr),"bP",ASw(AE8)],Dh,0,BP,[],0,0,0,0,["c",ASy(AG1),"j",ASw(AHD),"bP",ASw(AEN),
"M",ASw(AND),"E",ASw(AHb)],II,0,Dh,[],0,0,0,0,["j",ASw(AIZ)],Yw,0,BU,[],0,0,0,0,["bn",ASx(AJl)],DZ,0,BU,[],0,0,0,0,["bn",ASx(L7),"bP",ASw(ALD)],OL,0,BP,[],0,0,0,0,["M",ASw(AJ3),"c",ASy(ADR),"bP",ASw(AFk),"E",ASw(AOg)],D9,0,BU,[],0,0,0,0,["bT",ASv(AI6),"bn",ASx(AIc),"b_",ASy(AGY),"cd",ASz(AJa),"bP",ASw(AOa)],AC8,0,BU,[],0,0,0,0,["bn",ASx(ADK)],XB,0,BU,[],0,0,0,0,["bn",ASx(AD$)],EW,0,BP,[],0,0,0,0,["M",ASw(APg),"c",ASy(ALj),"bP",ASw(AJm),"E",ASw(AMm)],WA,0,EW,[],0,0,0,0,0,SQ,0,EW,[],0,0,0,0,0,Xl,0,CB,[],0,0,0,
0,["c",ASy(AF_)],PI,0,CB,[],0,0,0,0,["c",ASy(AKz)],Fr,0,CB,[],0,0,0,0,["c",ASy(ANA),"M",ASw(AOH)],Pj,0,Fr,[],0,0,0,0,["c",ASy(AI9),"M",ASw(AKY)],EV,0,CB,[],0,0,0,0,["c",ASy(APY)],MS,0,EV,[],0,0,0,0,["c",ASy(AID)],Re,0,CB,[],0,0,0,0,["c",ASy(APn)],Qt,0,Fr,[],0,0,0,0,["c",ASy(AFs)],TN,0,EV,[],0,0,0,0,["c",ASy(AEC)],Rf,0,DM,[],0,0,0,0,["c",ASy(APM),"b_",ASy(ANP)],Oi,0,DM,[],0,0,0,0,["c",ASy(ALF),"b_",ASy(ADX)],Eu,0,B,[],1,0,0,0,0,Xp,0,CL,[],0,0,0,0,["c",ASy(AED)],Vk,0,Ef,[],0,0,0,0,["c",ASy(AKw)],O7,0,EQ,[],0,
0,0,0,["c",ASy(AM$)],Qp,0,CL,[],0,0,0,0,["c",ASy(ALw)],S4,0,Ef,[],0,0,0,0,["c",ASy(AEM)],QY,0,EQ,[],0,0,0,0,["c",ASy(ANp)],JQ,0,BA,[],4,0,0,0,["c",ASy(AJH),"E",ASw(AIN)],Y_,0,BA,[],0,0,0,0,["c",ASy(AE6),"E",ASw(AFh)],N_,0,BA,[],0,0,0,0,["c",ASy(AI1),"E",ASw(APW)],Wd,0,BA,[],4,0,0,0,["c",ASy(AMb),"E",ASw(AFZ)],VO,0,BA,[],0,0,0,0,["c",ASy(ALf),"E",ASw(ADI)],M1,0,BA,[],0,0,0,0,["c",ASy(AFP),"E",ASw(AHR)],ACW,0,BP,[],0,0,0,0,["c",ASy(APr),"M",ASw(AFm),"hk",ASv(AK3),"E",ASw(AFl)],YF,0,BP,[],4,0,0,0,["c",ASy(AK_),
"M",ASw(AMX),"hk",ASv(ADF),"E",ASw(APF)],ACK,0,BA,[],4,0,0,0,["c",ASy(AJr),"E",ASw(AHK)]]);
$rt_metadata([AAU,0,BA,[],0,0,0,0,["c",ASy(ALe),"E",ASw(AHx)],Xy,0,BA,[],0,0,0,0,["c",ASy(AIH),"E",ASw(AF2)],GI,0,BP,[],0,0,0,0,["c",ASy(AEI),"M",ASw(AMk),"E",ASw(AMz)],ACR,0,GI,[],0,0,0,0,["c",ASy(AF$),"b_",ASy(AOp),"cd",ASz(AEs),"bP",ASw(AKl)],Z4,0,GI,[],0,0,0,0,["c",ASy(AJT)],N4,0,F0,[Hv],0,3,0,0,["lg",ASz(AHo),"ko",ASy(AE$),"ht",ASw(AFB),"lN",ASx(ANQ)],Rh,0,BU,[],0,0,0,0,["bn",ASx(AGr),"b_",ASy(AE2),"cd",ASz(AHO),"bP",ASw(AIm)],Xx,0,BU,[],0,0,0,0,["bn",ASx(AJ0)],MW,0,BU,[],0,0,0,0,["bn",ASx(ANc)],GH,0,B,
[],4,0,0,AMN,0,Mf,0,BU,[],0,0,0,0,["bn",ASx(ANh)],Kq,0,BP,[],0,0,0,0,["M",ASw(ALt),"c",ASy(AF0),"b_",ASy(AIk),"cd",ASz(AGy),"bP",ASw(AEp),"E",ASw(ANZ)],KN,0,BP,[],0,0,0,0,["M",ASw(AFA),"c",ASy(AD1),"b_",ASy(ALS),"cd",ASz(ANa),"bP",ASw(AGs),"E",ASw(AL1)],DB,0,BU,[],0,0,0,0,["bn",ASx(AMA),"b_",ASy(AKT),"cd",ASz(AFz),"bP",ASw(AMp)],Un,0,Eu,[],0,0,0,0,["hd",ASw(AFJ),"sh",ASx(AMv)],Uo,0,Eu,[],0,0,0,0,["hd",ASw(ANr),"sh",ASx(AO$)],ABP,0,B,[],0,0,0,0,0,XP,0,B,[],0,0,0,0,0,Km,0,V,[],0,0,0,0,["B",ASv(Z$)],Ju,0,V,[],
0,0,0,0,["B",ASv(AAL)],ABJ,0,V,[],0,0,0,0,["B",ASv(AM0)],ACe,0,V,[],0,0,0,0,["B",ASv(AN1)],ACh,0,V,[],0,0,0,0,["B",ASv(AG2)],Kd,0,V,[],0,0,0,0,["B",ASv(YI)],K5,0,Kd,[],0,0,0,0,["B",ASv(ZA)],ADw,0,V,[],0,0,0,0,["B",ASv(AIj)],L3,0,K5,[],0,0,0,0,["B",ASv(Xu)],AAl,0,L3,[],0,0,0,0,["B",ASv(AKi)],AAC,0,V,[],0,0,0,0,["B",ASv(AGl)],Y2,0,V,[],0,0,0,0,["B",ASv(AKf)],YP,0,V,[],0,0,0,0,["B",ASv(APc)],ACk,0,V,[],0,0,0,0,["B",ASv(AKZ)],ADE,0,V,[],0,0,0,0,["B",ASv(ADU)],ABQ,0,V,[],0,0,0,0,["B",ASv(AIL)],ABB,0,V,[],0,0,0,0,
["B",ASv(AMH)],ACz,0,V,[],0,0,0,0,["B",ASv(AGi)],X6,0,V,[],0,0,0,0,["B",ASv(AGG)],XL,0,V,[],0,0,0,0,["B",ASv(AO7)],ABX,0,V,[],0,0,0,0,["B",ASv(ADL)],AB8,0,V,[],0,0,0,0,["B",ASv(AJu)],Zq,0,V,[],0,0,0,0,["B",ASv(AGN)],AAJ,0,V,[],0,0,0,0,["B",ASv(AHT)],ADi,0,V,[],0,0,0,0,["B",ASv(AJw)],AB6,0,V,[],0,0,0,0,["B",ASv(AOj)],Z0,0,V,[],0,0,0,0,["B",ASv(AL9)],Zo,0,V,[],0,0,0,0,["B",ASv(AKU)],ADB,0,V,[],0,0,0,0,["B",ASv(AMT)],IT,0,V,[],0,0,0,0,["B",ASv(AAF)],ACF,0,IT,[],0,0,0,0,["B",ASv(AKH)],AAp,0,Km,[],0,0,0,0,["B",ASv(AEY)]]);
$rt_metadata([Zi,0,Ju,[],0,0,0,0,["B",ASv(AH9)],YU,0,V,[],0,0,0,0,["B",ASv(AJL)],Ze,0,V,[],0,0,0,0,["B",ASv(AOU)],AAd,0,V,[],0,0,0,0,["B",ASv(AHs)],AAm,0,V,[],0,0,0,0,["B",ASv(ADM)],YX,0,B,[],4,0,0,0,0,Yu,0,B,[],4,3,0,0,0,M5,0,B,[],0,3,0,0,0,AB1,0,B,[],0,3,0,0,0,ZU,0,B,[],4,3,0,0,0,YG,0,B,[DR],0,3,0,0,0,AAE,0,GG,[],0,3,0,0,0,Qq,0,B,[],3,3,0,0,0,Vq,0,Q,[],0,0,0,0,["j",ASw(AG8)],Vn,0,Q,[],0,0,0,0,["j",ASw(AEg)],On,0,Q,[],0,0,0,0,["j",ASw(AJA),"cw",ASv(AHX)],Ou,0,Q,[],0,0,0,0,["j",ASw(AME)],Os,0,Q,[],0,0,0,0,["j",
ASw(ANg)],Ot,0,Q,[],0,0,0,0,["j",ASw(AJZ)],Ox,0,Q,[],0,0,0,0,["j",ASw(AGJ)],Oy,0,Q,[],0,0,0,0,["j",ASw(ADG)],Ov,0,Q,[],0,0,0,0,["j",ASw(AH2)],Ow,0,Q,[],0,0,0,0,["j",ASw(AJ2)],OA,0,Q,[],0,0,0,0,["j",ASw(AOt)],OB,0,Q,[],0,0,0,0,["j",ASw(AGg)],Om,0,Q,[],0,0,0,0,["j",ASw(AP5)],O$,0,Q,[],0,0,0,0,["j",ASw(AH6)],Ok,0,Q,[],0,0,0,0,["j",ASw(AGe)],Ol,0,Q,[],0,0,0,0,["j",ASw(AHH)],Oq,0,Q,[],0,0,0,0,["j",ASw(AI3)],Oj,0,Q,[],0,0,0,0,["j",ASw(AN8)],Oo,0,Q,[],0,0,0,0,["j",ASw(AFb)],Op,0,Q,[],0,0,0,0,["j",ASw(AL0)],Nu,0,B,
[Ba],0,3,0,0,0,FA,0,B_,[],12,0,0,R4,0,Lr,0,B,[],3,3,0,0,0,RW,0,B,[Lr],4,3,0,0,0,Ww,0,B,[Ba],0,3,0,0,["i",ASw(APU)],ST,0,B,[Ba],0,3,0,0,["i",ASw(AFj)],SB,0,B,[Ba],0,3,0,0,0,SL,0,B,[],32,0,0,ARv,0,Ue,0,B,[DR],0,3,0,0,["b9",ASw(AJ_)],Uf,0,B,[FL],0,3,0,0,["nt",ASx(ADQ)],Nf,0,B,[DR],0,3,0,0,["b9",ASw(AOY)],Ne,0,B,[FL],0,3,0,0,["nt",ASx(AOK)],MN,0,Ga,[],0,0,0,0,["b_",ASy(AHv),"cd",ASz(APX),"fk",ASv(AFY)],AB2,0,B,[DR],0,0,0,0,0,OI,0,B,[Ba],0,3,0,0,["i",ASw(AIC)],NT,0,B,[Ba],0,3,0,0,["i",ASw(AO8)],Zs,0,B,[Qq],0,3,0,
0,0]);
$rt_metadata([OT,0,B,[B0],0,3,0,0,["bz",ASw(AF9)],NX,0,B,[Bo],0,3,0,0,0,TL,0,B,[Ba],0,3,0,0,["i",ASw(AKd)],SD,0,B,[Ba],0,3,0,0,["i",ASw(APw)],ACq,0,B,[],0,0,0,0,0,XZ,0,B,[],0,3,0,0,0,RO,0,B,[Hl],0,3,0,0,0,Ud,0,B,[Lr],0,0,0,0,0,Wk,0,B,[B0],0,3,0,0,["bz",ASw(AGB)],Nb,0,B,[Bo],0,3,0,0,["w",ASv(ANH)],Ny,0,B,[Ba],0,3,0,0,["i",ASw(AKG)],U1,0,B,[Ba],0,3,0,0,["i",ASw(AHV)],Sk,0,Q,[],0,0,0,0,["j",ASw(AOB)],Mq,0,Q,[],0,0,0,0,["j",ASw(AEX)],Rv,0,Q,[],0,0,0,0,["j",ASw(AEK)],Ru,0,Q,[],0,0,0,0,["j",ASw(AHq)],VX,0,Q,[],0,
0,0,0,["j",ASw(AIS)],O1,0,Q,[],0,0,0,0,["j",ASw(AOF)],NZ,0,Q,[],0,0,0,0,["j",ASw(ALo)],QI,0,Q,[],0,0,0,0,["j",ASw(AMM)],Mk,0,Q,[],0,0,0,0,["j",ASw(APD)],Mo,0,Q,[],0,0,0,0,["j",ASw(AGx)],Nx,0,Q,[],0,0,0,0,["j",ASw(AOP)],Pn,0,Q,[],0,0,0,0,["j",ASw(AKc)],Py,0,Q,[],0,0,0,0,["j",ASw(AMi)],SM,0,Q,[],0,0,0,0,["j",ASw(AOu)],RX,0,Q,[],0,0,0,0,["j",ASw(APk)],MB,0,Q,[],0,0,0,0,["j",ASw(AGj)],LJ,0,Q,[],0,0,0,0,["j",ASw(ALr)],Rq,0,LJ,[],0,0,0,0,["j",ASw(ANE)],Ym,0,B,[Ba],0,0,0,0,0,TC,0,B,[],3,3,0,AQ2,0,Ra,0,B,[Il],0,3,0,
0,["qM",ASv(ANk)],SE,0,B,[B0],0,3,0,0,["bz",ASw(AIf)],SF,0,B,[B0],0,3,0,0,["bz",ASw(AD9)],Sl,0,B,[B0],0,3,0,0,["bz",ASw(AJK)],XM,0,B,[Bh],1,3,0,0,0,PS,0,B,[B0],0,3,0,0,["bz",ASw(AM_)],M0,0,B,[Bo],0,3,0,0,["w",ASv(AOv)],AAr,0,B,[EF],0,3,0,0,0,M4,0,B,[Ba],0,3,0,0,["i",ASw(AHP)],M3,0,B,[Ba],0,3,0,0,["i",ASw(AOh)],M2,0,B,[Ba],0,3,0,0,["i",ASw(ADV)],UX,0,B,[],0,3,0,0,0,ABS,0,B,[],3,3,0,0,0,Yf,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Lv=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","Either src or dest is null","dark","light","darcula","unknown theme: ","provided result is not an array","bad model",".cpp",".cc",".cxx",".hpp",".c",".h",".java",
"java",".js","js",".activity","activity","cpp","[",", ","]","object","function","string","number","text","\n","...","\\n","Cannot find type: ","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","Illegal argument javaObject instanceof ","Consolas","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","topBase(font, lineHeight) = "," ","\r","mermaid","Full file parsed in ","ms","Resolving all in "," ms",
"change model language: from = "," to = ","opening file ","highlight at (",") does not match code model","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","ActivityParser.parse","JavaParser.parseScopes","setDiffModel","deleteDiffModel","#606366","#2B2B2B","#A4A3A3","#323232","#616161","#393B40","#DFE1E5","#484A4A","#294436","#385570","#303C47","#4B5059",
"#1E1F22","#A1A3AB","#26282E","#43454A","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","WebGraphics::ctor finish",".","FontDesk::FontDesk iSize != size: ","italic","normal","oblique","onPaste: item.type = ",", item.kind = ",
"pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","UTF-8","BYTE","FLOAT","GRAYSCALE","RGBA","ns-resize","ew-resize","Usages of ","No definition or usages","Go to Declaration","Go to Definition","Go to References","Go to (local)",
"Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","File is too large: "," name: ",", size = ","trying to display with unknown screen size and dpr","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN",
"LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","Segoe UI","The last char in dst ","#BBBBBB","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","defaultText","keyword","field","#C44193","#3C7C16","comma","error","#F93900","unused","#808080","#164FF1","method","#396179","showUsage","braceMatch","#FFEF28","#93D9D9","comment","annotation","#BBB529","type","#287BDE","operator","#5F8C8A","#D4E2FF","#000000","#818594","#080808","#A9B7C6","#344134","#40332B","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D",
"#3B514D","#3C3F41","#4B6EAF","#787878","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","#CF8E6D","#C77DBB","#6AAB73","#F75464","#6F737A","#2AACB8","#56A8F5","#7A7E85","#B3AE60","#2E436E","#2E426D","#4D4E51","nwse-resize","nesw-resize","toolbar size is unknown","Expected "," ints to write, but "," written"," ints to read, but "," read","Member should contains at least 1 decl","Unknown scope type: ","Int","Iter","VP","Resolve","Rep","/","Unexpected type: ","Empty Expression","Unexpected ref node type: ",
"readClipboardText error: ","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","Current Version: ","Last Parsed Version: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit",
"javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo",
"Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical",
"ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","DEF","DECL","writeClipboardText error: ","Viewport parsed in ","asyncFullParseFile","asyncParseFirstLines","asyncParseFile","First lines parsed in ",
"File structure parsed in ","Verdana","JetBrains Mono"]);
Bt.prototype.toString=function(){return $rt_ustr(this);};
Bt.prototype.valueOf=Bt.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AFw(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_ucompare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x
=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo
+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo
>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r
=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_ucompare=function(a,b){var r=$rt_ucmp(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo
=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo
&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)
<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|
a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo
=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>
16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo
>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==
0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,
b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits
=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,
bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,
b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_ucompare=function(a,b){a=$rt_globals.BigInt.asUintN(64,a);b=$rt_globals.BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,
a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var AWo=Long_add;var JR=Long_sub;var AKO=Long_mul;var AWp=Long_div;var AWq=Long_rem;var AWr=Long_or;var Xq=Long_and;var AWs=Long_xor;var AWt=Long_shl;var AWu=Long_shr;var ARZ=Long_shru;var AWv=Long_compare;var AGK=Long_eq;var AWw=Long_ne;var AQC=Long_lt;var AWx=Long_le;var AWy=Long_gt;var AWz=Long_ge;var AWA=Long_not;var ARk=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AQQ);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Ty.prototype;c.create=c.xm;c=Tx.prototype;c.create=c.zN;c=Tc.prototype;c.create=c.xm;c=Pt.prototype;c.registerDocumentHighlightProvider=c.F_;c.getModel=c.Gh;c.getProperty=c.EO;c.getText=c.Gj;c.onDidChangeModel=c.z2;c.revealPosition=c.Dh;c.focus=c.DM;c.setReadonly=c.zm;c.setPosition=c.CX;c.setFontSize=c.A2;c.setFontFamily=c.zO;c.revealLine=c.yK;c.getPosition=c.EJ;c.revealLineInCenter=c.D5;c.executeOnWorker=c.CC;c.setTheme=c.HX;c.setModel=c.Cd;c.registerDefinitionProvider=c.E8;c.registerEditorOpener
=c.zC;c.registerReferenceProvider=c.E0;c.dispose=c.Dn;c.registerDeclarationProvider=c.Co;c.setText=c.Br;c=ET.prototype;c.getPositionAt=c.zV;c.getOffsetAt=c.yo;c.dispose=c.zT;Object.defineProperty(c,"language",{get:c.Gx});Object.defineProperty(c,"uri",{get:c.B6});c=U_.prototype;c.setRightModel=c.As;c.setFontFamily=c.Hf;c.setLeftModel=c.EZ;c.setTheme=c.y0;c.getRightModel=c.Ir;c.focus=c.DD;c.getLeftModel=c.E7;c.setReadonly=c.yV;c.setFontSize=c.DF;c=TD.prototype;c.f=c.l4;c=W_.prototype;c.f=c.l4;c=XX.prototype;c.removeEventListener
=c.DQ;c.dispatchEvent=c.BE;c.get=c.uD;c.addEventListener=c.zW;Object.defineProperty(c,"length",{get:c.BP});c=OV.prototype;c.accept=c.vk;c=OW.prototype;c.accept=c.vk;c=RN.prototype;c.f=c.l4;c=UH.prototype;c.dispose=c.BH;c=AAo.prototype;c.get=c.uD;Object.defineProperty(c,"length",{get:c.xL});c=Nz.prototype;c.f=c.bz;c=UE.prototype;c.onAnimationFrame=c.DV;c=UC.prototype;c.f=c.l4;c=Uz.prototype;c.handleEvent=c.b4;c=UA.prototype;c.f=c.bz;c=VB.prototype;c.handleEvent=c.b4;c=VC.prototype;c.handleEvent=c.b4;c=VD.prototype;c.handleEvent
=c.b4;c=VE.prototype;c.handleEvent=c.b4;c=VF.prototype;c.handleEvent=c.b4;c=VG.prototype;c.handleEvent=c.b4;c=VH.prototype;c.handleEvent=c.b4;c=VI.prototype;c.handleEvent=c.b4;c=VJ.prototype;c.handleEvent=c.b4;c=VK.prototype;c.handleEvent=c.b4;c=W2.prototype;c.handleEvent=c.b4;c=W3.prototype;c.handleEvent=c.b4;c=W4.prototype;c.handleEvent=c.b4;c=W5.prototype;c.handleEvent=c.b4;c=Tn.prototype;c.handleEvent=c.b4;c=WI.prototype;c.f=c.bz;c=WJ.prototype;c.f=c.bz;c=Ns.prototype;c.accept=c.vk;c=ZD.prototype;c.get=
c.uD;Object.defineProperty(c,"length",{get:c.xL});c=WD.prototype;c.f=c.bz;c=WC.prototype;c.f=c.bz;c=VT.prototype;c.f=c.bz;c=VS.prototype;c.f=c.bz;c=Wy.prototype;c.handleEvent=c.b4;c=So.prototype;c.f=c.bz;c=Me.prototype;c.f=c.bz;c=QH.prototype;c.f=c.bz;c=P7.prototype;c.f=c.bz;c=Mn.prototype;c.onTimer=c.qM;c=L_.prototype;c.onTimer=c.qM;c=Sn.prototype;c.f=c.bz;c=WB.prototype;c.f=c.bz;c=We.prototype;c.f=c.bz;c=S_.prototype;c.f=c.bz;c=OT.prototype;c.f=c.bz;c=Wk.prototype;c.f=c.bz;c=Ra.prototype;c.onTimer=c.qM;c=
SE.prototype;c.f=c.bz;c=SF.prototype;c.f=c.bz;c=Sl.prototype;c.f=c.bz;c=PS.prototype;c.f=c.bz;})();
$rt_exports.main();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);
export const newEditor = self.editorFactory;
export const newTextModel = self.modelFactory;
export const newCodeDiff = self.diffFactory;
