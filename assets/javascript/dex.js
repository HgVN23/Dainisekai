function dex() {
	if(document.querySelector('.list'))
		document.querySelector('.list').remove();
	if(document.querySelector('.story'))
		document.querySelector('.story').remove();
	if(document.querySelector('.slider'))
		document.querySelector('.slider').remove();
	document.documentElement.scrollTop = 0;

	const format = `
		<section class="story">
			<h1>SekaiDex</h1>
			<h2>Bách khoa toàn thư về『Dainisekai』</h2>
			<h3>(WIP)</h3>
			<hr>
		</section>
	`;
	document.querySelector('body').innerHTML += format;
}