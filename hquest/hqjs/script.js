let armas = [
    {
        nome: 'Adaga', at: '1', df: '0', mt: '0', preco: '100', img: 'img/adaga.png', texto: 'Esta Adaga pode ser lançada em um inimigo que você esteja vendo, e causa 1d de dano. Você pode recuperar esta adaga se o inimigo morrer.'
    }, {
        nome: 'Lança', at: '2', df: '1', mt: '0', preco: '250', img: 'img/lanca.png', texto: 'Esta lança causa 2d de dano e pelo seu tamanho, pode atacar em diagonal, além de poder ser lançada no inimigo.'
    },{
        nome: 'Varinha Mágica', at: '1', df: '0', mt: '0', preco: '200', img: 'img/varinhaMagica.jpg', texto: 'Esta varinha mágica permite o mago usar duas magias diferentes no mesmo turno ao invés de apenas uma.'
    }
]
let armor = [
    {
        nome: 'Cota de Malha de Ferro ', at: '0', df: '1', mt: '0', preco: '500', img: 'img/lightarmor.png', texto: 'Esta armadura leve de metal concede 1d de defesa. Pode ser combinado com elmo e/ou escudo. Não pode ser usado por magos.'
    },{
        nome: 'Cota de Malha de Aço', at: '0', df: '2', mt: '0', preco: '750', img: 'img/lightarmor.png', texto: 'Esta armadura de metal concede 2d de defesa. Pode ser combinado com elmo e/ou escudo. Não pode ser usado por magos.'

    },{
        nome: 'Cota mágica', at: '0', df: '1', mt: '0', preco: '300', img: 'img/wzCloak.jpg', texto: 'Esta cota mágica é coberta de runas místicas, protegendo o mago com 1d de defesa a mais.'
    }
]
let artefatos = [
    {
        nome: 'Talismã da Tradição', at: '0', df: '0', mt: '1', preco: '300', img: 'img/talismanLore.jpg', texto: 'Este medalhão mágico aumenta a sua Mentalidade em 1 ponto pelo tempo que ele estiver equipado.'
    }
]
let classStats = [
    {
        move: '7', attack: '2', defense: '1', mind: '4', hp: '6'
    },
    {
        move: '8', attack: '1', defense: '2', mind: '5', hp: '5'
    },{
        move: '7', attack: '3', defense: '2', mind: '2', hp: '6'
    }
]

function render() {
    let templateArea = document.getElementById('containerCards')
    let templateAreaArmor = document.getElementById('containerCardsArmor')
    let containerArtefatos = document.getElementById('containerArtefatos')

    let template2Render = "";
    let template4Armor = '';
    let templateArtefatos = "";

    for (let i = 0; i < artefatos.length; i++) {
        const tempArtef = artefatos[i];


        templateArtefatos += ` <div class="card">

    <div class="nome">
        <span class="cardName">${tempArtef.nome}</span>

    </div>
    <div class="imagem">
        <img src="${tempArtef.img}">

    </div>
    <div class="texto">
        <span>
            ${tempArtef.texto}
        </span>

    </div>
    <div class="botoes">
        <div class="atributos">
            <i class="fas fa-fist-raised">${tempArtef.at}</i>
            <i class="fas fa-shield-alt">${tempArtef.df}</i>
            <i class="fas fa-brain">${tempArtef.mt}</i>
        </div>
        
        <i class="fas fa-coins">${tempArtef.preco}</i>
        <!-- <i id="notlike" class="far fa-heart"></i> -->
        <!-- <i id="like" class="fas fa-heart"></i> -->
    </div>
</div>`}

    containerArtefatos.innerHTML = templateArtefatos


    for (let i = 0; i < armor.length; i++) {
        const tempArmor = armor[i];


        template4Armor += ` <div class="card">

    <div class="nome">
        <span class="cardName">${tempArmor.nome}</span>

    </div>
    <div class="imagem">
        <img src="${tempArmor.img}">

    </div>
    <div class="texto">
        <span>
            ${tempArmor.texto}
        </span>

    </div>
    <div class="botoes">
        <div class="atributos">
            <i class="fas fa-fist-raised">${tempArmor.at}</i>
            <i class="fas fa-shield-alt">${tempArmor.df}</i>
            <i class="fas fa-brain">${tempArmor.mt}</i>
        </div>
        
        <i class="fas fa-coins">${tempArmor.preco}</i>
        <!-- <i id="notlike" class="far fa-heart"></i> -->
        <!-- <i id="like" class="fas fa-heart"></i> -->
    </div>
</div>`}

    templateAreaArmor.innerHTML = template4Armor



    for (let i = 0; i < armas.length; i++) {
        const temp = armas[i];


        template2Render += ` <div class="card">

    <div class="nome">
        <span class="cardName">${temp.nome}</span>

    </div>
    <div class="imagem">
        <img src="${temp.img}">

    </div>
    <div class="texto">
        <span>
            ${temp.texto}
        </span>

    </div>
    <div class="botoes">
        <div class="atributos">
            <i class="fas fa-fist-raised">${temp.at}</i>
            <i class="fas fa-shield-alt">${temp.df}</i>
            <i class="fas fa-brain">${temp.mt}</i>
        </div>
        
        <i class="fas fa-coins precoItem">${temp.preco}</i>
        <!-- <i id="notlike" class="far fa-heart"></i> -->
        <!-- <i id="like" class="fas fa-heart"></i> -->
    </div>
</div>`}

    templateArea.innerHTML = template2Render


}


var toggle = 0;
function menuFooter() {
    const menuIcon = document.querySelector('footer')

    if (toggle == 0) {
        menuIcon.style.transform = 'translate(0, -150px)'
        toggle = 1
    } else {
        menuIcon.style.transform = 'translate(0, 0px)'
        toggle = 0

    }

}




function cards(id, name){
    document.querySelector('.headSpan').innerHTML = `${name}`
    document.querySelector('#containerCards').style.display = "none"
    document.querySelector('#containerCardsArmor').style.display = "none"
    document.querySelector('#containerArtefatos').style.display = "none"
    
    document.querySelector(id).style.display = "flex"
}

function playerHide(){
    document.querySelector('#player').style.transform = "translate(0, -75px)"
}
function playerShow(){
    document.querySelector('#player').style.transform = "translate(0, 0)"
}

var toggle2 = 0

function arrows(tgl, tgl2){
    
    if (toggle2 !== 0){
        document.querySelector(tgl).style.display = 'none'
        document.querySelector(tgl2).style.display = 'block'
        toggle2 = 0
        playerShow()
    }else{
        document.querySelector(tgl).style.display = 'block'
        document.querySelector(tgl2).style.display = 'none'
        toggle2 = 1
        playerHide()
    }
}

function testeClean(id){
    let wlppr = document.querySelector('#headerWlppr')
    let sexo = document.querySelector('#sexo').value
    if (id == 'necro'){
        wlppr.setAttribute('src', `img/classes/necro${sexo}.png`)
        document.querySelector('.stats').innerHTML= ` <div class="stats">
        <i class="fas fa-arrows-alt"> ${classStats[0].move}</i>
        <i class="fas fa-fist-raised"> ${classStats[0].attack}</i>
        <i class="fas fa-shield-alt"> ${classStats[0].defense}</i>
        <i class="fas fa-brain"> ${classStats[0].mind}</i>
        <i class="fas fa-heartbeat"> ${classStats[0].hp}</i>    
    </div>`
    }else if (id == 'mage'){
        wlppr.setAttribute('src', `img/classes/wizard${sexo}.png`)
        document.querySelector('.stats').innerHTML= ` <div class="stats">
        <i class="fas fa-arrows-alt"> ${classStats[1].move}</i>
        <i class="fas fa-fist-raised"> ${classStats[1].attack}</i>
        <i class="fas fa-shield-alt"> ${classStats[1].defense}</i>
        <i class="fas fa-brain"> ${classStats[1].mind}</i>
        <i class="fas fa-heartbeat"> ${classStats[1].hp}</i>
    </div>`
    }else if (id == 'barbaro'){
        wlppr.setAttribute('src', `img/classes/barbaro${sexo}.png`)
        document.querySelector('.stats').innerHTML= ` <div class="stats">
        <i class="fas fa-arrows-alt"> ${classStats[2].move}</i>
        <i class="fas fa-fist-raised"> ${classStats[2].attack}</i>
        <i class="fas fa-shield-alt"> ${classStats[2].defense}</i>
        <i class="fas fa-brain"> ${classStats[2].mind}</i>
        <i class="fas fa-heartbeat"> ${classStats[2].hp}</i>
    </div>`
    }
    else{
        return
    }
}
function change(classe){
return classe = document.querySelector('#selectClass').value
}

function bag(){
    document.querySelector('#bag').style.left= 0;
}

function fecharBag(){
    document.querySelector('#bag').style.left= '-101vw';
}

function scaleIt(){
    
}

function itemClose(arrow, id){
    let flecha = arrow;

    if (flecha.style.transform !== 'rotate(180deg)'){
        flecha.style.transform = 'rotate(180deg)'
        document.querySelector(id).style.maxHeight = '0px'
    }else{
        arrow.style.transform = 'rotate(0deg)'
        document.querySelector(id).style.maxHeight = '1000px'
    }
}

function modalMenu(value, hide, show){
    document.querySelector(hide).style.opacity = '0'
    document.querySelector(show).style.opacity = '1'
    document.querySelector('.modalMenu').style.left = value
}

// var container = document.querySelector('.itemRow').style.opacity = '0';

// document.querySelector()
function buzzOff(e){
    let elem = document.querySelector(e)
    // elem.style.opacity = 1;

    console.log(elem.style.opacity)
    if (elem.style.opacity != 0 ){
        elem.style.opacity = 0;
       
        console.log('case = 1')
    }else{
        console.log('case = 2')
        elem.style.opacity = 1;
    
    }


}

