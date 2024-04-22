
function unhideLightbox(lightboxID) {

   document.getElementById('lightbox-overlay').classList.remove('hidden');

   document.getElementById(lightboxID).classList.remove("hidden");

}

function unhideLightbox1() {
	unhideLightbox("item1");
}
document.getElementById("strawberry").onclick = unhideLightbox1;


function unhideLightbox2() {
	unhideLightbox("item2");
}
document.getElementById("cherry").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("item3");
}
document.getElementById("chocolate").onclick = unhideLightbox3;


function unhideLightbox4() {
	unhideLightbox("item4");
}
document.getElementById("matcha").onclick = unhideLightbox4;


function unhideLightbox5() {
	unhideLightbox("item5");
}
document.getElementById("peach").onclick = unhideLightbox5;


function unhideLightbox6() {
	unhideLightbox("item6");
}
document.getElementById("variety").onclick = unhideLightbox6;


function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add("hidden");

}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;

