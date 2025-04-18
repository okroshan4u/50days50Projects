const content_container = document.querySelector(".content_container");
const loading_container = document.querySelector(".loading_container");

let count = document.getElementById("loading");



window.onload = function () {
    let upto = 0;

    let counts = setInterval(updated, 15)

    function updated() {
        count.innerHTML = ++upto + "%";
        count.style.opacity = 1- upto/100;
        if (upto == 100) {
            clearInterval(counts)
        }
    }

    setTimeout(() => {
        content_container.classList.add('visible');
        loading_container.classList.add("hidden")
    }, 1500);
}