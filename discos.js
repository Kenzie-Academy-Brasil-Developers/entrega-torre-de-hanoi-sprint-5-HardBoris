function Disco(i, str) {
    this.disco = document.createElement("div");
    this.disco.id = "d" + (i + 1);
    this.disco.className = str;
}

const discos = [];

function criaDiscos(){
    for (let i = 0; i < 8; i++) {
        discos[i] = new Disco(i, "disco");
    }
    return discos;
}

criaDiscos();

const fichas = [];

function criaFichas() {
    for (let i = 0; i < 8; i++) {
        fichas[i] = discos[i].disco;
    }
    return fichas;
}

criaFichas();

function dibujaFichas(n) {
    for (let i = 0; i < n; i++) {
        torreA.appendChild(fichas[i]);
    }
}

const ficha1 = fichas[0];
const ficha2 = fichas[1];
const ficha3 = fichas[2];
const ficha4 = fichas[3];
const ficha5 = fichas[4];
const ficha6 = fichas[5];
const ficha7 = fichas[6];
const ficha8 = fichas[7];

function limpiaTorre(){
    for (let i = 0; i < torres.length; i++) {
        const element = torres[i];
        element.innerText = "";
    }
}

function movimientosMinimos(n) {
    let minus = 0;
    if (n === "") {
        minus
    } else {
        minus = (2**n) - 1;
    }
    return minus;
}

level.addEventListener("click", prueba);
function prueba(event) {
    limpiaTorre();
    let select = event.target;
    let n = level.value
    dibujaFichas(n);
    mini.innerText = movimientosMinimos(n);
}
