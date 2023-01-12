console.log('moviesList.js success');

const body = document.querySelector('body')
const titulo = document.querySelector('.moviesListTitulo')

const respuesta = confirm('queres usar modo oscuro?')
if (respuesta) {
    body.style.backgroundColor = 'rgba(0,0,0, 0.7)'
    body.classList.add('fondoMoviesList')
} 

titulo.innerHTML = 'LISTA DE PELICULAS'

titulo.style.color = 'white'
titulo.style.backgroundColor ='teal'
titulo.style.padding = '20px'