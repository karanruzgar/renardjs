let character = ''
let x = 0
let jumpPower = 0
let speed = 0
let jump = false
let bottom = 0
let fallSpeed = 0
let chWidth = 0

window.scrollTo(0, 0);

document.querySelector('html').style.scrollBehavior = 'smooth';
document.querySelector('html').style.overflow = 'hidden';

document.addEventListener('keydown', function(event) {
    if(event.key === "d"){
        window.scrollTo(x * 0.8 , 0);
        x+=speed;
        console.log(document.getElementById(character).style.width)
        document.getElementById(character).style.transform = `translateX(${x}px)`
    }
    else if(event.key === "a"){
        x-=speed;
        document.getElementById(character).style.transform = `translateX(${x}px)`
        window.scrollTo(x, 0);
    }
    else if (event.key == "w"){
        if(jump === true){
            document.getElementById(character).style.bottom =  bottom + jumpPower + 'px';
            setTimeout(()=>{
                document.getElementById(character).style.bottom =  bottom + 'px';
            },fallSpeed)
        }
    }
});
