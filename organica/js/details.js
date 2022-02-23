
function Menu() {
    document.querySelector('.headerMenu').style.opacity = 0;
    document.querySelector('.menuModal').style.left = 0;
}
function MenuClose() {
    document.querySelector('.headerMenu').style.opacity = 1;
    document.querySelector('.menuModal').style.left = '-101vh';
}


async function season() {
    const response = await fetch('https://apiorganica.azurewebsites.net/produtos/tanaepoca')
    const jsonBody = await response.json()
    let params = new URLSearchParams(window.location.search)
    let codProd = params.get('codProd')
    let imgFetching = await fetchImg(codProd)
    let imgCodigo = imgFetching[0].codigo.toString().padStart(4, 0)
    let real$ = jsonBody[codProd - 1].valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    document.querySelector('.detNomeProd').innerHTML = jsonBody[codProd - 1].titulo
    document.querySelector('.detPrecoProd').innerHTML = real$
    document.querySelector('.detDescProd').innerHTML = jsonBody[codProd - 1].descricao
    imgFourNumber = jsonBody[codProd - 1].codigo.toString().padStart(4, 0)
    document.querySelector('#detalheImg').src = 'https://white-hill-0b791be10.1.azurestaticapps.net/img/' + imgCodigo + imgFetching[0].extensao
}

async function fetchImg(id) {
    const response = await fetch('https://apiorganica.azurewebsites.net/imagens/' + id)
    const jsonBody = await response.json()
    return jsonBody
}

function itemLike(el, toogle) {
    let tg = toogle
    if (tg == 0) {
        el.style.display = 'none'
        el.nextElementSibling.style.display = 'flex'
    } else {
        el.style.display = 'none'
        el.previousElementSibling.style.display = 'flex'
    }
}

function addQtd() {
    let qtd = document.querySelector('#detNumQtd').innerHTML
    qtd = parseInt(qtd)
    qtd++
    document.querySelector('#detNumQtd').innerHTML = qtd
}
function lessQtd() {
    let qtd = document.querySelector('#detNumQtd').innerHTML
    qtd = parseInt(qtd)
    if(qtd == 0){
        return
    }else{
        qtd--
        document.querySelector('#detNumQtd').innerHTML = qtd
    }
}

function remove() {
    localStorage.removeItem('item')
}