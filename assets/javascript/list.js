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
	markAll();
}

function openChapter() {
	reChapter(this.id);
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
	markAll();
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
	markAll();
}
function pushMark(id) {
	if(!tempMark.includes(id)) {
		tempMark.push(id);
		localStorage.setItem('mark', JSON.stringify(tempMark));
	}
}

function markAll() {
	const getMark = document.querySelector('.markAll');
	getMark.addEventListener('click', unreadAll);
	getMark.innerHTML = 'Đánh dấu tất cả chưa đọc';
	for(var i = 0; i < volume.length; i++){
		if(!tempMark.includes(String(volume[i].chapter))) {
			getMark.addEventListener('click', readAll);
			getMark.removeEventListener('click', unreadAll);
			getMark.innerHTML = 'Đánh dấu tất cả đã đọc';
			break;
		}
	}
}
function unreadAll() {
	const temp = document.querySelectorAll('.read');
	localStorage.removeItem('mark');
	tempMark = [];
	for (var i = 0; i < temp.length; i++) {
		temp[i].addEventListener('click', markRead);
		temp[i].removeEventListener('click', markUnread);
		temp[i].classList.toggle('read');
		temp[i].classList.toggle('unread');
		temp[i].parentElement.classList.toggle('markUnread');
	}

	const getMark = document.querySelector('.markAll');
	getMark.addEventListener('click', readAll);
	getMark.removeEventListener('click', unreadAll);
	getMark.innerHTML = 'Đánh dấu tất cả đã đọc';
}
function readAll() {
	const temp = document.querySelectorAll('.unread');
	for (var i = 0; i < temp.length; i++) {
		tempMark.push(temp[i].id);
		temp[i].addEventListener('click', markUnread);
		temp[i].removeEventListener('click', markRead);
		temp[i].classList.toggle('read');
		temp[i].classList.toggle('unread');
		temp[i].parentElement.classList.toggle('markUnread');
	}
	localStorage.setItem('mark', JSON.stringify(tempMark));

	const getMark = document.querySelector('.markAll');
	getMark.addEventListener('click', unreadAll);
	getMark.removeEventListener('click', readAll);
	getMark.innerHTML = 'Đánh dấu tất cả chưa đọc';
}