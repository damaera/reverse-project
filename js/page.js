var bgWrapper = $('.indexPage .bg-wrapper img');
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
var randomOpacity = (el)=>{
  var randomNumber = getRandomFloat(0.1, .50);
  // var randomNumber = getRandomFloat(.35, .50);
  TweenLite.to(el, .1, {css:{opacity: randomNumber}, ease:Power2.easeInOut});

}

var liCharaPage = $('.characterPage ul.group li');

var jumpEl = function(el){
 el.addClass('asd');
}

liCharaPage.on('mouseover', function(e){
  TweenLite.to(liCharaPage, .2, {css:{opacity: .4}, ease:Power2.easeInOut});
  TweenLite.to($(this), .4, {css:{opacity: 1}, ease:Power2.easeInOut});

});

liCharaPage.on('mouseleave', function(e){
  TweenLite.to(liCharaPage, .2, {css:{opacity: 1}, ease:Power2.easeInOut});
});

liCharaPage.on('click', function(){
  jumpEl($(this).find('img'));
  TweenLite.to(liCharaPage, .2, {css:{opacity: .4}, ease:Power2.easeInOut});
  TweenLite.to($(this), .4, {css:{opacity: 1}, ease:Power2.easeInOut});


})

$(document).ready(function(){
  if($('.bg-wrapper')){
    $('.indexPage .bg-wrapper').parallax();
    $('.characterPage .bg-wrapper').parallax();    
  }

  new TypeIt('#indexType', {
    strings: ["Have we been here? Have we met before? I don’t know",
    "Right now maybe our future self watching over us through memories",
    "Am i alive ? Are we all alive ? Are we real ? We don’t know",
    "Right now maybe our another self watching over us through reality..."],
    speed: 50,
    autoStart: false
  });

  setInterval(()=>{
    randomOpacity(bgWrapper);
  }, 120);

  var headline = document.getElementById('groupTitle');
  var text = document.getElementById('groupDesc');
  var titleText = new WordShuffler(headline,{
    timeOffset : 10,
    mixCapital : true,
    mixSpecialCharacters : true,
    needUpdate: true
  });
  var descText = new WordShuffler(text,{
    timeOffset : 1,
    mixCapital : true,
    mixSpecialCharacters : true,
    needUpdate: true
  });
})
