const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove",(e)=>{
    console.log(e.offsetX);
    console.log(e.offsetY);
    const xPos = e.offsetX; 
    const yPos = e.offsetY; 
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyEl.appendChild(spanEl);
    const size = Math.random()*100;

    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    setTimeout(()=>{
        spanEl.remove();

    },3000);
})