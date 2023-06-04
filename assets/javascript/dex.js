function addDex() {
	if(document.querySelector('.list'))
		document.querySelector('.list').remove();
	if(document.querySelector('.story')) {
		document.querySelector('.story').remove();
		document.querySelector('.slider').remove();
	};
	if(document.querySelector('.content'))
		document.querySelector('.content').remove();
	document.documentElement.scrollTop = 0;

	const format = `
		<section class="dex">
			<h1>SekaiDex</h1>
			<h2>『Dainisekai』- Bách khoa toàn thư</h2>
			<h3>(WIP)</h3>
			<hr>
			<h3>Liên quan đến phần viết truyện</h3>
			${addTitle(sekaiDex1, 1)}
			<h3>Liên quan đến trong『Dainisekai』</h3>
			${addTitle(sekaiDex2, 2)}
		</section>
	`;
	document.querySelector('body').innerHTML += format;

	const addOpen = document.querySelectorAll('.dialogue p');
	for(var i = 0; i < addOpen.length; i++) {
		addOpen[i].addEventListener('click', openDex);
	}
}

function addTitle(sekaiDex, part) {
	var dex = ``;
	for(var i = 0; i < sekaiDex.length; i++) {
		var temp = sekaiDex[i];
		var title = temp.title;
		dex += `
			<div class="dialogue">
				<p id="sekaiDex${part}.${i}">${title}</p>
			</div>\n
		`;
	}
	return dex;
}

function openDex() {
	document.querySelector('.dex').remove();
	addContent(this.id);

	document.documentElement.scrollTop = 0;
}

function addContent(id) {
	if(id.includes('sekaiDex1')) {
		var temp = sekaiDex1[parseInt(id.slice(10))];
		var title = temp.title;
		var tempC = temp.content;
		var content = ``;
		for(var i = 0; i < tempC.length; i++) {
			content += `
				<li>${tempC[i]}</li>\n
			`;
		};
		var format = `
			<section class="content">
				<h1>${title}</h1>
				<hr>
				${content}
			</section>
		`;
	} else {
		var temp = sekaiDex2[parseInt(id.slice(10))];
		var title = temp.title;
		var tempS = temp.section;
		var section = ``;
		for(var i = 0; i < tempS.length; i++) {
			var content = ``;
			for(var j = 0; j < tempS[i].content.length; j++)
				content += `<li>${tempS[i].content[j]}</li>\n`;
			section += `
				<h4>${tempS[i].main}</h4>
				${content}\n
			`;
		};
		var format = `
			<section class="content">
				<h1>${title}</h1>
				<hr>
				${section}
			</section>
		`;
	}
	document.querySelector('body').innerHTML += format;
}