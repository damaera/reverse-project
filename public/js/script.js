var obj = icaro({
  isLoading: false
})

obj.listen(function(changes) {
  var isLoading = changes.get('isLoading')
  var $tilt = document.querySelector('.tilt')
  if (isLoading) {
    $tilt.vanillaTilt.destroy()
  } else {
    VanillaTilt.init($tilt);
  }
})

pageAccelerator({
  beforeLoading: function(e) {
    obj.isLoading = true
  },
  afterLoading: function(e) {
    obj.isLoading = false
  }
})