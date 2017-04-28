const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let sequence = code;

  document.addEventListener('keydown', checkKey);

  function checkKey(e) {
    const key = parseInt(e.detail || e.which, 10);

    sequence = (key === sequence[0]) ? sequence.slice(1) : code;

    if (sequence.length === 0) {
      alert("Congrats!");
      sequence = code;
    }
  }
}

init();
