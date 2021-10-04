const resposta = document.getElementById("resposta");
const hanoi = document.getElementById("hanoi");
const contador = document.getElementById("contador");

const mensaje = document.createElement("h2");
mensaje.innerText = "";
resposta.appendChild(mensaje);

const torreA = document.createElement("div");
torreA.className = "torres";
torreA.id = "a";
hanoi.appendChild(torreA);

const torreB = document.createElement("div");
torreB.className = "torres";
hanoi.appendChild(torreB);

const torreC = document.createElement("div");
torreC.className = "torres";
hanoi.appendChild(torreC);

const torres = document.getElementsByClassName("torres");

const dificultad = document.createElement("div");
dificultad.className = "guarismos";
dificultad.id = "nivel";
contador.appendChild(dificultad);

const seleccion = document.createElement("span");
seleccion.id = "seleccion"
dificultad.appendChild(seleccion);

const lblDificultad = document.createElement("label");
lblDificultad.id = "lblLevel";
lblDificultad.innerText = "Nível de Dificuldade: "
seleccion.appendChild(lblDificultad);

const level = document.createElement("select");
level.id = "level";
seleccion.appendChild(level);

const level0 = document.createElement("option");
level0.innerText = "";
level.appendChild(level0);

const level1 = document.createElement("option");
level1.innerText = "1";
level.appendChild(level1);

const level2 = document.createElement("option");
level2.innerText = "2";
level.appendChild(level2);

const level3 = document.createElement("option");
level3.innerText = "3";
level.appendChild(level3);

const level4 = document.createElement("option");
level4.innerText = "4";
level.appendChild(level4);

const level5 = document.createElement("option");
level5.innerText = "5";
level.appendChild(level5);

const level6 = document.createElement("option");
level6.innerText = "6";
level.appendChild(level6);

const level7 = document.createElement("option");
level7.innerText = "7";
level.appendChild(level7);

const level8 = document.createElement("option");
level8.innerText = "8";
level.appendChild(level8);

const counter = document.createElement("div");
counter.className = "guarismos";
counter.id = "counter";
contador.appendChild(counter);

const cuenta = document.createElement("span");
cuenta.id = "cuenta";
counter.appendChild(cuenta);

const lblCount = document.createElement("label");
lblCount.innerText = "Seus movimentos: ";
cuenta.appendChild(lblCount);

let count = document.createElement("label");
count.id = "count";
count.innerText = 0;
cuenta.appendChild(count);

const minimo = document.createElement("div");
minimo.className = "guarismos";
minimo.id = "minimo";
contador.appendChild(minimo);

const formula = document.createElement("span");
formula.id = "formula";
minimo.appendChild(formula);

const lblMini = document.createElement("label");
lblMini.innerText = "Movimentos minimos: ";
formula.appendChild(lblMini);

let mini = document.createElement("label");
mini.id = "mini";
mini.innerText = 0;
formula.appendChild(mini);