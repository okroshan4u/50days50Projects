const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slideLength = slideRight.querySelectorAll('div').length




let counter = 0

slideLeft.style.top =  `-${(slideLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction )=>{
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        counter++
        if(counter > slideLength -1){
            counter = 0
        }
    } else if(direction === 'down'){
        counter--
        if(counter <0){
            counter = slideLength -1
        }
    }
    slideRight.style.transform = `translateY(-${counter * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${counter * sliderHeight}px)`
}