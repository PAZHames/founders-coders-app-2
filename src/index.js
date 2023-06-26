//call functions

window.onscroll = function() {
    stickToTop()
};

// variables

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

//functions

function stickToTop() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky")
    }
}

