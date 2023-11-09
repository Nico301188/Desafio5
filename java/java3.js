
var cantidadDeGatos = 10;
var cantidadDePasos = 3;
const gato1 ="🐈";
const gato2 ="🐈‍⬛";
let cara = gato1

const pasos = "🐾"
let totPasos

for (let index = 1; index <= cantidadDeGatos; index++) {
    totPasos=pasos
    if (cantidadDePasos != "") {
        for (let index = 1; index < cantidadDePasos; index++) {
            totPasos = totPasos + pasos
        }
    }
        if (cara ==gato1) {
            console.log(`Gato #${index}:${gato1} ${totPasos}`)
            cara=gato2
        } else if (cara ==gato2) {
            console.log(`Gato #${index}:${gato2} ${totPasos}`)
            cara=gato1
        }else{

        }
}

