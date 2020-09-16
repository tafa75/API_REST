const fetch = require('node-fetch')

exports.getMovie = function (req, res) {
  let title = req.params.titulo
  fetch(`http://www.omdbapi.com/?t=${title}&apikey=c85e593a`)
    .then(function (response) {
      return response.json()
      let movies = response.data.Search
    })
    .then(function (data) {
      // console.log('img del perro = ', data.message);
      res.render('film', {
        title: data.Title,
        year: data.Year,
        director: data.Director,
        Poster: data.Poster,
        genre: data.Genre

      })

      // res.status (200)
      // .json(data );
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getHome = function (req, res) {
  res.render('home', {
    title: 'Hey',
    message: 'que peli estas buscando !',
  })
}

exports.movieform = (req, res) => {
  res.status(200).render('formulario', {
    titulo: 'titulo',
    director: 'director',
    genre: 'genre',
    imagen: 'Poster',
    año: 'año'
  })
}
exports.getDetail = (req, res) => {
  console.log(req);
  res.render("film.pug", {
    title: req.query.titulo,
    year: req.query.year,
    director: req.query.director,
    genre: req.query.genre,
    imagen: req.query.poster

  });
};
exports.edit = (req, res) => {
  res.render("formulario.pug", {
    Título: req.query.titulo,
    Director: req.query.director,
    Year: req.query.year,
    imagen: req.query.poster
  });
};
exports.geterror = (req, res) => {
  res.render("error", {
    mensaje: "lo siento peelicula no encontrada",
    mensaje2: 404,
  });
};

exports.editMovie = (req, res) => {
  console.log(req.query)
  res.render("formulario.pug", {
    title: req.query.title,
    dir: req.query.dir,
    genre: req.query.genre,
    urlImg: req.query.img
  })
}