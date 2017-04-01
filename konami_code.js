const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var j = 0;

  document.body.addEventListener('keydown', e => {
    parseInt(e.detail || e.which) === code[j] ? j++ : j = 0;

    if (j > 9) {
      alert("Congrats");
      j = 0;
    }
  });
}
