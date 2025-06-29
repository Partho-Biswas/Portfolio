/*
========================================
JavaScript for Portfolio Interactivity
========================================
*/

// --- Mobile Menu (Hamburger) Toggle ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Toggles the 'bx-x' class to change the hamburger to an 'X'
    menuIcon.classList.toggle('bx-x');
    // Toggles the 'active' class to show/hide the navigation menu
    navbar.classList.toggle('active');
};

// --- Theme (Dark/Light Mode) Toggle ---
let themeIcon = document.querySelector('#theme-icon');

themeIcon.onclick = () => {
    // Toggles the sun icon
    themeIcon.classList.toggle('bx-sun');
    // Toggles the 'light-mode' class on the body to switch themes
    document.body.classList.toggle('light-mode');
};


// --- Active Link Highlighting and Sticky Header on Scroll ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' class to the link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // --- Sticky Header ---
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // --- Close Mobile Menu on Scroll ---
    // If user scrolls, close the mobile navigation menu
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// --- Typing Animation for Home Section ---
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
