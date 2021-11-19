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
