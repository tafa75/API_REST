const express = require('express');
const bodyParser = require('body-parser');
const movie = require('./movies');
const app = express();
const port = 3000;


//motor de vista

app.use(express.static('public'))

app.use('/movie/:titulo', express.static(__dirname + '/public'))


app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', './views') //donde lee para pug
app.set('view engine', 'pug') //motor de vista


// Seccion WEB
app.get('/', movie.getHome);

app.get('/movieform', movie.movieform);
app.post("/api/films", (req, res) => {
    console.log("post esta echo")
    res.redirect('/')

})

app.get('/movie/:titulo', movie.getMovie)
app.get("/edit/:movie", movie.editMovie)

// Seccion API


app.listen(3000, () => console.log('listening on port 3000'))