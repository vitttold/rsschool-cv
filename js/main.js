
 console.log('вёрстка валидная +10')
 console.log('вёрстка семантическая +20')
 console.log('В коде страницы присутствуют семантические теги HTML5 header, nav, article,  main, aside, footer, section, h1, h2, h3')
 console.log('для оформления СV используются css-стили +10')
 console.log('контент размещается в блоке, который горизонтально центрируется на странице. +10')
 console.log('вёрстка адаптивная +10')
 console.log('есть адаптивное бургер-меню +10')
 console.log('присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10')
 console.log('контакты для связи и перечень навыков оформлены в виде списка ul > li +10')
 console.log('CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10')
 console.log('CV содержит пример вашего кода с подсветкой кода. +10')
 console.log('CV содержит изображения-ссылки на выполненные проекты +10')
 console.log('CV выполнено на английском языке  +10')
 console.log('выполнены требования к Pull Request +10')
 console.log('есть видеорезюме +10')
 console.log('дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10')



const hamburger = document.querySelector(".hamburger")
const hamburgerNew = document.querySelector(".hamburger-new")
const nav = document.querySelector(".nav")

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

