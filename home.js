document.getElementById('date').innerHTML = new Date().toDateString();

var first_image = document.getElementById("image");
var images = ["images/Avator_woman.jpg", "images/Cat.jpg", "images/study.jpg"];
var index = 0;

function carousel(){
	first_image.setAttribute("src", images[index]);
	index++;

	if(index >= images.length){

	index = 0;
	}
}

setInterval(carousel, 2000);


/*var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsById("image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {
    	slideIndex = 1;
    } 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();*/
		