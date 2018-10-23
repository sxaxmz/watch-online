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
	x.style.cursor = "pointer";
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
	}

function cardLeave (element) {
		element.style.paddingLeft = "0px";
		element.style.paddingRight = "0px";
	}	

var card = document.querySelectorAll('.card');
var movieTitle = document.getElementById("movieTitle");
var movieDescription = document.getElementById("movieDescription");
var titleMovie = document.getElementById("titleMovie");
var descriptionMovie = document.getElementsByClassName("descriptionMovie");

function movieInfo (el) {
	var content = el.getElementsByTagName("p")[0].innerText;
	var title = el.getElementsByTagName("h5")[0].innerText;
	var date = el.getElementsByTagName("small")[0].innerText;
	movieTitle.innerText = title +" , "+ date;
	movieDescription.innerText = content;
}

card.forEach( function(el) {
	el.onmouseover = function (){
		if (navbar.classList.contains("bg-light")) {
			cardHover(el);
		} else {
			cardHoverDark(el);
		}
	}

	el.onmouseout = function (){
		if (navbar.classList.contains("bg-light")) {
			cardLeave(el);
		} else {
			cardLeaveDark(el);
		}
	}

	el.onclick = function() {
		movieInfo(el);
	}
});

var cardContainer = document.getElementById("card-group-container");
var card = document.getElementsByClassName("card");
var notificationBar = document.getElementById("Notification");
var notifyTxt = document.getElementById("notifyTxt");

function darkMode (x) {
	if (navbar.classList.contains("bg-light")) {
		navbar.classList.add("bg-dark");
		document.body.classList.add("dark");
		notifyTxt.style.color = "#000";
		notificationBar.style.backgroundColor = "#5C6369";
		navbar.classList.remove("bg-light");
	} else {
		navbar.classList.add("bg-light");
		document.body.classList.remove("dark");
		notificationBar.style.backgroundColor = "#F8F9FA";
		notifyTxt.style.color = "#000";
		navbar.classList.remove("bg-dark");
	}
	
}