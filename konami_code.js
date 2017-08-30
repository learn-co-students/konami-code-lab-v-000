const code = [1, 38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  
  document.body.addEventListener('keydown',function(e) {
    // console.log(e.which || e.detail)
    const curr_key = parseInt(e.which || e.detail );
    // debugger
    if (curr_key === code[code[0]] && code[0] === 10) {
      //reset the placeholder
      code[0] = 1;
      alert('hip hop horray');
    }
    else if (curr_key === code[code[0]]) {
      code[0] += 1;
    }
    else if (curr_key != code[code[0]]) {
      code[0] = 1;   
    }
  });
}


// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// function init() {
//   let index = 0;

//   document.body.addEventListener('keydown', function(e) {
//     const key = parseInt(e.which || e.detail);

//     if (code[index] === key) {
//       index++;

//       if (index === code.length) {
//         alert('Hurray!');

//         index = 0;
//       }
//     } else {
//       index = 0;
//     }
//   });
// }