function addSlider(id) {
	let option = ``;
	for(var i = 0; i < volume.length; i++) {
		option += `<div id="${i}" class="option">Chapter ${volume[i].chapter}</div>`;
	}

	var format = ``;
	if(formatStyle == 'dialogue')
		format = `
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
	else
		format = `
			<div class="slider">
				<div class="left"></div>
				<div class="selectBox">
					<div class="optionBox optionBoxHide">${option}</div>
					<div class="select" onclick="toggleBox()">Chapter ${volume[id].chapter}</div>
				</div>
				<div class="right"></div>
			</div>
		`;
	document.querySelector('.main').innerHTML += format;

	const options = document.querySelectorAll('.option');
	options[id].classList.add('optionSelected');
	for(var i = 0; i < options.length; i++) {
		options[i].addEventListener('click', openChapter);
	}

	document.querySelector('.left').addEventListener('click', left);
	document.querySelector('.right').addEventListener('click', right);

	const check = parseFloat(document.querySelector('.optionSelected').id);
	if(check == (options.length - 1))
		document.querySelector('.left').classList.add('turnOff');
	if(check == 0)
		document.querySelector('.right').classList.add('turnOff');
	if(formatStyle == 'dialogue')
		document.querySelector('.toggleHide').addEventListener('click', hideOn);
}

function toggleBox() {
	document.querySelector('.optionBox').classList.toggle('optionBoxHide');
	document.querySelector('.optionSelected').scrollIntoView();
}

function left() {
	const check = parseInt(document.querySelector('.optionSelected').id);
	if(check < (volume.length - 1))
		window.open(`${urlChapter}${volume[check + 1].chapter}`, '_self');
}

function right() {
	const check = parseInt(document.querySelector('.optionSelected').id);
	if(check > 0)
		window.open(`${urlChapter}${volume[check - 1].chapter}`, '_self');
}

function hideOff() {
	var toggleHide = document.querySelector('.toggleHide');
	var dialogueHide = document.querySelectorAll('.dialogueHide');
	localStorage.removeItem('hide');
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
	localStorage.setItem('hide', 0);
	toggleHide.addEventListener('click', hideOff);
	toggleHide.removeEventListener('click', hideOn);
	toggleHide.classList.toggle('hideOn');
	toggleHide.classList.toggle('hideOff');
	for(var i = 0; i < dialogue.length; i++) {
		// dialogue[i].innerHTML += `<div class="dialogueHide" onclick="removeHide()">Click để mở</div>`;
		dialogue[i].innerHTML += `<div class="dialogueHide">Click để mở</div>`;
		dialogue[i].querySelector('.dialogueHide').addEventListener('click', removeHide);
	}
}
function checkHide() {
	if(localStorage.hide == 0) {
		hideOn();
	}
}