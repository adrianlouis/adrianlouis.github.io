var users = [

    {nome: 'louis', senha: 'krad'},
    {nome: 'alucard', senha: 'krad'}

]


// SISTEMA DE LOGIN 
function user(usuario){
    let nome = document.querySelector('#user').value
    return usuario = nome 
}

function log(){
    let nome = document.querySelector('#user').value
    let senha = document.querySelector('#password').value

    const res = users.find( usuario => usuario.nome === nome)
    if (senha == res.senha){
        window.location="perfil.html";
        console.log('Login aceito')
            }else{
        console.log('Login negado')
    }    
}

function inputFocus(id){
  document.querySelector(id).style.transform = 'unset'
  document.querySelector(id).style.transform = 'scale(1.5)'
  document.querySelector(id).style.color = '#ffffff'

}

function inputBlur(ids, idb){

    if (document.querySelector(idb).value !== ""){
        return
    }else{
        document.querySelector(ids).style.transform = 'translate(0, 30px)';
        document.querySelector(ids).style.color = '#000000';
    }

        

}
