const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'
const imagens = document.querySelectorAll('.animeUp')


const secUm = document.querySelector('#secUm')
const secDois = document.querySelector('#secDois')
const secTres = document.querySelector('#secTres')
const secQuatro = document.querySelector('#secQuatro')
const secCinco = document.querySelector('#secCinco')
const secSeis = document.querySelector('#secSeis')
const btn = document.querySelectorAll('.btnLink')
const select = document.querySelector('.esquemasCores')
const mask = document.querySelector('.mask')
const links = document.querySelectorAll('a')
const header = document.querySelector('.listContainer')
const footer = document.querySelector('footer')

const root = document.querySelector(':root')

function animeScroll(){

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

function schema(){
    if (select.value == 1){
        root.style.setProperty('--corUm', '#6b4b3e' )
        root.style.setProperty('--corDois', '#496f5d')
        root.style.setProperty('--corTres', '#4c9f70')
        root.style.setProperty('--corQuatro', '#e2aedd')
        root.style.setProperty('--corCinco', '#ebcbf4')
    }else if (select.value == 2){
        root.style.setProperty('--corUm', '#2e0e02')
        root.style.setProperty('--corDois', '#581908')
        root.style.setProperty('--corTres', '#983628')
        root.style.setProperty('--corQuatro', '#e2aedd')
        root.style.setProperty('--corCinco', '#F5DD90')
    }else if (select.value == 3){
        root.style.setProperty('--corUm', '#6b4b3e')
        root.style.setProperty('--corDois', '#18206f')
        root.style.setProperty('--corTres', '#17255a')
        root.style.setProperty('--corQuatro', '#e2aedd')
        root.style.setProperty('--corCinco', '#ebcbf4')
    }else if(select.value == 4){
        root.style.setProperty('--corUm', '#6b4b3e')
        root.style.setProperty('--corDois', '#087e8b')
        root.style.setProperty('--corTres', '#07004d')
        root.style.setProperty('--corQuatro', '#e2aedd')
        root.style.setProperty('--corCinco', '#ebcbf4')
    }else if(select.value == 5){
        root.style.setProperty('--corUm', '#391669')
        root.style.setProperty('--corDois', '#fff9f9')
        root.style.setProperty('--corTres', '#8a7876')
        root.style.setProperty('--corQuatro', '#F68E5F')
        root.style.setProperty('--corCinco', '#b084cc')
    }else if (select.value == 6){
        root.style.setProperty('--corUm', '#07004D')
        root.style.setProperty('--corDois', '#2D82B7')
        root.style.setProperty('--corTres', '#42E2B8')
        root.style.setProperty('--corQuatro', '#F3DFBF')
        root.style.setProperty('--corCinco', '#ebcbf4')
        
    }else if (select.value == 7){
        root.style.setProperty('--corUm', 'rgb(106, 2, 2)')
        root.style.setProperty('--corDois', '#2D82B7')
        root.style.setProperty('--corTres', '#42E2B8')
        root.style.setProperty('--corQuatro', '#F3DFBF')
        root.style.setProperty('--corCinco', '#ebcbf4')

    }

}

function choose(variavel, elem) {
    root.style.setProperty(variavel, elem.value)
    console.log(variavel)
    elem.nextElementSibling.innerText = elem.value
}

function schemaa() {

    if (select.value == 1){
        secUm.classList.add('secUmSelUm') 
        secDois.classList.add('secDoisSelUm')
        btn[0].classList.add('btnSelUm')
        btn[1].classList.add('btnSelUm')
        secTres.classList.add('secUmSelUm')
        mask.classList.add('maskSelUm')
        secQuatro.classList.add('secQuatroSelUm')
        secCinco.classList.add('secCincoSelUm')
        secSeis.classList.add('secSeisSelUm')
        header.classList.add('headerSelUm')
        footer.classList.add('footerSelUm')
    
        links.forEach((link)=>{
            link.classList.add('linksSelUm')
        })

    }else if (select.value == 2){
        secUm.classList.add('secUmSelDois')
    }
    
}



