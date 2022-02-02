const criarNovaLinha = (codigo, numero, tipo, classe, codigoSubLocal, ultimaRecarga, proximaRecarga, ultimoReteste, proximoReteste, sinalizacao, avarias) => {
    const linhaNova = document.createElement('tr')

    const conteudo = `
    <td>${codigo}</td>
    <td>${numero}</td>
    <td>${tipo}</td>
    <td>${classe}</td>
    <td>${codigoSubLocal}</td>
    <td>${ultimaRecarga}</td>
    <td>${proximaRecarga}</td>
    <td>${ultimoReteste}</td>
    <td>${proximoReteste}</td>
    <td>${sinalizacao}</td>
    <td>${avarias}</td>
    `
    linhaNova.innerHTML = conteudo
    return linhaNova
}

const cardNovo = (codigo, numero, tipo, proximaRecarga, proximoReteste) => {
    const container = document.createElement('div')
    container.classList.add('extCard')
    const template = `
    
    <div class="extCardLeft">
        <h2>Nº ${numero}</h2>
        <span class="extTipo tipoExtintor">${tipo}</span>
    </div>
    <div class="extCardRight">
        <span class="nextCharge">${proximaRecarga}</span>
        <span class="nextTest">${proximoReteste}</span>
    </div>
    <i onclick="horus(${codigo})" class="far fa-eye fSize"></i>`

    container.innerHTML = template
    return container
}

const tabela = document.querySelector('[data-tabela]')
const containerCards = document.querySelector('.containerCards')

const http = new XMLHttpRequest()

http.open('GET', 'http://ortegavan-001-site1.itempurl.com/extintor/')

http.send()

http.onload = () => {
    const data = JSON.parse(http.response)
    data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.numero, elemento.tipo, elemento.classe, elemento.codigoSubLocal, elemento.ultimaRecarga, elemento.proximaRecarga, elemento.ultimoReteste, elemento.proximoReteste, elemento.sinalizacao, elemento.avarias))
        containerCards.appendChild(cardNovo(elemento.codigo, elemento.numero, elemento.tipo, elemento.proximaRecarga, elemento.proximoReteste))
    });

    var tipo = document.querySelectorAll('.tipoExtintor')
    for (i = 0; i <= tipo.length-1; i++) {
        if (tipo[i].innerHTML == "0") {
            tipo[i].innerHTML = "AP"
        } else if (tipo[i].innerHTML == "1") {
            tipo[i].innerHTML = "CO2"
        } else {
            tipo[i].innerHTML = "PQS"
        }
    }
    
    // PROXIMA RECARGA COM DATA CONVERTIDA PARA MM/YYYY
    var proxRecarga = document.querySelectorAll('.nextCharge')
    for (i=0; i<proxRecarga.length;i++){
        var recargaString = new Date(proxRecarga[i].innerHTML).toLocaleDateString('pt-PT')
        proxRecarga[i].innerHTML = `Próx. Recarga: ${recargaString}`
    }

    // PROXIMO RETESTE COM DATA CONVERTIDA PARA MM/YYYY
    var proxReteste = document.querySelectorAll('.nextTest')
    for (i=0; i<proxReteste.length;i++){
        var retesteString = new Date(proxReteste[i].innerHTML).toLocaleDateString('pt-PT')
        proxReteste[i].innerHTML = `Próx. Reteste: ${retesteString}`
    }
}

function horus(codigo){
    const modal = document.querySelector('.modalExtFull')
    var codigoUniversal = codigo
    // let array = document.getElementsByTagName('h2')
    // console.log(array.innerHTML)

    http.open('GET', 'http://ortegavan-001-site1.itempurl.com/extintor/'+codigo)
    http.send()
    http.onload = () => {
        const data = JSON.parse(http.response)

        let ultimaRec = new Date(data.ultimaRecarga)
        ultimaRec = ultimaRec.toLocaleDateString('pt-PT').split('/').reverse().join('-')
        let ultimoRet = new Date(data.ultimoReteste)
        ultimoRet = ultimoRet.toLocaleDateString('pt-PT').split('/').reverse().join('-')
        let proxRec = new Date (data.proximaRecarga)
        proxRec = proxRec.toLocaleDateString('pt-PT').split('/').reverse().join('-')
        let proxRet = new Date (data.proximoReteste)
        proxRet = proxRet.toLocaleDateString('pt-PT').split('/').reverse().join('-')

    document.querySelector('#extintorNumero').innerHTML = data.numero;
    document.querySelector('#numeroExtintor').value = data.numero
    document.querySelector('#tipo').value = data.tipo
    document.querySelector('#local').value = data.codigoSubLocal
    document.querySelector('#ultRec').value = ultimaRec
    document.querySelector('#ultRet').value = ultimoRet
    document.querySelector('#proxRec').value = proxRec
    document.querySelector('#proxRet').value = proxRet
    document.querySelector('#avaria').innerHTML = data.avarias

    let type = document.querySelector('#tipo')
    let classeExt = document.querySelector('#classe')

    if (type.value == "0"){
        classeExt.value = "A"
    }else if (type.value == "1"){
        classeExt.value = "C"
    }else{
        classeExt.value = "B"
    }
    console.log('TIPO value: '+type.value)
   

    modal.style.top = 0;

}}

function formEdit(show, hide){
    const inputs = document.getElementsByTagName('input')
    const selects = document.getElementsByTagName('select')
    const avaria = document.querySelector('#avaria')

    for (i=0; i < inputs.length; i++){
        if (inputs[i].disabled != false){
            inputs[i].disabled = false;
        }else{
            inputs[i].disabled = true
        }
    }

    if (avaria.disabled != false){
        avaria.disabled = false
    }else{
        avaria.disabled = true
    }

    for (i=0; i < selects.length; i++){
        if (selects[i].disabled != false){
            selects[i].disabled = false
        }else{
            selects[i].disabled = true
        }
    }
    
    document.querySelector(hide).classList.add("innactive")
    document.querySelector(show).classList.remove("innactive")
}

function closeModal(){
    const modal = document.querySelector('.modalExtFull')
    modal.style.top = '-101vw';
}