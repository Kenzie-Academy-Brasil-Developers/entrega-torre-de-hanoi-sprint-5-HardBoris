let gana;
let ustedGana;
function victory(n) {
    gana = [];
    for (let i = n - 1; i >= 0; i--) {
        gana[i] = torreC.contains(fichas[i]);
         
    }
    
    if (gana.length === n) {
        
         ustedGana = gana.every(item => item = "true")
         if (ustedGana) {
            console.log("você venceu");
         }
        
    }
}