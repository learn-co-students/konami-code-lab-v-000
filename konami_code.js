const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init()
{
  var i=0;
  var code_progressed=0;

  document.body.addEventListener('keydown',function(e)
 {
    var val= parseInt(e.which || e.detail);

    if (code[i]===val)
    {
        code_progressed++;
        i+=1;
        console.log(i);
        console.log(code_progressed)
    if(code_progressed===10)
    {
        alert("Hurray!");
        i=0;
        code_progressed=0
    }
  }else
  {
     i=0;
     code_progressed=0;
  }



  // Write your JavaScript code inside the init() function


} )
}

// function init()
// {
//   document.body.addEventListener('keydown', konami)
//
// }
