const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0 
 
  document.body.addEventListener('keydown', function(e) { //entry passed in to key constant
    const key = parseInt(e.which || e.detail) // parses the details into integer and sets to key const

    while (code[index] === key) { //checks var index in code array against key const
        index++ //increments var index 
    }
      
    if (index > 9) { 
        alert('Congrats! You solved the cheat code!')

        index = 0
    }
  })
}
