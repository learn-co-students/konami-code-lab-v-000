const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var index = 0
document.body.addEventListener('keydown', function(e) {
const key = parseInt(e.which || e.detail)

    if (key === code[index]) {
      index++

    if (index === code.length - 1) {
      alert("GOOD FOR YOU!")
      index = 0
    }
  } else {
    index = 0
}
  })
}
