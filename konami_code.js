const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

const body = document.querySelector('body')

function init() {
  var index = 0

  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++
      if (index === code.length - 1) {
        alert("AW YEAH YOU DID IT UH HUHHHHH WOOOO YEAHHH BOI!!!!")
        index = 0
      }
    } else {
      index = 0
    }
  })
}
