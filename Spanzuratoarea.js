let hiddenLetters = [];
let counter = 6, numberOfLetters = 0;
function addText() {
	let words = document.getElementById('word').value;
	let word = words.toUpperCase();
	for (let i = 0; i < word.length; ++i) {
		if (word[i] <= "Z" && word[i] >= "A") {
			hiddenLetters[i] = "_";
			++numberOfLetters;
		} else {
			hiddenLetters[i] = "- ";
		}
	}
	document.getElementById("counter").innerHTML = counter;
	document.querySelector("#hiddenWord").innerHTML += ``+ hiddenLetters.join(" ") +``;
	return false;
}

function addCategory() {
	let category = document.getElementById('category').value;
	let categories = category.toUpperCase();
	document.querySelector("#categories").innerHTML += ``+ categories +``;
	return false;
}

function checkLetter(letter) {
	let words = document.getElementById('word').value;
	let word = words.toUpperCase();
	let letterPresence = 0;
	for (let i = 0; i < word.length; ++i) {
		if (letter === word[i] && counter > 0) {
			hiddenLetters[i] = word[i];
			++letterPresence;
			--numberOfLetters;
		}
	}
	if (letterPresence === 0 && counter > 0) {
		--counter;
	}
	if (counter === 5) {
		document.getElementsByClassName('hangman')[0].src = "hangman1.png";
	} else if (counter === 4) {
		document.getElementsByClassName('hangman')[0].src = "hangman2.png";
	} else if (counter === 3) {
		document.getElementsByClassName('hangman')[0].src = "hangman3.png";
	} else if (counter === 2) {
		document.getElementsByClassName('hangman')[0].src = "hangman4.png";
	} else if (counter === 1) {
		document.getElementsByClassName('hangman')[0].src = "hangman5.png";
	} else if (counter === 0) {
		document.getElementsByClassName('hangman')[0].src = "hangman6.png";
		document.getElementById('game').innerHTML = "GAME OVER!";
		document.getElementById('restart').removeAttribute("hidden");
	}
	if (counter > 0 && numberOfLetters === 0) {
		document.getElementById('game').innerHTML = "CONGRATULATION!";
		document.getElementById('restart').removeAttribute("hidden");
	}
	document.getElementById("hiddenWord").innerHTML = hiddenLetters.join(" ");
	document.getElementById("counter").innerHTML = counter;
	return false;
}