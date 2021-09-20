// console.log("
//     header
//     nav
//     article
//     main
//     aside
//     footer
//     section
//     h1, h2, h3"
// )

const hamburger = document.querySelector(".hamburger")
const hamburgerNew = document.querySelector(".hamburger-new")
const nav = document.querySelector(".nav")


console.log(hamburger)


function navOpen() {
    hamburger.classList.remove("visible");
    hamburger.classList.add("non-visible")
    hamburgerNew.classList.add("visible");
    hamburgerNew.classList.remove("non-visible")
    nav.classList.add("visible");
}

function navClose() {
    hamburgerNew.classList.remove("visible");
    hamburgerNew.classList.add("non-visible")
    hamburger.classList.add("visible");
    hamburger.classList.remove("non-visible")
    nav.classList.remove("visible");

}

hamburger.addEventListener("click", navOpen)
hamburgerNew.addEventListener("click", navClose)

