function useMoveSys(e,t,o,n,s){setTimeout(()=>{window.scrollTo(0,0)}),document.querySelector("html").style.scrollBehavior="smooth";let l=0,i=!0,r=!0;document.addEventListener("keydown",d=>{let m=o*l+2*t;if("d"!==d.key){if("a"===d.key&&r){if(n<=m)return;l--,setTimeout(()=>{window.scrollTo(l*t,0)}),document.getElementById(e).style.transform=`translate3d(${o*l}px, 0, 0`,r=!1,setTimeout(()=>{r=!0},200)}}else if(i){if(s<=m)return;m>=window.innerWidth&&(l++,setTimeout(()=>{window.scrollTo(l*t,0)},200)),l++,document.getElementById(e).style.transform=`translate3d(${o*l}px, 0, 0`,i=!1,setTimeout(()=>{i=!0},200)}})}