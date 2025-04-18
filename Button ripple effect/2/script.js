const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button)=>{
    button.onclick = function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        console.log(e.clientX, e.clientY) // gives the position on the total viewport where we have clicked on the button
        console.log(x, y) // gives the position where we have clicked on the button

        let any_name = document.createElement("span");
        any_name.style.left = `${x}px`;
        any_name.style.top = `${y}px`;

        this.appendChild(any_name);

        setTimeout(function(){
            any_name.remove();
        },600);
    }
});