
document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener('resize', (e) => {
		clearTimeout(resizeTimer);
		// Using this as a global variable seems a bit sketch
		var resizeTimer = setTimeout(() => {
			debugger;
			let height = document.getElementById('main-pic').clientHeight;
			document.querySelectorAll('.marquee-container').minHeight = height + 'px';
			document.querySelectorAll('.marquee').minHeight = height + 'px';
		}, 250);
	});
});