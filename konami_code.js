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
var i = 0

  document.body.addEventListener('keydown', function (e) {
    const key = parseInt(e.which||e.detail)
    

    if(key === code[i]){
      i++
      if(i === code.length - 1){
        alert("You did it!")
        i = 0
      }
      } else {
        i = 0
      }
  })
}
