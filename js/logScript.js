$(document).ready(function () {
    $('#regSpan').click(function () {
        $(".log").fadeOut('slow', function () {
            $('.reg').fadeIn('slow')
            $('.reg').css('display', 'flex')
            $('.formLogin').css('width', '450px')
        })
    })

    $('.entrarSpan').click(function () {
        $('.reg').fadeOut('slow', function () {
            $('.log').fadeIn('slow')
            $('.formLogin').css('width', '400px')
        })
    })
})

function validateUserLogin() {
    let input = document.querySelector('#userInput').value
    let span = document.querySelector('#userSpan')

    if (input.length < 6) {
        span.innerHTML = "Usuário precisa ter pelo menos 6 caracteres"
        span.style.color = "red"
        span.style.fontWeight = "700"
    } else {
        span.innerHTML = ""
    }
}

function logSenha() {
    let input = document.querySelector('#logPword').value
    let span = document.querySelector('#logSpan1')
    let btnSumbmit = document.querySelector('#btnLogin')


    if (input.length > 5) {
        span.innerHTML = ""
    } else {
        span.style.color = "red"
        span.style.fontWeight = "700"
        span.innerHTML = "A senha precisa ter pelo menos 6 caracteres"
    }
}




