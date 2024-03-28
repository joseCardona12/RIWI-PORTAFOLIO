const headerhamburger = document.getElementById("header-hamburger");

showMenuHamburger = () =>{
    let headerNav = document.getElementById("header-nav");
    headerNav.classList.toggle("show-nav");
}

headerhamburger.addEventListener('click', showMenuHamburger)