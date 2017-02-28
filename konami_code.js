const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;

  document.body.addEventListener('keydown', (event) => {
    let key = parseInt(event.which || event.detail);

    if (code[index] === key) {
      index++;
      if (index == code.length - 1) {
        alert('You did it! Now you have unlimitted access!');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
