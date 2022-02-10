// var emailLog = ''
// var senhaLog = ''

// function logar() {
//     var http = new XMLHttpRequest();

//     emailLog = document.querySelector('#email').value
//     senhaLog = document.querySelector('#senha').value

//     console.log("email: " + emailLog + " // senha: " + senhaLog)

//     http.open("POST", "https://apiextintores.azurewebsites.net/usuario", true)
//     http.setRequestHeader("Content-Type", "application/json")
//     const json = {
//         "login": 'adrianolcsoares@gmail.com',
//         "senha": '12345'
//     }
//     http.send(JSON.stringify(json))
//     http.onload = () => {
//         const res = JSON.parse(http.responseText)
//         console.log(res)
//     }

// }

function setCookie(cNome, cValor){
document.cookie = cNome + "=" +cValor+';';
}

var token =''
function logar(){
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')

    //criar objeto json
    const json = {
        login: email.value,
        senha: senha.value
    }

    //request options
    const options = {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //mandar requisição de POST
    fetch('https://apiextintores.azurewebsites.net/usuario', options)
    .then(res => res.json())
    .then(res => {

        token = res.token;
        // document.cookie = `user=${res.nome}; token=${res.token}`
       

        if(token !== undefined){

            //set cookie
            setCookie('user', res.nome)
            setCookie('token', token)
            let x = document.cookie

            location.href = 'home.html'
        }else{
            email.value = ""
            senha.value = ""
        }
    })

    .catch(err => console.log('erro'))
}