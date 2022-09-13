const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    target.forEach((elem)=>{
        if((windowTop) > elem.offsetTop){
            elem.classList.add('animate')
        }else{
            elem.classList.remove('animate')
        }
    })
}

if(target.length){
    console.log(target)
    window.addEventListener('scroll', ()=>{
        animeScroll();
    })
}
