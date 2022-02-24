import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

window.addEventListener('DOMContentLoaded', () => {
	const myZone = document.querySelector('.dropzone');

	if (myZone) {
		let zone = new Dropzone(myZone, {
			url: '/'
		});
		zone.on('addedfile', file => {
			console.log(`File added: ${file.name}`)
		});
	}

});
