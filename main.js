const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttributes("class", isOpen ? "ri-close-line" : "r-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll Reveal
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

// Header Container
ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container h4, .header-container .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

// About Section
ScrollReveal().reveal(".about-image img", {
    ...scrollRevealOption,
    origan: "left",
});

ScrollReveal().reveal(".about-content .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-container h4, .header-container .section-description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about-card", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

// Price COntainer
ScrollReveal().reveal(".price-card" , {
    ...scrollRevealOption,
    interval: 500,
})


const swiper = new Swiper(".swiper" , {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
});