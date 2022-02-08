var http = new XMLHttpRequest();
var url = "https://apiextintores.azurewebsites.net/"

const homeCard = (numero, tipo, proximaRecarga, proximoReteste, sinalizacao) => {
    const container = document.createElement('div')
    container.classList.add('smallCard')

    var nextRec = new Date (proximaRecarga).toLocaleDateString('pt-PT')
    nextRec = nextRec.split('T')[0]

    var nextRet = new Date (proximaRecarga).toLocaleDateString('pt-PT')
    nextRet.split('T')[0]



    const template = `
  

    <div id="front" onclick="rodar(this, '180deg', this , '360deg')" class="smCard front">

    <div class="extType">
        <span>${tipo}</span>
    </div>

    <div class="extNumber">
        <h3>${numero}</h3>
        <span>${nextRec} • ${nextRet}</span>
    </div>

    <div class="extSinalizacao">
        ${sinalizacao}
    </div>
</div>

<div onclick="voltar(this)" id="back" class="smCard back">
<h3>${numero}</h3>
   <a href="cadastro.html?extN=${numero}" <i class="far fa-edit footerActive"></i></a>
    <i class="fas fa-trash-alt footerActive"></i>

    <i  class="fas fa-undo-alt footerActive"></i>


</div>
 `

    container.innerHTML = template
    return container
    
}

const containerHomeCards = document.querySelector('main')

http.open("GET", url+"extintor")

http.send()

http.onload = () => {
    const data = JSON.parse(http.response)
    console.log(data)
    data.forEach(elem => {
        // var proximaRecargaData = elem.proximaRecarga
        containerHomeCards.appendChild(homeCard(elem.numero, elem.tipo, elem.proximaRecarga, elem.proximoReteste, elem.sinalizacao))
        // console.log(proximaRecargaData)
    })

    var extTipo = document.querySelectorAll('.extType')
    for (i=0; i<extTipo.length; i++){
        console.log(extTipo[i].innerText)
        if (extTipo[i].innerText == 0){
            extTipo[i].innerText = "AP"
            extTipo[i].style.backgroundColor = "rgba(250, 223, 223, 1)"
            extTipo[i].style.color = "rgba(225, 78, 78, 1)"
        }else if (extTipo[i].innerText == "1") {
            extTipo[i].innerText = "PQS"
            extTipo[i].style.backgroundColor = "rgba(228, 246, 252, 1)"
            extTipo[i].style.color = "rgba(73, 173, 204, 1)"
        }else {
            extTipo[i].innerHTML = "CO²"
        }
    }

    var extSinal = document.querySelectorAll('.extSinalizacao')
    for (i=0; i < extSinal.length; i++){
        if (extSinal[i].innerText == 0){
            extSinal[i].innerText = "OK"
            extSinal[i].style.color = "rgba(73, 173, 204, 1)"
        }else if(extSinal[i].innerText == 1){
            extSinal[i].innerText = "Placa quebrada"
        }else{
            extSinal[i].innerText = "Sem placa"
        }
    }
}

function footerChoice(n, p) {
    let atualAtivo = document.querySelector('.footerActive')
    let dot = document.querySelector('.footerDot')
    atualAtivo.classList.remove('footerActive')
    n.classList.add('footerActive')
    dot.style.left = p;
}

function mousePos(e, elem){
    //clicar me da a posição X do mouse
    var posX = e.clientX
    console.log("POSICAO X: "+posX)

    elem.addEventListener('mousemove', (ev) => {
        console.log(ev.movementX)
        document.querySelector('.teste').style.left = ""+(e.clientX - ev.clientX / 10)+"px";
        // var posXFinal = e.clientX - ev.clientX;
        if (elem.mouseover == true){
            console.log('cancel')
            return
        }  
    })
}

function testeScroll(e){
console.log(e.clientX)
}

function rodar(elem, deg, elemS, degS){
    elemS = elemS.nextElementSibling; 
    elem.style.transform = "perspective(500px) rotateY("+deg+")"
    elemS.style.transform = "perspective(500px) rotateY("+degS+")"
}

function teste(){
    console.log('back event')
}

function voltar(elem){
    let elemPrev = elem.previousElementSibling;

    elem.style.transform = "perspective(500px) rotateY(180deg)"
    elemPrev.style.transform = "perspective(500px) rotateY(0deg)"
}