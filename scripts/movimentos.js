let fichaElegida;
let cuentaMovida = 1;

function mueveA() {
    mensaje.innerText = "";
    if (torreA.hasChildNodes()) {
        if (fichaElegida === undefined) {
            fichaElegida = torreA.lastChild;
        } else if (fichaElegida.clientWidth < torreA.lastChild.clientWidth) {
            recibe(torreA);
        } else if (fichaElegida.clientWidth === torreA.lastChild.clientWidth) {
            mensaje.innerText = "escolha outra torre";
        } else if (fichaElegida.clientWidth > torreA.lastChild.clientWidth) {
            mensaje.innerText = "movimento ilegal!\nescolha outra torre";
        }
    } else if (fichaElegida === undefined) {
        mensaje.innerText = "deve escolher uma ficha";
    } else {
        recibe(torreA);
    }
    contenidoA = document.getElementsByClassName("disco");
}

function mueveB() {
    mensaje.innerText = "";
    if (torreB.hasChildNodes()) {
        if (fichaElegida === undefined) {
            fichaElegida = torreB.lastChild;
        } else if (fichaElegida.clientWidth < torreB.lastChild.clientWidth) {
            recibe(torreB);
        } else if (fichaElegida.clientWidth === torreB.lastChild.clientWidth) {
            mensaje.innerText = "escolha outra torre";
        } else if (fichaElegida.clientWidth > torreB.lastChild.clientWidth) {
            mensaje.innerText = "movimento ilegal!\nescolha outra torre";
        }
    } else if (fichaElegida === undefined) {
        mensaje.innerText = "deve escolher uma ficha";
    } else {
        recibe(torreB);
    }
    contenidoB = document.getElementsByClassName("disco");
}

function mueveC() {
    mensaje.innerText = "";
    if (torreC.hasChildNodes()) {
        if (fichaElegida === undefined) {
            fichaElegida = torreC.lastChild;
        } else if (fichaElegida.clientWidth < torreC.lastChild.clientWidth) {
            recibe(torreC);
            victory(3);
        } else if (fichaElegida.clientWidth === torreC.lastChild.clientWidth) {
            mensaje.innerText = "escolha outra torre";
        } else if (fichaElegida.clientWidth > torreC.lastChild.clientWidth) {
            mensaje.innerText = "movimento ilegal!\nescolha outra torre";
        }
    } else if (fichaElegida === undefined) {
        mensaje.innerText = "deve escolher uma ficha";
    } else {
        recibe(torreC);
    }
    
}

function recibe(torre) {
    torre.appendChild(fichaElegida);
    fichaElegida = undefined;
    count.innerText = cuentaMovida++;
}

torreA.addEventListener("click", mueveA);
torreB.addEventListener("click", mueveB);
torreC.addEventListener("click", mueveC);