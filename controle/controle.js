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
    var undAnotacoes = document.querySelector('.undAnotacoes' + id)
    var iconeAnotacao = document.querySelector('#amostrarUndAnotacao' + id)
    var iconeAnotacaoVoltar = document.querySelector('#amostrarVoltar' + id)

    undAnotacoes.style.display = 'flex'
    iconeAnotacao.style.display = 'none'
    iconeAnotacaoVoltar.style.display = 'block'
}

function fecharAnotacao(id) {
    var undAnotacoes = document.querySelector('.undAnotacoes' + id)
    var iconeAnotacao = document.querySelector('#amostrarUndAnotacao' + id)
    var iconeAnotacaoVoltar = document.querySelector('#amostrarVoltar' + id)

    iconeAnotacaoVoltar.style.display = 'none'
    undAnotacoes.style.display = 'none'
    iconeAnotacao.style.display = 'block'
}

function detalhesCard(id, elem) {
    // let anot = document.querySelector('#undPrest' + id).lastElementChild
    // let textarea = document.querySelector('#anot' + id)
    // let elemento = document.querySelector('#undPrest' + id).firstElementChild.firstElementChild.nextElementSibling

    // if (anot.style.display == 'flex') {

    //     elem.style.height = 'unset'
    //     anot.style.display = 'none'
    //     elemento.style.display = 'none'

    // } else {
    //     anot.style.opacity = 1
    //     elemento.style.opacity = 1
    //     anot.style.display = 'flex'

    //     if (textarea.value !== '') {
    //         textarea.style.display = 'flex'
    //     }else{
    //         textarea.style.display = 'none'
    //     }

    //     elemento.style.display = 'flex'
    // }

    let detalhes = document.querySelector('#card' + id)
    let textArea = document.querySelector('#textArea' + id)

    if (detalhes.style.display == 'flex') {
        detalhes.style.display = 'none'
    } else {
        detalhes.style.display = 'flex'

        if (textArea.value !== '') {
            textArea.style.display = 'flex'
        } else {
            textArea.style.display = 'none'
        }
    }

}

//GET para listar dados de Controle de Prestadores
async function listar() {
    const response = await fetch('https://patiocgcontrole.azurewebsites.net/api/visitante')
    const jsonBody = await response.json()

    container = document.querySelector('#mainContainer')
    container.innerHTML = "CARREGANDO..."
    let i = 0
    let res = ''

    jsonBody.forEach(async elemento => {
        let dataDia = new Date(elemento.dia).getUTCDate()
        dataDia < 10 ? dataDia = `0${dataDia}` : dataDia = dataDia

        let dataMes = new Date(elemento.dia).getUTCMonth() + 1
        dataMes < 10 ? dataMes = `0${dataMes}` : dataMes = dataMes

        let dataAno = new Date(elemento.dia).getUTCFullYear()

        let horario = elemento.hora.slice(0, 5)

        res += `
        <div id='undPrest${elemento.id}' onclick="detalhesCard(${elemento.id}, this)" class="undPrestador flexCenter">

            <div class="undPrestRows flexCenter">

                <div class="cardLinha flexCenter">

                    <div class="flexCenter undPrestRowsDivs">
                        <span>${dataDia}-${dataMes}-${dataAno}</span>
                        <span>${horario}</span>
                    </div>

                    <div class="flexCenter undPrestRowsDivs">
                        <span>${elemento.colaborador}</span>
                        <span>${elemento.empresa} - ${elemento.servico}</span>
                    </div>

                </div>

                <div id='card${elemento.id}' class='hide flexCenter'>

                    <div class="cardLinha flexCenter">

                        <div class="flexCenter undPrestRowsDivs">
                            <span>${elemento.matricula}</span>
                            <span>${elemento.documento}</span>
                        </div>

                        <div class="flexCenter undPrestRowsDivs">
                            <span>${elemento.protocolo}</span>
                            <span>Ordem de Serviço</span>
                        </div>

                    </div>

                    <div class="cardLinha flexCenter">

                        <div class="flexCenter undPrestRowsDivs">
                            <span>${elemento.funcionario}</span>
                            <span>${elemento.funcao}</span>
                        </div>

                        <div class="flexCenter undPrestRowsDivs">
                            <span>Local</span>
                            <span>${elemento.localidade}</span>
                        </div>

                    </div>
                
                    <div class="undPrestRows flexCenter">
                        <textarea rows=6' cols='40' id="textArea${elemento.id}">${(elemento.anotacao).trim()}</textarea>
                        <div class='btnEdit flexCenter'>
                            <i id='iconeEditar' onclick="editar(${elemento.id})" class="fas fa-pen"></i>
                            <i onclick='deletar(${elemento.id})' class="fas fa-trash"></i>
                        </div>

                    </div>
                </div>
            </div>

        </div>
            `






        container.innerHTML = res
        // document.querySelector('#amostrarVoltar'+elemento.id).style.display = 'none'
        i += 1
    })
}

//criar novo registro em Controle de Prestadores
function novoRegistro() {
    container = document.querySelector('#mainContainer')
    container.innerHTML = ''

    container.innerHTML = `
    <div class="undPrestador flexCenter">

        <div class="undPrestRows flexCenter">

            <div class="cardLinha flexCenter">

                <div class="flexCenter undPrestRowsDivs align">
                    <label for='data'>Data</label>
                    <input id='data' type='date' '>

                    <label for='colaborador'>Colaborador</label>
                    <input id='colaborador' type='text' >
                </div>

                <div class="flexCenter undPrestRowsDivs align">
                    <label for='hora'>Hora</label>
                    <input id='hora' type='time' >
                        
                    <label for='empresa'>Empresa</label>
                    <input id='empresa' type='text' >

                </div>

            </div>

            <div class="cardLinha flexCenter">

                <div class="flexCenter undPrestRowsDivs align">

                    <label for='doc'>Documento</label>
                    <select name="doc" id="doc">
                        <option value="CPF">CPF</option>
                        <option value="RG">RG</option>
                        <option value="Matrícula">Matrícula</option>
                    </select>

                    <label for='servico'>Serviço</label>
                    <input id='servico' type='text' >

                    <label for='funcionario'>Funcionário</label>
                    <input type='text' id='funcionario' >

                </div>

                <div class="flexCenter undPrestRowsDivs align">

                    <label for='matricula'>Nº Documento</label>
                    <input id='matricula' type='text' >

                    <label for='local'>Local</label>
                    <input id='local' type='text' value='' >

                    <label for='funcao'>Função</label>
                    <input type='text' id='funcao' >

                </div>

            </div>

            <div class='flexCenter undPrestRowsDivs os'>
                <label for='os'>Ordem de Serviço</label>
                <input id='os' type='text'>
            </div>

        </div>

        <div class="undPrestRows flexCenter">
            <label for='anotacao'>Anotações</label>
            <textarea rows=6' cols='40' id="anotacao">
            </textarea>

            <div class='btnEdit flexCenter'>
                <i onclick='salvar()' class="fas fa-save"></i>
                <i onclick='listar()' class="fas fa-undo"></i>
            </div>
        </div>

    </div>
    `
}

//SALVAR o registro de Controle de Prestadores
function salvar() {

    data = document.querySelector('#data').value

    hora = document.querySelector('#hora').value
    empresa = document.querySelector('#empresa').value
    servico = document.querySelector('#servico').value
    colaborador = document.querySelector('#colaborador').value
    documento = document.querySelector('#doc').value
    protocolo = document.querySelector('#os').value
    local = document.querySelector('#local').value
    matricula = document.querySelector('#matricula').value
    funcao = document.querySelector('#funcao').value
    funcionario = document.querySelector('#funcionario').value
    anotacao = document.querySelector('#anotacao').value

    if (data == 'Invalid Date' || hora == '' || empresa == '' || servico == '' || colaborador == '' || documento == '' || protocolo == '' || local == '' || funcao == '' || funcionario == '' ||
        matricula == '' || funcionario == '') {
        alert('Com exceção do campo de Anotações, não pode haver campos em branco.')
    } else {
        async function postando() {


            const obj = {
                dia: String(data),
                hora: String(hora),
                empresa: String(empresa),
                servico: String(servico),
                colaborador: String(colaborador),
                documento: String(documento),
                protocolo: String(protocolo),
                localidade: String(local),
                matricula: String(matricula),
                funcao: String(funcao),
                funcionario: String(funcionario),
                anotacao: String((anotacao).trim())
            }


            const response = await fetch("https://patiocgcontrole.azurewebsites.net/api/visitante/", {
                method: "POST",
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            })

        }

        postando()

        setTimeout(() => {
            listar()
        }, 500);
    }
}

function addCancel() {
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

async function editar(id) {
    container = document.querySelector('#mainContainer')
    container.innerHTML = ''

    const response = await fetch('https://patiocgcontrole.azurewebsites.net/api/visitante/' + id)
    const elemento = await response.json()

    let horario = elemento.hora.slice(0, 5)


    container.innerHTML = `
    <div id='undPrest${elemento.id}' class="undPrestador flexCenter">

        <div class="undPrestRows flexCenter">

            <div class="cardLinha flexCenter">

                <div class="flexCenter undPrestRowsDivs align">
                    <label for='data'>Data</label>
                    <input id='data' type='date' value='${elemento.dia}'>

                    <label for='colaborador'>Colaborador</label>
                    <input id='colaborador' type='text' value='${elemento.colaborador}'>
                </div>

                <div class="flexCenter undPrestRowsDivs align">
                    <label for='hora'>Hora</label>
                    <input id='hora' type='time' value='${horario}'>
                        
                    <label for='empresa'>Empresa</label>
                    <input id='empresa' type='text' value='${elemento.empresa}'>

                </div>

            </div>

            <div class="cardLinha flexCenter">

                <div class="flexCenter undPrestRowsDivs align">

                    <label for='doc'>Documento</label>

                    <select name="doc" id="doc">
                        <option value="CPF">CPF</option>
                        <option value="RG">RG</option>
                        <option value="Matrícula">Matrícula</option>
                    </select>

                    <label for='servico'>Serviço</label>
                    <input id='servico' type='text' value='${elemento.servico}'>

                    <label for='funcionario'>Funcionário</label>
                    <input type='text' id='funcionario' value='${elemento.funcionario}'>

                            

                </div>

                <div class="flexCenter undPrestRowsDivs align">

                    <label for='matricula'>Nº Documento</label>
                    <input id='matricula' type='text' value='${elemento.matricula}'>

                            
                    <label for='local'>Local</label>
                    <input id='local' type='text' value='sala 209' >

                    <label for='funcao'>Função</label>
                    <input type='text' id='funcao' value='${elemento.funcao}'>

                </div>

                
                </div>
                <div class='flexCenter undPrestRowsDivs os'>
                    <label for='os'>Ordem de Serviço</label>
                    <input id='os' type='text' value='${elemento.protocolo}'>
                </div>

        </div>

        <div class="undPrestRows flexCenter">
            <textarea rows=6' cols='40' id="anotacao">${(elemento.anotacao).trim()}</textarea>

            <div class='btnEdit flexCenter'>
                <i onclick='atualizar(${id})' class="fas fa-save"></i>
                <i onclick='listar()' class="fas fa-undo"></i>
            </div>
        </div>
     
    </div>
    `





}

function atualizar(id) {

    data = document.querySelector('#data').value

    hora = document.querySelector('#hora').value
    empresa = document.querySelector('#empresa').value
    servico = document.querySelector('#servico').value
    colaborador = document.querySelector('#colaborador').value
    documento = document.querySelector('#doc').value
    protocolo = document.querySelector('#os').value
    local = document.querySelector('#local').value
    matricula = document.querySelector('#matricula').value
    funcao = document.querySelector('#funcao').value
    funcionario = document.querySelector('#funcionario').value
    anotacao = document.querySelector('#anotacao').value

    if (data == 'Invalid Date' || hora == '' || empresa == '' || servico == '' || colaborador == '' || documento == '' || protocolo == '' || local == '' || funcao == '' || funcionario == '' ||
        matricula == '' || funcionario == '') {
        alert('Com exceção do campo de Anotações, não pode haver campos em branco.')
    } else {
        async function postando() {


            const obj = {
                dia: String(data),
                hora: String(hora),
                empresa: String(empresa),
                servico: String(servico),
                colaborador: String(colaborador),
                documento: String(documento),
                protocolo: String(protocolo),
                localidade: String(local),
                matricula: String(matricula),
                funcao: String(funcao),
                funcionario: String(funcionario),
                anotacao: String((anotacao).trim())
            }


            const response = await fetch("https://patiocgcontrole.azurewebsites.net/api/visitante/" + id, {
                method: "PUT",
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            })

        }

        postando()

        setTimeout(() => {
            listar()
        }, 500);
    }
}

function deletar(id) {

    fetch('https://patiocgcontrole.azurewebsites.net/api/visitante/' + id, { method: 'DELETE' })
    setTimeout(() => {
        listar()
    }, 500);
}

function buscar() {
    const buscarIcone = document.querySelector('footer')

    buscarIcone.style.height = '100px'
    console.log(buscarIcone)
}

function hideFooter(elem) {
    elem.style.height = '50px'
}

async function pesquisar() {
    const select = document.querySelector('#selectItens')
    let valor = document.querySelector('#valorPesquisado')
    valor = valor.value.toLowerCase()
    campoPesquisado = select.value
    container = document.querySelector('#mainContainer')
    container.innerHTML = ''
    let res = ''



    const response = await fetch('https://patiocgcontrole.azurewebsites.net/api/visitante')
    const jsonBody = await response.json()

    jsonBody.forEach(elemento => {

        // let itemBD = elemento.empresa


        if (campoPesquisado == 'empresa') {
            let itemBD = elemento.empresa
            itemBD = itemBD.toLowerCase();

            if (itemBD.includes(valor)) {
                template(elemento)
            }

        } else if (campoPesquisado == 'colaborador') {
            let itemBD = elemento.colaborador
            itemBD = itemBD.toLowerCase();

            if (itemBD.includes(valor)) {
                template(elemento)
            }
        } else if (campoPesquisado == 'funcionario') {
            let itemBD = elemento.funcionario
            itemBD = itemBD.toLowerCase();

            if (itemBD.includes(valor)) {
                template(elemento)
            }
        } else if (campoPesquisado == 'dia') {
            let itemBD = elemento.dia
            itemBD = itemBD.toLowerCase();

            if (itemBD.includes(valor)) {
                template(elemento)
            }
        }
    })

}


function template(elemento) {
    let res = ''
    let container = document.querySelector('#mainContainer')

    let dataDia = new Date(elemento.dia).getUTCDate()
    dataDia < 10 ? dataDia = `0${dataDia}` : dataDia = dataDia

    let dataMes = new Date(elemento.dia).getUTCMonth() + 1
    dataMes < 10 ? dataMes = `0${dataMes}` : dataMes = dataMes

    let dataAno = new Date(elemento.dia).getUTCFullYear()

    let horario = elemento.hora.slice(0, 5)

    res += `
        <div id='undPrest${elemento.id}' onclick="detalhesCard(${elemento.id}, this)" class="undPrestador flexCenter">

            <div class="undPrestRows flexCenter">

                <div class="cardLinha flexCenter">

                    <div class="flexCenter undPrestRowsDivs">
                        <span>${dataDia}-${dataMes}-${dataAno}</span>
                        <span>${horario}</span>
                    </div>

                    <div class="flexCenter undPrestRowsDivs">
                        <span>${elemento.colaborador}</span>
                        <span>${elemento.empresa} - ${elemento.servico}</span>
                    </div>

                </div>

                <div id='card${elemento.id}' class='hide flexCenter'>

                    <div class="cardLinha flexCenter">

                        <div class="flexCenter undPrestRowsDivs">
                            <span>${elemento.matricula}</span>
                            <span>${elemento.documento}</span>
                        </div>

                        <div class="flexCenter undPrestRowsDivs">
                            <span>${elemento.protocolo}</span>
                            <span>Ordem de Serviço</span>
                        </div>

                    </div>

                    <div class="cardLinha flexCenter">

                        <div class="flexCenter undPrestRowsDivs">
                            <span>${elemento.funcionario}</span>
                            <span>${elemento.funcao}</span>
                        </div>

                        <div class="flexCenter undPrestRowsDivs">
                            <span>Local</span>
                            <span>${elemento.localidade}</span>
                        </div>

                    </div>
                
                    <div class="undPrestRows flexCenter">
                        <textarea rows=6' cols='40' id="textArea${elemento.id}">${elemento.anotacao}</textarea>
                        <div class='btnEdit flexCenter'>
                            <i id='iconeEditar' onclick="editar(${elemento.id})" class="fas fa-pen"></i>
                            <i onclick='deletar(${elemento.id})' class="fas fa-trash"></i>
                        </div>

                    </div>
                </div>
            </div>

        </div>
            `

    container.innerHTML += res



}




// FUNCOES RELATIVAS AOS MEDIDORES DE GÁS

function mainGas() {
    let container = document.querySelector('#mainContainer')

    //GET dos Registros

    container.innerHTML = `
    <div onclick='novoGas()' id="gasNovoReg" class="undPrestador flexCenter">
        <span>Novo registro</span>
    </div>

    <div onclick='listarGas()' id="gasUltimosReg" class="undPrestador flexCenter">
        <span>Mostrar registros</span>
    </div>

    <div id="gasEditarReg" class="undPrestador flexCenter">
        <span>Editar registros</span>
    </div>
    `
}

async function listarGas() {

    const response = await fetch('https://patiocgcontrole.azurewebsites.net/api/teste')
    const jsonBody = await response.json()

    let container = document.querySelector('#mainContainer')
    container.innerHTML = "Carregando . . ."
    res = ''

    jsonBody.forEach(async elemento => {

        let dia = elemento.dia
        diaF = dia.slice(0, 10)
        horaF = dia.slice(11)

        res +=
            `
    <div class="undPrestador ">
    <div class="gasesTh ">
        <span>Data: ${diaF}</span>
        <span>Hora: ${horaF}</span>
    </div>
    <div class="gases ">
        <span>Loja 128</span>
        <span>${elemento.lj128}</span>
    </div>
    <div class="gases ">
        <span>Loja 132</span>
        <span>${elemento.lj132}</span>
    </div>
    <div class="gases ">
        <span>Loja 137</span>
        <span>${elemento.lj137}</span>
    </div>
    <div class="gases ">
        <span>Loja 152</span>
        <span>${elemento.lj152}</span>
    </div>
    <div class="gases ">
        <span>Loja 154</span>
        <span>${elemento.lj154}</span>
    </div>
    <div class="gases ">
        <span>Loja 157</span>
        <span>${elemento.lj157}</span>
    </div>
    <div class="gases ">
        <span>Loja 158</span>
        <span>${elemento.lj158}</span>
    </div>
   
</div>
    `

    })

    container.innerHTML = res
}

function novoGas() {
    let container = document.querySelector('#mainContainer')

    container.innerHTML = `
    <div class="undPrestador ">
               
        <div class="gases ">
            <label for="lj128">Loja 128</label>
            <input id="lj128" type="text">
        </div>
        <div class="gases ">
            <label for="lj132">Loja 132</label>
            <input type="text" id="lj132">
        </div>
        <div class="gases ">
            <label for="lj137">Loja 137</label>
            <input type="text" id="lj137">
        </div>
        <div class="gases ">
            <label for="lj152">Loja 152</label>
            <input type="text" id="lj152">
        </div>
        <div class="gases ">
            <label for="lj154">Loja 154</label>
            <input type="text" id="lj154">
        </div>
        <div class="gases ">
            <label for="lj157">Loja 157</label>
            <input type="text" id="lj157">
        </div>
        <div class="gases ">
            <label for="lj158">Loja 158</label>
            <input type="text" id="lj158">
        </div>

        <div class="gases">
            <i class="fas fa-save" onclick='salvarGas()'></i>
            <i onclick='mainGas()' class="fas fa-undo"></i>
        </div>
               
    </div>
    `
}

function salvarGas() {

    let data = new Date()
    let dataFormatada = data.toLocaleDateString('pt-Br', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })

    let lj128 = document.querySelector('#lj128').value
    let lj132 = document.querySelector('#lj132').value
    let lj137 = document.querySelector('#lj137').value
    let lj152 = document.querySelector('#lj152').value
    let lj154 = document.querySelector('#lj154').value
    let lj157 = document.querySelector('#lj157').value
    let lj158 = document.querySelector('#lj158').value

    if (lj128 == '' || lj132 == '' || lj137 == '' || lj152 == '' || lj154 == '' || lj157 == '' || lj158 == '') {
        alert('Com exceção do campo de Anotações, não pode haver campos em branco.')
    } else {

        async function postando() {

            const obj = {
                dia: String(dataFormatada),
                lj128: String(lj128).trim(),
                lj132: String(lj132).trim(),
                lj137: String(lj137).trim(),
                lj152: String(lj152).trim(),
                lj154: String(lj154).trim(),
                lj157: String(lj157).trim(),
                lj158: String(lj158).trim()
            }

            const response = await fetch("https://patiocgcontrole.azurewebsites.net/api/teste/", {
                method: "POST",
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            })
        }

        postando()

        setTimeout(() => {
            listarGas()
        }, 1000);
    }
}

