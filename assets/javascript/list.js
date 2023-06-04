let option = ``;
addList();

function addList() {
	let chapters = ``;
	for(var i = 0; i < volume.length; i++) {
		var temp = volume[i];
		var chapter = temp.chapter;
		var title = temp.title;
		chapters += `
			<div class="dialogue">
				<p id="${i}">Chapter ${chapter} - ${title}</p>
			</div>\n
		`;
		option += `
			<div id="${i}" class="option">Chapter ${chapter}</div>
		`;
	}
	document.querySelector('.list').innerHTML += chapters;
	const addOpen = document.querySelectorAll('.dialogue p');
	for(var i = 0; i < addOpen.length; i++) {
		addOpen[i].addEventListener('click', openChapter);
	}
}

function openChapter() {
	document.querySelector('.list').remove();
	addStory(this.id);
	addSlider(this.id);
	checkHide();

	document.documentElement.scrollTop = 0;
}