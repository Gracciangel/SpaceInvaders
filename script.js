            //function NAVE
//=========================================================================

let nave = document.querySelector(".nave"); 
let body=document.querySelector(".body");
document.addEventListener("mousemove" , (e)=>{
    nave.style.left=e.clientX+"px" ; 
})  ;


//function disparo
//=========================================================================
    document.addEventListener("click" , ()=>{
    let bala=document.createElement("div");
    bala.classList.add("bala") ;
    bala.style.bottom=70+"px";
    bala.style.left=(nave.getBoundingClientRect().left+25+"px");
    body.append (bala)
}) ;

// function movimientoDelDisparo
//==============================================================

setInterval(()=>{
    let balas= document.querySelectorAll(".bala");
    balas.forEach(bala => {
        bala.style.top=(bala.getBoundingClientRect().top-20)+"px";

    });
},100)


const boton = document.querySelector(".boton") ;
const span  = document.getElementById("num");
let contador = 0 ;  
boton.addEventListener("click" , ()=>{
   contador ++ ;
   num.textContent = contador ; 
})
const disminuir = document.querySelector(".disminuir") ;
disminuir.addEventListener("click", ()=>{
    contador -- ; 
    num.textContent = contador ; 
}) ;
