var http = new XMLHttpRequest();
var url = "https://apiextintores.azurewebsites.net/"

//Ler cookie
function getCookie(cNome){
    let nome = cNome + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (i = 0; i < ca.length; i++){
        let c = ca[i];
        while (c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if (c.indexOf(nome) == 0){
            return c.substring(nome.length, c.length);
        }
    }
    return "";
}


const homeCard = (numero, tipo, proximaRecarga, proximoReteste, sinalizacao) => {
    const container = document.createElement('div')
    container.classList.add('smallCard')

    var nextRec = new Date(proximaRecarga).toLocaleDateString('pt-PT')
    nextRec = nextRec.split('T')[0]

    var nextRet = new Date(proximaRecarga).toLocaleDateString('pt-PT')
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

<div  id="back" class="smCard back">
<h3>${numero}</h3>
    <a href="cadastro.html?extN=${numero}" <i class="far fa-edit footerActive"></i></a>
    <i onclick="deletarExtintor(this)" class="fas fa-trash-alt footerActive"></i>
    <i onclick="voltar(this.parentNode)" class="fas fa-undo-alt footerActive"></i>

    <div id="deletar">
        <span>Deseja excluir o extintor ${numero}?</span>
        <button id="confirmsDel" type="button">Sim
        <button onclick="cancelDelete(this)" type="button">Não 
    </div>

</div>
 `

    container.innerHTML = template
    return container

}

const containerHomeCards = document.querySelector('main')

http.open("GET", url + "extintor")

let username = getCookie('user')
let token = getCookie('token')
document.querySelector('#headerNomeUsuario').innerHTML = username
http.setRequestHeader('Authorization', 'Bearer '+token)




http.send()

http.onload = () => {
    const data = JSON.parse(http.response)
    // console.log(data)
    data.forEach(elem => {
        // var proximaRecargaData = elem.proximaRecarga
        containerHomeCards.appendChild(homeCard(elem.numero, elem.tipo, elem.proximaRecarga, elem.proximoReteste, elem.sinalizacao))
        // console.log(proximaRecargaData)
    })

    var extTipo = document.querySelectorAll('.extType')
    for (i = 0; i < extTipo.length; i++) {
        // console.log(extTipo[i].innerText)
        if (extTipo[i].innerText == 0) {
            extTipo[i].innerText = "AP"
            extTipo[i].style.backgroundColor = "rgba(250, 223, 223, 1)"
            extTipo[i].style.color = "rgba(225, 78, 78, 1)"
        } else if (extTipo[i].innerText == "1") {
            extTipo[i].innerText = "PQS"
            extTipo[i].style.backgroundColor = "rgba(228, 246, 252, 1)"
            extTipo[i].style.color = "rgba(73, 173, 204, 1)"
        } else {
            extTipo[i].innerHTML = "CO²"
        }
    }

    var extSinal = document.querySelectorAll('.extSinalizacao')
    for (i = 0; i < extSinal.length; i++) {
        if (extSinal[i].innerText == 0) {
            extSinal[i].innerText = "OK"
            extSinal[i].style.color = "rgba(73, 173, 204, 1)"
        } else if (extSinal[i].innerText == 1) {
            extSinal[i].innerText = "Placa quebrada"
        } else {
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

function mousePos(e, elem) {
    //clicar me da a posição X do mouse
    var posX = e.clientX
    // console.log("POSICAO X: " + posX)

    elem.addEventListener('mousemove', (ev) => {
        // console.log(ev.movementX)
        document.querySelector('.teste').style.left = "" + (e.clientX - ev.clientX / 10) + "px";
        // var posXFinal = e.clientX - ev.clientX;
        if (elem.mouseover == true) {
            // console.log('cancel')
            return
        }
    })
}

function testeScroll(e) {
    // console.log(e.clientX)
}

function rodar(elem, deg, elemS, degS) {
    elemS = elemS.nextElementSibling;
    elem.style.transform = "perspective(500px) rotateY(" + deg + ")"
    elemS.style.transform = "perspective(500px) rotateY(" + degS + ")"
}

function teste() {
    // console.log('back event')
}

function voltar(elem) {
    let elemPrev = elem.previousElementSibling;

    elem.style.transform = "perspective(500px) rotateY(180deg)"
    elemPrev.style.transform = "perspective(500px) rotateY(0deg)"
}

function deletarExtintor(elem) {
    for (i=0; i < 4; i++){elem.parentNode.children[i].style.display= "none"}
    elem.parentNode.children[4].style.display= "flex"
}

function cancelDelete(elem){
    for (i = 0; i <4; i++){elem.parentNode.parentNode.children[i].style.display = 'block'}
    elem.parentNode.parentNode.children[4].style.display = 'none'
}