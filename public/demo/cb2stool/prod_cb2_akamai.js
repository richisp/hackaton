!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(149),i=[t];i.push(n(151)),i.push(n(157)),i.push(n(160)),i.push(n(163)),i.push(n(165)),i.push(n(175)),i.push(n(178)),i.push(n(180)),i.push(n(183)),i.push(n(187)),i.push(n(190)),i.push(n(194)),i.push(n(198)),i.push(n(203)),i.push(n(204)),i.push(n(207)),i.push(n(208)),i.push(n(211)),i.push(n(215)),i.push(n(217)),i.push(n(222)),i.push(n(225)),i.push(n(226)),i.push(n(227)),p.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(84),a=n(23),o=n(16);n(130);var s=o.get("stores/directive"),c=n(91);if(!c.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var u,l=n(132),d=n(118),f=n(133),g={"listTargetingKeys": [], "anonymizeIP": false, "tagGroups": [{"id": "116", "tags": [{"viewId": "8334581343", "tagApiName": "product_name"}, {"viewId": "8334581343", "tagApiName": "product_page_description"}, {"viewId": "8334581343", "tagApiName": "product_description_hws"}]}], "dcpServiceId": "13640430390", "audiences": [{"conditions": ["and", ["or", ["or", {"value": "document.getElementById(\"jsIsMobile\").value == 1", "type": "code", "name": null, "match": null}]]], "id": "8404480156", "name": "Mobile Phone"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}, {"value": "tablet", "type": "device", "name": null, "match": null}, {"value": "ipad", "type": "device", "name": null, "match": null}]], ["or", ["or", {"value": "document.getElementById(\"jsIsMobile\").value == 0", "type": "code", "name": null, "match": null}]]], "id": "10368458633", "name": "Desktop/Tablet Only"}, {"conditions": ["and", ["or", ["or", {"value": "{\"version\":\"0.1\",\"source\":\"events\",\"action\":{\"type\":\"pageview\",\"value\":\"7871036_all_product_pages__desktop__mobile\"},\"time\":{\"type\":\"last_days\",\"days\":1},\"count\":{\"comparator\":\"gte\",\"value\":1},\"filters\":[{\"name\":\"pla_sku\",\"comparator\":\"eq\",\"value\":\"true\",\"datatype\":\"string\"},{\"name\":\"pcat\",\"comparator\":\"eq\",\"value\":\"FURN\",\"datatype\":\"string\"}]}", "type": "behavior", "name": "event", "match": null}], ["or", {"value": "window.location.href.search(\"[?&]pla_sku=\") != -1 && window.location.href.search(\"[?&]pcat=FURN\")  != -1", "type": "code", "name": null, "match": null}]]], "id": "11394031873", "name": "Has Visited at Least 1 FURN PLA landing page in last 24 hours "}, {"conditions": ["and", ["or", ["or", {"value": "{\"version\":\"0.1\",\"source\":\"events\",\"action\":{\"type\":\"pageview\",\"value\":\"passthroughLP\"},\"time\":{\"type\":\"last_days\",\"days\":1},\"count\":{\"comparator\":\"gte\",\"value\":1}}", "type": "behavior", "name": "event", "match": null}]]], "id": "11396082656", "name": "All Email Traffic"}, {"conditions": ["and", ["or", ["or", {"value": "document.getElementById(\"jsIsMobile\").value == 1", "type": "code", "name": null, "match": null}]]], "id": "11405062709", "name": "Mobile Phone (1)"}, {"conditions": ["and", ["or", ["or", {"value": "document.querySelector(\"main .main-furniture\") !== null", "type": "code", "name": null, "match": null}]]], "id": "11427030149", "name": "Furniture pages"}], "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('10375182457', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['10375182457'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [{"name":"eVar","default_value":"eVar85"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        var decisionString = window.optimizely.get('state').getDecisionString({campaignId: campaignId});
var eVar = extension.eVar;
var prop = "prop60";
var campaignObject = {};
if (!!eVar) campaignObject[eVar] = decisionString;
if (!!prop) campaignObject[prop] = decisionString;
 window.omntag = window.omntag || [];
// Public Methods
var adobeIntegrator = {
	// Array of active campaigns/experiments
	campaignArray: [],
	// Accepts "s" variable as a param and assigns eVars to object.
	assignCampaigns: function(sVariable) {
		for (var i = this.campaignArray.length-1; i >= 0; i--) {
			Object.assign(sVariable, this.campaignArray[i]);
			this.campaignArray.splice(i, 1);
		}
	},
	// Accepts "s" variable as a param and assigns eVars to object, then dispatches custom link tracking.
	trackDelayedCampaigns: function(sVariable) {
		for (var i = this.campaignArray.length-1; i >= 0; i--) {
      sVariable.linkTrackVars += "," + Object.keys(this.campaignArray[i])[0];
			Object.assign(sVariable, this.campaignArray[i]);
			this.campaignArray.splice(i, 1);
		}
		sVariable.tl(true, "o", "OptimizelyLayerDecision");
	}
};
// Scopes `campaignArray` to Optimizely object.
if (window.optimizely.get("custom/adobeIntegrator") === undefined) {
	window.optimizely.push({
		type: "registerModule",
		moduleName: "adobeIntegrator",
		module: adobeIntegrator
	});
}
// Failing Audiences returns `null`, failing Traffic Allocation returns `undefined` for decisionString.
if (!!decisionString) {
	window.optimizely.get("custom/adobeIntegrator").campaignArray.push(campaignObject);
  window.optimizely.get('custom/adobeIntegrator').assignCampaigns(omntag);
}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "accountId": "7871036", "layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10715950511"], "experiments": [{"weightDistributions": [{"entityId": "17943580624", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Temp Fix- Desktop Back to Top & Feedback button styling - sitewide ", "bucketingStrategy": null, "variations": [{"id": "17917923140", "actions": [{"viewId": "10715950511", "changes": []}], "name": "Original"}, {"id": "17943580624", "actions": [{"viewId": "10715950511", "changes": [{"value": "<style>@media screen and (min-width: 768px) {\n  a.back-to-top {\n      width: 58px;\n      height: 58px;\n      right: 0;\n      bottom: 119px;\n  }\n}\n.oo_feedback_float {\n    width: 58px !important;\n    height: 59px !important;\n    bottom: 5px !important;\n}\n.adaptive-layout a.back-to-top .svg-icon-chevron-up {       \n    margin: 12px 20px 12px 19px;  \n}\n.adaptive-layout a.back-to-top .back-to-top-text {  \n    letter-spacing: 0;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "288CF2F4-0666-4EF6-AF8A-40B6C1266D83"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17943640162", "integrationSettings": null}], "id": "17945610177", "weightDistributions": null, "name": "Temp Fix- Desktop Back to Top & Feedback button styling - sitewide ", "groupId": null, "commitId": "17908722777", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10752991729"], "experiments": [{"weightDistributions": [{"entityId": "10759400650", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Fix - FLD and Free Shipping Styling", "bucketingStrategy": null, "variations": [{"id": "10760221934", "actions": [], "name": "Original"}, {"id": "10759400650", "actions": [{"viewId": "10752991729", "changes": [{"dependencies": [], "type": "custom_code", "id": "a1395d8084b740e3bb6f7654807d31f9", "value": function($){var availabilityExtendedModule;
var flxFixGetElementTimeoutId = setInterval(function() {
  availabilityExtendedModule = document.querySelector("[data-module='availabilityExtended']");
  if (availabilityExtendedModule != null) {
    clearInterval(flxFixGetElementTimeoutId);
    setInterval(function() {
      var wrapper = document.querySelector(".availability-wrapper");
      wrapper.after(availabilityExtendedModule);
    }, 500);
  }
}, 500);
}}, {"value": "<style>.promo-popup a, \n.promo-popup, \n.delivery-promo a, \n.delivery-promo {\n    color: #e00e00 !important;\n}\n[data-module=\"availabilityExtended\"] {\n\t\tmargin-bottom: 10px;\n    font-size: 13px;\n    font-family: \"Neue Helvetica W05\",Helvetica,Arial,sans-serif;\n    float: left;\n    clear: both;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "ca5e4d48bf6b44cd9a5ce5c8a0239b16"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "10756403257", "integrationSettings": null}], "id": "10757921026", "weightDistributions": null, "name": "Fix - FLD and Free Shipping Styling", "groupId": null, "commitId": "13570890067", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 1, "activation": {}, "integrationSettings": {"10375182457": {"eVar": "eVar88"}}, "integrationStringVersion": 2, "viewIds": ["10953202200"], "experiments": [{"weightDistributions": null, "audienceName": "Mobile Phone (1)", "name": "Everyone Else (Mobile)", "bucketingStrategy": null, "variations": [{"id": "12238703272", "actions": [], "name": "Variation #1"}], "audienceIds": ["or", "11405062709"], "changes": null, "id": "12109559607", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "Mobile Phone (1),Furniture pages,Has Visited at Least 1 FURN PLA landing page in last 24 hours ", "name": "PLA (HWR & FURN) - Mobile", "bucketingStrategy": null, "variations": [{"id": "12158107880", "actions": [{"viewId": "10953202200", "changes": [{"dependencies": [], "type": "custom_code", "id": "33586090ae7942a787c618889e88a0e2", "value": function($){var utils = window["optimizely"].get('utils');
utils.waitForElement('#main').then(function(){
var nextName, nextLink, prevName, prevLink;
  
  var check = setInterval(checkBread, 500);
  function checkBread()
  { 
    if(Crate.Model.BrowseDto.SpillNavigation){
  	// place the main holder div
  	$("#main").before("<div class=\"bread3\" style=\"clear:both;\"></div>");
  
 	 	// check for next product available
		if(Crate.Model.BrowseDto.SpillNavigation.Next){
   		nextName = Crate.Model.BrowseDto.SpillNavigation.Next.Name;
  	  nextLink = Crate.Model.BrowseDto.SpillNavigation.Next.NavigateUrl;
  	  $(".bread3").append("<a href=\""+nextLink+"\" style=\"float:right;\">next&nbsp;&nbsp;<i class = \"icon-chevron-right\"/></a>"); 
  		}
  
 		 // check for previous product available
  	 if(Crate.Model.BrowseDto.SpillNavigation.Previous){
   		prevName = Crate.Model.BrowseDto.SpillNavigation.Previous.Name;
  	  prevLink = Crate.Model.BrowseDto.SpillNavigation.Previous.NavigateUrl;
   	  $(".bread3").append("<a href=\""+prevLink+"\" style=\"float:left;\"><i class = \"icon-chevron-left\"/>&nbsp;previous</a>");
  		}
 		 clearInterval(check);
    }
    else {
      console.log("No SpillNavigation yet..");
    }
  }
});
}}, {"value": "<style>.bread3 {\n  border-bottom: 1px solid #ccc;\n  height : 40px;\n  padding-left: 1.3em;\n  padding-right: 1.3em;\n  font-family: Neue Helvetica W01,Helvetica,Arial,sans-serif !important; \n}\n\n.bread3 > a{\n   color : #666;\n   font-size: 14px;\n   margin-top: 10px;\n}\n\n.bread3 > a > i {\n  \n  height: 1em !important;\n  width: 1em !important;\n  display: inline-block;\n  border-radius: 50%;\n  font-size: .9em;\n}\n\n.icon-chevron-right:before{\n    content: \">\";\n    font-family: 'web-icons';\n    color: #333;\n    font-size: 1.3em;\n    top: .1em;\n    position: relative;\n    display: inline-block;\n}\n.icon-chevron-left:before{\n    content: \"<\";\n    font-family: 'web-icons';\n    color: #333;\n    font-size: 1.3em;\n    top: .1em;\n    position: relative;\n    display: inline-block;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "7b2b65e44c7d4a4eac9a5183eaab91e0"}]}], "name": "Next/Previous"}], "audienceIds": ["and", "11405062709", "11427030149", "11394031873"], "changes": null, "id": "12113457974", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "Mobile Phone (1),All Email Traffic", "name": "Mobile Phone (1) and All Email Traffic", "bucketingStrategy": null, "variations": [{"id": "12205564588", "actions": [{"viewId": "10953202200", "changes": [{"dependencies": [], "type": "custom_code", "id": "0738022320dd4c7788b853042ae41f40", "value": function($){var utils = window["optimizely"].get('utils');
utils.waitForElement('#main').then(function(){

  var check = setInterval(checkBread, 500);
  function checkBread()
  { 
    if(Crate.Model.BrowseDto.Breadcrumb.length>0){
       // place the main holder div
      $("#main").before("<div style=\"position:relative;clear:both;\"><div class=\"grad\"></div><div class=\"bread2\" style=\"clear:both;overflow-x:scroll;overflow-y:hidden;white-space:nowrap;\"></div></div>");
      var breadCrumb = Crate.Model.BrowseDto.Breadcrumb;
      var bLength = breadCrumb.length;
       for (var i =0 ; i<bLength;i++){
          var slash = bLength -1 === i ? "" : "/";
          $(".bread2").append("<a href=\""+breadCrumb[i].Link+"\" style=\"display:inline-block;\">"+breadCrumb[i].Text+"</a><span>"+slash+"</span> ");
        }
      clearInterval(check);
    }
    else {
      console.log("no breadcrumb yet..");
    }
  }
});
}}, {"value": "<style>.bread2 {\n  border-bottom: 1px solid #ccc;\n  height : 40px;\n  padding-left: 1.3em;\n  padding-right: 1.3em;\n -ms-overflow-style : none; \n  overflow: -moz-scrollbars-none;\n}\n\n.bread2 > a{\n color : #666;\n font-size:12px !important;\n font-family: Neue Helvetica W01,Helvetica,Arial,sans-serif !important; \n margin-top: 14px;\n margin-right: 3px;\n}\n\n.bread2::-webkit-scrollbar{\ndisplay: none;\n}\n\n.bread2 > span{\n   color: #666;\n    text-align: center;\n    padding: 0 4px 0 4px;\n    font-size: 14px;\n}\n\n.grad{\n    background: -webkit-gradient(linear,left top,right top,color-stop(0%,rgba(255,255,255,0)),color-stop(100%,rgba(255,255,255,1)));/*Chrome Safari*/\n    background: -moz-linear-gradient(right top,rgba(255,255,255,0),rgba(255,255,255,1)); /*Moz*/\n    background: -ms-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)); /*IE10*/\n    border-bottom-right-radius: 8px;\n    height: 40px;\n    position: absolute;\n    pointer-events: none;\n    right: 0;\n    top: 0;\n    width: 24px;\n    z-index: 2;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "a525e337a2e046e1b284bb0f63578886"}]}], "name": "Breadcrumb"}], "audienceIds": ["and", "11405062709", "11396082656"], "changes": null, "id": "12239430959", "integrationSettings": null}], "id": "12205564587", "weightDistributions": null, "name": "FIX - CB2 Mobile Product Page Entry Treatment (Navigation)", "groupId": null, "commitId": "12177715107", "decisionMetadata": {"experimentPriorities": [[{"entityId": "12113457974", "endOfRange": null}], [{"entityId": "12239430959", "endOfRange": null}], [{"entityId": "12109559607", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["10974230943"], "experiments": [{"weightDistributions": [{"entityId": "10928071366", "endOfRange": 10000}], "audienceName": "Mobile Phone", "name": "Mobile - CB2 Interiors - Modsy - furn product page", "bucketingStrategy": null, "variations": [{"id": "10982740164", "actions": [], "name": "Original"}, {"id": "10928071366", "actions": [{"viewId": "10974230943", "changes": [{"value": "<style>.CB2Interiors {\n       margin-top: 50px;\n       float: left\n   }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "e384c4af1e4f4029ad0bbc8bc33e07f2"}, {"value": "<a class='CB2Interiors' href='https://www.cb2.com/cb2interiors'> \n    <img src='https://images.cb2.com/is/image/CB2/cb2_interiors_fj_banner_19spring_m?fmt=jpg&qlt=80,0&wid=694'\n    alt=\"Need help pulling it all together? Collaborate with an interior designer to create a layout for your space combining new items and pieces you already own. It's the easiest way to decorate.\" /></a>", "selector": "#section-reviews", "dependencies": [], "operator": "before", "type": "append", "id": "6590d4314b744340b7180f0745d11daf"}, {"selector": ".CB2Interiors > img", "dependencies": [], "attributes": {"src": "https://cb2.scene7.com/is/image/CB2/cb2_interiors_fj_banner_19fall_m?wid=694&qlt=70"}, "type": "attribute", "id": "40EABAA9-74A6-4E3D-906F-E8F41265BACF", "css": {}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8404480156"], "changes": null, "id": "10956200892", "integrationSettings": null}], "id": "10968202312", "weightDistributions": null, "name": "Mobile - CB2 Interiors - Modsy - furn product page", "groupId": null, "commitId": "16812130260", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10473121395"], "experiments": [{"weightDistributions": [{"entityId": "17194201674", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FEATURE - Privacy Policy: do not sell link in footer", "bucketingStrategy": null, "variations": [{"id": "17196400929", "actions": [], "name": "Original"}, {"id": "17194201674", "actions": [{"viewId": "10473121395", "changes": [{"dependencies": [], "type": "custom_code", "id": "2B30DFF7-086E-45A8-AA85-3F1D97AB2824", "value": function($){document.addEventListener("DOMContentLoaded", function(e) {

  var cookieLink = document.querySelector('.cookie-consent-link');

  var liElm = document.createElement('li');
  var anchorElm = document.createElement('a');
  anchorElm.href = "/customer-service/sellingandsharing-request";
  anchorElm.innerHTML = "Do Not Sell My Info";
  liElm.appendChild(anchorElm);

  if (cookieLink) {
    cookieLink.insertAdjacentElement("beforebegin", liElm);
  }

});
}}, {"value": "<style>.adaptive-layout footer.footer-browse .footer-width .footer-content .footer-links {\n\tjustify-content: center;\n  margin-top: 8px;\n  margin-bottom: 24px;\n}\n\n.footer-screen-reader{\n    border: 0;\n    display: inline-block;\n    font-family: \"Lineto Brown Sub\",\"Lineto Brown Light Sub\",Verdana,sans-serif;\n    color: #222;\n      font-size: 12px;\n    font-weight: 300;\n    float: none;\n    margin: 0 10px 0 0;\n    padding-right: 0;\n}\n\n.privacy-policy-container {\n\tdisplay:inline-block;\n  width:100%;\n  text-align:center;\n  margin-top: 32px;\n}\n\n.do-not-sell-link{\n\tdisplay:inline-block;\n  font-size:12px;\n  font-weight:300;\n  font-family: \"Lineto Brown Sub\",\"Lineto Brown Light Sub\",Verdana,sans-serif;\n  position:relative;\n  margin-right:35px;\n  letter-spacing:.08em;\n}\n\n.do-not-sell-link:after {\n  content: '|';\n  position: absolute;\n  right: -20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .do-not-sell-link{\n    display:inline-block;\n    font-size:12px;\n    font-weight:300;\n    font-family: \"Lineto Brown Sub\",\"Lineto Brown Light Sub\",Verdana,sans-serif;\n    position:relative;\n    margin-right:0;\n    letter-spacing:.08em;\n  }\n  .do-not-sell-link:after {\n    content: '';\n    position: absolute;\n    right: -20px;\n  }\n  .footer-screen-reader{\n      display:none;\n  }\n  .privacy-policy-container {\n    margin-top: 0;\n    margin-bottom: 6px;\n  }\n  .selling-sharing {margin-top:0;}\n  \n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "12E3B201-E491-4B08-82DD-5BF796CCC2A0"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17215101826", "integrationSettings": null}], "id": "17194201673", "weightDistributions": null, "name": "FEATURE - Privacy Policy: do not sell link in footer", "groupId": null, "commitId": "17905420689", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16842718039"], "experiments": [{"weightDistributions": [{"entityId": "16828853878", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEST - CB2 Abandoned Cart Tool Tip - 100%", "bucketingStrategy": null, "variations": [{"id": "16856510560", "actions": [], "name": "Original"}, {"id": "16828853878", "actions": [{"viewId": "16842718039", "changes": [{"dependencies": [], "type": "custom_code", "id": "c4053e474072407cbce53b4561309a8f", "value": function($){window.PERS_46 = window.PERS_46 || {};
console.log('aaa PERS_46 running');

// Optimizely utils
var utils = window.optimizely.get('utils');

PERS_46.experiment = function () {

    var c = {
        id: {
            tooltip: 'cartTooltip',
            btn: 'btnCartTooltipClose'
        },
        cls: {
            hidden: 'is-hidden'
        },
        cookie_name: 'cart_tooltip'
    };

    var $cartTooltip = document.getElementById(c.id.tooltip);
    var $btnCartTooltipClose = document.getElementById(c.id.btn);
    var has_items = digitalData.cart.item.length > 0;
    var has_cookie = Crate.Services.CookieService.getCookie(c.cookie_name) === '1';

    function init() {
        hideShowTooltip();
    }

    function hideShowTooltip() {
        if (!has_cookie) {
            if (has_items) {
                __.removeClass($cartTooltip, c.cls.hidden);
                addEvents();
            }
        }
    }

    function showTooltip() {
        __.removeClass($cartTooltip, c.cls.hidden);
        addEvents();
    }

    function addEvents() {
        if ($btnCartTooltipClose) {
            $btnCartTooltipClose.addEventListener('click', handleClick, false);
        }
    }

    function handleClick() {
        var $cart = document.querySelector('.cart-link');
        if (!has_cookie) {
            Crate.Services.CookieService.setCookie(c.cookie_name, '1');
            __.addClass($cartTooltip, c.cls.hidden);
            $cart.focus();
        }
    }

    return {
        init: init,
        show: showTooltip
    };
};

utils.waitForElement('#cartTooltip').then(function () {
    var PERS_46FB = PERS_46.experiment();
    PERS_46FB.init();
});

document.addEventListener('DOMContentLoaded', function () {
    utils.waitForElement('#cartTooltip').then(function () {
        var PERS_46FB = PERS_46.experiment();
        PERS_46FB.init();
    });
});

document.addEventListener('fAddedToCart', function () {
    var PERS_46FB = PERS_46.experiment();
    PERS_46FB.show();
});
}}, {"value": "<style>optly-preview {\n  top: 220px !important;\n  right: 500px !important;\n}\n\n.cart-tooltip {\n  position: absolute;\n  top: 0;\n  min-width: 348px;\n  right: 0;\n  border: 1px solid #CCCCCC;\n  background-color: white;\n  z-index: 0;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-family: \"Lineto Brown Sub\", \"Lineto Brown Light Sub\", Verdana, sans-serif !important;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: 300ms all;\n  transition: 300ms all;\n  margin-right: -38px;\n  padding: 20px 30px 20px 20px;\n  margin-top: 82px;\n}\n\n.cart-tooltip.is-hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.cart-tooltip__btn {\n  margin: 0;\n  padding: 0;\n  background: 0;\n  border: 0;\n  position: absolute;\n  right: 8px;\n  top: 10px;\n}\n\n.cart-tooltip p {\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  font-weight: 500;\n  color: #222;\n  letter-spacing: 1px;\n}\n\n.cart-tooltip a {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 1px;\n  text-decoration: underline;\n}\n\n.adaptive-layout header .header-main-right ul.header-navigation li.header-cart .toggle-cart .dropdown-cart {\n  z-index: 1;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "6d77ee61af4d40a58323a5da3d73568a"}, {"src": "/actions/e574e6aa4b058107f3a0787c7b7e635d80e1d3c0d22d74e5d97c6a43ddf0a150.js", "dependencies": [], "id": "fe85b266648248dda3a8104a7a1a6f66"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "16862040454", "integrationSettings": null}], "id": "16848656908", "weightDistributions": null, "name": "TEST - CB2 Abandoned Cart Tool Tip - 100%", "groupId": null, "commitId": "17643950293", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17790340364"], "experiments": [{"weightDistributions": [{"entityId": "17794250057", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Fix - Update BOPS Popup on Cart page when all stores are closed", "bucketingStrategy": null, "variations": [{"id": "17811090266", "actions": [], "name": "Original"}, {"id": "17794250057", "actions": [{"viewId": "17790340364", "changes": [{"dependencies": [], "type": "custom_code", "id": "47C63811-DCEE-4C7D-A3AE-7787268EE7D9", "value": function($){var observer = new MutationObserver(function (mutations, me) {
  var checkbox = document.getElementById('chkIncludeWarehouse');
  if (checkbox) {
    var isChecked = checkbox.checked;
	if(!isChecked) {
	    checkbox.checked = true;
		var button = document.getElementById('zipcode-submit-button');
		if(button) {
			button.click();
		}
	}
  }
});

observer.observe(document, {
  childList: true,
  subtree: true
});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17776051271", "integrationSettings": null}], "id": "17799700175", "weightDistributions": null, "name": "Fix - Update BOPS Popup on Cart page when all stores are closed", "groupId": null, "commitId": "17789681364", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16848251807"], "experiments": [{"weightDistributions": [{"entityId": "17597481774", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - Return/Exchange Policy Text Change to 48 hours", "bucketingStrategy": null, "variations": [{"id": "17578471248", "actions": [], "name": "Original"}, {"id": "17597481774", "actions": [{"viewId": "16848251807", "changes": [{"dependencies": [], "type": "custom_code", "id": "C0307F7C-868B-41FA-A692-5A11A11A47F8", "value": function($){var utils = window["optimizely"].get("utils");
var selector = ".return-policy-copy .col-xs-12 + .col-xs-12 + .col-xs-12 p";
var policyElement = document.querySelector(selector);

var waitForElementSelector = "#section-returns";

utils.waitForElement(waitForElementSelector).then(function(el) {
  console.log("Optimizely Fix Return Policy");
  policyElement.innerText = policyElement.innerText.replace(/72/g, "48");
});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17603561414", "integrationSettings": null}], "id": "17593531475", "weightDistributions": null, "name": "FIX - Return/Exchange Policy Text Change to 48 hours", "groupId": null, "commitId": "17649710158", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16848251807"], "experiments": [{"weightDistributions": [{"entityId": "17784300916", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - Hide pick up in store", "bucketingStrategy": null, "variations": [{"id": "17817390176", "actions": [{"viewId": "16848251807", "changes": []}], "name": "Original"}, {"id": "17784300916", "actions": [{"viewId": "16848251807", "changes": [{"value": "<style>.store-pickup [value=\"storePickUp\"]:not(.hidden) {\n   display: none;\n}\n.responsive-layout .display-in-store {\ndisplay: none !important;\n}\n.store-pickup [value=\"storePickUp\"]:not(.hidden)+.availability-label {\n   display: none;\n}\n.product-page-aside {\n  display: none !important;\n}\n#section-description {\n\t\tmax-width: none;\n    width: 100%;\n}\n.availability-label {\n  padding-left: 0 !important;\n}\n.availability-radio+.secondary-message span {\n  margin-left: 0 !important;\n}\n.availability-radio+.secondary-message .zip-code-change {\n  margin-left: 0 !important;\n}\n\n.store-pickup [value=\"storePickUp\"]:not(.hidden)+.availability-label+.availability-radio {\n   display: none;\n}\n.store-pickup [value=\"storePickUp\"]:not(.hidden)+.availability-label+.availability-radio+.view-in-store {\n   display: none;\n}\n.availability-radio+.secondary-message .promo-popup {\n  margin-left: 0 !important;\n}\n.availability-wrapper .availability-radio {\n  display: none;\n} \n\n.visit-store-bubble.jsStoreBubble:nth-of-type(even) {\n  display: none !important;\n}\n\n.store-pickup .view-in-store {\n  display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "01AEA3B0-DF8B-472D-9071-F26623B7A236"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17781732581", "integrationSettings": null}], "id": "17817450068", "weightDistributions": null, "name": "FIX - Hide pick up in store", "groupId": null, "commitId": "17845491216", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17938000367"], "experiments": [{"weightDistributions": [{"entityId": "17914910300", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX COVID - Vintage Messaging Update", "bucketingStrategy": null, "variations": [{"id": "17918081217", "actions": [], "name": "Original"}, {"id": "17914910300", "actions": [{"viewId": "17938000367", "changes": [{"dependencies": [], "type": "custom_code", "id": "595EF45F-BFDD-4220-B6FC-310ECBC73860", "value": function($){try {
  window.addEventListener('load', function(event) {
  var emptyResult = document.querySelectorAll(".empty-result ")[0];
        emptyResult.innerHTML = "Ferrer Vintage products are only available in stores. Due to the current situation our stores are temporarily closed. Please check back soon.";
});
    
    
}
catch(err) {
  console.log(err);
  console.log("Erro coming from: FIX COVID - Vintage Messaging Update");
}
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17934090899", "integrationSettings": null}], "id": "17924740053", "weightDistributions": null, "name": "FIX COVID - Vintage Messaging Update", "groupId": null, "commitId": "17922471908", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17812491358"], "experiments": [{"weightDistributions": [{"entityId": "17800921059", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Temp - Add order delivery delay message on order tracking for COVID-19 precautions.", "bucketingStrategy": null, "variations": [{"id": "17845470386", "actions": [], "name": "Original"}, {"id": "17800921059", "actions": [{"viewId": "17812491358", "changes": [{"value": "<div class=\"col-xs-12 hidden-xs\"><style>\n.returns__banner {width:100%; margin-bottom:2.5%; padding: 1.5em 25px 2em; background: #e4e5e6}\n.returns__banner > h2 {margin-left: 1.8em; font-size: 1.786em !important; line-height: 1.05 !important; letter-spacing: -.02em; font-family: \"Neue Helvetica W05\",Helvetica,Arial,sans-serif!important; font-weight: 600!important}\n.returns__banner > p {font-weight: 400!important; font-family: \"WTC Our Bodoni W05 Italic\",Georgia,serif !important; margin: .75em 0 0 3em;}\n@media only screen and (max-width:768px) {\n.returns__banner {margin: -9% 0 5% 0; padding: 2em 0em 2em}\n.returns__banner h2 {max-width: 11em; margin-left: 1em; font-size: 1.5em !important;}\n.returns__banner p {margin: 1em 0 0 0;}\n}\n</style>\n<div class=\"col-xs-12 returns__banner\">\n<h2 class=\"crate-bold renew__small\">Important Shipping Update </h2> \n<p class=\"crate-roman renew__body crate-serif\">We are processing some orders on a slight delay due to COVID-19 precautions. Your order should still arrive within the estimated delivery timeframe. In-home furniture deliveries are running on schedule.</p>\t\n</div>\n</div>\n\n<div class=\"col-xs-12 visible-xs\"><style>\n.returns__banner {width:100%; margin-bottom:2.5%; padding: 1.5em 25px 2em; background: #e4e5e6}\n.returns__banner > h2 {margin-left: 1.8em; font-size: 1.786em !important; line-height: 1.05 !important; letter-spacing: -.02em; font-family: \"Neue Helvetica W05\",Helvetica,Arial,sans-serif!important; font-weight: 600!important}\n.returns__banner > p {font-weight: 400!important; font-family: \"WTC Our Bodoni W05 Italic\",Georgia,serif !important; margin: .75em 0 0 3em;}\n@media only screen and (max-width:768px) {\n.returns__banner {margin: 0 0 5% 0; padding: 2em 18px 2em}\n.returns__banner h2 {max-width: 11em; margin-left: 0; font-size: 1.5em !important;}\n.returns__banner p {margin: 1em 0 0 0;}\n}\n</style>\n<div class=\"col-xs-12 returns__banner\">\n<h2 class=\"crate-bold renew__small\">Important Shipping Update </h2> \n<p class=\"crate-roman renew__body crate-serif\">We are processing some orders on a slight delay due to COVID-19 precautions. Your order should still arrive within the estimated delivery timeframe. In-home furniture deliveries are running on schedule.</p>\t\n</div>\n</div>", "selector": "h1", "dependencies": [], "operator": "after", "type": "append", "id": "7020AAD7-5A6B-4327-892A-F18F429EC4C5"}, {"selector": ".col-xs-12.hidden-xs .crate-roman", "dependencies": [], "attributes": {"html": "The safety of our customers and associates comes first. Order processing and parcel delivery may be slightly delayed due to COVID-19 precautions at our facilities. In-home furniture deliveries are running on schedule."}, "type": "attribute", "id": "85BA2712-B0AB-4E8E-B0C5-82B322049DBB", "css": {}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17818390635", "integrationSettings": null}], "id": "17841780012", "weightDistributions": null, "name": "Temp - Add order delivery delay message on order tracking for COVID-19 precautions.", "groupId": null, "commitId": "17880901796", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17824180618"], "experiments": [{"weightDistributions": [{"entityId": "17816490358", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEMP - Hide general gift cards purchase on gift-cards page.", "bucketingStrategy": null, "variations": [{"id": "17802580734", "actions": [], "name": "Original"}, {"id": "17816490358", "actions": [{"viewId": "17824180618", "changes": [{"value": "<style>.gift-card.col-xs-11.col-md-5.col-sm-4{\n  display: none;  \n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "5F934DF9-B018-4C6D-AE87-D31FCDA8D2F6"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17827560583", "integrationSettings": null}], "id": "17820060455", "weightDistributions": null, "name": "TEMP - Hide general gift cards purchase on gift-cards page.", "groupId": null, "commitId": "17927225347", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["15859530554"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "FIX- Vintage SKUs store messaging", "bucketingStrategy": null, "variations": [{"id": "15838250475", "actions": [], "name": "Original"}], "audienceIds": null, "changes": null, "id": "15863650548", "integrationSettings": null}], "id": "15840450010", "weightDistributions": null, "name": "FIX- Vintage SKUs store messaging", "groupId": null, "commitId": "17744331420", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.button-print {\n  padding-left: 0 !important;\n}\n\n.shop-bar-carting-area,\n.add-to-registry-button-wrap,\n[data-module=\"shipContainer\"] {\n  display: none !important;\n}\n\n.adaptive-layout .vintage-skus {\n  padding: 30px 0 20px;\n}\n\n.vintage-skus p {\n  font-weight: 300;\n  font-size: 14px;\n  color: #222;\n  line-height: 1.71;\n  font-family: \"Lineto Brown Sub\", \"Lineto Brown Light Sub\", Verdana, sans-serif;\n  line-height: 24px;\n  margin: 0;\n}\n\n.vintage-skus span {\n  text-decoration: underline;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "79112193eef346c290ae0d6f747cf000"}, {"dependencies": [], "type": "custom_code", "id": "c18025506894433dad63c12d91635394", "value": function($){// https://crateandbarrel.atlassian.net/browse/PERS-26

/**
 * object namespace 
 */
window.CBPLA = window.CBPLA || {};

// json created from https://docs.google.com/spreadsheets/d/1EJjFwwuGOVV6a3lGQ_rhLDjI38iJnfxNukUhj0S-AAM/edit#gid=0, batch 1,2 and 3
window.vintageSkus = {
    "268063": {
        "SKU": "268063",
        "URL": "https://www.cb2.com/layered-pendant-light/s268063",
        "Product Name": "Layered Pendant Light",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "268055": {
        "SKU": "268055",
        "URL": "https://www.cb2.com/layered-pendant-light/s268055",
        "Product Name": "Layered Pendant Light",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "268036": {
        "SKU": "268036",
        "URL": "https://www.cb2.com/layered-pendant-light/s268036",
        "Product Name": "Layered Pendant Light",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "268111": {
        "SKU": "268111",
        "URL": "https://www.cb2.com/white-wall-lamp/s268111",
        "Product Name": "White Wall Lamp",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "268323": {
        "SKU": "268323",
        "URL": "https://www.cb2.com/teal-planter/s268323",
        "Product Name": "Teal Planter",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "267998": {
        "SKU": "267998",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267998",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "267986": {
        "SKU": "267986",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267986",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "267927": {
        "SKU": "267927",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267927",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "267-385-8198"
    },
    "267936": {
        "SKU": "267936",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267936",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "267-385-8198"
    },
    "267955": {
        "SKU": "267955",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267955",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "267-385-8198"
    },
    "267974": {
        "SKU": "267974",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267974",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "267-385-8198"
    },
    "252574": {
        "SKU": "252574",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252574",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "251571": {
        "SKU": "251571",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s251571",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252592": {
        "SKU": "252592",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252592",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252607": {
        "SKU": "252607",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252607",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252610": {
        "SKU": "252610",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252610",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252630": {
        "SKU": "252630",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252630",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252668": {
        "SKU": "252668",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s252668",
        "Product Name": "Joseph Andre Motte Slpr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252706": {
        "SKU": "252706",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s252706",
        "Product Name": "Joseph Andre Motte Slpr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252736": {
        "SKU": "252736",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s252736",
        "Product Name": "Joseph Andre Motte Slpr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252696": {
        "SKU": "252696",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s252696",
        "Product Name": "Joseph Andre Motte Slpr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252799": {
        "SKU": "252799",
        "URL": "https://www.cb2.com/eddie-harlis-chair-by-thonet/s252799",
        "Product Name": "Eddie Harlis ChairbyT honet",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253095": {
        "SKU": "253095",
        "URL": "https://www.cb2.com/gaetano-sciolari-cubic-table-lamp/s253095",
        "Product Name": "Gaetano Sciolari Cubic Tbl Lamp",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253176": {
        "SKU": "253176",
        "URL": "https://www.cb2.com/doria-pendant-light-in-black-and-white/s253176",
        "Product Name": "Doria Pendant Light Blk Wht",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253253": {
        "SKU": "253253",
        "URL": "https://www.cb2.com/art-deco-reclining-sling-leather-chair/s253253",
        "Product Name": "Art Deco Reclining Sling Lthr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "364961": {
        "SKU": "364961",
        "URL": "https://www.cb2.com/art-deco-reclining-sling-leather-chair/s364961",
        "Product Name": "Art Deco Reclining Sling Lthr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253592": {
        "SKU": "253592",
        "URL": "https://www.cb2.com/large-metal-table-lamp/s253592",
        "Product Name": "Large Metal Table Lamp",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253584": {
        "SKU": "253584",
        "URL": "https://www.cb2.com/large-metal-table-lamp/s253584",
        "Product Name": "Large Metal Table Lamp",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "267677": {
        "SKU": "267677",
        "URL": "https://www.cb2.com/white-table-vase/s267677",
        "Product Name": "White Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "273508": {
        "SKU": "273508",
        "URL": "https://www.cb2.com/brown-table-vase/s273508",
        "Product Name": "Tall Brown Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "273510": {
        "SKU": "273510",
        "URL": "https://www.cb2.com/brown-table-vase/s273510",
        "Product Name": "Brown Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "254755": {
        "SKU": "254755",
        "URL": "https://www.cb2.com/maison-regain-dining-chair/s254755",
        "Product Name": "Maison Regain Dng Chair",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254809": {
        "SKU": "254809",
        "URL": "https://www.cb2.com/maison-regain-dining-chair/s254809",
        "Product Name": "Maison Regain Dng Chair",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254906": {
        "SKU": "254906",
        "URL": "https://www.cb2.com/limburg-glass-pendant/s254906",
        "Product Name": "Limburg Glass Pendant",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254918": {
        "SKU": "254918",
        "URL": "https://www.cb2.com/limburg-glass-pendant/s254918",
        "Product Name": "Limburg Glass Pendant",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254923": {
        "SKU": "254923",
        "URL": "https://www.cb2.com/limburg-glass-pendant/s254923",
        "Product Name": "Limburg Glass Pendant",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254937": {
        "SKU": "254937",
        "URL": "https://www.cb2.com/limburg-glass-pendant/s254937",
        "Product Name": "Limburg Glass Pendant",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254981": {
        "SKU": "254981",
        "URL": "https://www.cb2.com/renato-toso-pendant-lamp/s254981",
        "Product Name": "Renato Toso Melania Pndnt Lmp",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275218": {
        "SKU": "275218",
        "URL": "https://www.cb2.com/ole-wanscher-lounge-chair/s275218",
        "Product Name": "Ole Wanscher Lounger Chair",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275260": {
        "SKU": "275260",
        "URL": "https://www.cb2.com/ole-wanscher-lounge-chair/s275260",
        "Product Name": "Ole Wanscher Lounger Chair",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275295": {
        "SKU": "275295",
        "URL": "https://www.cb2.com/modular-sculpture/s275295",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275307": {
        "SKU": "275307",
        "URL": "https://www.cb2.com/modular-sculpture/s275307",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275311": {
        "SKU": "275311",
        "URL": "https://www.cb2.com/modular-sculpture/s275311",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275324": {
        "SKU": "275324",
        "URL": "https://www.cb2.com/modular-sculpture/s275324",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275348": {
        "SKU": "275348",
        "URL": "https://www.cb2.com/modular-sculpture/s275348",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "278048": {
        "SKU": "278048",
        "URL": "https://www.cb2.com/modular-sculpture/s278048",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275467": {
        "SKU": "275467",
        "URL": "https://www.cb2.com/purple-vase/s275467",
        "Product Name": "Purple Vase",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275493": {
        "SKU": "275493",
        "URL": "https://www.cb2.com/purple-vase/s275493",
        "Product Name": "Purple Vase",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "278376": {
        "SKU": "278376",
        "URL": "https://www.cb2.com/modular-sculpture/s278376",
        "Product Name": "Modular Sculpture Type A",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "278382": {
        "SKU": "278382",
        "URL": "https://www.cb2.com/modular-sculpture/s278382",
        "Product Name": "Modular Sculpture Type A",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "278391": {
        "SKU": "278391",
        "URL": "https://www.cb2.com/modular-sculpture/s278391",
        "Product Name": "Modular Sculpture Type A",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "256344": {
        "SKU": "256344",
        "URL": "https://www.cb2.com/ilmari-tapiovaara-stool/s256344",
        "Product Name": "Ilmari Tapiovaara Stool",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256381": {
        "SKU": "256381",
        "URL": "https://www.cb2.com/ilmari-tapiovaara-stool/s256381",
        "Product Name": "Ilmari Tapiovaara Stool",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256397": {
        "SKU": "256397",
        "URL": "https://www.cb2.com/saporiti-armchair/s256397",
        "Product Name": "Saporiti Armchair",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256403": {
        "SKU": "256403",
        "URL": "https://www.cb2.com/saporiti-armchair/s256403",
        "Product Name": "Saporiti Armchair",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256459": {
        "SKU": "256459",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s256459",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256467": {
        "SKU": "256467",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s256467",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256470": {
        "SKU": "256470",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s256470",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "255350": {
        "SKU": "255350",
        "URL": "https://www.cb2.com/guglielmo-ulrich-wood-and-brass-coffee-table/s255350",
        "Product Name": "Guglielmolrich Wood Brass Tbl",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "255382": {
        "SKU": "255382",
        "URL": "https://www.cb2.com/cylindrical-raak-pendant/s255382",
        "Product Name": "RAAK Cylindrical Pendant",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "255406": {
        "SKU": "255406",
        "URL": "https://www.cb2.com/cylindrical-raak-pendant/s255406",
        "Product Name": "RAAK Cylindrical Pendant",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "255425": {
        "SKU": "255425",
        "URL": "https://www.cb2.com/rispal-three-glass-shade-pendant/s255425",
        "Product Name": "Rispal Three Glass Shade Pendant",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280428": {
        "SKU": "280428",
        "URL": "https://www.cb2.com/grey-vase/s280428",
        "Product Name": "Grey Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280564": {
        "SKU": "280564",
        "URL": "https://www.cb2.com/grey-vase/s280564",
        "Product Name": "Grey Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280507": {
        "SKU": "280507",
        "URL": "https://www.cb2.com/blue-vase/s280507",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280463": {
        "SKU": "280463",
        "URL": "https://www.cb2.com/blue-vase/s280463",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280547": {
        "SKU": "280547",
        "URL": "https://www.cb2.com/blue-vase/s280547",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280475": {
        "SKU": "280475",
        "URL": "https://www.cb2.com/blue-vase/s280475",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280483": {
        "SKU": "280483",
        "URL": "https://www.cb2.com/blue-vase/s280483",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "257440": {
        "SKU": "257440",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257440",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257465": {
        "SKU": "257465",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257465",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257481": {
        "SKU": "257481",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257481",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257491": {
        "SKU": "257491",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257491",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257520": {
        "SKU": "257520",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257520",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257536": {
        "SKU": "257536",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257536",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257556": {
        "SKU": "257556",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257556",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257565": {
        "SKU": "257565",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257565",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257576": {
        "SKU": "257576",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257576",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257609": {
        "SKU": "257609",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257609",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257637": {
        "SKU": "257637",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257637",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281155": {
        "SKU": "281155",
        "URL": "https://www.cb2.com/brass-and-teak-pendant/s281155",
        "Product Name": "Brass Teak Pendant",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281349": {
        "SKU": "281349",
        "URL": "https://www.cb2.com/blue-vase/s281349",
        "Product Name": "Blue Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281378": {
        "SKU": "281378",
        "URL": "https://www.cb2.com/red-vase/s281378",
        "Product Name": "Red Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281407": {
        "SKU": "281407",
        "URL": "https://www.cb2.com/red-vase/s281407",
        "Product Name": "Red Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281551": {
        "SKU": "281551",
        "URL": "https://www.cb2.com/red-vase/s281551",
        "Product Name": "Red Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281393": {
        "SKU": "281393",
        "URL": "https://www.cb2.com/red-vase/s281393",
        "Product Name": "Red Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "276843": {
        "SKU": "276843",
        "URL": "https://www.cb2.com/hans-agne-jakobsson-pendant/s276843",
        "Product Name": "Hans Agne Jakobsson Pendant",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "255730": {
        "SKU": "255730",
        "URL": "https://www.cb2.com/candle-aluminum-sconce/s255730",
        "Product Name": "Candle Aluminum Sconce",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "255746": {
        "SKU": "255746",
        "URL": "https://www.cb2.com/candle-aluminum-sconce/s255746",
        "Product Name": "Candle Aluminum Sconce",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "256485": {
        "SKU": "256485",
        "URL": "https://www.cb2.com/elio-martinelli-steel-pendant/s256485",
        "Product Name": "Elio Martinelli Steel Pendant",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "256503": {
        "SKU": "256503",
        "URL": "https://www.cb2.com/elio-martinelli-steel-pendant/s256503",
        "Product Name": "Elio Martinelli Steel Pendant",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "277004": {
        "SKU": "277004",
        "URL": "https://www.cb2.com/earth-tone-vase/s277004",
        "Product Name": "Earth Tone Vase 7",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "277026": {
        "SKU": "277026",
        "URL": "https://www.cb2.com/orange-vase/s277026",
        "Product Name": "Orange Vase 8",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "284225": {
        "SKU": "284225",
        "URL": "https://www.cb2.com/finn-juhl-style-armchair/s284225",
        "Product Name": "Finn Juhl Style Armchair",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "253895": {
        "SKU": "253895",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253895",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253865": {
        "SKU": "253865",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253865",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253883": {
        "SKU": "253883",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253883",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253906": {
        "SKU": "253906",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253906",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253941": {
        "SKU": "253941",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253941",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253970": {
        "SKU": "253970",
        "URL": "https://www.cb2.com/onyxand-opaline-table-lamp/s253970",
        "Product Name": "Onyxand Opaline Table Lamp",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "254094": {
        "SKU": "254094",
        "URL": "https://www.cb2.com/release-pendant-by-castiglioni/s254094",
        "Product Name": "Release Pendant by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "254012": {
        "SKU": "254012",
        "URL": "https://www.cb2.com/release-pendant-by-castiglioni/s254012",
        "Product Name": "Release Pendant by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "254101": {
        "SKU": "254101",
        "URL": "https://www.cb2.com/release-pendant-by-castiglioni/s254101",
        "Product Name": "Release Pendant by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "268638": {
        "SKU": "268638",
        "URL": "https://www.cb2.com/five-arm-brass-wall-light/s268638",
        "Product Name": "Five Arm Brass Wall Light",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "276532": {
        "SKU": "276532",
        "URL": "https://www.cb2.com/jakobsson-brass-pendant/s276532",
        "Product Name": "Jakobsson Brass Pendant",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "276540": {
        "SKU": "276540",
        "URL": "https://www.cb2.com/metal-clamp-light/s276540",
        "Product Name": "Metal Clamp Light",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "276557": {
        "SKU": "276557",
        "URL": "https://www.cb2.com/metal-clamp-light/s276557",
        "Product Name": "Metal Clamp Light",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "266690": {
        "SKU": "266690",
        "URL": "https://www.cb2.com/niels-koefoed-dining-chair/s266690",
        "Product Name": "Niels Koefoed Dining Chair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "266606": {
        "SKU": "266606",
        "URL": "https://www.cb2.com/niels-koefoed-dining-chair/s266606",
        "Product Name": "Niels Koefoed Dining Chair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "267382": {
        "SKU": "267382",
        "URL": "https://www.cb2.com/round-orange-lava-vessel/s267382",
        "Product Name": "Round Orange Lava Vessel",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "267402": {
        "SKU": "267402",
        "URL": "https://www.cb2.com/small-orange-lava-vessel/s267402",
        "Product Name": "Small Orange Lava Vessel",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "254998": {
        "SKU": "254998",
        "URL": "https://www.cb2.com/teak-and-leather-armchair/s254998",
        "Product Name": "Teak and Leather Armchair",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255024": {
        "SKU": "255024",
        "URL": "https://www.cb2.com/teak-and-leather-armchair/s255024",
        "Product Name": "Teak and Leather Armchair",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255037": {
        "SKU": "255037",
        "URL": "https://www.cb2.com/frattini-cocktail-table/s255037",
        "Product Name": "Frattini Cocktail Table",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255086": {
        "SKU": "255086",
        "URL": "https://www.cb2.com/frattini-cocktail-table/s255086",
        "Product Name": "Frattini Cocktail Table",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255099": {
        "SKU": "255099",
        "URL": "https://www.cb2.com/frattini-cocktail-table/s255099",
        "Product Name": "Frattini Cocktail Table",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255145": {
        "SKU": "255145",
        "URL": "https://www.cb2.com/hans-agne-jakobsson-chandelier/s255145",
        "Product Name": "Hans-Agne Jakobsson Chandelier",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255244": {
        "SKU": "255244",
        "URL": "https://www.cb2.com/raak-white-bubble-sconce/s255244",
        "Product Name": "RAAK White Bubble Sconce",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255258": {
        "SKU": "255258",
        "URL": "https://www.cb2.com/raak-white-bubble-sconce/s255258",
        "Product Name": "RAAK White Bubble Sconce",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255261": {
        "SKU": "255261",
        "URL": "https://www.cb2.com/raak-white-bubble-sconce/s255261",
        "Product Name": "RAAK White Bubble Sconce",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276211": {
        "SKU": "276211",
        "URL": "https://www.cb2.com/red-vase/s276211",
        "Product Name": "Red Vase 11",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276229": {
        "SKU": "276229",
        "URL": "https://www.cb2.com/red-vase/s276229",
        "Product Name": "Red Vase 12",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276291": {
        "SKU": "276291",
        "URL": "https://www.cb2.com/red-vase/s276291",
        "Product Name": "Red Vase 14",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276314": {
        "SKU": "276314",
        "URL": "https://www.cb2.com/red-bowl/s276314",
        "Product Name": "Red Bowl",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276323": {
        "SKU": "276323",
        "URL": "https://www.cb2.com/blue-vase/s276323",
        "Product Name": "Blue Vase 1",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276365": {
        "SKU": "276365",
        "URL": "https://www.cb2.com/red-vase/s276365",
        "Product Name": "Red Vase 17",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "274639": {
        "SKU": "274639",
        "URL": "https://www.cb2.com/paolo-buffa-lounge-chair/s274639",
        "Product Name": "Paolo Buffa Lounge Chair",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "512-977-1900"
    },
    "274679": {
        "SKU": "274679",
        "URL": "https://www.cb2.com/paolo-buffa-lounge-chair/s274679",
        "Product Name": "Paolo Buffa Lounge Chair",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "512-977-1900"
    },
    "274735": {
        "SKU": "274735",
        "URL": "https://www.cb2.com/blueans-white-glass-pendant/s274735",
        "Product Name": "Blueans White Glass Pendant",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "512-977-1900"
    },
    "253617": {
        "SKU": "253617",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253617",
        "Product Name": "Formica WoodBaby Chair",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "253622": {
        "SKU": "253622",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253622",
        "Product Name": "Formica WoodBaby Chair",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "278957": {
        "SKU": "278957",
        "URL": "https://www.cb2.com/grey-vase/s278957",
        "Product Name": "Grey Vase 1",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "278969": {
        "SKU": "278969",
        "URL": "https://www.cb2.com/grey-vase/s278969",
        "Product Name": "Grey Vase 2",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "278972": {
        "SKU": "278972",
        "URL": "https://www.cb2.com/grey-vase/s278972",
        "Product Name": "Grey Vase 3",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "278984": {
        "SKU": "278984",
        "URL": "https://www.cb2.com/grey-vase/s278984",
        "Product Name": "Grey Vase 4",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279026": {
        "SKU": "279026",
        "URL": "https://www.cb2.com/blue-vase/s279026",
        "Product Name": "Blue Vase 1",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279030": {
        "SKU": "279030",
        "URL": "https://www.cb2.com/blue-vase/s279030",
        "Product Name": "Blue Vase 2",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279055": {
        "SKU": "279055",
        "URL": "https://www.cb2.com/blue-vase/s279055",
        "Product Name": "Blue Vase 3",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279065": {
        "SKU": "279065",
        "URL": "https://www.cb2.com/blue-vase/s279065",
        "Product Name": "Blue Vase 4",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279079": {
        "SKU": "279079",
        "URL": "https://www.cb2.com/blue-vase/s279079",
        "Product Name": "Blue Vase 5",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279089": {
        "SKU": "279089",
        "URL": "https://www.cb2.com/blue-vase/s279089",
        "Product Name": "Blue Vase 6",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },

    "278218": {
        "SKU": "278218",
        "URL": "https://www.cb2.com/red-vase/s278218",
        "Product Name": "Red Vase 29",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278202": {
        "SKU": "278202",
        "URL": "https://www.cb2.com/red-vase/s278202",
        "Product Name": "Red Vase 28",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278195": {
        "SKU": "278195",
        "URL": "https://www.cb2.com/red-vase/s278195",
        "Product Name": "Red Vase 27",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278187": {
        "SKU": "278187",
        "URL": "https://www.cb2.com/red-vase/s278187",
        "Product Name": "Red Vase 26",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278153": {
        "SKU": "278153",
        "URL": "https://www.cb2.com/red-vase/s278153",
        "Product Name": "Red Vase 25",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278144": {
        "SKU": "278144",
        "URL": "https://www.cb2.com/red-vase/s278144",
        "Product Name": "Redvase 24",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278138": {
        "SKU": "278138",
        "URL": "https://www.cb2.com/red-vase/s278138",
        "Product Name": "Red Vase 23",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278110": {
        "SKU": "278110",
        "URL": "https://www.cb2.com/red-vase/s278110",
        "Product Name": "Red Vase 21",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278104": {
        "SKU": "278104",
        "URL": "https://www.cb2.com/red-vase/s278104",
        "Product Name": "Red Vase 20",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278091": {
        "SKU": "278091",
        "URL": "https://www.cb2.com/red-vase/s278091",
        "Product Name": "Red Vase 19",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278060": {
        "SKU": "278060",
        "URL": "https://www.cb2.com/red-vase/s278060",
        "Product Name": "Red Vase 18",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "277963": {
        "SKU": "277963",
        "URL": "https://www.cb2.com/eduard-ludwig-stool/s277963",
        "Product Name": "Eduard Ludwig Stool",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "277949": {
        "SKU": "277949",
        "URL": "https://www.cb2.com/rattan-and-bent-iron-armchair/s277949",
        "Product Name": "Rattan and Bent Iron Armchair",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "277920": {
        "SKU": "277920",
        "URL": "https://www.cb2.com/pierre-gautier-delaye-coffee-table/s277920",
        "Product Name": "Pierre Gautier Delaye Coffee Table",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "255782": {
        "SKU": "255782",
        "URL": "https://www.cb2.com/ole-wanscher-senator-lounge-chair-and-ottoman/s255782",
        "Product Name": "Ole Wanscher \"Senator\" Lounge Chair and Ottoman",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "276345": {
        "SKU": "276345",
        "URL": "https://www.cb2.com/red-vase/s276345",
        "Product Name": "Red Vase 15",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "276331": {
        "SKU": "276331",
        "URL": "https://www.cb2.com/blue-vase/s276331",
        "Product Name": "Blue Vase 2",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "276277": {
        "SKU": "276277",
        "URL": "https://www.cb2.com/red-vase/s276277",
        "Product Name": "Red Vase 13",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "275711": {
        "SKU": "275711",
        "URL": "https://www.cb2.com/lounge-chair-with-curved-armrests/s275711",
        "Product Name": "Lounge Chair With Curved Armrests",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "275678": {
        "SKU": "275678",
        "URL": "https://www.cb2.com/egg-shaped-lounge-chair/s275678",
        "Product Name": "Egg Shaped Lounge Chair 2 of 2",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "275607": {
        "SKU": "275607",
        "URL": "https://www.cb2.com/egg-shaped-lounge-chair/s275607",
        "Product Name": "Egg Shaped Lounge Chair 1 of 2",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "257076": {
        "SKU": "257076",
        "URL": "https://www.cb2.com/clitunno-lamp/s257076",
        "Product Name": "\"Clitunno\" Lamp by Vico Magistretti (for Artemide)",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "252165": {
        "SKU": "252165",
        "URL": "https://www.cb2.com/low-profile-floor-lamp/s252165",
        "Product Name": "Low Profile Floor Lamp",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "281049": {
        "SKU": "281049",
        "URL": "https://www.cb2.com/franco-albini-gala-lounge-chair/s281049",
        "Product Name": "Deca",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280931": {
        "SKU": "280931",
        "URL": "https://www.cb2.com/red-vase/s280931",
        "Product Name": "Red Vase 11",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280876": {
        "SKU": "280876",
        "URL": "https://www.cb2.com/red-vase/s280876",
        "Product Name": "Red Vase 8",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280865": {
        "SKU": "280865",
        "URL": "https://www.cb2.com/red-vase/s280865",
        "Product Name": "Red Vase 7",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280810": {
        "SKU": "280810",
        "URL": "https://www.cb2.com/red-vase/s280810",
        "Product Name": "",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280802": {
        "SKU": "280802",
        "URL": "https://www.cb2.com/red-vase/s280802",
        "Product Name": "Red Vase 5",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280792": {
        "SKU": "280792",
        "URL": "https://www.cb2.com/grey-vase/s280792",
        "Product Name": "Grey Vase 1",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280788": {
        "SKU": "280788",
        "URL": "https://www.cb2.com/red-planter/s280788",
        "Product Name": "Red Planter",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280777": {
        "SKU": "280777",
        "URL": "https://www.cb2.com/red-vase/s280777",
        "Product Name": "Red Vase 2",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280716": {
        "SKU": "280716",
        "URL": "https://www.cb2.com/red-vase/s280716",
        "Product Name": "Red Vase 12",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "257122": {
        "SKU": "257122",
        "URL": "https://www.cb2.com/leuchten-brass-pendant/s257122",
        "Product Name": "WK Leuchten Brass Pendant",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "257114": {
        "SKU": "257114",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s257114",
        "Product Name": "Joseph Andre Motte Slipper Chair for Steiner 3 of 3",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "257105": {
        "SKU": "257105",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s257105",
        "Product Name": "Joseph Andre Motte Slipper Chair for Steiner 2 of 3",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "257091": {
        "SKU": "257091",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s257091",
        "Product Name": "Joseph Andre Motte Slipper Chair for Steiner 1 of 3",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "275137": {
        "SKU": "275137",
        "URL": "https://www.cb2.com/red-vase/s275137",
        "Product Name": "Red Vase 10",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275128": {
        "SKU": "275128",
        "URL": "https://www.cb2.com/red-vase/s275128",
        "Product Name": "Red Vase 9",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275110": {
        "SKU": "275110",
        "URL": "https://www.cb2.com/red-vase/s275110",
        "Product Name": "Red Vase 8",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275105": {
        "SKU": "275105",
        "URL": "https://www.cb2.com/red-vase/s275105",
        "Product Name": "Red Vase 7",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275097": {
        "SKU": "275097",
        "URL": "https://www.cb2.com/red-vase/s275097",
        "Product Name": "Red Vase 6",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275078": {
        "SKU": "275078",
        "URL": "https://www.cb2.com/red-vase/s275078",
        "Product Name": "Red Vase 5",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275036": {
        "SKU": "275036",
        "URL": "https://www.cb2.com/grey-vase/s275036",
        "Product Name": "Grey Vase 3",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275002": {
        "SKU": "275002",
        "URL": "https://www.cb2.com/grey-vase/s275002",
        "Product Name": "Grey Vase 2",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274983": {
        "SKU": "274983",
        "URL": "https://www.cb2.com/red-vase/s274983",
        "Product Name": "Red Vase 3",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274964": {
        "SKU": "274964",
        "URL": "https://www.cb2.com/red-vase/s274964",
        "Product Name": "Red Vase 2",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274935": {
        "SKU": "274935",
        "URL": "https://www.cb2.com/red-vase/s274935",
        "Product Name": "Red Vase 1",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274716": {
        "SKU": "274716",
        "URL": "https://www.cb2.com/helena-tynell-limburg-pendant/s274716",
        "Product Name": "Helena Tynell Limburg Pendant",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274494": {
        "SKU": "274494",
        "URL": "https://www.cb2.com/bach-teak-dining-table/s274494",
        "Product Name": "EW Bach Teak Dining Table",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274452": {
        "SKU": "274452",
        "URL": "https://www.cb2.com/teak-sofa/s274452",
        "Product Name": "Teak Sofa",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "253674": {
        "SKU": "253674",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253674",
        "Product Name": "Formic & Wood Baby Chair 2 of 4",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "253699": {
        "SKU": "253699",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253699",
        "Product Name": "Formic & Wood Baby Chair 3 of 4",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "253710": {
        "SKU": "253710",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253710",
        "Product Name": "Formic & Wood Baby Chair 4 of 4",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "253756": {
        "SKU": "253756",
        "URL": "https://www.cb2.com/coffee-table-by-sergio-mazza-and-giuliana-gramigna/s253756",
        "Product Name": "Coffee Table by Sergio Mazza and Giuliana Gramigna",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "253768": {
        "SKU": "253768",
        "URL": "https://www.cb2.com/armchair-by-giampiero-vitelli/s253768",
        "Product Name": "Armchair by Giampiero Vitelli",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "268563": {
        "SKU": "268563",
        "URL": "https://www.cb2.com/flemming-lassen-low-club-chair/s268563",
        "Product Name": "Flemming Lassen Low Club Chair 1 of 2",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "268574": {
        "SKU": "268574",
        "URL": "https://www.cb2.com/flemming-lassen-low-club-chair/s268574",
        "Product Name": "Flemming Lassen Low Club Chair 2 of 2",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "268584": {
        "SKU": "268584",
        "URL": "https://www.cb2.com/curved-three-seat-sofa/s268584",
        "Product Name": "Curved Three-Seat Sofa",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "255716": {
        "SKU": "255716",
        "URL": "https://www.cb2.com/van-keppel-green-coffee-table/s255716",
        "Product Name": "Van Keppel-Green Coffee Table",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "255727": {
        "SKU": "255727",
        "URL": "https://www.cb2.com/hans-wegner-sofa/s255727",
        "Product Name": "Hans Wegner G290 Sofa",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "277012": {
        "SKU": "277012",
        "URL": "https://www.cb2.com/orange-vase/s277012",
        "Product Name": "Orange Vase 7",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "277074": {
        "SKU": "277074",
        "URL": "https://www.cb2.com/orange-vase/s277074",
        "Product Name": "Orange Vase 12",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "277133": {
        "SKU": "277133",
        "URL": "https://www.cb2.com/orange-vase/s277133",
        "Product Name": "Orange Vase 14",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "277186": {
        "SKU": "277186",
        "URL": "https://www.cb2.com/orange-vase/s277186",
        "Product Name": "Orange Vase 17",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "281541": {
        "SKU": "281541",
        "URL": "https://www.cb2.com/blue-vase/s281541",
        "Product Name": "Blue Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6204"
    },
    "281528": {
        "SKU": "281528",
        "URL": "https://www.cb2.com/red-vase/s281528",
        "Product Name": "Red Vase 6",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6204"
    },
    "281463": {
        "SKU": "281463",
        "URL": "https://www.cb2.com/red-vase/s281463",
        "Product Name": "Red Vase 4",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6205"
    },
    "281337": {
        "SKU": "281337",
        "URL": "https://www.cb2.com/grey-vase/s281337",
        "Product Name": "Grey Vase 3",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6207"
    },
    "281288": {
        "SKU": "281288",
        "URL": "https://www.cb2.com/grey-vase/s281288",
        "Product Name": "Grey Vase 1",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6208"
    },
    "281142": {
        "SKU": "281142",
        "URL": "https://www.cb2.com/ekstrom-coffee-table/s281142",
        "Product Name": "Ekstrom Lounge Coffee Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6209"
    },
    "257366": {
        "SKU": "257366",
        "URL": "https://www.cb2.com/paolo-buffa-settee/s257366",
        "Product Name": "Paolo Buffa Settee",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6210"
    },
    "280498": {
        "SKU": "280498",
        "URL": "https://www.cb2.com/blue-vase/s280498",
        "Product Name": "Blue Vase 5",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "280455": {
        "SKU": "280455",
        "URL": "https://www.cb2.com/blue-vase/s280455",
        "Product Name": "Blue Vase 1",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "255341": {
        "SKU": "255341",
        "URL": "https://www.cb2.com/werther-toffoloni-lounge-chair/s255341",
        "Product Name": "Werther Toffoloni \"Hoop\" Lounge Chair",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "255321": {
        "SKU": "255321",
        "URL": "https://www.cb2.com/gianfranco-frattini-armchair/s255321",
        "Product Name": "Gianfranco Frattini \"Sesann\" Armchair 2 of 2",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "255296": {
        "SKU": "255296",
        "URL": "https://www.cb2.com/gianfranco-frattini-armchair/s255296",
        "Product Name": "Gianfranco Frattini \"Sesann\" Armchair 1 of 2",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "277831": {
        "SKU": "277831",
        "URL": "https://www.cb2.com/earthtone-vase/s277831",
        "Product Name": "Earthtone Vase 10",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277814": {
        "SKU": "277814",
        "URL": "https://www.cb2.com/earthtone-vase/s277814",
        "Product Name": "Earthtone Vase 9",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277750": {
        "SKU": "277750",
        "URL": "https://www.cb2.com/green-vase/s277750",
        "Product Name": "Green Vase 7",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277694": {
        "SKU": "277694",
        "URL": "https://www.cb2.com/green-vase/s277694",
        "Product Name": "Green Vase 4",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277662": {
        "SKU": "277662",
        "URL": "https://www.cb2.com/green-vase/s277662",
        "Product Name": "Green Vase 3",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277656": {
        "SKU": "277656",
        "URL": "https://www.cb2.com/green-vase/s277656",
        "Product Name": "Green Vase 2",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277424": {
        "SKU": "277424",
        "URL": "https://www.cb2.com/como-cane-settee/s277424",
        "Product Name": "Como Cane Settee",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277390": {
        "SKU": "277390",
        "URL": "https://www.cb2.com/carl-gustaf-hiort-armchair/s277390",
        "Product Name": "Carl Gustaf Hiort Armchair",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "279465": {
        "SKU": "279465",
        "URL": "https://www.cb2.com/modular-sculpture/s279465",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "278948": {
        "SKU": "278948",
        "URL": "https://www.cb2.com/modular-sculpture/s278948",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274181": {
        "SKU": "274181",
        "URL": "https://www.cb2.com/earthtone-vase/s274181",
        "Product Name": "Earthtone Vase Short",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274162": {
        "SKU": "274162",
        "URL": "https://www.cb2.com/earthtone-vase/s274162",
        "Product Name": "Earthtone Vase Tall",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274157": {
        "SKU": "274157",
        "URL": "https://www.cb2.com/orange-vase/s274157",
        "Product Name": "Orange Vase (Left)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274121": {
        "SKU": "274121",
        "URL": "https://www.cb2.com/orange-vase/s274121",
        "Product Name": "Orange Vase (Right)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274027": {
        "SKU": "274027",
        "URL": "https://www.cb2.com/earthtone-vase/s274027",
        "Product Name": "Earthtone Vase",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273991": {
        "SKU": "273991",
        "URL": "https://www.cb2.com/modular-sculpture/s273991",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273972": {
        "SKU": "273972",
        "URL": "https://www.cb2.com/modular-sculpture/s273972",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273908": {
        "SKU": "273908",
        "URL": "https://www.cb2.com/modular-sculpture/s273908",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273845": {
        "SKU": "273845",
        "URL": "https://www.cb2.com/glass-and-brass-counterweight-pendant/s273845",
        "Product Name": "Glass and Brass Counterweight Pendant",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273830": {
        "SKU": "273830",
        "URL": "https://www.cb2.com/frederiksen-teak-coffee-table/s273830",
        "Product Name": "Frederiksen Teak Coffee Table",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273815": {
        "SKU": "273815",
        "URL": "https://www.cb2.com/gigi-sabadin-bent-wood-chair/s273815",
        "Product Name": "Gigi Sabadin Bent Wood Chair 2 of 2",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273747": {
        "SKU": "273747",
        "URL": "https://www.cb2.com/gigi-sabadin-bent-wood-chair/s273747",
        "Product Name": "Gigi Sabadin Bent Wood Chair 1 of 2",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273734": {
        "SKU": "273734",
        "URL": "https://www.cb2.com/ekstrom-lounge-chair/s273734",
        "Product Name": "Ekstrom Lounge Chair",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273714": {
        "SKU": "273714",
        "URL": "https://www.cb2.com/carl-gustaf-hiort-armchair/s273714",
        "Product Name": "Carl Gustaf Hiort Armchair",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273695": {
        "SKU": "273695",
        "URL": "https://www.cb2.com/teak-sofa/s273695",
        "Product Name": "Teak Sofa",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "254558": {
        "SKU": "254558",
        "URL": "https://www.cb2.com/raak-wall-lamp/s254558",
        "Product Name": "RAAK Wall Lamp in White",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "276512": {
        "SKU": "276512",
        "URL": "https://www.cb2.com/danish-walnut-table/s276512",
        "Product Name": "Danish Walnut Table",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "(267) 385-8198"
    },
    "253517": {
        "SKU": "253517",
        "URL": "https://www.cb2.com/eilersen-leather-lounge-chair/s253517",
        "Product Name": "Eilersen Leather Lounge Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "(267) 385-8198"
    },
    "254832": {
        "SKU": "254832",
        "URL": "https://www.cb2.com/ole-wanscher-sofa/s254832",
        "Product Name": "Ole Wanscher Sofa",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "(415) 834-9370"
    },
    "254603": {
        "SKU": "254603",
        "URL": "https://www.cb2.com/smoked-glass-and-chrome-coffee-table/s254603",
        "Product Name": "Smoked Glass and Chrome Coffee Table",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "(415) 834-9370"
    },
    "364974": {
        "SKU": "364974",
        "URL": "https://www.cb2.com/brass-and-glass-pendant-lamp-by-glashutte-limburg/s364974",
        "Product Name": "Brass and Glass Pendant Lamp by Glashutte Limburg 2 of 2",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "253430": {
        "SKU": "253430",
        "URL": "https://www.cb2.com/brass-and-glass-pendant-lamp-by-glashutte-limburg/s253430",
        "Product Name": "Brass and Glass Pendant Lamp by Glashutte Limburg 1 of 2",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "364953": {
        "SKU": "364953",
        "URL": "https://www.cb2.com/rainer-daumiller-armchair-in-solid-pine/s364953",
        "Product Name": "Rainer Daumiller Arm Chair in Solid Pine",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "284212": {
        "SKU": "284212",
        "URL": "https://www.cb2.com/horst-bruning-sideboard/s284212",
        "Product Name": "Horst Bruning Sideboard",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "273496": {
        "SKU": "273496",
        "URL": "https://www.cb2.com/brown-and-white-table-vase/s273496",
        "Product Name": "Brown & White Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "273453": {
        "SKU": "273453",
        "URL": "https://www.cb2.com/brown-and-white-table-vase/s273453",
        "Product Name": "Brown & White Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "253451": {
        "SKU": "253451",
        "URL": "https://www.cb2.com/beech-and-linen-armchair/s253451",
        "Product Name": "Beech and Linen Armchair",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "252888": {
        "SKU": "252888",
        "URL": "https://www.cb2.com/large-sculptural-lounge-chair/s252888",
        "Product Name": "Large Sculptural Lounge Chair 2 of 2",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "252834": {
        "SKU": "252834",
        "URL": "https://www.cb2.com/large-sculptural-lounge-chair/s252834",
        "Product Name": "Large Sculptural Lounge Chair 1 of 2",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "276508": {
        "SKU": "276508",
        "URL": "https://www.cb2.com/salocchi-grey-sofa/s276508",
        "Product Name": "Salocchi Grey Sofa",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "268493": {
        "SKU": "268493",
        "URL": "https://www.cb2.com/cream-and-brown-vase/s268493",
        "Product Name": "Cream & Brown Vase",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "268155": {
        "SKU": "268155",
        "URL": "https://www.cb2.com/wood-hanging-lamp/s268155",
        "Product Name": "Wood Hanging Lamp",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "254946": {
        "SKU": "254946",
        "URL": "https://www.cb2.com/martinelli-luca-arch-floor-lamp/s254946",
        "Product Name": "Martinelli Luca Arch Floor Lamp",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "252136": {
        "SKU": "252136",
        "URL": "www.cb2.com/egon-eiermann-armchair/s252136",
        "Product Name": "Egon Eiermann Armchair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252508": {
        "SKU": "252508",
        "URL": "www.cb2.com/studio-valente-adjustable-counterweight-bow-pendant/s252508",
        "Product Name": "Studio Valente Adjustable Counterweight Bow Pendant",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252112": {
        "SKU": "252112",
        "URL": "www.cb2.com/franz-kottgen-sectional-unit/s252112",
        "Product Name": "Franz Köttgen Sectional Unit",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "253822": {
        "SKU": "253822",
        "URL": "www.cb2.com/wood-desk/s253822",
        "Product Name": "Wood Desk by Gugliemo Ulrich",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "278819": {
        "SKU": "278819",
        "URL": "www.cb2.com/ekstrom-lounge-chair-and-ottoman/s278819",
        "Product Name": "Ekström Lounge Chair & Ottoman",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "(612) 821-9303"
    },
    "278837": {
        "SKU": "278837",
        "URL": "www.cb2.com/wooden-slat-studio-coffee-table/s278837",
        "Product Name": "Wooden Slat Studio Coffee Table",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "(612) 821-9303"
    },
    "278853": {
        "SKU": "278853",
        "URL": "www.cb2.com/pedro-armchair/s278853",
        "Product Name": "Pedro Armchair",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "(612) 821-9303"
    },
    "278888": {
        "SKU": "278888",
        "URL": "www.cb2.com/pedro-armchair/s278888",
        "Product Name": "Pedro Armchair",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "(612) 821-9303"
    },
    "253525": {
        "SKU": "253525",
        "URL": "www.cb2.com/metal-bed-aqua/s253525",
        "Product Name": "Metal Bed Aqua",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "253531": {
        "SKU": "253531",
        "URL": "www.cb2.com/metal-bed-dark/s253531",
        "Product Name": "Metal Bed Dark",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "252221": {
        "SKU": "252221",
        "URL": "www.cb2.com/omicron-sconce/s252221",
        "Product Name": "'Omicron' Sconce by Vico Magistretti, Italy, 1960s, Metal and Acrylic, 1 of 2",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252256": {
        "SKU": "252256",
        "URL": "www.cb2.com/omicron-sconce/s252256",
        "Product Name": "'Omicron' Sconce by Vico Magistretti, Italy, 1960s, Metal and Acrylic, 2 of 2",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252302": {
        "SKU": "252302",
        "URL": "www.cb2.com/large-wall-applique/s252302",
        "Product Name": "Large Wall Applique, Italy, 1960s, Chrome, 1 of 4",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252341": {
        "SKU": "252341",
        "URL": "www.cb2.com/large-wall-applique/s252341",
        "Product Name": "Large Wall Applique, Italy, 1960s, Chrome, 2 of 4",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252427": {
        "SKU": "252427",
        "URL": "www.cb2.com/large-wall-applique/s252427",
        "Product Name": "Large Wall Applique, Italy, 1960s, Chrome, 3 of 4",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252450": {
        "SKU": "252450",
        "URL": "www.cb2.com/large-wall-applique/s252450",
        "Product Name": "Large Wall Applique, Italy, 1960s, Chrome, 4 of 4",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "257148": {
        "SKU": "257148",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257148",
        "Product Name": "Doria Glass Pendant Lamp, 1 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    },
    "257166": {
        "SKU": "257166",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257166",
        "Product Name": "Doria Glass Pendant Lamp, 2 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    },
    "257175": {
        "SKU": "257175",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257175",
        "Product Name": "Doria Glass Pendant Lamp, 3 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    },
    "257186": {
        "SKU": "257186",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257186",
        "Product Name": "Doria Glass Pendant Lamp, 4 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    },
    "257204": {
        "SKU": "257204",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257204",
        "Product Name": "Doria Glass Pendant Lamp, 5 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    }
};

CBPLA.VintageSkusStoreMessage = function () {

    // config object
    var c = {
        sku: window.vintageSku,
        skus: window.vintageSkus
    };

    /**
     * init function
     */
    function init() {
        loopThroughObject();
    }

    /**
     * loop throught window.vintageSkus, defined in https://app.optimizely.com/v2/projects/8300054817/experiments/15626080543/pages in function jsCondition()
     */
    function loopThroughObject() {
        for (var prop in c.skus) {
            var v = c.skus[prop];
            if (c.skus.hasOwnProperty(prop)) {
                htmlMessage(v);
            }
        }
    }

    /**
     * @param  {String} val - sku
     * if on page sku equals object sku
     */
    function htmlMessage(val) {
        var sku = val.SKU;

        if (sku === c.sku) {
            insertHtml(val);
        }
    }

    /**
     * @param  {Object} el - object
     * insert HTML for found sku
     */
    function insertHtml(el) {

        var data = {
            store: el.Store,
            storeLink: el['Store Link'],
            phone: el['Store Phone'],
            phoneTitle: __.isPhone ? '<h2 class="tabpanel-header section-header">Availibilty</h2>' : '',
            phoneLink: __.isPhone ? '<a href="tel:' + el['Store Phone'] + '">' + el['Store Phone'] + '</a>' : el['Store Phone']
        };

        var $el = __.isPhone ? document.querySelector('.section-region.section-description') : document.querySelector('.hw-right-detail');

        var html = '<div class="vintage-skus">' +
            data.phoneTitle +
            '<p>Limited Quantity Available. One-of-a-Kind Vintage.</p>' +
            '<p>Available at <span><a href="' + data.storeLink + '">CB2 ' + data.store + '</a></span>.' +
            '<p>Call now: ' + data.phoneLink +
            '</div>';

        if ($el) {
            $el.insertAdjacentHTML('afterbegin', html);
        }
    }

    return {
        init: init
    };
};

document.addEventListener('DOMContentLoaded', function () {
    var initVintageSkusStoreMessage = CBPLA.VintageSkusStoreMessage();
    initVintageSkusStoreMessage.init();
});
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17927910371"], "experiments": [{"weightDistributions": [{"entityId": "17819240143", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Stock Sectional Entry Point", "bucketingStrategy": null, "variations": [{"id": "17807680481", "actions": [], "name": "Original"}, {"id": "17819240143", "actions": [{"viewId": "17927910371", "changes": [{"dependencies": [], "type": "custom_code", "id": "1ABE004C-3A45-4B1A-A717-C06E6BBB1397", "value": function($){try {
    window.addEventListener('load', function(event) {
   
      var collectionCodeData = window.collectionCode;
      if (Crate !== undefined && Crate.Model !== undefined && Crate.Model.BrowseDto) { 
        var currentCollectionCode = Crate.Model.BrowseDto.CollectionCode;
      }
      var dimensionSection = document.querySelectorAll('.main-product.main-furniture .section-dimensions')[0];

      if (collectionCodeData.includes(currentCollectionCode)){
        if (!!dimensionSection) {
            dimensionSection.insertAdjacentHTML('afterend', '<section class="section-region section-sectionals nsInt"><h2 class="section-header">Looking for a different configuration?</h2><a id="btnLink" href="#" class="button-transparent btn-build-your-own" aria-describedby="build-your-own-sectional">Build Your Own</a></section>');
        }  

        var sectionalUrl = "/sectional-planner?collectionCode=" + currentCollectionCode;
        var grabBtn = document.getElementById('btnLink');
        if (!!grabBtn) {
            grabBtn.setAttribute("href",sectionalUrl);
        }
      }
	});
}
catch(error) {
  console.log("Error coming from Optimizely: Test - Stock Sectional Entry Point Test");
  console.log(error);
  
}
}}, {"value": "<style>.btn-build-your-own {\n    font-family: \"Lineto Brown Sub\",\"Lineto Brown Light Sub\",Verdana,sans-serif!important;\n    font-weight: 300;\n    text-transform: uppercase;\n    letter-spacing: .1em;\n    text-decoration: underline;\n    display: block;\n}\n\n.adaptive-layout .btn-build-your-own {\n  text-align:center;\n}\n\n.responsive-layout .btn-build-your-own {\n  text-align:left;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "0D34A392-BB27-414C-96F6-7EA5E38FF674"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17815430181", "integrationSettings": null}], "id": "17799551259", "weightDistributions": null, "name": "Stock Sectional Entry Point", "groupId": null, "commitId": "17941990781", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "87A7E4ED-1FDA-498B-8E89-EA44CA28EB25", "value": function($){window.collectionCode = [504, 404, 657, 667];
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16848251807"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "FIX - Fix horizontal scroll on PDP", "bucketingStrategy": null, "variations": [{"id": "16844541004", "actions": [{"viewId": "16848251807", "changes": [{"value": "<style>.responsive-layout .showcase-widget {\n\tfloat: none !important;\n  margin-bottom: 5px;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "0935737a64cb434da9ec224652bf0d78"}]}], "name": "Original"}], "audienceIds": null, "changes": null, "id": "16828622137", "integrationSettings": null}], "id": "16865290973", "weightDistributions": null, "name": "FIX - Fix horizontal scroll on PDP", "groupId": null, "commitId": "16840132022", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["17641880293"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "TEST - CB2 Mobile Abandoned Cart Tool Tip - 100%", "bucketingStrategy": null, "variations": [{"id": "17626890174", "actions": [{"viewId": "17641880293", "changes": [{"dependencies": [], "type": "custom_code", "id": "a88edae450ec41fb9b119d357838f75a", "value": function($){window.PERS = window.PERS || {};
console.log('PERS-57 VARIATION 1');

// Optimizely utils
var utils = window.optimizely.get('utils');

PERS.PERS_57 = function () {

    var c = {
        id: {
            section: 'cartCarousel'
        },
        product_url: '/Browse/ProductDynamicComponent/GetProductNavigateDetailJson'
    };

    var products = digitalData.cart.item;
    var hasItems = digitalData.cart.item.length > 0;

    var myHelpers = { formatPrice: formatPrice };
    jQuery.views.helpers(myHelpers);

    function init() {
        if (hasItems) {
            renderProducts();
        }
    }

    function formatPrice(val) {
        return val.toFixed(2);
    }

    function renderProducts() {

        var skus = products.map(function (el) {
            return el.productInfo.sku;
        }).join(',');

        getProductNavigateDetail(
            skus,
            'cartCarouselItems',
            'cartCarouselTemplate'
        );
    }

    function getProductNavigateDetail(skuList, targetId, templateId) {

        var postUrl = c.product_url;

        jQuery.ajax({
            url: postUrl,
            type: 'POST',
            data: { skus: skuList },
            dataType: 'json',
            success: function (result) {
                console.log(result);

                if (result[0] !== null) {
                    this.target = '#' + targetId;
                    this.template = '#' + templateId;

                    jQuery(this.target).html(
                        jQuery(this.template).render(result, formatPrice)
                    );
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });

    }

    return init();
};

// utils.waitForElement('#cartCarousel').then(function () {
//     PERS.PERS_57();
// });
$(document).ready(function() {
  utils.waitForElement('#cartCarousel').then(function () {
        PERS.PERS_57();
    });
});
//document.addEventListener('DOMContentLoaded', function () {
//  utils.waitForElement('#cartCarousel').then(function ()
//     PERS.PERS_57();
// });
//});
}}, {"value": "<style>.cart-carousel {\n  font-family: \"Lineto Brown Sub\", \"Lineto Brown Light Sub\", Verdana, sans-serif;\n  padding: 50px 18px 0;\n}\n\n.cart-carousel__hdr {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-transform: uppercase;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  padding-bottom: 14px;\n}\n\n.cart-carousel__hdr-p {\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 0.08em;\n  margin: 0 15px 0 0;\n  line-height: 19px;\n}\n\n.cart-carousel__hdr-a {\n  font-size: 13px;\n  font-weight: 300;\n  letter-spacing: 0.08em;\n  text-decoration: underline;\n}\n\n.cart-carousel__items {\n  width: calc(100% + 18px);\n  height: auto;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n\n.cart-carousel__item-link {\n  width: 130px;\n  min-width: 130px;\n  padding-right: 12px;\n  position: relative;\n}\n\n.cart-carousel__item-link:last-child {\n  padding-right: 18px;\n}\n\n.cart-carousel__detail {\n  padding-top: 7px;\n}\n\n.cart-carousel__name, .cart-carousel__price {\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 12px;\n  letter-spacing: .06em;\n  margin: 0;\n  line-height: 16px;\n}\n\n.cart-carousel__price-sale {\n  color: #e00e00;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "e02fb59428e94bcd9c4ce6d29334f1c2"}, {"src": "/actions/1aa550f2c05e0918c3e7e9e41da4877eb3e314d1d5871f91e16af3c0f008af82.js", "dependencies": [], "id": "f7fdcede1d014c4daf49edf8014f3013"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17653390182", "integrationSettings": null}], "id": "17641880294", "weightDistributions": null, "name": "TEST - CB2 Mobile Abandoned Cart Tool Tip - 100%", "groupId": null, "commitId": "17663630014", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16857355813"], "experiments": [{"weightDistributions": [{"entityId": "16844758439", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEST - CB2 - Vertebrae Update - AR Test - reporting on checkout pages", "bucketingStrategy": null, "variations": [{"id": "16847937116", "actions": [{"viewId": "16857355813", "changes": []}], "name": "Original"}, {"id": "16844758439", "actions": [{"viewId": "16857355813", "changes": [{"dependencies": [], "type": "custom_code", "id": "1b8e0ae537de4e00bf5a82c6e12b6408", "value": function($){document.addEventListener("DOMContentLoaded", function () {
  try {
    	console.log("OPTIMIZELY: TEST - CB2 - Veretebrae Update");
  		window.$AXIS=window.$AXIS||function(){($AXIS.q=$AXIS.q||[]).push(arguments);};$AXIS.l=+new Date;
    
      if(typeof $AXIS !== "undefined" && typeof digitalData !== 'undefined' && typeof digitalData.transaction !== 'undefined'){
      		// Inject Axis initialization library
  				var s = document.createElement('script');
  				s.async = true;
  				s.src = 'https://z.vertebrae-axis.com/scripts/transaction.js';
  				document.head.appendChild(s);

  				$AXIS('init', {
  				  'clientId':'07031c3c',
  				  'environment':'PROD',
  				  'pageType':'product',
  				  'clientEnvironment': 'vertebrae'
  				});
        
				  if(typeof digitalData.transaction.total !== 'undefined' || digitalData.transaction.total !== null){
             $AXIS('ecommerce:addTransaction', {
  				    		'id': digitalData.transaction.transactionId,
  				    		'revenue': digitalData.transaction.total.transactionTotal,
  				    		'shipping': digitalData.transaction.total.shipping,
  				    		'tax': digitalData.transaction.total.attributes 
  						});
						
  						$AXIS('ecommerce:addItem', {
  						    'id': digitalData.transaction.transactionId,
  						    'items': digitalData.transaction.item
  						});
						
  						$AXIS('ecommerce:send');
          }
  				
      }
		
  }
  catch(error) {
      console.error("ERROR ON: OPTIMIZELY: TEST - CB2 - Veretebrae Update");
    	console.error(error);
  }
});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "16865225090", "integrationSettings": null}], "id": "16842043569", "weightDistributions": null, "name": "TEST - CB2 - Vertebrae Update - AR Test - reporting on checkout pages", "groupId": null, "commitId": "16828583625", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"10375182457": {"eVar": "eVar93"}}, "integrationStringVersion": 2, "viewIds": ["17795214248"], "experiments": [{"weightDistributions": [{"entityId": "17758533845", "endOfRange": 5000}, {"entityId": "17772134872", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEST - Hide Handy", "bucketingStrategy": null, "variations": [{"id": "17758533845", "actions": [], "name": "Original"}, {"id": "17772134872", "actions": [{"viewId": "17795214248", "changes": [{"value": "<style>#section-handy-service, .handy-service-info {\n\tdisplay: none !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "7243989C-F535-474E-9AAA-FD51260BDD50"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17766504174", "integrationSettings": null}], "id": "17806310012", "weightDistributions": null, "name": "TEST - Hide Handy", "groupId": null, "commitId": "17900000317", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16911475189"], "experiments": [{"weightDistributions": [{"entityId": "16900823141", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Hide oversize shipping popup link on the Cart page", "bucketingStrategy": null, "variations": [{"id": "16927770473", "actions": [], "name": "Original"}, {"id": "16900823141", "actions": [{"viewId": "16911475189", "changes": [{"value": "<style>#addChargeMessage > button {\n  display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "D6430CD1-C4BF-41B3-8602-1C1189BC89BB"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "16933530561", "integrationSettings": null}], "id": "16927831531", "weightDistributions": null, "name": "Hide oversize shipping popup link on the Cart page", "groupId": null, "commitId": "16923930714", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16183070137"], "experiments": [{"weightDistributions": [{"entityId": "16155670460", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEST - CB2 AR with Vertebrae", "bucketingStrategy": null, "variations": [{"id": "16151700190", "actions": [], "name": "Original"}, {"id": "16155670460", "actions": [{"viewId": "16183070137", "changes": [{"dependencies": [], "type": "custom_code", "id": "3a138ecc5b0f47edabc8be1ad21e70e2", "value": function($){$( document ).ready(function() {
console.log("Vertebrae Test for cb2");
setTimeout(function(){
            // Setup $AXIS object on window to be populated by Axis.js later
            window.$AXIS=window.$AXIS||function(){($AXIS.q=$AXIS.q||[]).push(arguments);};
            $AXIS.l=+new Date;
  
            // Initialize Axis library - using Async queue  
            $AXIS('init', {
              'clientId':'07031c3c',    
              'environment':'PROD',    
              'pageType':'product',    
              'clientEnvironment': 'vertebrae' 
            });
  
            // Inject Axis initialization library  
            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://z.vertebrae-axis.com/scripts/axis.js';
            document.head.appendChild(s); 
      }, 1000);

});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "16124860737", "integrationSettings": null}], "id": "16177040300", "weightDistributions": null, "name": "TEST - CB2 AR with Vertebrae", "groupId": null, "commitId": "16169610036", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17816410940"], "experiments": [{"weightDistributions": [{"entityId": "17798851427", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - Hide BOPS killswitch messaging on cart", "bucketingStrategy": null, "variations": [{"id": "17830240613", "actions": [], "name": "Original"}, {"id": "17798851427", "actions": [{"viewId": "17816410940", "changes": [{"value": "<style>.store-warehouse-pickup.col-xs-12 {\n    display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "CE554DA0-8E0D-4368-93D5-A64266EA5FEC"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17818770484", "integrationSettings": null}], "id": "17830390237", "weightDistributions": null, "name": "FIX - Hide BOPS killswitch messaging on cart", "groupId": null, "commitId": "17828250347", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17027484241"], "experiments": [{"weightDistributions": [{"entityId": "17070910141", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEST - Upholstery Product page test | 100% PLA Entry Only", "bucketingStrategy": null, "variations": [{"id": "17068530370", "actions": [], "name": "Original"}, {"id": "17070910141", "actions": [{"viewId": "17027484241", "changes": [{"dependencies": [], "type": "custom_code", "id": "63fd151acc3f498ea9e423fc2b4c2e3e", "value": function($){window.CBUpholsteryPLA = window.CBUpholsteryPLA || {};
var utils = window["optimizely"].get('utils');

CBUpholsteryPLA.fn = function () {

    // config
    var c = {
        cat_id: Crate.Model.BrowseDto.CategoryId,
        current_sku: digitalData.page.pageInfo.pageId,
        cat_name: Crate.Model.BrowseDto.CategoryName,
        cat_names: window.catNames,
        product_url: '/Browse/ProductDynamicComponent/GetProductNavigateDetailJson',
        category_url: '/Browse/ProductDynamicComponent/GetCategoryProductNavigateDetailJson'
    };

    var pageSku = c.current_sku.charAt(0) === 's' ? c.current_sku.replace('s', '') : c.current_sku.replace('f', '');
    var $catUrl = document.getElementById('upholsteryPlaCatUrl');
    var $catTitle = document.getElementById('upholsteryPlaCatTitle');
    var catName = c.cat_name;
    var catUrl = '';

    // set 'View All Upholstery Sale' URL's for each category
    switch (catName) {
        case 'Sofas':
            catUrl = '/furniture/sofas/1';
            break;
        case 'Sectionals':
            catUrl = '/furniture/sectionals/1';
            break;
        case 'Sleepers & Daybeds':
            catUrl = '/furniture/sleepers-daybeds/1';
            break;
        case 'Accent Chairs':
            catUrl = '/furniture/accent-chairs/1';
            break;
        case 'Ottomans, Poufs, Stools':
            catUrl = '/furniture/ottomans-poufs-stools/1';
            break;
        case 'Dining Chairs':
            catUrl = '/furniture/dining-chairs/1';
            break;
        case 'Beds':
            catUrl = '/furniture/beds/1';
            break;
        case 'Dining Tables':
            catUrl = '/furniture/dining-tables/1';
            break;
        case 'Bar & Counter Stools':
            catUrl = '/furniture/bar-counter-stools/1';
            break;
        default:
            catUrl = '';
    }

    var excludedSkus = [Number(pageSku)];

    function init() {

        // set category url
        $catUrl.setAttribute('href', catUrl);
        $catTitle.innerHTML = catName;

        getCategoryProductNavigateDetail(
            c.cat_id,
            12
        );
    }
    /**
     * @param  {Array} array
     * shuffle array values
     */
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    /**
     * @param  {Array} skus
     */
    function runProducts(skus) {
        var skusString = JSON.stringify(skus);

        getProductNavigateDetail(
            skusString,
            'upholsteryPlaProducts',
            'upholsteryPlaTemplate'
        );
    }
    /**
     * @param  {Number} categoryId - category ID
     * @param  {Number} maxCount - max returned results
     * get maxCount of products from specific category by categoryId
     */
    function getCategoryProductNavigateDetail(categoryId, maxCount) {

        var postUrl = c.category_url;

        jQuery.ajax({
            url: postUrl,
            type: 'POST',
            data: {
                categoryId: categoryId,
                maxCount: maxCount
            },
            dataType: 'json',
            success: function (result) {
                if (result[0] !== null) {

                    var skus = result.map(function (sku) {
                        return sku.Sku;
                    }).filter(function (sku) {
                        return excludedSkus.indexOf(sku) === -1;
                    });

                    var shuffleSkus = shuffle(skus);
                    var fourSkus = shuffleSkus.splice(0, 6);

                    runProducts(fourSkus);
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

    /**
     * @param  {Array} skuList
     * @param  {String} targetId
     * @param  {String} templateId
     * render products
     */
    function getProductNavigateDetail(skuList, targetId, templateId) {

        var postUrl = c.product_url;

        jQuery.ajax({
            url: postUrl,
            type: 'POST',
            data: { skus: skuList },
            dataType: 'json',
            success: function (result) {

                if (result[0] !== null) {
                    this.target = '#' + targetId;
                    this.template = '#' + templateId;

                    jQuery(this.target).html(
                        jQuery(this.template).render(result)
                    );
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });

    }

    return {
        init: init
    };

};

utils.waitForElement('#upholsteryPlaProducts').then(function () {
    var initCBUpholsteryPLA = CBUpholsteryPLA.fn();
    initCBUpholsteryPLA.init();
});
}}, {"value": "<style>optly-preview {\n  top: 450px !important;\n}\n\n.upholstery-pla {\n  padding: 20px 18px 10px;\n  min-height: 146px;\n}\n\n.upholstery-pla__hdr {\n  padding-bottom: 10px;\n}\n\n.upholstery-pla__view {\n  text-decoration: underline;\n  font-weight: 300;\n  font-size: 13px;\n}\n\n.upholstery-pla__a {\n  color: #222;\n  text-transform: uppercase;\n  font-family: \"Lineto Brown Sub\", \"Lineto Brown Light Sub\", Verdana, sans-serif;\n  font-weight: 500;\n  letter-spacing: .08em;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.upholstery-pla__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 -3px;\n  border-bottom: 1px solid #CCC;\n  padding-bottom: 25px;\n}\n\n.upholstery-pla__item {\n  width: calc(25% - 6px);\n  padding: 0 3px;\n}\n\n.upholstery-pla__item:nth-child(n+5) {\n  display: none !important;\n}\n\n.upholstery-pla__item-img {\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n}\n\n.upholstery-pla__item-link {\n  display: block;\n  padding-bottom: 100%;\n  width: 100%;\n  height: 0;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "93a7743cf54a4eadaca2916a92eef7c9"}, {"value": "<script id=\"upholsteryPlaTemplate\" type=\"text/x-jsrender\">\n  <div class=\"upholstery-pla__item\">\n    <a class=\"upholstery-pla__item-link\" href=\"{{:NavigateUrl}}\" title=\"{{:Name}}\">\n        <picture>\n            <source srcset=\"//cb2.scene7.com/is/image/CB2/{{:ImagePath}}/?$web_zoom$&190617121917&wid=356&hei=356 2x, //cb2.scene7.com/is/image/CB2/{{:ImagePath}}/?$web_zoom$&190617121917&wid=178&hei=178 1x\">\n            <img class=\"upholstery-pla__item-img\" src=\"//cb2.scene7.com/is/image/CB2/{{:ImagePath}}/?$web_zoom$&190617121917&wid=178&hei=178\" alt=\"{{:Name}}\" aria-live=\"polite\">\n        </picture>\n    </a>\n  </div>\n</script>\n\n<div id=\"upholsteryPlaCB2\" class=\"upholstery-pla\">\n    <div class=\"upholstery-pla__hdr\">\n        <a id=\"upholsteryPlaCatUrl\" href=\"/\" class=\"upholstery-pla__a\">\n            <span class=\"upholstery-pla__cat\" id=\"upholsteryPlaCatTitle\"></span>\n            <span class=\"upholstery-pla__view\">Shop All</span>\n        </a>\n    </div>\n    <div id=\"upholsteryPlaProducts\" class=\"upholstery-pla__list\"></div>\n</div>", "selector": "#main", "dependencies": [], "operator": "before", "type": "append", "id": "d898806333a64636a14c36e074b52634"}]}], "name": "Variation 1 - 4 products on top"}], "audienceIds": null, "changes": null, "id": "17080440183", "integrationSettings": null}], "id": "17085110768", "weightDistributions": null, "name": "TEST - Upholstery Product page test | 100% PLA Entry Only", "groupId": null, "commitId": "17042953754", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"10375182457": {"eVar": "eVar86"}}, "integrationStringVersion": 2, "viewIds": ["17549990271"], "experiments": [{"weightDistributions": [{"entityId": "17559400383", "endOfRange": 5000}, {"entityId": "17561530535", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEST - Extended ETA Test", "bucketingStrategy": null, "variations": [{"id": "17559400383", "actions": [], "name": "Original"}, {"id": "17561530535", "actions": [{"viewId": "17549990271", "changes": [{"value": "<style>.line-level-secondary {\n\tdisplay: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "FA745450-13E3-4602-86E6-AE065DBAB805"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17575110434", "integrationSettings": null}], "id": "17580930289", "weightDistributions": null, "name": "TEST - Extended ETA Test", "groupId": null, "commitId": "17575200484", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10521323039"], "experiments": [{"weightDistributions": [{"entityId": "14404730145", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Fix - Wallpaper Lead Time 040819", "bucketingStrategy": null, "variations": [{"id": "14412620149", "actions": [{"viewId": "10521323039", "changes": []}], "name": "Original"}, {"id": "14404730145", "actions": [{"viewId": "10521323039", "changes": [{"value": "<p style=\"display: inline-block;font-size: 13px;\">order will ship within 14 days</p>", "selector": "#ship", "dependencies": [], "operator": "append", "type": "append", "id": "dbe8c48d326d4e2087f55e5c5ed976bf"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "14394870118", "integrationSettings": null}], "id": "14396890099", "weightDistributions": null, "name": "Fix - Wallpaper Lead Time 040819", "groupId": null, "commitId": "14408850015", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16863634331"], "experiments": [{"weightDistributions": [{"entityId": "16869088374", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Oder Tracking Additional Copy", "bucketingStrategy": null, "variations": [{"id": "16852710508", "actions": [], "name": "Original"}, {"id": "16869088374", "actions": [{"viewId": "16863634331", "changes": [{"selector": ".col-sm-5 h3", "dependencies": [], "attributes": {"html": "<h3>Text/SMS</h3>\n<p>\n                   Text/SMS\n If you need additional help tracking an order or \nscheduling delivery, text us at <a style=\"text-decoration:underline\" href=\"tel:312-779-1979\">312-779-1979</a>\n Mon-Fri 8 am - 8 pm CT, Sat - Sun 8 am- 7pm CT\n\n                </p>\n\n<h3>Shipping</h3>"}, "type": "attribute", "id": "5f226271480849f390aeaa9fcae00b98", "css": {"position": "static"}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "16846376695", "integrationSettings": null}], "id": "16865990709", "weightDistributions": null, "name": "Oder Tracking Additional Copy", "groupId": null, "commitId": "16852016616", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17927910371"], "experiments": [{"weightDistributions": [{"entityId": "17939121203", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "COVID - Update Custom Pages with Icon", "bucketingStrategy": null, "variations": [{"id": "17922290460", "actions": [{"viewId": "17927910371", "changes": []}], "name": "Original"}, {"id": "17939121203", "actions": [{"viewId": "17927910371", "changes": [{"dependencies": [], "type": "custom_code", "id": "8D8FE3C2-0B78-4B18-9CD4-C84DC8842284", "value": function($){try {
// Retrieve the utils library
var utils = window["optimizely"].get('utils');
var jsFurniture = ".special-order-delivery-message";
function loadScript() {
  //Drawer
  var grabDrawer = document.querySelectorAll('.special-order-text')[1];
  if(!!grabDrawer) {
    grabDrawer.insertAdjacentHTML('beforeend', '<button id="cb2PopupBtn" class="cb2-popup-btn button-transparent" aria-label="More Information (opens  modal dialog)"><svg class="svg-icon-help-outline"><use xlink:href="#svg-icon-help-outline" aria-hidden="true" focusable="false"></use></svg></button>');
  }
  
  function openPopup() { 
    Crate.React.Actions.PopupActions.fetchContent('/browse/popup?popupName=Covid19');
  }
  document.getElementById("cb2PopupBtn").addEventListener("click", openPopup);
}
// Wait for the element to appear in the DOM, then change the color
utils.waitForElement(jsFurniture).then(function(element) {
   loadScript();
});
  }
catch(err) {
  console.log(err);
  console.log("Update Custom Pages with Icon");
}
}}, {"value": "<style>.cb2-popup-btn .svg-icon-help-outline {\n    width: 13px;\n    height: 13px;\n    vertical-align: middle;\n    margin: 0 0 2px 3px;\n}\n\n.cb2-popup-btn:focus {\n  outline:1px dotted #222;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "F2218A4A-47BD-4006-ACF9-2CF5CDA6DB15"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17908122462", "integrationSettings": null}], "id": "17935840507", "weightDistributions": null, "name": "COVID - Update Custom Pages with Icon", "groupId": null, "commitId": "17920371124", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["10970300911"], "experiments": [{"weightDistributions": [{"entityId": "10947851005", "endOfRange": 10000}], "audienceName": "Desktop/Tablet Only", "name": "Desktop - CB2 Interiors - Modsy - furn product page", "bucketingStrategy": null, "variations": [{"id": "10958201841", "actions": [], "name": "Original"}, {"id": "10947851005", "actions": [{"viewId": "10970300911", "changes": [{"value": "<style>.CB2Interiors {\n       margin-top: 50px;\n       float: left\n   }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "624f511537204db59972aeb0fedb492b"}, {"value": "<a class='CB2Interiors' href='https://www.cb2.com/cb2interiors'> \n    <img src='https://images.cb2.com/is/image/CB2/cb2_interiors_fj_banner_19spring_d?fmt=jpg&qlt=80,0&wid=1008'\n    alt=\"Need help pulling it all together? Collaborate with an interior designer to create a layout for your space combining new items and pieces you already own. It's the easiest way to decorate.\" /></a>", "selector": "#section-reviews", "dependencies": [], "operator": "before", "type": "append", "id": "dcf12790776b423bb61d22f5af0fa25c"}, {"selector": ".CB2Interiors > img", "dependencies": [], "attributes": {"src": "https://images.cb2.com/is/image/CB2/cb2_interiors_fj_banner_19fall_d?fmt=jpg&qlt=80,0&wid=1008"}, "type": "attribute", "id": "75006FC1-1AB6-4F6D-B391-70B9F6F88905", "css": {}}]}], "name": "Variation #1"}], "audienceIds": ["or", "10368458633"], "changes": null, "id": "10968220923", "integrationSettings": null}], "id": "10947851004", "weightDistributions": null, "name": "Desktop - CB2 Interiors - Modsy - furn product page", "groupId": null, "commitId": "16808290504", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16916081792"], "experiments": [{"weightDistributions": [{"entityId": "16939470420", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - B2B application dual branded logo addition ", "bucketingStrategy": null, "variations": [{"id": "16884811766", "actions": [], "name": "Original"}, {"id": "16939470420", "actions": [{"viewId": "16916081792", "changes": [{"value": "<style>@media only screen and (max-width:768px) { .brandB2b {width: 70%;margin: 2% auto 8%; display: block;}\n.business-sales p {font-size: 14px; line-height: 18px; font-weight: 300; font-family: Lineto Brown Sub;}}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "5C23FE20-0D11-4583-BBEC-2A72908B6CF1"}, {"selector": "h1", "dependencies": [], "attributes": {"html": "<img class=\"brandB2b\" alt=\"Crate and Barrel CB2 Business sales\" src=\"//cb2.scene7.com/is/image/CB2/cb2_b2b_d_logo?fmt=png-alpha\" style=\"width:60%;\">"}, "type": "attribute", "id": "4afc0d69d9aa42beab030ea60bfcb89f", "css": {}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "16936951882", "integrationSettings": null}], "id": "16935370869", "weightDistributions": null, "name": "FIX - B2B application dual branded logo addition ", "groupId": null, "commitId": "16931760693", "decisionMetadata": null, "policy": "single_experiment", "changes": null}], "dimensions": [{"segmentId": null, "id": "10560883849", "apiName": "LR_B2B", "name": "LR_B2B"}], "projectId": "8249343", "namespace": "8249343", "dcpKeyfieldLocators": [{"dcp_datasource_id": "13625440248", "is_optimizely": true, "type": "uid", "name": ""}, {"dcp_datasource_id": "14298350035", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "14418590228", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "14604340617", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "15672440735", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "15694330291", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "15773970482", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "16840390573", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}], "visitorAttributes": [{"datatype": "string", "dcp_datasource_id": "14418590228", "id": "14412550238", "name": "SHA256"}, {"datatype": "string", "dcp_datasource_id": "14604340617", "id": "14592700030", "name": "SHA256"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15294890357", "name": "collection"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15300830606", "name": "Recommendations_ugc"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15304630884", "name": "grc_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15307480435", "name": "grc_promocode"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15309730206", "name": "nm_promocode"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15339250553", "name": "nm_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15343150212", "name": "recommendations"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15526140683", "name": "cbcc"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15750460567", "name": "grc_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "15694330291", "id": "15754580450", "name": "cbcc"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15758220740", "name": "nm_promocode"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15758390466", "name": "nm_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15758480287", "name": "recommendations"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15775900468", "name": "recommendations_ugc"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15777950568", "name": "collection"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15784000299", "name": "grc_promocode"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "16460590047", "name": "rewards"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16838491092", "name": "recommendations"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16838591635", "name": "Recommendations_ugc"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16848330467", "name": "collection"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16852420507", "name": "nm_promocode"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16855590892", "name": "nm_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16865750998", "name": "cbcc"}], "events": [{"category": "purchase", "name": "CKT - Purchase Complete (NR & R)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_3", "id": "9069501134", "eventFilter": null}, {"category": "other", "name": "CB2 - Extension Banner Clicks", "eventType": "custom", "viewId": null, "apiName": "cb2_banner_clicks", "id": "9499860910", "eventFilter": null}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R) (1)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_7", "id": "11406982061", "eventFilter": null}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R) (2)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_8", "id": "11420611793", "eventFilter": null}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R) (3)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_1_1", "id": "11499650318", "eventFilter": null}, {"category": "other", "name": "Desktop Sale Nav Click", "eventType": "click", "viewId": "10473121395", "apiName": "8249343_sale_nav_click", "id": "12794010417", "eventFilter": {"filterType": "target_selector", "selector": "li:nth-of-type(17)"}}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R) (4)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_11", "id": "15702731239", "eventFilter": null}], "revision": "1200", "views": [{"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "www.cb2.com", "match": "substring"}]], "activationType": "polling", "name": "Product Pages | Desktop + Mobile", "apiName": "8249343_product_pages__desktop", "tags": [{"category": "other", "locator": ".shop-bar-left-product-info", "valueType": "string", "locatorType": "css_selector", "apiName": "product_name"}, {"category": "other", "locator": ".description-intro > div", "valueType": "string", "locatorType": "css_selector", "apiName": "product_page_description"}, {"category": "other", "locator": "#section1 > div", "valueType": "string", "locatorType": "css_selector", "apiName": "product_description_hws"}], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  return document.getElementById("_fbType").getAttribute("content") == "product";
}
, "deactivationEnabled": false, "id": "8334581343"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.cb2.com", "match": "substring"}]], "name": "All Pages | Desktop + Mobile", "apiName": "8249343_all_pages__desktop__mobile", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10473121395"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.cb2.com/barca-black-wallpaper/s584302", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/barca-grey-wallpaper/s584373", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/barca-camel-wallpaper/s584364", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/palm-wallpaper/s512085", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/judd-aqua-wallpaper/s584381", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/judd-basalt-wallpaper/s584397", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/judd-taupe-wallpaper/s584400", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/rome-grey-wallpaper/s584425", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/rome-teal-wallpaper/s584451", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/expressionist-rounds-gold-and-white-wallpaper/s300916", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/damask-white-and-light-grey-wallpaper/s300987", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/caymen-navy-and-gold-palm-wallpaper/s160207", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/time-travel-floral-wallpaper/s386822", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/lucky-floral-wallpaper/s386797", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/rome-basalt-wallpaper/s584419", "match": "simple"}]], "name": "Wallpaper Barca", "apiName": "8249343_wallpaper_barca", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10521323039"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "substring"}]], "activationType": "polling", "name": "CB2 All Desktop", "apiName": "8249343_cb2_all_desktop", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  return document.getElementById("jsIsMobile").value === "0";
}
, "deactivationEnabled": false, "id": "10715950511"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/s\\d{6}?", "match": "regex"}, {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/f\\d{5}?", "match": "regex"}]], "name": "All Product and Family Pages- Regex", "apiName": "7871036_desktop_all_product_and_family_pages_regex_1_1_2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10752991729"}, {"category": "product_detail", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.cb2\\.com\\/[a-zA-Z0-9-.]+\\/s\\d{6}?", "match": "regex"}, {"type": "url", "value": "https://www.cb2\\.com\\/[a-zA-Z0-9-.]+\\/f\\d{5}?", "match": "regex"}]], "name": "CB2 Product and Family pages (Regex) (2)", "apiName": "cb2_product_and_family_pages_regex_4", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10953202200"}, {"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "substring"}]], "activationType": "polling", "name": "Domino Product Pages | Desktop + Mobile (1)", "apiName": "8249343_cb2_domino_pages_1_1", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  if(document.getElementById("_fbType").getAttribute("content") == "product"){
  var Furniturelist=
["11167","102" ,"112" ,"106" ,"110" ,"114" ,"118" ,"11020" ,"11021" ,"116" ,"11043" ,"810"];
  	var categoryId = Crate.Model.BrowseDto.CategoryId;
  var resultsFurniturelist =$.grep(Furniturelist, function( n, i ) {
  return ( n ==categoryId);
	});
  return resultsFurniturelist.length > 0;
  }
}
, "deactivationEnabled": false, "id": "10970300911"}, {"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "substring"}]], "activationType": "polling", "name": "Domino Product Pages | Desktop + Mobile (3)", "apiName": "8249343_cb2_domino_pages_1_3", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  if(document.getElementById("_fbType").getAttribute("content") == "product"){
  var Furniturelist=
["11167","102" ,"112" ,"106" ,"110" ,"114" ,"118" ,"11020" ,"11021" ,"116" ,"11043" ,"810"];
  	var categoryId = Crate.Model.BrowseDto.CategoryId;
  var resultsFurniturelist =$.grep(Furniturelist, function( n, i ) {
  return ( n ==categoryId);
	});
  return resultsFurniturelist.length > 0;
  }
}
, "deactivationEnabled": false, "id": "10974230943"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com", "match": "substring"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    // get sku from the page from .jsSwatchSku clas
    var skuEl = document.querySelector('.jsSwatchSku');

    if (skuEl) {
            var sku = skuEl.innerHTML;
    window.vintageSku = sku;

    // json created from https://docs.google.com/spreadsheets/d/1EJjFwwuGOVV6a3lGQ_rhLDjI38iJnfxNukUhj0S-AAM/edit#gid=0
    var vintageSkus = [268063,268055,268036,268111,268323,267998,267986,267927,267936,267955,267974,252574,251571,252592,252607,252610,252630,252668,252706,252736,252696,252799,253095,253176,253253,364961,253592,253584,267677,273508,273510,254755,254809,254906,254918,254923,254937,254981,275218,275260,275295,275307,275311,275324,275348,278048,275467,275493,278376,278382,278391,256344,256381,256397,256403,256459,256467,256470,255350,255382,255406,255425,280428,280564,280507,280463,280547,280475,280483,257440,257465,257481,257491,257520,257536,257556,257565,257576,257609,257637,281155,281349,281378,281407,281551,281393,276843,255730,255746,256485,256503,277004,277026,284225,253895,253865,253883,253906,253941,253970,254094,254012,254101,268638,276532,276540,276557,266690,266606,267382,267402,254998,255024,255037,255086,255099,255145,255244,255258,255261,276211,276229,276291,276314,276323,276365,274639,274679,274735,253617,253622,278957,278969,278972,278984,279026,279030,279055,279065,279079,279089,278218,278202,278195,278187,278153,278144,278138,278110,278104,278091,278060,277963,277949,277920,255782,276345,276331,276277,275711,275678,275607,257076,252165,281049,280931,280876,280865,280810,280802,280792,280788,280777,280716,257122,257114,257105,257091,275137,275128,275110,275105,275097,275078,275036,275002,274983,274964,274935,274716,274494,274452,253674,253699,253710,253756,253768,268563,268574,268584,255716,255727,277012,277074,277133,277186,281541,281528,281463,281337,281288,281142,257366,280498,280455,255341,255321,255296,277831,277814,277750,277694,277662,277656,277424,277390,279465,278948,274181,274162,274157,274121,274027,273991,273972,273908,273845,273830,273815,273747,273734,273714,273695,254558,276512,253517,254832,254603,364974,253430,364953,284212,273496,273453,253451,252888,252834,276508,268493,268155,254946,252136,252508,252112,253822,278819,278837,278853,278888,253525,253531,252221,252256,252302,252341,252427,252450,257148,257166,257175,257186,257204];

    // return true/false if sku found/not found in json 
    return vintageSkus.indexOf(Number(sku)) > -1;
    
    }
}
}]], "name": "URL Targeting for FIX- Vintage SKUs store messaging", "apiName": "8300054817_url_targeting_for_vintage_skus_store_messaging_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15859530554"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/s\\d{6}?", "match": "regex"}, {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/f\\d{5}?", "match": "regex"}, {"type": "url", "value": "https://qa-www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/s\\d{6}?", "match": "regex"}, {"type": "url", "value": "https://qa-www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/f\\d{5}?", "match": "regex"}]], "name": "All Product and Family Pages- Regex | Desktop + Mobile (6)", "apiName": "7871036_desktop_all_product_and_family_pages_regex_3_4_1_6_4", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16183070137"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "custom_code", "value": function jsCondition() {
    return document.getElementById('jsIsMobile').value === '0';
}
}], ["not", ["or", {"type": "url", "value": "www.cb2.com/checkout/", "match": "substring"}]]], "activationType": "polling", "name": "URL Targeting for TEST - CB2 Abandoned Cart Tool Tip - 100%", "apiName": "8300054817_url_targeting_for_test__cb2_abandoned_cart_tool_tip_1_2", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
    return typeof digitalData !== 'undefined' && typeof digitalData.cart !== 'undefined';
}
, "deactivationEnabled": false, "id": "16842718039"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/s\\d{6}?", "match": "regex"}, {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/f\\d[0-9]?", "match": "regex"}]], "name": "All Product and Family Pages- Regex | Desktop + Mobile (7)", "apiName": "7871036_desktop_all_product_and_family_pages_regex_7", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16848251807"}, {"category": "checkout", "staticConditions": ["or", ["or", {"type": "url", "value": "https://qa-www.cb2.com/Checkout/Confirmation/", "match": "substring"}, {"type": "url", "value": "https://www.cb2.com/Checkout/Confirmation/", "match": "substring"}]], "name": "Checkout - Confirmation", "apiName": "20661769_chekcout__confirmation_3_2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16857355813"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/account/order-tracking", "match": "simple"}]], "name": "URL Targeting for Oder Tracking Additional Copy", "apiName": "7871036_url_targeting_for_oder_tracking_additional_copy_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16863634331"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/checkout/cart", "match": "simple"}]], "name": "URL Targeting for Hide oversize shipping popup link on the Cart page", "apiName": "8249343_url_targeting_for_hide_oversize_shipping_popup_link_on_t", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16911475189"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/business-sales/application", "match": "simple"}]], "name": "URL Targeting for FIX - B2B application dual branded logo addition ", "apiName": "7871036_url_targeting_for_fix__b2b_application_dual_branded_logo_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16916081792"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "custom_code", "value": function jsCondition() {
    window.catNames = [
        'Sofas',
        'Sectionals',
        'Sleepers & Daybeds',
        'Accent Chairs',
        'Ottomans, Poufs, Stools',
        'Dining Chairs',
        'Beds',
        'Dining Tables',
        'Bar & Counter Stools'
    ];

    var pdpCatNem = Crate.Model.BrowseDto.CategoryName;

    return window.catNames.indexOf(pdpCatNem) !== -1;
}
}], ["or", {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/s\\d{6}?", "match": "regex"}, {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/f\\d{5}?", "match": "regex"}]], "activationType": "polling", "name": "URL Targeting for TEST - Upholstery Product page test | 100% PLA Entry Only", "apiName": "6216930665_url_targeting_for_test__upholstery_product_page_test__1_1_1_2_1_1_1", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
    return typeof digitalData.page.pageInfo !== 'undefined' && typeof Crate.Model.BrowseDto !== 'undefined' && document.querySelector('.international-layout') === null && document.getElementById('jsIsMobile').value === '1' &&
      window.location.href.indexOf('gclid') > -1;
}
, "deactivationEnabled": false, "id": "17027484241"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/rocco-rectangular-marble-dining-table/s317304", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/potter-zebra-print-hair-on-hide-chair/s327986", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/lola-round-concrete-dining-table/s340526", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/lenyx-stone-extra-large-sofa/s360311", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/lenyx-stone-armless-sofa/s360324", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/lenyx-stone-2-piece-extra-large-sectional/s360343", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/savile-saddle-leather-tufted-sofa/s360401", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/savile-black-leather-tufted-apartment-sofa/s360446", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/savile-black-leather-tufted-chair/s360466", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/savile-saddle-leather-tufted-chair/s360471", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/savile-black-leather-tufted-extra-large-sofa/s360486", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/savile-saddle-leather-tufted-sectional-sofa/s360541", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/savile-saddle-leather-tufted-armless-sofa/s360561", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/la-strizza-saddle-leather-bench-with-bolster-pillows/s365784", "match": "simple"}]], "name": "URL Targeting for TEST - Extended ETA Test", "apiName": "8249343_url_targeting_for_test__extended_eta_test", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17549990271"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "custom_code", "value": function jsCondition() {
    return document.getElementById('jsIsMobile').value === '1' && digitalData.cart.item.length > 0;
}
}], ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "exact"}]], "activationType": "polling", "name": "URL Targeting for TEST - CB2 Mobile Abandoned Cart Tool Tip - 100%", "apiName": "8249343_url_targeting_for_copy_of_test__cb2_mobile_abandoned_car", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
    return typeof digitalData !== 'undefined' && typeof digitalData.cart !== 'undefined';
}
, "deactivationEnabled": false, "id": "17641880293"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/checkout/cart", "match": "simple"}]], "name": "URL Targeting for Fix - Update BOPS Popup on Cart page when all stores are closed", "apiName": "8249343_url_targeting_for_fix__update_bops_popup_on_cart_page_wh", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17790340364"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "custom_code", "value": function jsCondition() {
  return digitalData.product[0].productInfo.isInstallationServiceAvailable === true;
}
}]], "activationType": "polling", "name": "URL Targeting for TEST - Hide Handy", "apiName": "8249343_url_targeting_for_test__hide_handy", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
    return typeof digitalData !== 'undefined';
}
, "deactivationEnabled": false, "id": "17795214248"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/account/order-tracking", "match": "simple"}]], "name": "URL Targeting for Temp - Add order delivery delay message on order tracking for COVID-19 precautions.", "apiName": "8249343_url_targeting_for_temp__add_order_delivery_delay_message", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17812491358"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/checkout/cart", "match": "simple"}]], "name": "URL Targeting for FIX - Hide BOPS killswitch messaging on cart", "apiName": "8249343_url_targeting_for_fix__hide_bops_killswitch_messaging_on", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17816410940"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/gift-cards/", "match": "simple"}]], "name": "URL Targeting for TEMP - Hide general gift cards purchase on gift-cards page.", "apiName": "8249343_url_targeting_for_temp__hide_general_gift_cards_purchase", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17824180618"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "substring"}]], "activationType": "polling", "name": "Product Furniture Page Desktop & Mobile", "apiName": "6216930665_product_furniture_page_desktop__mobile_1_1_2", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://developers.optimizely.com/x/solutions/javascript/topics/dynamic-websites/index.html#polling
 */

function pollingFn() {
  var isFurn = window.digitalData && window.digitalData.page && window.digitalData.page.pageInfo && window.digitalData.page.pageInfo.pageTemplateName.indexOf("furniture")>-1;

	return isFurn;
}
, "deactivationEnabled": false, "id": "17927910371"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/design-collabs/ferrer-vintage/1", "match": "simple"}]], "name": "URL Targeting for FIX COVID - Vintage Messaging Update", "apiName": "8249343_url_targeting_for_covid__vintage_messaging_update", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17938000367"}], "integrationSettings": [], "interestGroups": [{"keywords": ["accessories", "bar", "curtain", "decor", "dinnerware", "drinkware", "flatware", "hardware", "kitchen", "mirror", "serving"], "tagGroupId": "116", "available": true, "id": "197"}, {"keywords": ["console", "daybed", "leather", "ottoman", "pouf", "sectional", "sleeper", "sofa", "tufted"], "tagGroupId": "116", "available": true, "id": "198"}, {"keywords": ["cart", "credenza", "dining", "stools", "table"], "tagGroupId": "116", "available": true, "id": "199"}, {"keywords": ["bistro", "grill", "lounger", "outdoor", "planter", "swing", "umbrella"], "tagGroupId": "116", "available": true, "id": "204"}, {"keywords": ["bed", "canopy", "dresser", "headboard", "nightstand", "wardrobe"], "tagGroupId": "116", "available": true, "id": "205"}, {"keywords": ["conference", "desk", "executive", "file", "filing", "office"], "tagGroupId": "116", "available": true, "id": "206"}], "groups": [], "projectJS": function(){var getQueryParam = function(name) {
   var match = window.location.search.match('[\?|\&]' + name + '=([^&]*)');
   return match ? match[1] : undefined;
};
//cid page activation
window.optimizely = window.optimizely || [];
window.cid = getQueryParam("cid");
if(window.cid){
  console.log("cid detected --> "+window.cid);
  window['optimizely'].push({
		  "type": "page",
		  "pageName": "passthroughLP",
		  "tags": {
    		"cid": cid
  		}	
	});
} else console.log("no cid detected");

// utils
window.__ = window.__ || {};

__.hasClass = function (el, className) {
    return el.classList ?
        el.classList.contains(className) :
        new RegExp('\\b' + className + '\\b').test(el.className);
};

__.addClass = function (el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else if (!__.hasClass(el, className)) {
        el.className += ' ' + className;
    }
};

__.removeClass = function (el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
    }
};

__.loadScript = function (location, callback) {
    var fileRef = document.createElement('script');
    fileRef.setAttribute('type', 'text/javascript');

    if (callback) {
        if (fileRef.readyState) {
            fileRef.onreadystatechange = function () {
                if (
                    fileRef.readyState == 'loaded' ||
                    fileRef.readyState == 'complete'
                ) {
                    fileRef.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            fileRef.onload = function () {
                callback();
            };
        }
    }

    fileRef.setAttribute('src', location);
    document.head.appendChild(fileRef);
};

__.isPhone = (function () {
    var el = document.querySelector('.responsive-layout');
    return el ? el.offsetParent === null : false;
})();

__.insertAfter = function (el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
};

__.insertBefore = function (el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
};
}, "snippetId": "14035710247", "enableForceParameters": false, "experimental": {"trimPages": true}},p=n(134),h="initializeOptimizelyPreview";if(d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return g.projectId})),l.registerFunction("getAccountId",(function(){return g.accountId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var v;v=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],v.push({type:"load",data:g}),a.log("Main / Disabling in favor of the preview client."),n(148).setupPreviewGlobal(),n(148).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:g}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return g.projectId})),f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/public/7871036/s/prod_cb2_akamai/preview.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction(h,(function(t){e(t),l.unregisterFunction(h)}));var _=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();u=t(s.getProjectToken(),_,s.getPreviewLayerIds()),f.addScriptSync(u),n(148).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction(h,(function(t){e(t),l.unregisterFunction(h)})),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(g);r.timeEnd("block")}try{i()}catch(e){try{n(121).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(){s();var e=k.getRumData();return e.extras=e.extras||{},e.extras.beacon={cjsTimeout:!0},e=v.pickBy(e,(function(e){return!v.isUndefined(e)})),a(e)}function r(e){var t=P.getPromise("RUM_FIRST_BEACON");return t?t.then(e):m.makeAsyncRequest("RUM_FIRST_BEACON",e)}function a(e){return v.isEmpty(e)?w.resolve():r((function(){return O.request({url:B,method:"POST",data:e,withCredentials:!0}).then((function(e){return m.resolveRequest("RUM_FIRST_BEACON",e),e}))["catch"]((function(e){throw A.error("POST to client-rum failed:",e),m.rejectRequest("RUM_FIRST_BEACON",e),e}))}))}function o(){var e=y.getCurrentScript();if(e)return e.src}function s(){var e={id:k.getRumId(),v:j,account:x.getAccountId(),project:x.getSnippetId()||x.getProjectId(),snippet:x.getSnippetId(),revision:x.getRevision(),clientVersion:V.getClientVersion(),hasSlave:!1,wxhr:!0};try{e["numBehaviorEvents"]=E.getEvents().length}catch(e){A.debug("Unable to get behavior events for RUM:",e)}v.assign(e,c(),d()),S.dispatch(N.SET_RUM_DATA,{data:e})}function c(){var e=D.getGlobal("performance");if(e){var t,n=k.getScriptSrc();try{if(n){A.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;A.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=v.find(a,(function(e){return r.test(e.name)}))}if(t)return v.mapValues(C.ResourceTimingAttributes,(function(e,n){var i=t[n];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===n?i||[]:void 0}))}catch(e){return}}}function u(){try{return!y.querySelector("body")}catch(e){return null}}function l(){try{D.getGlobal("requestAnimationFrame")((function(){var e=k.getRumData().timebase;S.dispatch(N.SET_RUM_DATA,{data:{render:I.now()-(e||0)}})}))}catch(e){return}}function d(){return F.getDurationsFor(v.values(C.RUMPerformanceTimingAttributes))}function f(){var e=T.keys(),t=v.filter(v.map(e,(function(e){var t=R.getStorageKeyFromKey(e);return t?{key:e,isForeign:R.isForeignKey(e),category:t,size:e.length+T.getItem(e).length}:null}))),n=v.reduce(t,(function(e,t){var n=t.key,i=R.getIdFromKey(n);if(!i)return e;var r=t.isForeign?e.foreign:e.local;return r[i]=!0,e}),{local:{},foreign:{}}),i=v.chain(t).filter({isForeign:!0}).reduce((function(e,t){var n=t.key.split("_")[0];return e[n]=!0,e}),{}).value(),r={local:0,foreign:0},a={local:{},foreign:{}};v.forEach(t,(function(e){var t=e.isForeign?"foreign":"local";r[t]+=e.size,a[t][e.category]||(a[t][e.category]=0),a[t][e.category]+=e.size}));var o={numKeys:T.allKeys().length,sizeKeys:T.allKeys().toString().length,sizeValues:T.allValues().toString().length,idCounts:{local:v.keys(n.local).length,foreign:v.keys(n.foreign).length},foreignOriginCount:v.keys(i).length,byteTotals:r,byteTotalsByCategory:a},s=b.estimateStorage();return s.then((function(e){return v.assign(o,{storageEstimate:e})}))}function g(){var e=D.getGlobal("performance"),t=e?e.timing:{},n=F.getMarks()||{},i=k.getApiData(),r=k.getDOMObservationData(),o=G.get("state").getActiveExperimentIds(),s=k.getFeaturesNeededData(),c=y.parseUri(k.getScriptSrc()),u=k.getRumData()||{},l=u.extras||{};v.assign(l,{apiCalls:i,DOMObservationData:r,paintTimings:h(),activeExperimentIds:o,numPages:U.getNumberOfPages(),snippet:{scheme:c.protocol.slice(0,-1),host:c.host,path:c.pathname},networkInfo:p(),experimental:x.getExperimental(),featuresNeeded:s,beacon:{cjsOnload:!0}});var d=D.getGlobal("Prototype");d&&!v.isUndefined(d.Version)&&(l.prototypeJS=d.Version);var g=!1;g=!0;var _=M.getFrames();_.length&&(l.xdFramesLoaded=_.length);var m={id:k.getRumId(),v:j,project:x.getSnippetId()||x.getProjectId(),navigationTimings:t,userTimings:n,xd:g,apis:v.keys(i),extras:l};f().then((function(e){var t=v.assign(m,{lsMetrics:e});a(t)}))}function p(){var e=D.getGlobal("navigator");if(e&&e.connection)return v.pick(e.connection,["downlink","rtt","effectiveType"])}function h(){var e=D.getGlobal("performance");if(e)try{var t=e.getEntriesByType("paint");if(v.isEmpty(t))return;return v.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}catch(e){return}}var v=n(2),_=n(5),m=n(6),E=n(72),I=n(24),y=n(81),S=n(9),T=n(82).LocalStorage,A=n(23),b=n(90),w=n(12).Promise,R=n(75),D=n(41),O=n(91),N=n(7),C=n(25),L=n(16),P=L.get("stores/async_request"),V=L.get("stores/client_metadata"),x=L.get("stores/global"),k=L.get("stores/rum"),F=L.get("stores/performance"),M=L.get("stores/xdomain"),U=L.get("stores/view_data"),G=n(93),B="https://rum.optimizely.com/rum",z=3e3,j="1.0",H=.01;t.initialize=function(){var e,t=_.generate().replace(/-/g,"");e=Math.random()<H;var n=o();S.dispatch(N.SET_RUM_DATA,{id:t,RumHost:B,inRumSample:e,src:n,data:{id:t,sync:u(),timebase:I.now(),sampleRate:H,url:n}})},t.queueBeacons=function(){return k.getSampleRum()?(l(),y.isLoaded()?D.setTimeout(g,z):D.addEventListener("load",g),new w(function(e,t){D.setTimeout((function(){i().then(e,t)}),z)}).catch((function(e){A.warn("RUM / Error sending data:",e)}))):w.resolve()}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return c(Re(e),gn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function c(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function u(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,c=a}return c}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return I(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function g(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function p(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function h(e){return function(t){return e(t)}}function v(e,t){return Ee(t,(function(t){return e[t]}))}function _(e){return e&&e.Object===Object?e:null}function m(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function E(e){return pi[e]}function I(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function y(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function S(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Vn:t,e>-1&&e%1==0&&e<t}function T(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(jt(e)&&!dr(e)){if(e instanceof R)return e;if(Ri.call(e,"__wrapped__"))return tt(e)}return new R(e)}function R(e,t){this.e=e,this.u=[],this.l=!!t}function D(){}function O(e,t){return C(e,t)&&delete e[t]}function N(e,t){if(Xi){var n=e[t];return n===Dn?An:n}return Ri.call(e,t)?e[t]:An}function C(e,t){return Xi?e[t]!==An:Ri.call(e,t)}function L(e,t,n){e[t]=Xi&&n===An?Dn:n}function P(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function V(){this.d={hash:new D,map:Yi?new Yi:[],string:new D}}function x(e){var t=this.d;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Yi?t.map["delete"](e):W(t.map,e)}function k(e){var t=this.d;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Yi?t.map.get(e):X(t.map,e)}function F(e){var t=this.d;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Yi?t.map.has(e):Q(t.map,e)}function M(e,t){var n=this.d;return Ze(e)?L("string"==typeof e?n.string:n.hash,e,t):Yi?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.d=new P;++t<n;)this.push(e[t])}function G(e,t){var n=e.d;if(Ze(t)){var i=n.d,r="string"==typeof t?i.string:i.hash;return r[t]===Dn}return n.has(t)}function B(e){var t=this.d;if(Ze(e)){var n=t.d,i="string"==typeof e?n.string:n.hash;i[e]=Dn}else t.set(e,Dn)}function z(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function j(){this.d={array:[],map:null}}function H(e){var t=this.d,n=t.array;return n?W(n,e):t.map["delete"](e)}function K(e){var t=this.d,n=t.array;return n?X(n,e):t.map.get(e)}function Y(e){var t=this.d,n=t.array;return n?Q(n,e):t.map.has(e)}function q(e,t){var n=this.d,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new P(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():zi.call(e,n,1),!0}function X(e,t){var n=$(e,t);return n<0?An:e[n][1]}function Q(e,t){return $(e,t)>-1}function $(e,t){for(var n=e.length;n--;)if(Nt(e[n][0],t))return n;return-1}function J(e,t,n){var i=$(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||Nt(e,bi[n])&&!Ri.call(i,n)?t:e}function ee(e,t,n){(n===An||Nt(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Ri.call(e,t)&&Nt(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!zt(e))return e;var c=dr(e);if(c){if(s=Xe(e),!t)return Re(e,s)}else{var u=We(e),l=u==Gn||u==Bn;if(fr(e))return Ne(e,t);if(u==Hn||u==xn||l&&!a){if(y(e))return a?e:{};if(s=Qe(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!gi[u])return a?e:{};s=$e(e,u,t)}}o||(o=new z);var d=o.get(e);return d?d:(o.set(e,s),(c?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!c?Me(e,s):s)}function ae(e){return zt(e)?Gi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Rn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,c=!0,u=e.length,l=[],d=t.length;if(!u)return l;n&&(t=Ee(t,h(n))),i?(a=s,c=!1):t.length>=wn&&(a=G,c=!1,t=new U(t));e:for(;++r<u;){var f=e[r],g=n?n(f):f;if(c&&g===g){for(var p=d;p--;)if(t[p]===g)continue e;l.push(f)}else a(t,g,i)||l.push(f)}return l}function ce(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ue(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Vt(o)&&(n||dr(o)||Lt(o))?t>1?le(o,t-1,n,i):c(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,cn)}function fe(e,t){return e&&nr(e,t,sn)}function ge(e,t){return ue(t,(function(t){return Gt(e[t])}))}function pe(e,t,n,i,r){return e===t||(null==e||null==t||!zt(e)&&!jt(t)?e!==e&&t!==t:he(e,t,pe,n,i,r))}function he(e,t,n,i,r,a){var o=dr(e),s=dr(t),c=kn,u=kn;o||(c=Ni.call(e),c=c==xn?Hn:c),s||(u=Ni.call(t),u=u==xn?Hn:u);var l=c==Hn&&!y(e),d=u==Hn&&!y(t),f=c==u;a||(a=[]);var g=vt(a,(function(t){return t[0]===e}));if(g&&g[1])return g[1]==t;if(a.push([e,t]),f&&!l){var p=o||$t(e)?He(e,t,n,i,r,a):Ke(e,t,c,n,i,r,a);return a.pop(),p}if(!(r&Ln)){var h=l&&Ri.call(e,"__wrapped__"),v=d&&Ri.call(t,"__wrapped__");if(h||v){var p=n(h?e.value():e,v?t.value():t,i,r,a);return a.pop(),p}}if(!f)return!1;var p=Ye(e,t,n,i,r,a);return a.pop(),p}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?Ie:be)(e)}function _e(e){return Hi(Object(e))}function me(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function Ee(e,t){var n=-1,i=Pt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function Ie(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&pe(e[r],n[r],An,Cn|Ln)))return!1}return!0}}function ye(e,t,n,i,r){if(e!==t){var a=dr(t)||$t(t)?An:cn(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),zt(o))r||(r=new z),Se(e,t,s,n,ye,i,r);else{var c=i?i(e[s],o,s+"",e,t,r):An;c===An&&(c=o),ee(e,s,c)}}))}}function Se(e,t,n,i,r,a,o){var s=e[n],c=t[n],u=o.get(c);if(u)return void ee(e,n,u);var l=a?a(s,c,n+"",e,t,o):An,d=l===An;d&&(l=c,dr(c)||$t(c)?dr(s)?l=s:Vt(s)?l=Re(s):(d=!1,l=re(c,!a)):Wt(c)||Lt(c)?Lt(s)?l=tn(s):!zt(s)||i&&Gt(s)?(d=!1,l=re(c,!a)):l=s:d=!1),o.set(c,l),d&&r(l,c,i,a,o),o["delete"](c),ee(e,n,l)}function Te(e,t){return e=Object(e),It(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function be(e){return function(t){return null==t?An:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function Re(e){return we(e,0,e.length)}function De(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Oe(e,t){var n=e;return It(t,(function(e,t){return t.func.apply(t.thisArg,c([e],t.args))}),n)}function Ne(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Ce(e){var t=new e.constructor(e.byteLength);return new ki(t).set(new ki(e)),t}function Le(e){return It(A(e),i,new e.constructor)}function Pe(e){var t=new e.constructor(e.source,ui.exec(e));return t.lastIndex=e.lastIndex,t}function Ve(e){return It(b(e),r,new e.constructor)}function xe(e){return er?Object(er.call(e)):{}}function ke(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Fe(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Rt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Ge(e,t){return function(n,i){if(null==n)return n;if(!Pt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Be(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var c=o[e?s:++r];if(n(a[c],c,a)===!1)break}return t}}function ze(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return zt(i)?i:n}}function je(e,t,n,i){function r(){for(var t=-1,s=arguments.length,c=-1,u=i.length,l=Array(u+s),d=this&&this!==Ti&&this instanceof r?o:e;++c<u;)l[c]=i[c];for(;s--;)l[c++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Rn);var a=t&On,o=ze(e);return r}function He(e,t,n,i,r,a){var o=-1,s=r&Ln,c=r&Cn,u=e.length,l=t.length;if(u!=l&&!(s&&l>u))return!1;for(var d=!0;++o<u;){var f,g=e[o],p=t[o];if(f!==An){if(f)continue;d=!1;break}if(c){if(!De(t,(function(e){return g===e||n(g,e,i,r,a)}))){d=!1;break}}else if(g!==p&&!n(g,p,i,r,a)){d=!1;break}}return d}function Ke(e,t,n,i,r,a,o){switch(n){case Fn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case jn:return e!=+e?t!=+t:e==+t;case Kn:case qn:return e==t+""}return!1}function Ye(e,t,n,i,r,a){var o=r&Ln,s=sn(e),c=s.length,u=sn(t),l=u.length;if(c!=l&&!o)return!1;for(var d=c;d--;){var f=s[d];if(!(o?f in t:Ri.call(t,f)))return!1}for(var g=!0,p=o;++d<c;){f=s[d];var h,v=e[f],_=t[f];if(!(h===An?v===_||n(v,_,i,r,a):h)){g=!1;break}p||(p="constructor"==f)}if(g&&!p){var m=e.constructor,E=t.constructor;m!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof m&&m instanceof m&&"function"==typeof E&&E instanceof E)&&(g=!1)}return g}function qe(e,t){var n=e[t];return Kt(n)?n:An}function We(e){return Ni.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Ri.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function Qe(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function $e(e,t,n){var i=e.constructor;switch(t){case Qn:return Ce(e);case Fn:case Mn:return new i(+e);case $n:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return ke(e,n);case zn:return Le(e);case jn:case qn:return new i(e);case Kn:return Pe(e);case Yn:return Ve(e);case Wn:return xe(e)}}function Je(e){var t=e?e.length:An;return Bt(t)&&(dr(e)||Qt(e)||Lt(e))?p(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bi;return e===n}function tt(e){var t=new R(e.e,e.l);return t.u=Re(e.u),t}function nt(e){return ue(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Pn):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Ki(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ct(e){var t=e?e.length:0;return t?e[t-1]:An}function ut(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.l=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function gt(){return Oe(this.e,this.u)}function pt(e,t,n){return t=n?An:t,ce(e,ve(t))}function ht(e,t){return ue(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function _t(e,t){return tr(e,ie(t))}function mt(e,t,n,i){e=Pt(e)?e:gn(e),n=n&&!i?gr(n):0;var r=e.length;return n<0&&(n=Ki(r+n,0)),Qt(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function Et(e,t){return Ee(e,ve(t))}function It(e,t,n){return g(e,ve(t),n,arguments.length<3,tr)}function yt(e){return null==e?0:(e=Pt(e)?e:sn(e),e.length)}function St(e,t,n){return t=n?An:t,De(e,ve(t))}function Tt(e,t){var n=0;return t=ve(t),Ee(Ee(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return m(e.criteria,t.criteria)||e.index-t.index})),be("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(Rn);return e=gr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function bt(e){if("function"!=typeof e)throw new TypeError(Rn);return function(){return!e.apply(this,arguments)}}function wt(e){return At(2,e)}function Rt(e,t){if("function"!=typeof e)throw new TypeError(Rn);return t=Ki(t===An?e.length-1:gr(t),0),function(){for(var n=arguments,i=-1,r=Ki(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Dt(e){return zt(e)?dr(e)?Re(e):ir(e,sn(e)):e}function Ot(e){return re(e,!0,!0)}function Nt(e,t){return e===t||e!==e&&t!==t}function Ct(e,t){return e>t}function Lt(e){return Vt(e)&&Ri.call(e,"callee")&&(!Bi.call(e,"callee")||Ni.call(e)==xn)}function Pt(e){return null!=e&&Bt(rr(e))&&!Gt(e)}function Vt(e){return jt(e)&&Pt(e)}function xt(e){return e===!0||e===!1||jt(e)&&Ni.call(e)==Fn}function kt(e){return jt(e)&&Ni.call(e)==Mn}function Ft(e){if(Pt(e)&&(dr(e)||Qt(e)||Gt(e.splice)||Lt(e)))return!e.length;for(var t in e)if(Ri.call(e,t))return!1;return!0}function Mt(e,t){return pe(e,t)}function Ut(e){return"number"==typeof e&&ji(e)}function Gt(e){var t=zt(e)?Ni.call(e):"";return t==Gn||t==Bn}function Bt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Vn}function zt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function jt(e){return!!e&&"object"==typeof e}function Ht(e){return qt(e)&&e!=+e}function Kt(e){return null!=e&&(Gt(e)?Li.test(wi.call(e)):jt(e)&&(y(e)?Li:li).test(e))}function Yt(e){return null===e}function qt(e){return"number"==typeof e||jt(e)&&Ni.call(e)==jn}function Wt(e){if(!jt(e)||Ni.call(e)!=Hn||y(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Oi}function Xt(e){return zt(e)&&Ni.call(e)==Kn}function Qt(e){return"string"==typeof e||!dr(e)&&jt(e)&&Ni.call(e)==qn}function $t(e){return jt(e)&&Bt(e.length)&&!!fi[Ni.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Pt(e)?e.length?Re(e):[]:gn(e)}function tn(e){return ir(e,cn(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?hr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Ri.call(e,t)}function sn(e){var t=et(e);if(!t&&!Pt(e))return _e(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Ri.call(e,o)||i&&("length"==o||S(o,a))||t&&"constructor"==o||r.push(o);return r}function cn(e){for(var t=-1,n=et(e),i=me(e),r=i.length,a=Je(e),o=!!a,s=a||[],c=s.length;++t<r;){var u=i[t];o&&("length"==u||S(u,c))||"constructor"==u&&(n||!Ri.call(e,u))||s.push(u)}return s}function un(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,ve(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Gt(i)?i.call(e):i}function gn(e){return e?v(e,sn(e)):[]}function pn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,E):e}function hn(e){return function(){return e}}function vn(e){return e}function _n(e){return Ie(hr({},e))}function mn(e,t,n){var i=sn(t),r=ge(t,i);null!=n||zt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=ge(t,sn(t)));var a=!(zt(n)&&"chain"in n)||n.chain,o=Gt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.l;if(a||t){var n=e(this.e),r=n.u=Re(this.u);return r.push({func:i,args:arguments,thisArg:e}),n.l=t,n}return i.apply(e,c([this.value()],arguments))})})),e}function En(){return Ti._===this&&(Ti._=Ci),this}function In(){}function yn(e){var t=++Di;return nn(e)+t}function Sn(e){return e&&e.length?u(e,vn,Ct):An}function Tn(e){return e&&e.length?u(e,vn,Zt):An}var An,bn="4.6.1",wn=200,Rn="Expected a function",Dn="__lodash_hash_undefined__",On=1,Nn=32,Cn=1,Ln=2,Pn=1/0,Vn=9007199254740991,xn="[object Arguments]",kn="[object Array]",Fn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Gn="[object Function]",Bn="[object GeneratorFunction]",zn="[object Map]",jn="[object Number]",Hn="[object Object]",Kn="[object RegExp]",Yn="[object Set]",qn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",Qn="[object ArrayBuffer]",$n="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ci=/[\\^$.*+?()[\]{}|]/g,ui=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[$n]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[xn]=fi[kn]=fi[Qn]=fi[Fn]=fi[Mn]=fi[Un]=fi[Gn]=fi[zn]=fi[jn]=fi[Hn]=fi[Kn]=fi[Yn]=fi[qn]=fi[Xn]=!1;var gi={};gi[xn]=gi[kn]=gi[Qn]=gi[Fn]=gi[Mn]=gi[$n]=gi[Jn]=gi[Zn]=gi[ei]=gi[ti]=gi[zn]=gi[jn]=gi[Hn]=gi[Kn]=gi[Yn]=gi[qn]=gi[Wn]=gi[ni]=gi[ii]=gi[ri]=gi[ai]=!0,gi[Un]=gi[Gn]=gi[Xn]=!1;var pi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},hi={"function":!0,object:!0},vi=hi[typeof t]&&t&&!t.nodeType?t:An,_i=hi[typeof e]&&e&&!e.nodeType?e:An,mi=_i&&_i.exports===vi?vi:An,Ei=_(vi&&_i&&"object"==typeof n&&n),Ii=_(hi[typeof self]&&self),yi=_(hi[typeof window]&&window),Si=_(hi[typeof this]&&this),Ti=Ei||yi!==(Si&&Si.window)&&yi||Ii||Si||Function("return this")(),Ai=Array.prototype,bi=Object.prototype,wi=Function.prototype.toString,Ri=bi.hasOwnProperty,Di=0,Oi=wi.call(Object),Ni=bi.toString,Ci=Ti._,Li=RegExp("^"+wi.call(Ri).replace(ci,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Pi=mi?An:An,Vi=Ti.Reflect,xi=Ti.Symbol,ki=Ti.Uint8Array,Fi=Vi?Vi.enumerate:An,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Gi=Object.create,Bi=bi.propertyIsEnumerable,zi=Ai.splice,ji=Ti.isFinite,Hi=Object.keys,Ki=Math.max,Yi=qe(Ti,"Map"),qi=qe(Ti,"Set"),Wi=qe(Ti,"WeakMap"),Xi=qe(Object,"create"),Qi=Yi?wi.call(Yi):"",$i=qi?wi.call(qi):"",Ji=Wi?wi.call(Wi):"",Zi=xi?xi.prototype:An,er=Zi?Zi.valueOf:An,tr=Ge(fe),nr=Be();Fi&&!Bi.call({valueOf:1},"valueOf")&&(me=function(e){return T(Fi(e))});var ir=Fe,rr=be("length"),ar=Ui||function(){return[]};(Yi&&We(new Yi)!=zn||qi&&We(new qi)!=Yn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=Ni.call(e),n=t==Hn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case Qi:return zn;case $i:return Yn;case Ji:return Xn}return t});var or=Rt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Rt((function(e,t,n){return je(e,On|Nn,t,n)})),cr=Rt((function(e,t){return oe(e,1,t)})),ur=Rt((function(e,t,n){return oe(e,pr(t)||0,n)})),lr=Rt((function(e,t){return je(e,Nn,An,t)})),dr=Array.isArray,fr=Pi?function(e){return e instanceof Pi}:hn(!1),gr=Number,pr=Number,hr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,cn(t),e)})),_r=Ue((function(e,t,n,i){Fe(t,cn(t),e,i)})),mr=Rt((function(e){return e.push(An,Z),_r.apply(An,e)})),Er=Ue((function(e,t,n){ye(e,t,n)})),Ir=Rt((function(e,t){return null==e?{}:(t=Ee(le(t,1),String),Te(e,se(cn(e),t)))})),yr=Rt((function(e,t){return null==e?{}:Te(e,le(t,1))})),Sr=ve;R.prototype=ae(w.prototype),R.prototype.constructor=R,D.prototype=Xi?Xi(null):bi,P.prototype.clear=V,P.prototype["delete"]=x,P.prototype.get=k,P.prototype.has=F,P.prototype.set=M,U.prototype.push=B,z.prototype.clear=j,z.prototype["delete"]=H,z.prototype.get=K,z.prototype.has=Y,z.prototype.set=q,w.assign=hr,w.assignIn=vr,w.before=At,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=mr,w.defer=cr,w.delay=ur,w.filter=ht,w.flatten=rt,w.flattenDeep=at,w.iteratee=Sr,w.keys=sn,w.map=Et,w.mapValues=un,w.matches=_n,w.merge=Er,w.mixin=mn,w.negate=bt,w.omit=Ir,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=yr,w.pickBy=dn,w.slice=ut,w.sortBy=Tt,w.tap=dt,w.thru=ft,w.toArray=en,w.values=gn,w.extend=vr,mn(w,w),w.clone=Dt,w.cloneDeep=Ot,w.escape=pn,w.every=pt,w.find=vt,w.findIndex=it,w.forEach=_t,w.forOwn=an,w.has=on,w.head=ot,w.identity=vn,w.includes=mt,w.indexOf=st,w.isArguments=Lt,w.isArray=dr,w.isBoolean=xt,w.isDate=kt,w.isEmpty=Ft,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Gt,w.isNaN=Ht,w.isNull=Yt,w.isNumber=qt,w.isObject=zt,w.isRegExp=Xt,w.isString=Qt,w.isUndefined=Jt,w.last=ct,w.max=Sn,w.min=Tn,w.noConflict=En,w.noop=In,w.reduce=It,w.result=fn,w.size=yt,w.some=St,w.uniqueId=yn,w.each=_t,w.first=ot,mn(w,(function(){var e={};return fe(w,(function(t,n){Ri.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=bn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.l?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=gt,(yi||Ii||{})._=w,vi&&_i&&(mi&&((_i.exports=w)._=w),vi._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7),r=n(9),a=n(12).Promise,o=n(16),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,c,u=new a(function(e,t){o=e,c=t});return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:e,promise:u,resolver:o,rejecter:c}),t&&t(),u},t.resolveRequest=function(e,t){r.dispatch(i.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(i.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){var i=n(8);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,
ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(10);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.f={},this.g={},this.I=0,this.S=[],this.T=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(2),o=n(11);i.prototype.registerStores=function(e){a.forOwn(e,a.bind((function(e,t){this.f[t]=new o(t,this,e)}),this))},i.prototype.getStore=function(e){return this.f[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,a.each(this.S,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,(function(n){n.A(e,t)})),a.each(this.T,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,a.bind((function(e,t){e.hasChanges()&&this.g[t]&&(e.resetChange(),a.each(this.g[t],(function(t){t(e)})))}),this))},i.prototype.reset=function(){this.g={},a.forOwn(this.f,(function(e,t){e.b()}))},i.prototype.getState=function(){var e={};return a.forOwn(this.f,(function(t,n){e[n]=t.w()})),e},i.prototype.onPreAction=function(e){var t=this.S;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.T;return t.push(e),r(t,e)},i.prototype.R=function(e,t){this.g[e]||(this.g[e]=[]),this.g[e].push(t);var n=this.g[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.D=e,this.O=t,this.N=0,this.C=!1,this.L={},r.extend(this,n),this.P={},this.initialize&&this.initialize()}var r=n(2);i.prototype.A=function(e,t){var n=this.L[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.w=function(){return r.cloneDeep(this.P)},i.prototype.on=function(e,t){this.L[e]=r.bind(t,this)},i.prototype.observe=function(e){return this.O.R(this.D,e)},i.prototype.emitChange=function(){this.C=!0,this.N++},i.prototype.hasChanges=function(){return this.C},i.prototype.resetChange=function(){this.C=!1},i.prototype.getStateId=function(){return this.N},i.prototype.b=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){e.exports=n(13)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){Q=e}function s(){return function(){return t.nextTick(f)}}function c(){return"undefined"!=typeof W?function(){W(f)}:d()}function u(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<q;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}q=0}function g(){try{var e=n(15);return W=e.runOnLoop||e.runOnContext,c()}catch(e){return d()}}function p(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&x(r);var a=i._state;return a?!(function(){var e=n[a-1];Q((function(){return L(a,r,e,i._result)}))})():D(i,r,e,t),r}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return A(n,e),n}function v(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function m(){return new TypeError("A promises callback cannot return that same promise.")}function E(e){try{return e.then}catch(e){return ce.error=e,ce}}function I(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function y(e,t,n){Q((function(e){var i=!1,r=I(n,t,(function(n){i||(i=!0,t!==n?A(e,n):w(e,n))}),(function(t){i||(i=!0,R(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,R(e,r))}),e)}function S(e,t){t._state===oe?w(e,t._result):t._state===se?R(e,t._result):D(t,void 0,(function(t){return A(e,t)}),(function(t){return R(e,t)}))}function T(e,t,n){t.constructor===e.constructor&&n===p&&t.constructor.resolve===h?S(e,t):n===ce?(R(e,ce.error),ce.error=null):void 0===n?w(e,t):r(n)?y(e,t,n):w(e,t)}function A(t,n){t===n?R(t,_()):e(n)?T(t,n,E(n)):w(t,n)}function b(e){e._onerror&&e._onerror(e._result),O(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&Q(O,e))}function R(e,t){e._state===ae&&(e._state=se,e._result=t,Q(b,e))}function D(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&Q(O,e)}function O(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?L(n,i,r,a):r(a);e._subscribers.length=0}}function N(){this.error=null}function C(e,t){try{return e(t)}catch(e){return ue.error=e,ue}}function L(e,t,n,i){var a=r(n),o=void 0,s=void 0,c=void 0,u=void 0;if(a){if(o=C(n,i),o===ue?(u=!0,s=o.error,o.error=null):c=!0,t===o)return void R(t,m())}else o=i,c=!0;t._state!==ae||(a&&c?A(t,o):u?R(t,s):e===oe?w(t,o):e===se&&R(t,o))}function P(e,t){try{t((function(t){A(e,t)}),(function(t){R(e,t)}))}catch(t){R(e,t)}}function V(){return le++}function x(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function k(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||x(this.promise),Y(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):R(this.promise,F())}function F(){return new Error("Array Methods must be provided an Array")}function M(e){return new k(this,e).promise}function U(e){var t=this;return new t(Y(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function G(e){var t=this,n=new t(v);return R(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function j(e){this[re]=V(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&B(),this instanceof j?P(this,e):z())}function H(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=j}var K=void 0;K=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var Y=K,q=0,W=void 0,X=void 0,Q=function(e,t){ne[q]=e,ne[q+1]=t,q+=2,2===q&&(X?X(f):ie())},$="undefined"!=typeof window?window:void 0,J=$||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?u():te?l():void 0===$?g():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ce=new N,ue=new N,le=0;return k.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},k.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===h){var r=E(e);if(r===p&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===j){var a=new n(v);T(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},k.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?R(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},k.prototype._willSettleAt=function(e,t){var n=this;D(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},j.all=M,j.race=U,j.resolve=h,j.reject=G,j._setScheduler=a,j._setAsap=o,j._asap=Q,j.prototype={constructor:j,then:p,"catch":function(e){return this.then(null,e)}},j.polyfill=H,j.Promise=j,j}))}).call(t,n(14),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){h&&g&&(h=!1,g.length?p=g.concat(p):v=-1,p.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=p.length;t;){for(g=p,p=[];++v<t;)g&&g[v].run();v=-1,t=p.length}g=null,h=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var g,p=[],h=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new c(e,t)),1!==p.length||h||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){var i=n(2),r=n(17),a=n(9),o=n(18),s=r.create(),c={action_data:n(21),async_request:n(27),audience_data:n(28),change_data:n(29),cleanup:n(30),client_metadata:n(31),cookie_options:n(33),event_data:n(34),event_emitter:n(35),dimension_data:n(36),directive:n(37),global:n(38),global_state:n(39),history:n(40),integration_settings:n(42),layer:n(43),layer_data:n(44),log:n(46),observed_redirect:n(47),pending_events:n(48),performance:n(49),plugins:n(50),provider_status:n(51),pending_redirect:n(52),rum:n(53),sandbox:n(54),session:n(55),tracker_optimizely:n(56),ua_data:n(57),view:n(58),view_data:n(59),visitor:n(60),visitor_attribute_entity:n(61),visitor_events:n(62),visitor_events_manager:n(67),visitor_id:n(68),visitor_bucketing:n(69),xdomain:n(70)};c["group_data"]=n(71),a.registerStores(c),i.forOwn(c,(function(e,t){s.register("stores/"+t,a.getStore(t))})),s.register("core/plugins/matchers/key_value",o),e.exports=s}),(function(e,t,n){function i(){this.V={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.V[e])throw new Error("Module already registered for: "+e);this.V[e]=t},i.prototype.get=function(e){return this.V[e]},i.prototype.getModuleKeys=function(){var e=this.V;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,r.bind(this.get,this));return i.apply(null,a)},i.prototype.reset=function(){this.V={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(19).getFieldValue,a=n(20);e.exports=function(e,t){var n=r(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(a.hasMatch,t.value,t.match)):a.hasMatch(t.value,t.match,n)}}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){i.isArray(t)||(t=[t]);for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n},t.setFieldValue=function(e,t,n){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=e,a=0;a<t.length-1;a++){var o=t[a];i.isObject(r[o])||(r[o]={}),r=r[o]}r[t[t.length-1]]=n}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var c=e.split(":"),u=parseFloat(c[0]),l=parseFloat(c[1]),d=parseFloat(n);return d>=u&&d<=l;default:return!1}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(23);e.exports={initialize:function(){this.P={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.k),this.on(r.ACTION_EXECUTED,this.F),this.on(r.SET_CHANGE_APPLIER,this.M),this.on(r.REMOVE_ACTION_STATE,this.U)},k:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.P.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.P.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,c=r.id+":"+o.id+":"+s;n={id:c,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.P.actions[c]=n}))}))}))})),this.emitChange())},F:function(e){var t=e.actionId;i.isUndefined(t)||this.P.actionState[t]||(this.P.actionState[t]={})},M:function(e){var t=e.actionId,n=e.changeId;return this.P.actionState[t]?void(this.P.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},U:function(e){delete this.P.actionState[e.actionId]},get:function(e){return a.safeReference(this.P.actions[e])},getActionState:function(e){return a.safeReference(this.P.actionState[e])},getByChangeId:function(e){return i.find(this.P.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.P.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.P.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.P.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.P.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(7),o=n(24),s=n(25),c=n(9),u=n(26);i.prototype.G=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.B(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.G()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=u.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};c.dispatch(a.LOG,n)},i.prototype.flush=function(){var e=n(16),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,r.bind((function(e){this.z(e.logLevel,e.logMessage,!0)}),this))},i.prototype.z=function(e,t,n){var i,a=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,a=s.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,a=s.LogLevel.DEBUG;break;case s.LogLevel.ERROR:i=console.error;break;case s.LogLevel.WARN:i=console.warn;break;case s.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.G()&&!this.shouldLog(a)||(r.isArray(t)&&r.isString(t[0])&&(t=this.j(t)),this.storeLog(e,t)),i&&this.shouldLog(a)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.z(s.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.z(s.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.j([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(s.LogLevel.INFO,e)},i.prototype.warn=function(){this.z(s.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.z(s.LogLevel.ERROR,[this.H(),e]),this.z(s.LogLevel.INFO,[e.stack])):this.z(s.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.z("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.z("GROUPEND",[].slice.call(arguments))},i.prototype.j=function(e){var t=this.H().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.H=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.B=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(s.LogLevel[e]))?s.LogLevel[e]:null},e.exports=new i}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(2),r=n(8);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(r.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={},this.on(i.REGISTER_ASYNC_DEFERRED,this.K),this.on(i.RESOLVE_DEFERRED,this.Y),this.on(i.REJECT_DEFERRED,this.q)},getRequest:function(e){return this.P[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},K:function(e){this.P[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},Y:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},q:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k)},k:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getAudiencesMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getAudienceName:function(e){var t=i.find(i.values(this.P),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.ADD_CHANGE,this.W),this.on(r.DATA_LOADED,this.k)},getChange:function(e){return this.P[e]},k:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,i.bind(this.W,this))},W:function(e){a.deepFreeze(e),this.P[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.P={},i.each(a.Lifecycle,i.bind((function(e){this.P[e]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.X),this.on(r.CLEAR_CLEANUP_FN,this.Q)},getCleanupFns:function(e){return i.cloneDeep(this.P[e])},X:function(e){this.P[e.lifecycle].push(e.cleanupFn),this.emitChange()},Q:function(e){var t=this.P[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.P[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(7),r=n(32);e.exports={initialize:function(){this.P={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.$),this.on(i.SET_CLIENT_VERSION,this.J)},getClientName:function(){return this.P.name},getClientVersion:function(){return this.P.version},$:function(e){e&&(this.P.name=e),this.emitChange()},J:function(e){e&&(this.P.version=e),this.emitChange()}}}),(function(e,t,n){t.VERSION="0.140.0",t.NAME="js"}),(function(e,t,n){var i=n(7),r=15552e3,a=!0;e.exports={initialize:function(){this.P={currentDomain:null,defaultAgeSeconds:r,autoRefresh:a},this.on(i.SET_COOKIE_DOMAIN,this.Z),this.on(i.SET_COOKIE_AGE,this.ee),this.on(i.SET_COOKIE_AUTO_REFRESH,this.te)},getCurrentDomain:function(){return this.P.currentDomain},getDefaultAgeInSeconds:function(){return this.P.defaultAgeSeconds},getAutoRefresh:function(){return this.P.autoRefresh},Z:function(e){this.P.currentDomain=e,this.emitChange()},ee:function(e){this.P.defaultAgeSeconds=e,this.emitChange()},te:function(e){this.P.autoRefresh=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k)},getAll:function(){return a.safeReference(i.values(this.P))},getEventsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.P,{pageId:e}))},k:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,i.bind((function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(7),o="|";e.exports={initialize:function(){this.P={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.ne),this.on(a.REMOVE_EMITTER_HANDLER,this.re)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,r.bind((function(e){var t=i(e),n=this.P.handlers[t];n&&(a=a.concat(n))}),this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},ne:function(e){var t=i(e.filter);this.P.handlers[t]||(this.P.handlers[t]=[]),this.P.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},re:function(e){var t=!1,n=e.token;r.forOwn(this.P.handlers,r.bind((function(e,i){var a=r.filter(e,(function(e){return e.token!==n}));a.length!==e.length&&(t=!0,this.P.handlers[i]=a)}),this)),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k)},k:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getById:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.ae)},getAll:function(){return i.cloneDeep(this.P)},conflictInObservingChanges:function(){return!1},isDisabled:function(){return this.P.disabled},isEditor:function(){return this.P.isEditor},clientHasAlreadyInitialized:function(){return this.P.alreadyInitialized},getForceAudienceIds:function(){return this.P.forceAudienceIds},getForceVariationIds:function(){return this.P.forceVariationIds},getPreviewLayerIds:function(){return this.P.previewLayerIds},getProjectToken:function(){return this.P.projectToken},getForceTracking:function(){return this.P.forceTracking},shouldActivate:function(){return!this.P.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.P.isPreview},shouldBootstrapDataForEditor:function(){return this.P.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.P.isPreview||this.P.isLegacyPreview||!this.getProjectToken()||this.P.isEditor)},shouldBailForDesktopApp:function(){return!this.P.isEditor&&this.P.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.P.isSlave&&!this.P.isEditor&&this.P.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return!1},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.P.shouldOptOut},shouldSendTrackingData:function(){return!this.P.trackingDisabled&&(!!this.P.forceTracking||!this.P.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.P.isSlave},isRunningInDesktopApp:function(){return this.P.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.P.isRunningInV2Editor},ae:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.oe),this.on(r.ACTIVATE,this.se),this.on(r.RECORD_GLOBAL_DECISION,this.ce),this.on(r.SET_DOMCONTENTLOADED,this.ue)},getRevision:function(){return this.P.revision},getGlobalHoldbackThreshold:function(){return this.P.holdback},getProjectId:function(){return this.P.projectId},getSnippetId:function(){return this.P.snippetId},getAccountId:function(){return this.P.accountId},getNamespace:function(){return this.P.namespace},getActivationId:function(){return this.P.activationId},getActivationTimestamp:function(){return this.P.activationTimestamp},getAnonymizeIP:function(){return this.P.anonymizeIP},isGlobalHoldback:function(){return!!this.P.isGlobalHoldback},getListTargetingKeys:function(){return this.P.listTargetingKeys.slice()},getDCPServiceId:function(){return this.P.dcpServiceId},getDCPKeyfieldLocators:function(){return this.P.dcpKeyfieldLocators},getRecommenderServices:function(){return this.P.recommenderServices},getProjectJS:function(){return this.P.projectJS},getPlugins:function(){return this.P.plugins},getExperimental:function(){return a.safeReference(this.P.experimental)},domContentLoadedHasFired:function(){return this.P.domContentLoaded},se:function(e){this.P.activationId=e.activationId,this.P.activationTimestamp=e.activationTimestamp,this.P.isGlobalHoldback=null},ce:function(e){var t=e.isGlobalHoldback;if(null!==this.P.isGlobalHoldback&&this.P.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.P.isGlobalHoldback=t,this.emitChange()},oe:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){var n={listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.P,n,t),this.emitChange()}},ue:function(){this.P.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.le)},getEffectiveReferrer:function(){return this.P.effectiveReferrer},getEffectiveVariationId:function(){return this.P.effectiveVariationId},le:function(e){i.isUndefined(e.effectiveReferrer)||(this.P.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.P.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(41);e.exports={initialize:function(){this.P={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.de),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.fe)},getOriginalPushState:function(){return this.P.originalPushState},getOriginalReplaceState:function(){return this.P.originalReplaceState},de:function(){this.P.originalPushState||(this.P.originalPushState=i.bind(a.getGlobal("history").pushState,a.getGlobal("history")))},fe:function(){this.P.originalReplaceState||(this.P.originalReplaceState=i.bind(a.getGlobal("history").replaceState,a.getGlobal("history")))}}}),(function(e,t,n){var i=n(2),r=n(23);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(e){alert(e)},t.setTimeout=function(e,t){return setTimeout((function(){try{e()}catch(e){r.warn("Deferred function threw error:",e)}}),t)},t.setInterval=function(e,t){return setInterval((function(){try{e()}catch(e){r.warn("Polling function threw error:",e)}}),t)}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k),this.on(r.SET_INTEGRATION_SETTINGS,this.ge)},k:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())},ge:function(e){var t=this.P[e.id];t?i.extend(t,e):this.P[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.P))},get:function(e){return i.cloneDeep(this.P[e])},getReference:function(e){return this.P[e]}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o="*";e.exports={initialize:function(){this.P={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.pe),this.on(r.RECORD_LAYER_DECISION,this.he),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.ve)},getLayerState:function(e,t){if(this.P[e]){var n=this.P[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.P)i.forEach(this.P[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},getLayerStatesForAnalytics:function(){var e=[];for(var t in this.P)i.forEach(this.P[t],(function(t){e.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return e},pe:function(e){e.merge||(this.P={}),i.each(e.layerStates,i.bind((function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.P[t];if(i.isUndefined(r))this.P[t]={},this.P[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.P[t][n]=e)}}),this)),
this.emitChange()},he:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decision:e.decision,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null},n=this.P[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.P[e.layerId]=n,this.emitChange()},ve:function(e){var t=e.layerId,n=e.pageId||o;return this.P[t]?this.P[t][n]?(this.P[t][n].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(45);e.exports={initialize:function(){this.P={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.k)},k:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.P.variations[e.id]=e})),t.P.experiments[n.id]=n})),a.deepFreeze(e),t.P.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.P.layers))},getCampaignsMap:function(){return a.safeReference(this.P.layers)},getExperimentsMap:function(){return a.safeReference(this.P.experiments)},getVariationsMap:function(){return a.safeReference(this.P.variations)},getCount:function(){return i.keys(this.P.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(this.P.layers,(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.P.layers[e])},getLayerByExperimentId:function(e){var t=i.find(this.P.layers,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(t)},getExperimentByVariationId:function(e){var t;return i.some(this.P.layers,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={logs:[]},this.on(i.LOG,this._e)},getLogs:function(){return this.P.logs},_e:function(e){this.P.logs.push(e),this.emitChange()},w:function(){return this.P.logs.slice()}}}),(function(e,t,n){var i=n(7),r=n(22);e.exports={initialize:function(){this.P={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.me),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Ee)},get:function(){return r.safeReference(this.P.data)},hasTracked:function(){return this.P.hasTracked},me:function(e){r.deepFreeze(e),this.P.data=e,this.P.hasTracked=!1,this.emitChange()},Ee:function(){this.P.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26),o=1e3;e.exports={initialize:function(){this.P={},this.on(r.SET_PENDING_EVENT,this.Ie),this.on(r.REMOVE_PENDING_EVENT,this.ye),this.on(r.LOAD_PENDING_EVENTS,this.Se)},getEvents:function(){return this.P},getEventsString:function(){return a.stringify(this.P)},Ie:function(e){i.keys(this.P).length>=o&&this.Te();var t=e.id,n=e.retryCount;this.P[t]&&this.P[t].retryCount===n||(this.P[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},ye:function(e){delete this.P[e.id],this.emitChange()},Se:function(e){this.P=e.events,this.Te(),this.emitChange()},Te:function(){for(var e=i.sortBy(this.P,"timeStamp"),t=0;t<=e.length-o;t++)delete this.P[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.P={},this.P[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Ae)},Ae:function(e){i.isUndefined(this.P[a.PerformanceData.performance_marks][e.name])&&(this.P[a.PerformanceData.performance_marks][e.name]=[]),this.P[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.P[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,i.bind((function(e,t){var n=this.P[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}),this),{})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25),o=n(23);e.exports={initialize:function(){this.P=i.mapValues(a.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.be)},be:function(e){var t=e.type,n=e.name,i=e.plugin;if(!t||!n)throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.P[t])throw new Error("Invalid plugin type specified: "+t);this.P[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.P[e])return this.P[e];throw new Error("Invalid plugin type: "+e)}return this.P},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.we)},getPendingAttributeValue:function(e){return e=i.isArray(e)?e.concat("pending"):[e,"pending"],a.getFieldValue(this.P,e)},we:function(e){a.setFieldValue(this.P,e.key,{pending:e.pending}),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.me)},isExpectingRedirect:function(){return i.isString(this.P.layerId)},getLayerId:function(){return this.P.layerId},me:function(e){this.isExpectingRedirect()||(this.P.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.Re),this.on(r.RECORD_API_USAGE,this.De),this.on(r.INITIALIZE_CHANGE_METRICS,this.Oe),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.Ne),this.on(r.RECORD_AUDIENCE_USAGE,this.Ce),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.Le),this.on(r.RECORD_CHANGE_OVERHEATED,this.Pe),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.Ve),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.xe),this.on(r.RECORD_INTEGRATION_USAGE,this.ke),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.Fe),this.on(r.RECORD_LAYER_POLICY_USAGE,this.Me),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.Ue)},Re:function(e){i.merge(this.P,e),this.emitChange()},De:function(e){this.P.apis[e.methodName]||(this.P.apis[e.methodName]=0),this.P.apis[e.methodName]++,this.emitChange()},Oe:function(){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0)},Le:function(e){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),e.changeMacrotaskRate>this.P.data.extras.changeMacrotaskRate&&(this.P.data.extras.changeMacrotaskRate=e.changeMacrotaskRate),this.emitChange()},Pe:function(){i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0),this.P.data.extras.numOverheatedChanges++,this.emitChange()},xe:function(e){this.P.DOMObservation[e.counterName]||(this.P.DOMObservation[e.counterName]=0),this.P.DOMObservation[e.counterName]++,this.emitChange()},Ge:function(e,t,n){i.isUndefined(this.P.featuresNeeded[e])&&(this.P.featuresNeeded[e]={});var r=this.P.featuresNeeded[e];i.each(t,(function(e){r[e]||(r[e]={}),r[e][n]||(r[e][n]=!0)}))},ke:function(e){this.Ge("integrations",e.integrations,e.layerId)},Ve:function(e){this.Ge("changeTypes",e.changeTypes,e.layerId)},Ne:function(e){this.Ge("activationTypes",[e.activationType],e.entityId),this.emitChange()},Ue:function(e){this.Ge("viewFeatures",e.featuresUsed,e.entityId),this.emitChange()},Fe:function(e){this.Ge("layerFeatures",[e.feature],e.entityId),this.emitChange()},Me:function(e){this.Ge("policy",[e.policy],e.layerId),this.emitChange()},Ce:function(e){this.Ge("audiences",e.audienceTypes,e.layerId),this.emitChange()},getSampleRum:function(){return this.P.inRumSample},getRumId:function(){return this.P.id},getRumHost:function(){return this.P.RumHost},getApiData:function(){return this.P.apis},getDOMObservationData:function(){return this.P.DOMObservation},getRumData:function(){return i.cloneDeep(this.P.data)},getScriptSrc:function(){return this.P.src},getFeaturesNeededData:function(){var e=this.P.featuresNeeded,t={};return i.forOwn(e,(function(e,n){var r=i.keys(e);i.isEmpty(r)||(t[n]={}),i.forEach(r,(function(r){t[n][r]=i.keys(e[r]).length}))})),t}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.Be)},Be:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.P.natives=e.sandboxedFunctions,this.P.initialized=!0,this.emitChange()},getAll:function(){return this.P.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.P.natives[e]||null},isInitialized:function(){return this.P.initialized}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(5),s=18e5;e.exports={initialize:function(){this.P={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.ze),this.on(r.LOAD_SESSION_STATE,this.je)},getState:function(){return i.cloneDeep(this.P)},getSessionId:function(){return this.P.sessionId},je:function(e){this.P.sessionId=e.sessionId,this.P.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},ze:function(){var e=a.now(),t=this.P.lastSessionTimestamp;(!this.P.sessionId||e-t>s)&&(this.P.sessionId=o.generate()),this.P.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.He(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Ke),this.on(r.REGISTER_PREVIOUS_BATCH,this.Ye),this.on(r.REGISTER_TRACKER_VISITOR,this.qe),this.on(r.REGISTER_TRACKER_EVENT,this.We),this.on(r.REGISTER_TRACKER_DECISION,this.Xe),this.on(r.RESET_TRACKER_EVENTS,this.Qe),this.on(r.RESET_TRACKER_STORE,this.He),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.$e),this.on(r.SET_TRACKER_POLLING,this.Je),this.on(r.SET_TRACKER_BATCHING,this.Ze),this.on(r.SET_TRACKER_SEND_EVENTS,this.et),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.tt),this.on(r.SET_TRACKER_DIRTY,this.nt),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.it)},getPersistableState:function(){return this.P.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.P.data,decisions:this.P.decisions,decisionEvents:this.P.decisionEvents,previousBatches:this.P.previousBatches}:{}:null},tt:function(e){i.isEmpty(this.P.data)||i.isEmpty(e.data)||(this.Ke(),this.P.previousBatches.push(this.getEventBatch())),this.P.data=e.data||{},this.P.decisions=e.decisions||[],this.P.decisionEvents=e.decisionEvents||[],i.isEmpty(this.P.previousBatches)||i.isEmpty(e.previousBatches)?this.P.previousBatches=e.previousBatches||[]:this.P.previousBatches=this.P.previousBatches.concat(e.previousBatches),this.emitChange()},nt:function(e){this.P.isDirty=e,this.emitChange()},We:function(e){var t=this.rt();!i.isEmpty(t.snapshots)&&i.isEmpty(this.P.decisionEvents)||this.at(),this.ot().events.push(e.event),this.P.decisions=e.decisions,this.nt(!0)},Xe:function(e){this.P.decisionEvents.push(e.decisionEvent),this.P.decisions=e.decisions,this.nt(!0)},qe:function(e){i.isEmpty(this.P.data)?this.P.data=e.data:this.Ke(),this.P.data.visitors.push(e.visitor),this.P.decisions=e.decisions,this.P.decisionEvents=[],this.nt(!0)},Ye:function(e){this.P.previousBatches.push(e),this.nt(!0)},He:function(){this.P={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Qe:function(){var e=this.rt();this.P.data.visitors=[e],e.snapshots=[],this.nt(!0)},$e:function(){this.P.previousBatches=[],this.nt(!0)},Je:function(e){this.P.polling=e,this.emitChange()},Ze:function(e){this.P.shouldBatch=e,this.emitChange()},et:function(e){this.P.canSend=e,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.P.data)},getPreviousBatches:function(){return i.cloneDeep(this.P.previousBatches)},st:function(){return this.P.decisionEvents.slice()},ct:function(){this.P.decisionEvents=[]},ut:function(){return this.P.decisions.slice()},isPolling:function(){return this.P.polling},shouldBatch:function(){return this.P.shouldBatch},ot:function(){return i.last(this.rt().snapshots)},rt:function(){return i.last(this.P.data.visitors)},at:function(){var e=this.st(),t=this.rt();t.snapshots.push({decisions:this.ut(),events:e}),this.ct(),this.nt(!0)},Ke:function(){this.P.decisionEvents.length>0&&this.at()},hasEventsToSend:function(){if(!i.isEmpty(this.P.decisionEvents))return!0;if(!i.isEmpty(this.P.data)){var e=i.some(this.P.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.P.previousBatches)},canSend:function(){return this.P.canSend},it:function(e){var t=this.rt();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.SET_UA_DATA,this.k)},k:function(e){i.isEmpty(this.P)&&(this.P=e.data)},get:function(){return i.cloneDeep(this.P)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o=!1,s={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.P=i.cloneDeep(s),this.on(r.REGISTER_VIEWS,this.dt),this.on(r.SET_VIEW_ACTIVE_STATE,this.ft),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.pt),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.ht),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.vt),this.on(r.SET_GLOBAL_TAGS,this._t),this.on(r.RESET_VIEW_STATES,this.mt),this.on(r.SET_VIEW_BATCHING,this.Ze)},getAll:function(){var e={};for(var t in this.P.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.P.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.P.viewStates[e]),n=this.P.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.P.viewStates[e]?this.P.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.P.viewStates,i.bind((function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}),this),[])},isViewActive:function(e){var t=this.P.viewStates[e];return t||a.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.P.globalTags)},mt:function(){this.P.viewStates={},this.emitChange()},dt:function(e){i.each(e.views,i.bind((function(e){var t=e.id;o&&this.P.viewStates[t]||(this.P.viewStates[t]={id:t,isActive:i.isBoolean(e.isActive)?e.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}})}),this)),this.emitChange()},ft:function(e){var t=e.view.id;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);this.P.viewStates[t].isActive=e.isActive,e.isActive?this.P.viewStates[t].activatedTimestamp=e.timestamp:(this.P.viewStates[t].parsedMetadata={},this.P.viewStates[t].userSuppliedMetadata={}),this.emitChange()},pt:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.P.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},ht:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.P.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},vt:function(e){var t=e.pageId;this.P.viewStates[t]&&(this.P.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},_t:function(e){i.extend(this.P.globalTags,e),this.emitChange()},Ze:function(e){this.P.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.k)},getAll:function(){return a.safeReference(i.values(this.P.views))},getPagesMap:function(){return a.safeReference(this.P.views)},get:function(e){return a.safeReference(this.P.views[e])},getByApiName:function(e){return a.safeReference(this.P.apiNamesToViews[e])},apiNameToId:function(e){var t=this.P.apiNamesToViews[e];if(t)return t.id},idToApiName:function(e){var t=this.P.views[e];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.P.views).length},getAllViewsForActivationType:function(e){return i.filter(this.P.views,{activationType:e})},k:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,i.bind((function(e){a.deepFreeze(e),this.P.views[e.id]=e,this.P.apiNamesToViews[e.apiName]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Et),this.on(r.SET_VISITOR_ATTRIBUTES,this.It),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.yt)},getVisitorProfile:function(){return this.P.profile},getVisitorProfileMetadata:function(){return this.P.metadata},getAttribute:function(e){var t=this.P.profile;return i.cloneDeep(a.getFieldValue(t,e))},getAttributeMetadata:function(e){return i.cloneDeep(this.P.metadata[e])},getVisitorIdFromAPI:function(){return this.P.visitorId},yt:function(e){this.P.profile=e.profile,this.P.metadata=e.metadata,this.emitChange()},It:function(e){i.each(e.attributes,i.bind((function(e){var t=e.key;a.setFieldValue(this.P.profile,t,e.value),e.metadata&&i.forOwn(e.metadata,i.bind((function(e,n){a.setFieldValue(this.P.metadata,t.concat(n),e)}),this))}),this)),this.emitChange()},Et:function(e){this.P.visitorId=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.St)},getCustomBehavioralAttributes:function(){return i.filter(this.P,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.P);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.P[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},St:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(7));n(63).Event;e.exports={initialize:function(){this.P={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.k),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.Tt),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.At)},getEvents:function(){return this.P.events},getForeignEvents:function(){return this.P.foreignEvents},getForeignEventQueues:function(){return this.P.foreignEventQueues},k:function(e){this.P.events=e,this.emitChange()},Tt:function(e){this.P.foreignEvents[e.key]=e.value},At:function(e){this.P.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n,i){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n),a.isUndefined(i)||(this[o.FIELDS.SESSION_INDEX]=i)}var a=n(2),o=n(64),s=n(19).getFieldValue,c=n(65);t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=c.hashToHex(c.toByteString(this.digest()),c.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var c=i[s];if(!n.hasOwnProperty(c)||t[c]!==n[c])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=s(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID],n[o.FIELDS.SESSION_INDEX]=this[o.FIELDS.SESSION_INDEX];var i=s(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID||e===o.FIELDS.SESSION_INDEX?this[e]=t:this.eventBase.setFieldValue(e,t)};var u={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=u[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=u[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var c="timestamp";r.push(c+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS,o.FIELDS.SESSION_INDEX],(function(e){t=u[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=u[o.FIELDS.OPTIONS],c=u[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[c]&&(i[s]=i[s]||{},i[s][c]=i[c],delete i[c]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}}),(function(e,t,n){var i=n(66).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(c(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},c=function(e,t){var n=i(e,t);return(n>>>0)/a},u=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:c,toByteString:u}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,c,u;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,u=0;u<i;)c=255&e.charCodeAt(u)|(255&e.charCodeAt(++u))<<8|(255&e.charCodeAt(++u))<<16|(255&e.charCodeAt(++u))<<24,++u,c=(65535&c)*o+(((c>>>16)*o&65535)<<16)&4294967295,c=c<<15|c>>>17,c=(65535&c)*s+(((c>>>16)*s&65535)<<16)&4294967295,r^=c,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(c=0,n){case 3:c^=(255&e.charCodeAt(u+2))<<16;case 2:c^=(255&e.charCodeAt(u+1))<<8;case 1:c^=255&e.charCodeAt(u),c=(65535&c)*o+(((c>>>16)*o&65535)<<16)&4294967295,c=c<<15|c>>>17,c=(65535&c)*s+(((c>>>16)*s&65535)<<16)&4294967295,r^=c}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.bt)},getBaseMap:function(){return this.P.baseMap},getEventQueue:function(){return this.P.eventQueue},getLastEvent:function(){return this.P.lastEvent},getCleared:function(){return this.P.cleared},getInitialized:function(){return this.P.initialized},bt:function(e){this.P[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={randomId:null},this.on(r.SET_VISITOR_ID,this.k)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.P.randomId},k:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26);e.exports={initialize:function(){this.P={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.wt),this.on(r.MERGE_VARIATION_ID_MAP,this.Rt),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.Dt),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Ot)},getVariationIdMap:function(){return i.cloneDeep(this.P.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.P.variationIdMap)},wt:function(e){var t=this.P.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.P.variationIdMap[e.layerId]=n,this.emitChange())},Rt:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.each(t||{},(function(e,t){n[t]?i.assign(n[t],e):n[t]=e})),this.P.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.P.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.P.preferredLayerMap)},getPreferredLayerId:function(e){return this.P.preferredLayerMap[e]},Dt:function(e){this.P.preferredLayerMap[e.groupId]!==e.layerId&&(this.P.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Ot:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.assign(n,t),this.P.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.Nt),this.on(r.XDOMAIN_ADD_FRAME,this.Ct),this.on(r.XDOMAIN_SET_MESSAGE,this.Lt),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.Pt),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.Vt),this.on(r.XDOMAIN_SET_DISABLED,this.xt)},getMessages:function(){return i.cloneDeep(this.P.messages)},getNextMessageId:function(){return this.P.messages.length},getMessageById:function(e){return this.P.messages[e]},getSubscribers:function(){return this.P.subscribers},getFrames:function(){return this.P.frames},getNextFrameId:function(){return this.P.frames.length},getDefaultFrame:function(){return this.P.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.P.canonicalOrigins)},isDisabled:function(){return this.P.disabled},Nt:function(e){this.P.defaultFrame=e},Ct:function(e){this.P.frames.push(e)},Lt:function(e){this.P.messages[e.messageId]=e.message},Pt:function(e){this.P.subscribers.push(e.subscriber)},Vt:function(e){this.P.canonicalOrigins=e.canonicalOrigins},xt:function(e){this.P.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k)},k:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getGroupsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])}}}),(function(e,t,n){var i=n(73);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){I.dispatch(_.SET_VISITOR_EVENTS,e)}function r(e){I.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){I.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){I.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){I.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function c(){I.dispatch(_.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function u(){return O.getEvents()}function l(){return N.getBaseMap()}function d(){return N.getEventQueue()}function f(){return N.getLastEvent()}function g(){return N.getCleared()}function p(){return N.getInitialized()}function h(){var e=u().concat(d()),t=!1;return e.length>L&&(e=e.slice(-L),t=!0),i(e),a([]),t}var v=n(2),_=n(7),m=n(24),E=n(74),I=n(9),y=n(23),S=n(75),T=t,A=n(63).Event,b=n(64),w=n(63).EventBase,R=n(89),D=n(16),O=D.get("stores/visitor_events"),N=D.get("stores/visitor_events_manager"),C={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},L=1e3;t.initialize=function(e,t){if(!p()){T.kt(e,t);var n=u();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),c()}},t.addEvent=function(e){y.debug("Behavior store: adding event",e);var t=T.Ft(e);o(t),a(d().concat(t)),R.reindexIfNecessary(f(),u(),d()),T.Mt(d())},t.getEvents=function(){return d().length>0&&(h()&&R.sessionize(u()),T.Ut(u()),T.Mt(d())),u()},T.kt=function(e,t){T.Gt(e,t)&&(T.Ut(u()),T.Mt(d())),R.sessionize(u())},T.Gt=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return C.EVENTBASE in r?(i(T.Bt(e)),a(T.Bt(t))):(n=!0,i(T.zt(e)),a(T.zt(t))),d().length>0&&(h(),n=!0),i(T._updateBaseMapAndMaybeDedupe(u())),T._migrateEventBasesAndUpdateStore()&&(n=!0),n},T.zt=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=T.jt(i);t[n]=new A(r,i[b.FIELDS.TIME])}return t},T._migrateEventBasesAndUpdateStore=function(){var e=!1,t=T.Ht();return R.applyMigrations(t)&&(e=!0,r({}),i(T._updateBaseMapAndMaybeDedupe(u())),a(T._updateBaseMapAndMaybeDedupe(d()))),e},T.Kt=function(){return m.now()},T.Ft=function(e){var t,n=e.name,i=e.type||"default",r=e.category||E.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new w(n,i,r,a,t);o=T.Yt(o);var s=T.Kt(),c=new A(o,s,-1);return R.updateSessionId(f(),c),R.updateSessionIndex(f(),c),c},
T._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=T.Yt(e[t].eventBase);return e},T.Ut=function(e){var t=T.qt(e);S.persistBehaviorEvents(t)},T.Mt=function(e){var t=T.qt(e);S.persistBehaviorEventQueue(t)},T.Wt=function(){g()||(i([]),a([]),T.Ut(u()),T.Mt(d()),r({}),o(null),s(!0))},T.Yt=function(e){var t=e.hash(),n=l(),i=n[t];if(v.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},T.Ht=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},T.qt=function(e){for(var t=function(e){var t={};t[b.FIELDS.NAME]=e.getValueOrDefault([b.FIELDS.NAME]),t[b.FIELDS.TYPE]=e.getValueOrDefault([b.FIELDS.TYPE]);var n=e.getValueOrDefault([b.FIELDS.CATEGORY]);v.isUndefined(n)||(t[b.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([b.FIELDS.REVENUE]);v.isUndefined(i)||(t[b.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([b.FIELDS.OPTIONS]);return v.isUndefined(r)||(t[b.FIELDS.OPTIONS]=r),t},n=C,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,c=e[a],u=c.eventBase;if(u.hasOwnProperty(r)){o=i[u[r]];var l=c[b.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(c),o[n.HASH]=u.hash(),o[n.TIMEBASE]=c[b.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),u[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},T.jt=function(e,t){var n=new w(e[b.FIELDS.NAME],e[b.FIELDS.TYPE],e[b.FIELDS.CATEGORY],e[b.FIELDS.OPTIONS],e[b.FIELDS.REVENUE]);return v.isUndefined(t)||n.setHash(t),n},T.Bt=function(e){for(var t=C,n=[],i=0;i<e.length;i++)for(var r=e[i],a=T.jt(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],c=0;c<s.length;c++){var u=s[c],l=new A(a,o+u[t.DELTA]),d=u[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return T.Bt(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(R.sessionSortPredicate),R.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){return u(z.LAYER_MAP)||{}}function r(e,t){O.dispatch(N.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=X.getPreferredLayerMapString();p(z.LAYER_MAP,e,!0)}function o(e){O.dispatch(N.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=V.now()),O.dispatch(N.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i=t.provides;if(D.isArray(i)||(i=[i]),!J||!D.includes(["queryParams","url"],i[0])){var r=t.isSticky&&!D.isUndefined(M.getFieldValue(e,i));if(!r){var a;try{var o=x.evaluate(t.getter);D.isFunction(o)&&(o=o((function(){return M.getFieldValue(e,i)}),(function(e){n(i,e)}))),D.isUndefined(o)||(t.isAsync?(a=o.then((function(e){n(i,e)}),(function(e){G.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),O.dispatch(N.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:a})):n(i,o))}catch(e){G.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return a}}}}function c(){y(u(z.EVENTS)||[],u(z.EVENT_QUEUE)||[]);var e=f(z.LAYER_STATES);D.forEach(e,(function(e){e.item=D.map(e.item,d)})),S(l(e)),T(u(z.SESSION_STATE)||{}),b(u(z.VISITOR_PROFILE)||{});var n=u(z.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()}function u(e){var t=h(e),n=U.getItem(t);if(!n){var i=v(e);n=U.getItem(i),g(e,n)}return D.isString(n)&&(n=w(n)),n}function l(e){var t=[];return D.each(e,(function(e){D.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function d(e){var t;return t=e.layerId?e:{layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}function f(e){var t=W.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return D.each(U.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:w(U.getItem(e))};n.push(a)}})),n}function g(e,t){var n=h(e),i=v(e);U.setItem(n,t),U.removeItem(i)}function p(e,t,n){try{var i=h(e);n||(t=F.stringify(t));try{U.removeItem(v(e)),U.setItem(i,t)}catch(e){throw G.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}R.setItem(i,t)}catch(e){G.warn("Unable to persist visitor data:",e.message)}}function h(e){var n=W.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function v(e){var t=W.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function _(e,n){if(!W.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(E(e)){var i=t.getStorageKeyFromKey(e);if(D.includes(z,i)){var r=h(i);if(!(e.indexOf(r)<=0))if(i===z.EVENT_QUEUE)O.dispatch(N.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:L.deserialize(w(n))});else if(i===z.EVENTS)O.dispatch(N.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:L.deserialize(w(n))});else if(i===z.LAYER_STATES)O.dispatch(N.LOAD_PERSISTED_LAYER_STATES,{layerStates:D.map(w(n),d),merge:!0});else if(i===z.VARIATION_MAP)O.dispatch(N.MERGE_VARIATION_ID_MAP,{variationIdMap:w(n)});else if(i===z.VISITOR_PROFILE){var a=["custom"],o=w(n);D.each(a,(function(e){var t=Y.getPlugin(k.PluginTypes.visitorProfileProviders,e);if(t){if(o.profile&&o.metadata){var n=m(o,e,t.attributionType);if(!D.isEmpty(n)){var i=[];D.forOwn(n.data,(function(t,r){var a=n.metadata[r],o={key:[e,r],value:t,metadata:a};i.push(o)})),O.dispatch(N.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else G.debug("Attribute type",e,"not used by any audiences")}))}}}}function m(e,t,n){var i=Q.getAttribute(t),r=Q.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(D.isEmpty(i))return{data:a,metadata:o};var s={};return D.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===k.AttributionTypes.FIRST_TOUCH&&i>=a||n===k.AttributionTypes.LAST_TOUCH&&a>=i||D.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function E(e){var t=e.split("$$")[0];return t.indexOf("://")>0}function I(){var e=Q.getVisitorProfile(),t=Q.getVisitorProfileMetadata(),n=Y.getAllPlugins(k.PluginTypes.visitorProfileProviders);if(n){var i=D.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=D.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function y(e,t){C.initializeStore(e,t)}function S(e){O.dispatch(N.LOAD_PERSISTED_LAYER_STATES,{layerStates:D.filter(e,(function(e){return!!e.decision}))})}function T(e){e=D.extend({lastSessionTimestamp:0,sessionId:null},e),O.dispatch(N.LOAD_SESSION_STATE,e)}function A(){return"oeu"+V.now()+"r"+Math.random()}function b(e){var t,n,i=Y.getAllPlugins(k.PluginTypes.visitorProfileProviders),r=D.filter(i,(function(e){return D.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=D.reduce(t,(function(e,t,n){var i=t,a=D.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),O.dispatch(N.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function w(e){try{return F.parse(e)}catch(t){return G.debug("Failed to parse: ",e,t),null}}var R,D=n(2),O=n(9),N=n(7),C=n(72),L=n(73),P=n(76),V=n(24),x=n(16),k=n(25),F=n(26),M=n(19),U=n(82).LocalStorage,G=n(23),B=n(12).Promise,z=n(25).VisitorStorageKeys;R=n(85);var j=x.get("stores/cookie_options"),H=x.get("stores/global"),K=x.get("stores/layer"),Y=x.get("stores/plugins"),q=x.get("stores/session"),W=x.get("stores/visitor_id"),X=x.get("stores/visitor_bucketing"),Q=x.get("stores/visitor"),$=x.get("stores/provider_status"),J=!1;t.getOrGenerateId=function(){var e=t.getCurrentId();return e||(e=A()),{randomId:e}},t.getCurrentId=function(){return Q.getVisitorIdFromAPI()||P.get(k.COOKIES.VISITOR_ID)},t.hasSomeData=function(){return U.keys().length>0},t.setId=function(e){var n=W.getBucketingId();O.dispatch(N.SET_VISITOR_ID,e),W.getBucketingId()!==n&&(c(),t.deleteOldLocalData(),R.deleteData(e));try{t.maybePersistVisitorId(e)}catch(e){if(G.error("Visitor / Unable to persist visitorId, disabling tracking"),O.dispatch(N.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof P.MismatchError)throw G.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}t.refreshSession()},t.getVariationIdMap=function(){return u(z.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){O.dispatch(N.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationIdMap=function(){var e=X.getVariationIdMapString();p(z.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){p(z.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){O.dispatch(N.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=D.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=D.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=D.partial(s,t),i=D(e).filter({isAsync:!0}).map(n).filter().value();return D.forEach(D.filter(e,(function(e){return!e.isAsync})),n),i.length>0?B.all(i):B.resolve()},t.persistBehaviorEvents=function(e){p(z.EVENTS,e)},t.persistBehaviorEventQueue=function(e){p(z.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=K.getLayerStates(t.getNamespace());e=D.map(e,(function(e){return D.omit(e,"namespace")})),p(z.LAYER_STATES,e)},t.persistSessionState=function(){p(z.SESSION_STATE,q.getState())},t.persistVisitorProfile=function(){p(z.VISITOR_PROFILE,I())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,n){var i;return D.includes(e,n)&&D.includes(e,"_")&&D.includes(e,"$$")&&D.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.maybePersistVisitorId=function(e){P.remove(k.COOKIES.VISITOR_UUID),e.randomId&&(j.getAutoRefresh()||t.getCurrentId()!==e.randomId?(P.set(k.COOKIES.VISITOR_ID,e.randomId),G.log("Persisting visitorId:",e.randomId)):G.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(e){return Q.getAttribute(e)},t.getPendingAttributeValue=function(e){return $.getPendingAttributeValue(e)},t.isForeignKey=E,t.checkKeyForVisitorId=function(e){var n=W.getBucketingId()||t.getCurrentId(),i=t.getIdFromKey(e);return!i||i===n},t.getIdFromKey=function(e){var n=e.split("$$")[0],i=t.getStorageKeyFromKey(e),r=D.includes(k.StorageKeys,i);if(r)return null;var a=n.indexOf("_"),o=a===-1;return o?n:n.substring(a+1)},t.getStorageKeyFromKey=function(e){var t,n=e.split("$$").pop(),i=n.indexOf("://")>-1;if(i){var r=n.indexOf("_");t=n.substring(r+1)}else t=n;return D.includes(D.values(k.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var e=U.keys();D.each(e,(function(e){t.isForeignKey(e)||t.checkKeyForVisitorId(e)||U.removeItem(e)}))},t.deleteOldForeignData=function(){var e=U.keys();D.each(e,(function(e){t.isForeignKey(e)&&U.removeItem(e)}))},t.loadForeignData=function(){D.each(U.keys(),(function(e){var t=U.getItem(e);t&&_(e,t)}))},t.getNamespace=function(){return H.getNamespace()},t.serializeFieldKey=function(e){return D.isArray(e)?e.join("$$"):e},t.removeLegacySessionStateCookies=function(){var e=P.getAll();D.forEach(D.keys(e),(function(e){0===e.indexOf(k.COOKIES.SESSION_STATE+"$$")&&P.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],c=null,l=o.length-1;l>=0;l--)if(s.unshift(o[l]),i=s.join("."),!r.includes(h,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),c=a.domain;break}catch(e){}}return d.dispatch(u.SET_COOKIE_DOMAIN,c),c}var r=n(2),a=n(77).create,o=n(24),s=n(81),c=n(41),u=n(7),l=n(16),d=n(9),f=l.get("stores/cookie_options"),g=t.SetError=a("CookieSetError"),p=t.MismatchError=a("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,o,c;n=s.getCookieString().split(/\s*;\s*/);var u={};for(a=0;a<n.length;a++)if(i=n[a],o=i.indexOf("="),o>0&&(c=t.safeDecodeURIComponent(i.substring(0,o)),void 0===u[c])){var l=i.substring(o+1);e&&(l=t.safeDecodeURIComponent(l)),u[c]=l}return u},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,a,u){a=r.extend({encodeValue:!0},a),u!==!1&&(u=!0);var l=[];if(r.isUndefined(a.domain)){var d=f.getCurrentDomain();d||(d=i(c.getLocation(),!0)),a.domain=d}if(a.domain&&l.push("domain="+a.domain),r.isUndefined(a.path)&&(a.path="/"),a.path&&l.push("path="+a.path),r.isUndefined(a.expires)){var h=r.isUndefined(a.maxAge)?f.getDefaultAgeInSeconds():a.maxAge;a.expires=new Date(o.now()+1e3*h)}if(r.isUndefined(a.expires)||l.push("expires="+a.expires.toUTCString()),a.secure&&l.push("secure"),l=l.join(";"),s.setCookie(e+"="+(a.encodeValue?encodeURIComponent(n):n)+";"+l),u){var v=a.encodeValue,_=t.get(e,v);if(_!==n){if(!_)throw new g('Failed to set cookie "'+e+'"');throw new p('Expected "'+n+'" for "'+e+'", got "'+_+'"')}}},t.remove=function(e,n){for(var i=c.getLocation().hostname.split(".");i.length>0;)t.set(e,null,r.extend({},n,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var h=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t,n){var i=n(78),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(79)(),a=n(80);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){function i(){return"loading"===t.getReadyState()}var r=n(16),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.parseUri=function(e){var n=t.createElement("a");return n.href=e,n},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!i())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i,r,a="optimizely_data",o=n(77).create,s=n(83),c=n(41),u=t.Error=o("StorageError");try{r=c.getGlobal("localStorage")}catch(e){throw new u("Unable to read localStorage: "+e.toString())}if(!r)throw new u("localStorage is undefined");i=s.create(r,a),t.LocalStorage=i,t.isOptimizelyKey=function(e){return e.slice(0,a.length)===a}}),(function(e,t,n){function i(e,t){this.Xt=e,this.Qt=t}var r=n(2),a=n(23),o="$$";i.prototype.$t=function(e){return[this.Qt,e].join(o)},i.prototype.Jt=function(e){return e.replace(this.Qt+o,"")},i.prototype.setItem=function(e,t){try{this.Xt.setItem(this.$t(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.Xt.removeItem(this.$t(e))},i.prototype.getItem=function(e){var t=null;try{t=this.Xt.getItem(this.$t(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.Xt);return r.map(r.filter(e,r.bind((function(e){return r.includes(e,this.Qt)}),this)),r.bind(this.Jt,this))},i.prototype.allKeys=function(){return r.keys(this.Xt)},i.prototype.allValues=function(){return r.values(this.Xt)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return c.getGlobal("performance")}var r=n(7),a=n(77).create,o=n(24),s=n(9),c=n(41),u=n(16),l=u.get("stores/rum"),d="optimizely:",f=t.Error=a("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),c=e+"Time",u=o[0].startTime-a[0].startTime;s.dispatch(r.SET_PERFORMANCE_MARKS_DATA,{name:c,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},t.now=function(){var e=i();return e?e.now():o.now()}}),(function(e,t,n){function i(e){var t;if(!o.find(I.getFrames(),{origin:e.origin}))return void E.debug("XDomain","No frame found for origin: "+e.origin);try{t=h.parse(e.data)}catch(t){return void E.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(c.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new y("Xdomain Error: "+t.response));else if("SYNC"===t.type)o.each(I.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=I.getMessageById(t.id);if(!n){if(E.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=I.getNextMessageId();t.id>=i?d.emitInternalError(new y("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new y("Message ID is < 0: "+t.id)):d.emitInternalError(new y("No stored message found for message ID: "+t.id))}else d.emitInternalError(new y("Message ID is not a number: "+t.id));return}n.resolver(t.response),l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:g.now(),response:t.response})})}}function r(e,t){return t||(t=I.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:I.getNextMessageId()}),resolver:n};t?I.isDisabled()||a(i,t):l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:g.now()})}),t.target.postMessage(h.stringify(n),t.origin)}var o=n(2),s=n(12).Promise,c=n(7),u=n(16),l=n(9),d=n(86),f=n(77).create,g=n(24),p=n(81),h=n(26),v=n(88),_=n(75),m=n(41),E=n(23),I=u.get("stores/xdomain"),y=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.deleteData=function(e,t){return r({type:"DELETE",visitorId:e},t)},t.subscribe=function(e){l.dispatch(c.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=p.createElement("iframe");i.src=e+t,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:I.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(c.XDOMAIN_ADD_FRAME,r),n(r)},p.appendTo(p.querySelector("body"),i)})},t.getXDomainUserId=function(e,t){var n,i={},r=o.keys(e);return o.each(t,(function(e){i[e]=[],o.each(r,(function(t){var r=_.getUserIdFromKey(t,e);!n&&r&&(n=r),r&&!o.includes(i[e],r)&&i[e].push(r)}))})),E.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){m.addEventListener("message",i);var r=function(){return!!p.querySelector("body")},s=function(){return t.loadIframe(e,n)};return v.pollFor(r).then(s).then((function(e){l.dispatch(c.XDOMAIN_SET_DEFAULT_FRAME,e),I.isDisabled()||o.each(I.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){var i=n(87);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(7),o=n(86),s=n(16),c=n(9),u=n(23),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),c.dispatch(a.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){c.dispatch(a.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){!n&&i.emitErrors?(u.error("Error in handler for event:",e,r),o.emitError(r,null,t)):u.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=n(41),o=100,s=50;t.pollFor=function(e,t,n){var c,u;return i.isFunction(n)?u=n:(c=n||o,u=function(){return c--,c<-1}),t=t||s,new r(function(n,i){!(function r(){var o;if(!u()){try{var s=e();if(s)return n(s)}catch(e){o=e}return a.setTimeout(r,t)}i(o||new Error("Poll timed out"))})()})}}),(function(e,t,n){function i(e,n){var i;i=t.isInSameSession(e,n)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):n.getValueOrDefault([s.FIELDS.TIME]),n.setFieldValue(s.FIELDS.SESSION_ID,i)}function r(e,n,i){var r,a=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);r=t.isInSameSession(n,e)?a:i?a+1:a-1,n.setFieldValue(s.FIELDS.SESSION_INDEX,r)}var a=n(63).Event,o=n(24),s=n(64),c=n(63).EventBase;t.CURRENT_SESSION_INDEX=0;var u=18e5;t.isInSameSession=function(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<u},t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),r=e.getValueOrDefault([s.FIELDS.SESSION_ID]),o=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?o-36e5:n,r="number"!=typeof r?n:r,e=new a(new c("",""),n,r),i(e,t)},t.updateSessionIndex=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_INDEX,0);var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),o=t.getValueOrDefault([s.FIELDS.TIME]),u=e.getValueOrDefault([s.FIELDS.SESSION_ID]);n="number"!=typeof n?o-36e5:n,i="number"!=typeof i?0:i,u="number"!=typeof u?n:u,e=new a(new c("",""),n,u,i),r(e,t,!1)},t.sessionize=function(e){var n=e.length;if(0!==n){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var a=1;a<n;a++)i(e[a-1],e[a]);var c=t.CURRENT_SESSION_INDEX,l=e[n-1].getValueOrDefault([s.FIELDS.TIME]),d=o.now();d-l>u&&(c+=1),e[n-1].setFieldValue(s.FIELDS.SESSION_INDEX,c);for(var a=n-1;a>0;a--)r(e[a],e[a-1],!0)}},t.reindexIfNecessary=function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);e[t].setFieldValue(s.FIELDS.SESSION_INDEX,n+1)}}e.getValueOrDefault([s.FIELDS.SESSION_INDEX])===-1&&(i(t),i(n))},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(12).Promise,r=n(41);t.estimateStorage=function(){var e=r.getGlobal("navigator");try{return e.storage.estimate()}catch(e){return i.resolve({usage:null,quota:null})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(9),s=n(26),c=n(23),u=n(12).Promise,l=n(92),d=3;t.isCORSSupported=function(){var e=l.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new u(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=l.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=s.stringify(e.data)),o.open(e.method,e.url,e.async),e.withCredentials&&(o.withCredentials=e.withCredentials),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,s,l){if(!n)return u.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return u.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(s)&&(s=0);var f={id:n,timeStamp:a.now(),data:e,retryCount:s};return o.dispatch(r.SET_PENDING_EVENT,f),c.debug("Sending event ",n),t.request(e).then((function(e){return o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),c.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,o.dispatch(r.SET_PENDING_EVENT,f),c.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-s," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(81),c=n(25),u=n(9),l=n(23),d=o.get("stores/sandbox"),f=n(41);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||g();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var g=function(){try{var e="optimizely_"+a.now(),t=s.createElement("iframe");t.name=e,t.style.display="none",s.appendToHead(t);var n=t.contentWindow,o=t.contentDocument;o.write("<script></script>"),o.close();var d=i.mapValues(c.SandboxedFunctions,(function(e){return n[e]}));u.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){l.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(2),r=n(23),a=n(94),o=n(16),s=o.get("stores/plugins"),c=n(7),u=n(25),l=n(9),d=[n(107),n(108),n(129)],f=["clientMetadata","disable","load","optOut","rum"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(d[s]&&(a=d[s][n]),t&&f.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(c.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){r.log('API / Getting module: "'+e+'"');var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(u.PluginTypes.apiModules,e),t?(l.dispatch(c.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(l.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var c=r.decision.experimentId,u=r.decision.variationId;if(!c||!u)return null;var d,f;return(d=o.find(a.experiments,{id:c}))?(f=o.find(d.variations,{id:u}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:d.name,id:d.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var c=[],u=e.getLayerStates();s.onlySingleExperiments&&(u=o.filter(u,(function(e){var n=t.get(e.layerId);return n&&l.isSingleExperimentPolicy(n.policy)})));var f=o.map(u,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=d.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),g=r?o.filter(f,r):f;return o.each(g,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&c.push(i)})),c}function a(e,t,n,i){var r,a,s=e.layerId,c=t.get(s)||{},u=o.map(c.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!c.decisionMetadata||!c.decisionMetadata.offerConsistency){var l={id:s,campaignName:c.name||null,experiment:null,allExperiments:u,variation:null,reason:e.decision.reason,isActive:!!e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(c.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(95),c=n(96),u=n(98),l=n(45),d=n(99);t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(e,t,n,i,r,a,s,l,d){var f={},g={},p={},h={audiences:e.getAudiencesMap(),events:n.getEventsMap(),campaigns:f,pages:r.getPagesMap(),experiments:g,variations:p,projectId:d.getProjectId(),snippetId:d.getSnippetId(),accountId:d.getAccountId(),dcpServiceId:d.getDCPServiceId(),revision:d.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},v=u.dereferenceChangeId;return o.each(i.getAll(),(function(e){c.defineProperty(f,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,v)}),"campaign"),c.defineProperty(t,"experiments",(function(){return o.map(e.experiments,(function(e){return g[e.id]}))}),"campaign"),t}),"campaignMap","byId"),o.each(e.experiments,(function(e){c.defineProperty(g,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,v)}),"experiment"),c.defineProperty(t,"variations",(function(){return o.map(e.variations,(function(e){return p[e.id]}))}),"experiment"),t}),"experimentMap","byId"),o.each(e.variations,(function(e){c.defineProperty(p,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"actions",(function(){return o.map(e.actions,(function(e){return o.extend({},e,{changes:o.map(e.changes,v)})}))}),"variation"),t}),"variationMap","byId")}))}))})),h.groups=a.getGroupsMap(),h}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,c,u,f){return{getCampaignStates:function(i){var a={},s=r(n,t,e,u,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,u,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],c=o.reduce(a,(function(e,t){
var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return c},getCampaignStateLists:function(i){var a={},s=r(n,t,e,u,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=c.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e[t.id].isActive=!!e[t.id].isActive,e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return u.isGlobalHoldback()},getActivationId:function(){return u.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=d.getExperimentAndVariation();return e&&(e.referrer=d.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);return r?s.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);if(!r)return null;var a=s.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),c=o.mapValues(a.names,(function(t,n){return s.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),u={experiment:c.experiment,variation:c.variation};return l.isSingleExperimentPolicy(r.layer.policy)||o.extend(u,{campaign:c.layer,holdback:r.isLayerHoldback}),u}}}],t.utils=n(100).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(106)}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!c.isEmpty(e)&&c.includes(["and","or","not"],e[0])}function a(e,t){var n="";return c.isEmpty(t)?n=d:(n=c.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!v.isSingleExperimentPolicy(e.policy)||!r){var s=!v.isSingleExperimentPolicy(e.policy)&&r,u=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[u.names.experiment,u.names.variation],g=[u.idStrings.experiment,u.idStrings.variation];v.isSingleExperimentPolicy(e.policy)||(d.unshift(u.names.layer),g.unshift(u.idStrings.layer));var p=c.reduce(g,(function(e,t){return e+t.length}),0),h=d.length-1+(s?1:0),_=h*l.length,m=p+_;if(s&&(m+=f.length),m>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var E=a-m,I=d.length,y=[],S=d.length-1;S>=0;S--){var T=d[S],A=Math.min(T.length,Math.floor(E/I));E-=A,I--,y.unshift(T.substring(0,A))}var b=c.map(y,(function(e,t){return e+g[t]}));return s&&b.push(f),b.join(l)}}function s(e,n,i,r,a,o){var s=r?f:g,u=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),p=d.names,h=d.idStrings,_=c.reduce(h,(function(e,t){return e+t.length}),0);if(_+u+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var m=a-_-u-s.length,E={};E.variation=Math.min(p.variation.length,Math.floor(m/3)),m-=E.variation,E.experiment=Math.min(p.experiment.length,Math.floor(m/2)),m-=E.experiment,E.layer=m;var I={};c.each(p,(function(e,t){I[t]=e.substring(0,E[t])}));var y=[];return v.isSingleExperimentPolicy(e.policy)||y.push(I.layer+h.layer),y=y.concat([I.experiment+h.experiment,I.variation+h.variation,s]),y.join(l)}var c=n(2),u=n(16),l=":",d="everyone_else",f="holdback",g="treatment",p="",h=n(23),v=n(45);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||p,experiment:t.name||p,variation:n.name||p};if(o&&(s=c.mapValues(s,i)),s.experiment===p&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=u.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(h.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=p),e===p)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(97),r=n(7),a=n(9),o=n(23);t.defineProperty=function(e,t,n,s,c){i(e,t,(function(){var e=["prop",s,c||t].join(".");return o.debug('Evaluating getter: "'+e+'"'),a.dispatch(r.RECORD_API_USAGE,{methodName:e}),n()}),!0)}}),(function(e,t){"use strict";function n(e,t,n,i){Object.defineProperty(e,t,{get:function(){var e=n.call(this);return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},set:function(e){return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},enumerable:!!i,configurable:!0})}e.exports=n}),(function(e,t,n){function i(e){var n=r.cloneDeep(e);return n.changes&&(n.changes=r.map(n.changes,t.dereferenceChangeId)),n.experiments&&r.each(n.experiments,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId)),e.variations&&r.each(e.variations,(function(e){e.actions&&r.each(e.actions,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId))}))}))})),n}var r=n(2),a=n(16),o=n(22),s=n(96),c=a.get("stores/change_data");t.translateDecisionToCampaignDecision=function(e){return u(r.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return s.defineProperty(t,"campaign",(function(){var t=i(e.data.layer);return t}),"campaignEvent"),t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}},t.dereferenceChangeId=function(e){var t=c.getChange(e);return t?o.safeReference(t):e};var u=function(e,t){var n=r.omit(e,r.keys(t));return r.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(2),r=n(16),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){var i=n(12).Promise,r=n(101).observeSelector,a=n(102).poll,o=n(104).waitForElement,s=n(105).waitUntil;t.create=function(){return{observeSelector:r,poll:a,Promise:i,waitForElement:o,waitUntil:s}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=g.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(m),a),this.observe(t,e)});return function(i){var r=m[i];n.observe(t,e),r.cancelObservation=function(){delete m[i],l.isEmpty(m)&&n.disconnect()}}}return function(e){var t=h.poll(l.partial(a,e));m[e].cancelObservation=function(){t(),delete m[e]}}}function r(e){var t=m[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(m[e]){if(o(m[e]))return 0===m[e].matchedCount&&l.isFunction(m[e].options.onTimeout)&&m[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(m[e].selector);t.length&&(l.each(t,(function(t){t.Zt&&t.Zt[e]||m[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;m[e]&&m[e].callbackQueue.length;){var t=m[e].callbackQueue.shift();if(c(t,e),m[e].matchedCount=m[e].matchedCount+1,m[e].callback(t),m[e]&&m[e].options.once)return void r(e)}}function c(e,t){e.Zt||(e.Zt={}),e.Zt[t]=!0}function u(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(7),n(16)),f=d.get("stores/directive"),g=n(81),p=(n(25),n(9),n(5).generate),h=n(102),v=n(41),_=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),m={},E=function(e){(E=i())(e)};t.observeSelector=function(e,t,n){if(!u(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=p();return n=l.assign({},_,n||{}),m[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},E(i),v.setTimeout(l.bind(a,null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){l[e]&&a.each(l[e].callbacks,(function(e){e.call(null)}))}function r(e,t){l[t]&&l[t].callbacks[e]&&(delete l[t].callbacks[e],a.some(l[t].callbacks)||(clearInterval(l[t].id),delete l[t]))}var a=n(2),o=(n(7),n(16)),s=(n(25),n(9),n(5).generate),c=n(41),u=n(103).DEFAULT_INTERVAL,l=(o.get("stores/rum"),{});t.poll=function(e,t){a.isNumber(t)||(t=u),l[t]||(l[t]={callbacks:{},id:c.setInterval(a.partial(i,t),t)});var n=s();return l[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(l,(function(e,t){clearInterval(e.id),delete l[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(12).Promise,r=n(101).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(12).Promise,r=n(102).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(87);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(108);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){function i(e){var t;return e.eventId&&(t=I.create(e.eventId,e.eventName,"custom")),D.updateAllViewTags(),function(){var n=g.trackCustomEvent(e.eventName,e.tags,t);n?b.log("API / Tracking custom event:",e.eventName,e.tags):b.log("API / Not tracking custom event:",e.eventName)}}function r(e){var t;return e.eventData&&(t=I.create(e.eventData.id,e.eventData.apiName,"click",e.eventData)),function(){var e=g.trackClickEvent(t);e?b.log("API / Tracking click event:",e):b.log("API / Not tracking click event:",e)}}function a(e){var t=e.eventData,n=A.createLayerState(t.layerId,t.experimentId,t.variationId),i=A.createSingle(t.layerId,t.experimentId,t.variationId);return function(){A.recordLayerDecision(n.layerId,n.decisionTicket,n.decision),b.log("API / Tracking decision event:",n),g.trackDecisionEvent(n.decision,n.decisionTicket,i)}}function o(e){var t=D.create(e.eventData.id,e.eventData.apiName),n=D.createState(t.id);return function(){var e=g.trackViewActivation(t,n);e?b.log("API / Tracking pageview event:",e):b.log("API / Not tracking pageview event:",e)}}var s=n(2),c=n(7),u=n(93),l=n(94),d=n(109),f=n(25),g=n(110),p=n(117),h=n(6),v=n(77).create,_=n(24),m=n(118),E=n(121),I=n(122),y=n(87),S=n(9),T=n(26),A=n(113),b=n(23),w=n(123),R=n(114),D=n(124),O=n(75),N=n(16),C=N.get("stores/dimension_data"),L=N.get("stores/view"),P=N.get("stores/view_data"),V=N.get("stores/visitor_id"),x=N.get("stores/layer_data"),k=N.get("stores/directive"),F=!1,M=!1,U=F||M,G=86400,B=90,z=t.ApiListenerError=v("ApiListenerError");t.event=function(e){var t;switch(e.eventType){case"click":t=r(e);break;case"decision":t=a(e);break;case"pageview":t=o(e);break;case"custom":default:t=i(e)}V.getBucketingId()?t():S.dispatch(c.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(e){U&&(S.dispatch(c.SET_CLIENT_NAME,e.clientName),S.dispatch(c.SET_CLIENT_VERSION,e.clientVersion)),F&&e.forceVariationIds&&S.dispatch(c.LOAD_DIRECTIVE,{forceVariationIds:e.forceVariationIds})},t.priorRedirectString=function(e){U&&R.load(e.value)},t.microsnippetError=function(e){if(U){var t=e.errorData.metadata&&e.errorData.metadata.err||{};t.name=e.errorData.code;var n={engine:e.engine,msVersion:e.errorData.msVersion,requestId:e.errorData.requestId,projectId:e.errorData.projectId,snippetKey:e.errorData.snippetKey,args:e.errorData.args};E.handleError(t,n)}},t.rum=function(e){S.dispatch(c.SET_RUM_DATA,e.eventData)},t.initialViewStates=function(e){var t=s.map(e.states,(function(e,t){return{id:t,isActive:e}}));D.registerViews(t)},t.page=function(e){var t=P.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?D.activateViaAPI(t,e.tags):(D.deactivate(t),b.log("API / Deactivated Page",D.description(t)))};V.getBucketingId()?i():S.dispatch(c.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){D.setGlobalTags(e.tags)},t.user=function(e){U&&e.visitorId&&(V.getBucketingId()?(b.log("API / Setting visitor Id:",e.visitorId),O.setId({randomId:e.visitorId})):(b.log("API / Setting visitor Id for activation:",e.visitorId),S.dispatch(c.SET_VISITOR_ID_VIA_API,e.visitorId))),F&&s.each(["IP","location","queryParams","url"],(function(t){e[t]&&(b.log("API / Setting",t,":",e[t]),j(t,e[t],!1))})),b.log("API / Setting visitor custom attributes:",e.attributes),s.each(e.attributes,(function(e,t){var n,i,r=t,a=C.getById(t)||C.getByApiName(t);a&&(r=a.id,n=a.apiName,i=a.segmentId||a.id);var o={id:i,value:e};n&&(o.name=n),j(r,o,!0)}))};var j=function(e,t,n){var i=[{key:n?["custom",e]:[e],value:t,metadata:{lastModified:_.now()}}],r=function(){S.dispatch(c.SET_VISITOR_ATTRIBUTES,{attributes:i})};V.getBucketingId()?r():S.dispatch(c.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postVisitorProfileLoad,cleanupFn:r})};t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;m.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<B&&(b.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",B,", setting to minimum."),t=B),b.log("API / Setting cookie age to",t,"days."),S.dispatch(c.SET_COOKIE_AGE,t*G)},t.extendCookieLifetime=function(e){e=s.extend({isEnabled:!0},e),b.log("API / Setting cookie automatic lifetime extension to",e.isEnabled),S.dispatch(c.SET_COOKIE_AUTO_REFRESH,e.isEnabled)},t.cookieDomain=function(e){b.log("API / Setting cookie domain to",e.cookieDomain),S.dispatch(c.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);b.log("API / Disabling tracking"),S.dispatch(c.LOAD_DIRECTIVE,{trackingDisabled:!0})}else b.log("API / Disabling everything"),S.dispatch(c.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;s.isUndefined(t)&&(t="INFO"),s.isUndefined(n)&&(n=""),b.setLogMatcher(n),b.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(l[t]||u.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');w.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;h.makeAsyncRequest(t),h.resolveRequest(t,e.data)},t.addListener=function(e){if(!s.isFunction(e.handler))throw new Error("A handler function must be supplied");e=s.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new z(e)}},y.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");y.off(e.token)},t.load=function(e){e.data=s.extend({},e.data),d.normalizeClientData(e.data),S.dispatch(c.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");S.dispatch(c.SET_INTEGRATION_SETTINGS,s.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&s.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,i=e.campaignId;if(i){if(t=x.get(i),!t)throw new Error("Could not find layer "+i)}else if(t=x.getLayerByExperimentId(e.experimentId),i=t.id,!i)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=s.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+i);var r=e.variationId;if(s.isUndefined(e.variationIndex)){if(!s.find(n.variations,{id:r}))throw new Error("Cound not find variation "+r+" in experiment "+e.experimentId)}else if(r=n.variations[e.variationIndex].id,!r)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);O.updateVariationIdMap(i,e.experimentId,r),V.getBucketingId()&&O.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!s.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+T.stringify(e.canonicalOrigins));s.each(e.canonicalOrigins,(function(e){if(!s.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),S.dispatch(c.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e.canonicalOrigins})},t.disableCrossOrigin=function(){b.log("API / cross origin tracking is DISABLED"),S.dispatch(c.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){k.shouldActivate()?(s.forEach(L.getActiveViewStates(),(function(e){D.deactivate(P.get(e.id))})),S.dispatch(c.RESET_VIEW_STATES),p.emitActivateEvent()):b.debug("Not activating.")},t.sendEvents=function(){p.emitSendEvents()},t.holdEvents=function(){p.emitHoldEvents()}}),(function(e,t,n){var i=n(2),r=n(25);t.normalizeClientData=function(e){!e.listTargetingKeys&&e.listTargetingCookies&&(e.listTargetingKeys=i.map(e.listTargetingCookies,(function(e){return{type:r.ListTargetingKeyTypes.COOKIE,key:e}})),delete e.listTargetingCookies)}}),(function(e,t,n){function i(e,t){var n=V.description(t),i=Q.isExpectingRedirect(),r=Q.getLayerId();if(i&&r===t.id){var a=G.TrackLayerDecisionTimingFlags.preRedirectPolicy;e.timing=a,m(a,[G.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],e),x.log("Called trackLayerDecision for redirect Campaign",n,e)}else{var a=G.TrackLayerDecisionTimingFlags.nonRedirectPolicy;e.timing=a,m(a,[G.NonRedirectPolicies.TRACK_IMMEDIATELY],e),x.log("Called trackLayerDecision for non-redirect Campaign",n,e)}}function r(e,t,n,i,r,a){var o=V.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),x.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t,n){var i=f({activeViewStates:K.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()}),r=n&&n.pageId?p(n):K.getActiveViewTags(),a=I.extend({},r,t),o=n&&n.category?n.category:O.OTHER;return I.extend(i,{eventEntityId:n&&n.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:K.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()});return I.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:K.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e.apiName,r=e.category||O.OTHER,a=e.id,o=p(e);return I.extend(t,{eventApiName:i,eventCategory:r,eventEntityId:a,eventTags:o,pageId:e.pageId,selector:n})}function c(){var e=f({activeViewStates:[],visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()});return I.extend(e,{eventTags:{}})}function u(e,t,n,i){var r=null,a=null,o=null;if(t.experimentId){var s=I.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var c=I.find(s.variations,{id:t.variationId});c&&(a=c.name||null)}}var u=F.getReferrer()||R.getReferrer(),l={sessionId:H.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:ee.getRandomId(),decisionId:e,activationId:j.getActivationId(),namespace:j.getNamespace(),timestamp:A.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:j.getAccountId(),projectId:j.getProjectId(),revision:String(j.getRevision()),clientName:z.getClientName(),clientVersion:z.getClientVersion(),referrer:u,integrationStringVersion:i.integrationStringVersion||1,integrationSettings:I.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=I.extend({},e,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:I.isNull(e.clientName)?b.NAME:e.clientName,integrationStringVersion:I.isNull(e.integrationStringVersion)?1:e.integrationStringVersion,anonymizeIP:I.isNull(j.getAnonymizeIP())?void 0:j.getAnonymizeIP(),activationId:j.getActivationId(),decisionTicketAudienceIds:[],sessionId:H.getSessionId(),activeViewStates:[],userFeatures:h(n),layerStates:q.getLayerStatesForAnalytics()});return i}function d(e,t,n,i){return{decisionId:e,timestamp:A.now(),revision:j.getRevision(),clientName:z.getClientName(),clientVersion:z.getClientVersion(),projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:H.getSessionId(),visitorId:ee.getRandomId(),decision:t,decisionTicket:n,userFeatures:h(i),layerStates:q.getLayerStatesForAnalytics()}}function f(e){var t=F.getReferrer()||R.getReferrer(),n={eventId:B.generate(),timestamp:A.now(),revision:j.getRevision(),clientName:z.getClientName(),clientVersion:z.getClientVersion(),projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:H.getSessionId(),isGlobalHoldback:j.isGlobalHoldback(),namespace:j.getNamespace(),referrer:t,visitorId:ee.getRandomId(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:h(e.visitorProfile)};return n}function g(e){var t=K.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function p(e){var t={};return e.pageId?g(e.pageId):t}function h(e){var t=Y.getAllPlugins(D.PluginTypes.visitorProfileProviders),n=I.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return I.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!I.isUndefined(a)){I.isObject(a)?o=I.map(a,(function(e,t){var n=I.isObject(e)?e:{value:e};return I.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=I(o).map((function(e){return I.pick(I.extend({},i,e),I.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){x.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=_(e,n);x.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),x.debug("Calling each with data: ",t),I.each(i,(function(e){try{x.debug("Calling plugin: "+e.name),e.hookFn(t),x.debug("Called plugin: "+e.name)}catch(e){x.error(e)}}))}function _(e,t){var n=[];return I.each(Y.getAllPlugins(D.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){x.error(e)}})),n}function m(e,t,n){var i=E(e,t);x.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),x.debug("Calling each with data: ",n),I.each(i,(function(e){try{x.debug("Calling plugin: "+e.name),e.hookFn(n),x.debug("Called plugin: "+e.name)}catch(e){x.error(e)}}))}function E(e,t){var n=[];return I.each(Y.getAllPlugins(D.PluginTypes.analyticsTrackers),(function(i,r){I.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var I=n(2),y=n(7),S=n(86),T=n(72),A=n(24),b=n(32),w=n(16),R=n(81),D=n(25),O=n(74),N=n(87),C=n(111),L=n(112),P=n(9),V=n(113),x=n(23),k=(n(84),n(12).Promise),F=n(99),M=n(114),U=n(116),G=n(115),B=n(5),z=w.get("stores/client_metadata"),j=w.get("stores/global"),H=w.get("stores/session"),K=w.get("stores/view"),Y=w.get("stores/plugins"),q=w.get("stores/layer"),W=w.get("stores/layer_data"),X=w.get("stores/observed_redirect"),Q=w.get("stores/pending_redirect"),$=w.get("stores/visitor"),J=w.get("stores/directive"),Z=w.get("stores/event_data"),ee=w.get("stores/visitor_id"),te="COOKIE",ne=!0,ie=1e3;t.trackClientActivation=function(){if(J.shouldSendTrackingData()){var e=c();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t,n){t=t||{},n||(n=Z.getByApiName(e));var i=a(e,t,n),r={name:e,type:L.CUSTOM,category:i.eventCategory,tags:I.omit(i.eventTags,"revenue")};if(I.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:n?n.name||n.apiName:e,apiName:n?n.apiName:void 0,type:L.CUSTOM,tags:I.omit(i.eventTags,"revenue"),category:i.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData())return T.addEvent(r),v("onCustomEvent",i),i},t.trackDecisionEvent=function(e,t,n){n||(n=W.get(e.layerId));var a=B.generate();P.dispatch(y.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:a});var o;if(te){o=u(a,e,t,n);var s=Q.isExpectingRedirect(),c=Q.getLayerId();if(s&&c===n.id){M.persist(o,te);var d=V.description(n);x.log("Relaying decision for redirect Campaign",d,V.description(n))}}if(!J.shouldSendTrackingData())return void x.log("Analytics / Not tracking decision for Campaign",V.description(n));var f=$.getVisitorProfile();if(te){var g=l(o,e.isLayerHoldback,f);i(g,n),r(a,e,t,f,!0,n)}else r(a,e,t,f,!1,n)},t.trackPostRedirectDecisionEvent=function(){if(!J.shouldSendTrackingData())return k.resolve();if(X.hasTracked())return k.resolve();var e=X.get();if(!e)return k.resolve();var t=$.getVisitorProfile(),n=l(e,!1,t),i=G.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,m(i,[G.PostRedirectPolicies.TRACK_IMMEDIATELY],n),ne){var r=new k(function(e,t){var n=N.on({filter:{type:C.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),N.off(n)}})}),a=U.makeTimeoutPromise(ie);return k.race([r,a]).then((function(){x.log("Calling trackers after successful sync")}),(function(e){x.warn("Calling trackers after failed sync:",e)})).then((function(){t=$.getVisitorProfile(),n=l(e,!1,t),n.timing=G.TrackLayerDecisionTimingFlags.postRedirectPolicy,m(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),P.dispatch(y.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){x.error("Error when calling trackers after sync:",e)}))}return m(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),P.dispatch(y.REGISTER_TRACKED_REDIRECT_DATA),k.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData())return T.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e,t){if(t||(t=K.getViewState(e.id)),!t.isActive)return void x.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:L.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:L.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData()?(T.addEvent(i),P.dispatch(y.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(9),c=o.get("stores/global"),u=o.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return s.dispatch(r.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:u.getSessionId(),activationId:c.getActivationId(),timestamp:a.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"},t.createSingle=function(e,t,n){var i={id:e,policy:"single_experiment",holdback:0,experiments:[{id:t,variations:[{id:n,actions:[]}]}]};return i},t.createLayerState=function(e,t,n){var i={layerId:e,decision:{layerId:e,experimentId:t,variationId:n,isLayerHoldback:!1},decisionTicket:{audienceIds:[]}};return i},t.getIntegrationTypes=function(e){return i.keys(i.reduce(i.keys(e.integrationSettings),(function(e,t){return i.isNaN(Number(t))||(t="custom"),e[t]=1,e}),{}))}}),(function(e,t,n){function i(e){try{var t=r(e)}catch(e){return _.error("Relay / Error computing redirect relay cookie: ",e),void g.emitError(e)}_.debug("Relay / Setting redirect relay cookie:",t);try{f.set(h.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){_.error("Relay / Failed to set redirect relay cookie",e),g.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=S[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+I+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);
if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=f.get(h.COOKIES.REDIRECT,!1);if(e)return _.log("Relay / Found redirect cookie:",e),e}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void _.warn("Relay / Skipping invalid segment:",e);var i=f.safeDecodeURIComponent(n[0]),r=T[i];if(!r&&(r=l.find(y,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+I)})),!r))return void _.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+I.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return _.warn("Relay / Skipping segment due to decode or parse error:",e,t),void g.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=E.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){_.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function c(e,t){var n=null,i=E.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){_.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function u(e){var t=e.pageId||void 0;v.dispatch(d.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),v.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),v.dispatch(d.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(7),f=n(76),g=n(86),p=n(16),h=n(25),v=n(9),_=n(23),m=n(115),E=p.get("stores/plugins"),I=".",y=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:c,isNullable:!0}],S={},T={};l.forEach(y,(function(e){S[e.name]=e,T[e.relayName]=e})),t.persist=function(e,t){t===m.RedirectRelayMedia.COOKIE?i(e):_.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(e){if(e||(e=a()),e){var t=o(e);if(t){var n=[];return l.forEach(y,(function(e){(l.isNull(t[e.name])||l.isUndefined(t[e.name]))&&(e.isNullable?t[e.name]=null:(delete t[e.name],n.push(e.name)))})),n.length?void _.error("Relay / Observed redirect data with missing fields:",n):(v.dispatch(d.LOAD_REDIRECT_DATA,t),v.dispatch(d.ADD_CLEANUP_FN,{lifecycle:h.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){u(t)}}),t)}}}}),(function(e,t,n){var i=n(8);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(12).Promise,r=n(41);t.makeTimeoutPromise=function(e){return new i(function(t,n){r.setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"],n=r.extend({},e);return n.changeSet=r.map(e.changeSet,(function(e){return r.pick(l.dereferenceChangeId(e),t)})),n}var r=n(2),a=n(16),o=a.get("stores/audience_data"),s=n(87),c=n(111),u=n(96),l=n(98);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:c.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=l.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=l.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitViewsActivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:c.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:c.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:c.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:c.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:e.type,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId};u.defineProperty(t,"changes",(function(){return i(e).changeSet}),"actionAppliedEvent");var n={type:c.TYPES.ACTION,name:"applied",data:t};s.emit(n)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={decision:e};u.defineProperty(n,"actions",(function(){return r.map(t,i)}),"appliedAllForDecisionEvent");var a={type:c.TYPES.ACTION,name:"appliedAllForDecision",data:n};s.emit(a)},t.emitSendEvents=function(){var e={type:c.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:c.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){function i(){var e=Boolean(E.result(window.optimizely,"initialized"));b.dispatch(I.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){b.dispatch(I.LOAD_DIRECTIVE,{mutationObserverAPISupported:N.isMutationObserverAPISupported()})}function a(){var e=N.getUserAgent()||"";if(!E.isString(e))return void w.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(E.includes(e,t))return w.warn("Directive / Matches bot:",t),!0};E.some(t,n)&&(w.log("Directive / Disabling tracking"),b.dispatch(I.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=S.get(A.COOKIES.OPT_OUT),n=D.getQueryParamValue(C.OPT_OUT),i="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.",a="true"===n||"false"===n;e?a&&n!==e?t.setOptOut("true"===n):b.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):"true"===n&&t.setOptOut(!0),a&&N.alert("true"===n?i:r)}function s(){var e=!1,t=[C.AB_PREVIEW,C.DISABLE];t.push(C.EDITOR);for(var n=0;n<t.length;n++)if("true"===D.getQueryParamValue(t[n])){w.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}b.dispatch(I.LOAD_DIRECTIVE,{disabled:e})}function c(){b.dispatch(I.LOAD_DIRECTIVE,{isPreview:!1})}function u(){var e=D.getQueryParamValue(C.LEGACY_PREVIEW);e&&w.log("Directive / Is legacy preview mode"),b.dispatch(I.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){b.dispatch(I.LOAD_DIRECTIVE,{isEditor:!1})}function d(){b.dispatch(I.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=N.getGlobal("optlyDesktop"),t=!(!e||E.isUndefined(e["p13nInner"]));t&&w.log("Directive / Is running in desktop app editor"),b.dispatch(I.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function g(){var e="true"===D.getQueryParamValue(C.EDITOR_V2);e&&w.log("Directive / Is running in editor"),b.dispatch(I.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function p(){var e=S.get(A.COOKIES.TOKEN)||null,t=D.getQueryParamValue(C.TOKEN)||e;b.dispatch(I.LOAD_DIRECTIVE,{projectToken:t})}function h(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=D.getQueryParamValue(C.FORCE_AUDIENCES);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=O.parse(e);t=i.forceAudienceIds}catch(t){var r=new R("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};y.emitError(r,a)}t.length&&w.warn("Directive / Force parameters disabled - ignoring force audience IDs.")}function v(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=D.getQueryParamValue(C.FORCE_VARIATIONS);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=O.parse(e);t=i.forceVariationIds}catch(t){var r=new R("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};y.emitError(r,a)}t.length&&w.warn("Directive / Force parameters disabled - ignoring force variation IDs.")}function _(){var e=D.getQueryParamValue(C.FORCE_TRACKING);e&&b.dispatch(I.LOAD_DIRECTIVE,{forceTracking:e})}function m(){var e="OFF",t=D.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&w.setLogMatch(n[1])}w.setLogLevel(e)}var E=n(2),I=n(7),y=n(86),S=n(76),T=n(77).create,A=n(25),b=n(9),w=n(23),R=t.JSONParseError=T("JSONParseError"),D=n(119),O=n(26),N=n(41),C={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){m(),a(),i(),r(),o(),s(),l(),c(),u(),d(),f(),g(),p(),h(),v(),_()};var L=31536e3;t.setOptOut=function(e){e?(w.warn("Directive / Opting out"),S.set(A.COOKIES.OPT_OUT,"true",{maxAge:10*L},!0)):S.remove(A.COOKIES.OPT_OUT),b.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(120),r=n(41);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}}),(function(e,t,n){var i=n(2),r=n(41);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1]},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(2),r=n(77).BaseError,a=n(24),o=n(16),s=n(81),c=n(23),u=n(41),l=n(91),d=o.get("stores/client_metadata"),f=o.get("stores/global"),g="https://errors.client.optimizely.com";t.handleError=function(e,t){function n(){return l.request({url:g+"/log",method:"POST",data:_,contentType:"application/json"}).then((function(e){c.log("Error Monitor / Logged error with response: ",e)}),(function(e){c.error("Failed to log error, response was: ",e)}))}var o=e.name||"Error",p=e.message||"",h=e.stack||null;e instanceof r&&(p instanceof Error?(p=p.message,h=e.message.stack):h=null);var v=!1,_={timestamp:a.now(),clientEngine:v&&t&&t.engine?t.engine:d.getClientName(),clientVersion:d.getClientVersion(),accountId:f.getAccountId(),projectId:f.getProjectId(),errorClass:o,message:p,stacktrace:h},m=i.map(f.getExperimental(),(function(e,t){return{key:"exp_"+t,value:String(e)}}));t&&i.forEach(t,(function(e,t){i.isObject(e)||m.push({key:t,value:String(e)})}),[]),i.isEmpty(m)||(_.metadata=m),c.error("Logging error",_),s.isLoaded()?n():u.addEventListener("load",n)}}),(function(e,t,n){var i=n(2);t.create=function(e,t,n,r){var a=i.extend({category:"other"},r,{id:e,apiName:t,eventType:n});return a}}),(function(e,t,n){var i=n(2),r=n(7),a=n(16),o=n(25),s=n(87),c=n(9);t.registerApiModule=function(e,t){i.isArray(t)&&(t=a.evaluate(t)),c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=a.get(e);n||a.register(e,t)},t.registerVisitorProfileProvider=function(e){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?a.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var o;o=i.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var n=v.getPlugin(l.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):g.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(7),o=n(117),s=n(125),c=n(24),u=n(16),l=n(25),d=n(112),f=n(9),g=n(23),p=n(126),h=u.get("stores/event_data"),v=u.get("stores/plugins"),_=u.get("stores/rum"),m=u.get("stores/view"),E=u.get("stores/view_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=m.getActiveViewStates();r.each(e,(function(e){var n=E.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=p.getTagValue(t)}catch(e){e instanceof p.Error?g.warn("Page / Ignoring unparseable tag",t,e):g.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(v.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=u.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,n){n&&t.setUserSuppliedViewTags(e.id,n),t.activateMultiple([e],n)},t.getViewsAndActivate=function(e){var n=E.getAllViewsForActivationType(e);t.activateMultiple(n)},t.activateMultiple=function(e,n){var s=[];r.each(e,(function(e){var c,u=m.getViewState(e.id),d=t.createViewTicket();if(u.isActive)if(e.deactivationEnabled)try{t.hasValidStaticConditions(e,d)||t.deactivate(e)}catch(n){g.error("Page / Error evaluating whether to deactivate page ",t.description(e),n)}else g.log("Not activating Page, already active ",t.description(e));else{try{if(c=t.hasValidStaticConditions(e,d),!c)return r.isBoolean(u.isActive)||t.setViewActiveState(e,!1),void g.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions)}catch(n){return r.isBoolean(u.isActive)||t.setViewActiveState(e,!1),void g.error("Page / Error evaluating whether to activate page ",t.description(e),n)}if(s.push(e),t.setViewActiveState(e,!0),g.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:n}),_.getSampleRum()){var p=e.activationType||l.ViewActivationTypes.immediate;f.dispatch(a.RECORD_ACTIVATION_TYPE_USAGE,{activationType:p,entityId:e.id})}var v=h.getByPageId(e.id);i(v,!0)}})),r.isEmpty(s)||o.emitViewsActivated({views:s})},t.deactivate=function(e){var n=m.getViewState(e.id);if(!n.isActive)return void g.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),g.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=h.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:c.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){var n={};if(r.isEmpty(e.staticConditions))return!0;var i=v.getAllPlugins(l.PluginTypes.viewMatchers);g.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),g.debug("Matching to current value:",t);var o=s.evaluate(e.staticConditions,(function(e){var r=e.type,a=i[r];if(!a)throw new Error("Page / No matcher found for type="+r);return a&&(n[e.type]||(n[e.type]=!0)),a.match(t,e)}));return g.groupEnd(),_.getSampleRum()&&o&&f.dispatch(a.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:r.keys(n),entityId:e.id}),o},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged||e===l.ViewActivationTypes.immediate||!e},t.create=function(e,t){var n={id:e,apiName:t,category:"other"};return n},t.createState=function(e){var t={id:e,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}};return t}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),u.groupCollapsed('Condition / Applying operator "'+i+'" with args',c.stringify(r));try{n=d[i](r,t),u.debug("Condition / Result:",n)}finally{u.groupEnd()}return n}return n=t(e),u.debug("Condition / Evaluated:",c.stringify(e),":",n),n}var s=n(2),c=n(26),u=n(23),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){var i=n(25).PluginTypes,r=n(16),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(127),t.Error=n(128).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(77).create;t.Error=i("TagError")}),(function(e,t){}),(function(e,t,n){var i=n(16);i.register("env/jquery",n(131))}),(function(e,t,n){var i,r=n(41);try{i=$}catch(e){}var a=r.getGlobal("$");i&&i!==a?e.exports=i:e.exports=a}),(function(e,t,n){var i=n(23),r=n(41),a="optimizelyDataApi";t.registerFunction=function(e,t){var n=r.getGlobal(a);n||(n={},r.setGlobal(a,n)),n[e]||(n[e]=t)},t.unregisterFunction=function(e){var t=r.getGlobal(a);t&&t[e]&&(t[e]=function(){i.log('Ignoring attempt to call "'+a+"."+e+'" which has been unregistered.')})},t.getFunction=function(e){return r.getGlobal(a)[e]}}),(function(e,t,n){var i=n(81),r=n(23),a=n(91);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);i.write('<script id="'+o+'" src="'+e+'"></script>');var s=i.querySelector("#"+o);if(!s)throw new Error("Document.write failed to append script");s.onload=n,s.onerror=function(i){r.warn("Failed to load script ("+e+") synchronously:",i),t.addScriptAsync(e,n)}}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var c=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:c})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){function i(){var e=null;R.isNumber(e)&&0===_e.getCount()?($.log("Activating after delay of",e,"ms because no Experiments are running"),q.dispatch(L.SET_RUM_DATA,{data:{activateDfd:!0}}),ue.setTimeout(V.emitActivateEvent,e)):V.emitActivateEvent()}function r(e){Oe.handleError(e.data.error,e.data.metadata)}function a(){R.isArray(window.optimizely)&&(window.optimizely=R.filter(window.optimizely,(function(e){var t=!0;return!De.push(e,t)})))}function o(){var e=n(85),i=!!ce.getCurrentId(),r=!!i&&ce.hasSomeData();i?r?$.log("xd / Existing visitor; has data on this origin"):$.log("xd / Existing visitor; new to this origin"):$.log("xd / New visitor");var a=he.getAccountId(),o="https://a7871036.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),c="/client_storage/a"+a+".html";e.subscribe((function(e,t){ce.checkKeyForVisitorId(e)&&Q.setItem(e,t)}));var u=e.fetchAll().then((function(t){var n=Re.getCanonicalOrigins();if(n){var i=e.getXDomainUserId(t,n);i&&($.log("Syncing cross-origin visitor randomId:",i),ce.maybePersistVisitorId({randomId:i}))}return ce.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(e){if(ce.loadForeignData(),i&&!r){var t=!R.isEmpty(e);$.debug("xd / Loaded foreign data? ",t),s(t)}$.log("Loaded visitor data from foreign origins"),V.emitOriginsSyncedEvent()}),(function(e){throw i&&!r&&($.debug("xd / Failed to load foreign data:",e),s(!1,e)),e}));return ne.all([e.load(o,c)["catch"]((function(e){throw $.debug("xd / Failed to load iframe:",e),i&&!r&&s(!1,e),e})),u["catch"]((function(e){$.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",e.message),$.debug("xd / Enqueuing sync to happen after visitorId set."),q.dispatch(L.ADD_CLEANUP_FN,{lifecycle:j.Lifecycle.postVisitorProfileLoad,cleanupFn:V.emitOriginsSyncedEvent})}))])}function s(e,t){q.dispatch(L.SET_RUM_DATA,{data:{extras:{xdAttempt:e,xdError:t?t.toString():void 0}}})}function c(e){var t=Se.getVisitorProfile();return ce.populateEagerVisitorData(e,t)}function u(e,t,n){e=e||[];var i=Ie.getAllPlugins(j.PluginTypes.visitorProfileProviders),r=he.getGlobalHoldbackThreshold(),a=Se.getVisitorProfile();ce.populateLazyVisitorData(i,a);var o=be.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,c=Se.getVisitorProfile();if(t&&!Pe){var u=we.getVariationIdMap();s=u[t.id]}var l={bucketingId:o,visitorProfile:c,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&G.isPageIdRelevant(t)?R.map(n,(function(e){return G.createTicket(R.extend({},l,{pageId:e}))})):[G.createTicket(l)]}function l(e){return{bucketingId:be.getBucketingId(),preferredLayerId:we.getPreferredLayerMap()[e.id]}}function d(e){var n=_e.getAllByPageIds(e),i=pe.getForceVariationIds(),r=pe.getForceAudienceIds(),a=!R.isEmpty(i);a&&$.log("Force variations are in use. Disabling mutual exclusivity.");var o=a?{individual:n}:R.reduce(n,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=ve.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});$.log("Deciding Campaigns/Experiments for Page(s)",e);var s=R.map(o.groups,W.description).join(", ");$.log("Groups:",s);var c=R.map(o.individual,X.description).join(", ");$.log("Campaigns/Experiments not in Groups (by Campaign id):",c);var u=R.map(o.groups,R.partial(f,i,r,e))||[],l=R.map(o.individual,(function(n){var a=R.filter(n.pageIds,R.partial(R.includes,e));return t.decideAndExecuteLayerASAP(i,r,a,n)})),d=u.concat(l);return ne.all(d).then((function(t){var n=R.filter(t,(function(e){return!!e}));return $.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",R.map(n,X.description).join(", ")),n}))}function f(e,n,i,r){try{var a=l(r),o=G.decideGroup(r,a);if(o.reason)return $.debug("Not activating Group",W.description(r),"; reason:",o.reason),ye.getSampleRum()&&q.dispatch(L.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),ne.resolve();var s=_e.get(o.layerId);if(!s)return $.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),ne.resolve();var c=R.filter(s.pageIds,R.partial(R.includes,i));return R.isEmpty(c)?($.debug("Not activating Group",W.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),ne.resolve()):(ye.getSampleRum()&&q.dispatch(L.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),t.decideAndExecuteLayerASAP(e,n,c,s))}catch(e){return $.error("Error getting decision for Group",W.description(r),"; ",e),ne.reject(e)}}function g(e,t,n,i){return new ne(function(r,a){try{m(i,e,t,n,(function(a){R.each(a,(function(r){var a=r.pageId?[r.pageId]:n;$.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),p(i,e,t,a,r)})),r(i)}))}catch(e){$.error("Error getting decision for Campaign: "+X.description(i),e),a(e)}})}function p(e,n,i,r,a){var o=X.description(e);$.log("Activating Campaign",o,"on Page(s)",r),i.length&&($.log("Applying force audienceIds:",i,"to Campaign",o),a=R.cloneDeep(a),a.audienceIds=i);var s=t.decideLayer(e,a,n),c=!(!n.length&&!i.length),u=t.getActionsForDecision(e,s,c),l=w(u.actions,r);if(u.maybeExecute?h(l,e,s,r):$.warn("Not preparing actions because LIVE_CHANGES is false"),R.forEach(r,(function(){P.trackDecisionEvent(s,a)})),V.emitLayerDecided({layer:e,decisionTicket:a,decision:s}),s.error)throw s.error;if(ye.getSampleRum()){q.dispatch(L.RECORD_LAYER_POLICY_USAGE,{policy:e.policy,layerId:e.id});var d=_(u.actions);q.dispatch(L.RECORD_CHANGE_TYPE_USAGE,{changeTypes:R.keys(d),layerId:e.id}),R.isEmpty(e.integrationSettings)||q.dispatch(L.RECORD_INTEGRATION_USAGE,{integrations:X.getIntegrationTypes(e),layerId:e.id})}return G.isInCohort(s)?void(u.maybeExecute?v(l,e,s,r):$.warn("Not executing actions because LIVE_CHANGES is false")):void $.log("Not activating Campaign: "+X.description(e)+"; not in the cohort because:",s.reason)}function h(e,t,n,i){var r=X.description(t);$.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),R.forEach(e,C.prepareAction)}function v(e,t,n,i){var r=X.description(t);return $.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),ne.all(R.map(e,(function(e){return C.executePreparedAction(e).then(R.partial(V.emitActionAppliedEvent,e))}))).then((function(){$.log("All page actions for",n,"applied:",e),V.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){$.warn("Error evaluating page actions for decision",n,"because:",e)}))}function _(e){var t={};return R.each(e,(function(e){R.each(e.changeSet,(function(e){t[e.type]||(t[e.type]=!0)}))})),t}function m(e,t,n,i,r){if(t.length||n.length)return void r(u([],void 0,i));var a=X.relatedAudienceIds(e),o=R.reduce(a,(function(e,t){var n=de.get(t);return n&&e.push(n),e}),[]),s=Ie.getAllPlugins(j.PluginTypes.audienceMatchers);if(ye.getSampleRum()){var c={};if(R.each(o,(function(e){R.extend(c,E(e.conditions,s))})),!R.isEmpty(c)){var l=R.keys(c);q.dispatch(L.RECORD_AUDIENCE_USAGE,{audienceTypes:l,layerId:e.id})}}S(o,s,X.getActivationTimeout(e),(function(){var t=u(o,e,i);R.map(t,(function(t){I(t,o,e)})),r(t)}))}function E(e,t){var n={};return R.each(e,(function(e){R.isArray(e)?R.extend(n,E(e,t)):R.isObject(e)&&t[e.type]&&(n[e.type]=!0)})),n}function I(e,t,n){var i=R.map(e.audienceIds,R.bind(de.get,de)),r=R.filter(t,(function(t){return!R.includes(e.audienceIds,t.id)}));$.log("When deciding Campaign",X.description(n),"visitor is in audiences:",y(i),"and not in audiences:",y(r))}function y(e){var t=[];return R.each(e,(function(e){t.push(e.name,e)})),t}function S(e,t,n,i){var r=R.reduce(e,(function(e,n){return R.extend(e,x.requiredAudienceFieldsForConditions(n.conditions,t))}),{}),a=R.reduce(r,(function(e,t){if(R.isUndefined(ce.getAttribute(t))){var n=ce.getPendingAttributeValue(t);R.isUndefined(n)||e.push(n)}return e}),[]);if(0===a.length)return i();var o=[].concat(e),s=ie.firstToResolve(R.map(a,(function(e){return ne.resolve(e).then((function(){var e=Se.getVisitorProfile();if(o=R.filter(o,(function(n){return R.isUndefined(x.isInAudience(e,n,t))})),!R.isEmpty(o))throw new Error("At least one audience is still pending")}))})));ne.race([s,new ne(function(e,t){ue.setTimeout(t,n)})]).then((function(){$.log("Activating Campaign after pending Audiences resolved",e),i()}),(function(){$.log("Activating Campaign after timeout on Audiences",e),i()}))}function T(e,t,n){var i,r=X.description(e);return i=n.length?G.getDummyLayerDecision(e,n):G.decideLayer(e,t),$.log("Recording decision for Campaign",r,t,"->",i),X.recordLayerDecision(e.id,t,i),Pe||(i.variationId&&i.experimentId&&ce.updateVariationIdMap(e.id,i.experimentId,i.variationId),e.groupId&&ce.updatePreferredLayerMap(e.groupId,e.id)),i}function A(e){var t=ge.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();q.dispatch(L.CLEAR_CLEANUP_FN,{lifecycle:e})}}function b(e,t,n){var i=X.description(e),r="NOT applying changes for Campaign",a={actions:[],maybeExecute:!1};return a.actions=[].concat(fe.getLayerActions(t.layerId)||[],fe.getExperimentActions(t.experimentId)||[],fe.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!n&&he.isGlobalHoldback()?($.log(r,i,"(visitor is in global holdback)"),a):t.isLayerHoldback?($.log(r,i,"(visitor is in layer holdback)"),a):t.experimentId&&t.variationId?(a.maybeExecute=!0,$.log("Got Actions for Campaign:",i,a.actions),a):($.log(r,i,"(visitor is not eligible for any Experiments)"),a)}function w(e,t){return R.filter(e,(function(e){return R.isUndefined(e.pageId)||R.includes(t,e.pageId)}))}var R=n(2),D=n(77).create,O=t.ActivationCodeError=D("ActivationCodeError"),N=t.ProjectJSError=D("ProjectJSError"),C=n(135),L=n(7),P=n(110),V=n(117),x=n(139),k=n(76),F=n(86),M=n(109),U=n(24),G=n(140),B=n(16),z=n(81),j=n(25),H=n(87),K=n(111),Y=n(145),q=n(9),W=n(144),X=n(113),Q=n(82).LocalStorage,$=n(23),J=n(146),Z=n(84),ee=n(123),te=n(88),ne=n(12).Promise,ie=n(147),re=n(114),ae=n(116),oe=n(137),se=n(124),ce=n(75),ue=n(41),B=n(16),le=B.get("stores/session"),de=B.get("stores/audience_data"),fe=B.get("stores/action_data"),ge=B.get("stores/cleanup"),pe=B.get("stores/directive"),he=B.get("stores/global"),ve=B.get("stores/group_data"),_e=B.get("stores/layer_data"),me=B.get("stores/layer"),Ee=B.get("stores/pending_events"),Ie=B.get("stores/plugins"),ye=B.get("stores/rum"),Se=B.get("stores/visitor"),Te=B.get("stores/view_data"),Ae=B.get("stores/view"),be=B.get("stores/visitor_id"),we=B.get("stores/visitor_bucketing"),Re=B.get("stores/xdomain"),De=n(93),Oe=n(121),Ne=n(1),Ce=1e3,Le=!1,Pe=!1,Ve=!1,xe=Pe||Ve,ke=1e3,Fe=t;
t.initialize=function(e){var n=e.clientData;if(M.normalizeClientData(e.clientData),H.on({filter:{type:"error"},handler:r}),q.dispatch(L.DATA_LOADED,{data:n}),$.log("Initialized with DATA:",n),a(),pe.isDisabled()||pe.shouldOptOut())return void $.log("Controller / Is disabled");Ne.queueBeacons(),z.isReady()?q.dispatch(L.SET_DOMCONTENTLOADED):z.addReadyHandler((function(){q.dispatch(L.SET_DOMCONTENTLOADED)}));var o=!1,s=k.get(j.COOKIES.REDIRECT);if(s){var c=s.match(/^(\d+)\|(.*)/);if(c){$.debug("Found legacy redirect data:",s);var u=c[1],l=c[2];q.dispatch(L.INITIALIZE_STATE,{effectiveVariationId:u,effectiveReferrer:l}),o=!0}}if(!xe){Z.time("projectJS");var d=he.getProjectJS();if(R.isFunction(d))try{Y.apply(d)}catch(e){$.error("Error while executing projectJS: ",e),F.emitError(new N(e))}Z.timeEnd("projectJS")}R.each(e.plugins||[],(function(e){try{e(ee)}catch(e){F.emitInternalError(e)}})),R.each(he.getPlugins()||[],(function(e){try{Y.apply(e,[ee])}catch(e){F.emitError(e)}})),o||re.load();var f=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Se.observe(ce.persistVisitorProfile),me.observe(ce.persistLayerStates),le.observe(ce.persistSessionState),Ee.observe(J.persistPendingEvents),Pe||we.observe(ce.persistVisitorBucketingStore),H.off(f)}});H.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),H.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var g=J.getPendingEvents();if(g&&(q.dispatch(L.LOAD_PENDING_EVENTS,{events:g}),J.retryPendingEvents(g)),H.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),V.emitInitializedEvent(),!pe.shouldActivate())return ne.resolve();var p=[];if(Re.isDisabled())i();else{var h=t.initializeXDomainStorage();p.push(h);var v=Boolean(Re.getCanonicalOrigins());if(v){var _=ae.makeTimeoutPromise(ke);ne.race([h,_])["catch"]((function(e){$.error("Failed to initialize xDomain storage: ",e)})).then(i)["catch"](Oe.handleError)}else i()}return ne.all(p)},t.activate=function(){try{var e=[];$.log("Activated client"),A(j.Lifecycle.preActivate);var t=U.now();q.dispatch(L.ACTIVATE,{activationId:String(t),activationTimestamp:t});var n=Te.getAll();se.registerViews(n),ce.setId(ce.getOrGenerateId()),e.push(P.trackPostRedirectDecisionEvent()),q.dispatch(L.MERGE_VARIATION_ID_MAP,{variationIdMap:ce.getVariationIdMap()}),q.dispatch(L.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:ce.getPreferredLayerMap()}),A(j.Lifecycle.postVisitorProfileLoad),e.push(c(Ie.getAllPlugins(j.PluginTypes.visitorProfileProviders)).then((function(){$.log("Populated visitor profile")})));var i=u(),r=G.decideGlobal(i);$.log("Made global decision",i,"->",r),q.dispatch(L.RECORD_GLOBAL_DECISION,r);var a=P.trackClientActivation();a?$.log("Tracked activation event",a):$.log("Not tracking activation event");var o=Fe.setUpViewActivation(n);return Le?se.activateMultiple(o):R.each(o,(function(e){se.activateMultiple([e])})),A(j.Lifecycle.postViewsActivated),A(j.Lifecycle.postActivate),V.emitActivatedEvent(),ne.all(e).then((function(){H.emit({type:K.TYPES.LIFECYCLE,name:"activateDeferredDone"}),$.log("All immediate effects of activation resolved")}),F.emitError)}catch(e){return F.emitError(e),ne.reject(e)}},Fe.setUpViewActivation=function(e){var t=[];return R.each(e,(function(e){R.isBoolean(Ae.getViewState(e.id).isActive)?$.debug("Skipping page: already evaluated, presumably at the edge",se.description(e)):se.shouldTriggerImmediately(e.activationType)?t.push(e):e.activationType===j.ViewActivationTypes.callback?($.debug("Setting up conditional activation for Page",se.description(e)),Fe.activateViewOnCallback(e)):e.activationType===j.ViewActivationTypes.polling?($.debug("Setting up polling activation for Page",se.description(e)),te.pollFor(R.partial(Y.apply,e.activationCode),null,R.partial(oe.isTimedOut,U.now())).then((function(){se.activateMultiple([e])}))["catch"]((function(t){$.warn("Failed to activate view ",e,t)}))):e.activationType!==j.ViewActivationTypes.manual&&F.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},Fe.activateViewOnCallback=function(e){var t=function(t){var n=R.extend({},t,{pageName:e.apiName,type:"page"});De.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return Ae.isViewActive(e.id)}});try{Y.apply(e.activationCode,[t,n])}catch(t){var i=new O("("+t.toString()+") in activationCode for "+se.description(e));F.emitError(i,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,n=e.data.views,i=R.map(n,"id");try{if(!be.getBucketingId())throw new Error("View activated with no visitorId set");var r=d(i)["catch"](F.emitError);return t=ne.all(R.map(n,(function(e){var t=function(){se.parseViewTags(e);var t=P.trackViewActivation(e);t?$.log("Tracked activation for Page",se.description(e),t):$.log("Not Tracking activation for Page",se.description(e))};return z.isReady()?ne.resolve(t()):te.pollFor(z.isReady,Ce).then(t)}))),ne.all([r,t])}catch(e){F.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=fe.getAllActionIdsByPageId(t.id);R.each(n,(function(e){var n=fe.getActionState(e);n&&(R.each(n,(function(e,n){if(e.cancel)try{e.cancel(),$.debug("Controller / Canceled change",n,"observation due to deactivation of page:",t)}catch(e){$.error("Controller / Error canceling change",n,"observation upon deactivation of page.",e)}if(t.undoOnDeactivation&&e.undo)try{e.undo(),$.debug("Controller / Undid change",n,"due to deactivation of page:",t)}catch(e){$.error("Controller / Error undoing change upon deactivation of page.",e)}})),q.dispatch(L.REMOVE_ACTION_STATE,{actionId:e}),$.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={push:De.push};xe||(e.get=De.get);var t=window.optimizely;R.isArray(t)&&R.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.persistItemsWithId=function(e){return R.each(e,(function(e,t){ce.checkKeyForVisitorId(t)&&Q.setItem(t,e)})),e},t.initializeXDomainStorage=o,t.decideAndExecuteLayerASAP=g,t.decideLayer=T,t.getActionsForDecision=b}),(function(e,t,n){function i(e,t,n){var i=_.getActionState(t.id);if(!i)return void g.warn("Action / Attempted to prepare change for inactive action: ",t);var r=_.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void g.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:I.create(e,t,n)};f.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void g.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var u=m.getChange(t);if(!u){var d="Change with id "+t+" is absent";return o.length&&(d+=" but listed as a dependency for "+o[o.length-1]),void g.warn(d)}e[t]=new p(function(d){var f=a.map(u.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(u.src){var v="change_"+u.src,E=c.makeAsyncRequest(v,(function(){return h.addScriptAsync("https://cdn.optimizely.com/public/7871036/data"+u.src,(function(){c.resolveRequest(v)}))})).then((function(){var e=m.getChange(u.id);e||s.emitError(new S("Failed to load async change from src: "+u.src)),i(e,n,l.now())}));f.push(E)}p.all(f).then((function(){var e=l.now(),i=_.getChangeApplier(t,n.id);return i?(g.debug("Action / Applying change:",u),i.apply().then((function(t){t?g.log(t):g.debug("Action / Applied change for the first time in "+(l.now()-e)+"ms:",u),d()}))):(g.debug("Action / Not applying change ",t," - No changeApplier found."),void d())}))["catch"]((function(e){g.error("Action / Failed to apply change:",u,e),d()}))})}return e[t]}var a=n(2),o=n(7),s=n(86),c=n(6),u=n(77).create,l=n(24),d=n(16),f=n(9),g=n(23),p=n(12).Promise,h=n(133),v=d.get("stores/global"),_=d.get("stores/action_data"),m=d.get("stores/change_data"),E=d.get("stores/session"),I=n(136),y=n(137);y.initialize();var S=u("ActionError");t.prepareAction=function(e){g.debug("Action / Preparing:",e),f.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:E.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:l.now(),activationId:v.getActivationId()});var t=l.now();a.forEach(e.changeSet,(function(n){var r=a.isObject(n)?n.id:n,s=m.getChange(r);s||(f.dispatch(o.ADD_CHANGE,n),s=m.getChange(n.id)),s.src||i(s,e,t)}))},t.executePreparedAction=function(e){g.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){var i=a.isObject(n)?n.id:n;return r(t,i,e,[])}));return p.all(n).then((function(){g.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(13).Promise,r=n(24),a=n(16),o=a.get("stores/plugins"),s=n(25),c=n(23);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var u=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!u)throw new Error("Unrecognized change type "+e.type);return new u(e,a)}catch(e){c.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(138),a=n(16).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t){return function(n){var i=n.type,a=t[i];if(!a)throw new Error("Audience / No matcher found for type="+i);if(a.fieldsNeeded)for(var s=r(a.fieldsNeeded,n),l=0;l<s.length;l++){var d=s[l],f=c.getFieldValue(e,d);if(o.isUndefined(f))return void u.debug("Audience / Required field",d,"for type",i,"has no value")}u.debug("Matching condition:",n,"to values:",e);var g=a.match(e,n);if(!o.isUndefined(g))return!!g}}function r(e,t){var n="function"==typeof e?e(t):e;return o.isString(n)&&(n=[n]),o.isArray(n)?n:(u.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(125),c=n(19),u=n(23),l=n(75);t.isInAudience=function(e,t,n){var r=i(e,n);u.groupCollapsed("Checking audience",t.name,t.id,t),u.debug("Visitor Profile:",e);var o;try{var c=s.evaluate(t.conditions,r)}catch(e){o=e,c=!1}return u.groupEnd(),o&&u.error("Audience / Error evaluating audience",a(t),":",o),u.log("Is "+(c?"in":"NOT in")+" audience:",a(t)),c},t.requiredAudienceFieldsForConditions=function e(t,n){var i={};return o.each(t,(function(t){if(o.isArray(t))o.extend(i,e(t,n));else if(o.isObject(t)){var a=n[t.type];if(a){var s=r(a.fieldsNeeded,t);o.each(s,(function(e){i[l.serializeFieldKey(e)]=e}))}}})),i}}),(function(e,t,n){function i(e,t){_.debug("Decision / Deciding layer for group: ",h.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)_.debug("Decision / Using preferredLayerMap to select layer for group:",h.description(e)),n=r;else try{n=l.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",c="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new f(c);return{layerId:null,reason:c}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=E.getPlugin(p.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=E.getAllPlugins(p.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return u.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),c=n(86),u=n(139),l=n(141),d=n(142),f=n(143).DecisionError,g=n(16),p=n(25),h=n(144),v=n(113),_=n(23),m=n(45),E=g.get("stores/plugins"),I=g.get("stores/global"),y=g.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:I.getActivationId()}),t},t.decideGlobal=function(e){var t=l.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){_.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:l.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new f("No experiments in layer.");try{if(r.decideLayer){_.debug("Decision / Using decider's custom decideLayer.");var u=r.decideLayer(e,t);n=u.experiment,i=u.variation}else _.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=d.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof f?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",c.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(_.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(_.log("No variation matches ids:",t,"in Campaign",v.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=y.get(e.layerId);return!(m.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(65),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(141),a=n(125),o=n(143).DecisionError,s=n(23),c="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,a,u){if(!e.variations||0===e.variations.length)throw new o('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new o('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===c)if(1===e.variations.length)l=e.variations[0].id;else{var d=a;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(u&&u[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=u[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var g=i.find(e.variations,{id:l});if(g)return s.debug("Decision / Selected variation:",g),g;throw new o('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new o("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(78),di=__webpack_require__(16),Logger=__webpack_require__(23),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(86),a=n(25),o=n(26),s=n(82).LocalStorage,c=n(23),u=n(91),l=n(16),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),n(85).setItem(f,e)}catch(e){c.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){u.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||c.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(12).Promise;t.firstToResolve=function(e){return new r(function(t){i.each(e,(function(e){r.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){s.on({filter:{type:c.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),s.on({filter:{type:c.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),s.on({filter:{type:c.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),s.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(16),s=n(87),c=n(111),u=n(41),l=o.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=u.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){u.getGlobal(d)||u.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(150))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(152)),e.registerAudienceMatcher("behavior",n(154))}}),(function(e,t,n){var i=n(153);e.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}}),(function(e,t,n){var i=n(2),r=n(73),a=n(16),o=a.get("stores/visitor_events"),s=1e3;t.getEvents=function(){var e=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),n=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([e,t,n]);return a.slice(a.length-s)}}),(function(e,t,n){var i=n(2),r=n(26),a=n(155),o=n(156);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=r.parse(t.value);return n=i.isUndefined(s.version)?[s]:a.buildFromSpecV0_1(s),i.every(n,(function(t){return o.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),g[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),l=s.groupField(r);return c.extend(i,{select:[{field:l}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return c.extend(i,{orderBy:[{field:[u.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(c.isUndefined(e))throw new Error("rule is undefined");if(!c.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(c.isArray(e["filter"])?c.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+l.stringify(e["reduce"]["aggregator"])+" to unsorted items"),c.isArray(e["sort"])?c.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var c=o(e["direction"]);c&&t.push("sort["+r+"]: "+c)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],u="aggregator "+(l.stringify(a)||String(a)),d=e["reduce"]["n"],f="index "+(l.stringify(d)||String(d));c.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+u+" is unknown"),c.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+u+" is impossible to use because no values have been picked")),"nth"===a?((!c.isNumber(d)||isNaN(d)||parseInt(d,10)!==d||d<0)&&t.push("reduce: "+f+" is not a non-negative integer (mandated by "+u+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):c.isUndefined(d)||t.push("reduce: "+f+" is defined (not mandated by "+u+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(l.stringify(e)||String(e));if(!c.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,c=n(2),u={FIELDS:n(64).FIELDS,FIELDS_V0_2:n(64).FIELDS_V0_2},l=n(26),d=n(23),f=n(156);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return c.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,[f.generateAlias(e,t)]},s.groupField=function(e){return c.isString(e)&&(e=[e]),e=e||f.DEFAULT_FIELD,[e.join(".")]};var g={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),c.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[u.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return c.isArray(e)?{op:"between",args:[{field:[u.FIELDS.TIME]},{value:[e[0]||+new Date(0),e[1]||+new Date]}]}:(d.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return c.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return c.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||c.includes(c.values(u.FIELDS),e)||(n=[u.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+l.stringify(e));var t=s.fieldComparison("gt",u.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",u.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",u.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else d.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&c.each(e.filters,(function(r){var a,o,c=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",u.FIELDS.TIME),o=s.aggregateField("max",u.FIELDS.TIME)),a){var l=c,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,c,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+l.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:c.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return c.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(c.each(e["sort"],(function(e){c.includes(["ascending","descending"],e["direction"])&&(c.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=c.filter(c.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&c.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return c.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[f.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?c.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):c.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(c.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return c.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[u.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(l.stringify(e)||String(e));if(!c.isArray(e)||!c.every(e,c.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=c.keys(u.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),c.includes(r,e[0])?n+" is not supported here":c.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(l.stringify(e)||String(e)),i="value "+(l.stringify(t)||String(t));if(!c.isString(e)&&!c.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!c.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!c.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(c.isArray(t)&&2===t.length&&c.isNumber(t[0])&&c.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(c.isString(t)||c.isArray(t)&&2===t.length&&c.isString(t[0])&&c.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!c.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=i.bind(a.log,a),s=n(24),c=n(19).getFieldValue,u=n(26),l=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);if(!i.isArray(t))return n;var r=c(e,t);return"undefined"==typeof r&&(r=n),r},d=function(e){return"string"==typeof e?e.trim().toLowerCase():e};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(e){var t=i.map(e,d);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],d);return i.includes(t,d(e[0]))},between:function(e){return e[1][0]<=e[0]&&e[0]<=e[1][1]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},t.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},t.aggregateOperators={sum:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r},avg:function(e,n){if(0===n.length)return 0;for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r/n.length},max:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,a=0;a<n.length;a++)r=Math.max(r,l(n[a],i,Number.NEGATIVE_INFINITY));return r},min:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,a=0;a<n.length;a++)r=Math.min(r,l(n[a],i,Number.POSITIVE_INFINITY));return r},count:function(e,t){return t.length}};var f={now:function(){return s.now()}},g=function(e){return e in t.booleanOperators?t.booleanOperators[e]:e in t.arithmeticOperators?t.arithmeticOperators[e]:null},p=function(e,t){if(t.hasOwnProperty("value"))return t["value"];
if(t.hasOwnProperty("field"))return l(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in f?f[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+u.stringify(t));var n=g(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(p,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},h=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],c={},d=0;d<r.length;d++){var f=r[d],g=l(o,f),p=f.join(".");c[p]=g,s.push(encodeURIComponent(p)+"="+encodeURIComponent(u.stringify(g)))}var h=s.join("&");n.hasOwnProperty(h)||(n[h]={fieldValues:c,events:[]}),n[h].events.push(o)}return n};t.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")};var v=function(e,n){var r={};return i.each(n,(function(n,i){r[i]={};for(var o=0;o<e.length;o++){var s=e[o],c=s["op"];if(c in t.aggregateOperators){var u=(s["args"]&&s["args"][0]||{})["field"]||t.DEFAULT_FIELD,l=t.generateAlias(c,u),d=t.aggregateOperators[c]([u],n.events);r[i][l]=d}else a.error("Rules","Unknown aggregate operator "+c)}})),r},_=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},m=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],c=l(t,s,0),u=l(n,s,0);if(c<u)return-o;if(c>u)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)};t.rewrite=function(e){function n(e,s){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(s&&e["op"]in t.aggregateOperators){var c=(e["args"]&&e["args"][0]||{})["field"]||t.DEFAULT_FIELD,u=t.generateAlias(e["op"],c);return u in o||(r.push({op:e["op"],args:e["args"]}),o[u]=!0),{field:[u]}}for(var l=[],d=e["args"]||[],f=0;f<d.length;f++)l[f]=n(d[f],s);return{op:e["op"],args:l}}var r=[],o={},s={};e.hasOwnProperty(t.clause.WHERE)&&(s[t.clause.WHERE]=n(e[t.clause.WHERE],!1)),e.hasOwnProperty(t.clause.HAVING)&&(s[t.clause.HAVING]=n(e[t.clause.HAVING],!0)),(e.hasOwnProperty(t.clause.AGGREGATE)||r.length>0)&&(s[t.clause.AGGREGATE]=(e[t.clause.AGGREGATE]||[]).concat(r));for(var c=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],u=0;u<c.length;u++)e.hasOwnProperty(c[u])&&(s[c[u]]=e[c[u]]);return e.hasOwnProperty(t.clause.FROM)&&(s[t.clause.FROM]=t.rewrite(e[t.clause.FROM])),s};var E=function(e,n){n=n||0;var r=[];if(e.hasOwnProperty(t.clause.WHERE)?e[t.clause.WHERE]["op"]?e[t.clause.WHERE]["op"]in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),e.hasOwnProperty(t.clause.HAVING)&&(e[t.clause.HAVING]["op"]?e[t.clause.HAVING]["op"]in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),e.hasOwnProperty(t.clause.GROUP_BY)&&!e.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(t.clause.SELECT)){var a=e[t.clause.SELECT];if(i.isArray(a))for(var o=0;o<a.length;o++)a[o]["op"]&&a[o]["op"]in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+a[o]["op"]+'" specified in selector at index '+o);else r.push("SELECT clause must be an array")}if(e.hasOwnProperty(t.clause.OFFSET)){var s=e[t.clause.OFFSET];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(t.clause.LIMIT)){var c=e[t.clause.LIMIT];(!i.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return n>0&&(r=i.map(r,(function(e){return"Sub-rule "+n+": "+e}))),e.hasOwnProperty(t.clause.FROM)&&(r=r.concat(E(e[t.clause.FROM],n+1))),r},I=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return p(t,e)}))}))},y=function(e,n){var r=n;if(e.hasOwnProperty(t.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[t.clause.FROM]),r=y(e[t.clause.FROM],r),a.debug("Results after FROM:",r)),a.debug("Evaluating WHERE clause:",e[t.clause.WHERE]),r=i.filter(r,(function(n){return p(n,e[t.clause.WHERE])})),a.debug("Results after WHERE:",r),e.hasOwnProperty(t.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[t.clause.AGGREGATE]);var o=h(e[t.clause.GROUP_BY],r),s=v(e[t.clause.AGGREGATE],o);r=_(o,s),a.debug("Results after AGGREGATE:",r)}e.hasOwnProperty(t.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[t.clause.HAVING]),r=i.filter(r,(function(n){return p(n,e[t.clause.HAVING])})),a.debug("Results after HAVING:",r)),e.hasOwnProperty(t.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[t.clause.ORDER_BY]),r=m(e[t.clause.ORDER_BY],r),a.debug("Results after ORDER_BY:",r));var c=0;e.hasOwnProperty(t.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[t.clause.OFFSET]),c=Number(e[t.clause.OFFSET]));var u;return e.hasOwnProperty(t.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[t.clause.LIMIT]),u=c+Number(e[t.clause.LIMIT])),(c>0||!i.isUndefined(u))&&(r=r.slice(c,u),a.debug("Results after OFFSET/LIMIT:",r)),e.hasOwnProperty(t.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[t.clause.SELECT]),r=I(e[t.clause.SELECT],r),a.debug("Results after SELECT:",r)),r};t.execute=function(e,n){e=t.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,u.stringify(e)),a.debug("Events:",n);var i=E(e);if(i.length>0)throw new Error("Rule "+u.stringify(e)+" has violations: "+i.join("\n"));var o=y(e,n);return a.debug("Rule result:",o),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),o},t.isSatisfied=function(e,n){try{return t.execute(e,n).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+u.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(158))}}),(function(e,t,n){var i=n(2),r=n(159),a=n(153),o=n(26),s=n(155);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(e,t){var n=e.getProjectId(),c=i.filter(i.map(t.getCustomBehavioralAttributes(n),(function(e){try{return{id:e.id,granularity:r.GRANULARITY.ALL,rule:s.buildFromSpecV0_2(o.parse(e.rule_json))}}catch(e){return}}))),u=a.getEvents();return r.evaluate(c,u)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*s.MILLIS_IN_A_DAY;n-=n%s.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(23),o={FIELDS:n(64).FIELDS},s=n(155),c=n(156);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var s=0;s<e.length;s++)o[e[s].id]=e[s].defaultValue;return o}var u=i(n),l=r(n,60);for(s=0;s<e.length;s++){var d=e[s],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=u:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var g=f;d.rule&&(g=c.execute(d.rule,f)),o[d.id]=d.defaultValue,1===g.length?o[d.id]=g[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",g.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(161)),e.registerAudienceMatcher("first_session",n(162))}}),(function(e,t,n){var i=n(64),r=n(153),a=n(19).getFieldValue,o=n(89).CURRENT_SESSION_INDEX;e.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var e=r.getEvents();if(e&&e.length>0){var t=e[0],n=a(t,[i.FIELDS.SESSION_INDEX]);return n===o}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(164))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return u.map(e,(function(e){return u.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),u.each(e.filters,(function(e){u.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(u.isUndefined(t))return n=l.getEvents(e),r(n,o);if(u.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,u.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=u.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,u.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function c(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=u.flatten(a)),t.reduce&&(a=a[0]),a}var u=n(2),l=n(153),d=n(155),f=n(156);e.exports=["stores/visitor_events",function(e){return{getEvents:u.partial(o,e),getByFrequency:u.partial(s,e),query:u.partial(c,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(166)),e.registerVisitorProfileProvider(n(171)),e.registerVisitorProfileProvider(n(172)),e.registerAudienceMatcher("browser_version",n(173))}}),(function(e,t,n){var i=n(167);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(168),a=n(41),o=n(7),s=n(16),c=n(9),u=s.get("stores/ua_data");t.get=function(){var e=u.get();return i.isEmpty(e)&&(e=r.parseUA(a.getUserAgent()),c.dispatch(o.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){function i(e){if(e=(e||"").toLowerCase(),e in c)return e;var t=a.keys(c);return a.find(t,(function(t){var n=c[t];return a.includes(n,e)}))||"unknown"}function r(e,t,n){return t?t:"unknown"===e?"unknown":n?"mobile":"desktop_laptop"}var a=n(2),o=n(169);t.parseUA=function(e){var t=new o(e),n=t.getBrowser(),a=t.getOS(),c=t.getDevice(),l=(a.name||"unknown").toLowerCase(),d=(n.name||"unknown").toLowerCase(),f=s(c.type,d,l);return{browser:{id:i(n.name),version:n.version},platform:{name:l,version:a.version},device:{model:u[c.model]||"unknown",type:r(d,c.type,f),isMobile:f}}};var s=function(e,t,n){if(a.includes(["mobile","tablet"],e))return!0;if(a.includes(["opera mini"],t))return!0;var i=["android","blackberry","ios","windows phone"];return!!a.includes(i,n)},c={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},u={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.17",s="",c="?",u="function",l="undefined",d="object",f="string",g="major",p="model",h="name",v="type",_="vendor",m="version",E="architecture",I="console",y="mobile",S="tablet",T="smarttv",A="wearable",b="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},R={rgx:function(e,t){for(var n,i,r,o,s,c,l=0;l<t.length&&!s;){var f=t[l],g=t[l+1];for(n=i=0;n<f.length&&!s;)if(s=f[n++].exec(e))for(r=0;r<g.length;r++)c=s[++i],o=g[r],typeof o===d&&o.length>0?2==o.length?typeof o[1]==u?this[o[0]]=o[1].call(this,c):this[o[0]]=o[1]:3==o.length?typeof o[1]!==u||o[1].exec&&o[1].test?this[o[0]]=c?c.replace(o[1],o[2]):a:this[o[0]]=c?o[1].call(this,c,o[2]):a:4==o.length&&(this[o[0]]=c?o[3].call(this,c.replace(o[1],o[2])):a):this[o]=c?c:a;l+=2}},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===c?a:n}else if(w.has(t[n],e))return n===c?a:n;return e}},D={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},O={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,m],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],m],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],m],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[h,m],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],m],[/(edge)\/((\d+)?[\w\.]+)/i],[h,m],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],m],[/(puffin)\/([\w\.]+)/i],[[h,"Puffin"],m],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],m],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],m],[/(QQ)\/([\d\.]+)/i],[h,m],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[h,m],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[h,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[m,[h,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[h,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],m],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[h,/(.+(?:g|us))(.+)/,"$1 $2"],m],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[m,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[h,m],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],m],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],m],[/(coast)\/([\w\.]+)/i],[[h,"Opera Coast"],m],[/fxios\/([\w\.-]+)/i],[m,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[m,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[m,h],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[h,"GSA"],m],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[m,R.str,D.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],m],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[E,"amd64"]],[/(ia32(?=;))/i],[[E,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[E,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[E,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[E,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[E,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[E,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[p,_,[v,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[p,[_,"Apple"],[v,S]],[/(apple\s{0,1}tv)/i],[[p,"Apple TV"],[_,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[_,p,[v,S]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[p,[_,"Amazon"],[v,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[p,R.str,D.device.amazon.model],[_,"Amazon"],[v,y]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[p,_,[v,y]],[/\((ip[honed|\s\w*]+);/i],[p,[_,"Apple"],[v,y]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[_,p,[v,y]],[/\(bb10;\s(\w+)/i],[p,[_,"BlackBerry"],[v,y]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[p,[_,"Asus"],[v,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[_,"Sony"],[p,"Xperia Tablet"],[v,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[p,[_,"Sony"],[v,y]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[_,p,[v,I]],[/android.+;\s(shield)\sbuild/i],[p,[_,"Nvidia"],[v,I]],[/(playstation\s[34portablevi]+)/i],[p,[_,"Sony"],[v,I]],[/(sprint\s(\w+))/i],[[_,R.str,D.device.sprint.vendor],[p,R.str,D.device.sprint.model],[v,y]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[_,p,[v,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[_,[p,/_/g," "],[v,y]],[/(nexus\s9)/i],[p,[_,"HTC"],[v,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[p,[_,"Huawei"],[v,y]],[/(microsoft);\s(lumia[\s\w]+)/i],[_,p,[v,y]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[p,[_,"Microsoft"],[v,I]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[_,"Microsoft"],[v,y]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[p,[_,"Motorola"],[v,y]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[p,[_,"Motorola"],[v,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[_,w.trim],[p,w.trim],[v,T]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[_,"Samsung"],[v,T]],[/\(dtv[\);].+(aquos)/i],[p,[_,"Sharp"],[v,T]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[_,"Samsung"],p,[v,S]],[/smart-tv.+(samsung)/i],[_,[v,T],p],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[_,"Samsung"],p,[v,y]],[/sie-(\w+)*/i],[p,[_,"Siemens"],[v,y]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[_,"Nokia"],p,[v,y]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[p,[_,"Acer"],[v,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[p,[_,"LG"],[v,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[_,"LG"],p,[v,S]],[/(lg) netcast\.tv/i],[_,p,[v,T]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[p,[_,"LG"],[v,y]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[p,[_,"Lenovo"],[v,S]],[/linux;.+((jolla));/i],[_,p,[v,y]],[/((pebble))app\/[\d\.]+\s/i],[_,p,[v,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[_,p,[v,y]],[/crkey/i],[[p,"Chromecast"],[_,"Google"]],[/android.+;\s(glass)\s\d/i],[p,[_,"Google"],[v,A]],[/android.+;\s(pixel c)\s/i],[p,[_,"Google"],[v,S]],[/android.+;\s(pixel xl|pixel)\s/i],[p,[_,"Google"],[v,y]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[p,/_/g," "],[_,"Xiaomi"],[v,y]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],[[p,/_/g," "],[_,"Xiaomi"],[v,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[p,[_,"Meizu"],[v,S]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[p,[_,"OnePlus"],[v,y]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[p,[_,"RCA"],[v,S]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[p,[_,"Dell"],[v,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[p,[_,"Verizon"],[v,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[_,"Barnes & Noble"],p,[v,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[p,[_,"NuVision"],[v,S]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[_,"ZTE"],p,[v,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[p,[_,"Swiss"],[v,y]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[p,[_,"Swiss"],[v,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[p,[_,"Zeki"],[v,S]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[_,"Dragon Touch"],p,[v,S]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[p,[_,"Insignia"],[v,S]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[p,[_,"NextBook"],[v,S]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[_,"Voice"],p,[v,y]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[_,"LvTel"],p,[v,y]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[p,[_,"Envizen"],[v,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[_,p,[v,S]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[p,[_,"MachSpeed"],[v,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[_,p,[v,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[p,[_,"Rotor"],[v,S]],[/android.+(KS(.+))\s+build/i],[p,[_,"Amazon"],[v,S]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[_,p,[v,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,w.lowerize],_,p],[/(android.+)[;\/].+build/i],[p,[_,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,m],[/rv\:([\w\.]+).*(gecko)/i],[m,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[m,R.str,D.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[m,R.str,D.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],m],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,m],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],m],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],m],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,m],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],m],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],m],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,m],[/(haiku)\s(\w+)/i],[h,m],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[m,/_/g,"."],[h,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[m,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,m]]},N=function(e,t){if("object"==typeof e&&(t=e,e=a),!(this instanceof N))return new N(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(O,t):O;return this.getBrowser=function(){var e={name:a,version:a};return R.rgx.call(e,n,i.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:a};return R.rgx.call(e,n,i.cpu),e},this.getDevice=function(){var e={vendor:a,model:a,type:a};return R.rgx.call(e,n,i.device),e},this.getEngine=function(){var e={name:a,version:a};return R.rgx.call(e,n,i.engine),e},this.getOS=function(){var e={name:a,version:a};return R.rgx.call(e,n,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};N.VERSION=o,N.BROWSER={NAME:h,MAJOR:g,VERSION:m},N.CPU={ARCHITECTURE:E},N.DEVICE={MODEL:p,VENDOR:_,TYPE:v,CONSOLE:I,MOBILE:y,SMARTTV:T,TABLET:S,WEARABLE:A,EMBEDDED:b},N.ENGINE={NAME:h,VERSION:m},N.OS={NAME:h,VERSION:m},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=N),t.UAParser=N):"function"===u&&n(170)?(i=function(){return N}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r&&(r.UAParser=N)})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(174).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(176)),e.registerAudienceMatcher("campaign",n(177))}}),(function(e,t,n){var i=n(119);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){e.exports=function(e){e.registerAudienceMatcher("code",n(179))}}),(function(e,t,n){var i=n(2),r=n(145);t.fieldsNeeded=[],t.match=function(e,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(181));var t=n(182);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=n(16),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var r=n,o=s.getByApiName(n),c=s.getById(n),u=c;return i.isObject(t)?(!t.id&&o&&(u=o,r=o.id,i.extend(t,{id:u.segmentId||u.id})),t.name||u&&u.apiName&&(t.name=u.apiName),t.id||u||a.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled."),e[r]=t,e):(a.error('Unable to restore custom attribute "'+n+'" because value is not an object'),e)}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(20);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(184)),e.registerVisitorProfileProvider(n(185)),e.registerAudienceMatcher("device",n(186))}}),(function(e,t,n){var i=n(167);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(188)),e.registerAudienceMatcher("device_type",n(189))}}),(function(e,t,n){var i=n(167);e.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var e=i.get().device;switch(e.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return e.type;default:return"other"}}]}}),(function(e,t){e.exports={fieldsNeeded:["device_type"],match:function(e,t){return e.device_type===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(191)),e.registerAudienceMatcher("referrer",n(192))}}),(function(e,t,n){var i=n(81),r=n(99);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(193);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(c));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(u)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var c=["www."],u="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(195)),e.registerAudienceMatcher("source_type",n(197))}}),(function(e,t,n){var i=n(119),r=n(81),a=n(99),o=n(196),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var e=a.getReferrer()||r.getReferrer(),t=0;t<s.length;t++){var n=s[t],c=e.match(n);if(c)return"search"}return e&&o.guessDomain(e)!==o.guessDomain(i.getUrl())?"referral":"direct"},c=function(e,t){return!e||"direct"!==t},u=e(),l=n();c(u,l)&&t(l)}}]}}),(function(e,t){t.guessDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(20);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(199)),e.registerVisitorProfileProvider(n(200)),e.registerAudienceMatcher("time_and_day",n(201))}}),(function(e,t,n){var i=n(24);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset();
}]}}),(function(e,t,n){var i=n(202);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(c);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",c=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),c=r(o.end_time),u=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return u>=s&&u<=c&&a.includes(o.days,l)}}),(function(e,t,n){function i(e){function t(e,t,n){try{c(t),e[n]=t}catch(e){C.emitError(new X("Bad value for eventTags["+n+"]: "+e.message))}return e}var n=N.keys(ie),i=N.omit(e,n),r=N.pick(e,n),a=N.reduce(i,t,{}),o=N.reduce(r,(function(e,n,i){var r=ie[i];r.excludeFeature||t(a,n,i);try{r.validate(n),e[i]=r.sanitize(n),a[i]=e[i]}catch(e){C.emitError(new X("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),{});return o.tags=a,o}function r(e){var t=N.extend({entity_id:e.pageId,key:e.pageId,timestamp:e.timestamp,uuid:e.eventId,type:J},i(e.eventTags));return t}function a(e){return N.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function o(e){return N.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function s(e){return{entity_id:null,type:Q,uuid:e.eventId,timestamp:e.timestamp}}function c(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=k.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function u(e){if(null==e)throw new Error("Metric value is null");if(!N.isNumber(e))throw new Error("Metric value is not numeric")}function l(e){return N.reduce(e,(function(e,t){try{c(t.value),e.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){F.warn("Error evaluating user feature",t,e)}return e}),[])}function d(e,t,n){Y.dispatch(V.REGISTER_TRACKER_EVENT,{event:e,decisions:n}),f(t),R()}function f(e){var t=l(e);Y.dispatch(V.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function g(e){var t=l(e.userFeatures),n={account_id:e.accountId,anonymize_ip:e.anonymizeIP,client_name:e.clientName,client_version:e.clientVersion,project_id:e.projectId,visitors:[{session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:e.layerId,experiment_id:e.experimentId,variation_id:e.variationId,is_campaign_holdback:e.isLayerHoldback}],events:[{uuid:e.decisionId,entity_id:e.layerId,timestamp:e.timestamp,type:$}]}]}]};Y.dispatch(V.REGISTER_PREVIOUS_BATCH,n),R()}function p(e){var t=N.isNull(q.getAnonymizeIP())?void 0:q.getAnonymizeIP(),n={account_id:e.accountId,anonymize_ip:t,client_name:e.clientName,client_version:e.clientVersion,project_id:e.projectId,visitors:[]};n.revision=e.revision,ee&&(n.enrich_decisions=!0);var i={session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:[],snapshots:[]},r=D(e.layerStates);Y.dispatch(V.REGISTER_TRACKER_VISITOR,{data:n,visitor:i,decisions:r}),R()}function h(e){return se?oe:e}function v(e){var t={entity_id:e.layerId,type:$,uuid:e.decisionId,timestamp:e.timestamp};Y.dispatch(V.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:D(e.layerStates)}),f(e.userFeatures),R()}function _(){if(!W.canSend())return void F.debug("Not sending events (holding)");var e=W.hasEventsToSend(),t=W.hasPreviousBatchesToSend();return e||t?(t&&(N.each(W.getPreviousBatches(),m),Y.dispatch(V.RESET_TRACKER_PREVIOUS_BATCHES)),void(e&&(Y.dispatch(V.FINALIZE_BATCH_SNAPSHOT),m(W.getEventBatch()),Y.dispatch(V.RESET_TRACKER_EVENTS)))):void F.debug("Not sending events because there are no events to send")}function m(e){F.debug("Sending ticket:",e);var t=L.generate();B.retryableRequest({url:P,method:"POST",data:E(e)},t)}function E(e){var t=N.extend({},N.pick(e,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:N.map(e.visitors,I)});return t}function I(e){return{visitor_id:e.visitor_id,session_id:oe,attributes:N.map(e.attributes,y),snapshots:N.map(e.snapshots,S)}}function y(e){return w(e,{entity_id:"e",key:"k",type:"t",value:"v"})}function S(e){var t=e.events;return t=T(t),{activationTimestamp:q.getActivationTimestamp(),decisions:N.map(e.decisions,A),events:N.map(t,b)}}function T(e){var t=N.reduce(e,(function(e,t){var n;if(n=t.type!==J||!N.isEmpty(t.tags)||!N.isEmpty(N.pick(t,N.keys(ie)))||t.key&&t.entity_id!==t.key?t.uuid:t.type,e[n]){var i=e[n].timestamp;t.timestamp>i&&(i=t.timestamp),e[n]=N.extend({},e[n],{key:Z,entity_id:e[n].entity_id+"-"+t.entity_id,timestamp:i})}else e[n]=t;return e}),{});return N.values(t)}function A(e){return w(e,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function b(e){return e.key===$&&(e.type=$,delete e.key),w(e,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function w(e,t){return N.reduce(e,(function(e,n,i){return i in t&&(e[t[i]||i]=n),e}),{})}function R(){function e(){var t=!re||j.isLoaded();t&&_(),W.isPolling()&&G.setTimeout(e,ne)}return W.shouldBatch()?void(W.isPolling()||(G.setTimeout(e,ne),Y.dispatch(V.SET_TRACKER_POLLING,!0),G.setTimeout((function(){Y.dispatch(V.SET_TRACKER_BATCHING,!1),Y.dispatch(V.SET_TRACKER_POLLING,!1)}),te))):void _()}function D(e){return N.map(e,(function(e){return{campaign_id:e.layerId,experiment_id:e.decision.experimentId,variation_id:e.decision.variationId,is_campaign_holdback:e.decision.isLayerHoldback}}))}function O(){var e=W.getPersistableState();if(e)try{F.debug("Persisting pending batch:",e),U.persistTrackerOptimizelyData(e),Y.dispatch(V.SET_TRACKER_DIRTY,!1)}catch(e){F.debug("Failed to persist pending batch:",e)}}var N=n(2),C=n(86),L=n(5),P="https://logx.optimizely.com/v1/events",V=n(7),x=n(77).create,k=n(26),F=n(23),M=n(115),U=n(75),G=n(41),B=n(91),z=n(16),j=n(81),H=n(87),K=n(111),Y=n(9),q=z.get("stores/global"),W=z.get("stores/tracker_optimizely"),X=t.Error=x("OptimizelyTrackerError"),Q="client_activation",$="campaign_activated",J="view_activated",Z="multi-event",ee=!1,te=1e4,ne=1e3,ie={revenue:{validate:u,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:u,sanitize:Math.floor,excludeFeature:!0},value:{validate:u,sanitize:N.identity}},re=!1,ae=!1,oe="AUTO",se=!0,ce=[function(){return function(e){v(N.extend(e,e.decision))}}],ue=function(e){e.timing===M.TrackLayerDecisionTimingFlags.postRedirectPolicy?g(e):v(e)},le=[function(){return function(e){d(r(e),e.userFeatures,D(e.layerStates))}}],de=[function(){return function(e){p(e),d(s(e),e.userFeatures,D(e.layerStates))}}],fe=[function(){return function(e){d(o(e),e.userFeatures,D(e.layerStates))}}],ge=[function(){return function(e){d(a(e),e.userFeatures,D(e.layerStates))}}],pe={onLayerDecision:ce,trackLayerDecision:ue,postRedirectPolicy:M.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:M.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:le,onClientActivation:de,onClickEvent:ge,onCustomEvent:fe};e.exports=function(e){e.registerAnalyticsTracker("optimizely",pe),H.on({filter:{type:K.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!0),W.isPolling()||_()}}),H.on({filter:{type:K.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!1)}}),Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!ae);var t=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(O),H.off(t)}})}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(205)),e.registerViewMatcher("url",n(206))}}),(function(e,t,n){var i=n(119);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(193);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){var i=n(145),r="custom_code",a={match:function(e,t){return i.apply(t.value)}};e.exports=function(e){e.registerViewMatcher(r,a)}}),(function(e,t,n){var i=n(126).enums.locatorType;e.exports=function(e){e.registerViewTagLocator(i.CSS_SELECTOR,n(209))}}),(function(e,t,n){var i=n(127).nodeNames,r=n(210);e.exports=function(e){var t,n=e.locator,a=document.querySelectorAll(n);if(a.length>0){var o=a[0];switch(o.nodeName){case i.INPUT:t=o.value.trim();break;case i.SELECT:t=o.value.trim();break;default:var s=a[0].innerText||a[0].textContent;t=s.trim().replace(/\s+/g," ")}}return r(e.valueType,t)}}),(function(e,t,n){function i(e,t,n){var i=new RegExp("^\\s*([+-]?)\\s*((\\d+)((?:\\"+t+"\\d{3})+)?)(?:\\"+n+"(\\d+))?\\s*$"),r=e.match(i);if(!r)return NaN;var a=r[3],o=r[4],s=r[5];if(o&&!s&&a.length>3&&4===o.length||!o&&a.length<=3&&s&&3===s.length)return NaN;var c=r[1],u=r[2].replace(new RegExp("\\"+t,"g"),"");return Number(c+u+(s?"."+s:""))}function r(e){e=String(e);var t=i(e,",",".");return isNaN(t)&&(t=i(e,".",",")),t}var a=n(127),o=n(128).Error;e.exports=function(e,t){var n;switch(e){case a.valueType.STRING:return t?String(t):"";case a.valueType.NUMBER:if(n=r(t),isNaN(n))throw new o('"'+t+'" cannot be parsed as a number');return n;case a.valueType.CURRENCY:if(n=String(t).replace(/^[^\d\,\.\-]*/g,"").replace(/[^\d\,\.\-]*$/g,""),n=r(n),isNaN(n))throw new o('"'+t+'" cannot be parsed as currency');return Math.round(100*n)}throw new o("Unknown ViewTag type: "+e)}}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(110),a=n(212),o=n(23),s=n(124);e.exports=function(e){var t=new a(function(e){s.updateAllViewTags();var t=r.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=a.bind((function(e){a.forEach(this.events,a.bind((function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){o.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}),this))}),this)}function r(e,t,n){for(var i=e.target,r=0;i;){var s;try{s=u(i,t)}catch(s){var c={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:s.message,eventId:n.id};return o.emitError(new l("Unable to evaluate match for element"),c),!1}if(s)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(86),s=n(77).create,c=n(81),u=n(213),l=t.Error=s("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=c.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(214)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){e.exports=function(e){e.registerApiModule("recommender",n(216))}}),(function(e,t,n){function i(e){return e===A.SELF_CONTAINED_MULTI_COL}function r(e){return e===A.SEPARATE_CATALOG_SINGLE_COL}function a(e,t){if(!i(t))return w in e?I.parse(e[w]):(y.warn('recommender / Expected key "'+w+'" not found'),[]);var n=new RegExp("^"+R+"(\\d+)$"),r=E.reduce(e,(function(t,i,r){var a=r.match(n);if(a){var o=I.parse(e[r]);o&&E.isObject(o)&&(t[a[1]]=o)}return t}),[]);return E.filter(r,(function(e){return!E.isUndefined(e)}))}function o(e,t){return[e,encodeURIComponent(t)].join("/")}function s(e,t){var n=function(e,t,n){if(!E.isArray(e)||E.isEmpty(e))throw new Error("No "+n+"s available");var i;if(t){if(i=E.find(e,{id:t}),!i)throw new Error("No "+n+" found with specified id "+t)}else{if(e.length>1)throw new Error("No "+n+" id specified when there are more than one available.");i=e[0]}return i},i=e.getRecommenderServices(),r=n(i,t&&t.recommenderServiceId,"recommender service");r.idTagName||(r.idTagName="id");var a=n(r.recommenders,t&&t.recommenderId,"recommender");return{recommenderService:r,recommender:a}}function c(e){var t=I.parse(e);return t.data}function u(e,t){return T.request({url:o(e,t)}).then((function(e){var t=c(e.response),n={};return b in t&&(n=I.parse(t[b])),n}))}function l(e,t,n,i){var s=!(!i||!i.fetchWithMetadata),u=i&&i.overrideServingUrl||t.servingUrl;return T.request({url:o(u,n)}).then((function(t){var n=[],o=c(t.response);return n=a(o,e.serviceVersion),s&&r(e.serviceVersion)?d(e,E.map(n,e.idTagName),i).then((function(e){return e=E.map(e,(function(e){return e instanceof Error&&(e={}),delete e["__proto__"],e})),E.merge(n,e)})):n}))}function d(e,t,n){var i=n&&n.overrideCatalogUrl||e.catalogUrl;return E.isString(t)?u(i,t):S.all(E.map(t,(function(e){return u(i,e)["catch"]((function(t){return y.warn("recommender / Failed to get recommendations for item:",e,t),t}))})))}function f(e,t,n){var i=s(e,n),r=i.recommenderService,a=i.recommender;return l(r,a,t,{overrideServingUrl:n&&n.overrideServingUrl,overrideCatalogUrl:n&&n.overrideCatalogUrl,fetchWithMetadata:!0})}function g(e,t,n){var i=s(e,n),a=i.recommenderService,o=i.recommender;if(!r(a.serviceVersion))throw new Error("Recommender service "+a.id+" serves self-contained recos. Use `fetchRecommendations` API call");return l(a,o,t,{overrideServingUrl:n&&n.overrideServingUrl,fetchWithMetadata:!1})}function p(e,t,n){var i=s(e,n),a=i.recommenderService;if(!r(a.serviceVersion))throw new Error("Recommender service "+a.id+" serves self-contained recos. Use `fetchRecommendations` API call");return E.isArray(t)&&t.length>D?S.reject("Cannot fetch more than "+D+" items"):d(a,t,n)}function h(e,t,n,i){return new v(e,t,n,i)}function v(e,t,n,i){this.recommenderSettings=t;var r=s(e,t);this.recommenderService=r.recommenderService,this.recommender=r.recommender,this.targetId=n,i&&(this.preFilter=i.preFilter,this.canonicalize=i.canonicalize,this.postFilter=i.postFilter),this._globalStore=e,this.reset()}function _(){var e={recosNoMeta:[],recosNoMetaOffset:0,recos:[],recosOffset:0};return y.debug("recommender / fetching recommended items for",this.targetId,"from recommender",this.recommender.id),r(this.recommenderService.serviceVersion)?g(this._globalStore,this.targetId,this.recommenderSettings).then(E.bind((function(t){return e.recosNoMeta=E.filter(t,this.preFilter),e}),this)):f(this._globalStore,this.targetId,this.recommenderSettings).then(E.bind((function(t){return e.recos=E(t).filter(this.preFilter).map(this.canonicalize).filter(this.postFilter).value(),e}),this))}function m(e){var t=e.numNeeded,n=e.buffer,i=n.recosNoMeta.length-n.recosNoMetaOffset;if(t<=0||i<=0)return S.resolve(e);var r=5,a=Math.max(t,r),o=E.slice(n.recosNoMeta,n.recosNoMetaOffset,n.recosNoMetaOffset+a),s=E.map(o,this.recommenderService.idTagName);n.recosNoMetaOffset+=s.length;var c=e.recosSoFar;return y.debug("recommender / fetching metadata for",s,"from recommender",this.recommender.id),p(this._globalStore,s,this.recommenderSettings).then(E.bind((function(i){i=E.map(i,(function(e){return e instanceof Error?{}:e})),n.recos=E(o).merge(i).map(this.canonicalize).filter(this.postFilter).value();var r=E.slice(n.recos,0,t);return n.recosOffset=r.length,e.recosSoFar=c.concat(r),e.numNeeded-=r.length,e.numNeeded>0?m.call(this,e):e}),this))}var E=n(2),I=n(26),y=n(23),S=n(12).Promise,T=n(91),A={SELF_CONTAINED_MULTI_COL:1,SEPARATE_CATALOG_SINGLE_COL:2},b="itemMetadata",w="recos",R="reco",D=20;v.prototype.reset=function(){this._bufferPromise=null},v.prototype.next=function(e){var t=Math.floor(E.isNumber(e)?e:1);if(t<=0)throw new Error("Invalid argument "+e+". Must be positive integer");this._bufferPromise||(this._bufferPromise=_.call(this));var n=this._bufferPromise.then(E.bind((function(e){var n=[],i=e.recos.length-e.recosOffset;return i>0&&(n=e.recos.slice(e.recosOffset,e.recosOffset+t),e.recosOffset+=n.length,t-=n.length),t<=0?{result:n,buffer:e}:m.call(this,{buffer:e,recosSoFar:n,numNeeded:t}).then((function(e){return{result:e.recosSoFar,buffer:e.buffer}}))}),this));return this._bufferPromise=n.then((function(e){return e.buffer})),n.then((function(e){return e.result}))},e.exports=["stores/global",function(e){return{fetchRecommendations:E.partial(f,e),fetchRecommendedItems:E.partial(g,e),fetchItemMetadata:E.partial(p,e),getRecommendationsFetcher:E.partial(h,e)}}]}),(function(e,t,n){function i(e,t){if(this.change=e,this.identifier=t.identifier,this.startTime=t.startTime,d.shouldObserveChangesIndefinitely()){p.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new v(E.MOVING_WINDOW_MILLISECONDS);var n=r.isNull(E.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:E.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(n,r.bind((function(){h.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),p.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new I("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:E.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:n})}),this));for(var i=Math.min(n,50),s=0;s<=i;s++)this.rateMeter.addListener(s,r.partial((function(e){p.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}}var r=n(2),a=n(7),o=n(86),s=n(138),c=n(77).create,u=n(218),l=n(219),d=n(16).get("stores/directive"),f=n(81),g=n(220),p=n(9),h=n(23),v=n(221),_=n(137),m=n(100).create(),E={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},I=c("ChangeOverheatError");i.prototype.numberOfRootNodes=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes.length},i.prototype.getSiblingElements=function(e,t,n){for(var i=e,r=[],a=0;a<t;a++)n?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},i.prototype.apply=function(){this.applyDeferred=l();try{var e=this.numberOfRootNodes(this.change.value);if(!e)throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};d.shouldObserveChangesUntilTimeout()?n={timeout:r.partial(_.isTimedOut,this.startTime),onTimeout:t}:d.isEditor()&&m.waitUntil(r.partial(_.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=m.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),n);var i=f.querySelectorAll(this.change.selector);r.each(i,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return h.debug("Not applying AppendChange to element",e,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var n=r.bind(this.applyOrReapplyToElement,this,e,t);n(),this.applyDeferred.resolve()},i.prototype.applyOrReapplyToElement=function(e,t){var n;switch(this.change.operator){case g.DOMInsertionType.AFTER:n=g.insertAdjacentHTMLType.AFTER_END;break;case g.DOMInsertionType.APPEND:n=g.insertAdjacentHTMLType.BEFORE_END;break;case g.DOMInsertionType.BEFORE:n=g.insertAdjacentHTMLType.BEFORE_BEGIN;break;case g.DOMInsertionType.PREPEND:n=g.insertAdjacentHTMLType.AFTER_BEGIN;break;default:n=g.insertAdjacentHTMLType.BEFORE_END}e.insertAdjacentHTML(n,this.change.value),e.setAttribute(t,""),u.setData(e,this.change.id,this.identifier,[]);var i,a,o=this.numberOfRootNodes(this.change.value)-1;n===g.insertAdjacentHTMLType.BEFORE_END?(i=e.lastChild,a=this.getSiblingElements(i,o,!1)):n===g.insertAdjacentHTMLType.AFTER_BEGIN?(i=e.firstChild,a=this.getSiblingElements(i,o,!0)):n===g.insertAdjacentHTMLType.BEFORE_BEGIN?(i=e.previousSibling,a=this.getSiblingElements(i,o,!1)):n===g.insertAdjacentHTMLType.AFTER_END&&(i=e.nextSibling,a=this.getSiblingElements(i,o,!0)),a.unshift(i),r.each(a,r.bind((function(e){var n=e.nodeType===Node.ELEMENT_NODE?e:f.parentElement(e);n.setAttribute(t,"");var i=u.getData(n,this.change.id,this.identifier)||[];i.push(e),u.setData(n,this.change.id,this.identifier,i),r.each(f.childrenOf(n),(function(e){e.setAttribute(t,"")}))}),this))},i.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},e.exports=function(e){e.registerChangeApplier(g.changeType.APPEND,i)}}),(function(e,t,n){function i(e,t){return[e,t].join("_")}var r=n(2),a=n(138).CHANGE_DATA_KEY;t.getData=function(e,t,n){var r=i(t,n);return e[a]&&e[a][r]?e[a][r]:null},t.hasData=function(e){return Boolean(e&&e[a]&&!r.isEmpty(e[a]))},t.removeData=function(e,t,n){e[a]&&delete e[a][i(t,n)]},t.setData=function(e,t,n,r){if("object"!=typeof r)throw new Error("setData expects an object");e[a]||(e[a]={}),e[a][i(t,n)]=r}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(8);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){function i(e){this.windowLength=e,this.count=0,this.listeners={},this.isIncrementingTick=!1}var r=n(2),a=n(23),o=n(41);i.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(r.bind((function(){this.isIncrementingTick=!1}),this),0))},i.prototype.increment=function(){this.count+=1,r.forEach(this.listeners[String(this.count)],(function(e){e()})),o.setTimeout(r.bind(this.decrement,this),this.windowLength)},i.prototype.decrement=function(){this.count-=1,this.count<0&&(a.warn("Decremented down to negative count: ",this.count),this.count=0)},i.prototype.addListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.exports=i}),(function(e,t,n){function i(e,t){if(this.change=r.cloneDeep(e),this.change=I.transformVisibilityAttributesToCSS(this.change),this.identifier=t.identifier,this.startTime=t.startTime,this.disconnectObserverQueue=[],d.shouldObserveChangesIndefinitely()){p.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new _(T.MOVING_WINDOW_MILLISECONDS);var n=r.isNull(T.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:T.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(n,r.bind((function(){h.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),p.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new b("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:T.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:n})}),this));for(var i=Math.min(n,50),s=0;s<=i;s++)this.rateMeter.addListener(s,r.partial((function(e){p.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}this.cancelled=!1}var r=n(2),a=n(7),o=n(86),s=n(138),c=n(77).create,u=n(218),l=n(219),d=n(16).get("stores/directive"),f=n(81),g=n(220),p=n(9),h=n(23),v=n(223),_=n(221),m=n(137),E=n(41),I=n(224),y=n(100).create(),S={attributes:!0,childList:!0,subtree:!0,characterData:!0},T={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},A=!1,b=c("ChangeOverheatError");i.prototype.apply=function(){this.applyDeferred=l();try{if(r.isEmpty(this.change.attributes)&&r.isEmpty(this.change.css))return h.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var e=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};d.shouldObserveChangesUntilTimeout()?t={timeout:r.partial(m.isTimedOut,this.startTime),onTimeout:e}:d.isEditor()&&y.waitUntil(r.partial(m.isTimedOut,this.startTime)).then(e,e),this.unobserveSelector=y.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),t);var n=f.querySelectorAll(this.change.selector);r.each(n,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return h.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+e),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var n=r.bind(this.applyOrReapplyToElement,this,e,t);if(n(),A){var i=r.bind((function(){E.setTimeout(r.bind((function(){this.cancelled||v.observe(a,e,S)}),this))}),this),a=v.create(r.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),a.disconnect(),n(),i()}),this));i(),this.disconnectObserverQueue.push(r.bind(a.disconnect,a))}this.applyDeferred.resolve()},i.prototype.applyOrReapplyToElement=function(e,t){var n={};r.forOwn(this.change.attributes,(function(i,a){switch(a){case g.selectorChangeType.CLASS:r.isUndefined(e.className)||(n[g.selectorChangeType.CLASS]=e.className,e.className=i);break;case g.selectorChangeType.HREF:r.isUndefined(e.href)||(n[g.selectorChangeType.HREF]=e.href,e.href=i);break;case g.selectorChangeType.HTML:r.isUndefined(e.innerHTML)||(n[g.selectorChangeType.HTML]=e.innerHTML,e.innerHTML=i,r.each(f.childrenOf(e),(function(e){e.setAttribute(t,"")})));break;case g.selectorChangeType.SRC:r.isUndefined(e.src)||(n[g.selectorChangeType.SRC]=e.src,e.src=i);break;case g.selectorChangeType.STYLE:break;case g.selectorChangeType.TEXT:r.isUndefined(e.textContent)||(n[g.selectorChangeType.TEXT]=e.textContent,e.textContent=i);break;default:throw new Error("Unrecognized attribute: "+a)}}));var i=I.createStylesFromChange(e.style.cssText,this.change);r.isString(i)&&(n[g.selectorChangeType.STYLE]=e.style.cssText,e.style.cssText=i),e.setAttribute(t,""),u.setData(e,this.change.id,this.identifier,n)},i.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),r.each(this.disconnectObserverQueue,(function(e){try{e()}catch(e){}}))},e.exports=function(e){e.registerChangeApplier(g.changeType.ATTRIBUTE,i)}}),(function(e,t){t.create=function(e){return new MutationObserver(e)},t.observe=function(e,t,n){e.observe(t,n)}}),(function(e,t,n){var i=n(2),r=n(220);t.transformVisibilityAttributesToCSS=function(e){if(!e.attributes)return e;if(e.attributes[r.selectorChangeType.HIDE]||e.attributes[r.selectorChangeType.REMOVE]){var t=i.extend({css:{}},i.cloneDeep(e));return e.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),e.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return e},t.createStylesFromChange=function(e,t){if(i.isEmpty(t.css))return t.attributes.style;var n="",r=t.attributes.style||"";return i.each(t.css,(function(e,t){var i=new RegExp(t+"\\s?:");i.test(r)||(n+=t+":"+e+";")})),i.isUndefined(t.attributes.style)?(e||"")+n:n+r}}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(219),o=n(220),s=n(145);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){function i(e,t,n,i){var l,d=e.decisionMetadata.experimentPriorities[i],f=function(n,i){var r=c.getExperimentById(e,i.entityId);return c.isValidExperiment(t,r)&&n.push(i.entityId),n},g=o.reduce(d,f,[]);if(!o.isEmpty(g)){var p,h=o.filter(d,{endOfRange:null});if(h&&h.length===d.length)p=r(g);else{if(0!==h.length)throw new u("You must specify weights for all or none of the experiments in each priority layer.");p=a(g,d)}if(l=s.chooseWeightedCandidate(n,e.id,p)){var v=c.getExperimentById(e,l);if(v)return v}}}function r(e){for(var t=[],n=Math.round(1e4/e.length),i=0;i<e.length;i++)t.push({entityId:e[i],endOfRange:n*(i+1)});return t[t.length-1].endOfRange=1e4,t}function a(e,t){for(var n=[],i=[],r=0,a=0;a<t.length;a++){var s=0;e.indexOf(t[a].entityId)>=0&&(s=0===a?t[0].endOfRange:t[a].endOfRange-t[a-1].endOfRange,r+=s,i.push({entityId:t[a].entityId,points:s}))}if(o.isEmpty(n))for(var c=0,u=0;u<i.length;u++){var l=Math.round(1e4*i[u].points/r)+c;n.push({entityId:i[u].entityId,endOfRange:l}),c=l}return n[n.length-1].endOfRange=1e4,n}var o=n(2),s=n(141),c=n(142),u=n(143).DecisionError,l="equal_priority",d={decideLayer:function(e,t){if(!e.decisionMetadata||!e.decisionMetadata.experimentPriorities)throw new u("No decisionMetadata.experimentPriorities on layer.");for(var n=e.decisionMetadata.experimentPriorities.length,r=0;r<n;r++){var a=i(e,t.audienceIds,t.bucketingId,r);if(a){var o=c.selectVariation(a,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap);if(!e.decisionMetadata.offerConsistency||c.hasVariationActionsOnView(o,t.pageId))return{experiment:a,variation:o}}}throw new u("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(e){return!(!e.decisionMetadata||!e.decisionMetadata.offerConsistency)}};e.exports=function(e){e.registerDecider(l,d)}}),(function(e,t,n){var i=n(142),r=n(143).DecisionError,a="single_experiment",o="multivariate",s={selectExperiment:function(e,t,n){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!i.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,s),e.registerDecider(o,s)}})]);