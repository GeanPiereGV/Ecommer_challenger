const { Console } = require('console');
var http = require('http');
var servidor = http.createServer(function(peticion, respuesta){
    respuesta.writeHead(200,{'Content-type':'text/html'});
    respuesta.write('<h3>SERVER BASICO CON NODE.JS</h3>');
    console.log('peticion web');
    respuesta.end();

})
servidor.listen(3000)
console.log('Ejecutando un server local con node.js')


const formularioFooter = document.querySelector('[data-form-footer]');
const nombreMsj = document.querySelector('#input-nombre');
const textarea = document.querySelector('#textarea');
const btnEnviar = document.querySelector('#enviar-mensaje');

const fecha = document.querySelector('#footer-fecha');


document.addEventListener('DOMContentLoaded', () => {

    btnEnviar.classList.add('btn-desactivado');
    btnEnviar.disabled = true;

    nombreMsj.addEventListener('blur', validarForm);
    textarea.addEventListener('blur', validarForm);

    formularioFooter.addEventListener('submit', enviarForm);

    const year = new Date().getFullYear();
    fecha.textContent = year;
})



function enviarForm(e) {
    e.preventDefault()

    mostrarMensaje('Mensaje enviado', 'succes');
    setTimeout(() => {
        formularioFooter.reset();
    }, 3000);
}


function validarForm(e) {

    if (e.target.value === '') {

        mostrarMensaje(`Este campo no puede estar vacío`, 'error');
        e.target.classList.add('campo-error');

    } else {
        e.target.classList.remove('campo-error');
    }

    if (nombreMsj.value != '' && textarea.value != '') {
        btnEnviar.classList.remove('btn-desactivado');
        btnEnviar.disabled = false;
    }

}




function mostrarMensaje(msj, tipo) {

    const error = document.querySelector('.contenedor-errores');
    const mensaje = document.createElement('p');

    mensaje.classList.add(tipo);
    mensaje.textContent = msj;

    error.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}