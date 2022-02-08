
function loadHist(){
    var inputValue = document.querySelector('#findIt').value
    var http = new XMLHttpRequest
    var url = "https://apiextintores.azurewebsites.net/extintor/numero/"
    http.open("GET", url+inputValue)
    http.send()
    http.onload = () => {
        const resp = JSON.parse(http.response)
        console.log(resp.codigo)
        
        

        // RESP.CODIGO = 0 NAO ENCONTROU
        if (resp.codigo == 0){
            document.querySelector('.histNotFound').style.display = "flex"
        }else{
            document.querySelector('.histNotFound').style.display = "none"

            document.querySelector('#cadastro').innerHTML = new Date(resp.criacao).toLocaleDateString()
            if (resp.alteracao !== null){
                document.querySelector('#alteracao').style.display = "block"
                document.querySelector('#alteracaoLabel').style.display = "block"
                document.querySelector('#alteracao').innerHTML = new Date(resp.alteracao).toLocaleDateString()
            }else{
                document.querySelector('#alteracao').style.display = "none"
                document.querySelector('#alteracaoLabel').style.display = "none"
            }


            document.querySelector('#local').innerHTML = resp.subLocal.descricao
            document.querySelector('#userName').innerHTML = resp.usuario.nome
            let tipoExt = "" 
            if (resp.tipo == 0){
                tipoExt = "Água pressurizada"
            }else if (resp.tipo == 1){
                tipoExt = "Pó quimico seco"
            }else{
                tipoExt = "Dióxido de Carbono"
            }
            
            let classeExt = ""
            if (resp.classe == 0){
                classeExt = "A"
            }else if (resp.classe == 1){
                classeExt = "B"
            }else{
                classeExt = "C"
            }

            document.querySelector('#classType').innerHTML = tipoExt+" - "+classeExt

            document.querySelector('#recargasDatas').innerHTML = new Date(resp.ultimaRecarga).toLocaleDateString()+ " - " + new Date(resp.proximaRecarga).toLocaleDateString()
            document.querySelector('#retestesDatas').innerHTML = new Date(resp.ultimoReteste).toLocaleDateString()+ " - " + new Date(resp.proximoReteste).toLocaleDateString()

            let sinalExt = resp.sinalizacao
            if (sinalExt == 0){
                sinalExt = "OK"
            }else if (sinalExt == 1){
                sinalExt = "Placa quebrada"
            }else{
                sinalExt = "Sem placa"
            }

            document.querySelector('#sinalizacao').innerHTML = sinalExt

            let avariasExt = resp.avarias
            if (avariasExt == null){
                avariasExt = "Nenhuma"
            }

            document.querySelector('#avarias').innerHTML = avariasExt




        }
    }
}