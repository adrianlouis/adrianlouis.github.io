const container = document.querySelector('.containerInicial')
const containerSec = document.querySelector('.containerSecundario')
const main = document.querySelector('main')

const mes = (new Date().getUTCMonth() + 1) 
const agora =  `${new Date().getUTCDate()} - ${mes < 10 ? '0'+mes : mes } - ${new Date().getUTCFullYear()}`


var info = []

function ampliar(el){
    el.nextElementSibling.style.height = '242px'
}

function fecharDetail(el){
    el.parentNode.parentNode.style.height = '0px'
}

function consultar(){
    container.classList.remove('aparecer')
    container.classList.add('sumir')
    
    setTimeout(() => {
        container.style.display = 'none'
        containerSec.style.display= 'flex'

        setTimeout(() => {
            containerSec.classList.remove('sumir')
            containerSec.classList.add('aparecer')
        }, 50);
        listar()
    }, 500);
}



function voltar(){
    containerSec.classList.remove('aparecer')
    containerSec.classList.add('sumir')
    
    setTimeout(() => {
        containerSec.style.display= 'none'
        container.style.display= 'flex'
        
        setTimeout(() => {
            container.classList.remove('sumir')
            container.classList.add('aparecer')
        }, 50);

    }, 500);
    
   
}

function listar() {
    const reverse = info.reverse()
    let template = `
    <div class="card" onclick="voltar()">
        <div class="minorCard">
        <i class="fa-solid fa-left-long"></i>
            <span>Voltar</span>
        </div>
    </div>
    `

    info.forEach((item)=>{
        template += `
        <div class="card">
        <div class="minorCard" onclick="ampliar(this)">
            <i class="fa-solid fa-calendar-days"></i>
            <span>${item.data}</span>
        </div>
        <div class="cardDetails">
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
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-xmark" onclick="fecharDetail(this)"></i>
            </div>
        </div>
    </div>
        `
    }
    )

    containerSec.innerHTML = template
   
}

function newReg(){
    container.classList.remove('aparecer')
    container.classList.add('sumir')
    
    setTimeout(() => {
        container.style.display = 'none'
        containerSec.style.display= 'flex'

        setTimeout(() => {
            containerSec.classList.remove('sumir')
            containerSec.classList.add('aparecer')
        }, 50);
        registrar()
    }, 500);
}


function registrar() {
    
    let template = `<div class="card">
    <div class="minorCard" >
        <i class="fa-solid fa-calendar-days"></i>
        <span>${agora}</span>
    </div>
    <div class="cardDetails" style="height: 242px;">
        <div class="detailsRow">
            <label for="l128">
                Loja 128
                <input type="number" id="l128">
            </label>
            <label for="l132">
                Loja 132
                <input type="number" id="l132">
            </label>
        </div>
        <div class="detailsRow">
            <label for="l137">
                Loja 137
                <input type="number" id="l137">
            </label>
            <label for="l152">
                Loja 152
                <input type="number" id="l152">
            </label>
        </div>
        <div class="detailsRow">
            <label for="l154">
                Loja 154
                <input type="number" id="l154">
            </label>
            <label for="l157">
                Loja 157
                <input type="number" id="l157">
            </label>
        </div>
        <div class="detailsBtns">
            <i class="fa-solid fa-floppy-disk" onclick="salvar()"></i>
            <i class="fa-solid fa-trash"></i>
            <i class="fa-solid fa-xmark" onclick="voltar()"></i>
        </div>
    </div>
</div>`
    
    containerSec.innerHTML = template
}

function salvar() {

    const l128 = document.querySelector('#l128').value
    const l132 = document.querySelector('#l132').value
    const l137 = document.querySelector('#l137').value
    const l152 = document.querySelector('#l152').value
    const l154 = document.querySelector('#l154').value
    const l157 = document.querySelector('#l157').value

    info.push({ data: agora, l128: l128, l132: l132, l137: l137, l152: l152, l154: l154, l157: l157})
    localStorage.setItem('array', JSON.stringify(info))
    console.log(info)
}

info = JSON.parse(localStorage.getItem('array'))
