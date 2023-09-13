let bars = document.querySelector("#bars");
let navlinks = document.querySelector(".nav-links");
bars.addEventListener("click", function() {
    navlinks.classList.toggle("show");
    bars.classList.toggle("fa-times");
});
