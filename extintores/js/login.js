var emailLog = ''
var senhaLog = ''

function logar() {
    emailLog = document.querySelector('#email').value
    senhaLog = document.querySelector('#senha').value

    console.log("email: " + emailLog + " // senha: " + senhaLog)

    logarXhr;
}

function logarXhr() {

    var http = new XMLHttpRequest();
    http.open("POST", "https://controleextintores.azurewebsites.net/extintor/usuario/", true)
    http.setRequestHeader('Content-type', 'application/json;charset=UTF-8')

    emailLog = document.querySelector('#email').value
    senhaLog = document.querySelector('#senha').value
    http.send(JSON.stringify({ "login": emailLog, "senha": senhaLog }));
    console.log("email: " + emailLog + " // senha: " + senhaLog)



    http.onload = () => {
        var resposta = JSON.parse(http.response)
        console.log(resposta)
        console.log("email: " + emailLog + " // senha: " + senhaLog)
        console.log(resposta.nome)

    }
}