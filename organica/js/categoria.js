function Menu() {
    document.querySelector('.headerMenu').style.opacity = 0;
    document.querySelector('.menuModal').style.left = 0;
}
function MenuClose() {
    document.querySelector('.headerMenu').style.opacity = 1;
    document.querySelector('.menuModal').style.left = '-101vh';
}


async function carregarProdutos(){
    let params = new URLSearchParams(window.location.search)
    let id = params.get('id')
    let title = params.get('title')
    document.querySelector('.headerSpan').innerHTML = title.charAt(0).toUpperCase()+title.slice(1)
    const response = await fetch('https://apiorganica.azurewebsites.net/produtos/porcategoria/'+id)
    const jsonBody = await response.json()
    let template = ''
    let container = document.querySelector('.contCategoria')
    console.log(jsonBody)


    if (jsonBody.length <= 0){
        container.innerHTML = "Não há produtos disponíveis"
    }

    Promise.all(jsonBody.map(item =>{
        console.log(item)
        let idImagem = item.codigo
        idImagem = idImagem.toString().padStart(4, 0)
        // let extensao = item.extensao
        // console.log(extensao)
    

        let valorBRL = item.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        template = ` <div class="cardCategoria">
                <a href='detalhes.html?codProd=${item.codigo}'>
        <img src="https://white-hill-0b791be10.1.azurestaticapps.net/img/${idImagem}.jpg">
    
    <span class="catSpan">${item.titulo}</span>
    <span class="catPreco">${valorBRL}</span></a>
</div>`

container.innerHTML += template
// console.log(element.titulo)



    }))
}

async function fetchImg(idImagem) {
    const response = await fetch('https://apiorganica.azurewebsites.net/imagens/' + idImagem)
    const jsonBd = await response.json()
    return jsonBd
}