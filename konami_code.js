const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var konamiDetector = [];

  function attachEvent(el, ev, func) {
    el.addEventListener(ev,func);
  }

  function isKonamiKey(e) {
    e.preventDefault();
    var key = parseInt(e.detail || e.which)

    var codePasses = true;

    konamiDetector.push(key);

    //if code not passing at any point while entering code the array will reset so that you can begin again
    if(konamiDetector.length < code.length) {
      for(var i = 0; i < konamiDetector.length; i++) {
        if(konamiDetector[i] !== code[i]) {
          codePasses = false;
        }
      }

      if (!codePasses) {
        konamiDetector = [];
        konamiDetector.push(key);
      }
    //if konami code is
    } else if(konamiDetector.length === code.length) {
        for(var j = 0; j < konamiDetector.length; j++) {
          if(konamiDetector[j] !== code[j]) {
          codePasses = false;
          }
        }
      konamiDetector = [];
      konamiIsDetected()
    }
  }
  attachEvent(document.body,"keydown",isKonamiKey);

  function konamiIsDetected() {
    alert("Awesome!!")
  }
}
