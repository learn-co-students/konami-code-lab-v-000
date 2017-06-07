const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0
  document.addEventListener('keydown', function(e) {
    if (parseInt(e.detail || e.which) === code[index]){
      index++

      if (index === code.length - 1){
        alert('congrat!')
        index = 0
      }
    } else {
      index = 0
    }
  })
}

init()
