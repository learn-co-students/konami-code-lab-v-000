const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
              // U U D D L R L R B A

var index = 0

function init() {
  // your code here
  body = document.body
  body.addEventListener('keydown', function(e) {
    onKeyDownHandler(e)
  })

}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
 
  if (key === code[index]) {
    index++
 
    if (index === code.length) {
      alert("YOU DID IT!")
      index = 0
    }
  } else {
    index = 0
  }
}

