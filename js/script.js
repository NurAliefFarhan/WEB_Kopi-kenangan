let hamburgerMenu = document.getElementById('hamburger-menu')
let navbarNav = document.querySelector('.navbar-nav')
hamburgerMenu.addEventListener('click', function(e) {
    navbarNav.classList.toggle('active')
})

const hamburger = document.querySelector('#hamburger-menu')
document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

