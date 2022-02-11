
//Ler cookie
function getCookie(cNome) {
    let nome = cNome + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nome) == 0) {
            return c.substring(nome.length, c.length);
        }
    }
    return "";
}
var username = getCookie('user')
var token = getCookie('token')

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
        <button id="confirmsDel" onclick="delMethod(this)" type="button">Sim
        <button id="cancelDel" onclick="cancelDelete(this)" type="button">Não 
        <button id="cancelarDeletando" type="button">Cancelar
    </div>

</div>
 `
    container.innerHTML = template
    return container
}

const containerHomeCards = document.querySelector('main')
var http = new XMLHttpRequest();
var url = "https://apiextintores.azurewebsites.net/"
http.open("GET", url + "extintor")

document.querySelector('#headerNomeUsuario').innerHTML = username

http.setRequestHeader('Authorization', 'Bearer ' + token)
http.send()
http.onload = () => {
    const data = JSON.parse(http.response)
    data.forEach(elem => {
        containerHomeCards.appendChild(homeCard(elem.numero, elem.tipo, elem.proximaRecarga, elem.proximoReteste, elem.sinalizacao))
    })

    var extTipo = document.querySelectorAll('.extType')
    for (i = 0; i < extTipo.length; i++) {
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

function rodar(elem, deg, elemS, degS) {
    elemS = elemS.nextElementSibling;
    elem.style.transform = "perspective(500px) rotateY(" + deg + ")"
    elemS.style.transform = "perspective(500px) rotateY(" + degS + ")"
}

function voltar(elem) {
    let elemPrev = elem.previousElementSibling;

    elem.style.transform = "perspective(500px) rotateY(180deg)"
    elemPrev.style.transform = "perspective(500px) rotateY(0deg)"
}

function deletarExtintor(elem) {
    for (i = 0; i < 4; i++) { elem.parentNode.children[i].style.display = "none" }
    elem.parentNode.children[4].style.display = "flex"
}

function cancelDelete(elem) {
    for (i = 0; i < 4; i++) { elem.parentNode.parentNode.children[i].style.display = 'block' }
    elem.parentNode.parentNode.children[4].style.display = 'none'
}

function delMethod(elem) {
    let numExtDel = elem.parentNode.parentNode.children[0].innerHTML
    let textoOriginal = elem.previousElementSibling.innerHTML
    let texto = elem.previousElementSibling
    elem.nextElementSibling.style.display = "none"
    elem.style.display = "none"
    elem.nextElementSibling.nextElementSibling.style.display = "flex"

    var i = 5
    texto.innerHTML = `Extintor ${numExtDel} será excluído em ${i} segundos.`

    const intervalo = setInterval(deletando, 1000)

    function deletando() {
        i--
        if (i >= 1) {
            texto.innerHTML = `Extintor ${numExtDel} será excluído em ${i} segundos.`
            elem.nextElementSibling.nextElementSibling.onclick = (event) => {
                texto.innerHTML = "Exclusão cancelada."

                elem.previousElementSibling.classList.add('cancelarDeletando')
                elem.previousElementSibling.style.transform = "scale(1.3)"
                elem.previousElementSibling.style.opacity = 0

                elem.nextElementSibling.nextElementSibling.style.display = "none"

                clearInterval(intervalo)

                setTimeout(() => {
                    texto.innerHTML = textoOriginal

                    elem.previousElementSibling.classList.remove('cancelarDeletando')
                    elem.previousElementSibling.style.transform = "scale(1)"
                    elem.previousElementSibling.style.opacity = 1

                    elem.nextElementSibling.style.display = "flex"
                    elem.style.display = "flex"
                    elem.nextElementSibling.nextElementSibling.style.display = "none"
                    for (i = 0; i < 4; i++) { event.target.parentNode.parentNode.children[i].style.display = 'block' }
                    event.target.parentNode.parentNode.children[4].style.display = 'none'
                }, 1500);
            }
        } else {
            elem.previousElementSibling.style.color = "red"
            texto.innerHTML = "Extintor "+numExtDel+" excluído."
            clearInterval(intervalo)
            elem.nextElementSibling.nextElementSibling.style.display = "none"
            elem.previousElementSibling.classList.add('cancelarDeletando')
            elem.previousElementSibling.style.transform = "scale(1.3)"
            elem.previousElementSibling.style.opacity = 0

            setTimeout(() => {
                let http = new XMLHttpRequest();
                let url = "https://apiextintores.azurewebsites.net/extintor/"
                http.open("DELETE", url+numExtDel)
                http.setRequestHeader('Authorization', 'Bearer '+token)
                http.send()
                http.onload = () => {
                    document.location.reload(true);
                }
            }, 1500);
        }
    }
}

