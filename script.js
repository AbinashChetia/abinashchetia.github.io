// =============================
// ELEMENTS
// =============================

const themeToggle = document.getElementById("theme-toggle");

const themeIcon = themeToggle.querySelector("i");

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

// =============================
// THEME HANDLING
// =============================

// Load saved theme
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}

// Toggle theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    // Update icon
    if (document.body.classList.contains("dark")) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    }
    else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});

// =============================
// MOBILE MENU
// =============================

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// =============================
// CLOSE MENU AFTER CLICKING
// A NAVIGATION ITEM
// =============================

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// =============================
// OPTIONAL:
// CLOSE MENU WHEN CLICKING
// OUTSIDE OF IT
// =============================

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedHamburger =
        hamburger.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedHamburger
    ) {

        navLinks.classList.remove("active");

    }

});