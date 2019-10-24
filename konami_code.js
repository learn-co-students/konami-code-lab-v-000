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

var index = 0;

function init() {
  const body = document.body;

  body.addEventListener("keydown", function(e) {

    const key = parseInt(e.detail || e.which)
    console.log(e.which)
     if (key === code[index]) {
       index++

       if (index === code.length) {
         alert("KONAMI CODE ENGAGED");
         index = 0;
       }
     } else {
       index = 0;
     }
   })
};
