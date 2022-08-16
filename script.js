let nave = document.querySelector('.nave') ; 
let body = document.querySelector('body') ; 
let vida= document.querySelector('i')
let score = document.getElementById('score')
let vidas = 5 ;
document.addEventListener('mousemove', (e)=>{
    nave.style.left = (e.clientX-25)+'px'
})

// municiones de la nave
document.addEventListener('click', (e)=>{
    let bala = document.createElement('div')
    bala.classList.add('bala')
    bala.style.bottom = 70 +  'px'
    bala.style.left=(nave.getBoundingClientRect().left +25)+'px'
    body.append(bala)

})

// disparo de la nave 

setInterval(()=>{
    let balas = document.querySelectorAll('.bala');
    balas.forEach(bala=>{
        bala.style.top= (bala.getBoundingClientRect().top-20)+'px'
        if(bala.getBoundingClientRect().top<=0){
            bala.remove()
        }
        let enemigos = document.querySelectorAll('.enemigo')
        
        enemigos.forEach(enemigo=>{
            if(bala.getBoundingClientRect().left>=enemigo.getBoundingClientRect().left && bala.getBoundingClientRect().left<=enemigo.getBoundingClientRect().left+50){
                enemigo.remove()
            }
        
        })
    // desctruccion de enemigos
})
},20)

// eneigos
let aparecer = 0 ; 
setInterval(()=>{
    aparecer++
    if(aparecer%10==0){
        let enemigo = document.createElement('div');
        enemigo.classList.add('enemigo')  ;
        body.append(enemigo) ; 
        enemigo.style.left =(Math.random()*window.innerWidth-100)+'px' ; 
    }
   
    let enemigos= document.querySelectorAll('.enemigo') ; 
    enemigos.forEach(e=>{
            e.style.top=(e.getBoundingClientRect().top+10)+'px'
        if(e.getBoundingClientRect().top>nave.getBoundingClientRect().top){
            e.remove()
  
        }
    })
},100)
// DESTRUCCION DE ENEMIGOS

