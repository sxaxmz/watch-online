window.onscroll = function() {
		stickyNavbar();
}

function lightOff (x){
	x.src = 'images/lightOff.png';
}

function lightOn (x){
	x.src = 'images/lightOn.png';
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
console.log(sticky);

function stickyNavbar () {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("navbar-sticky");
	} else {
		navbar.classList.remove("navbar-sticky");
	}
}