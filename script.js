const torres = document.getElementsByClassName("torres");

const discos = [];
const fichas = [];

const torreA = new Torre("a", true);
const torreB = new Torre("b", false);
const torreC = new Torre("c", false);

const fichasA = [];
const fichasB = [];
const fichasC = [];

const disco0 = new Disco(0);
const disco1 = new Disco(1);
const disco2 = new Disco(2);
const disco3 = new Disco(3);
const disco4 = new Disco(4);
const disco5 = new Disco(5);
const disco6 = new Disco(6);
const disco7 = new Disco(7);

const ficha0 = disco0.disco;
const ficha1 = disco1.disco;
const ficha2 = disco2.disco;
const ficha3 = disco3.disco;
const ficha4 = disco4.disco;
const ficha5 = disco5.disco;
const ficha6 = disco6.disco;
const ficha7 = disco7.disco;

const valor0 = disco0.valor;
const valor1 = disco1.valor;
const valor2 = disco2.valor;
const valor3 = disco3.valor;
const valor4 = disco4.valor;
const valor5 = disco5.valor;
const valor6 = disco6.valor;
const valor7 = disco7.valor;

discos.push(ficha0);
discos.push(ficha1);
discos.push(ficha2);
discos.push(ficha3);
discos.push(ficha4);
discos.push(ficha5);
discos.push(ficha6);
discos.push(ficha7);



function limpaTorre(){
    for (let i = 0; i < torres.length; i++) {
        const element = torres[i];
        element.innerText = "";
    }
}

function Disco(i) {
    this.disco = document.getElementById("d" + i);
    this.valor = i;
    this.elegida = false;
}

// function criaDiscos() {
//     for (let i = 0; i < 8; i++) {
//         discos[i] = new Disco(i)
//     }
//     return discos;
// }

// function Fichas(str){
//     this.fichas = [];
// }

function Torre(str, inicial){
    this.torre = document.getElementById(str);
    this.inicial = inicial;
    this.elegido = false;
    
}

function criaFichas(n) {
    for (let i = 0; i < n; i++) {
        fichasA[i] = discos[i];
    }
    return fichasA;
}

function guardaFichas(n) {
    criaFichas(n);
    for (let i = 0; i < n; i++) {
        torreA.torre.appendChild(fichasA[i]);
    }
}

// function iniciar() {
//     const hanoi = document.getElementById("hanoi");
    
//     hanoi.appendChild(torreA.torre);
//     hanoi.appendChild(torreB.torre);
//     hanoi.appendChild(torreC.torre);
    
//     criaDiscos();

    torreA.torre.addEventListener("click", selecionaA, false);
    torreB.torre.addEventListener("click", selecionaB, false);
    torreC.torre.addEventListener("click", selecionaC, false);
// }

// window.addEventListener("load", iniciar, false);


const dificuldade = document.getElementById("dificuldade");

dificuldade.addEventListener("click", prueba);
function prueba(event) {
    limpaTorre();
    const select = event.target;
    guardaFichas(dificuldade.value);
    
}

let fichaSelecionada;
let origen;
let destino;

function elige(disco) {
    if (disco.elegida) {
        fichaSelecionada = disco.disco;
    }else{
        disco.disco.className = "quieta";
    }
}

function seleciona(torre) {
    if (torre.elegido) {
        torre.torre.style.borderColor = "red";
    }else{
        torre.torre.style.borderColor = "black";
    }
}

function selecionaA() {
    torreA.elegido = !torreA.elegido;
    seleciona(torreA);
}

function selecionaB() {
    torreB.elegido = !torreB.elegido;
    seleciona(torreB);
}

function selecionaC() {
    torreC.elegido = !torreC.elegido;
    seleciona(torreC);
}

function mueve(event) {
    disco0.elegida = !disco0.elegida;
    let selecionada = event.target;
    if (disco0.elegida) {
        torreB.torre.appendChild(selecionada)
        disco0.elegida = false;
    }
    
}

function elige0() {
    disco0.elegida = !disco0.elegida;
    elige(ficha0);
}

function elige1() {
    disco1.elegida = !disco1.elegida;
    elige(ficha1);
}



ficha0.addEventListener("click", mueve, false);
ficha1.addEventListener("click", mueve, false);
ficha2.addEventListener("click", mueve, false);
ficha3.addEventListener("click", mueve, false);
ficha4.addEventListener("click", mueve, false);
ficha5.addEventListener("click", mueve, false);
ficha6.addEventListener("click", mueve, false);
ficha7.addEventListener("click", mueve, false);



// function selecionarFicha(event){
//     fichaSelecionada = fichasA[0]
//     fichaSelecionada = event.target;
//     if (fichaSelecionada.className === "disk") {
//         torreB.torre.appendChild(fichaSelecionada)
//     }
// }



// const reset = document.getElementById("reinicia");

// reset.addEventListener("click", limpaTorre);

/*****************************************************************************/

/*****************************************************************************/


// const fichas = document.getElementsByClassName("disk");




// discos[0].disco.addEventListener("click", selecionarFicha)

// const size1 = disco1.getAttribute("width");
// console.log(size1);

 





// function origenDestino(ficha) {
//     if (origen === undefined) {
//         if (ficha.length !== 0) {
//             origen = ficha;
//             origen.elegido = true;
//         }
//     }else if (origen !== undefined && destino === undefined) {
//         destino = ficha;
//         destino.elegido = true;
//         if (origen !== destino) {
//             if (condition) {
                
//             }
//         }
//     }
// }

reset.addEventListener("click", limpaTorre);



// numero de movimentos minimo
const movMin = document.getElementById("num_mov2")

movMin.innerHTML = Math.pow(2,dificuldade.value)-1; 

// certficando que o numero de movimentos comece como zero
let movimentos = 0;

// certificando que o numero exibindo de movimentos tambem seja zero
document.getElementById("num_mov1").innerHTML = 0;

// function fichaSuperior() {
//     for (let i = 0; i < fichas.length; i++) {
//         const element = fichas[i];
//         if (!(element instanceof Disco)) {
//             return element
//         }
//     }
// }
