import Ciclista from './js/ciclist.js'

const ciclistas = []

/*let ciclista = new Ciclista();

console.log(ciclista)*/

function llenarArregloCiclistas() {
    let juan = new Ciclista()
    juan.name = "Diego Gomez"
    registrarTiempos(juan)

    let pedro = new Ciclista()
    pedro.name = "Carolina Betancur"
    registrarTiempos(pedro)
    
    ciclistas.push(juan)
    ciclistas.push(pedro)
}

function registrarTiempos(c) {
    for (let i = 1; i <= 5; i++) {
        c.registrarTiempo('carrera' + i, Math.floor(Math.random() * 100))
    }
}

window.addEventListener('load', e => {
    llenarArregloCiclistas()
    console.log(ciclistas)
})

//console.log("La suma es: " + sumar(5, 7))

/*function llenarArregloCiclistas(){
    console.log("Llenando arreglo")
}*/