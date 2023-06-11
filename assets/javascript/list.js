let option = ``;
let tempMark = [];
if(localStorage.mark)
	tempMark = JSON.parse(localStorage.getItem('mark'));
addList();

function addList() {
	let chapters = ``;
	for(var i = 0; i < volume.length; i++) {
		var temp = volume[i];
		var chapter = temp.chapter;
		var title = temp.title;
		chapters += `
			<div class="chapter">
				<div id="${chapter}" class="mark"></div>
				<p id="${i}">Chapter ${chapter} - ${title}</p>
			</div>\n
		`;
		option += `
			<div id="${i}" class="option">Chapter ${chapter}</div>
		`;
	}
	document.querySelector('.list').innerHTML += chapters;

	const addOpen = document.querySelectorAll('.chapter p');
	for(var i = 0; i < addOpen.length; i++) {
		addOpen[i].addEventListener('click', openChapter);
	}

	setMark();
}

function openChapter() {
	reChapter(this.id)
}

function setMark() {
	const checkMark = document.querySelectorAll('.mark');
	for(var i = 0; i < checkMark.length; i++) {
		if(tempMark.includes(checkMark[i].id)) {
			checkMark[i].addEventListener('click', markUnread);
			checkMark[i].classList.add('read');
		} else {
			checkMark[i].addEventListener('click', markRead);
			checkMark[i].classList.add('unread');
			checkMark[i].parentElement.classList.add('markUnread');
		}
	}
}

function markUnread() {
	for(var i = 0; i < tempMark.length; i++){
		if(tempMark[i] === this.id) {
			let temp = tempMark[i];
			tempMark[i] = tempMark[0];
			tempMark[0] = temp;
			tempMark.shift();
			break;
		}
	}
	localStorage.setItem('mark', JSON.stringify(tempMark));
	this.addEventListener('click', markRead);
	this.removeEventListener('click', markUnread);
	this.classList.toggle('read');
	this.classList.toggle('unread');
	this.parentElement.classList.toggle('markUnread');
}
function markRead() {
	if(!tempMark.includes(this.id)) {
		tempMark.push(this.id);
		localStorage.setItem('mark', JSON.stringify(tempMark));
		this.addEventListener('click', markUnread);
		this.removeEventListener('click', markRead);
		this.classList.toggle('read');
		this.classList.toggle('unread');
		this.parentElement.classList.toggle('markUnread');
	}
}
function pushMark(id) {
	if(!tempMark.includes(id)) {
		tempMark.push(id);
		localStorage.setItem('mark', JSON.stringify(tempMark));
	}
}