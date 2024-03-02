function addStory(id) {
	var temp = volume[id];
	var title = temp.title;
	var chapter = temp.chapter;
	var words = 0;
	var content = ``;
	if(formatStyle == 'dialogue') {
		var tempD = temp.dialogue;
		tempD.forEach((e, i) => {
			var character = ``;
			e.name.forEach(ee => {
				character += `, ${ee}`;
			});
			content += `
				<div class="dialogue" id="${i+1}" style="border-left-color: #${e.color}">
					<div class="character">${character.slice(2)}</div>
					<p>${e.content}</p>
					<div class="number">${i+1}</div>
				</div>
			`;
			words += wordCounter(e.content);
		});
	}
	if(formatStyle == 'normal') {
		temp.content.forEach(e => {
			content += `<p>${e}</p>`;
			words += wordCounter(e);
		});
	}
	if(formatStyle == 'old') {
		content += `<p class="gothic"><span class="gothic bigLetter">${temp.content[0].charAt(0)}</span>${temp.content[0].slice(1)}</p>`;
		words += wordCounter(temp.content[0]);
		temp.content.slice(1).forEach(e => {
			if(e.charAt(0) == '-') {
				content += `<p class="gothic talk">${e}</p>`;
				words += wordCounter(e);
			} else if(e.charAt(0) == '"') {
				content += `<span class="diary">${e}</span>`;
				words += wordCounter(e);
			} else {
				content += `<p class="gothic">${e}</p>`;
				words += wordCounter(e);
			}
		});
		content += `<hr>`
		temp.explain.forEach((e, i) => {
			content += `<p class="explainContent">${i + 1} ${e}</p>`;
		});
		setTimeout(function createExplainHover() {
			const explain = document.querySelectorAll('.explain');
			explain.forEach((e, i) => {
				e.setAttribute('id', i);
				e.addEventListener('mouseenter', explainHover);
				e.addEventListener('mouseleave', explainOut);
			});
		}, 300);
	}
	const format = `
		<section class="main">
			<h1>${call} ${chapter}</h1>
			<h1>${title}</h1>
			<h2>${words} từ</h2>
			<hr>
			${content}
		</section>
	`;
	document.querySelector('body').innerHTML += format;
}

function removeHide() {
	// document.querySelector('.dialogueHide').remove();
	this.remove();
}

function explainHover() {
	const explainContent = document.querySelectorAll('.explainContent');
	explainContent[this.id].classList.add('explainShow');
}
function explainOut() {
	const explainContent = document.querySelectorAll('.explainContent');
	explainContent[this.id].classList.remove('explainShow');
}

function wordCounter(content) {
	const regex = /[A-ZÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬĐÈẺẼÉẸÊỀỂỄẾỆÌỈĨÍỊÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢÙỦŨÚỤƯỪỬỮỨỰỲỶỸÝỴa-zàảãáạăằẳẵắặâầẩẫấậđèẻẽéẹêềểễếệìỉĩíịòỏõóọôồổỗốộơờởỡớợùủũúụưừửữứựỳỷỹýỵ0-9]+/;
	const temp = content.split(/[ 『』]+|<b class="bSkill">+|<\/b>+/);
	var count = 0;
	temp.forEach(e => {
		// console.log(`${e} ${regex.test(e)}`); // Debug
		if(regex.test(e) && (e.at(0) != '<' && e.at(1) != '<')) {
			count++;
			// console.log(count); // Debug
		}
	});
	return count;
}