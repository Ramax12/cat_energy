'use strict';

(function () {
  var ENTER_KEYCODE = 13;

  //burger menu
  var mainNav = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.add('main-nav--closed');
  navToggle.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });

  //slider(mobile)
  var imgBeforeWrapper = document.querySelector('.slider__img-before-wrapper');
  var imgBefore = document.querySelector('.slider__img-before');
  var imgAfter = document.querySelector('.slider__img-after');
  var switches = document.querySelectorAll('.slider__switch');
  var switchBefore = document.querySelector('#slider__switch-before');
  var switchAfter = document.querySelector('#slider__switch-after');
  var range = document.querySelector('.slider__switch-range');

  switchBefore.addEventListener('click', function () {
    imgBefore.style.display = 'block';
    imgBeforeWrapper.style.overflow = 'visible';
    imgAfter.style.display = 'none';
    range.value = 0;

    [].forEach.call(switches, function (item) {
      if (item.classList.contains('slider__switch--active')) {
        item.classList.remove('slider__switch--active');
        switchBefore.classList.add('slider__switch--active');
      }
    });
  });

  switchAfter.addEventListener('click', function () {
    imgAfter.style.display = 'block';
    imgBefore.style.display = 'none';
    range.value = 2;

    [].forEach.call(switches, function (item) {
      if (item.classList.contains('slider__switch--active')) {
        item.classList.remove('slider__switch--active');
        switchAfter.classList.add('slider__switch--active');
      }
    });
  });

  //slider(desktop)
  var moveRange = function() {
    var rangeValue = range.value;

    if (rangeValue == 0) {
      imgBefore.style.display = 'block';
      imgBeforeWrapper.style.overflow = 'visible';
      imgAfter.style.display = 'none';
    }
    if (rangeValue == 1) {
      imgAfter.style.display = 'block';
      imgBeforeWrapper.style.overflow = 'hidden';
      imgBefore.style.display = 'block';
    }
    if (rangeValue == 2) {
      imgAfter.style.display = 'block';
      imgBefore.style.display = 'none';
    }
  };

  range.addEventListener('mouseup', function () {
    moveRange();
  });

  range.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      moveRange();
    }
  });
})();