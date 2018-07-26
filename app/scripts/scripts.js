'use strict';

var bgWrapper = $('.indexPage .bg-wrapper img');
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
var randomOpacity = function randomOpacity(el) {
  var randomNumber = getRandomFloat(0.1, .50);
  // var randomNumber = getRandomFloat(.35, .50);
  TweenLite.to(el, .1, { css: { opacity: randomNumber }, ease: Power2.easeInOut });
};

var liCharaPage = $('.characterPage ul.group li');

var jumpEl = function jumpEl(el) {
  el.addClass('asd');
};

liCharaPage.on('mouseover', function (e) {
  TweenLite.to(liCharaPage, .2, { css: { opacity: .4 }, ease: Power2.easeInOut });
  TweenLite.to($(this), .4, { css: { opacity: 1 }, ease: Power2.easeInOut });
});

liCharaPage.on('mouseleave', function (e) {
  TweenLite.to(liCharaPage, .2, { css: { opacity: 1 }, ease: Power2.easeInOut });
});

liCharaPage.on('click', function () {
  jumpEl($(this).find('img'));
  TweenLite.to(liCharaPage, .2, { css: { opacity: .4 }, ease: Power2.easeInOut });
  TweenLite.to($(this), .4, { css: { opacity: 1 }, ease: Power2.easeInOut });
});

$(document).ready(function () {
  $('.indexPage .bg-wrapper').parallax();
  $('.characterPage .bg-wrapper').parallax();

  new TypeIt('#indexType', {
    strings: ["Have we been here? Have we met before? I don’t know", "Right now maybe our future self watching over us through memories", "Am i alive ? Are we all alive ? Are we real ? We don’t know", "Right now maybe our another self watching over us through reality..."],
    speed: 50,
    autoStart: false
  });

  setInterval(function () {
    randomOpacity(bgWrapper);
  }, 120);
});
'use strict';

var t = document.querySelector('.toggleButton button#toggleNav');
var n = document.getElementById('sideNavigation');

t.addEventListener('click', function (e) {

  if (t.getAttribute("data-toggle") == 0) {
    t.setAttribute('data-toggle', '1');

    TweenLite.to(n, .275, { css: { transform: "translateX(265px)" }, ease: Power2.easeInOut });
  } else {
    t.setAttribute('data-toggle', '0');
    TweenLite.to(n, .275, { css: { transform: "translateX(0px)" }, ease: Power2.easeInOut });
  }
});