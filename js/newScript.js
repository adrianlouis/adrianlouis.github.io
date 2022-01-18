

$(document).ready(function () {

    $("#buycheck").click(function () {
        $(this).hide();
    });

    let incog = 0
    $("#iconLupa").click(function () {
        if (incog === 0) {
            $(".textoRedLogo").fadeOut('slow')
            $("#aa").fadeOut('slow', function () {
                $("#inputFind").css('opacity', '1')
                incog++
            })
        } else {
            $("#inputFind").css('opacity', '0')
            $(".textoRedLogo").fadeIn('slow')
            $("#aa").fadeIn('slow')
            incog = 0
        }
    })

    $("#inputFind").focusout(function () {
        $("#inputFind").css('opacity', '0')

        $('.textoRedLogo').fadeIn('slow')
        $('#aa').fadeIn('slow')
        incog = 0
    })
})

// FUNÇÃO DO MENU DO HEADER 
function openMenu() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("menuHeader").style.opacity = 0;
}

function closeBtn() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menuHeader").style.opacity = 1;
}

// SUMIR/APARECER ICONES/BUSCAR NA DIREITA DO HEAD
function search() {
    document.querySelector("#iconLupa").style.opacity = 0
    document.querySelector("#iconCart").style.opacity = 0
    document.querySelector("#iconUser").style.opacity = 0
    document.querySelector("#iconLupa").style.transition = ".5s .1s"
    document.querySelector("#iconCart").style.transition = ".5s .1s"
    document.querySelector("#iconUser").style.transition = ".5s .1s"

    document.getElementById("idFindBar").style.visibility = "visible"
    document.getElementById("idFindBar").style.opacity = 1
    document.getElementById("idFindBar").style.transition = ".5s .5s"
}
function searchclose() {
    document.querySelector("#iconLupa").style.opacity = 1
    document.querySelector("#iconLupa").style.transition = ".5s .5s"
    document.querySelector("#iconCart").style.opacity = 1
    document.querySelector("#iconCart").style.transition = ".5s .5s"
    document.querySelector("#iconUser").style.opacity = 1
    document.querySelector("#iconUser").style.transition = ".5s .5s"

    document.getElementById("idFindBar").style.visibility = "hidden"
    document.getElementById("idFindBar").style.opacity = 0
    document.getElementById("idFindBar").style.transition = ".5s .1s"
}


// BANNER 
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}


// GALERIA DA INDEX 


var slideGIndex = 1;
showSlidesG(slideGIndex);

function plusSlidesG(n) {
    showSlidesG(slideGIndex += n);
}

function currentSlideG(n) {
    showSlidesG(slideGIndex = n);
}

function showSlidesG(n) {
    var i;
    var slidesG = document.getElementsByClassName("mySlidesG");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slidesG.length) { slideGIndex = 1 }
    if (n < 1) { slideGIndex = slidesG.length }
    for (i = 0; i < slidesG.length; i++) {
        slidesG[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slidesG[slideGIndex - 1].style.display = "block";
    dots[slideGIndex - 1].className += " active";
    captionText.innerHTML = dots[slideGIndex - 1].alt;
}

let promo = [

    {
        marca: "",
        edicao: "padrão",
        titulo: "Far Cry 6",
        preco: "R$170,00",
        parcel: "34,00",
        imagem: "img/capas/farcry6.jpg",
        desconto: '',
        semdesc: ''
    },
    {
        marca: "",
        edicao: "padrão",
        titulo: "Quantum Break",
        preco: "R$40,00",
        parcel: "16,00",
        imagem: "img/capas/qbreak.jpg",
        desconto: "",
        semdesc: ""
    },

    {
        marca: "",
        edicao: "lendária",
        titulo: "Grand Theft Auto V",
        semdesc: "R$ 130,00",
        preco: "R$110,50",
        parcel: "26,00",
        imagem: "img/capas/gtaV.jpg",
        desconto: '<i class="fas fa-arrow-down"></i> 15%',

    },

    {
        marca: "",
        edicao: "deluxe",
        titulo: "Horizon Zero Dawn",
        semdesc: "R$ 299,",
        preco: "R$284,00",
        parcel: "59,80",
        imagem: "newImg/horizon.png",
        desconto: '<i class="fas fa-arrow-down"></i> 5%',

    },

    {
        marca: "",
        edicao: "deluxe",
        titulo: "Zelda Breath of the Wild",
        semdesc: "R$ 299,",
        preco: "R$284,00",
        parcel: "59,80",
        imagem: "newImg/zelda.png",
        desconto: '<i class="fas fa-arrow-down"></i> 5%',

    },

    {
        marca: "",
        edicao: "padrão",
        titulo: "Forza Horizon 4",
        semdesc: "",
        preco: "R$100,00",
        parcel: "20,00",
        imagem: "newImg/fh4.jpg",
        desconto: "",

    }

]
let dados = [

    {
        code: 0,
        marca: "ms",
        edicao: "padrão",
        titulo: "Halo Infinite",
        preco: "R$250,00",
        parcel: "50,00",
        imagem: "newImg/halo infinite.jpg",
        desconto: '<i class="fas fa-arrow-down"></i> 10%',
        semdesc: ''
    },
    {
        code: 1,
        marca: "nint",
        edicao: "padrão",
        titulo: "The King of Fighters XV",
        preco: "R$125,00",
        parcel: "25,00",
        imagem: "img/capas/kof.jpg",
        desconto: '<i class="fas fa-arrow-down"></i> 20%',
        semdesc: ""
    },

    {
        code: 2,
        marca: "ms",
        edicao: "lendária",
        titulo: "Grand Theft Auto V",
        semdesc: "R$130,00",
        preco: "R$110,50",
        parcel: "26,00",
        imagem: "img/capas/gtaV.jpg",
        desconto: '<i class="fas fa-arrow-down"></i> 10%',

    },

    {
        code: 3,
        marca: "psx",
        edicao: "deluxe",
        titulo: "Need For Speed Heat",
        semdesc: "R$ 299,",
        preco: "R$284,00",
        parcel: "59,80",
        imagem: "img/capas/nfsHeat.jpg",
        desconto: '<i class="fas fa-arrow-down"></i> 10%',

    },

    {
        code: 4,
        marca: "ninti",
        edicao: "deluxe",
        titulo: "Zelda Breath of the Wild",
        semdesc: "R$ 299,",
        preco: "R$284,00",
        parcel: "59,80",
        imagem: "newImg/zelda.png",
        desconto: '<i class="fas fa-arrow-down"></i> 5%',

    }

    // {
    //     code: 5,
    //     marca: "ms",
    //     edicao: "padrão",
    //     titulo: "Forza Horizon 4",
    //     semdesc: "",
    //     preco: "R$100,00",
    //     parcel: "20,00",
    //     imagem: "newImg/fh4.jpg",
    //     desconto: '<i class="fas fa-arrow-down"></i> 5%',

    // }

]


function lancamentos() {
    let contLanNov21 = document.querySelector(".contNov21")
    let contLanSet21 = document.querySelector(".contSet21")
    let contLanOut21 = document.querySelector(".contOut21")
    let contLanAgo21 = document.querySelector(".contAgo21")

    // ARRAY GLOBAL - 0nov, 1out, 2set, 3ago
    lanNov21 = [[
        {
            capa: "justdance22.jpg",
            nome: "Just Dance 2022",
            data: "04.11.21"
        },
        {
            capa: "codVanguard.jpg",
            nome: "Call of Duty Vanguard",
            data: "05.11.21"
        },
        {
            capa: "ForzaH5.jpg",
            nome: "Forza Horizon 5",
            data: "09.11.21"
        },
        {
            capa: "bf2042.jpg",
            nome: "Battlefield 2042",
            data: "19.11.21"
        },
        {
            capa: "ffXIVEndWalker.png",
            nome: "Final Fantasy XIV End Walker",
            data: "19.11.21"
        },
        {
            capa: "brilliantDiamond.webp",
            nome: "Pokemon Brilliant Diamond",
            data: "19.11.21"
        },
        {
            capa: "farmingSimulator22.jpg",
            nome: "Farming Simulator 22",
            data: "22.11.21"
        }],
    [

        {
            capa: "farcry6.jpg",
            nome: "Far Cry 6",
            data: "07.10.21"
        },
        {
            capa: "back4blood.jpg",
            nome: "Back 4 Blood",
            data: "12.10.21"
        },
        {
            capa: "demonSlayer.jpg",
            nome: "Demon Slayer - The Hinokami Chronicles",
            data: "13.10.21"
        },
        {
            capa: "guardians.jpg",
            nome: "Guardiões da Galáxia da Marvel",
            data: "13.10.21"
        },
        {
            capa: "nascar21.jpg",
            nome: "Nascar 21 Ignition",
            data: "27.10.21"
        },
        {
            capa: "fatalFrameMaiden.jpg",
            nome: "Fatal Frame: Maiden of Black Water",
            data: "27.10.21"
        }
    ],
    [{
        capa: "deathloop.jpg",
        nome: "Deathloop",
        data: "14.09.21"
    },
    {
        capa: "diablo2.jpg",
        nome: "Diablo 2 Resurrected",
        data: "23.09.21"
    },
    {
        capa: "deathStrandingDirectors.webp",
        nome: "Death Stranding Director's Cut",
        data: "24.09.21"
    },
    {
        capa: "fifa22.jpg",
        nome: "FIFA 22",
        data: "27.09.21"
    }
    ],
    [
        {
            capa: "hades.jpg",
            nome: "Hades",
            data: "13.08.21"
        },
        {
            capa: "twelveMinutes.jpg",
            nome: "Twelve Minutes",
            data: "19.08.21"
        },
        {
            capa: "ghostTsushimaDirector.jpg",
            nome: "Ghost of Tsushima Director's Cut",
            data: "20.08.21"
        },
        {
            capa: "aliensFireteam.jpg",
            nome: "Aliens: Fireteam Elite",
            data: "24.08.21"
        }
    ]

    ]



    let tempLancamento = "";
    let tempOut21 = "";
    let tempLanSet21 = "";
    let tempLanAgo21 = "";

    for (let indout21 = 0; indout21 < lanNov21[1].length; indout21++) {
        const lancamentoOut21 = lanNov21[1][indout21];
        tempOut21 += `
        <div class="grid-item">
        <img src="img/capas/${lancamentoOut21.capa}">
        <span>${lancamentoOut21.nome}</span>
        <span>${lancamentoOut21.data}</span>
    </div>`
    }
    contLanOut21.innerHTML = tempOut21

    for (let index = 0; index < lanNov21[0].length; index++) {
        const lancamentoNov21 = lanNov21[0][index];


        tempLancamento += `
        <div class="grid-item">
        <img src="img/capas/${lancamentoNov21.capa}">
        <span>${lancamentoNov21.nome}</span>
        <span>${lancamentoNov21.data}</span>
    </div>`
    }
    contLanNov21.innerHTML = tempLancamento

    for (let iLanSet = 0; iLanSet < lanNov21[2].length; iLanSet++) {
        const lancamentoSet21 = lanNov21[2][iLanSet];

        tempLanSet21 += `
        <div class="grid-item">
        <img src="img/capas/${lancamentoSet21.capa}">
        <span>${lancamentoSet21.nome}</span>
        <span>${lancamentoSet21.data}</span>
        </div>`
    }
    contLanSet21.innerHTML = tempLanSet21

    for (let index = 0; index < lanNov21[3].length; index++) {
        const lancamentoAgo21 = lanNov21[3][index]

        tempLanAgo21 += `
        <div class="grid-item">
        <img src="img/capas/${lancamentoAgo21.capa}">
        <span>${lancamentoAgo21.nome}</span>
        <span>${lancamentoAgo21.data}</span>
        </div>
        `
    }
    contLanAgo21.innerHTML = tempLanAgo21

}

function tempCard() {

    let cont = document.getElementById("destaque");
    let promos = document.getElementById("destaqueMaisVendidos");

    let template = "";

    for (let index = 0; index < dados.length; index++) {
        const consDados = dados[index];

        template += `
         <div id="card${index}" class="card">
            <div class="img">
                <a href="novoDetalhe.html?code=${index}">
                    <img id="idCardImagem" src="${consDados.imagem}">
                </a>
            </div>
        <div class="cardTexto">
            <span id="product" class="nomeDoProduto">${consDados.titulo}</span>
                <div class="promoPreco">
                    <span class="promo">${consDados.desconto}</span>
                    <span class="precoDoProduto">${consDados.preco}</span>
                </div>
            <span class="parcelas"><i class="fab fa-cc-mastercard"></i>  3x sem juros</span>
            <a id="btnBuy" href="novoDetalhe.html?arr=0&code=${index}" class="btnBuy">Comprar</a>
        </div>
       

     </div>`
    }
    cont.innerHTML = template;






    let templatePromo = ""
    // PROMOS 
    for (let index2 = 0; index2 < promo.length; index2++) {
        const consPromo = promo[index2];

        templatePromo += ` <div id="card" class="card">
        <div class="img">
            <img src="${consPromo.imagem}">
        </div>
        <div class="cardTexto">
            <span class="nomeDoProduto">${consPromo.titulo}</span>
            <div class="promoPreco">
            <span class="promo">${consPromo.desconto}</span>
            <span class="precoDoProduto">${consPromo.preco}</span>
            </div>
            <span class="parcelas"><i class="fab fa-cc-mastercard"></i>  3x sem juros</span>
            <a id="idCardBtn" href="novoDetalhe.html?arr=1&code=${index2}" class="btnBuy">Comprar</a>
        </div>
    </div>`
    }

    promos.innerHTML = templatePromo;
}

// function carregarDetalhes() {
//     let dados = [

//         {
//             code: 0,
//             marca: "ms",
//             edicao: "padrão",
//             titulo: "Halo Infinite",
//             preco: "R$250,00",
//             parcel: "50,00",
//             imagem: "newImg/halo infinite.jpg",
//             desconto: '<i class="fas fa-arrow-down"></i> 10%',
//             semdesc: ''
//         },
//         {
//             code: 1,
//             marca: "nint",
//             edicao: "padrão",
//             titulo: "The King of Fighters 13",
//             preco: "R$125,00",
//             parcel: "25,00",
//             imagem: "newImg/kof13.jpg",
//             desconto: '<i class="fas fa-arrow-down"></i> 20%',
//             semdesc: ""
//         },

//         {
//             code: 2,
//             marca: "ms",
//             edicao: "lendária",
//             titulo: "Grand Theft Auto V",
//             semdesc: "R$130,00",
//             preco: "R$110,50",
//             parcel: "26,00",
//             imagem: "newImg/gta v.jpg",
//             desconto: '<i class="fas fa-arrow-down"></i> 10%',

//         },

//         {
//             code: 3,
//             marca: "psx",
//             edicao: "deluxe",
//             titulo: "Need For Speed Payback",
//             semdesc: "R$ 299,",
//             preco: "R$284,00",
//             parcel: "59,80",
//             imagem: "newImg/nfs2.jpg",
//             desconto: '<i class="fas fa-arrow-down"></i> 10%',

//         },

//         {
//             code: 4,
//             marca: "ninti",
//             edicao: "deluxe",
//             titulo: "Zelda Breath of the Wild",
//             semdesc: "R$ 299,",
//             preco: "R$284,00",
//             parcel: "59,80",
//             imagem: "newImg/zelda.png",
//             desconto: '<i class="fas fa-arrow-down"></i> 5%',

//         },

//         {
//             code: 5,
//             marca: "ms",
//             edicao: "padrão",
//             titulo: "Forza Horizon 4",
//             semdesc: "",
//             preco: "R$100,00",
//             parcel: "20,00",
//             imagem: "newImg/fh4.jpg",
//             desconto: '<i class="fas fa-arrow-down"></i> 5%',

//         }

//     ]
//     let promo = [

//         {
//             ts: 0,
//             marca: "",
//             edicao: "padrão",
//             titulo: "Far Cry 6",
//             preco: "R$170,00",
//             parcel: "34,00",
//             imagem: "newImg/fc6.jpg",
//             desconto: '',
//             semdesc: ''
//         },
//         {
//             ts: 1,
//             marca: "",
//             edicao: "padrão",
//             titulo: "Quantum Break",
//             preco: "R$40,00",
//             parcel: "16,00",
//             imagem: "newImg/qbreak.jpg",
//             desconto: "",
//             semdesc: ""
//         },

//         {
//             ts: 3,
//             marca: "",
//             edicao: "lendária",
//             titulo: "Grand Theft Auto V",
//             semdesc: "R$ 130,00",
//             preco: "R$110,50",
//             parcel: "26,00",
//             imagem: "newImg/gta v.jpg",
//             desconto: '<i class="fas fa-arrow-down"></i> 15%',

//         },

//         {
//             ts: 4,
//             marca: "",
//             edicao: "deluxe",
//             titulo: "Horizon Zero Dawn",
//             semdesc: "R$ 299,",
//             preco: "R$284,00",
//             parcel: "59,80",
//             imagem: "newImg/horizon.png",
//             desconto: '<i class="fas fa-arrow-down"></i> 5%',

//         },

//         {
//             ts: 5,
//             marca: "",
//             edicao: "deluxe",
//             titulo: "Zelda Breath of the Wild",
//             semdesc: "R$ 299,",
//             preco: "R$284,00",
//             parcel: "59,80",
//             imagem: "newImg/zelda.png",
//             desconto: '<i class="fas fa-arrow-down"></i> 5%',

//         },

//         {
//             ts: 6,
//             marca: "",
//             edicao: "padrão",
//             titulo: "Forza Horizon 4",
//             semdesc: "",
//             preco: "R$100,00",
//             parcel: "20,00",
//             imagem: "newImg/fh4.jpg",
//             desconto: "",

//         }

//     ]
//     const urlParams = new URLSearchParams(window.location.search);
//     const codeParam = urlParams.get("code")
//     const produtos = dados[codeParam];
//     var nomeDoProduto = document.getElementById("itemName")
//     let templateDet = "";
//     templateDet += `
//     <span id="itemName"> ${produtos.titulo} </span>  <span id="inner"></span>

//     `
//     nomeDoProduto.innerHTML = templateDet;

// }


// PAGINA DETALHES 

function detailsCards() {
    const card = document.querySelector("#contDetalhes")
    const screenshots = document.querySelector('.screenshots')

    let cardsBD = [
        [
            {
                code: 0,
                marca: "ms",
                edicao: "padrão",
                titulo: "Halo Infinite",
                preco: "250,<small>00</small>",
                parcel: "50,00",
                imagem: "haloinfinite.jpg",
                desconto: '<i class="fas fa-arrow-down"></i> 10%',
                semdesc: '',
                descricao: "Halo Infinite oferece uma experiência incrível no Xbox One e na família de consoles mais recentes, bem como no PC com gráficos 4K impressionantes e jogabilidade multiplataforma de qualidade internacional. E no Xbox Series X, bem como nos PCs com suporte, desfrute de recursos aprimorados como até 120 FPS e tempos de carregamento muito reduzidos, criando uma jogabilidade perfeita que inaugura a próxima geração de jogos",
                ss1: "haloinfiniteSS1.jpg",
                ss2: "haloinfiniteSS2.jpg",
                ss3: "haloinfiniteSS3.jpg"
            },
            {
                code: 1,
                marca: "nint",
                edicao: "padrão",
                titulo: "The King of Fighters XV",
                preco: "125,<small>00</small>",
                parcel: "25,00",
                imagem: "kof.jpg",
                desconto: '<i class="fas fa-arrow-down"></i> 20%',
                semdesc: "",
                descricao: "Desde a estreia em 1994, a série de jogos de luta KOF tem oferecido emoções pelo mundo com personagens cativantes e um sistema de jogo incomparável. Seis anos depois do último título da série, KOF XV supera todos os antecessores em termos de gráficos, sistemas e experiência online!",
                ss1: "kofxvss1.jpg",
                ss2: "kofxvss2.jpg",
                ss3: "kofxvss3.jpg"
            },

            {
                code: 2,
                marca: "ms",
                edicao: "lendária",
                titulo: "Grand Theft Auto V",
                semdesc: "R$130,00",
                preco: "110,<small>50</small>",
                parcel: "26,00",
                imagem: "gtav.jpg",
                desconto: '<i class="fas fa-arrow-down"></i> 10%',
                descricao: "Quando um jovem traficante, um assaltante de bancos aposentado e um psicopata aterrorizante envolvem-se com alguns dos elementos mais assustadores e desequilibrados do submundo do crime, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.",
                ss1: "gtavss1.jpg",
                ss2: "gtavss2.jpg",
                ss3: "gtavss3.jpg"
            },

            {
                code: 3,
                marca: "psx",
                edicao: "deluxe",
                titulo: "Need For Speed Heat",
                semdesc: "R$ 299,",
                preco: "285,<small>00</small>",
                parcel: "59,80",
                imagem: "nfsHeat.jpg",
                desconto: '<i class="fas fa-arrow-down"></i> 10%',
                descricao: "Trabalhe de dia e arrisque tudo à noite no Need for Speed™ Heat, um jogo de corrida emocionante que coloca você lado a lado contra a polícia corrupta da cidade.",
                ss1: "nfsheatss1.jpg",
                ss2: "nfsheatss2.jpg",
                ss3: "nfsheatss3.jpg"

            },

            {
                code: 4,
                marca: "ninti",
                edicao: "deluxe",
                titulo: "Zelda Breath of the Wild",
                semdesc: "R$ 299,",
                preco: "284,<small>00</small>",
                parcel: "59,80",
                imagem: "zelda2.png",
                desconto: '<i class="fas fa-arrow-down"></i> 5%',
                descricao: "Esqueça tudo que você sabe sobre os jogos da série The Legend of Zelda. Entre em um mundo de descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa série que veio para romper barreiras. Viaje pelos vastos campos, florestas e montanhas enquanto descobre o que aconteceu com o reino de Hyrule nesta deslumbrante aventura a céu aberto. E agora no Nintendo Switch, a sua jornada tem mais liberdade do que nunca. Leve o seu console para qualquer lugar e viva aventuras na pele de Link da maneira que quiser."

            },

            {
                code: 5,
                marca: "ms",
                edicao: "padrão",
                titulo: "Forza Horizon 4",
                semdesc: "",
                preco: "100,<small>00</small>",
                parcel: "20,00",
                imagem: "forzaHorizon4.jpg",
                desconto: '<i class="fas fa-arrow-down"></i> 5%',
                descricao: "As temporadas dinâmicas mudam tudo no maior festival automotivo do mundo. Vá sozinho ou junte-se a outros para explorar a bela e histórica Grã-Bretanha em um mundo aberto compartilhado. Colecione, modifique e dirija mais de 450 carros. Corra, faça acrobacias, crie e explore – escolha o seu próprio caminho para se tornar um Horizon Superstar."

            }],
        [{
            imagem: "farcry6.jpg",
            titulo: "Far Cry 6",
            descricao: "Bem-vindo a Yara, um paraíso tropical parado no tempo. Far Cry® 6 leva os jogadores ao mundo cheio de adrenalina de uma revolução moderna de guerrilha. Como ditador de Yara, Antón Castillo está empenhado em restaurar sua nação de volta à sua antiga glória por qualquer meio, com seu filho, Diego, obedientemente ao seu lado. Torne-se um guerrilheiro e destrua o regime deles.",
            preco: "170,00"
        },
        {
            imagem: "qbreak.jpg",
            titulo: "Quantum Break",
            descricao: "Da Remedy Entertainment, os mestres de jogos de ação cinemática como Max Payne e Alan Wake, chega Quantum Break, um jogo emocionante de suspense amplificado pelo tempo. A experiência Quantum Break é parte jogo, parte seriado de ação ao vivo, onde as decisões de um afetam dramaticamente o outro. Você é Jack Joyce, lutando contra a nefasta Monarch Corporation para impedir o fim do tempo. Momentos épicos de destruição, congelados em lapsos temporais caóticos, se tornam o pano de fundo para o combate intenso. Com um elenco de atores de X-Men, Game of Thrones, The Wire e mais, a história amplificada pelo tempo de Quantum Break é uma experiência de entretenimento única e inovadora.",
            preco: "40,00"
        },
        {
            imagem: "gtaV.jpg",
            titulo: "Grand Theft Auto V",
            descricao: "Quando um jovem traficante, um assaltante de bancos aposentado e um psicopata aterrorizante envolvem-se com alguns dos elementos mais assustadores e desequilibrados do submundo do crime, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro. ",
            preco: "110,50"
        },
        {
            imagem: "horizon.png",
            titulo: "Horizon Zero Dawn",
            descricao: "Em uma era na qual máquinas vagam livremente e a humanidade deixou de ser a espécie dominante, uma jovem caçadora chamada Aloy inicia uma jornada na qual desvendará o seu destino. Em um mundo pós-apocalíptico exuberante, onde a natureza retomou as ruínas de uma civilização esquecida, pequenos grupos de pessoas vivem em tribos primitivas de caçadores e coletores. O domínio delas sobre esse novo ambiente selvagem foi usurpado pelas máquinas, terríveis criaturas mecânicas de origem desconhecida.",
            preco: "284,00"
        }
        ]

    ]

    // const detalheCard = promo[index2];
    const urlParams = new URLSearchParams(window.location.search);
    const cdParam = urlParams.get("arr")
    const codeParam = urlParams.get("code")
    const cardDetail = cardsBD[cdParam][codeParam];



    let template = ""
    template += `
    <div class="imagemDetail">
    <img class="fotoCapaDetalhes" src="img/capas/${cardDetail.imagem}">
    </div>

    <div class="descricao">
        <span class="nomeDoProdutoDet" id="nomeDoProdutoDet">${cardDetail.titulo}</span>

        <span id="detalheDoProduto" class="precoDoProd">${cardDetail.descricao}
        </span>
        <span class="valor">Preço: R$ ${cardDetail.preco}</span> </span>
        <div class="precoBotao">
        <a href="cart.html"><button class="btnComprar" type="button">Comprar</button></a>
            <button class="btnComprar" type="button">Adicionar</button>
        </div>

    </div>
    `
    card.innerHTML = template;
}





function scrollEsquerda() {
    let width = document.documentElement.clientWidth
    let largura = document.getElementById('topSeller').scrollLeft += width;
}

function scrollDireita() {
    let width = document.documentElement.clientWidth
    let largura = document.getElementById('topSeller').scrollLeft -= width;
}
