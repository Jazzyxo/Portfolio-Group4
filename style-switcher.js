/* ===================toggle style switcher ===================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

if (styleSwitcherToggle && styleSwitcher) {
    // Toggle the style switcher panel
    styleSwitcherToggle.addEventListener("click", () => {
        styleSwitcher.classList.toggle("open");
    });

    // Hide the style switcher on scroll
    window.addEventListener("scroll", () => {
        if (styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });
} else {
    console.error("Required elements are missing: .style-switcher-toggler or .style-switcher.");
}
/* ============================Theme colors =============================*/
    const alternateStyles = document.querySelectorAll(".alternate-style");
    function setActiveStyle(color)
    {
        alternateStyles.forEach((style) => {
            if(color ===style.getAttribute("title"))
            {
                style.removeAttribute("disabled");
            }
            else
            {
                style.setAttribute("disabled","true")
            }
        })
    }
/* ============================Theme colors =============================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
