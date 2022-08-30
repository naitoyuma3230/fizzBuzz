let count = document.getElementById("count");
let resultText = document.getElementById("resultText");
let btn = document.getElementById("btn");
let resultArea = document.getElementById("result-area");

let currentCount = 0;
count.innerText = currentCount;

let countUp = function () {
	currentCount++;
	let result = fizzBuzz();
	count.innerText = currentCount;
	resultText.innerText = typeof result == "string" ? result : "";
	createResult(result);
};

let fizzBuzz = function () {
	if (currentCount % 3 == 0 && currentCount % 5 == 0) {
		return "FizzBuzz";
	} else if (currentCount % 3 == 0) {
		return "Fizz";
	} else if (currentCount % 5 == 0) {
		return "Buzz";
	} else {
		return currentCount;
	}
};

let createResult = function (resultText) {
	let span = document.createElement("span");
	span.className = "result";
	span.innerText = resultText;
	resultArea.appendChild(span);
};

btn.onclick = countUp;
