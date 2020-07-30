var _inside=_inside||[];var _insideLoaded=_insideLoaded||false;var _insideJQ=_insideJQ||null;(function(){if(_insideLoaded)
return;_insideLoaded=true;var accountKey="IN-1000863";var trackerURL="eu2-track.inside-graph.com";var subsiteId=null;var insideOrderTotal=insideOrderTotal||0;var _insideMaxLoop=25;var _insideCurLoop=0;var _insideFirstLoad=false;function processInside(tracker){var searchUrl=null;var searchQueryString=null;var productCategoryUrl=null;var productCategoryQueryString=null;var productUrl=null;var productQueryString=null;var checkoutUrl=null;var checkoutQueryString=null;var orderConfirmedUrl="/successAuthForComprafacil?orderId";var orderConfirmedQueryString=null;function log(){if(typeof(console)!="undefined"&&typeof(console.log)!="undefined"){}}
function deferWait(callback,test){if(test()){callback();return;}
var _interval=10;var _spin=function(){if(test()){callback();}
else{_interval=_interval>=1000?1000:_interval*2;setTimeout(_spin,_interval);}};setTimeout(_spin,_interval);}
function keepWait(callback,test){if(test()){callback();if(_insideCurLoop>=_insideMaxLoop){return;}}
var _interval=1000;var _spin=function(){if(test()){_insideCurLoop=_insideCurLoop+1;callback();if(_insideCurLoop>=_insideMaxLoop){return;}}
setTimeout(_spin,_interval);};setTimeout(_spin,_interval);}
var indexOf=[].indexOf||function(prop){for(var i=0;i<this.length;i++){if(this[i]===prop)
return i;}
return-1;};function myTrim(text){try{if(typeof(text)!="undefined"&&text!=null)
return typeof(text.trim)==="function"?text.trim():text.replace(/^\s+|\s+$/gm,'');}catch(trimex){}
return text;}
function isNumber(o){return!isNaN(o-0)&&o!==null&&o!==""&&o!==false;}
function isNumeric(n){try{return!isNaN(parseFloat(n))&&isFinite(n);}
catch(tempex){}
return false;}
function setCookie(cname,cvalue,exdays){var hostName=window.location.hostname;var siteNameFragments=hostName.split(".");var siteName=siteNameFragments[1];var domain=siteNameFragments.slice(1,siteNameFragments.length).join(".");var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toGMTString();document.cookie=cname+"="+cvalue+"; "+expires+";path=/"+";domain=."+domain;}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=myTrim(ca[i]);if(c.indexOf(name)==0)
return c.substring(name.length,c.length);}
return null;}
function deleteCookie(cname){document.cookie=cname+"="+0+"; "+"expires=01 Jan 1970 00:00:00 GMT"+";path=/";}
function roundToTwo(num){if(Math!="undefined"&&Math.round!="undefined")
return+(Math.round(num+"e+2")+"e-2");else
return num;}
function getSearchParameters(){var prmstr=window.location.search.substr(1);return prmstr!=null&&prmstr!=""?transformToAssocArray(prmstr):[];}
function transformToAssocArray(prmstr){var params=[];var prmarr=prmstr.split("&");for(var i=0;i<prmarr.length;i++){params[i]=prmarr[i];}
return params;}
function randomIntFromInterval(min,max){try{return Math.floor(Math.random()*(max-min+1)+min);}
catch(tempex){}
return min;}
function getDecimalSign(number){try{var tempnum=myTrim(number);if(number.length>3){return number.charAt(number.length-3);}}
catch(signex){}
return ".";}
function getViewData(){try{var data={};data.action="trackView";data.type="article";data.url=window.location.href;data.name="Unknown Page: "+window.location.href;var tempurl=window.location.href.toLowerCase();var temppath=window.location.pathname;var temp_loc=temppath.split("/");var page="";var add_tags=[];var params=getSearchParameters();var searchterm="Search";if(params!=null&&params.length>0){for(var i=0;i<params.length;i++){if(params[i].indexOf("q=")==0){searchterm=params[i].split("q=")[1];}}}
for(var i=1;i<temp_loc.length;i++){if(temp_loc[i]!=null&&temp_loc[i].length>0)
page=temp_loc[i];}
var curpage=page.split("?")[0];data.name=curpage;var temppagetype="other";try{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.page_type)!="undefined"&&tc_vars.page_type!=null&&tc_vars.page_type.length>0){temppagetype=tc_vars.page_type.toLowerCase();}}catch(pagetypex){}
if((temppath=="/"||curpage=="index.html")&&temp_loc.length<3){data.type="homepage";}
else if(temppagetype=="homepage"){data.type="homepage";}
else if(temppagetype=="search"){data.type="search";}
else if(temppagetype=="productpage"){data.type="product";}
else if(temppagetype=="shoppingcart"||temppagetype=="checkout"){data.type="checkout";}
else if(temppagetype.indexOf("category")!=-1||temppagetype.indexOf("pagelist")!=-1){data.type="productcategory";}
else if(data.url.indexOf("/loginpage")!=-1){data.type="login";}
else if(temppagetype=="internalsearch"){data.type="search";if(typeof(tc_vars.search_keywords)!="undefined"&&tc_vars.search_keywords!=null)
searchterm=tc_vars.search_keywords;}
if(productCategoryUrl!=null){if(tempurl.indexOf(productCategoryUrl.toLowerCase())>-1){data.type="productcategory";}}
if(productCategoryQueryString!=null){var tempelem=_insideJQ(productCategoryQueryString);if(tempelem!=null&&tempelem.length>0){data.type="productcategory";}}
if(searchUrl!=null){if(tempurl.indexOf(searchUrl.toLowerCase())>-1){data.type="search";}}
if(searchQueryString!=null){var tempelem=_insideJQ(searchQueryString);if(tempelem!=null&&tempelem.length>0){data.type="search";}}
if(productUrl!=null){if(tempurl.indexOf(productUrl.toLowerCase())>-1){data.type="product";}}
if(productQueryString!=null){var tempelem=_insideJQ(productQueryString);if(tempelem!=null&&tempelem.length>0){data.type="product";}}
if(checkoutUrl!=null){if(tempurl.indexOf(checkoutUrl.toLowerCase())>-1){data.type="checkout";}}
if(checkoutQueryString!=null){var tempelem=_insideJQ(checkoutQueryString);if(tempelem!=null&&tempelem.length>0){data.type="checkout";}}
if(orderConfirmedUrl!=null){if(tempurl.indexOf(orderConfirmedUrl.toLowerCase())>-1){data.type="orderconfirmed";}}
if(orderConfirmedQueryString!=null){var tempelem=_insideJQ(orderConfirmedQueryString);if(tempelem!=null&&tempelem.length>0){data.type="orderconfirmed";}}
switch(data.type){case "homepage":data.name="Home";break;case "search":data.name="Search Result Page";if(searchterm!=null&&searchterm.length>0){data.name=decodeURIComponent(searchterm);if(data.name.indexOf("+")!=-1){data.name=data.name.replace(/\+/g,' ');}}
break;case "productcategory":var tempcat=getCategory();if(tempcat!=null&&tempcat.length>0){if(tempcat.length>149)
tempcat=tempcat.substring(0,149);data.category=tempcat;}
var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;break;case "product":var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;tempPageName=getProductName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;else{data.type="other";}
var tempcat=getCategory();if(tempcat!=null&&tempcat.length>0){if(tempcat.length>149)
tempcat=tempcat.substring(0,149);data.category=tempcat;}
var tempval=getProductImage();if(tempval!=null&&tempval.length>0)
data.img=tempval;var tempsku=getProductSku();if(tempsku!=null&&tempsku.length>0){data.sku=tempsku;data.name=data.name+" - "+tempsku;}
else{data.type="other";}
var tempprice=getProductPrice();if(tempprice!=null&&tempprice>0)
data.price=tempprice;break;case "orderconfirmed":data.name="Order Confirmed";break;default:var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;}
if(add_tags.length>0){data.tags=add_tags.join(",");}
return data;}
catch(ex){if(typeof(console)!="undefined"&&typeof(console.log)!="undefined")
log("getViewData error: ",ex);return null;}}
function getPageName(){try{var content=document.getElementsByTagName("title");if(typeof(content)!="undefined"&&content!=null&&content.length>0){var result=content[0].textContent||content[0].innerText;if(typeof(result)!="undefined"&&result!=null&&result.length>0){return myTrim(result);}}}catch(pagenameex){}
return null;}
function getProductName(){try{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.product_name)!="undefined"&&tc_vars.product_name!=null&&tc_vars.product_name.length>0)
return tc_vars.product_name;}catch(tempex){}
return null;}
function getProductImage(){try{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.product_url_picture)!="undefined"&&tc_vars.product_url_picture!=null&&tc_vars.product_url_picture.length>0)
return tc_vars.product_url_picture;}catch(tempex){}
return null;}
function getProductPrice(){try{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.product_unitprice_ati)!="undefined"&&tc_vars.product_unitprice_ati!=null)
return tc_vars.product_unitprice_ati;}catch(tempex){}
return null;}
function getProductSku(){try{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.product_id_model)!="undefined"&&tc_vars.product_id_model!=null&&tc_vars.product_id_model.length>0)
return tc_vars.product_id_model;}catch(tempex){}
return null;}
function getCategory(){try{var breadcrumbs=_insideJQ(".breadcrumb-wrapper:first .breadcrumb-label");if(breadcrumbs!=null&&breadcrumbs.length>0){var path="";for(var i=0;i<breadcrumbs.length;i++){var temp=breadcrumbs[i].innerText||breadcrumbs[i].textContent;var tempelem=breadcrumbs[i].getElementsByTagName("a");if(tempelem!=null&&tempelem.length>0){temp=tempelem[0].innerText||tempelem[0].textContent;}
temp=myTrim(temp);if(temp!="/")
path+=(path!=""?" / ":"")+temp;}
if(path!="")
return path;}}
catch(tempex){}
return null;}
function getOrderData(){try{var data=[];var totalprice=0;var orderId="auto";if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.order_products)!="undefined"&&tc_vars.order_products!=null&&tc_vars.order_products.length>0){for(var i=0;i<tc_vars.order_products.length;i++){var insideitem={};insideitem.action="addItem";insideitem.orderId=orderId;insideitem.name=tc_vars.order_products[i].order_product_name;insideitem.sku=tc_vars.order_products[i].order_product_id_model;insideitem.img=tc_vars.order_products[i].order_product_url_picture;insideitem.price=tc_vars.order_products[i].order_product_unitprice_ati;insideitem.qty=tc_vars.order_products[i].order_product_quantity;totalprice=totalprice+parseFloat(tc_vars.order_products[i].order_product_totalprice_ati);data.push(insideitem);}}
if(data.length>0){try{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.order_amount)!="undefined"&&tc_vars.order_amount!=null){totalprice=parseFloat(tc_vars.order_amount);}}catch(totalex){}
data.push({"action":"trackOrder","orderId":orderId,"orderTotal":totalprice});return data;}}
catch(ex){log("getOrderData error. ",ex);}
return null;}
function orderConfirmProcess(){try{var data=[];var tempcurrency=null;var detail=null;if(typeof(tc_vars)!="undefined"&&tc_vars!=null){if(typeof(tc_vars.order_id)!="undefined"&&tc_vars.order_id!=null&&tc_vars.order_id.length>0&&typeof(tc_vars.order_amount)!="undefined"&&tc_vars.order_amount!=null){detail=tc_vars;try{if(typeof(tc_vars.order_currency)!="undefined"&&tc_vars.order_currency!=null&&tc_vars.order_currency.length>0){tempcurrency=tc_vars.order_currency.toUpperCase();}}catch(curex){}}}
if(detail!=null){var totalprice=detail.order_amount;var orderID=detail.order_id;var temppurchasedata={};if(typeof(detail.order_ship_ati)!="undefined"&&detail.order_ship_ati!=null){temppurchasedata.shipping=detail.order_ship_ati;}
if(typeof(detail.order_tax)!="undefined"&&detail.order_tax!=null){temppurchasedata.tax=detail.order_tax;}
if(tempcurrency!=null){temppurchasedata.currency=tempcurrency;}
if(typeof(orderID)!="undefined"&&orderID!=null&&orderID.length>0&&orderID!="auto"){try{var lastOrderID=sessionStorage.getItem("insidelastorderid");if(lastOrderID==orderID){return null;}}
catch(orderidex){}
data.push({"action":"trackOrder","orderId":"auto","newOrderId":orderID,"orderTotal":totalprice,"data":temppurchasedata,"update":true,"complete":true});}
return data;}}
catch(ex){log("orderConfirmProcess error. ",ex);}
return null;}
function getVisitorId(){try{if(Osmose&&Osmose.context&&Osmose.context.userLogin&&Osmose.context.userLogin.length>0&&Osmose.context.userLogin.indexOf("@")!=-1)
return Osmose.context.userLogin;}
catch(visitidex){}
return null;}
function getVisitorName(){try{}
catch(visitidex){}
return null;}
function getVisitorData(){try{}
catch(visitidex){}
return null;}
function insertInsideTag(){try{_insideGraph.processQueue();}
catch(tempex){}}
function sendToInside(){try{tracker.url=window.location.href;var visitorId=getVisitorId();if(visitorId!=null&&visitorId.length>0){tracker.visitorId=visitorId;}
var visitorName=getVisitorName();if(visitorName!=null&&visitorName.length>0){tracker.visitorName=visitorName;}
var visitorData=getVisitorData();if(visitorData!=null){tracker.visitorData=visitorData;}
var view=getViewData();if(view!=null){if(view.type=="orderconfirmed"){var tempconfirm=orderConfirmProcess();if(tempconfirm!=null&&tempconfirm.length>0){for(var i=0;i<tempconfirm.length;i++){_inside.push(tempconfirm[i]);try{if(tempconfirm[i].action=="trackOrder")
if(typeof(tempconfirm[i].newOrderId)!="undefined"&&tempconfirm[i].newOrderId!=null)
sessionStorage.setItem("insidelastorderid",tempconfirm[i].newOrderId);}
catch(tempex){}}}}
else{var orderData=getOrderData();if(orderData!=null&&orderData.length>0){for(var i=0;i<orderData.length;i++){_inside.push(orderData[i]);if(orderData[i].action=="trackOrder"){view.orderId=orderData[i].orderId;view.orderTotal=orderData[i].orderTotal;insideOrderTotal=orderData[i].orderTotal;}}}
else{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.order_amount)!="undefined"&&tc_vars.order_amount!=null&&isNumeric(tc_vars.order_amount)){var temptotal=parseFloat(tc_vars.order_amount);if(temptotal>0){view.orderId=temptotal;view.orderTotal=temptotal;}}}}
_inside.push(view);log("Inside Debug: ",_inside);}}
catch(sendex){_inside=[];_inside.push({"action":"trackView","type":"other","name":"Check: "+window.location.href});log(sendex);}
insertInsideTag();if(!_insideFirstLoad)
_insideFirstLoad=true;}
var tempview=getViewData();if(tempview!=null&&typeof(tempview.type)!="undefined"&&tempview.type!=null&&tempview.type=="orderconfirmed"){deferWait(sendToInside,function(){var tempconfirm=orderConfirmProcess();if(tempconfirm!=null&&tempconfirm.length>0){return true;}
return document.readyState!='loading'&&document.readyState!='interactive';});}
else{deferWait(sendToInside,function(){if(document.readyState!='loading'&&document.readyState!='interactive'){keepWait(sendToInside,function(){if(!_insideFirstLoad)
return false;if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null){var temporderdata=getOrderData();if(temporderdata!=null&&temporderdata.length>0){for(var i=0;i<temporderdata.length;i++){if(temporderdata[i].action=="trackOrder"){if(insideOrderTotal!=temporderdata[i].orderTotal){return true;}}}}
else if(insideOrderTotal>0){insideOrderTotal=0;return true;}}
return false;});return true;}
return false;});}}
if(window.location.href.indexOf("no_insidechat=true")!=-1){return;}
else{if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null&&typeof(_insideGraph.current)!="undefined"&&_insideGraph.current!=null){processInside(_insideGraph.current)}
else{var insideTracker={"action":"getTracker","crossDomain":false,"account":accountKey};if(typeof(subsiteId)!="undefined"&&subsiteId!=null)
insideTracker["subsiteId"]=subsiteId;_inside.push(insideTracker);_inside.push({"action":"bind","name":"onload","callback":function(tracker){if(_insideFirstLoad)
return;_insideJQ=_insideGraph.jQuery;processInside(tracker)}});(function(w,d,s,u){a=d.createElement(s),m=d.getElementsByTagName(s)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m);})(window,document,"script","//"+trackerURL+"/ig.js");}}})();(function(s,d){var e=d.createElement(s),t=d.getElementsByTagName(s)[0];e.async=true;e.src='https://eu2-cdn.inside-graph.com/gtm/IN-1000863/cts/cts-decathlon-pt.min.js';t.parentNode.insertBefore(e,t);})('script',document);