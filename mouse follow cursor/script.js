const trailer = document.getElementById("trailer");


const getTrailerClass = type =>{
    switch(type){
        case"video":
            return "fa-solid fa-circle-play";
        default:
            // return "fa-regular fa-circle-arrow-up fa-rotate-by";
            return "fa-solid fa-circle-arrow-up fa-rotate-by";
    }
}


const animateTrailer = (e,interacting)=>{
    const x = e.clientX - trailer.offsetWidth/2,
    y = e.clientY - trailer.offsetHeight/2;

    const keyframes = {
        transform :`translate(${x}px , ${y}px) scale(${interacting ? 8:1})`
    }
    
    trailer.animate(keyframes,{
        duration:800,
        fill:"forwards"
    });
}

window.onmousemove = e =>{
    const interactable = e.target.closest(".interactable"),
          interacting = interactable !== null;

    const icon = document.getElementById("trailer-icon");



    animateTrailer(e,interacting);

    trailer.dataset.type = interacting ? interactable.dataset.type : "";

    if(interacting){
        icon.className = getTrailerClass(interactable.dataset.type)
    }
}