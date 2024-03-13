

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


var sectionAchv = document.querySelector('.HappyCustomerAchv');
var hasEntered = false;
window.addEventListener('scroll', (e) => { 
    var shouldAnimate = (window.scrollY + window.innerHeight) >= sectionAchv.offsetTop + 82;
    if (shouldAnimate && !hasEntered) {
        hasEntered = true;

        animateValue("hapcusnum", 0, 12, 2000);
        animateValue("offlocnum", 0, 6, 1500);
        animateValue("proptynum", 0, 20, 3000);
        animateValue("agenetnum", 0, 85, 5000);
    }

});

window.addEventListener('DOMContentLoaded', function () {
    animateValue("ourhappyrate", 0, 10, 1500);
    animateValue("exclagents", 0, 8, 1500);
});


window.onclick = function (event) {
    if (!event.target.matches('.dropmenu-engine')) {
        var dropdowns = document.getElementsByClassName("listed-dropmenu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function openEngineMenu(event) {
    document.querySelectorAll('.listed-dropmenu').forEach(function (el) {
        el.classList.remove("show");
    });
    event.target.nextElementSibling.classList.toggle("show");
    event.stopPropagation();
}

function eventStopPagation(event) {
    event.stopPropagation();
}
