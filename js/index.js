

function Menu() {
    document.querySelector('.headerMenu').style.opacity = 0;
    document.querySelector('.menuModal').style.left = 0;
}
function MenuClose() {
    document.querySelector('.headerMenu').style.opacity = 1;
    document.querySelector('.menuModal').style.left = '-101vh';
}

const requisicao = fetch('https://apiorganica.azurewebsites.net/categorias').then(response => {
    return response.json()
}).then(jsonBody => {


    const containerCategoria = document.querySelector('.containerCategoria')
    template = ''
    for (i = 0; i < jsonBody.length; i++) {
        template = `
        <a href="categoria.html?id=${jsonBody[i].ordem}&title=${jsonBody[i].titulo}"<div class="cardCategoria">
                        ${jsonBody[i].icone}
                        <span class="contCatSpan">${jsonBody[i].titulo}</span>
                    </div>`
        containerCategoria.innerHTML += template
    }
})

async function fetchSeason() {
    const response = await fetch('https://apiorganica.azurewebsites.net/produtos/tanaepoca')
    const jsonBody = await response.json()
    return jsonBody
}

async function fetchImg(id) {
    const response = await fetch('https://apiorganica.azurewebsites.net/imagens/' + id)
    const jsonBody = await response.json()
    return jsonBody
}

async function loadSeason() {
    let resp = await fetchSeason()
    const contSeason = document.querySelector('.containerInner')

    resp.forEach(async element => {
        let respImg = await fetchImg(element.codigo)
        let idImg = respImg[0].codigo.toString().padStart(4, 0)
        contSeason.innerHTML += `
            <div class="cardEpoca">
            <a href="detalhes.html?codProd=${element.codigo}">
            <img src="https://white-hill-0b791be10.1.azurestaticapps.net/img/${idImg}${respImg[0].extensao}">
            <span>${element.titulo}</span>
            </a>
            </div>`
    });

}




