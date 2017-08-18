const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var counter = 0


  document.body.addEventListener('keydown', function(e) {
    if (parseInt(e.which) === code[counter] || parseInt(e.detail) === code[counter] || parseInt(e.location) === code[counter]) {
      if(counter === code.length -1) {
        alert("Well done")
        counter = 0
      }
      counter++
    } else {
      counter = 0
    }
  })
}
