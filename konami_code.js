const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail)

    while (key === code[index]) {
      index++;

      if (index == 10) {
        alert('Congrats!!!!')
        index = 0
      }
    }
  })
}
