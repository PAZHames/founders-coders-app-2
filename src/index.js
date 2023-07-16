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

// navbar function 

function stickToTop() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky")
    }
}

//sun rotate function 
function rotateIconOnScroll() {
    var icon = document.getElementById("sun-icon");
    var threshold = 10;
    var rotationSpeed = 3;

    var scrollPosition = window.scrollY;

    if (scrollPosition>=threshold) {
        var rotation = scrollPosition/rotationSpeed;
        icon.style.transform = "rotate(" + rotation + "deg)";
    }
}

// collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {

var collapsibleContent = coll[i].nextElementSibling;
collapsibleContent.style.display = "none";

// expand/collapse
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapsibleContent = this.nextElementSibling;
    if (this.classList.contains("flex")) {
        if (collapsibleContent.style.display === "flex") {
            collapsibleContent.style.display = "none";
        } else {
            collapsibleContent.style.display = "flex";
        }
    } else {
        if (collapsibleContent.style.display === "block") {
            collapsibleContent.style.display = "none";
        } else {
            collapsibleContent.style.display = "block";
        }
    }
});
}
