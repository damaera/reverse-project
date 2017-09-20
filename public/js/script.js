var obj = icaro({
  isLoading: false
})

function init() {
  document.querySelector('.content-opacity').style.opacity = 1
  canvasAnimation()
  canvasAnimation()

  var $imgDesolate = document.querySelector('img.desolate')
  window.onscroll = function(e) {
    $imgDesolate.style.top = window.scrollY / 1.5 + 'px'
    //- console.log(window.scrollY / 10)
  }
}


var doit;
doit = setTimeout(init, 100);
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(init, 100);
};

// doit()

obj.listen(function(changes) {
  var isLoading = changes.get('isLoading')
  var $tilt = document.querySelector('.tilt')
  if (isLoading) {
    if ($tilt) {
      $tilt.vanillaTilt.destroy()
    }
  } else {
    VanillaTilt.init($tilt);
    init()
  }
})


pageAccelerator({
  beforeLoading: function(e) {
    document.querySelector('.content-opacity').style.opacity = 0
    obj.isLoading = true
  },
  afterLoading: function(e) {
    obj.isLoading = false
  }
})