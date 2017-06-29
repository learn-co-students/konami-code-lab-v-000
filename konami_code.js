const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
     // your code here
     const input = document.querySelector('input')

     input.addEventListener('keydown', function(e) {
          console.log(e.which)
     })
}
