console.log('index.js success'); 

/* let main = document.querySelector(".container");
let titulos = document.querySelectorAll("h2");
let parrafos = document.querySelectorAll("p");
let anclas = document.querySelectorAll("a");

main.style.display = "block";
console.log(titulos);
console.log(parrafos);
console.log(anclas);
 */

//querySelector y querySelectorAll
const qs = (element) => document.querySelector(element)
const qsa = (element) => document.querySelectorAll(element)
let main = qs('.container')
let link = qs('a')
let subtitulo = qs('h2.subtitulo')
let parrafos = qsa('p')

console.log(parrafos);



 //metodo prompt
let nombre = prompt('¿Cual es tu nombre?')



// innerHTML :permite agregar texto a un elemto que eligo por su clase
if (nombre) {
    subtitulo.innerHTML += nombre
}else{
    subtitulo.innerHTML += 'Invitado'  
}

subtitulo.style.textTransform = 'uppercase' // esto me permite poner en mayuscula tolo lo escrito en en prompt

//selecciono las etiqueta 'a' y le doy un color
link.style.color = '#E51B3E'

// metodo confirm() y agregamos clase


let respuesta = confirm('¿ desea agregar un fondo de pantalla ?')

if(respuesta){
    qs('body').classList.add('fondo')
}


for (let i = 0; i < parrafos.length; i++) {
  if (i%2 === 0) {
    parrafos[i].classList.add('destacadoPar')
  } else {
    parrafos[i].classList.add('destacadoImpar')
  }
    
}



main.style.display = 'block'