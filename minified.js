function useMoveSys(e,t,o,n,s){setTimeout(()=>{window.scrollTo(0,0)}),document.querySelector("html").style.scrollBehavior="smooth";let l=0,r=!0,m=!0,d=!0;document.addEventListener("keydown",i=>{let u=o*l+2*t;if("d"!==i.key)"a"===i.key?setTimeout(()=>{if(m){if(n>=u-o)return;l--,setTimeout(()=>{window.scrollTo(l*t,0)}),document.getElementById(e).style.transform=`translate3d(${o*l}px, 0, 0`,m=!1,setTimeout(()=>{m=!0},200)}}):"w"===i.key&&d&&(document.getElementById(e).style.transform=`translate3d(${o*l}px, -${o}px, 0`,setTimeout(()=>{document.getElementById(e).style.transform=`translate3d(${o*l}px, 0, 0`},2*o),d=!1,setTimeout(()=>{d=!0},2*o+200));else if(r){if(s<=u)return;u>=window.innerWidth&&(l++,setTimeout(()=>{window.scrollTo(l*t,0)},200)),l++,document.getElementById(e).style.transform=`translate3d(${o*l}px, 0, 0`,r=!1,setTimeout(()=>{r=!0},200)}})}