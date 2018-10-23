window.onscroll = function() {
		stickyNavbar();
}

var siteContent = document.getElementById("siteContent");
var images = ["lp.png","lp.png","lp.png","lp.png","lp.png","lp.png","lp.png","lp.png"];
var movies = ["movie1","movie2","movie3","movie4","movie5","movie6","movie7","movie8"];
var description = ["description1","description2","description3","description4","description5","description6","description7","description8"];
var years = ["2011","2012","2013","2014","2015","2016","2017","2018"];
var count = 0;

					/* basic function/method that will be used to utilize the data into responsive form */
var content = '<div id="card-group-container">'+
			  '<div class="card-group">';
if(years.length == movies.length){
	for (var i = 0; i<movies.length; i++){

		if (count > 3) {
					content += '</div>'+
								'<div class="card-group">';
					count = 0;
				}

		content += 
				'<div class="card mx-2 mb-3" data-toggle="modal" data-target="#myModal">'+ 
			    '    <img class="card-img-top" src="images/'+images[i]+'" alt="Card image cap">'+
			    '    <div class="card-body">'+
			    '      <h5 class="card-title"id="titleMovie">'+movies[i]+'</h5>'+
			    '      <p class="card-text" id="descriptionMovie">'+description[i]+'</p>'+
			    '    </div>'+
			    '    <div class="card-footer">'+
				'      <small class="text-muted">'+years[i]+'</small>'+
				'    </div>'+
				'</div>';

				count++;				
	}

	content += '</div>'+
			   '</div>';
}

siteContent.innerHTML = content;

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
			cardHover(el);	
	}

	el.onmouseout = function (){
			cardLeave(el);
	}

	el.onclick = function() {
		movieInfo(el);
	}
});

var cardContainer = document.getElementById("card-group-container");
var card = document.getElementsByClassName("card");
var notificationBar = document.getElementById("Notification");
var notifyTxt = document.getElementById("notifyTxt");
var modal = document.getElementById("modal");

function darkMode (x) {
	if (navbar.classList.contains("bg-light")) {
		navbar.classList.add("bg-dark");
		document.body.classList.add("dark");
		notifyTxt.style.color = "#000";
		notificationBar.style.backgroundColor = "#5C6369";
		modal.classList.add("dark");
		navbar.classList.remove("bg-light");
	} else {
		navbar.classList.add("bg-light");
		document.body.classList.remove("dark");
		notificationBar.style.backgroundColor = "#F8F9FA";
		notifyTxt.style.color = "#000";
		modal.classList.remove("dark");
		navbar.classList.remove("bg-dark");
	}
	
}