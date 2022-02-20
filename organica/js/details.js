async function season(){
    const response = await fetch('https://apiorganica.azurewebsites.net/produto/tanaepoca')
    const jsonBody = await response.json()
    let params = new URLSearchParams (window.location.search)
    let codProd = params.get('codProd')    
    let imgFetching = await fetchImg(codProd)
    let imgCodigo = imgFetching[0].codigo.toString().padStart(4,0)
    let real$ =  jsonBody[codProd - 1].valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    document.querySelector('.detNomeProd').innerHTML = jsonBody[codProd - 1].titulo
    document.querySelector('.detPrecoProd').innerHTML = real$
    document.querySelector('.detDescProd').innerHTML = jsonBody[codProd - 1].descricao
    imgFourNumber = jsonBody[codProd - 1].codigo.toString().padStart(4, 0)
    document.querySelector('#detalheImg').src = 'https://white-hill-0b791be10.1.azurestaticapps.net/img/'+imgCodigo+imgFetching[0].extensao
}

async function fetchImg(id) {
    const response = await fetch('https://apiorganica.azurewebsites.net/imagem/' + id)
    const jsonBody = await response.json()
    return jsonBody
}