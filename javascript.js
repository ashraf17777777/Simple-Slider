// Get Slider Items 
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));


// Number of slides
var sliderCount = sliderImages.length;

// Set current slide
var currentSlide = 1;

//Slide number element
var slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");


// Create ul Element

let paginationElement = document.createElement("ul");

paginationElement.setAttribute("id","pag-id");


for(var i = 1 ; i <= sliderCount ; i++){
    
    let paginationItem =  document.createElement("li");

    paginationItem.setAttribute("data-index",i);

    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);

}

document.getElementById("indicator").appendChild(paginationElement)

var CreatedPaginationul = document.getElementById("pag-id");
console.log(CreatedPaginationul);

// Get Bullets
var bullets = Array.from(document.querySelectorAll("#pag-id li"));


//click on btns and change slide 
for(let i = 0 ; i < bullets.length ; i++){
    bullets[i].onclick = function() {
        currentSlide = parseInt( this.getAttribute("data-index") );
        checker();
    }
}


checker();




prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;




// create the checker function
function checker(){

   

    // rename the slide number
    slideNumberElement.textContent = `Slide #${currentSlide} of ${sliderCount}`;
    

    removeAll();

    // set active to image
    sliderImages[currentSlide - 1].classList.add("active")

    //set active to li
    CreatedPaginationul.children[currentSlide - 1].classList.add("active");

    // check if current slide is the first 
    if(currentSlide == 1){
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.classList.remove("disabled");
    }

    // check if the current slide is the latest
    if(currentSlide == sliderCount){
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.classList.remove("disabled");
    }
}

// next slide
function nextSlide(){
    if(nextBtn.classList.contains("disabled")){

        //do nothing
        return false;
    } else {
        currentSlide++;
        checker();
    }
}


// previous slide
function prevSlide(){
    if(prevBtn.classList.contains("disabled")){

        //do nothing
        return false;
    } else {
        currentSlide--;
        checker();
    }
}



// remove active from imgs and bullets function 
function removeAll(){


    //loop through image
    sliderImages.forEach( (img) => {
        img.classList.remove("active")
    });

    //loop through bullets

    bullets.forEach( (x) => {
        x.classList.remove("active");
    });

};
