//call functions

window.onscroll = function() {
    stickToTop()
    rotateIconOnScroll()
};

// window.addEventListener("scroll", function() {
//     rotateIconOnScroll();
// })



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

function rotateIconOnScroll() {
    var icon = document.getElementById("sun-icon");
    var threshold = 200;
    var rotationSpeed = 5;

    var scrollPosition = window.scrollY;

    if (scrollPosition>=threshold) {
        var rotation = scrollPosition/rotationSpeed;
        icon.style.transform = "rotate(" + rotation + "deg)";
    }
}

