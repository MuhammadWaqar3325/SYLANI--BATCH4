function getHistory() {
	return document.getElementById("history-val").innerText;
}
function printHistory(num) {
	document.getElementById("history-val").innerText = num;
}
function getOutput() {
	return document.getElementById("output-val").innerText;
}
function printOutput(num) {
	if (num == "") {
		document.getElementById("output-val").innerText = num;
	}
	else {
		document.getElementById("output-val").innerText = getFormattedNumber(num);
	}
}
function getFormattedNumber(num) {
	if (num == "-") {
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num) {
	return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		if (this.id == "clear") {
			printHistory("");
			printOutput("");
		}
		
		else {
			var output = getOutput();
			var history = getHistory();
			if (output == "" && history != "") {
				if (isNaN(history[history.length - 1])) {
					history = history.substr(0, history.length - 1);
				}
			}
			if (output != "" || history != "") {
				output = output == "" ? output : reverseNumberFormat(output);
				history = history + output;
				if (this.id == "=") {
					var result = eval(history);
					printOutput(result);
					printHistory("");
				}
				else {
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}
