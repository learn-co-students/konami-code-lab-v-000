const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

const body = document.querySelector('body');

function init() {
  let lastTyped = [];

  function sameAsCode(array) {
    return array[0] === code[0] && array[0] === code[0] && array[1] === code[1] && array[2] === code[2] && array[3] === code[3] && array[4] === code[4] && array[5] === code[5] && array[6] === code[6] && array[7] === code[7] && array[8] === code[8] && array[9] === code[9]
  }

  body.addEventListener('keydown', function(e) {
    lastTyped.push(e.which || e.detail)
    if (lastTyped.length > 10) {
      lastTyped.shift()
    }
    if (sameAsCode(lastTyped)) {
      alert('You typed it!')
      console.log('You typed it!')
    }
  })
}

init()
