const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  var index = 0

function init() {
  // your code here

  document.body.addEventListener("keydown", eventListener)
}

function eventListener(e) {
  key = parseInt(e.which || e.detail)

  if(key === code[index] && index === code.length - 1) {
    index = 0
    alert("Kasume code !!!")
  } else if(key === code[index]) {
    index++
  } else {
    index = 0
  }
}
