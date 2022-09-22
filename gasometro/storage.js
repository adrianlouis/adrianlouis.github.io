const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
var texto = document.querySelector('#span')

var obj = [{
    nome: 'Adriano',
    sobrenome: 'Soares'
},
{
    nome: 'Christopher',
    sobrenome: 'Krad'
}]

localStorage.getItem('array') ? carregarDados() : null;

function carregarDados(){
    obj = JSON.parse(localStorage.getItem('array'))
}

function storage() {

    if (nome.value !== '' && sobrenome.value !== ''){
        obj.push({nome: nome.value, sobrenome: sobrenome.value})
        localStorage.setItem('array', JSON.stringify(obj))
    }else{
        return
    }


    // localStorage.setItem('nome', input.value)
    // texto.innerHTML = 'Dados: '+localStorage.getItem('nome')

    console.log(localStorage.getItem('array'))
}


function apagarStorage(){
    localStorage.removeItem('array')
}

console.log(localStorage.getItem('array'))
console.log('obj: '+obj)