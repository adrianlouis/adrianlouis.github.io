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

//criar novo registro em Controle de Prestadores
function novoRegPrest(){
    container = document.querySelector('#mainContainer')
    container.innerHTML = ''
    iconUndo = document.querySelector('#addRegPrestUndo')
    iconAdd = document.querySelector('#addRegPrestNew')

    iconAdd.style.opacity = '0'
    setTimeout(() => {
        iconAdd.style.display = 'none'
        iconUndo.style.display = 'block'
        setTimeout(() => {
            iconUndo.style.opacity = '1'
        }, 10);
    }, 500);

    container.innerHTML = `
    <div class="undPrestador flexCenter">
                <span class="prestadorAddTitulo">Novo Registro</span>
                
                <label for="data">Data</label>
                <input id="data" type="date">
                
                <label for="hora">Hora</label>
                <input id="hora" type="time" >
                
                <label for="empresa">Empresa</label>
                <input id="empresa" placeholder="Ex.: Light..." type="text">
                
                <label for="servico">Serviço</label>
                <input id="servico" placeholder="Ex.: Religação..."type="text">

                <label for="colaborador">Colaborador</label>
                <input id="colaborador" type="text">

                <label for="matricula">Matrícula</label>
                <input id="matricula" placeholder="Matrícula/documento..." type="text">

                <label for="funcao">Função</label>
                <select name="funcao" id="funcao">
                    <option value="Bombeiro Civil">Bombeiro Civil</option>
                    <option value="Manutenção">Manutenção</option>
                </select>

                <label for="funcionario">Funcionário</label>
                <input type="text" placeholder="Quem acompanhou..." id="funcionario">

                <label for='anotacao'>Anotações</label>
                <textarea name="anotacao" id="anotacao" cols="30" rows="10" placeholder="Opcional..."></textarea>



               <div>
                   <button type="button" onclick="save()">Salvar</button>
                   <button type="button" onclick="addCancel()">Cancelar</button>
               </div>

            </div>

    `
}

//SALVAR o registro de Controle de Prestadores
function save() {

    data = document.querySelector('#data').value

    hora = document.querySelector('#hora').value
    empresa = document.querySelector('#empresa').value
    servico = document.querySelector('#servico').value
    colaborador = document.querySelector('#colaborador').value
    matricula = document.querySelector('#matricula').value
    funcao = document.querySelector('#funcao').value
    funcionario = document.querySelector('#funcionario').value
    anotacao = document.querySelector('#anotacao').value

    if (data == 'Invalid Date' || hora == '' || empresa == '' || servico == '' || colaborador == '' || funcao == '' || funcionario == '' ||
        matricula == '' || funcionario == '') {
        alert('Com exceção do campo de Anotações, não pode haver campos em branco.')
    } else {
        async function postando() {

            // console.log('salvar nova data: '+ data)

            const obj = {
                dia: String(data),
                hora: String(hora),
                empresa: String(empresa),
                servico: String(servico),
                colaborador: String(colaborador),
                matricula: String(matricula),
                funcao: String(funcao),
                funcionario: String(funcionario),
                anotacao: String(anotacao)
            }

            console.log(obj.dia)

            const response = await fetch("https://patiocgcontrole.azurewebsites.net/api/visitante", {
                method: "POST",
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            })

        }

        postando()

        setTimeout(() => {
            addCancel()
        }, 1000);
    }
}

function addCancel(){
    container = document.querySelector('#mainContainer')
    container.innerHTML = ''

    iconUndo = document.querySelector('#addRegPrestUndo')
    iconAdd = document.querySelector('#addRegPrestNew')

    iconUndo.style.opacity = '0'
    setTimeout(() => {
        iconUndo.style.display = 'none'
        iconAdd.style.display = 'block'
        setTimeout(() => {
            iconAdd.style.opacity = '1'
        }, 10);
    }, 500);

    listar()
}