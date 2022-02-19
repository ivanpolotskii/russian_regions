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

let mapwidth=100;
map.style.width = `${mapwidth}%`;
plus.addEventListener('click',function(e){
    if(mapwidth<500){
        // console.log(document.documentElement.scrollWidth,'',document.documentElement.scrollHeight);
        // console.log(document.documentElement.scrollLeft,'',document.documentElement.scrollTop);
        mapwidth+=60;
        map.style.width=`${mapwidth}%`;
        
        // window.scrollBy(document.documentElement.clientWidth.scrollWidth/2,document.documentElement.clientHeight/2);
        
    }
});
minus.addEventListener('click',function(e){
    if(mapwidth>100){
        mapwidth-=60;
        map.style.width=`${mapwidth}%`;
        // window.scrollBy({top:window.scrollX/2,left:window.scrollY/2,behavior:"smooth"});
    }
});

//! map moving
let body = document.querySelector('body');
let startX;
let startY;
let fl=true;
map.addEventListener('mousedown',function(event){
    fl=true;
    startX=event.pageX;
    startY=event.pageY;
    description.style.display="none";
    map.addEventListener('mousemove',function(e){
        if(fl){
            description.style.display="none";
            window.scrollTo({top:(startY-e.clientY),left:(startX-e.clientX)});
        }  
    });
    map.addEventListener('mouseup',function(e){
        fl=false;
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