//? Variables
const OPTS = { crossDomain: true }
const error = new Error('Error')

const URLPais = `https://restcountries.com/v2/name/`
const BotonPais = document.querySelector('#buscarPais')
const mostrarPais = document.querySelector('#rootPais')

const URLRM = 'https://rickandmortyapi.com/api/character/'
const BotonRM = document.querySelector('#buscarPersonajeRM')
const mostrarPersonajeRM = document.querySelector('#rootRM')

const URLPoke = 'https://pokeapi.co/api/v2/pokemon/'
const BotonPoke = document.querySelector('#buscarPokemon')
const mostrarPoke = document.querySelector('#rootPoke')

const BotonNombreApellido = document.querySelector('#btnNombreApellido')
const mostrarNombreApellido = document.querySelector('#rootNombreApellido')

//? Funciones
function obtenerPais(name){
    return new Promise( (resolve, reject) => {
        $.get(`${URLPais}${name}`, OPTS, function(par){
            resolve(par)
        })
        .fail( (error) => {
            reject(error)
        })
    })
}
function obtenerPersonajeRickandMorty(per){
    return new Promise( (resolve, reject) => {
        $.get(`${URLRM}${per}`, OPTS, function(par){
            resolve(par)
        })
        .fail( (error) => {
            reject(error)
        })
    })
}
function obtenerPersonajePokemon(par){
    return new Promise( (resolve, reject) => {
        $.get(`${URLPoke}${par}`, OPTS, function(par){
            resolve(par)
        })
        .fail( (error) => {
            reject(error)
        })
    })
}

class NombreApellido {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}
NombreApellido.prototype.mostrar = function(){
    const Nombre = document.querySelector('#nombre').value
    const Apellido = document.querySelector('#apellido').value
    const Edad = parseFloat(document.querySelector('#edad').value)
    const Persona = new NombreApellido(Nombre, Apellido, Edad)
    console.log(Persona)
    const nombreCompleto = mostrarNombreApellido.innerHTML = `Hola <b>${Nombre.toUpperCase()} ${Apellido.toUpperCase()} de edad: ${Edad} ${esMayor(Edad)}</b>`
    return nombreCompleto
}

function esMayor(edad){
    let mayor
    if(edad > 18){
        mayor = 'Es Mayor de Edad'
    } else {
        mayor = 'NO Sos Mayor. Fuera'
    }
    return mayor
}

//? Procesos Asincronos
async function sincronizarPais(){
    const InputPais = await document.querySelector('#ingresarPais').value
    obtenerPais(InputPais)
    .then( (par) => {
        mostrarPais.innerHTML = `
            <p>Pais: <b>${par[0].name}</b></p>
            <p>Capital:  <b>${par[0].capital}</b></p>
            <p>Poblacion:  <b>${par[0].population}</b></p>
            <p>Region:  <b>${par[0].region}</b></p>
            <p>Codigo:  <b>${par[0].numericCode}</b></p>
            <img src = '${par[0].flag}' width = '200px' height = '200px'></img>
        `
    })
    .catch( (err) => {
        console.log(err)
})
}

async function sincronizarPersonajeRM(){
    const InputRM = await document.querySelector('#ingresarPersonajeRM').value
    obtenerPersonajeRickandMorty(InputRM)
    .then( (par) => {
        mostrarPersonajeRM.innerHTML = `
            <p>Personaje: <b>${par.name}</b></p>
            <p>Especie: <b>${par.species}</b></p>
            <p>Origen: <b>${par.origin.name}</b></p>
            <p>Estado: <b>${par.status}</b></p>
            <p>Genero: <b>${par.gender}</b></p>
            <img src = '${par.image}' width = '200px' height = '200px'></img>

        `
        
    })
    .catch( (err) => {
        console.log(err)
})
}

async function sincronizarPoke(){
    const InputPoke = await document.querySelector('#ingresarPoke').value
    obtenerPersonajePokemon(InputPoke)
    .then( (par) => {
        mostrarPoke.innerHTML = `
        <p>Nombre: <b>${par.name}</b></p>
        `
    })
    .catch( (err) => console.log(err))
}

//? Eventos
window.onload = function(){
    BotonPais.addEventListener('click', sincronizarPais)
    BotonRM.addEventListener('click', sincronizarPersonajeRM)
    BotonPoke.addEventListener('click', sincronizarPoke)
    BotonNombreApellido.addEventListener('click', NombreApellido.prototype.mostrar )
}


//! HTML
/*
<body class = 'bg-dark'>
    <div class = 'container'>
        <div class = 'row bg-white header'>
            <div class = 'col-md-9'>
                <h1>Consumir API</h1>
            </div>
            <div class = 'col-md-3'>
                <p>Proyecto por: Marco Mussa</p>
            </div>
        </div>

        <div class = 'row bg-white mt-3 p-2'>
            <div class = 'col-md-4'>
                <p>API Paises</p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Pais" aria-label="Recipient's username" aria-describedby="basic-addon2" id = 'ingresarPais'>
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" id = 'buscarPais'>Buscar</button>
                    </div>
                  </div>
            </div>
            <div class = 'col-md-8 ' id = 'rootPais'>
                
            </div>
        </div>

        <div class = 'row bg-white mt-3 p-2'>
            <div class = 'col-md-4'>
                <p>API Rick and Morty</p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="ID (Por ahora)" aria-label="Recipient's username" aria-describedby="basic-addon2" id = 'ingresarPersonajeRM'>
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" id = 'buscarPersonajeRM'>Buscar</button>
                    </div>
                  </div>
            </div>
            <div class = 'col-md-8' id = 'rootRM'>

            </div>
        </div>

        <div class = 'row bg-white mt-3 p-2'>
            <div class = 'col-md-4'>
                <p>API Pokemon</p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="ID (Por ahora)" aria-label="Recipient's username" aria-describedby="basic-addon2" id = 'ingresarPoke'>
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" id = 'buscarPokemon'>Buscar</button>
                    </div>
                  </div>
            </div>
            <div class = 'col-md-8' id = 'rootPoke'>

            </div>
        </div>

        <div class = 'row bg-white mt-3 p-2'>
            <div class = 'col-md-3'>
                <input type="text" class="form-control" placeholder="Nombre" aria-label="Recipient's username" aria-describedby="basic-addon2" id = 'nombre'>
            </div>
            <div class = 'col-md-3'>
                <input type="text" class="form-control" placeholder="Apellido" aria-label="Recipient's username" aria-describedby="basic-addon2" id = 'apellido'>
            </div>
            <div class = 'col-md-3'>
                <input type="text" class="form-control" placeholder="Edad" aria-label="Recipient's username" aria-describedby="basic-addon2" id = 'edad'>
            </div>
            <div class = 'col-md-3'>
                <button class = 'btn btn-primary' id = 'btnNombreApellido'>Click!</button>
            </div>
            <div class = 'col-md-12' id = 'rootNombreApellido'></div>
        </div>

    </div>
</body>
*/