var headerMenu = document.querySelector('.headerContainerMenu')
var btnHeaderMenu = document.querySelector('.headerMenu')





function abrirMenu() {
    headerMenu.style.left = '0vw'
    btnHeaderMenu.style.opacity = 0
    headerMenu.style.opacity = 1
}

function fecharMenu() {
    headerMenu.style.left = '-100vw'
    btnHeaderMenu.style.opacity = 1
    headerMenu.style.opacity = 0
}

function amostrarUndAnotacoes(id) {
    var undAnotacoes = document.querySelector('.undAnotacoes'+id)
    var iconeAnotacao = document.querySelector('#amostrarUndAnotacao'+id)
    var iconeAnotacaoVoltar = document.querySelector('#amostrarVoltar'+id)

    undAnotacoes.style.display = 'flex'
    iconeAnotacao.style.display = 'none'
    iconeAnotacaoVoltar.style.display = 'block'
}

function fecharAnotacao(id){
    var undAnotacoes = document.querySelector('.undAnotacoes'+id)
    var iconeAnotacao = document.querySelector('#amostrarUndAnotacao'+id)
    var iconeAnotacaoVoltar = document.querySelector('#amostrarVoltar'+id)

    iconeAnotacaoVoltar.style.display = 'none'
    undAnotacoes.style.display = 'none'
    iconeAnotacao.style.display = 'block'
}


//GET para listar dados de Controle de Prestadores
async function listar() {
    const response = await fetch('https://patiocgcontrole.azurewebsites.net/api/visitante')
    const jsonBody = await response.json()

    container = document.querySelector('#mainContainer')
    container.innerHTML = ''
    let i = 0

    jsonBody.forEach(async elemento => {
        let dataDia = new Date(elemento.dia).getUTCDate()
        dataDia < 10 ? dataDia = `0${dataDia}` : dataDia = dataDia

        let dataMes = new Date(elemento.dia).getUTCMonth()+1
        dataMes < 10 ? dataMes = `0${dataMes}` : dataMes = dataMes

        let dataAno = new Date(elemento.dia).getUTCFullYear()

        container.innerHTML += `

        <div id='undPrest${i}' class="undPrestador flexCenter">

                <div class="undPrestRows flexCenter">

                    <div class="flexCenter undPrestRowsDivs">
                        <span>Data</span>
                        <span>${dataDia}-${dataMes}-${dataAno}</span>
                    </div>

                    <div class="flexCenter undPrestRowsDivs">
                        <span>Hora</span>
                        <span>${elemento.hora}</span>
                    </div>

                </div>

                <div class="flexCenter undPrestRows">

                    <div class="flexCenter undPrestRowsDivs">

                        <span>Empresa</span>
                        <span>${elemento.empresa}</span>

                    </div>

                    <div class="flexCenter undPrestRowsDivs">

                        <span>Serviço</span>
                        <span>${elemento.servico}</span>

                    </div>

                </div>

                <div class="flexCenter undPrestRows">

                    <div class="flexCenter undPrestRowsDivs">

                        <span>Colaborador</span>
                        <span>${elemento.colaborador}</span>

                    </div>

                    <div class="flexCenter undPrestRowsDivs">

                        <span>Matrícula</span>
                        <span>${elemento.matricula}</span>

                    </div>

                </div>

                <div class="flexCenter undPrestRows">

                    <div class="flexCenter undPrestRowsDivs">

                        <span>Função</span>
                        <span>${elemento.funcao}</span>

                    </div>

                    <div class="flexCenter undPrestRowsDivs">

                        <span>Funcionário</span>
                        <span>${elemento.funcionario}</span>

                    </div>

                </div>

                <div class="flexCenter undPrestRows undAnotacoes undAnotacoes${elemento.id}">
                    <div class="flexCenter undPrestRowsDivs">
                        <span>Anotações</span>
                        <textarea name="" id="" cols="30" rows="10">${elemento.anotacao}</textarea>
                    </div>
                </div>

                <div class="undPrestadorAcoes flexCenter">
                    <i id="amostrarUndAnotacao${elemento.id}" class="fas fa-eye amostrarUndAnotacao" onclick="amostrarUndAnotacoes(${elemento.id})"></i>
                    <i id="amostrarVoltar${elemento.id}" class="fas fa-arrow-left" onclick="fecharAnotacao(${elemento.id})"></i>
                    <i class="fas fa-pen"></i>
                </div>


            </div>


            `
            document.querySelector('#amostrarVoltar'+elemento.id).style.display = 'none'
        i += 1
    })
}