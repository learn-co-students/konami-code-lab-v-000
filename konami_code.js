const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const keys = []

const body = document.querySelectorAll('body')

body.addEventListener('keydown', function(e) {
    // keys.push(e.key)
    // for (let i = 0; i < code.length; i++)
    //   if (keys[i] !== code[i]) {
    //     return "Sorry, try again"
    //   }
    i = 0
    while (i < code.length) {
    if e.key === code[i]
    i += 1
    }
    function init()
  }
  return "Sorry - Try again."
}

function init() {
  alert('Success! - You have broken the Konami Code!')
}
