function redirectToRegister() {
  window.location.href = "/register.html";
}

function redirectToLogin() {
  window.location.href = "/login.html";
}

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

// About animations
ScrollReveal().reveal(".about__izq h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__izq .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__der h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".about__der h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".about__der h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".about__der p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".about__der .tent-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".about__der .tent-2", {
  duration: 1000,
  delay: 4500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});