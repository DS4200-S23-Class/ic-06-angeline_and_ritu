// JS file for ic-06

// event handler for click
function submitClicked() {
	let line = document.getElementById("x-axis");
	line.classList.add("red");

}


document.getElementById("colorButton")
		.addEventListener('click', submitClicked);