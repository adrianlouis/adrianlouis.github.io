descontoCupom = document.querySelector('#valorDesconto')
spanDesconto = document.querySelector('#spanValorDesconto')
document.getElementById('txtCupom').value = ""



function remove(i) {
    document.getElementById('tabProdutos').deleteRow(i)
    subtotal()
}

document.getElementById('txtCupom').addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    aplicarCupom()
})

function aplicarCupom(){
    let cupom = document.getElementById('txtCupom').value
    cupomMaius = cupom.toUpperCase()

    if (cupomMaius != "PROFESSORES"){
        document.getElementById('txtCupom').value = ""

    }else{
        alert('Olá Professor! Você ganhou um desconto de R$ 200,00 na sua compra!')
        spanDesconto.innerHTML = '200,00'
        document.querySelector('#spanCupomDigitado').innerHTML = spanDesconto.innerHTML
    }
    subtotal()
    console.log(cupom)
    cupom.value = ''
}

function removerDesc(){
    spanCupomDigitado.innerHTML = "0,00"
    spanDesconto.innerHTML = "0,00"
    subtotal()
}

function subtotal() {
    precos = document.querySelectorAll('#price')
    soma = 0
    
    for (var i = 0; i < precos.length; i++) {

        var kola = parseFloat(precos[i].innerHTML.replace(',', '.'))
        soma += kola
        console.log(soma.toFixed(2))
    }

    valorSubtotal.innerHTML = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })  
    numeroDoDesconto = parseFloat(spanDesconto.innerHTML)
    valTot = soma - numeroDoDesconto
    console.log(numeroDoDesconto)
    valorTotal.innerHTML = valTot.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

// AREA DE TESTES 
function testeQtd(id){
numDeProdutos = id.value
precoDoItem = id.parentNode.previousElementSibling.firstElementChild.innerHTML
spanPrecoTotal = id.parentNode.nextElementSibling.firstElementChild.innerHTML
// resultado = id.parentNode.nextElementSibling.firstElementChild.innerHTML


teste = parseFloat(precoDoItem.replace(',', '.')) * parseFloat(numDeProdutos.replace(',', '.'))
// teste = teste.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
id.parentNode.nextElementSibling.firstElementChild.innerHTML = teste.toFixed(2)
subtotal()

console.log(teste)






}

