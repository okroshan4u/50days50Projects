const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeslide = 0;

rightBtn.addEventListener('click',()=>{
    activeslide++

    if(activeslide > slides.length){
        activeslide= 0;
    }
    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click',()=>{
    activeslide--

    if(activeslide<0){
        activeslide = slides.length-1
    }
    setBgToBody()
    setActiveSlide()
})

function setBgToBody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage
}
function setActiveSlide(){
    slides.forEach((slide)=> slide.classList.remove('active'))

    slides[activeslide].classList.add('active')
}