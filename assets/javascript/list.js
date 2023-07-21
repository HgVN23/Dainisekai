const url = location.origin + location.pathname;
const urlChapter = url + '?chapter=';
const urlDex = url + '?dex=';

let tempMark = [];
if(localStorage.getItem(`${mark}`))
	tempMark = JSON.parse(localStorage.getItem(`${mark}`));

if(location.search) {
	const urlParams = new URLSearchParams(location.search);
	if(urlParams.has('chapter'))
		loadChapter(urlParams.get('chapter'));
	if(urlParams.has('dex') && parseFloat(urlParams.get('dex')) == 0)
		loadDex(urlParams.get('dex'));
	if(urlParams.has('dex') && parseFloat(urlParams.get('dex')) != 0)
		loadDexContent(urlParams.get('dex'));
} else
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
				<p id="${i}" class="clickable">Chapter ${chapter} - ${title}</p>
			</div>
		`;
	}
	document.querySelector('.main').innerHTML += chapters;

	const addOpen = document.querySelectorAll('.chapter p');
	for(var i = 0; i < addOpen.length; i++) {
		addOpen[i].addEventListener('click', openChapter);
	}

	setMark();
	markAll();
}

function clean() {
	document.querySelector('.main').remove();
	document.documentElement.scrollTop = 0;
}

function openChapter() {
	window.open(`${urlChapter}${volume[this.id].chapter}`, '_self');
}
function loadChapter(id) {
	let Id = changeId(id);
	clean();
	addStory(Id);
	addSlider(Id);
	pushMark(String(volume[Id].chapter));
	checkHide();
	document.querySelector('title').textContent = `Chapter ${volume[Id].chapter} - ${volume[Id].title} | ${name}`;
}
function changeId(id) {
	let Id;
	for(var i = 0; i < volume.length; i++) {
		if(volume[i].chapter == parseFloat(id)) {
			Id = i;
			break;
		}
	}
	return Id;
}

function openMain() {
	window.open(url, '_self');
}

function openIndex() {
	window.open('index.html', '_self');
}

function readFirst() {
	window.open(`${urlChapter}${volume[volume.length - 1].chapter}`, '_self');
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
	localStorage.setItem(`${mark}`, JSON.stringify(tempMark));
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
		localStorage.setItem(`${mark}`, JSON.stringify(tempMark));
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
		localStorage.setItem(`${mark}`, JSON.stringify(tempMark));
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
	localStorage.removeItem(`${mark}`);
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
	localStorage.setItem(`${mark}`, JSON.stringify(tempMark));

	const getMark = document.querySelector('.markAll');
	getMark.addEventListener('click', unreadAll);
	getMark.removeEventListener('click', readAll);
	getMark.innerHTML = 'Đánh dấu tất cả chưa đọc';
}