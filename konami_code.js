const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  // your code here
  var input = document.body
  input.addEventListener('keydown', onKeyDownHandler)
}


function onKeyDownHandler(e){
  var key = parseInt(e.which || e.detail)

  if(key === code[index]){
    index++

    if(index === code.length - 1){
      alert("CONGRATS!")
      index = 0
    }
  } else {
    index = 0
  }
}
init()
