const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function init() {
  const body = document.querySelectorAll('body');

  body.addEventListener('keydown', triggerKeys(e) {
  })
}
//
// function triggerKeys(e) {
//   const key = parseInt(e.detail || e.which)
//
//   if (key === code[index]) {
//     index++;
//
//     if (index === code.length) {
//       alert("YAY!");
//     }
//   } else {
//     index = 0
//   }
// }
