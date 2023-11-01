function openDex() {
	window.open(`${urlDex}null`, '_self');
}

function loadDex() {
	clean();

	const format = `
		<section class="main">
			<h1>SekaiDex</h1>
			<h2>Bách khoa toàn thư</h2>
			<hr>
			<div class="sekaiDex">
				<div class="sekaiDexCol">
					<h3>Lore</h3>
					${addTitle(lore, 'lore')}
				</div>
				<div class="sekaiDexCol">
					<h3>Thông tin</h3>
					<div>
						<h4 class="headerSmall dropdown">Dàn nhân vật</h4>
						<div class="dropdownHide">${addTitle(character, 'character')}</div>
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
		var title = temp.title;
		data += `
			<div class="dialogue">
				<p id="${part}.${temp.id}" class="clickable">${title}</p>
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
	if(id.includes('lore')){
		var temp = lore[parseInt(id.slice(5))];
		var title = temp.title;
		var tempS = temp.section;
		var section = ``;
		for(var i = 0; i < tempS.length; i++) {
			var content = ``;
			for(var j = 0; j < tempS[i].content.length; j++)
				content += `<li>${tempS[i].content[j]}</li>`;
			section += `
				<h4>${tempS[i].main}</h4>
				${content}
			`;
		};
		var format = `
			<section class="main">
				<h1>${title}</h1>
				<hr>
				${section}
			</section>
		`;
		document.querySelector('title').textContent = `SekaiDex - ${temp.title} | 『Dainisekai』`;
	} else {
		var temp = character[parseInt(id.slice(10))];
		var title = temp.title;
		var tempON = temp.otherName;
		var otherName = ``;
		var age = temp.age;
		var gender = temp.gender;
		var race = temp.race;
		var status = temp.status;
		var tempL = temp.like;
		var like = ``;
		var tempD = temp.dislike;
		var dislike = ``;
		var tempA = temp.appearance;
		var debut = temp.debut;
		var appearance = ``;
		var tempP = temp.personality;
		var personality = ``;
		var tempR = temp.relative;
		var relative = ``;
		var tempJ = temp.job;
		var job = ``;
		var tempS = temp.skill;
		var skill = ``;
		var tempT = temp.titles;
		var titles = ``;
		var tempI = temp.item;
		var item = ``;
		for(var i = 0; i < tempON.length; i++) {
			otherName += `
				<div class="group">
					<h5>${tempON[i].name}</h5>
					<div>
						<li>${tempON[i].desc}</li>
						<div class="note">Xuất hiện lần đầu trong <span id="${changeId(tempON[i].firstAppear)}">Chapter ${tempON[i].firstAppear}</span></div>
					</div>
				</div>
			`;
		}
		for(var i = 0; i < tempL.length; i++) {
			like += `<li>${tempL[i]}</li>`;
		}
		for(var i = 0; i < tempD.length; i++) {
			dislike += `<li>${tempD[i]}</li>`;
		}
		for(var i = 0; i < tempA.length; i++) {
			appearance += `<li>${tempA[i]}</li>`;
		}
		for(var i = 0; i < tempP.length; i++) {
			personality += `<li>${tempP[i]}</li>`;
		}
		for(var i = 0; i < tempR.length; i++) {
			relative += `
				<div class="group">
					<h5>${tempR[i].name}</h5>
					<li>${tempR[i].desc}</li>
				</div>
			`;
		}
		for(var i = 0; i < tempJ.length; i++) {
			job += `
				<div class="group">
					<h5>『${tempJ[i].name}』</h5>
					<div>
			`;
			for(var j = 0; j < tempJ[i].desc.length; j++)
				job += `<li>${tempJ[i].desc[j]}</li>`;
			job += `
				<div class="note">Xuất hiện lần đầu trong <span id="${changeId(tempJ[i].firstAppear)}">Chapter ${tempJ[i].firstAppear}</span></div>
				</div></div>	
			`;
		}
		for(var i = 0; i < tempS.length; i++) {
			skill += `
				<div class="group">
					<h5>『${tempS[i].name}』</h5>
					<div>
						<div class="point">Học được từ${tempS[i].from()}</div>
						<div class="point">Loại: ${tempS[i].type}</div>
			`;
			for(var j = 0; j < tempS[i].desc.length; j++)
				skill += `<li>${tempS[i].desc[j]}</li>`;
			if(tempS[i].firstAppear != -1) {
				skill += `<div class="note">Xuất hiện lần đầu trong <span id="${changeId(tempS[i].firstAppear)}">Chapter ${tempS[i].firstAppear}</span>`;
				if(tempS[i].inDesc === 1)
					skill += ` dưới dạng mô tả</div>`;
				else
					skill += `</div>`;
			} else
				skill += `<div class="note">Chưa từng đề cập</div>`;
			if(tempS[i].firstUse != -1)
				skill += `<div class="note">Sử dụng lần đầu trong <span id="${changeId(tempS[i].firstUse)}">Chapter ${tempS[i].firstUse}</span></div>`;
			else
				skill += `<div class="note">Chưa được sử dụng</div>`;
			skill += `</div></div>`;
		}
		for(var i = 0; i < tempT.length; i++) {
			titles += `
				<div class="group">
					<h5>『${tempT[i].name}』</h5>
					<div>
						<div class="point">Nhận được từ${tempT[i].from()}</div>
			`;
			for(var j = 0; j < tempT[i].desc.length; j++)
				titles += `<li>${tempT[i].desc[j]}</li>`;
			if(tempT[i].firstAppear != -1)
				titles += `<div class="note">Xuất hiện lần đầu trong <span id="${changeId(tempT[i].firstAppear)}">Chapter ${tempT[i].firstAppear}</span></div>`;
			else
				titles += `<div class="note">Chưa từng đề cập</div>`;
			titles += `</div></div>`;
		}
		for(var i = 0; i < tempI.length; i++) {
			item += `
				<div class="group">
					<h5>『${tempI[i].name}』</h5>
					<div>
						<div class="point">Nhận được từ${tempI[i].from()}</div>
			`;
			for(var j = 0; j < tempI[i].desc.length; j++)
				item += `<li>${tempI[i].desc[j]}</li>`;
			if(tempI[i].firstAppear != -1)
				item += `<div class="note">Xuất hiện lần đầu trong <span id="${changeId(tempI[i].firstAppear)}">Chapter ${tempI[i].firstAppear}</span></div>`;
			else
				item += `<div class="note">Chưa từng đề cập</div>`;
			if(tempI[i].firstUse != -1)
				item += `<div class="note">Sử dụng lần đầu trong <span id="${changeId(tempI[i].firstUse)}">Chapter ${tempI[i].firstUse}</span></div>`;
			else
				item += `<div class="note">Chưa được sử dụng</div>`;
			item += `</div></div>`;
		}

		var format = `
			<section class="main">
				<h1>${title}</h1>
				<hr>
				<div>
					<h4 class="headerSmall dropdown dropdownActive">Các tên khác</h4>
					<div class="dropdownHide dropdownShow">${otherName}</div>
				</div>
				<div>
					<h4 class="headerSmall dropdown dropdownActive">Thông tin cá nhân</h4>
					<div class="dropdownHide dropdownShow">
						<div class="group">
							<h5>Tuổi</h5>
							<li class="now">${age} tuổi</li>
						</div>
						<div class="group">
							<h5>Giới tính</h5>
							<li class="now">${gender}</li>
						</div>
						<div class="group">
							<h5>Chủng tộc</h5>
							<li class="now">${race}</li>
						</div>
						<div class="group">
							<h5>Trạng thái</h5>
							<li class="now">${status}</li>
						</div>
						<div class="group">
							<h5>Thích</h5>
							<div>
								${like}
							</div>
						</div>
						<div class="group">
							<h5>Ghét</h5>
							<div>
								${dislike}
							</div>
						</div>
						<div class="group">
							<h5>Xuất hiện</h5>
							<li><span id="${changeId(debut)}">Chapter ${debut}</span></li>
						</div>
					</div>
				</div>
				<div>
					<h4 class="headerSmall dropdown">Vẻ bề ngoài</h4>
					<div class="dropdownHide">${appearance}</div>
				</div>
				<div>
					<h4 class="headerSmall dropdown">Tiểu sử</h4>
					<div class="dropdownHide">${personality}</div>
				</div>
				<div>
					<h4 class="headerSmall dropdown">Các mối quan hệ</h4>
					<div class="dropdownHide">${relative}</div>
				</div>
				<div>
					<h4 class="headerSmall dropdown">Chức nghiệp & Nghề nghiệp</h4>
					<div class="dropdownHide">${job}</div>
				</div>
				<div>
					<h4 class="headerSmall dropdown">Kĩ năng</h4>
					<div class="dropdownHide">${skill}</div>
				</div>
				<div>
					<h4 class="headerSmall dropdown">Danh hiệu</h4>
					<div class="dropdownHide">${titles}</div>
				</div>
				<div>
					<h4 class="headerSmall dropdown">Vật phẩm sở hữu</h4>
					<div class="dropdownHide">${item}</div>
				</div>
			</section>
		`;
		document.querySelector('title').textContent = `SekaiDex - ${temp.title} | 『Dainisekai』`;
	}
	document.querySelector('body').innerHTML += format;

	if(document.querySelectorAll('span')) {
		const span = document.querySelectorAll('span');
		for(var i = 0; i < span.length; i++)
			span[i].addEventListener('click', openChapter);
	}

	addDropdown();
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