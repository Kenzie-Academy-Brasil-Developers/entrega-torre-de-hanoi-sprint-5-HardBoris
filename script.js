const hanoi = document.getElementById("hanoi");

function Disco(i){
    this.disco = document.createElement("div");
    this.disco.className = "disk";
    this.disco.id = "d" + i;
}

function criaFicha(n) {
    for (let i = 0; i < n; i++) {
        let ficha = new Disco(i);
        const torreA = document.getElementById("a");
        torreA.appendChild(ficha.disco);
    }
}

function limpaTorre(){
    // const delFicha = document.getElementsByClassName("disk");
    // console.log(delFicha)
    // for (let i = 0; i < delFicha.length; i++) {
    //     const element = delFicha[i];
    //     console.log(element)
    //     element.remove();
    // }
    const torres = document.getElementsByClassName("torres");
    for (let i = 0; i < torres.length; i++) {
        const element = torres[i];
        element.innerText = "";
    }
}

const dificuldade = document.getElementById("dificuldade");

dificuldade.addEventListener("click", prueba);
function prueba(event) {
    const select = event.target;
    criaFicha(dificuldade.value);
}

const reset = document.getElementById("reinicia");

reset.addEventListener("click", limpaTorre);



// numero de movimentos minimo
const movMin = document.getElementById("num_mov2")

movMin.innerHTML = Math.pow(2,dificuldade.value)-1; 

// certficando que o numero de movimentos comece como zero
let movimentos = 0;

// certificando que o numero exibindo de movimentos tambem seja zero
document.getElementById("num_mov1").innerHTML = 0;

