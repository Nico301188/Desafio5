
var cantidadDeGatos = 4;
const cara1 ="😺";
const cara2 ="😸";
const cara3 ="😹";
let cara = cara1

for (let index = 1; index <= cantidadDeGatos; index++) {
    
        if (cara ==cara1) {
            console.log(`Gato #${index}:${cara1}`)
            cara=cara2
        } else if (cara ==cara2) {
            console.log(`Gato #${index}:${cara2}`)
            cara=cara3
        }else if (cara ==cara3) {
            console.log(`Gato #${index}:${cara3}`)
            cara=cara1
        }else{

        }
}

