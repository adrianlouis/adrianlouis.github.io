const urlParams = new URLSearchParams(window.location.search);

const nomeParam = urlParams.get("code")

var nomeDoProduto = document.getElementById("itemName")
// nomeDoJogo.innerHTML = nomeParam




// function carregarDetalhes() {

//     let produto = [
//         {
//             code: 1,
//             nome: "gta",
//             img: "img/back4blood.jpg"
//         },
//         {
//             code: 2,
//             nome: 'acreed',
//             img: "img/codVanguard.jpg"
//         },
//         {
//             code: 3,
//             nome: 'diablo',
//             img: "img/diablo.jpeg"
//         }
//     ]

//     let template = "";
//     const produtos = produto[nomeParam];
//     template += `
//         <span id="itemName"> ${produtos.nome} </span>  <span id="inner"></span>

//         `
//         nomeDoProduto.innerHTML = template;

// }










// var produtos = [
//     {
//         id: 1,
//         nome: "Need For Speed",
//         capa: "img/NFS_Payback.jpg"
//     },
//     {
//         id:2,
//         nome: "Nascar 21",
//         capa: "img/nascar21.jpg"
//     }
// ]