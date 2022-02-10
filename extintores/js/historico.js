
//Ler cookie
function getCookie(cNome){
    let nome = cNome + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (i = 0; i < ca.length; i++){
        let c = ca[i];
        while (c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if (c.indexOf(nome) == 0){
            return c.substring(nome.length, c.length);
        }
    }
    return "";
}

function loadHist() {
    var inputValue = document.querySelector('#findIt').value
    var http = new XMLHttpRequest
    var url = "https://apiextintores.azurewebsites.net/extintor/numero/"
    http.open("GET", url + inputValue)
    let token = getCookie('token')
    http.setRequestHeader('Authorization', 'Bearer '+token)
    http.send()

    http.onload = () => {
        const resp = JSON.parse(http.response)

        // BUSCAR NO HISTORICO DE ALTERAÇÃO/DELETE
        http.open("GET", "https://apiextintores.azurewebsites.net/historicoextintor/" + inputValue)
        let token = getCookie('token')
        http.setRequestHeader('Authorization', 'Bearer '+token)
        http.send()
        http.onload = () => {
            var answer = JSON.parse(http.response)

            console.log("resposta do Get numero: " + resp.codigo)
            console.log(answer)


            // EXT NAO EXISTE
            if (resp.codigo == 0 && answer == "") {
                console.log('NAO EXISTE')

                let main = document.querySelector('main')
                var template = ''

                template = `<div class="histNotFound">
                <span>Extintor não encontrado!</span>
            </div>`
                main.innerHTML = template


            } else if (resp.codigo !== 0 && answer.length > 0) {
                console.log('')

                document.querySelector('main').innerHTML = ""

                for (i = 0; i < answer.length; i++) {
                    let template = ''
                    let main = document.querySelector('main')
                    let dataCadastro = new Date(answer[i].criacao).toLocaleDateString()
                    let dataUltRec = new Date(answer[i].ultimaRecarga).toLocaleDateString()
                    let dataUltRet = new Date(answer[i].ultimoReteste).toLocaleDateString()
                    let dataProxRec = new Date(answer[i].proximaRecarga).toLocaleDateString()
                    let dataProxRet = new Date(answer[i].proximoReteste).toLocaleDateString()
                    let tipoExtintor = answer[i].tipo
                    let classeExtintor = answer[i].classe
                    let sinalizacaoExtintor = answer[i].sinalizacao

                    if (tipoExtintor == 0) {
                        tipoExtintor = "Água pressurizada"
                    } else if (tipoExtintor == 1) {
                        tipoExtintor = "Pó quimico seco"
                    } else {
                        tipoExtintor = "Dióxido de Carbono"
                    }

                    if (classeExtintor == 0) {
                        classeExtintor = "A"
                    } else if (classeExtintor == 1) {
                        classeExtintor = "B"
                    } else {
                        classeExtintor = "C"
                    }

                    if (sinalizacaoExtintor == 0) {
                        sinalizacaoExtintor = "OK"
                    } else if (sinalizacaoExtintor == 1) {
                        sinalizacaoExtintor = "Placa quebrada"
                    } else {
                        sinalizacaoExtintor = "Sem placa"
                    }

                    template = `
                

                        <div class="histShowTemplate">
        
                        <div>

                        <div>
                      <span class="histLabel">Cadastrado em</span>
                      <span id="cadastro">${dataCadastro}</span>
                      </div>
                         <div>
                            <span id="alteracaoLabel" class="histLabel">Alterado em</span>
                           <span id="alteracao">${answer[i].alteracao}</span>
                     </div>
                  </div>

        <span id="userNameLabel" class="histLabel">Usuário responsável</span>
        <span id="userName">${answer[i].numero}</span>

        <span id="localLabel" class="histLabel">Localização</span>
        <span id="local"></span>


        <span class="histLabel">Tipo e classe</span>
        <span id="classType">${tipoExtintor} - ${classeExtintor}</span>

        <span class="histLabel">Última e próxima recargas</span>
        <span id="recargasDatas">${dataUltRec} - ${dataProxRec}</span>

        <span class="histLabel">Último e próximo retestes</span>
        <span id="retestesDatas">${dataUltRet} - ${dataProxRet}</span>

        <span class="histLabel">Sinalização</span>
        <span id="sinalizacao">${sinalizacaoExtintor}</span>

        <span class="histLabel">Avarias</span>
        <span id="avarias">${answer[i].avarias}</span>


                    </div>
                    `

                    main.innerHTML += template

                }




            } else if ( resp.codigo == 0 && answer.length >= 0){
                console.log("Ext Excluido")
                // document.querySelector('.histShow').style.display = "flex"

                document.querySelector('main').innerHTML = `    <div class="histDeleted">
                <span>Extintor excluído!</span>
            </div>`

                for (i = 0; i < answer.length; i++) {
                    let template = ''

                    let main = document.querySelector('main')
                    let dataCadastro = new Date(answer[i].criacao).toLocaleDateString()
                    let dataUltRec = new Date(answer[i].ultimaRecarga).toLocaleDateString()
                    let dataUltRet = new Date(answer[i].ultimoReteste).toLocaleDateString()
                    let dataProxRec = new Date(answer[i].proximaRecarga).toLocaleDateString()
                    let dataProxRet = new Date(answer[i].proximoReteste).toLocaleDateString()
                    let tipoExtintor = answer[i].tipo
                    let classeExtintor = answer[i].classe
                    let sinalizacaoExtintor = answer[i].sinalizacao
                    let avariasExtintor = answer[i].avarias

                    if(avariasExtintor == null){
                        avariasExtintor = "Nenhuma"
                    }

                    if (tipoExtintor == 0) {
                        tipoExtintor = "Água pressurizada"
                    } else if (tipoExtintor == 1) {
                        tipoExtintor = "Pó quimico seco"
                    } else {
                        tipoExtintor = "Dióxido de Carbono"
                    }

                    if (classeExtintor == 0) {
                        classeExtintor = "A"
                    } else if (classeExtintor == 1) {
                        classeExtintor = "B"
                    } else {
                        classeExtintor = "C"
                    }

                    if (sinalizacaoExtintor == 0) {
                        sinalizacaoExtintor = "OK"
                    } else if (sinalizacaoExtintor == 1) {
                        sinalizacaoExtintor = "Placa quebrada"
                    } else {
                        sinalizacaoExtintor = "Sem placa"
                    }

                    template = `
                

                        <div class="histShowTemplate">
        
                        <div>

                        <div>
                      <span class="histLabel">Cadastrado em</span>
                      <span id="cadastro">${dataCadastro}</span>
                      </div>
                         <div>
                            <span id="alteracaoLabel" class="histLabel">Alterado em</span>
                           <span id="alteracao">${answer[i].alteracao}</span>
                     </div>
                  </div>

        <span id="userNameLabel" class="histLabel">Usuário responsável</span>
        <span id="userName">${answer[i].numero}</span>

        <span id="localLabel" class="histLabel">Localização</span>
        <span id="local"></span>


        <span class="histLabel">Tipo e classe</span>
        <span id="classType">${tipoExtintor} - ${classeExtintor}</span>

        <span class="histLabel">Última e próxima recargas</span>
        <span id="recargasDatas">${dataUltRec} - ${dataProxRec}</span>

        <span class="histLabel">Último e próximo retestes</span>
        <span id="retestesDatas">${dataUltRet} - ${dataProxRet}</span>

        <span class="histLabel">Sinalização</span>
        <span id="sinalizacao">${sinalizacaoExtintor}</span>

        <span class="histLabel">Avarias</span>
        <span id="avarias">${avariasExtintor}</span>


                    </div>
                    `

                    main.innerHTML += template

                }




            } else{
                console.log("RESP")
                let template = ''

                let main = document.querySelector('main')
                let dataCadastro = new Date(resp.criacao).toLocaleDateString()
                let dataUltRec = new Date(resp.ultimaRecarga).toLocaleDateString()
                let dataUltRet = new Date(resp.ultimoReteste).toLocaleDateString()
                let dataProxRec = new Date(resp.proximaRecarga).toLocaleDateString()
                let dataProxRet = new Date(resp.proximoReteste).toLocaleDateString()
                let tipoExtintor = resp.tipo
                let classeExtintor = resp.classe
                let sinalizacaoExtintor = resp.sinalizacao
                let avariasExtintor = resp.avarias

                if(avariasExtintor == null){
                    avariasExtintor = "Nenhuma"
                }

                if (tipoExtintor == 0) {
                    tipoExtintor = "Água pressurizada"
                } else if (tipoExtintor == 1) {
                    tipoExtintor = "Pó quimico seco"
                } else {
                    tipoExtintor = "Dióxido de Carbono"
                }

                if (classeExtintor == 0) {
                    classeExtintor = "A"
                } else if (classeExtintor == 1) {
                    classeExtintor = "B"
                } else {
                    classeExtintor = "C"
                }

                if (sinalizacaoExtintor == 0) {
                    sinalizacaoExtintor = "OK"
                } else if (sinalizacaoExtintor == 1) {
                    sinalizacaoExtintor = "Placa quebrada"
                } else {
                    sinalizacaoExtintor = "Sem placa"
                }

                template = `
            

                    <div class="histShowTemplate">
    
                    <div>

                    <div>
                  <span class="histLabel">Cadastrado em</span>
                  <span id="cadastro">${dataCadastro}</span>
                  </div>
                     <div>
                        <span id="alteracaoLabel" class="histLabel">Alterado em</span>
                       <span id="alteracao">${resp.alteracao}</span>
                 </div>
              </div>

    <span id="userNameLabel" class="histLabel">Usuário responsável</span>
    <span id="userName">${resp.numero}</span>

    <span id="localLabel" class="histLabel">Localização</span>
    <span id="local"></span>


    <span class="histLabel">Tipo e classe</span>
    <span id="classType">${tipoExtintor} - ${classeExtintor}</span>

    <span class="histLabel">Última e próxima recargas</span>
    <span id="recargasDatas">${dataUltRec} - ${dataProxRec}</span>

    <span class="histLabel">Último e próximo retestes</span>
    <span id="retestesDatas">${dataUltRet} - ${dataProxRet}</span>

    <span class="histLabel">Sinalização</span>
    <span id="sinalizacao">${sinalizacaoExtintor}</span>

    <span class="histLabel">Avarias</span>
    <span id="avarias">${avariasExtintor}</span>


                </div>
                `

                main.innerHTML = template

            }



            }
            }
    
        }
    
