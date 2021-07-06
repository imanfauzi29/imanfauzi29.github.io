import "regenerator-runtime"; /* for async await transpile */
import "../styles/index.scss";
import App from "./views/App";
import "./components/arrowBack";
import "./components/ratingStar";
import swRegister from "./utils/sw-register";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const { toggle } = menuToggle.dataset;

const app = new App({
    overlay,
    navbar,
    button: menuToggle,
    drawer: document.getElementById(`${toggle}`),
    content: document.getElementById("mainContent")
});

window.addEventListener("hashchange", () => {
    app.renderPage();
    if (window.location.hash) {
        navbar.classList.add("bg-primary");
    }
});
window.addEventListener("load", () => {
    app.renderPage();
    swRegister();
    if (window.location.hash) {
        navbar.classList.add("bg-primary");
    }
});

// // change background on scroll
window.addEventListener("scroll", () => {
    if (window.location.hash === "") {
        const scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 100) {
            navbar.classList.add("bg-primary");
            navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.remove("bg-primary");
            navbar.classList.add("bg-transparent");
        }
    }
});
