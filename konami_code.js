const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
    var index = 0

    document.body.addEventListener('keydown', function(e) {

        const key = parseInt(e.which || e.detail) //turns strings into integers

        if (key === code[index]) {
            index++ //checks to see if key reaches a point in code array at specific index and increments by 1

            if (index === code.length - 1) {
                alert("Congrats!") //if pattern of array is reached to the end of array, send an alert then restart the array
                index = 0
            }
        } else {
            index = 0
        }
    })
}
