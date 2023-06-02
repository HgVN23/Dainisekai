addList();
let chapterId;

function addList() {
	let chapters = ``;
	for(var i = 1; i < volume.length; i++) {
		var temp = volume[i];
		var chapter = temp.chapter;
		var title = temp.title;
		chapters += `
			<div class="dialogue">
				<p id="${chapter}">Chapter ${chapter} - ${title}</p>
			</div>\n
		`;
	}
	document.querySelector('.list').innerHTML += chapters;
	const addOpen = document.querySelectorAll('.dialogue p');
	for (var i = 0; i < addOpen.length; i++) {
		addOpen[i].addEventListener('click', open);
	}

}

function open() {
	for(var i = 1; i < volume.length; i++) {
		var temp = volume[i].chapter;
		if(parseFloat(this.id) == temp) {
			chapterId = volume.findIndex(function (v) {
				return v.chapter == temp;
			});
			addStory(chapterId);
			break;
		}
	}
	document.querySelector('.list').style.display = 'none';
	document.documentElement.scrollTop = 0;
}