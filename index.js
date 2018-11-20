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

					/* basic function/method that will be used to utilize the data into responsive form */
	var content,images,movies,description,years,url,movieURL;
	var searchIndex = 0, count = 0;
	var siteContent = document.getElementById("siteContent");
	cardDeck(movies,description,images,years,url);

function cardDeck (movies,description,images,years,url){

	content = '<div id="card-group-container">'+
				  '<div class="card-group">';

    jsonToCard(movies,description,images,years,url);

	content += '</div>'+
			   '</div>';

	siteContent.innerHTML = content;
	var card = document.querySelectorAll('.card');
	cardAction(card);
}

function jsonToCard(movies,description,images,years,url){				
	var json = JSON.parse(data);
	var searchedMovie = movies;
	var result = [];
	json.forEach(function(item,index,array){
		if (searchIndex == 1){
			if (searchedMovie == item['id']){
				 movies = item["movieTitle"];
				 images = item['img']; 
				 description = item['desc'];
				 url = item['url'];
				 years = item['years'];

				 deployCards(movies,description,images,years,url);

			}
		} else if (searchIndex == 2){
			if (searchedMovie == item['geners']){
				 movies = item["movieTitle"];
				 images = item['img']; 
				 description = item['desc'];
				 url = item['url'];
				 years = item['years'];

				 deployCards(movies,description,images,years,url);
				 result.push(movies);
			}
		} else if (searchIndex == 0){
		 images = item['img']; 
		 movies = item['movieTitle'];
		 description = item['desc'];
		 url = item['url'];
		 years = item['years'];	

		 deployCards(movies,description,images,years,url);
		 result.push(movies);
		}

		/*
			console.log(images+" <--images-->"+index);
			console.log(url+" <--url-->"+index);
			console.log(movies+" <--movies-->"+index);
			console.log(years+" <--years-->"+index);
			console.log(description+" <--description-->"+index);
			console.log("##########");
			*/
			
	});
	console.log(result);	
}

function deployCards(movies,description,images,years,url) {
	if (count > 3) {
				content += '</div>'+
							'<div class="card-group">';
				count = 0;
			}

	content += 
			'<div class="card mx-2 mb-3" data-toggle="modal" data-target="#myModal">'+ 
		    '    <img class="card-img-top" src="images/'+images+'" alt="'+movies+'">'+
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
	
	var movieTitle = document.getElementById("movieTitle");
	var movieDescription = document.getElementById("movieDescription");
	var titleMovie = document.getElementById("titleMovie");
	var descriptionMovie = document.getElementsByClassName("descriptionMovie");
	var link = document.getElementById("movieLink");

function movieInfo (el) {
	var content = el.getElementsByTagName("p")[0].innerText;
	var title = el.getElementsByTagName("h5")[0].innerText;
	var date = el.getElementsByTagName("small")[0].innerText;
	link.innerHTML = '<iframe src="'+"movies/"+movieLink(movieURL,title)+'"></iframe>';
	movieTitle.innerText = title +" , "+ date;
	movieDescription.innerHTML = "<p>"+content+"</p>";
}

function movieLink (linkMovie,nameMovie){
	var json = JSON.parse(data);
	json.forEach(function(item){
		if (nameMovie == item["movieTitle"]) {
			linkMovie = item["url"];			
		}		
	});
	return linkMovie;
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

function cardAction (card){
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
}

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

													/** search mode **/
	var searchInput = document.getElementById("searchInput");
	var searchType = 0;
function search (searchInput,searchType){
	var found;
	var json = JSON.parse(data);
	json.forEach(function(item){
		if (searchType == 0){
			if (searchInput == item["movieTitle"]){
				searchInput = item["id"];
				found = 1;			
			} 
		} else if (searchType == 1){
			if (searchInput == item["geners"]){
				found = 2;			
			} 
		}
	});

	if (found >=1) {
		if (found == 1){
			searchIndex = 1;			
		} else if (found == 2){
			searchIndex = 2;
		}
		cardDeck(searchInput,description,images,years,url);
	} else {
		alert("Sorry, we don't have what you're looking for!");
	}
}

	var dropDownItem = document.querySelectorAll(".dropdown-item");
dropDownItem.forEach(function(el){
	el.onclick = function(){
		searchType = 1;
		search(el.innerText,searchType);
	}
});

var btnSearch = document.getElementById("btnSearch");
btnSearch.onclick = function (){
	searchType = 0;
	search(searchInput.value, searchType);
}

													/** Notification **/
notify();
function notify (){
	var json = JSON.parse(DataNotify);
	var notiffication ="";
	json.forEach(function(item){
		notiffication += item["info"];
		notiffication += " \xa0\xa0\xa0\xa0\xa0\ | \xa0\xa0\xa0\xa0\xa0\ ";
	});
	notifyTxt.innerText = notiffication;
}