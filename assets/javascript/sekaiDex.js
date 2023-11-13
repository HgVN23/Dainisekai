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
	for(var i = 0; i < addOpen.length; i++) {
		addOpen[i].addEventListener('click', openDexContent);
	}

	addDropdown();
}

function addTitle(dex, part) {
	var dex = afterSort(dex);
	var data = ``;
	for(var i = 0; i < dex.length; i++) {
		var temp = dex[i];
		data += `
			<div class="dialogue">
				<p id="${part}.${temp.id}" class="open">${temp.title}</p>
			</div>
		`;
	}
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
		for(var i = 0; i < span.length; i++)
			span[i].addEventListener('click', openChapter);
	}

	addDropdown();
}
function addLore(id) {
	var temp = lore[parseInt(id.slice(5))];
	var section = ``;
	for(var i = 0; i < temp.section.length; i++) {
		section += `
			<div>
				<h3>${temp.section[i].main}</h3>
				${genType1(temp.section[i].content)}
			</div>
		`;
	};
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
				<h3 class="dropdown">Các tên khác</h3>
				<div class="dropdownHide">${genType2(temp.otherName)}</div>
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
						<h4>Trạng thái</h4>
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
						<div class="dot"><p><span id="${changeId(temp.debut)}">Chapter ${temp.debut}</span></p></div>
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
			<div>
				<h3 class="dropdown">Các mối quan hệ</h3>
				<div class="dropdownHide">${genType2(temp.relative)}</div>
			</div>
			<div>
				<h3 class="dropdown">Chức nghiệp & Nghề nghiệp</h3>
				<div class="dropdownHide">${genType2(temp.job)}</div>
			</div>
			<div>
				<h3 class="dropdown">Kĩ năng</h3>
				<div class="dropdownHide">${genType2(temp.skill)}</div>
			</div>
			<div>
				<h3 class="dropdown">Danh hiệu</h3>
				<div class="dropdownHide">${genType2(temp.titles)}</div>
			</div>
			<div>
				<h3 class="dropdown">Vật phẩm sở hữu</h3>
				<div class="dropdownHide">${genType2(temp.item)}</div>
			</div>
		</section>
	`;
	document.querySelector('title').textContent = `SekaiDex - ${temp.title} | 『Dainisekai』`;
	return format;
}

function genType1(id) {
	var temp = ``;
	for(var i = 0; i < id.length; i++) {
		temp += `<div class="dot"><p>${id[i]}</p></div>`;
	}
	return `<div>${temp}</div>`;
}
function genType2(id) {
	var temp = ``;
	for(var i = 0; i < id.length; i++) {
		temp += `<div class="group">`;
		temp += `<h4 class="dropdown">${id[i].name}</h4>`;
		temp += `<div class="dropdownHide"><div>`
		if(id[i].hasOwnProperty('from'))
			temp += `<div class="dot"><p>Từ: ${id[i].from}</p></div>`;
		if(id[i].hasOwnProperty('type'))
			temp += `<div class="dot"><p>Loại: ${id[i].type}</p></div>`;
		temp += `${genType1(id[i].desc)}`;
		if(id[i].hasOwnProperty('firstAppear')) {
			if(id[i].firstAppear != -1) {
				temp += `<div class="dot note"><p>Xuất hiện lần đầu trong <span id="${changeId(id[i].firstAppear)}">Chapter ${id[i].firstAppear}</span>`;
				if(id[i].inDesc === 1)
					temp += ` dưới dạng mô tả`;
				temp += `</p></div>`;
			} else
				temp += `<div class="dot note"><p>Chưa từng đề cập</p></div>`;
		}
		if(id[i].hasOwnProperty('firstUse')) {
			if(id[i].firstUse != -1)
				temp += `<div class="dot note"><p>Sử dụng lần đầu trong <span id="${changeId(id[i].firstUse)}">Chapter ${id[i].firstUse}</span></p></div>`;
			else
				temp += `<div class="dot note"><p>Chưa được sử dụng</p></div>`;
		}
		temp += `</div></div></div>`;
	};
	return temp;
}

function addDropdown() {
	if(document.querySelectorAll('.dropdown')) {
		var dropdown = document.querySelectorAll('.dropdown');
		for(var i = 0; i < dropdown.length; i++) {
			dropdown[i].addEventListener('click', dropdownActive);
		}
	}
}
function dropdownActive() {
	this.classList.toggle('dropdownActive');
	this.parentElement.querySelector('.dropdownHide').classList.toggle('dropdownShow');
}

function afterSort(dex) {
	var sort = [];
	for(var i = 0; i < dex.length; i++){
		sort[i] = dex[i]
	}
	for(var i = 0; i < sort.length - 1; i++)
		for(var j = i + 1; j < sort.length; j++)
			if(sort[i].title > sort[j].title) {
				var temp = sort[i]
				sort[i] = sort[j];
				sort[j] = temp;
			}
	return sort;
}