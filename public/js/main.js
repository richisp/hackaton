/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/360.js":
/*!***********************!*\
  !*** ./src/js/360.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function CGWebRotate(node, imagesArray, options) {
  options = options || {};
  var isTouchDevice = 'ontouchstart' in window;
  var activeIndex = 0;
  var pixelsPerFrame = 1;
  var loadedImages = {};
  var indicator = options.indicator;
  var indicatorAdded = false;
  var elStyle = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';
  var container = document.createElement('div');
  node.appendChild(container);
  container.setAttribute('style', elStyle + 'z-index: 1;');
  var eventCatcher = document.createElement('div');
  node.appendChild(eventCatcher);
  eventCatcher.setAttribute('style', elStyle + 'z-index: 2; background: white; opacity: 0;');

  function removeIndicator() {
    clearTimeout(indicatorTimeout);

    if (indicatorAdded) {
      node.removeChild(indicator);
      indicatorAdded = false;
    }
  }

  if (indicator) {
    var indicatorTimeout = setTimeout(function () {
      node.appendChild(indicator);
      indicator.setAttribute('style', 'position: absolute; left: 50%; top: 50%; width: 100px; height: 100px; margin: -50px 0 0 -50px; z-index: 3; pointer-events: none;');
      indicatorAdded = true;
    }, options.indicatorDelay || 5000);
  }

  function updatePixelsPerFrame() {
    pixelsPerFrame = node.offsetWidth / images.length;
  }

  function loadImage(index, callback) {
    if (loadedImages[index]) {
      return null;
    }

    var image = new Image();
    image.src = imagesArray[index];

    image.onload = function () {
      loadedImages[index] = image;
      if (callback) callback();
    };
  }

  function setImageStyles(image) {
    var baseStyle = 'position: relative; z-index: 1;';

    if (node.offsetWidth / node.offsetHeight > 1) {
      image.height = node.offsetHeight;
      image.setAttribute('style', baseStyle + 'top: 0; left: 50%; width: auto; margin-left: -' + image.offsetWidth / 2 + 'px;');
    } else {
      image.width = node.offsetWidth;
      image.setAttribute('style', baseStyle + 'top: 50%; left: 0; height: auto; margin-top: -' + image.offsetHeight / 2 + 'px;');
    }
  }

  function setImage() {
    for (var key in loadedImages) {
      var image = loadedImages[key];
      setImageStyles(image);
    }

    var image = loadedImages[activeIndex];

    if (container.hasChildNodes()) {
      container.replaceChild(image, container.childNodes[0]);
    } else {
      container.appendChild(image);
    }

    setImageStyles(image);
  }

  function preloadImages(index) {
    for (var i = index - 1; i > index - 5; i--) {
      var preloadIndex = (imagesArray.length + i) % imagesArray.length;
      loadImage(preloadIndex);
    }

    for (var i = index + 1; i < index + 5; i++) {
      var preloadIndex = (imagesArray.length + i) % imagesArray.length;
      loadImage(preloadIndex);
    }
  }

  function setActiveIndex(index) {
    activeIndex = (imagesArray.length + index) % imagesArray.length;
    preloadImages(index);

    if (loadedImages[activeIndex]) {
      setImage();
    } else {
      loadImage(activeIndex, function () {
        if (activeIndex === index) {
          setImage();
        }
      });
    }
  }

  function handleResize() {
    for (var key in loadedImages) {
      var image = loadedImages[key];
      setImageStyles(image);
    }
  }

  function handleDown(e) {
    removeIndicator();
    var startX = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    var startIndex = activeIndex;

    function handleMove(e) {
      var currentX = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
      setActiveIndex(startIndex + Math.floor((currentX - startX) / pixelsPerFrame));
    }

    function handleUp() {
      eventCatcher.removeEventListener('mouseup', handleMove);
      eventCatcher.removeEventListener('mousemove', handleMove);
    }

    function handleOut() {
      eventCatcher.removeEventListener('mouseup', handleMove);
      eventCatcher.removeEventListener('mousemove', handleMove);
      eventCatcher.removeEventListener('touchend', handleOut);
      eventCatcher.removeEventListener('touchmove', handleMove);
    }

    if (isTouchDevice) {
      eventCatcher.addEventListener('touchmove', handleMove);
      eventCatcher.addEventListener('touchend', handleOut);
    } else {
      eventCatcher.addEventListener('mousemove', handleMove);
      eventCatcher.addEventListener('mouseup', handleUp);
      eventCatcher.addEventListener('mouseout', handleOut);
    }
  }

  if (isTouchDevice) {
    eventCatcher.addEventListener('touchstart', handleDown);
  } else {
    eventCatcher.addEventListener('mousedown', handleDown);
  }

  updatePixelsPerFrame();
  setActiveIndex(activeIndex);
  window.addEventListener('resize', handleResize);
  return {
    destroy: function destroy() {
      eventCatcher.removeEventListener('mousedown', handleDown);
      eventCatcher.removeEventListener('touchstart', handleDown);
      window.removeEventListener('resize', handleResize);
    }
  };
}

window.CGWebRotate = CGWebRotate;

/***/ }),

/***/ "./src/js/arsenal-tabs.js":
/*!********************************!*\
  !*** ./src/js/arsenal-tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('document').ready(function () {
  if ($('.js-arsenal-tabs-content').length > 0) {
    var $content = $('.js-arsenal-tabs-content'),
        $placeMobile = $('.js-arsenal-tabs-place-mobile'),
        $placeDesktop = $('.js-arsenal-tabs-place-desktop'),
        $tabLink = $('.js-arsenal-tabs-link'),
        duration = 200,
        breakpointTablet = 768,
        $window = $(window);

    var moveContent = function moveContent() {
      var _windowWidth = $window.outerWidth();

      if (_windowWidth < breakpointTablet) {
        // mobile
        // e.append(s) — add 's' the last in 'e'.
        $content.each(function (index, item) {
          $placeMobile[index].append(item);
        });
        $content.css('display', '');
      } else {
        // desktop
        // e.append(s) — add 's' the last in 'e'.
        $placeDesktop.append($content);
      }
    };

    moveContent();
    $window.resize(function () {
      moveContent();
    }); // Toggle tab content

    $tabLink.on('click', function () {
      var $this = $(this);

      var _windowWidth = $window.outerWidth();

      if (_windowWidth >= breakpointTablet && !$this.hasClass('active')) {
        var targetContent = $this.data('arsenal-tab');
        $tabLink.removeClass('active');
        $this.addClass('active');
        $content.closest('.active').stop().fadeOut(duration, function () {
          $(this).removeClass('active');
          $(".js-arsenal-tabs-content[data-arsenal-content=".concat(targetContent, "]")).fadeIn(duration, function () {
            $(this).addClass('active');
          });
        });
      }
    });
  }
});

/***/ }),

/***/ "./src/js/init-yt-player.js":
/*!**********************************!*\
  !*** ./src/js/init-yt-player.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('.js-yt-player').length > 0) {
    var loadPlayer = function loadPlayer() {
      if (typeof YT == 'undefined' || typeof YT.Player == 'undefined') {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    };

    loadPlayer();
  }

  ;
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _toggle_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-menu */ "./src/js/toggle-menu.js");
/* harmony import */ var _toggle_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toggle_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-dropdown-menu */ "./src/js/toggle-dropdown-menu.js");
/* harmony import */ var _toggle_dropdown_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toggle_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reviews_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews-slider */ "./src/js/reviews-slider.js");
/* harmony import */ var _toggle_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-video */ "./src/js/toggle-video.js");
/* harmony import */ var _toggle_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_toggle_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _arsenal_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arsenal-tabs */ "./src/js/arsenal-tabs.js");
/* harmony import */ var _arsenal_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_arsenal_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricing */ "./src/js/pricing.js");
/* harmony import */ var _pricing__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pricing__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _photo_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photo-slider */ "./src/js/photo-slider.js");
/* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scroll-to */ "./src/js/scroll-to.js");
/* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scroll_to__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _init_yt_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./init-yt-player */ "./src/js/init-yt-player.js");
/* harmony import */ var _init_yt_player__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_init_yt_player__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _360__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./360 */ "./src/js/360.js");
/* harmony import */ var _360__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_360__WEBPACK_IMPORTED_MODULE_11__);













/***/ }),

/***/ "./src/js/photo-slider.js":
/*!********************************!*\
  !*** ./src/js/photo-slider.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

$(document).ready(function () {
  if ($('.js-photo-slider').length > 0) {
    var photoSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-photo-slider', {
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
});

/***/ }),

/***/ "./src/js/pricing.js":
/*!***************************!*\
  !*** ./src/js/pricing.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  if ($('.js-get-price').length > 0) {
    var $button = $('.js-get-price'),
        $table = $('.js-price'),
        $head = $('.js-head-price-category'),
        headWidth = 'calc(40vw - 20px)';
    $window = $(window), isPopPlan = 0, offsetScroll = 0;

    var togglePopPlan = function togglePopPlan() {
      if (isPopPlan) {
        $table.addClass('is-popular-plan');
      } else {
        $table.removeClass('is-popular-plan');
      }

      $('.cgt-tag--popular-plan').css('opacity', "".concat(isPopPlan));
    };

    var initStyleForTable = function initStyleForTable() {
      togglePopPlan();

      if ($window.outerWidth() < 576) {
        $table.find('.pricing__table').css('width', "".concat(60 + $button.length * 40, "%"));
        $head.css('width', headWidth);
        $table.scrollLeft(offsetScroll);
      } else {
        $table.find('.pricing__table').css('width', '');
        $head.css('width', '');
      }

      ;
    };

    initStyleForTable();
    $window.resize(function () {
      return initStyleForTable();
    });
    $button.on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      var indexEl = $button.index($this);
      var windowWidth = $window.outerWidth();
      var step = windowWidth * 0.4 - 20;
      offsetScroll = indexEl * step;
      headWidth = "calc(".concat(40 * (indexEl + 1), "vw - ").concat(20 * (indexEl + 1), "px)");
      $button.removeClass('active');
      $this.addClass('active');
      $table.scrollLeft(offsetScroll);
      $head.css('width', headWidth);

      if ($this.hasClass('js-button-popular-plan')) {
        isPopPlan = 1;
      } else {
        isPopPlan = 0;
      }

      ;
      togglePopPlan();
    });
  }
});

/***/ }),

/***/ "./src/js/reviews-slider.js":
/*!**********************************!*\
  !*** ./src/js/reviews-slider.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

$(document).ready(function () {
  if ($('.js-reviews-slider').length > 0) {
    var reviewsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-reviews-slider', {
      init: false,
      spaceBetween: 20,
      watchOverflow: true,
      loop: true,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

    if ($('.js-reviews-slider').find('.swiper-slide').length > 1) {
      reviewsSlider.init();
    } else {
      $('.swiper-pagination').hide();
      $('.reviews__button').hide();
    }
  }
});

/***/ }),

/***/ "./src/js/scroll-to.js":
/*!*****************************!*\
  !*** ./src/js/scroll-to.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('document').ready(function () {
  if ($('.js-scroll-to').length > 0) {
    var $button = $('.js-scroll-to');
    $button.on('click', function (e) {
      e.preventDefault();
      var target = $(this).data('scroll-to');
      var offsetTop = $("[data-scroll-target=".concat(target, "]")).offset().top;
      $('html, body').animate({
        scrollTop: offsetTop
      }, 1000);
    });
  }
});

/***/ }),

/***/ "./src/js/toggle-dropdown-menu.js":
/*!****************************************!*\
  !*** ./src/js/toggle-dropdown-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('document').ready(function () {
  var $toggleDropdownMenu = $('.js-toggle-dropdown-menu');

  if ($toggleDropdownMenu.length > 0) {
    var $nameClassForDropdownOpen = 'dropdown-open';
    var $window = $(window);
    var windowWidth = $window.outerWidth();

    var openDropdown = function openDropdown(el) {
      if (windowWidth >= 576) {
        $toggleDropdownMenu.removeClass($nameClassForDropdownOpen);
        $toggleDropdownMenu.next().stop().slideUp();
      }

      ;
      el.addClass($nameClassForDropdownOpen);
      el.next().stop().slideDown();
    };

    var closeDropdown = function closeDropdown(el) {
      el.removeClass($nameClassForDropdownOpen);
      el.next().stop().slideUp();
    };

    var disableDropdown = function disableDropdown() {
      $toggleDropdownMenu.removeClass($nameClassForDropdownOpen);
      $toggleDropdownMenu.next().css('display', '');
    };

    $toggleDropdownMenu.on('click', function (event) {
      if (!$('html').hasClass('is-device-desktop') || windowWidth < 576) {
        event.preventDefault();
        var $this = $(this);
        $this.hasClass($nameClassForDropdownOpen) ? closeDropdown($this) : openDropdown($this);
      }

      ;
    });
    $window.resize(function () {
      windowWidth = $window.outerWidth();

      if (($('html').hasClass('is-device-desktop') || windowWidth >= 576) && $toggleDropdownMenu.hasClass($nameClassForDropdownOpen)) {
        disableDropdown();
      }
    });
  }

  ;
});

/***/ }),

/***/ "./src/js/toggle-menu.js":
/*!*******************************!*\
  !*** ./src/js/toggle-menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('document').ready(function () {
  var $toggleMenu = $('.js-toggle-menu');

  if ($toggleMenu.length > 0) {
    var $body = $('body'),
        nameClassForOpenMenu = 'menu-open',
        $mobileMenu = $('.js-mobile-menu'),
        $nav = $('.js-nav'),
        $window = $(window),
        windowWidth = $window.outerWidth(),
        positionScroll = 0,
        breakpoint = 576;

    var openMenu = function openMenu() {
      positionScroll = $window.scrollTop();
      $body.addClass(nameClassForOpenMenu);
      $('.page-wrapper').scrollTop(positionScroll);
    };

    var closeMenu = function closeMenu() {
      $body.removeClass(nameClassForOpenMenu);
      $window.scrollTop(positionScroll);
    };

    $toggleMenu.on('click', function (event) {
      event.preventDefault();
      $body.hasClass(nameClassForOpenMenu) ? closeMenu() : openMenu();
    });

    var moveMenuWithResponsive = function moveMenuWithResponsive() {
      var $placeMenuForMobile = $mobileMenu;
      var $placeMenuForDesktop = $('.js-nav-for-desktop');

      if (windowWidth < breakpoint) {
        // for mobile
        $placeMenuForMobile.prepend($nav);
      } else {
        // for desktop
        $placeMenuForDesktop.prepend($nav);
      }

      ;
    };

    moveMenuWithResponsive();
    $window.resize(function () {
      windowWidth = $window.outerWidth();
      moveMenuWithResponsive();

      if (windowWidth >= breakpoint && $body.hasClass(nameClassForOpenMenu)) {
        closeMenu();
      }
    });
  }
});

/***/ }),

/***/ "./src/js/toggle-video.js":
/*!********************************!*\
  !*** ./src/js/toggle-video.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('document').ready(function () {
  if ($(".js-modal").length > 0) {
    var positionScroll = 0,
        $window = $(window),
        player = null,
        $body = $('body');
    $('.js-open-modal').on('click', function () {
      var targetModal = $(this).data('target-modal');
      positionScroll = $window.scrollTop();
      $body.css('overflow', 'hidden');
      $('.page-wrapper').scrollTop(positionScroll);
      $(".js-modal[data-target-modal=".concat(targetModal, "]")).fadeIn(500);

      if ($("#".concat(targetModal)).length > 0) {
        var onPlayerReady = function onPlayerReady(event) {
          event.target.playVideo();
        };

        var videoId = $("#".concat(targetModal)).data('video-id');
        player = new YT.Player(targetModal, {
          videoId: videoId,
          events: {
            'onReady': onPlayerReady
          },
          playerVars: {
            rel: 0
          }
        });
      }
    });
    $('.js-close-modal').on('click', function () {
      $(this).closest('.js-modal').fadeOut(500);
      $body.css('overflow', '');
      $window.scrollTop(positionScroll);

      if (player) {
        player.destroy();
      }
    });
  }
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
