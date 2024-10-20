const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-fill")
});

navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-fill");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
}

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
})

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal(".header__content form", {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal(".header__content .bar", {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal(".header__image__card", {
    duration: 1000,
    interval: 500,
    delay: 1000
})