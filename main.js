let mong = document.querySelector(".overlay_mongol");
let clickmagadan=document.querySelector(".magadan_path");

let livia = document.querySelector(".overlay_livia");
let clickkomi=document.querySelector(".komi_path");

let egypt = document.querySelector(".overlay_egypt");
let clickmurmansk=document.querySelector(".murmansk_path");

let clickchuckchi=document.querySelector(".chuckchi_path");

let clickcumchatka = document.querySelector(".cumchatka_path");

let clickkrasnoyarsk =document.querySelector(".krasnoyarsk_path");

let description = document.querySelector(".description");

sessionStorage.setItem("translatex",0);
sessionStorage.setItem("translatey",0);
// clickmagadan.addEventListener("click",function(){
//     mong.style.display="block";
// });
// mong.addEventListener("click",function(){
//     mong.style.display="none";
// });


// clickkomi.addEventListener("click",function(){
//     livia.style.display="block";
// });
// livia.addEventListener("click",function(){
//     livia.style.display="none";
// });

// clickmurmansk.addEventListener("click",function(){
//     egypt.style.display="block";
// });
// egypt.addEventListener("click",function(){
//     egypt.style.display="none";
// });
// mapimg.addEventListener("mousemove",function(e){
//     alert(1)
// });

//! map zoom
let mapimg = document.querySelector(".img");
let map = document.querySelector(".map");
let svg = document.querySelector(".svg");
let plus = document.querySelector(".fa-square-plus");
let minus = document.querySelector(".fa-square-minus");
let compress = document.querySelector(".fa-compress");

let scale=1;
let translateX=0;
let translateY=0;
let scalechanged=false;
plus.addEventListener('click',function(e){
    if(scale<2){
        scale+=1;
        scalechanged=true;
        if(sessionStorage.getItem("translatex")){
            translateX=sessionStorage.getItem("translatex")*scale;
            translateY=sessionStorage.getItem("translatey")*scale;
            sessionStorage.setItem("translatex",translateX);
            sessionStorage.setItem("translatey",translateY);
        }
        console.log(translateX,translateY,scale);
        map.style.transform=`translate(${translateX}px,${translateY}px) scale(${scale})`;
        // map.style.transform +=`scale(${scale})`;
    }
});
minus.addEventListener('click',function(e){
    if(scale>1){
        scale-=1;
        scalechanged=true;
        if(sessionStorage.getItem("translatex")){
            translateX=sessionStorage.getItem("translatex")/2;
            translateY=sessionStorage.getItem("translatey")/2;
            sessionStorage.setItem("translatex",translateX);
            sessionStorage.setItem("translatey",translateY);
        }
        console.log(translateX,translateY,scale);
        map.style.transform=`translate(${translateX}px,${translateY}px) scale(${scale})`;
    }
});

//! map moving
let body = document.querySelector('body');
let startX;
let startY;
let coordsX=0;
let coordsY=0;
let promX;
let promY;
let fl=true;
map.addEventListener('mousedown',function(event){
    fl=true;
    startX=event.clientX;
    startY=event.clientY;
    description.style.display="none";
    map.addEventListener('mousemove',function(e){
        if(fl){
            description.style.display="none";
            promX=e.clientX-startX;
            promY=e.clientY-startY;
            if(scalechanged){
                map.style.transform=`translate(${coordsX*scale+promX}px,${coordsY*scale+promY}px) scale(${scale})`;
            }else{
                map.style.transform=`translate(${coordsX+promX}px,${coordsY+promY}px) scale(${scale})`;
            }
            
            sessionStorage.setItem("translatex",(coordsX+promX));
            sessionStorage.setItem("translatey",(coordsY+promY));
            // console.log("promX:",promX,` `,"coordsX:",coordsX);
        }  
    });
    map.addEventListener('mouseup',function(e){
        if(fl){
            coordsX+=promX;
            coordsY+=promY;
            fl=false;
        }
        if(scalechanged===true){
            scalechanged=false;
        }
        
        // console.log("promX:",promX,` `,"coordsX:",coordsX);
        
    })
})

//! Magadan
clickmagadan.addEventListener("mousemove",function(e){
    description.innerHTML=this.getAttribute("data-title");
    description.style.left=`${e.pageX+12}px`;
    description.style.top=`${e.pageY-12}px`;
    description.style.display='flex';
});
clickmagadan.addEventListener("mouseleave",function(e){
    description.style.display='none';
});
//! Komi
clickkomi.addEventListener("mousemove",function(e){
    description.innerHTML=this.getAttribute("data-title");
    description.style.left=`${e.pageX+12}px`;
    description.style.top=`${e.pageY-12}px`;
    description.style.display='flex';
});
clickkomi.addEventListener("mouseleave",function(e){
    description.style.display='none';
});
//! Murmansk
clickmurmansk.addEventListener("mousemove",function(e){
    description.innerHTML=this.getAttribute("data-title");
    description.style.left=`${e.pageX+12}px`;
    description.style.top=`${e.pageY-12}px`;
    description.style.display='flex';
});
clickmurmansk.addEventListener("mouseleave",function(e){
    description.style.display='none';
});
//! chuckchi
clickchuckchi.addEventListener("mousemove",function(e){
    description.innerHTML=this.getAttribute("data-title");
    description.style.left=`${e.pageX+12}px`;
    description.style.top=`${e.pageY-12}px`;
    description.style.display='flex';
});
clickchuckchi.addEventListener("mouseleave",function(e){
    description.style.display='none';
});
//! cumchatka
clickcumchatka.addEventListener("mousemove",function(e){
    description.innerHTML=this.getAttribute("data-title");
    description.style.left=`${e.pageX+12}px`;
    description.style.top=`${e.pageY-12}px`;
    description.style.display='flex';
});
clickcumchatka.addEventListener("mouseleave",function(e){
    description.style.display='none';
});
//! krasnoyarsk
clickkrasnoyarsk.addEventListener("mousemove",function(e){
    description.innerHTML=this.getAttribute("data-title");
    description.style.left=`${e.pageX+12}px`;
    description.style.top=`${e.pageY-12}px`;
    description.style.display='flex';
});
clickkrasnoyarsk.addEventListener("mouseleave",function(e){
    description.style.display='none';
});