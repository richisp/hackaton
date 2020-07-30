/* Minification failed. Returning unminified contents.
(359,9-17): run-time error JS1300: Strict-mode does not allow assignment to undefined variables: loadTags
 */
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

/* jshint esversion: 6 */

/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

/*global module,define,ReactDOM,React,loadTags,$script*/
(function (name, definition) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else if (typeof define === 'function' && define.amd) {
    define(definition);
  } else {
    window[name] = definition();
  }
})('$script', function () {
  var doc = document;
  var head = doc.getElementsByTagName('head')[0];
  var s = 'string';
  var f = false;
  var push = 'push';
  var readyState = 'readyState';
  var onreadystatechange = 'onreadystatechange';
  var list = {};
  var ids = {};
  var delay = {};
  var scripts = {};
  var scriptpath;
  var urlArgs;

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) {
      if (!fn(ar[i])) {
        return f;
      }
    }

    return 1;
  }

  function each(ar, fn) {
    every(ar, function (el) {
      fn(el);
      return 1;
    });
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths];
    var idOrDoneIsDone = idOrDone && idOrDone.call;
    var done = idOrDoneIsDone ? idOrDone : optDone;
    var id = idOrDoneIsDone ? paths.join('') : idOrDone;
    var queue = paths.length;

    function loopFn(item) {
      return item.call ? item() : list[item];
    }

    function callback() {
      if (! --queue) {
        list[id] = 1;
        /*jshint -W030*/

        done && done();

        for (var dset in delay) {
          if (delay.hasOwnProperty(dset)) {
            every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
          }
        }
        /*jshint +W030*/

      }
    }

    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) {
          return callback();
        }

        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = path.indexOf('.js') === -1 ? scriptpath + path + '.js' : scriptpath + path;
        }

        if (scripts[path]) {
          if (id) {
            ids[id] = 1;
          }

          return scripts[path] === 2 ? callback() : setTimeout(function () {
            loading(path, true);
          }, 0);
        }

        scripts[path] = 1;

        if (id) {
          ids[id] = 1;
        }

        create(path, callback);
      });
    }, 0);
    return $script;
  }

  function create(path, fn) {
    var el = doc.createElement('script'),
        loaded;

    el.onload = el.onerror = el[onreadystatechange] = function () {
      if (el[readyState] && !/^c|loade/.test(el[readyState]) || loaded) {
        return;
      }

      el.onload = el[onreadystatechange] = null;
      loaded = 1;
      scripts[path] = 2;
      fn();
    };

    el.async = 1;
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild);
  }

  $script.get = create;

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift();
      /*jshint -W030*/

      !scripts.length ? $script(s, id, done) : $script(s, callback);
      /*jshint +W030*/
    })();
  };

  $script.path = function (p) {
    scriptpath = p;
  };

  $script.urlArgs = function (str) {
    urlArgs = str;
  };

  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps];
    var missing = [];
    /*jshint ignore:start*/

    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {
      return list[dep];
    }) ? ready() : !function (key) {
      delay[key] = delay[key] || [];
      delay[key][push](ready);
      req && req(missing);
    }(deps.join('|'));
    /*jshint ignore:end*/

    return $script;
  };

  $script.done = function (idOrDone) {
    $script([null], idOrDone);
  };

  return $script;
});

Crate.EventBus = function () {
  var subjects = {};
  var hasOwnProps = subjects.hasOwnProperty;

  function subscribe(subject, listener) {
    if (!hasOwnProps.call(subjects, subject)) {
      subjects[subject] = [];
    }

    var index = subjects[subject].push(listener) - 1;
    return {
      remove: function remove() {
        delete subjects[subject][index];
      }
    };
  }

  function publish(subject, metadata) {
    if (!hasOwnProps.call(subjects, subject)) {
      return;
    }

    subjects[subject].forEach(function (handler) {
      handler(metadata);
    });
  }

  return {
    subscribe: subscribe,
    publish: publish,
    debug: {
      s: subjects
    }
  };
}();

Crate.Availability = function () {
  var availability = null;

  function getAvailability() {
    return availability;
  }

  if ($('#jsPreFetchAvailabilitySku').length) {
    var sku = $('#jsPreFetchAvailabilitySku').val();

    if (sku == 0) {
      return;
    }

    Crate.Services.HttpService.get(location.origin + '/browse/userdata/GetAvailabilityDetails?sku=' + sku).then(function (r) {
      availability = r;

      if (Crate && Crate.Model && Crate.Model.BrowseDto) {
        Crate.Model.BrowseDto.Availability = r;
      }
    });
  }

  return {
    prefetchedAvailability: getAvailability
  };
}();

var Crate = Crate || {};
Crate.Services = Crate.Services || {};
Crate.Services.CookieService = Crate.Services.CookieService || {}; //test this to fix errors

Crate.Utilities.Cookies.getCookie = function (name) {
  var cookieFound = null;
  var cookies = document.cookie.split(';');
  cookies.forEach(function (c) {
    var x = c.split('=');

    if (x[0].replace(/^\s+|\s+$/g, '') == name) {
      cookieFound = x[1];
    } else if (x[0].replace(/^\s+|\s+$/g, '') == name + 'Remember') {
      cookieFound = x[1];
    }
  });

  if (cookieFound == null) {
    return null;
  } else {
    return decodeURI(cookieFound);
  }
};

Crate.ComponentLoader = function ($, asyncLoader) {
  var ComponentReferences = [];
  var path = '/bundles/scripts/reactComponents/';

  function Module(moduleSelector, moduleName, moduleLocation, dependentModules) {
    this.moduleSelector = moduleSelector;
    this.moduleLocation = moduleLocation;
    this.moduleName = moduleName;
    this.dependencies = dependentModules || [];
  }

  function component(selector, name, location, dependencies) {
    return new Module($('[data-module="' + selector + '"]'), name, location, dependencies);
  }

  function version(name) {
    return Crate && Crate.BundleVersions ? Crate.BundleVersions[name] || "" : "";
  }

  function loadComponents(components) {
    var scheduledModules = []; // TODO: learn to handle 2nd+ level dependencies

    $(components).each(function (index, module) {
      if (module.moduleSelector.length) {
        var mainModule = module.moduleLocation || module.moduleName;
        this.dependencies.push(mainModule);
        var toLoad = this.dependencies.map(function (d) {
          if (d.endsWith(".js")) {
            d = d.substr(0, d.length - 3);
          }

          return path + d + ".js?v=" + version(d);
        });
        asyncLoader(toLoad, module.moduleName);
        scheduledModules.push(module.moduleName);
      }
    });
    asyncLoader.ready(scheduledModules, function () {
      $(components).each(function (index, module) {
        if (module.moduleSelector.length) {
          module.moduleSelector.each(function (index, modulePlacement) {
            var data = $(modulePlacement).data();
            data.childHtml = $(modulePlacement).html();
            /*jshint -W061 */

            var reference = ReactDOM.render(React.createElement(eval(module.moduleName), data), modulePlacement);
            /*jshint +W061 */

            ComponentReferences.push(reference);
          });
        }
      });
    });
  }

  function forceUpdateComponentsByType(typeToUpdate) {
    if (typeToUpdate) {
      //Find reference to component we need to re-render with changes
      Crate.ComponentLoader.ComponentReferences.forEach(function (item) {
        if (_instanceof(item, typeToUpdate)) {
          console.log("Updating component");
          item.forceUpdate();
        }
      });
    }
  }

  function setCrateReactObj() {
    window.Crate = Crate || {};
    Crate.React = Crate.React || {};
    Crate.React.Stores = Crate.React.Stores || {};
    Crate.React.Actions = Crate.React.Actions || {};
  }

  function runPostLoadScript(didRun) {
    var postLoadScript = function postLoadScript() {
      if (!didRun) {
        didRun = true;
        $('.jsPostLoadComponentLoader').each(function (index, item) {
          asyncLoader($(item).val());
        });
        /*jshint ignore:start*/

        loadTags(); //product and family pages... since we are doing async rendering, I want to make the tags load after rendering of react components is complete

        loadTags = function loadTags() {};
        /*jshint ignore:end*/

      }
    };

    if (window.addEventListener) {
      window.addEventListener('load', postLoadScript);
    } else if (window.attachEvent) {
      window.attachEvent('onload', postLoadScript);
    }

    setTimeout(postLoadScript, 5000);
  }

  function bootstrapReact(mostImportantComponents, components) {
    var didRun = false;
    setCrateReactObj();
    asyncLoader(path + 'Actions.js?v=' + version("Actions"), function () {
      asyncLoader(path + 'Stores.js?v=' + version("Stores"), function () {
        new Promise(function (resolve) {
          resolve(loadComponents(mostImportantComponents));
        }).then(function () {
          new Promise(function () {
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function () {
                Crate.ComponentLoader.loadPopup();
                loadComponents(components);
              });
            } else {
              Crate.ComponentLoader.loadPopup();
              loadComponents(components);
            }
          });
        }).then(function () {
          runPostLoadScript(didRun);
        });
      });
    });
  }

  function loadPopup() {
    loadComponents([new Module($('[data-module="popup"]'), "Popup")]);
  }

  function bootstrap() {
    Crate.EventBus.subscribe('jit-loader', bootstrapReact);
    var mostImportantComponents = [new Module($('[data-module="headerContainer"]'), "HeaderContainer", "Header", ["Grouper", "Popup", "ShopButtons", "SpecialOrder", "Favorites", "A11yButton", "Login", "A11yAccordion", "A11yKeyboardFocus", "CrateSlickCarousel", "Shipment"]), new Module($('[data-module="hat"]'), "Hat", "Header", ["Shipment"]), new Module($('[data-module="shopButtonCombo"]'), "ShopButtonCombo", "ShopButtons", ["Favorites", "A11yButton", "Login", "StoreAvailabilityPopup", "A11yAccordion", "A11yKeyboardFocus", "Carousel"]), new Module($('[data-module="shopButtonContainer"]'), "ShopButtonContainer", "ShopButtons", ["Favorites", "A11yButton", "Login", "StoreAvailabilityPopup", "A11yAccordion", "A11yKeyboardFocus", "Carousel"]), new Module($('[data-module="reviews"]'), "ReviewsContainer", "Reviews", ["RevealContent"]), new Module($('[data-module="starsOutlet"]'), "StarsOutlet", "Reviews")];
    var components = [new Module($('[data-module="popup"]'), "Popup"), new Module($('[data-module="storeAvailabilityPopup"]'), "StoreAvailabilityPopup", "StoreAvailabilityPopup", ["A11yAccordion", "Dimension"]), new Module($('[data-module="emailFriendPopup"]'), "EmailFriendPopup", "EmailFriend"), new Module($('[data-module="grouper"]'), "GrouperContainer", "Grouper", ["Popup", "A11yKeyboardFocus"]), new Module($('[data-module="dimensions"]'), "Dimensions", "Dimension"), new Module($('[data-module="carousel"]'), "Carousel", "Carousel", ["ShopButtons", "A11yKeyboardFocus", "Favorites", "A11yButton"]), // we shoud avoid using dependancies based on data-model, we have to include dependancies from their location.
    new Module($('[data-module="zoomableCarousel"]'), "ZoomableCarousel", "Carousel", ['Popup', 'SocialMedia', 'ImageZoom', "ShopButtons", "Favorites", "Comfort", "A11yKeyboardFocus", "CrateSlickCarousel"]), new Module($('[data-module="specialOrderContainer"]'), "SpecialOrderContainer", "SpecialOrder", ["Header", "Favorites", "A11yAccordion", "Login", "StoreAvailabilityPopup", "CrateSlickCarousel"]), new Module($('[data-module="favoriteHeart"]'), "FavoriteHeart", "Favorites"), new Module($('[data-module="AddToAdditionalListButton"]'), "AddToAdditionalListButton", "Favorites"), new Module($('[data-module="description"]'), "Description", "Description", ["RevealContent"]), new Module($('[data-module="tabDescription"]'), "TabDescription", "TabDescription", ["Dimension", "A11yTab", "WallpaperCalculator"]), new Module($('[data-module="accessories"]'), "Accessories", "Accessory", ['Popup', "A11yKeyboardFocus"]), new Module($('[data-module="dimensionCarousel"]'), "DimensionCarousel", "Dimension", ["A11yKeyboardFocus", "ImageZoom"]), new Module($('[data-module="giftBundle"]'), "GiftBundle", "GiftBundle"), new Module($('[data-module="comfort"]'), "Comfort"), new Module($('[data-module="care"]'), "CareContainer", "Care", ["RevealContent"]), new Module($('[data-module="dimensionDetail"]'), "DimensionDetail", "Dimension"), new Module($('[data-module="rewardsContainer"]'), "RewardsContainer", "Rewards"), new Module($('[data-module="revealContent"]'), "RevealContent"), new Module($('[data-module="availabilityAndExclusiveText"]'), "AvailabilityAndExclusiveText", "Header"), new Module($('[data-module="internationalMessages"]'), "InternationalMessages", "Header"), new Module($('[data-module="shipContainer"]'), "ShipContainer", "Shipment", ['Grouper', 'Spin', 'Header', 'StoreAvailabilityPopup', "A11yAccordion", "Personalization", "InstallationService"]), // todo(dp): should refactor Header components and extract, zip and availability to it's own folder 
    new Module($('[data-module="familyLineProductContainer"]'), "FamilyLineProductContainer", "FamilyLineProduct", ['ShopButtons', 'Shipment', 'Grouper', 'Spin', 'Header', 'StoreAvailabilityPopup', "A11yAccordion", "Care", "SpecialOrder", "A11yKeyboardFocus", "Login", "Carousel"]), // todo(dp): not sure aobut Grouper yet, again header shoudl be refactored to extract change zip functionality in its own bundle
    new Module($('[data-module="recentlyViewed"]'), "RecentlyViewedContainer", "RecentlyViewed"), new Module($('[data-module="pageNavBar"]'), "PageNavBar"), new Module($('[data-module="buyableSwatchContainer"]'), "BuyableSwatchContainer", "BuyableSwatch", ["ShopButtons", "Carousel"]), new Module($('[data-module="printAndShare"]'), "PrintAndShare", "PrintAndShare", ["EmailFriend", "ShopButtons", "A11yKeyboardFocus", "Carousel"]), new Module($('[data-module="wallpaperCalculator"]'), "WallpaperCalculator", "WallpaperCalculator"), new Module($('[data-module="s7VideoComponent"]'), "S7VideoComponent"), new Module($('[data-module="login"]'), "LoginContainer", "Login"), new Module($('[data-module="interactiveColorBar"]'), "InteractiveColorBar", "InteractiveColorBar"), new Module($('[data-module="availabilityExtended"]'), "AvailabilityExtended", "Header"), new Module($('[data-module="productAddOns"]'), "ProductAddOns", "ProductAddOns", ["ShopButtons", "Carousel"]), new Module($('[data-module="favoritesListShopButtons"]'), "FavoritesListShopButtons", "Favorites", ["ShopButtons", "Login", "A11yKeyboardFocus", "Carousel"]), new Module($('[data-module="shippingPanel"]'), "ShippingPanel", "CbccShipping", ["ShippingAndDeliveryPopup", "A11yTab", "Spin"]), new Module($('[data-module="quicklookContainer"]'), "QuicklookContainer", "Quicklook", ["ShopButtons", "Favorites", "A11yButton", "Login", "StoreAvailabilityPopup", "A11yAccordion", "A11yKeyboardFocus", "Reviews", "RevealContent", "InteractiveColorBar", "Carousel", "ZoomableCarousel", "Popup", "ImageZoom", "SocialMedia", "Comfort", "CrateSlickCarousel"]), new Module($('[data-module="minisetContainer"]'), "MinisetContainer", "Miniset", ["Favorites", "InteractiveColorBar", "Quicklook", "ShopButtons", "A11yButton", "Login", "StoreAvailabilityPopup", "A11yAccordion", "A11yKeyboardFocus", "Reviews", "RevealContent", "Carousel", "Popup", "ImageZoom", "SocialMedia", "Comfort", "CrateSlickCarousel"]), new Module($('[data-module="seoSpillItemCollection"]'), "SeoSpillItemCollection", "SeoSpill", ["SpillProgressBar", "Miniset", "Favorites", "Quicklook", "InteractiveColorBar", "ShopButtons", "A11yButton", "Login", "StoreAvailabilityPopup", "A11yAccordion", "A11yKeyboardFocus", "Reviews", "RevealContent", "Carousel", "Popup", "ImageZoom", "SocialMedia", "Comfort", "CmsModel"]), new Module($('[data-module="viewMoreProductsButton"]'), "ViewMoreProductsButton", "Spills"), new Module($('[data-module="mixAndMatch"]'), "MixAndMatch"), new Module($('[data-module="designerRecommend"]'), "DesignerRecommend", "DesignerRecommend", ["Carousel"]), new Module($('[data-module="categoryReps"]'), "CategoryReps", "Spategory", ["Carousel"]), new Module($('[data-module="personalization"]'), "Personalization"), new Module($('[data-module="quicklookButton"]'), "QuicklookButton", "Quicklook", ["ShopButtons", "Favorites", "A11yButton", "Login", "StoreAvailabilityPopup", "A11yAccordion", "A11yKeyboardFocus", "Reviews", "RevealContent", "InteractiveColorBar", "Carousel", "Popup", "ZoomableCarousel", "ImageZoom", "SocialMedia", "Comfort", "CrateSlickCarousel"]), new Module($('[data-module="singleCollectionContainer"]'), "SingleCollectionContainer", "SingleCollection", ["SpecialOrder", "S7VideoComponent", "CrateSlickCarousel", "CmsModel"]), new Module($('[data-module="selectStoreButton"]'), "SelectStoreButton", "ShopButtons", ["StoreAvailabilityPopup", "A11yAccordion", "Carousel"]), new Module($('[data-module="navFooter"]'), "NavFooter"), new Module($('[data-module="accountInfo"]'), "AccountInfo"), new Module($('[data-module="headerStoreContainer"]'), "HeaderStoreContainer"), new Module($('[data-module="piCarousel"]'), "PiCarousel", "Carousel", ["ShopButtons", "A11yKeyboardFocus"]), new Module($('[data-module="addToCartPiCarousel"]'), "AddToCartPiCarousel", "Carousel", ["ShopButtons", "A11yKeyboardFocus"]), new Module($('[data-module="curalate"]'), "Curalate", "Curalate", ["Carousel"]), new Module($('[data-module="sectionalConfiguratorPlayerButton"]'), "SectionalConfiguratorPlayerButton", "S7VideoComponent"), new Module($('[data-module="spillProgressBar"]'), "SpillProgressBar", ["SpillProgressBar"]), new Module($('[data-module="handy"]'), "Handy", "InstallationService"), new Module($('[data-module="designStudio"]'), "DesignStudio", "DesignStudio"), new Module($('[data-module="designForm"]'), "DesignForm", "DesignStudio"), new Module($('[data-module="designQuestionForm"]'), "DesignQuestionForm", "DesignStudio")];
    bootstrapReact(mostImportantComponents, components);
    return this;
  }

  function jitLoader() {
    try {
      if (arguments.length > 0) {
        Crate.EventBus.publish('jit-loader', arguments); // ald way: bootstrapReact(arguments);
      }
    } catch (err) {
      console.error('unhandled exception during loading component in ajax response: ' + err);
    }
  }

  return {
    init: bootstrap,
    jitLoader: jitLoader,
    componentManifest: component,
    loadPopup: loadPopup,
    ComponentReferences: ComponentReferences,
    forceUpdateComponentsByType: forceUpdateComponentsByType
  };
}
/*jshint ignore:start*/
(jQuery, $script).init()
/*jshint ignore:end*/
;

Crate.Scroll = function (Scroll) {
  function getCurrentPosition() {
    if (window.pageYOffset) {
      return window.pageYOffset;
    }

    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    }

    return document.body.scrollTop;
  }

  function getCurrentPopupPosition() {
    var popUpContainer = document.getElementById("popup-container");
    return popUpContainer.scrollTop;
  }

  function getStickeyHeaderOffset() {
    var header = document.getElementsByClassName("sticky-header");
    return header.length === 0 ? 0 : header[0].offsetHeight;
  }

  function toSection(id) {
    var target = document.getElementById(id);
    var rect = target.getBoundingClientRect();
    var offset = getStickeyHeaderOffset();
    var pos = getCurrentPosition();
    var targetPosition = rect.top - offset + pos + 10;
    toPosition(targetPosition, target);
  }

  function toTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  function toSpecialOrderConfig() {
    var target = document.getElementById("special-order-configuration-panel");

    if (target) {
      var rect = target.getBoundingClientRect();
      var offset = getStickeyHeaderOffset();
      var pos = getCurrentPosition();
      var targetPosition = rect.top - offset + pos + 10;

      if (pos <= targetPosition) {
        return;
      } // do not scroll down if the user is already at the top of the page

      /*jshint ignore:start*/


      toSection("special-order-configuration-panel");
      /*jshint ignore:end*/
    }
  }

  function toColorBucket() {
    var target = document.getElementById("js-color-by-color-family");
    var stickyImage = document.querySelector('.jsCustomUpholsteryPlayerCol');
    var popupContainer = target.offsetParent;
    var end = target.offsetTop - stickyImage.getBoundingClientRect().bottom;
    var pos = getCurrentPopupPosition();
    var direction = end > pos ? "down" : "up";
    var popUpContainer = document.getElementById("popup-container");
    var t = setInterval(function () {
      if (direction === "down") {
        pos += 7;

        if (pos > end) {
          pos = end;
        }
      } else {
        pos -= 7;

        if (pos < end) {
          pos = end;
        }
      }

      popUpContainer.scrollTop = pos;

      if (pos >= end) {
        clearInterval(t);
      }
    }, 5);
  }

  function a11yKeyboardFocus(target) {
    target.classList.add("a11y-focused");
    target.focus();
    target.addEventListener("blur", function () {
      target.classList.remove('a11y-focused');
    }, true);
  } // we need to implement smooth scrolling manually in order to apply a11y related styles when scroll complete (native api has no callback)


  function toPosition(end, target) {
    Crate.UI.Scroll.scrollTo(end, false, false);
    window.addEventListener('scroll', function scrollCallback(e) {
      if (window.scrollY + 10 >= end) {
        a11yKeyboardFocus(target);
        this.removeEventListener("scroll", scrollCallback);
      } else if (window.scrollY - 10 <= end) {
        a11yKeyboardFocus(target);
        this.removeEventListener("scroll", scrollCallback);
      }
    });
  }

  return _objectSpread({}, Scroll, {
    getCurrentPosition: getCurrentPosition,
    getCurrentPopupPosition: getCurrentPopupPosition,
    getStickeyHeaderOffset: getStickeyHeaderOffset,
    toSection: toSection,
    toTop: toTop,
    toSpecialOrderConfig: toSpecialOrderConfig,
    toColorBucket: toColorBucket,
    toPosition: toPosition
  });
}(Crate.Scroll || {});

;