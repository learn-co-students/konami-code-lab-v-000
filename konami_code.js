const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++
      console.log(`Okay, okay. Index equals ${index}`)

      if (index === code.length) {
        alert('Bravo!')
        index = 0
      }
    } else {
      index = 0
      console.log(`Oops. Index equals ${index}`)
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler)
}
