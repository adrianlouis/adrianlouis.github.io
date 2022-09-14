const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'
const imagens = document.querySelectorAll('.animeUp')

function animeScroll(){
    console.log(imagens)

    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    target.forEach((elem)=>{
        if((windowTop) > elem.offsetTop){
            elem.classList.add('animate')
        }else{
            elem.classList.remove('animate')
        }
    })

    const larguraTela = window.screen.width 
    if (larguraTela <= 390){
        imagens.forEach((imgs)=>{
            imgs.setAttribute('data-anime', 'up')
        })
    }
    

}

if(target.length){
    window.addEventListener('scroll', ()=>{
        animeScroll();
    })
}

