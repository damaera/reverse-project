var charThumb = $('ul.characterThumb li a');
var groupCharImg = $('.groupChar img');
var characterThumb = {
  active: function(e){
    var dataImg = e.attr('data-img');
    if(dataImg){
      var target = $(".groupChar img#"+dataImg+"");
      $(".groupChar div[contain='"+dataImg+"']").addClass('on');
      TweenLite.to(groupCharImg, .225, {css:{opacity: .15, filter: "grayscale(1)"}, ease:Power2.easeInOut});
      TweenLite.to(target, .225, {css:{opacity: 1, filter: "grayscale(0)"}, ease:Power2.easeInOut});
    }
  },
  normalize: function(){
    $(".groupChar div[contain]").removeClass('on');
    TweenLite.to(groupCharImg, .225, {css:{opacity: 1, filter: "grayscale(0)"}, ease:Power2.easeInOut});

  }
}

charThumb.on('mouseover', function(){
  characterThumb.active($(this));
});

charThumb.on('mouseleave', function(){
  characterThumb.normalize();
});
