window.hzmr = window.hzmr || []; window.hzmr.push("widgets:4197");
(function() {
	function createIFrame(width, height) {
		var iframeElem = document.createElement('iframe');
		iframeElem.setAttribute("scrolling","no");
		iframeElem.allowTransparency = true;
		iframeElem.border = 0;
		iframeElem.frameBorder = 0;
		iframeElem.style.border = 'none';
		iframeElem.width = width;
		iframeElem.height = height;
		return iframeElem;
	}

	function containsClassName(elem, className) {
		if(elem.className && elem.className.split) {
			var classNames = elem.className.split(' ');
			for(var i=0; i<classNames.length; i++) {
				if(className == classNames[i]) {
					return true;
				}
			}
		}
		return false;
	}

	function cleanLocale(locale) {
		var knownLocales = {"en-us":true,"en-gb":true,"en-au":true,"de-de":true,"fr-fr":true,"ru-ru":true,"ja-jp":true,"it-it":true,"es-es":true,"da-dk":true,"nb-no":true,"fi-fi":true,"sv-se":true,"en-ie":true,"en-nz":true,"en-sg":true,"en-in":true,"nl-nl":true,"de-at":true};
		if(locale && locale.toLowerCase() in knownLocales) {
			return locale.toLowerCase();
		}
		return 'en-us';
	}
	
	function processWidgets(domId) {
		var links = [];
		if(typeof domId == 'string') {
			if(domId.charAt(0) == '#') {
				domId = domId.substr(1);
			}
			var elem = document.getElementById(domId);
			if(elem) {
				links.push(elem);
			}
		} else if(typeof domId != 'undefined' && ('nodeName' in domId)) {
			links.push(domId);
		} else {
			links = document.getElementsByTagName('a');
		}
		var pid = new Date().getTime() + '' + Math.floor(Math.random()*1000000);
		var houzzLinks = [];
		var houzzReviews = [];
		for (var i=0; i < links.length; i++) {
			if(containsClassName(links[i],'houzz-share-button')) {
				houzzLinks.push(links[i]);
			} else if(containsClassName(links[i], 'houzz-review-widget')) {
				houzzReviews.push(links[i]);
			}				
		}
		for (var i=0; i < houzzReviews.length; i++) {
			var review = houzzReviews[i];
			var pro = review.getAttribute('data-pro');
			var mini = review.getAttribute('data-size');
			mini = (mini == 'mini');
			var locale = cleanLocale(review.getAttribute('data-locale'));
			var iframeWidth = mini?225:300;
			var iframeHeight = mini?130:435;
			
			if(pro) {
				var reviewUrls = {"en-us":"https:\/\/www.houzz.com\/reviewWidget","en-gb":"https:\/\/www.houzz.co.uk\/reviewWidget","en-au":"https:\/\/www.houzz.com.au\/reviewWidget","de-de":"https:\/\/www.houzz.de\/reviewWidget","fr-fr":"https:\/\/www.houzz.fr\/reviewWidget","ru-ru":"https:\/\/www.houzz.ru\/reviewWidget","ja-jp":"https:\/\/www.houzz.jp\/reviewWidget","it-it":"https:\/\/www.houzz.it\/reviewWidget","es-es":"https:\/\/www.houzz.es\/reviewWidget","da-dk":"https:\/\/www.houzz.dk\/reviewWidget","nb-no":"https:\/\/www.houzz.no\/reviewWidget","fi-fi":"https:\/\/www.houzz.fi\/reviewWidget","sv-se":"https:\/\/www.houzz.se\/reviewWidget","en-ie":"https:\/\/www.houzz.ie\/reviewWidget","en-nz":"https:\/\/www.houzz.co.nz\/reviewWidget","en-sg":"https:\/\/www.houzz.com.sg\/reviewWidget","en-in":"https:\/\/www.houzz.in\/reviewWidget","nl-nl":"https:\/\/www.houzz.nl\/reviewWidget","de-at":"https:\/\/www.houzz.at\/reviewWidget"};
				var iframeSrc = reviewUrls[locale] + '/' + encodeURIComponent(pro) + '/' + (mini?'mini':'');
				var iframeElem = createIFrame(iframeWidth, iframeHeight);
				review.parentNode.replaceChild(iframeElem, review);
				iframeElem.src = iframeSrc;
			}
		}
		for (var i=0; i < houzzLinks.length; i++) {
			var link = houzzLinks[i];

			var imageURL = link.getAttribute('data-img');
			var linkURL = link.getAttribute('data-url');
			var title = link.getAttribute('data-title');
			var showCount = link.getAttribute('data-showcount') == '1';
			var hzID = link.getAttribute('data-hzid');
			var whiteBg = link.getAttribute('data-whitebg');
			var format = link.getAttribute('data-format');
			var locale = cleanLocale(link.getAttribute('data-locale'));
			var identifier = i + '' + Math.floor(Math.random()*1000000);
			link.id = 'hzbtn' + identifier;
			var referer = document.location.href;
			
			var buttonWidths = {"en-us":52,"en-gb":52,"en-au":52,"de-de":75,"fr-fr":88,"ru-ru":52,"ja-jp":52,"it-it":52,"es-es":52,"da-dk":52,"nb-no":52,"fi-fi":52,"sv-se":52,"en-ie":52,"en-nz":52,"en-sg":52,"en-in":52,"nl-nl":52,"de-at":52};
			var buttonWidth = buttonWidths[locale];

			var buttonUrls = {"en-us":"https:\/\/www.houzz.com\/buttonWidget","en-gb":"https:\/\/www.houzz.co.uk\/buttonWidget","en-au":"https:\/\/www.houzz.com.au\/buttonWidget","de-de":"https:\/\/www.houzz.de\/buttonWidget","fr-fr":"https:\/\/www.houzz.fr\/buttonWidget","ru-ru":"https:\/\/www.houzz.ru\/buttonWidget","ja-jp":"https:\/\/www.houzz.jp\/buttonWidget","it-it":"https:\/\/www.houzz.it\/buttonWidget","es-es":"https:\/\/www.houzz.es\/buttonWidget","da-dk":"https:\/\/www.houzz.dk\/buttonWidget","nb-no":"https:\/\/www.houzz.no\/buttonWidget","fi-fi":"https:\/\/www.houzz.fi\/buttonWidget","sv-se":"https:\/\/www.houzz.se\/buttonWidget","en-ie":"https:\/\/www.houzz.ie\/buttonWidget","en-nz":"https:\/\/www.houzz.co.nz\/buttonWidget","en-sg":"https:\/\/www.houzz.com.sg\/buttonWidget","en-in":"https:\/\/www.houzz.in\/buttonWidget","nl-nl":"https:\/\/www.houzz.nl\/buttonWidget","de-at":"https:\/\/www.houzz.at\/buttonWidget"};

			var iframeSrc = buttonUrls[locale] + '?url=' 
				+ encodeURIComponent(linkURL);
			if(imageURL) {
				iframeSrc += '&img=' + encodeURIComponent(imageURL);
			}
			if(title) {
				iframeSrc += '&title=' + encodeURIComponent(title);
			}
			if(showCount) {
				iframeSrc += '&count=1';
			}
			if(whiteBg) {
				var whiteBgValue = 0;
				if(String(whiteBg) == '1' || whiteBg.toLowerCase() == 'true') {
					whiteBgValue = 2;
				} else if(String(whiteBg) == '0' || whiteBg.toLowerCase() == 'false') {
					whiteBgValue = 1;
				}
				iframeSrc += '&whiteBg=' + encodeURIComponent(whiteBgValue);
			}
			if(hzID) {
				iframeSrc += '&hzid=' + encodeURIComponent(hzID);
			}
			iframeSrc += '&locale=' + encodeURIComponent(locale);
			iframeSrc += '&ref=' + encodeURIComponent(referer);
			iframeSrc += '&pid=' + encodeURIComponent(pid);

			if(format == 'custom') {
				if(link.getAttribute('data-loaded') == '1') { continue; }
				iframeSrc += '&fmt=' + encodeURIComponent(format);
				iframeSrc += '&domid=' + encodeURIComponent(identifier);
				var extElem = document.createElement('script');
				extElem.setAttribute('type','text/javascript');
				extElem.id = 'hzjs' + encodeURIComponent(identifier);
				extElem.src = iframeSrc;
				link.parentNode.appendChild(extElem);
			} else {
				var iframeElem = createIFrame(buttonWidth + (showCount?57:0), 20);
				link.parentNode.replaceChild(iframeElem, link);
				iframeElem.src = iframeSrc;
			}
		}
	}

	window.houzz = window.houzz || {};
	window.houzz.processWidgets = processWidgets;
	processWidgets();
})();