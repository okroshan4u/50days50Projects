const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained  = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=> highlightCups(idx))
})

function highlightCups(idx){
    if(idx===7 && smallCups[idx].classList.contains('full'))idx--;
    else if(smallCups[idx].classList.contains('full')&& !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup(){
    const fullcups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullcups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height =`${fullcups /totalCups*330}px`
        percentage.innerText = `${fullcups/totalCups*100}%`
    }

    if(fullcups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2- (250 *fullcups/1000)}L`
    }
}