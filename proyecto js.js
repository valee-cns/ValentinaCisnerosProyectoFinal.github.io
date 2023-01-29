
let boton_menu = document.getElementById('boton-de-menu')
let hide = document.getElementById('barra-navegacion')
let boton_buscar = document.getElementById('buscar')

boton_menu.addEventListener('click', abrirmenu);

function abrirmenu(){
    hide.classList.add('barra-navegacion')
}

boton_buscar.addEventListener('click', cerrarmenu);

function cerrarmenu(){
    hide.classList.remove('barra-navegacion')
}


let boton_buscar2 = document.getElementById('buscar2')

boton_menu.addEventListener('click', abrirmenu);

function abrirmenu(){
    hide.classList.add('barra-navegacion')
}

boton_buscar2.addEventListener('click', cerrarmenu);

function cerrarmenu(){
    hide.classList.remove('barra-navegacion')
}

let boton_buscar3 = document.getElementById('buscar3')

boton_menu.addEventListener('click', abrirmenu);

function abrirmenu(){
    hide.classList.add('barra-navegacion')
}

boton_buscar3.addEventListener('click', cerrarmenu);

function cerrarmenu(){
    hide.classList.remove('barra-navegacion')
}

let boton_buscar4 = document.getElementById('buscar4')

boton_menu.addEventListener('click', abrirmenu);

function abrirmenu(){
    hide.classList.add('barra-navegacion')
}

boton_buscar4.addEventListener('click', cerrarmenu);

function cerrarmenu(){
    hide.classList.remove('barra-navegacion')
}

let verMas = document.getElementById('verMas')
let ocultar = document.getElementById('ocultar')
let verMenos = document.getElementById('verMenos')

verMas.addEventListener('click', mostrar);

 function mostrar(){
    ocultar.classList.add('mostrar')
 }

 verMenos.addEventListener('click', ocultamos);

 function ocultamos(){
    ocultar.classList.remove('mostrar')
 }
