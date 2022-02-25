const container = document.querySelector('.mainContent')
let id = 1
var precoUnitario = 0
var precoFinalTotal = 0

async function getCart() {
    const response = await fetch('https://apiorganica.azurewebsites.net/Carrinho/' + id)
    const jsonBody = await response.json()
    const container = document.querySelector('.mainContent')
    let template = ''

    precoTotalCru = jsonBody.valorSubtotal

    Promise.all(jsonBody.itens.map(item => {
        precoFinalTotal += (item.produto.valor * item.quantidade)
        document.querySelector('.cartTotalPrice').innerHTML = 'Total: R$ ' + precoFinalTotal.toFixed(2)
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

    if (el.previousElementSibling.innerHTML == 0){
        el.parentNode.parentNode.parentNode.style.transition = 'all 1s' 
        el.parentNode.parentNode.parentNode.style.opacity = 1 
    }
    
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
    
    if (qtd == 1) {
        qtd = 0
        el.nextElementSibling.innerHTML = qtd
        let total = parseFloat(qtd) * price
        total = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        el.parentNode.previousElementSibling.innerHTML = total
        precoFinalTotal -= price
        document.querySelector('.cartTotalPrice').innerHTML = "Total: " + precoFinalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        el.parentNode.parentNode.parentNode.style.transition = 'all 3s' 
        el.parentNode.parentNode.parentNode.style.opacity = 0

        function removerCard(el){
            el.parentNode.parentNode.parentNode.style.display = 'none'
        }
  
        el.nextElementSibling.nextElementSibling.addEventListener('click', ()=>{clearInterval(myTime)})
       
        var myTime = setTimeout(() => {removerCard(el)}, 4000);
    } else if (qtd <= 0){
        return
    }else{
        qtd--
        el.nextElementSibling.innerHTML = qtd
        let total = parseFloat(qtd) * price
        total = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        el.parentNode.previousElementSibling.innerHTML = total
        precoFinalTotal -= price
        document.querySelector('.cartTotalPrice').innerHTML = "Total: " + precoFinalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
}

async function fetchImg(idImagem) {
    const response = await fetch('https://apiorganica.azurewebsites.net/imagens/' + idImagem)
    const jsonBd = await response.json()
    return jsonBd
}

getCart()

class ValorReal {
    constructor (inteiro){
        this._inteiro = inteiro
    }

    set inteiro(int){
        this._inteiro = `${int.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}`
    }

    get inteiro(){
        return this._inteiro
    }

    // realBr(){

    // }
}

var cinquenta = new ValorReal()
cinquenta.inteiro = 20

console.log(cinquenta.inteiro)