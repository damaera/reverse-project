var t = document.querySelector('.toggleButton button#toggleNav');
var n = document.getElementById('sideNavigation');

t.addEventListener('click', (e)=>{ 

  if(t.getAttribute("data-toggle") == 0){
    t.setAttribute('data-toggle', '1');

    TweenLite.to(n, .275, {css:{transform:"translateX(265px)"}, ease:Power2.easeInOut});
  } else {
    t.setAttribute('data-toggle', '0');
    TweenLite.to(n, .275, {css:{transform:"translateX(0px)"}, ease:Power2.easeInOut});
  }
})
