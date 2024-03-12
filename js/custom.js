

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

    //------------ headerSite ------------
    const siteHeader = document.getElementById('headerSite');
    const siteHeaderEmpty = document.getElementById('headerSite-empty');
    const siteHeaderHeight = siteHeader.offsetHeight;

    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > siteHeaderHeight) {
        siteHeader.classList.add('fixed');
        siteHeaderEmpty.classList.add('fixed');
    } else {
        siteHeader.classList.remove('fixed');
        siteHeaderEmpty.classList.remove('fixed');
    }

});


window.addEventListener('DOMContentLoaded',function () {
    animateValue("ourhappyrate", 0, 10, 1500);
    animateValue("exclagents", 0, 8, 1500); 
});




