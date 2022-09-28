const container = document.querySelector(".containerInicial");
const containerSec = document.querySelector(".containerSecundario");
const main = document.querySelector("main");

const mes = new Date().getUTCMonth() + 1;
const dataAtual = new Date().toLocaleDateString();

var info = [];
if (JSON.parse(localStorage.getItem("array"))) {
  info = JSON.parse(localStorage.getItem("array"));
}

var user = []
if (JSON.parse(localStorage.getItem('users'))){
  user = JSON.parse(localStorage.getItem('users'))
}

function ampliar(el) {
  el.nextElementSibling.style.height = "390px";
  el.parentNode.style.height = "450px";
}

function fecharDetail(el) {
  el.parentNode.parentNode.style.height = "0px";
  el.parentNode.parentNode.parentNode.style.height = "80px";
}

function consultar() {
  // container.classList.remove("aparecer");
  container.classList.add("sumir");

  setTimeout(() => {
    container.style.display = "none";
    containerSec.style.display = "flex";

    setTimeout(() => {
      containerSec.classList.remove("sumir");
      // containerSec.classList.add("aparecer");
    }, 50);
    listar();
  }, 500);
}

function voltar() {
  // containerSec.classList.remove("aparecer");
  containerSec.classList.add("sumir");

  setTimeout(() => {
    containerSec.style.display = "none";
    container.style.display = "flex";

    setTimeout(() => {
      container.classList.remove("sumir");
      // container.classList.add("aparecer");
    }, 50);
  }, 500);
}

function listar() {
  let template = `
    <div  class="card" onclick="voltar()" style="margin-bottom: 20px">
        <div class="minorCard">
        <div class="iconeHome">
        <i class="fa-solid fa-left-long"></i>
        </div>
        <div class="textHome">
            <span>Voltar</span>
            </div>
        </div>
    </div>
    `;

  info.forEach((item) => {
    template += `
        <div class="card">
        <div class="minorCard" onclick="ampliar(this)">
        <div class="iconeHome">
            <i class="fa-solid fa-calendar-days"></i>
            </div>
            <div class="textHome">
            <span>${item.data}</span>
            <div class="horaEdit">
            <p>${item.hora}</p>
            ${item.horaEdit? `<p style="color: #040"><i class="fa-solid fa-pen"  ></i> ${item.dataEdit} ${item.horaEdit}` : ``}</p>
            </div>
            </div>
        </div>
        <div id="editCard${info.indexOf(item)}" class="cardDetails">
            <div class="detailsRow">
                <label for="l128">
                    Loja 128
                    <input type="number" value=${item.l128} disabled id="l128">
                </label>
                <label for="l132">
                    Loja 132
                    <input type="number" value=${item.l132} disabled id="l132">
                </label>
            </div>
            <div class="detailsRow">
                <label for="l137">
                    Loja 137
                    <input type="number" value=${item.l137} disabled id="l137">
                </label>
                <label for="l152">
                    Loja 152
                    <input type="number" value=${item.l152} disabled id="l152">
                </label>
            </div>
            <div class="detailsRow">
                <label for="l154">
                    Loja 154
                    <input type="number" value=${item.l154} disabled id="l154">
                </label>
                <label for="l157">
                    Loja 157
                    <input type="number" value=${item.l157} disabled id="l157">
                </label>
            </div>
            <div class="detailsBtns">
                <p><i class="fa-solid fa-pen" onclick="editar(this, ${info.indexOf(item)})" ></i></p>
                <i class="fa-solid fa-trash" onclick="apagarRegistro(this, ${info.indexOf(
                  item
                )})"></i>
                <i class="fa-solid fa-xmark" onclick="fecharDetail(this)"></i>
            </div>
        </div>
    </div>
        `;
  });
  containerSec.innerHTML = template;
}

function editar(elem, i){
  const ind = i
  const card = document.querySelectorAll('#editCard'+i+' input')
  card.forEach((item)=>{
    item.removeAttribute('disabled')
  })

  // console.log(info[i])
  elem.parentNode.classList.toggle('sumir')

  
  setTimeout(() => {
    elem.parentNode.classList.toggle('sumir')
    elem.parentNode.innerHTML = `
    <i class="fa-solid fa-floppy-disk" onclick="salvarEdicao(this, ${ind})" ></i>
    `
  }, 300);

}

function salvarEdicao(item, i){

  const editado = item.parentNode.parentNode.parentNode.querySelectorAll('input')
  const card = document.querySelectorAll('#editCard'+i+' input')
  

  info[i].l128 = editado[0].value
  info[i].l132 = editado[1].value
  info[i].l137 = editado[2].value
  info[i].l152 = editado[3].value
  info[i].l154 = editado[4].value
  info[i].l157 = editado[5].value
  info[i].horaEdit = `${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s`;
  info[i].dataEdit = new Date().toLocaleDateString()

  window.localStorage.setItem("array", JSON.stringify(info));
  console.log(info)

  item.parentNode.classList.toggle('sumir')
  setTimeout(() => {
    item.parentNode.classList.toggle('sumir')
    item.parentNode.innerHTML=`
    <i class="fa-solid fa-pen" onclick="editar(this, ${i})" ></i>
    `
    card.forEach((item)=>{
      item.setAttribute('disabled', true)
    })
  }, 300);
}

function newReg() {
  // container.classList.remove("aparecer");
  container.classList.add("sumir");

  setTimeout(() => {
    container.style.display = "none";
    containerSec.style.display = "flex";

    setTimeout(() => {
      containerSec.classList.remove("sumir");
      // containerSec.classList.add("aparecer");
    }, 50);
    registrar();
  }, 500);
}

function registrar() {
  let template = `<div class="card" style="height: 320px">
    <div class="minorCard" >
    <div class="iconeHome">
        <i class="fa-solid fa-calendar-days"></i>
        </div>
        <div class="textHome">
        <span>${dataAtual}</span>
        </div>
    </div>
    <div class="cardDetails" style="height: 260px;">
        <div class="detailsRow">
            <label for="l128">
                Loja 128
                <input type="number" id="l128" onchange="dadosTemporario()">
            </label>
            <label for="l132">
                Loja 132
                <input type="number" id="l132" onchange="dadosTemporario()">
            </label>
        </div>
        <div class="detailsRow">
            <label for="l137">
                Loja 137
                <input type="number" id="l137" onchange="dadosTemporario()">
            </label>
            <label for="l152">
                Loja 152
                <input type="number" id="l152" onchange="dadosTemporario()">
            </label>
        </div>
        <div class="detailsRow">
            <label for="l154">
                Loja 154
                <input type="number" id="l154" onchange="dadosTemporario()">
            </label>
            <label for="l157">
                Loja 157
                <input type="number" id="l157" onchange="dadosTemporario()">
            </label>
        </div>
        <div class="detailsBtns">
            <i class="fa-solid fa-floppy-disk" onclick="salvar()"></i>
            <i class="fa-solid fa-xmark" onclick="voltar()"></i>
        </div>
    </div>
</div>`;

  containerSec.innerHTML = template;
  carregarDadosTemp()
}

function carregarDadosTemp() {
  const dadosTemporarios = JSON.parse(window.localStorage.getItem('temp'));
    document.querySelector('#l128').value = dadosTemporarios[0].l128;
    document.querySelector('#l132').value = dadosTemporarios[0].l132; 
    document.querySelector('#l137').value = dadosTemporarios[0].l137; 
    document.querySelector('#l152').value = dadosTemporarios[0].l152; 
    document.querySelector('#l154').value = dadosTemporarios[0].l154; 
    document.querySelector('#l157').value = dadosTemporarios[0].l157; 
}

function dadosTemporario(){
  const arrayTemporario = new Array({
    l128: document.querySelector("#l128").value,
    l132: document.querySelector("#l132").value,
    l137: document.querySelector("#l137").value,
    l152: document.querySelector("#l152").value,
    l154: document.querySelector("#l154").value,
    l157: document.querySelector("#l157").value
  })

  window.localStorage.setItem('temp', JSON.stringify(arrayTemporario))

}

function salvar() {
  const hora = `${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s`;
  const l128 = document.querySelector("#l128").value;
  const l132 = document.querySelector("#l132").value;
  const l137 = document.querySelector("#l137").value;
  const l152 = document.querySelector("#l152").value;
  const l154 = document.querySelector("#l154").value;
  const l157 = document.querySelector("#l157").value;

  info.unshift({
    data: dataAtual,
    hora: hora,
    l128: l128,
    l132: l132,
    l137: l137,
    l152: l152,
    l154: l154,
    l157: l157,
  });
  window.localStorage.setItem("array", JSON.stringify(info));
  window.localStorage.removeItem('temp')
  voltar();
}

function apagarRegistro(elem, i) {
  const icones = elem.parentNode;
  // icones.classList.remove("aparecer");
  icones.classList.add("sumir");
  setTimeout(() => {
    icones.innerHTML = `
        <p style="font-size: 1rem; font-weight: 700">Excluir este item?</p>
        <p onclick="del(this, ${i})" style="color: #0d0;" ><i class="fa-solid fa-check"></i></p>
        <p style="color: #900;" onclick="cancelarDel(this, ${i})"><i class="fa-solid fa-ban"></i></p>
        `;
    // icones.classList.add("aparecer");
    icones.classList.remove("sumir");
  }, 300);
}

function cancelarDel(elem, i) {
  const icones = elem.parentNode;
  // icones.classList.remove("aparecer");
  icones.classList.add("sumir");
  setTimeout(() => {
    icones.innerHTML = `
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash" onclick="apagarRegistro(this, ${i})"></i>
            <i class="fa-solid fa-xmark" onclick="fecharDetail(this)"></i>
            `;
    // icones.classList.add("aparecer");
    icones.classList.remove("sumir");
  }, 300);
}

function del(elem, i) {
  const card = elem.parentNode.parentNode.parentNode;

  card.style.height = 0;
  card.style.opacity = 0;
  card.style.margin = 0;

  setTimeout(() => {
    elem.parentNode.parentNode.parentNode.style.display = "none";
    info.splice(i, 1);
    window.localStorage.setItem("array", JSON.stringify(info));
    listar();
  }, 300);
}

function apagarTudo() {
  const animate = document.querySelector('#minorCard')

  // animate.classList.remove('aparecer')
  animate.classList.add('sumir')

  setTimeout(() => {
    animate.innerHTML = `
    <div id="minorCard" class="minorCard" style="flex-direction: column">
      <p>Deletar todos os registros?</p>
        <div class="deltreeIcons">
          <p onclick="deltree()" style="color: #0d0;" ><i class="fa-solid fa-check"></i></p>
          <p onclick="cancelDeltree()" style="color: #900;" ><i class="fa-solid fa-ban"></i></p>
        </div>
    </div>
    `
    animate.removeAttribute('onclick')
    animate.classList.remove('sumir')
    // animate.classList.add('aparecer')
  }, 300);

}

function cancelDeltree(){
  const minor = document.querySelector('#minorCard')
  // minor.classList.remove('aparecer')
  minor.classList.add('sumir')

  setTimeout(() => {
    minor.innerHTML = `
    <div class="minorCard" onclick="apagarTudo()">
                    <div class="iconeHome">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                    <div class="textHome">
                        <span>Apagar Tudo</span>
                    </div>
                </div>
    `
    minor.classList.remove('sumir')
    // minor.classList.add('aparecer')
  }, 300);
}

function deltree(){
   window.localStorage.removeItem("array");
  info = [];

  cancelDeltree()
}

function uploadAvatar(){
  container.classList.toggle('sumir')
  containerSec.style.display = 'flex'

  setTimeout(() => {
    containerSec.innerHTML= `
    
    <img src="" id="img" class="editAvatar" alt="Imagem do perfil"/>
    
    <div class="btnAvatar">
    
    <label id='labelFileInput' for='imgInput' >Buscar
    <input id="imgInput" type="file" accept="image/jpeg, image/png, image/jpg" onchange="changeImg()">
    </label>
                <button onclick="mudarAvatar()">Aceitar</button>
                <button onclick="cancelarMudancaAvatar()">Cancelar</button>
                
            </div>
    `
    container.style.display='none'
    containerSec.classList.remove('sumir')
  }, 300);
}

function pickImg() {

  const reader = new FileReader();
  reader.addEventListener('load', ()=>{
    const uploadImagem = reader.result
    document.querySelector('#imgEscolhida').style.backgroundImage = `url(${uploadImagem})`
    reader.readAsDataUrl(this.files[0])

  })

  
}

function changeImg(){
  var reader = new FileReader()
  reader.onload = function(){
    var imgContainer = document.querySelector('#img')
    imgContainer.src = reader.result
  }
  reader.readAsDataURL(event.target.files[0])
}

function mudarAvatar(){
  fotoNova = document.querySelector('#img')
  console.log(fotoNova.src)
  document.querySelector('#avatarAtual').src = fotoNova.src
  var indice = ''

  containerSec.classList.add('sumir')
  setTimeout(() => {
    container.style.display = 'flex'
    containerSec.style.display='none'
  }, 300);
  setTimeout(() => {
    container.classList.remove('sumir')
  }, 400);
  
  const salvarImg = user.filter((filtro)=>{
    return filtro.nome === document.querySelector('#nomeUser').innerHTML
  })
  user.map((item)=>{
    if (item.nome === salvarImg[0].nome){
      
      indice = user.indexOf(item)
    }
  })

  user[indice].imgSaved=fotoNova.src
  window.localStorage.setItem('users', JSON.stringify(user))
}

function cancelarMudancaAvatar(){
  // containerSec.classList.remove('aparecer')
  containerSec.classList.add('sumir')
  setTimeout(() => {
    containerSec.style.display='none'
    container.style.display = 'flex'
  }, 300);
  setTimeout(() => {
    container.classList.remove('sumir')
  }, 400);
}

function cadastrar(elem){
  const container = document.querySelector('.inicial')
  const title = document.querySelector('.inicial > span')
  container.classList.toggle('sumir')
  document.querySelector('#error').classList.add('sumir')

  setTimeout(() => {
    title.innerHTML = 'Cadastrar'
    elem.parentNode.innerHTML = 'Já possui conta? <strong id="strong" onclick="logar(this)">Logue-se</strong>'
    container.classList.toggle('sumir')
    document.querySelector('.inicial button').innerHTML = "Cadastrar"
    document.querySelector('.inicial button').setAttribute('onclick', 'criarConta()')
  }, 300);
}

function criarConta(){
  const nome = document.querySelector('#nome')
  const senha = document.querySelector('#senha')
  const erro = document.querySelector('#error')

  console.log(localStorage.getItem('users'))

  if (nome.value !== '' && senha.value !== ''){
    var test = user.filter((filtro)=>{
      return filtro.nome === nome.value
    })

    if (test.length === 0){
      user = [...user, {nome: nome.value, senha: senha.value}]
      erro.innerHTML=nome.value+' foi criado!'
      window.localStorage.setItem('users', JSON.stringify(user))
      erro.classList.remove('sumir')
      setTimeout(() => {
        logar(document.querySelector('#strong'))
      
      }, 3000);
    }else{
      erro.innerHTML=nome.value+' já existe!'
      nome.focus()
      erro.classList.remove('sumir')
      setTimeout(() => {
        erro.classList.add('sumir')
      }, 3000);
      console.log(user)
    }

  }else{
    erro.innerHTML='Preencha os campos de Nome e Senha'
    erro.classList.remove('sumir')
    setTimeout(() => {
      erro.classList.add('sumir')
    }, 3000);
  }

}

function logar(elem){
  const container = document.querySelector('.inicial')
  const title = document.querySelector('.inicial > span')
  container.classList.add('sumir')

  setTimeout(() => {
    document.querySelector('#error').classList.add('sumir')
    nome.value = ''
    senha.value = ''
    title.innerHTML = "Login"
    elem.parentNode.innerHTML = 'Não possui conta? <strong onclick="cadastrar(this)">Cadastre-se</strong>'
    document.querySelector('.inicial button').innerHTML = "Entrar"
    container.classList.toggle('sumir')
    document.querySelector('.inicial button').setAttribute('onclick', 'entrar()')

  }, 300);
}

function entrar(){
  const nome = document.querySelector('#nome')
  const senha = document.querySelector('#senha')
  const erro = document.querySelector('#error')

  if (nome.value === '' || senha.value === ''){

    console.log('Campos vazios')
    erro.innerHTML = 'Preencha os campos de Nome e Senha'
    erro.classList.remove('sumir')
    setTimeout(() => {
      erro.classList.add('sumir')
      
    }, 5000);
    
  }else{
   
    const filtro = user.filter((filtrar)=>{
      return filtrar.nome === nome.value && filtrar.senha === senha.value
    })

   if (filtro.length > 0){

    document.querySelector('.avatar').style.visibility='visible'
    document.querySelector('.avatar').style.opacity=1
    document.querySelector('#nomeUser').innerHTML = filtro[0].nome
    document.querySelector('.inicial').classList.add('sumir')
    document.querySelector('.containerInicial').style.display='flex'
    document.querySelector('#avatarAtual').setAttribute('alt', filtro[0].nome.charAt(0))
    setTimeout(() => {
      document.querySelector('#avatarAtual').src = filtro[0].imgSaved
      document.querySelector('header').style.height='60px'
      document.querySelector('.inicial').style.display='none'
      document.querySelector('.containerInicial').classList.remove('sumir')
    }, 300);
    

   }else{
    erro.innerHTML = "Nome e Senha não conferem!"
    erro.classList.remove('sumir')
    setTimeout(() => {
      erro.classList.add('sumir')
    }, 5000);
   }
  }

 
}



