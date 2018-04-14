const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var main = document.body;

function init() {
	document.addEventListener('keydown', function (e) {
		for (let i = 0, l = code.length; i < l; i++) {
			if (parseInt(e.keyCode) || parseInt(e.detail) === parseInt(code[i])) {
				code.shift();
				if (i === code.length) {
					window.alert("KONAMI CODE CRACKED init");
					codeCheck();
				}
			}
		}
	});
}

function codeCheck() {
	if (code.length === 0) {
		alert("KONAMI CODE CRACKED codeCheck");
	}
}


// function init() {
// 	let index = 0;

// 	document.body.addEventListener('keydown', function (e) {
// 		const key = parseInt(e.which || e.detail);
// 		console.log(key);

// 		if (code[index] === key) {
// 			index++;

// 			if (index === code.length) {
// 				alert('Hurray!');

// 				index = 0;
// 			}
// 		} else {
// 			index = 0;
// 		}
// 	});
// }

init();