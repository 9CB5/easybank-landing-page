// Functions
// ================================================================================================

// Toggle background image in the header
// ------------------------------------------------------------------------------------------------
function bgToggle(source = "./images/bg-intro-desktop.svg") {
    const imageElement = document.getElementById("header__image-box--bg");

    imageElement.setAttribute("src", source);
}

// Toggle nav icon
// ------------------------------------------------------------------------------------------------
function toggleNavIcon() {
    const icon = document.querySelector(".navigation__burger");
    const source = icon.getAttribute("src");

    if (source === "./images/icon-hamburger.svg") {
        icon.src = "./images/icon-close.svg";
    } else {
        icon.src = "./images/icon-hamburger.svg";
    }
}

function navToggle() {
    const burger = document.querySelector('.navigation__burger');
    const navList = document.querySelector(".navigation__list");

    burger.addEventListener('click', () => {
        navList.classList.toggle("show");

        toggleNavIcon();
    });
}

// Event listeners
// ================================================================================================
window.onresize = () => {
    const btnNav = document.querySelector(".btn-nav");

    if (window.innerWidth < 1440) {
        bgToggle("./images/bg-intro-mobile.svg");
        btnNav.classList.add("hide");
    } else {
        bgToggle();
        btnNav.classList.remove("hide");
    }
}

window.onload = () => {
    const btnNav = document.querySelector(".btn-nav")

    if (window.innerWidth < 1440) {
        bgToggle("./images/bg-intro-mobile.svg");
        btnNav.classList.add("hide");
    } else {
        bgToggle();
        btnNav.classList.remove("hide");
    }
}

// Main method
// ================================================================================================
function main() {
    // Adds an event listener to the burger
    // --------------------------------------------------------------------------------------------
    navToggle();

    // Toggle the background image in the header
    // --------------------------------------------------------------------------------------------
    bgToggle();
}

// Main method call
// ================================================================================================
main();