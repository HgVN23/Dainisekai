function addSlider(id) {
	const format = `
		<div class="slider">
			<div class="left"></div>
			<div class="selectBox">
				<div class="optionBox optionBoxHide">${option}</div>
				<div class="select" onclick="toggleBox()">Chapter ${volume[id].chapter}</div>
			</div>
			<div class="right"></div>
		</div>
	`;
	document.querySelector('body').innerHTML += format;

	const options = document.querySelectorAll('.option');
	options[id].classList.add('optionSelected');
	for(var i = 0; i < options.length; i++) {
		options[i].addEventListener('click', jump);
	}

	document.querySelector('.left').addEventListener('click', left);
	document.querySelector('.right').addEventListener('click', right);

	const check = parseFloat(document.querySelector('.optionSelected').id);
	if(check == (options.length - 1))
		document.querySelector('.left').classList.add('turnOff');
	if(check == 0)
		document.querySelector('.right').classList.add('turnOff');
}

function jump() {
	document.querySelector('.story').remove();
	document.querySelector('.slider').remove();
	addStory(this.id);
	addSlider(this.id);

	document.documentElement.scrollTop = 0;
}

function toggleBox() {
	document.querySelector('.optionBox').classList.toggle('optionBoxHide');
	document.querySelector('.optionSelected').scrollIntoView();
}

function left() {
	const options = document.querySelectorAll('.option');
	const check = parseFloat(document.querySelector('.optionSelected').id);
	if(check < (options.length - 1)) {
		document.querySelector('.story').remove();
		document.querySelector('.slider').remove();
		addStory(check + 1);
		addSlider(check + 1);

		document.documentElement.scrollTop = 0;
	}
}

function right() {
	const check = parseFloat(document.querySelector('.optionSelected').id);
	if(check > 0) {
		document.querySelector('.story').remove();
		document.querySelector('.slider').remove();
		addStory(check - 1);
		addSlider(check - 1);

		document.documentElement.scrollTop = 0;
	}
}