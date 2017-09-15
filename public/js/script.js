var obj = icaro({
  isLoading: false
})

function init() {
  // setTimeout(function(){
    document.querySelector('.content-opacity').style.opacity = 1
    canvasAnimation()
  // }, 1000)
}

init()

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