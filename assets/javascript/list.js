const url = location.origin + location.pathname;
const urlChapter = url + '?chapter=';
const urlDex = url + '?dex=';

var tempMark = [];
if(localStorage.getItem(`${mark}`))
	tempMark = JSON.parse(localStorage.getItem(`${mark}`));

if(location.search) {
	const urlParams = new URLSearchParams(location.search);
	if(urlParams.has('chapter'))
		loadChapter(urlParams.get('chapter'));
	else if(urlParams.has('dex') && urlParams.get('dex') == 'null')
		loadDex(urlParams.get('dex'));
	else
		loadDexContent(urlParams.get('dex'));
} else
	addList();

function addInfo() {
	const tagList = [
		'Adventure',		// 0
		'Fantasy',			// 1
		'Slice of Life',	// 2
		'Romance',			// 3
		'Comedy',			// 4
		'Isekai',			// 5
		'Drama',			// 6
		'Action',			// 7
		'Sci-Fi'			// 8
	];
	const stillList = [
		{
			id: 'Ongoing',
			desc: 'Hoạt động'
		},
		{
			id: 'Completed',
			desc: 'Hoàn thiện'
		},
		{
			id: 'Hiatus',
			desc: 'Tạm ngưng'
		},
		{
			id: 'Cancelled',
			desc: 'Bị hủy'
		}
	];

	var authorList = '';
	author.forEach(e => {
		authorList += `, ${e}`;
	});
	authorList = authorList.slice(2);
	
	var tagsList = '';
	tags.forEach(e => {
		tagsList += `<div class="tag">${tagList[e]}</div>`;
	});

	const format = `
		<section class="main">
			<h1>${name}</h1>
			<div class="infoContent">
				<div class="author">${authorList}</div>
				<div class="desc">${desc}</div>
				<div class="tags">${tagsList}</div>
				<div class="status">
					<div class="tag statusIcon status${stillList[still].id}">${stillList[still].desc}</div>
				</div>
			</div>
			<h2>Danh sách các Chapter</h2>
			<hr>
			<div class="buttons">
				<div class="markAll"></div>
				<div class="startRead" onclick="readFirst()">Đọc từ Chapter đầu</div>
			</div>
		</section>
	`;

	document.querySelector('body').innerHTML += format;
}

function addList() {
	addInfo();
	var chapters = ``;
	volume.forEach((e, i) => {
		var temp = e;
		var chapter = temp.chapter;
		var title = temp.title;
		chapters += `
			<div class="chapter">
				<div id="${chapter}" class="mark"></div>
				<p id="${i}" class="open">${call} ${chapter}${separator}${title}</p>
			</div>
		`;
	});
	document.querySelector('.main').innerHTML += chapters;

	const addOpen = document.querySelectorAll('.chapter p');
	addOpen.forEach(e => {
		e.addEventListener('click', openChapter);
	});

	setMark();
	markAll();
}

function clean() {
	if(document.querySelector('.main'))
		document.querySelector('.main').remove();
	document.documentElement.scrollTop = 0;
}

function openChapter() {
	window.open(`${urlChapter}${volume[this.id].chapter}`, '_self');
}
function loadChapter(id) {
	var Id = changeId(id);
	clean();
	addStory(Id);
	addSlider(Id);
	pushMark(String(volume[Id].chapter));
	checkHide();
	document.querySelector('title').textContent = `Chapter ${volume[Id].chapter} - ${volume[Id].title} | ${name}`;
}
function changeId(id) {
	var Id;
	for(var i = 0; i < volume.length; i++) {
		if(volume[i].chapter == id) {
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
	checkMark.forEach(e => {
		if(tempMark.includes(e.id)) {
			e.addEventListener('click', markUnread);
			e.classList.add('read');
		} else {
			e.addEventListener('click', markRead);
			e.classList.add('unread');
			e.parentElement.classList.add('markUnread');
		}
	});
}

function markUnread() {
	for(var i = 0; i < tempMark.length; i++){
		if(tempMark[i] === this.id) {
			var temp = tempMark[i];
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
	temp.forEach(e => {
		e.addEventListener('click', markRead);
		e.removeEventListener('click', markUnread);
		e.classList.toggle('read');
		e.classList.toggle('unread');
		e.parentElement.classList.toggle('markUnread');
	});

	const getMark = document.querySelector('.markAll');
	getMark.addEventListener('click', readAll);
	getMark.removeEventListener('click', unreadAll);
	getMark.innerHTML = 'Đánh dấu tất cả đã đọc';
}
function readAll() {
	const temp = document.querySelectorAll('.unread');
	temp.forEach(e => {
		tempMark.push(e.id);
		e.addEventListener('click', markUnread);
		e.removeEventListener('click', markRead);
		e.classList.toggle('read');
		e.classList.toggle('unread');
		e.parentElement.classList.toggle('markUnread');
	});
	localStorage.setItem(`${mark}`, JSON.stringify(tempMark));

	const getMark = document.querySelector('.markAll');
	getMark.addEventListener('click', unreadAll);
	getMark.removeEventListener('click', readAll);
	getMark.innerHTML = 'Đánh dấu tất cả chưa đọc';
}