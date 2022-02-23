const container = document.querySelector('.mainContent')
let id = 1
var precoUnitario = 0
var precoFinalTotal = 0

async function getCart() {
    const response = await fetch('http://apiorganica.azurewebsites.net/Carrinho/' + id)
    const jsonBody = await response.json()
    const container = document.querySelector('.mainContent')
    let template = ''

    precoTotalCru = jsonBody.valorSubtotal

    Promise.all(jsonBody.itens.map(item => {
        precoFinalTotal += (item.produto.valor * item.quantidade)
        document.querySelector('.cartTotalPrice').innerHTML = 'Total: R$ ' + precoFinalTotal.toFixed(2)
        console.log(precoFinalTotal)
        let idImagem = item.imagens[0].codigo
        idImagem = idImagem.toString().padStart(4, 0)
        let extensao = item.imagens[0].extensao

        let itemQuantidade = item.quantidade
        precoUnitario = item.produto.valor

        let valorBRL = item.produto.valor.toFixed(2)

        template = ` <div class="cardCartItem">
        <img src="https://white-hill-0b791be10.1.azurestaticapps.net/img/${idImagem}${extensao}">
        <div class="cardEscritas">
            <span>${item.produto.titulo}</span>
            <span class="cartPriceItem">R$ ${valorBRL}</span>
            <div class="detQtdBtn">
            <span onclick="lessQtd(this, ${valorBRL})"><i class="fa-light fa-circle-minus"></i></span>
            <span id="detNumQtd">${itemQuantidade}</span>
            <span  onclick="addQtd(this, ${valorBRL})">  <i class="fa-light fa-circle-plus"></i></span>
            </div>
        </div>
    </div>`
        container.innerHTML += template
    }))
}

function addQtd(el, price) {
    let qtd = el.previousElementSibling.innerHTML
    qtd = parseInt(qtd)
    qtd++
    precoFinalTotal += price
    document.querySelector('.cartTotalPrice').innerHTML = "Total: " + precoFinalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    el.previousElementSibling.innerHTML = qtd
    let total = parseFloat(qtd) * price
    total = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    el.parentNode.previousElementSibling.innerHTML = total
}
function lessQtd(el, price) {
    let qtd = el.nextElementSibling.innerHTML
    qtd = parseInt(qtd)

    if (qtd == 0) {
        return
    } else {
        qtd--
        el.nextElementSibling.innerHTML = qtd
        let total = parseFloat(qtd) * price
        total = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        el.parentNode.previousElementSibling.innerHTML = total
        precoFinalTotal -= price
        document.querySelector('.cartTotalPrice').innerHTML = "Total: " + precoFinalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
}

function precoFinal() {
    let precos = document.querySelectorAll('.cartPriceItem')
    let thisprice = 0
    precos.forEach(el => {
        console.log(thisprice + parseInt(el.innerHTML))
    })
}

async function fetchImg(idImagem) {
    const response = await fetch('https://apiorganica.azurewebsites.net/imagens/' + idImagem)
    const jsonBd = await response.json()
    return jsonBd
}

getCart()