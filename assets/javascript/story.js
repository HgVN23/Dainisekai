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
	} else {
		for(var i = 0; i < temp.content.length; i++) {
			content += `<p>${temp.content[i]}</p>`;
			words += temp.content[i].split(' ').length;
		};
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

// <img class="face" src="assets/media/image/character/${tempD[i].face[j]}.png">