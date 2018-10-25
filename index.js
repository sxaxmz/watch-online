														/** sticky navbar **/
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

function stickyNavbar () {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("navbar-sticky");
	} else {
		navbar.classList.remove("navbar-sticky");
	}
}

window.onscroll = function() {
		stickyNavbar();
}

	var content,images,movies,description,years,url;
	var siteContent = document.getElementById("siteContent");

	cardDeck(movies,description,images,years,url);

function cardDeck (movies,description,images,years,url){
	content = '<div id="card-group-container">'+
				  '<div class="card-group">';

    jsonToCard(movies,description,images,years,url);

	content += '</div>'+
			   '</div>';

	siteContent.innerHTML = content;
}

function jsonToCard(movies,description,images,years,url){
					/* basic function/method that will be used to utilize the data into responsive form */
	var json = JSON.parse(data);
	json.forEach(function(item,index,array){
		 images = item['img']; 
		 movies = item['movieTitle'];
		 description = item['desc'];
		 url = item['url'];
		 years = item['years'];	

		 /*Debug
			console.log(images+" <--images-->"+index);
			console.log(url+" <--url-->"+index);
			console.log(movies+" <--movies-->"+index);
			console.log(years+" <--years-->"+index);
			console.log(description+" <--description-->"+index);
			console.log("----------------")
		*/
			deployCards(movies,description,images,years,url);	
	});
}

function deployCards(movies,description,images,years,url) {
	var count = 0;

	/* debug
	console.log(images+" <--images");
	console.log(url+" <--url");
	console.log(movies+" <--movies");
	console.log(years+" <--years");
	console.log(description+" <--description");
	console.log("##########")

	*/
	if (count > 3) {
				content += '</div>'+
							'<div class="card-group">';
				count = 0;
			}

	content += 
			'<div class="card mx-2 mb-3" data-toggle="modal" data-target="#myModal">'+ 
		    '    <img class="card-img-top" src="images/'+images+'" alt="Card image cap">'+
		    '    <div class="card-body">'+
		    '      <h5 class="card-title"id="titleMovie">'+movies+'</h5>'+
		    '      <p class="card-text" id="descriptionMovie">'+description+'</p>'+
		    '    </div>'+
		    '    <div class="card-footer">'+
			'      <small class="text-muted">'+years+'</small>'+
			'    </div>'+
			'</div>';

			count++;				
}

															/** moving data to modal **/
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

															/** card hover **/
function cardHover (element) {
		element.style.paddingLeft = "10px";
		element.style.paddingRight = "10px";
	}

function cardLeave (element) {
		element.style.paddingLeft = "0px";
		element.style.paddingRight = "0px";
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

															/** dark mode **/
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