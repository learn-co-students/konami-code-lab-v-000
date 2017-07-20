const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//up up, down down, left, right, left, right, b, a
function init() {

  let index = 0;


  document.addEventListener('keydown', function(e) {

    e.preventDefault()
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }

  })

}
init()
