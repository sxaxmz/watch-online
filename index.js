window.onscroll = function() {
		stickyNavbar();
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function lightOff (x){
	if (navbar.classList.contains("bg-dark")) {
		x.src = 'images/lightOn.png';
	} else {
		x.src = 'images/lightOff.png';
	}
}

function lightOn (x){
	if (navbar.classList.contains("bg-light")) {
		x.src = 'images/lightOff.png';
	} else {
		x.src = 'images/lightOn.png';
	}
}

function stickyNavbar () {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("navbar-sticky");
	} else {
		navbar.classList.remove("navbar-sticky");
	}
}

function cardHover (element) {
		element.style.paddingLeft = "10px";
		element.style.paddingRight = "10px";
		element.style.backgroundColor = "#D6D6D0";
	}

function cardLeave (element) {
		element.style.paddingLeft = "0px";
		element.style.paddingRight = "0px";
		element.style.backgroundColor = "#F5F5F0";
	}

var card = document.querySelectorAll('.card');

card.forEach( function(el) {
	el.onmouseover = function (){
		cardHover(el);
	}

	el.onmouseout = function (){
		cardLeave(el);
	}
});

var cardContainer = document.getElementById("card-group-container");
function darkMode (x) {
	if (navbar.classList.contains("bg-light")) {
		navbar.classList.add("bg-dark");
		navbar.classList.remove("bg-light");
		document.body.style.backgroundColor = "#5C6369";
		cardContainer.style.borderColor = "#28A745";
	} else {
		navbar.classList.add("bg-light");
		navbar.classList.remove("bg-dark");
		document.body.style.backgroundColor = "#fff";
	}
	
}