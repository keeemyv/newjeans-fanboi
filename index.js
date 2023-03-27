let cartIcon = document.querySelector('#cartlogo');
let cart= document.querySelector('.cart');
let closeCart = document.querySelector('#close');


cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};


if (document.readyState == 'loading'){
     document.addEventListener('DOMContentLoaded', ready)
 } else {
     ready();
 }

function ready(){
     var removeCart = document.getElementsByClassName('deletecart')
     console.log(removeCart)
    for (var i = 0; i < removeCart.length; i++){
        var button = removeCart[i]
        button.addEventListener('click', deleteCartItem)
    }
}

function deleteCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}


function addtoCart(item){
    var addItem = document.getElementsByClassName("item-name"); //??//
}





//Carousel//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }