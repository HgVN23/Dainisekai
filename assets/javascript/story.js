function genStory() {
	var temp = chapter[0];
	var tempD = temp.dialogue;
	let title = temp.title;
	let dialogue = ``;
	let words = 0;
	for(var i = 0; i < tempD.length; i++) {
		dialogue += `
			<div class="dialogue ${tempD[i].class}">
				<div class="group">
					<div class="character">
						<img class="face" src="assets/media/image/${tempD[i].face}.png">
						<div class="name">${tempD[i].name}</div>
					</div>
				</div>
				<p>${tempD[i].content}</p>
			</div>\n
		`;
		words += tempD[i].content.split(' ').length;
	};
	const format = `
		<h1>${title}</h1>
		<h2>${words} từ</h2>
		<hr>
		${dialogue}
	`;

	const storyCreate = document.createElement('section');
	storyCreate.classList.add('story');
	storyCreate.innerHTML = format;
	document.querySelector('body').appendChild(storyCreate);
}
genStory();