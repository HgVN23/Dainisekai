function addStory(id) {
	var temp = volume[id];
	var tempD = temp.dialogue;
	var title = temp.title;
	var chapter = temp.chapter;
	var dialogue = ``;
	var words = 0;
	for(var i = 0; i < tempD.length; i++) {
		var character = ``;
		for(var j = 0; j < tempD[i].name.length; j++) {
			character += `
				<div class="character">
					<div class="name">${tempD[i].name[j]}</div>
				</div>\n
			`;
		};
		dialogue += `
			<div class="dialogue ${tempD[i].class}">
				<div class="group">
					${character}
				</div>
				<p>${tempD[i].content}</p>
			</div>\n
		`;
		words += tempD[i].content.split(' ').length;
	};
	const format = `
		<section class="main">
			<h1>Chapter ${chapter}</h1>
			<h2>${title}</h2>
			<h3>${words} từ</h3>
			<hr>
			${dialogue}
		</section>
	`;
	document.querySelector('body').innerHTML += format;
}

function removeHide() {
	document.querySelector('.dialogueHide').remove();
}

// <img class="face" src="assets/media/image/character/${tempD[i].face[j]}.png">