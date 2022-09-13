const users = [

    { nome: 'louis', senha: 'orleons' },
    { nome: 'alucard', senha: 'krad' },
    { nome: 'trevor', senha: ''},
    { nome: 'lucas', senha: 'lendinha'},
    { nome: 'douglas', senha: 'ragabash'}

]
const usersCad = [
    { apelido: '', classe: '' }
]


// SISTEMA DE LOGIN 
function user(usuario) {
    let nome = document.querySelector('#user').value
    return usuario = nome
}

function log() {
    let nome = document.querySelector('#user').value
    let senha = document.querySelector('#password').value

    const res = users.find(usuario => usuario.nome === nome)
    if (senha == res.senha) {
        window.location = "perfil.html";
        console.log('Login aceito')
    } else {
        console.log('Login negado')
    }
}

function inputFocus(id) {
    document.querySelector(id).style.transform = 'unset'
    document.querySelector(id).style.transform = 'scale(1.5)'
    document.querySelector(id).style.color = '#ffffff'

}

function inputBlur(ids, idb) {

    if (document.querySelector(idb).value !== "") {
        return
    } else {
        document.querySelector(ids).style.transform = 'translate(0, 30px)';
        document.querySelector(ids).style.color = '#000000';
    }
}

function cad() {
    let b = {}
    if (document.querySelector('#user').value && document.querySelector('#password').value !== "") {
        console.log(document.querySelector('#user').value)
        console.log(document.querySelector('#password').value)

        users.push({ nome: document.querySelector('#user').value, senha: document.querySelector('#password').value })

        users.nome = document.querySelector('#user').value
        users.senha = document.querySelector('#password').value

        console.log('Array Users: ' + users.nome)
    } else {
        alert('Campos em branco')
    }
}

function userName(name) {
    return name.nome === document.querySelector('#user').value
}

function log() {

    let procurar = users.find(userName)

    if (procurar === undefined) {
        document.querySelector('#spanReturn').innerHTML = "Usuário não encontrado"
    } else {
        console.log('User encontrado')
        window.open('ficha.html?user=' + procurar.nome, '_self')

    }
}

function reset() {
    document.querySelector('#user').value = ""
    document.querySelector('#password').value = ""
}


// const urlParams = new URLSearchParams(window.location.search);
// const cdParam = urlParams.get("arr")
// const codeParam = urlParams.get("code")
function loading() {
    const urlParams = new URLSearchParams(window.location.search);
    const cdParam = urlParams.get("user")
    document.querySelector('#nicknameHero').innerHTML = cdParam.toUpperCase();
}

