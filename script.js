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