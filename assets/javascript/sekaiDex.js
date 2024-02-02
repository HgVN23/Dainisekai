function openDex() {
	window.open(`${urlDex}null`, '_self');
}

function loadDex() {
	clean();

	const format = `
		<section class="main">
			<h1>SekaiDex</h1>
			<h1>Bách khoa toàn thư</h1>
			<hr>
			<div class="sekaiDex">
				<div class="sekaiDexCol">
					<h2>Lore</h2>
					${addTitle(lore, 'lore')}
				</div>
				<div class="sekaiDexCol">
					<h2>Thông tin</h2>
					<div>
						<h3 class="dropdown">Dàn nhân vật</h3>
						<div class="dropdownHide">${addTitle(characterInfo, 'character')}</div>
					</div>
				</div>
			</div>
		</section>
	`;
	document.querySelector('body').innerHTML += format;

	const addOpen = document.querySelectorAll('.dialogue p');
	addOpen.forEach(e => {
		e.addEventListener('click', openDexContent);
	});

	addDropdown();
}

function addTitle(dex, part) {
	var dex = afterSort(dex);
	var data = ``;
	dex.forEach(e => {
		data += `
			<div class="dialogue">
				<p id="${part}.${e.id}" class="open">${e.title}</p>
			</div>
		`;
	});
	return data;
}

function openDexContent() {
	window.open(`${urlDex}${this.id}`, '_self');
}

function loadDexContent(id) {
	clean();
	if(id.includes('lore'))
		document.querySelector('body').innerHTML += addLore(id);
	if(id.includes('character'))
		document.querySelector('body').innerHTML += addCharacter(id);

	if(document.querySelectorAll('span')) {
		const span = document.querySelectorAll('span');
		span.forEach(e => {
			e.addEventListener('click', openChapter);
		});
	}

	addDropdown();
}
function addLore(id) {
	var temp = lore[parseInt(id.slice(5))];
	var section = ``;
	temp.section.forEach(e => {
		section += `
			<div>
				<h3>${e.main}</h3>
				${genType1(e.content)}
			</div>
		`;
	});
	const format = `
		<section class="main">
			<h1>${temp.title}</h1>
			<hr>
			${section}
		</section>
	`;
	document.querySelector('title').textContent = `SekaiDex - ${temp.title} | 『Dainisekai』`;
	return format;
}
function addCharacter(id) {
	var temp = characterInfo[parseInt(id.slice(10))];

	const format = `
		<section class="main">
			<h1>${temp.title}</h1>
			<hr>
			<div>
				<h3 class="dropdown dropdownActive">Các tên khác</h3>
				<div class="dropdownHide dropdownShow">${genType2(temp.otherName)}</div>
			</div>
			<div>
				<h3 class="dropdown dropdownActive">Thông tin cá nhân</h3>
				<div class="dropdownHide dropdownShow">
					<div class="group">
						<h4>Tuổi</h4>
						${genType1(temp.age)}
					</div>
					<div class="group">
						<h4>Giới tính</h4>
						${genType1(temp.gender)}
					</div>
					<div class="group">
						<h4>Chủng tộc</h4>
						${genType1(temp.race)}
					</div>
					<div class="group">
						<h4>Tình trạng</h4>
						${genType1(temp.status)}
					</div>
					<div class="group">
						<h4>Thích</h4>
						${genType1(temp.like)}
					</div>
					<div class="group">
						<h4>Ghét</h4>
						${genType1(temp.dislike)}
					</div>
					<div class="group">
						<h4>Xuất hiện</h4>
						<div class="dot"><p><span id="${changeId(temp.debut)}" class="toChapter">Chapter ${temp.debut}</span></p></div>
					</div>
				</div>
			</div>
			<div>
				<h3 class="dropdown">Vẻ bề ngoài</h3>
				<div class="dropdownHide">${genType1(temp.appearance)}</div>
			</div>
			<div>
				<h3 class="dropdown">Tiểu sử</h3>
				<div class="dropdownHide">${genType1(temp.personality)}</div>
			</div>
			<!-- <div>
				<h3 class="dropdown">Các mối quan hệ</h3>
				<div class="dropdownHide">${genType2(temp.relative)}</div>
			</div> -->
			<div>
				<h3 class="dropdown dropdownActive">Chức nghiệp & Nghề nghiệp</h3>
				<div class="dropdownHide dropdownShow">${genType2(temp.job)}</div>
			</div>
			<div>
				<h3 class="dropdown dropdownActive">Kỹ năng</h3>
				<div class="dropdownHide dropdownShow">${genType2(temp.skill)}</div>
			</div>
			<div>
				<h3 class="dropdown dropdownActive">Danh hiệu</h3>
				<div class="dropdownHide dropdownShow">${genType2(temp.titles)}</div>
			</div>
			<div>
				<h3 class="dropdown dropdownActive">Vật phẩm sở hữu</h3>
				<div class="dropdownHide dropdownShow">${genType2(temp.item)}</div>
			</div>
		</section>
	`;
	document.querySelector('title').textContent = `SekaiDex - ${temp.title} | 『Dainisekai』`;
	return format;
}

function genType1(id) {
	var temp = ``;
	id.forEach(e => {
		temp += `<div class="dot"><p>${e}</p></div>`;
	});
	return `<div>${temp}</div>`;
}
function genType2(id) {
	var temp = ``;
	id.forEach(e => {
		temp += `<div class="group">`;
		temp += `<h4 class="dropdown">${e.name}</h4>`;
		temp += `<div class="dropdownHide"><div class="max">`
		temp += `${genType1(e.desc)}<div class="hr"></div>`;
		if(e.hasOwnProperty('type'))
			temp += `<div class="dot"><p>Loại: ${e.type}</p></div>`;
		if(e.hasOwnProperty('group'))
			temp += `<div class="dot"><p>Nhóm: ${e.group}</p></div>`;
		if(e.hasOwnProperty('from'))
			temp += `<div class="dot"><p>Từ: ${e.from}</p></div>`;
		if(e.hasOwnProperty('firstAppear')) {
			if(e.firstAppear != -1) {
				temp += `<div class="dot"><p>Xuất hiện: <span id="${changeId(e.firstAppear)}" class="toChapter">Chapter ${e.firstAppear}</span>`;
				if(e.inDesc === 1)
					temp += ` dưới dạng mô tả`;
				temp += `</p></div>`;
			} else
				temp += `<div class="dot"><p>Chưa từng đề cập</p></div>`;
		}
		// if(e.hasOwnProperty('firstUse')) {
		// 	if(e.firstUse != -1)
		// 		temp += `<div class="dot"><p>Sử dụng lần đầu trong <span id="${changeId(e.firstUse)}" class="toChapter">Chapter ${e.firstUse}</span></p></div>`;
		// 	else
		// 		temp += `<div class="dot"><p>Chưa được sử dụng</p></div>`;
		// }
		temp += `</div></div></div>`;
	});
	return temp;
}

function addDropdown() {
	if(document.querySelectorAll('.dropdown')) {
		var dropdown = document.querySelectorAll('.dropdown');
		dropdown.forEach(e => {
			e.addEventListener('click', dropdownActive);
		});
	}
}
function dropdownActive() {
	this.classList.toggle('dropdownActive');
	this.parentElement.querySelector('.dropdownHide').classList.toggle('dropdownShow');
}

function afterSort(dex) {
	var sort = [];
	dex.forEach(e => {
		sort.push(e);
	});
	for(var i = 0; i < sort.length - 1; i++)
		for(var j = i + 1; j < sort.length; j++)
			if(sort[i].title > sort[j].title) {
				var temp = sort[i]
				sort[i] = sort[j];
				sort[j] = temp;
			}
	return sort;
}