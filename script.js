let character="",x=0,jumpPower=0,speed=0,jump=!1,bottom=0,fallSpeed=0,chWidth=0,leftLimit=0,rightLimit=0;window.scrollTo(0,0),document.querySelector("html").style.scrollBehavior="smooth",document.querySelector("html").style.overflow="hidden",document.addEventListener("keydown",function(e){if("d"===e.key){if(x+chWidth>=leftLimit)return;window.scrollTo(.8*x,0),x+=speed,document.getElementById(character).style.transform=`translateX(${x}px)`}else if("a"===e.key){if(x+chWidth<=rightLimit)return;x-=speed,document.getElementById(character).style.transform=`translateX(${x}px)`,window.scrollTo(x,0)}else"w"==e.key&&!0===jump&&(document.getElementById(character).style.bottom=bottom+jumpPower+"px",setTimeout(()=>{document.getElementById(character).style.bottom=bottom+"px"},fallSpeed))});