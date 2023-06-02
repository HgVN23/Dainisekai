function addStory(v) {
	var temp = volume[v];
	var tempD = temp.dialogue;
	var title = temp.title;
	var chapter = temp.chapter;
	var dialogue = ``;
	var words = 0;
	for(var i = 0; i < tempD.length; i++) {
		var character = ``;
		for(var j = 0; j < tempD[i].face.length; j++) {
			character += `
				<div class="character">
					<img class="face" src="assets/media/image/${tempD[i].face[j]}.png">
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
		<h1>Chapter ${chapter} - ${title}</h1>
		<h2>${words} từ</h2>
		<hr>
		${dialogue}
	`;

	const storyCreate = document.createElement('section');
	storyCreate.classList.add('story');
	storyCreate.innerHTML = format;
	document.querySelector('body').appendChild(storyCreate);
}