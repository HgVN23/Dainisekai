function addStory(id) {
	var temp = volume[id];
	var title = temp.title;
	var chapter = temp.chapter;
	var words = 0;
	var content = ``;
	if(formatStyle == 'dialogue') {
		var tempD = temp.dialogue;
		for(var i = 0; i < tempD.length; i++) {
			var character = ``;
			for(var j = 0; j < tempD[i].name.length; j++)
				character += `, ${tempD[i].name[j]}`;
			content += `
				<div class="dialogue ${tempD[i].class}">
					<div class="character">${character.slice(2)}</div>
					<p>${tempD[i].content}</p>
				</div>
			`;
			words += tempD[i].content.split(' ').length;
		};
	}
	if(formatStyle == 'normal') {
		for(var i = 0; i < temp.content.length; i++) {
			content += `<p>${temp.content[i]}</p>`;
			words += temp.content[i].split(' ').length;
		};
	}
	if(formatStyle == 'old') {
		content += `<p class="gothic"><span class="gothic bigLetter">${temp.content[0].charAt(0)}</span>${temp.content[0].slice(1)}</p>`;
		words += temp.content[0].split(' ').length;
		for(var i = 1; i < temp.content.length; i++) {
			if(temp.content[i].charAt(0) == '-') {
				content += `<p class="gothic talk">${temp.content[i]}</p>`;
				words += temp.content[i].slice(2).split(' ').length;
			} else if(temp.content[i].charAt(0) == '"') {
				content += `<span class="diary">${temp.content[i]}</span>`;
				words += temp.content[i].split(' ').length;
			} else {
				content += `<p class="gothic">${temp.content[i]}</p>`;
				words += temp.content[i].split(' ').length;
			}
		};
		content += `<hr>`
		for(var i = 0; i < temp.explain.length; i++) {
			content += `<p class="explainContent">${i + 1} ${temp.explain[i]}</p>`;
		}
		setTimeout(function createExplainHover() {
			const explain = document.querySelectorAll('.explain');
			for(var i = 0; i < explain.length; i++) {
				explain[i].setAttribute('id', i);
				explain[i].addEventListener('mouseenter', explainHover);
				explain[i].addEventListener('mouseleave', explainOut);
			}
		}, 300);
	}
	const format = `
		<section class="main">
			<h1>Chapter ${chapter}</h1>
			<h2>${title}</h2>
			<h3>${words} từ</h3>
			<hr>
			${content}
		</section>
	`;
	document.querySelector('body').innerHTML += format;
}

function removeHide() {
	document.querySelector('.dialogueHide').remove();
}

function explainHover() {
	const explainContent = document.querySelectorAll('.explainContent');
	explainContent[this.id].classList.add('explainShow');
}
function explainOut() {
	const explainContent = document.querySelectorAll('.explainContent');
	explainContent[this.id].classList.remove('explainShow');
}