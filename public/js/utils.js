var win = window;
var nav = win.navigator;
var UA = typeof nav !== 'undefined' ? nav.userAgent : '';

var isOs = function () {
  var platform = typeof nav !== 'undefined' ? nav.platform : '';
  var maxTouchPoints = typeof nav !== 'undefined' ? nav.maxTouchPoints : '';

  return (/iPad|iPhone|iPod/.test(UA) && !win.MSStream) || (platform === 'MacIntel' && maxTouchPoints > 1);
};

var isArQuickLookEnabled = function () {
  var temp = document.createElement('a');
  return temp.relList && temp.relList.supports && temp.relList.supports('ar');
};

var isAndroid = function () {
  return /android/i.test(UA);
};

document.querySelectorAll('[data-ar=true]').forEach(function (el) {
  el.rel = 'ar';

  if (isOs() && isArQuickLookEnabled()) {
    el.href = el.attributes['data-usdz'].value;
  } else if (isAndroid()) {
    el.href = el.attributes['data-ar-core'].value;
    var controlsContainer = document.createElement('div')
    var controlsIcon = new Image()
    controlsContainer.classList.add('ar-icon')
    controlsIcon.src = 'http://enterprise.cgtrader.com/images/global/ar.png'

    controlsContainer.appendChild(controlsIcon)
    el.appendChild(controlsContainer)
  }
});
