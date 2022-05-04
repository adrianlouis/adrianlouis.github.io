
function criar() {

    document.querySelector('tbody').innerHTML = `
    <tr>
    <td><input id='data' type="date" required></td>
    <td><input id='hora' type="time" required></td>
    <td><input id='empresa' type="text" required></td>
    <td><input id='funcionario' type="text" required></td>
    <td><input id='matricula' type="text" required></td>
    <td><input id='responsavel' type="text" required></td>
    <td><button type="button" onclick="save()"><i class="fas fa-save"></i></button><button type="button" onclick="cancel()"><i class="fas fa-backspace"></i></button></td>

    
</tr>
    `

}

function cancel() {
    document.querySelector('.botoes').style.display = 'none'
    listar()
}

function save() {

    data = document.querySelector('#data').value

    hora = document.querySelector('#hora').value
    empresa = document.querySelector('#empresa').value
    funcionario = document.querySelector('#funcionario').value
    matricula = document.querySelector('#matricula').value
    responsavel = document.querySelector('#responsavel').value

    if (data == 'Invalid Date' || hora == '' || empresa == '' || funcionario == '' ||
        matricula == '' || responsavel == '') {
        alert('Não pode haver campos não preenchidos')
    } else {
        async function postando() {

            console.log('salvar nova data: '+ data)

            const obj = {
                dia: String(data),
                hora: String(hora),
                empresa: String(empresa),
                funcionario: String(funcionario),
                matricula: String(matricula),
                responsavel: String(responsavel)
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
            cancel()
        }, 1000);
    }
}

function remover(id) {
    fetch('https://patiocgcontrole.azurewebsites.net/api/visitante/' + id, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
    })

    setTimeout(() => {
        listar()
    }, 500);
}

async function listar() {
    const response = await fetch('https://patiocgcontrole.azurewebsites.net/api/visitante')
    const jsonBody = await response.json()

    document.querySelector('#thAcoes').style.display = 'block'
    linhaTabela = document.querySelector('tbody')
    linhaTabela.innerHTML = ''
    let i = 0

    jsonBody.forEach(async elemento => {
        let dataDia = new Date(elemento.dia).getUTCDate()
        dataDia < 10 ? dataDia = `0${dataDia}` : dataDia = dataDia

        let dataMes = new Date(elemento.dia).getUTCMonth()+1
        dataMes < 10 ? dataMes = `0${dataMes}` : dataMes = dataMes

        let dataAno = new Date(elemento.dia).getUTCFullYear()

        linhaTabela.innerHTML += `
        <tr id='tr${i}'>
        <td>${dataDia} - ${dataMes} - ${dataAno}</td>
        <td>${elemento.hora}</td>
        <td>${elemento.empresa}</td>
        <td>${elemento.funcionario}</td>
        <td>${elemento.matricula}</td>
        <td>${elemento.responsavel}</td>
        <td><button type="button" onclick="editar(${elemento.id})"><i class="far fa-edit"></i></button>
            <button type="button" onclick='remover(${elemento.id})'><i class="fas fa-trash-alt"></i></button></td>
            
            </tr>
            `
        i += 1
    })
}

async function editar(id) {
    // BUSCAR POR ID
    const response = await fetch('https://patiocgcontrole.azurewebsites.net/api/visitante/' + id)
    const jsonBody = await response.json()
    // FIM DA BUSCA

    document.querySelector('.botoes').style.display = 'flex'

    document.querySelector('tbody').innerHTML = `
    <tr>
    <td><input id='data' type="date" value=${jsonBody.dia} required></td>
    <td><input id='hora' type="time" value=${jsonBody.hora} required></td>
    <td><input id='empresa' type="text" value=${jsonBody.empresa} required></td>
    <td><input id='funcionario' type="text" value=${jsonBody.funcionario} required></td>
    <td><input id='matricula' type="text" value=${jsonBody.matricula} required></td>
    <td><input id='responsavel' type="text" value=${jsonBody.responsavel} required></td>
    <td><button type="button" onclick='atualizar(${jsonBody.id})' ><i class="fas fa-save"></i></button><button type="button" onclick="cancel()"><i class="fas fa-backspace"></i></button></td>
    
</tr>

    `
    console.log(new Date(jsonBody.dia).getDate()+1)

    


}


async function atualizar(id) {

    const obj = {
        dia: document.querySelector('#data').value,
        hora: document.querySelector('#hora').value,
        empresa: document.querySelector('#empresa').value,
        funcionario: document.querySelector('#funcionario').value,
        matricula: document.querySelector('#matricula').value,
        responsavel: document.querySelector('#responsavel').value
    }

    console.log(obj.dia)

    const response = await fetch("https://patiocgcontrole.azurewebsites.net/api/visitante/" + id, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' }
    })

    setTimeout(() => {
        cancel()
    }, 500);

}





