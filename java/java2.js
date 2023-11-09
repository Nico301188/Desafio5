var cantidadDeGatos = 10
var cantidadDePasos = 4

const pasos = "🐾"
let totPasos

for (let index = 1; index <= cantidadDeGatos; index++) {
    totPasos=pasos

    if (cantidadDePasos != "") {
        for (let index = 1; index < cantidadDePasos; index++) {
            totPasos = totPasos + pasos
        }
    }
    console.log(`Gato #${index}:🐈 ${totPasos}`)

}

