import Ciclista from './js/ciclist.js'

let ciclistas = []
var modalCiclista

/*let ciclista = new Ciclista();

console.log(ciclista)*/

function llenarArregloCiclistas() {
    /*let juan = new Ciclista()
    juan.name = "Diego Gomez"
    registrarTiempos(juan)

    let pedro = new Ciclista()
    pedro.name = "Carolina Betancur"
    registrarTiempos(pedro)

    let camila = new Ciclista()
    camila.name = "Armando Pinto"
    registrarTiempos(camila)
    
    ciclistas.push(juan)
    ciclistas.push(pedro)
    ciclistas.push(camila)*/

    if (localStorage.getItem('ciclistas'))
        ciclistas = JSON.parse(localStorage.getItem('ciclistas')).map(c =>
            Object.setPrototypeOf(c, Ciclista.prototype)    
        )
}

/*function registrarTiempos(c) {
    for (let i = 1; i <= 5; i++) {
        c.registrarTiempo('carrera' + i, Math.floor(Math.random() * 100))
    }
}*/

function pintarTablaCorredores (arregloCiclistas) {
    document.querySelector("#tbl-ciclistas tbody").innerHTML = ""
    arregloCiclistas.forEach((Ciclista, i) => {
        document.querySelector("#tbl-ciclistas tbody").innerHTML += `<tr>
                                                                        <td>${i+1}</td>
                                                                        <td>${Ciclista.name}</td>
                                                                        <td>${Ciclista.registroTiempos.carrera1}</td>
                                                                        <td>${Ciclista.registroTiempos.carrera2}</td>
                                                                        <td>${Ciclista.registroTiempos.carrera3}</td>
                                                                        <td>${Ciclista.registroTiempos.carrera4}</td>
                                                                        <td>${Ciclista.registroTiempos.carrera5}</td>
                                                                        <td><a href="#">Ver</a></td>
                                                                    </tr>`
    })
}

window.addEventListener('load', e => {
    llenarArregloCiclistas()
    pintarTablaCorredores(ciclistas)

    modalCiclista = new bootstrap.Modal(
        document.getElementById('modal-adicionar-ciclista'),
        {
            Keyboard: false
        }
    )
})

document.querySelector('#frm-ciclista').addEventListener('submit', e => {
    if (document.querySelector('#frm-ciclista').checkValidity()){
        let corredor = new Ciclista()
        corredor.name = document.querySelector('#nombre_ciclista').value
        corredor.registroTiempos.carrera1 = document.querySelector('#carrera_1_corredor').value
        corredor.registroTiempos.carrera2 = document.querySelector('#carrera_2_corredor').value
        corredor.registroTiempos.carrera3 = document.querySelector('#carrera_3_corredor').value
        corredor.registroTiempos.carrera4 = document.querySelector('#carrera_4_corredor').value
        corredor.registroTiempos.carrera5 = document.querySelector('#carrera_5_corredor').value

        ciclistas.push(corredor)

        pintarTablaCorredores(ciclistas)

        modalCiclista.toggle()
        localStorage.setItem('ciclistas', JSON.stringify(ciclistas))
        
    }else{
        console.log('Error!!');
    }
    
    e.preventDefault()
})

document.querySelector("#frm-acicionar-ciclista").addEventListener('submit', e => {
    e.preventDefault()
})

document.querySelector('#txt-buscar-ciclistas').addEventListener('keyup', e => {
    let parametroBusqueda = document.querySelector('#txt-buscar-ciclistas').value

    let arregloBusqueda = ciclistas.filter(Ciclista => {
        return Ciclista.name.toLocaleLowerCase().indexOf(parametroBusqueda.toLocaleLowerCase()) != -1
    })

    pintarTablaCorredores(arregloBusqueda)
})

//console.log("La suma es: " + sumar(5, 7))

/*function llenarArregloCiclistas(){
    console.log("Llenando arreglo")
}*/