const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const bod = document.body
var clickArray = []

function init() {
  bod.addEventListener('keydown', function(e){
    clickArray.push(e.which)
    if (arraysEqual(code.slice(-10), clickArray.slice(-10))) {
      window.alert('You entered the Konami Code!')
      console.log('You entered the Konami Code!')
    }
  })
}

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false
    }
  }
  return true
}
