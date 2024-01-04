window.onscroll = function(){
    myFunction();
}

var navbar = document.querySelector(".navar")

var sticky = navbar.offsetTop;

function myFunction(){
    if (window.scrollY > sticky){
        navbar.classList.add("fixed-top","fade-in-item");
    }else{
        navbar.classList.remove("fixed-top");
    }
}