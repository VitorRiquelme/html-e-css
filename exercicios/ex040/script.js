const menu=document.querySelectorAll('[data-menu')
const cssativo='ativo'

menu.forEach(function(e){
    e.addEventListener('click',function(){
        for(i=0;i<menu.length;i++){
            menu[i].classList.remove('ativo')
        }
        e.classList.add(cssativo)
    })
})