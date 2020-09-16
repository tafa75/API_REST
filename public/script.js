document.getElementById('Btn').addEventListener('click', function () {
  if (document.getElementById('texto').value.length !== 0) {
    location.replace('/movie/' + document.getElementById('texto').value)
  } else {
    alert('introduce un titulo')
  }
})

function cargar() {
  peliculas = JSON.parse(localStorage.getItem('peliculas'))
  for (i = 0; i < peliculas.length; i++) {
    //console.log(peliculas[i])
    let locUrl = `/edit/${i}?title=${peliculas[i].Title}&dir=${peliculas[i].Director}&genre=${peliculas[i].genre}&img=${peliculas[i].imagen}`;
    let peli = `<div class="peli${i}">
      <h2>
          ${peliculas[i].Title}
      </h2>
      <p class="location">${peliculas[i].Director}</p>
      <p class="bio">${peliculas[i].genre}</p><br>
      <img src="${peliculas[i].imagen}">
      <input type="button", name="borrar" value="borrar" class="button" id="borrar${i}" onclick="borrar(${i})">
      <input type="button" name="edit" value="edit" class="button" id="edit" onclick="edit('${locUrl}')">
      <input type="button" name="pelidetail" value="pelidetail" class="button" id="pelidetail(${i}) onclick="edit(${i})" ><br><br>
      
      </div>`
    document.getElementById('movies').innerHTML += peli
  }
}


cargar()


//borrar
function borrar(pos) {
  console.log('borrando localstorage. Posicion: ' + pos)

  let storage = JSON.parse(localStorage.getItem('peliculas'))
  storage.splice(pos, 1)

  localStorage.setItem('peliculas', JSON.stringify(storage))
  window.location.reload()
}

//Detail de la peli
function detalles(i) {
  let peli1 = JSON.parse(localStorage.getItem("Peliculas"));

  location.replace(
    `/film/pelidetail/${i}?titulo=${peli1[i].Title}&year=${peli1[i].Year}&director=${peli1[i].Director}&genre=${peli1[i].Genre}`
  );
}

//editar

function edit(locUrl) {
  console.log("function editFavori")
  location.replace(locUrl)
}



// function edit(e) {
//   console.log("hola tafa")
// }