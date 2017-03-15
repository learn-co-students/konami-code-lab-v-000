const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// [up arrow, up arrow, down arrow, down arrow, left arrow, right arrow, left arrow, right arrow, B, A]

function init() {
  var index = 0

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        alert('Bravo!')
        index = 0
      }
    } else {
      index = 0
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler)
}
