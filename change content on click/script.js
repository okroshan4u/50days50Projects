const btng = document.querySelector(".btng")
const add = document.querySelector(".btn-add")
const remove = document.querySelector(".btn-remove")
const h_1 = document.getElementById('h-1')

btng.addEventListener("click",()=>{
    h_1.innerHTML = "Added to friend"
    add.classList.add("display")
    remove.classList.add("display-block")
})
remove.addEventListener("click",()=>{
    h_1.innerHTML = "Stranger"
    add.classList.remove("display")
    remove.classList.remove("display-block")
})