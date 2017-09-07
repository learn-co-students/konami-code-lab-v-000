const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

const el = document.querySelector('body');

var index = 0;

function init() {
  //const el = document.querySelector('body')
  el.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail)

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert ('Hurray')
      }
    }
    else {
      index = 0
    }
  })
 

}