const trailer = document.getElementById("trailer");


window.onmousemove = e =>{
    const x = e.clientX - trailer.offsetWidth/2,
          y = e.clientY - trailer.offsetHeight/2;

    const keyframes = {
        transform : `translate(${x}px , ${y}px)`
    }      
    trailer.animate(keyframes ,{
        duration:800,
        fill:"forwards"
    });
}