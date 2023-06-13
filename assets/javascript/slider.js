function addSlider(id) {
	const format = `
		<div class="slider">
			<div class="toggleHide hideOff"></div>
			<div class="left"></div>
			<div class="selectBox">
				<div class="optionBox optionBoxHide">${option}</div>
				<div class="select" onclick="toggleBox()">Chapter ${volume[id].chapter}</div>
			</div>
			<div class="right"></div>
			<div class="none"></div>
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

	document.querySelector('.toggleHide').addEventListener('click', hideOn);
}

function jump() {
	reChapter(this.id);
}

function toggleBox() {
	document.querySelector('.optionBox').classList.toggle('optionBoxHide');
	document.querySelector('.optionSelected').scrollIntoView();
}

function left() {
	const check = parseInt(document.querySelector('.optionSelected').id);
	if(check < (volume.length - 1))
		reChapter(check + 1);
}

function right() {
	const check = parseInt(document.querySelector('.optionSelected').id);
	if(check > 0)
		reChapter(check - 1);
}

function hideOff() {
	var toggleHide = document.querySelector('.toggleHide');
	var dialogueHide = document.querySelectorAll('.dialogueHide');
	localStorage.setItem('hide', 0);
	toggleHide.addEventListener('click', hideOn);
	toggleHide.removeEventListener('click', hideOff);
	toggleHide.classList.toggle('hideOff');
	toggleHide.classList.toggle('hideOn');
	for(var i = 0; i < dialogueHide.length; i++) {
		dialogueHide[i].remove();
	}
}
function hideOn() {
	var toggleHide = document.querySelector('.toggleHide');
	var dialogue = document.querySelectorAll('.dialogue');
	localStorage.removeItem('hide');
	toggleHide.addEventListener('click', hideOff);
	toggleHide.removeEventListener('click', hideOn);
	toggleHide.classList.toggle('hideOn');
	toggleHide.classList.toggle('hideOff');
	for(var i = 0; i < dialogue.length; i++) {
		dialogue[i].innerHTML += `<div class="dialogueHide" onclick="removeHide()">Click để mở</div>\n`;
	}
}
function checkHide() {
	if(localStorage.hide == 0) {
		hideOff();
	}
}
function reChapter(id) {
	if(document.querySelector('.list'))
		document.querySelector('.list').remove();
	if(document.querySelector('.story')) {
		document.querySelector('.story').remove();
		document.querySelector('.slider').remove();
	};
	if(document.querySelector('.content'))
		document.querySelector('.content').remove();
	addStory(id);
	addSlider(id);
	pushMark(String(volume[id].chapter));
	checkHide();
	document.documentElement.scrollTop = 0;
}