
function navBar() {
    let mobileBar = document.querySelector('.mobile-bar');
    mobileBar.addEventListener('click', () => {
        let mobileNav = document.querySelector('.mobile-nav');
       if(mobileBar.className.includes('open')){
           mobileBar.className = 'mobile-bar';
           mobileNav.style.height = "0";
           mobileNav.style.zIndex = -1;
           document.body.style.overflow = 'auto';
           document.body.style.overflowX = 'hidden';
       }
       else{
           document.querySelector('.mobile-nav').style.display = "flex";
           mobileBar.className += ' open';
           mobileNav.style.height = "100vh";
           mobileNav.style.zIndex = 1;
           document.body.style.overflow = 'hidden';
       }
    })
}

navBar();