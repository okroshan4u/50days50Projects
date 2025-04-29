// const tagsE1 = document.getElementById('tags')
// const textarea = document.getElementById('textarea')

// textarea.focus()

// textarea.addEventListener('keyup', (e)=>{
//     createTags(e.target.value)

//     if(e.key === 'Enter'){
//         setTimeout(()=>{
//             e.target.value = ''
//         },10)
//         randomSelect()
//     }
// })

// function createTags(input){
//     const tags = input.split(',').filter(tag => tag.trim() !=='').map(tag=>tag.trim())
//     tagsE1.innerHTML = ''

//     tags.forEach(tag => {
//         const tagE1 = document.createElement('span')
//         tagE1.classList.add('tag')
//         tagE1.innerText = tag
//         tagsE1.appendChild(tagE1)
//     })
// }
// function randomSelect(){
//     const times = 30

//     const interval = setInterval(()=>{
//         const randomTag = pickRandomTag()

//         highlightTag(randomTag)
//         setTimeout(()=>{
//             unHighlightTag(randomTag)
//         },100)
//     },100);

//     setTimeout(()=>{
//         clearInterval(interval)
        
//         setTimeout(()=>{
//             const randomTag = pickRandomTag()

//             highlightTag(randomTag)
//         },100)
//     },times*100)
// }

// function pickRandomTag(){
//     const tags = document.querySelectorAll('.tag')
//     return tags[Math.floor(Math.random()* tags.length)]
// }

// function highlightTag(tag){
//     tag.classList.add('highlight')
// }

// function unHighlightTag(tag){
//     tag.classList.remove('highlight')
// }

const tagsE1 = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

let tagsArray = [] // Store the tags as an array
let currentSelectedTag = null // Track the currently highlighted tag

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && tagsArray.length > 0) { 
        if (currentSelectedTag) { // If there is a highlighted tag
            // Remove it from the array
            tagsArray = tagsArray.filter(tag => tag !== currentSelectedTag.innerText)
            renderTags() // Update the tag display
            currentSelectedTag = null // Reset current selection
        }

        if (tagsArray.length > 0) { // Continue only if tags remain
            randomSelect()
        }
    } else {
        createTags(e.target.value)
    }
})

function createTags(input) {
    tagsArray = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    renderTags()
}

function renderTags() { // Render tags based on tagsArray
    tagsE1.innerHTML = ''
    tagsArray.forEach(tag => {
        const tagE1 = document.createElement('span')
        tagE1.classList.add('tag')
        tagE1.innerText = tag
        tagsE1.appendChild(tagE1)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag) {
            highlightTag(randomTag)
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            currentSelectedTag = pickRandomTag() // Store the selected tag for removal on next Enter press
            if (currentSelectedTag) {
                highlightTag(currentSelectedTag)
            }
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    if (tags.length === 0) return null
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

