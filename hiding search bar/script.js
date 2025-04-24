const search_container = document.querySelector(".search_container")
const search_icon = document.getElementById('search_icon')

search_icon.addEventListener('click',()=>{
    search_container.classList.toggle("show_search")

})