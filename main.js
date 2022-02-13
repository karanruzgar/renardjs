function useMoveSys(id, width, speed, leftLimit, rightLimit){
    setTimeout(()=>{
        window.scrollTo(0, 0);
    })
    document.querySelector("html").style.scrollBehavior = "smooth"
    // document.querySelector("html").style.overflow = "hidden"
    let count = 0
    let d = true
    let a = true
    document.addEventListener('keydown', (e)=>{
        let pot = speed * count + width * 2
        if(e.key === 'd'){
            if(d){
                if(rightLimit <= pot){
                    return;
                }
            else if(pot >= window.innerWidth){
                    count++;
                    setTimeout(()=>{
                        window.scrollTo(count * width, 0);
                    },200)
                }
                count++;
                document.getElementById(id).style.transform = `translate3d(${speed * count}px, 0, 0`
                d = false
                setTimeout(()=>{
                    d = true
                },200)
            }
            return;
        }
        else if(e.key === 'a'){
            if(a){
                if(leftLimit <= pot){
                    return;
                }
                count--;
                setTimeout(()=>{
                    window.scrollTo(count * width, 0);
                })
                document.getElementById(id).style.transform = `translate3d(${speed * count}px, 0, 0`
                a = false
                setTimeout(()=>{
                    a = true
                },200)
            }
        }
    });
}