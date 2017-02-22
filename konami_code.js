const konami_code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init(e) {
  const body = document.body
  var index = 0;
  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.location)
    debugger
    if (key === konami_code[index]) {
        index++
        if (index === konami_code.length - 1) {
            alert("Congratulations!!")
            index = 0
        }
    }
  })
}
