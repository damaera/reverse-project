'use strict';

var charThumb = $('ul.characterThumb li a');
var groupCharImg = $('.groupChar img');
var characterThumb = {
  active: function active(e) {
    var dataImg = e.attr('data-img');
    if (dataImg) {
      var target = $(".groupChar img#" + dataImg + "");
      $(".groupChar div[contain='" + dataImg + "']").addClass('on');
      TweenLite.to(groupCharImg, .225, { css: { opacity: .15, filter: "grayscale(1)" }, ease: Power2.easeInOut });
      TweenLite.to(target, .225, { css: { opacity: 1, filter: "grayscale(0)" }, ease: Power2.easeInOut });
    }
  },
  normalize: function normalize() {
    $(".groupChar div[contain]").removeClass('on');
    TweenLite.to(groupCharImg, .225, { css: { opacity: 1, filter: "grayscale(0)" }, ease: Power2.easeInOut });
  }
};

charThumb.on('mouseover', function () {
  characterThumb.active($(this));
});

charThumb.on('mouseleave', function () {
  characterThumb.normalize();
});
'use strict';

var h = document.querySelector('h1');
var arr = {
  ssr: ['100k', '80k'],
  sr: ['10k', '5k', '2k', 'gelas'],
  r: ['teh', 'permen', 'indomie', 'kopi', 'stiker']
};

var gacha = function gacha() {
  var rand = Math.random() * 100;
  var arRand = function arRand(max) {
    var a = Math.round(Math.random() * max);
    return a;
  };

  if (rand <= 1) {
    var x = arRand(arr.ssr.length - 1);
    var result = arr.ssr[x];
    h.innerHTML = result;
    document.querySelector('h2').innerHTML = "SSR";
    document.querySelector('h2').setAttribute('type', 'SSR');
  } else if (rand > 1 && rand <= 10) {
    var x = arRand(arr.sr.length - 1);
    var result = arr.sr[x];
    h.innerHTML = result;
    document.querySelector('h2').innerHTML = "SR";
    document.querySelector('h2').setAttribute('type', 'SR');
  } else if (rand > 10 && rand <= 100) {
    var x = arRand(arr.r.length - 1);
    var result = arr.r[x];
    h.innerHTML = result;
    document.querySelector('h2').innerHTML = "R";
    document.querySelector('h2').setAttribute('type', 'R');
  }
};
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
  if ($('.bg-wrapper')) {
    $('.indexPage .bg-wrapper').parallax();
    $('.characterPage .bg-wrapper').parallax();
  }

  new TypeIt('#indexType', {
    strings: ["Have we been here? Have we met before? I don’t know", "Right now maybe our future self watching over us through memories", "Am i alive ? Are we all alive ? Are we real ? We don’t know", "Right now maybe our another self watching over us through reality..."],
    speed: 50,
    autoStart: false
  });

  setInterval(function () {
    randomOpacity(bgWrapper);
  }, 120);

  var headline = document.getElementById('groupTitle');
  var text = document.getElementById('groupDesc');
  var titleText = new WordShuffler(headline, {
    timeOffset: 10,
    mixCapital: true,
    mixSpecialCharacters: true,
    needUpdate: true
  });
  var descText = new WordShuffler(text, {
    timeOffset: 1,
    mixCapital: true,
    mixSpecialCharacters: true,
    needUpdate: true
  });
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