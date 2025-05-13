var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector(".navbar").style.top = "0";
	} else {
		if (currentScrollPos > 70) {
			document.querySelector(".navbar").style.top = "-100px";
		}
	}
	prevScrollpos = currentScrollPos;

	// console.log(currentScrollPos);
	if (currentScrollPos > 70) {
		document.querySelector(".navbar").classList.add("shortNavbar");
	} else {
		document.querySelector(".navbar").classList.remove("shortNavbar");
	}
};
