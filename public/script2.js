if (document.getElementById('send') != null)
    document.getElementById('send').addEventListener('click', function (e) {


        var peliculas = []


        var nuevaPeli = {
            Title: document.getElementById('title').value,
            Director: document.getElementById('dir').value,
            genre: document.getElementById("genre").value,
            imagen: document.getElementById("imagen").value
        }
        console.log(nuevaPeli)
        if (JSON.parse(localStorage.getItem("peliculas") != null)) {
            peliculas = JSON.parse(localStorage.getItem("peliculas"));

            peliculas.push(nuevaPeli);
        } else {
            peliculas = [];
            peliculas.push(nuevaPeli);
        }

        localStorage.setItem('peliculas', JSON.stringify(peliculas));


    })

if (document.getElementById('enviar') != null)
    document.getElementById('enviar').addEventListener('click', function (e) {
        console.log('hola')
        let peliculas = []
    })
if (document.getElementById("Btn") != null)
    document.getElementById("Btn").addEventListener('click', function (e) {

        let peliculas = []


        console.log('nuevaPeli')
    })

//guardar favorito
if (document.getElementById("btnFavorito") != null)
    document.getElementById("btnFavorito").addEventListener('click', function (e) {
        console.log("hacemos click en favoritos")

        let pelicula = []


        let nuevaPelicula = {
            Title: document.getElementById('title').innerText,
            Director: document.getElementById('dir').innerText,
            imagen: document.getElementById("imagen").src,
            genre: document.getElementById("genre").innerText
        }

        if (JSON.parse(localStorage.getItem("peliculas") != null)) {
            pelicula = JSON.parse(localStorage.getItem("peliculas"));

            pelicula.push(nuevaPelicula);
        } else {
            pelicula = [];
            pelicula.push(nuevaPelicula);
        }

        localStorage.setItem('peliculas', JSON.stringify(pelicula));
        location.replace("/")

    })



//editer detailles