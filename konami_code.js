const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var count = 0;

  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which);

    if (key === code[count]) {
      count ++

      if (count === code.length-1) {
        alert('you have reached konami master status')
        count = 0
      }
    } else {
      count = 0;
    }
  });
}
