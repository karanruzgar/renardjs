function useMoveSys(e,t,o,n,s){setTimeout(()=>{window.scrollTo(0,0)}),document.querySelector("html").style.scrollBehavior="smooth";let i=0,l=!0,r=!0;document.addEventListener("keydown",d=>{let m=o*i+2*t;if("d"!==d.key)"a"===d.key&&setTimeout(()=>{if(r){if(n>=m-o)return;i--,setTimeout(()=>{window.scrollTo(i*t,0)}),document.getElementById(e).style.transform=`translate3d(${o*i}px, 0, 0`,r=!1,setTimeout(()=>{r=!0},200)}});else if(l){if(s<=m)return;m>=window.innerWidth&&(i++,setTimeout(()=>{window.scrollTo(i*t,0)},200)),i++,document.getElementById(e).style.transform=`translate3d(${o*i}px, 0, 0`,l=!1,setTimeout(()=>{l=!0},200)}})}