function loadEdit(){
    const urlParams = new URLSearchParams(window.location.search)
    const urlextN = urlParams.get("extN")
    // console.log(urlextN)
    // document.querySelector('#number').value = urlextN
    document.querySelector('#dotExtintor').style.transform = 'translate(-4px, 0)'

    if(urlextN){
    var http = new XMLHttpRequest();
    var url = "https://apiextintores.azurewebsites.net/extintor"
    http.open("GET", url+"/numero/"+urlextN)
    http.send();
    http.onload = () => {
        const resp = JSON.parse(http.response)
        console.log(resp.subLocal.descricao)

        document.querySelector('#newOrEdit').innerHTML = "Editar Extintor"
        document.querySelector('#number').value = resp.numero
        document.querySelector('#ultRec').value = new Date(resp.ultimaRecarga).toLocaleDateString().split('/').reverse().join('-')
        document.querySelector('#proxRet').value = new Date(resp.proximoReteste).toLocaleDateString().split('/').reverse().join('-')
        
        document.querySelector('#avarias').innerText = resp.avarias

        if (resp.tipo == 0){
            document.querySelector('#tipoA').style.transform = "scale(1.3)"
            document.querySelector('#tipoA').style.border = "2px solid #999"
        }else if (resp.tipo == 1){
            document.querySelector('#tipoB').style.transform = "scale(1.3)"
            document.querySelector('#tipoB').style.border = "2px solid #999"
        }else{
            document.querySelector('#tipoC').style.transform = "scale(1.3)"
            document.querySelector('#tipoC').style.border = "2px solid #999"
        }

        let local = document.querySelector('#local')
        let ala = document.querySelector('#ala')

        switch (resp.subLocal.codigo) {
            case 20:
                local.value = 7
                ala.value = 4
                break;
            case 19:
                local.value = 7
                ala.value = 2
                break;
            case 18:
                local.value = 7
                ala.value = 1
                break;
            case 17:
                local.value = 6
                ala.value = 4
                break;
            case 16:
                local.value = 6
                ala.value = 2
                break;
            case 15:
                local.value = 6
                ala.value = 1
                break;
            case 14:
                local.value = 5
                ala.value = 3
                break;
            case 13:
                local.value = 5
                ala.value = 2
                break;
            case 12:
                local.value = 5
                ala.value = 1
                break;
            case 11:
                local.value = 4
                ala.value = 4
                break;
            case 10:
                local.value = 3
                ala.value = 4
                break;
            case 9:
                local.value = 9
                ala.value = 4
                break;
            case 8:
                local.value = 1
                ala.value = 4
                break;
            case 7:
                local.value = 7
                ala.value = 4
                break;
            case 6:
                local.value = 6
                ala.value = 4
                break;
            case 5:
                local.value = 5
                ala.value = 4
                break;
            case 4:
                local.value = 4
                ala.value = 4 
                break;
            case 3:
                local.value = 3
                ala.value = 4
                break;
            case 2:
                local.value = 9
                ala.value = 4
            case 1:
                local.value = 1
                ala.value = 4
                break;

            default:
                break;
        }

    }}else{
        console.log("Sem parametro na URL")
        return
    }
}

function tipoExt(elem){
    let tipos = document.querySelectorAll('.tipoExtintor')
    for(i = 0; i< tipos.length; i++){
        tipos[i].style.transform = "scale(1)"
        tipos[i].style.border = "unset"
    }
    elem.style.border = "2px solid #999"
    elem.style.transform = 'scale(1.2)'
    
    
}