const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData,2500)

function getData(){
    header.innerHTML = `<img src = "bg.jpg" alt="" />`
    title.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, vel."
    excerpt.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, vel."
    profile_img.innerHTML = `<img src = "profile.jpg" alt="" />`
    name.innerHTML = 'Jhon Doe'
    date.innerHTML = 'April 16, 2025'

    animated_bgs.forEach((bg)=> bg.classList.remove('animated-bg'))
    animated_bg_text.forEach((bg)=> bg.classList.remove('animated-bg-text'))

}

