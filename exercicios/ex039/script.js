const elementos = document.querySelectorAll('[data-anima]')

const animacaoClass="animacao"

function animaScroll(){
    const topoPaginaNaJanela = window.pageYOffset+((window.innerHeight*3)/4)
    elementos.forEach (function(elemento){
        if(topoPaginaNaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass)
        }else{
            elemento.classList.remove(animacaoClass)
        }
    })
}

if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll()
    })
}

function cliquemodal(img){
    const janelamodal=document.getElementById("janelamodal")
    const imgmodal=document.getElementById("imgmodal")
    const txtmodal=document.getElementById("txtmodal")
    const bntfechar=document.getElementById("bntfechar")

    janelamodal.classList.remove("escondejanelamodal")
    janelamodal.classList.add("mostrajanelamodal")

    imgmodal.src=img.src
    imgmodal.alt=img.alt
    txtmodal.innerHTML=img.alt

    bntfechar.onclick=function(){
        janelamodal.classList.add("escondejanelamodal")
        janelamodal.classList.remove("mostrajanelamodal")
    }
}
