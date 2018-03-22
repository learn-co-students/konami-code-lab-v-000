const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0, lastKey;
  function konamiCode(e)
  {
    lastKey = parseInt(e.detail || e.which);
    if (lastKey == code[index])
    {
      index++;
      if (index === code.length)
      {
        window.alert("You get 30 Lives!");
        index = 0;
      }
    }
    else
    {
      index = 0;
    }
  }
  document.body.addEventListener("keydown", konamiCode);
}

init();
