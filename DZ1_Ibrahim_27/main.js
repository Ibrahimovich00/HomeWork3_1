document.getElementById('urlInput').oninput = function () {
	if (this.value.includes('https://') && this.value.includes('.')) {
		this.style.borderColor = 'green'
	} else {
		this.style.borderColor = 'red'
	}
}

document.getElementById('emailInput').oninput = function () {
	if (this.value.includes('@') && this.value.includes('.')) {
		this.style.borderColor = 'green'
	} else {
		this.style.borderColor = 'red'
	}
}
