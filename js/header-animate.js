 
 window.addEventListener('scroll', (e) => { 
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
