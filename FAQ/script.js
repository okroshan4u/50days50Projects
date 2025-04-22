const icons = document.querySelectorAll('.icon')
const para = document.querySelectorAll('.para')
const cards = document.querySelectorAll('.card')
const xicons = document.querySelectorAll('.xicon')

icons.forEach((icon,index)=>{
    icon.addEventListener('click',()=>{
        para[index].classList.add('show')
        xicons[index].classList.toggle('xiconshow')
        icon.classList.add('iconhide')
    })
})
icons.forEach((icon,index)=>{
    icon.addEventListener('click',()=>{
        cards[index].classList.add('cardcolor')
    })
})

xicons.forEach((icon,index)=>{
    icon.addEventListener('click',()=>{
        xicons[index].classList.toggle('xiconshow')
        icons[index].classList.remove('iconhide')
        para[index].classList.remove('show')
        cards[index].classList.remove('cardcolor')
    })
})

